(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{337:function(t,r,e){"use strict";e.r(r);var s=e(5),n=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("nps是一款轻量级、高性能、功能强大的内网穿透代理服务器。目前支持tcp、udp流量转发，可支持任何tcp、udp上层协议（访问内网网站、本地支付接口调试、ssh访问、远程桌面，内网dns解析等等……），此外还支持内网http代理、内网socks5代理、p2p等，并带有功能强大的web管理端。")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_1-应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用场景"}},[t._v("#")]),t._v(" 1. 应用场景")]),t._v(" "),e("ol",[e("li",[t._v("做微信公众号开发、小程序开发等----\x3e 域名代理模式")]),t._v(" "),e("li",[t._v("想在外网通过ssh连接内网的机器，做云服务器到内网服务器端口的映射，----\x3e tcp代理模式")]),t._v(" "),e("li",[t._v("在非内网环境下使用内网dns，或者需要通过udp访问内网机器等----\x3e udp代理模式")]),t._v(" "),e("li",[t._v("在外网使用HTTP代理访问内网站点----\x3e http代理模式")]),t._v(" "),e("li",[t._v("搭建一个内网穿透ss，在外网如同使用内网vpn一样访问内网资源或者设备----\x3e socks5代理模式")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_2-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备工作"}},[t._v("#")]),t._v(" 2. 准备工作")]),t._v(" "),e("ul",[e("li",[t._v("一台带有公网IP的云服务器（运行nps服务端）")]),t._v(" "),e("li",[t._v("使用内网IP的服务器（运行nps客户端）")])]),t._v(" "),e("center",[e("img",{staticStyle:{zoom:"40%"},attrs:{src:"/2022-1/nps-准备.png"}})]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_3-启动nps服务端-docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动nps服务端-docker安装"}},[t._v("#")]),t._v(" 3. 启动nps服务端（Docker安装）")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("docker pull ffdfgdfg/nps")])])]),t._v(" "),e("li",[e("p",[t._v("下载"),e("a",{attrs:{href:"https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fehang-io%2Fnps%2Ftree%2Fmaster%2Fconf",target:"_blank",rel:"noopener noreferrer"}},[t._v("conf文件"),e("OutboundLink")],1),t._v("夹并解压，或前往"),e("a",{attrs:{href:"https://github.com/ehang-io/nps",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目主页"),e("OutboundLink")],1),t._v("自行下载")])]),t._v(" "),e("li",[e("p",[t._v("阅读"),e("a",{attrs:{href:"https://ehang-io.github.io/nps/#/example",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v("，根据需求修改配置文件（可选）")])]),t._v(" "),e("li",[e("p",[t._v("启动："),e("code",[t._v("docker run -d --name nps --net=host -v <本机conf目录>:/conf ffdfgdfg/nps")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("启动后，使用docker logs nps 检查下是否有报错（端口冲突之类的）")])]),t._v(" "),e("p",[t._v("启动成功进入nps web管理界面（初始账号密码：admin/123）：\n"),e("center",[e("img",{staticStyle:{zoom:"30%"},attrs:{src:"/2022-1/nps-管理界面.png"}})])],1),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_4-管理界面配置客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-管理界面配置客户端"}},[t._v("#")]),t._v(" 4. 管理界面配置客户端")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("创建客户端\n"),e("center",[e("img",{staticStyle:{zoom:"30%"},attrs:{src:"/2022-1/nps-客户端.png"}})])],1)]),t._v(" "),e("li",[e("p",[t._v("配置客户端（TCP隧道）\n"),e("center",[e("img",{staticStyle:{zoom:"30%"},attrs:{src:"/2022-1/nps-TCP隧道.png"}})])],1)])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"_5-启动npc客户端-docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动npc客户端-docker安装"}},[t._v("#")]),t._v(" 5. 启动npc客户端（Docker安装）")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("docker pull ffdfgdfg/npc")])])]),t._v(" "),e("li",[e("p",[t._v("下载conf文件夹并解压，或前往项目主页自行下载")])]),t._v(" "),e("li",[e("p",[t._v("阅读文档, 自定义按照不同的启动方式启动（可选）")])]),t._v(" "),e("li",[e("p",[t._v("启动docker：")])])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不指定npc配置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d --name npc --net"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host ffdfgdfg/npc -server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip:port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -vkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("web界面中显示的密钥"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("other"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动指定npc配置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d --name npc --net"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host -v "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本机conf目录"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":/conf ffdfgdfg/npc -config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/conf/npc.conf\n\n")])])]),e("br"),t._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://ehang-io.github.io/nps/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整官方文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.awsl9527.cn/archives/748.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nps使用教程"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);r.default=n.exports}}]);