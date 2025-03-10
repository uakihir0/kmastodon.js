(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-events'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-shared-ktor-events'.");
    }
    globalThis['ktor-ktor-shared-ktor-events'] = factory(typeof globalThis['ktor-ktor-shared-ktor-events'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-events'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.jc;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var LockFreeLinkedListNode = kotlin_io_ktor_ktor_utils.$_$.e;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var VOID = kotlin_kotlin.$_$.h;
  var LockFreeLinkedListHead = kotlin_io_ktor_ktor_utils.$_$.d;
  var CopyOnWriteHashMap = kotlin_io_ktor_ktor_utils.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.mg;
  var equals = kotlin_kotlin.$_$.bb;
  var addSuppressed = kotlin_kotlin.$_$.zg;
  var Unit_getInstance = kotlin_kotlin.$_$.q5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventDefinition, 'EventDefinition', EventDefinition);
  initMetadataForClass(HandlerRegistration, 'HandlerRegistration', VOID, LockFreeLinkedListNode, [LockFreeLinkedListNode, DisposableHandle]);
  initMetadataForClass(Events, 'Events', Events);
  //endregion
  function EventDefinition() {
  }
  function _get_handlers__pkfn2a($this) {
    return $this.handlers_1;
  }
  function HandlerRegistration(handler) {
    LockFreeLinkedListNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(HandlerRegistration).get_handler_cq14kh_k$ = function () {
    return this.handler_1;
  };
  protoOf(HandlerRegistration).dispose_3nnxhr_k$ = function () {
    this.remove_fgfybg_k$();
  };
  function Events$subscribe$lambda(it) {
    return new LockFreeLinkedListHead();
  }
  function Events() {
    this.handlers_1 = new CopyOnWriteHashMap();
  }
  protoOf(Events).subscribe_x6ph2e_k$ = function (definition, handler) {
    var registration = new HandlerRegistration(handler);
    this.handlers_1.computeIfAbsent_gq11cy_k$(definition, Events$subscribe$lambda).addLast_ftvmbg_k$(registration);
    return registration;
  };
  protoOf(Events).unsubscribe_pdx53x_k$ = function (definition, handler) {
    var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.get_next_wor1vg_k$();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.unsubscribe.<anonymous>' call
          var it = cur;
          if (equals(it.handler_1, handler)) {
            it.remove_fgfybg_k$();
          }
        }
        cur = cur.get_nextNode_88zlwi_k$();
      }
    }
  };
  protoOf(Events).raise_3e7w7u_k$ = function (definition, value) {
    var exception = null;
    var tmp0_safe_receiver = this.handlers_1.get_h31hzz_k$(definition);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListHead.forEach' call
      var tmp = tmp0_safe_receiver.get_next_wor1vg_k$();
      var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      while (!equals(cur, tmp0_safe_receiver)) {
        if (cur instanceof HandlerRegistration) {
          // Inline function 'io.ktor.events.Events.raise.<anonymous>' call
          var registration = cur;
          try {
            var tmp_0 = registration.handler_1;
            (typeof tmp_0 === 'function' ? tmp_0 : THROW_CCE())(value);
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              var tmp0_safe_receiver_0 = exception;
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                addSuppressed(tmp0_safe_receiver_0, e);
                tmp_1 = Unit_getInstance();
              }
              if (tmp_1 == null) {
                // Inline function 'kotlin.run' call
                // Inline function 'kotlin.contracts.contract' call
                exception = e;
              }
            } else {
              throw $p;
            }
          }
        }
        cur = cur.get_nextNode_88zlwi_k$();
      }
    }
    var tmp1_safe_receiver = exception;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp1_safe_receiver;
    }
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventDefinition;
  _.$_$.b = Events;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-events.js.map
