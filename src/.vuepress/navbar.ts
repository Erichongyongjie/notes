import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "笔记",
    icon: "lightbulb",
    prefix: "/note/",
    children: [
      {
        text: "笔书",
        icon: "lightbulb",
        prefix: "note/",
        children: [{ text: "目录", icon: "ellipsis", link: "README.md" }],
      },
      {
        text: "读书",
        icon: "lightbulb",
        prefix: "guide/",
        children: [{ text: "目录", icon: "ellipsis", link: "README.md" }],
      },
    ],
  },
  {
    text: "生活",
    icon: "lightbulb",
    prefix: "/shenghuo/",
    children: [
      {
        text: "日常",
        icon: "lightbulb",
        prefix: "richang/",
        children: [{ text: "每日仪式", icon: "ellipsis", link: "yishi.md" }, { text: "随便说说", icon: "ellipsis", link: "shuoshuo.md" }],
      },
      {
        text: "妙招",
        icon: "lightbulb",
        prefix: "miaozhao/",
        children: [{ text: "网购攻略", icon: "ellipsis", link: "Coupon.md" }, { text: "健康饮食", icon: "ellipsis", link: "Diet.md" }, { text: "智能家居", icon: "ellipsis", link: "HomeAutomation.md" }, { text: "生活窍门", icon: "ellipsis", link: "Life.md" }, { text: "医疗药品", icon: "ellipsis", link: "Medical.md" }, { text: "维修/保养", icon: "ellipsis", link: "Maintenance.md" }, { text: "购物清单", icon: "ellipsis", link: "Shoppinglist.md" }],
      },
    ],
  },
  {
    text: "藏阁",
    icon: "list",
    prefix: "/cang/",
	children: [{ text: "藏词阁", icon: "comment", link: "cangci.md" }, { text: "藏句阁", icon: "comment", link: "cangju.md" }, { text: "藏诗阁", icon: "comment", link: "cangshi.md" }],
  },
  {
    text: "工具",
    icon: "map",
    link: "",
	children: [{ text: "导航", icon: "map", link: "http://dh.hon.ink" }, { text: "早报", icon: "map", link: "http://news.icodeq.com" }, { text: "一文", icon: "map", link: "https://meiriyiwen.com/" }],
  },
  { text: "关于", icon: "info", link: "/about/" },
]);
