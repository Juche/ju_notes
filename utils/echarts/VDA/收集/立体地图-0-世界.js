/**
 * 参考链接:
 * https://my.oschina.net/echarts/blog/983239?fromerr=XjbBhQrv
 */

// https://gallerybox.echartsjs.com/asset/get/s/data-1497251035660-HkVJTnsMW.hdr
// https://gallerybox.echartsjs.com/asset/get/s/canyon.hdr
// https://echarts.apache.org/examples/zh/data-gl/asset/canyon.hdr

var regionData = [
  {
    name: "Afghanistan",
    value: "0.01",
  },
  {
    name: "Albania",
    value: "2.01",
  },
  {
    name: "Algeria",
    value: "0.15",
  },
  {
    name: "Andorra",
    value: "",
  },
  {
    name: "Angola",
    value: "3.86",
  },
  {
    name: "Antigua and Barbuda",
    value: "5.73",
  },
  {
    name: "Argentina",
    value: "8.40",
  },
  {
    name: "Armenia",
    value: "1.48",
  },
  {
    name: "Australia",
    value: "9.02",
  },
  {
    name: "Austria",
    value: "11.08",
  },
  {
    name: "Azerbaijan",
    value: "4.54",
  },
  {
    name: "Bahamas",
    value: "",
  },
  {
    name: "Bahrain",
    value: "6.98",
  },
  {
    name: "Bangladesh",
    value: "0.00",
  },
  {
    name: "Barbados",
    value: "",
  },
  {
    name: "Belarus",
    value: "5.53",
  },
  {
    name: "Belgium",
    value: "10.63",
  },
  {
    name: "Belize",
    value: "6.25",
  },
  {
    name: "Benin",
    value: "1.29",
  },
  {
    name: "Bhutan",
    value: "0.23",
  },
  {
    name: "Bolivia",
    value: "3.23",
  },
  {
    name: "Bosnia and Herzegovina",
    value: "9.05",
  },
  {
    name: "Botswana",
    value: "4.29",
  },
  {
    name: "Brazil",
    value: "5.76",
  },
  {
    name: "Brunei Darussalam",
    value: "0.12",
  },
  {
    name: "Bulgaria",
    value: "5.86",
  },
  {
    name: "Burkina Faso",
    value: "5.01",
  },
  {
    name: "Burundi",
    value: "9.10",
  },
  {
    name: "Cambodia",
    value: "1.48",
  },
  {
    name: "Cameroon",
    value: "3.77",
  },
  {
    name: "Canada",
    value: "7.80",
  },
  {
    name: "Cape Verde",
    value: "4.78",
  },
  {
    name: "Central African Republic",
    value: "1.53",
  },
  {
    name: "Chad",
    value: "0.31",
  },
  {
    name: "Chile",
    value: "6.60",
  },
  {
    name: "China",
    value: "5.20",
  },
  {
    name: "Colombia",
    value: "5.68",
  },
  {
    name: "Comoros",
    value: "0.31",
  },
  {
    name: "Congo",
    value: "2.60",
  },
  {
    name: "Cook Islands",
    value: "3.73",
  },
  {
    name: "Costa Rica",
    value: "5.65",
  },
  {
    name: "Cote d'Ivoire",
    value: "1.77",
  },
  {
    name: "Croatia",
    value: "12.25",
  },
  {
    name: "Cuba",
    value: "2.26",
  },
  {
    name: "Cyprus",
    value: "11.52",
  },
  {
    name: "Czech Republic",
    value: "12.99",
  },
  {
    name: "Democratic People's Republic of Korea",
    value: "3.26",
  },
  {
    name: "Democratic Republic of the Congo",
    value: "1.86",
  },
  {
    name: "Denmark",
    value: "11.71",
  },
  {
    name: "Djibouti",
    value: "1.79",
  },
  {
    name: "Dominica",
    value: "7.50",
  },
  {
    name: "Dominican Republic",
    value: "6.66",
  },
  {
    name: "Ecuador",
    value: "2.36",
  },
  {
    name: "Egypt",
    value: "0.21",
  },
  {
    name: "El Salvador",
    value: "3.72",
  },
  {
    name: "Equatorial Guinea",
    value: "3.38",
  },
  {
    name: "Eritrea",
    value: "0.59",
  },
  {
    name: "Estonia",
    value: "9.00",
  },
  {
    name: "Ethiopia",
    value: "0.86",
  },
  {
    name: "Fiji",
    value: "1.72",
  },
  {
    name: "Finland",
    value: "9.31",
  },
  {
    name: "France",
    value: "11.43",
  },
  {
    name: "Gabon",
    value: "8.01",
  },
  {
    name: "Gambia",
    value: "2.59",
  },
  {
    name: "Georgia",
    value: "1.47",
  },
  {
    name: "Germany",
    value: "11.99",
  },
  {
    name: "Ghana",
    value: "1.57",
  },
  {
    name: "Greece",
    value: "9.01",
  },
  {
    name: "Grenada",
    value: "6.67",
  },
  {
    name: "Guatemala",
    value: "1.46",
  },
  {
    name: "Guinea",
    value: "0.20",
  },
  {
    name: "Guinea-Bissau",
    value: "2.19",
  },
  {
    name: "Guyana",
    value: "3.84",
  },
  {
    name: "Haiti",
    value: "8.30",
  },
  {
    name: "Honduras",
    value: "2.92",
  },
  {
    name: "Hungary",
    value: "13.60",
  },
  {
    name: "Iceland",
    value: "6.99",
  },
  {
    name: "India",
    value: "0.29",
  },
  {
    name: "Indonesia",
    value: "0.09",
  },
  {
    name: "Iran (Islamic Republic of)",
    value: "0.00",
  },
  {
    name: "Iraq",
    value: "0.21",
  },
  {
    name: "Ireland",
    value: "13.69",
  },
  {
    name: "Israel",
    value: "2.47",
  },
  {
    name: "Italy",
    value: "8.02",
  },
  {
    name: "Jamaica",
    value: "1.74",
  },
  {
    name: "Japan",
    value: "7.59",
  },
  {
    name: "Jordan",
    value: "0.31",
  },
  {
    name: "Kazakhstan",
    value: "2.96",
  },
  {
    name: "Kenya",
    value: "1.51",
  },
  {
    name: "Kiribati",
    value: "0.45",
  },
  {
    name: "Kuwait",
    value: "0.03",
  },
  {
    name: "Kyrgyzstan",
    value: "3.63",
  },
  {
    name: "Lao People's Democratic Republic",
    value: "6.91",
  },
  {
    name: "Latvia",
    value: "9.61",
  },
  {
    name: "Lebanon",
    value: "3.24",
  },
  {
    name: "Lesotho",
    value: "1.82",
  },
  {
    name: "Liberia",
    value: "3.82",
  },
  {
    name: "Libyan Arab Jamahiriya",
    value: "0.01",
  },
  {
    name: "Lithuania",
    value: "9.89",
  },
  {
    name: "Luxembourg",
    value: "15.56",
  },
  {
    name: "Madagascar",
    value: "1.59",
  },
  {
    name: "Malawi",
    value: "1.41",
  },
  {
    name: "Malaysia",
    value: "1.06",
  },
  {
    name: "Maldives",
    value: "",
  },
  {
    name: "Mali",
    value: "0.50",
  },
  {
    name: "Malta",
    value: "6.02",
  },
  {
    name: "Marshall Islands",
    value: "",
  },
  {
    name: "Mauritania",
    value: "0.01",
  },
  {
    name: "Mauritius",
    value: "3.03",
  },
  {
    name: "Mexico",
    value: "4.57",
  },
  {
    name: "Micronesia (Federated States of)",
    value: "1.23",
  },
  {
    name: "Monaco",
    value: "",
  },
  {
    name: "Mongolia",
    value: "2.83",
  },
  {
    name: "Montenegro",
    value: "",
  },
  {
    name: "Morocco",
    value: "0.45",
  },
  {
    name: "Mozambique",
    value: "0.52",
  },
  {
    name: "Myanmar",
    value: "0.33",
  },
  {
    name: "Namibia",
    value: "5.97",
  },
  {
    name: "Nauru",
    value: "0.87",
  },
  {
    name: "Nepal",
    value: "0.19",
  },
  {
    name: "Netherlands",
    value: "9.68",
  },
  {
    name: "New Zealand",
    value: "9.68",
  },
  {
    name: "Nicaragua",
    value: "2.48",
  },
  {
    name: "Niger",
    value: "0.05",
  },
  {
    name: "Nigeria",
    value: "10.57",
  },
  {
    name: "Niue",
    value: "9.47",
  },
  {
    name: "Norway",
    value: "5.50",
  },
  {
    name: "Oman",
    value: "0.26",
  },
  {
    name: "Pakistan",
    value: "0.01",
  },
  {
    name: "Palau",
    value: "",
  },
  {
    name: "Panama",
    value: "5.98",
  },
  {
    name: "Papua New Guinea",
    value: "1.62",
  },
  {
    name: "Paraguay",
    value: "3.73",
  },
  {
    name: "Peru",
    value: "3.83",
  },
  {
    name: "Philippines",
    value: "3.51",
  },
  {
    name: "Poland",
    value: "8.09",
  },
  {
    name: "Portugal",
    value: "11.54",
  },
  {
    name: "Qatar",
    value: "4.40",
  },
  {
    name: "Republic of Korea",
    value: "7.87",
  },
  {
    name: "Republic of Moldova",
    value: "13.18",
  },
  {
    name: "Romania",
    value: "9.74",
  },
  {
    name: "Rwanda",
    value: "6.93",
  },
  {
    name: "Saint Kitts and Nevis",
    value: "6.73",
  },
  {
    name: "Saint Lucia",
    value: "11.48",
  },
  {
    name: "Saint Vincent and the Grenadines",
    value: "7.00",
  },
  {
    name: "Samoa",
    value: "1.73",
  },
  {
    name: "San Marino",
    value: "",
  },
  {
    name: "Sao Tome and Principe",
    value: "6.95",
  },
  {
    name: "Saudi Arabia",
    value: "0.00",
  },
  {
    name: "Senegal",
    value: "0.46",
  },
  {
    name: "Serbia",
    value: "",
  },
  {
    name: "Seychelles",
    value: "3.36",
  },
  {
    name: "Sierra Leone",
    value: "6.39",
  },
  {
    name: "Singapore",
    value: "2.17",
  },
  {
    name: "Slovakia",
    value: "10.35",
  },
  {
    name: "Slovenia",
    value: "6.74",
  },
  {
    name: "Solomon Islands",
    value: "0.97",
  },
  {
    name: "Somalia",
    value: "0.00",
  },
  {
    name: "South Africa",
    value: "6.72",
  },
  {
    name: "Spain",
    value: "11.68",
  },
  {
    name: "Sri Lanka",
    value: "0.28",
  },
  {
    name: "Sudan",
    value: "0.30",
  },
  {
    name: "Suriname",
    value: "",
  },
  {
    name: "Swaziland",
    value: "4.60",
  },
  {
    name: "Sweden",
    value: "5.96",
  },
  {
    name: "Switzerland",
    value: "10.83",
  },
  {
    name: "Tajikistan",
    value: "0.39",
  },
  {
    name: "Thailand",
    value: "5.59",
  },
  {
    name: "Timor-Leste",
    value: "",
  },
  {
    name: "Togo",
    value: "1.24",
  },
  {
    name: "Tonga",
    value: "0.75",
  },
  {
    name: "Trinidad and Tobago",
    value: "4.17",
  },
  {
    name: "Tunisia",
    value: "1.23",
  },
  {
    name: "Turkey",
    value: "1.37",
  },
  {
    name: "Turkmenistan",
    value: "1.18",
  },
  {
    name: "Tuvalu",
    value: "1.37",
  },
  {
    name: "Uganda",
    value: "",
  },
  {
    name: "Ukraine",
    value: "6.09",
  },
  {
    name: "United Arab Emirates",
    value: "0.02",
  },
  {
    name: "United Kingdom",
    value: "11.75",
  },
  {
    name: "Uruguay",
    value: "7.74",
  },
  {
    name: "Uzbekistan",
    value: "1.51",
  },
  {
    name: "Vanuatu",
    value: "0.75",
  },
  {
    name: "Venezuela",
    value: "6.67",
  },
  {
    name: "Viet Nam",
    value: "0.85",
  },
  {
    name: "Yemen",
    value: "0.04",
  },
  {
    name: "Zambia",
    value: "2.40",
  },
  {
    name: "Zimbabwe",
    value: "4.41",
  },
  {
    name: "",
    value: "",
  },
  {
    name: "",
    value: "",
  },
  {
    name: "United States",
    value: "8.61",
  },
  {
    name: "Tanzania",
    value: "5.45",
  },
  {
    name: "Macedonia",
    value: "5.69",
  },
  {
    name: "Syria",
    value: "0.49",
  },
  {
    name: "Russia",
    value: "10.32",
  },
  {
    name: "",
  },
];

