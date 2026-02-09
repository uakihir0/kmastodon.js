(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-sse'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-sse'.");
    }
    globalThis['ktor-ktor-sse'] = factory(typeof globalThis['ktor-ktor-sse'] === 'undefined' ? {} : globalThis['ktor-ktor-sse'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.vd;
  var toString = kotlin_kotlin.$_$.yj;
  var hashCode = kotlin_kotlin.$_$.tc;
  var getStringHashCode = kotlin_kotlin.$_$.sc;
  var equals = kotlin_kotlin.$_$.oc;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var initMetadataForInterface = kotlin_kotlin.$_$.yc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var toString_0 = kotlin_kotlin.$_$.yd;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(ServerSentEventMetadata, 'ServerSentEventMetadata');
  initMetadataForClass(TypedServerSentEvent, 'TypedServerSentEvent', TypedServerSentEvent, VOID, [ServerSentEventMetadata]);
  initMetadataForClass(ServerSentEvent, 'ServerSentEvent', ServerSentEvent, VOID, [ServerSentEventMetadata]);
  //endregion
  function get_END_OF_LINE_VARIANTS() {
    _init_properties_ServerSentEvent_kt__rkyey5();
    return END_OF_LINE_VARIANTS;
  }
  var END_OF_LINE_VARIANTS;
  function TypedServerSentEvent(data, event, id, retry, comments) {
    data = data === VOID ? null : data;
    event = event === VOID ? null : event;
    id = id === VOID ? null : id;
    retry = retry === VOID ? null : retry;
    comments = comments === VOID ? null : comments;
    this.data_1 = data;
    this.event_1 = event;
    this.id_1 = id;
    this.retry_1 = retry;
    this.comments_1 = comments;
  }
  protoOf(TypedServerSentEvent).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(TypedServerSentEvent).get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  protoOf(TypedServerSentEvent).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(TypedServerSentEvent).get_retry_ixwxvj_k$ = function () {
    return this.retry_1;
  };
  protoOf(TypedServerSentEvent).get_comments_t9igfx_k$ = function () {
    return this.comments_1;
  };
  protoOf(TypedServerSentEvent).toString_vs4gzz_k$ = function (serializer) {
    var tmp0_safe_receiver = this.data_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = serializer(tmp0_safe_receiver);
    }
    return eventToString(tmp, this.event_1, this.id_1, this.retry_1, this.comments_1);
  };
  protoOf(TypedServerSentEvent).component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  protoOf(TypedServerSentEvent).component2_7eebsb_k$ = function () {
    return this.event_1;
  };
  protoOf(TypedServerSentEvent).component3_7eebsa_k$ = function () {
    return this.id_1;
  };
  protoOf(TypedServerSentEvent).component4_7eebs9_k$ = function () {
    return this.retry_1;
  };
  protoOf(TypedServerSentEvent).component5_7eebs8_k$ = function () {
    return this.comments_1;
  };
  protoOf(TypedServerSentEvent).copy_p69ldr_k$ = function (data, event, id, retry, comments) {
    return new TypedServerSentEvent(data, event, id, retry, comments);
  };
  protoOf(TypedServerSentEvent).copy$default_njk4fs_k$ = function (data, event, id, retry, comments, $super) {
    data = data === VOID ? this.data_1 : data;
    event = event === VOID ? this.event_1 : event;
    id = id === VOID ? this.id_1 : id;
    retry = retry === VOID ? this.retry_1 : retry;
    comments = comments === VOID ? this.comments_1 : comments;
    return $super === VOID ? this.copy_p69ldr_k$(data, event, id, retry, comments) : $super.copy_p69ldr_k$.call(this, data, event, id, retry, comments);
  };
  protoOf(TypedServerSentEvent).toString = function () {
    return 'TypedServerSentEvent(data=' + toString(this.data_1) + ', event=' + this.event_1 + ', id=' + this.id_1 + ', retry=' + toString(this.retry_1) + ', comments=' + this.comments_1 + ')';
  };
  protoOf(TypedServerSentEvent).hashCode = function () {
    var result = this.data_1 == null ? 0 : hashCode(this.data_1);
    result = imul(result, 31) + (this.event_1 == null ? 0 : getStringHashCode(this.event_1)) | 0;
    result = imul(result, 31) + (this.id_1 == null ? 0 : getStringHashCode(this.id_1)) | 0;
    result = imul(result, 31) + (this.retry_1 == null ? 0 : this.retry_1.hashCode()) | 0;
    result = imul(result, 31) + (this.comments_1 == null ? 0 : getStringHashCode(this.comments_1)) | 0;
    return result;
  };
  protoOf(TypedServerSentEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypedServerSentEvent))
      return false;
    if (!equals(this.data_1, other.data_1))
      return false;
    if (!(this.event_1 == other.event_1))
      return false;
    if (!(this.id_1 == other.id_1))
      return false;
    if (!equals(this.retry_1, other.retry_1))
      return false;
    if (!(this.comments_1 == other.comments_1))
      return false;
    return true;
  };
  function ServerSentEvent(data, event, id, retry, comments) {
    data = data === VOID ? null : data;
    event = event === VOID ? null : event;
    id = id === VOID ? null : id;
    retry = retry === VOID ? null : retry;
    comments = comments === VOID ? null : comments;
    this.data_1 = data;
    this.event_1 = event;
    this.id_1 = id;
    this.retry_1 = retry;
    this.comments_1 = comments;
  }
  protoOf(ServerSentEvent).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(ServerSentEvent).get_event_ir25pt_k$ = function () {
    return this.event_1;
  };
  protoOf(ServerSentEvent).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ServerSentEvent).get_retry_ixwxvj_k$ = function () {
    return this.retry_1;
  };
  protoOf(ServerSentEvent).get_comments_t9igfx_k$ = function () {
    return this.comments_1;
  };
  protoOf(ServerSentEvent).toString = function () {
    return eventToString(this.data_1, this.event_1, this.id_1, this.retry_1, this.comments_1);
  };
  protoOf(ServerSentEvent).component1_7eebsc_k$ = function () {
    return this.data_1;
  };
  protoOf(ServerSentEvent).component2_7eebsb_k$ = function () {
    return this.event_1;
  };
  protoOf(ServerSentEvent).component3_7eebsa_k$ = function () {
    return this.id_1;
  };
  protoOf(ServerSentEvent).component4_7eebs9_k$ = function () {
    return this.retry_1;
  };
  protoOf(ServerSentEvent).component5_7eebs8_k$ = function () {
    return this.comments_1;
  };
  protoOf(ServerSentEvent).copy_vjzxum_k$ = function (data, event, id, retry, comments) {
    return new ServerSentEvent(data, event, id, retry, comments);
  };
  protoOf(ServerSentEvent).copy$default_8od5v1_k$ = function (data, event, id, retry, comments, $super) {
    data = data === VOID ? this.data_1 : data;
    event = event === VOID ? this.event_1 : event;
    id = id === VOID ? this.id_1 : id;
    retry = retry === VOID ? this.retry_1 : retry;
    comments = comments === VOID ? this.comments_1 : comments;
    return $super === VOID ? this.copy_vjzxum_k$(data, event, id, retry, comments) : $super.copy_vjzxum_k$.call(this, data, event, id, retry, comments);
  };
  protoOf(ServerSentEvent).hashCode = function () {
    var result = this.data_1 == null ? 0 : getStringHashCode(this.data_1);
    result = imul(result, 31) + (this.event_1 == null ? 0 : getStringHashCode(this.event_1)) | 0;
    result = imul(result, 31) + (this.id_1 == null ? 0 : getStringHashCode(this.id_1)) | 0;
    result = imul(result, 31) + (this.retry_1 == null ? 0 : this.retry_1.hashCode()) | 0;
    result = imul(result, 31) + (this.comments_1 == null ? 0 : getStringHashCode(this.comments_1)) | 0;
    return result;
  };
  protoOf(ServerSentEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ServerSentEvent))
      return false;
    if (!(this.data_1 == other.data_1))
      return false;
    if (!(this.event_1 == other.event_1))
      return false;
    if (!(this.id_1 == other.id_1))
      return false;
    if (!equals(this.retry_1, other.retry_1))
      return false;
    if (!(this.comments_1 == other.comments_1))
      return false;
    return true;
  };
  function ServerSentEventMetadata() {
  }
  function eventToString(data, event, id, retry, comments) {
    _init_properties_ServerSentEvent_kt__rkyey5();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    appendField(this_0, 'event', event);
    appendField(this_0, 'data', data);
    appendField(this_0, 'id', id);
    appendField(this_0, 'retry', retry);
    appendField(this_0, '', comments);
    return this_0.toString();
  }
  function appendField(_this__u8e3s4, name, value) {
    _init_properties_ServerSentEvent_kt__rkyey5();
    if (!(value == null)) {
      var tmp0 = toString_0(value);
      // Inline function 'kotlin.text.split' call
      var values = get_END_OF_LINE_VARIANTS().split_p7ck23_k$(tmp0, 0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = values.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        _this__u8e3s4.append_22ad7x_k$(name + ': ' + element + '\r\n');
      }
    }
  }
  var properties_initialized_ServerSentEvent_kt_x8r4bz;
  function _init_properties_ServerSentEvent_kt__rkyey5() {
    if (!properties_initialized_ServerSentEvent_kt_x8r4bz) {
      properties_initialized_ServerSentEvent_kt_x8r4bz = true;
      END_OF_LINE_VARIANTS = Regex_init_$Create$('\r\n|\r|\n');
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ServerSentEvent;
  _.$_$.b = TypedServerSentEvent;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-sse.js.map
