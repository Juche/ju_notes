/**
 * ## 自定义组件 ##
 * name: abc
 * desc: 啊啵呲
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {

    ctx.showData.pop()

    console.log('ctx.showData.length: ', ctx.showData.length)

    if(ctx.showData.length == 1) {
        clearInterval(timer)
    }

}, 2000)


// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData


// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var option = {}

// option.series[0].data = ctx.showData;

return option



option = {
    backgroundColor: '#034380',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['南京市', '淮安市','常州市', '徐州市', '南通市', '宿迁市', '无锡市', '扬州市', '盐城市', '苏州市', '泰州市', '镇江市', '连云港市'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156,300, 450, 770, 203, 255, 188, ],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: 'rgba(0,160,221,0.1)',
                borderRadius: 200,
                position: ['-8', '-60'],
                distance: 1,
                formatter: [
                    '    {d|●}',
                    ' {a|{c}}     \n',
                    '    {b|}'
                ].join(','),
                rich: {
                    d: {
                        color: '#3CDDCF',
                    },
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                    b: {
                        width: 1,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#234e6c',
                        align: 'left'
                    },
                }
            }
        }
    }]
};
