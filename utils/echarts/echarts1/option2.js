/** @type {V2ViewType} */
let ctx = this;
let showData = ctx.showData;
console.log('x2_source_chart', ctx)
const color = [];
Object.keys(ctx.sourceConfig).forEach(key => {
    if (ctx.sourceConfig[key].color) {
        color.push(ctx.sourceConfig[key].color)
    }
})
let type1 = ctx.sourceConfig.source1 && ctx.sourceConfig.source1.type || 'bar'
let type2 = ctx.sourceConfig.source2 && ctx.sourceConfig.source2.type || 'bar'
let seriesData1, seriesData2, xAxisData, name1, name2;
//默认数据
seriesData1 = showData.source[0].data
seriesData2 = showData.source[1].data
xAxisData = showData.xAxis.data
name1 = showData.source[0].name
name2 = showData.source[1].name

//绑定数据源数据
if (ctx.source1 && ctx.source1.source && ctx.source1.source[0]) {
    xAxisData = ctx.source1.xAxis.data
    seriesData1 = ctx.source1.source[0].data
    name1 = ctx.source1.source[0].name
}
if (ctx.source2 && ctx.source2.source && ctx.source2.source[0]) {
    xAxisData = ctx.source2.xAxis.data
    seriesData2 = ctx.source2.source[0].data
    name2 = ctx.source2.source[0].name
}

const series = [
    {
        name: name1,
        type: type1.replaceAll("'", ''),
        barWidth: "18",
        data: seriesData1,
        itemStyle: {
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
            },
        },
    },
    {
        name: name2,
        type: type2.replaceAll("'", ''),
        barWidth: "18",
        data: seriesData2,
        itemStyle: {
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 0, 0, 0],
            },
        },
    },
]



let option = {
    // backgroundColor: "#0A1432",

    title: {
        top: "-10px",
        left: "0",
        subtext: ctx.unit1 || '',
        subtextStyle: {
            color: "#8cc2ff",
            fontSize: 20,
        },
    },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        right: "20",
        y: "top",
        textStyle: {
            color: "#8cc2ff",
            fontSize: 18,
        },
        itemWidth: 16,
        itemHeight: 16,
        icon: "roundRect",
        show: true,
    },
    grid: {
        left: "10px",
        right: "10px",
        bottom: "10px",
        top: "50px",
        containLabel: true,
    },
    xAxis: [
        {
            type: "category",
            data: xAxisData,
            axisLine: {
                lineStyle: {
                    color: "#b3d4ff",
                },
            },
            axisLabel: {
                fontSize: 16,
                interval: 0,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: "value",
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    color: "rgba(168, 217, 255, 0.3)",
                    width: 1,
                },
            },
            axisLabel: {
                color: "#8cc2ff",
                textAlign: "center",
                fontSize: 16,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: series,
};
color.length && (option.color = color)  
console.log('x2_source_chart option:', option)
return option;
