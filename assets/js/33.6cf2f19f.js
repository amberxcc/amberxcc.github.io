(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{328:function(t,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("img",{staticStyle:{zoom:"40%"},attrs:{src:"/2022-1/RESTAPI1.png"}})]),t._v(" "),a("blockquote",[a("p",[t._v('RESTful 是目前最流行的 API 设计规范，用于 Web 数据接口的设计。RESTful 的核心思想就是，客户端发出的数据操作指令都是"'),a("strong",[t._v("动词 + 宾语")]),t._v('"的结构。比如，'),a("code",[t._v("GET /articles")]),t._v("这个命令，"),a("code",[t._v("GET")]),t._v("是动词，"),a("code",[t._v("/articles")]),t._v("是宾语。动词在HTTP协议的请求方法体现，宾语则在URL中体现。")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"一、请求方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、请求方法"}},[t._v("#")]),t._v(" 一、请求方法")]),t._v(" "),a("p",[t._v("通常就是五种 HTTP 方法对应 CRUD 操作：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("GET：读取（Read）")])]),t._v(" "),a("li",[a("p",[t._v("POST：新建（Create）")])]),t._v(" "),a("li",[a("p",[t._v("PUT：更新（Update）")])]),t._v(" "),a("li",[a("p",[t._v("PATCH：更新（Update），通常是部分更新")])]),t._v(" "),a("li",[a("p",[t._v("DELETE：删除（Delete）")])])]),t._v(" "),a("p",[t._v("有些客户端只能使用"),a("code",[t._v("GET")]),t._v("和"),a("code",[t._v("POST")]),t._v("这两种方法。服务器必须接受"),a("code",[t._v("POST")]),t._v("模拟其他三个方法（"),a("code",[t._v("PUT")]),t._v("、"),a("code",[t._v("PATCH")]),t._v("、"),a("code",[t._v("DELETE")]),t._v("）。这时，客户端发出的 HTTP 请求，要加上"),a("code",[t._v("X-HTTP-Method-Override")]),t._v("属性，告诉服务器应该使用哪一个动词，覆盖"),a("code",[t._v("POST")]),t._v("方法。")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("/api/Person/4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("X-HTTP-Method-Override")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("PUT")])]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"二、url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、url"}},[t._v("#")]),t._v(" 二、URL")]),t._v(" "),a("p",[t._v("URL表示资源实体，而实体的表现形式（即表现层）则在头部信息体现，也就是文件类型，如json、html。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_2-1-使用名词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用名词"}},[t._v("#")]),t._v(" 2.1 使用名词")]),t._v(" "),a("p",[t._v("宾语就是 API 的 URL，是 HTTP 动词作用的对象。它应该是"),a("strong",[t._v("名词")]),t._v("，"),a("strong",[t._v("不能是动词")]),t._v("。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_2-2-使用名词复数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用名词复数"}},[t._v("#")]),t._v(" 2.2 使用名词复数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("API表示获取一个数据集合时，使用复数表示，如"),a("code",[t._v("GET /articles")]),t._v("（获取所有文章）")])]),t._v(" "),a("li",[a("p",[t._v("API表示获取一个数据集合中的单个数据元素时，这个集合也建议使用复数，如"),a("code",[t._v("GET /articles/2")]),t._v("（获取编号为2的文章）")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_2-3-避免多级-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-避免多级-url"}},[t._v("#")]),t._v(" 2.3 避免多级 URL")]),t._v(" "),a("p",[t._v("资源需要多级分类时，写出多级的 URL不利于扩展，语义也不明确：")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("GET /authors/12/categories/2\n")])])]),a("p",[t._v("更好的做法是，除了第一级，其他级别都用查询字符串表达：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /authors/12?categories=2\nGET /articles?published=true\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"三、响应状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、响应状态码"}},[t._v("#")]),t._v(" 三、响应状态码")]),t._v(" "),a("p",[t._v("客户端的每一次请求，服务器都必须给出回应。以下四种状态码，覆盖了绝大部分 API响应 可能遇到的情况：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("2xx")]),t._v("：操作成功")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("3xx")]),t._v("：重定向")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("4xx")]),t._v("：客户端错误")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("5xx")]),t._v("：服务器错误")])])]),t._v(" "),a("p",[t._v("每一种状态码都有标准的（或者约定的）解释，客户端只需查看状态码，就可以判断出发生了什么情况，所以"),a("strong",[t._v("服务端应返回尽可能精确的状态码")]),t._v("。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_3-1-2xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2xx状态码"}},[t._v("#")]),t._v(" 3.1 2xx状态码")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("GET：200 OK")])]),t._v(" "),a("li",[a("p",[t._v("POST：201 Created（表示生成了新的资源）")])]),t._v(" "),a("li",[a("p",[t._v("PUT：200 OK")])]),t._v(" "),a("li",[a("p",[t._v("PATCH：200 OK")])]),t._v(" "),a("li",[a("p",[t._v("DELETE：204 No Content（表示资源已经不存在）")])]),t._v(" "),a("li",[a("p",[t._v("202 Accepted（表示服务器已经收到请求，但还未进行处理，会在未来再处理，通常用于异步操作）")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_3-2-3xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3xx状态码"}},[t._v("#")]),t._v(" 3.2 3xx状态码")]),t._v(" "),a("p",[t._v("API 级别用到的的3xx状态码主要是"),a("code",[t._v("303 See Other")]),t._v("，表示参考另一个 URL。")]),t._v(" "),a("p",[t._v("它与"),a("code",[t._v("302")]),t._v("和"),a("code",[t._v("307")]),t._v('的含义一样，也是"暂时重定向"，区别在于'),a("code",[t._v("302")]),t._v("和"),a("code",[t._v("307")]),t._v("用于"),a("code",[t._v("GET")]),t._v("请求，而"),a("code",[t._v("303")]),t._v("用于"),a("code",[t._v("POST")]),t._v("、"),a("code",[t._v("PUT")]),t._v("和"),a("code",[t._v("DELETE")]),t._v("请求。收到"),a("code",[t._v("303")]),t._v("以后，浏览器不会自动跳转，而会让用户自己决定下一步怎么办，例如：")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[t._v("303")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[t._v("See Other")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("/api/orders/12345")])]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_3-3-4xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4xx状态码"}},[t._v("#")]),t._v(" 3.3 4xx状态码")]),t._v(" "),a("p",[a("code",[t._v("4xx")]),t._v("状态码表示客户端错误，主要有下面几种：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("400 Bad Request")]),t._v("：服务器不理解客户端的请求，未做任何处理。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("401 Unauthorized")]),t._v("：用户未提供身份验证凭据，或者没有通过身份验证。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("403 Forbidden")]),t._v("：用户通过了身份验证，但是不具有访问资源所需的权限。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("404 Not Found")]),t._v("：所请求的资源不存在，或不可用。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("405 Method Not Allowed")]),t._v("：用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("410 Gone")]),t._v("：所请求的资源已从这个地址转移，不再可用。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("415 Unsupported Media Type")]),t._v("：客户端要求的返回格式不支持。如：API 只能返回 JSON 格式，但是客户端要求返回 XML 格式。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("422 Unprocessable Entity")]),t._v(" ：客户端上传的附件无法处理，导致请求失败。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("429 Too Many Requests")]),t._v("：客户端的请求次数超过限额。")])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_3-4-5xx状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-5xx状态码"}},[t._v("#")]),t._v(" 3.4 5xx状态码")]),t._v(" "),a("p",[a("code",[t._v("5xx")]),t._v("状态码表示服务端错误。一般来说，API 不会向用户透露服务器的详细信息，所以只要两个状态码就够了。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("500 Internal Server Error")]),t._v("：客户端请求有效，服务器处理时发生了意外。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("503 Service Unavailable")]),t._v("：服务器无法处理请求，一般用于网站维护状态。")])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"四、响应体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、响应体"}},[t._v("#")]),t._v(" 四、响应体")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_4-1-返回json对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-返回json对象"}},[t._v("#")]),t._v(" 4.1 返回json对象")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("请求头中的"),a("code",[t._v("ACCEPT")]),t._v("属性要设成"),a("code",[t._v("application/json")]),t._v("，告诉服务器，可以接受 JSON 格式")])]),t._v(" "),a("li",[a("p",[t._v("响应头中的"),a("code",[t._v("Content-Type")]),t._v("属性要设为"),a("code",[t._v("application/json")])])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_4-2-返回与状态码匹配的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-返回与状态码匹配的内容"}},[t._v("#")]),t._v(" 4.2 返回与状态码匹配的内容")]),t._v(" "),a("p",[t._v("状态码应与响应体的内容匹配，如下示例就不匹配：")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[t._v("OK")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("application/json")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token application-json"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failure"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("p",[t._v("响应内容应该与状态码体现的语义相同或相配合，易于理解，修改后：")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token status-code number"}},[t._v("400")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[t._v("Bad Request")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header"}},[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("application/json")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token application-json"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid payoad."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_4-3-提供连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-提供连接"}},[t._v("#")]),t._v(" 4.3 提供连接")]),t._v(" "),a("p",[t._v("在设计良好的RESTful API 中，客户端只需知道几个顶级资源的 URL，其他资源的 URL 则从响应中包含的链接上发掘。这就好比浏览网络时，你在自己知道的网页中点击链接发掘新网页一样。")]),t._v(" "),a("p",[t._v("例如GitHub 的 API 都在 "),a("a",{attrs:{href:"https://api.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("api.github.com"),a("OutboundLink")],1),t._v(" 这个域名。访问它，就可以得到其他 URL：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"feeds_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/feeds"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followers_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/followers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"following_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/user/following{/target}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gists_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/gists{/gist_id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hub_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.github.com/hub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful API 最佳实践"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.github.com/cn/rest",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub REST API"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft RESTful web API design"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);