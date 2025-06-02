/**
 * ## 自定义组件 ##
 * name: liquidFill_rhombus
 * desc: 水形图(菱形)
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {
  ctx.showData -= 0.1;

  console.log("ctx.showData.length: ", ctx.showData.length);

  if (ctx.showData == 0.5) {
    clearInterval(timer);
  }
}, 2000);

// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData
0.8;

// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var value = ctx.showData;
var data = [value, value, value];

var option = {
  // backgroundColor: '#212121',
  title: {
    text: (value * 100).toFixed(0) + "{a|%}",
    textStyle: {
      fontSize: 50,
      fontFamily: "Microsoft Yahei",
      fontWeight: "normal",
      color: "#fff",
      rich: {
        a: {
          fontSize: 28
        }
      }
    },
    x: "center",
    y: "35%"
  },
  graphic: [
    {
      type: "group",
      left: "center",
      top: "60%",
      children: [
        {
          type: "text",
          z: 100,
          left: "10",
          top: "middle",
          style: {
            fill: "#fff",
            text: "五星",
            font: "24px Microsoft YaHei"
          }
        }
      ]
    }
  ],
  series: [
    {
      type: "liquidFill",
      radius: "80%",
      center: ["50%", "50%"],
      shape: "diamond",
      data: data,
      backgroundStyle: {
        color: "#212121"
      },
      outline: {
        borderDistance: 4,
        itemStyle: {
          borderWidth: 5,
          borderColor: "#25498a",
          shadowBlur: 0
        }
      },
      color: ["#0581fd", "#90c4ff", "#25498a"],
      label: {
        normal: {
          formatter: ""
        }
      }
    }
  ]
};

return option;
