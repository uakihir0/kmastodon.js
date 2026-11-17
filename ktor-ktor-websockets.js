(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-websockets'.");
    }
    globalThis['ktor-ktor-websockets'] = factory(typeof globalThis['ktor-ktor-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-websockets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var Companion_instance = kotlin_kotlin.$_$.o2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t5;
  var mapCapacity = kotlin_kotlin.$_$.f7;
  var coerceAtLeast = kotlin_kotlin.$_$.zb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i3;
  var protoOf = kotlin_kotlin.$_$.rb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var enumEntries = kotlin_kotlin.$_$.b9;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var Enum = kotlin_kotlin.$_$.cf;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.ub;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g4;
  var getStringHashCode = kotlin_kotlin.$_$.qa;
  var substring = kotlin_kotlin.$_$.zd;
  var charCodeAt = kotlin_kotlin.$_$.fa;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m;
  var isHighSurrogate = kotlin_kotlin.$_$.hd;
  var isLowSurrogate = kotlin_kotlin.$_$.id;
  var initMetadataForInterface = kotlin_kotlin.$_$.wa;
  var Long = kotlin_kotlin.$_$.hf;
  var isInterface = kotlin_kotlin.$_$.hb;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var compare = kotlin_kotlin.$_$.h9;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h8;
  var initMetadataForLambda = kotlin_kotlin.$_$.xa;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.eg;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r3;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.g8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ua;
  var toString_0 = kotlin_kotlin.$_$.og;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.n9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var joinToString = kotlin_kotlin.$_$.x6;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  var Exception = kotlin_kotlin.$_$.ef;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y3;
  var captureStack = kotlin_kotlin.$_$.ca;
  var defineProp = kotlin_kotlin.$_$.la;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var compareTo = kotlin_kotlin.$_$.ja;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.yc;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.xb;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var toHexString = kotlin_kotlin.$_$.ee;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c9;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var RuntimeException = kotlin_kotlin.$_$.lf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var split = kotlin_kotlin.$_$.sd;
  var first = kotlin_kotlin.$_$.s6;
  var isCharSequence = kotlin_kotlin.$_$.db;
  var trim = kotlin_kotlin.$_$.qe;
  var drop = kotlin_kotlin.$_$.k6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.s32().i1r(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($outgoingProcessorLoopCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendCloseSequenceCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkMaxFrameSizeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [CopyableThrowable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException', VOID, RuntimeException);
  initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
  initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
  initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
  initMetadataForCoroutine($closeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Frame, 'Frame');
  initMetadataForClass(Binary, 'Binary', VOID, Frame);
  initMetadataForClass(Text, 'Text', VOID, Frame);
  initMetadataForClass(Close, 'Close', Close_init_$Create$_0, Frame);
  initMetadataForClass(Ping, 'Ping', VOID, Frame);
  initMetadataForClass(Pong, 'Pong', VOID, Frame);
  initMetadataForCompanion(Companion_6);
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    if (Companion_instance_0 == null) {
      Companion_instance;
      new Companion();
    }
  }
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.w31_1;
      destination.z2(tmp$ret$2, element);
    }
    tmp.x31_1 = destination;
    this.y31_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).z31 = function (code) {
    return this.x31_1.s2(code);
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    static_init();
    return Companion_instance_0;
  }
  function values() {
    static_init();
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function get_entries() {
    static_init();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.w31_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.w31_1 = code;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function Codes_NORMAL_getInstance() {
    static_init();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    static_init();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    static_init();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    static_init();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    static_init();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    static_init();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    static_init();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    static_init();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    static_init();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    static_init();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    static_init();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    static_init();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.a32_1 = code;
    this.b32_1 = message;
    var size = utf8Size(this.b32_1);
    // Inline function 'kotlin.require' call
    if (!(size <= 123)) {
      var message_0 = 'Close reason message is too long: ' + size + ' bytes, but must not exceed ' + '123 bytes when UTF-8-encoded';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(CloseReason).c32 = function () {
    return Companion_getInstance().z31(this.a32_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.c32();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.a32_1 : tmp0_elvis_lhs) + ', message=' + this.b32_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.a32_1;
    result = imul(result, 31) + getStringHashCode(this.b32_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.a32_1 === other.a32_1))
      return false;
    if (!(this.b32_1 === other.b32_1))
      return false;
    return true;
  };
  function utf8Size(_this__u8e3s4) {
    var size = 0;
    var index = 0;
    while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return size;
  }
  function utf8Truncate(_this__u8e3s4, maxSize) {
    var size = 0;
    var index = 0;
    $l$loop: while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      if ((size + bytes | 0) > maxSize)
        break $l$loop;
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return index === _this__u8e3s4.length ? _this__u8e3s4 : substring(_this__u8e3s4, 0, index);
  }
  function utf8ByteCountAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(_this__u8e3s4, index);
    var code = Char__toInt_impl_vasixd(this_0);
    return code < 128 ? 1 : code < 2048 ? 2 : isHighSurrogate(charCodeAt(_this__u8e3s4, index)) && (index + 1 | 0) < _this__u8e3s4.length && isLowSurrogate(charCodeAt(_this__u8e3s4, index + 1 | 0)) ? 4 : 3;
  }
  function validateSize(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    if (!(!_this__u8e3s4.i32_1.f32_1 || _this__u8e3s4.j32_1.length <= 125)) {
      var message = 'Control frames must not exceed 125 bytes per RFC 6455, ' + ('but ' + _this__u8e3s4.i32_1.toString() + ' frame has ' + _this__u8e3s4.j32_1.length + ' bytes');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  var OUTGOING_CHANNEL_CONFIG;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
    pingIntervalMillis = pingIntervalMillis === VOID ? new Long(0, 0) : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().u32_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.v32_1, channelsConfig.w32_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().hh(Dispatchers_getInstance().a1l_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().hh(Dispatchers_getInstance().a1l_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    exception = exception === VOID ? null : exception;
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function tryClose($this) {
    return $this.b34_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.e34_1;
    var tmp;
    if ($this.b34_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (compare(interval, new Long(0, 0)) > 0) {
      var tmp_0 = $this.u33_1.s32();
      var tmp_1 = $this.f34_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.v33_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.p1r();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.j1r(Companion_getInstance_1().h34_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.t1p_1);
    if ($this.b34_1.kotlinx$atomicfu$value && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.u34().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.v34(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.u34().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.w34(current);
    }
    return accumulator;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.h34_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.f35_1 = $incomingJob;
    this.g35_1 = $outgoingJob;
    this.h35_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = this.f35_1.q1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m8_1 = 2;
            suspendResult = this.g35_1.q1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h35_1.x33_1.u1b();
            return Unit_instance;
          case 3:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).m26 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.f35_1, this.g35_1, this.h35_1, completion);
    i.i35_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.r35_1 = this$0;
    this.s35_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 39;
            this.d36_1 = null;
            this.w35_1 = null;
            this.v35_1 = false;
            this.x35_1 = Unit_instance;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 33;
            this.n8_1 = 32;
            this.h36_1 = this.r35_1.u33_1.r32();
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.a36_1 = this.h36_1;
            this.z35_1 = null;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 5;
            continue $sm;
          case 5:
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.n8_1 = 29;
            this.n8_1 = 28;
            this.g36_1 = this.a36_1.t();
            this.m8_1 = 7;
            continue $sm;
          case 7:
            this.m8_1 = 8;
            suspendResult = this.g36_1.l1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.m8_1 = 26;
              continue $sm;
            }

            var e = this.g36_1.v();
            this.f36_1 = e;
            this.m8_1 = 9;
            continue $sm;
          case 9:
            this.e36_1 = this.f36_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('WebSocketSession(' + toString(this.t35_1) + ') receiving frame ' + this.e36_1.toString());
            }

            var tmp0_subject = this.e36_1;
            if (tmp0_subject instanceof Close) {
              if (!this.r35_1.s32().n1p()) {
                this.m8_1 = 18;
                var tmp_0 = this.r35_1.s32();
                var tmp1_elvis_lhs = readReason(this.e36_1);
                suspendResult = tmp_0.i1r(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 19;
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.r35_1.v33_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.c36_1 = null;
                  this.m8_1 = 17;
                  continue $sm;
                } else {
                  this.m8_1 = 16;
                  suspendResult = tmp2_safe_receiver.i1r(this.e36_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.m8_1 = 15;
                  suspendResult = this.s35_1.i1r(this.e36_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.r35_1, this.w35_1, this.e36_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.e36_1.h32_1) {
              if (this.d36_1 == null) {
                this.d36_1 = this.e36_1;
              }
              if (this.w35_1 == null) {
                this.w35_1 = BytePacketBuilder();
              }
              writeFully(this.w35_1, this.e36_1.j32_1);
              this.m8_1 = 21;
              continue $sm;
            } else {
              this.m8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.d36_1 == null) {
              this.m8_1 = 14;
              suspendResult = this.r35_1.z33_1.i1r(processIncomingExtensions(this.r35_1, this.e36_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.w35_1), this.e36_1.j32_1);
            var defragmented = Companion_getInstance_5().j36(true, this.d36_1.i32_1, readByteArray(build(this.w35_1)), this.d36_1.l32_1, this.d36_1.m32_1, this.d36_1.n32_1);
            this.d36_1 = null;
            this.m8_1 = 13;
            suspendResult = this.r35_1.z33_1.i1r(processIncomingExtensions(this.r35_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.b36_1 = Unit_instance;
            this.m8_1 = 20;
            continue $sm;
          case 14:
            this.m8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.b36_1 = Unit_instance;
            this.m8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.c36_1 = Unit_instance;
            this.m8_1 = 17;
            continue $sm;
          case 17:
            this.b36_1 = this.c36_1;
            this.m8_1 = 20;
            continue $sm;
          case 18:
            this.m8_1 = 19;
            continue $sm;
          case 19:
            this.v35_1 = true;
            this.m8_1 = 22;
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.m8_1 = 21;
            continue $sm;
          case 21:
            this.m8_1 = 7;
            continue $sm;
          case 22:
            this.n8_1 = 32;
            cancelConsumed(this.a36_1, this.z35_1);
            this.n8_1 = 39;
            this.m8_1 = 23;
            continue $sm;
          case 23:
            this.n8_1 = 39;
            this.s35_1.p1r();
            var tmp0_safe_receiver = this.w35_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.c4();
            }

            this.r35_1.z33_1.p1r();
            if (!this.v35_1) {
              this.m8_1 = 24;
              suspendResult = close(this.r35_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 25;
              continue $sm;
            }

          case 24:
            this.m8_1 = 25;
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_instance;
          case 26:
            this.m8_1 = 27;
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.n8_1 = 32;
            cancelConsumed(this.a36_1, this.z35_1);
            this.m8_1 = 31;
            continue $sm;
          case 28:
            this.n8_1 = 29;
            var tmp_7 = this.p8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.p8_1;
              var tmp_8 = this;
              this.z35_1 = e_0;
              throw e_0;
            } else {
              throw this.p8_1;
            }

          case 29:
            this.n8_1 = 32;
            var t = this.p8_1;
            cancelConsumed(this.a36_1, this.z35_1);
            throw t;
          case 30:
            this.n8_1 = 32;
            cancelConsumed(this.a36_1, this.z35_1);
            if (false) {
              this.m8_1 = 3;
              continue $sm;
            }

            this.m8_1 = 31;
            continue $sm;
          case 31:
            this.x35_1 = Unit_instance;
            this.n8_1 = 39;
            this.m8_1 = 36;
            continue $sm;
          case 32:
            this.n8_1 = 33;
            var tmp_9 = this.p8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.p8_1;
              var tmp_10 = this;
              tmp_10.x35_1 = Unit_instance;
              this.n8_1 = 39;
              this.m8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.p8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.p8_1;
                var tmp_12 = this;
                this.s35_1.p1r();
                tmp_12.x35_1 = this.r35_1.z33_1.n1r(cause);
                this.n8_1 = 39;
                this.m8_1 = 36;
                continue $sm;
              } else {
                throw this.p8_1;
              }
            }

          case 33:
            this.n8_1 = 39;
            this.y35_1 = this.p8_1;
            this.s35_1.p1r();
            var tmp0_safe_receiver_0 = this.w35_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.c4();
            }

            this.r35_1.z33_1.p1r();
            if (!this.v35_1) {
              this.m8_1 = 34;
              suspendResult = close(this.r35_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 35;
              continue $sm;
            }

          case 34:
            this.m8_1 = 35;
            continue $sm;
          case 35:
            throw this.y35_1;
          case 36:
            this.u35_1 = this.x35_1;
            this.n8_1 = 39;
            this.s35_1.p1r();
            var tmp0_safe_receiver_1 = this.w35_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.c4();
            }

            this.r35_1.z33_1.p1r();
            if (!this.v35_1) {
              this.m8_1 = 37;
              suspendResult = close(this.r35_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 38;
              continue $sm;
            }

          case 37:
            this.m8_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.n8_1 === 39) {
          throw e_1;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).m26 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.r35_1, this.s35_1, completion);
    i.t35_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.s36_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 13;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 9;
            this.n8_1 = 4;
            this.m8_1 = 3;
            suspendResult = outgoingProcessorLoop(this.s36_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.n8_1 = 13;
            this.m8_1 = 11;
            continue $sm;
          case 4:
            this.n8_1 = 9;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.p8_1;
              this.n8_1 = 13;
              this.m8_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this.p8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.p8_1;
                this.n8_1 = 13;
                this.m8_1 = 11;
                continue $sm;
              } else {
                var tmp_2 = this.p8_1;
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.p8_1;
                  this.m8_1 = 5;
                  suspendResult = sendCloseSequence(this.s36_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.p8_1;
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.p8_1;
                    this.n8_1 = 13;
                    this.m8_1 = 11;
                    continue $sm;
                  } else {
                    var tmp_4 = this.p8_1;
                    if (tmp_4 instanceof Error) {
                      var cause = this.p8_1;
                      this.s36_1.a34_1.t1b(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.m8_1 = 6;
                      suspendResult = closeExceptionally(this.s36_1.u33_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.p8_1;
                    }
                  }
                }
              }
            }

          case 5:
            this.n8_1 = 13;
            this.m8_1 = 11;
            continue $sm;
          case 6:
            this.n8_1 = 13;
            this.m8_1 = 7;
            continue $sm;
          case 7:
            this.n8_1 = 13;
            this.s36_1.a34_1.r1r();
            this.m8_1 = 8;
            suspendResult = close(this.s36_1.u33_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.n8_1 = 13;
            this.u36_1 = this.p8_1;
            this.s36_1.a34_1.r1r();
            this.m8_1 = 10;
            suspendResult = close(this.s36_1.u33_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.u36_1;
          case 11:
            this.n8_1 = 13;
            this.s36_1.a34_1.r1r();
            this.m8_1 = 12;
            suspendResult = close(this.s36_1.u33_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_instance;
          case 13:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 13) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).m26 = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.s36_1, completion);
    i.t36_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.d37_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).f37 = function (it, $completion) {
    var tmp = this.g37(it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).i9 = function (p1, $completion) {
    return this.f37(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = sendCloseSequence(this.d37_1, this.e37_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 2) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).g37 = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.d37_1, completion);
    i.e37_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.f37(it, $completion);
    }, 1);
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f33_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 7;
            this.h33_1 = this.f33_1.a34_1.t();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 2;
            suspendResult = this.h33_1.l1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.m8_1 = 6;
              continue $sm;
            }

            var frame = this.h33_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Sending ' + frame.toString() + ' from session ' + toString(this.f33_1));
            }

            if (frame instanceof Close) {
              this.m8_1 = 3;
              suspendResult = sendCloseSequence(this.f33_1, readReason(frame), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0;
              if (frame instanceof Text) {
                tmp_0 = true;
              } else {
                tmp_0 = frame instanceof Binary;
              }
              if (tmp_0) {
                this.g33_1 = processOutgoingExtensions(this.f33_1, frame);
                this.m8_1 = 4;
                continue $sm;
              } else {
                this.g33_1 = frame;
                this.m8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.m8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.g33_1;
            this.m8_1 = 5;
            suspendResult = this.f33_1.u33_1.s32().i1r(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 7) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q33_1 = _this__u8e3s4;
    this.r33_1 = reason;
    this.s33_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            if (!tryClose(this.q33_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Sending Close Sequence for session ' + toString(this.q33_1) + ' with reason ' + toString_0(this.r33_1) + ' and exception ' + toString_0(this.s33_1));
            }

            this.q33_1.x33_1.c1h();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.r33_1;
            tmp_0.t33_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 5;
            runOrCancelPinger(this.q33_1);
            if (!(this.t33_1.a32_1 === Codes_CLOSED_ABNORMALLY_getInstance().w31_1)) {
              this.m8_1 = 2;
              suspendResult = this.q33_1.u33_1.s32().i1r(Close_init_$Create$(this.t33_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 6;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 6;
            this.q33_1.w33_1.a1h(this.t33_1);
            if (!(this.s33_1 == null)) {
              this.q33_1.a34_1.n1r(this.s33_1);
              this.q33_1.z33_1.n1r(this.s33_1);
            }

            return Unit_instance;
          case 5:
            this.n8_1 = 6;
            var t = this.p8_1;
            this.q33_1.w33_1.a1h(this.t33_1);
            if (!(this.s33_1 == null)) {
              this.q33_1.a34_1.n1r(this.s33_1);
              this.q33_1.z33_1.n1r(this.s33_1);
            }

            throw t;
          case 6:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 6) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q34_1 = _this__u8e3s4;
    this.r34_1 = packet;
    this.s34_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.s34_1.j32_1.length;
            var tmp0_safe_receiver = this.r34_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.t34_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (compare(fromInt(this.t34_1), this.q34_1.q32()) > 0) {
              var tmp2_safe_receiver = this.r34_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.c4();
              }
              this.m8_1 = 2;
              suspendResult = close(this.q34_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.t34_1 + '. Max size is ' + this.q34_1.q32().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(fromInt(this.t34_1));
          case 3:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_1();
    this.u33_1 = raw;
    this.v33_1 = atomic$ref$1(null);
    this.w33_1 = CompletableDeferred();
    this.x33_1 = Job();
    this.y33_1 = this.u33_1.k1a().fh(Key_instance).hh(this.x33_1).hh(new CoroutineName('ws-default'));
    this.z33_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.a34_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.b34_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c34_1 = ArrayList_init_$Create$();
    this.d34_1 = atomic$boolean$1(false);
    this.e34_1 = pingIntervalMillis;
    this.f34_1 = timeoutMillis;
    this.g34_1 = this.w33_1;
  }
  protoOf(DefaultWebSocketSessionImpl).k1a = function () {
    return this.y33_1;
  };
  protoOf(DefaultWebSocketSessionImpl).r32 = function () {
    return this.z33_1;
  };
  protoOf(DefaultWebSocketSessionImpl).s32 = function () {
    return this.a34_1;
  };
  protoOf(DefaultWebSocketSessionImpl).u34 = function () {
    return this.c34_1;
  };
  protoOf(DefaultWebSocketSessionImpl).p32 = function (value) {
    this.u33_1.p32(value);
  };
  protoOf(DefaultWebSocketSessionImpl).q32 = function () {
    return this.u33_1.q32();
  };
  protoOf(DefaultWebSocketSessionImpl).o32 = function (negotiatedExtensions) {
    if (!this.d34_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.f2f(tmp$ret$2);
    }
    this.c34_1.i1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.s32()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).j1x = function ($completion) {
    return this.u33_1.j1x($completion);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
      var tmp0_safe_receiver = get_OUTGOING_CHANNEL_CAPACITY();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = new ChannelConfig(tmp0_safe_receiver, ChannelOverflow_SUSPEND_getInstance());
      }
      OUTGOING_CHANNEL_CONFIG = tmp;
    }
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.j32_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.j32_1);
    var packet = builder;
    var code = packet.m17();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).v1d = function () {
    return Unit_instance;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  protoOf(NonDisposableHandle).hashCode = function () {
    return 207988788;
  };
  protoOf(NonDisposableHandle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(cause, this);
    captureStack(this, FrameTooBigException);
    this.h37_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    var sizeSuffix = compare(this.h37_1, new Long(0, 0)) >= 0 ? ': ' + this.h37_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  };
  protoOf(FrameTooBigException).l1h = function () {
    return new FrameTooBigException(this.h37_1, this);
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    if (Companion_instance_3 == null) {
      Companion_instance;
      new Companion_2();
    }
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.t();
      if (!iterator.u()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.g32_1;
      do {
        var e = iterator.v();
        var v = e.g32_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.i37_1 = ensureNotNull(tmp$ret$0).g32_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.i37_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.g32_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.j37_1 = tmp_3;
  }
  var Companion_instance_3;
  function values_0() {
    static_init_0();
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function get_entries_0() {
    static_init_0();
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.f32_1 = controlFrame;
    this.g32_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    static_init_0();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    static_init_0();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    static_init_0();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    static_init_0();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    static_init_0();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    var channel = Channel(2147483647);
    var tmp = actorJob.hh(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.k1a().z8(Key_instance));
    tmp_0.m1b(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.s37_1 = $channel;
    this.t37_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ponger$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 14;
            this.n8_1 = 13;
            this.y37_1 = this.s37_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.w37_1 = this.y37_1;
            this.v37_1 = null;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 10;
            this.n8_1 = 9;
            this.x37_1 = this.w37_1.t();
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 5;
            suspendResult = this.x37_1.l1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.m8_1 = 7;
              continue $sm;
            }

            var e = this.x37_1.v();
            get_LOGGER().f2f('Received ping message, sending pong message');
            this.m8_1 = 6;
            suspendResult = this.t37_1.i1r(new Pong(e.j32_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.m8_1 = 4;
            continue $sm;
          case 7:
            this.m8_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.n8_1 = 13;
            cancelConsumed(this.w37_1, this.v37_1);
            this.m8_1 = 12;
            continue $sm;
          case 9:
            this.n8_1 = 10;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.p8_1;
              var tmp_2 = this;
              this.v37_1 = e_0;
              throw e_0;
            } else {
              throw this.p8_1;
            }

          case 10:
            this.n8_1 = 13;
            var t = this.p8_1;
            cancelConsumed(this.w37_1, this.v37_1);
            throw t;
          case 11:
            this.n8_1 = 13;
            cancelConsumed(this.w37_1, this.v37_1);
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 12;
            continue $sm;
          case 12:
            this.n8_1 = 14;
            this.m8_1 = 15;
            continue $sm;
          case 13:
            this.n8_1 = 14;
            var tmp_3 = this.p8_1;
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.p8_1;
              this.m8_1 = 15;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 14:
            throw this.p8_1;
          case 15:
            this.n8_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.n8_1 === 14) {
          throw e_1;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).m26 = function ($this$launch, completion) {
    var i = new ponger$slambda(this.s37_1, this.t37_1, completion);
    i.u37_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.h38_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).l26 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.m26($this$withTimeoutOrNull, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(pinger$slambda$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m8_1 = 4;
              continue $sm;
            }

            this.m8_1 = 2;
            suspendResult = this.h38_1.l1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 1;
            continue $sm;
          case 3:
            throw this.p8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).m26 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.h38_1, completion);
    i.i38_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.l26($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.r38_1 = $outgoing;
    this.s38_1 = $pingMessage;
    this.t38_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).l26 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.m26($this$withTimeoutOrNull, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(pinger$slambda$slambda_1).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            get_LOGGER().f2f('WebSocket Pinger: sending ping frame');
            this.m8_1 = 1;
            suspendResult = this.r38_1.i1r(new Ping(toByteArray(this.s38_1, Charsets_getInstance().l27_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m8_1 = 5;
              continue $sm;
            }

            this.m8_1 = 3;
            suspendResult = this.t38_1.l1r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v38_1 = suspendResult;
            if (decodeToString(this.v38_1.j32_1, 0, 0 + this.v38_1.j32_1.length | 0) === this.s38_1) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('WebSocket Pinger: received valid pong frame ' + this.v38_1.toString());
              }
              this.m8_1 = 5;
              continue $sm;
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 4:
            var this_1 = get_LOGGER();
            if (get_isTraceEnabled(this_1)) {
              this_1.f2f('WebSocket Pinger: received invalid pong frame ' + this.v38_1.toString() + ', continue waiting');
            }

            this.m8_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 6) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).m26 = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.r38_1, this.s38_1, this.t38_1, completion);
    i.u38_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.l26($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.e39_1 = $periodMillis;
    this.f39_1 = $timeoutMillis;
    this.g39_1 = $onTimeout;
    this.h39_1 = $channel;
    this.i39_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(pinger$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Starting WebSocket pinger coroutine with period ' + this.e39_1.toString() + ' ms and timeout ' + this.f39_1.toString() + ' ms');
            }

            this.l39_1 = Random(getTimeMillis());
            this.k39_1 = new Int8Array(32);
            this.n8_1 = 7;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m8_1 = 6;
              continue $sm;
            }

            this.m8_1 = 2;
            suspendResult = withTimeoutOrNull(this.e39_1, pinger$slambda$slambda_0(this.h39_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l39_1.xi(this.k39_1);
            var pingMessage = '[ping ' + toHexString(this.k39_1) + ' ping]';
            this.m8_1 = 3;
            suspendResult = withTimeoutOrNull(this.f39_1, pinger$slambda$slambda_2(this.i39_1, pingMessage, this.h39_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().f2f('WebSocket pinger has timed out');
              this.m8_1 = 5;
              suspendResult = this.g39_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 4:
            this.m8_1 = 1;
            continue $sm;
          case 5:
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.n8_1 = 8;
            this.m8_1 = 9;
            continue $sm;
          case 7:
            this.n8_1 = 8;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.p8_1;
              this.m8_1 = 9;
              continue $sm;
            } else {
              var tmp_1 = this.p8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.p8_1;
                this.m8_1 = 9;
                continue $sm;
              } else {
                var tmp_2 = this.p8_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.p8_1;
                  this.m8_1 = 9;
                  continue $sm;
                } else {
                  var tmp_3 = this.p8_1;
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.p8_1;
                    this.m8_1 = 9;
                    continue $sm;
                  } else {
                    throw this.p8_1;
                  }
                }
              }
            }

          case 8:
            throw this.p8_1;
          case 9:
            this.n8_1 = 8;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 8) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).m26 = function ($this$launch, completion) {
    var i = new pinger$slambda(this.e39_1, this.f39_1, this.g39_1, this.h39_1, this.i39_1, completion);
    i.j39_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.u1b();
      return Unit_instance;
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (!properties_initialized_PingPong_kt_fbfhmc) {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.v32_1 = this_0.m39();
    this_0.w32_1 = this_0.m39();
    tmp.u32_1 = this_0;
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.v32_1 = Companion_getInstance_3().n39_1;
    this.w32_1 = Companion_getInstance_3().n39_1;
  }
  protoOf(WebSocketChannelsConfig).m39 = function () {
    return Companion_getInstance_3().n39_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.o39_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.p39_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.o39_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.p39_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.o39_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.n39_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_5;
  function Companion_getInstance_3() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.o39_1 = capacity;
    this.p39_1 = onOverflow;
  }
  protoOf(ChannelConfig).q39 = function () {
    return this.p39_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.o39_1 === 2147483647);
  };
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_instance;
    static_init_called_1 = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  function ChannelOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BoundedChannel$Companion$createDelegate$lambda($channel) {
    return function (it) {
      var tmp;
      var tmp_0;
      if ($channel._v == null) {
        throwUninitializedPropertyAccessException('channel');
      } else {
        tmp_0 = $channel._v;
      }
      if (!tmp_0.n1p()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.n1r(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_5() {
  }
  protoOf(Companion_5).r39 = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function BoundedChannel(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_6.r39(capacity) : delegate;
    this.s39_1 = delegate;
  }
  protoOf(BoundedChannel).t39 = function (element) {
    var result = this.s39_1.j1r(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.n1r(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).j1r = function (element) {
    return this.t39(element);
  };
  protoOf(BoundedChannel).u39 = function (element, $completion) {
    return this.s39_1.i1r(element, $completion);
  };
  protoOf(BoundedChannel).i1r = function (element, $completion) {
    return this.u39(element, $completion);
  };
  protoOf(BoundedChannel).n1r = function (cause) {
    return this.s39_1.n1r(cause);
  };
  protoOf(BoundedChannel).n1p = function () {
    return this.s39_1.n1p();
  };
  protoOf(BoundedChannel).v39 = function ($completion) {
    return this.s39_1.l1r($completion);
  };
  protoOf(BoundedChannel).l1r = function ($completion) {
    return this.v39($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.s39_1.t();
  };
  protoOf(BoundedChannel).t1b = function (cause) {
    this.s39_1.t1b(cause);
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    static_init_1();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    static_init_1();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y39_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.z39_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).m2j = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.y39_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = item();
      destination.c1(tmp$ret$2);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.b3a_1.r() ? '' : '; ' + joinToString($this.b3a_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.a3a_1 = name;
    this.b3a_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.a3a_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$6 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.c1(tmp$ret$6);
      }
      var parameters = destination_0;
      var tmp$ret$2 = new WebSocketExtensionHeader(name, parameters);
      destination.c1(tmp$ret$2);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$(_this__u8e3s4, reason, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      var message = utf8Truncate(cause.toString(), 123);
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), message);
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k3a_1 = _this__u8e3s4;
    this.l3a_1 = reason;
  }
  protoOf($closeCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = this.k3a_1.t32(Close_init_$Create$(this.l3a_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m8_1 = 2;
            suspendResult = this.k3a_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 4;
            this.m8_1 = 5;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.p8_1;
              this.m8_1 = 5;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 4:
            throw this.p8_1;
          case 5:
            this.n8_1 = 4;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 4) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    Text_init_$Init$(true, toByteArray(text), $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.u18(reason.a32_1);
    writeText(builder, reason.b32_1);
    Close_init_$Init$_0(builder, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readByteArray(packet));
    return $this;
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_5().i36_1);
    return $this;
  }
  function Close_init_$Create$_0() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.i36_1 = new Int8Array(0);
  }
  protoOf(Companion_6).j36 = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.a1_1) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_7;
  function Companion_getInstance_5() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.h32_1 = fin;
    this.i32_1 = frameType;
    this.j32_1 = data;
    this.k32_1 = disposableHandle;
    this.l32_1 = rsv1;
    this.m32_1 = rsv2;
    this.n32_1 = rsv3;
    validateSize(this);
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.i32_1.toString() + ' (fin=' + this.h32_1 + ', buffer len = ' + this.j32_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).t32 = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).p1r = close$default;
  protoOf(BoundedChannel).r1r = cancel$default;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_6 = new Companion_5();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = Companion_getInstance;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = send;
  _.$_$.f = Binary_init_$Create$;
  _.$_$.g = Close_init_$Create$;
  _.$_$.h = Text_init_$Create$;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = WebSocketChannelsConfig;
  _.$_$.m = WebSocketExtensionsConfig;
  _.$_$.n = WebSocketExtension;
  _.$_$.o = WebSocketSession;
  _.$_$.p = from;
  _.$_$.q = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
