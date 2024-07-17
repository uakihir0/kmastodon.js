(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kmastodon-stream'] = factory(typeof this['kmastodon-stream'] === 'undefined' ? {} : this['kmastodon-stream']);
}(globalThis, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kmastodon-stream.js.map
