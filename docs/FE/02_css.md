# CSS

[🔻底部](#bottom)<a id="top">⚓</a>

- [CSS](#css)
  - [简答](#简答)
  - [CSS3新特性](#css3新特性)
  - [布局](#布局)
    - [水平、垂直居中](#水平垂直居中)
  - [让Chrome支持小于12px的文字](#让chrome支持小于12px的文字)
  - [background-attachment](#background-attachment)
  - [视差滚动](#视差滚动)
  - [全屏滚动](#全屏滚动)
  - [border-image](#border-image)
  - [响应式](#响应式)
  - [filter / mix-blend-mode / background-blend-mode](#filter--mix-blend-mode--background-blend-mode)
  - [画一个三角](#画一个三角)
  - [清除浮动](#清除浮动)
  - [移动优先策略](#移动优先策略)
  - [css 选择器优先级？](#css-选择器优先级)
  - [盒模型](#盒模型)

---

## 简答

- BFC: Block Formatting Contexts (块级格式化上下文)，它属于普通流

- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

## CSS3新特性

2d，3d变换
Transition, animation
媒体查询
新的单位（rem, vw，vh 等）
圆角（border-radius），阴影（box-shadow），对文字加特效（text-shadow），线性渐变（gradient），旋转（transform）transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
rgba

## 布局

### 水平、垂直居中

```css
水平:
行内元素: text-align: center
块级元素: margin: 0 auto
position:absolute +left:50%+ transform:translateX(-50%)
display:flex + justify-content: center

垂直:

设置line-height 等于height
position：absolute +top:50%+ transform:translateY(-50%)
display:flex + align-items: center
display:table+display:table-cell + vertical-align: middle;
```

## 让Chrome支持小于12px的文字

-webkit-text-size-adjust:none;
或
p{font-size:10px;-webkit-transform:scale(0.8);} //0.8是缩放比例

## background-attachment

该属性设置背景图像是随页面其余部分滚动还是固定滚动。

```css
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

## 视差滚动

## 全屏滚动

## border-image

## 响应式

响应式网页设计也适用于渐进式网络应用程序，因为它们主要用于移动设备。 有许多不同的设备与浏览器 - 使您的网站适用于不同的屏幕尺寸，视口或像素密度，使用 viewport meta tag，CSS media queries，Flexbox，和 CSS Grid 等技术是很重要的。

## filter / mix-blend-mode / background-blend-mode

## 画一个三角

```css
.tri {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent transparent #f00;
}
```

## 清除浮动

- 父盒子设高度
- 父元素 `overflow: hidden`
- 伪元素(推荐): `clear: both`

```css
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
```

## 移动优先策略

移动优先策略也具有响应能力，但是，它同意我们应该默认并定义移动设备的所有样式，并且仅在以后向其他设备添加特定的响应规则
移动优先策略具有两个主要优点：
1、由于不必针对任何媒体查询验证适用于它们的所有规则，因此在移动设备上的性能更高
2、它会强制针对响应式CSS规则编写更简洁的代码。

```css
.my-class {
  font-size: 12px;
}
@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

## css 选择器优先级？

!important > 行内样式（比重1000）> ID 选择器（比重100） > 类选择器（比重10） > 标签（比重1） > 通配符 > 继承 > 浏览器默认属性

## 盒模型

- 标准盒子模型: width 和 height 指的是内容区域的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。
- IE盒子模型: width 和 height 指的是内容区域+padding+border的宽度和高度

box-sizing：border-box; 相当于使用IE盒模型来计算元素尺寸,利于使用百分比模式的自适应的布局

---

[🔺顶部](#top) <a id="bottom">⚓</a>
