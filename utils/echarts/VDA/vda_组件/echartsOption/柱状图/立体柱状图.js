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
    backgroundColor: '#0e202d',
    "grid": {
        "top": "15%",
        "left": "15%",
        "bottom": "10%",
        "right": "10%",
        "containLabel": true
    },
    "xAxis": [{
        "type": "category",
        "data": ["累计", "当月"],
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#82b0ec"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            },
            "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            //"barWidth": "20",
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    "formatter": "{c}%"
                }
            },
            "data": [{
                "value": 100,
                "itemStyle": {
                    "color": "#59cb42"
                }
            }, {
                "value": 55.559999999999995,
                "itemStyle": {
                    "color": "#3cefff"
                }
            }]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            // "barWidth": "20",
            z: 12,
            "data": [{
                "value": 100,
                "itemStyle": {
                    "color": "#59cb42"
                }
            }, {
                "value": 55.559999999999995,
                "itemStyle": {
                    "color": "#3cefff"
                }
            }]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 30],
            symbolOffset: [0, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#14b1eb',
                    borderType: 'dashed',
                    borderWidth: 5
                }
            },
            data: [100, 55.559999999999995]
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    //color: '#14b1eb',
                    opacity: .7
                }
            },
            //silent: true,
            "barWidth": "20",
            //barGap: '-100%', // Make series be overlap
            "data": [{
                "value": 100,
                "itemStyle": {
                    "color": "#59cb42"
                }
            }, {
                "value": 55.559999999999995,
                "itemStyle": {
                    "color": "#3cefff"
                }
            }],
            markLine:{
		            	symbol:'none',
		            	label:{
		            		position:"middle",
		            		formatter:'{b}'
		            	},
		            	data:[{
		            		name:"目标值",
		            		yAxis: 80,//res.targetTwo,
		            		lineStyle:{
			            		color:"#eecb5f"
			            	},
		            	}]
		            }

        }


    ]
}
