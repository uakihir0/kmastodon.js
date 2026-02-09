(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kmastodon-stream'] = factory(typeof globalThis['kmastodon-stream'] === 'undefined' ? {} : globalThis['kmastodon-stream']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kmastodon-stream.js.map
