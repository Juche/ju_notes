/**
* 自定义函数名: num_f2
* 函数用途: 保留两位小数
* @param num: 被操作数
*/
function num_f2(num) {
  num = Number(num) || 0
  return num.toFixed(2);
}

/**
* 自定义函数名: num_f2_money
* 函数用途: 保留两位小数/千分符
* @param num: 被操作数
*/
function num_f2_money(num) {
  num = Number(num) || 0
  // return parseFloat(num.toFixed(2)).toLocaleString();
  var temp,ret,digital;
  temp=parseFloat(num) || 0;
  temp=Math.round(temp*100);
  ret=parseInt(temp/100,10);
  digital=(temp/100).toString().replace(/^[^\.]+/,'');
  ret=parseFloat(ret).toLocaleString()+(digital?digital:'.00');

  return ret;
}

/**
* 自定义函数名: num_money
* 函数用途: 原始数据/千分符
* @param num: 被操作数
*/
function num_money(num) {
  num = Number(num) || 0
  return parseFloat(num).toLocaleString();
}

/**
* 自定义函数名: num_f0_money
* 函数用途: 数据无小数/千分符
* @param num: 被操作数
*/
function num_f0_money(num) {
  num = Number(num) || 0
  return parseFloat((num).toFixed(0)).toLocaleString();
}

// 小数转百分比

/**
* 自定义函数名: num_percent
* 函数用途: 小数转百分比/无%符
* @param num: 被操作数
*/
function num_percent(num) {
  num = Number(num) || 0;
  return (num * 100).toFixed(2)
}


/**
* 自定义函数名: num_percent_symbol
* 函数用途: 小数转百分比/有%符
* @param num: 被操作数
*/
function num_percent_symbol(num) {
  num = Number(num) || 0;
  return (num * 100).toFixed(2) + '%'
}

// 数量级转换

// 数量级转换/无小数位


/**
* 自定义函数名: num_trans104
* 函数用途: 数量级转换/万
* @param num: 被操作数
*/
function num_trans104(num) {
  num = Number(num) || 0
  return (num / 10000).toFixed(0);
}


/**
* 自定义函数名: num_trans105
* 函数用途: 数量级转换/十万
* @param num: 被操作数
*/
function num_trans105(num) {
  num = Number(num) || 0
  return (num / 100000).toFixed(0);
}


/**
* 自定义函数名: num_trans106
* 函数用途: 数量级转换/百万
* @param num: 被操作数
*/
function num_trans106(num) {
  num = Number(num) || 0
  return (num / 1000000).toFixed(0);
}


/**
* 自定义函数名: num_trans107
* 函数用途: 数量级转换/千万
* @param num: 被操作数
*/
function num_trans107(num) {
  num = Number(num) || 0
  return (num / 10000000).toFixed(0);
}


/**
* 自定义函数名: num_trans108
* 函数用途: 数量级转换/亿
* @param num: 被操作数
*/
function num_trans108(num) {
  num = Number(num) || 0
  return (num / 100000000).toFixed(0);
}


/**
* 自定义函数名: num_trans109
* 函数用途: 数量级转换/十亿
* @param num: 被操作数
*/
function num_trans109(num) {
  num = Number(num) || 0
  return (num / 1000000000).toFixed(0);
}

// 数量级转换/保留两位小数


/**
* 自定义函数名: num_trans104_f2
* 函数用途: 数量级转换/万/两位小数
* @param num: 被操作数
*/
function num_trans104_f2(num) {
  num = Number(num) || 0
  return (num / 10000).toFixed(2);
}


/**
* 自定义函数名: num_trans105_f2
* 函数用途: 数量级转换/十万/两位小数
* @param num: 被操作数
*/
function num_trans105_f2(num) {
  num = Number(num) || 0
  return (num / 100000).toFixed(2);
}


