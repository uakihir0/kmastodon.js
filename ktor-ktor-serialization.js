(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-serialization'.");
    }
    globalThis['ktor-ktor-serialization'] = factory(typeof globalThis['ktor-ktor-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-serialization'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.nj;
  var protoOf = kotlin_kotlin.$_$.vd;
  var initMetadataForInterface = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  function serialize(charset, typeInfo, value, $completion) {
    return this.serialize_uo6795_k$(charset, typeInfo, ensureNotNull(value), $completion);
  }
  initMetadataForInterface(WebsocketContentConverter, 'WebsocketContentConverter', VOID, VOID, VOID, [3]);
  //endregion
  function WebsocketContentConverter() {
  }
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization.js.map
