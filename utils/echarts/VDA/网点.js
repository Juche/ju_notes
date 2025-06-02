// leftPagePath
// 左侧页面路径
jiujiang/websiteLeft

// rightPagePath
// 右侧页面路径
jiujiang/websiteRight


// vda-btn
// vda-btn-active


// leftBtnClass
// 左侧按钮类名
vda-btn vda-btn-active

// 点击事件
// 切换到网点页面
if(ctx.leftBtnClass == 'vda-btn vda-btn-active') return

ctx.leftBtnClass = 'vda-btn vda-btn-active'
ctx.rightBtnClass = 'vda-btn'

ctx.leftPagePath = jiujiang/websiteLeft
ctx.rightPagePath = jiujiang/websiteRight

// rightBtnClass
// 右侧按钮类名
vda-btn

// 点击事件
// 切换到操作中心页面
if(ctx.rightBtnClass == 'vda-btn vda-btn-active') return

ctx.rightBtnClass = 'vda-btn vda-btn-active'
ctx.leftBtnClass = 'vda-btn'

ctx.leftPagePath = jiujiang/opCenterLeft
ctx.rightPagePath = jiujiang/opCenterRight

