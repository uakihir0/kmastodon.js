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
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b7;
  var mapCapacity = kotlin_kotlin.$_$.s8;
  var coerceAtLeast = kotlin_kotlin.$_$.ee;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var protoOf = kotlin_kotlin.$_$.vd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var THROW_IAE = kotlin_kotlin.$_$.wi;
  var enumEntries = kotlin_kotlin.$_$.ab;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var objectCreate = kotlin_kotlin.$_$.ud;
  var Enum = kotlin_kotlin.$_$.li;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.yd;
  var getStringHashCode = kotlin_kotlin.$_$.sc;
  var emptyList = kotlin_kotlin.$_$.v7;
  var initMetadataForInterface = kotlin_kotlin.$_$.yc;
  var Long = kotlin_kotlin.$_$.qi;
  var isInterface = kotlin_kotlin.$_$.jd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var compare = kotlin_kotlin.$_$.ib;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var CoroutineImpl = kotlin_kotlin.$_$.ta;
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var initMetadataForLambda = kotlin_kotlin.$_$.zc;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.j;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.y;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.i1;
  var ensureNotNull = kotlin_kotlin.$_$.nj;
  var build = kotlin_io_ktor_ktor_io.$_$.b1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.aa;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.wc;
  var toString_0 = kotlin_kotlin.$_$.yj;
  var get_size = kotlin_io_ktor_ktor_io.$_$.f1;
  var fromInt = kotlin_kotlin.$_$.ob;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var joinToString = kotlin_kotlin.$_$.k8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.i;
  var SuspendFunction1 = kotlin_kotlin.$_$.va;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var readText = kotlin_io_ktor_ktor_io.$_$.d1;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var initMetadataForObject = kotlin_kotlin.$_$.ad;
  var Exception = kotlin_kotlin.$_$.ni;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.fc;
  var initCauseBridge = kotlin_io_ktor_ktor_utils.$_$.h;
  var defineProp = kotlin_kotlin.$_$.nc;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var compareTo = kotlin_kotlin.$_$.mc;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.h1;
  var decodeToString = kotlin_kotlin.$_$.of;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.be;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var hex = kotlin_io_ktor_ktor_utils.$_$.g1;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.q1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.bb;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var cancel$default_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Channel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var RuntimeException = kotlin_kotlin.$_$.ui;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.j2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x2;
  var indexOf = kotlin_kotlin.$_$.zf;
  var to = kotlin_kotlin.$_$.zj;
  var until = kotlin_kotlin.$_$.je;
  var substring = kotlin_kotlin.$_$.ch;
  var substring_0 = kotlin_kotlin.$_$.dh;
  var asSequence = kotlin_kotlin.$_$.w6;
  var map = kotlin_kotlin.$_$.af;
  var split = kotlin_kotlin.$_$.tg;
  var first = kotlin_kotlin.$_$.c8;
  var isCharSequence = kotlin_kotlin.$_$.fd;
  var trim = kotlin_kotlin.$_$.wh;
  var drop = kotlin_kotlin.$_$.u7;
  var writeText = kotlin_io_ktor_ktor_io.$_$.j1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.uj;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.get_outgoing_us7o3v_k$().send_44jogj_k$(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  function start$default(negotiatedExtensions, $super) {
    negotiatedExtensions = negotiatedExtensions === VOID ? emptyList() : negotiatedExtensions;
    var tmp;
    if ($super === VOID) {
      this.start_ye6294_k$(negotiatedExtensions);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.start_ye6294_k$.call(this, negotiatedExtensions);
    }
    return tmp;
  }
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_0);
  initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($outgoingProcessorLoopCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendCloseSequenceCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkMaxFrameSizeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [Exception, CopyableThrowable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [Channel_0], [1, 0]);
  initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException', VOID, RuntimeException);
  initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
  initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
  initMetadataForInterface(WebSocketExtensionFactory, 'WebSocketExtensionFactory');
  initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
  initMetadataForCoroutine($closeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Frame, 'Frame');
  initMetadataForClass(Binary, 'Binary', VOID, Frame);
  initMetadataForClass(Text, 'Text', VOID, Frame);
  initMetadataForClass(Close, 'Close', Close_init_$Create$_1, Frame);
  initMetadataForClass(Ping, 'Ping', VOID, Frame);
  initMetadataForClass(Pong, 'Pong', VOID, Frame);
  initMetadataForCompanion(Companion_5);
  //endregion
  function _get_byCodeMap__7duph5($this) {
    return $this.byCodeMap_1;
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
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = element.code_1;
      destination.put_4fpzoq_k$(tmp$ret$0, element);
    }
    tmp.byCodeMap_1 = destination;
    this.UNEXPECTED_CONDITION_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).get_UNEXPECTED_CONDITION_rk0i52_k$ = function () {
    return this.UNEXPECTED_CONDITION_1;
  };
  protoOf(Companion).byCode_d9s8a4_k$ = function (code) {
    return this.byCodeMap_1.get_wei43m_k$(code);
  };
  var Companion_instance;
  function Companion_getInstance() {
    Codes_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function values() {
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NORMAL':
        return Codes_NORMAL_getInstance();
      case 'GOING_AWAY':
        return Codes_GOING_AWAY_getInstance();
      case 'PROTOCOL_ERROR':
        return Codes_PROTOCOL_ERROR_getInstance();
      case 'CANNOT_ACCEPT':
        return Codes_CANNOT_ACCEPT_getInstance();
      case 'CLOSED_ABNORMALLY':
        return Codes_CLOSED_ABNORMALLY_getInstance();
      case 'NOT_CONSISTENT':
        return Codes_NOT_CONSISTENT_getInstance();
      case 'VIOLATED_POLICY':
        return Codes_VIOLATED_POLICY_getInstance();
      case 'TOO_BIG':
        return Codes_TOO_BIG_getInstance();
      case 'NO_EXTENSION':
        return Codes_NO_EXTENSION_getInstance();
      case 'INTERNAL_ERROR':
        return Codes_INTERNAL_ERROR_getInstance();
      case 'SERVICE_RESTART':
        return Codes_SERVICE_RESTART_getInstance();
      case 'TRY_AGAIN_LATER':
        return Codes_TRY_AGAIN_LATER_getInstance();
      default:
        Codes_initEntries();
        THROW_IAE('No enum constant io.ktor.websocket.CloseReason.Codes.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Codes_entriesInitialized;
  function Codes_initEntries() {
    if (Codes_entriesInitialized)
      return Unit_getInstance();
    Codes_entriesInitialized = true;
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
    Companion_getInstance();
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.code_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
  }
  protoOf(Codes).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  function Codes_NORMAL_getInstance() {
    Codes_initEntries();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    Codes_initEntries();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    Codes_initEntries();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    Codes_initEntries();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    Codes_initEntries();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    Codes_initEntries();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    Codes_initEntries();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    Codes_initEntries();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    Codes_initEntries();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    Codes_initEntries();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    Codes_initEntries();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.code_1 = code;
    this.message_1 = message;
  }
  protoOf(CloseReason).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(CloseReason).get_message_h23axq_k$ = function () {
    return this.message_1;
  };
  protoOf(CloseReason).get_knownReason_j6teda_k$ = function () {
    return Companion_getInstance().byCode_d9s8a4_k$(this.code_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.get_knownReason_j6teda_k$();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.code_1 : tmp0_elvis_lhs) + ', message=' + this.message_1 + ')';
  };
  protoOf(CloseReason).component1_7eebsc_k$ = function () {
    return this.code_1;
  };
  protoOf(CloseReason).component2_7eebsb_k$ = function () {
    return this.message_1;
  };
  protoOf(CloseReason).copy_xg59vt_k$ = function (code, message) {
    return new CloseReason(code, message);
  };
  protoOf(CloseReason).copy$default_v2sa2r_k$ = function (code, message, $super) {
    code = code === VOID ? this.code_1 : code;
    message = message === VOID ? this.message_1 : message;
    return $super === VOID ? this.copy_xg59vt_k$(code, message) : $super.copy_xg59vt_k$.call(this, code, message);
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.code_1;
    result = imul(result, 31) + getStringHashCode(this.message_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.code_1 === other.code_1))
      return false;
    if (!(this.message_1 === other.message_1))
      return false;
    return true;
  };
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
  function get_OUTGOING_CHANNEL_CONFIG() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OUTGOING_CHANNEL_CONFIG;
  }
  var OUTGOING_CHANNEL_CONFIG;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
    pingIntervalMillis = pingIntervalMillis === VOID ? new Long(0, 0) : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? new Long(15000, 0) : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().get_UNLIMITED_eshsm0_k$() : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.get_incoming_u9os29_k$(), channelsConfig.get_outgoing_us7o3v_k$());
  }
  function _get_EmptyPong__6eobtg($this) {
    return $this.EmptyPong_1;
  }
  function _get_raw__e6fv55($this) {
    return $this.raw_1;
  }
  function _get_pinger__segtvw($this) {
    return $this.pinger_1;
  }
  function _get_closeReasonRef__5hrql0($this) {
    return $this.closeReasonRef_1;
  }
  function _get_context__ps0bpe($this) {
    return $this.context_1;
  }
  function _get_filtered__9xi3ro($this) {
    return $this.filtered_1;
  }
  function _get_outgoingToBeProcessed__uqz9tf($this) {
    return $this.outgoingToBeProcessed_1;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _get__extensions__ct7dq6($this) {
    return $this._extensions_1;
  }
  function _get_started__e3clzk($this) {
    return $this.started_1;
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().plus_s13ygv_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$());
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().plus_s13ygv_k$(Dispatchers_getInstance().get_Unconfined_sfvx0q_k$());
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function sendCloseSequence$default($this, reason, exception, $completion, $super) {
    exception = exception === VOID ? null : exception;
    return sendCloseSequence($this, reason, exception, $completion);
  }
  function tryClose($this) {
    return $this.closed_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.pingIntervalMillis_1;
    var tmp;
    if ($this.closed_1.get_kotlinx$atomicfu$value_vi2am5_k$()) {
      tmp = null;
    } else if (compare(interval, new Long(0, 0)) > 0) {
      var tmp_0 = $this.raw_1.get_outgoing_us7o3v_k$();
      var tmp_1 = $this.timeoutMillis_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.pinger_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.close$default_kcbl7u_k$();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.trySend_62dpg8_k$(Companion_getInstance_0().EmptyPong_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.holder_1);
    if ($this.closed_1.get_kotlinx$atomicfu$value_vi2am5_k$() && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.get_extensions_kxksyl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var current = accumulator;
      accumulator = element.processIncomingFrame_lcwqbj_k$(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.get_extensions_kxksyl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var current = accumulator;
      accumulator = element.processOutgoingFrame_8xceij_k$(current);
    }
    return accumulator;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EmptyPong_1 = new Pong(new Int8Array(0), NonDisposableHandle_getInstance());
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.$incomingJob_1 = $incomingJob;
    this.$outgoingJob_1 = $outgoingJob;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$incomingJob_1.join_o20dar_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$outgoingJob_1.join_o20dar_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.this$0__1.context_1.cancel$default_8haxne_k$();
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.$incomingJob_1, this.$outgoingJob_1, this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.this$0__1 = this$0;
    this.$ponger_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(39);
            this.firstFrame10__1 = null;
            this.frameBody2__1 = null;
            this.closeFramePresented1__1 = false;
            this.tmp$ret$123__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(33);
            this.set_exceptionState_fex74n_k$(32);
            this.tmp014__1 = this.this$0__1.raw_1.get_incoming_u9os29_k$();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.this6__1 = this.tmp014__1;
            this.cause5__1 = null;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(29);
            this.set_exceptionState_fex74n_k$(28);
            this._iterator_13_biegom_1 = this.this6__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(8);
            suspendResult = this._iterator_13_biegom_1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(26);
              continue $sm;
            }

            var e = this._iterator_13_biegom_1.next_20eer_k$();
            this.tmp012__1 = e;
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            this.frame11__1 = this.tmp012__1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.trace_fti9bv_k$('WebSocketSession(' + toString(this.$this$launch_1) + ') receiving frame ' + this.frame11__1.toString());
            }

            var tmp0_subject = this.frame11__1;
            if (tmp0_subject instanceof Close) {
              if (!this.this$0__1.get_outgoing_us7o3v_k$().get_isClosedForSend_ajczci_k$()) {
                this.set_state_rjd8d0_k$(18);
                var tmp_0 = this.this$0__1.get_outgoing_us7o3v_k$();
                var tmp1_elvis_lhs = readReason(this.frame11__1);
                suspendResult = tmp_0.send_44jogj_k$(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(19);
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.this$0__1.pinger_1.get_kotlinx$atomicfu$value_vi2am5_k$();
                if (tmp2_safe_receiver == null) {
                  this.WHEN_RESULT9__1 = null;
                  this.set_state_rjd8d0_k$(17);
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(16);
                  suspendResult = tmp2_safe_receiver.send_44jogj_k$(this.frame11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.set_state_rjd8d0_k$(15);
                  suspendResult = this.$ponger_1.send_44jogj_k$(this.frame11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.set_state_rjd8d0_k$(10);
                  suspendResult = checkMaxFrameSize(this.this$0__1, this.frameBody2__1, this.frame11__1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.frame11__1.get_fin_18j5um_k$()) {
              if (this.firstFrame10__1 == null) {
                this.firstFrame10__1 = this.frame11__1;
              }
              if (this.frameBody2__1 == null) {
                this.frameBody2__1 = BytePacketBuilder();
              }
              writeFully(this.frameBody2__1, this.frame11__1.get_data_wokkxf_k$());
              this.set_state_rjd8d0_k$(21);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(11);
              continue $sm;
            }

          case 11:
            if (this.firstFrame10__1 == null) {
              this.set_state_rjd8d0_k$(14);
              suspendResult = this.this$0__1.filtered_1.send_44jogj_k$(processIncomingExtensions(this.this$0__1, this.frame11__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(12);
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.frameBody2__1), this.frame11__1.get_data_wokkxf_k$());
            var defragmented = Companion_getInstance_5().byType_90xas5_k$(true, this.firstFrame10__1.get_frameType_hj325a_k$(), readByteArray(build(this.frameBody2__1)), this.firstFrame10__1.get_rsv1_wotw3p_k$(), this.firstFrame10__1.get_rsv2_wotw3q_k$(), this.firstFrame10__1.get_rsv3_wotw3r_k$());
            this.firstFrame10__1 = null;
            this.set_state_rjd8d0_k$(13);
            suspendResult = this.this$0__1.filtered_1.send_44jogj_k$(processIncomingExtensions(this.this$0__1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.WHEN_RESULT8__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(20);
            continue $sm;
          case 14:
            this.set_state_rjd8d0_k$(21);
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.WHEN_RESULT8__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(20);
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.WHEN_RESULT9__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(17);
            continue $sm;
          case 17:
            this.WHEN_RESULT8__1 = this.WHEN_RESULT9__1;
            this.set_state_rjd8d0_k$(20);
            continue $sm;
          case 18:
            this.set_state_rjd8d0_k$(19);
            continue $sm;
          case 19:
            this.closeFramePresented1__1 = true;
            this.set_state_rjd8d0_k$(22);
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(21);
            continue $sm;
          case 21:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 22:
            this.set_exceptionState_fex74n_k$(32);
            cancelConsumed(this.this6__1, this.cause5__1);
            this.set_exceptionState_fex74n_k$(39);
            this.set_state_rjd8d0_k$(23);
            continue $sm;
          case 23:
            this.set_exceptionState_fex74n_k$(39);
            this.$ponger_1.close$default_kcbl7u_k$();
            var tmp0_safe_receiver = this.frameBody2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.close_yn9xrc_k$();
            }

            this.this$0__1.filtered_1.close$default_kcbl7u_k$();
            if (!this.closeFramePresented1__1) {
              this.set_state_rjd8d0_k$(24);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(25);
              continue $sm;
            }

          case 24:
            this.set_state_rjd8d0_k$(25);
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_getInstance();
          case 26:
            this.set_state_rjd8d0_k$(27);
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.set_exceptionState_fex74n_k$(32);
            cancelConsumed(this.this6__1, this.cause5__1);
            this.set_state_rjd8d0_k$(31);
            continue $sm;
          case 28:
            this.set_exceptionState_fex74n_k$(29);
            var tmp_7 = this.get_exception_x0n6w6_k$();
            if (tmp_7 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_8 = this;
              this.cause5__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 29:
            this.set_exceptionState_fex74n_k$(32);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this.this6__1, this.cause5__1);
            throw t;
          case 30:
            this.set_exceptionState_fex74n_k$(32);
            cancelConsumed(this.this6__1, this.cause5__1);
            if (false) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(31);
            continue $sm;
          case 31:
            this.tmp$ret$123__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(39);
            this.set_state_rjd8d0_k$(36);
            continue $sm;
          case 32:
            this.set_exceptionState_fex74n_k$(33);
            var tmp_9 = this.get_exception_x0n6w6_k$();
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              var tmp_10 = this;
              tmp_10.tmp$ret$123__1 = Unit_getInstance();
              this.set_exceptionState_fex74n_k$(39);
              this.set_state_rjd8d0_k$(36);
              continue $sm;
            } else {
              var tmp_11 = this.get_exception_x0n6w6_k$();
              if (tmp_11 instanceof Error) {
                var cause = this.get_exception_x0n6w6_k$();
                var tmp_12 = this;
                this.$ponger_1.close$default_kcbl7u_k$();
                tmp_12.tmp$ret$123__1 = this.this$0__1.filtered_1.close_ukldxa_k$(cause);
                this.set_exceptionState_fex74n_k$(39);
                this.set_state_rjd8d0_k$(36);
                continue $sm;
              } else {
                throw this.get_exception_x0n6w6_k$();
              }
            }

          case 33:
            this.set_exceptionState_fex74n_k$(39);
            this.t4__1 = this.get_exception_x0n6w6_k$();
            this.$ponger_1.close$default_kcbl7u_k$();
            var tmp0_safe_receiver_0 = this.frameBody2__1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.close_yn9xrc_k$();
            }

            this.this$0__1.filtered_1.close$default_kcbl7u_k$();
            if (!this.closeFramePresented1__1) {
              this.set_state_rjd8d0_k$(34);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(35);
              continue $sm;
            }

          case 34:
            this.set_state_rjd8d0_k$(35);
            continue $sm;
          case 35:
            throw this.t4__1;
          case 36:
            this.tmp0__1 = this.tmp$ret$123__1;
            this.set_exceptionState_fex74n_k$(39);
            this.$ponger_1.close$default_kcbl7u_k$();
            var tmp0_safe_receiver_1 = this.frameBody2__1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.close_yn9xrc_k$();
            }

            this.this$0__1.filtered_1.close$default_kcbl7u_k$();
            if (!this.closeFramePresented1__1) {
              this.set_state_rjd8d0_k$(37);
              suspendResult = close(this.this$0__1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(38);
              continue $sm;
            }

          case 37:
            this.set_state_rjd8d0_k$(38);
            continue $sm;
          case 38:
            return Unit_getInstance();
          case 39:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 39) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.this$0__1, this.$ponger_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(9);
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(3);
            suspendResult = outgoingProcessorLoop(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              this.set_exceptionState_fex74n_k$(13);
              this.set_state_rjd8d0_k$(11);
              continue $sm;
            } else {
              var tmp_1 = this.get_exception_x0n6w6_k$();
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.get_exception_x0n6w6_k$();
                this.set_exceptionState_fex74n_k$(13);
                this.set_state_rjd8d0_k$(11);
                continue $sm;
              } else {
                var tmp_2 = this.get_exception_x0n6w6_k$();
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.get_exception_x0n6w6_k$();
                  this.set_state_rjd8d0_k$(5);
                  suspendResult = sendCloseSequence$default(this.this$0__1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.get_exception_x0n6w6_k$();
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.get_exception_x0n6w6_k$();
                    this.set_exceptionState_fex74n_k$(13);
                    this.set_state_rjd8d0_k$(11);
                    continue $sm;
                  } else {
                    var tmp_4 = this.get_exception_x0n6w6_k$();
                    if (tmp_4 instanceof Error) {
                      var cause = this.get_exception_x0n6w6_k$();
                      this.this$0__1.outgoingToBeProcessed_1.cancel_hkmm2i_k$(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.set_state_rjd8d0_k$(6);
                      suspendResult = closeExceptionally(this.this$0__1.raw_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.get_exception_x0n6w6_k$();
                    }
                  }
                }
              }
            }

          case 5:
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(13);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(13);
            this.this$0__1.outgoingToBeProcessed_1.cancel$default_880p35_k$();
            this.set_state_rjd8d0_k$(8);
            suspendResult = close(this.this$0__1.raw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            this.set_exceptionState_fex74n_k$(13);
            this.t0__1 = this.get_exception_x0n6w6_k$();
            this.this$0__1.outgoingToBeProcessed_1.cancel$default_880p35_k$();
            this.set_state_rjd8d0_k$(10);
            suspendResult = close(this.this$0__1.raw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.t0__1;
          case 11:
            this.set_exceptionState_fex74n_k$(13);
            this.this$0__1.outgoingToBeProcessed_1.cancel$default_880p35_k$();
            this.set_state_rjd8d0_k$(12);
            suspendResult = close(this.this$0__1.raw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_getInstance();
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).invoke_7q8fo9_k$ = function (it, $completion) {
    var tmp = this.create_8agihp_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_7q8fo9_k$(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = sendCloseSequence(this.this$0__1, this.it_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).create_8agihp_k$ = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_8agihp_k$(value instanceof CloseReason ? value : THROW_CCE(), completion);
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_7q8fo9_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this._iterator_1_yqohr1__1 = this._this__u8e3s4__1.outgoingToBeProcessed_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._iterator_1_yqohr1__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            var frame = this._iterator_1_yqohr1__1.next_20eer_k$();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.trace_fti9bv_k$('Sending ' + frame.toString() + ' from session ' + toString(this._this__u8e3s4__1));
            }

            if (frame instanceof Close) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = sendCloseSequence$default(this._this__u8e3s4__1, readReason(frame), VOID, this);
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
                this.WHEN_RESULT0__1 = processOutgoingExtensions(this._this__u8e3s4__1, frame);
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              } else {
                this.WHEN_RESULT0__1 = frame;
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            }

          case 3:
            this.set_state_rjd8d0_k$(6);
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.WHEN_RESULT0__1;
            this.set_state_rjd8d0_k$(5);
            suspendResult = this._this__u8e3s4__1.raw_1.get_outgoing_us7o3v_k$().send_44jogj_k$(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.reason_1 = reason;
    this.exception_2 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            if (!tryClose(this._this__u8e3s4__1))
              return Unit_getInstance();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.trace_fti9bv_k$('Sending Close Sequence for session ' + toString(this._this__u8e3s4__1) + ' with reason ' + toString_0(this.reason_1) + ' and exception ' + toString_0(this.exception_2));
            }

            this._this__u8e3s4__1.context_1.complete_9ww6vb_k$();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.reason_1;
            tmp_0.reasonToSend0__1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(5);
            runOrCancelPinger(this._this__u8e3s4__1);
            if (!(this.reasonToSend0__1.get_code_wok7xy_k$() === Codes_CLOSED_ABNORMALLY_getInstance().get_code_wok7xy_k$())) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.raw_1.get_outgoing_us7o3v_k$().send_44jogj_k$(Close_init_$Create$(this.reasonToSend0__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(6);
            this._this__u8e3s4__1.closeReasonRef_1.complete_ixf84q_k$(this.reasonToSend0__1);
            if (!(this.exception_2 == null)) {
              this._this__u8e3s4__1.outgoingToBeProcessed_1.close_ukldxa_k$(this.exception_2);
              this._this__u8e3s4__1.filtered_1.close_ukldxa_k$(this.exception_2);
            }

            return Unit_getInstance();
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.closeReasonRef_1.complete_ixf84q_k$(this.reasonToSend0__1);
            if (!(this.exception_2 == null)) {
              this._this__u8e3s4__1.outgoingToBeProcessed_1.close_ukldxa_k$(this.exception_2);
              this._this__u8e3s4__1.filtered_1.close_ukldxa_k$(this.exception_2);
            }

            throw t;
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.packet_1 = packet;
    this.frame_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this;
            var tmp_1 = this.frame_1.get_data_wokkxf_k$().length;
            var tmp0_safe_receiver = this.packet_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.size0__1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (compare(fromInt(this.size0__1), this._this__u8e3s4__1.get_maxFrameSize_9zaht9_k$()) > 0) {
              var tmp2_safe_receiver = this.packet_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.close_yn9xrc_k$();
              }
              this.set_state_rjd8d0_k$(2);
              suspendResult = close(this._this__u8e3s4__1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.size0__1 + '. Max size is ' + this._this__u8e3s4__1.get_maxFrameSize_9zaht9_k$().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            return Unit_getInstance();
          case 2:
            throw new FrameTooBigException(fromInt(this.size0__1));
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_0();
    this.raw_1 = raw;
    this.pinger_1 = atomic$ref$1(null);
    this.closeReasonRef_1 = CompletableDeferred();
    this.context_1 = Job();
    this.coroutineContext_1 = this.raw_1.get_coroutineContext_115oqo_k$().minusKey_9i5ggf_k$(Key_getInstance()).plus_s13ygv_k$(this.context_1).plus_s13ygv_k$(new CoroutineName('ws-default'));
    this.filtered_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.outgoingToBeProcessed_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.closed_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp._extensions_1 = ArrayList_init_$Create$();
    this.started_1 = atomic$boolean$1(false);
    this.pingIntervalMillis_1 = pingIntervalMillis;
    this.timeoutMillis_1 = timeoutMillis;
    this.closeReason_1 = this.closeReasonRef_1;
  }
  protoOf(DefaultWebSocketSessionImpl).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_incoming_u9os29_k$ = function () {
    return this.filtered_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_outgoing_us7o3v_k$ = function () {
    return this.outgoingToBeProcessed_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_extensions_kxksyl_k$ = function () {
    return this._extensions_1;
  };
  protoOf(DefaultWebSocketSessionImpl).set_masking_u6d5es_k$ = function (value) {
    this.raw_1.set_masking_u6d5es_k$(value);
  };
  protoOf(DefaultWebSocketSessionImpl).get_masking_f5rvkd_k$ = function () {
    return this.raw_1.get_masking_f5rvkd_k$();
  };
  protoOf(DefaultWebSocketSessionImpl).set_maxFrameSize_6aa793_k$ = function (value) {
    this.raw_1.set_maxFrameSize_6aa793_k$(value);
  };
  protoOf(DefaultWebSocketSessionImpl).get_maxFrameSize_9zaht9_k$ = function () {
    return this.raw_1.get_maxFrameSize_9zaht9_k$();
  };
  protoOf(DefaultWebSocketSessionImpl).set_pingIntervalMillis_hq8mas_k$ = function (newValue) {
    this.pingIntervalMillis_1 = newValue;
    runOrCancelPinger(this);
  };
  protoOf(DefaultWebSocketSessionImpl).get_pingIntervalMillis_4y22i_k$ = function () {
    return this.pingIntervalMillis_1;
  };
  protoOf(DefaultWebSocketSessionImpl).set_timeoutMillis_7953m4_k$ = function (newValue) {
    this.timeoutMillis_1 = newValue;
    runOrCancelPinger(this);
  };
  protoOf(DefaultWebSocketSessionImpl).get_timeoutMillis_ig3vfi_k$ = function () {
    return this.timeoutMillis_1;
  };
  protoOf(DefaultWebSocketSessionImpl).get_closeReason_g1m41f_k$ = function () {
    return this.closeReason_1;
  };
  protoOf(DefaultWebSocketSessionImpl).start_ye6294_k$ = function (negotiatedExtensions) {
    if (!this.started_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$0 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.trace_fti9bv_k$(tmp$ret$0);
    }
    this._extensions_1.addAll_4lagoh_k$(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.get_outgoing_us7o3v_k$()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).goingAway_j5stwl_k$ = function (message, $completion) {
    return sendCloseSequence$default(this, CloseReason_init_$Create$(Codes_GOING_AWAY_getInstance(), message), VOID, $completion);
  };
  protoOf(DefaultWebSocketSessionImpl).goingAway$default_p79n2w_k$ = function (message, $completion, $super) {
    message = message === VOID ? 'Server is going down' : message;
    return $super === VOID ? this.goingAway_j5stwl_k$(message, $completion) : $super.goingAway_j5stwl_k$.call(this, message, $completion);
  };
  protoOf(DefaultWebSocketSessionImpl).flush_4wsz1p_k$ = function ($completion) {
    return this.raw_1.flush_4wsz1p_k$($completion);
  };
  protoOf(DefaultWebSocketSessionImpl).terminate_hmb9m7_k$ = function () {
    this.context_1.cancel$default_8haxne_k$();
    cancel(this.raw_1);
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
    if (_this__u8e3s4.get_data_wokkxf_k$().length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.get_data_wokkxf_k$());
    var packet = builder;
    var code = packet.readShort_ilpyey_k$();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).dispose_3nnxhr_k$ = function () {
    return Unit_getInstance();
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
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize) {
    Exception_init_$Init$(this);
    captureStack(this, FrameTooBigException);
    this.frameSize_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).get_frameSize_hj23j9_k$ = function () {
    return this.frameSize_1;
  };
  protoOf(FrameTooBigException).get_message_h23axq_k$ = function () {
    return 'Frame is too big: ' + this.frameSize_1.toString();
  };
  protoOf(FrameTooBigException).createCopy_mmw9ld_k$ = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new FrameTooBigException(this.frameSize_1);
    initCauseBridge(this_0, this);
    return this_0;
  };
  function _get_maxOpcode__n4u3i9($this) {
    return $this.maxOpcode_1;
  }
  function _get_byOpcodeArray__zfogar($this) {
    return $this.byOpcodeArray_1;
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.opcode_1;
      do {
        var e = iterator.next_20eer_k$();
        var v = e.opcode_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$0 = maxElem;
    }
    tmp.maxOpcode_1 = ensureNotNull(tmp$ret$0).opcode_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.maxOpcode_1 + 1 | 0;
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
        var _iterator__ex2g4s = tmp0_0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.opcode_1 === tmp_4) {
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
    tmp_0.byOpcodeArray_1 = tmp_3;
  }
  protoOf(Companion_1).get_c1px32_k$ = function (opcode) {
    return (0 <= opcode ? opcode <= this.maxOpcode_1 : false) ? this.byOpcodeArray_1[opcode] : null;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    FrameType_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TEXT':
        return FrameType_TEXT_getInstance();
      case 'BINARY':
        return FrameType_BINARY_getInstance();
      case 'CLOSE':
        return FrameType_CLOSE_getInstance();
      case 'PING':
        return FrameType_PING_getInstance();
      case 'PONG':
        return FrameType_PONG_getInstance();
      default:
        FrameType_initEntries();
        THROW_IAE('No enum constant io.ktor.websocket.FrameType.' + value);
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var FrameType_entriesInitialized;
  function FrameType_initEntries() {
    if (FrameType_entriesInitialized)
      return Unit_getInstance();
    FrameType_entriesInitialized = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    Companion_getInstance_1();
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.controlFrame_1 = controlFrame;
    this.opcode_1 = opcode;
  }
  protoOf(FrameType).get_controlFrame_mohuav_k$ = function () {
    return this.controlFrame_1;
  };
  protoOf(FrameType).get_opcode_hp2o9j_k$ = function () {
    return this.opcode_1;
  };
  function FrameType_TEXT_getInstance() {
    FrameType_initEntries();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    FrameType_initEntries();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    FrameType_initEntries();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    FrameType_initEntries();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    FrameType_initEntries();
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
    var tmp = actorJob.plus_s13ygv_k$(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance()));
    tmp_0.invokeOnCompletion_n6cffu_k$(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.$channel_1 = $channel;
    this.$outgoing_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ponger$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(14);
            this.set_exceptionState_fex74n_k$(13);
            this.tmp04__1 = this.$channel_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this1__1 = this.tmp04__1;
            this.cause0__1 = null;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(10);
            this.set_exceptionState_fex74n_k$(9);
            this._iterator_3_yqohr3__1 = this.this1__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            suspendResult = this._iterator_3_yqohr3__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            var e = this._iterator_3_yqohr3__1.next_20eer_k$();
            get_LOGGER().trace_fti9bv_k$('Received ping message, sending pong message');
            this.set_state_rjd8d0_k$(6);
            suspendResult = this.$outgoing_1.send_44jogj_k$(new Pong(e.get_data_wokkxf_k$()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(8);
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.set_exceptionState_fex74n_k$(13);
            cancelConsumed(this.this1__1, this.cause0__1);
            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(10);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              this.cause0__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 10:
            this.set_exceptionState_fex74n_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this.this1__1, this.cause0__1);
            throw t;
          case 11:
            this.set_exceptionState_fex74n_k$(13);
            cancelConsumed(this.this1__1, this.cause0__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(12);
            continue $sm;
          case 12:
            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 13:
            this.set_exceptionState_fex74n_k$(14);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              this.set_state_rjd8d0_k$(15);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 14:
            throw this.get_exception_x0n6w6_k$();
          case 15:
            this.set_exceptionState_fex74n_k$(14);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 14) {
          throw e_1;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_1);
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new ponger$slambda(this.$channel_1, this.$outgoing_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ponger$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).invoke_d9fzmj_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$channel_1.receive_awoumx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda).create_rcuf4x_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.$channel_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(pinger$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_d9fzmj_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.$outgoing_1 = $outgoing;
    this.$pingMessage_1 = $pingMessage;
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.create_rcuf4x_k$($this$withTimeoutOrNull, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            get_LOGGER().trace_fti9bv_k$('WebSocket Pinger: sending ping frame');
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$outgoing_1.send_44jogj_k$(new Ping(toByteArray(this.$pingMessage_1, Charsets_getInstance().get_ISO_8859_1_y3qebr_k$())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!true) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            suspendResult = this.$channel_1.receive_awoumx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.msg0__1 = suspendResult;
            if (decodeToString(this.msg0__1.get_data_wokkxf_k$(), 0, 0 + this.msg0__1.get_data_wokkxf_k$().length | 0) === this.$pingMessage_1) {
              get_LOGGER().trace_fti9bv_k$('WebSocket Pinger: received valid pong frame ' + this.msg0__1.toString());
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            get_LOGGER().trace_fti9bv_k$('WebSocket Pinger: received invalid pong frame ' + this.msg0__1.toString() + ', continue waiting');
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).create_rcuf4x_k$ = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.$outgoing_1, this.$pingMessage_1, this.$channel_1, completion);
    i.$this$withTimeoutOrNull_1 = $this$withTimeoutOrNull;
    return i;
  };
  protoOf(pinger$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.invoke_d9fzmj_k$($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.$periodMillis_1 = $periodMillis;
    this.$timeoutMillis_1 = $timeoutMillis;
    this.$onTimeout_1 = $onTimeout;
    this.$channel_1 = $channel;
    this.$outgoing_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(pinger$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            get_LOGGER().trace_fti9bv_k$('Starting WebSocket pinger coroutine with period ' + this.$periodMillis_1.toString() + ' ms and timeout ' + this.$timeoutMillis_1.toString() + ' ms');
            this.random1__1 = Random(getTimeMillis());
            this.pingIdBytes0__1 = new Int8Array(32);
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = withTimeoutOrNull(this.$periodMillis_1, pinger$slambda$slambda_0(this.$channel_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.random1__1.nextBytes_ln07bs_k$(this.pingIdBytes0__1);
            var pingMessage = '[ping ' + hex(this.pingIdBytes0__1) + ' ping]';
            this.set_state_rjd8d0_k$(3);
            suspendResult = withTimeoutOrNull(this.$timeoutMillis_1, pinger$slambda$slambda_2(this.$outgoing_1, pingMessage, this.$channel_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().trace_fti9bv_k$('WebSocket pinger has timed out');
              this.set_state_rjd8d0_k$(5);
              suspendResult = this.$onTimeout_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.get_exception_x0n6w6_k$();
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              var tmp_1 = this.get_exception_x0n6w6_k$();
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.get_exception_x0n6w6_k$();
                this.set_state_rjd8d0_k$(8);
                continue $sm;
              } else {
                var tmp_2 = this.get_exception_x0n6w6_k$();
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.get_exception_x0n6w6_k$();
                  this.set_state_rjd8d0_k$(8);
                  continue $sm;
                } else {
                  var tmp_3 = this.get_exception_x0n6w6_k$();
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.get_exception_x0n6w6_k$();
                    this.set_state_rjd8d0_k$(8);
                    continue $sm;
                  } else {
                    throw this.get_exception_x0n6w6_k$();
                  }
                }
              }
            }

          case 8:
            this.set_exceptionState_fex74n_k$(9);
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new pinger$slambda(this.$periodMillis_1, this.$timeoutMillis_1, this.$onTimeout_1, this.$channel_1, this.$outgoing_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(pinger$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.cancel$default_8haxne_k$();
      return Unit_getInstance();
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
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.incoming_1 = this_0.unlimited_v80n35_k$();
    this_0.outgoing_1 = this_0.unlimited_v80n35_k$();
    tmp.UNLIMITED_1 = this_0;
  }
  protoOf(Companion_2).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.incoming_1 = Companion_getInstance_3().UNLIMITED_1;
    this.outgoing_1 = Companion_getInstance_3().UNLIMITED_1;
  }
  protoOf(WebSocketChannelsConfig).set_incoming_g846k_k$ = function (_set____db54di) {
    this.incoming_1 = _set____db54di;
  };
  protoOf(WebSocketChannelsConfig).get_incoming_u9os29_k$ = function () {
    return this.incoming_1;
  };
  protoOf(WebSocketChannelsConfig).set_outgoing_ck4bom_k$ = function (_set____db54di) {
    this.outgoing_1 = _set____db54di;
  };
  protoOf(WebSocketChannelsConfig).get_outgoing_us7o3v_k$ = function () {
    return this.outgoing_1;
  };
  protoOf(WebSocketChannelsConfig).unlimited_v80n35_k$ = function () {
    return Companion_getInstance_3().UNLIMITED_1;
  };
  protoOf(WebSocketChannelsConfig).bounded_4erssz_k$ = function (capacity, onOverflow) {
    return new ChannelConfig(capacity, onOverflow);
  };
  protoOf(WebSocketChannelsConfig).bounded$default_3bz0y7_k$ = function (capacity, onOverflow, $super) {
    onOverflow = onOverflow === VOID ? ChannelOverflow_SUSPEND_getInstance() : onOverflow;
    return $super === VOID ? this.bounded_4erssz_k$(capacity, onOverflow) : $super.bounded_4erssz_k$.call(this, capacity, onOverflow);
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.capacity_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.onOverflow_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.capacity_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.onOverflow_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.capacity_1);
    } else {
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.UNLIMITED_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  protoOf(Companion_3).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.capacity_1 = capacity;
    this.onOverflow_1 = onOverflow;
  }
  protoOf(ChannelConfig).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(ChannelConfig).get_onOverflow_ye8pze_k$ = function () {
    return this.onOverflow_1;
  };
  protoOf(ChannelConfig).get_canSuspend_2zrbcb_k$ = function () {
    return this.onOverflow_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.capacity_1 === 2147483647);
  };
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  function values_1() {
    return [ChannelOverflow_SUSPEND_getInstance(), ChannelOverflow_CLOSE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'SUSPEND':
        return ChannelOverflow_SUSPEND_getInstance();
      case 'CLOSE':
        return ChannelOverflow_CLOSE_getInstance();
      default:
        ChannelOverflow_initEntries();
        THROW_IAE('No enum constant io.ktor.websocket.ChannelOverflow.' + value);
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var ChannelOverflow_entriesInitialized;
  function ChannelOverflow_initEntries() {
    if (ChannelOverflow_entriesInitialized)
      return Unit_getInstance();
    ChannelOverflow_entriesInitialized = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
  var $ENTRIES_1;
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
      if (!tmp_0.get_isClosedForSend_ajczci_k$()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.close_ukldxa_k$(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  protoOf(Companion_4).createDelegate_n5r3h5_k$ = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function BoundedChannel(capacity, delegate) {
    Companion_getInstance_4();
    delegate = delegate === VOID ? Companion_getInstance_4().createDelegate_n5r3h5_k$(capacity) : delegate;
    this.delegate_1 = delegate;
  }
  protoOf(BoundedChannel).trySend_w1juo7_k$ = function (element) {
    var result = this.delegate_1.trySend_62dpg8_k$(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.close_ukldxa_k$(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).trySend_62dpg8_k$ = function (element) {
    return this.trySend_w1juo7_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(BoundedChannel).send_7nf3lq_k$ = function (element, $completion) {
    return this.delegate_1.send_44jogj_k$(element, $completion);
  };
  protoOf(BoundedChannel).send_44jogj_k$ = function (element, $completion) {
    return this.send_7nf3lq_k$((element == null ? true : !(element == null)) ? element : THROW_CCE(), $completion);
  };
  protoOf(BoundedChannel).close_ukldxa_k$ = function (cause) {
    return this.delegate_1.close_ukldxa_k$(cause);
  };
  protoOf(BoundedChannel).invokeOnClose_xlde4o_k$ = function (handler) {
    this.delegate_1.invokeOnClose_xlde4o_k$(handler);
  };
  protoOf(BoundedChannel).offer_szb1l9_k$ = function (element) {
    return this.delegate_1.offer_uqgnr2_k$(element);
  };
  protoOf(BoundedChannel).offer_uqgnr2_k$ = function (element) {
    return this.offer_szb1l9_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(BoundedChannel).get_isClosedForSend_ajczci_k$ = function () {
    return this.delegate_1.get_isClosedForSend_ajczci_k$();
  };
  protoOf(BoundedChannel).get_onSend_hnoo40_k$ = function () {
    return this.delegate_1.get_onSend_hnoo40_k$();
  };
  protoOf(BoundedChannel).receive_cnugsq_k$ = function ($completion) {
    return this.delegate_1.receive_awoumx_k$($completion);
  };
  protoOf(BoundedChannel).receive_awoumx_k$ = function ($completion) {
    return this.receive_cnugsq_k$($completion);
  };
  protoOf(BoundedChannel).receiveCatching_xbvffc_k$ = function ($completion) {
    var tmp = this.delegate_1.receiveCatching_golgg7_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(BoundedChannel).receiveCatching_golgg7_k$ = function ($completion) {
    return this.receiveCatching_xbvffc_k$($completion);
  };
  protoOf(BoundedChannel).tryReceive_y3ovsz_k$ = function () {
    return this.delegate_1.tryReceive_y3ovg2_k$();
  };
  protoOf(BoundedChannel).tryReceive_y3ovg2_k$ = function () {
    return this.tryReceive_y3ovsz_k$();
  };
  protoOf(BoundedChannel).iterator_jk1svi_k$ = function () {
    return this.delegate_1.iterator_jk1svi_k$();
  };
  protoOf(BoundedChannel).cancel_hkmm2i_k$ = function (cause) {
    this.delegate_1.cancel_hkmm2i_k$(cause);
  };
  protoOf(BoundedChannel).cancel_2l89ey_k$ = function () {
    this.delegate_1.cancel_2l89ey_k$();
  };
  protoOf(BoundedChannel).cancel_e74who_k$ = function (cause) {
    return this.delegate_1.cancel_e74who_k$(cause);
  };
  protoOf(BoundedChannel).poll_21vi7_k$ = function () {
    return this.delegate_1.poll_21vi7_k$();
  };
  protoOf(BoundedChannel).receiveOrNull_981lul_k$ = function ($completion) {
    return this.delegate_1.receiveOrNull_7f8d4k_k$($completion);
  };
  protoOf(BoundedChannel).receiveOrNull_7f8d4k_k$ = function ($completion) {
    return this.receiveOrNull_981lul_k$($completion);
  };
  protoOf(BoundedChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return this.delegate_1.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(BoundedChannel).get_isEmpty_zauvru_k$ = function () {
    return this.delegate_1.get_isEmpty_zauvru_k$();
  };
  protoOf(BoundedChannel).get_onReceive_mimw11_k$ = function () {
    return this.delegate_1.get_onReceive_mimw11_k$();
  };
  protoOf(BoundedChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    return this.delegate_1.get_onReceiveCatching_ajg9xa_k$();
  };
  protoOf(BoundedChannel).get_onReceiveOrNull_5u62it_k$ = function () {
    return this.delegate_1.get_onReceiveOrNull_5u62it_k$();
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    ChannelOverflow_initEntries();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function _get_installers__49gav4($this) {
    return $this.installers_1;
  }
  function _get_rcv__e6fwlo($this) {
    return $this.rcv_1;
  }
  function checkConflicts($this, extensionFactory) {
    var hasConflict = extensionFactory.get_rsv1_wotw3p_k$() && $this.rcv_1[1];
    hasConflict = hasConflict || (extensionFactory.get_rsv2_wotw3q_k$() && $this.rcv_1[2]);
    hasConflict = hasConflict || (extensionFactory.get_rsv3_wotw3r_k$() && $this.rcv_1[3]);
    // Inline function 'kotlin.check' call
    if (!!hasConflict) {
      var message = 'Failed to install extension. Please check configured extensions for conflicts.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function WebSocketExtensionsConfig$install$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function WebSocketExtensionsConfig$install$lambda_0($extension, $config) {
    return function () {
      return $extension.install_qxcczs_k$($config);
    };
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.installers_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.rcv_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).install_bwr0zf_k$ = function (extension, config) {
    checkConflicts(this, extension);
    var tmp0 = this.installers_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = WebSocketExtensionsConfig$install$lambda_0(extension, config);
    tmp0.add_utx5q5_k$(element);
  };
  protoOf(WebSocketExtensionsConfig).install$default_ya8n47_k$ = function (extension, config, $super) {
    var tmp;
    if (config === VOID) {
      tmp = WebSocketExtensionsConfig$install$lambda;
    } else {
      tmp = config;
    }
    config = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.install_bwr0zf_k$(extension, config);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.install_bwr0zf_k$.call(this, extension, config);
    }
    return tmp_0;
  };
  protoOf(WebSocketExtensionsConfig).build_1k0s4u_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.installers_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var tmp$ret$0 = item();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  function WebSocketExtensionFactory() {
  }
  function parametersToString($this) {
    return $this.parameters_1.isEmpty_y1axqb_k$() ? '' : '; ' + joinToString($this.parameters_1, ';');
  }
  function WebSocketExtensionHeader$parseParameters$lambda(it) {
    var equalsIndex = indexOf(it, _Char___init__impl__6a9atx(61));
    if (equalsIndex < 0)
      return to(it, '');
    var key = substring(it, until(0, equalsIndex));
    var value = (equalsIndex + 1 | 0) < it.length ? substring_0(it, equalsIndex + 1 | 0) : '';
    return to(key, value);
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.name_1 = name;
    this.parameters_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(WebSocketExtensionHeader).get_parameters_cl4rkd_k$ = function () {
    return this.parameters_1;
  };
  protoOf(WebSocketExtensionHeader).parseParameters_8pxmv7_k$ = function () {
    var tmp = asSequence(this.parameters_1);
    return map(tmp, WebSocketExtensionHeader$parseParameters$lambda);
  };
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.name_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var item = _iterator__ex2g4s.next_20eer_k$();
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$2 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.add_utx5q5_k$(tmp$ret$2);
      }
      var parameters = destination_0;
      var tmp$ret$5 = new WebSocketExtensionHeader(name, parameters);
      destination.add_utx5q5_k$(tmp$ret$5);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$(_this__u8e3s4, reason, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), cause.toString());
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.reason_1 = reason;
  }
  protoOf($closeCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.send_sburzs_k$(Close_init_$Create$(this.reason_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_fex74n_k$(4);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
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
  function Binary_init_$Init$_0(fin, packet, $this) {
    Binary_init_$Init$(fin, readByteArray(packet), $this);
    return $this;
  }
  function Binary_init_$Create$_0(fin, packet) {
    return Binary_init_$Init$_0(fin, packet, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Create$(fin, data) {
    return Text_init_$Init$(fin, data, objectCreate(protoOf(Text)));
  }
  function Text_init_$Init$_0(text, $this) {
    Text_init_$Init$(true, toByteArray(text), $this);
    return $this;
  }
  function Text_init_$Create$_0(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Text_init_$Init$_1(fin, packet, $this) {
    Text_init_$Init$(fin, readByteArray(packet), $this);
    return $this;
  }
  function Text_init_$Create$_1(fin, packet) {
    return Text_init_$Init$_1(fin, packet, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.writeShort_vn2jsb_k$(reason.get_code_wok7xy_k$());
    writeText(builder, reason.get_message_h23axq_k$());
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
  function Close_init_$Create$_0(packet) {
    return Close_init_$Init$_0(packet, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_5().Empty_1);
    return $this;
  }
  function Close_init_$Create$_1() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Ping_init_$Init$(packet, $this) {
    Ping.call($this, readByteArray(packet));
    return $this;
  }
  function Ping_init_$Create$(packet) {
    return Ping_init_$Init$(packet, objectCreate(protoOf(Ping)));
  }
  function Pong_init_$Init$(packet, $this) {
    Pong.call($this, readByteArray(packet), NonDisposableHandle_getInstance());
    return $this;
  }
  function Pong_init_$Create$(packet) {
    return Pong_init_$Init$(packet, objectCreate(protoOf(Pong)));
  }
  function _get_Empty__x4mxmk($this) {
    return $this.Empty_1;
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_getInstance(), rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_getInstance(), false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.Empty_1 = new Int8Array(0);
  }
  protoOf(Companion_5).byType_90xas5_k$ = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.get_ordinal_ip24qg_k$()) {
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
        tmp = new Pong(data, NonDisposableHandle_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_getInstance() : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.fin_1 = fin;
    this.frameType_1 = frameType;
    this.data_1 = data;
    this.disposableHandle_1 = disposableHandle;
    this.rsv1__1 = rsv1;
    this.rsv2__1 = rsv2;
    this.rsv3__1 = rsv3;
  }
  protoOf(Frame).get_fin_18j5um_k$ = function () {
    return this.fin_1;
  };
  protoOf(Frame).get_frameType_hj325a_k$ = function () {
    return this.frameType_1;
  };
  protoOf(Frame).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(Frame).get_disposableHandle_9vd6rz_k$ = function () {
    return this.disposableHandle_1;
  };
  protoOf(Frame).get_rsv1_wotw3p_k$ = function () {
    return this.rsv1__1;
  };
  protoOf(Frame).get_rsv2_wotw3q_k$ = function () {
    return this.rsv2__1;
  };
  protoOf(Frame).get_rsv3_wotw3r_k$ = function () {
    return this.rsv3__1;
  };
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.frameType_1.toString() + ' (fin=' + this.fin_1 + ', buffer len = ' + this.data_1.length + ')';
  };
  protoOf(Frame).copy_1tks5_k$ = function () {
    var tmp = Companion_getInstance_5();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return tmp.byType_90xas5_k$(this.fin_1, this.frameType_1, tmp$ret$1, this.rsv1__1, this.rsv2__1, this.rsv3__1);
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).start$default_h1tqpr_k$ = start$default;
  protoOf(DefaultWebSocketSessionImpl).send_sburzs_k$ = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.get_message_h23axq_k$();
  });
  protoOf(BoundedChannel).close$default_kcbl7u_k$ = close$default;
  protoOf(BoundedChannel).cancel$default_880p35_k$ = cancel$default;
  protoOf(BoundedChannel).cancel$default_2ouzfv_k$ = cancel$default_0;
  //endregion
  //region block: init
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = send;
  _.$_$.d = start$default;
  _.$_$.e = Binary_init_$Create$;
  _.$_$.f = Close_init_$Create$;
  _.$_$.g = Text_init_$Create$_0;
  _.$_$.h = Companion_getInstance;
  _.$_$.i = Companion_getInstance_2;
  _.$_$.j = CloseReason;
  _.$_$.k = DefaultWebSocketSession_0;
  _.$_$.l = DefaultWebSocketSession;
  _.$_$.m = WebSocketChannelsConfig;
  _.$_$.n = WebSocketExtensionsConfig;
  _.$_$.o = WebSocketExtension;
  _.$_$.p = WebSocketSession;
  _.$_$.q = from;
  _.$_$.r = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
