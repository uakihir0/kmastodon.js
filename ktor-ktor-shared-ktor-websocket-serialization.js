(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['ktor-ktor-shared-ktor-websocket-serialization'] = factory(typeof globalThis['ktor-ktor-shared-ktor-websocket-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-websocket-serialization']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-websocket-serialization.js.map
