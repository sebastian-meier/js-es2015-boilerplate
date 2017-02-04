(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.bundle = global.bundle || {})));
}(this, function (exports) { 'use strict';

  function module$1 () {
    var num = 44;
    return num;
  };

  exports.module = module$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));