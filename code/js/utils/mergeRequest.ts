interface addOpts {
  searchKey: string; // 用哪个键搜
  valueKey: string; // 从哪个键取值
  resKeys: string[]; // 返回字段集合
  query?: AnyObject; // 附加参数
  resName?: string; // 回填字段
  callback?: isFnction; // 自定义处理方法
}
interface addPromiseOpts extends addOpts {
  getFn: isFnction;
}

export default class mergeRequest {
  souceData: any;
  requestOpts: addOpts[];
  promiseArr: any[];
  constructor(data) {
    this.souceData = data;
    this.requestOpts = [];
    this.promiseArr = [];
  }

  add(opts: addOpts) {
    this.requestOpts.push(opts);
    return this;
  }

  addPromise(opts: addPromiseOpts) {
    this.promiseArr.push(opts);
    return this;
  }

  async send(request) {
    // 源数据有问题则直接返回
    if (!Array.isArray(this.souceData)) return this.souceData;
    const requestArr = this.setAffair();
    const promissArr = this.setPromise();

    // 没有有效事务则直接返回
    if (!requestArr.length) return this.souceData;

    const [resAll, ...promiseRes] = await Promise.all([request.get("", requestArr), ...promissArr]);
    this.analysisPromise(promiseRes);

    let data = this.requestOpts.length === 1 ? [resAll] : resAll.data;
    this.requestOpts.forEach((info, index) => {
      const { searchKey, valueKey, resName, callback } = info;
      const res = data[index];
      let resMap = new Map();
      if (res && Array.isArray(res.data)) {
        res.data.forEach((item) => {
          const arr = resMap.get(item[searchKey]) || [];
          resMap.set(item[searchKey], arr.concat(item));
        });
      }
      // 如果自定义处理方法则抛出结果
      if (callback) {
        callback(this.souceData, resMap, res);
        return;
      }

      if (resName) {
        this.souceData.forEach((item) => {
          const extInfo = resMap.get(item[valueKey]);
          item[resName] = extInfo;
        });
      } else {
        this.souceData.forEach((item) => {
          const extInfo = resMap.get(item[valueKey]) || [];
          item = Object.assign(item, extInfo[0]);
        });
      }
    });
    this.requestOpts = [];
    this.promiseArr = [];
    return this.souceData;
  }

  get() {
    return this.souceData;
  }

  // ids转字符串并去重
  private getIds(data: any[], key: string) {
    if (!Array.isArray(data)) return;
    const ids = data.map((item) => item[key]).filter((item) => !!item && item !== "0");
    return [...new Set(ids)].join(",");
  }
  // 组合并发事务
  private setAffair() {
    return this.requestOpts.map((item) => {
      const { searchKey, valueKey, resKeys = [], query } = item;
      const ids = this.getIds(this.souceData, valueKey);
      return {
        [`${searchKey}_$_in`]: ids || "-1",
        resKeys: [...resKeys, searchKey],
        ...query,
      };
    });
  }
  // 组合并发请求
  private setPromise() {
    return this.promiseArr.map((item) => {
      const { searchKey, valueKey, query, getFn } = item;
      const ids = this.getIds(this.souceData, valueKey);
      return getFn({
        [`${searchKey}_$_in`]: ids || "-1",
        ...query,
      });
    });
  }
  private analysisPromise(resArr) {
    this.promiseArr.forEach((info, index) => {
      const { searchKey, valueKey, resName } = info;
      const res = resArr[index];
      let resMap = new Map();
      if (res && Array.isArray(res.data)) {
        res.data.forEach((item) => {
          const arr = resMap.get(item[searchKey]) || [];
          resMap.set(item[searchKey], arr.concat(item));
        });
      }
      if (resName) {
        this.souceData.forEach((item) => {
          const extInfo = resMap.get(item[valueKey]);
          item[resName] = extInfo;
        });
      } else {
        this.souceData.forEach((item) => {
          const extInfo = resMap.get(item[valueKey]) || [];
          item = Object.assign(item, extInfo[0]);
        });
      }
    });
  }
}
