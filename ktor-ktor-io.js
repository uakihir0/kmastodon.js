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
  var Companion_instance = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var protoOf = kotlin_kotlin.$_$.rb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  var toString = kotlin_kotlin.$_$.og;
  var hashCode = kotlin_kotlin.$_$.ra;
  var equals = kotlin_kotlin.$_$.ma;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var createFailure = kotlin_kotlin.$_$.dg;
  var Result = kotlin_kotlin.$_$.kf;
  var initMetadataForInterface = kotlin_kotlin.$_$.wa;
  var toString_0 = kotlin_kotlin.$_$.je;
  var newThrowable = kotlin_kotlin.$_$.nb;
  var stackTraceToString = kotlin_kotlin.$_$.ng;
  var VOID = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.hb;
  var FunctionAdapter = kotlin_kotlin.$_$.z9;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var fromInt = kotlin_kotlin.$_$.n9;
  var compare = kotlin_kotlin.$_$.h9;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var add = kotlin_kotlin.$_$.e9;
  var intercepted = kotlin_kotlin.$_$.k8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  var returnIfSuspended = kotlin_kotlin.$_$.x2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h8;
  var Long = kotlin_kotlin.$_$.hf;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ua;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.r3;
  var CancellationException = kotlin_kotlin.$_$.g8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var convertToInt = kotlin_kotlin.$_$.j9;
  var toString_1 = kotlin_kotlin.$_$.ub;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var IllegalStateException = kotlin_kotlin.$_$.gf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.l4;
  var captureStack = kotlin_kotlin.$_$.ca;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.od;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var equalsLong = kotlin_kotlin.$_$.m9;
  var get_ONE = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g4;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.x9;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.z1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Continuation = kotlin_kotlin.$_$.t8;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var initMetadataForLambda = kotlin_kotlin.$_$.xa;
  var KFunctionImpl = kotlin_kotlin.$_$.fc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.va;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.cf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a3;
  var listOf = kotlin_kotlin.$_$.e7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u3;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.zc;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.ve;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var replace_0 = kotlin_kotlin.$_$.pd;
  var getStringHashCode = kotlin_kotlin.$_$.qa;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ia;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.db;
  var trim = kotlin_kotlin.$_$.qe;
  var toByte = kotlin_kotlin.$_$.sb;
  var decodeToString_0 = kotlin_kotlin.$_$.xc;
  var setOf = kotlin_kotlin.$_$.p7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var charSequenceGet = kotlin_kotlin.$_$.ga;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.i1v().x8(Companion_getInstance().f1v_1);
  }
  function resume_0(throwable) {
    var tmp = this.i1v();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.x8(tmp1_elvis_lhs == null ? Companion_getInstance().f1v_1 : tmp1_elvis_lhs.qn_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.r1x(min, $completion) : $super.r1x.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref_0, KFunctionImpl, VOID, [0]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.v1d();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.e1v_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.f1v_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
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
    return Empty_instance;
  }
  function Closed(cause) {
    this.g1v_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.g1v_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.g1v_1 == null ? 0 : hashCode(this.g1v_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.g1v_1, other.g1v_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.m1v_1 = continuation;
    this.n1v_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.m1v_1), 16));
      stackTraceToString(this_0);
      tmp.n1v_1 = this_0;
    }
  }
  protoOf(Read).i1v = function () {
    return this.m1v_1;
  };
  protoOf(Read).h1v = function () {
    return this.n1v_1;
  };
  protoOf(Read).j1v = function () {
    return 'read';
  };
  function Write(continuation) {
    this.o1v_1 = continuation;
    this.p1v_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.o1v_1), 16));
      stackTraceToString(this_0);
      tmp.p1v_1 = this_0;
    }
  }
  protoOf(Write).i1v = function () {
    return this.o1v_1;
  };
  protoOf(Write).h1v = function () {
    return this.p1v_1;
  };
  protoOf(Write).j1v = function () {
    return 'write';
  };
  function rethrowCloseCauseIfNeeded($this) {
    var tmp0_safe_receiver = $this.z1v();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.t1v_1;
    $this.r1v_1.c18($this.v1v_1);
    $this.s1v_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.u1v_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.u1v_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.k1v();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().e1v_1;
    var continuation = $this.u1v_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.l1v(cause);
    }
    var tmp0_safe_receiver = $this.y1v_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(cause);
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.a1w_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).v1d = function () {
    return this.a1w_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).l3 = function () {
    return this.a1w_1;
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
  function ByteChannel$invokeOnClose$lambda() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_0() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
    return function () {
      this$0.y1v_1.atomicfu$compareAndSet($handler, null);
      return Unit_instance;
    };
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j1w_1 = _this__u8e3s4;
    this.k1w_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            rethrowCloseCauseIfNeeded(this.j1w_1);
            if (compare(this.j1w_1.v1v_1.e1(), fromInt(this.k1w_1)) >= 0)
              return true;
            this.l1w_1 = this.j1w_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.j1w_1.s1v_1), this.j1w_1.v1v_1.e1()), fromInt(this.k1w_1)) < 0 && this.j1w_1.x1v_1.kotlinx$atomicfu$value == null)) {
              this.m8_1 = 3;
              continue $sm;
            }

            this.m8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.y1e();
            var tmp0 = this.l1w_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.u1v_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.u1v_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.k1v();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.l1v(new ConcurrentIOException(tmp2.j1v(), previous.h1v()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.k1v();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.l1v(previous.g1v_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.j1w_1.s1v_1), this.j1w_1.v1v_1.e1()), fromInt(this.k1w_1)) < 0 && this.j1w_1.x1v_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.u1v_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.u1v_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.k1v();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.g1f(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.j1w_1);
            if (compare(this.j1w_1.v1v_1.e1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.j1w_1);
            }

            return compare(this.j1w_1.v1v_1.e1(), fromInt(this.k1w_1)) >= 0;
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1w_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            rethrowCloseCauseIfNeeded(this.u1w_1);
            this.u1w_1.w1w();
            if (this.u1w_1.x1w())
              return Unit_instance;
            this.v1w_1 = this.u1w_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.u1w_1.x1w() && this.u1w_1.x1v_1.kotlinx$atomicfu$value == null)) {
              this.m8_1 = 3;
              continue $sm;
            }

            this.m8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.y1e();
            var tmp0 = this.v1w_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.u1v_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.u1v_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.k1v();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.l1v(new ConcurrentIOException(tmp2.j1v(), previous.h1v()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.k1v();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.l1v(previous.g1v_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(!this.u1w_1.x1w() && this.u1w_1.x1v_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.u1v_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.u1v_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.k1v();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.g1f(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1x_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var this_0 = this.g1x_1;
            this.n8_1 = 2;
            this.i1x_1 = Companion_instance;
            this.m8_1 = 1;
            suspendResult = this_0.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.i1x_1;
            tmp_0.h1x_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n8_1 = 4;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.n8_1 = 4;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof Error) {
              var e = this.p8_1;
              var tmp_2 = this;
              tmp_2.h1x_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m8_1 = 3;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 3:
            this.n8_1 = 4;
            if (!this.g1x_1.x1v_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.g1x_1, null);
            return Unit_instance;
          case 4:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 4) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.q1v_1 = autoFlush;
    this.r1v_1 = new Buffer();
    this.s1v_1 = 0;
    this.t1v_1 = new Object();
    this.u1v_1 = atomic$ref$1(Empty_instance);
    this.v1v_1 = new Buffer();
    this.w1v_1 = new Buffer();
    this.x1v_1 = atomic$ref$1(null);
    this.y1v_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).k1x = function () {
    return this.q1v_1;
  };
  protoOf(ByteChannel).x1w = function () {
    return this.s1v_1 < 1048576;
  };
  protoOf(ByteChannel).l1x = function () {
    var tmp0_safe_receiver = this.x1v_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1h();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = new ClosedReadChannelException(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.v1v_1.z16()) {
      moveFlushToReadBuffer(this);
    }
    return this.v1v_1;
  };
  protoOf(ByteChannel).m1x = function () {
    if (this.n1x()) {
      var tmp0_safe_receiver = this.x1v_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1h();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = new ClosedWriteChannelException(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.w1v_1;
  };
  protoOf(ByteChannel).z1v = function () {
    var tmp0_safe_receiver = this.x1v_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1h();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ByteChannel).n1x = function () {
    return !(this.x1v_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).o1x = function () {
    var tmp;
    var tmp0_safe_receiver = this.x1v_1.kotlinx$atomicfu$value;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1x()) === true) {
      tmp = true;
    } else {
      tmp = (this.n1x() && this.s1v_1 === 0 && this.v1v_1.z16());
    }
    return tmp;
  };
  protoOf(ByteChannel).r1x = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ByteChannel).j1x = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ByteChannel).w1w = function () {
    if (this.w1v_1.z16())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.t1v_1;
    var count = convertToInt(this.w1v_1.e1());
    this.r1v_1.r18(this.w1v_1);
    this.s1v_1 = this.s1v_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.u1v_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.u1v_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.k1v();
    }
  };
  protoOf(ByteChannel).c4 = function () {
    this.w1w();
    if (!this.x1v_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).t1x = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ByteChannel).u1x = function (cause) {
    if (!(this.x1v_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.x1v_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).l1h();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = new ClosedByteChannelException(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).v1x = function (handler) {
    var existingCause = this.x1v_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).l1h();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = new ClosedByteChannelException(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.y1v_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    var cause = this.x1v_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.y1v_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).l1h();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = new ClosedByteChannelException(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
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
    this_0.i18(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.x1x_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.x1x_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.x1x_1.d1(i) === $this.x1x_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.x1x_1.d1(i) === $this.x1x_1.d1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.d1y_1, extra), $this.z1x_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.z1x_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.x1x_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1z_1 = _this__u8e3s4;
    this.j1z_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 9;
            this.i1z_1.d1y_1 = new Long(0, 0);
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.i1z_1.a1y_1.z16()) {
              this.k1z_1 = true;
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 2;
              suspendResult = this.i1z_1.w1x_1.s1x(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.k1z_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            if (!this.k1z_1) {
              this.m8_1 = 7;
              continue $sm;
            }

            this.m8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.i1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 5;
            suspendResult = checkFullMatch(this.i1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.i1z_1.d1y_1;
            } else {
              this.m8_1 = 6;
              continue $sm;
            }

          case 6:
            this.m8_1 = 1;
            continue $sm;
          case 7:
            if (!this.j1z_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.i1z_1, this.i1z_1.x1x_1) + '" but encountered end of input');
            }

            this.i1z_1.d1y_1 = add(this.i1z_1.d1y_1, this.i1z_1.c1y_1.c18(this.i1z_1.y1x_1.m1x()));
            this.m8_1 = 8;
            suspendResult = this.i1z_1.y1x_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.i1z_1.d1y_1;
          case 9:
            throw this.p8_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1y_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.n1y_1.a1y_1.z16()) {
              this.o1y_1 = true;
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 2;
              suspendResult = this.n1y_1.w1x_1.s1x(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.o1y_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            if (!this.o1y_1) {
              this.m8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.n1y_1.a1y_1, this.n1y_1.x1x_1.d1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.n1y_1.a1y_1;
              checkBounds(this.n1y_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.n1y_1.d1y_1 = add(this.n1y_1.d1y_1, this.n1y_1.a1y_1.c18(this.n1y_1.y1x_1.m1x()));
              this.m8_1 = 5;
              suspendResult = flushIfNeeded(this.n1y_1.y1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.n1y_1, nextMatch);
              var tmp_1 = this.n1y_1;
              var tmp_2 = this.n1y_1.d1y_1;
              var tmp_3 = this.n1y_1.y1x_1.m1x();
              tmp_1.d1y_1 = add(tmp_2, this.n1y_1.a1y_1.z17(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.m8_1 = 4;
              suspendResult = flushIfNeeded(this.n1y_1.y1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.m8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.p8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1y_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.x1y_1.a1y_1.z16()) {
              this.z1y_1 = true;
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 2;
              suspendResult = this.x1y_1.w1x_1.s1x(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.z1y_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            if (!this.z1y_1) {
              this.m8_1 = 7;
              continue $sm;
            }

            this.y1y_1 = this.x1y_1.a1y_1.c17();
            if (this.x1y_1.e1y_1 > 0 && !(this.y1y_1 === this.x1y_1.x1x_1.d1(this.x1y_1.e1y_1))) {
              var oldMatchIndex = this.x1y_1.e1y_1;
              while (this.x1y_1.e1y_1 > 0 && !(this.y1y_1 === this.x1y_1.x1x_1.d1(this.x1y_1.e1y_1))) {
                this.x1y_1.e1y_1 = this.x1y_1.b1y_1[this.x1y_1.e1y_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.x1y_1.e1y_1 | 0);
              checkBounds(this.x1y_1, retained);
              var tmp_0 = this.x1y_1;
              var tmp_1 = this.x1y_1.d1y_1;
              var tmp_2 = this.x1y_1.y1x_1.m1x();
              tmp_0.d1y_1 = add(tmp_1, this.x1y_1.c1y_1.z17(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.x1y_1.e1y_1 === 0 && !(this.y1y_1 === this.x1y_1.x1x_1.d1(this.x1y_1.e1y_1))) {
                this.m8_1 = 6;
                suspendResult = writeByte(this.x1y_1.y1x_1, this.y1y_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 4;
                continue $sm;
              }
            } else {
              this.m8_1 = 5;
              continue $sm;
            }

          case 4:
            this.m8_1 = 5;
            continue $sm;
          case 5:
            this.x1y_1.e1y_1 = this.x1y_1.e1y_1 + 1 | 0;
            if (this.x1y_1.e1y_1 === this.x1y_1.x1x_1.e1()) {
              return true;
            }

            this.x1y_1.c1y_1.s18(this.y1y_1);
            this.m8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.x1y_1.d1y_1;
            this.x1y_1.d1y_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.p8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.w1x_1 = channel;
    this.x1x_1 = matchString;
    this.y1x_1 = writeChannel;
    this.z1x_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.x1x_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.a1y_1 = this.w1x_1.l1x();
    this.b1y_1 = buildPartialMatchTable(this);
    this.c1y_1 = new Buffer();
    this.d1y_1 = new Long(0, 0);
    this.e1y_1 = 0;
  }
  protoOf(ByteChannelScanner).l1z = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function attachJob(_this__u8e3s4, job) {
    job.o1b(true, VOID, attachJob$lambda(_this__u8e3s4));
  }
  function attachWriterJob(_this__u8e3s4, writerJob) {
    var tmp = writerJob.m1z_1;
    var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1x(attachWriterJob$lambda(_this__u8e3s4));
    }
  }
  function attachJob$lambda($this_attachJob) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $this_attachJob.u1x(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function attachWriterJob$lambda($this_attachWriterJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        $this_attachWriterJob.u1x(cause);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.o1z_1 = null;
    this.p1z_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).z1v = function () {
    return this.o1z_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).o1x = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).l1x = function () {
    return this.p1z_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).r1x = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).u1x = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.q1z_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.u1x(IOException_init_$Create$('Channel was cancelled'));
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z1v();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? new Long(-1, 2147483647) : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).l1z(ignoreMissing, $completion);
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
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.l1x().y16().e1());
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' bytes');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' bytes');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z1v();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count) {
    if (compare(count, new Long(0, 0)) > 0) {
      if (outBuffer._v == null) {
        outBuffer._v = new Buffer();
      }
      outBuffer._v.m18(readBuffer, count);
      consumed._v = add(consumed._v, count);
    }
  }
  function internalReadLineTo$appendOrBuffer(outBuffer, $out, readBuffer, consumed, count) {
    if (outBuffer._v == null) {
      if (compare(count, new Long(0, 0)) > 0) {
        $out.b1(readString(readBuffer, count));
        consumed._v = add(consumed._v, count);
      }
    } else {
      internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count);
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
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1z_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.a20_1 = new Buffer();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.z1z_1.o1x()) {
              this.m8_1 = 4;
              continue $sm;
            }

            if (this.z1z_1.l1x().z16()) {
              this.m8_1 = 2;
              suspendResult = this.z1z_1.s1x(VOID, this);
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
            this.a20_1.r18(this.z1z_1.l1x());
            this.m8_1 = 1;
            continue $sm;
          case 4:
            rethrowCloseCauseIfNeeded_0(this.z1z_1);
            return this.a20_1;
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j20_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = readBuffer(this.j20_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s20_1 = _this__u8e3s4;
    this.t20_1 = channel;
    this.u20_1 = limit;
  }
  protoOf($copyToCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 12;
            this.v20_1 = this.u20_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 8;
            this.n8_1 = 7;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.s20_1.o1x() && compare(this.v20_1, new Long(0, 0)) > 0)) {
              this.m8_1 = 6;
              continue $sm;
            }

            if (this.s20_1.l1x().z16()) {
              this.m8_1 = 3;
              suspendResult = this.s20_1.s1x(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 3:
            this.m8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.v20_1;
            var b = get_remaining(this.s20_1.l1x());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.s20_1.l1x().b18(this.t20_1.m1x(), count);
            this.v20_1 = subtract(this.v20_1, count);
            this.m8_1 = 5;
            suspendResult = this.t20_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m8_1 = 2;
            continue $sm;
          case 6:
            this.n8_1 = 12;
            this.m8_1 = 10;
            continue $sm;
          case 7:
            this.n8_1 = 8;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              this.s20_1.u1x(cause);
              close_0(this.t20_1, cause);
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 8:
            this.n8_1 = 12;
            this.w20_1 = this.p8_1;
            this.m8_1 = 9;
            suspendResult = this.t20_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.w20_1;
          case 10:
            this.n8_1 = 12;
            this.m8_1 = 11;
            suspendResult = this.t20_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.u20_1, this.v20_1);
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f21_1 = _this__u8e3s4;
    this.g21_1 = max;
  }
  protoOf($discardCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.h21_1 = this.g21_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.h21_1, new Long(0, 0)) > 0 && !this.f21_1.o1x())) {
              this.m8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.f21_1) === 0) {
              this.m8_1 = 2;
              suspendResult = this.f21_1.s1x(VOID, this);
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
            var tmp0 = this.h21_1;
            var b = get_remaining(this.f21_1.l1x());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.f21_1.l1x(), count);
            this.h21_1 = subtract(this.h21_1, count);
            this.m8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.g21_1, this.h21_1);
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
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q21_1 = _this__u8e3s4;
    this.r21_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            this.s21_1 = new Long(0, 0);
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 7;
            this.n8_1 = 6;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.q21_1.o1x()) {
              this.m8_1 = 5;
              continue $sm;
            }

            this.s21_1 = add(this.s21_1, this.q21_1.l1x().c18(this.r21_1.m1x()));
            this.m8_1 = 3;
            suspendResult = this.r21_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m8_1 = 4;
            suspendResult = this.q21_1.s1x(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 2;
            continue $sm;
          case 5:
            this.n8_1 = 11;
            this.m8_1 = 9;
            continue $sm;
          case 6:
            this.n8_1 = 7;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.p8_1;
              this.q21_1.u1x(cause);
              close_0(this.r21_1, cause);
              throw cause;
            } else {
              throw this.p8_1;
            }

          case 7:
            this.n8_1 = 11;
            this.t21_1 = this.p8_1;
            this.m8_1 = 8;
            suspendResult = this.r21_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.t21_1;
          case 9:
            this.n8_1 = 11;
            this.m8_1 = 10;
            suspendResult = this.r21_1.j1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.s21_1;
          case 11:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 11) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c22_1 = _this__u8e3s4;
    this.d22_1 = buffer;
    this.e22_1 = offset;
    this.f22_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (this.c22_1.o1x())
              return -1;
            if (this.c22_1.l1x().z16()) {
              this.m8_1 = 1;
              suspendResult = this.c22_1.s1x(VOID, this);
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
            if (this.c22_1.o1x())
              return -1;
            return readAvailable_0(this.c22_1.l1x(), this.d22_1, this.e22_1, this.f22_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o22_1 = _this__u8e3s4;
    this.p22_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m8_1 = 1;
            suspendResult = peek(this.o22_1, this.p22_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.p22_1)) {
              this.m8_1 = 3;
              suspendResult = discard(this.o22_1, fromInt(this.p22_1.e1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y22_1 = _this__u8e3s4;
    this.z22_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            this.a23_1 = new Buffer();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.a23_1.e1(), fromInt(this.z22_1)) < 0)) {
              this.m8_1 = 5;
              continue $sm;
            }

            if (this.y22_1.l1x().z16()) {
              this.m8_1 = 2;
              suspendResult = this.y22_1.s1x(VOID, this);
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
            if (this.y22_1.o1x()) {
              this.m8_1 = 5;
              continue $sm;
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.y22_1.l1x()), subtract(numberToLong(this.z22_1), this.a23_1.e1())) > 0) {
              this.y22_1.l1x().b18(this.a23_1, subtract(numberToLong(this.z22_1), this.a23_1.e1()));
            } else {
              this.y22_1.l1x().c18(this.a23_1);
            }

            this.m8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.a23_1.e1(), fromInt(this.z22_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.z22_1 + ' bytes but only ' + this.a23_1.e1().toString() + ' available');
            }

            return this.a23_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j23_1 = _this__u8e3s4;
    this.k23_1 = count;
  }
  protoOf($peekCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (this.j23_1.o1x())
              return null;
            this.m8_1 = 1;
            suspendResult = this.j23_1.r1x(this.k23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.j23_1.l1x().d18(), this.k23_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t23_1 = _this__u8e3s4;
    this.u23_1 = out;
    this.v23_1 = limit;
    this.w23_1 = lenientLineEnding;
    this.x23_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 27;
            this.b24_1 = this.t23_1.l1x();
            if (this.b24_1.z16()) {
              this.m8_1 = 1;
              suspendResult = this.t23_1.s1x(VOID, this);
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
            if (this.t23_1.o1x())
              return new Long(-1, -1);
            this.a24_1 = {_v: new Long(0, 0)};
            this.y23_1 = {_v: null};
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.n8_1 = 24;
            this.m8_1 = 5;
            continue $sm;
          case 5:
            if (!(compare(this.a24_1._v, this.v23_1) < 0 && !this.t23_1.o1x())) {
              this.m8_1 = 15;
              continue $sm;
            }

            this.e24_1 = subtract(this.v23_1, this.a24_1._v);
            this.f24_1 = indexOf(this.b24_1, 10, VOID, this.e24_1);
            var crIndex = internalReadLineTo$scanForSoleCr(this.b24_1, this.w23_1, this.f24_1, this.e24_1);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$appendOrBuffer(this.y23_1, this.u23_1, this.b24_1, this.a24_1, crIndex);
              discard_0(this.b24_1, new Long(1, 0));
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              this.m8_1 = 6;
              continue $sm;
            }

          case 6:
            if (equalsLong(this.f24_1, new Long(0, 0))) {
              discard_0(this.b24_1, new Long(1, 0));
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 7:
            if (compare(this.f24_1, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.b24_1.y16();
              var this_0 = this.f24_1;
              if (tmp_1.u17(subtract(this_0, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$appendOrBuffer(this.y23_1, this.u23_1, this.b24_1, this.a24_1, subtract(this.f24_1, isCrlf));
              discard_0(this.b24_1, add(numberToLong(1), isCrlf));
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 8:
            var tmp0 = this.e24_1;
            var b = get_remaining(this.b24_1);
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            var tmp_2 = this.b24_1.y16();
            if (tmp_2.u17(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$appendOrBuffer(this.y23_1, this.u23_1, this.b24_1, this.a24_1, subtract(count, fromInt(1)));
              this.m8_1 = 9;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.b24_1, this.t23_1, this.w23_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.y23_1, this.b24_1, this.a24_1, count);
              this.m8_1 = 11;
              continue $sm;
            }

          case 9:
            if (suspendResult) {
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.y23_1, this.b24_1, this.a24_1, new Long(1, 0));
              this.m8_1 = 10;
              continue $sm;
            }

          case 10:
            this.m8_1 = 11;
            continue $sm;
          case 11:
            if (compare(this.a24_1._v, this.v23_1) < 0 && equalsLong(get_remaining(this.b24_1), new Long(0, 0))) {
              this.m8_1 = 12;
              suspendResult = this.t23_1.s1x(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.d24_1 = false;
              this.m8_1 = 13;
              continue $sm;
            }

          case 12:
            this.d24_1 = !suspendResult;
            this.m8_1 = 13;
            continue $sm;
          case 13:
            if (this.d24_1) {
              this.m8_1 = 15;
              continue $sm;
            } else {
              this.m8_1 = 14;
              continue $sm;
            }

          case 14:
            this.m8_1 = 5;
            continue $sm;
          case 15:
            if (equalsLong(this.a24_1._v, new Long(0, 0)) && this.t23_1.o1x()) {
              this.z23_1 = new Long(-1, -1);
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              this.m8_1 = 16;
              continue $sm;
            }

          case 16:
            if (!(compare(this.a24_1._v, this.v23_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.a24_1._v.toString() + ' > ' + this.v23_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.a24_1._v, this.v23_1)) {
              if (equalsLong(this.v23_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.b24_1), new Long(0, 0))) {
                this.m8_1 = 18;
                suspendResult = this.t23_1.s1x(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.c24_1 = false;
                this.m8_1 = 19;
                continue $sm;
              }
            } else {
              this.m8_1 = 17;
              continue $sm;
            }

          case 17:
            if (this.x23_1) {
              throwEndOfStreamException(this.a24_1._v);
            }

            this.z23_1 = this.a24_1._v;
            this.n8_1 = 27;
            this.m8_1 = 25;
            var tmp_3 = this;
            continue $sm;
          case 18:
            this.c24_1 = !suspendResult;
            this.m8_1 = 19;
            continue $sm;
          case 19:
            if (this.c24_1) {
              throwEndOfStreamException(this.a24_1._v);
            } else {
              this.m8_1 = 20;
              continue $sm;
            }

            break;
          case 20:
            var tmp0_subject = this.b24_1.y16().u17(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.b24_1, new Long(1, 0));
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              if (tmp0_subject === 13) {
                this.m8_1 = 21;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.b24_1, this.t23_1, this.w23_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 23;
                continue $sm;
              }
            }

          case 21:
            if (suspendResult) {
              this.z23_1 = this.a24_1._v;
              this.n8_1 = 27;
              this.m8_1 = 25;
              continue $sm;
            } else {
              this.m8_1 = 22;
              continue $sm;
            }

          case 22:
            this.m8_1 = 23;
            continue $sm;
          case 23:
            throwTooLongLineException(this.v23_1);
            break;
          case 24:
            this.n8_1 = 27;
            var t = this.p8_1;
            if (!(this.y23_1._v == null)) {
              this.u23_1.b1(readString_0(this.y23_1._v));
            }

            throw t;
          case 25:
            var tmp_4 = this.z23_1;
            this.n8_1 = 27;
            if (!(this.y23_1._v == null)) {
              this.u23_1.b1(readString_0(this.y23_1._v));
            }

            return tmp_4;
          case 26:
            this.n8_1 = 27;
            if (!(this.y23_1._v == null)) {
              this.u23_1.b1(readString_0(this.y23_1._v));
            }

            return Unit_instance;
          case 27:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 27) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o24_1 = _this__u8e3s4;
    this.p24_1 = $this_internalReadLineTo;
    this.q24_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            if (compare(get_remaining(this.o24_1), new Long(2, 0)) >= 0) {
              this.s24_1 = true;
              this.m8_1 = 2;
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = this.p24_1.r1x(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s24_1 = suspendResult;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (this.s24_1) {
              this.r24_1 = this.o24_1.y16().u17(new Long(1, 0)) === 10;
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.r24_1 = false;
              this.m8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.r24_1) {
              discard_0(this.o24_1, new Long(2, 0));
              return true;
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.q24_1) {
              discard_0(this.o24_1, new Long(1, 0));
              return true;
            }

            return false;
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
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b25_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.b25_1);
            if (this.b25_1.k1x() || get_size(this.b25_1.m1x()) >= 1048576) {
              this.m8_1 = 1;
              suspendResult = this.b25_1.j1x(this);
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
  function ByteWriteChannel$flushAndClose$ref(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref_0(p0);
    return constructCallableReference(function ($completion) {
      return i.g25($completion);
    }, 0, 1, 14, 'flushAndClose', [p0]);
  }
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.m1z_1 = channel;
    this.n1z_1 = job;
  }
  protoOf(WriterJob).h1g = function () {
    return this.n1z_1;
  };
  function writer(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.m1b(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function WriterScope(channel, coroutineContext) {
    this.h25_1 = channel;
    this.i25_1 = coroutineContext;
  }
  protoOf(WriterScope).k1a = function () {
    return this.i25_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.h1g().m1b(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.m1x().i18(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
    } else {
      _this__u8e3s4.u1x(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function writer_0(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer(_this__u8e3s4, coroutineContext, new ByteChannel(autoFlush), block);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.m1x().s18(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.t25_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).s8 = function () {
    return this.t25_1;
  };
  protoOf(NO_CALLBACK$1).t8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).x8 = function (result) {
    return this.t8(result);
  };
  function writer$slambda($block, $channel, resultContinuation) {
    this.c26_1 = $block;
    this.d26_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).l26 = function ($this$launch, $completion) {
    var tmp = this.m26($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(writer$slambda).i9 = function (p1, $completion) {
    return this.l26((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 14;
            this.h26_1 = Job(get_job(this.e26_1.k1a()));
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 4;
            this.n8_1 = 3;
            this.m8_1 = 2;
            suspendResult = this.c26_1(new WriterScope(this.d26_1, this.e26_1.k1a().hh(this.h26_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h26_1.c1h();
            var tmp_0;
            if (get_job(this.e26_1.k1a()).g1b()) {
              this.d26_1.u1x(get_job(this.e26_1.k1a()).j1b());
              tmp_0 = Unit_instance;
            }

            this.n8_1 = 14;
            this.m8_1 = 9;
            continue $sm;
          case 3:
            this.n8_1 = 4;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.p8_1;
              cancel(this.h26_1, 'Exception thrown while writing to channel', cause);
              this.d26_1.u1x(cause);
              this.n8_1 = 14;
              this.m8_1 = 9;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 4:
            this.n8_1 = 14;
            this.i26_1 = this.p8_1;
            this.m8_1 = 5;
            suspendResult = this.h26_1.q1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.e26_1;
            this.n8_1 = 7;
            this.k26_1 = Companion_instance;
            this.m8_1 = 6;
            suspendResult = this.d26_1.t1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.k26_1;
            tmp_2.j26_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n8_1 = 14;
            this.m8_1 = 8;
            continue $sm;
          case 7:
            this.n8_1 = 14;
            var tmp_3 = this.p8_1;
            if (tmp_3 instanceof Error) {
              var e = this.p8_1;
              var tmp_4 = this;
              tmp_4.j26_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m8_1 = 8;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 8:
            this.n8_1 = 14;
            throw this.i26_1;
          case 9:
            this.n8_1 = 14;
            this.m8_1 = 10;
            suspendResult = this.h26_1.q1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.e26_1;
            this.n8_1 = 12;
            this.g26_1 = Companion_instance;
            this.m8_1 = 11;
            suspendResult = this.d26_1.t1x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.g26_1;
            tmp_5.f26_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.n8_1 = 14;
            this.m8_1 = 13;
            continue $sm;
          case 12:
            this.n8_1 = 14;
            var tmp_6 = this.p8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.p8_1;
              var tmp_7 = this;
              tmp_7.f26_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.m8_1 = 13;
              continue $sm;
            } else {
              throw this.p8_1;
            }

          case 13:
            this.n8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.p8_1;
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
  protoOf(writer$slambda).m26 = function ($this$launch, completion) {
    var i = new writer$slambda(this.c26_1, this.d26_1, completion);
    i.e26_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.l26($this$launch, $completion);
    }, 1);
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.n1x()) {
        $channel.u1x(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    KFunctionImpl.call(this, 1, 1, 14);
    this.f25_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref_0).g25 = function ($completion) {
    return this.f25_1.t1x($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref_0).h9 = function ($completion) {
    return this.g25($completion);
  };
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r25_1 = _this__u8e3s4;
    this.s25_1 = source;
  }
  protoOf($writePacketCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.s25_1.z16()) {
              this.m8_1 = 3;
              continue $sm;
            }

            this.r25_1.m1x().m18(this.s25_1, get_remaining(this.s25_1));
            this.m8_1 = 2;
            suspendResult = flushIfNeeded(this.r25_1, this);
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
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function access$_get_origin__hdh1qz($this) {
    return $this.p1x_1;
  }
  function CloseToken(origin) {
    this.p1x_1 = origin;
  }
  protoOf(CloseToken).q1x = function () {
    return !(this.p1x_1 == null);
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.o26_1.r18($this.n26_1.l1x());
    $this.p26_1 = add($this.p26_1, appended);
  }
  function updateConsumed($this) {
    $this.q26_1 = add($this.q26_1, subtract($this.p26_1, $this.o26_1.e1()));
    $this.p26_1 = $this.o26_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z26_1 = _this__u8e3s4;
    this.a27_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (compare(this.z26_1.l1x().e1(), fromInt(this.a27_1)) >= 0) {
              return true;
            }

            this.m8_1 = 1;
            suspendResult = this.z26_1.n26_1.r1x(this.a27_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.z26_1);
              return true;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.n26_1 = delegate;
    this.o26_1 = new Buffer();
    this.p26_1 = new Long(0, 0);
    this.q26_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).b27 = function () {
    updateConsumed(this);
    return this.q26_1;
  };
  protoOf(CountedByteReadChannel).z1v = function () {
    return this.n26_1.z1v();
  };
  protoOf(CountedByteReadChannel).o1x = function () {
    return this.o26_1.z16() && this.n26_1.o1x();
  };
  protoOf(CountedByteReadChannel).l1x = function () {
    transferFromDelegate(this);
    return this.o26_1;
  };
  protoOf(CountedByteReadChannel).r1x = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(CountedByteReadChannel).u1x = function (cause) {
    this.n26_1.u1x(cause);
    this.o26_1.c4();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_1(_this__u8e3s4);
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
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    static_init();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    static_init();
    return LineEnding_Lenient_instance;
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
    if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().c27_1))) {
      tmp = 'CR';
    } else if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().d27_1))) {
      tmp = 'LF';
    } else if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().e27_1))) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().g27_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.h27_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.c1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.c27_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.d27_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.e27_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.f27_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.g27_1 = listOf([new LineEndingMode(this.c27_1), new LineEndingMode(this.d27_1), new LineEndingMode(this.e27_1)]);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.h27_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.h27_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.h27_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.h27_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.h27_1, other);
  };
  function SourceByteReadChannel(source) {
    this.i27_1 = source;
    this.j27_1 = null;
  }
  protoOf(SourceByteReadChannel).z1v = function () {
    var tmp0_safe_receiver = this.j27_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).l1h();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SourceByteReadChannel).o1x = function () {
    return this.i27_1.z16();
  };
  protoOf(SourceByteReadChannel).l1x = function () {
    var tmp0_safe_receiver = this.z1v();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.i27_1.y16();
  };
  protoOf(SourceByteReadChannel).r1x = function (min, $completion) {
    var tmp0_safe_receiver = this.z1v();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.i27_1.b17(fromInt(min));
  };
  protoOf(SourceByteReadChannel).u1x = function (cause) {
    if (!(this.j27_1 == null))
      return Unit_instance;
    this.i27_1.c4();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.j27_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.y16().e1();
    var tmp$ret$0 = compare(tmp0, b) <= 0 ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
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
      return Unit_instance;
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
    return !_this__u8e3s4.z16();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.e1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.i18(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.y16();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.y16().e1());
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.i18(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.y16().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.z16() && block(_this__u8e3s4.y16())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.b17(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.y16().w17(countToDiscard);
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
    var result = _this__u8e3s4.x17(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().k27_1 : charset;
    if (charset.equals(Charsets_getInstance().k27_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.n27(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().k27_1 : charset;
    if (charset === Charsets_getInstance().k27_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.n27(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).r27 = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).z27 = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).v1d = function () {
    return Unit_instance;
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).a28 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().k27_1;
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
      return Charsets_getInstance().l27_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Charset(_name) {
    this.m27_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.m27_1 === other.m27_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.m27_1);
  };
  protoOf(Charset).toString = function () {
    return this.m27_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.m27_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.k27_1 = new CharsetImpl('UTF-8');
    this.l27_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.c28_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_4.a28(name);
  }
  function CharsetEncoder(_charset) {
    this.d28_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    input.b17(fromInt(max));
    var tmp0 = input.y16().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.e28(array);
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
    dst.b1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().l27_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().k27_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.l18(result);
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
  protoOf(CharsetImpl).n27 = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).b28 = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.c28_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.d28_1;
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
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.h28_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.h28_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.h28_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.h28_1.equals(other.h28_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.j28_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.j28_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.j28_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.j28_1.equals(other.j28_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
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
    this.k28_1 = $this_toKtor;
  }
  protoOf(toKtor$1).e28 = function (buffer) {
    return this.k28_1.decode(buffer);
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
    this.l28_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().j2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).e28 = function (buffer) {
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
          if (!!this.l28_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.s18(toByte(point >> 8));
        }
        builder.s18(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
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
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().k27_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().k27_1)) {
      if (max === 2147483647)
        return readString_1(_this__u8e3s4);
      _this__u8e3s4.b17(fromInt(max));
      var tmp0 = _this__u8e3s4.y16().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.b28(), _this__u8e3s4, max);
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().z1k_1;
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
        dst.s18(toByte(character));
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
  function DefaultPool(capacity) {
    this.s27_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.s27_1;
    tmp.t27_1 = Array(size);
    this.u27_1 = 0;
  }
  protoOf(DefaultPool).v27 = function (instance) {
  };
  protoOf(DefaultPool).w27 = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).x27 = function (instance) {
  };
  protoOf(DefaultPool).y27 = function () {
    if (this.u27_1 === 0)
      return this.r27();
    this.u27_1 = this.u27_1 - 1 | 0;
    var idx = this.u27_1;
    var tmp = this.t27_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.t27_1[idx] = null;
    return this.w27(instance);
  };
  protoOf(DefaultPool).z27 = function (instance) {
    this.x27(instance);
    if (this.u27_1 === this.s27_1) {
      this.v27(instance);
    } else {
      var _unary__edvuaz = this.u27_1;
      this.u27_1 = _unary__edvuaz + 1 | 0;
      this.t27_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).v1d = function () {
    var inductionVariable = 0;
    var last = this.u27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.t27_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.t27_1[i] = null;
        this.v27(instance);
      }
       while (inductionVariable < last);
    this.u27_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).k1v = resume;
  protoOf(Read).l1v = resume_0;
  protoOf(Write).k1v = resume;
  protoOf(Write).l1v = resume_0;
  protoOf(ByteChannel).s1x = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).s1x = awaitContent$default;
  protoOf(CountedByteReadChannel).s1x = awaitContent$default;
  protoOf(SourceByteReadChannel).s1x = awaitContent$default;
  protoOf(DefaultPool).c4 = close;
  protoOf(NoPoolImpl).c4 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.b = Charsets_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = copyTo;
  _.$_$.f = copyTo_0;
  _.$_$.g = readAvailable;
  _.$_$.h = readBuffer;
  _.$_$.i = readLineStrictTo;
  _.$_$.j = readPacket;
  _.$_$.k = readUntil;
  _.$_$.l = skipIfFound;
  _.$_$.m = toByteArray;
  _.$_$.n = writeFully;
  _.$_$.o = writePacket;
  _.$_$.p = MalformedInputException;
  _.$_$.q = decode;
  _.$_$.r = encode;
  _.$_$.s = forName;
  _.$_$.t = get_name;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket;
  _.$_$.w = build;
  _.$_$.x = canRead;
  _.$_$.y = readText_0;
  _.$_$.z = get_remaining;
  _.$_$.a1 = get_size;
  _.$_$.b1 = takeWhile;
  _.$_$.c1 = toByteArray_0;
  _.$_$.d1 = writeFully_0;
  _.$_$.e1 = writeText;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = DefaultPool;
  _.$_$.h1 = NoPoolImpl;
  _.$_$.i1 = ByteChannel;
  _.$_$.j1 = ByteReadChannel;
  _.$_$.k1 = ByteReadChannel_1;
  _.$_$.l1 = ClosedByteChannelException;
  _.$_$.m1 = WriterScope;
  _.$_$.n1 = attachJob;
  _.$_$.o1 = attachWriterJob;
  _.$_$.p1 = cancel_0;
  _.$_$.q1 = close_0;
  _.$_$.r1 = counted;
  _.$_$.s1 = invokeOnCompletion;
  _.$_$.t1 = ioDispatcher;
  _.$_$.u1 = readText;
  _.$_$.v1 = rethrowCloseCauseIfNeeded_0;
  _.$_$.w1 = writer_0;
  _.$_$.x1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
