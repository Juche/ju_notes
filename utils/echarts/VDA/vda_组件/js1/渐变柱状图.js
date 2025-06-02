// ide 数据篮子初始化 option (带初始假数据)

var option =
// xxxOption
{
  width: "90%",
  backgroundColor: "#04113a",
  grid: {
    left: "5%",
    top: "5%",
    bottom: "5%"
  },
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow"
    },
    formatter: "{b}：{c}",
    textStyle: {
      fontSize: "20"
    }
  },
  xAxis: {
    type: "value",
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: "category",
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    data: [
      "乐原道支行",
      "南京湖南路支行",
      "深圳科技园支行"
    ]
  },
  series: [
    {
      barWidth: 8,
      z: 10,
      itemStyle: {
        color: new (this.$echarts || echarts).graphic.LinearGradient(
          0,
          0,
          1,
          0,
          [
            {
              offset: 0,
              color: "rgba(255,128,91,1)"
            },
            {
              offset: 0.7,
              color: "rgba(255,227,122,1)"
            }
          ]
        ),
        barBorderRadius: 15
      },
      label: {
        show: true,
        fontSize: 16,
        // distance: 10,
        // position: [0, "-30px"],
        // position: "top",
        // formatter: "{b}",
        position: ["150", "-24px"],
        formatter: "{c}分钟",
        // offset: [0, -10],
        color: "rgba(239,254,255,1)"
      },
      type: "bar",
      data: [27, 34, 49]
    },
    {
      type: "bar",
      barGap: "-100%",
      barWidth: 8,
      animation: false,
      z: -1,
      itemStyle: {
        color: "#2f3b4e",
        barBorderRadius: 15
      },
      label: {
        show: true,
        // position: "top",
        fontSize: 16,
        // lineHeight: 50,
        // position: ["50%", "-30px"],
        position: [0, "-24px"],
        color: "rgba(172,207,255,1)",
        formatter: "{b}"
        // formatter: function(param) {
        //   for (var i = 0; i < data.length; i++) {
        //     if (param.name == data[i].name) {
        //       return data[i].value + " 分钟";
        //     }
        //   }
        // }
      },
      data: [55, 55, 55]
    }
  ]
}

// 对请求数据处理 && 更新 option 示例
// 假想的原始数据

var data = [
  {
    name: "乐原道支行",
    value: 27
  },
  {
    name: "南京湖南路支行",
    value: 34
  },
  {
    name: "深圳红岭支行",
    value: 35
  },
  {
    name: "成都武侯支行",
    value: 42
  },
  {
    name: "深圳科技园支行",
    value: 49
  }
]

// created() {}

var maxVal = 0; // 找到最大值
var nameData = []; // bar 标题
var valueData = []; // bar 数据进度条
var indicateData; // bar 参考进度条

ctx.data.forEach(function(item) {
  maxVal = item.value > maxVal ? item.value : maxVal;
  nameData.push(item.name);
  valueData.push(item.value);
});

indicateData = ctx.data.map(function() {
  return maxVal * 1.1;
});

// bar 标题
ctx.option.yAxis.data = nameData;
// bar 数据进度条
ctx.option.series[0].data = valueData;
// bar 参考进度条
ctx.option.series[1].data = indicateData;


var myChart = echarts.init(document.getElementById("main"));
myChart.setOption(option);
