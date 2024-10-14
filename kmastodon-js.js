(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kmastodon-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kmastodon-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kmastodon-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmastodon:all'. Its dependency 'kmastodon-core' was not found. Please, check whether 'kmastodon-core' is loaded prior to 'work.socialhub.kmastodon:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kmastodon:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kmastodon:all'.");
    }
    globalThis['work.socialhub.kmastodon:all'] = factory(typeof globalThis['work.socialhub.kmastodon:all'] === 'undefined' ? {} : globalThis['work.socialhub.kmastodon:all'], globalThis['kmastodon-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_work_socialhub_kmastodon_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var MastodonFactory_getInstance = kotlin_work_socialhub_kmastodon_core.$_$.b;
  var protoOf = kotlin_kotlin.$_$.jc;
  var VOID = kotlin_kotlin.$_$.h;
  var Service_MASTODON_getInstance = kotlin_work_socialhub_kmastodon_core.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var defineProp = kotlin_kotlin.$_$.ab;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KmastodonFactory, 'KmastodonFactory');
  //endregion
  function KmastodonFactory() {
    KmastodonFactory_instance = this;
  }
  protoOf(KmastodonFactory).instance_sqyyhx_k$ = function (uri, userAccessToken, service) {
    return MastodonFactory_getInstance().instance(uri, userAccessToken, service);
  };
  protoOf(KmastodonFactory).instance = function (uri, userAccessToken, service, $super) {
    userAccessToken = userAccessToken === VOID ? '' : userAccessToken;
    service = service === VOID ? Service_MASTODON_getInstance() : service;
    return this.instance_sqyyhx_k$(uri, userAccessToken, service);
  };
  var KmastodonFactory_instance;
  function KmastodonFactory_getInstance() {
    if (KmastodonFactory_instance == null)
      new KmastodonFactory();
    return KmastodonFactory_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $work = _.work || (_.work = {});
    var $work$socialhub = $work.socialhub || ($work.socialhub = {});
    var $work$socialhub$kmastodon = $work$socialhub.kmastodon || ($work$socialhub.kmastodon = {});
    defineProp($work$socialhub$kmastodon, 'KmastodonFactory', KmastodonFactory_getInstance);
  }
  $jsExportAll$(_);
  kotlin_work_socialhub_kmastodon_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kmastodon-js.js.map
