(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./MapStore2/web/client/components/I18N/Message.jsx":function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n("./node_modules/prop-types/index.js"),d=n("./node_modules/react/index.js"),b=n("./node_modules/react-intl/lib/index.es.js").FormattedMessage,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,u=c(s);function s(){var e;o(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(a(e=u.call.apply(u,[this].concat(n))),"renderFormattedMsg",(function(e){var t=e.msgId,n=e.msgParams,r=e.children;return r&&"function"==typeof r?d.createElement(b,{id:t,values:n},(function(e){return r(e)})):d.createElement(b,{id:t,values:n})})),p(a(e),"renderMsg",(function(e){var t=e.msgId,n=e.children;return n&&"function"==typeof n?n(t):d.createElement("span",null,t||"")})),e}return t=s,(n=[{key:"render",value:function(){return this.context.intl?this.renderFormattedMsg(this.props):this.renderMsg(this.props)}}])&&i(t.prototype,n),r&&i(t,r),s}(d.Component);p(y,"propTypes",{msgId:f.string.isRequired,msgParams:f.object}),p(y,"contextTypes",{intl:f.object}),e.exports=y},"./MapStore2/web/client/components/layout/BorderLayout.jsx":function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=n("./node_modules/react/index.js");e.exports=function(e){var t=e.id,n=e.children,r=e.header,i=e.footer,c=e.columns,u=e.height,a=e.style,s=void 0===a?{}:a,p=e.className,f=e.bodyClassName,d=void 0===f?"ms2-border-layout-body":f;return l.createElement("div",{id:t,className:p,style:o({display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"hidden"},s)},r,l.createElement("div",{className:d,style:{display:"flex",flex:1,overflowY:"auto"}},l.createElement("main",{className:"ms2-border-layout-content",style:{flex:1}},u?l.createElement("div",{style:{height:u}},n):n),u?l.createElement("div",{style:{height:u}},c):c),i)}},"./MapStore2/web/client/selectors/router.js":function(e,t,n){"use strict";n.r(t),n.d(t,"pathnameSelector",(function(){return o})),n.d(t,"searchSelector",(function(){return i}));var r=n("./MapStore2/node_modules/lodash/lodash.js"),o=function(e){return Object(r.get)(e,"router.location.pathname")||"/"},i=function(e){return Object(r.get)(e,"router.location.search")||""}},"./js/previewPlugins.js":function(e,t,n){var r=n("./node_modules/rxjs/Rx.js"),o=n("./js/epics/index.js"),i=o._setThumbnail,l=o.updateMapLayoutEpic;e.exports={plugins:{MapPlugin:n("./MapStore2/web/client/plugins/Map.jsx"),IdentifyPlugin:n("./MapStore2/web/client/plugins/Identify.jsx"),ToolbarPlugin:n("./MapStore2/web/client/plugins/Toolbar.jsx"),ZoomAllPlugin:n("./MapStore2/web/client/plugins/ZoomAll.jsx"),MapLoadingPlugin:n("./MapStore2/web/client/plugins/MapLoading.jsx"),OmniBarPlugin:n("./MapStore2/web/client/plugins/OmniBar.jsx"),BackgroundSelectorPlugin:n("./MapStore2/web/client/plugins/BackgroundSelector.jsx"),FullScreenPlugin:n("./MapStore2/web/client/plugins/FullScreen.jsx"),ZoomInPlugin:n("./MapStore2/web/client/plugins/ZoomIn.jsx"),ZoomOutPlugin:n("./MapStore2/web/client/plugins/ZoomOut.jsx"),ExpanderPlugin:n("./MapStore2/web/client/plugins/Expander.jsx"),BurgerMenuPlugin:n("./MapStore2/web/client/plugins/BurgerMenu.jsx"),ScaleBoxPlugin:n("./MapStore2/web/client/plugins/ScaleBox.jsx"),MapFooterPlugin:n("./MapStore2/web/client/plugins/MapFooter.jsx"),PrintPlugin:n("./MapStore2/web/client/plugins/Print.jsx"),TimelinePlugin:n("./MapStore2/web/client/plugins/Timeline.jsx"),PlaybackPlugin:n("./MapStore2/web/client/plugins/Playback.jsx"),AddReducersAndEpics:{reducers:{security:n("./MapStore2/web/client/reducers/security.js").default,maps:n("./MapStore2/web/client/reducers/maps.js").default,maplayout:n("./MapStore2/web/client/reducers/maplayout.js").default},epics:{_setThumbnail:i,updateMapLayoutEpic:l,zoomToVisibleAreaEpic:function(){return r.Observable.empty()}}}},requires:{ReactSwipe:n("./node_modules/react-swipeable-views/lib/index.js").default,SwipeHeader:n("./MapStore2/web/client/components/data/identify/SwipeHeader.jsx")}}}}]);