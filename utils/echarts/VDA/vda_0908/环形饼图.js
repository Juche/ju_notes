// ide 数据篮子初始化 option (带初始假数据)

var option =
// xxxOption
{
  backgroundColor: "#040d2d",
  color: ["#d8a613", "#8fc736", "#01b3cc", "#0177d4", "#394bd0"],
  //   tooltip: {
  //     trigger: "item",
  //     formatter: "{b} :<br/> {c} ({d}%)"
  //   },
  grid: [
    {
      left: "10%",
      top: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true
    }
  ],
  series: [
    {
      name: "环形比例分割图",
      type: "pie",
      radius: ["36%", "50%"], //设置饼图大小
      center: ["30%", "50%"], //设置饼图位置
      zlevel: 1,
      label: {
        normal: {
          show: false,
          position: "center",
          formatter: ["{value|{d}%}", "{name|{b}}"].join("\n"),
          rich: {
            value: {
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
              lineHeight: 24
            },
            name: {
              fontSize: 16,
              color: "#accfff",
              lineHeight: 24
            }
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "16",
            fontWeight: "bold"
          }
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: "#040d2d"
        }
      },
      data: [
        { name: "新柜面签约数", value: 310460 },
        { name: "ITM签约数", value: 177479 },
        { name: "微信签约数", value: 106246 }
      ]
    }
  ],
  legend: {
    // 图例说明
    orient: "vertical",
    left: "60%",
    y: "center",
    textStyle: {
      color: "#accfff",
      fontSize: 14,
      lineHeight: 20
    },
    itemWidth: 14,
    itemHeight: 14
  }
}

// 对请求数据处理 && 更新 option 示例

// 注意把 option 替换为数据篮子对应的数据 ctx.xxxOption
// 模拟请求过程
setTimeout(() => {
  // 假想的原始数据
  var data = [
    { name: "新柜面签约数", value: 310460 },
    { name: "ITM签约数", value: 177479 },
    { name: "微信签约数", value: 106246 },
    { name: "个人网上支付签约数", value: 53738 },
    { name: "个人网银签约数", value: 33456 }
  ];

  option.series[0].data = data;

  // myChart.setOption(option);
}, 2000);
