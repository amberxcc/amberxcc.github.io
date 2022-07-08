(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{314:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("SELECT查询不但可以从一张表查询数据，还可以从多张表同时查询数据。查询多张表的语法是：SELECT * FROM <表1> <表2>，普通多表查询会获取M x N行记录，所以一般使用连接查询或子查询获取多张表的数据；")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"连接查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接查询"}},[t._v("#")]),t._v(" 连接查询")]),t._v(" "),a("p",[t._v("连接查询对多个表进行 JOIN 运算，简单地说，就是先确定一个主表作为结果集，然后，把其他表的行有选择性地“连接”在主表结果集上。")]),t._v(" "),a("p",[t._v("连接查询分为内连接和外连接，内连接只返回同时存在于两张表的行数据，外连接返回右表都存在的行。如果某一行仅在右表存在，那么结果集就会以"),a("code",[t._v("NULL")]),t._v("填充剩下的字段。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"内连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内连接"}},[t._v("#")]),t._v(" 内连接")]),t._v(" "),a("p",[t._v("内连接是最常用的一种JOIN查询，内连接查询的"),a("strong",[t._v("语法格式")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标准语法，INNER可省略")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" 连接条件 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 衍生语法1（WHERE与ON的作用相同）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" 连接条件 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 衍生语法2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" 连接条件 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("查询实例：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接员工表与部门表两张表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_dept d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接员工表、部门表、登记表三张表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("grade\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_dept d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_salgrade s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("BETWEEN")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("losal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hisal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接自身：查询与SCOTT同部门的人")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" e2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp e1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_emp e2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" e1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SCOTT"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" e2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SCOTT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进阶练习1：查询员工表中工资超过平均工资的人")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与WHERE一样，ON子句也不能使用聚合函数，这里将聚合结果作为一张表来连接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sal\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" avg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("内连接的数据表不一定需要同名字段或外键关联，只需字段之间符合逻辑关系即可")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"外连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外连接"}},[t._v("#")]),t._v(" 外连接")]),t._v(" "),a("p",[t._v("由于内连接只返回同时存在于两张表的行数据，如果员工表中有部门编号为NULL的特殊员工，使用内连接就会遗漏这个员工的信息，这时候就需要使用外连接，外连接分为"),a("code",[t._v("LEFT [OUTER] JOIN")]),t._v("、"),a("code",[t._v("RIGHT [OUTER] JOIN")]),t._v("、"),a("code",[t._v("FULL [OUTER] JOIN")]),t._v("，左右相对JOIN关键字前后的表而言的：")]),t._v(" "),a("br"),t._v(" "),a("center",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1934271/202102/1934271-20210218181709277-1427268827.png",width:"50%",height:"50%"}})]),t._v(" "),a("p",[t._v("左连接实例1：查询所有员工（包括部门为NULL）的部门信息")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_emp e \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_dept d "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("左连接实例2：查询所有部门的人数")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_dept d \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_emp e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("MySQL数据库不支持全连接查询，可使用"),a("code",[t._v("UNION")]),t._v("关键字实现全连接：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_dept d \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_emp e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNION")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_dept d \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RIGHT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_emp e "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("内连接中，ON与WHERE的用法一样；外连接中不太一样，WHERE能筛选掉更多数据。")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子查询"}},[t._v("#")]),t._v(" 子查询")]),t._v(" "),a("p",[t._v("根据所在位置，子查询可分为WHERE、FROM、SELECT子查询。对于WHERE、SELECT子查询，每次比较都会运行一次，非常低效，不推荐使用，一般转化为表连接查询。对于FROM子查询只会执行一次，可以经常使用。")]),t._v(" "),a("p",[t._v("根据子查询的返回结果，可以分为单行和多行子查询，单行子查询即子查询返回一个值，很容易使用。对于多行子查询，可以使用IN、ALL、ANY、[NOT] EXISTS关键字来处理")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);