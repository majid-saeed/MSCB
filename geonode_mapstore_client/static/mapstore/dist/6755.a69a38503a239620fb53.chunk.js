(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6755],{7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(27418),o=r.n(n),a=r(45697),i=r.n(a),l=r(24852),s=r.n(l),c=r(85294),u=r.n(c),d=r(72986),p=r.n(d),f=r(5346);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&g(e,t)}(l,e);var t,r,n,a,i=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(a){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return w(this,e)});function l(){var e;y(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(O(e=i.call.apply(i,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(f.Z,{msgId:"loading"}),s().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),j(O(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),j(O(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),j(O(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=l,(r=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),r=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(s().Component);j(C,"propTypes",{id:i().string.isRequired,style:i().object,backgroundStyle:i().object,className:i().string,maskLoading:i().bool,containerClassName:i().string,headerClassName:i().string,bodyClassName:i().string,footerClassName:i().string,onClickOut:i().func,modal:i().bool,start:i().object,draggable:i().bool,bounds:i().oneOfType([i().string,i().object])}),j(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const N=C},14068:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(24852),o=r.n(n),a=r(55033),i=r.n(a),l=r(32425),s=r(83139),c=r(80717);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const m=(0,n.forwardRef)((function(e,t){var r,a,f=e.className,m=void 0===f?"ms-thumbnail":f,h=e.label,b=e.loading,y=e.message,v=e.error,g=e.thumbnail,w=e.removeGlyph,O=void 0===w?"trash":w,E=e.removeTooltipId,j=void 0===E?"removeThumbnail":E,C=e.style,N=void 0===C?{}:C,k=e.maxFileSize,P=void 0===k?5e5:k,S=e.supportedImageTypes,R=void 0===S?["image/png","image/jpeg","image/jpg"]:S,A=e.thumbnailOptions,z=e.dropZoneProps,I=void 0===z?{className:"ms-thumbnail-dropzone",activeClassName:"ms-thumbnail-dropzone-active",rejectClassName:"ms-thumbnail-dropzone-reject"}:z,x=e.onUpdate,L=void 0===x?function(){}:x,T=e.onError,_=void 0===T?function(){}:T,D=e.onRemove,Z=e.toolbarButtons,q=(0,n.useRef)(),U=(r=(0,n.useState)(),a=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(r,a)||p(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),F=U[0],B=U[1];if((0,n.useEffect)((function(){return q.current=!0,function(){q.current=!1}}),[]),b||F)return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""," ms-loading")},o().createElement(l.Z,{size:70}));var H=o().createElement(c.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:Z||[{glyph:O,visible:!(!D||!g),tooltipId:j,onClick:function(e){var t;null==e||null===(t=e.stopPropagation)||void 0===t||t.call(e),null==D||D()}}]});return o().createElement("div",{className:"dropzone-thumbnail-container".concat(m?" ".concat(m):""),style:N},h,o().createElement(i(),u({},I,{multiple:!1,onDrop:function(e){var t,r=null==e||null===(t=e[0])||void 0===t?void 0:t.type,n=-1!==R.indexOf(r);B(!0),function(e,t){return new Promise((function(r){var n=e;if(null!=n&&n[0]){var o=n[0],a=new FileReader;return a.onload=function(e){return r(t?(0,s.Xq)(e.target.result,t).then((function(e){return{data:e,size:e.length}})):{data:e.target.result,size:o.size})},a.readAsDataURL(o)}return r({data:null})}))}(e,A).then((function(t){var r=t.data,o=t.size;return q.current?(B(!1),n&&r&&o<P?L(r,e):_([].concat(d(n?[]:["FORMAT"]),d(r&&o>=P?["SIZE"]:[])),e)):null})).catch((function(e){return q.current?(B(!1),_(e)):null}))}}),g?o().createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o().createElement("div",{ref:t,style:{position:"relative",width:"100%",height:"100%",backgroundImage:"url(".concat(g,")"),backgroundSize:null!=A&&A.contain?"contain":"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),o().createElement("div",{className:"dropzone-content-image-added"},y),H):o().createElement("div",{className:"dropzone-content-image"},y,H,v&&o().createElement("div",{className:"dropzone-errors"},v))))}))},83139:(e,t,r)=>{"use strict";r.d(t,{Xq:()=>n,v9:()=>a});var n=function(e,t){return new Promise((function(r,n){var o=t||{},a=o.width,i=void 0===a?64:a,l=o.height,s=void 0===l?64:l,c=o.contain,u=o.type,d=void 0===u?"image/jpeg":u,p=o.quality,f=void 0===p?.5:p,m=new Image;m.crossOrigin="anonymous",m.onload=function(){var e=m.naturalWidth/m.naturalHeight,t=i,n=s,o=i/s,a=document.createElement("canvas");a.setAttribute("width",i),a.setAttribute("height",s),a.style.width=i+"px",a.style.height=s+"px";var l=a.getContext("2d"),u=!c&&e<o||c&&e>o?[t,t/e]:[n*e,n];l.save(),l.translate(t/2,n/2),l.drawImage(m,-u[0]/2,-u[1]/2,u[0],u[1]),l.restore();var p=a.toDataURL(d,f);r(p)},m.onerror=function(e){n(e)},m.src=e}))},o=function(e,t){return new Promise((function(r,n){var o=t||{},a=o.type,i=void 0===a?"image/jpeg":a,l=o.quality,s=void 0===l?.5:l,c=document.createElement("video");c.crossOrigin="anonymous";var u=document.createElement("source"),d=document.createElement("canvas");c.addEventListener("loadedmetadata",(function(){var e=c.videoWidth,t=c.videoHeight;d.setAttribute("width",e),d.setAttribute("height",t),d.style.width=e+"px",d.style.height=t+"px"}),!0),c.addEventListener("loadeddata",(function(){c.currentTime=1}),!0),c.addEventListener("seeked",(function(){d.getContext("2d").drawImage(c,0,0);try{var e=d.toDataURL(i,s);r(e)}catch(e){n(e)}}),!0),c.addEventListener("error",(function(e){n(e)}),!0),c.appendChild(u),c.setAttribute("src",e)}))},a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,a=/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,i=null===(e=t.match(a))||void 0===e?void 0:e[1];return i?new Promise((function(e){return e("http://img.youtube.com/vi/".concat(i,"/sddefault.jpg"))})):t.match(/\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i)?o(t).then((function(e){return n(e,r)})):new Promise((function(e,t){return t("Cannot create a thumbnail from the provided source")}))}}}]);