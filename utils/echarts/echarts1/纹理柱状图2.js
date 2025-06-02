let colorSet = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857"];
let textColor = "#fff";
option = {
  backgroundColor: "#0e3573",
  color: colorSet,
  title: {
    subtext: "单位: 万户",
    padding: [0, 0, 0, 30],
    subtextStyle: {
      color: "#fff",
      fontSize: 16,
      align: "right",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    top: "50",
    right: "30",
    bottom: "10",
    left: "30",
    containLabel: true,
  },
  legend: {
    right: "3%",
    itemGap: 30,
    itemWidth: 25,
    itemHeight: 12,
    icon: "roundRect",
    textStyle: {
      fontSize: 15,
      color: textColor,
    },
    data: ["正常账户", "有效账户"],
  },
  xAxis: {
    type: "category",
    // boundaryGap: false,
    textStyle: {
      color: textColor,
    },
    axisLine: {
      lineStyle: {
        color: textColor,
      },
    },
    axisTick: {
      show: 0,
    },
    data: ["对公", "对私"],
  },
  yAxis: {
    type: "value",
    // axisLabel: {
    //   formatter: "{value} 户",
    // },
    axisLine: {
      lineStyle: {
        color: textColor,
      },
    },
    splitLine: {
      lineStyle: {
        color: textColor,
        opacity: 0.8,
        type: "solid",
        width: 0.5,
      },
    },
  },
  series: [
    {
      name: "正常账户",
      type: "bar",
      barWidth: 30,
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#dba620",
            },
            {
              offset: 1,
              color: "#fbe468",
            },
          ]),
        },
      },
      data: [11, 11],
    },
    {
      name: "有效账户",
      type: "bar",
      barWidth: 30,
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#2276e8",
            },
            {
              offset: 1,
              color: "#41d9fe",
            },
          ]),
        },
      },
      //barGap:'100%', //symbolRepeat:true, //symbolMargin:-1, //symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAADECAYAAABDTnUVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAUDSURBVHhe7ZwxqmRBEMP+neb+Z9uNDC9w4nJgGiRwWrSewoH5+zfm9/tVex3ndBkhxzinywg5xjldRsgxzukyQo5xTpcRcoxzuoyQY5zTZYQc45wuI+QY53QZIcc4p8sIOcY5XUbIMc7pMkKOcU6XEXKMc7qMkGOc02WEHOOcLqtDuqPJXsc5JWvRHUKWOKdkLbpDyBLnlKxFdwhZ4pyStegOIUucU7IW3SFkiXNK1qI7hCxxTsladIeQJc4pWYvuELLEOSVr0R1CljinZC26Q8gS55SsRXcIWeKckrXoDiFLnFOyFt0hZIlzStaiO4QscU7JWnSHkCXOKVmL7vx9j172Os4p2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9o/5hec33o172OvIg5OPIg5CPIw9CPo48CPk48iDk48iDkI8jD0I+jjwI+TjyIOTjyIOQjyMPQj6OPAj5OPIg5OPIg5CPIw9CPo485iG/H/Wy13FOlxFyjHO6jJBjnNNlhBzjnC4j5BjndBkhxzinywg5xjldRsgxzukyQo5xTpcRcoxzuoyQY5zTZYQc45wuI+QY53QZIcc4p8sIOcY5XUbIMc7psjqkO5rsdZxTshbdIWSJc0rWojuELHFOyVp0h5AlzilZi+4QssQ5JWvRHUKWOKdkLbpDyBLnlKxFdwhZ4pyStegOIUucU7IW3SFkiXNK1qI7hCxxTsladIeQJc4pWYvuELLEOSVr0R1CljinZC26Q8gS55SsRXcIWeKckrXoDn+8a5ySrdE7CGmckq3ROwhpnJKt0TsIaZySrdE7CGmckq3ROwhpnJKt0TsIaZySrdE7CGmckq3ROwhpnJKt0TsIaZySrdE7CGmckq3ROwhpnJKt0TsIaZySrdE7CGmckq3ROwhpnJKt0TsIaZySrdE76h+W13w/6mWvIw9CPo48CPk48iDk48iDkI8jD0I+jjwI+TjyIOTjyIOQjyMPQj6OPAj5OPIg5OPIg5CPIw9CPo48CPk48iDk48hjHvL7US97Hed0GSHHOKfLCDnGOV1GyDHO6TJCjnFOlxFyjHO6jJBjnNNlhBzjnC4j5BjndBkhxzinywg5xjldRsgxzukyQo5xTpcRcoxzuoyQY5zTZYQc45wuq0O6o8lexzkla9EdQpY4p2QtukPIEueUrEV3CFninJK16A4hS5xTshbdIWSJc0rWojuELHFOyVp0h5AlzilZi+4QssQ5JWvRHUKWOKdkLbpDyBLnlKxFdwhZ4pyStegOIUucU7IW3SFkiXNK1qI7hCxxTsladIeQJc4pWYvu8Me7xinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2DkMYp2Rq9g5DGKdkavYOQxinZGr2j/mF5zfejXvY68iDk48iDkI8jD0I+jjwI+TjyIOTjyIOQjyMPQj6OPAj5OPIg5OPIg5CPIw9CPo48CPk48iDk48iDkI8jD0I+jjzmIb8f9bLXcU6XEXKMc7qMkGOc02WEHOOc8v3+/QfZr8TdXDcMuAAAAABJRU5ErkJggg==',
      // type: 'pictorialBar',

      data: [12, 20],
    },
  ],
};
