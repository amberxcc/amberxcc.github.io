(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{456:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("center",[a("img",{attrs:{src:"/2022-1/RESTAPI1.png",height:"50%"}})]),s._v(" "),a("blockquote",[a("p",[s._v('RESTful 是目前最流行的 API 设计规范，用于 Web 数据接口的设计。RESTful 的核心思想就是，客户端发出的数据操作指令都是"'),a("strong",[s._v("动词 + 宾语")]),s._v('"的结构。比如，'),a("code",[s._v("GET /articles")]),s._v("这个命令，"),a("code",[s._v("GET")]),s._v("是动词，"),a("code",[s._v("/articles")]),s._v("是宾语。动词在HTTP协议的请求方法体现，宾语则在URL中体现。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"一、请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、请求方法"}},[s._v("#")]),s._v(" 一、请求方法")]),s._v(" "),a("p",[s._v("通常就是五种 HTTP 方法对应 CRUD 操作：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("GET：读取（Read）")])]),s._v(" "),a("li",[a("p",[s._v("POST：新建（Create）")])]),s._v(" "),a("li",[a("p",[s._v("PUT：更新（Update）")])]),s._v(" "),a("li",[a("p",[s._v("PATCH：更新（Update），通常是部分更新")])]),s._v(" "),a("li",[a("p",[s._v("DELETE：删除（Delete）")])])]),s._v(" "),a("p",[s._v("有些客户端只能使用"),a("code",[s._v("GET")]),s._v("和"),a("code",[s._v("POST")]),s._v("这两种方法。服务器必须接受"),a("code",[s._v("POST")]),s._v("模拟其他三个方法（"),a("code",[s._v("PUT")]),s._v("、"),a("code",[s._v("PATCH")]),s._v("、"),a("code",[s._v("DELETE")]),s._v("）。这时，客户端发出的 HTTP 请求，要加上"),a("code",[s._v("X-HTTP-Method-Override")]),s._v("属性，告诉服务器应该使用哪一个动词，覆盖"),a("code",[s._v("POST")]),s._v("方法。")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[s._v("/api/Person/4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")])]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("X-HTTP-Method-Override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("PUT")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("br"),s._v(" "),a("h2",{attrs:{id:"二、url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、url"}},[s._v("#")]),s._v(" 二、URL")]),s._v(" "),a("p",[s._v("URL表示资源实体，而实体的表现形式（即表现层）则在头部信息体现，也就是文件类型，如json、html。")]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_2-1-使用名词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用名词"}},[s._v("#")]),s._v(" 2.1 使用名词")]),s._v(" "),a("p",[s._v("宾语就是 API 的 URL，是 HTTP 动词作用的对象。它应该是"),a("strong",[s._v("名词")]),s._v("，"),a("strong",[s._v("不能是动词")]),s._v("。")]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_2-2-使用名词复数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用名词复数"}},[s._v("#")]),s._v(" 2.2 使用名词复数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("API表示获取一个数据集合时，使用复数表示，如"),a("code",[s._v("GET /articles")]),s._v("（获取所有文章）")])]),s._v(" "),a("li",[a("p",[s._v("API表示获取一个数据集合中的单个数据元素时，这个集合也建议使用复数，如"),a("code",[s._v("GET /articles/2")]),s._v("（获取编号为2的文章）")])])]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_2-3-避免多级-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-避免多级-url"}},[s._v("#")]),s._v(" 2.3 避免多级 URL")]),s._v(" "),a("p",[s._v("资源需要多级分类时，写出多级的 URL不利于扩展，语义也不明确：")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[s._v("GET /authors/12/categories/2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更好的做法是，除了第一级，其他级别都用查询字符串表达：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GET /authors/12?categories=2\nGET /articles?published=true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("br"),s._v(" "),a("h2",{attrs:{id:"三、响应状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、响应状态码"}},[s._v("#")]),s._v(" 三、响应状态码")]),s._v(" "),a("p",[s._v("客户端的每一次请求，服务器都必须给出回应。以下四种状态码，覆盖了绝大部分 API响应 可能遇到的情况：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("2xx")]),s._v("：操作成功")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("3xx")]),s._v("：重定向")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("4xx")]),s._v("：客户端错误")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("5xx")]),s._v("：服务器错误")])])]),s._v(" "),a("p",[s._v("每一种状态码都有标准的（或者约定的）解释，客户端只需查看状态码，就可以判断出发生了什么情况，所以"),a("strong",[s._v("服务端应返回尽可能精确的状态码")]),s._v("。")]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_3-1-2xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2xx状态码"}},[s._v("#")]),s._v(" 3.1 2xx状态码")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("GET：200 OK")])]),s._v(" "),a("li",[a("p",[s._v("POST：201 Created（表示生成了新的资源）")])]),s._v(" "),a("li",[a("p",[s._v("PUT：200 OK")])]),s._v(" "),a("li",[a("p",[s._v("PATCH：200 OK")])]),s._v(" "),a("li",[a("p",[s._v("DELETE：204 No Content（表示资源已经不存在）")])]),s._v(" "),a("li",[a("p",[s._v("202 Accepted（表示服务器已经收到请求，但还未进行处理，会在未来再处理，通常用于异步操作）")])])]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_3-2-3xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3xx状态码"}},[s._v("#")]),s._v(" 3.2 3xx状态码")]),s._v(" "),a("p",[s._v("API 级别用到的的3xx状态码主要是"),a("code",[s._v("303 See Other")]),s._v("，表示参考另一个 URL。")]),s._v(" "),a("p",[s._v("它与"),a("code",[s._v("302")]),s._v("和"),a("code",[s._v("307")]),s._v('的含义一样，也是"暂时重定向"，区别在于'),a("code",[s._v("302")]),s._v("和"),a("code",[s._v("307")]),s._v("用于"),a("code",[s._v("GET")]),s._v("请求，而"),a("code",[s._v("303")]),s._v("用于"),a("code",[s._v("POST")]),s._v("、"),a("code",[s._v("PUT")]),s._v("和"),a("code",[s._v("DELETE")]),s._v("请求。收到"),a("code",[s._v("303")]),s._v("以后，浏览器不会自动跳转，而会让用户自己决定下一步怎么办，例如：")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[s._v("303")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[s._v("See Other")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("/api/orders/12345")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("br"),s._v(" "),a("h3",{attrs:{id:"_3-3-4xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4xx状态码"}},[s._v("#")]),s._v(" 3.3 4xx状态码")]),s._v(" "),a("p",[s._v("**"),a("code",[s._v("4xx")]),s._v("**状态码表示客户端错误，主要有下面几种：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("400 Bad Request")]),s._v("：服务器不理解客户端的请求，未做任何处理。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("401 Unauthorized")]),s._v("：用户未提供身份验证凭据，或者没有通过身份验证。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("403 Forbidden")]),s._v("：用户通过了身份验证，但是不具有访问资源所需的权限。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("404 Not Found")]),s._v("：所请求的资源不存在，或不可用。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("405 Method Not Allowed")]),s._v("：用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("410 Gone")]),s._v("：所请求的资源已从这个地址转移，不再可用。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("415 Unsupported Media Type")]),s._v("：客户端要求的返回格式不支持。如：API 只能返回 JSON 格式，但是客户端要求返回 XML 格式。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("422 Unprocessable Entity")]),s._v(" ：客户端上传的附件无法处理，导致请求失败。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("429 Too Many Requests")]),s._v("：客户端的请求次数超过限额。")])])]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_3-4-5xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-5xx状态码"}},[s._v("#")]),s._v(" 3.4 5xx状态码")]),s._v(" "),a("p",[a("code",[s._v("5xx")]),s._v("状态码表示服务端错误。一般来说，API 不会向用户透露服务器的详细信息，所以只要两个状态码就够了。")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("500 Internal Server Error")]),s._v("：客户端请求有效，服务器处理时发生了意外。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("503 Service Unavailable")]),s._v("：服务器无法处理请求，一般用于网站维护状态。")])])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"四、响应体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、响应体"}},[s._v("#")]),s._v(" 四、响应体")]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_4-1-返回json对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-返回json对象"}},[s._v("#")]),s._v(" 4.1 返回json对象")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("请求头中的"),a("code",[s._v("ACCEPT")]),s._v("属性要设成"),a("code",[s._v("application/json")]),s._v("，告诉服务器，可以接受 JSON 格式")])]),s._v(" "),a("li",[a("p",[s._v("响应头中的"),a("code",[s._v("Content-Type")]),s._v("属性要设为"),a("code",[s._v("application/json")])])])]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_4-2-返回与状态码匹配的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-返回与状态码匹配的内容"}},[s._v("#")]),s._v(" 4.2 返回与状态码匹配的内容")]),s._v(" "),a("p",[s._v("状态码应与响应体的内容匹配，如下示例就不匹配：")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[s._v("OK")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("application/json")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token application-json"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("响应内容应该与状态码体现的语义相同或相配合，易于理解，修改后：")]),s._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[s._v("HTTP/1.1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[s._v("400")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[s._v("Bad Request")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[s._v("application/json")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token application-json"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Invalid payoad."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("br"),s._v(" "),a("h3",{attrs:{id:"_4-3-提供连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-提供连接"}},[s._v("#")]),s._v(" 4.3 提供连接")]),s._v(" "),a("p",[s._v("在设计良好的RESTful API 中，客户端只需知道几个顶级资源的 URL，其他资源的 URL 则从响应中包含的链接上发掘。这就好比浏览网络时，你在自己知道的网页中点击链接发掘新网页一样。")]),s._v(" "),a("p",[s._v("例如GitHub 的 API 都在 "),a("a",{attrs:{href:"https://api.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("api.github.com"),a("OutboundLink")],1),s._v(" 这个域名。访问它，就可以得到其他 URL：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"feeds_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/feeds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"followers_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/user/followers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"following_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/user/following{/target}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gists_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/gists{/gist_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"hub_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://api.github.com/hub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("br"),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("RESTful API 最佳实践"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.github.com/cn/rest",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub REST API"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design",target:"_blank",rel:"noopener noreferrer"}},[s._v("Microsoft RESTful web API design"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);