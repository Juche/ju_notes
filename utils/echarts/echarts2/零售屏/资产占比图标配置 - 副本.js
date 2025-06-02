var showData = {
    name: "风险资产占比",
    value: 4.7,
    name2: "目标值",
    value2: 6,
    maxVal: 10,
    unit: "%"
};

var bgColor = '#06236A';
var borderColor = "#2C79FF";

option = {
    backgroundColor: "#0A092B",
    series: [
        // 中间内容
        {
            name: showData.name,
            type: "gauge",
            radius: "50%",
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: showData.maxVal,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 200,
                    color: [
                        [
                            showData.value / showData.maxVal,
                            new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                    offset: 0,
                                    color: "rgba(2, 88, 208, 0)"
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(2, 88, 208, 0.1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(2, 88, 208, 0.3)"
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
                show: false
            },
            detail: {
                show: true,
                offsetCenter: [0, "0%"],
                textStyle: {
                    fontSize: 34,
                    color: "#E5F4FF"
                },
                formatter: [
                    "{value}" + (showData.unit || ""),
                    "{name|" + showData.name + "}",
                    "{target|" + showData.name2 + "  " + showData.value2 + showData.unit + "}",
                ].join("\n"),
                rich: {
                    name: {
                        fontSize: 14,
                        lineHeight: 60,
                        color: "#BFD7FF",
                        fontWeight: "100"
                    },
                    target: {
                        fontSize: 14,
                        lineHeight: 60,
                        color: "#E5F4FF",
                        fontWeight: "100"
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
        },
        // 刻度百分比
        {
            type: "gauge",
            radius: "100%",
            splitNumber: 6,
            min: 0,
            max: showData.maxVal,
            startAngle: 200,
            endAngle: -20,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function(e) {
                    e = e + ""
                    e = e.length > 3 ? e.substr(0, 3) : e
                    e = e.length == 1 && e != 0 ? e + '.0' : e
                    return e + '%';
                },
                textStyle: {
                    fontSize: 12,
                    fontWeight: ""
                }
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        // // 外层刻度背景
        // {
        //     name: "",
        //     type: 'gauge',
        //     splitNumber: 15,
        //     min: 0,
        //     max: showData.maxVal,
        //     radius: '60%',
        //     startAngle: 200,
        //     endAngle: -20,
        //     axisLine: {
        //         show: true,
        //         lineStyle: {
        //             width: 0,
        //             shadowBlur: 0,
        //             color: [
        //                 [1, '#06236A']
        //             ]
        //         }
        //     },
        //     axisTick: {
        //         show: true,
        //         lineStyle: {
        //             color: 'auto',
        //             width: 5
        //         },
        //         length: 10,
        //         splitNumber: 5
        //     },
        //     splitLine: {
        //         show: true,
        //         length: 20,
        //         lineStyle: {
        //             color: 'auto',
        //         }
        //     },
        //     axisLabel: {
        //         show: false
        //     },
        //     pointer: { //仪表盘指针
        //         show: 0,
        //     },
        //     detail: {
        //         show: 0,
        //     },
        // },
        // 外层刻度前景
        {
            name: '统计',
            type: 'gauge',
            splitNumber: 15, //刻度数量
            min: 0,
            max: showData.maxVal,
            radius: '70%', //图表尺寸
            startAngle: 200,
            endAngle: -20,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, borderColor],
                        [0.47, borderColor],
                        [1, 'transparent']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 3
                },
                length: 20,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
                length: '70%',
                width: 2
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 10
            }]
        }
    ]
};
