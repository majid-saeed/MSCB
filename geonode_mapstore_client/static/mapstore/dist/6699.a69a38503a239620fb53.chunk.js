(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6699],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>a,sb:()=>c,K$:()=>s,k7:()=>p,cX:()=>l,x9:()=>f,vs:()=>y,oE:()=>d,Po:()=>E,qv:()=>m,cI:()=>O,g6:()=>b,I4:()=>v,l$:()=>h,Xv:()=>g,k3:()=>_,CQ:()=>R,R8:()=>S,HN:()=>T,sH:()=>P,c7:()=>A,_7:()=>N,eF:()=>I,O6:()=>w,ED:()=>D,RP:()=>C,sF:()=>L,VP:()=>j,He:()=>M,vO:()=>F,WO:()=>x,bh:()=>G,pV:()=>Y,MK:()=>H,ZF:()=>U,tV:()=>k,Dv:()=>K,Yz:()=>Z,kI:()=>V,XG:()=>q,A4:()=>W,Rp:()=>X,ct:()=>B,oh:()=>z,$h:()=>Q,ud:()=>J,Qr:()=>$,LR:()=>ee,nN:()=>te,UG:()=>ne,F5:()=>re,c9:()=>oe,Jh:()=>ie,Xy:()=>ue});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",a="SORT_NODE",c="REMOVE_NODE",s="UPDATE_NODE",p="MOVE_NODE",l="LAYER_LOADING",f="LAYER_LOAD",y="LAYER_ERROR",d="ADD_LAYER",E="ADD_GROUP",m="REMOVE_LAYER",O="SHOW_SETTINGS",b="HIDE_SETTINGS",v="UPDATE_SETTINGS",h="REFRESH_LAYERS",g="LAYERS:UPDATE_LAYERS_DIMENSION",_="LAYERS_REFRESHED",R="LAYERS_REFRESH_ERROR",S="LAYERS:BROWSE_DATA",T="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",A="LAYERS:SELECT_NODE",N="LAYERS:FILTER_LAYERS",I="LAYERS:SHOW_LAYER_METADATA",w="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,n){return{type:O,node:e,nodeType:t,options:n}}function L(){return{type:b}}function j(e){return{type:v,options:e}}function M(e,t){return{type:r,newProperties:t,layer:e}}function F(e,t){return{type:o,layer:e,params:t}}function x(e,t){return{type:i,newProperties:t,group:e}}function G(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function Y(e){return{type:"CONTEXT_NODE",node:e}}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:a,node:e,order:t,sortLayers:n}}function U(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:e,nodeType:t,removeEmpty:n}}function k(e,t,n){return{type:s,node:e,nodeType:t,options:n}}function K(e,t,n){return{type:p,node:e,groupId:t,index:n}}function Z(e){return{type:l,layerId:e}}function V(e,t){return{type:f,layerId:e,error:t}}function q(e,t,n){return{type:y,layerId:e,tilesCount:t,tilesErrorCount:n}}function W(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:d,layer:e,foreground:t}}function X(e,t,n){return{type:E,group:e,parent:t,options:n}}function B(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function z(e){return{type:_,layers:e}}function Q(e,t){return{type:R,layers:e,error:t}}function J(e,t,n,r){return{type:g,dimension:e,value:t,options:n,layers:r}}function $(e){return{type:S,layer:e}}function ee(e){return{type:T,layer:e}}function te(){return{type:P}}function ne(e,t,n){return{type:A,id:e,nodeType:t,ctrlKey:n}}function re(e){return{type:N,text:e}}function oe(e,t){return{type:I,metadataRecord:e,maskLoading:t}}function ie(){return{type:w}}function ue(e,t){return{type:D,newParams:e,update:t}}},1550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>o,TR:()=>i,N7:()=>u,mq:()=>a,uv:()=>c,Qy:()=>s,IL:()=>p,Li:()=>l,OW:()=>f,ZO:()=>y,Um:()=>d,TF:()=>E,Ls:()=>m,Ec:()=>O,Eu:()=>b,JJ:()=>v,nZ:()=>h,YD:()=>g,GI:()=>_,Jb:()=>R,Uh:()=>S,LP:()=>T,xy:()=>P,o6:()=>A,FP:()=>N,Mo:()=>I,sO:()=>w,Px:()=>D,hd:()=>C,BV:()=>L,SO:()=>j,H0:()=>M,$X:()=>F,ou:()=>x,NE:()=>G});var r=n(97395),o="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",a="CHANGE_ZOOM_LVL",c="PAN_TO",s="ZOOM_TO_EXTENT",p="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",y="CHANGE_MAP_STYLE",d="CHANGE_ROTATION",E="CREATION_ERROR_LAYER",m="UPDATE_VERSION",O="INIT_MAP",b="RESIZE_MAP",v="CHANGE_MAP_LIMITS",h="SET_MAP_RESOLUTIONS",g="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",R="MOUSE_MOVE",S="MOUSE_OUT";function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,r.vU)({title:"warning",message:"map.errorLoadingFont",values:e,position:"tc",autoDismiss:10})}function P(e,t,n){return{type:p,pos:e,zoom:t,crs:n}}function A(e,t,n,r,i,u,a,c){return{type:o,center:e,zoom:t,bbox:n,size:r,mapStateSource:i,projection:u,viewerOptions:a,resolution:c}}function N(e,t){return{type:i,point:e,layer:t}}function I(e){return{type:u,pointer:e}}function w(e,t){return{type:a,zoom:e,mapStateSource:t}}function D(e,t,n){return{type:s,extent:e,crs:t,maxZoom:n}}function C(e,t){return{type:y,style:e,mapStateSource:t}}function L(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function j(e){return{type:h,resolutions:e}}var M=function(e,t){return{type:g,eventName:e,toolName:t}},F=function(e,t){return{type:_,eventName:e,toolName:t}},x=function(e){return{type:R,position:e}},G=function(){return{type:S}}},21914:(e,t,n)=>{"use strict";n.d(t,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>p,E0:()=>l,F9:()=>f,X_:()=>y,pb:()=>d,qb:()=>E,Re:()=>m,ih:()=>O,xy:()=>b,jL:()=>v,oz:()=>h,ph:()=>g,lF:()=>_,gG:()=>R,cb:()=>S,GI:()=>T,B1:()=>P,fv:()=>A,gc:()=>N,zX:()=>I,ZF:()=>w,Zb:()=>D,Fm:()=>C,sV:()=>L,Mn:()=>j,LU:()=>M,XP:()=>F,WU:()=>x,JB:()=>G,g:()=>Y,ws:()=>H,HP:()=>U,aN:()=>k,Pg:()=>Z,u0:()=>V,TM:()=>q,PM:()=>W,lK:()=>X,sv:()=>B,MO:()=>z,oO:()=>Q,Mc:()=>J,Zw:()=>$,RA:()=>ee,am:()=>te,ZM:()=>ne,wm:()=>re,Y$:()=>oe});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",p="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",f="HIDE_MAPINFO_MARKER",y="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",E="GET_VECTOR_INFO",m="NO_QUERYABLE_LAYERS",O="CLEAR_WARNING",b="FEATURE_INFO_CLICK",v="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",h="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",_="UPDATE_CENTER_TO_MARKER",R="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",T="IDENTIFY:CHANGE_FORMAT",P="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",A="IDENTIFY:EDIT_LAYER_FEATURES",N="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",I="IDENTIFY:SET_MAP_TRIGGER",w="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",D="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function C(e,t,n,r,i){return{type:o,data:t,reqId:e,requestParams:n,layerMetadata:r,layer:i}}function L(e,t,n,r){return{type:i,error:t,reqId:e,requestParams:n,layerMetadata:r}}function j(e,t,n,r){return{type:u,reqId:e,exceptions:t,requestParams:n,layerMetadata:r}}function M(){return{type:m}}function F(){return{type:O}}function x(e,t){return{type:c,reqId:e,request:t}}function G(e,t,n,r){return{type:E,layer:e,request:t,metadata:n,queryableLayers:r}}function Y(){return{type:s}}function H(e){return{type:p,infoFormat:e}}function U(){return{type:l}}function k(){return{type:f}}function K(e){return{type:y,reverseGeocodeData:e.data}}function Z(e){return function(t){r.Z.reverseGeocode(e).then((function(e){t(K(e))})).catch((function(e){t(K(e))}))}}function V(){return{type:d}}function q(){return{type:g}}function W(e){return{type:_,status:e}}function X(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:b,point:e,layer:t,filterNameList:n,overrideParams:r,itemId:o}}function B(e){return{type:v,point:e}}function z(e){return{type:h,enabled:e}}function Q(e){return{type:R,index:e}}var J=function(){return{type:S}},$=function(e){return{type:T,format:e}},ee=function(e){return{type:P,showCoordinateEditor:e}},te=function(e){return{type:A,layer:e}},ne=function(e){return{type:N,query:e}},re=function(e){return{type:I,trigger:e}},oe=function(e){return{type:D,value:e}}},47310:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(75875),o=n.n(r),i=n(72500),u=n.n(i),a=n(27418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const p={geocode:function(e,t){var n=c()({q:e},s,t||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(e,t){var n=c()({lat:e.lat,lon:e.lng},t||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}},99509:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(24852),o=n.n(r),i=n(45697),u=n.n(i),a=n(48403),c=n.n(a),s=n(30294),p=n(73333);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function E(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(i){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(m(e=u.call.apply(u,[this].concat(n))),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown(t))})),b(m(e),"validateDecimalLon",(function(t){var n=e.props.constraints[e.props.format].lon.min,r=e.props.constraints[e.props.format].lon.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),b(m(e),"validateDecimalLat",(function(t){var n=e.props.constraints[e.props.format].lat.min,r=e.props.constraints[e.props.format].lat.max,o=parseFloat(t);return isNaN(o)||o<n||o>r?"error":null})),e}return t=a,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.coordinate,r=t.value,i=t.onChange,u=t.disabled,a="validateDecimal"+c()(n);return o().createElement(s.FormGroup,{validationState:this[a](r)},o().createElement(p.Z,{disabled:u,key:n,value:r,placeholder:n,onChange:function(t){""===t?i(""):null===e[a](t)?i(t):i(r)},onKeyDown:this.verifyOnKeyDownEvent,step:1,validateNameFunc:this[a],type:"number"}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);b(v,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,coordinate:u().string,onChange:u().func,onKeyDown:u().func,onSubmit:u().func,disabled:u().bool}),b(v,"defaultProps",{format:"decimal",coordinate:"lat",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:function(){},disabled:!1});const h=v;var g=n(14293),_=n.n(g),R=n(67076);const S=(0,R.withProps)((function(e){var t=e.coordinate,n=void 0===t?"lat":t;return{maxDegrees:"lat"===n?90:180,directions:"lat"===n?["N","S"]:["E","W"]}}));var T=n(62395);const P=(0,R.compose)((0,R.withProps)((function(e){return{isValid:""!==e.value}})),(0,R.withState)("initial","setInitial",{}),(0,R.withProps)((function(e){var t=e.isValid,n=e.initial,r=e.degrees,o=e.minutes,i=e.seconds;return t||""===r&&""===o&&""===i?{}:n})),(0,R.withHandlers)({onChange:function(e){return function(t){var n=t.degrees,r=t.minutes,o=t.seconds,i=t.direction;isNaN(n)?e.setInitial({degrees:"",minutes:r,seconds:o,direction:i}):isNaN(r)?e.setInitial({degrees:n,minutes:"",seconds:o,direction:i}):isNaN(o)&&e.setInitial({degrees:n,minutes:r,seconds:"",direction:i}),e.onChange({degrees:n,minutes:r,seconds:o,direction:i})}}}));function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&C(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(i){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(){var e;w(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return F(j(e=u.call.apply(u,[this].concat(n))),"onChange",(function(t,n){var r=e.getUpdatedCoordinateValue(t,n);e.props.onChange(r)})),F(j(e),"getUpdatedCoordinateValue",(function(t,n){try{var r=F({degrees:e.props.degrees,minutes:e.props.minutes,seconds:e.props.seconds,direction:e.props.direction},t,"degrees"===t?Math.min(n,e.props.maxDegrees):n),o=r.seconds,i=r.minutes+e.getSexagesimalStep(o),u=Math.min(e.props.maxDegrees,r.degrees+e.getSexagesimalStep(i)),a=r.direction;return o=e.roundToNextSexagesimalStep(o),i=e.roundToNextSexagesimalStep(i),u===e.props.maxDegrees&&(i=0,o=0),a=u<0?a===e.props.directions[0]?e.props.directions[1]:e.props.directions[0]:a,-1===u&&(r.degrees<0&&r.minutes>=0?u=r.degrees:r.minutes<0&&r.degrees<=0?(u=0,i=r.minutes):(u=0,i=0,o=1e-4)),{degrees:u,minutes:i,seconds:o,direction:a}}catch(e){return null}})),F(j(e),"getSexagesimalStep",(function(e){return e>=60?1:e<0?-1:0})),F(j(e),"getInputStyle",(function(e){return isNaN(e)||""===e?{borderColor:"#a94442"}:{}})),F(j(e),"verifyOnKeyDownEvent",(function(t){69===t.keyCode&&t.preventDefault(),13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),e.props.onKeyDown())})),F(j(e),"roundToNextSexagesimalStep",(function(e){return e<0?60+e:e>=60?e-60:e})),F(j(e),"isValid",(function(t){var n=t.minutes,r=t.seconds,o=t.degrees,i=t.direction;return!_()(n)&&n>0&&n<60&&!_()(r)&&r>0&&r<60&&!_()(o)&&o>0&&o<e.props.maxDegrees&&i})),e}return t=a,(n=[{key:"render",value:function(){var e=this,t={padding:0,textAlign:"center",borderRight:"none"},n=this.getInputStyle(this.props.degrees),r=this.getInputStyle(this.props.minutes),i=this.getInputStyle(this.props.seconds),u={position:"relative",top:0,overflow:"visible",zIndex:3,left:-25,width:0,height:0},a=this.props.aeronauticalOptions.seconds.step;return o().createElement(s.FormGroup,{style:{display:"inline-flex"}},o().createElement("div",{className:"degrees",style:{width:40,display:"flex"}},o().createElement(p.Z,{key:this.props.coordinate+"degree",value:this.props.degrees,disabled:this.props.disabled,placeholder:"d",onChange:function(t){return e.onChange("degrees",parseInt(t,10))},step:1,size:3,max:this.props.maxDegrees,min:-1,onKeyDown:function(t){e.verifyOnKeyDownEvent(t)},style:I(I({width:"100%"},t),n),type:"number"}),o().createElement("span",{style:u},"??")),o().createElement("div",{className:"minutes",style:{width:40,display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+"minutes",placeholder:"m",size:3,value:this.props.minutes,onChange:function(t){e.onChange("minutes",parseInt(t,10))},max:60,min:-1,onKeyDown:function(t){e.verifyOnKeyDownEvent(t)},style:I(I({width:"100%"},t),r),step:1,type:"number"}),o().createElement("span",{style:u},"???")),o().createElement("div",{className:"seconds",style:{display:"flex"}},o().createElement(p.Z,{disabled:this.props.disabled,key:this.props.coordinate+"seconds",value:this.props.seconds,placeholder:"s",onChange:function(t){return e.onChange("seconds",parseFloat(t))},step:a,max:60,onKeyDown:function(t){e.verifyOnKeyDownEvent(t)},min:-1,style:I(I({width:"100%"},t),i),type:"number"}),o().createElement("span",{style:u},"???")),o().createElement("div",{className:"direction-select"},o().createElement(s.FormControl,{disabled:this.props.disabled,componentClass:"select",placeholder:"select",value:this.props.direction,onChange:function(t){return e.onChange("direction",t.target.value)},style:{paddingLeft:4,paddingRight:4,flex:"1 1 0%"}},this.props.directions.map((function(e){return o().createElement("option",{key:e,value:e},e)})))))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);F(x,"propTypes",{idx:u().number,maxDegrees:u().number,degrees:u().number,minutes:u().number,seconds:u().number,directions:u().array,direction:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func,disabled:u().bool}),F(x,"defaultProps",{coordinate:"lat",maxDegrees:90,directions:["N","S"],aeronauticalOptions:{seconds:{decimals:4,step:1e-4}},onKeyDown:function(){},disabled:!1});const G=(0,R.compose)(S,T.Z,P)(x),Y=(0,R.compose)((0,R.withHandlers)({onChange:function(e){var t=e.onChange,n=void 0===t?function(){}:t,r=e.maxLatitude,o=void 0===r?89.9997222222:r,i=e.coordinate;return function(e){return n(Math.abs(parseFloat(e))>o&&"lat"===i?Math.sign(e)*o:e)}}}));function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function V(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&Z(e,t)}(a,e);var t,n,r,i,u=(r=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(i){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(){return k(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props.format;return"decimal"===e||_()(e)?o().createElement(h,U({},this.props,{format:this.props.format||"decimal"})):o().createElement(G,this.props)}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);W(X,"propTypes",{idx:u().number,value:u().number,constraints:u().object,format:u().string,aeronauticalOptions:u().object,coordinate:u().string,onChange:u().func,onKeyDown:u().func}),W(X,"defaultProps",{format:"decimal",constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}}});const B=Y(X)},62395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(7654),o=n.n(r),i=n(59854),u=n.n(i),a=n(67076);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=(0,a.compose)((0,a.withProps)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{seconds:{decimals:4}}).seconds,r=e>=0?Math.floor(e):Math.ceil(e),i=Math.abs(60*(e-r)),a=Math.floor(i),c=60*(i-a),s=u()(c,n.decimals);return r=Math.abs(r),60===s&&(a++,s=0),60===a&&(r++,a=0),o()(r)||""===e?{degrees:"",minutes:"",seconds:"",direction:t?"E":"N"}:{degrees:r,minutes:a,seconds:s,direction:e<0?t?"W":"S":t?"E":"N"}}(e.value,"lon"===e.coordinate,e.aeronauticalOptions))})),(0,a.withHandlers)({onChange:function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.degrees,r=t.minutes,i=t.seconds,u=t.direction,a=0,c=0,s=0;void 0===n&&void 0===r&&void 0===i&&e.onChange(void 0),o()(n)||(a=n),o()(r)||(c=r),o()(i)||(s=i);var p=a+c/60+s/3600;(p>0&&("S"===u||"W"===u)||p<0&&("N"===u||"E"===u))&&(p*=-1),e.onChange(p.toPrecision(12))}}}))},77900:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(30294),o=n(15135),i=n(24852),u=n.n(i),a=n(23570),c=n.n(a);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=(0,o.Z)(r.DropdownButton),l={disabled:!1,className:"square-button-md",noCaret:!0,idDropDown:c()()};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.menuOptions,n=void 0===t?[]:t,o=e.buttonConfig,i=void 0===o?{}:o;return u().createElement(p,s({},l,i),n.length?n.map((function(e,t){var n=e.glyph,o=e.text,i=e.onClick,a=e.active,c=void 0!==a&&a;return u().createElement(r.MenuItem,{active:c,eventKey:t,onClick:i,key:t},n&&u().createElement(r.Glyphicon,{glyph:n})," ",o)})):null)}}}]);