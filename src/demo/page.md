---
# 这是文章的标题
title: 搭建私人多端音乐平台
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Ms.Hon
# 设置写作时间
date: 2023-07-20
# 一个页面可以有多个分类
category:
  - 分享
# 一个页面可以有多个标签
tag:
  - 音乐
  - vps
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---


<!-- more -->





## 前言

买了一台vps做科学上网，却仅仅只做了科学上网！这不符合我们勤俭节约的理念，所以《高效使用你的VPS》将会教大家如何高效地榨干vps，以获得最大的收益。《高效使用你的VPS》未来可能持续更新（我得自己先体验过才会看情况值不值得更新）。

## 准备

本期教程所需要的东西：

- 域名一个（推荐解析到CloudFlare，有免费的CDN）
- vps云服务器一台，预装Linux系统
- 手

## 搭建

本教程采用操作较为简单的docker安装，这里推荐大家安装宝塔面板（https://www.bt.cn/ ） 再从宝塔面板一键安装，这样既方便建站，又方便对vps进行管理。安装宝塔面板非常简单，这里就不写了。

### Navidrome优缺点

**优点：**

- 内存占用低（待机状态40Mb左右）
- 界面简洁，支持中文
- 支持Subsonic API，也就是说Subsonic能用的客户端，Navidrome都能用

**缺点：**

- 好像没法显示歌词
- 不支持通过界面删除歌曲（作者说的是为了安全考虑，我个人感觉过于谨慎了）

### 安装docker

直接在宝塔面板的应用商店里面下载就可以了

[![1211_1](https://pic.sky350.cn/images/1211_1.png)](https://pic.sky350.cn/images/1211_1.png)

### 安装docker-compose

这时候一般是没有安装docker-compose的，大家可以连接ssh敲一下docker-compose看看有没有下面的提示，没有的话就得安装。

[![img](https://pic.sky350.cn/images/1211_2.png)](https://pic.sky350.cn/images/1211_2.png)

安装也不难，首先设置国内镜像源

```
vi /etc/docker/daemon.json
```

写入下面的内容

```
{ "registry-mirrors": ["https://cq20bk8v.mirror.aliyuncs.com"] }
```

按esc键 在输入 :wq

四条命令敲一下

```
yum install epel-release
yum install python3-pip 
pip3 install --upgrade pip 
pip3 install docker-compose
```

若是报错：ModuleNotFoundError: No module named ‘setuptools_rust’

解决方法：pip3 install -U pip setuptools

这一步就完成了

### 部署navidrome

这一步还是比较简单的，宝塔面板—->文件，点击根目录就到vps的根目录了，选择一个位置用来存放歌曲，我个人则是在home目录下创建了个music文件夹，music里面再创建两个文件夹，一个data，一个song，前者用来存放缓存，后者用来存放歌曲。

[![1211_3](https://pic.sky350.cn/images/1211_3.png)](https://pic.sky350.cn/images/1211_3.png)

此外，仍需在music目录下创建一个名为`docker-compose.yaml`的文件，双击编辑，内容复制下面的内容。

```
version: "3"
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
```

注意：在安装navidrome的同时，我们顺便安装一个miniserve文件服务器，可以用来上传音乐文件，如果你存储音乐的文件夹和我不一样，请将两处`/home/music/song`都进行修改。

- `/home/music/data`：用来存储navidrome缓存的位置
- `/home/music/song`：存储音乐文件的路径
- `admin:123456`：miniserve文件服务器的用户名和密码，格式 用户名:密码

下面连接ssh

```
cd /home/music
#先进入music目录
docker-compose up -d
#再输入上面这条命令开始部署
```

[![1211_3_1](https://pic.sky350.cn/images/1211_3_1.png)](https://pic.sky350.cn/images/1211_3_1.png)

done就完成部署了。

### 配置&优化

打开IP:4533（navidrome），创建用户名和密码

[![1211_4](https://pic.sky350.cn/images/1211_4.png)](https://pic.sky350.cn/images/1211_4.png)

点击右上角头像，点击Personal，Language选择简体中文。

[![1211_4_1](https://pic.sky350.cn/images/1211_4_1.png)](https://pic.sky350.cn/images/1211_4_1.png)

当我们上传音乐文件之后，点击头像左边的图标可以快速扫描音乐文件。

[![1211_4_2](https://pic.sky350.cn/images/1211_4_2.png)](https://pic.sky350.cn/images/1211_4_2.png)

打开IP:4534（miniserve），输入我们预先设置的用户名和密码

[![1211_5](https://pic.sky350.cn/images/1211_5.png)](https://pic.sky350.cn/images/1211_5.png)

[![1211_6](https://pic.sky350.cn/images/1211_6.png)](https://pic.sky350.cn/images/1211_6.png)

到此工作就完成了，我们只需要将下载到的音乐上传到服务器就好了。

[![img](https://pic.sky350.cn/images/1211_7.png)](https://pic.sky350.cn/images/1211_7.png)

### 适配APP平台

Navidrome 可以与以下所有 Subsonic 客户端兼容。

- iOS：play:Sub、 substreamer、 Amperfy和 iSub
- 安卓：DSub， Subtracks， substreamer， Ultrasonic和 Audinaut
- 桌面：Sublime Music (Linux) 和Sonixd (Windows/Linux/macOS)
- CLI：Jellycli (Windows/Linux) 和STMP (Linux/macOS)

## 总结

Navidrome是一个非常不错的程序，就是大家需要想办法下载到自己喜欢的歌曲，而且，歌曲也会占用服务器的一部分空间，服务器比较闲的朋友可以拿来耍耍，或者家里有软路由的也可以直接搭建在软路由上。
