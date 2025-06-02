// var showData = this.showData;
var showData = {
    legend: ["全行网点人员总数", "上岗人员总数1234"],
    // xAxis: ["", ""],
    source: [50000, 20000],
}

//默认数据
let legend = showData.legend;
// let xAxis = showData.xAxis;
let source = showData.source;

// //绑定数据源数据
// if (ctx.source1 && ctx.source1.source && ctx.source1.source[0]) {
//     //   xAxis = ctx.source1.xAxis.data;
//     source[0] = ctx.source1.source[0].data;
//     legend[0] = ctx.source1.source[0].name;
// }
// if (ctx.source2 && ctx.source2.source && ctx.source2.source[0]) {
//     //   xAxis = ctx.source2.xAxis.data;
//     source[1] = ctx.source2.source[0].data;
//     legend[1] = ctx.source2.source[0].name;
// }

// let text1 = "全行网点人员总数";
// let value1 = 9204;

// let text2 = "上岗人员总数";
// let value2 = 8712;

let valueCput = source[0] - source[1];
let rate = source[1] / source[0];
let startAngle = rate * 180 + 135;

if (legend[0].length > 5) {
    legend[0] = legend[0].substr(0, 4) + "\n" + legend[0].substr(4);
}

option = {
    backgroundColor: "#03141c",
    title: {
        text: source[0],
        subtext: legend[0],
        // x: "center",
        // y: "center",
        // x: "185",
        // y: "100",
        top: 'center',
        left: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 30,
            fontWeight: "normal",
        },
        subtextStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 16,
            fontWeight: "normal",
        },
    },
    series: [
        {
            name: legend[1],
            type: "pie",
            radius: [70, 100],
            center: ["50%", "50%"],
            // center: ["225", "125"],
            hoverAnimation: false,
            startAngle: startAngle,
            data: [{
                    value: source[1],
                    name: "",
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#02cbff",
                            },
                            {
                                offset: 1,
                                color: "#266ae5",
                            },
                        ]),
                    },
                    labelLine: {
                        length: 15,
                        length2: 30,
                        lineStyle: {
                            width: 2,
                        },
                    },
                    label: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 18,
                        align: "left",
                        // formatter: "上岗人员总数\n{a|8712}个",
                        formatter: "{a|" + legend[1] + "}\n{b|" + source[1] + "}" + "{c|个}",
                        // padding: [0 , -80, 0, 0],
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 18,
                                // lineHeight: 30,
                                // width: 100,
                                // align: "left",
                                padding: [0 , -50, 0, 0],
                            },
                            b: {
                                color: "#fff",
                                fontSize: 24,
                                lineHeight: 30,
                                width: 100,
                                // align: "left",
                                // padding: [0 , 50, 0, 0],
                            },
                            
                        },
                    },
                },
                {
                    value: valueCput,
                    name: "",
                    itemStyle: {
                        color: "transparent",
                    },
                },
            ],
        },
        {
            name: "",
            type: "pie",
            radius: [72, 98],
            center: ["50%", "50%"],
            // center: ["225", "125"],
            hoverAnimation: false,
            startAngle: startAngle,
            data: [
                {
                    value: source[1],
                    itemStyle: {
                        color: "transparent",
                    },
                },
                {
                    value: valueCput,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#fab862",
                            },
                            {
                                offset: 1,
                                color: "#ff8236",
                            },
                        ]),
                    },
                    labelLine: {
                        show: false,
                    },
                },
            ],
        },
    ],
};
