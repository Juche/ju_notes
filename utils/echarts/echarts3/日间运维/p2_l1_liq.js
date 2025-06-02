var value = 0.6;
var data = [value];

option = {
  backgroundColor: "#0A1432",
  title: {
    text: (value * 100).toFixed(0) + "{a|%}",
    textStyle: {
      fontSize: 50,
      fontFamily: "Microsoft Yahei",
      fontWeight: "normal",
      color: "#fff",
      rich: {
        a: {
          fontSize: 28,
        },
      },
    },
    x: "center",
    y: "35%",
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
            font: "24px Microsoft YaHei",
          },
        },
      ],
    },
  ],
  series: [
    {
      type: "liquidFill",
      radius: "80%",
      center: ["50%", "50%"],
      // shape: 'diamond',
      data: data,
      backgroundStyle: {
        color: "#1a3d6d",
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 2,
          borderColor: "#0E51A1",
          // borderColor: {
          //     type: "linear",
          //     x: 0,
          //     y: 0,
          //     x2: 0,
          //     y2: 1,
          //     colorStops: [{
          //             offset: 0,
          //             color: "rgba(69, 73, 240, 0)",
          //         },
          //         {
          //             offset: 0.5,
          //             color: "rgba(69, 73, 240, .25)",
          //         },
          //         {
          //             offset: 1,
          //             color: "rgba(69, 73, 240, 1)",
          //         },
          //     ],
          //     globalCoord: false,
          // },
          shadowBlur: 10,
          shadowColor: "#000",
        },
      },
      // color: ['#0581fd', '#90c4ff', '#25498a'],
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: "rgba(58, 71, 212, 0)",
          },
          {
            offset: 0.5,
            color: "rgba(31, 222, 225, .2)",
          },
          {
            offset: 0,
            color: "rgba(31, 222, 225, 1)",
          },
        ],
        globalCoord: false,
      },
      label: {
        normal: {
          formatter: "",
        },
      },
    },
  ],
};
