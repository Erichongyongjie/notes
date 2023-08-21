<template><div><p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
<!-- more -->
<h2 id="_1-工具说明" tabindex="-1"><a class="header-anchor" href="#_1-工具说明" aria-hidden="true">#</a> 1.工具说明</h2>
<p>一款命令行式B站下载器，软件混流时需要外部程序：普通视频（ffmpeg 或 mp4box），杜比视界（ffmpeg5.0 以上或新版 mp4box）。</p>
<p>下载器下载地址 <a href="https://github.com/nilaoda/BBDown/releases" target="_blank" rel="noopener noreferrer">Bilibili Downloader<ExternalLinkIcon/></a></p>
<figure><img src="https://img-blog.csdnimg.cn/78db0126b800486b938def12ed06d6a2.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>混流工具下载地址 <a href="https://www.gyan.dev/ffmpeg/builds/" target="_blank" rel="noopener noreferrer">ffmpeg<ExternalLinkIcon/></a> 或 <a href="https://gpac.wp.imt.fr/downloads/" target="_blank" rel="noopener noreferrer">mp4box<ExternalLinkIcon/></a>  建议下载 mp4box 官网交互比较友好 😄</p>
<figure><img src="https://img-blog.csdnimg.cn/20c45cd6ee3944ed95f790a2c6a0a571.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_2-安装使用" tabindex="-1"><a class="header-anchor" href="#_2-安装使用" aria-hidden="true">#</a> 2.安装使用</h2>
<p>2.1 安装<br>
本次使用的是<strong>Bilibili Downloader + mp4box</strong>的组合，安装一共两个文件：</p>
<p>1️⃣(Bilibili Downloader) <strong>BBDown_v1.4.8_20220127_win-x64.zip</strong> 解压获得 <strong>BBDown.exe</strong> 不能直接执行要使用 cmd 命令，使用方法下边会详细说明。</p>
<p>2️⃣(mp4box) <strong>gpac-2.0-rev0-g418db414-master-x64.exe</strong> 直接安装即可。</p>
<p>2.2 进入命令行界面<br>
在文件 BBDown.exe 所在的文件夹的地址栏输入cmd 然后敲回车进入 Windows 系统的命令行工具界面：</p>
<figure><img src="https://img-blog.csdnimg.cn/994aa4b5eab94093a5164f4d8309ea4d.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>命令行工具界面：</p>
<figure><img src="https://img-blog.csdnimg.cn/ee589999bae7478ebc106cb91747929d.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.2 扫码登录B站账号<br>
在命令行工具内输入 1️⃣ BBDown.exe login 按回车（输入 b 后按 Tab 键即可补全为 BBDown.exe 再敲空格+login即可） 2️⃣ 打开生成的登录二维码qrcode.png 3️⃣ 使用手机app进行扫码登录</p>
<figure><img src="https://img-blog.csdnimg.cn/5cb235b3681f4ad9b4a4e3fbca191c63.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>登录成功后：</p>
<figure><img src="https://img-blog.csdnimg.cn/2ddc361d63c742fdb57f86e107f412be.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>2.3 文件下载<br>
获取视频连接，可在app内分享视频获取：</p>
<figure><img src="https://img-blog.csdnimg.cn/57641c5d187f4ee79f63b010a079aec9.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>开始下载，输入BBDown.exe 地址 -app --use-mp4box（复制视频地址后在命令行工具内点击鼠标右键即可粘贴）敲回车即可：</p>
<figure><img src="https://img-blog.csdnimg.cn/54041bc5713f4fe290a9868c8033d3d3.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="_3-使用ffmpeg混流" tabindex="-1"><a class="header-anchor" href="#_3-使用ffmpeg混流" aria-hidden="true">#</a> 3.使用ffmpeg混流</h2>
<p>使用mp4box混流合成的mp4格式视频文件有些平台无法识别，这里介绍一下使用ffmpeg进行混流的方法。首先是下载混流工具：</p>
<figure><img src="https://img-blog.csdnimg.cn/e1c88c8e1d4241e6b6d04cf0c834b3e3.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下载后将压缩包内的<strong>ffmpeg.exe</strong>放在<strong>BBDown.exe</strong>同级目录下：</p>
<figure><img src="https://img-blog.csdnimg.cn/24ea5538fca7454a936c3023c63d0711.png#pic_center" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>下载视频时不要添加--use-mp4box参数，直接使用BBDown.exe 地址即可下载。</p>
<h2 id="_4-其他命令" tabindex="-1"><a class="header-anchor" href="#_4-其他命令" aria-hidden="true">#</a> 4.其他命令</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Description:
  BBDown是一个免费且便捷高效的哔哩哔哩下载/解析软件.

Usage:
  BBDown &lt;url> [command] [options]

