// var showData = {
//     name: "完成率",
//     value: 64,
//     maxVal: 100,
//     unit: "%"
// };
var showData = ctx.showData;

var option = {
    series: [
        //  背景
        {
            name: showData.name,
            type: "gauge",
            radius: "45.5px",
            startAngle: 269.999,
            endAngle: -90,
            min: 0,
            max: showData.maxVal,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 200,
                    color: [
                        [1, "#0B3B7D"]
                    ]
                }
            },
            axisTick: {
                show: 0
            },
            splitLine: {
                show: 0
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: 0
            }
        },
        // 中间背景
        {
            name: '统计',
            type: 'gauge',
            splitNumber: 10,
            min: 0,
            max: showData.maxVal,
            radius: '42px',
            startAngle: 269.999,
            endAngle: -90,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, "#2C79FF"],
                        [1, "#2C79FF"]
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 10
                },
                length: 5,
                splitNumber: 10
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0
            },
            data: [{
                name: "",
                value: 100
            }]
        },
        // 中间刻度
        {
            name: '统计',
            type: 'gauge',
            splitNumber: 10,
            min: 0,
            max: showData.maxVal,
            radius: '44px',
            startAngle: 269.999,
            endAngle: -90,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, "#2C79FF"],
                        [1, "#2C79FF"]
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#0B3B7D',
                    width: 1
                },
                length: 10,
                splitNumber: 2
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0
            },
            data: [{
                name: "",
                value: 100
            }]
        },
        // 内层内容
        {
            name: showData.name,
            type: "gauge",
            radius: "33",
            startAngle: 269.999,
            endAngle: -90,
            min: 0,
            max: showData.maxVal,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 3,
                    color: [
                        [
                            showData.value / showData.maxVal,
                            new (this.$echarts).graphic.LinearGradient(0, 1, 1, 0, [{
                                    offset: 0,
                                    color: "rgba(141,197,255,0)"
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(141,197,255,.2)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(141,197,255,1)"
                                }
                            ])
                        ],
                        [1, "rgba(255,255,255,.0)"]
                    ]
                }
            },
            axisTick: {
                show: 0
            },
            splitLine: {
                show: 0
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: 0
            },
            detail: {
                show: true,
                offsetCenter: [0, "0%"],
                textStyle: {
                    fontSize: 22,
                    color: "#E5F4FF"
                },
                formatter: [
                    "{value}" + (showData.unit || ""),
                    "{name|" + showData.name + "}"
                ].join("\n"),
                rich: {
                    value: {
                        fontSize: 22,
                    },
                    name: {
                        fontSize: 14,
                        color: "#BFD7FF",
                    }
                }
            },
            itemStyle: {
                color: "rgba(255, 36, 74,.3)",
                borderColor: "rgba(255, 36, 74,1)"
            },
            data: [{
                value: showData.value
            }]
        }
    ]
};

return option;
