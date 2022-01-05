# 文档 markdown 示例

<a id="top"></a>

> Markdown是一种轻量级的「标记语言」。

## 1. 基本语法

### 1.1 标题

不同数量的`#`可以完成不同的标题，如下：

```md
# 一级标题

## 二级标题

### 三级标题
```

### 1.2 字体

粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：

**这个是粗体**

*这个是斜体*

***这个是粗体加斜体***

~~这里想用删除线~~

注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌HTML来实现。

### 1.3 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号`-`前使用空格。如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

### 1.4 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 1.5 引用

引用的格式是在符号`>`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 1.6 链接

<a href="https://www.npmjs.com/package/vuex/v/next" target="_blank" noopener noreferrer><img src="https://img.shields.io/npm/v/vue/next.svg"></a>

[Vue Github](https://github.com/vuejs/vue-next)
 | [Vue 文档](https://v3.cn.vuejs.org/)

[top](#top)

<a href="#bot">bot</a>

### 1.7 图片

插入图片(支持 jpg、png、gif 等图片格式)，格式如下：

![Profound](/logo.png)

### 1.8 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 1.9 表格

可以使用冒号来定义表格的对齐方式，如下：

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 2. 特殊语法

### 2.1 代码块

如果在一个行内需要引用代码，只要用反引号引起来就好，例如： `console.log()`

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

```diff
+ 新增项
- 删除项
```

### 2.2 emoji

:tada: :100:

### 2.3 HTML

支持原生 HTML 语法，请写内联样式，如下：

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>

### 2.4 TOC

TOC 全称为 Table of Content，列出全部标题。

[[TOC]]

## 3. 专属语法

### 3.1 信息状态

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

### 3.2 代码

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

`<<< @/public/snippets/test.js`

<<< @/public/snippets/test.js

<a id="bot"></a>
