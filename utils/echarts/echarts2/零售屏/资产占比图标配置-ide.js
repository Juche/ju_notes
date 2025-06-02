var ctx = this;

var showData = ctx.showData;

var option = {
    series: [
        // 刻度百分比
        {
            type: "gauge",
            radius: "170px",
            splitNumber: 6,
            min: 0,
            max: showData.maxVal,
            // center: ['50%', '52%'],
            startAngle: 195,
            endAngle: -15,
            axisLine: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisTick: {
                show: 0,
            },
            axisLabel: {
                formatter: function(e) {
                    e = e + ""
                    e = e.length > 3 ? e.substr(0, 3) : e
                    e = e.length == 1 && e != '0' ? e + '.0' : e
                    // if(e == '0.0') {
                    //     return '{a|' + e  + '%}'
                    // }
                    // else {
                    //     return e
                    // }
                    switch (e + "") {
                            case "0":
                                return '{t1|' + e + '%}'
                            case "1.6":
                                return '{t2|' + e + '%}'
                            case "3.3":
                                return '{t3|' + e + '%}'
                            case "5.0":
                                return '{t4|' + e + '%}'
                            case "6.6":
                                return '{t5|' + e + '%}'
                            case "8.3":
                                return '{t6|' + e + '%}'
                            case "10":
                                return '{t7|' + e + '%}'
                        }
                        
                    // if(e == '0.0') {
                    //     return '{a|' + e + '%}'
                    // }
                    // return '{b|' + e + '%}'
                },
                textStyle: {
                    fontSize: 12,
                    color: "#BFD7FF",
                },
                // formatter: [
                //     '{a|这段文本采用样式a}',
                //     '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
                // ].join('\n'),

                rich: {
                    t1: {
                        padding: [0, 0, 0, 5],
                        // width: 100,
                        align: 'right',
                        color: "#BFD7FF",
                    },
                    t2: {
                        padding: [-42, 0, 0, -3],
                        // width: 255,
                        align: 'right',
                        color: "#BFD7FF",
                    },
                    t3: {
                        padding: [-63, 0, 0, -18],
                        // width: 177,
                        // lineHeight: 58,
                        align: 'right',
                        color: "#BFD7FF",
                    },
                    t4: {
                        lineHeight: 55,
                        color: "#BFD7FF",
                    },
                    t5: {
                        padding: [-63, -18, 0, 0],
                        // width: 177,
                        // lineHeight: 58,
                        align: 'left',
                        color: "#BFD7FF",
                    },
                    t6: {
                        padding: [-42, -3, 0, 0],
                        // width: 255,
                        align: 'left',
                        color: "#BFD7FF",
                    },
                    t7: {
                        padding: [0, -3, 0, 0],
                        // width: 265,
                        align: 'left',
                        color: "#BFD7FF",
                    }
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
        //     radius: '95px',
        //     startAngle: 205,
        //     endAngle: -25,
        //     axisLine: {
        //         show: true,
        //         lineStyle: {
        //             width: 0,
        //             shadowBlur: 0,
        //             color: [
        //                 [1, '#f00']
        //             ]
        //         }
        //     },
        //     axisTick: {
        //         show: true,
        //         lineStyle: {
        //             color: 'auto',
        //             width: 1
        //         },
        //         length: 10,
        //         splitNumber: 5
        //     },
        //     splitLine: {
        //         show: false,
        //         length: 10,
        //         lineStyle: {
        //             color: 'auto',
        //             width: 1
        //         }
        //     },
        //     axisLabel: {
        //         show: 0
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
            splitNumber: 10,
            min: 0,
            max: showData.maxVal,
            radius: '94px',
            startAngle: 206,
            endAngle: -25,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, '#2C79FF'],
                        [showData.value / showData.maxVal, '#2C79FF'],
                        // [1, '#2C79FF'],
                        [1, 'transparent']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1.2
                },
                length: 10.5,
                splitNumber: 10
            },
            splitLine: {
                show: false,
                // length: 10,
                // lineStyle: {
                //     color: 'auto',
                //     width: 1
                // }
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
                value: 10
            }]
        },
        // 中间内容
        {
            name: showData.name,
            type: "gauge",
            radius: "70px",
            startAngle: 205,
            endAngle: -25,
            min: 0,
            max: showData.maxVal,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 200,
                    color: [
                        [
                            showData.value / showData.maxVal,
                            new (ctx.$echarts).graphic.LinearGradient(0, 1, 1, 0, [{
                                    offset: 0,
                                    color: "rgba(2, 88, 208, 0)"
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(2, 88, 208, 0.2)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(2, 88, 208, 0.8)"
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
                    fontSize: 34,
                    color: "#E5F4FF"
                },
                formatter: [
                    "{value}" + (showData.unit || ""),
                    "{name|" + showData.name + "}",
                    "{target|" + showData.name2 + "  " + showData.value2 + showData.unit + "}",
                ].join("\n"),
                rich: {
                    value: {
                        lineHeight: 50,
                    },
                    name: {
                        fontSize: 14,
                        lineHeight: 30,
                        color: "#BFD7FF",
                    },
                    target: {
                        padding: [-10, 0, 0, 0],
                        fontSize: 14,
                        lineHeight: 30,
                        color: "#E5F4FF",
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
