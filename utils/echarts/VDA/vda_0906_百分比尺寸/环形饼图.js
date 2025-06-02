var data = [
  [
    "新柜面签约数",
    "ITM签约数",
    "微信签约数",
    "个人网上支付签约数",
    "个人网银签约数"
  ],
  [310460, 177479, 106246, 53738, 33456]
];

option = {
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
        {
          name: data[0][0],
          value: data[1][0]
        },
        {
          name: data[0][1],
          value: data[1][1]
        },
        {
          name: data[0][2],
          value: data[1][2]
        },
        {
          name: data[0][3],
          value: data[1][3]
        },
        {
          name: data[0][4],
          value: data[1][4]
        }
      ]
    }
  ],
  legend: {
    // 图例说明
    orient: "vertical",
    left: "60%",
    y: "center",
    // itemGap: 20,
    // formatter: "{a|{name}} {b|{b}}这段用默认样式{x|{d}}",
    // formatter: "{a|{name}} {b|{b}}这段用默认样式{x|{d}}",

    textStyle: {
      color: "#accfff",
      fontSize: 14,
      lineHeight: 20
      //   rich: {
      //     a: {
      //       color: "red",
      //       lineHeight: 10
      //     },
      //     b: {
      //       height: 40
      //     },
      //     x: {
      //       fontSize: 18,
      //       fontFamily: "Microsoft YaHei",
      //       borderColor: "#f00",
      //       borderRadius: 4
      //     }
      //   }
    },
    itemWidth: 14,
    itemHeight: 14
  }
};
