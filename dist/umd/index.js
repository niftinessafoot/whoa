(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RandomizeArray = {}));
})(this, (function (exports) { 'use strict';

  /**
   * Set a gap of time between repeated function calls.
   *
   * @param cb - Function being invoked
   * @param rate - Time, in milliseconds, between callback firings.
   * @returns Callback function, {@link rate}-spaced.
   *
   * @example
   * Best used for things like `mousemove` events.
   * ```
   * const handler = (evt)=>{console.log(evt);}
   * const throttledHandler = throttle(handler, 100);
   * document.body.addEventListener('mousemove', throttledHandler)
   * ```
   * @public
   */
  function throttle(cb) {
    let rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    let timeout;
    return function () {
      if (!timeout) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        cb.call(null, ...args);
        timeout = setTimeout(() => {
          timeout = null;
        }, rate);
      }
    };
  }
  function debounce(cb) {
    let rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    let timeout;
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb.call(null, ...args);
      }, rate);
    };
  }

  exports.debounce = debounce;
  exports.throttle = throttle;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
