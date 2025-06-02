// cashSaturation
// 现金情况
{
  cash1: 100,
  cash2: 200,
  cash3: 300,
  cash4: 400
}



// tradTypeRate
// 交易类型占比

{
  color: ["#d8a613", "#8fc736", "#01b3cc", "#0177d4", "#394bd0"],
  series: [
    {
      name: "环形比例分割图",
      type: "pie",
      radius: ["50%", "64%"], //设置饼图大小
      center: ["30%", "50%"], //设置饼图位置
      zlevel: 1,
      label: {
        normal: {
          show: false,
          position: "center",
          formatter: ["{value|{d}%}", "{name|{b}}"].join("\n"),
          rich: {
            value: {
              color: "#fff",
              fontSize: 20,
              // fontWeight: "bold",
              lineHeight: 24
            },
            name: {
              fontSize: 14,
              color: "#accfff",
              lineHeight: 20
            }
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "16",
            fontWeight: "bold"
          }
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 5,
          borderColor: "#040d2d"
        }
      },
      data: [
        { name: "新柜面签约数", value: 310460 },
        { name: "个人网上签约数", value: 53738 },
        { name: "个人网银签约数 ", value: 218946 }
      ]
    }
  ],
  legend: {
    // 图例说明
    orient: "vertical",
    left: "60%",
    y: "center",
    textStyle: {
      color: "#accfff",
      fontSize: 14,
      lineHeight: 20
    },
    itemWidth: 14,
    itemHeight: 14
  }
}



let ctx = this;

var data = [
    {
        name: '5星',
        value: 50
    },{
        name: '4星&3星',
        value: 30
    },{
        name: '2星&1星',
        value: 15
    },{
        name: '未评价',
        value: 5
    }]

    var titleArr= [], seriesArr=[];
    var colors=[['#389af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#a181fc', '#e3d9fe']]
    data.forEach(function(item, index){
        titleArr.push(
            {
                text:item.name,
                left: index * 25 + 10 +'%',
                top: '65%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                },
            }
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [60, 70],
                itemStyle:  {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index * 25 + 10 +'%', '50%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function(params){
                                return params.value+'%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100-item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }
        )
    });


var option = {
    // backgroundColor: "#fff",
    title:titleArr,
    series: seriesArr
}

return option


// buzBtnClass1
// 业务排行按钮类名1
// 机构业务量排名
vda-btn vda-btn-left vda-btn-active

// showOrgBuzData
// 显示机构业务数据
true


// buzBtnClass2
// 业务排行按钮类名2
// 柜员业务量排名
vda-btn vda-btn-right

// showPersonBuzData
// 显示个人业务数据
true


