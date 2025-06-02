let showData = {
    legend: ['满意', '不满意', '一般', '未指派'],
    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    data: [
        [0.25, 0.49, 0.7, 0.23, 0.6, 0.7, 0.56, 0.2, 0.44, 0.23, 0.6, 0.33],
        [0.25, 0.49, 0.7, 0.23, 0.6, 0.7, 0.56, 0.2, 0.44, 0.23, 0.6, 0.33],
        [0.25, 0.49, 0.7, 0.23, 0.6, 0.7, 0.56, 0.2, 0.44, 0.23, 0.6, 0.33],
        [0.25, 0.49, 0.7, 0.23, 0.6, 0.7, 0.56, 0.2, 0.44, 0.23, 0.6, 0.33],
    ]
}

option = {
    backgroundColor: '#031569',
    color: ['#FF8222', '#E13858', '#3465F5', ' #8f969e'],
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     // type: 'cross',
        //     crossStyle: {
        //         color: '#999'
        //     }
        // }
    },
    legend: {
        data: showData.legend,
        icon: 'rect',
        textStyle: {
            color: '#CCE6FF',
            fontSize: 14,

        },
        right: 40,
        top: 15
    },
    xAxis: [{
        type: 'category',
        data: showData.xAxis,
        axisPointer: {
            type: 'shadow'
        },
        // axisTick: { alignWithLabel: true }, 
        // 通过这个可以设置x轴的label的转动角度
        // rotate: 30,
        axisLabel: {
            textStyle: {
                fontSize: '90%',
                color: "#fff"
            },
            show: true
        },
        axisLine: {
            show: false
        },
        axisTick: false
    }],
    yAxis: [{
        type: 'value',
        name: '满意度',
        min: 0,
        max: 1,
        interval: 0.2,
        nameTextStyle: {
            color: ''
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: "#CCE6FF"
            }
        },
        nameTextStyle: {
            color: "#D9F2FF",
            fontSize: 16,
            //   padding:[0,0,0,60]
        },
        // splitNumber:3,
        // max:maxValue,
        // min:minValue,


        splitLine: {
            lineStyle: {
                color: '#2D8FFF',
                type: 'dashed'
            },

        },

        axisLine: {
            show: false
        },
        axisTick: false
    }, ],
    series: [{
            name: showData.legend[0],
            type: 'bar',
            data: showData.data[0]
        },
        {
            name: showData.legend[1],
            type: 'bar',
            data: showData.data[1]
        },
        {
            name: showData.legend[2],
            type: 'bar',
            data: showData.data[2]
        },
        {
            name: showData.legend[3],
            type: 'bar',
            data: showData.data[3]
        },
    ]
};
