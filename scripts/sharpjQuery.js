$(document).ready(function () {
  const template =
    `<li class="chapter">
      <h2><a href=""></a></h2>
      <ul class="content">
      </ul>
    </li>`;
  // 1. 从 TableOfContent.js 获得章节数据
  for (const ChPath in SharpJQuery) {
    if (Object.hasOwnProperty.call(SharpJQuery, ChPath)) {
      /* 章节数据 */ const Chapter = SharpJQuery[ChPath];
      /* 章节标题 */ const Title = Chapter.title;
      /* 章节内容 */ const Content = Chapter.content;
      /* 章节列表 */ const $li_chapter = $(template).appendTo($(".table"));
      $li_chapter.children("h2")
        // .attr('id', 'c' + ChNumber)
        .children("a").text(Title)
      console.log(Content);

      /* 列表项 */ Content.forEach((path) => {
        // console.log(key);
        $("<a target='_blank'></a>").text(path)
          .attr('href', `${ChPath + '/' + path}`)
          // .attr('target', '_blank')
          .wrap("<li></li>").parent()
          .appendTo($li_chapter.children(".content"));
      });
    }
  }

  // 2. 绑定点击事件
  $(".chapter > h2").click(function () {
    // 显示被点击的标题, 隐藏其他标题
    $(this).next().toggle()
      .parent().siblings().children("ul").hide();
    // 给被点击的标题添加样式, 
    $("ul.content:visible").prev().addClass('current');
    $("ul.content:hidden").prev().removeClass('current');

    //   console.log('$(document).height()', $(document).height());
    $(".current")[0] ?
      // 展开章节, 将当前章节标题滚动至最上方
      $(document).scrollTop($(".current").offset().top) :
      // 收起章节, 滚到最上方
      $(document).scrollTop(0);

    // 停止事件冒泡 + 阻止默认行为
    return false;
  });

});
