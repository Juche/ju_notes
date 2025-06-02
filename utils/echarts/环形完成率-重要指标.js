/** @type {V2ViewType} */
let ctx = this;

// let showData = {
//     key: '今年存款完成度',
//     val: 69.8, 
//     more: ['还有', 6235.5 , '万未完成'],
//     color: '#00CFC6'
//     color: '#FE9E20'
// }

let showData = ctx.showData;

let option = {
    // backgroundColor: '#fff',
    angleAxis: {
        show: false,
        type: 'value',
        startAngle: 0, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 12, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '220'
    },
    series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: 69.8,
                itemStyle: {
                    color: showData.color,
                },
            }],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角
            z: 2 //圆环层级，同zindex
        },
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#DDDDE6'
                }
            }],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
        //仪表盘
        {
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                offsetCenter: [0, 0],
                padding: [30, 0, 0, 0],
                color: '#696B6D',
                fontSize: 16,
                fontWeight: 'bold',
                rich: {
                    a: {
                        fontWeight: 'normal',
                        fontSize: 36,
                        fontWeight: 'bold',
                        color: showData.color,
                    },
                    b: {
                        fontWeight: 'normal',
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333',
                        lineHeight: 36
                    },
                    c: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#FF6E6E',
                        lineHeight: 60
                    },
                }
            },
            detail: {
                show: false,
                formatter: function(e) {
                    return '';
                },
                // color: '#fff',
                // fontSize: 16,
                // offsetCenter: [40, -15],
                // backgroundColor: '#FCC841',
                // borderRadius: 8,
                // padding: [4, 12],
            },
            data: [{
                value: 0,
                name: '{a|' + showData.val + '%}' + '\n'
                      + '{b|' + showData.key + '}' + '\n'
                      + showData.more[0] + '{c| ' +  showData.more[1] + ' }' + showData.more[2] || ''
            }]
        }
    ]
}
return option
