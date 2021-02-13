# 第 1 章 认识 jQuery

## 目录

- [第 1 章 认识 jQuery](#第-1-章-认识-jquery)
  - [目录](#目录)
  - [JavaScript 库](#javascript-库)
    - [jQuery](#jquery)
  - [引入 jQuery](#引入-jquery)
  - [jQuery 代码的编写](#jquery-代码的编写)
    - [编写代码](#编写代码)
    - [编码风格](#编码风格)
  - [jQuery 对象和 DOM 对象](#jquery-对象和-dom-对象)
    - [相互转换](#相互转换)
  - [解决冲突](#解决冲突)

## JavaScript 库

- Prototype
- Dojo
- YUI
- Ext JS
- MooTools
- jQuery

### jQuery

- 开源轻量级库: 选择器, DOM 操作, 事件处理, 链式操作, 兼容性等功能

## 引入 jQuery

核心库, UI, 插件, jQuery Mobile

语法简洁, 跨平台兼容

优势: Write Less, Do More

- **轻量级**
  -  `UglifyJS` 压缩后约 30KB
- **选择器**
  - 第 2 章: 支持几乎所有 CSS 选择器, 以及 `jQuery` 自己创造的选择器
- **DOM 操作**封装
  - 第 3 章:
- **事件处理机制**
  - 第 4 章:
- **Ajax**
  - 第 6 章: `$ajax()` 的使用
- **不污染**顶级变量
  - 所有函数方法都在 `jQuery` 对象之下, 也能随时交出别名 `$` 的控制权
- **浏览器兼容性**
- **链式操作方式**
- **隐式迭代**
- **行为层**与**结构层**分离

- 支持**插件**

## jQuery 代码的编写

在 [jQuery](https://jquery.com/) 官网下载, 分为生产版和开发版

- compressed, production jQuery
- uncompressed, development jQuery

### 编写代码

```js
$(document).ready(function() { });
/**
 * DOM 加载完即执行
 * 编写多个, 顺序执行
 * 简写: $(function() { })
 */


window.onload = function() { };
/**
 * 所有元素加载完 (包括图片) 才执行
 * 编写多个, 只执行最后一个
 */
```

### 编码风格

```js
/**
<li class="level1">
  <a href="#none">衬衫</a>
  <ul class="level2">
    <li><a href="#none">短袖衬衫</a></li>
    <li><a href="#none">长袖衬衫</a></li>
    <li><a href="#none">短袖T恤</a></li>
    <li><a href="#none">长袖T恤</a></li>
  </ul>
</li>
*/
// 链式操作 隐式迭代
$(document).ready(function () {
  /* 监听 .level1 > a 的点击事件 */
  $(".level1 > a").click(function () {  
    // 展开被点击的列表
    $(this).addClass("current")	            // 当前元素 添加类
    .next().show()                          // 下一个元素 显示
    // 隐藏其他列表 
    .parent().siblings()                    // 亲 同辈
      .children("a").removeClass("current") // 子<a> 删除类
    .next().hide();                         // 下一个元素 隐藏
    return false;
  });
});
```

## jQuery 对象和 DOM 对象

jQuery 对象

- jQuery **包装** DOM 对象后产生的对象
- jQuery 对象中**无法使用** DOM 对象的方法

### 相互转换

```js
let $variable;  // jQuery 对象
let variable;   // DOM 对象

/* jQuery => DOM */
let $cr = $('#cr');

// 实际上是 key 为 0
let cr = $cr[0];
let cr = $cr.get(0);

/* DOM => jQuery */
let cr = document.getElementById('cr');
let $cr = $(cr);
```



## 解决冲突

`jQuery.noConflict()` 交出 `$` 的控制权