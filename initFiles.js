import { stdin, stdout } from 'node:process';
import { appendFile, writeFile, readFileSync } from 'node:fs';
import { mkdir, readFile } from 'node:fs/promises';

/**
 * 交互式获取配置数据
 * [x] filePath 目标文件夹
 * [x] fileList 文件列表
 * [x] fileOrder 文件名是否添加序号
 * [x] fileType 文件类型(后缀)
 * [x] initCtt 初始化内容
 */

stdout.write(`\x1b[33m请输入批量创建文件的配置文件(目录+完整文件名): \x1b[32;4;1m\t`);
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', async (data) => {
  stdin.pause();
  console.log('\x1b[33;24m输入的内容是：\x1b[102;1m' + data.trim() + '\x1b[0m');

  const file = data.trim();
  try {
    const ctt = await readFile(file, { encoding: 'utf8', withFileTypes: true });
    const { filePath, fileList, fileOrder, fileType, initCtt } = JSON.parse(ctt);
    // console.log(`🚀 ~ stdin.on ~ filePath`, filePath);
    // console.log(`🚀 ~ stdin.on ~ fileList`, fileList);
    // console.log(`🚀 ~ stdin.on ~ fileOrder`, fileOrder);
    // console.log(`🚀 ~ stdin.on ~ fileType`, fileType);
    // console.log(`🚀 ~ stdin.on ~ initCtt`, initCtt);

    try {
      const path = await mkdir(filePath, { recursive: true });
      const msg = path ? `创建文件夹 ${path}` : '目标文件夹已存在';
      console.log(msg);
    } catch (err) {
      console.error(err.message);
    }

    for (const key in fileList) {
      const prefix = fileOrder ? `${Number(key) + 1}. ` : '';
      const name = fileList[key];
      const fileName = `${prefix}${name}.${fileType}`;
      const comment = initCtt.replace('$NAME', name);

      // console.log(`🚀 ~ stdin.on ~ fileName`, fileName);
      // console.log(`🚀 ~ stdin.on ~ comment`, comment);

      appendFile(`${filePath}/${fileName}`, comment, (err) => {
        err && console.log(`🚀 ~ appendFile ~ err`, err);
      }); // 无则创建,有则追加

      // writeFile(fileName, comment, (err) => {}); // 无则创建,有则覆盖
    }
  } catch (err) {
    console.log(`🚀 ~ stdin.on ~ err`, err);
  }
});
