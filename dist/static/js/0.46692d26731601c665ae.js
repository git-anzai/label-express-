webpackJsonp([0],{IchT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{float:"right"}},[n("Dropdown",{staticClass:"userBox",attrs:{slot:"right"},slot:"right"},[n("Avatar",{attrs:{icon:"person"}}),t._v(" "),n("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n      "+t._s(t.userName)+"\n      "),n("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),n("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[n("Dropdown-item",{nativeOn:{click:function(e){return t.loginOut(e)}}},[t._v("退出登录")])],1)],1)],1)},staticRenderFns:[]};var r=[{path:"/orderManage",name:"订单管理",children:[{path:"/orderExamine",name:"订单管理"},{path:"/orderRefund",name:"手工订单"}]}],o={name:"nav-bar",data:function(){return{menu:r}},methods:{selectFn:function(t){this.$router.push({path:t})}},created:function(){},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"logo"},[t._v("订单后台管理系统")]),t._v(" "),n("Menu",{attrs:{width:"auto",theme:"dark",accordion:!0,"active-name":t.$route.path},on:{"on-select":t.selectFn}},t._l(t.menu,function(e,a){return n("div",{key:a},[e.children&&e.children.length>0?n("Submenu",{attrs:{name:a}},[n("template",{slot:"title"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),t._l(e.children,function(e,a){return n("Menu-item",{key:a,attrs:{name:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")])})],2):t._e(),t._v(" "),n("div",[0==e.children.length?n("Menu-item",{key:a,attrs:{name:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")]):t._e()],1)],1)}),0)],1)},staticRenderFns:[]};var s={name:"index",data:function(){return{show:!0,loaded:""}},components:{tHeader:n("VU/8")({name:"t-header",methods:{loginOut:function(){var t=this;this.$Modal.confirm({title:"退出登录",content:"确定要退出登录吗？",onOk:function(){t.$router.push({path:"/login"})}})}},data:function(){return{userName:""}},mounted:function(){this.userName=this.$route.query.userName}},a,!1,function(t){n("zl0v")},"data-v-5788a888",null).exports,navBar:n("VU/8")(o,i,!1,function(t){n("xPc4")},"data-v-b4b0a5b4",null).exports},methods:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("Sider",{style:{position:"fixed",height:"100vh",left:0,overflow:"auto"}},[e("navBar")],1),this._v(" "),e("Layout",{style:{marginLeft:"200px"}},[e("Header",{style:{background:"#fff",boxShadow:"0 2px 3px 2px rgba(0,0,0,.1)",textAlign:"right"}},[e("t-header")],1),this._v(" "),e("router-view")],1)],1)},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){n("e2uU")},"data-v-24e4aec7",null);e.default=c.exports},e2uU:function(t,e){},xPc4:function(t,e){},zl0v:function(t,e){}});
//# sourceMappingURL=0.46692d26731601c665ae.js.map