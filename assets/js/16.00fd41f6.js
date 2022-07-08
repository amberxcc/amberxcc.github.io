(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{312:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-git-stash-暂存修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-stash-暂存修改"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("git stash")]),t._v(" （暂存修改）")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/git1.png"}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将暂存区未提交的内容缓存起来")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash save "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号缓存"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为暂存添加标记信息")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看stash中的所有暂存信息")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 弹出栈顶的第一个暂存内容")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 弹出一个指定的暂存内容")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-git-tag-打标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-tag-打标签"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("git tag")]),t._v(" （打标签）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有标签")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v1.0"')]),t._v(" -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发布1.0版本"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给最近一次提交的版本打一个标签")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v0.9"')]),t._v(" f8ec6 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发布0.9版本"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 历史上的某个版本打一个标签")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v0.9  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除某个标签")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-git-rebase-变基"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-rebase-变基"}},[t._v("#")]),t._v(" 3. "),a("code",[t._v("git rebase")]),t._v("（变基）")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("场景一：合并多条提交记录，简化log")]),t._v("（建议只合并未push的commit）")])]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/git2.png"}})]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ol",[a("li",[t._v("选择合并的提交")]),t._v(" "),a("li",[t._v("编辑合并后的commit信息")])]),t._v(" "),a("br"),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("场景二：将merge后的分支信息，合并到合并后的分支")]),t._v("（取舍）")])]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/git3.png"}})]),t._v(" "),a("ol",[a("li",[t._v("分别把hotfix和v2提交commit")]),t._v(" "),a("li",[t._v("切换到hotfix所在的dev分支，执行"),a("code",[t._v("git rebase master")])]),t._v(" "),a("li",[t._v("切换到v2所在的master分支，执行"),a("code",[t._v("git merge dev")])])]),t._v(" "),a("br"),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("场景三：取代使用fetch和rebase取代pull，简化log")])])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("git fetch origin branchname")])]),t._v(" "),a("li",[a("code",[t._v("git rebase origin/branchname")])]),t._v(" "),a("li",[t._v("如果有冲突，解决冲突、"),a("code",[t._v("git add .")])]),t._v(" "),a("li",[a("code",[t._v("git rebase —continue")])])]),t._v(" "),a("p",[t._v("😄 注意：若rebase过程产生冲突，手动解决冲突后，"),a("code",[t._v("git add .")]),t._v(" 再"),a("code",[t._v("git rebase —continue")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);