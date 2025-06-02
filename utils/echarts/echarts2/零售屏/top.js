var showData = {
  index: 1,
  name: "吉安",
  value: 537305,
  max: 600000,
  unit: "万"
};

var showDataIndex = showData.index;
var showDataName = showData.name;
var showDataValue = showData.value;
var showDataMax = showData.max;
var showDataUnit = showData.unit;
var showDataRate = showData.value / showData.max;

option = {
//   backgroundColor: "#061A42",
  color: ["#61A8FF"],
  grid: {
    top: "10px",
    right: "10px",
    bottom: "10px",
    left: "10px",
    containLabel: true
  },
  xAxis: [
    {
      show: false
    },
    {
      show: false
    }
  ],
  yAxis: {
    type: "category",
    axisLabel: {
      show: false //让Y轴数据不显示
    },
    itemStyle: {},
    axisTick: {
      show: false //隐藏Y轴刻度
    },
    axisLine: {
      show: false //隐藏Y轴线段
    },
    data: showDataName
  },
  series: [
    {
      show: true,
      type: "bar",
      barGap: "-100%",
      barWidth: "5", //统计条宽度
      itemStyle: {
        normal: {
          barBorderRadius: 2,
          color: "#4C68B3"
        }
      },
      z: 1,
      data: [1]
    },
    {
      show: true,
      type: "bar",
      barGap: "-100%",
      barWidth: "5", //统计条宽度
      itemStyle: {
        normal: {
          barBorderRadius: 2,
          color: {
            type: "bar",
            colorStops: [
              {
                offset: 0,
                color: "rgba(28,126,255,1)" // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(92,185,255,1)" // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          }
        }
      },
      max: 1,
      label: {
        normal: {
          show: false,
          textStyle: {
            color: "#fff"
          },
          position: "inside",
          formatter: function(data) {
            return (showDataRate * 100).toFixed(1) + "%";
          }
        }
      },
      labelLine: {
        show: false
      },
      z: 2,
      data: [showDataRate]
    },
    {
      show: true,
      type: "bar",
      xAxisIndex: 1,
      barGap: "-100%",
      barWidth: "5",
      itemStyle: {
        normal: {
          color: "rgba(22,203,115,0.05)"
        }
      },
      label: {
        normal: {
          show: true,
          position: [0, "-20"],
          rich: {
            white: {
              color: "#CCE0FF",
              fontSize: 14
            },
            transparent: {
                width: 30
            }
          },
          formatter: function(data) {
            return (
              "{white|" +
              showDataIndex +
              "  " +
              showDataName +
              "}" +
              "{transparent|}" +
              "{white|" +
              showDataValue +
              "}{white|" +
              showDataUnit +
              "}"
            );
          }
        }
      },
      data: [showDataValue]
    }
  ]
};
