/* This is transpiled to legacy code and should work in any browser or version of Node.*/
!function(e,n){if("function"==typeof define&&define.amd)define(["exports"],n);else if("undefined"!=typeof exports)n(exports);else{var t={exports:{}};n(t.exports),e.unknown=t.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.debounce=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var o=arguments.length,l=new Array(o),f=0;f<o;f++)l[f]=arguments[f];clearTimeout(n),n=setTimeout((function(){e.call.apply(e,[null].concat(l))}),t)}},e.throttle=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){if(!n){for(var o=arguments.length,l=new Array(o),f=0;f<o;f++)l[f]=arguments[f];e.call.apply(e,[null].concat(l)),n=setTimeout((function(){n=null}),t)}}}}));
//# sourceMappingURL=legacy.js.map