/**
* 自定义函数名: num_trans106_f2
* 函数用途: 数量级转换/百万/两位小数
* @param num: 被操作数
*/
function num_trans106_f2(num) {
  num = Number(num) || 0
  return (num / 1000000).toFixed(2);
}


/**
* 自定义函数名: num_trans107_f2
* 函数用途: 数量级转换/千万/两位小数
* @param num: 被操作数
*/
function num_trans107_f2(num) {
  num = Number(num) || 0
  return (num / 10000000).toFixed(2);
}


/**
* 自定义函数名: num_trans108_f2
* 函数用途: 数量级转换/亿/两位小数
* @param num: 被操作数
*/
function num_trans108_f2(num) {
  num = Number(num) || 0
  return (num / 100000000).toFixed(2);
}


/**
* 自定义函数名: num_trans109_f2
* 函数用途: 数量级转换/十亿/两位小数
* @param num: 被操作数
*/
function num_trans109_f2(num) {
  num = Number(num) || 0
  return (num / 1000000000).toFixed(2);
}



// 数量级转换/无小数位/带千分符


/**
* 自定义函数名: num_trans104_money
* 函数用途: 数量级转换/万/千分符
* @param num: 被操作数
*/
function num_trans104_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 10000).toFixed(0)).toLocaleString();
}


/**
* 自定义函数名: num_trans105_money
* 函数用途: 数量级转换/十万/千分符
* @param num: 被操作数
*/
function num_trans105_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 100000).toFixed(0)).toLocaleString();
}


/**
* 自定义函数名: num_trans106_money
* 函数用途: 数量级转换/百万/千分符
* @param num: 被操作数
*/
function num_trans106_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 1000000).toFixed(0)).toLocaleString();
}


/**
* 自定义函数名: num_trans107_money
* 函数用途: 数量级转换/千万/千分符
* @param num: 被操作数
*/
function num_trans107_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 10000000).toFixed(0)).toLocaleString();
}


/**
* 自定义函数名: num_trans108_money
* 函数用途: 数量级转换/亿/千分符
* @param num: 被操作数
*/
function num_trans108_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 100000000).toFixed(0)).toLocaleString();
}


/**
* 自定义函数名: num_trans109_money
* 函数用途: 数量级转换/十亿/千分符
* @param num: 被操作数
*/
function num_trans109_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 1000000000).toFixed(0)).toLocaleString();
}

// 数量级转换/保留两位小数/带千分符


/**
* 自定义函数名: num_trans104_f2_money
* 函数用途: 数量级转换/万/两位小数/千分符
* @param num: 被操作数
*/
function num_trans104_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 10000).toFixed(2)).toLocaleString();
}


/**
* 自定义函数名: num_trans105_f2_money
* 函数用途: 数量级转换/十万/两位小数/千分符
* @param num: 被操作数
*/
function num_trans105_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 100000).toFixed(2)).toLocaleString();
}


/**
* 自定义函数名: num_trans106_f2_money
* 函数用途: 数量级转换/百万/两位小数/千分符
* @param num: 被操作数
*/
function num_trans106_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 1000000).toFixed(2)).toLocaleString();
}


/**
* 自定义函数名: num_trans107_f2_money
* 函数用途: 数量级转换/千万/两位小数/千分符
* @param num: 被操作数
*/
function num_trans107_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 10000000).toFixed(2)).toLocaleString();
}


/**
* 自定义函数名: num_trans108_f2_money
* 函数用途: 数量级转换/亿/两位小数/千分符
* @param num: 被操作数
*/
function num_trans108_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 100000000).toFixed(2)).toLocaleString();
}


/**
* 自定义函数名: num_trans109_f2_money
* 函数用途: 数量级转换/十亿/两位小数/千分符
* @param num: 被操作数
*/
function num_trans109_f2_money(num) {
  num = Number(num) || 0
  return parseFloat((num / 1000000000).toFixed(2)).toLocaleString();
}
