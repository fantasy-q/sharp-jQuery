# 第 3 章 jQuery 中的 DOM 操作

## 目录
- [第 3 章 jQuery 中的 DOM 操作](#第-3-章-jquery-中的-dom-操作)
  - [目录](#目录)
  - [DOM 操作的分类](#dom-操作的分类)
  - [jQuery 中的 DOM 操作](#jquery-中的-dom-操作)
    - [查找节点](#查找节点)
    - [创建节点](#创建节点)
    - [插入节点](#插入节点)
    - [删除节点](#删除节点)
    - [复制节点](#复制节点)
    - [替换节点](#替换节点)
    - [包裹节点](#包裹节点)
    - [属性操作](#属性操作)
    - [样式操作](#样式操作)
    - [设置 HTML](#设置-html)
    - [遍历节点](#遍历节点)
    - [CSS-DOM 操作](#css-dom-操作)
  - [案例研究](#案例研究)


## DOM 操作的分类

DOM 操作

- DOM Core

```js
document.getElementsByTagName("form");
element.getAttribute("src");
```

- HTML-DOM

```js
document.forms	// HTML-DOM 提供了一个 forms 对象
```

- CSS-DOM

```js
element.style.color = "red"
```

## jQuery 中的 DOM 操作

### 查找节点

```js
// 元素节点
var $li = $("ul li:eq(1)")
$li.text();
// 属性节点
var $para = $("p");
$para.attr("title");
```
### 创建节点

```js
/* 元素 */ var li_1 = $("<li></li>");
/* 文本 */ var li_2 = $("<li>text</li>");
/* 属性 */ var li_3 = $("<li title='t'>text</li>");
```

### 插入节点

| 方法            | 描述                                |
| --------------- | ----------------------------------- |
| .append()       | **文本**末尾附加                    |
| .appendTo()     | \$(A).append(B) = \$(B).appendTo(A) |
| .prepend()      | **文本**起首附加                    |
| .prependTo()    | (对调同上)                          |
| .after()        | **元素**末尾附加                    |
| .insertAfter()  | (对调同上)                          |
| .before()       | **元素**起首附加                    |
| .insertBefore() | (对调同上)                          |

### 删除节点

`remove()`

```js
// 获取元素保存到变量, 并在 DOM 中删除
var $li = $("ul li:eq(1)").remove();
$li.appendTo("ul");  // 再次添加到 DOM

// 简化写法: appendTo() 用来移动元素
$("ul li:eq(1)").appendTo("ul");  

// 选择性删除
$ ('ul li').remove("li[title!='t']")
```

`detach()`

- 同样是从 DOM 删除, 但不会从 jQuery 对象删除, 绑定事件和数据也会保留

`empty()`

- 清空节点内部, 只留下标签

### 复制节点

```js
$("ul li").click()(function(){
  $(this).clone().appendTo("ul");
})
// 传 true 还会复制事件 
// $(this).clone(true).appendTo("ul");
```

### 替换节点

```js
// 两者行为相同
$("p").replaceWith("<div>text</div>");
$("<div>text</div>").replaceAll("p");
```

### 包裹节点

```js
$("strong").wrap("<b></b>");
$("strong").wrapAll("<b></b>");
$("strong").wrapInner("<b></b>")
```
```html
<strong title="t1">text1</strong>
<strong title="t2">text2</strong>

<!-- wrap -->
<b><strong title="t1">text1</strong></b>
<b><strong title="t2">text2</strong></b>

<!-- wrapAll -->
<b>
  <strong title="t1">text1</strong>
  <strong title="t2">text2</strong>
</b>

<!-- wrapInner -->
<strong title="t1"><b>text1</b></strong>
<strong title="t2"><b>text2</b></strong>
```

### 属性操作

```js
// 获取属性
var p_title = $("p").attr("title");

// 设置属性
$("p").attr("title","your title");

// 删除属性
$("p").removeAttr("title");
```

### 样式操作

| 方法                        | 描述                   |
| --------------------------- | ---------------------- |
| .attr("class");             | 获取类                 |
| .attr("class","yourClass"); | 设置类 className       |
| .addClass("anotherClass");  | 追加类 classList.add() |
| .removeClass("yourClass");  | 移除类                 |
| .toggleClass("myClass");    | 切换类                 |
| .hasClass("yourClass")      | 判断类                 |

### 设置 HTML

| 方法         | 描述                         |
| ------------ | ---------------------------- |
| .html()      | .innerHTML                   |
| .text()      | .innerText                   |
| .val()       | .value                       |
| defaultValue | 现在可以用 placerholder 代替 |

### 遍历节点

| 方法           | 描述                       |
| -------------- | -------------------------- |
| .children()    | 子元素集合                 |
| .next()        | 下一个元素                 |
| .prev()        | 上一个元素                 |
| .siblings()    | 同辈元素集合               |
| .siblings("p") | 同辈元素集合中的 \<p>      |
| .parent()      | 亲元素                     |
| .parents()     | 祖辈元素集合 (ancestors)   |
| .parents("p")  | 祖辈元素集合中的 \<p>      |
| .closest("li") | 从自身向上最近的元素 \<li> |

### CSS-DOM 操作

`.css()`
```js
// 获取样式
$("p").css("color");
// 设置样式
$("p").css("color", "red");
// 设置多个样式
$("p").css("fontSize": "30px", "backgroundColor": "#888");
```
定位相关
```js
// offset()
var offset = $("p").offset();
var left = offset.left;
var top = offset.top;

// position()
var position = $("p").offset();
var left = position.left;
var top = position.top;

// scrollTop() & scrollLeft()
var $p = $("p");
// 获取滚动条距离
var scrollTop  = $p.scrollTop();
var scrollLeft = $p.scrollLeft();
// 滚动到指定距离
$("textarea").scrollTop(300);
$("textarea").scrollLeft(300);

```

## 案例研究

[超链接提示](../Ch3/3-13-案例研究-超链接提示和图片提示效果/1-3-文字提示-第三步.html)

- 利用 `div` 实现自定义提示
- 去掉原有 `title` 的提示
- 提示框跟随鼠标移动

[图片提示](../Ch3/3-13-案例研究-超链接提示和图片提示效果/2-2-图片提示-第二步.html)

