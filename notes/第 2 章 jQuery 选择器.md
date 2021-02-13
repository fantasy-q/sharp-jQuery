# 第 2 章 认识 jQuery 选择器

## 目录
- [第 2 章 认识 jQuery 选择器](#第-2-章-认识-jquery-选择器)
  - [目录](#目录)
  - [jQuery 选择器](#jquery-选择器)
    - [基本选择器](#基本选择器)
    - [层次选择器](#层次选择器)
    - [过滤选择器](#过滤选择器)
      - [基本过滤选择器](#基本过滤选择器)
      - [内容过滤选择器](#内容过滤选择器)
      - [可见性过滤选择器](#可见性过滤选择器)
      - [属性过滤选择器](#属性过滤选择器)
      - [子元素过滤选择器](#子元素过滤选择器)
      - [表单属性过滤选择器](#表单属性过滤选择器)
    - [表单选择器](#表单选择器)
  - [注意事项](#注意事项)
  - [案例研究](#案例研究)
  - [其他选择器](#其他选择器)

## jQuery 选择器

CSS 选择器

- [W3C CSS Selector](https://www.w3.org/TR/selectors-4/)

jQuery 选择器

- 完全继承 CSS 风格
- 平稳退化 (graceful degradation)

### 基本选择器

| 选择器                   | 描述                                               |
| ------------------------ | -------------------------------------------------- |
| $("#test")               | id 为 test 的单个元素                              |
| $(".test")               | class 为 test 的集合                               |
| $("div")                 | 所有 \<div> 元素                                   |
| $("*")                   | 所有元素                                           |
| $("div, span, .myClass") | 所有 \<div> 和 \<span> 元素<br>类为 myClass 的元素 |

### 层次选择器

| 选择器        | 描述                                  | 等价方法                 |
| ------------- | ------------------------------------- | ------------------------ |
| $("div span") | \<div> 的所有**后代** \<span>         |                          |
| $("div>span") | \<div> 的所有**子代** \<span>         |                          |
| $(".one+div") | class="one"下一个的**同辈**\<div>     | $(".one").next("div")    |
| $("#two~div") | id="two" 元素下面的所有**同辈**\<div> | $("#two").nextAll("div") |

### 过滤选择器

#### 基本过滤选择器

- 与 CSS 中伪类 / 元素选择器语法相同

| 选择器                   | 描述                              |
| ------------------------ | --------------------------------- |
| $("div:first")           | 第一个 \<div> 元素                |
| $("div:last")            | 最后一个 \<div> 元素              |
| $("input:not(.myClass)") | class 不是 myClass 的 \<input>    |
| $("input:even")          | 索引是偶数的\<input>              |
| $("input:odd")           | 索引是奇数的\<input>              |
| $("input:eq(index)")     | 索引等于 1 的\<input>             |
| $("input:gt(index)")     | 索引大于 1 的\<input>             |
| $("input:lt(index)")     | 索引小于 1 的\<input>             |
| $(":header")             | 所有标题即 \<h1>, \<h2>, \<h3>... |
| $("div:animated")        | 执行动画的 \<div>                 |
| $(":focus")              | 焦点所在的元素                    |

#### 内容过滤选择器

| 选择器                  | 描述                                       |
| ----------------------- | ------------------------------------------ |
| $("div:contains('我')") | 含有文本"我"的 \<div> 元素                 |
| $("div:empty")          | \<div> 空元素(且不包含文本)                |
| $("div:has(p)")         | 包含 \<p> 的 \<div> 元素                   |
| $("div:parent")         | 可作为**亲**(有子元素或文本)的 \<div> 元素 |

#### 可见性过滤选择器

| 选择器           | 描述                                                                                               |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| $(":hidden")     | 所有隐藏元素, 包括<br />type="hidden"<br />style="display: none;"<br />style="visibility: hidden;" |
| $("div:hidden")  | 隐藏的 \<div> 元素                                                                                 |
| $("div:visible") | 所有可见的 \<div>                                                                                  |

#### 属性过滤选择器

| 选择器                        | 描述                                         |
| ----------------------------- | -------------------------------------------- |
| $("div[id]")                  | 设置了 id 的 \<div>                          |
| $("div[title='test']")        | title 为 'test' 的 \<div>                    |
| $("div[title!='test']")       | title 不为 'test' 的 \<div>                  |
| $("div[title^='test']")       | title 以 'test' 开头的 \<div>                |
| $("div[title​\$='test']")     | title 以 'test' 结尾的 \<div>                |
| $("div[title*='test']")       | title 含有 'test' 的 \<div>                  |
| $("div[title\|=''en'']")      | title 为 'en' 或 'en-(任意字符串)' 的 \<div> |
| $("div[title~='uk']")         | title 用空格分隔的值中包含 'uk' 的 \<div>    |
| $("div\[id][title\$='test']") | 设置了 id 且 title 以 'test' 结尾的 \<div>   |

#### 子元素过滤选择器

| 选择器                    | 描述                                  |
| ------------------------- | ------------------------------------- |
| $("div :nth-child(2)")    | \<div> 中索引值为 2 的子元素          |
| $("div :nth-child(odd)")  | \<div> 中索引值为奇数的子元素         |
| $("div :nth-child(even)") | \<div> 中索引值为偶数的子元素         |
| $("div :nth-child(3n+1)") | \<div> 中索引值为 (3n+1) 的子元素     |
| $("ul li:first-child")    | \<ul> 中第一个 \<li>                  |
| $("ul li:last-child")     | \<ul> 中最后一个 \<li>                |
| $("ul li:only-child")     | \<ul> 中的唯一 \<li> (只有一个子元素) |

#### 表单属性过滤选择器

| 选择器                    | 描述                           |
| ------------------------- | ------------------------------ |
| $("#form1 :enabled        | id 为 form1 内的所有可用元素   |
| $("#form2 :disabled       | id 为 form2 内的所有不可用元素 |
| $("input:checked          | 所有被选中的 \<input>          |
| $("select option:selected | 所有被选中的 option            |

### 表单选择器

jQuery 专门加入了表单选择器

| 选择器         | 描述                                             |
| -------------- | ------------------------------------------------ |
| $(":input")    | \<input>, \<textarea><br /> \<select>, \<button> |
| $(":text")     | 单行文本框                                       |
| $(":password") | 密码框                                           |
| $(":radio")    | 单选框                                           |
| $(":checkbox") | 复选框                                           |
| $(":submit")   | 提交按钮                                         |
| $(":image")    | 图像按钮                                         |
| $(":reset")    | 重置按钮                                         |
| $(":button")   | 按钮                                             |
| $(":file")     | 上传域                                           |
| $(":hidden")   | 不可见元素                                       |

## 注意事项

` . `, ` # `, ` ( `, ` [ `

- 使用转义字符

```js
<div id="id#b">bb<div>
<div id="id[1]">bb<div>
// 双层转义
$("#id\\b");
$("#id\\[1\\]");
```

符号 `@`

- `1.3.1` 以前需要在属性前添加 `@` 字符

```js
// 1.1.0
$("div[@title='test']");
// 1.3.1
$("div[title='test']");
```

选择其中的空格

```js
var $t_a = $('.test :hidden');	// 带空格
// 选取 class='test' 后代
var $t_b = $('.test:hidden');		// 不带空格
```

## 案例研究

- [第1步 - 设计结构和样式，初始化](../Ch2/2-15-案例研究/第1步%20-%20设计结构和样式，初始化.html)
- [第2步 - 隐藏品牌](../Ch2/2-15-案例研究/第2步%20-%20隐藏品牌.html)
- [第3步 - 用户点击“显示全部品牌”按钮](../Ch2/2-15-案例研究/第3步%20-%20用户点击“显示全部品牌”按钮.html)
- [第4步 - 全部和精简的切换](../Ch2/2-15-案例研究/第4步%20-%20全部和精简的切换.html)

## 其他选择器

jQuery 提供的扩展（插件）

- 书上链接已无效

1. MoreSelectors for jQuery

2. Basic XPath

其他 CSS 选择器方法（脚本）

1. 【2003】[document.getElementsBySelector()](https://simonwillison.net/2003/Mar/25/getElementsBySelector/)
2. 【2005】[cssQuery()](http://dean.edwards.name/my/cssQuery/)
3. 【2007】[querySelectorAll()](https://www.w3.org/TR/selectors-api/)