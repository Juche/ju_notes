/** @type {V2ViewType} */
let ctx = this;

let showData = ctx.showData
let types = showData.types;
let backgroundColor,
    color,
    xAxis,
    yAxis,
    legend,
    tooltip,
    grid,
    dataset,
    series,
    option;

backgroundColor = "#000";
color = showData.color;
xAxis = [
    {
        type: "category",
        boundaryGap: false,
        axisTick: {
            show: false,
        },
        axisLabel: {
            // show: false,
            textStyle: {
                fontSize: 14,
                color: "#CCE6FF",
            },
        },
        axisLine: {
            lineStyle: {
                color: "#CCE6FF",
                width: 1,
                type: "dashed",
            },
        },
    },
];
yAxis = [
    {
        splitNumber: 4,
        // max:2000,
        // min:0,
        // show:false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: "#CCE6FF",
            },
        },
        // name: "单位：户",
        name: "",
        nameTextStyle: {
            fontSize: 14,
            color: "#CCE6FF",
        },
        splitLine: {
            // show:false,
            lineStyle: {
                type: "dashed",
            },
        },
        type: "value",
    },
];

legend = {
    itemWidth: 15,
    itemHeight: 10,
    icon: " roundRect ",
    right: 5,
    textStyle: {
        padding: [30, 10, 30, 10],
        fontSize: 14,
        fontWeight: 400,
        fontFamily: "Microsoft YaHei",
        color: "#CCE6FF",
    },
};
tooltip = {
    trigger: "axis",
    axisPointer: {
        type: "cross",
        label: {
            backgroundColor: "#6a7985",
        },
    },
};

grid = {
    left: "10",
    right: "25",
    bottom: "20",
    containLabel: true,
};

dataset = showData.dataset;

series = [];
for (let i = 1; i < dataset.source.length; i++) {
    series.push({
        type: types[i - 1],
        seriesLayoutBy: "row",
    });
}

option = {
    backgroundColor,
    color,
    xAxis,
    yAxis,
    legend,
    tooltip,
    grid,
    dataset,
    series,
}

return option
