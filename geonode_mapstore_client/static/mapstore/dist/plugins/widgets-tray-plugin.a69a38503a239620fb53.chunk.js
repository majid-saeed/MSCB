(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2514],{81808:(e,t,n)=>{"use strict";n.d(t,{eD:()=>r,AM:()=>o,ok:()=>i,Gg:()=>u,nT:()=>c,TL:()=>a,KS:()=>s,EB:()=>p,DZ:()=>l,Aw:()=>f,V_:()=>d,H0:()=>y,jW:()=>b,JZ:()=>O,fQ:()=>v,HK:()=>g,YO:()=>E,I6:()=>m});var r="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",i="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",c="MAP_LOAD_INFO",a="MAP_INFO_LOAD_START",s="MAP_INFO_LOADED",p="MAP_INFO_LOAD_ERROR",l="MAP:MAP_SAVE_ERROR",f="MAP:MAP_SAVED",d="MAP:RESET_MAP_SAVE_ERROR";function y(e,t,n){return{type:i,config:e,legacy:!!t,mapId:t,zoomToExtent:n}}function b(e,t){return{type:u,error:e,mapId:t}}function O(e,t,n,r,i){return{type:o,configName:e,mapId:t,config:n,mapInfo:r,overrideConfig:i}}function v(e,t){return{type:s,mapId:t,info:e}}function g(e,t){return{type:p,mapId:e,error:t}}function E(e){return{type:a,mapId:e}}function m(e){return{type:c,mapId:e}}},80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>c,sb:()=>a,K$:()=>s,k7:()=>p,cX:()=>l,x9:()=>f,vs:()=>d,oE:()=>y,Po:()=>b,qv:()=>O,cI:()=>v,g6:()=>g,I4:()=>E,l$:()=>m,Xv:()=>h,k3:()=>P,CQ:()=>A,R8:()=>w,HN:()=>_,sH:()=>S,c7:()=>R,_7:()=>T,eF:()=>I,O6:()=>j,ED:()=>D,RP:()=>L,sF:()=>N,VP:()=>M,He:()=>C,vO:()=>k,WO:()=>x,bh:()=>G,pV:()=>Y,MK:()=>F,ZF:()=>H,tV:()=>V,Dv:()=>W,Yz:()=>z,kI:()=>U,XG:()=>Z,A4:()=>J,Rp:()=>K,ct:()=>B,oh:()=>X,$h:()=>$,ud:()=>q,Qr:()=>Q,LR:()=>ee,nN:()=>te,UG:()=>ne,F5:()=>re,c9:()=>oe,Jh:()=>ie,Xy:()=>ue});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="SORT_NODE",a="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",l="LAYER_LOADING",f="LAYER_LOAD",d="LAYER_ERROR",y="ADD_LAYER",b="ADD_GROUP",O="REMOVE_LAYER",v="SHOW_SETTINGS",g="HIDE_SETTINGS",E="UPDATE_SETTINGS",m="REFRESH_LAYERS",h="LAYERS:UPDATE_LAYERS_DIMENSION",P="LAYERS_REFRESHED",A="LAYERS_REFRESH_ERROR",w="LAYERS:BROWSE_DATA",_="LAYERS:DOWNLOAD",S="LAYERS:CLEAR_LAYERS",R="LAYERS:SELECT_NODE",T="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",j="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function L(e,t,n){return{type:v,node:e,nodeType:t,options:n}}function N(){return{type:g}}function M(e){return{type:E,options:e}}function C(e,t){return{type:r,newProperties:t,layer:e}}function k(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:i,newProperties:t,group:e}}function G(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function Y(e){return{type:"CONTEXT_NODE",node:e}}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:c,node:e,order:t,sortLayers:n}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:a,node:e,nodeType:t,removeEmpty:n}}function V(e,t,n){return{type:s,node:e,nodeType:t,options:n}}function W(e,t,n){return{type:p,node:e,groupId:t,index:n}}function z(e){return{type:l,layerId:e}}function U(e,t){return{type:f,layerId:e,error:t}}function Z(e,t,n){return{type:d,layerId:e,tilesCount:t,tilesErrorCount:n}}function J(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:y,layer:e,foreground:t}}function K(e,t,n){return{type:b,group:e,parent:t,options:n}}function B(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function X(e){return{type:P,layers:e}}function $(e,t){return{type:A,layers:e,error:t}}function q(e,t,n,r){return{type:h,dimension:e,value:t,options:n,layers:r}}function Q(e){return{type:w,layer:e}}function ee(e){return{type:_,layer:e}}function te(){return{type:S}}function ne(e,t,n){return{type:R,id:e,nodeType:t,ctrlKey:n}}function re(e){return{type:T,text:e}}function oe(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function ie(){return{type:j}}function ue(e,t){return{type:D,newParams:e,update:t}}},57676:(e,t,n)=>{"use strict";n.d(t,{qx:()=>r,HM:()=>o,Lv:()=>i,y3:()=>u,iv:()=>c,cO:()=>a,br:()=>s,aA:()=>p,_V:()=>l,kq:()=>f,JU:()=>d,PQ:()=>y,cb:()=>b,KI:()=>O,M5:()=>v,w2:()=>g,w:()=>E,Z7:()=>m,p:()=>h,_e:()=>P});var r="TIMELINE:SELECT_TIME",o=function(e,t,n,o){return{type:r,time:e,group:t,what:n,item:o}},i="TIMELINE:RANGE_CHANGE",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.start,n=e.end;return{type:i,start:t,end:n}},c="TIMELINE:RANGE_DATA_LOADED",a=function(e,t,n,r){return{type:c,layerId:e,range:t,histogram:n,domain:r}},s="TIMELINE:LOADING",p=function(e,t){return{type:s,layerId:e,loading:t}},l="TIMELINE:SELECT_LAYER",f=function(e){return{type:l,layerId:e}},d="TIMELINE:ENABLE_OFFSET",y=function(e){return{type:d,enabled:e}},b="TIMELINE:AUTOSELECT",O=function(){return{type:b}},v="TIMELINE:SET_COLLAPSED",g=function(e){return{type:v,collapsed:e}},E="TIMELINE:SET_MAP_SYNC",m=function(e){return{type:E,mapSync:e}},h="TIMELINE:INIT_TIMELINE",P=function(e){return{type:h,showHiddenLayers:e}}},69901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var r=n(24852),o=n.n(r),i=n(45697),u=n.n(i),c=n(71703),a=n(67076),s=n(22222),p=n(15135),l=n(30294),f=n(25958),d=n(57579),y=n(13311),b=n.n(y),O=n(30998),v=n.n(O),g=n(89734),E=n.n(g);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){return!e.dataGrid||!e.dataGrid.static},w=(0,s.P1)(f.zm,f.YR,f.yZ,f.lF,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return E()(e.filter(A).map((function(e){return v()(t,(function(t){return t===e.id}))>=0?h(h({},e),{},{collapsed:!0}):e})),(function(e){var t=r[e.id]&&r[e.id].layout,o=b()(n,{i:e.id})||t||{},i=o.x,u=void 0===i?0:i,c=o.y;return 100*(void 0===c?0:c)+u}))})),_=n(10473),S=(0,a.compose)((0,a.defaultProps)({toolsOptions:{seeHidden:"user.role===ADMIN"}}),(0,_.Z)("toolsOptions",{asObject:!0}),(0,a.withProps)((function(e){var t=e.widgets,n=e.toolsOptions;return{widgets:(void 0===n?{seeHidden:!1}:n).seeHidden?t:t.filter((function(e){return!e.hide}))}}))),R=n(65539),T=n(80717);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.widgetType,n=e.type,r=t&&"chart"!==t?t:n;switch(r){case"text":return"sheet";case"table":return"features-grid";case"pie":return"pie-chart";case"line":return"1-line";case"map":return"1-map";case"counter":return"counter";default:return"stats"}};const N=(0,a.compose)((0,a.withPropsOnChange)(["btnGroupProps"],(function(e){var t=e.btnGroupProps;return{btnGroupProps:j(j({},t),{},{className:"widgets-bar"+(t&&t.className?" ".concat(t.className):"")})}})),(0,a.withPropsOnChange)(["widgets","onClick"],(function(e){var t=e.widgets,n=void 0===t?[]:t,r=e.onClick,o=void 0===r?function(){}:r;return{buttons:n.map((function(e){return{glyph:L(e),tooltip:e.title,className:e.collapsed?"btn-tray":"btn-tray active",onClick:function(){return o(e)}}}))}})))(T.Z);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x=(0,a.compose)((0,c.connect)((0,s.P1)(w,(function(e){return{widgets:e}})),{onClick:d.f}),(0,a.defaultProps)({btnGroupProps:{className:"widgets-toolbar",style:{marginLeft:2,marginRight:2}}}),S,(0,a.withProps)((function(e){var t=e.btnGroupProps,n=void 0===t?{}:t,r=e.btnDefaultProps,o=void 0===r?{}:r;return{btnGroupProps:C({bsSize:"xsmall"},n),btnDefaultProps:C({bsSize:"xsmall"},o||{})}})))(N);var G=n(38560);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e,t){return W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},W(e,t)}function z(e,t){if(t&&("object"===Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=(0,p.Z)(G.Z),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expanded,n=e.onClick,r=void 0===n?function(){}:n;return o().createElement(J,{tooltipId:t?"widgets.tray.collapseTray":"widgets.tray.expandTray",bsSize:"xsmall",bsStyle:"default",style:{borderColor:"transparent"},onClick:r},o().createElement(l.Glyphicon,{glyph:t?"chevron-right":"chevron-left"}))},B=(0,a.compose)((0,c.connect)((0,s.P1)(f.E5,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{onClick:function(){return(0,d.Ff)()}}),S,(0,a.withProps)((function(e){var t=e.widgets;return{shouldExpand:0===(void 0===t?[]:t).length}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,n=void 0===t?function(){}:t,r=e.shouldExpand,i=void 0!==r&&r;return o().createElement(J,{tooltipId:i?"widgets.tray.expandAll":"widgets.tray.collapseAll",bsStyle:i?"primary":"success active",bsSize:"xsmall",onClick:n},o().createElement(l.Glyphicon,{glyph:"list"}))})),X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&W(e,t)}(c,e);var t,n,r,i,u=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(i){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function c(){return H(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e,t=this;return this.props.enabled?o().createElement("div",{className:"widgets-tray",style:{marginBottom:32,marginRight:80,bottom:0,right:0,position:"absolute"}},o().createElement(R.Z,{columns:[o().createElement(K,{key:"collapse-tray",toolsOptions:this.props.toolsOptions,expanded:this.props.expanded,onClick:function(){return t.props.setExpanded(!t.props.expanded)}}),o().createElement(B,{key:"collapse-all",toolsOptions:this.props.toolsOptions})].concat((e=this.props.items.map((function(e){return e.tool}))||[],function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))},this.props.expanded?o().createElement(x,{toolsOptions:this.props.toolsOptions}):null)):null}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);Z(X,"propTypes",{enabled:u().bool,toolsOptions:u().object,items:u().array,expanded:u().bool,setExpanded:u().func}),Z(X,"defaultProps",{enabled:!0,items:[],expanded:!1,setExpanded:function(){}});const $=(0,a.compose)((0,a.withState)("expanded","setExpanded",!1),(0,c.connect)((0,s.P1)(w,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{widgets:e}})),{toggleTray:d.ep}),S,(0,a.withProps)((function(e){var t=e.widgets,n=void 0===t?[]:t;return{hasCollapsedWidgets:n.filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collapsed;return t})).length>0,hasTrayWidgets:n.length>0}})),(0,a.lifecycle)({componentDidMount:function(){this.props.toggleTray&&this.props.toggleTray(!0)},componentWillUnmount:function(){this.props.toggleTray&&this.props.toggleTray(!1)}}),(0,a.mapPropsStream)((function(e){return e.merge(e.distinctUntilKeyChanged("hasCollapsedWidgets").do((function(e){var t=e.setExpanded;return(void 0===t?function(){}:t)(e.hasCollapsedWidgets)})).ignoreElements())})),(0,a.withProps)((function(e){var t=e.enabled,n=e.hasTrayWidgets;return{enabled:t&&n}})))(X);var q=n(54414),Q=n(49977),ee=n.n(Q),te=n(27361),ne=n.n(te),re=n(57676),oe=n(81808),ie=n(97395),ue=n(80416),ce=n(97291);function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(e){return((0,f.E5)(e)||[]).filter((function(e){return!ne()(e,"dataGrid.static")})).length>0},fe=function(e){return function(t){return t.take(1).switchMap((function(){return ee().Observable.of((0,ie.um)(se(se({},e),{},{autoDismiss:8,position:"tr",uid:"timeline-collapsed"})))})).merge(t)}};const de={collapseTimelineOnWidgetsEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return ee().Observable.merge(e.ofType(d.Ym,d.uU,oe.ok,d.$A,d.Jm).filter((function(){return le(r())&&(0,ce.pn)(r())}))).switchMap((function(){return ee().Observable.of((0,re.w2)(!0))})).let(fe({title:"widgets.tray.notifications.collapsed.timelineTitle",message:"widgets.tray.notifications.collapsed.message"}))},collapseWidgetsOnTimelineEvents:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return ee().Observable.merge(e.ofType(re.M5).filter((function(e){return!e.collapsed})),e.ofType(ue.yS).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.newProperties,n=void 0===t?{}:t;return n.dimensions}))).filter((function(){return le(r())&&(0,ce.qJ)(r())&&(0,ce.pn)(r())})).switchMap((function(){return ee().Observable.of((0,d.Ff)())})).let(fe({title:"widgets.tray.notifications.collapsed.widgetsTitle",message:"widgets.tray.notifications.collapsed.message"}))},expandTimelineIfCollapsedOnTrayUnmount:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getState,r=void 0===n?function(){}:n;return e.ofType(d.yY,d.$A,oe.ok).filter((function(){return!(0,ce.pn)(r())&&(0,ce.qJ)(r())})).filter((function(){return!le(r())})).switchMap((function(){return ee().Observable.of((0,re.w2)(!1))}))}},ye={WidgetsTrayPlugin:(0,q.Z)($),epics:de}},54414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(22222),o=n(71703),i=n(55105),u=n(93152);const c=(0,o.connect)((0,r.P1)(i.Jz,i.VM,u.c0,(function(e,t,n){return{enabled:!e&&!t&&!n}})))},10473:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67076),o=n(71703),i=n(22222),u=n(827),c=n(74621),a=n(27361),s=n.n(a),p=n(84596),l=n.n(p),f=n(66604),d=n.n(f),y=n(47037),b=n.n(y),O=n(1469),v=n.n(O);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function e(t){var n=t.accessInfo,r=t.postProcessValue,o=t.reduceFun;return function(t){var i=l()(t),u=o;return i.length>1&&"__OR__"===i[0]&&(u=function(e,t){return e||t},i=i.slice(1)),i.map((function(t){var i=t;if(v()(i))return e({accessInfo:n,postProcessValue:r,reduceFun:o})(i);var u=!1;i&&b()(i)&&i.startsWith("!")&&(u=!0,i=i.substr(1));var c=function(e){return u?!e:e},a=b()(i)&&i.split(":");if(a&&a[0]){var p=a[0].split(/\!\=\=?/),l=a[0].split(/\=\=?\=?/);return p.length>1?c(r(s()(n,p[0]),i)!==p[1]):l.length>1?c(r(s()(n,l[0]),i)===l[1]):c(r(s()(n,a[0]),i))}return i})).reduce(u||function(e,t){return e&&t})}};const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.asObject,o=void 0!==n&&n,i=t.postProcessValue,u=void 0===i?function(e){return e}:i,c=t.reduceFun,a=t.accessInfo,s=void 0===a?"accessInfo":a;return(0,r.withPropsOnChange)([e,s],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return g({},e,o?d()(t[e],E({accessInfo:t[s],postProcessValue:u,reduceFun:c})):E({accessInfo:t[s],postProcessValue:u,reduceFun:c})(t[e]))}))},h=function(){return(0,r.compose)((0,o.connect)((0,i.P1)(u.J9,u._H,c.np,(function(e,t,n){return{accessInfo:{mapId:e,mapInfo:t,user:n}}}))),m.apply(void 0,arguments))}},55105:(e,t,n)=>{"use strict";n.d(t,{Nr:()=>l,ic:()=>f,Jz:()=>y,VM:()=>b,CF:()=>O});var r=n(91175),o=n.n(r),i=n(827),u=n(52259);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.maplayout&&e.maplayout.layout||{}},l=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=p(e);return n&&Object.keys(n).filter((function(e){return t[e]})).reduce((function(e,t){return a(a({},e),{},s({},t,n[t]))}),{})||{}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=p(e),r=!!o()(t.filter((function(e){return n[e.key]})).map((function(e){return"not"===e.type?n[e.key]!==e.value&&n[e.key]:n[e.key]===e.value})));return r},y=function(e){return d(e,[{key:"right",value:658}])},b=function(e){return d(e,[{key:"bottom",value:30,type:"not"}])},O=function(e){var t=(0,i.Od)(e),n=l(e);return n&&t&&t.size&&{left:(0,u.parseLayoutValue)(n.left,t.size.width),bottom:(0,u.parseLayoutValue)(n.bottom,t.size.height),right:(0,u.parseLayoutValue)(n.right,t.size.width),top:(0,u.parseLayoutValue)(n.top,t.size.height)}}},24684:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,y:()=>u});var r=n(27361),o=n.n(r),i=function(e){return o()(e,"router.location.pathname")||"/"},u=function(e){return o()(e,"router.location.search")||""}},89179:(e,t,n)=>{var r=n(55639),o=n(40554),i=n(14841),u=n(79833),c=r.isFinite,a=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=i(e),(n=null==n?0:a(o(n),292))&&c(e)){var r=(u(e)+"e").split("e"),s=t(r[0]+"e"+(+r[1]+n));return+((r=(u(s)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},28368:(e,t,n)=>{var r=n(90939);e.exports=function(e,t,n){var o=(n="function"==typeof n?n:void 0)?n(e,t):void 0;return void 0===o?r(e,t,void 0,n):!!o}},59854:(e,t,n)=>{var r=n(89179)("round");e.exports=r},19081:(e,t,n)=>{"use strict";e.exports=n(1174)}}]);