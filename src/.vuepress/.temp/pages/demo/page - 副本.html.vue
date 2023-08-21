<template><div><!-- more -->
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>买了一台vps做科学上网，却仅仅只做了科学上网！这不符合我们勤俭节约的理念，所以《高效使用你的VPS》将会教大家如何高效地榨干vps，以获得最大的收益。《高效使用你的VPS》未来可能持续更新（我得自己先体验过才会看情况值不值得更新）。</p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p>本期教程所需要的东西：</p>
<ul>
<li>域名一个（推荐解析到CloudFlare，有免费的CDN）</li>
<li>vps云服务器一台，预装Linux系统</li>
<li>手</li>
</ul>
<h2 id="搭建" tabindex="-1"><a class="header-anchor" href="#搭建" aria-hidden="true">#</a> 搭建</h2>
<p>本教程采用操作较为简单的docker安装，这里推荐大家安装宝塔面板（<a href="https://www.bt.cn/" target="_blank" rel="noopener noreferrer">https://www.bt.cn/<ExternalLinkIcon/></a> ） 再从宝塔面板一键安装，这样既方便建站，又方便对vps进行管理。安装宝塔面板非常简单，这里就不写了。</p>
<h3 id="navidrome优缺点" tabindex="-1"><a class="header-anchor" href="#navidrome优缺点" aria-hidden="true">#</a> Navidrome优缺点</h3>
<p><strong>优点：</strong></p>
<ul>
<li>内存占用低（待机状态40Mb左右）</li>
<li>界面简洁，支持中文</li>
<li>支持Subsonic API，也就是说Subsonic能用的客户端，Navidrome都能用</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>好像没法显示歌词</li>
<li>不支持通过界面删除歌曲（作者说的是为了安全考虑，我个人感觉过于谨慎了）</li>
</ul>
<h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker" aria-hidden="true">#</a> 安装docker</h3>
<p>直接在宝塔面板的应用商店里面下载就可以了</p>
<figure><a href="https://pic.sky350.cn/images/1211_1.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_1.png" alt="1211_1" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_1</figcaption></figure>
<h3 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose" aria-hidden="true">#</a> 安装docker-compose</h3>
<p>这时候一般是没有安装docker-compose的，大家可以连接ssh敲一下docker-compose看看有没有下面的提示，没有的话就得安装。</p>
<figure><a href="https://pic.sky350.cn/images/1211_2.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_2.png" alt="img" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>img</figcaption></figure>
<p>安装也不难，首先设置国内镜像源</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>vi /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写入下面的内容</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>{ "registry-mirrors": ["https://cq20bk8v.mirror.aliyuncs.com"] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>按esc键 在输入 :wq</p>
<p>四条命令敲一下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>yum install epel-release
yum install python3-pip 
pip3 install --upgrade pip 
pip3 install docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是报错：ModuleNotFoundError: No module named ‘setuptools_rust’</p>
<p>解决方法：pip3 install -U pip setuptools</p>
<p>这一步就完成了</p>
<h3 id="部署navidrome" tabindex="-1"><a class="header-anchor" href="#部署navidrome" aria-hidden="true">#</a> 部署navidrome</h3>
<p>这一步还是比较简单的，宝塔面板—-&gt;文件，点击根目录就到vps的根目录了，选择一个位置用来存放歌曲，我个人则是在home目录下创建了个music文件夹，music里面再创建两个文件夹，一个data，一个song，前者用来存放缓存，后者用来存放歌曲。</p>
<figure><a href="https://pic.sky350.cn/images/1211_3.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_3.png" alt="1211_3" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_3</figcaption></figure>
<p>此外，仍需在music目录下创建一个名为<code v-pre>docker-compose.yaml</code>的文件，双击编辑，内容复制下面的内容。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>version: "3"
services:
  navidrome:
    container_name: navidrome
    image: deluan/navidrome:latest
    user: 0:0 #0:0代表用root用户运行
    ports:
      - "4533:4533"
    restart: unless-stopped
    environment:
      # Optional: put your config options customization here. Examples:
      ND_SCANSCHEDULE: 1h
      ND_LOGLEVEL: info  
      ND_SESSIONTIMEOUT: 24h
      ND_BASEURL: ""
      ND_ENABLETRANSCODINGCONFIG: "true"
      ND_TRANSCODINGCACHESIZE: "4000M"
      ND_IMAGECACHESIZE: "1000M"
      
    volumes:
      - "/home/music/data:/data"
      - "/home/music/song:/music:ro"

  miniserve:
    image: svenstaro/miniserve:latest
    depends_on:
      - navidrome
    ports:
      - "4534:4534"
    volumes:
      - "/home/music/song:/downloads"  
    command: "-r -z -u -q -p 4534 -a admin:123456 /downloads" 
    restart: unless-stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在安装navidrome的同时，我们顺便安装一个miniserve文件服务器，可以用来上传音乐文件，如果你存储音乐的文件夹和我不一样，请将两处<code v-pre>/home/music/song</code>都进行修改。</p>
<ul>
<li><code v-pre>/home/music/data</code>：用来存储navidrome缓存的位置</li>
<li><code v-pre>/home/music/song</code>：存储音乐文件的路径</li>
<li><code v-pre>admin:123456</code>：miniserve文件服务器的用户名和密码，格式 用户名:密码</li>
</ul>
<p>下面连接ssh</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cd /home/music
#先进入music目录
docker-compose up -d
#再输入上面这条命令开始部署
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><a href="https://pic.sky350.cn/images/1211_3_1.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_3_1.png" alt="1211_3_1" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_3_1</figcaption></figure>
<p>done就完成部署了。</p>
<h3 id="配置-优化" tabindex="-1"><a class="header-anchor" href="#配置-优化" aria-hidden="true">#</a> 配置&amp;优化</h3>
<p>打开IP:4533（navidrome），创建用户名和密码</p>
<figure><a href="https://pic.sky350.cn/images/1211_4.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_4.png" alt="1211_4" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_4</figcaption></figure>
<p>点击右上角头像，点击Personal，Language选择简体中文。</p>
<figure><a href="https://pic.sky350.cn/images/1211_4_1.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_4_1.png" alt="1211_4_1" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_4_1</figcaption></figure>
<p>当我们上传音乐文件之后，点击头像左边的图标可以快速扫描音乐文件。</p>
<figure><a href="https://pic.sky350.cn/images/1211_4_2.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_4_2.png" alt="1211_4_2" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_4_2</figcaption></figure>
<p>打开IP:4534（miniserve），输入我们预先设置的用户名和密码</p>
<figure><a href="https://pic.sky350.cn/images/1211_5.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_5.png" alt="1211_5" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_5</figcaption></figure>
<figure><a href="https://pic.sky350.cn/images/1211_6.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_6.png" alt="1211_6" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>1211_6</figcaption></figure>
<p>到此工作就完成了，我们只需要将下载到的音乐上传到服务器就好了。</p>
<figure><a href="https://pic.sky350.cn/images/1211_7.png" target="_blank" rel="noopener noreferrer"><img src="https://pic.sky350.cn/images/1211_7.png" alt="img" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>img</figcaption></figure>
<h3 id="适配app平台" tabindex="-1"><a class="header-anchor" href="#适配app平台" aria-hidden="true">#</a> 适配APP平台</h3>
<p>Navidrome 可以与以下所有 Subsonic 客户端兼容。</p>
<ul>
<li>iOS：play:Sub、 substreamer、 Amperfy和 iSub</li>
<li>安卓：DSub， Subtracks， substreamer， Ultrasonic和 Audinaut</li>
<li>桌面：Sublime Music (Linux) 和Sonixd (Windows/Linux/macOS)</li>
<li>CLI：Jellycli (Windows/Linux) 和STMP (Linux/macOS)</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>Navidrome是一个非常不错的程序，就是大家需要想办法下载到自己喜欢的歌曲，而且，歌曲也会占用服务器的一部分空间，服务器比较闲的朋友可以拿来耍耍，或者家里有软路由的也可以直接搭建在软路由上。</p>
</div></template>


