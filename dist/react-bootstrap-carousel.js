!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("ReactBootstrap_Carousel",["react"],t):"object"==typeof exports?exports.ReactBootstrap_Carousel=t(require("react")):e.ReactBootstrap_Carousel=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.React_Bootstrap_Carousel=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));t.React_Bootstrap_Carousel=r.default,t.default=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(0)),i=s(n(4)),a=s(n(1)),u=s(n(10)),c=s(n(11)),l=s(n(12));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visibilitychange=function(){(document.hidden||n.props.hidden)&&n.props.pauseOnVisibility?n._pause():n._autoPlay()},n._checkChildrenLength=function(){var e=n.props.children;Array.isArray(e)&&e.length>0&&n._autoPlay()},n._autoPlay=function(){n._pause(),n.props.autoplay&&n._play()},n.slideNext=function(){var e=n.state.activeIndex,t=n.props.wrap,r=e+1;if(r>n.props.children.length-1){if(!t)return;r=0}n.safeSetState({activeIndex:r,direction:"next"})},n.goToSlide=function(e){n.timeout&&clearTimeout(n.timeout),n.setState({activeIndex:e})},n.slidePrev=function(){var e=n.state.activeIndex,t=n.props.wrap,r=e-1,o=n.props.children.length;if(r<0){if(!t)return;r=o-1}n.setState({activeIndex:r,direction:"prev"})},n._handleMouseOver=function(){n._pause()},n._handleMouseOut=function(){n.isPaused&&n.props.autoplay&&n._play()},n._pause=function(){n.isPaused=!0,n.timeout&&clearTimeout(n.timeout)},n._play=function(){n.isPaused=!1,n._waitForNext()},n._indClick=function(e,t){n.timeout&&clearTimeout(n.timeout),n.setState({activeIndex:e,direction:t}),n.isPaused=!1},n._controlsClick=function(e){n.timeout&&clearTimeout(n.timeout),n.isPaused=!1,"prev"==e?n.slidePrev():n.slideNext()},n.render_ind=function(){var e=n.props,t=e.children,r=e.indicators,i=n.state.activeIndex;if(r)return o.default.createElement(u.default,{data:t,activeIndex:i,indClick:n._indClick})},n.render_control=function(){var e=n.props,t=e.children,r=e.controls,i=e.leftIcon,a=e.rightIcon,u=e.version;if(r)return o.default.createElement(c.default,{dataLength:t.length,leftIcon:i,rightIcon:a,prev:n.slidePrev,next:n.slideNext,controlsClick:n._controlsClick,version:u})},n.state={activeIndex:n.props.defaultActiveIndex,className:(0,a.default)("carousel slide",n.props.className)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),r(t,[{key:"componentDidUpdate",value:function(e,t){if(this._checkChildrenLength(),this.props.autoplay!==e.autoplay&&this._autoPlay(),t.activeIndex!==this.state.activeIndex){var n=this.state,r=n.direction,o=n.activeIndex;this.props.onSelect(o,r)}}},{key:"init",value:function(){this._checkChildrenLength()}},{key:"unmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"_waitForNext",value:function(){this.timeout=setTimeout(this.slideNext,this.props.slideshowSpeed)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.version,r=this.state,i=r.activeIndex,u=r.className,c=this.props.animation;return o.default.createElement("div",{className:(0,a.default)(u),onMouseOver:this._handleMouseOver,onMouseOut:this._handleMouseOut},this.render_ind(),o.default.createElement(l.default,{animation:c,data:t,activeIndex:i,version:n}),this.render_control())}}]),t}();f.defaultProps={indicators:!0,controls:!0,slideshowSpeed:7e3,defaultActiveIndex:0,wrap:!0,autoplay:!0,children:[],animation:!0,className:"",version:3,pauseOnVisibility:!1,hidden:!1,onSelect:function(){}},t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(5));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.safeSetState=function(e){!n.isUnmount&&n.setState(e)},n.isUnmounted=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.unmount),window.addEventListener("visibilitychange",this.visibilitychange),"function"==typeof this.init&&this.init()}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,"function"==typeof this.unmount&&this.unmount(),window.removeEventListener("beforeunload",this.unmount),window.removeEventListener("visibilitychange",this.visibilitychange)}},{key:"render",value:function(){return o.default.createElement("div",null,"The Base Component")}}]),t}();u.propTypes={init:i.default.func,unmount:i.default.func},t.default=u},function(e,t,n){e.exports=n(6)()},function(e,t,n){"use strict";var r=n(7),o=n(8),i=n(9);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,u,c){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,i,a,u,c],f=0;(l=new Error(t.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){var t=n.props.activeIndex<e?"next":"prev";n.props.indClick(e,t)},n.state={css:"carousel-indicators"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.activeIndex;if(Array.isArray(n)){var i=n.map(function(t,n){var i=n==r?"active":"";return o.default.createElement("li",{key:n,onClick:e._onClick.bind(e,n),className:i,style:{marginLeft:10}})});return o.default.createElement("ol",{className:this.state.css},i)}return null}}]),t}();i.defaultProps={data:[],activeIndex:0,indClick:function(){}},t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.React_FlexSlider_Icon_Left=t.React_FlexSlider_Icon_Right=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onclick=function(e){n.props.controlsClick(e)},n.state={},n}return u(t,o.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.rightIcon,n=e.leftIcon,r=e.dataLength,i=e.version,a="",u="";if(r<2)return null;switch(i){case 4:a="left carousel-control-prev",u="right carousel-control-next",n=n||o.default.createElement("i",{className:"icon icon-chevron-left"}),t=t||o.default.createElement("i",{className:"icon icon-chevron-right"});break;default:a="left carousel-control",u="right carousel-control",n=n||o.default.createElement("i",{className:"glyphicon glyphicon-chevron-left"}),t=t||o.default.createElement("i",{className:"glyphicon glyphicon-chevron-right"})}return o.default.createElement("div",null,o.default.createElement("a",{className:a,onClick:this._onclick.bind(this,"prev")},o.default.createElement(s,{icon:n})),o.default.createElement("a",{className:u,onClick:this._onclick.bind(this,"next")},o.default.createElement(l,{icon:t})))}}]),t}();c.defaultProps={dataLength:0,controlsClick:function(){},version:3},t.default=c;var l=t.React_FlexSlider_Icon_Right=function(e){function t(e){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,o.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props.icon;return o.default.createElement("span",{className:"rightControl"},e)}}]),t}(),s=t.React_FlexSlider_Icon_Left=function(e){function t(e){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,o.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props.icon;return o.default.createElement("span",{className:"leftControl"},e)}}]),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.activeIndex,r=e.version,a=e.animation,u=4==r?"carousel-item":"item",c=[];return Array.isArray(t)?(c=t.map(function(e,t){var c=void 0,l=void 0;switch(!0){case!0===a&&t>n&&4==r:c="carousel-item-right",l="carousel-item-next";break;case!0===a&&t>n:c="right",l="next";break;case!0===a&&t<n&&4==r:c="carousel-item-left",l="carousel-item-prev";break;case!0===a&&t<n:c="left",l="prev"}var s=(0,i.default)(u,l,c);return s=t===n?(0,i.default)(u,"active"):s,o.default.createElement("div",{key:t,className:s},e)}),o.default.createElement("div",{className:"carousel-inner",role:"listbox"},c)):o.default.createElement("div",{key:0,className:(0,i.default)(u,"active")},t)}}]),t}();u.defaultProps={data:[],activeIndex:0,direction:null,version:3},t.default=u}])});