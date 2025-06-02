let showData = {
  value: 0.66,
  text: '厦门(电信)'
};

let ctx = this;

let showData = ctx.showData;

let option = {
//   backgroundColor: "#0A1432",
  title: {
    text: (showData.value * 100).toFixed(0) + "{a|%}",
    textStyle: {
      fontSize: 32,
      fontFamily: "Microsoft Yahei",
      fontWeight: "normal",
      color: "#fff",
      rich: {
        a: {
          fontSize: 24,
        },
      },
    },
    x: "center",
    y: "25%",
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
            text: showData.text,
            font: "14px Microsoft YaHei",
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
      data: [showData.value],
      backgroundStyle: {
        color: "#1a3d6d",
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 2,
          borderColor: "#0E51A1",
          shadowBlur: 10,
          shadowColor: "#000",
        },
      },
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

return option;
