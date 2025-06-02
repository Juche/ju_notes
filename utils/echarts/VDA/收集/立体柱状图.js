let barEchartData ={
  maxArr: [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000],
  valueArr: [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654],
  cityArr: ['德州', '德城区', '陵城区', '禹城市', '乐陵市', '临邑县', '平原县', '夏津县', '武城县', '庆云县', '宁津县', '齐河县']
}
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 9, shape.y - 9];
    const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx
      .moveTo(c0[0], c0[1])
      .lineTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .closePath();
  },
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
    const c4 = [shape.x + 18, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 18, shape.y - 9];
    const c3 = [shape.x + 9, shape.y - 18];
    const c4 = [shape.x - 9, shape.y - 9];
    ctx
      .moveTo(c1[0], c1[1])
      .lineTo(c2[0], c2[1])
      .lineTo(c3[0], c3[1])
      .lineTo(c4[0], c4[1])
      .closePath();
  },
});
echarts.graphic.registerShape("CubeLeft", CubeLeft);
echarts.graphic.registerShape("CubeRight", CubeRight);
echarts.graphic.registerShape("CubeTop", CubeTop);

option = {
  grid: {
    left: 20,
    right: 40,
    bottom: "10%",
    top: 57,
    containLabel: true,
  },
  tooltip: {
    trigger: "item",
    confine: false,
    position: "top",
    textStyle: {
      fontSize: 12,
    },
    // extraCssText: 'box-shadow: 0 0 20px #00C7FF inset',
    // backgroundColor: 'rgba(0,155,206,0.5)',
    backgroundColor: "transparent",
    formatter: function (params) {
      console.log(params);
      return `<div class="tooltip">${params.value}</div>`;
    },
    extraCssText: "box-shadow: 0 0 20px #00C7FF inset;",
  },
  xAxis: {
    type: "category",

    data: barEchartData.cityArr,
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    offset: 20,
    axisTick: {
      show: false,
      length: 9,
      alignWithLabel: true,
      lineStyle: {
        color: "#7DFFFD",
      },
    },
    axisLabel: {
      fontSize: 12,
    },
  },
  yAxis: {
    type: "value",
    splitNumber: 4,
    min: 0,
    axisLine: {
      show: false,
      lineStyle: {
        color: "white",
      },
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      fontSize: 14,
    },
    boundaryGap: ["10%", "10%"],
  },
  series: [
    //     {
    //     type: 'custom',
    //     renderItem: function(params, api) {
    //         const location = api.coord([api.value(0), api.value(1)])
    //         return {
    //             type: 'group',
    //             children: [{
    //                 type: 'CubeLeft',
    //                 shape: {
    //                     api,
    //                     xValue: api.value(0),
    //                     yValue: api.value(1),
    //                     x: location[0],
    //                     y: location[1],
    //                     xAxisPoint: api.coord([api.value(0), 0])
    //                 },
    //                 style: {
    //                     fill: 'rgba(7,29,97,.6)'
    //                 }
    //             }, {
    //                 type: 'CubeRight',
    //                 shape: {
    //                     api,
    //                     xValue: api.value(0),
    //                     yValue: api.value(1),
    //                     x: location[0],
    //                     y: location[1],
    //                     xAxisPoint: api.coord([api.value(0), 0])
    //                 },
    //                 style: {
    //                     fill: 'rgba(10,35,108,.7)'
    //                 }
    //             }, {
    //                 type: 'CubeTop',
    //                 shape: {
    //                     api,
    //                     xValue: api.value(0),
    //                     yValue: api.value(1),
    //                     x: location[0],
    //                     y: location[1],
    //                     xAxisPoint: api.coord([api.value(0), 0])
    //                 },
    //                 style: {
    //                     fill: 'rgba(11,42,106,.8)'
    //                 }
    //             }]
    //         }
    //     },
    //     data: barEchartData.maxArr
    // },
    {
      type: "custom",
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: "group",
          children: [
            {
              type: "CubeLeft",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#49BEE5",
              },
            },
            {
              type: "CubeRight",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#49BEE5",
              },
            },
            {
              type: "CubeTop",
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: "#49BEE5",
              },
            },
          ],
        };
      },
      data: barEchartData.valueArr,
    },
  ],
};
