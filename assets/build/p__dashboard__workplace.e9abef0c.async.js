(self.webpackChunkgosh_esp=self.webpackChunkgosh_esp||[]).push([[8767],{72842:function(R){R.exports={linkGroup:"linkGroup___3u5k3"}},54178:function(R){R.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},97432:function(){},68122:function(R,N,t){"use strict";t.r(N),t.d(N,{default:function(){return k}});var u=t(13062),P=t(71230),r=t(89032),B=t(15746),J=t(72012),M=t(39144),_=t(54421),U=t(38272),ae=t(95300),V=t(7277),ue=t(94233),I=t(51890),re=t(18446),$=t(33860),O=t(6505),x=t(58086),W=t(19611),ee=t(15103),oe=t(30381),w=t.n(oe),ne=t(57663),i=t(71577),s=t(67294),m=t(49101),n=t(72842),a=t.n(n),e=t(85893),o=function(p){var d=p.links,A=p.linkElement,H=p.onAdd;return(0,e.jsxs)("div",{className:a().linkGroup,children:[d.map(function(L){return(0,s.createElement)(A,{key:"linkGroup-item-".concat(L.id||L.title),to:L.href,href:L.href},L.title)}),(0,e.jsxs)(i.Z,{size:"small",type:"primary",ghost:!0,onClick:H,children:[(0,e.jsx)(m.Z,{})," \u6DFB\u52A0"]})]})};o.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var v=o,f=t(54178),l=t.n(f),c=t(3182),b=t(94043),h=t.n(b);function E(){return j.apply(this,arguments)}function j(){return j=(0,c.Z)(h().mark(function C(){return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,x.WY)("/api/project/notice"));case 1:case"end":return d.stop()}},C)})),j.apply(this,arguments)}function K(){return D.apply(this,arguments)}function D(){return D=(0,c.Z)(h().mark(function C(){return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,x.WY)("/api/activities"));case 1:case"end":return d.stop()}},C)})),D.apply(this,arguments)}function F(){return S.apply(this,arguments)}function S(){return S=(0,c.Z)(h().mark(function C(){return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,x.WY)("/api/fake_workplace_chart_data"));case 1:case"end":return d.stop()}},C)})),S.apply(this,arguments)}var G=[{title:"\u64CD\u4F5C\u4E00",href:""},{title:"\u64CD\u4F5C\u4E8C",href:""},{title:"\u64CD\u4F5C\u4E09",href:""},{title:"\u64CD\u4F5C\u56DB",href:""},{title:"\u64CD\u4F5C\u4E94",href:""},{title:"\u64CD\u4F5C\u516D",href:""}],se=function(p){var d=p.currentUser,A=d&&Object.keys(d).length;return A?(0,e.jsxs)("div",{className:l().pageHeaderContent,children:[(0,e.jsx)("div",{className:l().avatar,children:(0,e.jsx)(I.C,{size:"large",src:d.avatar})}),(0,e.jsxs)("div",{className:l().content,children:[(0,e.jsxs)("div",{className:l().contentTitle,children:["\u65E9\u5B89\uFF0C",d.name,"\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01"]}),(0,e.jsxs)("div",{children:[d.title," |",d.group]})]})]}):(0,e.jsx)($.Z,{avatar:!0,paragraph:{rows:1},active:!0})},te=function(){return(0,e.jsxs)("div",{className:l().extraContent,children:[(0,e.jsx)("div",{className:l().statItem,children:(0,e.jsx)(V.Z,{title:"\u9879\u76EE\u6570",value:56})}),(0,e.jsx)("div",{className:l().statItem,children:(0,e.jsx)(V.Z,{title:"\u56E2\u961F\u5185\u6392\u540D",value:8,suffix:"/ 24"})}),(0,e.jsx)("div",{className:l().statItem,children:(0,e.jsx)(V.Z,{title:"\u9879\u76EE\u8BBF\u95EE",value:2223})})]})},z=function(){var p,d=(0,x.QT)(E),A=d.loading,H=d.data,L=H===void 0?[]:H,X=(0,x.QT)(K),le=X.loading,ce=X.data,ve=ce===void 0?[]:ce,y=(0,x.QT)(F),Y=y.data,T=function(Z){var me=Z.template.split(/@\{([^{}]*)\}/gi).map(function(Q){return Z[Q]?(0,e.jsx)("a",{href:Z[Q].link,children:Z[Q].name},Z[Q].name):Q});return(0,e.jsx)(U.ZP.Item,{children:(0,e.jsx)(U.ZP.Item.Meta,{avatar:(0,e.jsx)(I.C,{src:Z.user.avatar}),title:(0,e.jsxs)("span",{children:[(0,e.jsx)("a",{className:l().username,children:Z.user.name}),"\xA0",(0,e.jsx)("span",{className:l().event,children:me})]}),description:(0,e.jsx)("span",{className:l().datetime,title:Z.updatedAt,children:w()(Z.updatedAt).fromNow()})})},Z.id)};return(0,e.jsx)(ee.ZP,{content:(0,e.jsx)(se,{currentUser:{avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",name:"\u5434\u5F66\u7956",userid:"00000001",email:"antdesign@alipay.com",signature:"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",title:"\u4E13\u5BB6",group:"\u4E2D\u76F4\u673A\u5173\uFF0D\u67D0\u67D0\u90E8\uFF0D\u67D0\u67D0\u5385\uFF0D\u7EFC\u5408\u5904"}}),extraContent:(0,e.jsx)(te,{}),children:(0,e.jsxs)(P.Z,{gutter:24,children:[(0,e.jsxs)(B.Z,{xl:16,lg:24,md:24,sm:24,xs:24,children:[(0,e.jsx)(M.Z,{className:l().projectList,style:{marginBottom:24},title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",bordered:!1,extra:(0,e.jsx)(W.rU,{to:"/",children:"\u5168\u90E8\u9879\u76EE"}),loading:A,bodyStyle:{padding:0},children:L.map(function(g){return(0,e.jsx)(M.Z.Grid,{className:l().projectGrid,children:(0,e.jsxs)(M.Z,{bodyStyle:{padding:0},bordered:!1,children:[(0,e.jsx)(M.Z.Meta,{title:(0,e.jsxs)("div",{className:l().cardTitle,children:[(0,e.jsx)(I.C,{size:"small",src:g.logo}),(0,e.jsx)(W.rU,{to:g.href,children:g.title})]}),description:g.description}),(0,e.jsxs)("div",{className:l().projectItemContent,children:[(0,e.jsx)(W.rU,{to:g.memberLink,children:g.member||""}),g.updatedAt&&(0,e.jsx)("span",{className:l().datetime,title:g.updatedAt,children:w()(g.updatedAt).fromNow()})]})]})},g.id)})}),(0,e.jsx)(M.Z,{bodyStyle:{padding:0},bordered:!1,className:l().activeCard,title:"\u52A8\u6001",loading:le,children:(0,e.jsx)(U.ZP,{loading:le,renderItem:function(Z){return T(Z)},dataSource:ve,className:l().activitiesList,size:"large"})})]}),(0,e.jsxs)(B.Z,{xl:8,lg:24,md:24,sm:24,xs:24,children:[(0,e.jsx)(M.Z,{style:{marginBottom:24},title:"\u5FEB\u901F\u5F00\u59CB / \u4FBF\u6377\u5BFC\u822A",bordered:!1,bodyStyle:{padding:0},children:(0,e.jsx)(v,{onAdd:function(){},links:G,linkElement:W.rU})}),(0,e.jsx)(M.Z,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:(Y==null||(p=Y.radarData)===null||p===void 0?void 0:p.length)===0,children:(0,e.jsx)("div",{className:l().chart,children:(0,e.jsx)(O.Fk,{height:343,data:(Y==null?void 0:Y.radarData)||[],angleField:"label",seriesField:"name",radiusField:"value",area:{visible:!1},point:{visible:!0},legend:{position:"bottom-center"}})})}),(0,e.jsx)(M.Z,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56E2\u961F",loading:A,children:(0,e.jsx)("div",{className:l().members,children:(0,e.jsx)(P.Z,{gutter:48,children:L.map(function(g){return(0,e.jsx)(B.Z,{span:12,children:(0,e.jsxs)(W.rU,{to:g.href,children:[(0,e.jsx)(I.C,{src:g.logo,size:"small"}),(0,e.jsx)("span",{className:l().member,children:g.member})]})},"members-item-".concat(g.id))})})})})]})]})})},k=z},39144:function(R,N,t){"use strict";t.d(N,{Z:function(){return ne}});var u=t(96156),P=t(22122),r=t(67294),B=t(94184),J=t.n(B),M=t(98423),_=t(65632),U=function(i,s){var m={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.indexOf(n)<0&&(m[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(i);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(i,n[a])&&(m[n[a]]=i[n[a]]);return m},ae=function(s){var m=s.prefixCls,n=s.className,a=s.hoverable,e=a===void 0?!0:a,o=U(s,["prefixCls","className","hoverable"]);return r.createElement(_.C,null,function(v){var f=v.getPrefixCls,l=f("card",m),c=J()("".concat(l,"-grid"),n,(0,u.Z)({},"".concat(l,"-grid-hoverable"),e));return r.createElement("div",(0,P.Z)({},o,{className:c}))})},V=ae,ue=function(i,s){var m={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.indexOf(n)<0&&(m[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(i);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(i,n[a])&&(m[n[a]]=i[n[a]]);return m},I=function(s){return r.createElement(_.C,null,function(m){var n=m.getPrefixCls,a=s.prefixCls,e=s.className,o=s.avatar,v=s.title,f=s.description,l=ue(s,["prefixCls","className","avatar","title","description"]),c=n("card",a),b=J()("".concat(c,"-meta"),e),h=o?r.createElement("div",{className:"".concat(c,"-meta-avatar")},o):null,E=v?r.createElement("div",{className:"".concat(c,"-meta-title")},v):null,j=f?r.createElement("div",{className:"".concat(c,"-meta-description")},f):null,K=E||j?r.createElement("div",{className:"".concat(c,"-meta-detail")},E,j):null;return r.createElement("div",(0,P.Z)({},l,{className:b}),h,K)})},re=I,$=t(51752),O=t(71230),x=t(15746),W=t(97647),ee=function(i,s){var m={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.indexOf(n)<0&&(m[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(i);a<n.length;a++)s.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(i,n[a])&&(m[n[a]]=i[n[a]]);return m};function oe(i){var s=i.map(function(m,n){return r.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(n)},r.createElement("span",null,m))});return s}var w=function(s){var m,n,a=r.useContext(_.E_),e=a.getPrefixCls,o=a.direction,v=r.useContext(W.Z),f=function(de){var q;(q=s.onTabChange)===null||q===void 0||q.call(s,de)},l=function(){var de;return r.Children.forEach(s.children,function(q){q&&q.type&&q.type===V&&(de=!0)}),de},c=s.prefixCls,b=s.className,h=s.extra,E=s.headStyle,j=E===void 0?{}:E,K=s.bodyStyle,D=K===void 0?{}:K,F=s.title,S=s.loading,G=s.bordered,se=G===void 0?!0:G,te=s.size,z=s.type,k=s.cover,C=s.actions,p=s.tabList,d=s.children,A=s.activeTabKey,H=s.defaultActiveTabKey,L=s.tabBarExtraContent,X=s.hoverable,le=s.tabProps,ce=le===void 0?{}:le,ve=ee(s,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),y=e("card",c),Y=D.padding===0||D.padding==="0px"?{padding:24}:void 0,T=r.createElement("div",{className:"".concat(y,"-loading-block")}),g=r.createElement("div",{className:"".concat(y,"-loading-content"),style:Y},r.createElement(O.Z,{gutter:8},r.createElement(x.Z,{span:22},T)),r.createElement(O.Z,{gutter:8},r.createElement(x.Z,{span:8},T),r.createElement(x.Z,{span:15},T)),r.createElement(O.Z,{gutter:8},r.createElement(x.Z,{span:6},T),r.createElement(x.Z,{span:18},T)),r.createElement(O.Z,{gutter:8},r.createElement(x.Z,{span:13},T),r.createElement(x.Z,{span:9},T)),r.createElement(O.Z,{gutter:8},r.createElement(x.Z,{span:4},T),r.createElement(x.Z,{span:3},T),r.createElement(x.Z,{span:16},T))),Z=A!==void 0,me=(0,P.Z)((0,P.Z)({},ce),(m={},(0,u.Z)(m,Z?"activeKey":"defaultActiveKey",Z?A:H),(0,u.Z)(m,"tabBarExtraContent",L),m)),Q,fe=p&&p.length?r.createElement($.Z,(0,P.Z)({size:"large"},me,{className:"".concat(y,"-head-tabs"),onChange:f}),p.map(function(ie){return r.createElement($.Z.TabPane,{tab:ie.tab,disabled:ie.disabled,key:ie.key})})):null;(F||h||fe)&&(Q=r.createElement("div",{className:"".concat(y,"-head"),style:j},r.createElement("div",{className:"".concat(y,"-head-wrapper")},F&&r.createElement("div",{className:"".concat(y,"-head-title")},F),h&&r.createElement("div",{className:"".concat(y,"-extra")},h)),fe));var Ee=k?r.createElement("div",{className:"".concat(y,"-cover")},k):null,pe=r.createElement("div",{className:"".concat(y,"-body"),style:D},S?g:d),ye=C&&C.length?r.createElement("ul",{className:"".concat(y,"-actions")},oe(C)):null,ge=(0,M.Z)(ve,["onTabChange"]),he=te||v,xe=J()(y,(n={},(0,u.Z)(n,"".concat(y,"-loading"),S),(0,u.Z)(n,"".concat(y,"-bordered"),se),(0,u.Z)(n,"".concat(y,"-hoverable"),X),(0,u.Z)(n,"".concat(y,"-contain-grid"),l()),(0,u.Z)(n,"".concat(y,"-contain-tabs"),p&&p.length),(0,u.Z)(n,"".concat(y,"-").concat(he),he),(0,u.Z)(n,"".concat(y,"-type-").concat(z),!!z),(0,u.Z)(n,"".concat(y,"-rtl"),o==="rtl"),n),b);return r.createElement("div",(0,P.Z)({},ge,{className:xe}),Q,Ee,pe,ye)};w.Grid=V,w.Meta=re;var ne=w},72012:function(R,N,t){"use strict";var u=t(43673),P=t.n(u),r=t(97432),B=t.n(r),J=t(18106),M=t(13062),_=t(89032)},15746:function(R,N,t){"use strict";var u=t(21584);N.Z=u.Z},89032:function(R,N,t){"use strict";var u=t(43673),P=t.n(u),r=t(6999)},71230:function(R,N,t){"use strict";var u=t(92820);N.Z=u.Z},13062:function(R,N,t){"use strict";var u=t(43673),P=t.n(u),r=t(6999)},19611:function(R,N,t){"use strict";t.d(N,{rU:function(){return ee},OL:function(){return m}});var u=t(19630),P=t(41788),r=t(67294),B=t(97175),J=t(45697),M=t.n(J),_=t(22122),U=t(19756),ae=t(2177),V=function(a){(0,P.Z)(e,a);function e(){for(var v,f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];return v=a.call.apply(a,[this].concat(l))||this,v.history=(0,B.lX)(v.props),v}var o=e.prototype;return o.render=function(){return r.createElement(u.F0,{history:this.history,children:this.props.children})},e}(r.Component),ue=function(a){(0,P.Z)(e,a);function e(){for(var v,f=arguments.length,l=new Array(f),c=0;c<f;c++)l[c]=arguments[c];return v=a.call.apply(a,[this].concat(l))||this,v.history=(0,B.q_)(v.props),v}var o=e.prototype;return o.render=function(){return r.createElement(u.F0,{history:this.history,children:this.props.children})},e}(r.Component),I=function(e,o){return typeof e=="function"?e(o):e},re=function(e,o){return typeof e=="string"?(0,B.ob)(e,null,null,o):e},$=function(e){return e},O=r.forwardRef;typeof O=="undefined"&&(O=$);function x(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}var W=O(function(a,e){var o=a.innerRef,v=a.navigate,f=a.onClick,l=(0,U.Z)(a,["innerRef","navigate","onClick"]),c=l.target,b=(0,_.Z)({},l,{onClick:function(E){try{f&&f(E)}catch(j){throw E.preventDefault(),j}!E.defaultPrevented&&E.button===0&&(!c||c==="_self")&&!x(E)&&(E.preventDefault(),v())}});return $!==O?b.ref=e||o:b.ref=o,r.createElement("a",b)}),ee=O(function(a,e){var o=a.component,v=o===void 0?W:o,f=a.replace,l=a.to,c=a.innerRef,b=(0,U.Z)(a,["component","replace","to","innerRef"]);return r.createElement(u.s6.Consumer,null,function(h){h||(0,ae.Z)(!1);var E=h.history,j=re(I(l,h.location),h.location),K=j?E.createHref(j):"",D=(0,_.Z)({},b,{href:K,navigate:function(){var S=I(l,h.location),G=f?E.replace:E.push;G(S)}});return $!==O?D.ref=e||c:D.innerRef=c,r.createElement(v,D)})});if(!1)var oe,w;var ne=function(e){return e},i=r.forwardRef;typeof i=="undefined"&&(i=ne);function s(){for(var a=arguments.length,e=new Array(a),o=0;o<a;o++)e[o]=arguments[o];return e.filter(function(v){return v}).join(" ")}var m=i(function(a,e){var o=a["aria-current"],v=o===void 0?"page":o,f=a.activeClassName,l=f===void 0?"active":f,c=a.activeStyle,b=a.className,h=a.exact,E=a.isActive,j=a.location,K=a.sensitive,D=a.strict,F=a.style,S=a.to,G=a.innerRef,se=(0,U.Z)(a,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return r.createElement(u.s6.Consumer,null,function(te){te||(0,ae.Z)(!1);var z=j||te.location,k=re(I(S,z),z),C=k.pathname,p=C&&C.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),d=p?(0,u.LX)(z.pathname,{path:p,exact:h,sensitive:K,strict:D}):null,A=!!(E?E(d,z):d),H=A?s(b,l):b,L=A?(0,_.Z)({},F,{},c):F,X=(0,_.Z)({"aria-current":A&&v||null,className:H,style:L,to:k},se);return ne!==i?X.ref=e||G:X.innerRef=G,r.createElement(ee,X)})});if(!1)var n}}]);