Arguments:
  &lt;url>  视频地址 或 av|bv|BV|ep|ss

Options:
  -tv, --use-tv-api                              使用TV端解析模式
  -app, --use-app-api                            使用APP端解析模式
  -intl, --use-intl-api                          使用国际版(东南亚视频)解析模式
  --use-mp4box                                   使用MP4Box来混流
  -e, --encoding-priority &lt;encoding-priority>    视频编码的选择优先级, 用逗号分割 例: "hevc,av1,avc"
  -q, --dfn-priority &lt;dfn-priority>              画质优先级,用逗号分隔 例: "8K 超高清, 1080P 高码率, HDR 真彩, 杜比视界"
  -info, --only-show-info                        仅解析而不进行下载
  --show-all                                     展示所有分P标题
  --use-aria2c                                   调用aria2c进行下载(你需要自行准备好二进制可执行文件)
  -ia, --interactive                             交互式选择清晰度
  -hs, --hide-streams                            不要显示所有可用音视频流
  -mt, --multi-thread                            使用多线程下载(默认开启)
  --video-only                                   仅下载视频
  --audio-only                                   仅下载音频
  --danmaku-only                                 仅下载弹幕
  --sub-only                                     仅下载字幕
  --cover-only                                   仅下载封面
  --debug                                        输出调试日志
  --skip-mux                                     跳过混流步骤
  --skip-subtitle                                跳过字幕下载
  --skip-cover                                   跳过封面下载
  --force-http                                   下载音视频时强制使用HTTP协议替换HTTPS(默认开启)
  -dd, --download-danmaku                        下载弹幕
  --skip-ai                                      跳过AI字幕下载(默认开启)
  --video-ascending                              视频升序(最小体积优先)
  --audio-ascending                              音频升序(最小体积优先)
  --allow-pcdn                                   不替换PCDN域名, 仅在正常情况与--upos-host均无法下载时使用
  -F, --file-pattern &lt;file-pattern>              使用内置变量自定义单P存储文件名:

                                                 &lt;videoTitle>: 视频主标题
                                                 &lt;pageNumber>: 视频分P序号
                                                 &lt;pageNumberWithZero>: 视频分P序号(前缀补零)
                                                 &lt;pageTitle>: 视频分P标题
                                                 &lt;aid>: 视频aid
                                                 &lt;cid>: 视频cid
                                                 &lt;dfn>: 视频清晰度
                                                 &lt;res>: 视频分辨率
                                                 &lt;fps>: 视频帧率
                                                 &lt;videoCodecs>: 视频编码
                                                 &lt;videoBandwidth>: 视频码率
                                                 &lt;audioCodecs>: 音频编码
                                                 &lt;audioBandwidth>: 音频码率
                                                 &lt;ownerName>: 上传者名称
                                                 &lt;ownerMid>: 上传者mid
                                                 &lt;apiType>: API类型(TV/APP/INTL/WEB)

                                                 默认为: &lt;videoTitle>
  -M, --multi-file-pattern &lt;multi-file-pattern>  使用内置变量自定义多P存储文件名:

                                                 默认为: &lt;videoTitle>/[P&lt;pageNumberWithZero>]&lt;pageTitle>
  -p, --select-page &lt;select-page>                选择指定分p或分p范围: (-p 8 或 -p 1,2 或 -p 3-5 或 -p ALL 或 -p LAST)
  --language &lt;language>                          设置混流的音频语言(代码), 如chi, jpn等
  -c, --cookie &lt;cookie>                          设置字符串cookie用以下载网页接口的会员内容
  -token, --access-to
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新记录" tabindex="-1"><a class="header-anchor" href="#更新记录" aria-hidden="true">#</a> 更新记录</h2>
<p>20230622</p>
<ul>
<li>WEB 使用 wbi 接口, 现在不登录可以下载 1080P 的视频了 <a href="https://github.com/nilaoda/BBDown/pull/616" target="_blank" rel="noopener noreferrer">#616<ExternalLinkIcon/></a></li>
<li>将 <code v-pre>--bandwith-ascending</code> 拆分为 <code v-pre>--video-ascending</code> 与 <code v-pre>--audio-ascending</code> <a href="https://github.com/nilaoda/BBDown/pull/616" target="_blank" rel="noopener noreferrer">#616<ExternalLinkIcon/></a></li>
<li>优化 pcdn 解析, 避免有些 pcdn 参数不全, 替换后无法下载, 添加 <code v-pre>--allow-pcdn</code> 以允许 pcdn 下载 <a href="https://github.com/nilaoda/BBDown/pull/616" target="_blank" rel="noopener noreferrer">#616<ExternalLinkIcon/></a></li>
<li>其他优化</li>
</ul>
<p>————————————————</p>
</div></template>