option = {
  visualMap: {
    show: false,
    min: 0,
    max: 15,
    inRange: {
      color: [
        "#313695",
        "#4575b4",
        "#74add1",
        "#abd9e9",
        "#e0f3f8",
        "#ffffbf",
        "#fee090",
        "#fdae61",
        "#f46d43",
        "#d73027",
        "#a50026",
      ],
    },
  },
  series: [
    {
      type: "map3D",
      map: "world",
      // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
      // roam: true,
      // 地图子项边缘配色
      itemStyle: {
        opacity: 1,
        borderWidth: 1,
        borderColor: "#4bb5ff",
      },
      // 真实感材质相关的配置项，在 shading 为'realistic'时有效
      shading: "realistic",
      realisticMaterial: {
        // 材质细节的纹理贴图
        detailTexture: "images/index/地图表皮2.png",
      },
      // 可以通过 postEffect 下的 colorCorrection 配置项去手动的调整颜色。
      // colorCorrection 下有常见的曝光 exposure、亮度 brightness、对比度 contrast 和饱和度 saturation 选项
      postEffect: {
        enable: true,
        // colorCorrection: {
        //   lookupTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
        // },
      },
      // 光照
      light: {
        // 主光源
        main: {
          intensity: 1,
          // 为主光源添加阴影
          shadow: true,
          // 通过设置主光源 alpha、beta 两个属性设置不同的光照角度
          alpha: 150,
          beta: 70,
        },
        // 环境光
        ambient: {
          intensity: 0,
        },
        // 使用一张全景贴图作为环境光源
        // 推荐一个有不少免费的HDR全景图资源的网站 http://www.hdrlabs.com/sibl/archive.html
        ambientCubemap: {
          diffuseIntensity: 1,
          texture: "/asset/get/s/data-1497251035660-HkVJTnsMW.hdr",
          // exposure: 1,
        },
      },
      // 地面
      // groundPlane: {
      //   show: true,
      // },
      data: regionData,
    },
  ],
};
