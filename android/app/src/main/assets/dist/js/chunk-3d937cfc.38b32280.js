(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3d937cfc"],{"01c3":function(e,t,n){"use strict";n("25ad")},"25ad":function(e,t,n){},"3ab6":function(e,t,n){},"4ef5":function(e,t,n){"use strict";n.r(t);var c=n("1da1"),r=(n("96cf"),n("d81d"),n("c740"),n("b0c0"),n("a434"),n("7a23")),a=n("96eb"),i=n.n(a),u=n("6c02"),o=n("5502"),b=n("64e4"),l=n("9613"),s=n("ee8b");function d(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function f(e){return Object(r.L)("data-v-32aa1810"),e=e(),Object(r.J)(),e}function O(e){return Object(r.L)("data-v-44847e8a"),e=e(),Object(r.J)(),e}n("fb6a"),n("d9e2");var j=new(function(){function e(){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function")}var t,n,c;return t=e,(n=[{key:"setData",value:function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)}}])&&d(t.prototype,n),c&&d(t,c),Object.defineProperty(t,"prototype",{writable:!1}),e}()),p=n("d4c0"),m={class:"key-item"},v={class:"key-item-title"},y={class:"key-item-li"},k=f((function(){return Object(r.l)("span",{class:"key-item-li-title"},"公钥",-1)})),g=[Object(r.n)("复制")],h={class:"key-item-li"},w=f((function(){return Object(r.l)("span",{class:"key-item-li-title"},"私钥",-1)})),I=[Object(r.n)("复制")],x={class:"key-item-footer"},R={class:"price"},C=[Object(r.n)("删除")],K=(a=Object(r.p)({props:{keyItem:{default:function(){return{name:"",publicKey:"",privateKey:"",balance:0}}}},emits:["remove"],setup:function(e,t){function n(e){return e?"".concat(e.slice(0,50),"..."):"-"}function c(e){j.setData(e),s.a.success("已复制")}function a(){i("remove")}var i=t.emit;return function(t,i){var u=Object(r.R)("ripple");return Object(r.I)(),Object(r.k)("div",m,[Object(r.l)("div",v,Object(r.U)(e.keyItem.name),1),Object(r.l)("div",null,[Object(r.l)("div",y,[k,Object(r.l)("span",null,Object(r.U)(n(e.keyItem.publicKey)),1),Object(r.cb)((Object(r.I)(),Object(r.k)("span",{class:"key-item-li-button",onClick:i[0]||(i[0]=function(t){return c(e.keyItem.publicKey)})},g)),[[u]])]),Object(r.l)("div",h,[w,Object(r.l)("span",null,Object(r.U)(n(e.keyItem.privateKey)),1),Object(r.cb)((Object(r.I)(),Object(r.k)("span",{class:"key-item-li-button",onClick:i[1]||(i[1]=function(t){return c(e.keyItem.privateKey)})},I)),[[u]])])]),Object(r.l)("div",x,[Object(r.l)("span",R,"￥"+Object(r.U)(Object(r.X)(p.a)(e.keyItem.balance)),1),Object(r.cb)((Object(r.I)(),Object(r.k)("span",{class:"key-item-li-button",onClick:a},C)),[[u]])])])}}}),n("b96d"),n("6b0d")),A=(K=n.n(K),K()(a,[["__scopeId","data-v-32aa1810"]])),M=n("e5a6"),_={class:"setting"},U=Object(r.n)("退出"),D={class:"setting-main"},E={class:"setting-did"},J=O((function(){return Object(r.l)("div",{class:"setting-did-title"},"全生态统一DID",-1)})),T={class:"setting-did-content"},X={class:"setting-list"};a=Object(r.p)({setup:function(e){var t=Object(u.d)(),n=Object(o.d)(),a=Object(r.g)((function(){return n.state.wallet.did})),d=(Object(r.g)((function(){return n.state.wallet.walletAccouts})),Object(r.M)(["以太坊","平安银行区块链网络","建设银行区块链网络"].map((function(e){return{name:e,publicKey:i.a.Random.word(64),privateKey:i.a.Random.word(64),balance:i.a.Random.float(999,999999,2,2)}})))),f=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("确认删除该数据？");case 2:if("confirm"!==e.sent)return e.abrupt("return",!1);e.next=5;break;case 5:return s.a.success("删除成功"),n=d.findIndex((function(e){return e.name===t.name})),d.splice(n,1),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("确认退出登录？");case 2:if("confirm"!==e.sent)return e.abrupt("return",!1);e.next=5;break;case 5:return localStorage.removeItem(l.a.TOKEN),t.push({name:"SignIn"}),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=Object(o.b)("wallet",["getWalletAccoutsMy"]),p=(p=j.getWalletAccoutsMy).bind({$store:n});return Object(r.B)((function(){p()})),function(e,t){var n=Object(r.Q)("var-button");return Object(r.I)(),Object(r.k)("div",_,[Object(r.o)(M.a,{title:"设置"},{right:Object(r.bb)((function(){return[Object(r.o)(n,{text:"",onClick:O},{default:Object(r.bb)((function(){return[U]})),_:1})]})),_:1}),Object(r.l)("div",D,[Object(r.l)("div",E,[J,Object(r.l)("div",T,Object(r.U)(Object(r.X)(a)||"-"),1)]),Object(r.l)("div",X,[(Object(r.I)(!0),Object(r.k)(r.b,null,Object(r.O)(Object(r.X)(d),(function(e){return Object(r.I)(),Object(r.i)(A,{key:e.name,"key-item":e,onRemove:function(t){return f(e)}},null,8,["key-item","onRemove"])})),128))])])])}}});n("01c3"),t.default=K()(a,[["__scopeId","data-v-44847e8a"]])},a434:function(e,t,n){"use strict";var c=n("23e7"),r=n("da84"),a=n("23cb"),i=n("5926"),u=n("07fa"),o=n("7b0b"),b=n("65f0"),l=n("8418"),s=(n=n("1dde")("splice"),r.TypeError),d=Math.max,f=Math.min;c({target:"Array",proto:!0,forced:!n},{splice:function(e,t){var n,c,r,O,j,p,m=o(this),v=u(m),y=a(e,v);e=arguments.length;if(0===e?n=c=0:c=1===e?(n=0,v-y):(n=e-2,f(d(i(t),0),v-y)),9007199254740991<v+n-c)throw s("Maximum allowed length exceeded");for(r=b(m,c),O=0;O<c;O++)(j=y+O)in m&&l(r,O,m[j]);if(n<(r.length=c)){for(O=y;O<v-c;O++)p=O+n,(j=O+c)in m?m[p]=m[j]:delete m[p];for(O=v;v-c+n<O;O--)delete m[O-1]}else if(c<n)for(O=v-c;y<O;O--)p=O+n-1,(j=O+c-1)in m?m[p]=m[j]:delete m[p];for(O=0;O<n;O++)m[O+y]=arguments[O+2];return m.length=v-c+n,r}})},b96d:function(e,t,n){"use strict";n("3ab6")},c740:function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").findIndex,a=(n=n("44d2"),"findIndex"),i=!0;a in[]&&Array(1)[a]((function(){i=!1})),c({target:"Array",proto:!0,forced:i},{findIndex:function(e){return r(this,e,1<arguments.length?arguments[1]:void 0)}}),n(a)}}]);