(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fdd8116"],{"59c7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liuyan"},[n("span",[t._v(t._s(t.title)+"：目前"+t._s(t.commentsCount)+" ")]),t._l(t.commentsList,function(e){return n("div",{staticClass:"liuyan-item"},[n("span",[n("b",[t._v(t._s(e.nickname))]),t._v("：发表于 "+t._s(t._f("toDate")(e.ctime))+"\n            "),n("span",{staticClass:"reply",on:{click:function(n){t.replay(e.id,e.username)}}},[t._v(" [ 回复 ] ")])]),n("p",[t._v(t._s(e.text))])])})],2)},o=[],s={name:"liuyanlist",props:["title","blogid"],data:function(){return{commentsList:[],commentsCount:"没有留言"}},created:function(){this.getCommentsCount(),this.getComments()},methods:{replay:function(t,e){this.$emit("replay",t,e)},getComments:function(){var t=this;this.$axios.get("selcetByBlogId?blogid="+this.blogid).then(function(e){if(200==e.status){var n=e.data.data;for(var a in n)n[a]["parent"]>0?n[a].nickname=n[a].username+" 回复@ "+n[a]["parent_name"]:n[a].nickname=n[a].username;t.commentsList=n}})},getCommentsCount:function(){var t=this;this.$axios.get("selectCountByBlogId?blogid="+this.blogid).then(function(e){200==e.status&&(t.commentsCount="有"+e.data.data[0].count+"条留言")})}}},i=s,r=(n("d7de"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,"4b1020b8",null);l.options.__file="liuyan.vue";e["a"]=l.exports},"754b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("liuyan",{attrs:{title:"关于",blogid:-1},on:{replay:t.replay}}),n("subly",{attrs:{title:"关于",blogid:-1,parentId:t.parentId,parentName:t.parentName}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"about-me"},[n("h4",[t._v("关于我")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")]),n("p",[t._v("博主郑晓，zx，性别男，山东青岛即墨区人。")])]),n("div",{staticClass:"about-blog"},[n("h4",[t._v("关于博客")]),n("p",{staticStyle:{"line-height":"25px"}},[t._v("\n                从2009年 – 今 博主很懒加词穷，佛系更新… 域名 zhengoo.cn ->\n                zh30.com 程序 tcms -> WordPress 服务器 免费空间 -> 国内某收费空间\n                -> 国外vps -> 阿里云 推荐便宜又稳定的xen-VPS吧: HostShare kvm\n                vps:hostEONS 洛杉矶节点，我在用，速度可以，可以干一些羞羞的事。\n            ")])])])}],s=(n("cadf"),n("551c"),n("097d"),n("59c7")),i=n("a970"),r={components:{liuyan:s["a"],subly:i["a"]},data:function(){return{parentId:-1,parentName:null}},methods:{replay:function(t,e){this.parentId=t,this.parentName=usernmae}}},l=r,c=n("2877"),m=Object(c["a"])(l,a,o,!1,null,null,null);m.options.__file="about.vue";e["default"]=m.exports},a077:function(t,e,n){"use strict";var a=n("e20a"),o=n.n(a);o.a},a21f:function(t,e,n){var a=n("584a"),o=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},a970:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{ref:"form",staticClass:"demo-ruleForm subly",attrs:{model:t.form,rules:t.rules}},[n("h4",[t._v("发表"+t._s(t.title))]),n("el-form-item",{staticStyle:{width:"40",display:"inline-block"},attrs:{prop:"name"}},[n("el-input",{ref:"nameinput",attrs:{placeholder:"昵称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{staticStyle:{display:"inline-block",width:"57%","margin-left":"3%"},attrs:{prop:"email"}},[n("el-input",{attrs:{placeholder:"邮箱(收到回复时你能收到通知)"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("el-form-item",{attrs:{prop:"text"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入留言(评论)内容"},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),n("el-form-item",{attrs:{prop:"code"}},[n("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),n("div",{staticClass:"codeImg",domProps:{innerHTML:t._s(t.comments.coder)},on:{click:function(e){t.getCode()}}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("form")}}},[t._v("发布")]),n("el-button",{on:{click:function(e){t.resetForm("form")}}},[t._v("重写")])],1)],1)},o=[],s=(n("7f7f"),n("f499")),i=n.n(s),r={name:"subly",props:["title","blogid","parentId","parentName"],data:function(){var t=this,e=function(e,n,a){console.log(n.toLowerCase()),console.log(t),n.toLowerCase()!=t.comments.codeText.toLowerCase()?a(new Error("验证码错误")):a()};return{comments:{coder:null,codeText:""},form:{name:"",email:"",text:""},rules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],text:[{required:!0,message:"请输入留言(评论)内容",trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"},{validator:e,trigger:"blur"}]}}},created:function(){this.getCode()},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.submit()})},resetForm:function(t){this.$refs[t].resetFields()},submit:function(){var t=this;this.$axios({url:"addComment",method:"post",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=UTF-8"},data:i()({blogid:this.blogid,username:this.form.name,email:this.form.email,parent:this.parentId,parentName:this.parentName,text:this.form.text})}).then(function(e){200==e.status&&(t.$alert("评论成功！"),location.reload())})},getCode:function(){var t=this;this.$axios.get("createCode").then(function(e){200==e.status&&(t.comments.coder=e.data.data.data,t.comments.codeText=e.data.data.text)})},getFoucs:function(){this.$refs.nameinput.focus()}}},l=r,c=(n("a077"),n("2877")),m=Object(c["a"])(l,a,o,!1,null,"21cb195c",null);m.options.__file="subly.vue";e["a"]=m.exports},d7de:function(t,e,n){"use strict";var a=n("dbfe"),o=n.n(a);o.a},dbfe:function(t,e,n){},e20a:function(t,e,n){},f499:function(t,e,n){t.exports=n("a21f")}}]);
//# sourceMappingURL=chunk-8fdd8116.11dee6b7.js.map