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
        top: 5,
        right: "30",
        itemGap: 20,
        itemWidth: 16,
        itemHeight: 16,
        icon: "rect",
        textStyle: {
            fontSize: 16,
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
        data: ["对公", "个人"],
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
    series: [{
            name: "正常账户",
            type: "bar",
            barWidth: 24,
            itemStyle: {
                normal: {
                    barBorderRadius: [2, 2, 0, 0],
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
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
            label: {
                show: true,
                position: 'top',
                color: '#fff'
            },
            data: [11, 11],
        },
        {
            name: "有效账户",
            type: "bar",
            barWidth: 24,
            itemStyle: {
                normal: {
                    barBorderRadius: [2, 2, 0, 0],
                    color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
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
            label: {
                show: true,
                position: 'top',
                color: '#fff'
            },
            data: [12, 20],
        },
    ],
};
