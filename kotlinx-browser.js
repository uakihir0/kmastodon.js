(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kotlinx-browser'] = factory(typeof globalThis['kotlinx-browser'] === 'undefined' ? {} : globalThis['kotlinx-browser']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function toInt8Array(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function get(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4[index];
  }
  function get_ARRAYBUFFER(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'arraybuffer';
  }
  function get_FOLLOW(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'follow';
  }
  function get_MANUAL(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return 'manual';
  }
  function get_undefined() {
    return undefined_0;
  }
  var undefined_0;
  //region block: init
  undefined_0 = null;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-browser.js.map
