(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9320],{15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(45697),o=r.n(n),i=r(24852),u=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r(68195).FormattedHTMLMessage,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&s(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(o){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return c(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);y(h,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(h,"contextTypes",{intl:o().object});const b=h},36911:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),a=r(30998);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&f(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function u(){var e;l(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(y(e=i.call.apply(i,[this].concat(r))),"setLayer",(function(){var t;e._layer&&e.cleanSupport(),e.props.map.eachLayer((function(r){r.layerId===e.props.layer&&(t=r)}),y(e)),void 0!==t&&t.on("click",e.featureClicked,y(e)),e._layer=t,e.highlightFeatures(e.props.features)})),h(y(e),"featureClicked",(function(t){var r=t.layer;if((t.originalEvent.ctrlKey||t.originalEvent.metaKey)&&r){var n=(0,a.findIndex)(e._selectedFeatures,(function(e){return e===r}));-1!==n?(e._layer.resetStyle(r),e._selectedFeatures=e._selectedFeatures.filter((function(e,t){return t!==n})),r=null):e._selectedFeatures.push(r)}else e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=r?[r]:[];r&&(r.bringToFront(),r.setStyle(e.props.selectedStyle)),e.props.updateHighlighted(e._selectedFeatures.map((function(e){return e.msId})),"")})),h(y(e),"cleanSupport",(function(){e._layer&&(e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._layer.off("click",e.featureClicked,y(e))),e._selectedFeatures=[],e._layer=null,e.props.updateHighlighted([],"")})),h(y(e),"highlightFeatures",(function(t){e._layer||e.setLayer(),e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=[],e._layer.eachLayer((function(r){-1!==t.indexOf(r.msId)&&(e._selectedFeatures.push(r),r.bringToFront(),r.setStyle(e.props.selectedStyle))}),y(e))})),e}return t=u,(r=[{key:"componentDidMount",value:function(){this._selectedFeatures=[],this._layer=null,"enabled"===this.props.status&&this.setLayer()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setLayer();break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this.cleanSupport()}},{key:"render",value:function(){return null}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);h(b,"propTypes",{map:u().object,layer:u().string,status:u().oneOf(["disabled","enabled","update"]),updateHighlighted:u().func,selectedStyle:u().object,features:u().array}),h(b,"contextTypes",{messages:u().object}),h(b,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{radius:12,weight:4,opacity:1,fillOpacity:1,color:"yellow",fillColor:"red"},features:[]});const m=b},97611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={LMap:r(39726).Z,Layer:r(52792).Z,Feature:r(44948).Z,MeasurementSupport:r(42047).Z,Overview:r(21975),ScaleBar:r(20564),DrawSupport:r(91753).default,HighlightFeatureSupport:r(36911).Z,PopupSupport:r(67465).Z}},25064:(e,t,r)=>{"use strict";r.d(t,{fH:()=>i,FP:()=>u,R3:()=>a});var n=r(55877),o=r.n(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",r=document.createElement("div");return r.setAttribute("id",e+"-map-popup"),r.setAttribute("class",t),r},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var r=document.createDocumentFragment();r.appendChild(t),e.appendChild(r)}else u(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},23279:(e,t,r)=>{var n=r(13218),o=r(7771),i=r(14841),u=Math.max,a=Math.min;e.exports=function(e,t,r){var c,l,s,f,p,y,d=0,h=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var r=c,n=l;return c=l=void 0,d=t,f=e.apply(n,r)}function g(e){return d=e,p=setTimeout(w,t),h?v(e):f}function _(e){var r=e-y;return void 0===y||r>=t||r<0||b&&e-d>=s}function w(){var e=o();if(_(e))return S(e);p=setTimeout(w,function(e){var r=t-(e-y);return b?a(r,s-(e-d)):r}(e))}function S(e){return p=void 0,m&&c?v(e):(c=l=void 0,f)}function O(){var e=o(),r=_(e);if(c=arguments,l=this,y=e,r){if(void 0===p)return g(y);if(b)return clearTimeout(p),p=setTimeout(w,t),v(y)}return void 0===p&&(p=setTimeout(w,t)),f}return t=i(t)||0,n(r)&&(h=!!r.leading,s=(b="maxWait"in r)?u(i(r.maxWait)||0,t):s,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==p&&clearTimeout(p),d=0,c=y=l=p=void 0},O.flush=function(){return void 0===p?f:S(o())},O}},7771:(e,t,r)=>{var n=r(55639);e.exports=function(){return n.Date.now()}},23493:(e,t,r)=>{var n=r(23279),o=r(13218);e.exports=function(e,t,r){var i=!0,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),n(e,t,{leading:i,maxWait:t,trailing:u})}}}]);