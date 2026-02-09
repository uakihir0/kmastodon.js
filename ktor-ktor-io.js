(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var protoOf = kotlin_kotlin.$_$.vd;
  var Annotation = kotlin_kotlin.$_$.ci;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.yc;
  var Companion_getInstance = kotlin_kotlin.$_$.n5;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.f3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var initMetadataForObject = kotlin_kotlin.$_$.ad;
  var toString = kotlin_kotlin.$_$.yj;
  var hashCode = kotlin_kotlin.$_$.tc;
  var equals = kotlin_kotlin.$_$.oc;
  var createFailure = kotlin_kotlin.$_$.mj;
  var Result = kotlin_kotlin.$_$.ti;
  var toString_0 = kotlin_kotlin.$_$.oh;
  var newThrowable = kotlin_kotlin.$_$.qd;
  var stackTraceToString = kotlin_kotlin.$_$.wj;
  var isInterface = kotlin_kotlin.$_$.jd;
  var CoroutineImpl = kotlin_kotlin.$_$.ta;
  var fromInt = kotlin_kotlin.$_$.ob;
  var compare = kotlin_kotlin.$_$.ib;
  var numberToLong = kotlin_kotlin.$_$.vb;
  var add = kotlin_kotlin.$_$.eb;
  var intercepted = kotlin_kotlin.$_$.ea;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.uj;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var Long = kotlin_kotlin.$_$.qi;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.wc;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var convertToInt = kotlin_kotlin.$_$.kb;
  var IllegalStateException = kotlin_kotlin.$_$.pi;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.a2;
  var captureStack = kotlin_kotlin.$_$.fc;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.og;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var equalsLong = kotlin_kotlin.$_$.nb;
  var get_ONE = kotlin_kotlin.$_$.db;
  var toString_1 = kotlin_kotlin.$_$.yd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var subtract = kotlin_kotlin.$_$.zb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.u4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b2;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Continuation = kotlin_kotlin.$_$.ma;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.xc;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var initMetadataForLambda = kotlin_kotlin.$_$.zc;
  var KSuspendFunction0 = kotlin_kotlin.$_$.ve;
  var SuspendFunction0 = kotlin_kotlin.$_$.ua;
  var SuspendFunction1 = kotlin_kotlin.$_$.va;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var CancellationException = kotlin_kotlin.$_$.aa;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var THROW_IAE = kotlin_kotlin.$_$.wi;
  var enumEntries = kotlin_kotlin.$_$.ab;
  var Enum = kotlin_kotlin.$_$.li;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var listOf = kotlin_kotlin.$_$.r8;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var charSequenceLength = kotlin_kotlin.$_$.kc;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var encodeToByteArray = kotlin_kotlin.$_$.pf;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.ei;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x2;
  var replace_0 = kotlin_kotlin.$_$.pg;
  var getStringHashCode = kotlin_kotlin.$_$.sc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.lc;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var isCharSequence = kotlin_kotlin.$_$.fd;
  var trim = kotlin_kotlin.$_$.wh;
  var toByte = kotlin_kotlin.$_$.wd;
  var decodeToString_0 = kotlin_kotlin.$_$.nf;
  var setOf = kotlin_kotlin.$_$.e9;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var charSequenceGet = kotlin_kotlin.$_$.jc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.d3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InternalAPI, 'InternalAPI', VOID, VOID, [Annotation]);
  initMetadataForClass(KtorDsl, 'KtorDsl', VOID, VOID, [Annotation]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForInterface(BufferedByteWriteChannel, 'BufferedByteWriteChannel', VOID, VOID, [ByteWriteChannel], [0]);
  initMetadataForCompanion(Companion);
  initMetadataForInterface(Slot, 'Slot');
  initMetadataForObject(Empty, 'Empty', VOID, VOID, [Slot]);
  initMetadataForClass(Closed, 'Closed', VOID, VOID, [Slot]);
  function resume() {
    return this.get_continuation_7yron4_k$().resumeWith_dtxwbr_k$(Companion_getInstance_0().RESUME_1);
  }
  function resume_0(throwable) {
    var tmp = this.get_continuation_7yron4_k$();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$2);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.resumeWith_dtxwbr_k$(tmp1_elvis_lhs == null ? Companion_getInstance_0().RESUME_1 : tmp1_elvis_lhs.value_1);
  }
  function resume$default(throwable, $super) {
    throwable = throwable === VOID ? null : throwable;
    var tmp;
    if ($super === VOID) {
      this.resume_xzb95z_k$(throwable);
      tmp = Unit_getInstance();
    } else {
      resume_0(throwable);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  initMetadataForInterface(Task, 'Task', VOID, VOID, [Slot]);
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.awaitContent_q7m0p7_k$(min, $completion) : $super.awaitContent_q7m0p7_k$.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, BufferedByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyAndCloseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readLineCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForInterface(ChannelJob, 'ChannelJob');
  initMetadataForClass(WriterJob, 'WriterJob', VOID, VOID, [ChannelJob]);
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref, VOID, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForInterface(JvmSerializable, 'JvmSerializable');
  initMetadataForInterface(JvmSerializer, 'JvmSerializer', VOID, VOID, [JvmSerializable]);
  initMetadataForObject(DummyJvmSimpleSerializerReplacement, 'DummyJvmSimpleSerializerReplacement');
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.dispose_3nnxhr_k$();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForInterface(Decoder, 'Decoder');
  initMetadataForClass(toKtor$1, VOID, VOID, VOID, [Decoder]);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback', VOID, VOID, [Decoder]);
  initMetadataForInterface(Closeable, 'Closeable', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(ReentrantLock, 'ReentrantLock', ReentrantLock);
  //endregion
  function InternalAPI() {
  }
  protoOf(InternalAPI).equals = function (other) {
    if (!(other instanceof InternalAPI))
      return false;
    other instanceof InternalAPI || THROW_CCE();
    return true;
  };
  protoOf(InternalAPI).hashCode = function () {
    return 0;
  };
  protoOf(InternalAPI).toString = function () {
    return '@io.ktor.utils.io.InternalAPI(' + ')';
  };
  function KtorDsl() {
  }
  protoOf(KtorDsl).equals = function (other) {
    if (!(other instanceof KtorDsl))
      return false;
    other instanceof KtorDsl || THROW_CCE();
    return true;
  };
  protoOf(KtorDsl).hashCode = function () {
    return 0;
  };
  protoOf(KtorDsl).toString = function () {
    return '@io.ktor.utils.io.KtorDsl(' + ')';
  };
  function BufferedByteWriteChannel() {
  }
  function Companion() {
    Companion_instance = this;
    this.CLOSED_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    tmp.RESUME_1 = _Result___init__impl__xyqfz8(Unit_getInstance());
  }
  protoOf(Companion).get_CLOSED_3p2npn_k$ = function () {
    return this.CLOSED_1;
  };
  protoOf(Companion).get_RESUME_dsp8bb_k$ = function () {
    return this.RESUME_1;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Empty() {
    Empty_instance = this;
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Closed(cause) {
    this.cause_1 = cause;
  }
  protoOf(Closed).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed).component1_7eebsc_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed).copy_ci9aw1_k$ = function (cause) {
    return new Closed(cause);
  };
  protoOf(Closed).copy$default_lgf8ht_k$ = function (cause, $super) {
    cause = cause === VOID ? this.cause_1 : cause;
    return $super === VOID ? this.copy_ci9aw1_k$(cause) : $super.copy_ci9aw1_k$.call(this, cause);
  };
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.cause_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.cause_1 == null ? 0 : hashCode(this.cause_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.cause_1, other.cause_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.continuation_1 = continuation;
    this.created_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.continuation_1), 16));
      stackTraceToString(this_0);
      tmp.created_1 = this_0;
    }
  }
  protoOf(Read).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(Read).set_created_hmp26d_k$ = function (_set____db54di) {
    this.created_1 = _set____db54di;
  };
  protoOf(Read).get_created_i9xfr3_k$ = function () {
    return this.created_1;
  };
  protoOf(Read).taskName_6sat74_k$ = function () {
    return 'read';
  };
  function Write(continuation) {
    this.continuation_1 = continuation;
    this.created_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.continuation_1), 16));
      stackTraceToString(this_0);
      tmp.created_1 = this_0;
    }
  }
  protoOf(Write).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(Write).set_created_hmp26d_k$ = function (_set____db54di) {
    this.created_1 = _set____db54di;
  };
  protoOf(Write).get_created_i9xfr3_k$ = function () {
    return this.created_1;
  };
  protoOf(Write).taskName_6sat74_k$ = function () {
    return 'write';
  };
  function _get_flushBuffer__b837ot($this) {
    return $this.flushBuffer_1;
  }
  function _set_flushBufferSize__cczs68($this, _set____db54di) {
    $this.flushBufferSize_1 = _set____db54di;
  }
  function _get_flushBufferSize__299kno($this) {
    return $this.flushBufferSize_1;
  }
  function _get_flushBufferMutex__1lwq4w($this) {
    return $this.flushBufferMutex_1;
  }
  function _get_suspensionSlot__z54oi8($this) {
    return $this.suspensionSlot_1;
  }
  function _get__readBuffer__8m0p3w($this) {
    return $this._readBuffer_1;
  }
  function _get__writeBuffer__9iscuj($this) {
    return $this._writeBuffer_1;
  }
  function _get__closedCause__8g8v4j($this) {
    return $this._closedCause_1;
  }
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.flushBufferMutex_1;
    $this.flushBuffer_1.transferTo_lu4ka2_k$($this._readBuffer_1);
    $this.flushBufferSize_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (current instanceof Write) {
      tmp = $this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      current.resume_2o15jx_k$();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance_0().CLOSED_1;
    var continuation = $this.suspensionSlot_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.resume_xzb95z_k$(cause);
    }
  }
  function Slot() {
  }
  function ClosedReadChannelException$_init_$ref_ix0089() {
    var l = function (p0) {
      return new ClosedReadChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function ClosedWriteChannelException$_init_$ref_ef15ty() {
    var l = function (p0) {
      return new ClosedWriteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.min_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            rethrowCloseCauseIfNeeded(this._this__u8e3s4__1);
            if (compare(this._this__u8e3s4__1._readBuffer_1.get_size_woubt6_k$(), fromInt(this.min_1)) >= 0)
              return true;
            this.this0__1 = this._this__u8e3s4__1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this._this__u8e3s4__1.flushBufferSize_1), this._this__u8e3s4__1._readBuffer_1.get_size_woubt6_k$()), fromInt(this.min_1)) < 0 && this._this__u8e3s4__1._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.initCancellability_shqc60_k$();
            var tmp0 = this.this0__1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (!(previous instanceof Closed)) {
                if (!tmp0.suspensionSlot_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.resume_2o15jx_k$();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.resume_xzb95z_k$(new ConcurrentIOException(tmp2.taskName_6sat74_k$(), previous.get_created_i9xfr3_k$()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.resume_2o15jx_k$();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.resume_xzb95z_k$(previous.cause_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_getInstance())) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this._this__u8e3s4__1.flushBufferSize_1), this._this__u8e3s4__1._readBuffer_1.get_size_woubt6_k$()), fromInt(this.min_1)) < 0 && this._this__u8e3s4__1._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
                var current = tmp0.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.resume_2o15jx_k$();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            if (compare(this._this__u8e3s4__1._readBuffer_1.get_size_woubt6_k$(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this._this__u8e3s4__1);
            }

            return compare(this._this__u8e3s4__1._readBuffer_1.get_size_woubt6_k$(), fromInt(this.min_1)) >= 0;
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            rethrowCloseCauseIfNeeded(this._this__u8e3s4__1);
            this._this__u8e3s4__1.flushWriteBuffer_z39w8l_k$();
            if (this._this__u8e3s4__1.flushBufferSize_1 < 1048576)
              return Unit_getInstance();
            this.this0__1 = this._this__u8e3s4__1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(this._this__u8e3s4__1.flushBufferSize_1 >= 1048576 && this._this__u8e3s4__1._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.initCancellability_shqc60_k$();
            var tmp0 = this.this0__1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
              if (!(previous instanceof Closed)) {
                if (!tmp0.suspensionSlot_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.resume_2o15jx_k$();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.resume_xzb95z_k$(new ConcurrentIOException(tmp2.taskName_6sat74_k$(), previous.get_created_i9xfr3_k$()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.resume_2o15jx_k$();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.resume_xzb95z_k$(previous.cause_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_getInstance())) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(this._this__u8e3s4__1.flushBufferSize_1 >= 1048576 && this._this__u8e3s4__1._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null)) {
                var current = tmp0.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.resume_2o15jx_k$();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var this_0 = this._this__u8e3s4__1;
            this.set_exceptionState_fex74n_k$(2);
            this.tmp01__1 = Companion_getInstance();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this_0.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.tmp01__1;
            tmp_0.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              Companion_getInstance();
              tmp_2.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            this.set_exceptionState_fex74n_k$(4);
            if (!this._this__u8e3s4__1._closedCause_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_getInstance();
            closeSlot(this._this__u8e3s4__1, null);
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.autoFlush_1 = autoFlush;
    this.flushBuffer_1 = new Buffer();
    this.flushBufferSize_1 = 0;
    this.flushBufferMutex_1 = new Object();
    this.suspensionSlot_1 = atomic$ref$1(Empty_getInstance());
    this._readBuffer_1 = new Buffer();
    this._writeBuffer_1 = new Buffer();
    this._closedCause_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).get_autoFlush_zfdl3o_k$ = function () {
    return this.autoFlush_1;
  };
  protoOf(ByteChannel).get_readBuffer_yjmj9b_k$ = function () {
    var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.throwOrNull_cyi9f_k$(ClosedReadChannelException$_init_$ref_ix0089());
    }
    if (this._readBuffer_1.exhausted_p1jt55_k$()) {
      moveFlushToReadBuffer(this);
    }
    return this._readBuffer_1;
  };
  protoOf(ByteChannel).get_writeBuffer_t7kuc6_k$ = function () {
    if (this.get_isClosedForWrite_seyg5n_k$()) {
      var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.throwOrNull_cyi9f_k$(ClosedWriteChannelException$_init_$ref_ef15ty());
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this._writeBuffer_1;
  };
  protoOf(ByteChannel).get_closedCause_o1qcj8_k$ = function () {
    var tmp0_safe_receiver = this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wrapCause$default_rqpy7l_k$();
  };
  protoOf(ByteChannel).get_isClosedForWrite_seyg5n_k$ = function () {
    return !(this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(ByteChannel).get_isClosedForRead_ajcc1s_k$ = function () {
    return !(this.get_closedCause_o1qcj8_k$() == null) || (this.get_isClosedForWrite_seyg5n_k$() && this.flushBufferSize_1 === 0 && this._readBuffer_1.exhausted_p1jt55_k$());
  };
  protoOf(ByteChannel).awaitContent_q7m0p7_k$ = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ByteChannel).flush_4wsz1p_k$ = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ByteChannel).flushWriteBuffer_z39w8l_k$ = function () {
    if (this._writeBuffer_1.exhausted_p1jt55_k$())
      return Unit_getInstance();
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.flushBufferMutex_1;
    var count = convertToInt(this._writeBuffer_1.get_size_woubt6_k$());
    this.flushBuffer_1.transferFrom_v29myr_k$(this._writeBuffer_1);
    this.flushBufferSize_1 = this.flushBufferSize_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.suspensionSlot_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (current instanceof Read) {
      tmp = this.suspensionSlot_1.atomicfu$compareAndSet(current, Empty_getInstance());
    } else {
      tmp = false;
    }
    if (tmp) {
      current.resume_2o15jx_k$();
    }
  };
  protoOf(ByteChannel).close_yn9xrc_k$ = function () {
    this.flushWriteBuffer_z39w8l_k$();
    if (!this._closedCause_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_getInstance();
    closeSlot(this, null);
  };
  protoOf(ByteChannel).flushAndClose_3zd2q_k$ = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ByteChannel).cancel_9i2dv0_k$ = function (cause) {
    if (!(this._closedCause_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null))
      return Unit_getInstance();
    var closedToken = new CloseToken(cause);
    this._closedCause_1.atomicfu$compareAndSet(null, closedToken);
    var wrappedCause = closedToken.wrapCause$default_rqpy7l_k$();
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.write_ti570x_k$(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function _get_matchString__icybdn($this) {
    return $this.matchString_1;
  }
  function _get_writeChannel__b585eh($this) {
    return $this.writeChannel_1;
  }
  function _get_limit__eq4zuy($this) {
    return $this.limit_1;
  }
  function _get_input__g2gq7t($this) {
    return $this.input_1;
  }
  function _get_partialMatchTable__pbrnl3($this) {
    return $this.partialMatchTable_1;
  }
  function _get_partialMatchBuffer__x8vmxz($this) {
    return $this.partialMatchBuffer_1;
  }
  function _set_bytesRead__s3qsos($this, _set____db54di) {
    $this.bytesRead_1 = _set____db54di;
  }
  function _get_bytesRead__173nps($this) {
    return $this.bytesRead_1;
  }
  function _set_matchIndex__68l1ka($this, _set____db54di) {
    $this.matchIndex_1 = _set____db54di;
  }
  function _get_matchIndex__8tnjky($this) {
    return $this.matchIndex_1;
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.matchString_1.get_size_woubt6_k$());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.matchString_1.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.matchString_1.get_c1px32_k$(i) === $this.matchString_1.get_c1px32_k$(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.matchString_1.get_c1px32_k$(i) === $this.matchString_1.get_c1px32_k$(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.bytesRead_1, extra), $this.limit_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.limit_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.matchString_1) + '"'));
    }
  }
  function toSingleLineString($this, _this__u8e3s4) {
    return replace(decodeToString(_this__u8e3s4), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.ignoreMissing_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this._this__u8e3s4__1.bytesRead_1 = new Long(0, 0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._this__u8e3s4__1.input_1.exhausted_p1jt55_k$()) {
              this.WHEN_RESULT0__1 = true;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.channel_1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!this.WHEN_RESULT0__1) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = advanceToNextPotentialMatch(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            suspendResult = checkFullMatch(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this._this__u8e3s4__1.bytesRead_1;
            } else {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 7:
            if (!this.ignoreMissing_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this._this__u8e3s4__1, this._this__u8e3s4__1.matchString_1) + '" but encountered end of input');
            }

            this._this__u8e3s4__1.bytesRead_1 = add(this._this__u8e3s4__1.bytesRead_1, this._this__u8e3s4__1.partialMatchBuffer_1.transferTo_lu4ka2_k$(this._this__u8e3s4__1.writeChannel_1.get_writeBuffer_t7kuc6_k$()));
            this.set_state_rjd8d0_k$(8);
            suspendResult = this._this__u8e3s4__1.writeChannel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this._this__u8e3s4__1.bytesRead_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._this__u8e3s4__1.input_1.exhausted_p1jt55_k$()) {
              this.WHEN_RESULT0__1 = true;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.channel_1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!this.WHEN_RESULT0__1) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            var nextMatch = indexOf(this._this__u8e3s4__1.input_1, this._this__u8e3s4__1.matchString_1.get_c1px32_k$(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this._this__u8e3s4__1.input_1;
              checkBounds(this._this__u8e3s4__1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).get_size_woubt6_k$());
              this._this__u8e3s4__1.bytesRead_1 = add(this._this__u8e3s4__1.bytesRead_1, this._this__u8e3s4__1.input_1.transferTo_lu4ka2_k$(this._this__u8e3s4__1.writeChannel_1.get_writeBuffer_t7kuc6_k$()));
              this.set_state_rjd8d0_k$(5);
              suspendResult = flushIfNeeded(this._this__u8e3s4__1.writeChannel_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this._this__u8e3s4__1, nextMatch);
              var tmp_1 = this._this__u8e3s4__1;
              var tmp_2 = this._this__u8e3s4__1.bytesRead_1;
              var tmp_3 = this._this__u8e3s4__1.writeChannel_1.get_writeBuffer_t7kuc6_k$();
              tmp_1.bytesRead_1 = add(tmp_2, this._this__u8e3s4__1.input_1.readAtMostTo_nyls31_k$(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.set_state_rjd8d0_k$(4);
              suspendResult = flushIfNeeded(this._this__u8e3s4__1.writeChannel_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_getInstance();
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._this__u8e3s4__1.input_1.exhausted_p1jt55_k$()) {
              this.WHEN_RESULT1__1 = true;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.channel_1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!this.WHEN_RESULT1__1) {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

            this.byte0__1 = this._this__u8e3s4__1.input_1.readByte_ectjk2_k$();
            if (this._this__u8e3s4__1.matchIndex_1 > 0 && !(this.byte0__1 === this._this__u8e3s4__1.matchString_1.get_c1px32_k$(this._this__u8e3s4__1.matchIndex_1))) {
              var oldMatchIndex = this._this__u8e3s4__1.matchIndex_1;
              while (this._this__u8e3s4__1.matchIndex_1 > 0 && !(this.byte0__1 === this._this__u8e3s4__1.matchString_1.get_c1px32_k$(this._this__u8e3s4__1.matchIndex_1))) {
                this._this__u8e3s4__1.matchIndex_1 = this._this__u8e3s4__1.partialMatchTable_1[this._this__u8e3s4__1.matchIndex_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this._this__u8e3s4__1.matchIndex_1 | 0);
              checkBounds(this._this__u8e3s4__1, retained);
              var tmp_0 = this._this__u8e3s4__1;
              var tmp_1 = this._this__u8e3s4__1.bytesRead_1;
              var tmp_2 = this._this__u8e3s4__1.writeChannel_1.get_writeBuffer_t7kuc6_k$();
              tmp_0.bytesRead_1 = add(tmp_1, this._this__u8e3s4__1.partialMatchBuffer_1.readAtMostTo_nyls31_k$(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this._this__u8e3s4__1.matchIndex_1 === 0 && !(this.byte0__1 === this._this__u8e3s4__1.matchString_1.get_c1px32_k$(this._this__u8e3s4__1.matchIndex_1))) {
                this.set_state_rjd8d0_k$(6);
                suspendResult = writeByte(this._this__u8e3s4__1.writeChannel_1, this.byte0__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(4);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this._this__u8e3s4__1.matchIndex_1 = this._this__u8e3s4__1.matchIndex_1 + 1 | 0;
            if (this._this__u8e3s4__1.matchIndex_1 === this._this__u8e3s4__1.matchString_1.get_size_woubt6_k$()) {
              return true;
            }

            this._this__u8e3s4__1.partialMatchBuffer_1.writeByte_9ih3z3_k$(this.byte0__1);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 6:
            var _unary__edvuaz = this._this__u8e3s4__1.bytesRead_1;
            this._this__u8e3s4__1.bytesRead_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.channel_1 = channel;
    this.matchString_1 = matchString;
    this.writeChannel_1 = writeChannel;
    this.limit_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.matchString_1.get_size_woubt6_k$() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.input_1 = this.channel_1.get_readBuffer_yjmj9b_k$();
    this.partialMatchTable_1 = buildPartialMatchTable(this);
    this.partialMatchBuffer_1 = new Buffer();
    this.bytesRead_1 = new Long(0, 0);
    this.matchIndex_1 = 0;
  }
  protoOf(ByteChannelScanner).findNext_k7w4m8_k$ = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ByteChannelScanner).findNext$default_mmi91n_k$ = function (ignoreMissing, $completion, $super) {
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return $super === VOID ? this.findNext_k7w4m8_k$(ignoreMissing, $completion) : $super.findNext_k7w4m8_k$.call(this, ignoreMissing, $completion);
  };
  function ByteReadChannel$Companion$Empty$1() {
    this.closedCause_1 = null;
    this.readBuffer_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).get_closedCause_o1qcj8_k$ = function () {
    return this.closedCause_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).get_isClosedForRead_ajcc1s_k$ = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).get_readBuffer_yjmj9b_k$ = function () {
    return this.readBuffer_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).awaitContent_q7m0p7_k$ = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).cancel_9i2dv0_k$ = function (cause) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.Empty_1 = new ByteReadChannel$Companion$Empty$1();
  }
  protoOf(Companion_0).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.cancel_9i2dv0_k$(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function copyAndClose(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyAndCloseCOROUTINE$(_this__u8e3s4, channel, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readLine(_this__u8e3s4, lineEnding, $completion) {
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    var tmp = new $readLineCOROUTINE$(_this__u8e3s4, lineEnding, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).findNext_k7w4m8_k$(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(compare(limit, new Long(0, 0)) >= 0)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.get_readBuffer_yjmj9b_k$().get_buffer_bmaafd_k$().get_size_woubt6_k$());
  }
  function readLineTo(_this__u8e3s4, out, lineEnding, $completion) {
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    return internalReadLineTo(_this__u8e3s4, out, new Long(-1, 2147483647), lineEnding.equals(LineEnding_Lenient_getInstance()), false, $completion);
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' characters');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$transferString(readBuffer, $out, consumed, count) {
    if (compare(count, new Long(0, 0)) > 0) {
      var string = readString(readBuffer, count);
      $out.append_jgojdo_k$(string);
      var tmp0 = consumed._v;
      // Inline function 'kotlin.Long.plus' call
      var other = string.length;
      consumed._v = add(tmp0, fromInt(other));
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return new Long(-1, -1);
    var tmp;
    if (equalsLong(lfIndex, new Long(-1, -1))) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = compare(limitLeft, b) <= 0 ? limitLeft : b;
    } else if (equalsLong(lfIndex, new Long(0, 0))) {
      tmp = new Long(0, 0);
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.result0__1 = BytePacketBuilder();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.result0__1.transferFrom_v29myr_k$(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$());
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded_0(this._this__u8e3s4__1);
            return this.result0__1.get_buffer_bmaafd_k$();
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readBuffer(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
    this.limit_1 = limit;
  }
  protoOf($copyToCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(12);
            this.remaining0__1 = this.limit_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(8);
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!(!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$() && compare(this.remaining0__1, new Long(0, 0)) > 0)) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            if (this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            var tmp0 = this.remaining0__1;
            var b = get_remaining(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().readTo_rtq83_k$(this.channel_1.get_writeBuffer_t7kuc6_k$(), count);
            this.remaining0__1 = subtract(this.remaining0__1, count);
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              this._this__u8e3s4__1.cancel_9i2dv0_k$(cause);
              close_0(this.channel_1, cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            this.set_exceptionState_fex74n_k$(12);
            this.t1__1 = this.get_exception_x0n6w6_k$();
            this.set_state_rjd8d0_k$(9);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.t1__1;
          case 10:
            this.set_exceptionState_fex74n_k$(12);
            this.set_state_rjd8d0_k$(11);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.limit_1, this.remaining0__1);
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.max_1 = max;
  }
  protoOf($discardCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            this.remaining0__1 = this.max_1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(compare(this.remaining0__1, new Long(0, 0)) > 0 && !this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            if (get_availableForRead(this._this__u8e3s4__1) === 0) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
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
            var tmp0 = this.remaining0__1;
            var b = get_remaining(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$(), count);
            this.remaining0__1 = subtract(this.remaining0__1, count);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            return subtract(this.max_1, this.remaining0__1);
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $copyAndCloseCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
  }
  protoOf($copyAndCloseCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(11);
            this.result0__1 = new Long(0, 0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.result0__1 = add(this.result0__1, this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(this.channel_1.get_writeBuffer_t7kuc6_k$()));
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 5:
            var tmp_0 = this;
            var tmp0_safe_receiver = this._this__u8e3s4__1.get_closedCause_o1qcj8_k$();
            var tmp_1;
            if (tmp0_safe_receiver == null) {
              tmp_1 = null;
            } else {
              throw tmp0_safe_receiver;
            }

            tmp_0.tmp$ret$02__1 = tmp_1;
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this._this__u8e3s4__1.cancel_9i2dv0_k$(cause);
              close_0(this.channel_1, cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(11);
            this.t3__1 = this.get_exception_x0n6w6_k$();
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.channel_1.flushAndClose_3zd2q_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.t3__1;
          case 9:
            this.tmp1__1 = this.tmp$ret$02__1;
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(10);
            suspendResult = this.channel_1.flushAndClose_3zd2q_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.result0__1;
          case 11:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(11);
            this.result0__1 = new Long(0, 0);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(7);
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.result0__1 = add(this.result0__1, this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(this.channel_1.get_writeBuffer_t7kuc6_k$()));
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              this._this__u8e3s4__1.cancel_9i2dv0_k$(cause);
              close_0(this.channel_1, cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            this.set_exceptionState_fex74n_k$(11);
            this.t1__1 = this.get_exception_x0n6w6_k$();
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.t1__1;
          case 9:
            this.set_exceptionState_fex74n_k$(11);
            this.set_state_rjd8d0_k$(10);
            suspendResult = this.channel_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.result0__1;
          case 11:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.buffer_1 = buffer;
    this.offset_1 = offset;
    this.length_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())
              return -1;
            if (this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())
              return -1;
            return readAvailable_0(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$(), this.buffer_1, this.offset_1, this.length_1);
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
  function $readLineCOROUTINE$(_this__u8e3s4, lineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.lineEnding_1 = lineEnding;
  }
  protoOf($readLineCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.result1__1 = StringBuilder_init_$Create$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = readLineTo(this._this__u8e3s4__1, this.result1__1, this.lineEnding_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (compare(ARGUMENT, new Long(0, 0)) >= 0) {
              this.WHEN_RESULT0__1 = this.result1__1.toString();
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return this.WHEN_RESULT0__1;
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.byteString_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = peek(this._this__u8e3s4__1, this.byteString_1.get_size_woubt6_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.byteString_1)) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = discard(this._this__u8e3s4__1, fromInt(this.byteString_1.get_size_woubt6_k$()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.packet_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.result0__1 = new Buffer();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(compare(this.result0__1.get_size_woubt6_k$(), fromInt(this.packet_1)) < 0)) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            if (this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
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
            if (this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$()), subtract(numberToLong(this.packet_1), this.result0__1.get_size_woubt6_k$())) > 0) {
              this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().readTo_rtq83_k$(this.result0__1, subtract(numberToLong(this.packet_1), this.result0__1.get_size_woubt6_k$()));
            } else {
              this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().transferTo_lu4ka2_k$(this.result0__1);
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 5:
            if (compare(this.result0__1.get_size_woubt6_k$(), fromInt(this.packet_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.packet_1 + ' bytes but only ' + this.result0__1.get_size_woubt6_k$().toString() + ' available');
            }

            return this.result0__1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.result0__1 = new Buffer();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.result0__1.transferFrom_v29myr_k$(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$());
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this._this__u8e3s4__1.get_closedCause_o1qcj8_k$();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.result0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.count_1 = count;
  }
  protoOf($peekCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())
              return null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitContent_q7m0p7_k$(this.count_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return readByteString(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().peek_21nx7_k$(), this.count_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.out_1 = out;
    this.limit_1 = limit;
    this.lenientLineEnding_1 = lenientLineEnding;
    this.throwOnIncompleteLine_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(18);
            this.readBuffer1__1 = this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$();
            if (this.readBuffer1__1.exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())
              return new Long(-1, -1);
            this.consumed0__1 = {_v: new Long(0, 0)};
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!(compare(this.consumed0__1._v, this.limit_1) < 0 && !this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())) {
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            }

            var limitLeft = subtract(this.limit_1, this.consumed0__1._v);
            var lfIndex = indexOf(this.readBuffer1__1, 10, VOID, limitLeft);
            var crIndex = internalReadLineTo$scanForSoleCr(this.readBuffer1__1, this.lenientLineEnding_1, lfIndex, limitLeft);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$transferString(this.readBuffer1__1, this.out_1, this.consumed0__1, crIndex);
              discard_0(this.readBuffer1__1, new Long(1, 0));
              return this.consumed0__1._v;
            }

            if (equalsLong(lfIndex, new Long(0, 0))) {
              discard_0(this.readBuffer1__1, new Long(1, 0));
              return this.consumed0__1._v;
            }

            if (compare(lfIndex, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.readBuffer1__1.get_buffer_bmaafd_k$();
              if (tmp_1.get_ugtq3c_k$(subtract(lfIndex, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$transferString(this.readBuffer1__1, this.out_1, this.consumed0__1, subtract(lfIndex, isCrlf));
              discard_0(this.readBuffer1__1, add(numberToLong(1), isCrlf));
              return this.consumed0__1._v;
            }

            var b = get_remaining(this.readBuffer1__1);
            var count = compare(limitLeft, b) <= 0 ? limitLeft : b;
            var tmp_2 = this.readBuffer1__1.get_buffer_bmaafd_k$();
            if (tmp_2.get_ugtq3c_k$(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$transferString(this.readBuffer1__1, this.out_1, this.consumed0__1, subtract(count, fromInt(1)));
              this.set_state_rjd8d0_k$(4);
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.readBuffer1__1, this._this__u8e3s4__1, this.lenientLineEnding_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$transferString(this.readBuffer1__1, this.out_1, this.consumed0__1, count);
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 4:
            if (suspendResult) {
              return this.consumed0__1._v;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 5:
            internalReadLineTo$transferString(this.readBuffer1__1, this.out_1, this.consumed0__1, new Long(1, 0));
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            if (compare(this.consumed0__1._v, this.limit_1) < 0 && equalsLong(get_remaining(this.readBuffer1__1), new Long(0, 0))) {
              this.set_state_rjd8d0_k$(7);
              suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT3__1 = false;
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

          case 7:
            this.WHEN_RESULT3__1 = !suspendResult;
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 8:
            if (this.WHEN_RESULT3__1) {
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

          case 9:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 10:
            if (equalsLong(this.consumed0__1._v, new Long(0, 0)) && this._this__u8e3s4__1.get_isClosedForRead_ajcc1s_k$())
              return new Long(-1, -1);
            if (!(compare(this.consumed0__1._v, this.limit_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.consumed0__1._v.toString() + ' > ' + this.limit_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.consumed0__1._v, this.limit_1)) {
              if (equalsLong(this.limit_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.readBuffer1__1), new Long(0, 0))) {
                this.set_state_rjd8d0_k$(12);
                suspendResult = this._this__u8e3s4__1.awaitContent$default_rxihsg_k$(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.WHEN_RESULT2__1 = false;
                this.set_state_rjd8d0_k$(13);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(11);
              continue $sm;
            }

          case 11:
            if (this.throwOnIncompleteLine_1) {
              throwEndOfStreamException(this.consumed0__1._v);
            }

            return this.consumed0__1._v;
          case 12:
            this.WHEN_RESULT2__1 = !suspendResult;
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            if (this.WHEN_RESULT2__1) {
              throwEndOfStreamException(this.consumed0__1._v);
            } else {
              this.set_state_rjd8d0_k$(14);
              continue $sm;
            }

            break;
          case 14:
            var tmp0_subject = this.readBuffer1__1.get_buffer_bmaafd_k$().get_ugtq3c_k$(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.readBuffer1__1, new Long(1, 0));
              return this.consumed0__1._v;
            } else {
              if (tmp0_subject === 13) {
                this.set_state_rjd8d0_k$(15);
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.readBuffer1__1, this._this__u8e3s4__1, this.lenientLineEnding_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(17);
                continue $sm;
              }
            }

          case 15:
            if (suspendResult) {
              return this.consumed0__1._v;
            } else {
              this.set_state_rjd8d0_k$(16);
              continue $sm;
            }

          case 16:
            this.set_state_rjd8d0_k$(17);
            continue $sm;
          case 17:
            throwTooLongLineException(this.limit_1);
            break;
          case 18:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 18) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.$this_internalReadLineTo_1 = $this_internalReadLineTo;
    this.$lenientLineEnding_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            if (compare(get_remaining(this._this__u8e3s4__1), new Long(2, 0)) >= 0) {
              this.WHEN_RESULT1__1 = true;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$this_internalReadLineTo_1.awaitContent_q7m0p7_k$(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (this.WHEN_RESULT1__1) {
              this.WHEN_RESULT0__1 = this._this__u8e3s4__1.get_buffer_bmaafd_k$().get_ugtq3c_k$(new Long(1, 0)) === 10;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = false;
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            if (this.WHEN_RESULT0__1) {
              discard_0(this._this__u8e3s4__1, new Long(2, 0));
              return true;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            if (this.$lenientLineEnding_1) {
              discard_0(this._this__u8e3s4__1, new Long(1, 0));
              return true;
            }

            return false;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            rethrowCloseCauseIfNeeded_1(this._this__u8e3s4__1);
            if (this._this__u8e3s4__1.get_autoFlush_zfdl3o_k$() || get_size(this._this__u8e3s4__1.get_writeBuffer_t7kuc6_k$()) >= 1048576) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this._this__u8e3s4__1.flush_4wsz1p_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
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
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.channel_1 = channel;
    this.job_1 = job;
  }
  protoOf(WriterJob).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(WriterJob).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.channel_1 = channel;
    this.coroutineContext_1 = coroutineContext;
  }
  protoOf(WriterScope).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(WriterScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.get_job_18j2r0_k$().invokeOnCompletion_n6cffu_k$(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.get_writeBuffer_t7kuc6_k$().write_ti570x_k$(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref_0(_this__u8e3s4));
    } else {
      _this__u8e3s4.cancel_9i2dv0_k$(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function ChannelJob() {
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.invokeOnCompletion_n6cffu_k$(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.get_writeBuffer_t7kuc6_k$().writeByte_9ih3z3_k$(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.context_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(NO_CALLBACK$1).resumeWith_b9cu3x_k$ = function (result) {
    return Unit_getInstance();
  };
  protoOf(NO_CALLBACK$1).resumeWith_dtxwbr_k$ = function (result) {
    return this.resumeWith_b9cu3x_k$(result);
  };
  function ByteWriteChannel$flushAndClose$ref(p0) {
    this.f$0__1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref).invoke_h7udsx_k$ = function ($completion) {
    return this.f$0__1.flushAndClose_3zd2q_k$($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref).get_name_woqyms_k$ = function () {
    return 'flushAndClose';
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref(p0);
    var l = function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    };
    l.callableName = 'flushAndClose';
    l.$arity = 0;
    return l;
  }
  function writer$slambda($block, $channel, resultContinuation) {
    this.$block_1 = $block;
    this.$channel_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(writer$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(14);
            this.nested2__1 = Job(get_job(this.$this$launch_1.get_coroutineContext_115oqo_k$()));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$block_1(new WriterScope(this.$channel_1, this.$this$launch_1.get_coroutineContext_115oqo_k$().plus_s13ygv_k$(this.nested2__1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nested2__1.complete_9ww6vb_k$();
            var tmp_0;
            if (get_job(this.$this$launch_1.get_coroutineContext_115oqo_k$()).get_isCancelled_trk8pu_k$()) {
              this.$channel_1.cancel_9i2dv0_k$(get_job(this.$this$launch_1.get_coroutineContext_115oqo_k$()).getCancellationException_8i1q6u_k$());
              tmp_0 = Unit_getInstance();
            }

            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              cancel(this.nested2__1, 'Exception thrown while writing to channel', cause);
              this.$channel_1.cancel_9i2dv0_k$(cause);
              this.set_exceptionState_fex74n_k$(14);
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            this.set_exceptionState_fex74n_k$(14);
            this.t3__1 = this.get_exception_x0n6w6_k$();
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.nested2__1.join_o20dar_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.$this$launch_1;
            this.set_exceptionState_fex74n_k$(7);
            this.tmp05__1 = Companion_getInstance();
            this.set_state_rjd8d0_k$(6);
            suspendResult = this.$channel_1.flushAndClose_3zd2q_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.tmp05__1;
            tmp_2.TRY_RESULT4__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(8);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(14);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              Companion_getInstance();
              tmp_4.TRY_RESULT4__1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            this.set_exceptionState_fex74n_k$(14);
            throw this.t3__1;
          case 9:
            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(10);
            suspendResult = this.nested2__1.join_o20dar_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.$this$launch_1;
            this.set_exceptionState_fex74n_k$(12);
            this.tmp01__1 = Companion_getInstance();
            this.set_state_rjd8d0_k$(11);
            suspendResult = this.$channel_1.flushAndClose_3zd2q_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.tmp01__1;
            tmp_5.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(Unit_getInstance());
            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 12:
            this.set_exceptionState_fex74n_k$(14);
            var tmp_6 = this.get_exception_x0n6w6_k$();
            if (tmp_6 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_7 = this;
              Companion_getInstance();
              tmp_7.TRY_RESULT0__1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.set_state_rjd8d0_k$(13);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 13:
            this.set_exceptionState_fex74n_k$(14);
            return Unit_getInstance();
          case 14:
            throw this.get_exception_x0n6w6_k$();
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
  protoOf(writer$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new writer$slambda(this.$block_1, this.$channel_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(writer$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.get_isClosedForWrite_seyg5n_k$()) {
        $channel.cancel_9i2dv0_k$(it);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.source_1 = source;
  }
  protoOf($writePacketCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!this.source_1.exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this._this__u8e3s4__1.get_writeBuffer_t7kuc6_k$().write_nimze1_k$(this.source_1, get_remaining(this.source_1));
            this.set_state_rjd8d0_k$(2);
            suspendResult = flushIfNeeded(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
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
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function _get_origin__hwq945($this) {
    return $this.origin_1;
  }
  function ClosedByteChannelException$_init_$ref_yjp351() {
    var l = function (p0) {
      return new ClosedByteChannelException(p0);
    };
    l.callableName = '<init>';
    return l;
  }
  function CloseToken(origin) {
    this.origin_1 = origin;
  }
  protoOf(CloseToken).wrapCause_rnti1o_k$ = function (wrap) {
    var tmp0_subject = this.origin_1;
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = this.origin_1.createCopy_mmw9ld_k$();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(this.origin_1.message, this.origin_1);
        } else {
          tmp = wrap(this.origin_1);
        }
      }
    }
    return tmp;
  };
  protoOf(CloseToken).wrapCause$default_rqpy7l_k$ = function (wrap, $super) {
    var tmp;
    if (wrap === VOID) {
      tmp = ClosedByteChannelException$_init_$ref_yjp351();
    } else {
      tmp = wrap;
    }
    wrap = tmp;
    return $super === VOID ? this.wrapCause_rnti1o_k$(wrap) : $super.wrapCause_rnti1o_k$.call(this, wrap);
  };
  protoOf(CloseToken).throwOrNull_cyi9f_k$ = function (wrap) {
    var tmp0_safe_receiver = this.wrapCause_rnti1o_k$(wrap);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return tmp;
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_initial__5sx0zj($this, _set____db54di) {
    $this.initial_1 = _set____db54di;
  }
  function _get_initial__vf5bcj($this) {
    return $this.initial_1;
  }
  function _set_consumed__uchkof($this, _set____db54di) {
    $this.consumed_1 = _set____db54di;
  }
  function _get_consumed__hjl97n($this) {
    return $this.consumed_1;
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.buffer_1.transferFrom_v29myr_k$($this.delegate_1.get_readBuffer_yjmj9b_k$());
    $this.initial_1 = add($this.initial_1, appended);
  }
  function updateConsumed($this) {
    $this.consumed_1 = add($this.consumed_1, subtract($this.initial_1, $this.buffer_1.get_size_woubt6_k$()));
    $this.initial_1 = $this.buffer_1.get_size_woubt6_k$();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.min_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (compare(this._this__u8e3s4__1.get_readBuffer_yjmj9b_k$().get_size_woubt6_k$(), fromInt(this.min_1)) >= 0) {
              return true;
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.delegate_1.awaitContent_q7m0p7_k$(this.min_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this._this__u8e3s4__1);
              return true;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.delegate_1 = delegate;
    this.buffer_1 = new Buffer();
    this.initial_1 = new Long(0, 0);
    this.consumed_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CountedByteReadChannel).get_totalBytesRead_dai8jq_k$ = function () {
    updateConsumed(this);
    return this.consumed_1;
  };
  protoOf(CountedByteReadChannel).get_closedCause_o1qcj8_k$ = function () {
    return this.delegate_1.get_closedCause_o1qcj8_k$();
  };
  protoOf(CountedByteReadChannel).get_isClosedForRead_ajcc1s_k$ = function () {
    return this.buffer_1.exhausted_p1jt55_k$() && this.delegate_1.get_isClosedForRead_ajcc1s_k$();
  };
  protoOf(CountedByteReadChannel).get_readBuffer_yjmj9b_k$ = function () {
    transferFromDelegate(this);
    return this.buffer_1;
  };
  protoOf(CountedByteReadChannel).awaitContent_q7m0p7_k$ = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CountedByteReadChannel).cancel_9i2dv0_k$ = function (cause) {
    this.delegate_1.cancel_9i2dv0_k$(cause);
    this.buffer_1.close_yn9xrc_k$();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_0(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  function JvmSerializer() {
  }
  function DummyJvmSimpleSerializerReplacement() {
    DummyJvmSimpleSerializerReplacement_instance = this;
  }
  var DummyJvmSimpleSerializerReplacement_instance;
  function DummyJvmSimpleSerializerReplacement_getInstance() {
    if (DummyJvmSimpleSerializerReplacement_instance == null)
      new DummyJvmSimpleSerializerReplacement();
    return DummyJvmSimpleSerializerReplacement_instance;
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  function values() {
    return [LineEnding_Default_getInstance(), LineEnding_Lenient_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Default':
        return LineEnding_Default_getInstance();
      case 'Lenient':
        return LineEnding_Lenient_getInstance();
      default:
        LineEnding_initEntries();
        THROW_IAE('No enum constant io.ktor.utils.io.LineEnding.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_getInstance();
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  var $ENTRIES;
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    LineEnding_initEntries();
    return LineEnding_Lenient_instance;
  }
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if ($this === Companion_getInstance_2().CR_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_2().LF_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_2().CRLF_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().values_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var it = element.mode_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.add_utx5q5_k$(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.CR_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.LF_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.CRLF_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.Any_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.values_1 = listOf([new LineEndingMode(this.CR_1), new LineEndingMode(this.LF_1), new LineEndingMode(this.CRLF_1)]);
  }
  protoOf(Companion_1).get_CR_oadccb_k$ = function () {
    return this.CR_1;
  };
  protoOf(Companion_1).get_LF_b8k5ow_k$ = function () {
    return this.LF_1;
  };
  protoOf(Companion_1).get_CRLF_gdqv27_k$ = function () {
    return this.CRLF_1;
  };
  protoOf(Companion_1).get_Any_jwln0w_k$ = function () {
    return this.Any_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.mode_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.mode_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.mode_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.mode_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.mode_1, other);
  };
  function _get_source__4cuw5s($this) {
    return $this.source_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function SourceByteReadChannel(source) {
    this.source_1 = source;
    this.closed_1 = null;
  }
  protoOf(SourceByteReadChannel).get_closedCause_o1qcj8_k$ = function () {
    var tmp0_safe_receiver = this.closed_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wrapCause$default_rqpy7l_k$();
  };
  protoOf(SourceByteReadChannel).get_isClosedForRead_ajcc1s_k$ = function () {
    return this.source_1.exhausted_p1jt55_k$();
  };
  protoOf(SourceByteReadChannel).get_readBuffer_yjmj9b_k$ = function () {
    var tmp0_safe_receiver = this.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.source_1.get_buffer_bmaafd_k$();
  };
  protoOf(SourceByteReadChannel).awaitContent_q7m0p7_k$ = function (min, $completion) {
    var tmp0_safe_receiver = this.get_closedCause_o1qcj8_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.source_1.request_mpoy7z_k$(fromInt(min));
  };
  protoOf(SourceByteReadChannel).cancel_9i2dv0_k$ = function (cause) {
    if (!(this.closed_1 == null))
      return Unit_getInstance();
    this.source_1.close_yn9xrc_k$();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.closed_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.get_buffer_bmaafd_k$().get_size_woubt6_k$();
    var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_getInstance();
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.exhausted_p1jt55_k$();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.get_size_woubt6_k$()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function buildPacket(block) {
    var builder = new Buffer();
    block(builder);
    return builder;
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.write_ti570x_k$(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.get_buffer_bmaafd_k$();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
  }
  function get_ByteReadPacketEmpty() {
    _init_properties_ByteReadPacket_kt__28475y();
    return ByteReadPacketEmpty;
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.write_ti570x_k$(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.exhausted_p1jt55_k$() && block(_this__u8e3s4.get_buffer_bmaafd_k$())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.request_mpoy7z_k$(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.get_buffer_bmaafd_k$().skip_bgd4sf_k$(countToDiscard);
    return countToDiscard;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.readAtMostTo_kub29z_k$(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
    if (charset.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$()))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.newEncoder_gqwcdg_k$(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().get_UTF_8_ihn39z_k$())) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.newDecoder_zcettw_k$(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : charset;
    if (charset === Charsets_getInstance().get_UTF_8_ihn39z_k$()) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.newEncoder_gqwcdg_k$(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).produceInstance_xswihh_k$ = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function useInstance(_this__u8e3s4, block) {
    var instance = _this__u8e3s4.borrow_mvkpor_k$();
    try {
      return block(instance);
    }finally {
      _this__u8e3s4.recycle_d2xv5h_k$(instance);
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).get_capacity_wxbgcd_k$ = function () {
    return 0;
  };
  protoOf(NoPoolImpl).recycle_d2xv5h_k$ = function (instance) {
    return Unit_getInstance();
  };
  protoOf(NoPoolImpl).dispose_3nnxhr_k$ = function () {
    return Unit_getInstance();
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).forName_etcah2_k$ = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().UTF_8__1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().ISO_8859_1__1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  protoOf(Companion_2).isSupported_c9nas6_k$ = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            // Inline function 'kotlin.let' call

            var it = replace_0(charset, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
            var tmp_2;
            if (it === 'iso-8859-1') {
              tmp_2 = true;
            } else {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp_2 = it.toLowerCase() === 'iso-8859-1';
            }

            tmp_1 = tmp_2;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Charset(_name) {
    Companion_getInstance_3();
    this._name_1 = _name;
  }
  protoOf(Charset).get__name_srescf_k$ = function () {
    return this._name_1;
  };
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this._name_1 === other._name_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this._name_1);
  };
  protoOf(Charset).toString = function () {
    return this._name_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4._name_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.UTF_8__1 = new CharsetImpl('UTF-8');
    this.ISO_8859_1__1 = new CharsetImpl('ISO-8859-1');
  }
  protoOf(Charsets).get_UTF_8_ihn39z_k$ = function () {
    return this.UTF_8__1;
  };
  protoOf(Charsets).get_ISO_8859_1_y3qebr_k$ = function () {
    return this.ISO_8859_1__1;
  };
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this._charset_1 = _charset;
  }
  protoOf(CharsetDecoder).get__charset_c5gayc_k$ = function () {
    return this._charset_1;
  };
  function forName(_this__u8e3s4, name) {
    return Companion_getInstance_3().forName_etcah2_k$(name);
  }
  function CharsetEncoder(_charset) {
    this._charset_1 = _charset;
  }
  protoOf(CharsetEncoder).get__charset_c5gayc_k$ = function () {
    return this._charset_1;
  };
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.get_buffer_bmaafd_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.decode_hpap4q_k$(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
    dst.append_jgojdo_k$(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().ISO_8859_1__1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().UTF_8__1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.write$default_h97jte_k$(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).newEncoder_gqwcdg_k$ = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).newDecoder_zcettw_k$ = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4._charset_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4._charset_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function _get_charset__c43qgr($this) {
    return $this.charset_1;
  }
  function component1($this) {
    return $this.charset_1;
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.charset_1 = charset;
  }
  protoOf(CharsetEncoderImpl).copy_2crzso_k$ = function (charset) {
    return new CharsetEncoderImpl(charset);
  };
  protoOf(CharsetEncoderImpl).copy$default_73mtqm_k$ = function (charset, $super) {
    charset = charset === VOID ? this.charset_1 : charset;
    return $super === VOID ? this.copy_2crzso_k$(charset) : $super.copy_2crzso_k$.call(this, charset);
  };
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.charset_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.charset_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.charset_1.equals(other.charset_1))
      return false;
    return true;
  };
  function _get_charset__c43qgr_0($this) {
    return $this.charset_1;
  }
  function component1_0($this) {
    return $this.charset_1;
  }
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.charset_1 = charset;
  }
  protoOf(CharsetDecoderImpl).copy_2crzso_k$ = function (charset) {
    return new CharsetDecoderImpl(charset);
  };
  protoOf(CharsetDecoderImpl).copy$default_ng4zhe_k$ = function (charset, $super) {
    charset = charset === VOID ? this.charset_1 : charset;
    return $super === VOID ? this.copy_2crzso_k$(charset) : $super.copy_2crzso_k$.call(this, charset);
  };
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.charset_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.charset_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.charset_1.equals(other.charset_1))
      return false;
    return true;
  };
  function Decoder() {
  }
  function Decoder_0(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.$this_toKtor_1 = $this_toKtor;
  }
  protoOf(toKtor$1).decode_m3924y_k$ = function () {
    return this.$this_toKtor_1.decode();
  };
  protoOf(toKtor$1).decode_hpap4q_k$ = function (buffer) {
    return this.$this_toKtor_1.decode(buffer);
  };
  protoOf(toKtor$1).decode_mvpnei_k$ = function (buffer, options) {
    return this.$this_toKtor_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.fatal_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().contains_aljjnj_k$(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).get_fatal_ir8ue3_k$ = function () {
    return this.fatal_1;
  };
  protoOf(TextDecoderFallback).decode_m3924y_k$ = function () {
    return '';
  };
  protoOf(TextDecoderFallback).decode_hpap4q_k$ = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.fatal_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.writeByte_9ih3z3_k$(toByte(point >> 8));
        }
        builder.writeByte_9ih3z3_k$(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  protoOf(TextDecoderFallback).decode_mvpnei_k$ = function (buffer, options) {
    return this.decode_hpap4q_k$(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function Closeable() {
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().get_Default_goqax4_k$();
  }
  function JvmSerializable() {
  }
  function JvmSerializerReplacement(serializer, value) {
    return DummyJvmSimpleSerializerReplacement_getInstance();
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.writeByte_9ih3z3_k$(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function get_atomicfu$reentrantLock() {
    _init_properties_Synchronized_kt__f4zdjg();
    return Lock;
  }
  var Lock;
  function synchronized(lock, block) {
    _init_properties_Synchronized_kt__f4zdjg();
    return block();
  }
  function ReentrantLock() {
  }
  protoOf(ReentrantLock).lock_fp5s9n_k$ = function () {
  };
  protoOf(ReentrantLock).tryLock_hapj0a_k$ = function () {
    return true;
  };
  protoOf(ReentrantLock).unlock_85w96c_k$ = function () {
  };
  var properties_initialized_Synchronized_kt_8bwsba;
  function _init_properties_Synchronized_kt__f4zdjg() {
    if (!properties_initialized_Synchronized_kt_8bwsba) {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  function _get_instances__6pklt9($this) {
    return $this.instances_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function DefaultPool(capacity) {
    this.capacity_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.capacity_1;
    tmp.instances_1 = Array(size);
    this.size_1 = 0;
  }
  protoOf(DefaultPool).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(DefaultPool).disposeInstance_6ek0a2_k$ = function (instance) {
  };
  protoOf(DefaultPool).clearInstance_nfz4jw_k$ = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).validateInstance_6mwbhp_k$ = function (instance) {
  };
  protoOf(DefaultPool).borrow_mvkpor_k$ = function () {
    if (this.size_1 === 0)
      return this.produceInstance_xswihh_k$();
    this.size_1 = this.size_1 - 1 | 0;
    var idx = this.size_1;
    var tmp = this.instances_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.instances_1[idx] = null;
    return this.clearInstance_nfz4jw_k$(instance);
  };
  protoOf(DefaultPool).recycle_d2xv5h_k$ = function (instance) {
    this.validateInstance_6mwbhp_k$(instance);
    if (this.size_1 === this.capacity_1) {
      this.disposeInstance_6ek0a2_k$(instance);
    } else {
      var _unary__edvuaz = this.size_1;
      this.size_1 = _unary__edvuaz + 1 | 0;
      this.instances_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).dispose_3nnxhr_k$ = function () {
    var inductionVariable = 0;
    var last = this.size_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.instances_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.instances_1[i] = null;
        this.disposeInstance_6ek0a2_k$(instance);
      }
       while (inductionVariable < last);
    this.size_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).resume_2o15jx_k$ = resume;
  protoOf(Read).resume_xzb95z_k$ = resume_0;
  protoOf(Read).resume$default_53elu8_k$ = resume$default;
  protoOf(Write).resume_2o15jx_k$ = resume;
  protoOf(Write).resume_xzb95z_k$ = resume_0;
  protoOf(Write).resume$default_53elu8_k$ = resume$default;
  protoOf(ByteChannel).awaitContent$default_rxihsg_k$ = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).awaitContent$default_rxihsg_k$ = awaitContent$default;
  protoOf(CountedByteReadChannel).awaitContent$default_rxihsg_k$ = awaitContent$default;
  protoOf(SourceByteReadChannel).awaitContent$default_rxihsg_k$ = awaitContent$default;
  protoOf(DefaultPool).close_yn9xrc_k$ = close;
  protoOf(NoPoolImpl).close_yn9xrc_k$ = close;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LineEnding_Lenient_getInstance;
  _.$_$.b = copyAndClose;
  _.$_$.c = copyTo;
  _.$_$.d = copyTo_0;
  _.$_$.e = discard;
  _.$_$.f = readAvailable;
  _.$_$.g = readLineStrictTo;
  _.$_$.h = readLine;
  _.$_$.i = readPacket;
  _.$_$.j = readRemaining;
  _.$_$.k = readUntil;
  _.$_$.l = skipIfFound;
  _.$_$.m = toByteArray;
  _.$_$.n = writeFully;
  _.$_$.o = writePacket;
  _.$_$.p = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.q = Charsets_getInstance;
  _.$_$.r = Companion_getInstance_1;
  _.$_$.s = Companion_getInstance_2;
  _.$_$.t = MalformedInputException;
  _.$_$.u = decode;
  _.$_$.v = encode;
  _.$_$.w = forName;
  _.$_$.x = get_name;
  _.$_$.y = BytePacketBuilder;
  _.$_$.z = ByteReadPacket;
  _.$_$.a1 = Closeable;
  _.$_$.b1 = build;
  _.$_$.c1 = canRead;
  _.$_$.d1 = readText_0;
  _.$_$.e1 = get_remaining;
  _.$_$.f1 = get_size;
  _.$_$.g1 = takeWhile;
  _.$_$.h1 = toByteArray_0;
  _.$_$.i1 = writeFully_0;
  _.$_$.j1 = writeText;
  _.$_$.k1 = get_ByteArrayPool;
  _.$_$.l1 = DefaultPool;
  _.$_$.m1 = NoPoolImpl;
  _.$_$.n1 = ByteChannel;
  _.$_$.o1 = ByteReadChannel;
  _.$_$.p1 = ByteReadChannel_1;
  _.$_$.q1 = ClosedByteChannelException;
  _.$_$.r1 = JvmSerializable;
  _.$_$.s1 = JvmSerializerReplacement;
  _.$_$.t1 = JvmSerializer;
  _.$_$.u1 = WriterScope;
  _.$_$.v1 = cancel_0;
  _.$_$.w1 = close_0;
  _.$_$.x1 = counted;
  _.$_$.y1 = invokeOnCompletion;
  _.$_$.z1 = ioDispatcher;
  _.$_$.a2 = readText;
  _.$_$.b2 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
