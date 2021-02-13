# sharp-jQuery

《锋利的 jQuery》单东林  张晓然  魏然  编著

【2012 年第 7 月第 2 版】人民邮电出版社

## <a href="http://fantasy-q.github.io/sharp-jQuery" target="_blank">目录</a>

- 第 1 章   认识 jQuery
- 第 2 章   jQuery 选择器
- 第 3 章   jQuery 中的 DOM 操作
- 第 4 章   jQuery 中的事件和动画
- 第 5 章   jQuery 对表单、表格的操作及更多应用
- 第 6 章   jQuery 与 Ajax 的应用
- 第 7 章   jQuery 插件的使用和写法
- 第 8 章   用 jQuery 打造个性网站
- 第 9 章   jQuery Mobile
- 第 10 章  jQuery 各个版本的变化
- 第 11 章  jQuery 性能优化和技巧
- 附录

## 总结

虽然 `jQuery` 似乎快过气了，而且本书第二版成书于 2012 年，距今也快 9 年了，但毕竟流行这么多年，想必是有其过人之处。

当查询 `JavaScript` 如何某些功能的实现时，依然能检索到使用了 `jQuery` 的示例。因此本着能看懂这些代码，并能通过原生 `JavaScript` 实现的目的，开始了 `jQuery` 的学习。

主要通过观看本书示例代码的学习：
- 部分示例代码不直观，不具体（就是看不懂），才在源码基础上动手实践
- 怀疑示例代码中有错误时，也会对其做修改
- 部分代码文件使用 `GB2313` 编码，在目前浏览器中显示为乱码，改为 `UTF-8`
- 个人不喜欢弹窗提示来调试代码：
  ```js
  /* sciprts/jQuery.js */
  // 基本上所有示例代码都引入了 jQuery.js
  // 在里面把原有的 alert 保存到另一个变量
  // 这样不必修改每个文件的 alert, 需要时也可以换回来
  const actualAlertFunc = window.alert;
  window.alert = console.log;
  ```

