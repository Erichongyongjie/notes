import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "🔘 站长分享",
      icon: "",
      prefix: "demo/",
      link: "demo/",
	  collapsible: true,
      children: "structure",
    },
	{
      text: "📄 藏诗词句",
      icon: "",
      prefix: "cang/",
      link: "cang/",
	  collapsible: true,
      children: "structure",
    },
    {
      text: "📰 读书心得",
      icon: "",
      prefix: "guide/",
	  collapsible: true,
	  link: "guide/",
      children: "structure",
    },
	{
      icon: "",
	  text: "🌗 生活记录",
      prefix: "shenghuo/",
      collapsible: true,
      children: "structure",
    },
	{
      icon: "",
	  text: "🏡 关于站点",
      prefix: "about/",
      collapsible: true,
      children: "structure",
    },
    "slides",
  ],
});
