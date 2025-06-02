
// 120 * 50
// 400 * 50


// baseInfo
// 基本信息
{
  val1: '600 人',
  val2: '500 人',
  val3: '400 人',
  val4: '300 人',
  val5: '200 人',
  val6: '100 人',
  val7: '10 分钟',
}


// rhombusLiquidFill
// 菱形水形图

var value = 0.60;
var data = [value, value, value];
option = {
    backgroundColor: '#212121',
    title: {
        text: (value * 100).toFixed(0) + '{a|%}',
        textStyle: {
            fontSize: 50,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#fff',
            rich: {
                a: {
                    fontSize: 28,
                }
            }
        },
        x: 'center',
        y: '35%'
    },
    graphic: [{
        type: 'group',
        left: 'center',
        top: '60%',
        children: [{
            type: 'text',
            z: 100,
            left: '10',
            top: 'middle',
            style: {
                fill: '#fff',
                text: '五星',
                font: '24px Microsoft YaHei'
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        radius: '80%',
        center: ['50%', '50%'],
        shape: 'diamond',
        data: data,
        backgroundStyle: {
            color: '#212121',
        },
        outline: {
            borderDistance: 4,
            itemStyle: {
                borderWidth: 5,
                borderColor: "#25498a",
                shadowBlur: 0,
            }
        },
        color: ['#0581fd', '#90c4ff', '#25498a'],
        label: {
            normal: {
                formatter: '',
            }
        }
    }]
}




