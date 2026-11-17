(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.eg;
  var protoOf = kotlin_kotlin.$_$.rb;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var CancellationException = kotlin_kotlin.$_$.g8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r3;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.ub;
  var getKClassFromExpression = kotlin_kotlin.$_$.jc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h8;
  var initMetadataForLambda = kotlin_kotlin.$_$.xa;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ua;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.ve;
  var isInterface = kotlin_kotlin.$_$.hb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j2;
  var arrayOf = kotlin_kotlin.$_$.ag;
  var createKType = kotlin_kotlin.$_$.ic;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ma;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.c9;
  var IllegalStateException = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.i4;
  var captureStack = kotlin_kotlin.$_$.ca;
  var defineProp = kotlin_kotlin.$_$.la;
  var UnsupportedOperationException = kotlin_kotlin.$_$.yf;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.v4;
  var trimIndent = kotlin_kotlin.$_$.oe;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.r1;
  var fromInt = kotlin_kotlin.$_$.n9;
  var readBuffer = kotlin_io_ktor_ktor_io.$_$.h;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.j4;
  var initMetadataForInterface = kotlin_kotlin.$_$.wa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var writer = kotlin_io_ktor_ktor_io.$_$.w1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.x;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.u;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.v;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.t;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var emptySet = kotlin_kotlin.$_$.n6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.p3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var getKClass = kotlin_kotlin.$_$.kc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.lc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.t1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.kg;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pa;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var KtMutableMap = kotlin_kotlin.$_$.k5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.gc;
  var setOf = kotlin_kotlin.$_$.o7;
  var get = kotlin_kotlin.$_$.v8;
  var fold = kotlin_kotlin.$_$.u8;
  var minusKey = kotlin_kotlin.$_$.w8;
  var plus = kotlin_kotlin.$_$.y8;
  var Element = kotlin_kotlin.$_$.x8;
  var joinToString = kotlin_kotlin.$_$.x6;
  var setOf_0 = kotlin_kotlin.$_$.p7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.kb;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.xf;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ie;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var isByteArray = kotlin_kotlin.$_$.bb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.d1;
  var Long = kotlin_kotlin.$_$.hf;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.v1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.q;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.p1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.g1;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var writer_0 = kotlin_io_ktor_ktor_io.$_$.x1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.s1;
  var attachJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.o1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.u1;
  var toInt = kotlin_kotlin.$_$.ge;
  var reversed = kotlin_kotlin.$_$.n7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.w7;
  var sortedWith = kotlin_kotlin.$_$.r7;
  var Collection = kotlin_kotlin.$_$.a5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v3;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.wb;
  var firstOrNull = kotlin_kotlin.$_$.q6;
  var FunctionAdapter = kotlin_kotlin.$_$.z9;
  var Comparator = kotlin_kotlin.$_$.ze;
  var hashCode = kotlin_kotlin.$_$.ra;
  var compareValues = kotlin_kotlin.$_$.f8;
  var charset = kotlin_io_ktor_ktor_http.$_$.q1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.h2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.p1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var listOf = kotlin_kotlin.$_$.d7;
  var plus_0 = kotlin_kotlin.$_$.j7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var checkIndexOverflow = kotlin_kotlin.$_$.s5;
  var get_lastIndex = kotlin_kotlin.$_$.a7;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.o1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.g2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var substringBefore = kotlin_kotlin.$_$.xd;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.a2;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.fc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.va;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Default_getInstance = kotlin_kotlin.$_$.i2;
  var equalsLong = kotlin_kotlin.$_$.m9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.he;
  var multiply = kotlin_kotlin.$_$.r9;
  var compare = kotlin_kotlin.$_$.h9;
  var toNumber = kotlin_kotlin.$_$.y9;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var add = kotlin_kotlin.$_$.e9;
  var Companion_instance = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.dg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.p;
  var toString_0 = kotlin_kotlin.$_$.og;
  var trimMargin = kotlin_kotlin.$_$.pe;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.b2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.k2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.u1;
  var toDuration = kotlin_kotlin.$_$.te;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var KProperty0 = kotlin_kotlin.$_$.oc;
  var Exception = kotlin_kotlin.$_$.ef;
  var createKTypeParameter = kotlin_kotlin.$_$.hc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.r;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.a2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var emptyList = kotlin_kotlin.$_$.l6;
  var addAll = kotlin_kotlin.$_$.o5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.d;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.l4;
  var KtList = kotlin_kotlin.$_$.f5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.f2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.d2;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.w1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.bg;
  var close = kotlin_io_ktor_ktor_io.$_$.q1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t5;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.je;
  var take = kotlin_kotlin.$_$.ae;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.ib;
  var getStringHashCode = kotlin_kotlin.$_$.qa;
  var quote = kotlin_io_ktor_ktor_http.$_$.c2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.z1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.i5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var equals_0 = kotlin_kotlin.$_$.bd;
  var flatten = kotlin_kotlin.$_$.t6;
  var copyToArray = kotlin_kotlin.$_$.i6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.x1;
  var intercepted = kotlin_kotlin.$_$.k8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf_0 = kotlin_kotlin.$_$.e7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s3;
  var Error_init_$Create$ = kotlin_kotlin.$_$.x3;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var decodeToString = kotlin_kotlin.$_$.yc;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.d8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.e2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.e1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isNaN_0 = kotlin_kotlin.$_$.ig;
  var encodeURLParameter = kotlin_io_ktor_ktor_http.$_$.u1;
  var get_hostWithPort = kotlin_io_ktor_ktor_http.$_$.y1;
  var Companion_getInstance_8 = kotlin_io_ktor_ktor_http.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  function get_coroutineContext() {
    return this.q3e().k1a();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().i3d_1;
    client.u3a_1.k2e(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpTimeoutConfig, 'HttpTimeoutConfig', HttpTimeoutConfig_init_$Create$);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForLambda(HttpTimeout$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(applyRequestTimeout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(SSEClientContent, 'SSEClientContent', VOID, ContentWrapper);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(FormDataContent, 'FormDataContent', VOID, ByteArrayContent);
  initMetadataForCoroutine($writeToCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultiPartFormDataContent, 'MultiPartFormDataContent', VOID, WriteChannelContent, VOID, [1]);
  initMetadataForClass(PreparedPart, 'PreparedPart');
  initMetadataForClass(InputPart, 'InputPart', VOID, PreparedPart);
  initMetadataForClass(ChannelPart, 'ChannelPart', VOID, PreparedPart);
  initMetadataForClass(FormBuilder, 'FormBuilder');
  initMetadataForClass(FormPart, 'FormPart');
  initMetadataForClass(InputProvider, 'InputProvider');
  initMetadataForClass(ChannelProvider, 'ChannelProvider');
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(EngineEntry, 'EngineEntry');
  initMetadataForClass(ProxyConfig, 'ProxyConfig', ProxyConfig_init_$Create$);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.o3a_1 = manageEngine;
    if ($this.o3a_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.c3b_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.r3a_1.z8(Key_instance));
      tmp.m1b(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.c3b_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.c4();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.n3b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).q3b = function ($this$intercept, call, $completion) {
    var tmp = this.r3b($this$intercept, call, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClient$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp_0 = this.p3b_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.p3b_1) + '(' + toString(getKClassFromExpression(this.p3b_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.m8_1 = 1;
            suspendResult = this.n3b_1.v3a_1.f2e(Unit_instance, this.p3b_1.x3b(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.p3b_1.y3b(response);
            this.m8_1 = 2;
            suspendResult = this.o3b_1.k2d(this.p3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(HttpClient$slambda).r3b = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.n3b_1, completion);
    i.o3b_1 = $this$intercept;
    i.p3b_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.q3b($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.h3c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).l3c = function ($this$intercept, it, $completion) {
    var tmp = this.m3c($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClient$slambda_1).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.i3c_1.l2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3c_1 = suspendResult;
            this.n8_1 = 3;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              var tmp_1 = this;
              this.h3c_1.y3a_1.t2v(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.i3c_1.g2e_1.x3b(), cause));
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 3:
            throw this.p8_1;
          case 4:
            this.n8_1 = 3;
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
  protoOf(HttpClient$slambda_1).m3c = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.h3c_1, completion);
    i.i3c_1 = $this$intercept;
    i.j3c_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3c($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3c_1 = _this__u8e3s4;
    this.w3c_1 = builder;
  }
  protoOf($executeCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.v3c_1.y3a_1.t2v(get_HttpRequestCreated(), this.w3c_1);
            this.m8_1 = 1;
            suspendResult = this.v3c_1.s3a_1.f2e(this.w3c_1, this.w3c_1.a3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.m3a_1 = engine;
    this.n3a_1 = userConfig;
    this.o3a_1 = false;
    this.p3a_1 = atomic$boolean$1(false);
    this.q3a_1 = Job(this.m3a_1.k1a().z8(Key_instance));
    this.r3a_1 = this.m3a_1.k1a().hh(this.q3a_1);
    this.s3a_1 = new HttpRequestPipeline();
    this.t3a_1 = new HttpResponsePipeline();
    this.u3a_1 = new HttpSendPipeline();
    this.v3a_1 = new HttpReceivePipeline();
    this.w3a_1 = AttributesJsFn(true);
    this.x3a_1 = this.m3a_1.d3d();
    this.y3a_1 = new Events();
    this.z3a_1 = new HttpClientConfig();
    this.m3a_1.e3d(this);
    var tmp = Phases_getInstance_0().j3d_1;
    this.u3a_1.k2e(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.n3a_1;
    this.z3a_1.s3d(get_HttpRequestLifecycle());
    this.z3a_1.s3d(get_BodyProgress());
    this.z3a_1.s3d(get_SaveBody());
    if ($this$with.p3d_1) {
      this.z3a_1.t3d('DefaultTransformers', HttpClient$lambda);
    }
    this.z3a_1.s3d(Plugin_getInstance());
    this.z3a_1.s3d(get_HttpCallValidator());
    if ($this$with.o3d_1) {
      this.z3a_1.s3d(get_HttpRedirect());
    }
    this.z3a_1.u3d($this$with);
    if ($this$with.p3d_1) {
      this.z3a_1.s3d(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.z3a_1);
    this.z3a_1.e3d(this);
    var tmp_0 = Phases_getInstance_1().v3d_1;
    this.t3a_1.k2e(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).k1a = function () {
    return this.r3a_1;
  };
  protoOf(HttpClient).a3e = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClient).c4 = function () {
    var success = this.p3a_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.w3a_1.m28(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.t28().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.m28(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.c4();
      }
    }
    this.q3a_1.c1h();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.m3a_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.b3e(config.n3d_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.k3d_1.q2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.k3d_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.z2(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function (_this__u8e3s4) {
      $oldConfig(_this__u8e3s4);
      $block(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.w3a_1.s28(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.z3a_1.l3d_1.s2($plugin.m1()));
      var pluginData = $plugin.c3e(config);
      $plugin.d3e(pluginData, scope);
      attributes.p28($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k3d_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.l3d_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.m3d_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.n3d_1 = HttpClientConfig$engineConfig$lambda;
    this.o3d_1 = true;
    this.p3d_1 = true;
    this.q3d_1 = false;
    this.r3d_1 = PlatformUtils_getInstance().o2a_1;
  }
  protoOf(HttpClientConfig).e3e = function (block) {
    var oldConfig = this.n3d_1;
    var tmp = this;
    tmp.n3d_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).f3e = function (plugin, configure) {
    var previousConfigBlock = this.l3d_1.s2(plugin.m1());
    var tmp0 = this.l3d_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.z2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).s3d = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.f3e(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.f3e.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).t3d = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.m3d_1.z2(key, block);
  };
  protoOf(HttpClientConfig).e3d = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k3d_1.u2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.m3d_1.u2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).u3d = function (other) {
    this.o3d_1 = other.o3d_1;
    this.p3d_1 = other.p3d_1;
    this.q3d_1 = other.q3d_1;
    var tmp0 = this.k3d_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.k3d_1;
    tmp0.b3(map);
    var tmp0_0 = this.l3d_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.l3d_1;
    tmp0_0.b3(map_0);
    var tmp0_1 = this.m3d_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.m3d_1;
    tmp0_1.b3(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.x3b().t2n() : headers;
    return new DelegatedCall(_this__u8e3s4.s3b_1, _this__u8e3s4, content, headers);
  }
  function resolveOrigin(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp;
        if ($this instanceof DelegatedResponse) {
          $this = $this.h3e_1;
          continue $l$0;
        } else {
          tmp = $this;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.x3b().t2n() : responseHeaders;
    HttpClientCall.call(this, client);
    this.u3b_1 = new DelegatedRequest(this, originCall.l3e());
    this.v3b_1 = new DelegatedResponse(this, originCall.x3b(), responseContent, responseHeaders);
  }
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.t2n() : headers;
    HttpResponse.call(this);
    this.g3e_1 = call;
    this.h3e_1 = origin;
    this.i3e_1 = content;
    this.j3e_1 = headers;
    this.k3e_1 = this.h3e_1.k1a();
  }
  protoOf(DelegatedResponse).q3e = function () {
    return this.g3e_1;
  };
  protoOf(DelegatedResponse).t2n = function () {
    return this.j3e_1;
  };
  protoOf(DelegatedResponse).r3e = function () {
    return this.i3e_1(this.h3e_1);
  };
  protoOf(DelegatedResponse).k1a = function () {
    return this.k3e_1;
  };
  protoOf(DelegatedResponse).s3e = function () {
    return this.h3e_1.s3e();
  };
  protoOf(DelegatedResponse).t3e = function () {
    return this.h3e_1.t3e();
  };
  protoOf(DelegatedResponse).u3e = function () {
    return this.h3e_1.u3e();
  };
  protoOf(DelegatedResponse).v3e = function () {
    return this.h3e_1.v3e();
  };
  function DelegatedRequest(call, origin) {
    this.w3e_1 = origin;
    this.x3e_1 = call;
  }
  protoOf(DelegatedRequest).q3e = function () {
    return this.x3e_1;
  };
  protoOf(DelegatedRequest).k1a = function () {
    return this.w3e_1.k1a();
  };
  protoOf(DelegatedRequest).y3e = function () {
    return this.w3e_1.y3e();
  };
  protoOf(DelegatedRequest).z3e = function () {
    return this.w3e_1.z3e();
  };
  protoOf(DelegatedRequest).m3e = function () {
    return this.w3e_1.m3e();
  };
  protoOf(DelegatedRequest).a3f = function () {
    return this.w3e_1.a3f();
  };
  protoOf(DelegatedRequest).t2n = function () {
    return this.w3e_1.t2n();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.u3b_1 = new DefaultHttpRequest($this, requestData);
    $this.v3b_1 = new DefaultHttpResponse($this, responseData);
    $this.m3e().r28(Companion_getInstance_9().b3f_1);
    var tmp = responseData.g3f_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.m3e().p28(Companion_getInstance_9().b3f_1, responseData.g3f_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().ib();
    var tmp_1 = !(null == null);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(PrimitiveClasses_getInstance().ib(), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.b3f_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r3f_1 = _this__u8e3s4;
    this.s3f_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.n8_1 = 4;
            if (instanceOf(this.r3f_1.x3b(), this.s3f_1.x2e_1))
              return this.r3f_1.x3b();
            if (!this.r3f_1.n3e() && !get_isSaved(this.r3f_1.x3b()) && !this.r3f_1.t3b_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.r3f_1);
            }

            var tmp0_elvis_lhs = this.r3f_1.m3e().n28(Companion_getInstance_9().b3f_1);
            if (tmp0_elvis_lhs == null) {
              this.m8_1 = 1;
              suspendResult = this.r3f_1.o3e(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t3f_1 = tmp0_elvis_lhs;
              this.m8_1 = 2;
              continue $sm;
            }

          case 1:
            this.t3f_1 = suspendResult;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.t3f_1;
            var subject = new HttpResponseContainer(this.s3f_1, responseData);
            this.m8_1 = 3;
            suspendResult = this.r3f_1.s3b_1.t3a_1.f2e(this.r3f_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.v3f_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.s3f_1.x2e_1)) {
              var from = getKClassFromExpression(result);
              var to = this.s3f_1.x2e_1;
              throw new NoTransformationFoundException(this.r3f_1.x3b(), from, to);
            }

            return result;
          case 4:
            this.n8_1 = 5;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.p8_1;
              cancel_0(this.r3f_1.x3b(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_9();
    this.s3b_1 = client;
    this.t3b_1 = atomic$boolean$1(false);
    this.w3b_1 = false;
  }
  protoOf(HttpClientCall).k1a = function () {
    return this.x3b().k1a();
  };
  protoOf(HttpClientCall).m3e = function () {
    return this.l3e().m3e();
  };
  protoOf(HttpClientCall).l3e = function () {
    var tmp = this.u3b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).x3b = function () {
    var tmp = this.v3b_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).n3e = function () {
    return this.w3b_1;
  };
  protoOf(HttpClientCall).o3e = function ($completion) {
    return this.x3b().r3e();
  };
  protoOf(HttpClientCall).p3e = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.l3e().z3e().toString() + ', ' + this.x3b().s3e().toString() + ']';
  };
  protoOf(HttpClientCall).y3b = function (response) {
    this.v3b_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.w3f_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.w3f_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.x3f_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).z3e().toString() + '`\n        Response status `' + response.s3e().toString() + '`\n        Response header `ContentType: ' + response.t2n().md('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).t2n().md('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.x3f_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.h3g_1 = call;
    this.i3g_1 = body;
    this.j3g_1 = origin.s3e();
    this.k3g_1 = origin.t3e();
    this.l3g_1 = origin.u3e();
    this.m3g_1 = origin.v3e();
    this.n3g_1 = origin.t2n();
    this.o3g_1 = origin.k1a();
  }
  protoOf(SavedHttpResponse).q3e = function () {
    return this.h3g_1;
  };
  protoOf(SavedHttpResponse).s3e = function () {
    return this.j3g_1;
  };
  protoOf(SavedHttpResponse).t3e = function () {
    return this.k3g_1;
  };
  protoOf(SavedHttpResponse).u3e = function () {
    return this.l3g_1;
  };
  protoOf(SavedHttpResponse).v3e = function () {
    return this.m3g_1;
  };
  protoOf(SavedHttpResponse).t2n = function () {
    return this.n3g_1;
  };
  protoOf(SavedHttpResponse).k1a = function () {
    return this.o3g_1;
  };
  protoOf(SavedHttpResponse).r3e = function () {
    return ByteReadChannel_0(this.i3g_1);
  };
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.u3g_1 = responseBody;
    this.u3b_1 = new SavedHttpRequest(this, request);
    this.v3b_1 = new SavedHttpResponse(this, this.u3g_1, response);
    checkContentLength(contentLength(response), fromInt(this.u3g_1.length), request.y3e());
    this.v3g_1 = true;
  }
  protoOf(SavedHttpCall).n3e = function () {
    return this.v3g_1;
  };
  function SavedHttpRequest(call, origin) {
    this.w3g_1 = origin;
    this.x3g_1 = call;
  }
  protoOf(SavedHttpRequest).q3e = function () {
    return this.x3g_1;
  };
  protoOf(SavedHttpRequest).k1a = function () {
    return this.w3g_1.k1a();
  };
  protoOf(SavedHttpRequest).y3e = function () {
    return this.w3g_1.y3e();
  };
  protoOf(SavedHttpRequest).z3e = function () {
    return this.w3g_1.z3e();
  };
  protoOf(SavedHttpRequest).m3e = function () {
    return this.w3g_1.m3e();
  };
  protoOf(SavedHttpRequest).a3f = function () {
    return this.w3g_1.a3f();
  };
  protoOf(SavedHttpRequest).t2n = function () {
    return this.w3g_1.t2n();
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3g_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var tmp_0 = this.g3g_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.g3g_1;
            this.m8_1 = 1;
            suspendResult = readBuffer(this.g3g_1.x3b().r3e(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.g3g_1.s3b_1, this.g3g_1.l3e(), this.g3g_1.x3b(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.m2v());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.i2t());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().q1z_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.g2v();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.b3h_1, true, ObservableContent$getContent$slambda_0(delegate, null)).m1z_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.l3h_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).j30 = function ($this$writer, $completion) {
    var tmp = this.k30($this$writer, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ObservableContent$getContent$slambda).i9 = function (p1, $completion) {
    return this.j30(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.l3h_1.i2v(this.m3h_1.h25_1, this);
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
  protoOf(ObservableContent$getContent$slambda).k30 = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.l3h_1, completion);
    i.m3h_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j30($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.a3h_1 = delegate;
    this.b3h_1 = callContext;
    this.c3h_1 = listener;
  }
  protoOf(ObservableContent).g2t = function () {
    return this.a3h_1.g2t();
  };
  protoOf(ObservableContent).h2t = function () {
    return this.a3h_1.h2t();
  };
  protoOf(ObservableContent).t2n = function () {
    return this.a3h_1.t2n();
  };
  protoOf(ObservableContent).g2v = function () {
    return observable(getContent(this, this.a3h_1), this.b3h_1, this.h2t(), this.c3h_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.y3a_1.t2v(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.k1a().z8(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l1a();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.d3i_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.e3i().j2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.n3i_1 = $client;
    this.o3i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).q3b = function ($this$intercept, content, $completion) {
    var tmp = this.r3b($this$intercept, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClientEngine$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.s3i(this.p3i_1.g2e_1);
            var body = this.q3i_1;
            if (body == null) {
              this_0.a3d_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().ib();
              var tmp_1 = !(null == null);
              var tmp_2;
              try {
                tmp_2 = createKType(PrimitiveClasses_getInstance().ib(), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              this_0.t3i(new TypeInfo(tmp_0, tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.a3d_1 = body;
                this_0.t3i(null);
              } else {
                this_0.a3d_1 = body;
                var tmp_4 = PrimitiveClasses_getInstance().ib();
                var tmp_5 = !(null == null);
                var tmp_6;
                try {
                  tmp_6 = createKType(PrimitiveClasses_getInstance().ib(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_7;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_7 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_6 = tmp_7;
                }
                this_0.t3i(new TypeInfo(tmp_4, tmp_5, tmp_6));
              }
            }

            var builder = this_0;
            this.n3i_1.y3a_1.t2v(get_HttpRequestIsReadyForSending(), builder);
            var tmp_8 = this;
            var this_1 = builder.m2j();
            this_1.c3i_1.p28(get_CLIENT_CONFIG(), this.n3i_1.z3a_1);
            tmp_8.r3i_1 = this_1;
            validateHeaders(this.r3i_1);
            checkExtensions(this.o3i_1, this.r3i_1);
            this.m8_1 = 1;
            suspendResult = executeWithinCallContext(this.o3i_1, this.r3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.n3i_1, this.r3i_1, responseData);
            var response = call.x3b();
            this.n3i_1.y3a_1.t2v(get_HttpResponseReceived(), response);
            var tmp_9 = get_job(response.k1a());
            tmp_9.m1b(HttpClientEngine$install$slambda$lambda(this.n3i_1, response));
            this.m8_1 = 2;
            suspendResult = this.p3i_1.k2d(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.p8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).r3b = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.n3i_1, this.o3i_1, completion);
    i.p3i_1 = $this$intercept;
    i.q3i_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3b($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.c3j_1 = this$0;
    this.d3j_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).f3j = function ($this$async, $completion) {
    var tmp = this.m26($this$async, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).i9 = function (p1, $completion) {
    return this.f3j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            if (_get_closed__iwkfs1(this.c3j_1)) {
              throw new ClientEngineClosedException();
            }

            this.m8_1 = 1;
            suspendResult = this.c3j_1.g3j(this.d3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).m26 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.c3j_1, this.d3j_1, completion);
    i.e3j_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.f3j($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3h_1 = _this__u8e3s4;
    this.w3h_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = createCallContext(this.v3h_1, this.w3h_1.b3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.hh(new KtorCallContextElement(callContext));
            this.m8_1 = 2;
            suspendResult = async(this.v3h_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.v3h_1, this.w3h_1, null)).w1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.z3h_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.x2a();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().l2n_1.j2(element)) {
        destination.c1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.k1a().hh(callJob).hh(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.s8().z8(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.o1b(true, VOID, createCallContext$lambda(callJob));
      callJob.m1b(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.t1b(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.v1d();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      var tmp_0 = null instanceof HttpClientConfig;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.d3d().i3j_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.l3j();
    }, 1, 0, 20);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().hh(this$0.l3j()).hh(new CoroutineName(this$0.a3b_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.k1a();
    }, 1, 0, 21);
  }
  function HttpClientEngineBase(engineName) {
    this.a3b_1 = engineName;
    this.b3b_1 = atomic$boolean$1(false);
    this.c3b_1 = atomic$int$1(0);
    var tmp = this;
    tmp.d3b_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.e3b_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).l3j = function () {
    var tmp0 = this.d3b_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).k1a = function () {
    var tmp0 = this.e3b_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).c4 = function () {
    if (!this.b3b_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.k1a().z8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.c1h();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.m3j_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.m3j_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableMap) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ib(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.h3j_1 = 4;
    this.i3j_1 = null;
    this.j3j_1 = false;
    this.k3j_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.n3j_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.s8();
    return ensureNotNull(tmp$ret$0.z8(Companion_instance_1)).n3j_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.c2b(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.md('User-Agent') == null && content.t2n().md('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.g2t();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.t2n().md('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.md('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.h2t();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.t2n().md('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.md('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().i2a_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.b2b($requestHeaders);
      $this$buildHeaders.b2b($content.t2n());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().j2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.w3j_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).q3b = function ($this$intercept, content, $completion) {
    var tmp = this.r3b($this$intercept, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AfterRenderHook$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp_0 = this.y3j_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.m8_1 = 1;
            suspendResult = this.w3j_1(this.x3j_1.g2e_1, this.y3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.m8_1 = 2;
            suspendResult = this.x3j_1.k2d(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(AfterRenderHook$install$slambda).r3b = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.w3j_1, completion);
    i.x3j_1 = $this$intercept;
    i.y3j_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3b($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).z3j = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.s3a_1.h2e(Phases_getInstance().d3k_1, observableContentPhase);
    client.s3a_1.k2e(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).f3k = function (client, handler) {
    return this.z3j(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.o3k_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).r3k = function ($this$intercept, response, $completion) {
    var tmp = this.s3k($this$intercept, response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AfterReceiveHook$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.r3k(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m8_1 = 1;
            suspendResult = this.o3k_1(this.q3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.m8_1 = 2;
              suspendResult = this.p3k_1.k2d(newResponse, this);
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
            return Unit_instance;
          case 4:
            throw this.p8_1;
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
  protoOf(AfterReceiveHook$install$slambda).s3k = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.o3k_1, completion);
    i.p3k_1 = $this$intercept;
    i.q3k_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.r3k($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).t3k = function (client, handler) {
    var tmp = Phases_getInstance_2().w3k_1;
    client.v3a_1.k2e(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).f3k = function (client, handler) {
    return this.t3k(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.q3e();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).x3b();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.c3l(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.c3l(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).n3l = function (request, content, $completion) {
    var tmp = this.o3l(request, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(BodyProgress$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.n3l(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          var tmp0_elvis_lhs = this.l3l_1.c3d_1.n28(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.m3l_1, this.l3l_1.b3d_1, listener);
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).o3l = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.l3l_1 = request;
    i.m3l_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.n3l(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).y3l = function (response, $completion) {
    var tmp = this.z3l(response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(BodyProgress$lambda$slambda_1).i9 = function (p1, $completion) {
    return this.y3l(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          var tmp0_elvis_lhs = this.x3l_1.q3e().l3e().m3e().n28(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.x3l_1, listener);
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).z3l = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.x3l_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.y3l(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.r3e(), $this$replaceResponse.k1a(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      var tmp_0 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(ProgressListener);
      var tmp_4 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.a3m_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.c3m_1 = 'Unhandled redirect: ' + response.q3e().l3e().y3e().e2o_1 + ' ' + response.q3e().l3e().z3e().toString() + '. ' + ('Status: ' + response.s3e().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.c3m_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.e3m_1 = 'Client request(' + response.q3e().l3e().y3e().e2o_1 + ' ' + response.q3e().l3e().z3e().toString() + ') ' + ('invalid: ' + response.s3e().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.e3m_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.g3m_1 = 'Server error(' + response.q3e().l3e().y3e().e2o_1 + ' ' + response.q3e().l3e().z3e().toString() + ': ' + (response.s3e().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.g3m_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).t3m = function (response, $completion) {
    var tmp = this.z3l(response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).i9 = function (p1, $completion) {
    return this.t3m(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            var expectSuccess = this.p3m_1.q3e().m3e().m28(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('Skipping default response validation for ' + this.p3m_1.q3e().l3e().z3e().toString());
              }
              return Unit_instance;
            }

            this.r3m_1 = this.p3m_1.s3e().s2q_1;
            var originCall = this.p3m_1.q3e();
            if (this.r3m_1 < 300 || originCall.m3e().o28(get_ValidateMark())) {
              return Unit_instance;
            }

            this.m8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_1 = suspendResult;
            this_1.m3e().p28(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_1;
            this.q3m_1 = exceptionCall.x3b();
            this.n8_1 = 3;
            this.m8_1 = 2;
            suspendResult = bodyAsText(this.q3m_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s3m_1 = suspendResult;
            this.n8_1 = 5;
            this.m8_1 = 4;
            continue $sm;
          case 3:
            this.n8_1 = 5;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.p8_1;
              var tmp_1 = this;
              tmp_1.s3m_1 = '<body failed decoding>';
              this.m8_1 = 4;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 4:
            this.n8_1 = 5;
            var exceptionResponseText = this.s3m_1;
            var tmp0_subject = this.r3m_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.q3m_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.q3m_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.q3m_1, exceptionResponseText) : new ResponseException(this.q3m_1, exceptionResponseText);
            var this_2 = get_LOGGER();
            if (get_isTraceEnabled(this_2)) {
              this_2.g2f('Default response validation for ' + this.p3m_1.q3e().l3e().z3e().toString() + ' failed with exception', exception);
            }

            throw exception;
          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).z3l = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.p3m_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.t3m(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.w3m_1 = $this_addDefaultResponseValidation.q3d_1;
      $this$HttpResponseValidator.x3m(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().d3k_1;
    _this__u8e3s4.s3a_1.k2e(tmp, defaultTransformers$slambda_0(null));
    var clientScope = _this__u8e3s4;
    var tmp_0 = Phases_getInstance_1().w3d_1;
    _this__u8e3s4.t3a_1.k2e(tmp_0, defaultTransformers$slambda_2(clientScope, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.b3n_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.z3m_1 = $contentType == null ? Application_getInstance().x2g_1 : $contentType;
    this.a3n_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).g2t = function () {
    return this.z3m_1;
  };
  protoOf(defaultTransformers$1$content$1).h2t = function () {
    return this.a3n_1;
  };
  protoOf(defaultTransformers$1$content$1).i2t = function () {
    return this.b3n_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.f3n_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.g2e_1.z3c_1.md('Content-Length');
    tmp.d3n_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.e3n_1 = $contentType == null ? Application_getInstance().x2g_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).h2t = function () {
    return this.d3n_1;
  };
  protoOf(defaultTransformers$1$content$2).g2t = function () {
    return this.e3n_1;
  };
  protoOf(defaultTransformers$1$content$2).g2v = function () {
    return this.f3n_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).q3b = function ($this$intercept, body, $completion) {
    var tmp = this.r3b($this$intercept, body, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(defaultTransformers$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (this.o3n_1.g2e_1.z3c_1.md('Accept') == null) {
              this.o3n_1.g2e_1.z3c_1.a2b('Accept', '*/*');
            }

            var contentType_0 = contentType(this.o3n_1.g2e_1);
            var tmp0_subject = this.p3n_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.p3n_1, contentType_0 == null ? Text_getInstance().p2i_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.p3n_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.o3n_1, contentType_0, this.p3n_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.p3n_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.o3n_1.g2e_1, this.p3n_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.g2t()) == null)) {
              this.o3n_1.g2e_1.z3c_1.d2b('Content-Type');
              var this_0 = get_LOGGER_0();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('Transformed with default transformers request body for ' + this.o3n_1.g2e_1.x3c_1.toString() + ' from ' + toString(getKClassFromExpression(this.p3n_1)));
              }
              this.m8_1 = 1;
              suspendResult = this.o3n_1.k2d(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
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
  protoOf(defaultTransformers$slambda).r3b = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.o3n_1 = $this$intercept;
    i.p3n_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.q3b($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.y3n_1 = $body;
    this.z3n_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).j30 = function ($this$writer, $completion) {
    var tmp = this.k30($this$writer, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(defaultTransformers$slambda$slambda).i9 = function (p1, $completion) {
    return this.j30(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = copyTo(this.y3n_1, this.a3o_1.h25_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.y3n_1);
            this.n8_1 = 4;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 4;
            return Unit_instance;
          case 3:
            this.n8_1 = 4;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.p8_1;
              cancel(this.z3n_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.p8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.p8_1;
                cancel_0(this.z3n_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.p8_1;
              }
            }

          case 4:
            throw this.p8_1;
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
  protoOf(defaultTransformers$slambda$slambda).k30 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.y3n_1, this.z3n_1, completion);
    i.a3o_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j30($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.c1h();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($clientScope, resultContinuation) {
    this.j3o_1 = $clientScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).l3c = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3c($this$intercept, _destruct__k2r9zo, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(defaultTransformers$slambda_1).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 12;
            this.m3o_1 = this.l3o_1.bg();
            var body = this.l3o_1.cg();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.k3o_1.g2e_1.x3b();
            var tmp0_subject = this.m3o_1.x2e_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.m8_1 = 10;
              suspendResult = this.k3o_1.k2d(new HttpResponseContainer(this.m3o_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().ob())) {
                this.m8_1 = 8;
                suspendResult = readBuffer(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.m8_1 = 6;
                  suspendResult = readBuffer(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().xb())) {
                    this.m8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.k1a()));
                      var byteChannel = new ByteChannel();
                      var this_0 = writer_0(this.j3o_1, VOID, byteChannel, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachJob(byteChannel, get_job(response.k1a()));
                      attachWriterJob(body, this_0);
                      var channel = this_0.m1z_1;
                      this.m8_1 = 3;
                      suspendResult = this.k3o_1.k2d(new HttpResponseContainer(this.m3o_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.m8_1 = 2;
                        suspendResult = this.k3o_1.k2d(new HttpResponseContainer(this.m3o_1, response.s3e()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.k3o_1.g2e_1.x3b().t2n().md('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().un(rawContentType);
                          if (!contentType.j2j(MultiPart_getInstance().i2i_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.k3o_1.g2e_1.x3b().t2n().md('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.k3o_1.k1a(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.m3o_1, body_0);
                          this.m8_1 = 1;
                          suspendResult = this.k3o_1.k2d(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.n3o_1 = null;
                          this.m8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 2:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 3:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.k3o_1.g2e_1.x3b()), fromInt(bytes.length), this.k3o_1.g2e_1.l3e().y3e());
            this.m8_1 = 5;
            suspendResult = this.k3o_1.k2d(new HttpResponseContainer(this.m3o_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.m3o_1, ARGUMENT);
            this.m8_1 = 7;
            suspendResult = this.k3o_1.k2d(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.m3o_1, ARGUMENT_3);
            this.m8_1 = 9;
            suspendResult = this.k3o_1.k2d(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 10:
            this.n3o_1 = suspendResult;
            this.m8_1 = 11;
            continue $sm;
          case 11:
            var result = this.n3o_1;
            if (!(result == null)) {
              var this_1 = get_LOGGER_0();
              if (get_isTraceEnabled(this_1)) {
                this_1.f2f('Transformed with default transformers response body for ' + this.k3o_1.g2e_1.l3e().z3e().toString() + ' to ' + toString(this.m3o_1.x2e_1));
              }
            }

            return Unit_instance;
          case 12:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 12) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).m3c = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.j3o_1, completion);
    i.k3o_1 = $this$intercept;
    i.l3o_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($clientScope, resultContinuation) {
    var i = new defaultTransformers$slambda_1($clientScope, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3c($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u3m_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v3m_1 = ArrayList_init_$Create$();
    this.w3m_1 = true;
  }
  protoOf(HttpCallValidatorConfig).x3m = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.u3m_1.c1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.f3e(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.w3o_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).q3b = function ($this$intercept, it, $completion) {
    var tmp = this.r3b($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RequestError$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.x3o_1.l2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z3o_1 = suspendResult;
            this.n8_1 = 5;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 5;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              this.m8_1 = 3;
              suspendResult = this.w3o_1(HttpRequest(this.x3o_1.g2e_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.z3o_1 = Unit_instance;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).r3b = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.w3o_1, completion);
    i.x3o_1 = $this$intercept;
    i.y3o_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3b($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).a3p = function (client, handler) {
    var tmp = Phases_getInstance().a3k_1;
    client.s3a_1.k2e(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).f3k = function (client, handler) {
    return this.a3p(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.j3p_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).l3c = function ($this$intercept, it, $completion) {
    var tmp = this.m3c($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ReceiveError$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.k3p_1.l2d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m3p_1 = suspendResult;
            this.n8_1 = 5;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 5;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              this.m8_1 = 3;
              suspendResult = this.j3p_1(this.k3p_1.g2e_1.l3e(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.m3p_1 = Unit_instance;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).m3c = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.j3p_1, completion);
    i.k3p_1 = $this$intercept;
    i.l3p_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3c($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).a3p = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.t3a_1.j2e(Phases_getInstance_1().v3d_1, BeforeReceive);
    client.t3a_1.k2e(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).f3k = function (client, handler) {
    return this.a3p(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 22, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.z3k_1.u3m_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.z3k_1.v3m_1);
    var expectSuccess = $this$createClientPlugin.z3k_1.w3m_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.c3l(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.c3l(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.c3l(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.c3l(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.s3q_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).u3q = function (request, $completion) {
    var tmp = this.v3q(request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpCallValidator$lambda$slambda).i9 = function (p1, $completion) {
    return this.u3q(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.t3q_1.c3d_1.s28(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.s3q_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).v3q = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.s3q_1, completion);
    i.t3q_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.u3q(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.e3r_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).i3r = function ($this$on, request, $completion) {
    var tmp = this.j3r($this$on, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3r(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = this.f3r_1.m3r(this.g3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h3r_1 = suspendResult;
            this.m8_1 = 2;
            suspendResult = invoke$validateResponse(this.e3r_1, this.h3r_1.x3b(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.h3r_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).j3r = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.e3r_1, completion);
    i.f3r_1 = $this$on;
    i.g3r_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3r($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.v3r_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).z3r = function (request, cause, $completion) {
    var tmp = this.a3s(request, cause, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).g9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z3r(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.y3r_1 = unwrapCancellationException(this.x3r_1);
            this.m8_1 = 1;
            suspendResult = invoke$processException(this.v3r_1, this.y3r_1, this.w3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.y3r_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).a3s = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.v3r_1, completion);
    i.w3r_1 = request;
    i.x3r_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.z3r(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.j3s_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).z3r = function (request, cause, $completion) {
    var tmp = this.a3s(request, cause, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).g9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z3r(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m3s_1 = unwrapCancellationException(this.l3s_1);
            this.m8_1 = 1;
            suspendResult = invoke$processException(this.j3s_1, this.m3s_1, this.k3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.m3s_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).a3s = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.j3s_1, completion);
    i.k3s_1 = request;
    i.l3s_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.z3r(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3p_1 = responseValidators;
    this.w3p_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var this_0 = get_LOGGER_1();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Validating response for request ' + this.w3p_1.q3e().l3e().z3e().toString());
            }

            this.x3p_1 = this.v3p_1.t();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.x3p_1.u()) {
              this.m8_1 = 3;
              continue $sm;
            }

            var element = this.x3p_1.v();
            this.m8_1 = 2;
            suspendResult = element(this.w3p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p8_1;
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
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3q_1 = callExceptionHandlers;
    this.h3q_1 = cause;
    this.i3q_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            var tmp0 = get_LOGGER_1();
            var cause = this.h3q_1;
            if (get_isTraceEnabled(tmp0)) {
              tmp0.g2f('Processing exception ' + toString(getKClassFromExpression(this.h3q_1)) + ' for request ' + this.i3q_1.z3e().toString(), cause);
            }

            this.j3q_1 = this.g3q_1.t();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.j3q_1.u()) {
              this.m8_1 = 5;
              continue $sm;
            }

            var element = this.j3q_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.m8_1 = 3;
              suspendResult = element.o3s_1(this.h3q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.m8_1 = 2;
                suspendResult = element.n3s_1(this.h3q_1, this.i3q_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.m8_1 = 4;
            continue $sm;
          case 3:
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 1;
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
  function HttpRequest$1($builder) {
    this.t3s_1 = $builder;
    this.p3s_1 = $builder.y3c_1;
    this.q3s_1 = $builder.x3c_1.m2j();
    this.r3s_1 = $builder.c3d_1;
    this.s3s_1 = $builder.z3c_1.m2j();
  }
  protoOf(HttpRequest$1).q3e = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).y3e = function () {
    return this.p3s_1;
  };
  protoOf(HttpRequest$1).z3e = function () {
    return this.q3s_1;
  };
  protoOf(HttpRequest$1).m3e = function () {
    return this.r3s_1;
  };
  protoOf(HttpRequest$1).t2n = function () {
    return this.s3s_1;
  };
  protoOf(HttpRequest$1).a3f = function () {
    var tmp = this.t3s_1.a3d_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.t3s_1.a3d_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().lb();
      var tmp_1 = !(null == null) ? typeof null === 'boolean' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.m1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.w3a_1.n28(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n28(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      var tmp_0 = !(null == null) ? isInterface(null, Attributes) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.u3s_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v3s_1 = LinkedHashMap_init_$Create$();
    this.w3s_1 = null;
    this.x3s_1 = Charsets_getInstance().k27_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.g3t_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).q3b = function ($this$intercept, content, $completion) {
    var tmp = this.r3b($this$intercept, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RenderRequestHook$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m8_1 = 1;
            suspendResult = this.g3t_1(this.h3t_1.g2e_1, this.i3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.m8_1 = 2;
              suspendResult = this.h3t_1.k2d(result, this);
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
            return Unit_instance;
          case 4:
            throw this.p8_1;
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
  protoOf(RenderRequestHook$install$slambda).r3b = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.g3t_1, completion);
    i.h3t_1 = $this$intercept;
    i.i3t_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3b($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).j3t = function (client, handler) {
    var tmp = Phases_getInstance().d3k_1;
    client.s3a_1.k2e(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).f3k = function (client, handler) {
    return this.j3t(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 23, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.z3k_1.v3s_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.z3k_1.x3s_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.z3k_1.u3s_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.z3k_1.v3s_1.q2(element)) {
        destination.c1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.z3k_1.u3s_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().k27_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.z3k_1.v3s_1.t2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().k27_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.bg();
        var quality = element_3.cg();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.z3k_1.w3s_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.zf_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().k27_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.c3l(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.k3t(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l3t_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ae = function (a, b) {
    return this.l3t_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ae(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).l3 = function () {
    return this.l3t_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.l3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.ag_1;
    var tmp$ret$2 = a.ag_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().p2i_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Sending request body to ' + request.x3c_1.toString() + ' as text/plain with charset ' + charset_0.toString();
      this_0.f2f(tmp$ret$1);
    }
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.x3b());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Reading response body for ' + call.l3e().z3e().toString() + ' as String with charset ' + actualCharset.toString();
      this_0.f2f(tmp$ret$1);
    }
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.z3c_1.md('Accept-Charset') == null))
      return Unit_instance;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.x3c_1.toString();
      this_0.f2f(tmp$ret$1);
    }
    _this__u8e3s4.z3c_1.y2a('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.u3t_1 = $acceptCharsetHeader;
    this.v3t_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).y3t = function (request, content, $completion) {
    var tmp = this.z3t(request, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpPlainText$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.y3t(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          invoke$addAcceptCharsetHeader(this.w3t_1, this.u3t_1);
          var tmp_0 = this.x3t_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.w3t_1);
          if (!(contentType_0 == null) && !(contentType_0.g2j_1 === Text_getInstance().p2i_1.g2j_1)) {
            return null;
          }
          return invoke$wrapContent(this.v3t_1, this.w3t_1, this.x3t_1, contentType_0);
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).z3t = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.u3t_1, this.v3t_1, completion);
    i.w3t_1 = request;
    i.x3t_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.y3t(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.i3u_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).n3u = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.o3u($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).p3u = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.n3u(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            if (!this.m3u_1.x2e_1.equals(PrimitiveClasses_getInstance().tb()))
              return null;
            this.m8_1 = 1;
            suspendResult = readBuffer(this.l3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.i3u_1, this.k3u_1.q3e(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).o3u = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.i3u_1, completion);
    i.j3u_1 = $this$transformResponseBody;
    i.k3u_1 = response;
    i.l3u_1 = content;
    i.m3u_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.n3u($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.q3u_1 = true;
    this.r3u_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.s2q_1;
    return tmp0_subject === Companion_getInstance_1().a2p_1.s2q_1 || tmp0_subject === Companion_getInstance_1().b2p_1.s2q_1 || (tmp0_subject === Companion_getInstance_1().g2p_1.s2q_1 || (tmp0_subject === Companion_getInstance_1().h2p_1.s2q_1 || tmp0_subject === Companion_getInstance_1().c2p_1.s2q_1)) ? true : false;
  }
  function removeDotSegments(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element === '.' || element === '..') {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0)
      return _this__u8e3s4;
    var segments = firstOrNull(_this__u8e3s4) === '' ? _this__u8e3s4 : plus_0(listOf(''), _this__u8e3s4);
    var output = ArrayList_init_$Create$_0(segments.e1());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = segments.t();
    while (_iterator__ex2g4s_0.u()) {
      var item = _iterator__ex2g4s_0.v();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isLast = checkIndexOverflow(_unary__edvuaz) === get_lastIndex(segments);
      switch (item) {
        case '.':
          if (isLast) {
            output.c1('');
          }

          break;
        case '..':
          if (output.e1() > 1) {
            output.y2(get_lastIndex(output));
          }

          if (isLast) {
            output.c1('');
          }

          break;
        default:
          output.c1(item);
          break;
      }
    }
    return output;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 24, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.z3k_1.q3u_1;
    var allowHttpsDowngrade = $this$createClientPlugin.z3k_1.r3u_1;
    var tmp = Send_instance;
    $this$createClientPlugin.c3l(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.p3v_1 = $checkHttpMethod;
    this.q3v_1 = $allowHttpsDowngrade;
    this.r3v_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).i3r = function ($this$on, request, $completion) {
    var tmp = this.j3r($this$on, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpRedirect$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3r(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = this.s3v_1.m3r(this.t3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.p3v_1 && !get_ALLOWED_FOR_REDIRECT().j2(origin.l3e().y3e())) {
              return origin;
            }

            this.m8_1 = 2;
            suspendResult = invoke$handleCall(this.s3v_1, this.t3v_1, origin, this.q3v_1, this.r3v_1.y3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$lambda$slambda).j3r = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.p3v_1, this.q3v_1, this.r3v_1, completion);
    i.s3v_1 = $this$on;
    i.t3v_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3r($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3v_1 = _this__u8e3s4;
    this.b3v_1 = context;
    this.c3v_1 = origin;
    this.d3v_1 = allowHttpsDowngrade;
    this.e3v_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.f3v_1 = this.c3v_1;
            this.g3v_1 = this.b3v_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.f3v_1.l3e().z3e().x2r_1;
            var previousAuthority = get_authority(this.f3v_1.l3e().z3e());
            if (!isRedirect(this.f3v_1.x3b().s3e()))
              return this.f3v_1;
            var location = this.f3v_1.x3b().t2n().md('Location');
            if (location == null) {
              get_LOGGER_3().d2f('Location header missing from redirect response ' + this.f3v_1.l3e().z3e().toString() + '; returning response as is');
              return this.f3v_1;
            }

            this.e3v_1.y3a_1.t2v(get_HttpResponseRedirectEvent(), this.f3v_1.x3b());
            var this_0 = get_LOGGER_3();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Received redirect response to ' + location + ' for request ' + this.f3v_1.l3e().z3e().toString());
            }

            var tmp_0 = this;
            var this_1 = new HttpRequestBuilder();
            this_1.s3i(this.g3v_1);
            this_1.x3c_1.h2r_1.v2();
            takeFrom(this_1.x3c_1, location);
            var this_2 = substringBefore(substringBefore(location, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63));
            if (charSequenceLength(this_2) > 0) {
              this_1.x3c_1.f2r_1 = removeDotSegments(this_1.x3c_1.f2r_1);
            }

            if (!this.d3v_1 && isSecure(previousProtocol) && !isSecure(this_1.x3c_1.k2r())) {
              var this_3 = get_LOGGER_3();
              if (get_isTraceEnabled(this_3)) {
                this_3.f2f('Blocked redirect from ' + this.f3v_1.l3e().z3e().toString() + ' to ' + location + ' due to HTTPS downgrade');
              }
              return this.f3v_1;
            }

            if (!(previousAuthority === get_authority_0(this_1.x3c_1))) {
              this_1.z3c_1.d2b('Authorization');
              var this_4 = get_LOGGER_3();
              if (get_isTraceEnabled(this_4)) {
                this_4.f2f('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_1.x3c_1.u2s()));
              }
            }

            tmp_0.g3v_1 = this_1;
            this.m8_1 = 2;
            suspendResult = this.a3v_1.m3r(this.g3v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f3v_1 = suspendResult;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().u2n_1, Companion_getInstance_2().z2n_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3w_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var tmp0 = this.c3w_1.g3w_1;
            this.m8_1 = 1;
            suspendResult = tmp0.l2d(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 25);
    this.g3w_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).g25 = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(PipelineContext$proceed$ref).h9 = function ($completion) {
    return this.g25($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.g25($completion);
    }, 0, 9, 25, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.p3w_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).q3b = function ($this$intercept, it, $completion) {
    var tmp = this.r3b($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SetupRequestContext$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.p3w_1(this.q3w_1.g2e_1, PipelineContext$proceed$ref_0(this.q3w_1), this);
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
  protoOf(SetupRequestContext$install$slambda).r3b = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.p3w_1, completion);
    i.q3w_1 = $this$intercept;
    i.r3w_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3b($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).s3w = function (client, handler) {
    var tmp = Phases_getInstance().a3k_1;
    client.s3a_1.k2e(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).f3k = function (client, handler) {
    return this.s3w(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.m1b(attachToClientEngineJob$lambda(requestJob));
    requestJob.m1b(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.c3l(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.b3x_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).f3x = function (request, proceed, $completion) {
    var tmp = this.g3x(request, proceed, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.f3x(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            this.e3x_1 = SupervisorJob(this.c3x_1.b3d_1);
            attachToClientEngineJob(this.e3x_1, ensureNotNull(this.b3x_1.y3k_1.r3a_1.z8(Key_instance)));
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 4;
            this.n8_1 = 3;
            this.c3x_1.b3d_1 = this.e3x_1;
            this.m8_1 = 2;
            suspendResult = this.d3x_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 6;
            this.m8_1 = 5;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              this.e3x_1.b1h(cause);
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 4:
            this.n8_1 = 6;
            var t = this.p8_1;
            this.e3x_1.c1h();
            throw t;
          case 5:
            this.n8_1 = 6;
            this.e3x_1.c1h();
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
  protoOf(HttpRequestLifecycle$lambda$slambda).g3x = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.b3x_1, completion);
    i.c3x_1 = request;
    i.d3x_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.f3x(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        // Inline function 'io.ktor.util.logging.trace' call
        var this_0 = get_LOGGER_4();
        if (get_isTraceEnabled(this_0)) {
          var tmp$ret$1 = 'Cancelling request because engine Job failed with error';
          this_0.g2f(tmp$ret$1, cause);
        }
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().f2f('Cancelling request because engine Job completed');
        $requestJob.c1h();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.v1d();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.h3x_1 = request;
    this.i3x_1 = retryCount;
    this.j3x_1 = response;
    this.k3x_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().vi(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).u3x = function (it, $completion) {
    var tmp = this.v3x(it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).i9 = function (p1, $completion) {
    return this.u3x(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = delay(this.t3x_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).v3x = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.t3x_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.u3x(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.s3e().s2q_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.x3x_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2n();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.md('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? new Long(0, 0) : retryAfter;
        tmp = compare(tmp0, b) >= 0 ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = compare(tmp0_0, b) <= 0 ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.c3y_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.d3y_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.e3y_1 = 0;
    this.f3y(3);
    this.g3y();
  }
  protoOf(HttpRequestRetryConfig).h3y = function () {
    var tmp = this.z3x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).i3y = function () {
    var tmp = this.a3y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).j3y = function () {
    var tmp = this.b3y_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).k3y = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.e3y_1 = maxRetries;
    this.z3x_1 = block;
  };
  protoOf(HttpRequestRetryConfig).l3y = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.e3y_1 = maxRetries;
    this.a3y_1 = block;
  };
  protoOf(HttpRequestRetryConfig).m3y = function (maxRetries, retryOnTimeout) {
    this.l3y(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).n3y = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.m3y(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.m3y.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).o3y = function (maxRetries) {
    this.k3y(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).f3y = function (maxRetries) {
    this.o3y(maxRetries);
    this.n3y(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).p3y = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.b3y_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).q3y = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(baseDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(maxDelayMs, new Long(0, 0)) > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(compare(randomizationMs, new Long(0, 0)) >= 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.p3y(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).g3y = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.q3y(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.q3y.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.r3y_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.w3x_1 = request;
    this.x3x_1 = response;
    this.y3x_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.s3y_1 = request;
    this.t3y_1 = response;
    this.u3y_1 = cause;
    this.v3y_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 26, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.z3k_1.h3y();
    var shouldRetryOnException = $this$createClientPlugin.z3k_1.i3y();
    var delayMillis = $this$createClientPlugin.z3k_1.j3y();
    var delay = $this$createClientPlugin.z3k_1.c3y_1;
    var maxRetries = $this$createClientPlugin.z3k_1.e3y_1;
    var modifyRequest = $this$createClientPlugin.z3k_1.d3y_1;
    $this$createClientPlugin.i3z(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.c3l(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.b3d_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.c1h();
      } else {
        subRequestJob.b1h(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.l3e(), call.x3b());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).j3z(request);
    var tmp = request.b3d_1;
    tmp.m1b(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.s3z_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).w3z = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.x3z($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).y3z = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.w3z(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          var tmp0_elvis_lhs = this.u3z_1.c3d_1.n28(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.s3z_1 : tmp0_elvis_lhs;
          this.u3z_1.c3d_1.p28(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).x3z = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.s3z_1, completion);
    i.t3z_1 = $this$onRequest;
    i.u3z_1 = request;
    i.v3z_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.w3z($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.h40_1 = $shouldRetry;
    this.i40_1 = $shouldRetryOnException;
    this.j40_1 = $maxRetries;
    this.k40_1 = $delayMillis;
    this.l40_1 = $modifyRequest;
    this.m40_1 = $this_createClientPlugin;
    this.n40_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).i3r = function ($this$on, request, $completion) {
    var tmp = this.j3r($this$on, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3r(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            this.r40_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p40_1.c3d_1.n28(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.y40_1 = tmp0_elvis_lhs == null ? this.h40_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.p40_1.c3d_1.n28(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.w40_1 = tmp1_elvis_lhs == null ? this.i40_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.p40_1.c3d_1.n28(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.x40_1 = tmp2_elvis_lhs == null ? this.j40_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.p40_1.c3d_1.n28(get_RetryDelayPerRequestAttributeKey());
            tmp_3.s40_1 = tmp3_elvis_lhs == null ? this.k40_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.p40_1.c3d_1.n28(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.z40_1 = tmp4_elvis_lhs == null ? this.l40_1 : tmp4_elvis_lhs;
            this.t40_1 = null;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.v40_1 = invoke$prepareRequest(this.p40_1);
            this.n8_1 = 5;
            if (!(this.t40_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.p40_1, this.t40_1.j3x_1, this.t40_1.k3x_1, this.t40_1.i3x_1);
              this.z40_1(modifyRequestContext, this.v40_1);
            }

            this.m8_1 = 2;
            suspendResult = this.o40_1.m3r(this.v40_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q40_1 = suspendResult;
            if (!invoke$shouldRetry(this.r40_1, this.x40_1, this.y40_1, this.q40_1)) {
              this.m8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.q40_1.x3b(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.r40_1 = this.r40_1 + 1 | 0;
            tmp_5.u40_1 = new HttpRetryEventData(this.v40_1, this.r40_1, this.q40_1.x3b(), null);
            this.n8_1 = 8;
            this.m8_1 = 6;
            continue $sm;
          case 4:
            this.n8_1 = 8;
            this.m8_1 = 9;
            continue $sm;
          case 5:
            this.n8_1 = 8;
            var tmp_6 = this.p8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.p8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.r40_1, this.x40_1, this.w40_1, this.v40_1, cause)) {
                throw cause;
              }
              this.r40_1 = this.r40_1 + 1 | 0;
              tmp_7.u40_1 = new HttpRetryEventData(this.v40_1, this.r40_1, null, cause);
              this.m8_1 = 6;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 6:
            this.n8_1 = 8;
            var retryData = this.u40_1;
            this.t40_1 = retryData;
            this.m40_1.y3k_1.y3a_1.t2v(get_HttpRequestRetryEvent(), this.t40_1);
            var delayContext = new HttpRetryDelayContext(this.t40_1.h3x_1, this.t40_1.j3x_1, this.t40_1.k3x_1);
            this.m8_1 = 7;
            suspendResult = this.n40_1(this.s40_1(delayContext, this.r40_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var this_0 = get_LOGGER_5();
            if (get_isTraceEnabled(this_0)) {
              this_0.f2f('Retrying request ' + this.p40_1.x3c_1.toString() + ' attempt: ' + this.r40_1);
            }

            this.m8_1 = 1;
            continue $sm;
          case 8:
            throw this.p8_1;
          case 9:
            return this.q40_1;
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
  protoOf(HttpRequestRetry$lambda$slambda_1).j3r = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.h40_1, this.i40_1, this.j40_1, this.k40_1, this.l40_1, this.m40_1, this.n40_1, completion);
    i.o40_1 = $this$on;
    i.p40_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3r($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e3z_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            if (get_isSaved(this.e3z_1)) {
              this.f3z_1 = this.e3z_1.r3e();
              this.m8_1 = 1;
              continue $sm;
            } else {
              this.g3z_1 = false;
              this.m8_1 = 4;
              continue $sm;
            }

          case 1:
            this.n8_1 = 5;
            this.m8_1 = 2;
            suspendResult = this.f3z_1.s1x(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h3z_1 = suspendResult;
            this.n8_1 = 6;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.h3z_1;
            this.n8_1 = 6;
            var this_0 = this.f3z_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().e2f('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.g3z_1 = tmp_0;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            return this.g3z_1;
          case 5:
            this.n8_1 = 6;
            var t = this.p8_1;
            var this_2 = this.f3z_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().e2f('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.p8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.n8_1 === 6) {
          throw e_1;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin_0('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().ob();
      var tmp_1 = !(null == null) ? typeof null === 'number' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_4 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_5 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_6;
      try {
        tmp_6 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_7;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_7 = null;
        } else {
          throw $p_0;
        }
        tmp_6 = tmp_7;
      }
      var tmp$ret$2_0 = tmp_6;
      var tmp$ret$1_0 = new TypeInfo(tmp_4, tmp_5, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_8 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_9 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ub(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_11;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_11 = null;
        } else {
          throw $p_1;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_1 = tmp_10;
      var tmp$ret$1_1 = new TypeInfo(tmp_8, tmp_9, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_13 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_14;
      try {
        tmp_14 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_15;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_15 = null;
        } else {
          throw $p_2;
        }
        tmp_14 = tmp_15;
      }
      var tmp$ret$2_2 = tmp_14;
      var tmp$ret$1_2 = new TypeInfo(tmp_12, tmp_13, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_16 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_17 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_18;
      try {
        tmp_18 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().pb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_19;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_19 = null;
        } else {
          throw $p_3;
        }
        tmp_18 = tmp_19;
      }
      var tmp$ret$2_3 = tmp_18;
      var tmp$ret$1_3 = new TypeInfo(tmp_16, tmp_17, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.i41_1 = $plugin;
    this.j41_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).q3b = function ($this$intercept, content, $completion) {
    var tmp = this.r3b($this$intercept, content, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpSend$Plugin$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp_0 = this.l41_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.l41_1)) + ', with Content-Type: ' + toString_0(contentType(this.k41_1.g2e_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.k41_1.g2e_1;
            var body = this.l41_1;
            if (body == null) {
              tmp0.a3d_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2 = null instanceof OutgoingContent;
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0.t3i(new TypeInfo(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.a3d_1 = body;
                tmp0.t3i(null);
              } else {
                tmp0.a3d_1 = body;
                var tmp_5 = getKClass(OutgoingContent);
                var tmp_6 = null instanceof OutgoingContent;
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_8;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_8 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0.t3i(new TypeInfo(tmp_5, tmp_6, tmp_7));
              }
            }

            var maxRetries = this.k41_1.g2e_1.c3d_1.n28(get_MaxRetriesPerRequestAttributeKey());
            var tmp_9;
            if (!(maxRetries == null) && maxRetries >= this.i41_1.m41_1) {
              var tmp_10;
              if (maxRetries < 2147483647) {
                tmp_10 = maxRetries + 1 | 0;
              } else {
                tmp_10 = maxRetries;
              }
              tmp_9 = tmp_10;
            } else {
              tmp_9 = this.i41_1.m41_1;
            }

            var maxSendCount = tmp_9;
            var realSender = new DefaultSender(maxSendCount, this.j41_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.i41_1.n41_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.m8_1 = 1;
            suspendResult = interceptedSender.o41(this.k41_1.g2e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.m8_1 = 2;
            suspendResult = this.k41_1.k2d(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.p8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).r3b = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.i41_1, this.j41_1, completion);
    i.k41_1 = $this$intercept;
    i.l41_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3b($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x41_1 = _this__u8e3s4;
    this.y41_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var tmp0_safe_receiver = this.x41_1.c42_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.x41_1.b42_1 >= this.x41_1.z41_1) {
              throw new SendCountExceedException('Max send count ' + this.x41_1.z41_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.x41_1.b42_1;
            this.x41_1.b42_1 = _unary__edvuaz + 1 | 0;
            this.m8_1 = 1;
            suspendResult = this.x41_1.a42_1.u3a_1.f2e(this.y41_1, this.y41_1.a3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.x41_1.c42_1 = call;
            return call;
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
  function Config() {
    this.d42_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    var tmp_1 = null instanceof HttpSend;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpSend), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.e42_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.e42_1;
  };
  protoOf(Plugin).f42 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.d42_1);
  };
  protoOf(Plugin).c3e = function (block) {
    return this.f42(block);
  };
  protoOf(Plugin).g42 = function (plugin, scope) {
    var tmp = Phases_getInstance().e3k_1;
    scope.s3a_1.k2e(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).d3e = function (plugin, scope) {
    return this.g42(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.h42_1 = interceptor;
    this.i42_1 = nextSender;
  }
  protoOf(InterceptedSender).o41 = function (requestBuilder, $completion) {
    return this.h42_1(this.i42_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.z41_1 = maxSendCount;
    this.a42_1 = client;
    this.b42_1 = 0;
    this.c42_1 = null;
  }
  protoOf(DefaultSender).o41 = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.m41_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n41_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).j42 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.n41_1.c1(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  var HttpTimeout;
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.k42(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.o42(requestTimeoutMillis);
    $this.p42(connectTimeoutMillis);
    $this.q42(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutConfig_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutConfig)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || compare(value, new Long(0, 0)) > 0)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeoutConfig.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.r42_1 = new Long(-1, 2147483647);
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    var tmp_1 = null instanceof HttpTimeoutConfig;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.s42_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).o42 = function (value) {
    this.l42_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).t42 = function () {
    return this.l42_1;
  };
  protoOf(HttpTimeoutConfig).p42 = function (value) {
    this.m42_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).u42 = function () {
    return this.m42_1;
  };
  protoOf(HttpTimeoutConfig).q42 = function (value) {
    this.n42_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).v42 = function () {
    return this.n42_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!equals(this.l42_1, other.l42_1))
      return false;
    if (!equals(this.m42_1, other.m42_1))
      return false;
    if (!equals(this.n42_1, other.n42_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l42_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.m42_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.n42_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_11();
    this.l42_1 = new Long(0, 0);
    this.m42_1 = new Long(0, 0);
    this.n42_1 = new Long(0, 0);
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.x3c_1.u2s();
    var tmp0_safe_receiver = request.w42(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t42());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis, cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', cause, this);
    captureStack(this, HttpRequestTimeoutException);
    this.x42_1 = url;
    this.y42_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).l1h = function () {
    return new HttpRequestTimeoutException(this.x42_1, this.y42_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.x3c_1.k2r())) {
      var tmp_1 = _this__u8e3s4.a3d_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.a3d_1;
      tmp = !(tmp_2 instanceof SSEClientContent);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function applyRequestTimeout(_this__u8e3s4, request, requestTimeout) {
    _init_properties_HttpTimeout_kt__pucqrr();
    if (requestTimeout == null || equals(requestTimeout, new Long(-1, 2147483647)))
      return Unit_instance;
    var executionContext = request.b3d_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.b3d_1;
    tmp_0.m1b(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 27);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.z3k_1.t42();
    var connectTimeoutMillis = $this$createClientPlugin.z3k_1.u42();
    var socketTimeoutMillis = $this$createClientPlugin.z3k_1.v42();
    var tmp = Send_instance;
    $this$createClientPlugin.c3l(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.h43_1 = $connectTimeoutMillis;
    this.i43_1 = $socketTimeoutMillis;
    this.j43_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).i3r = function ($this$on, request, $completion) {
    var tmp = this.j3r($this$on, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpTimeout$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3r(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.l43_1);
            var configuration = this.l43_1.w42(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.j43_1, this.h43_1, this.i43_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.l43_1.k42(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.u42();
              tmp0_safe_receiver.p42(tmp0_elvis_lhs == null ? this.h43_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.v42();
              tmp0_safe_receiver.q42(tmp1_elvis_lhs == null ? this.i43_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.t42();
                tmp0_safe_receiver.o42(tmp2_elvis_lhs == null ? this.j43_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.k43_1, this.l43_1, tmp0_safe_receiver.t42());
              }
            }

            this.m8_1 = 1;
            suspendResult = this.k43_1.m3r(this.l43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpTimeout$lambda$slambda).j3r = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.h43_1, this.i43_1, this.j43_1, completion);
    i.k43_1 = $this$on;
    i.l43_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3r($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.u43_1 = $requestTimeout;
    this.v43_1 = $request;
    this.w43_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(applyRequestTimeout$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.u43_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.v43_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.f2f('Request timeout: ' + this.v43_1.x3c_1.toString());
            }

            cancel_2(this.w43_1, ensureNotNull(cause.message), cause);
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
  protoOf(applyRequestTimeout$slambda).m26 = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.u43_1, this.v43_1, this.w43_1, completion);
    i.x43_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.u1b();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
      var tmp = HttpTimeoutConfig$_init_$ref_dl1k0m();
      HttpTimeout = createClientPlugin_0('HttpTimeout', tmp, HttpTimeout$lambda);
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_7() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.n1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.q3e().m3e().o28(get_RESPONSE_BODY_SAVED());
  }
  function tryCancelBody(_this__u8e3s4, e) {
    e = e === VOID ? null : e;
    _init_properties_SaveBody_kt__lbc3fj();
    var byteChannel = _this__u8e3s4.r3e();
    if (!byteChannel.o1x()) {
      try {
        byteChannel.u1x(e);
      } catch ($p) {
        if ($p instanceof CancellationException) {
          var cause = $p;
          throw cause;
        } else {
          if ($p instanceof Exception) {
            var cause_0 = $p;
            get_LOGGER_7().e2f('Failed to cancel response body', cause_0);
          } else {
            throw $p;
          }
        }
      }
    }
  }
  function SaveBodyPluginConfig() {
    this.y43_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 28);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_2().u3k_1;
    $this$createClientPlugin.y3k_1.v3a_1.k2e(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).r3k = function ($this$intercept, response, $completion) {
    var tmp = this.s3k($this$intercept, response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SaveBody$lambda$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.r3k(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 7;
            this.m44_1 = this.i44_1.q3e();
            this.j44_1 = this.m44_1.m3e();
            if (this.j44_1.o28(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('Skipping body saving for ' + this.m44_1.l3e().z3e().toString());
              }
              return Unit_instance;
            }

            this.k44_1 = null;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 4;
            this.n8_1 = 3;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.f2f('Saving body for ' + this.m44_1.l3e().z3e().toString());
            }

            this.m8_1 = 2;
            suspendResult = save(this.m44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l44_1 = suspendResult.x3b();
            this.n8_1 = 7;
            this.m8_1 = 5;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var e = this.p8_1;
              var tmp_1 = this;
              this.k44_1 = e;
              throw e;
            } else {
              throw this.p8_1;
            }

          case 4:
            this.n8_1 = 7;
            var t = this.p8_1;
            tryCancelBody(this.i44_1, this.k44_1);
            throw t;
          case 5:
            var tmp_2 = this.l44_1;
            this.n8_1 = 7;
            tryCancelBody(this.i44_1, this.k44_1);
            var savedResponse = tmp_2;
            this.j44_1.p28(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.m8_1 = 6;
            suspendResult = this.h44_1.k2d(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 7) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).s3k = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.h44_1 = $this$intercept;
    i.i44_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.r3k($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 29, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.z3k_1.y43_1) {
      get_LOGGER_7().d2f('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().d2f('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(Unit);
      var tmp_4 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_7 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_7, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.n44_1 = hook;
    this.o44_1 = handler;
  }
  protoOf(HookHandler).e3d = function (client) {
    this.n44_1.f3k(client, this.o44_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.x3k_1 = key;
    this.y3k_1 = client;
    this.z3k_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a3l_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.b3l_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).i3z = function (block) {
    this.c3l(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).k3t = function (block) {
    this.c3l(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).c3l = function (hook, handler) {
    this.a3l_1.c1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.p44_1 = key;
    this.q44_1 = config;
    this.r44_1 = body;
    var tmp = this;
    tmp.s44_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).e3d = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.p44_1, scope, this.q44_1);
    // Inline function 'kotlin.apply' call
    this.r44_1(tmp0);
    var pluginBuilder = tmp0;
    this.s44_1 = pluginBuilder.b3l_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.a3l_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.e3d(scope);
    }
  };
  protoOf(ClientPluginInstance).c4 = function () {
    this.s44_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.b45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).q3b = function ($this$intercept, it, $completion) {
    var tmp = this.r3b($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SetupRequest$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.b45_1(this.c45_1.g2e_1, this);
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
  protoOf(SetupRequest$install$slambda).r3b = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.b45_1, completion);
    i.c45_1 = $this$intercept;
    i.d45_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3b($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).e45 = function (client, handler) {
    var tmp = Phases_getInstance().a3k_1;
    client.s3a_1.k2e(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).f3k = function (client, handler) {
    return this.e45(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.k3r_1 = httpSendSender;
    this.l3r_1 = coroutineContext;
  }
  protoOf(Sender_0).k1a = function () {
    return this.l3r_1;
  };
  protoOf(Sender_0).m3r = function (requestBuilder, $completion) {
    return this.k3r_1.o41(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.n45_1 = $handler;
    this.o45_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).r45 = function ($this$intercept, request, $completion) {
    var tmp = this.s45($this$intercept, request, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Send$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.r45(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.n45_1(new Sender_0(this.p45_1, this.o45_1.r3a_1), this.q45_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Send$install$slambda).s45 = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.n45_1, this.o45_1, completion);
    i.p45_1 = $this$intercept;
    i.q45_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.r45($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).t45 = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.j42(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).f3k = function (client, handler) {
    return this.t45(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.u45_1 = createConfiguration;
    this.v45_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    var tmp_1 = null instanceof ClientPluginInstance;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().ib(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.w45_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.w45_1;
  };
  protoOf(ClientPluginImpl).x45 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.u45_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.w45_1, config, this.v45_1);
  };
  protoOf(ClientPluginImpl).c3e = function (block) {
    return this.x45(block);
  };
  protoOf(ClientPluginImpl).y45 = function (plugin, scope) {
    plugin.e3d(scope);
  };
  protoOf(ClientPluginImpl).d3e = function (plugin, scope) {
    return this.y45(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.h46_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).q3b = function ($this$intercept, it, $completion) {
    var tmp = this.r3b($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RequestHook$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.h46_1(new OnRequestContext(), this.i46_1.g2e_1, this.i46_1.j2d(), this);
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
  protoOf(RequestHook$install$slambda).r3b = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.h46_1, completion);
    i.i46_1 = $this$intercept;
    i.j46_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3b($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).k46 = function (client, handler) {
    var tmp = Phases_getInstance().b3k_1;
    client.s3a_1.k2e(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).f3k = function (client, handler) {
    return this.k46(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.t46_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).l3c = function ($this$intercept, it, $completion) {
    var tmp = this.m3c($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var _destruct__k2r9zo = this.u46_1.j2d();
            this.w46_1 = _destruct__k2r9zo.bg();
            var content = _destruct__k2r9zo.cg();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.m8_1 = 1;
            suspendResult = this.t46_1(new TransformResponseBodyContext(), this.u46_1.g2e_1.x3b(), content, this.w46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.w46_1.x2e_1.qa(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.w46_1.toString());
            }

            this.m8_1 = 2;
            suspendResult = this.u46_1.k2d(new HttpResponseContainer(this.w46_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(TransformResponseBodyHook$install$slambda).m3c = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.t46_1, completion);
    i.u46_1 = $this$intercept;
    i.v46_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3c($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).x46 = function (client, handler) {
    var tmp = Phases_getInstance_1().x3d_1;
    client.t3a_1.k2e(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).f3k = function (client, handler) {
    return this.x46(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function SSEClientContent() {
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.y46_1 = delegate;
    this.z46_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).t32 = function (frame, $completion) {
    return this.y46_1.t32(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).j1x = function ($completion) {
    return this.y46_1.j1x($completion);
  };
  protoOf(DefaultClientWebSocketSession).p32 = function (_set____db54di) {
    this.y46_1.p32(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).q32 = function () {
    return this.y46_1.q32();
  };
  protoOf(DefaultClientWebSocketSession).r32 = function () {
    return this.y46_1.r32();
  };
  protoOf(DefaultClientWebSocketSession).s32 = function () {
    return this.y46_1.s32();
  };
  protoOf(DefaultClientWebSocketSession).k1a = function () {
    return this.y46_1.k1a();
  };
  protoOf(DefaultClientWebSocketSession).o32 = function (negotiatedExtensions) {
    this.y46_1.o32(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.a47_1 = session;
    this.b47_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).t32 = function (frame, $completion) {
    return this.a47_1.t32(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).j1x = function ($completion) {
    return this.a47_1.j1x($completion);
  };
  protoOf(DelegatingClientWebSocketSession).p32 = function (_set____db54di) {
    this.a47_1.p32(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).q32 = function () {
    return this.a47_1.q32();
  };
  protoOf(DelegatingClientWebSocketSession).r32 = function () {
    return this.a47_1.r32();
  };
  protoOf(DelegatingClientWebSocketSession).s32 = function () {
    return this.a47_1.s32();
  };
  protoOf(DelegatingClientWebSocketSession).k1a = function () {
    return this.a47_1.k1a();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().mi(nonce));
    tmp.e47_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.a2b('Upgrade', 'websocket');
    this_1.a2b('Connection', 'Upgrade');
    this_1.a2b('Sec-WebSocket-Key', this.e47_1);
    this_1.a2b('Sec-WebSocket-Version', '13');
    tmp_0.f47_1 = this_1.m2j();
  }
  protoOf(WebSocketContent).t2n = function () {
    return this.f47_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_8() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_7;
  }
  var LOGGER_7;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.o47_1 = $extensionsSupported;
    this.p47_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).q3b = function ($this$intercept, it, $completion) {
    var tmp = this.r3b($this$intercept, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(WebSockets$Plugin$install$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            if (!isWebsocket(this.q47_1.g2e_1.x3c_1.k2r())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('Skipping WebSocket plugin for non-websocket request: ' + this.q47_1.g2e_1.x3c_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.f2f('Sending WebSocket request ' + this.q47_1.g2e_1.x3c_1.toString());
            }

            this.q47_1.g2e_1.k42(WebSocketCapability_instance, Unit_instance);
            if (this.o47_1) {
              installExtensions(this.p47_1, this.q47_1.g2e_1);
            }

            this.q47_1.g2e_1.c3d_1.q28(get_WEBSOCKETS_KEY(), this.p47_1);
            this.m8_1 = 1;
            suspendResult = this.q47_1.k2d(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).r3b = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.o47_1, this.p47_1, completion);
    i.q47_1 = $this$intercept;
    i.r47_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3b($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.a48_1 = $plugin;
    this.b48_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).l3c = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3c($this$intercept, _destruct__k2r9zo, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3c(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var info = this.d48_1.bg();
            var session = this.d48_1.cg();
            var response = this.c48_1.g2e_1.x3b();
            var status = response.s3e();
            var requestContent = get_request(response).a3f();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.f2f('Skipping non-websocket response from ' + this.c48_1.g2e_1.l3e().z3e().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().p2o_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().p2o_1.s2q_1 + ' but was ' + status.s2q_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.f2f('Receive websocket session from ' + this.c48_1.g2e_1.l3e().z3e().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.a48_1.f48_1, new Long(2147483647, 0))) {
              session.p32(this.a48_1.f48_1);
            }

            var tmp_0;
            if (info.x2e_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.a48_1.j48(session);
              var clientSession = new DefaultClientWebSocketSession(this.c48_1.g2e_1, defaultSession);
              var tmp_1;
              if (this.b48_1) {
                tmp_1 = completeNegotiation(this.a48_1, this.c48_1.g2e_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.o32(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.c48_1.g2e_1, session);
            }

            var clientSession_0 = tmp_0;
            this.m8_1 = 1;
            suspendResult = this.c48_1.k2d(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).m3c = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.a48_1, this.b48_1, completion);
    i.c48_1 = $this$intercept;
    i.d48_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3c($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.g48_1.m2j();
    context.c3d_1.p28(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.w39();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.x3b().t2n().md('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.m3e().m28(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.x39(serverExtensions)) {
        destination.c1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.k48_1 = new WebSocketExtensionsConfig();
    this.l48_1 = new WebSocketChannelsConfig();
    this.m48_1 = new Long(0, 0);
    this.n48_1 = new Long(2147483647, 0);
    this.o48_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    var tmp_1 = null instanceof WebSockets;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(WebSockets), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.p48_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.p48_1;
  };
  protoOf(Plugin_0).q48 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.m48_1, config.n48_1, config.k48_1, config.o48_1, config.l48_1);
  };
  protoOf(Plugin_0).c3e = function (block) {
    return this.q48(block);
  };
  protoOf(Plugin_0).r48 = function (plugin, scope) {
    var extensionsSupported = scope.m3a_1.e3i().j2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().d3k_1;
    scope.s3a_1.k2e(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().x3d_1;
    scope.t3a_1.k2e(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).d3e = function (plugin, scope) {
    return this.r48(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().u32_1 : channelsConfig;
    this.e48_1 = pingIntervalMillis;
    this.f48_1 = maxFrameSize;
    this.g48_1 = extensionsConfig;
    this.h48_1 = contentConverter;
    this.i48_1 = channelsConfig;
  }
  protoOf(WebSockets).j48 = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.e48_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.e48_1, timeoutMillis, this.i48_1);
    this_1.p32(this.f48_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      var tmp_0 = !(null == null) ? isInterface(null, KtList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(WebSockets);
      var tmp_4 = null instanceof WebSockets;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.t48_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.u48_1 = call;
    this.v48_1 = data.y3h_1;
    this.w48_1 = data.x3h_1;
    this.x48_1 = data.a3i_1;
    this.y48_1 = data.z3h_1;
    this.z48_1 = data.c3i_1;
  }
  protoOf(DefaultHttpRequest).q3e = function () {
    return this.u48_1;
  };
  protoOf(DefaultHttpRequest).k1a = function () {
    return this.q3e().k1a();
  };
  protoOf(DefaultHttpRequest).y3e = function () {
    return this.v48_1;
  };
  protoOf(DefaultHttpRequest).z3e = function () {
    return this.w48_1;
  };
  protoOf(DefaultHttpRequest).a3f = function () {
    return this.x48_1;
  };
  protoOf(DefaultHttpRequest).t2n = function () {
    return this.y48_1;
  };
  protoOf(DefaultHttpRequest).m3e = function () {
    return this.z48_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.x3c_1 = new URLBuilder();
    this.y3c_1 = Companion_getInstance_2().u2n_1;
    this.z3c_1 = new HeadersBuilder();
    this.a3d_1 = EmptyContent_getInstance();
    this.b3d_1 = SupervisorJob();
    this.c3d_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).t2n = function () {
    return this.z3c_1;
  };
  protoOf(HttpRequestBuilder).t3i = function (value) {
    if (!(value == null)) {
      this.c3d_1.p28(get_BodyTypeAttributeKey(), value);
    } else {
      this.c3d_1.r28(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).a49 = function () {
    return this.c3d_1.n28(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).m2j = function () {
    var tmp = this.x3c_1.m2j();
    var tmp_0 = this.y3c_1;
    var tmp_1 = this.z3c_1.m2j();
    var tmp_2 = this.a3d_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.a3d_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.b3d_1, this.c3d_1);
  };
  protoOf(HttpRequestBuilder).s3i = function (builder) {
    this.b3d_1 = builder.b3d_1;
    return this.j3z(builder);
  };
  protoOf(HttpRequestBuilder).j3z = function (builder) {
    this.y3c_1 = builder.y3c_1;
    this.a3d_1 = builder.a3d_1;
    this.t3i(builder.a49());
    takeFrom_0(this.x3c_1, builder.x3c_1);
    this.x3c_1.f2r_1 = this.x3c_1.f2r_1;
    appendAll(this.z3c_1, builder.z3c_1);
    putAll(this.c3d_1, builder.c3d_1);
    return this;
  };
  protoOf(HttpRequestBuilder).k42 = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.c3d_1.s28(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.z2(key, capability);
  };
  protoOf(HttpRequestBuilder).w42 = function (key) {
    var tmp0_safe_receiver = this.c3d_1.n28(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s2(key);
  };
  function url(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = url$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpRequest_kt__813lx1();
    set(_this__u8e3s4.x3c_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.t2n();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.x3h_1 = url;
    this.y3h_1 = method;
    this.z3h_1 = headers;
    this.a3i_1 = body;
    this.b3i_1 = executionContext;
    this.c3i_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.c3i_1.n28(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2();
    tmp.d3i_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.x3h_1.toString() + ', method=' + this.y3h_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.c3f_1 = statusCode;
    this.d3f_1 = requestTime;
    this.e3f_1 = headers;
    this.f3f_1 = version;
    this.g3f_1 = body;
    this.h3f_1 = callContext;
    this.i3f_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.c3f_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.a3i_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url$lambda(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    return Unit_instance;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      var tmp_0 = !(null == null) ? isInterface(null, ResponseAdapter) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.a3k_1 = new PipelinePhase('Before');
    this.b3k_1 = new PipelinePhase('State');
    this.c3k_1 = new PipelinePhase('Transform');
    this.d3k_1 = new PipelinePhase('Render');
    this.e3k_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().a3k_1, Phases_getInstance().b3k_1, Phases_getInstance().c3k_1, Phases_getInstance().d3k_1, Phases_getInstance().e3k_1]);
    this.j49_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).e2e = function () {
    return this.j49_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.f3d_1 = new PipelinePhase('Before');
    this.g3d_1 = new PipelinePhase('State');
    this.h3d_1 = new PipelinePhase('Monitoring');
    this.i3d_1 = new PipelinePhase('Engine');
    this.j3d_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().f3d_1, Phases_getInstance_0().g3d_1, Phases_getInstance_0().h3d_1, Phases_getInstance_0().i3d_1, Phases_getInstance_0().j3d_1]);
    this.r49_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).e2e = function () {
    return this.r49_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      var tmp_0 = null instanceof TypeInfo;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_RN_BYTES() {
    _init_properties_FormDataContent_kt__7tvkbr();
    return RN_BYTES;
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    ByteArrayContent.call(this);
    this.t49_1 = formData;
    this.u49_1 = toByteArray_0(formUrlEncode(this.t49_1));
    this.v49_1 = fromInt(this.u49_1.length);
    this.w49_1 = withCharset(Application_getInstance().f2h_1, Charsets_getInstance().k27_1);
  }
  protoOf(FormDataContent).h2t = function () {
    return this.v49_1;
  };
  protoOf(FormDataContent).g2t = function () {
    return this.w49_1;
  };
  protoOf(FormDataContent).i2t = function () {
    return this.u49_1;
  };
  function MultiPartFormDataContent$rawParts$lambda($bytes) {
    return function () {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      var builder = new Buffer();
      writeFully(builder, $bytes);
      return builder;
    };
  }
  function $writeToCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4a_1 = _this__u8e3s4;
    this.g4a_1 = channel;
  }
  protoOf($writeToCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 25;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 21;
            this.n8_1 = 20;
            this.n4a_1 = this.f4a_1.w4a_1.t();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!this.n4a_1.u()) {
              this.m8_1 = 18;
              continue $sm;
            }

            this.m4a_1 = this.n4a_1.v();
            this.m8_1 = 3;
            suspendResult = writeFully_0(this.g4a_1, this.f4a_1.s4a_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m8_1 = 4;
            suspendResult = writeFully_0(this.g4a_1, this.m4a_1.y4a_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 5;
            suspendResult = writeFully_0(this.g4a_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.m4a_1;
            if (tmp0_subject instanceof InputPart) {
              this.l4a_1 = this.m4a_1.f4b_1();
              this.m8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.m8_1 = 6;
                suspendResult = copyTo_0(this.m4a_1.c4b_1(), this.g4a_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 6:
            this.i4a_1 = suspendResult;
            this.m8_1 = 16;
            continue $sm;
          case 7:
            this.k4a_1 = this.l4a_1;
            this.j4a_1 = null;
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 9;
            continue $sm;
          case 9:
            this.n8_1 = 13;
            this.n8_1 = 12;
            var input = this.k4a_1;
            this.m8_1 = 10;
            suspendResult = copyTo_1(input, this.g4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.m8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.n8_1 = 20;
            closeFinally(this.k4a_1, this.j4a_1);
            this.m8_1 = 15;
            continue $sm;
          case 12:
            this.n8_1 = 13;
            var tmp_2 = this.p8_1;
            if (tmp_2 instanceof Error) {
              var e = this.p8_1;
              var tmp_3 = this;
              this.j4a_1 = e;
              throw e;
            } else {
              throw this.p8_1;
            }

          case 13:
            this.n8_1 = 20;
            var t = this.p8_1;
            closeFinally(this.k4a_1, this.j4a_1);
            throw t;
          case 14:
            this.n8_1 = 20;
            closeFinally(this.k4a_1, this.j4a_1);
            if (false) {
              this.m8_1 = 7;
              continue $sm;
            }

            this.m8_1 = 15;
            continue $sm;
          case 15:
            this.i4a_1 = Unit_instance;
            this.m8_1 = 16;
            continue $sm;
          case 16:
            this.m8_1 = 17;
            suspendResult = writeFully_0(this.g4a_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.m8_1 = 2;
            continue $sm;
          case 18:
            this.m8_1 = 19;
            suspendResult = writeFully_0(this.g4a_1, this.f4a_1.t4a_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.n8_1 = 25;
            this.m8_1 = 23;
            continue $sm;
          case 20:
            this.n8_1 = 21;
            var tmp_4 = this.p8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.p8_1;
              close(this.g4a_1, cause);
              this.n8_1 = 25;
              this.m8_1 = 23;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 21:
            this.n8_1 = 25;
            this.h4a_1 = this.p8_1;
            this.m8_1 = 22;
            suspendResult = this.g4a_1.t1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.h4a_1;
          case 23:
            this.n8_1 = 25;
            this.m8_1 = 24;
            suspendResult = this.g4a_1.t1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 25) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().i2i_1.i2j('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.p4a_1 = parts;
    this.q4a_1 = boundary;
    this.r4a_1 = contentType;
    this.s4a_1 = toByteArray_0('--' + this.q4a_1 + '\r\n');
    this.t4a_1 = toByteArray_0('--' + this.q4a_1 + '--\r\n');
    this.u4a_1 = this.t4a_1.length;
    this.v4a_1 = imul(get_RN_BYTES().length, 2) + this.s4a_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.p4a_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.b2v_1.q2a().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.b2v_1.md('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.v4a_1;
          tmp_1 = add(bodySize, fromInt(other));
        }
        var tmp3_safe_receiver = tmp_1;
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other_0 = headers.length;
          tmp_2 = add(tmp3_safe_receiver, fromInt(other_0));
        }
        var size = tmp_2;
        tmp_0 = new ChannelPart(headers, item.l4b_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.v4a_1;
            tmp_3 = add(bodySize, fromInt(other_1));
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_2 = headers_0.length;
            tmp_4 = add(tmp5_safe_receiver, fromInt(other_2));
          }
          var size_0 = tmp_4;
          tmp_0 = new InputPart(headers_0, item.t2u_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.n2u_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.v4a_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.v4a_1;
                tmp_5 = add(bodySize, fromInt(other_3));
              }
              var tmp7_safe_receiver = tmp_5;
              var tmp_6;
              if (tmp7_safe_receiver == null) {
                tmp_6 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_4 = headers_2.length;
                tmp_6 = add(tmp7_safe_receiver, fromInt(other_4));
              }
              var size_2 = tmp_6;
              tmp_0 = new ChannelPart(headers_2, item.z2u_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.c1(tmp$ret$2);
    }
    tmp.w4a_1 = destination;
    this.x4a_1 = null;
    var rawLength = new Long(0, 0);
    var _iterator__ex2g4s_1 = this.w4a_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.z4a_1;
      if (size_3 == null) {
        rawLength = null;
        break $l$loop;
      }
      var tmp0_safe_receiver_0 = rawLength;
      rawLength = tmp0_safe_receiver_0 == null ? null : add(tmp0_safe_receiver_0, size_3);
    }
    if (!(rawLength == null)) {
      var tmp0 = rawLength;
      // Inline function 'kotlin.Long.plus' call
      var other_5 = this.u4a_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.x4a_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).g2t = function () {
    return this.r4a_1;
  };
  protoOf(MultiPartFormDataContent).h2t = function () {
    return this.x4a_1;
  };
  protoOf(MultiPartFormDataContent).i2v = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function generateBoundary() {
    _init_properties_FormDataContent_kt__7tvkbr();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.q(toString_1(Default_getInstance().fg(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.f4b_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.c4b_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.y4a_1 = headers;
    this.z4a_1 = size;
  }
  function copyTo_1(_this__u8e3s4, channel, $completion) {
    return writePacket(channel, _this__u8e3s4, $completion);
  }
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function _init_properties_FormDataContent_kt__7tvkbr() {
    if (!properties_initialized_FormDataContent_kt_w3e0rf) {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      RN_BYTES = toByteArray_0('\r\n');
    }
  }
  function FormBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m4b_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).n4b = function (key, value, headers) {
    var tmp0 = this.m4b_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).o4b = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().o2n_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.n4b(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.n4b.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).p4b = function (key, value, headers) {
    var tmp0 = this.m4b_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).q4b = function () {
    return this.m4b_1;
  };
  function formData(values) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var element = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.bg();
      var value = element.cg();
      var headers = element.u4b();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.a2b('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.b2b(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.m2j());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.m2j());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.m2j());
          } else {
            if (isByteArray(value)) {
              partHeaders.a2b('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.m2j());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.a2b('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.m2j());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.x4b_1;
                  if (!(size == null)) {
                    partHeaders.a2b('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.y4b_1, formData$lambda_6, partHeaders.m2j());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.v4b_1;
                    if (!(size_0 == null)) {
                      partHeaders.a2b('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.w4b_1, partHeaders.m2j());
                  } else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unknown form content type: ' + toString(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
      var part = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      result.c1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_5().o2n_1 : headers;
    this.r4b_1 = key;
    this.s4b_1 = value;
    this.t4b_1 = headers;
  }
  protoOf(FormPart).bg = function () {
    return this.r4b_1;
  };
  protoOf(FormPart).cg = function () {
    return this.s4b_1;
  };
  protoOf(FormPart).u4b = function () {
    return this.t4b_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.r4b_1 + ', value=' + toString(this.s4b_1) + ', headers=' + toString(this.t4b_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.r4b_1);
    result = imul(result, 31) + hashCode(this.s4b_1) | 0;
    result = imul(result, 31) + hashCode(this.t4b_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.r4b_1 === other.r4b_1))
      return false;
    if (!equals(this.s4b_1, other.s4b_1))
      return false;
    if (!equals(this.t4b_1, other.t4b_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
  }
  function quoteForMultipart(_this__u8e3s4) {
    return isQuoted(_this__u8e3s4) ? _this__u8e3s4 : quote(_this__u8e3s4);
  }
  function formData$lambda() {
    return Unit_instance;
  }
  function formData$lambda_0() {
    return Unit_instance;
  }
  function formData$lambda_1() {
    return Unit_instance;
  }
  function formData$lambda_2($value) {
    return function () {
      return ByteReadPacket($value);
    };
  }
  function formData$lambda_3() {
    return Unit_instance;
  }
  function formData$lambda_4($value) {
    return function () {
      return $value.d18();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.c4();
      return Unit_instance;
    };
  }
  function formData$lambda_6() {
    return Unit_instance;
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.t2n().a2b(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.z4b_1 = call;
    this.a4c_1 = responseData.h3f_1;
    this.b4c_1 = responseData.c3f_1;
    this.c4c_1 = responseData.f3f_1;
    this.d4c_1 = responseData.d3f_1;
    this.e4c_1 = responseData.i3f_1;
    var tmp = this;
    var tmp_0 = responseData.g3f_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.f4c_1 = tmp0_elvis_lhs == null ? Companion_getInstance().q1z_1 : tmp0_elvis_lhs;
    this.g4c_1 = responseData.e3f_1;
  }
  protoOf(DefaultHttpResponse).q3e = function () {
    return this.z4b_1;
  };
  protoOf(DefaultHttpResponse).k1a = function () {
    return this.a4c_1;
  };
  protoOf(DefaultHttpResponse).s3e = function () {
    return this.b4c_1;
  };
  protoOf(DefaultHttpResponse).t3e = function () {
    return this.c4c_1;
  };
  protoOf(DefaultHttpResponse).u3e = function () {
    return this.d4c_1;
  };
  protoOf(DefaultHttpResponse).v3e = function () {
    return this.e4c_1;
  };
  protoOf(DefaultHttpResponse).r3e = function () {
    return this.f4c_1;
  };
  protoOf(DefaultHttpResponse).t2n = function () {
    return this.g4c_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).z3e().toString() + ', ' + this.s3e().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.q3e().l3e();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().k27_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p4c_1 = _this__u8e3s4;
    this.q4c_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.p4c_1);
            var originCharset = tmp0_elvis_lhs == null ? this.q4c_1 : tmp0_elvis_lhs;
            this.r4c_1 = originCharset.b28();
            var this_0 = this.p4c_1;
            this.m8_1 = 1;
            var tmp_0 = this_0.q3e();
            var tmp_1 = getKClass(Source);
            var tmp_2 = !(null == null) ? isInterface(null, Source) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.p3e(new TypeInfo(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.r4c_1, input);
          case 2:
            throw this.p8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.n8_1 === 2) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.v3d_1 = new PipelinePhase('Receive');
    this.w3d_1 = new PipelinePhase('Parse');
    this.x3d_1 = new PipelinePhase('Transform');
    this.y3d_1 = new PipelinePhase('State');
    this.z3d_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().v3d_1, Phases_getInstance_1().w3d_1, Phases_getInstance_1().x3d_1, Phases_getInstance_1().y3d_1, Phases_getInstance_1().z3d_1]);
    this.z4c_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).e2e = function () {
    return this.z4c_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.u3k_1 = new PipelinePhase('Before');
    this.v3k_1 = new PipelinePhase('State');
    this.w3k_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().u3k_1, Phases_getInstance_2().v3k_1, Phases_getInstance_2().w3k_1]);
    this.h4d_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).e2e = function () {
    return this.h4d_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.u3f_1 = expectedType;
    this.v3f_1 = response;
  }
  protoOf(HttpResponseContainer).bg = function () {
    return this.u3f_1;
  };
  protoOf(HttpResponseContainer).cg = function () {
    return this.v3f_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.u3f_1.toString() + ', response=' + toString(this.v3f_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.u3f_1.hashCode();
    result = imul(result, 31) + hashCode(this.v3f_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.u3f_1.equals(other.u3f_1))
      return false;
    if (!equals(this.v3f_1, other.v3f_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q4d_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 7;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 6;
            var builder = (new HttpRequestBuilder()).s3i(this.q4d_1.u4d_1);
            this.m8_1 = 2;
            suspendResult = this.q4d_1.v4d_1.a3e(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t4d_1 = suspendResult;
            this.m8_1 = 3;
            suspendResult = save(this.t4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.s4d_1 = suspendResult.x3b();
            this.m8_1 = 4;
            suspendResult = this.q4d_1.w4d(this.t4d_1.x3b(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.s4d_1;
          case 5:
            return this.r4d_1;
          case 6:
            this.n8_1 = 7;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.p8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.p8_1;
            }

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
  function HttpStatement(builder, client) {
    this.u4d_1 = builder;
    this.v4d_1 = client;
  }
  protoOf(HttpStatement).x4d = function ($completion) {
    return this.y4d($completion);
  };
  protoOf(HttpStatement).y4d = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(HttpStatement).w4d = function (_this__u8e3s4, cause, $completion) {
    var tmp = get_job(_this__u8e3s4.k1a());
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    // Inline function 'kotlin.runCatching' call
    var tmp_0;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = engineContentForCleanup(_this__u8e3s4);
      tmp_0 = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var this_0 = tmp_0;
    var content = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    if (cause == null) {
      var contentIsClosedForRead = (content == null ? null : content.o1x()) === true;
      var contentCloseCause = content == null ? null : content.z1v();
      if (contentIsClosedForRead && contentCloseCause == null) {
        job.c1h();
      } else {
        // Inline function 'io.ktor.client.statement.toCancellationException' call
        var message = 'Response body was abandoned';
        var tmp0_elvis_lhs = contentCloseCause instanceof CancellationException ? contentCloseCause : null;
        var tmp$ret$5 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(message, contentCloseCause) : tmp0_elvis_lhs;
        job.t1b(tmp$ret$5);
      }
    } else {
      // Inline function 'io.ktor.client.statement.toCancellationException' call
      var message_0 = 'Exception occurred during request execution';
      var tmp0_elvis_lhs_0 = cause instanceof CancellationException ? cause : null;
      var tmp$ret$6 = tmp0_elvis_lhs_0 == null ? CancellationException_init_$Create$(message_0, cause) : tmp0_elvis_lhs_0;
      job.t1b(tmp$ret$6);
    }
    // Inline function 'kotlin.runCatching' call
    var tmp_2;
    try {
      var tmp_3;
      if (content == null) {
        tmp_3 = null;
      } else {
        cancel_1(content);
        tmp_3 = Unit_instance;
      }
      // Inline function 'kotlin.Companion.success' call
      var value_0 = tmp_3;
      tmp_2 = _Result___init__impl__xyqfz8(value_0);
    } catch ($p_0) {
      var tmp_4;
      if ($p_0 instanceof Error) {
        var e_0 = $p_0;
        // Inline function 'kotlin.Companion.failure' call
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p_0;
      }
      tmp_2 = tmp_4;
    }
    return job.q1b($completion);
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.u4d_1.x3c_1.toString() + ']';
  };
  function engineContentForCleanup(_this__u8e3s4) {
    if (get_isSaved(_this__u8e3s4))
      return Companion_getInstance().q1z_1;
    var origin = resolveOrigin(_this__u8e3s4);
    var tmp;
    if (origin instanceof DefaultHttpResponse) {
      tmp = origin.f4c_1;
    } else {
      if (origin instanceof SavedHttpResponse) {
        tmp = Companion_getInstance().q1z_1;
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).m1z_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.h4e_1 = $this_observable;
    this.i4e_1 = $listener;
    this.j4e_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).j30 = function ($this$writer, $completion) {
    var tmp = this.k30($this$writer, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(observable$slambda).i9 = function (p1, $completion) {
    return this.j30(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 16;
            this.q4e_1 = get_ByteArrayPool();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m4e_1 = this.q4e_1;
            this.l4e_1 = this.m4e_1.y27();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 15;
            this.p4e_1 = this.l4e_1;
            this.n4e_1 = new Long(0, 0);
            this.m8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.h4e_1.o1x()) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.m8_1 = 5;
            suspendResult = readAvailable(this.h4e_1, this.p4e_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.o4e_1 = suspendResult;
            if (this.o4e_1 <= 0) {
              this.m8_1 = 4;
              continue $sm;
            } else {
              this.m8_1 = 6;
              continue $sm;
            }

          case 6:
            this.m8_1 = 7;
            suspendResult = writeFully_0(this.k4e_1.h25_1, this.p4e_1, 0, this.o4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.n4e_1;
            var other = this.o4e_1;
            tmp_0.n4e_1 = add(tmp0, fromInt(other));
            this.m8_1 = 8;
            suspendResult = this.i4e_1.y3g(this.n4e_1, this.j4e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.m8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.h4e_1.z1v();
            close(this.k4e_1.h25_1, closedCause);
            if (closedCause == null && equalsLong(this.n4e_1, new Long(0, 0))) {
              this.m8_1 = 10;
              suspendResult = this.i4e_1.y3g(this.n4e_1, this.j4e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 11;
              continue $sm;
            }

          case 10:
            this.m8_1 = 11;
            continue $sm;
          case 11:
            this.n8_1 = 16;
            this.m8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.n8_1 = 16;
            this.m4e_1.z27(this.l4e_1);
            this.m8_1 = 14;
            continue $sm;
          case 13:
            this.n8_1 = 16;
            this.m4e_1.z27(this.l4e_1);
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.n8_1 = 16;
            var t = this.p8_1;
            this.m4e_1.z27(this.l4e_1);
            throw t;
          case 16:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 16) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).k30 = function ($this$writer, completion) {
    var i = new observable$slambda(this.h4e_1, this.i4e_1, this.j4e_1, completion);
    i.k4e_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j30($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.r4e_1 = response;
    this.s4e_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.u4e_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).h2t = function () {
    return this.u4e_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().z2n_1) || method.equals(Companion_getInstance_2().a2o_1))
      return Unit_instance;
    var header = _this__u8e3s4.md('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.s28(tmp, dropCompressionHeaders$lambda).c1(header);
    }
    _this__u8e3s4.d2b('Content-Encoding');
    _this__u8e3s4.d2b('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().tb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.m2j();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    var tmp_1 = null instanceof FetchOptions;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(FetchOptions), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.v4e_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_13();
    this.w4e_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).x4e = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).b3e = function (block) {
    return this.x4e(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.c4f_1 = JsClientEngineConfig$requestInit$lambda;
    var tmp_0 = this;
    tmp_0.d4f_1 = fetch$ref();
    this.e4f_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().g4f(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t4g_1 = _this__u8e3s4;
    this.u4g_1 = data;
  }
  protoOf($executeCOROUTINE$_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            this.m8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v4g_1 = suspendResult;
            this.x4g_1 = this.u4g_1.c3i_1.m28(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.u4g_1)) {
              this.m8_1 = 5;
              suspendResult = executeWebSocketRequest(this.t4g_1, this.u4g_1, this.v4g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 2:
            this.w4g_1 = GMTDate();
            this.m8_1 = 3;
            suspendResult = ktor_toRaw(this.u4g_1, this.x4g_1, this.v4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.u4g_1.c3i_1.n28(Companion_getInstance_13().v4e_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w4e_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.m8_1 = 4;
            suspendResult = commonFetch(this.u4g_1.x3h_1.toString(), rawRequest, fetchOptions, this.t4g_1.d4h_1, get_job(this.v4g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.u4g_1.y3h_1, this.u4g_1.c3i_1);
            var version = Companion_getInstance_6().h2o_1;
            var body = readBody(CoroutineScope_0(this.v4g_1), rawResponse);
            var tmp2_safe_receiver = this.u4g_1.c3i_1.n28(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.b49(this.u4g_1, status, headers, body, this.u4g_1.a3i_1, this.v4g_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.w4g_1, headers, version, responseBody, this.v4g_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p4f_1 = _this__u8e3s4;
    this.q4f_1 = urlString_capturingHack;
    this.r4f_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp0 = this.r4f_1.x2a();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.c1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.r4f_1.w2a(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.c1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.t4f_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().i2a_1) {
              this.s4f_1 = new WebSocket(this.q4f_1, this.t4f_1);
              this.m8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.m8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.r4f_1.c2b(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.s4f_1 = new ws_capturingHack(this.q4f_1, this.t4f_1, {headers: headers_capturingHack});
            this.m8_1 = 2;
            continue $sm;
          case 2:
            return this.s4f_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c4g_1 = _this__u8e3s4;
    this.d4g_1 = request;
    this.e4g_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.g4g_1 = GMTDate();
            this.j4g_1 = this.d4g_1.x3h_1.toString();
            this.k4g_1 = this.d4g_1.c3i_1.m28(get_WEBSOCKETS_KEY());
            this.m8_1 = 1;
            suspendResult = createWebSocket(this.c4g_1, this.j4g_1, this.d4g_1.z3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h4g_1 = suspendResult;
            this.f4g_1 = new JsWebSocketSession(this.e4g_1, this.h4g_1, this.k4g_1.i48_1);
            this.n8_1 = 3;
            this.m8_1 = 2;
            suspendResult = awaitConnection(this.h4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i4g_1 = suspendResult;
            this.n8_1 = 5;
            this.m8_1 = 4;
            continue $sm;
          case 3:
            this.n8_1 = 5;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              var tmp_1 = this;
              cancel_3(this.e4g_1, CancellationException_0('Failed to connect to ' + this.j4g_1, cause));
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 4:
            this.n8_1 = 5;
            var this_0 = this.h4g_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().o2n_1;
            return new HttpResponseData(Companion_getInstance_1().p2o_1, this.g4g_1, headers, Companion_getInstance_6().h2o_1, this.f4g_1, this.e4g_1);
          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.d4h_1 = config;
    this.e4h_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.d4h_1.k3j_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).d3d = function () {
    return this.d4h_1;
  };
  protoOf(JsClientEngine).e3i = function () {
    return this.e4h_1;
  };
  protoOf(JsClientEngine).g3j = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.y1e();
    $l$block: {
      if (cancellable.g1b()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf_0(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.k1d(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.g1f();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.f4h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).v1d = function () {
    return this.f4h_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).l3 = function () {
    return this.f4h_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.l3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.a2b(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().i2a_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.v1d();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.x8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.x8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.v1d();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().q1z_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).m1z_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.e9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.o4h_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).j30 = function ($this$writer, $completion) {
    var tmp = this.k30($this$writer, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(channelFromStream$slambda).i9 = function (p1, $completion) {
    return this.j30(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 9;
            this.r4h_1 = this.o4h_1.getReader();
            this.n8_1 = 7;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.m8_1 = 6;
              continue $sm;
            }

            this.m8_1 = 2;
            suspendResult = readChunk(this.r4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.m8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.s4h_1 = tmp0_elvis_lhs;
              this.m8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.s4h_1;
            this.m8_1 = 4;
            suspendResult = writeFully_0(this.p4h_1.h25_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 5;
            suspendResult = this.p4h_1.h25_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m8_1 = 1;
            continue $sm;
          case 6:
            this.n8_1 = 9;
            this.m8_1 = 10;
            continue $sm;
          case 7:
            this.n8_1 = 9;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof Error) {
              this.q4h_1 = this.p8_1;
              this.m8_1 = 8;
              var tmp_2 = this.r4h_1.cancel(this.q4h_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 8:
            throw this.q4h_1;
          case 9:
            throw this.p8_1;
          case 10:
            this.n8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 9) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).k30 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.o4h_1, completion);
    i.p4h_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j30($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.y1e();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.c4f_1(init);
    requestConfig(init);
    callJob.o1b(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().i2a_1) {
      tmp = config.d4f_1(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.e4f_1);
      tmp = config.d4f_1(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.g1f();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function fetch$ref() {
    return constructCallableReference(function (p0, p1) {
      return fetch(p0, p1);
    }, 2, 0, 30, 'fetch');
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().z31($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.t4h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).v1d = function () {
    return this.t4h_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).l3 = function () {
    return this.t4h_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.l3(), other.l3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.l3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.w4h_1.b1h(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.x4h_1.j1r(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.w4h_1.b1h(cause);
      this$0.x4h_1.n1r(cause);
      this$0.y4h_1.r1r();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.w4h_1.a1h(reason);
      this$0.x4h_1.j1r(Close_init_$Create$(reason));
      this$0.x4h_1.p1r();
      this$0.y4h_1.r1r();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.v4h_1.close();
      } else {
        this$0.v4h_1.close(Codes_NORMAL_getInstance().w31_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.v4h_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.v4h_1.close();
          } else {
            this$0.v4h_1.close(Codes_NORMAL_getInstance().w31_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.v4h_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.v1d();
      $onError.v1d();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.k4i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(JsWebSocketSession$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 10;
            this.p4i_1 = this.k4i_1.y4h_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n4i_1 = this.p4i_1;
            this.m4i_1 = null;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 9;
            this.n8_1 = 8;
            this.o4i_1 = this.n4i_1.t();
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 5;
            suspendResult = this.o4i_1.l1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.m8_1 = 6;
              continue $sm;
            }

            var e = this.o4i_1.v();
            switch (e.i32_1.a1_1) {
              case 0:
                var text = e.j32_1;
                this.k4i_1.v4h_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.j32_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.k4i_1.v4h_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.j32_1);
                var data = builder;
                var code = data.m17();
                var reason = readText(data);
                this.k4i_1.w4h_1.a1h(new CloseReason(code, reason));
                if (isReservedStatusCode(this.k4i_1, code)) {
                  this.k4i_1.v4h_1.close();
                } else {
                  this.k4i_1.v4h_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.m8_1 = 4;
            continue $sm;
          case 6:
            this.n8_1 = 10;
            this.m8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.n8_1 = 10;
            cancelConsumed(this.n4i_1, this.m4i_1);
            this.m8_1 = 12;
            continue $sm;
          case 8:
            this.n8_1 = 9;
            var tmp_2 = this.p8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.p8_1;
              var tmp_3 = this;
              this.m4i_1 = e_0;
              throw e_0;
            } else {
              throw this.p8_1;
            }

          case 9:
            this.n8_1 = 10;
            var t = this.p8_1;
            cancelConsumed(this.n4i_1, this.m4i_1);
            throw t;
          case 10:
            throw this.p8_1;
          case 11:
            this.n8_1 = 10;
            cancelConsumed(this.n4i_1, this.m4i_1);
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.n8_1 === 10) {
          throw e_1;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).m26 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.k4i_1, completion);
    i.l4i_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.u4h_1 = coroutineContext;
    this.v4h_1 = websocket;
    this.w4h_1 = CompletableDeferred();
    this.x4h_1 = from(Factory_getInstance(), channelsConfig.v32_1);
    this.y4h_1 = from(Factory_getInstance(), channelsConfig.w32_1);
    this.z4h_1 = this.x4h_1;
    this.a4i_1 = this.y4h_1;
    this.b4i_1 = this.w4h_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.v4h_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.v4h_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.v4h_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.u4h_1.z8(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.m1b(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.v4h_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.v32_1.q39()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).k1a = function () {
    return this.u4h_1;
  };
  protoOf(JsWebSocketSession).r32 = function () {
    return this.z4h_1;
  };
  protoOf(JsWebSocketSession).s32 = function () {
    return this.a4i_1;
  };
  protoOf(JsWebSocketSession).p32 = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).q32 = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).o32 = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).j1x = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.y3h_1.e2o_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.o3d_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.v4j_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).j30 = function ($this$writer, $completion) {
    var tmp = this.k30($this$writer, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(getBodyBytes$slambda).i9 = function (p1, $completion) {
    return this.j30(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.v4j_1.i2v(this.w4j_1.h25_1, this);
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
  protoOf(getBodyBytes$slambda).k30 = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.v4j_1, completion);
    i.w4j_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j30($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4i_1 = _this__u8e3s4;
    this.z4i_1 = clientConfig;
    this.a4j_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.b4j_1 = {};
            var this_0 = this.y4i_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.y3h_1) && isEmpty(this_0.a3i_1);
            mergeHeaders(this_0.z3h_1, this_0.a3i_1, toRaw$lambda(skipContentLengthHeader, this.b4j_1));
            this.m8_1 = 1;
            suspendResult = getBodyBytes(this.y4i_1.a3i_1, this.a4j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.y4i_1, this.b4j_1, this.z4i_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k4j_1 = content;
    this.l4j_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var tmp0_subject = this.k4j_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.m4j_1 = this.k4j_1.i2t();
              this.m8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.m8_1 = 3;
                suspendResult = readBuffer(this.k4j_1.g2v(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.m8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readBuffer(writer(tmp_0, this.l4j_1, VOID, getBodyBytes$slambda_0(this.k4j_1, null)).m1z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.m8_1 = 1;
                    suspendResult = getBodyBytes(this.k4j_1.m2v(), this.l4j_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.m4j_1 = null;
                      this.m8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.k4j_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.m4j_1 = suspendResult;
            this.m8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.m4j_1 = readByteArray(ARGUMENT);
            this.m8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.m4j_1 = readByteArray(ARGUMENT_0);
            this.m8_1 = 5;
            continue $sm;
          case 4:
            throw this.p8_1;
          case 5:
            return this.m4j_1;
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
  function Node(entry, next) {
    this.x4j_1 = entry;
    this.y4j_1 = next;
  }
  function engines$iterator$1() {
    this.z4j_1 = engines_getInstance().f4f_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.z4j_1);
    this.z4j_1 = result.y4j_1;
    return result.x4j_1.a4k_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.z4j_1);
  };
  function engines() {
    engines_instance = this;
    this.f4f_1 = atomic$ref$1(null);
  }
  protoOf(engines).g4f = function (item) {
    this.c4k(item, 1.0);
  };
  protoOf(engines).c4k = function (item, priority) {
    $l$loop: while (true) {
      var current = this.f4f_1.kotlinx$atomicfu$value;
      var new_0 = new Node(new EngineEntry(item, priority), current);
      if (this.f4f_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function EngineEntry(factory, priority) {
    priority = priority === VOID ? 1.0 : priority;
    this.a4k_1 = factory;
    this.b4k_1 = priority;
    // Inline function 'kotlin.require' call
    if (!!isNaN_0(this.b4k_1)) {
      var message = 'Priority cannot be NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function ProxyConfig_init_$Init$($this) {
    // Inline function 'kotlin.error' call
    var message = 'ProxyConfig should accept a url';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ProxyConfig_init_$Create$() {
    return ProxyConfig_init_$Init$(objectCreate(protoOf(ProxyConfig)));
  }
  function ProxyConfig(url) {
    this.d4k_1 = url;
  }
  protoOf(ProxyConfig).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.d4k_1;
    this_0.q(this_1.x2r_1.i2r_1);
    this_0.q('://');
    if (!(this_1.p2r_1 == null)) {
      this_0.q(encodeURLParameter(ensureNotNull(this_1.p2r_1)));
      if (!(this_1.q2r_1 == null)) {
        this_0.s(_Char___init__impl__6a9atx(58));
        this_0.q(encodeURLParameter(ensureNotNull(this_1.q2r_1)));
      }
      this_0.s(_Char___init__impl__6a9atx(64));
    }
    this_0.q(get_hostWithPort(this_1));
    return this_0.toString();
  };
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).e4k = function (url) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!equals_0(url.x2r_1.i2r_1, Companion_getInstance_8().i2s_1.i2r_1, true)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new ProxyConfig(url);
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function get_FACTORY() {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return FACTORY;
  }
  var FACTORY;
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpClient_web_kt__pyfqvb();
    return HttpClient_0(get_FACTORY(), block);
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return Unit_instance;
  }
  var properties_initialized_HttpClient_web_kt_zbb0cl;
  function _init_properties_HttpClient_web_kt__pyfqvb() {
    if (!properties_initialized_HttpClient_web_kt_zbb0cl) {
      properties_initialized_HttpClient_web_kt_zbb0cl = true;
      var tmp0 = engines_getInstance();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (!equals(element, Js_instance)) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      FACTORY = tmp0_elvis_lhs == null ? Js_instance : tmp0_elvis_lhs;
    }
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).e3i = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).e3d = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).z8 = get;
  protoOf(KtorCallContextElement).gh = fold;
  protoOf(KtorCallContextElement).fh = minusKey;
  protoOf(KtorCallContextElement).hh = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).k1a = get_coroutineContext;
  protoOf(JsWebSocketSession).t32 = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_3 = new Companion_2();
  Js_instance = new Js();
  ProxyBuilder_instance = new ProxyBuilder();
  useEngineDispatcher = true;
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ProxyBuilder_instance;
  _.$_$.b = timeout;
  _.$_$.c = FormBuilder;
  _.$_$.d = FormDataContent;
  _.$_$.e = MultiPartFormDataContent;
  _.$_$.f = formData;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = headers;
  _.$_$.i = url;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
