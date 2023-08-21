export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$0zQUP8ddsJQHNvIZLGYogO15vrJ1Ag4K78NjyMBCIzNUf54Iq99g.\"]}},\"author\":{\"name\":\"Hon\",\"url\":\"http://www.hon.ink\"},\"logo\":\"/logo.svg\",\"repo\":\"Erichongyongjie/honnotes\",\"docsDir\":\"src\",\"footer\":\"如果没有英雄的话就自己成为英雄好了\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",\"/demo/\",{\"text\":\"笔记\",\"icon\":\"lightbulb\",\"prefix\":\"/note/\",\"children\":[{\"text\":\"笔书\",\"icon\":\"lightbulb\",\"prefix\":\"note/\",\"children\":[{\"text\":\"目录\",\"icon\":\"ellipsis\",\"link\":\"README.md\"}]},{\"text\":\"读书\",\"icon\":\"lightbulb\",\"prefix\":\"guide/\",\"children\":[{\"text\":\"目录\",\"icon\":\"ellipsis\",\"link\":\"README.md\"}]}]},{\"text\":\"生活\",\"icon\":\"lightbulb\",\"prefix\":\"/shenghuo/\",\"children\":[{\"text\":\"日常\",\"icon\":\"lightbulb\",\"prefix\":\"richang/\",\"children\":[{\"text\":\"每日仪式\",\"icon\":\"ellipsis\",\"link\":\"yishi.md\"},{\"text\":\"随便说说\",\"icon\":\"ellipsis\",\"link\":\"shuoshuo.md\"}]},{\"text\":\"妙招\",\"icon\":\"lightbulb\",\"prefix\":\"miaozhao/\",\"children\":[{\"text\":\"网购攻略\",\"icon\":\"ellipsis\",\"link\":\"Coupon.md\"},{\"text\":\"健康饮食\",\"icon\":\"ellipsis\",\"link\":\"Diet.md\"},{\"text\":\"智能家居\",\"icon\":\"ellipsis\",\"link\":\"HomeAutomation.md\"},{\"text\":\"生活窍门\",\"icon\":\"ellipsis\",\"link\":\"Life.md\"},{\"text\":\"医疗药品\",\"icon\":\"ellipsis\",\"link\":\"Medical.md\"},{\"text\":\"维修/保养\",\"icon\":\"ellipsis\",\"link\":\"Maintenance.md\"},{\"text\":\"购物清单\",\"icon\":\"ellipsis\",\"link\":\"Shoppinglist.md\"}]}]},{\"text\":\"藏阁\",\"icon\":\"list\",\"prefix\":\"/cang/\",\"children\":[{\"text\":\"藏词阁\",\"icon\":\"comment\",\"link\":\"cangci.md\"},{\"text\":\"藏句阁\",\"icon\":\"comment\",\"link\":\"cangju.md\"},{\"text\":\"藏诗阁\",\"icon\":\"comment\",\"link\":\"cangshi.md\"}]},{\"text\":\"工具\",\"icon\":\"map\",\"link\":\"\",\"children\":[{\"text\":\"导航\",\"icon\":\"map\",\"link\":\"http://dh.hon.ink\"},{\"text\":\"早报\",\"icon\":\"map\",\"link\":\"http://news.icodeq.com\"},{\"text\":\"一文\",\"icon\":\"map\",\"link\":\"https://meiriyiwen.com/\"}]},{\"text\":\"关于\",\"icon\":\"info\",\"link\":\"/about/\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"🔘 站长分享\",\"icon\":\"\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"collapsible\":true,\"children\":\"structure\"},{\"text\":\"📄 藏诗词句\",\"icon\":\"\",\"prefix\":\"cang/\",\"link\":\"cang/\",\"collapsible\":true,\"children\":\"structure\"},{\"text\":\"📰 读书心得\",\"icon\":\"\",\"prefix\":\"guide/\",\"collapsible\":true,\"link\":\"guide/\",\"children\":\"structure\"},{\"icon\":\"\",\"text\":\"🌗 生活记录\",\"prefix\":\"shenghuo/\",\"collapsible\":true,\"children\":\"structure\"},{\"icon\":\"\",\"text\":\"🏡 关于站点\",\"prefix\":\"about/\",\"collapsible\":true,\"children\":\"structure\"},\"slides\"]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
