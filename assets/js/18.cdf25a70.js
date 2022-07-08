(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{313:function(t,_,v){"use strict";v.r(_);var a=v(5),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"逻辑库管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逻辑库管理"}},[t._v("#")]),t._v(" 逻辑库管理")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("语句")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CREATE DATABASE 逻辑库名;")]),t._v(" "),v("td",[t._v("创建逻辑库")])]),t._v(" "),v("tr",[v("td",[t._v("SHOW DATABASES;")]),t._v(" "),v("td",[t._v("显示所有逻辑库")])]),t._v(" "),v("tr",[v("td",[t._v("DROP DATABASE 逻辑库名;")]),t._v(" "),v("td",[t._v("删除逻辑库")])]),t._v(" "),v("tr",[v("td",[t._v("USE 逻辑库名;")]),t._v(" "),v("td",[t._v("选择逻辑库")])])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"数据表管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据表管理"}},[t._v("#")]),t._v(" 数据表管理")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("语句")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("SHOW TABLES;")]),t._v(" "),v("td",[t._v("显示所有数据表")])]),t._v(" "),v("tr",[v("td",[t._v("DESC table_name;")]),t._v(" "),v("td",[t._v("显示表结构")])]),t._v(" "),v("tr",[v("td",[t._v("SHOW CREATE TABLE table_name;")]),t._v(" "),v("td",[t._v("显示建表语句")])]),t._v(" "),v("tr",[v("td",[t._v("CREATE TABLE table_name;")]),t._v(" "),v("td",[t._v("创建表")])]),t._v(" "),v("tr",[v("td",[t._v("DROP TABLE table_name;")]),t._v(" "),v("td",[t._v("删除表")])]),t._v(" "),v("tr",[v("td",[t._v("ALTER TABLE table_name;")]),t._v(" "),v("td",[t._v("修改表")])])])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("创建表：")])]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 数据类型 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("列注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" 数据类型 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("列注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("表注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),v("blockquote",[v("p",[t._v("创建表名最好使用t_tablename，说明是真实存在的的表而不是视图。")])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("修改表：")])]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name\n\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加新字段：")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" 新列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 数据类型 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("列注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\n\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除字段：")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" 列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\n\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改字段类型和约束：")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODIFY")]),t._v(" 列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 数据类型 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("列注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\n\t"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改字段名：")]),t._v("\n\tCHANGE 列"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 新列名"),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 数据类型 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("约束"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("列注释"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#最后一个修改项使用分号结尾")]),t._v("\n")])])]),v("br"),t._v(" "),v("h2",{attrs:{id:"mysql常用数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql常用数据类型"}},[t._v("#")]),t._v(" MySQL常用数据类型")]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("数字类型：")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("大小")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("TINYINT")]),t._v(" "),v("td",[t._v("1 byte")])]),t._v(" "),v("tr",[v("td",[t._v("SMALLINT")]),t._v(" "),v("td",[t._v("2 byte")])]),t._v(" "),v("tr",[v("td",[t._v("MEDIUMINT")]),t._v(" "),v("td",[t._v("3 byte")])]),t._v(" "),v("tr",[v("td",[t._v("INT")]),t._v(" "),v("td",[t._v("4 byte")])]),t._v(" "),v("tr",[v("td",[t._v("BIGINT")]),t._v(" "),v("td",[t._v("8 byte")])]),t._v(" "),v("tr",[v("td",[t._v("FLOAT")]),t._v(" "),v("td",[t._v("4 byte")])]),t._v(" "),v("tr",[v("td",[t._v("DOUBLE")]),t._v(" "),v("td",[t._v("8 byte")])]),t._v(" "),v("tr",[v("td",[t._v("DECIMAL(m,d)")]),t._v(" "),v("td",[t._v("取决于m和d")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("注：float和double存在精度问题，若保存重要的带小数的数字，使用DECIMAL类型。")])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("字符串类型：")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("大小")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CHAR")]),t._v(" "),v("td",[t._v("1-255个字符")]),t._v(" "),v("td",[t._v("固定长度字符串")])]),t._v(" "),v("tr",[v("td",[t._v("VARCHAR")]),t._v(" "),v("td",[t._v("1-65535个字符")]),t._v(" "),v("td",[t._v("不固定长度字符串（指定最大长度）")])]),t._v(" "),v("tr",[v("td",[t._v("TEXT")]),t._v(" "),v("td",[t._v("1-65535个字符")]),t._v(" "),v("td",[t._v("不确定长度字符串")])]),t._v(" "),v("tr",[v("td",[t._v("MEDIUMTEXT")]),t._v(" "),v("td",[t._v("1-一千六百万个字符")]),t._v(" "),v("td",[t._v("不确定长度字符串")])]),t._v(" "),v("tr",[v("td",[t._v("LONGTEXT")]),t._v(" "),v("td",[t._v("1-42亿个字符")]),t._v(" "),v("td",[t._v("不确定长度字符串")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("注：一般字符数据使用 VARCHAR 类型就够了，若保存超长字符串，则使用NoSQL数据库。")])]),t._v(" "),v("br"),t._v(" "),v("p",[v("strong",[t._v("日期类型：")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("大小")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("DATE")]),t._v(" "),v("td",[t._v("3 byte")]),t._v(" "),v("td",[t._v("日期")])]),t._v(" "),v("tr",[v("td",[t._v("TIME")]),t._v(" "),v("td",[t._v("3 byte")]),t._v(" "),v("td",[t._v("时间")])]),t._v(" "),v("tr",[v("td",[t._v("YEAR")]),t._v(" "),v("td",[t._v("1 byte")]),t._v(" "),v("td",[t._v("年份")])]),t._v(" "),v("tr",[v("td",[t._v("DATETIME")]),t._v(" "),v("td",[t._v("8 byte")]),t._v(" "),v("td",[t._v("日期加时间")])]),t._v(" "),v("tr",[v("td",[t._v("TIMESTAMP")]),t._v(" "),v("td",[t._v("4 byte")]),t._v(" "),v("td",[t._v("时间戳")])])])]),t._v(" "),v("blockquote",[v("p",[t._v("注：时间戳类型只能保存1970年以后的时间")])])])}),[],!1,null,null,null);_.default=s.exports}}]);