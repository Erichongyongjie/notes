<template><div><h2 id="✨-初衷" tabindex="-1"><a class="header-anchor" href="#✨-初衷" aria-hidden="true">#</a> ✨ 初衷</h2>
<blockquote>
<p>纸上得来终觉浅，绝知此事要躬行。</p>
</blockquote>
<p>我十分想通过某一些小途径完成我某些时候对于技术的想象。而另一方面，在快节奏的时代背景下控制自己主动的进行内容整理，复盘，归档与输出也是一种自我学习与提高十分有效的方法之一。</p>
<p>有些事情看过，感觉自己知道，但是要用的时候又不记得了，所以，学习不能只看，还要动手，加深印象。 本仓库的目的是记录学习的东西，边学边动手，照着学习资料手抄一下，不用全抄，记录重点内容即可。</p>
<p>曾经，我把知识记录在...en.好像我没有网络记录习惯，好像是有，手机记事本、电脑TXT文件，这样一来散落各处，使用起来很麻烦，也难以对外分享。</p>
<p>更重要的是，<strong>搜集、记录的“知识”并不属于你，只有经过消化、应用，才会成为自己的知识。</strong></p>
<h2 id="✨-搭建之路" tabindex="-1"><a class="header-anchor" href="#✨-搭建之路" aria-hidden="true">#</a> ✨ 搭建之路</h2>
<h3 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h3>
<p>之前的博客用过Wordpress、Typecho、鲶鱼（小站，最近停了），还用过静态网页端的，除了需要用到服务器之外要添加和定制化的东西都只能基于html+js+css完成，对于我这个非专业前端人员来说，有些麻烦，所以一直有想更换引擎的想法。直到偶然间发现vuepress，首先是被<code v-pre>vue3</code>+<code v-pre>typescript</code>+<code v-pre>vite</code>吸引，然后看到默认主题属实有点不合符我的期待，自己动手成本又太高，也没有太急着去折腾。</p>
<h3 id="尝试" tabindex="-1"><a class="header-anchor" href="#尝试" aria-hidden="true">#</a> 尝试</h3>
<p>此前找了好多的版本去试着探索部署，3月29日在GitHub上偶然间看到<a href="https://github.com/rockbenben/LearnData" target="_blank" rel="noopener noreferrer">rockbenben<ExternalLinkIcon/></a> 发布的“LearnData”，觉得是它没错了，就在3月31日晚着手部署了，结果发现部署是有一定的难度，环境变量问题一直解决不了，于是只好放弃。后来在B站上看到了 <a href="https://github.com/meathill/gitbook-design-patterns-in-jquery" target="_blank" rel="noopener noreferrer">meathill<ExternalLinkIcon/></a> 基于gitbook改的主题，在4月3日进行了部署实验，比上一次好的地方就是工作流没有问题，但是模板还是缺少了我想要的功能。直到无意中发现了 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a>，漂亮的外观一下子就吸引到我了，然后去官网深入研究了一番，发现好多主题都是基于这个并且二次开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适。所以，一步步折腾了起来……于是便又去查询了一下，查看了文档，重新配置了一下电脑环境（此前是node18.15版本，没有安装yarn命令，这次安装的是16.20版本并安装了yarn命令），终于成功了，不容易啊。</p>
<h3 id="markdown增强" tabindex="-1"><a class="header-anchor" href="#markdown增强" aria-hidden="true">#</a> Markdown增强</h3>
<p>hope主题的markdown效果是出乎意料的好，而且支持了很多普通markdown不支持的东西，如自定义容器、带tab的代码块，可选高亮主题（本站代码高亮基于shikiPlugin,虽不如默认的prismjs轻量高效，但能提供更准确的语法高亮）具体效果看这里☞<a href="(https://theme-hope.vuejs.press/zh/cookbook/markdown/)">Markdown展示</a></p>
<h2 id="✨-团队成员" tabindex="-1"><a class="header-anchor" href="#✨-团队成员" aria-hidden="true">#</a> ✨ 团队成员</h2>
<p>更新中......</p>
<p><a href="http://img.topjavaer.cn/img/%E5%BE%AE%E4%BF%A1%E7%BE%A4.png" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/第一位-ing-success"><ExternalLinkIcon/></a><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTY1NzY0MQ==&amp;mid=2247488751&amp;idx=1&amp;sn=507e27534b6ea5f4b3771b30e1fcf57e&amp;chksm=ce98e9a9f9ef60bfbf1370899b49181bae5247e5935714f7ad9e3d06c0028a25c0bfc34d4441#rd" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/第二位-ing-orange"><ExternalLinkIcon/></a><a href="https://space.bilibili.com/1729916794" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/第三位-ing-pink"><ExternalLinkIcon/></a><a href="https://www.zhihu.com/people/dai-shu-bin-13" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/第四位-ing-blue"><ExternalLinkIcon/></a><a href="https://github.com/Tyson0314/java-books" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/第五位-ing-green"><ExternalLinkIcon/></a><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
<br><br>
​ <center><strong>为往圣继绝学，一个人或许能走的更快，但一群人会走的更远。</strong></center></p>
<h2 id="✨-参与贡献" tabindex="-1"><a class="header-anchor" href="#✨-参与贡献" aria-hidden="true">#</a> ✨ 参与贡献</h2>
<ol>
<li>如果您对本项目有任何建议或发现文中内容有误的，欢迎提交 issues 进行指正。</li>
<li>对于本站文中、笔记我没有涉及到知识点，欢迎提交 PR。</li>
<li>如果您有文章推荐请以 markdown 格式到邮箱。</li>
<li>如果你也想要使用此布局，可以我的GitHub上 <code v-pre>main: fork</code>一下。</li>
<li>所有的文件都在 <a href="https://github.com/Erichongyongjie" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>。</li>
<li>原主题见 <a href="https://theme-hope.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope<ExternalLinkIcon/></a>。</li>
</ol>
</div></template>


