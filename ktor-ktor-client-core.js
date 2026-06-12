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
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.xf;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var CancellationException = kotlin_kotlin.$_$.z7;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.l3;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.nb;
  var getKClassFromExpression = kotlin_kotlin.$_$.cc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var initMetadataForLambda = kotlin_kotlin.$_$.qa;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.oe;
  var isInterface = kotlin_kotlin.$_$.ab;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.c2;
  var arrayOf = kotlin_kotlin.$_$.tf;
  var createKType = kotlin_kotlin.$_$.bc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.fa;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.v8;
  var IllegalStateException = kotlin_kotlin.$_$.ze;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.c4;
  var captureStack = kotlin_kotlin.$_$.v9;
  var defineProp = kotlin_kotlin.$_$.ea;
  var UnsupportedOperationException = kotlin_kotlin.$_$.rf;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.p4;
  var trimIndent = kotlin_kotlin.$_$.he;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.r1;
  var fromInt = kotlin_kotlin.$_$.g9;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.j;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.d4;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var writer = kotlin_io_ktor_ktor_io.$_$.v1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.x;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.u;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.v;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.t;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var emptySet = kotlin_kotlin.$_$.f6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v2;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var getKClass = kotlin_kotlin.$_$.dc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.ec;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.s1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.dg;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ia;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var KtMutableMap = kotlin_kotlin.$_$.e5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.zb;
  var setOf = kotlin_kotlin.$_$.h7;
  var get = kotlin_kotlin.$_$.o8;
  var fold = kotlin_kotlin.$_$.n8;
  var minusKey = kotlin_kotlin.$_$.p8;
  var plus = kotlin_kotlin.$_$.r8;
  var Element = kotlin_kotlin.$_$.q8;
  var joinToString = kotlin_kotlin.$_$.p6;
  var setOf_0 = kotlin_kotlin.$_$.i7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.db;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.qf;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.be;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var isByteArray = kotlin_kotlin.$_$.ua;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.d1;
  var Long = kotlin_kotlin.$_$.af;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.u1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.q;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.o1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.g1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.r1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.t1;
  var toInt = kotlin_kotlin.$_$.zd;
  var reversed = kotlin_kotlin.$_$.g7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.p7;
  var sortedWith = kotlin_kotlin.$_$.k7;
  var Collection = kotlin_kotlin.$_$.u4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p3;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.pb;
  var firstOrNull = kotlin_kotlin.$_$.i6;
  var FunctionAdapter = kotlin_kotlin.$_$.s9;
  var Comparator = kotlin_kotlin.$_$.se;
  var hashCode = kotlin_kotlin.$_$.ka;
  var compareValues = kotlin_kotlin.$_$.y7;
  var charset = kotlin_io_ktor_ktor_http.$_$.q1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.f2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.p1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.o1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.e2;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.y1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.yb;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.oa;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var Default_getInstance = kotlin_kotlin.$_$.b2;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.ae;
  var multiply = kotlin_kotlin.$_$.l9;
  var compare = kotlin_kotlin.$_$.a9;
  var toNumber = kotlin_kotlin.$_$.r9;
  var numberToLong = kotlin_kotlin.$_$.n9;
  var add = kotlin_kotlin.$_$.x8;
  var Companion_instance = kotlin_kotlin.$_$.i2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var createFailure = kotlin_kotlin.$_$.wf;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var trimMargin = kotlin_kotlin.$_$.ie;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.z1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var KProperty0 = kotlin_kotlin.$_$.hc;
  var createKTypeParameter = kotlin_kotlin.$_$.ac;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.r;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.t1;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var emptyList = kotlin_kotlin.$_$.d6;
  var addAll = kotlin_kotlin.$_$.h5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_websockets.$_$.b;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.f4;
  var KtList = kotlin_kotlin.$_$.z4;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.d2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.b2;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.v1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.uf;
  var close = kotlin_io_ktor_ktor_io.$_$.p1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u2;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.ce;
  var take = kotlin_kotlin.$_$.td;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.bb;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var quote = kotlin_io_ktor_ktor_http.$_$.a2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.x1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.c5;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.k;
  var equals_0 = kotlin_kotlin.$_$.uc;
  var flatten = kotlin_kotlin.$_$.l6;
  var copyToArray = kotlin_kotlin.$_$.a6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.w1;
  var intercepted = kotlin_kotlin.$_$.d8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf = kotlin_kotlin.$_$.w6;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.m3;
  var Error_init_$Create$ = kotlin_kotlin.$_$.r3;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.d;
  var decodeToString = kotlin_kotlin.$_$.rc;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.w7;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.c2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.e1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  function get_coroutineContext() {
    return this.n3d().s19();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
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
    var tmp = Phases_getInstance_0().i3c_1;
    client.u39_1.u2d(tmp, HttpClientEngine$install$slambda_0(client, this, null));
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
  initMetadataForCoroutine($cleanupCOROUTINE$, CoroutineImpl);
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
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.o39_1 = manageEngine;
    if ($this.o39_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.c3a_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.r39_1.u8(Key_instance));
      tmp.u1a(HttpClient$_init_$lambda_36nm6w(engine));
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
        tmp = $engine.c3a_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.w3();
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
    this.n3a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).q3a = function ($this$intercept, call, $completion) {
    var tmp = this.r3a($this$intercept, call, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClient$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp_0 = this.p3a_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.p3a_1) + '(' + toString(getKClassFromExpression(this.p3a_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.h8_1 = 1;
            suspendResult = this.n3a_1.v39_1.p2d(Unit_instance, this.p3a_1.x3a(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.p3a_1.y3a(response);
            this.h8_1 = 2;
            suspendResult = this.o3a_1.u2c(this.p3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda).r3a = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.n3a_1, completion);
    i.o3a_1 = $this$intercept;
    i.p3a_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.q3a($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.h3b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).l3b = function ($this$intercept, it, $completion) {
    var tmp = this.m3b($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClient$slambda_1).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3b(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.i3b_1.v2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3b_1 = suspendResult;
            this.i8_1 = 3;
            this.h8_1 = 4;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              var tmp_1 = this;
              this.h3b_1.y39_1.t2u(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.i3b_1.q2d_1.x3a(), cause));
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 3:
            throw this.k8_1;
          case 4:
            this.i8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClient$slambda_1).m3b = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.h3b_1, completion);
    i.i3b_1 = $this$intercept;
    i.j3b_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3b($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3b_1 = _this__u8e3s4;
    this.w3b_1 = builder;
  }
  protoOf($executeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.v3b_1.y39_1.t2u(get_HttpRequestCreated(), this.w3b_1);
            this.h8_1 = 1;
            suspendResult = this.v3b_1.s39_1.p2d(this.w3b_1, this.w3b_1.a3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.m39_1 = engine;
    this.n39_1 = userConfig;
    this.o39_1 = false;
    this.p39_1 = atomic$boolean$1(false);
    this.q39_1 = Job(this.m39_1.s19().u8(Key_instance));
    this.r39_1 = this.m39_1.s19().zg(this.q39_1);
    this.s39_1 = new HttpRequestPipeline();
    this.t39_1 = new HttpResponsePipeline();
    this.u39_1 = new HttpSendPipeline();
    this.v39_1 = new HttpReceivePipeline();
    this.w39_1 = AttributesJsFn(true);
    this.x39_1 = this.m39_1.d3c();
    this.y39_1 = new Events();
    this.z39_1 = new HttpClientConfig();
    this.m39_1.e3c(this);
    var tmp = Phases_getInstance_0().j3c_1;
    this.u39_1.u2d(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.n39_1;
    this.z39_1.s3c(get_HttpRequestLifecycle());
    this.z39_1.s3c(get_BodyProgress());
    this.z39_1.s3c(get_SaveBody());
    if ($this$with.p3c_1) {
      this.z39_1.t3c('DefaultTransformers', HttpClient$lambda);
    }
    this.z39_1.s3c(Plugin_getInstance());
    this.z39_1.s3c(get_HttpCallValidator());
    if ($this$with.o3c_1) {
      this.z39_1.s3c(get_HttpRedirect());
    }
    this.z39_1.u3c($this$with);
    if ($this$with.p3c_1) {
      this.z39_1.s3c(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.z39_1);
    this.z39_1.e3c(this);
    var tmp_0 = Phases_getInstance_1().v3c_1;
    this.t39_1.u2d(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).s19 = function () {
    return this.r39_1;
  };
  protoOf(HttpClient).a3d = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClient).w3 = function () {
    var success = this.p39_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.w39_1.w27(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.d28().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.w27(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.w3();
      }
    }
    this.q39_1.k1g();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.m39_1) + ']';
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
    var engine = engineFactory.b3d(config.n3c_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.k3c_1.l2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.k3c_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.u2(tmp2, value);
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
      var attributes = scope.w39_1.c28(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.z39_1.l3c_1.n2($plugin.m1()));
      var pluginData = $plugin.c3d(config);
      $plugin.d3d(pluginData, scope);
      attributes.z27($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.k3c_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.l3c_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.m3c_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.n3c_1 = HttpClientConfig$engineConfig$lambda;
    this.o3c_1 = true;
    this.p3c_1 = true;
    this.q3c_1 = false;
    this.r3c_1 = PlatformUtils_getInstance().y29_1;
  }
  protoOf(HttpClientConfig).e3d = function (block) {
    var oldConfig = this.n3c_1;
    var tmp = this;
    tmp.n3c_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).f3d = function (plugin, configure) {
    var previousConfigBlock = this.l3c_1.n2(plugin.m1());
    var tmp0 = this.l3c_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.u2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).s3c = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.f3d(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.f3d.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).t3c = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.m3c_1.u2(key, block);
  };
  protoOf(HttpClientConfig).e3c = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.k3c_1.p2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.m3c_1.p2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).u3c = function (other) {
    this.o3c_1 = other.o3c_1;
    this.p3c_1 = other.p3c_1;
    this.q3c_1 = other.q3c_1;
    var tmp0 = this.k3c_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.k3c_1;
    tmp0.w2(map);
    var tmp0_0 = this.l3c_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.l3c_1;
    tmp0_0.w2(map_0);
    var tmp0_1 = this.m3c_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.m3c_1;
    tmp0_1.w2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.x3a().u2m() : headers;
    return new DelegatedCall(_this__u8e3s4.s3a_1, _this__u8e3s4, content, headers);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.x3a().u2m() : responseHeaders;
    HttpClientCall.call(this, client);
    this.u3a_1 = new DelegatedRequest(this, originCall.g3d());
    this.v3a_1 = new DelegatedResponse(this, originCall.x3a(), responseContent, responseHeaders);
  }
  function DelegatedRequest(call, origin) {
    this.l3d_1 = origin;
    this.m3d_1 = call;
  }
  protoOf(DelegatedRequest).n3d = function () {
    return this.m3d_1;
  };
  protoOf(DelegatedRequest).s19 = function () {
    return this.l3d_1.s19();
  };
  protoOf(DelegatedRequest).o3d = function () {
    return this.l3d_1.o3d();
  };
  protoOf(DelegatedRequest).p3d = function () {
    return this.l3d_1.p3d();
  };
  protoOf(DelegatedRequest).h3d = function () {
    return this.l3d_1.h3d();
  };
  protoOf(DelegatedRequest).q3d = function () {
    return this.l3d_1.q3d();
  };
  protoOf(DelegatedRequest).u2m = function () {
    return this.l3d_1.u2m();
  };
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.u2m() : headers;
    HttpResponse.call(this);
    this.r3d_1 = call;
    this.s3d_1 = origin;
    this.t3d_1 = content;
    this.u3d_1 = headers;
    this.v3d_1 = this.s3d_1.s19();
  }
  protoOf(DelegatedResponse).n3d = function () {
    return this.r3d_1;
  };
  protoOf(DelegatedResponse).u2m = function () {
    return this.u3d_1;
  };
  protoOf(DelegatedResponse).w3d = function () {
    return this.t3d_1(this.s3d_1);
  };
  protoOf(DelegatedResponse).s19 = function () {
    return this.v3d_1;
  };
  protoOf(DelegatedResponse).x3d = function () {
    return this.s3d_1.x3d();
  };
  protoOf(DelegatedResponse).y3d = function () {
    return this.s3d_1.y3d();
  };
  protoOf(DelegatedResponse).z3d = function () {
    return this.s3d_1.z3d();
  };
  protoOf(DelegatedResponse).a3e = function () {
    return this.s3d_1.a3e();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.u3a_1 = new DefaultHttpRequest($this, requestData);
    $this.v3a_1 = new DefaultHttpResponse($this, responseData);
    $this.h3d().b28(Companion_getInstance_7().b3e_1);
    var tmp = responseData.g3e_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.h3d().z27(Companion_getInstance_7().b3e_1, responseData.g3e_1);
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
    var tmp_0 = PrimitiveClasses_getInstance().db();
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.b3e_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r3e_1 = _this__u8e3s4;
    this.s3e_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.i8_1 = 4;
            if (instanceOf(this.r3e_1.x3a(), this.s3e_1.h2e_1))
              return this.r3e_1.x3a();
            if (!this.r3e_1.i3d() && !get_isSaved(this.r3e_1.x3a()) && !this.r3e_1.t3a_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.r3e_1);
            }

            var tmp0_elvis_lhs = this.r3e_1.h3d().x27(Companion_getInstance_7().b3e_1);
            if (tmp0_elvis_lhs == null) {
              this.h8_1 = 1;
              suspendResult = this.r3e_1.j3d(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.t3e_1 = tmp0_elvis_lhs;
              this.h8_1 = 2;
              continue $sm;
            }

          case 1:
            this.t3e_1 = suspendResult;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.t3e_1;
            var subject = new HttpResponseContainer(this.s3e_1, responseData);
            this.h8_1 = 3;
            suspendResult = this.r3e_1.s3a_1.t39_1.p2d(this.r3e_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.v3e_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.s3e_1.h2e_1)) {
              var from = getKClassFromExpression(result);
              var to = this.s3e_1.h2e_1;
              throw new NoTransformationFoundException(this.r3e_1.x3a(), from, to);
            }

            return result;
          case 4:
            this.i8_1 = 5;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.k8_1;
              cancel_0(this.r3e_1.x3a(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.s3a_1 = client;
    this.t3a_1 = atomic$boolean$1(false);
    this.w3a_1 = false;
  }
  protoOf(HttpClientCall).s19 = function () {
    return this.x3a().s19();
  };
  protoOf(HttpClientCall).h3d = function () {
    return this.g3d().h3d();
  };
  protoOf(HttpClientCall).g3d = function () {
    var tmp = this.u3a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).x3a = function () {
    var tmp = this.v3a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).i3d = function () {
    return this.w3a_1;
  };
  protoOf(HttpClientCall).j3d = function ($completion) {
    return this.x3a().w3d();
  };
  protoOf(HttpClientCall).k3d = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.g3d().p3d().toString() + ', ' + this.x3a().x3d().toString() + ']';
  };
  protoOf(HttpClientCall).y3a = function (response) {
    this.v3a_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.w3e_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.w3e_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.x3e_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).p3d().toString() + '`\n        Response status `' + response.x3d().toString() + '`\n        Response header `ContentType: ' + response.u2m().gd('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).u2m().gd('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.x3e_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.m3f_1 = responseBody;
    this.u3a_1 = new SavedHttpRequest(this, request);
    this.v3a_1 = new SavedHttpResponse(this, this.m3f_1, response);
    checkContentLength(contentLength(response), fromInt(this.m3f_1.length), request.o3d());
    this.n3f_1 = true;
  }
  protoOf(SavedHttpCall).i3d = function () {
    return this.n3f_1;
  };
  function SavedHttpRequest(call, origin) {
    this.o3f_1 = origin;
    this.p3f_1 = call;
  }
  protoOf(SavedHttpRequest).n3d = function () {
    return this.p3f_1;
  };
  protoOf(SavedHttpRequest).s19 = function () {
    return this.o3f_1.s19();
  };
  protoOf(SavedHttpRequest).o3d = function () {
    return this.o3f_1.o3d();
  };
  protoOf(SavedHttpRequest).p3d = function () {
    return this.o3f_1.p3d();
  };
  protoOf(SavedHttpRequest).h3d = function () {
    return this.o3f_1.h3d();
  };
  protoOf(SavedHttpRequest).q3d = function () {
    return this.o3f_1.q3d();
  };
  protoOf(SavedHttpRequest).u2m = function () {
    return this.o3f_1.u2m();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.q3f_1 = call;
    this.r3f_1 = body;
    this.s3f_1 = origin.x3d();
    this.t3f_1 = origin.y3d();
    this.u3f_1 = origin.z3d();
    this.v3f_1 = origin.a3e();
    this.w3f_1 = origin.u2m();
    this.x3f_1 = origin.s19();
  }
  protoOf(SavedHttpResponse).n3d = function () {
    return this.q3f_1;
  };
  protoOf(SavedHttpResponse).x3d = function () {
    return this.s3f_1;
  };
  protoOf(SavedHttpResponse).y3d = function () {
    return this.t3f_1;
  };
  protoOf(SavedHttpResponse).z3d = function () {
    return this.u3f_1;
  };
  protoOf(SavedHttpResponse).a3e = function () {
    return this.v3f_1;
  };
  protoOf(SavedHttpResponse).u2m = function () {
    return this.w3f_1;
  };
  protoOf(SavedHttpResponse).s19 = function () {
    return this.x3f_1;
  };
  protoOf(SavedHttpResponse).w3d = function () {
    return ByteReadChannel_0(this.r3f_1);
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3f_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var tmp_0 = this.g3f_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.g3f_1;
            this.h8_1 = 1;
            suspendResult = readRemaining(this.g3f_1.x3a().w3d(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.g3f_1.s3a_1, this.g3f_1.g3d(), this.g3f_1.x3a(), responseBody);
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
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
      tmp = getContent($this, delegate.m2u());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.i2s());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().t1y_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.g2u();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.b3g_1, true, ObservableContent$getContent$slambda_0(delegate, null)).p1y_1;
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
    this.l3g_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).j2z = function ($this$writer, $completion) {
    var tmp = this.k2z($this$writer, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(ObservableContent$getContent$slambda).d9 = function (p1, $completion) {
    return this.j2z(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.l3g_1.i2u(this.m3g_1.q24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ObservableContent$getContent$slambda).k2z = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.l3g_1, completion);
    i.m3g_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j2z($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.a3g_1 = delegate;
    this.b3g_1 = callContext;
    this.c3g_1 = listener;
  }
  protoOf(ObservableContent).g2s = function () {
    return this.a3g_1.g2s();
  };
  protoOf(ObservableContent).h2s = function () {
    return this.a3g_1.h2s();
  };
  protoOf(ObservableContent).u2m = function () {
    return this.a3g_1.u2m();
  };
  protoOf(ObservableContent).g2u = function () {
    return observable(getContent(this, this.a3g_1), this.b3g_1, this.h2s(), this.c3g_1);
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
        $client.y39_1.t2u(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.s19().u8(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t19();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.d3h_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.e3h().i2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.n3h_1 = $client;
    this.o3h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).q3a = function ($this$intercept, content, $completion) {
    var tmp = this.r3a($this$intercept, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClientEngine$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.s3h(this.p3h_1.q2d_1);
            var body = this.q3h_1;
            if (body == null) {
              this_0.a3c_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().db();
              var tmp_1;
              try {
                tmp_1 = createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false);
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
              this_0.t3h(new TypeInfo(tmp_0, tmp_1));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.a3c_1 = body;
                this_0.t3h(null);
              } else {
                this_0.a3c_1 = body;
                var tmp_3 = PrimitiveClasses_getInstance().db();
                var tmp_4;
                try {
                  tmp_4 = createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_5;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_5 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.t3h(new TypeInfo(tmp_3, tmp_4));
              }
            }

            var builder = this_0;
            this.n3h_1.y39_1.t2u(get_HttpRequestIsReadyForSending(), builder);
            var tmp_6 = this;
            var this_1 = builder.n2i();
            this_1.c3h_1.z27(get_CLIENT_CONFIG(), this.n3h_1.z39_1);
            tmp_6.r3h_1 = this_1;
            validateHeaders(this.r3h_1);
            checkExtensions(this.o3h_1, this.r3h_1);
            this.h8_1 = 1;
            suspendResult = executeWithinCallContext(this.o3h_1, this.r3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.n3h_1, this.r3h_1, responseData);
            var response = call.x3a();
            this.n3h_1.y39_1.t2u(get_HttpResponseReceived(), response);
            var tmp_7 = get_job(response.s19());
            tmp_7.u1a(HttpClientEngine$install$slambda$lambda(this.n3h_1, response));
            this.h8_1 = 2;
            suspendResult = this.p3h_1.u2c(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).r3a = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.n3h_1, this.o3h_1, completion);
    i.p3h_1 = $this$intercept;
    i.q3h_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3a($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.c3i_1 = this$0;
    this.d3i_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).f3i = function ($this$async, $completion) {
    var tmp = this.v25($this$async, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).d9 = function (p1, $completion) {
    return this.f3i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            if (_get_closed__iwkfs1(this.c3i_1)) {
              throw new ClientEngineClosedException();
            }

            this.h8_1 = 1;
            suspendResult = this.c3i_1.g3i(this.d3i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).v25 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.c3i_1, this.d3i_1, completion);
    i.e3i_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.f3i($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3g_1 = _this__u8e3s4;
    this.w3g_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = createCallContext(this.v3g_1, this.w3g_1.b3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.zg(new KtorCallContextElement(callContext));
            this.h8_1 = 2;
            suspendResult = async(this.v3g_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.v3g_1, this.w3g_1, null)).e1c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.z3g_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.h2a();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().m2m_1.i2(element)) {
        destination.b1(element);
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
    var callContext = _this__u8e3s4.s19().zg(callJob).zg(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.n8().u8(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.w1a(true, VOID, createCallContext$lambda(callJob));
      callJob.u1a(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.b1b(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.d1d();
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.d3c().i3i_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.l3i();
    }, 1, 0, 19);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().zg(this$0.l3i()).zg(new CoroutineName(this$0.a3a_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.s19();
    }, 1, 0, 20);
  }
  function HttpClientEngineBase(engineName) {
    this.a3a_1 = engineName;
    this.b3a_1 = atomic$boolean$1(false);
    this.c3a_1 = atomic$int$1(0);
    var tmp = this;
    tmp.d3a_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.e3a_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).l3i = function () {
    var tmp0 = this.d3a_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).s19 = function () {
    var tmp0 = this.e3a_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).w3 = function () {
    if (!this.b3a_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.s19().u8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.k1g();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.m3i_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.m3i_1;
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.h3i_1 = 4;
    this.i3i_1 = null;
    this.j3i_1 = false;
    this.k3i_1 = null;
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
  function Companion_getInstance_8() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.n3i_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.n8();
    return ensureNotNull(tmp$ret$0.u8(Companion_instance_1)).n3i_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.m2a(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.gd('User-Agent') == null && content.u2m().gd('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.g2s();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.u2m().gd('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.gd('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.h2s();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.u2m().gd('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.gd('Content-Length') : tmp5_elvis_lhs;
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
    return !PlatformUtils_getInstance().s29_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.l2a($requestHeaders);
      $this$buildHeaders.l2a($content.u2m());
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
      if (get_DATE_HEADERS().i2(key)) {
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
    this.w3i_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).q3a = function ($this$intercept, content, $completion) {
    var tmp = this.r3a($this$intercept, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AfterRenderHook$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp_0 = this.y3i_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.h8_1 = 1;
            suspendResult = this.w3i_1(this.x3i_1.q2d_1, this.y3i_1, this);
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
            this.h8_1 = 2;
            suspendResult = this.x3i_1.u2c(newContent, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterRenderHook$install$slambda).r3a = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.w3i_1, completion);
    i.x3i_1 = $this$intercept;
    i.y3i_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3a($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).z3i = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.s39_1.r2d(Phases_getInstance().d3j_1, observableContentPhase);
    client.s39_1.u2d(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).f3j = function (client, handler) {
    return this.z3i(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.o3j_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).r3j = function ($this$intercept, response, $completion) {
    var tmp = this.s3j($this$intercept, response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(AfterReceiveHook$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.r3j(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.h8_1 = 1;
            suspendResult = this.o3j_1(this.q3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.h8_1 = 2;
              suspendResult = this.p3j_1.u2c(newResponse, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 2:
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AfterReceiveHook$install$slambda).s3j = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.o3j_1, completion);
    i.p3j_1 = $this$intercept;
    i.q3j_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.r3j($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).t3j = function (client, handler) {
    var tmp = Phases_getInstance_2().w3j_1;
    client.v39_1.u2d(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).f3j = function (client, handler) {
    return this.t3j(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.n3d();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).x3a();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.c3k(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.c3k(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).n3k = function (request, content, $completion) {
    var tmp = this.o3k(request, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BodyProgress$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.n3k(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        if (tmp === 0) {
          this.i8_1 = 1;
          var tmp0_elvis_lhs = this.l3k_1.c3c_1.x27(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.m3k_1, this.l3k_1.b3c_1, listener);
        } else if (tmp === 1) {
          throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).o3k = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.l3k_1 = request;
    i.m3k_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.n3k(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).y3k = function (response, $completion) {
    var tmp = this.z3k(response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BodyProgress$lambda$slambda_1).d9 = function (p1, $completion) {
    return this.y3k(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        if (tmp === 0) {
          this.i8_1 = 1;
          var tmp0_elvis_lhs = this.x3k_1.n3d().g3d().h3d().x27(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.x3k_1, listener);
        } else if (tmp === 1) {
          throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).z3k = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.x3k_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.y3k(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.w3d(), $this$replaceResponse.s19(), contentLength($this$replaceResponse), $listener);
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(ProgressListener);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
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
    this.a3l_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.c3l_1 = 'Unhandled redirect: ' + response.n3d().g3d().o3d().f2n_1 + ' ' + response.n3d().g3d().p3d().toString() + '. ' + ('Status: ' + response.x3d().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.c3l_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.e3l_1 = 'Client request(' + response.n3d().g3d().o3d().f2n_1 + ' ' + response.n3d().g3d().p3d().toString() + ') ' + ('invalid: ' + response.x3d().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.e3l_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.g3l_1 = 'Server error(' + response.n3d().g3d().o3d().f2n_1 + ' ' + response.n3d().g3d().p3d().toString() + ': ' + (response.x3d().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.g3l_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).t3l = function (response, $completion) {
    var tmp = this.z3k(response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).d9 = function (p1, $completion) {
    return this.t3l(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            var expectSuccess = this.p3l_1.n3d().h3d().w27(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              get_LOGGER().o2e('Skipping default response validation for ' + this.p3l_1.n3d().g3d().p3d().toString());
              return Unit_instance;
            }

            this.r3l_1 = this.p3l_1.x3d().s2p_1;
            var originCall = this.p3l_1.n3d();
            if (this.r3l_1 < 300 || originCall.h3d().y27(get_ValidateMark())) {
              return Unit_instance;
            }

            this.h8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this_0.h3d().z27(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_0;
            this.q3l_1 = exceptionCall.x3a();
            this.i8_1 = 3;
            this.h8_1 = 2;
            suspendResult = bodyAsText(this.q3l_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s3l_1 = suspendResult;
            this.i8_1 = 5;
            this.h8_1 = 4;
            continue $sm;
          case 3:
            this.i8_1 = 5;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.k8_1;
              var tmp_1 = this;
              tmp_1.s3l_1 = '<body failed decoding>';
              this.h8_1 = 4;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 4:
            this.i8_1 = 5;
            var exceptionResponseText = this.s3l_1;
            var tmp0_subject = this.r3l_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.q3l_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.q3l_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.q3l_1, exceptionResponseText) : new ResponseException(this.q3l_1, exceptionResponseText);
            get_LOGGER().o2e('Default response validation for ' + this.p3l_1.n3d().g3d().p3d().toString() + ' failed with ' + exception.toString());
            throw exception;
          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).z3k = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.p3l_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.t3l(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.w3l_1 = $this_addDefaultResponseValidation.q3c_1;
      $this$HttpResponseValidator.x3l(addDefaultResponseValidation$lambda$slambda_0(null));
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    var tmp = Phases_getInstance().d3j_1;
    _this__u8e3s4.s39_1.u2d(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().w3c_1;
    _this__u8e3s4.t39_1.u2d(tmp_0, defaultTransformers$slambda_2(_this__u8e3s4, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.b3m_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.z3l_1 = $contentType == null ? Application_getInstance().z2f_1 : $contentType;
    this.a3m_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).g2s = function () {
    return this.z3l_1;
  };
  protoOf(defaultTransformers$1$content$1).h2s = function () {
    return this.a3m_1;
  };
  protoOf(defaultTransformers$1$content$1).i2s = function () {
    return this.b3m_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.f3m_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.q2d_1.z3b_1.gd('Content-Length');
    tmp.d3m_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.e3m_1 = $contentType == null ? Application_getInstance().z2f_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).h2s = function () {
    return this.d3m_1;
  };
  protoOf(defaultTransformers$1$content$2).g2s = function () {
    return this.e3m_1;
  };
  protoOf(defaultTransformers$1$content$2).g2u = function () {
    return this.f3m_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).q3a = function ($this$intercept, body, $completion) {
    var tmp = this.r3a($this$intercept, body, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(defaultTransformers$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            if (this.o3m_1.q2d_1.z3b_1.gd('Accept') == null) {
              this.o3m_1.q2d_1.z3b_1.k2a('Accept', '*/*');
            }

            var contentType_0 = contentType(this.o3m_1.q2d_1);
            var tmp0_subject = this.p3m_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.p3m_1, contentType_0 == null ? Text_getInstance().r2h_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.p3m_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.o3m_1, contentType_0, this.p3m_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.p3m_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.o3m_1.q2d_1, this.p3m_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.g2s()) == null)) {
              this.o3m_1.q2d_1.z3b_1.n2a('Content-Type');
              get_LOGGER_0().o2e('Transformed with default transformers request body for ' + this.o3m_1.q2d_1.x3b_1.toString() + ' from ' + toString(getKClassFromExpression(this.p3m_1)));
              this.h8_1 = 1;
              suspendResult = this.o3m_1.u2c(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 2;
              continue $sm;
            }

          case 1:
            this.h8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda).r3a = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.o3m_1 = $this$intercept;
    i.p3m_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.q3a($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.y3m_1 = $body;
    this.z3m_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).j2z = function ($this$writer, $completion) {
    var tmp = this.k2z($this$writer, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(defaultTransformers$slambda$slambda).d9 = function (p1, $completion) {
    return this.j2z(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = copyTo(this.y3m_1, this.a3n_1.q24_1, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.y3m_1);
            this.i8_1 = 4;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 4;
            return Unit_instance;
          case 3:
            this.i8_1 = 4;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.k8_1;
              cancel(this.z3m_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.k8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.k8_1;
                cancel_0(this.z3m_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.k8_1;
              }
            }

          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda$slambda).k2z = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.y3m_1, this.z3m_1, completion);
    i.a3n_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j2z($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.k1g();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation) {
    this.j3n_1 = $this_defaultTransformers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).l3b = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3b($this$intercept, _destruct__k2r9zo, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(defaultTransformers$slambda_1).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3b(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 12;
            this.m3n_1 = this.l3n_1.sf();
            var body = this.l3n_1.tf();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.k3n_1.q2d_1.x3a();
            var tmp0_subject = this.m3n_1.h2e_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.h8_1 = 10;
              suspendResult = this.k3n_1.u2c(new HttpResponseContainer(this.m3n_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().jb())) {
                this.h8_1 = 8;
                suspendResult = readRemaining(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.h8_1 = 6;
                  suspendResult = readRemaining(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().sb())) {
                    this.h8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.s19()));
                      var this_0 = writer(this.k3n_1, this.j3n_1.r39_1, VOID, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachWriterJob(body, this_0);
                      var channel = this_0.p1y_1;
                      this.h8_1 = 3;
                      suspendResult = this.k3n_1.u2c(new HttpResponseContainer(this.m3n_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.h8_1 = 2;
                        suspendResult = this.k3n_1.u2c(new HttpResponseContainer(this.m3n_1, response.x3d()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.k3n_1.q2d_1.x3a().u2m().gd('Content-Type');
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
                          var contentType = Companion_getInstance_0().in(rawContentType);
                          if (!contentType.k2i(MultiPart_getInstance().k2h_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.k3n_1.q2d_1.x3a().u2m().gd('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.k3n_1.s19(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.m3n_1, body_0);
                          this.h8_1 = 1;
                          suspendResult = this.k3n_1.u2c(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.n3n_1 = null;
                          this.h8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 2:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 3:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.k3n_1.q2d_1.x3a()), fromInt(bytes.length), this.k3n_1.q2d_1.g3d().o3d());
            this.h8_1 = 5;
            suspendResult = this.k3n_1.u2c(new HttpResponseContainer(this.m3n_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.m3n_1, ARGUMENT);
            this.h8_1 = 7;
            suspendResult = this.k3n_1.u2c(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.m3n_1, ARGUMENT_3);
            this.h8_1 = 9;
            suspendResult = this.k3n_1.u2c(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 10:
            this.n3n_1 = suspendResult;
            this.h8_1 = 11;
            continue $sm;
          case 11:
            var result = this.n3n_1;
            if (!(result == null)) {
              get_LOGGER_0().o2e('Transformed with default transformers response body ' + ('for ' + this.k3n_1.q2d_1.g3d().p3d().toString() + ' to ' + toString(this.m3n_1.h2e_1)));
            }

            return Unit_instance;
          case 12:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 12) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).m3b = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.j3n_1, completion);
    i.k3n_1 = $this$intercept;
    i.l3n_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($this_defaultTransformers, resultContinuation) {
    var i = new defaultTransformers$slambda_1($this_defaultTransformers, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3b($this$intercept, _destruct__k2r9zo, $completion);
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
    tmp.u3l_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.v3l_1 = ArrayList_init_$Create$();
    this.w3l_1 = true;
  }
  protoOf(HttpCallValidatorConfig).x3l = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.u3l_1.b1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.f3d(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.w3n_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).q3a = function ($this$intercept, it, $completion) {
    var tmp = this.r3a($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(RequestError$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.x3n_1.v2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z3n_1 = suspendResult;
            this.i8_1 = 5;
            this.h8_1 = 4;
            continue $sm;
          case 2:
            this.i8_1 = 5;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              this.h8_1 = 3;
              suspendResult = this.w3n_1(HttpRequest(this.x3n_1.q2d_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.z3n_1 = Unit_instance;
            this.h8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).r3a = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.w3n_1, completion);
    i.x3n_1 = $this$intercept;
    i.y3n_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3a($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).a3o = function (client, handler) {
    var tmp = Phases_getInstance().a3j_1;
    client.s39_1.u2d(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).f3j = function (client, handler) {
    return this.a3o(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.j3o_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).l3b = function ($this$intercept, it, $completion) {
    var tmp = this.m3b($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(ReceiveError$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3b(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.k3o_1.v2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m3o_1 = suspendResult;
            this.i8_1 = 5;
            this.h8_1 = 4;
            continue $sm;
          case 2:
            this.i8_1 = 5;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              this.h8_1 = 3;
              suspendResult = this.j3o_1(this.k3o_1.q2d_1.g3d(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.m3o_1 = Unit_instance;
            this.h8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).m3b = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.j3o_1, completion);
    i.k3o_1 = $this$intercept;
    i.l3o_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3b($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).a3o = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.t39_1.t2d(Phases_getInstance_1().v3c_1, BeforeReceive);
    client.t39_1.u2d(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).f3j = function (client, handler) {
    return this.a3o(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    }, 0, 0, 21, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.z3j_1.u3l_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.z3j_1.v3l_1);
    var expectSuccess = $this$createClientPlugin.z3j_1.w3l_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.c3k(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.c3k(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.c3k(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.c3k(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.s3p_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).u3p = function (request, $completion) {
    var tmp = this.v3p(request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpCallValidator$lambda$slambda).d9 = function (p1, $completion) {
    return this.u3p(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        if (tmp === 0) {
          this.i8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.t3p_1.c3c_1.c28(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.s3p_1));
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda).v3p = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.s3p_1, completion);
    i.t3p_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.u3p(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.e3q_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).i3q = function ($this$on, request, $completion) {
    var tmp = this.j3q($this$on, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = this.f3q_1.m3q(this.g3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h3q_1 = suspendResult;
            this.h8_1 = 2;
            suspendResult = invoke$validateResponse(this.e3q_1, this.h3q_1.x3a(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.h3q_1;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).j3q = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.e3q_1, completion);
    i.f3q_1 = $this$on;
    i.g3q_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3q($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.v3q_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).z3q = function (request, cause, $completion) {
    var tmp = this.a3r(request, cause, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).b9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z3q(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.y3q_1 = unwrapCancellationException(this.x3q_1);
            this.h8_1 = 1;
            suspendResult = invoke$processException(this.v3q_1, this.y3q_1, this.w3q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.y3q_1;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).a3r = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.v3q_1, completion);
    i.w3q_1 = request;
    i.x3q_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.z3q(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.j3r_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).z3q = function (request, cause, $completion) {
    var tmp = this.a3r(request, cause, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).b9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.z3q(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.m3r_1 = unwrapCancellationException(this.l3r_1);
            this.h8_1 = 1;
            suspendResult = invoke$processException(this.j3r_1, this.m3r_1, this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.m3r_1;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).a3r = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.j3r_1, completion);
    i.k3r_1 = request;
    i.l3r_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.z3q(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3o_1 = responseValidators;
    this.w3o_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            get_LOGGER_1().o2e('Validating response for request ' + this.w3o_1.n3d().g3d().p3d().toString());
            this.x3o_1 = this.v3o_1.t();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.x3o_1.u()) {
              this.h8_1 = 3;
              continue $sm;
            }

            var element = this.x3o_1.v();
            this.h8_1 = 2;
            suspendResult = element(this.w3o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3p_1 = callExceptionHandlers;
    this.h3p_1 = cause;
    this.i3p_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            get_LOGGER_1().o2e('Processing exception ' + this.h3p_1.toString() + ' for request ' + this.i3p_1.p3d().toString());
            this.j3p_1 = this.g3p_1.t();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.j3p_1.u()) {
              this.h8_1 = 5;
              continue $sm;
            }

            var element = this.j3p_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.h8_1 = 3;
              suspendResult = element.o3r_1(this.h3p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.h8_1 = 2;
                suspendResult = element.n3r_1(this.h3p_1, this.i3p_1, this);
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
            this.h8_1 = 4;
            continue $sm;
          case 3:
            this.h8_1 = 4;
            continue $sm;
          case 4:
            this.h8_1 = 1;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 6) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function HttpRequest$1($builder) {
    this.t3r_1 = $builder;
    this.p3r_1 = $builder.y3b_1;
    this.q3r_1 = $builder.x3b_1.n2i();
    this.r3r_1 = $builder.c3c_1;
    this.s3r_1 = $builder.z3b_1.n2i();
  }
  protoOf(HttpRequest$1).n3d = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).o3d = function () {
    return this.p3r_1;
  };
  protoOf(HttpRequest$1).p3d = function () {
    return this.q3r_1;
  };
  protoOf(HttpRequest$1).h3d = function () {
    return this.r3r_1;
  };
  protoOf(HttpRequest$1).u2m = function () {
    return this.s3r_1;
  };
  protoOf(HttpRequest$1).q3d = function () {
    var tmp = this.t3r_1.a3c_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.t3r_1.a3c_1);
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
      var tmp_0 = PrimitiveClasses_getInstance().gb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
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
    var tmp0_safe_receiver = _this__u8e3s4.w39_1.x27(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x27(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    tmp.u3r_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v3r_1 = LinkedHashMap_init_$Create$();
    this.w3r_1 = null;
    this.x3r_1 = Charsets_getInstance().u26_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.g3s_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).q3a = function ($this$intercept, content, $completion) {
    var tmp = this.r3a($this$intercept, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(RenderRequestHook$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.h8_1 = 1;
            suspendResult = this.g3s_1(this.h3s_1.q2d_1, this.i3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.h8_1 = 2;
              suspendResult = this.h3s_1.u2c(result, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 2:
            this.h8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RenderRequestHook$install$slambda).r3a = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.g3s_1, completion);
    i.h3s_1 = $this$intercept;
    i.i3s_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3a($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).j3s = function (client, handler) {
    var tmp = Phases_getInstance().d3j_1;
    client.s39_1.u2d(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).f3j = function (client, handler) {
    return this.j3s(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 22, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.z3j_1.v3r_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.z3j_1.x3r_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.z3j_1.u3r_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.z3j_1.v3r_1.l2(element)) {
        destination.b1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.z3j_1.u3r_1;
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
        if (!element_0.equals(Charsets_getInstance().u26_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.z3j_1.v3r_1.o2();
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
          if (!element_1.equals(Charsets_getInstance().u26_1)) {
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
        var charset = element_3.sf();
        var quality = element_3.tf();
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
    var tmp0_elvis_lhs = $this$createClientPlugin.z3j_1.w3r_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.qf_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().u26_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.c3k(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.k3s(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.l3s_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).ud = function (a, b) {
    return this.l3s_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.ud(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).g3 = function () {
    return this.l3s_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.g3(), other.g3());
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
    return hashCode(this.g3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.rf_1;
    var tmp$ret$2 = a.rf_1;
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
    var contentType = requestContentType == null ? Text_getInstance().r2h_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    get_LOGGER_2().o2e('Sending request body to ' + request.x3b_1.toString() + ' as text/plain with charset ' + charset_0.toString());
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.x3a());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    get_LOGGER_2().o2e('Reading response body for ' + call.g3d().p3d().toString() + ' as String with charset ' + actualCharset.toString());
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.z3b_1.gd('Accept-Charset') == null))
      return Unit_instance;
    get_LOGGER_2().o2e('Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.x3b_1.toString());
    _this__u8e3s4.z3b_1.i2a('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.u3s_1 = $acceptCharsetHeader;
    this.v3s_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).y3s = function (request, content, $completion) {
    var tmp = this.z3s(request, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpPlainText$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.y3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        if (tmp === 0) {
          this.i8_1 = 1;
          invoke$addAcceptCharsetHeader(this.w3s_1, this.u3s_1);
          var tmp_0 = this.x3s_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.w3s_1);
          if (!(contentType_0 == null) && !(contentType_0.h2i_1 === Text_getInstance().r2h_1.h2i_1)) {
            return null;
          }
          return invoke$wrapContent(this.v3s_1, this.w3s_1, this.x3s_1, contentType_0);
        } else if (tmp === 1) {
          throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).z3s = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.u3s_1, this.v3s_1, completion);
    i.w3s_1 = request;
    i.x3s_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.y3s(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.i3t_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).n3t = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.o3t($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).p3t = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.n3t(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            if (!this.m3t_1.h2e_1.equals(PrimitiveClasses_getInstance().ob()))
              return null;
            this.h8_1 = 1;
            suspendResult = readRemaining(this.l3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.i3t_1, this.k3t_1.n3d(), bodyBytes);
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda_1).o3t = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.i3t_1, completion);
    i.j3t_1 = $this$transformResponseBody;
    i.k3t_1 = response;
    i.l3t_1 = content;
    i.m3t_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.n3t($this$transformResponseBody, response, content, requestedType, $completion);
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
    this.q3t_1 = true;
    this.r3t_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.s2p_1;
    return tmp0_subject === Companion_getInstance_1().b2o_1.s2p_1 || tmp0_subject === Companion_getInstance_1().c2o_1.s2p_1 || (tmp0_subject === Companion_getInstance_1().h2o_1.s2p_1 || (tmp0_subject === Companion_getInstance_1().i2o_1.s2p_1 || tmp0_subject === Companion_getInstance_1().d2o_1.s2p_1)) ? true : false;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 23, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.z3j_1.q3t_1;
    var allowHttpsDowngrade = $this$createClientPlugin.z3j_1.r3t_1;
    var tmp = Send_instance;
    $this$createClientPlugin.c3k(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.p3u_1 = $checkHttpMethod;
    this.q3u_1 = $allowHttpsDowngrade;
    this.r3u_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).i3q = function ($this$on, request, $completion) {
    var tmp = this.j3q($this$on, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpRedirect$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.h8_1 = 1;
            suspendResult = this.s3u_1.m3q(this.t3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.p3u_1 && !get_ALLOWED_FOR_REDIRECT().i2(origin.g3d().o3d())) {
              return origin;
            }

            this.h8_1 = 2;
            suspendResult = invoke$handleCall(this.s3u_1, this.t3u_1, origin, this.q3u_1, this.r3u_1.y3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRedirect$lambda$slambda).j3q = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.p3u_1, this.q3u_1, this.r3u_1, completion);
    i.s3u_1 = $this$on;
    i.t3u_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3q($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3u_1 = _this__u8e3s4;
    this.b3u_1 = context;
    this.c3u_1 = origin;
    this.d3u_1 = allowHttpsDowngrade;
    this.e3u_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            this.f3u_1 = this.c3u_1;
            this.g3u_1 = this.b3u_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.h8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.f3u_1.g3d().p3d().x2q_1;
            var previousAuthority = get_authority(this.f3u_1.g3d().p3d());
            if (!isRedirect(this.f3u_1.x3a().x3d()))
              return this.f3u_1;
            var location = this.f3u_1.x3a().u2m().gd('Location');
            if (location == null) {
              get_LOGGER_3().m2e('Location header missing from redirect response ' + this.f3u_1.g3d().p3d().toString() + '; returning response as is');
              return this.f3u_1;
            }

            this.e3u_1.y39_1.t2u(get_HttpResponseRedirectEvent(), this.f3u_1.x3a());
            get_LOGGER_3().o2e('Received redirect response to ' + location + ' for request ' + this.f3u_1.g3d().p3d().toString());
            var tmp_0 = this;
            var this_0 = new HttpRequestBuilder();
            this_0.s3h(this.g3u_1);
            this_0.x3b_1.h2q_1.q2();
            takeFrom(this_0.x3b_1, location);
            if (!this.d3u_1 && isSecure(previousProtocol) && !isSecure(this_0.x3b_1.k2q())) {
              get_LOGGER_3().o2e('Blocked redirect from ' + this.f3u_1.g3d().p3d().toString() + ' to ' + location + ' due to HTTPS downgrade');
              return this.f3u_1;
            }

            if (!(previousAuthority === get_authority_0(this_0.x3b_1))) {
              this_0.z3b_1.n2a('Authorization');
              get_LOGGER_3().o2e('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_0.x3b_1.u2r()));
            }

            tmp_0.g3u_1 = this_0;
            this.h8_1 = 2;
            suspendResult = this.a3u_1.m3q(this.g3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.f3u_1 = suspendResult;
            this.h8_1 = 1;
            continue $sm;
          case 3:
            throw this.k8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().v2m_1, Companion_getInstance_2().a2n_1]);
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
    this.c3v_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var tmp0 = this.c3v_1.g3v_1;
            this.h8_1 = 1;
            suspendResult = tmp0.v2c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 24);
    this.g3v_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).p24 = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(PipelineContext$proceed$ref).c9 = function ($completion) {
    return this.p24($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.p24($completion);
    }, 0, 9, 24, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.p3v_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).q3a = function ($this$intercept, it, $completion) {
    var tmp = this.r3a($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(SetupRequestContext$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.p3v_1(this.q3v_1.q2d_1, PipelineContext$proceed$ref_0(this.q3v_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupRequestContext$install$slambda).r3a = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.p3v_1, completion);
    i.q3v_1 = $this$intercept;
    i.r3v_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3a($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).s3v = function (client, handler) {
    var tmp = Phases_getInstance().a3j_1;
    client.s39_1.u2d(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).f3j = function (client, handler) {
    return this.s3v(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.u1a(attachToClientEngineJob$lambda(requestJob));
    requestJob.u1a(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.c3k(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.b3w_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).f3w = function (request, proceed, $completion) {
    var tmp = this.g3w(request, proceed, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.f3w(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.e3w_1 = SupervisorJob(this.c3w_1.b3c_1);
            attachToClientEngineJob(this.e3w_1, ensureNotNull(this.b3w_1.y3j_1.r39_1.u8(Key_instance)));
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 4;
            this.i8_1 = 3;
            this.c3w_1.b3c_1 = this.e3w_1;
            this.h8_1 = 2;
            suspendResult = this.d3w_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 6;
            this.h8_1 = 5;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              this.e3w_1.j1g(cause);
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 4:
            this.i8_1 = 6;
            var t = this.k8_1;
            this.e3w_1.k1g();
            throw t;
          case 5:
            this.i8_1 = 6;
            this.e3w_1.k1g();
            return Unit_instance;
          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 6) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).g3w = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.b3w_1, completion);
    i.c3w_1 = request;
    i.d3w_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.f3w(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        get_LOGGER_4().o2e('Cancelling request because engine Job failed with error: ' + cause.toString());
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().o2e('Cancelling request because engine Job completed');
        $requestJob.k1g();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.d1d();
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
    this.h3w_1 = request;
    this.i3w_1 = retryCount;
    this.j3w_1 = response;
    this.k3w_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return equalsLong(randomizationMs, new Long(0, 0)) ? new Long(0, 0) : Default_getInstance().li(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).u3w = function (it, $completion) {
    var tmp = this.v3w(it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).d9 = function (p1, $completion) {
    return this.u3w(p1 instanceof Long ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = delay(this.t3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).v3w = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.t3w_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.u3w(it, $completion);
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
    var it = response.x3d().s2p_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.x3w_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u2m();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.gd('Retry-After');
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
    tmp.c3x_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.d3x_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.e3x_1 = 0;
    this.f3x(3);
    this.g3x();
  }
  protoOf(HttpRequestRetryConfig).h3x = function () {
    var tmp = this.z3w_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).i3x = function () {
    var tmp = this.a3x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).j3x = function () {
    var tmp = this.b3x_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).k3x = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.e3x_1 = maxRetries;
    this.z3w_1 = block;
  };
  protoOf(HttpRequestRetryConfig).l3x = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.e3x_1 = maxRetries;
    this.a3x_1 = block;
  };
  protoOf(HttpRequestRetryConfig).m3x = function (maxRetries, retryOnTimeout) {
    this.l3x(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).n3x = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.m3x(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.m3x.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).o3x = function (maxRetries) {
    this.k3x(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).f3x = function (maxRetries) {
    this.o3x(maxRetries);
    this.n3x(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).p3x = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.b3x_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).q3x = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
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
    this.p3x(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).g3x = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? new Long(1000, 0) : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? new Long(60000, 0) : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? new Long(1000, 0) : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.q3x(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.q3x.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.r3x_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.w3w_1 = request;
    this.x3w_1 = response;
    this.y3w_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.s3x_1 = request;
    this.t3x_1 = response;
    this.u3x_1 = cause;
    this.v3x_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
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
    }, 0, 0, 25, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.z3j_1.h3x();
    var shouldRetryOnException = $this$createClientPlugin.z3j_1.i3x();
    var delayMillis = $this$createClientPlugin.z3j_1.j3x();
    var delay = $this$createClientPlugin.z3j_1.c3x_1;
    var maxRetries = $this$createClientPlugin.z3j_1.e3x_1;
    var modifyRequest = $this$createClientPlugin.z3j_1.d3x_1;
    $this$createClientPlugin.i3y(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.c3k(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.b3c_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.k1g();
      } else {
        subRequestJob.j1g(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.g3d(), call.x3a());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).j3y(request);
    var tmp = request.b3c_1;
    tmp.u1a(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.s3y_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).w3y = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.x3y($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).y3y = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.w3y(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        if (tmp === 0) {
          this.i8_1 = 1;
          var tmp0_elvis_lhs = this.u3y_1.c3c_1.x27(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.s3y_1 : tmp0_elvis_lhs;
          this.u3y_1.c3c_1.z27(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda).x3y = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.s3y_1, completion);
    i.t3y_1 = $this$onRequest;
    i.u3y_1 = request;
    i.v3y_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.w3y($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.h3z_1 = $shouldRetry;
    this.i3z_1 = $shouldRetryOnException;
    this.j3z_1 = $maxRetries;
    this.k3z_1 = $delayMillis;
    this.l3z_1 = $modifyRequest;
    this.m3z_1 = $this_createClientPlugin;
    this.n3z_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).i3q = function ($this$on, request, $completion) {
    var tmp = this.j3q($this$on, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            this.r3z_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p3z_1.c3c_1.x27(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.y3z_1 = tmp0_elvis_lhs == null ? this.h3z_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.p3z_1.c3c_1.x27(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.w3z_1 = tmp1_elvis_lhs == null ? this.i3z_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.p3z_1.c3c_1.x27(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.x3z_1 = tmp2_elvis_lhs == null ? this.j3z_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.p3z_1.c3c_1.x27(get_RetryDelayPerRequestAttributeKey());
            tmp_3.s3z_1 = tmp3_elvis_lhs == null ? this.k3z_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.p3z_1.c3c_1.x27(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.z3z_1 = tmp4_elvis_lhs == null ? this.l3z_1 : tmp4_elvis_lhs;
            this.t3z_1 = null;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.h8_1 = 9;
              continue $sm;
            }

            this.v3z_1 = invoke$prepareRequest(this.p3z_1);
            this.i8_1 = 5;
            if (!(this.t3z_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.p3z_1, this.t3z_1.j3w_1, this.t3z_1.k3w_1, this.t3z_1.i3w_1);
              this.z3z_1(modifyRequestContext, this.v3z_1);
            }

            this.h8_1 = 2;
            suspendResult = this.o3z_1.m3q(this.v3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q3z_1 = suspendResult;
            if (!invoke$shouldRetry(this.r3z_1, this.x3z_1, this.y3z_1, this.q3z_1)) {
              this.h8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.q3z_1.x3a(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.r3z_1 = this.r3z_1 + 1 | 0;
            tmp_5.u3z_1 = new HttpRetryEventData(this.v3z_1, this.r3z_1, this.q3z_1.x3a(), null);
            this.i8_1 = 8;
            this.h8_1 = 6;
            continue $sm;
          case 4:
            this.i8_1 = 8;
            this.h8_1 = 9;
            continue $sm;
          case 5:
            this.i8_1 = 8;
            var tmp_6 = this.k8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.k8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.r3z_1, this.x3z_1, this.w3z_1, this.v3z_1, cause)) {
                throw cause;
              }
              this.r3z_1 = this.r3z_1 + 1 | 0;
              tmp_7.u3z_1 = new HttpRetryEventData(this.v3z_1, this.r3z_1, null, cause);
              this.h8_1 = 6;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 6:
            this.i8_1 = 8;
            var retryData = this.u3z_1;
            this.t3z_1 = retryData;
            this.m3z_1.y3j_1.y39_1.t2u(get_HttpRequestRetryEvent(), this.t3z_1);
            var delayContext = new HttpRetryDelayContext(this.t3z_1.h3w_1, this.t3z_1.j3w_1, this.t3z_1.k3w_1);
            this.h8_1 = 7;
            suspendResult = this.n3z_1(this.s3z_1(delayContext, this.r3z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            get_LOGGER_5().o2e('Retrying request ' + this.p3z_1.x3b_1.toString() + ' attempt: ' + this.r3z_1);
            this.h8_1 = 1;
            continue $sm;
          case 8:
            throw this.k8_1;
          case 9:
            return this.q3z_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 8) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).j3q = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.h3z_1, this.i3z_1, this.j3z_1, this.k3z_1, this.l3z_1, this.m3z_1, this.n3z_1, completion);
    i.o3z_1 = $this$on;
    i.p3z_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3q($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e3y_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            if (get_isSaved(this.e3y_1)) {
              this.f3y_1 = this.e3y_1.w3d();
              this.h8_1 = 1;
              continue $sm;
            } else {
              this.g3y_1 = false;
              this.h8_1 = 4;
              continue $sm;
            }

          case 1:
            this.i8_1 = 5;
            this.h8_1 = 2;
            suspendResult = this.f3y_1.v1w(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h3y_1 = suspendResult;
            this.i8_1 = 6;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.h3y_1;
            this.i8_1 = 6;
            var this_0 = this.f3y_1;
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
              get_LOGGER_5().n2e('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.g3y_1 = tmp_0;
            this.h8_1 = 4;
            continue $sm;
          case 4:
            return this.g3y_1;
          case 5:
            this.i8_1 = 6;
            var t = this.k8_1;
            var this_2 = this.f3y_1;
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
              get_LOGGER_5().n2e('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.k8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.i8_1 === 6) {
          throw e_1;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_1;
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
      var tmp_0 = PrimitiveClasses_getInstance().jb();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().jb(), arrayOf([]), false);
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
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_4;
      try {
        tmp_4 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_5;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_5 = null;
        } else {
          throw $p_0;
        }
        tmp_4 = tmp_5;
      }
      var tmp$ret$2_0 = tmp_4;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_6 = PrimitiveClasses_getInstance().functionClass(3);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_7;
      try {
        tmp_7 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().pb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().gb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_8;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_8 = null;
        } else {
          throw $p_1;
        }
        tmp_7 = tmp_8;
      }
      var tmp$ret$2_1 = tmp_7;
      var tmp$ret$1_1 = new TypeInfo(tmp_6, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_9 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_11;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_11 = null;
        } else {
          throw $p_2;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_2 = tmp_10;
      var tmp$ret$1_2 = new TypeInfo(tmp_9, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_13;
      try {
        tmp_13 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().jb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Long), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_14;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_14 = null;
        } else {
          throw $p_3;
        }
        tmp_13 = tmp_14;
      }
      var tmp$ret$2_3 = tmp_13;
      var tmp$ret$1_3 = new TypeInfo(tmp_12, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.i40_1 = $plugin;
    this.j40_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).q3a = function ($this$intercept, content, $completion) {
    var tmp = this.r3a($this$intercept, content, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpSend$Plugin$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp_0 = this.l40_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.l40_1)) + ', with Content-Type: ' + toString_0(contentType(this.k40_1.q2d_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.k40_1.q2d_1;
            var body = this.l40_1;
            if (body == null) {
              tmp0.a3c_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2;
              try {
                tmp_2 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
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
              tmp0.t3h(new TypeInfo(tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.a3c_1 = body;
                tmp0.t3h(null);
              } else {
                tmp0.a3c_1 = body;
                var tmp_4 = getKClass(OutgoingContent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
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
                tmp0.t3h(new TypeInfo(tmp_4, tmp_5));
              }
            }

            var maxRetries = this.k40_1.q2d_1.c3c_1.x27(get_MaxRetriesPerRequestAttributeKey());
            var tmp_7;
            if (!(maxRetries == null) && maxRetries >= this.i40_1.m40_1) {
              var tmp_8;
              if (maxRetries < 2147483647) {
                tmp_8 = maxRetries + 1 | 0;
              } else {
                tmp_8 = maxRetries;
              }
              tmp_7 = tmp_8;
            } else {
              tmp_7 = this.i40_1.m40_1;
            }

            var maxSendCount = tmp_7;
            var realSender = new DefaultSender(maxSendCount, this.j40_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.i40_1.n40_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.h8_1 = 1;
            suspendResult = interceptedSender.o40(this.k40_1.q2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.h8_1 = 2;
            suspendResult = this.k40_1.u2c(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).r3a = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.i40_1, this.j40_1, completion);
    i.k40_1 = $this$intercept;
    i.l40_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.q3a($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x40_1 = _this__u8e3s4;
    this.y40_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var tmp0_safe_receiver = this.x40_1.c41_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.x40_1.b41_1 >= this.x40_1.z40_1) {
              throw new SendCountExceedException('Max send count ' + this.x40_1.z40_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.x40_1.b41_1;
            this.x40_1.b41_1 = _unary__edvuaz + 1 | 0;
            this.h8_1 = 1;
            suspendResult = this.x40_1.a41_1.u39_1.p2d(this.y40_1, this.y40_1.a3c_1, this);
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
            this.x40_1.c41_1 = call;
            return call;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function Config() {
    this.d41_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpSend), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.e41_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.e41_1;
  };
  protoOf(Plugin).f41 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.d41_1);
  };
  protoOf(Plugin).c3d = function (block) {
    return this.f41(block);
  };
  protoOf(Plugin).g41 = function (plugin, scope) {
    var tmp = Phases_getInstance().e3j_1;
    scope.s39_1.u2d(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).d3d = function (plugin, scope) {
    return this.g41(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.h41_1 = interceptor;
    this.i41_1 = nextSender;
  }
  protoOf(InterceptedSender).o40 = function (requestBuilder, $completion) {
    return this.h41_1(this.i41_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.z40_1 = maxSendCount;
    this.a41_1 = client;
    this.b41_1 = 0;
    this.c41_1 = null;
  }
  protoOf(DefaultSender).o40 = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.m40_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.n40_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).j41 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.n40_1.b1(block);
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
    return _this__u8e3s4.k41(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.o41(requestTimeoutMillis);
    $this.p41(connectTimeoutMillis);
    $this.q41(socketTimeoutMillis);
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
    this.r41_1 = new Long(-1, 2147483647);
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.s41_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_9() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).o41 = function (value) {
    this.l41_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).t41 = function () {
    return this.l41_1;
  };
  protoOf(HttpTimeoutConfig).p41 = function (value) {
    this.m41_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).u41 = function () {
    return this.m41_1;
  };
  protoOf(HttpTimeoutConfig).q41 = function (value) {
    this.n41_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).v41 = function () {
    return this.n41_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!equals(this.l41_1, other.l41_1))
      return false;
    if (!equals(this.m41_1, other.m41_1))
      return false;
    if (!equals(this.n41_1, other.n41_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    var tmp0_safe_receiver = this.l41_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.m41_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.n41_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_9();
    this.l41_1 = new Long(0, 0);
    this.m41_1 = new Long(0, 0);
    this.n41_1 = new Long(0, 0);
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
    var tmp = request.x3b_1.u2r();
    var tmp0_safe_receiver = request.w41(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t41());
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
    this.x41_1 = url;
    this.y41_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).t1g = function () {
    return new HttpRequestTimeoutException(this.x41_1, this.y41_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.x3b_1.k2q())) {
      var tmp_1 = _this__u8e3s4.a3c_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.a3c_1;
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
    var executionContext = request.b3c_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.b3c_1;
    tmp_0.u1a(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 26);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.z3j_1.t41();
    var connectTimeoutMillis = $this$createClientPlugin.z3j_1.u41();
    var socketTimeoutMillis = $this$createClientPlugin.z3j_1.v41();
    var tmp = Send_instance;
    $this$createClientPlugin.c3k(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.h42_1 = $connectTimeoutMillis;
    this.i42_1 = $socketTimeoutMillis;
    this.j42_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).i3q = function ($this$on, request, $completion) {
    var tmp = this.j3q($this$on, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpTimeout$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.i3q(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var callerContext = this.n8();
            var supportsRequestTimeout = get_supportsRequestTimeout(this.l42_1);
            var configuration = this.l42_1.w41(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.j42_1, this.h42_1, this.i42_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.l42_1.k41(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.u41();
              tmp0_safe_receiver.p41(tmp0_elvis_lhs == null ? this.h42_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.v41();
              tmp0_safe_receiver.q41(tmp1_elvis_lhs == null ? this.i42_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.t41();
                tmp0_safe_receiver.o41(tmp2_elvis_lhs == null ? this.j42_1 : tmp2_elvis_lhs);
                applyRequestTimeout(CoroutineScope_0(callerContext), this.l42_1, tmp0_safe_receiver.t41());
              }
            }

            this.h8_1 = 1;
            suspendResult = this.k42_1.m3q(this.l42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpTimeout$lambda$slambda).j3q = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.h42_1, this.i42_1, this.j42_1, completion);
    i.k42_1 = $this$on;
    i.l42_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.i3q($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.u42_1 = $requestTimeout;
    this.v42_1 = $request;
    this.w42_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).u25 = function ($this$launch, $completion) {
    var tmp = this.v25($this$launch, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(applyRequestTimeout$slambda).d9 = function (p1, $completion) {
    return this.u25((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = delay(this.u42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.v42_1);
            var this_0 = get_LOGGER_6();
            if (get_isTraceEnabled(this_0)) {
              this_0.o2e('Request timeout: ' + this.v42_1.x3b_1.toString());
            }

            cancel_2(this.w42_1, ensureNotNull(cause.message), cause);
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(applyRequestTimeout$slambda).v25 = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.u42_1, this.v42_1, this.w42_1, completion);
    i.x42_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.u25($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.c1b();
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
    return _this__u8e3s4.n3d().h3d().y27(get_RESPONSE_BODY_SAVED());
  }
  function SaveBodyPluginConfig() {
    this.y42_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 27);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_2().u3j_1;
    $this$createClientPlugin.y3j_1.v39_1.u2d(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).r3j = function ($this$intercept, response, $completion) {
    var tmp = this.s3j($this$intercept, response, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(SaveBody$lambda$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.r3j(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.l43_1 = this.i43_1.n3d();
            this.j43_1 = this.l43_1.h3d();
            if (this.j43_1.y27(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.o2e('Skipping body saving for ' + this.l43_1.g3d().p3d().toString());
              }
              return Unit_instance;
            }

            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 5;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.o2e('Saving body for ' + this.l43_1.g3d().p3d().toString());
            }

            this.h8_1 = 2;
            suspendResult = save(this.l43_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k43_1 = suspendResult.x3a();
            this.i8_1 = 6;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.k43_1;
            this.i8_1 = 6;
            this.h43_1;
            var tmp_1;
            try {
              cancel_1(this.i43_1.w3d());
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

            var this_2 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_2);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_7().n2e('Failed to cancel response body', tmp0_safe_receiver);
            }

            var savedResponse = tmp_0;
            this.j43_1.z27(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.h8_1 = 4;
            suspendResult = this.h43_1.u2c(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            this.i8_1 = 6;
            var t = this.k8_1;
            this.h43_1;
            var tmp_3;
            try {
              cancel_1(this.i43_1.w3d());
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
              get_LOGGER_7().n2e('Failed to cancel response body', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.k8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.i8_1 === 6) {
          throw e_1;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(SaveBody$lambda$slambda).s3j = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.h43_1 = $this$intercept;
    i.i43_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.r3j($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 28, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.z3j_1.y42_1) {
      get_LOGGER_7().m2e('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().m2e('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_5 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_5, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.m43_1 = hook;
    this.n43_1 = handler;
  }
  protoOf(HookHandler).e3c = function (client) {
    this.m43_1.f3j(client, this.n43_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.x3j_1 = key;
    this.y3j_1 = client;
    this.z3j_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.a3k_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.b3k_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).i3y = function (block) {
    this.c3k(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).k3s = function (block) {
    this.c3k(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).c3k = function (hook, handler) {
    this.a3k_1.b1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.o43_1 = key;
    this.p43_1 = config;
    this.q43_1 = body;
    var tmp = this;
    tmp.r43_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).e3c = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.o43_1, scope, this.p43_1);
    // Inline function 'kotlin.apply' call
    this.q43_1(tmp0);
    var pluginBuilder = tmp0;
    this.r43_1 = pluginBuilder.b3k_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.a3k_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.e3c(scope);
    }
  };
  protoOf(ClientPluginInstance).w3 = function () {
    this.r43_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.a44_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).q3a = function ($this$intercept, it, $completion) {
    var tmp = this.r3a($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(SetupRequest$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.a44_1(this.b44_1.q2d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetupRequest$install$slambda).r3a = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.a44_1, completion);
    i.b44_1 = $this$intercept;
    i.c44_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3a($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).d44 = function (client, handler) {
    var tmp = Phases_getInstance().a3j_1;
    client.s39_1.u2d(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).f3j = function (client, handler) {
    return this.d44(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.k3q_1 = httpSendSender;
    this.l3q_1 = coroutineContext;
  }
  protoOf(Sender_0).s19 = function () {
    return this.l3q_1;
  };
  protoOf(Sender_0).m3q = function (requestBuilder, $completion) {
    return this.k3q_1.o40(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.m44_1 = $handler;
    this.n44_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).q44 = function ($this$intercept, request, $completion) {
    var tmp = this.r44($this$intercept, request, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(Send$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.q44(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.m44_1(new Sender_0(this.o44_1, this.n44_1.r39_1), this.p44_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Send$install$slambda).r44 = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.m44_1, this.n44_1, completion);
    i.o44_1 = $this$intercept;
    i.p44_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.q44($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).s44 = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.j41(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).f3j = function (client, handler) {
    return this.s44(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    this.t44_1 = createConfiguration;
    this.u44_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().db(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.v44_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.v44_1;
  };
  protoOf(ClientPluginImpl).w44 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.t44_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.v44_1, config, this.u44_1);
  };
  protoOf(ClientPluginImpl).c3d = function (block) {
    return this.w44(block);
  };
  protoOf(ClientPluginImpl).x44 = function (plugin, scope) {
    plugin.e3c(scope);
  };
  protoOf(ClientPluginImpl).d3d = function (plugin, scope) {
    return this.x44(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.g45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).q3a = function ($this$intercept, it, $completion) {
    var tmp = this.r3a($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(RequestHook$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.g45_1(new OnRequestContext(), this.h45_1.q2d_1, this.h45_1.t2c(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestHook$install$slambda).r3a = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.g45_1, completion);
    i.h45_1 = $this$intercept;
    i.i45_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3a($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).j45 = function (client, handler) {
    var tmp = Phases_getInstance().b3j_1;
    client.s39_1.u2d(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).f3j = function (client, handler) {
    return this.j45(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.s45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).l3b = function ($this$intercept, it, $completion) {
    var tmp = this.m3b($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3b(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var _destruct__k2r9zo = this.t45_1.t2c();
            this.v45_1 = _destruct__k2r9zo.sf();
            var content = _destruct__k2r9zo.tf();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.h8_1 = 1;
            suspendResult = this.s45_1(new TransformResponseBodyContext(), this.t45_1.q2d_1.x3a(), content, this.v45_1, this);
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
              tmp_1 = !this.v45_1.h2e_1.la(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.v45_1.toString());
            }

            this.h8_1 = 2;
            suspendResult = this.t45_1.u2c(new HttpResponseContainer(this.v45_1, newContent), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(TransformResponseBodyHook$install$slambda).m3b = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.s45_1, completion);
    i.t45_1 = $this$intercept;
    i.u45_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.l3b($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).w45 = function (client, handler) {
    var tmp = Phases_getInstance_1().x3c_1;
    client.t39_1.u2d(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).f3j = function (client, handler) {
    return this.w45(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
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
    this.x45_1 = delegate;
    this.y45_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).i31 = function (frame, $completion) {
    return this.x45_1.i31(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).n1w = function ($completion) {
    return this.x45_1.n1w($completion);
  };
  protoOf(DefaultClientWebSocketSession).e31 = function (_set____db54di) {
    this.x45_1.e31(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).f31 = function () {
    return this.x45_1.f31();
  };
  protoOf(DefaultClientWebSocketSession).g31 = function () {
    return this.x45_1.g31();
  };
  protoOf(DefaultClientWebSocketSession).h31 = function () {
    return this.x45_1.h31();
  };
  protoOf(DefaultClientWebSocketSession).s19 = function () {
    return this.x45_1.s19();
  };
  protoOf(DefaultClientWebSocketSession).d31 = function (negotiatedExtensions) {
    this.x45_1.d31(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.z45_1 = session;
    this.a46_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).i31 = function (frame, $completion) {
    return this.z45_1.i31(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).n1w = function ($completion) {
    return this.z45_1.n1w($completion);
  };
  protoOf(DelegatingClientWebSocketSession).e31 = function (_set____db54di) {
    this.z45_1.e31(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).f31 = function () {
    return this.z45_1.f31();
  };
  protoOf(DelegatingClientWebSocketSession).g31 = function () {
    return this.z45_1.g31();
  };
  protoOf(DelegatingClientWebSocketSession).h31 = function () {
    return this.z45_1.h31();
  };
  protoOf(DelegatingClientWebSocketSession).s19 = function () {
    return this.z45_1.s19();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().ci(nonce));
    tmp.d46_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.k2a('Upgrade', 'websocket');
    this_1.k2a('Connection', 'Upgrade');
    this_1.k2a('Sec-WebSocket-Key', this.d46_1);
    this_1.k2a('Sec-WebSocket-Version', '13');
    tmp_0.e46_1 = this_1.n2i();
  }
  protoOf(WebSocketContent).u2m = function () {
    return this.e46_1;
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
    this.n46_1 = $extensionsSupported;
    this.o46_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).q3a = function ($this$intercept, it, $completion) {
    var tmp = this.r3a($this$intercept, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(WebSockets$Plugin$install$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            if (!isWebsocket(this.p46_1.q2d_1.x3b_1.k2q())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.o2e('Skipping WebSocket plugin for non-websocket request: ' + this.p46_1.q2d_1.x3b_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.o2e('Sending WebSocket request ' + this.p46_1.q2d_1.x3b_1.toString());
            }

            this.p46_1.q2d_1.k41(WebSocketCapability_instance, Unit_instance);
            if (this.n46_1) {
              installExtensions(this.o46_1, this.p46_1.q2d_1);
            }

            this.p46_1.q2d_1.c3c_1.a28(get_WEBSOCKETS_KEY(), this.o46_1);
            this.h8_1 = 1;
            suspendResult = this.p46_1.u2c(new WebSocketContent(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebSockets$Plugin$install$slambda).r3a = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.n46_1, this.o46_1, completion);
    i.p46_1 = $this$intercept;
    i.q46_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.q3a($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.z46_1 = $plugin;
    this.a47_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).l3b = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.m3b($this$intercept, _destruct__k2r9zo, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3b(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var info = this.c47_1.sf();
            var session = this.c47_1.tf();
            var response = this.b47_1.q2d_1.x3a();
            var status = response.x3d();
            var requestContent = get_request(response).q3d();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.o2e('Skipping non-websocket response from ' + this.b47_1.q2d_1.g3d().p3d().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().q2n_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().q2n_1.s2p_1 + ' but was ' + status.s2p_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.o2e('Receive websocket session from ' + this.b47_1.q2d_1.g3d().p3d().toString() + ': ' + toString(session));
            }

            if (!equalsLong(this.z46_1.e47_1, new Long(2147483647, 0))) {
              session.e31(this.z46_1.e47_1);
            }

            var tmp_0;
            if (info.h2e_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.z46_1.i47(session);
              var clientSession = new DefaultClientWebSocketSession(this.b47_1.q2d_1, defaultSession);
              var tmp_1;
              if (this.a47_1) {
                tmp_1 = completeNegotiation(this.z46_1, this.b47_1.q2d_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.d31(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.b47_1.q2d_1, session);
            }

            var clientSession_0 = tmp_0;
            this.h8_1 = 1;
            suspendResult = this.b47_1.u2c(new HttpResponseContainer(info, clientSession_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).m3b = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.z46_1, this.a47_1, completion);
    i.b47_1 = $this$intercept;
    i.c47_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.l3b($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.f47_1.n2i();
    context.c3c_1.z27(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.w38();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.x3a().u2m().gd('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.h3d().w27(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.x38(serverExtensions)) {
        destination.b1(element);
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
    this.j47_1 = new WebSocketExtensionsConfig();
    this.k47_1 = new WebSocketChannelsConfig();
    this.l47_1 = new Long(0, 0);
    this.m47_1 = new Long(2147483647, 0);
    this.n47_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(WebSockets), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.o47_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.o47_1;
  };
  protoOf(Plugin_0).p47 = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.l47_1, config.m47_1, config.j47_1, config.n47_1, config.k47_1);
  };
  protoOf(Plugin_0).c3d = function (block) {
    return this.p47(block);
  };
  protoOf(Plugin_0).q47 = function (plugin, scope) {
    var extensionsSupported = scope.m39_1.e3h().i2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().d3j_1;
    scope.s39_1.u2d(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().x3c_1;
    scope.t39_1.u2d(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).d3d = function (plugin, scope) {
    return this.q47(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
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
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_3().j31_1 : channelsConfig;
    this.d47_1 = pingIntervalMillis;
    this.e47_1 = maxFrameSize;
    this.f47_1 = extensionsConfig;
    this.g47_1 = contentConverter;
    this.h47_1 = channelsConfig;
  }
  protoOf(WebSockets).i47 = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.d47_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.d47_1, timeoutMillis, this.h47_1);
    this_1.e31(this.e47_1);
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(WebSockets);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_4;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_4 = null;
        } else {
          throw $p_0;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$2_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$2_0);
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
    tmp.s47_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.t47_1 = call;
    this.u47_1 = data.y3g_1;
    this.v47_1 = data.x3g_1;
    this.w47_1 = data.a3h_1;
    this.x47_1 = data.z3g_1;
    this.y47_1 = data.c3h_1;
  }
  protoOf(DefaultHttpRequest).n3d = function () {
    return this.t47_1;
  };
  protoOf(DefaultHttpRequest).s19 = function () {
    return this.n3d().s19();
  };
  protoOf(DefaultHttpRequest).o3d = function () {
    return this.u47_1;
  };
  protoOf(DefaultHttpRequest).p3d = function () {
    return this.v47_1;
  };
  protoOf(DefaultHttpRequest).q3d = function () {
    return this.w47_1;
  };
  protoOf(DefaultHttpRequest).u2m = function () {
    return this.x47_1;
  };
  protoOf(DefaultHttpRequest).h3d = function () {
    return this.y47_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_10() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.x3b_1 = new URLBuilder();
    this.y3b_1 = Companion_getInstance_2().v2m_1;
    this.z3b_1 = new HeadersBuilder();
    this.a3c_1 = EmptyContent_getInstance();
    this.b3c_1 = SupervisorJob();
    this.c3c_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).u2m = function () {
    return this.z3b_1;
  };
  protoOf(HttpRequestBuilder).t3h = function (value) {
    if (!(value == null)) {
      this.c3c_1.z27(get_BodyTypeAttributeKey(), value);
    } else {
      this.c3c_1.b28(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).z47 = function () {
    return this.c3c_1.x27(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).n2i = function () {
    var tmp = this.x3b_1.n2i();
    var tmp_0 = this.y3b_1;
    var tmp_1 = this.z3b_1.n2i();
    var tmp_2 = this.a3c_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.a3c_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.b3c_1, this.c3c_1);
  };
  protoOf(HttpRequestBuilder).s3h = function (builder) {
    this.b3c_1 = builder.b3c_1;
    return this.j3y(builder);
  };
  protoOf(HttpRequestBuilder).j3y = function (builder) {
    this.y3b_1 = builder.y3b_1;
    this.a3c_1 = builder.a3c_1;
    this.t3h(builder.z47());
    takeFrom_0(this.x3b_1, builder.x3b_1);
    this.x3b_1.f2q_1 = this.x3b_1.f2q_1;
    appendAll(this.z3b_1, builder.z3b_1);
    putAll(this.c3c_1, builder.c3c_1);
    return this;
  };
  protoOf(HttpRequestBuilder).k41 = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.c3c_1.c28(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.u2(key, capability);
  };
  protoOf(HttpRequestBuilder).w41 = function (key) {
    var tmp0_safe_receiver = this.c3c_1.x27(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(key);
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
    set(_this__u8e3s4.x3b_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.u2m();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.x3g_1 = url;
    this.y3g_1 = method;
    this.z3g_1 = headers;
    this.a3h_1 = body;
    this.b3h_1 = executionContext;
    this.c3h_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.c3h_1.x27(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
    tmp.d3h_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.x3g_1.toString() + ', method=' + this.y3g_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.c3e_1 = statusCode;
    this.d3e_1 = requestTime;
    this.e3e_1 = headers;
    this.f3e_1 = version;
    this.g3e_1 = body;
    this.h3e_1 = callContext;
    this.i3e_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.c3e_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.a3h_1;
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.a3j_1 = new PipelinePhase('Before');
    this.b3j_1 = new PipelinePhase('State');
    this.c3j_1 = new PipelinePhase('Transform');
    this.d3j_1 = new PipelinePhase('Render');
    this.e3j_1 = new PipelinePhase('Send');
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
    Pipeline.call(this, [Phases_getInstance().a3j_1, Phases_getInstance().b3j_1, Phases_getInstance().c3j_1, Phases_getInstance().d3j_1, Phases_getInstance().e3j_1]);
    this.i48_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).o2d = function () {
    return this.i48_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.f3c_1 = new PipelinePhase('Before');
    this.g3c_1 = new PipelinePhase('State');
    this.h3c_1 = new PipelinePhase('Monitoring');
    this.i3c_1 = new PipelinePhase('Engine');
    this.j3c_1 = new PipelinePhase('Receive');
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
    Pipeline.call(this, [Phases_getInstance_0().f3c_1, Phases_getInstance_0().g3c_1, Phases_getInstance_0().h3c_1, Phases_getInstance_0().i3c_1, Phases_getInstance_0().j3c_1]);
    this.q48_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).o2d = function () {
    return this.q48_1;
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    this.s48_1 = formData;
    this.t48_1 = toByteArray_0(formUrlEncode(this.s48_1));
    this.u48_1 = fromInt(this.t48_1.length);
    this.v48_1 = withCharset(Application_getInstance().h2g_1, Charsets_getInstance().u26_1);
  }
  protoOf(FormDataContent).h2s = function () {
    return this.u48_1;
  };
  protoOf(FormDataContent).g2s = function () {
    return this.v48_1;
  };
  protoOf(FormDataContent).i2s = function () {
    return this.t48_1;
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
    this.e49_1 = _this__u8e3s4;
    this.f49_1 = channel;
  }
  protoOf($writeToCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 25;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 21;
            this.i8_1 = 20;
            this.m49_1 = this.e49_1.v49_1.t();
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!this.m49_1.u()) {
              this.h8_1 = 18;
              continue $sm;
            }

            this.l49_1 = this.m49_1.v();
            this.h8_1 = 3;
            suspendResult = writeFully_0(this.f49_1, this.e49_1.r49_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.h8_1 = 4;
            suspendResult = writeFully_0(this.f49_1, this.l49_1.x49_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h8_1 = 5;
            suspendResult = writeFully_0(this.f49_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.l49_1;
            if (tmp0_subject instanceof InputPart) {
              this.k49_1 = this.l49_1.e4a_1();
              this.h8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.h8_1 = 6;
                suspendResult = copyTo_0(this.l49_1.b4a_1(), this.f49_1, this);
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
            this.h49_1 = suspendResult;
            this.h8_1 = 16;
            continue $sm;
          case 7:
            this.j49_1 = this.k49_1;
            this.i49_1 = null;
            this.h8_1 = 8;
            continue $sm;
          case 8:
            this.h8_1 = 9;
            continue $sm;
          case 9:
            this.i8_1 = 13;
            this.i8_1 = 12;
            var input = this.j49_1;
            this.h8_1 = 10;
            suspendResult = copyTo_1(input, this.f49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.h8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.i8_1 = 20;
            closeFinally(this.j49_1, this.i49_1);
            this.h8_1 = 15;
            continue $sm;
          case 12:
            this.i8_1 = 13;
            var tmp_2 = this.k8_1;
            if (tmp_2 instanceof Error) {
              var e = this.k8_1;
              var tmp_3 = this;
              this.i49_1 = e;
              throw e;
            } else {
              throw this.k8_1;
            }

          case 13:
            this.i8_1 = 20;
            var t = this.k8_1;
            closeFinally(this.j49_1, this.i49_1);
            throw t;
          case 14:
            this.i8_1 = 20;
            closeFinally(this.j49_1, this.i49_1);
            if (false) {
              this.h8_1 = 7;
              continue $sm;
            }

            this.h8_1 = 15;
            continue $sm;
          case 15:
            this.h49_1 = Unit_instance;
            this.h8_1 = 16;
            continue $sm;
          case 16:
            this.h8_1 = 17;
            suspendResult = writeFully_0(this.f49_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.h8_1 = 2;
            continue $sm;
          case 18:
            this.h8_1 = 19;
            suspendResult = writeFully_0(this.f49_1, this.e49_1.s49_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.i8_1 = 25;
            this.h8_1 = 23;
            continue $sm;
          case 20:
            this.i8_1 = 21;
            var tmp_4 = this.k8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.k8_1;
              close(this.f49_1, cause);
              this.i8_1 = 25;
              this.h8_1 = 23;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 21:
            this.i8_1 = 25;
            this.g49_1 = this.k8_1;
            this.h8_1 = 22;
            suspendResult = this.f49_1.w1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.g49_1;
          case 23:
            this.i8_1 = 25;
            this.h8_1 = 24;
            suspendResult = this.f49_1.w1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 25) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().k2h_1.j2i('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.o49_1 = parts;
    this.p49_1 = boundary;
    this.q49_1 = contentType;
    this.r49_1 = toByteArray_0('--' + this.p49_1 + '\r\n');
    this.s49_1 = toByteArray_0('--' + this.p49_1 + '--\r\n');
    this.t49_1 = this.s49_1.length;
    this.u49_1 = imul(get_RN_BYTES().length, 2) + this.r49_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.o49_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.b2u_1.a2a().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.b2u_1.gd('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.u49_1;
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
        tmp_0 = new ChannelPart(headers, item.k4a_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.u49_1;
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
          tmp_0 = new InputPart(headers_0, item.t2t_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.n2t_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.u49_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.u49_1;
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
              tmp_0 = new ChannelPart(headers_2, item.z2t_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.b1(tmp$ret$2);
    }
    tmp.v49_1 = destination;
    this.w49_1 = null;
    var rawLength = new Long(0, 0);
    var _iterator__ex2g4s_1 = this.v49_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.y49_1;
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
      var other_5 = this.t49_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.w49_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).g2s = function () {
    return this.q49_1;
  };
  protoOf(MultiPartFormDataContent).h2s = function () {
    return this.w49_1;
  };
  protoOf(MultiPartFormDataContent).i2u = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
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
        this_0.q(toString_1(Default_getInstance().uf(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.e4a_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.b4a_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.x49_1 = headers;
    this.y49_1 = size;
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
    tmp.l4a_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).m4a = function (key, value, headers) {
    var tmp0 = this.l4a_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).n4a = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_4().p2m_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.m4a(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.m4a.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).o4a = function (key, value, headers) {
    var tmp0 = this.l4a_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.b1(element);
  };
  protoOf(FormBuilder).p4a = function () {
    return this.l4a_1;
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
      var key = element.sf();
      var value = element.tf();
      var headers = element.t4a();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.k2a('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.l2a(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.n2i());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.n2i());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.n2i());
          } else {
            if (isByteArray(value)) {
              partHeaders.k2a('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.n2i());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.k2a('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.n2i());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.w4a_1;
                  if (!(size == null)) {
                    partHeaders.k2a('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.x4a_1, formData$lambda_6, partHeaders.n2i());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.u4a_1;
                    if (!(size_0 == null)) {
                      partHeaders.k2a('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.v4a_1, partHeaders.n2i());
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
      result.b1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_4().p2m_1 : headers;
    this.q4a_1 = key;
    this.r4a_1 = value;
    this.s4a_1 = headers;
  }
  protoOf(FormPart).sf = function () {
    return this.q4a_1;
  };
  protoOf(FormPart).tf = function () {
    return this.r4a_1;
  };
  protoOf(FormPart).t4a = function () {
    return this.s4a_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.q4a_1 + ', value=' + toString(this.r4a_1) + ', headers=' + toString(this.s4a_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.q4a_1);
    result = imul(result, 31) + hashCode(this.r4a_1) | 0;
    result = imul(result, 31) + hashCode(this.s4a_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.q4a_1 === other.q4a_1))
      return false;
    if (!equals(this.r4a_1, other.r4a_1))
      return false;
    if (!equals(this.s4a_1, other.s4a_1))
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
      return $value.l17();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.w3();
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
      _this__u8e3s4.u2m().k2a(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.y4a_1 = call;
    this.z4a_1 = responseData.h3e_1;
    this.a4b_1 = responseData.c3e_1;
    this.b4b_1 = responseData.f3e_1;
    this.c4b_1 = responseData.d3e_1;
    this.d4b_1 = responseData.i3e_1;
    var tmp = this;
    var tmp_0 = responseData.g3e_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.e4b_1 = tmp0_elvis_lhs == null ? Companion_getInstance().t1y_1 : tmp0_elvis_lhs;
    this.f4b_1 = responseData.e3e_1;
  }
  protoOf(DefaultHttpResponse).n3d = function () {
    return this.y4a_1;
  };
  protoOf(DefaultHttpResponse).s19 = function () {
    return this.z4a_1;
  };
  protoOf(DefaultHttpResponse).x3d = function () {
    return this.a4b_1;
  };
  protoOf(DefaultHttpResponse).y3d = function () {
    return this.b4b_1;
  };
  protoOf(DefaultHttpResponse).z3d = function () {
    return this.c4b_1;
  };
  protoOf(DefaultHttpResponse).a3e = function () {
    return this.d4b_1;
  };
  protoOf(DefaultHttpResponse).w3d = function () {
    return this.e4b_1;
  };
  protoOf(DefaultHttpResponse).u2m = function () {
    return this.f4b_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).p3d().toString() + ', ' + this.x3d().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.n3d().g3d();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().u26_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4b_1 = _this__u8e3s4;
    this.p4b_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.o4b_1);
            var originCharset = tmp0_elvis_lhs == null ? this.p4b_1 : tmp0_elvis_lhs;
            this.q4b_1 = originCharset.y26();
            var this_0 = this.o4b_1;
            this.h8_1 = 1;
            var tmp_0 = this_0.n3d();
            var tmp_1 = getKClass(Source);
            var tmp_2;
            try {
              tmp_2 = createKType(getKClass(Source), arrayOf([]), false);
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

            suspendResult = tmp_0.k3d(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.q4b_1, input);
          case 2:
            throw this.k8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.v3c_1 = new PipelinePhase('Receive');
    this.w3c_1 = new PipelinePhase('Parse');
    this.x3c_1 = new PipelinePhase('Transform');
    this.y3c_1 = new PipelinePhase('State');
    this.z3c_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_1().v3c_1, Phases_getInstance_1().w3c_1, Phases_getInstance_1().x3c_1, Phases_getInstance_1().y3c_1, Phases_getInstance_1().z3c_1]);
    this.y4b_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).o2d = function () {
    return this.y4b_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.u3j_1 = new PipelinePhase('Before');
    this.v3j_1 = new PipelinePhase('State');
    this.w3j_1 = new PipelinePhase('After');
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
    Pipeline.call(this, [Phases_getInstance_2().u3j_1, Phases_getInstance_2().v3j_1, Phases_getInstance_2().w3j_1]);
    this.g4c_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).o2d = function () {
    return this.g4c_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.u3e_1 = expectedType;
    this.v3e_1 = response;
  }
  protoOf(HttpResponseContainer).sf = function () {
    return this.u3e_1;
  };
  protoOf(HttpResponseContainer).tf = function () {
    return this.v3e_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.u3e_1.toString() + ', response=' + toString(this.v3e_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.u3e_1.hashCode();
    result = imul(result, 31) + hashCode(this.v3e_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.u3e_1.equals(other.u3e_1))
      return false;
    if (!equals(this.v3e_1, other.v3e_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p4c_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 7;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 6;
            var builder = (new HttpRequestBuilder()).s3h(this.p4c_1.t4c_1);
            this.h8_1 = 2;
            suspendResult = this.p4c_1.u4c_1.a3d(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s4c_1 = suspendResult;
            this.h8_1 = 3;
            suspendResult = save(this.s4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r4c_1 = suspendResult.x3a();
            this.h8_1 = 4;
            suspendResult = this.p4c_1.v4c(this.s4c_1.x3a(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.r4c_1;
          case 5:
            return this.q4c_1;
          case 6:
            this.i8_1 = 7;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.k8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.k8_1;
            }

          case 7:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 7) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4d_1 = _this__u8e3s4;
    this.f4d_1 = _this__u8e3s4_0;
    this.g4d_1 = cause;
  }
  protoOf($cleanupCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            var tmp_0 = get_job(this.f4d_1.s19());
            var job = isInterface(tmp_0, CompletableJob) ? tmp_0 : THROW_CCE();
            this.h4d_1 = job;
            var $this$apply = this.h4d_1;
            var tmp0_subject = this.g4d_1;
            if (tmp0_subject == null)
              $this$apply.k1g();
            else {
              if (tmp0_subject instanceof CancellationException) {
                $this$apply.b1b(this.g4d_1);
              } else {
                $this$apply.b1b(CancellationException_init_$Create$('Exception occurred during request execution', this.g4d_1));
              }
            }

            if (!get_isSaved(this.f4d_1)) {
              try {
                cancel_1(this.f4d_1.w3d());
              } catch ($p) {
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                } else {
                  throw $p;
                }
              }
            }

            this.h8_1 = 1;
            suspendResult = $this$apply.y1a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.t4c_1 = builder;
    this.u4c_1 = client;
  }
  protoOf(HttpStatement).i4d = function ($completion) {
    return this.j4d($completion);
  };
  protoOf(HttpStatement).j4d = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpStatement).v4c = function (_this__u8e3s4, cause, $completion) {
    var tmp = new $cleanupCOROUTINE$(this, _this__u8e3s4, cause, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.t4c_1.x3b_1.toString() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).p1y_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.s4d_1 = $this_observable;
    this.t4d_1 = $listener;
    this.u4d_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).j2z = function ($this$writer, $completion) {
    var tmp = this.k2z($this$writer, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(observable$slambda).d9 = function (p1, $completion) {
    return this.j2z(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 16;
            this.b4e_1 = get_ByteArrayPool();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.x4d_1 = this.b4e_1;
            this.w4d_1 = this.x4d_1.j27();
            this.h8_1 = 2;
            continue $sm;
          case 2:
            this.h8_1 = 3;
            continue $sm;
          case 3:
            this.i8_1 = 15;
            this.a4e_1 = this.w4d_1;
            this.y4d_1 = new Long(0, 0);
            this.h8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.s4d_1.t1w()) {
              this.h8_1 = 9;
              continue $sm;
            }

            this.h8_1 = 5;
            suspendResult = readAvailable(this.s4d_1, this.a4e_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.z4d_1 = suspendResult;
            if (this.z4d_1 <= 0) {
              this.h8_1 = 4;
              continue $sm;
            } else {
              this.h8_1 = 6;
              continue $sm;
            }

          case 6:
            this.h8_1 = 7;
            suspendResult = writeFully_0(this.v4d_1.q24_1, this.a4e_1, 0, this.z4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.y4d_1;
            var other = this.z4d_1;
            tmp_0.y4d_1 = add(tmp0, fromInt(other));
            this.h8_1 = 8;
            suspendResult = this.t4d_1.y3f(this.y4d_1, this.u4d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.h8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.s4d_1.s1w();
            close(this.v4d_1.q24_1, closedCause);
            if (closedCause == null && equalsLong(this.y4d_1, new Long(0, 0))) {
              this.h8_1 = 10;
              suspendResult = this.t4d_1.y3f(this.y4d_1, this.u4d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 11;
              continue $sm;
            }

          case 10:
            this.h8_1 = 11;
            continue $sm;
          case 11:
            this.i8_1 = 16;
            this.h8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.i8_1 = 16;
            this.x4d_1.k27(this.w4d_1);
            this.h8_1 = 14;
            continue $sm;
          case 13:
            this.i8_1 = 16;
            this.x4d_1.k27(this.w4d_1);
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.i8_1 = 16;
            var t = this.k8_1;
            this.x4d_1.k27(this.w4d_1);
            throw t;
          case 16:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 16) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).k2z = function ($this$writer, completion) {
    var i = new observable$slambda(this.s4d_1, this.t4d_1, this.u4d_1, completion);
    i.v4d_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j2z($this$writer, $completion);
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
    this.c4e_1 = response;
    this.d4e_1 = cause;
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
    this.f4e_1 = new Long(0, 0);
  }
  protoOf(EmptyContent).h2s = function () {
    return this.f4e_1;
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
    if (method.equals(Companion_getInstance_2().a2n_1) || method.equals(Companion_getInstance_2().b2n_1))
      return Unit_instance;
    var header = _this__u8e3s4.gd('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.c28(tmp, dropCompressionHeaders$lambda).b1(header);
    }
    _this__u8e3s4.n2a('Content-Encoding');
    _this__u8e3s4.n2a('Content-Length');
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
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ob(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$2 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$2);
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
    return this_0.n2i();
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
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_1;
    try {
      tmp_1 = createKType(getKClass(FetchOptions), arrayOf([]), false);
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
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp$ret$2);
    tmp.g4e_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_11() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_11();
    this.h4e_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).i4e = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).b3d = function (block) {
    return this.i4e(block);
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
    tmp.n4e_1 = JsClientEngineConfig$requestInit$lambda;
    this.o4e_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().q4e(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
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
    this.d4g_1 = _this__u8e3s4;
    this.e4g_1 = data;
  }
  protoOf($executeCOROUTINE$_1).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.h8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f4g_1 = suspendResult;
            this.h4g_1 = this.e4g_1.c3h_1.w27(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.e4g_1)) {
              this.h8_1 = 5;
              suspendResult = executeWebSocketRequest(this.d4g_1, this.e4g_1, this.f4g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 2;
              continue $sm;
            }

          case 2:
            this.g4g_1 = GMTDate();
            this.h8_1 = 3;
            suspendResult = ktor_toRaw(this.e4g_1, this.h4g_1, this.f4g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.e4g_1.c3h_1.x27(Companion_getInstance_11().g4e_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h4e_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.h8_1 = 4;
            suspendResult = commonFetch(this.e4g_1.x3g_1.toString(), rawRequest, fetchOptions, this.d4g_1.n4g_1, get_job(this.f4g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.e4g_1.y3g_1, this.e4g_1.c3h_1);
            var version = Companion_getInstance_5().i2n_1;
            var body = readBody(CoroutineScope_0(this.f4g_1), rawResponse);
            var tmp2_safe_receiver = this.e4g_1.c3h_1.x27(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.a48(this.e4g_1, status, headers, body, this.e4g_1.a3h_1, this.f4g_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.g4g_1, headers, version, responseBody, this.f4g_1);
          case 5:
            return suspendResult;
          case 6:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 6) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4e_1 = _this__u8e3s4;
    this.a4f_1 = urlString_capturingHack;
    this.b4f_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp0 = this.b4f_1.h2a();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.b1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.b4f_1.g2a(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.b1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.d4f_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().s29_1) {
              this.c4f_1 = new WebSocket(this.a4f_1, this.d4f_1);
              this.h8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.h8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.b4f_1.m2a(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.c4f_1 = new ws_capturingHack(this.a4f_1, this.d4f_1, {headers: headers_capturingHack});
            this.h8_1 = 2;
            continue $sm;
          case 2:
            return this.c4f_1;
          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 3) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m4f_1 = _this__u8e3s4;
    this.n4f_1 = request;
    this.o4f_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.q4f_1 = GMTDate();
            this.t4f_1 = this.n4f_1.x3g_1.toString();
            this.u4f_1 = this.n4f_1.c3h_1.w27(get_WEBSOCKETS_KEY());
            this.h8_1 = 1;
            suspendResult = createWebSocket(this.m4f_1, this.t4f_1, this.n4f_1.z3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r4f_1 = suspendResult;
            this.p4f_1 = new JsWebSocketSession(this.o4f_1, this.r4f_1, this.u4f_1.h47_1);
            this.i8_1 = 3;
            this.h8_1 = 2;
            suspendResult = awaitConnection(this.r4f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s4f_1 = suspendResult;
            this.i8_1 = 5;
            this.h8_1 = 4;
            continue $sm;
          case 3:
            this.i8_1 = 5;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              var tmp_1 = this;
              cancel_3(this.o4f_1, CancellationException_0('Failed to connect to ' + this.t4f_1, cause));
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 4:
            this.i8_1 = 5;
            var this_0 = this.r4f_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_4().p2m_1;
            return new HttpResponseData(Companion_getInstance_1().q2n_1, this.q4f_1, headers, Companion_getInstance_5().i2n_1, this.p4f_1, this.o4f_1);
          case 5:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 5) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.n4g_1 = config;
    this.o4g_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.n4g_1.k3i_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).d3c = function () {
    return this.n4g_1;
  };
  protoOf(JsClientEngine).e3h = function () {
    return this.o4g_1;
  };
  protoOf(JsClientEngine).g3i = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    $l$block: {
      if (cancellable.o1a()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf(arrayConcat([['open'], events]));
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
      cancellable.s1c(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.o1e();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.p4g_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).d1d = function () {
    return this.p4g_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).g3 = function () {
    return this.p4g_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.g3(), other.g3());
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
    return hashCode(this.g3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.k2a(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().s29_1);
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
        $disposable.d1d();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.s8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.s8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.d1d();
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
      return Companion_getInstance().t1y_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).p1y_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.z8();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.y4g_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).j2z = function ($this$writer, $completion) {
    var tmp = this.k2z($this$writer, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(channelFromStream$slambda).d9 = function (p1, $completion) {
    return this.j2z(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 9;
            this.b4h_1 = this.y4g_1.getReader();
            this.i8_1 = 7;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.h8_1 = 6;
              continue $sm;
            }

            this.h8_1 = 2;
            suspendResult = readChunk(this.b4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.h8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.c4h_1 = tmp0_elvis_lhs;
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.c4h_1;
            this.h8_1 = 4;
            suspendResult = writeFully_0(this.z4g_1.q24_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h8_1 = 5;
            suspendResult = this.z4g_1.q24_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.h8_1 = 1;
            continue $sm;
          case 6:
            this.i8_1 = 9;
            this.h8_1 = 10;
            continue $sm;
          case 7:
            this.i8_1 = 9;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Error) {
              this.a4h_1 = this.k8_1;
              this.h8_1 = 8;
              var tmp_2 = this.b4h_1.cancel(this.a4h_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 8:
            throw this.a4h_1;
          case 9:
            throw this.k8_1;
          case 10:
            this.i8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 9) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).k2z = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.y4g_1, completion);
    i.z4g_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j2z($this$writer, $completion);
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
      this_0.s8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.s8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.n4e_1(init);
    requestConfig(init);
    callJob.w1a(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().s29_1) {
      tmp = fetch(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.o4e_1);
      tmp = fetch(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.o1e();
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
      this_0.s8(tmp$ret$1);
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
      tmp0.s8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_6().z30($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.d4h_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).d1d = function () {
    return this.d4h_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).g3 = function () {
    return this.d4h_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.g3(), other.g3());
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
    return hashCode(this.g3());
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
          this$0.g4h_1.j1g(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.h4h_1.r1q(frame);
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
      this$0.g4h_1.j1g(cause);
      this$0.h4h_1.v1q(cause);
      this$0.i4h_1.z1q();
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
      this$0.g4h_1.i1g(reason);
      this$0.h4h_1.r1q(Close_init_$Create$(reason));
      this$0.h4h_1.x1q();
      this$0.i4h_1.z1q();
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
        this$0.f4h_1.close();
      } else {
        this$0.f4h_1.close(Codes_NORMAL_getInstance().w30_1, 'Client failed');
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
        if (tmp0.f4h_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.f4h_1.close();
          } else {
            this$0.f4h_1.close(Codes_NORMAL_getInstance().w30_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.f4h_1;
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
      $onMessage.d1d();
      $onError.d1d();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.u4h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).u25 = function ($this$launch, $completion) {
    var tmp = this.v25($this$launch, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(JsWebSocketSession$slambda).d9 = function (p1, $completion) {
    return this.u25((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 10;
            this.z4h_1 = this.u4h_1.i4h_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.x4h_1 = this.z4h_1;
            this.w4h_1 = null;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            this.h8_1 = 3;
            continue $sm;
          case 3:
            this.i8_1 = 9;
            this.i8_1 = 8;
            this.y4h_1 = this.x4h_1.t();
            this.h8_1 = 4;
            continue $sm;
          case 4:
            this.h8_1 = 5;
            suspendResult = this.y4h_1.t1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.h8_1 = 6;
              continue $sm;
            }

            var e = this.y4h_1.v();
            switch (e.y34_1.a1_1) {
              case 0:
                var text = e.z34_1;
                this.u4h_1.f4h_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.z34_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.u4h_1.f4h_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.z34_1);
                var data = builder;
                var code = data.u16();
                var reason = readText(data);
                this.u4h_1.g4h_1.i1g(new CloseReason(code, reason));
                if (isReservedStatusCode(this.u4h_1, code)) {
                  this.u4h_1.f4h_1.close();
                } else {
                  this.u4h_1.f4h_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.h8_1 = 4;
            continue $sm;
          case 6:
            this.i8_1 = 10;
            this.h8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.i8_1 = 10;
            cancelConsumed(this.x4h_1, this.w4h_1);
            this.h8_1 = 12;
            continue $sm;
          case 8:
            this.i8_1 = 9;
            var tmp_2 = this.k8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.k8_1;
              var tmp_3 = this;
              this.w4h_1 = e_0;
              throw e_0;
            } else {
              throw this.k8_1;
            }

          case 9:
            this.i8_1 = 10;
            var t = this.k8_1;
            cancelConsumed(this.x4h_1, this.w4h_1);
            throw t;
          case 10:
            throw this.k8_1;
          case 11:
            this.i8_1 = 10;
            cancelConsumed(this.x4h_1, this.w4h_1);
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.i8_1 === 10) {
          throw e_1;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).v25 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.u4h_1, completion);
    i.v4h_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.u25($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.e4h_1 = coroutineContext;
    this.f4h_1 = websocket;
    this.g4h_1 = CompletableDeferred();
    this.h4h_1 = from(Factory_getInstance(), channelsConfig.k31_1);
    this.i4h_1 = from(Factory_getInstance(), channelsConfig.l31_1);
    this.j4h_1 = this.h4h_1;
    this.k4h_1 = this.i4h_1;
    this.l4h_1 = this.g4h_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.f4h_1;
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
    var this_1 = this.f4h_1;
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
    var this_2 = this.f4h_1;
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
    var tmp0_safe_receiver = this.e4h_1.u8(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1a(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.f4h_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.k31_1.q38()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).s19 = function () {
    return this.e4h_1;
  };
  protoOf(JsWebSocketSession).g31 = function () {
    return this.j4h_1;
  };
  protoOf(JsWebSocketSession).h31 = function () {
    return this.k4h_1;
  };
  protoOf(JsWebSocketSession).e31 = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).f31 = function () {
    return new Long(-1, 2147483647);
  };
  protoOf(JsWebSocketSession).d31 = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).n1w = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
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
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
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
      $this$buildObject.method = $this_toRaw.y3g_1.f2n_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.o3c_1) {
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
    this.f4j_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).j2z = function ($this$writer, $completion) {
    var tmp = this.k2z($this$writer, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(getBodyBytes$slambda).d9 = function (p1, $completion) {
    return this.j2z(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.f4j_1.i2u(this.g4j_1.q24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  protoOf(getBodyBytes$slambda).k2z = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.f4j_1, completion);
    i.g4j_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.j2z($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i4i_1 = _this__u8e3s4;
    this.j4i_1 = clientConfig;
    this.k4i_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.l4i_1 = {};
            var this_0 = this.i4i_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.y3g_1) && isEmpty(this_0.a3h_1);
            mergeHeaders(this_0.z3g_1, this_0.a3h_1, toRaw$lambda(skipContentLengthHeader, this.l4i_1));
            this.h8_1 = 1;
            suspendResult = getBodyBytes(this.i4i_1.a3h_1, this.k4i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.i4i_1, this.l4i_1, this.j4i_1, bodyBytes));
          case 2:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 2) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u4i_1 = content;
    this.v4i_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            var tmp0_subject = this.u4i_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.w4i_1 = this.u4i_1.i2s();
              this.h8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.h8_1 = 3;
                suspendResult = readRemaining(this.u4i_1.g2u(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.h8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readRemaining(writer(tmp_0, this.v4i_1, VOID, getBodyBytes$slambda_0(this.u4i_1, null)).p1y_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.h8_1 = 1;
                    suspendResult = getBodyBytes(this.u4i_1.m2u(), this.v4i_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.w4i_1 = null;
                      this.h8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.u4i_1);
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
            this.w4i_1 = suspendResult;
            this.h8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.w4i_1 = readByteArray(ARGUMENT);
            this.h8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.w4i_1 = readByteArray(ARGUMENT_0);
            this.h8_1 = 5;
            continue $sm;
          case 4:
            throw this.k8_1;
          case 5:
            return this.w4i_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 4) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function Node(item, next) {
    this.h4j_1 = item;
    this.i4j_1 = next;
  }
  function engines$iterator$1() {
    this.j4j_1 = engines_getInstance().p4e_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.j4j_1);
    this.j4j_1 = result.i4j_1;
    return result.h4j_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.j4j_1);
  };
  function engines() {
    engines_instance = this;
    this.p4e_1 = atomic$ref$1(null);
  }
  protoOf(engines).q4e = function (item) {
    $l$loop: while (true) {
      var current = this.p4e_1.kotlinx$atomicfu$value;
      var new_0 = new Node(item, current);
      if (this.p4e_1.atomicfu$compareAndSet(current, new_0))
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
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
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
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).k4j = function (url) {
    // Inline function 'kotlin.error' call
    var message = 'Proxy unsupported in js client engine.';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).e3h = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).e3c = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).u8 = get;
  protoOf(KtorCallContextElement).yg = fold;
  protoOf(KtorCallContextElement).xg = minusKey;
  protoOf(KtorCallContextElement).zg = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).s19 = get_coroutineContext;
  protoOf(JsWebSocketSession).i31 = send;
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
  useEngineDispatcher = true;
  ProxyBuilder_instance = new ProxyBuilder();
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
