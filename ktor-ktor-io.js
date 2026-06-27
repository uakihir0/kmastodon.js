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
  var Companion_instance = kotlin_kotlin.$_$.i2;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var toString = kotlin_kotlin.$_$.hg;
  var hashCode = kotlin_kotlin.$_$.ka;
  var equals = kotlin_kotlin.$_$.fa;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var createFailure = kotlin_kotlin.$_$.wf;
  var Result = kotlin_kotlin.$_$.df;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var toString_0 = kotlin_kotlin.$_$.ce;
  var newThrowable = kotlin_kotlin.$_$.gb;
  var stackTraceToString = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.ab;
  var FunctionAdapter = kotlin_kotlin.$_$.s9;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var fromInt = kotlin_kotlin.$_$.g9;
  var compare = kotlin_kotlin.$_$.a9;
  var numberToLong = kotlin_kotlin.$_$.n9;
  var add = kotlin_kotlin.$_$.x8;
  var intercepted = kotlin_kotlin.$_$.d8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eg;
  var returnIfSuspended = kotlin_kotlin.$_$.s2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var Long = kotlin_kotlin.$_$.af;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.l3;
  var CancellationException = kotlin_kotlin.$_$.z7;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var convertToInt = kotlin_kotlin.$_$.c9;
  var toString_1 = kotlin_kotlin.$_$.nb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e4;
  var IllegalStateException = kotlin_kotlin.$_$.ze;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.f4;
  var captureStack = kotlin_kotlin.$_$.v9;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.gd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var get_ONE = kotlin_kotlin.$_$.w8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.q9;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var Continuation = kotlin_kotlin.$_$.m8;
  var KFunctionImpl = kotlin_kotlin.$_$.yb;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.oa;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var initMetadataForLambda = kotlin_kotlin.$_$.qa;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.ve;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v2;
  var listOf = kotlin_kotlin.$_$.w6;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o3;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.sc;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var AutoCloseable = kotlin_kotlin.$_$.oe;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d;
  var replace_0 = kotlin_kotlin.$_$.hd;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ba;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.wa;
  var trim = kotlin_kotlin.$_$.je;
  var toByte = kotlin_kotlin.$_$.lb;
  var decodeToString_0 = kotlin_kotlin.$_$.qc;
  var setOf = kotlin_kotlin.$_$.i7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var charSequenceGet = kotlin_kotlin.$_$.z9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.n1u().s8(Companion_getInstance().k1u_1);
  }
  function resume_0(throwable) {
    var tmp = this.n1u();
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
    return tmp.s8(tmp1_elvis_lhs == null ? Companion_getInstance().k1u_1 : tmp1_elvis_lhs.en_1);
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
    return $super === VOID ? this.u1w(min, $completion) : $super.u1w.call(this, min, $completion);
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
  initMetadataForCoroutine($readRemainingCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref_0, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
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
    this.d1d();
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
    this.j1u_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.k1u_1 = _Result___init__impl__xyqfz8(Unit_instance);
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
    this.l1u_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.l1u_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.l1u_1 == null ? 0 : hashCode(this.l1u_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.l1u_1, other.l1u_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.r1u_1 = continuation;
    this.s1u_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.r1u_1), 16));
      stackTraceToString(this_0);
      tmp.s1u_1 = this_0;
    }
  }
  protoOf(Read).n1u = function () {
    return this.r1u_1;
  };
  protoOf(Read).m1u = function () {
    return this.s1u_1;
  };
  protoOf(Read).o1u = function () {
    return 'read';
  };
  function Write(continuation) {
    this.t1u_1 = continuation;
    this.u1u_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.t1u_1), 16));
      stackTraceToString(this_0);
      tmp.u1u_1 = this_0;
    }
  }
  protoOf(Write).n1u = function () {
    return this.t1u_1;
  };
  protoOf(Write).m1u = function () {
    return this.u1u_1;
  };
  protoOf(Write).o1u = function () {
    return 'write';
  };
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.y1u_1;
    $this.w1u_1.k17($this.a1v_1);
    $this.x1u_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.z1u_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.z1u_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.p1u();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().j1u_1;
    var continuation = $this.z1u_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.q1u(cause);
    }
    var tmp0_safe_receiver = $this.d1v_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(cause);
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.e1v_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).d1d = function () {
    return this.e1v_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).g3 = function () {
    return this.e1v_1;
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
  function ByteChannel$invokeOnClose$lambda() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_0() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
    return function () {
      this$0.d1v_1.atomicfu$compareAndSet($handler, null);
      return Unit_instance;
    };
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1v_1 = _this__u8e3s4;
    this.o1v_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.n1v_1);
            if (compare(this.n1v_1.a1v_1.e1(), fromInt(this.o1v_1)) >= 0)
              return true;
            this.p1v_1 = this.n1v_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(add(numberToLong(this.n1v_1.x1u_1), this.n1v_1.a1v_1.e1()), fromInt(this.o1v_1)) < 0 && this.n1v_1.c1v_1.kotlinx$atomicfu$value == null)) {
              this.h8_1 = 3;
              continue $sm;
            }

            this.h8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.g1e();
            var tmp0 = this.p1v_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.z1u_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.z1u_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.p1u();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.q1u(new ConcurrentIOException(tmp2.o1u(), previous.m1u()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.p1u();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.q1u(previous.l1u_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(compare(add(numberToLong(this.n1v_1.x1u_1), this.n1v_1.a1v_1.e1()), fromInt(this.o1v_1)) < 0 && this.n1v_1.c1v_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.z1u_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.z1u_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.p1u();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.o1e(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8_1 = 1;
            continue $sm;
          case 3:
            if (compare(this.n1v_1.a1v_1.e1(), new Long(1048576, 0)) < 0) {
              moveFlushToReadBuffer(this.n1v_1);
            }

            return compare(this.n1v_1.a1v_1.e1(), fromInt(this.o1v_1)) >= 0;
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y1v_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            rethrowCloseCauseIfNeeded_0(this.y1v_1);
            this.y1v_1.a1w();
            if (this.y1v_1.b1w())
              return Unit_instance;
            this.z1v_1 = this.y1v_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.y1v_1.b1w() && this.y1v_1.c1v_1.kotlinx$atomicfu$value == null)) {
              this.h8_1 = 3;
              continue $sm;
            }

            this.h8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.g1e();
            var tmp0 = this.z1v_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.z1u_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.z1u_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.p1u();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.q1u(new ConcurrentIOException(tmp2.o1u(), previous.m1u()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.p1u();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.q1u(previous.l1u_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(!this.y1v_1.b1w() && this.y1v_1.c1v_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.z1u_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.z1u_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.p1u();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.o1e(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1w_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            var this_0 = this.k1w_1;
            this.i8_1 = 2;
            this.m1w_1 = Companion_instance;
            this.h8_1 = 1;
            suspendResult = this_0.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.m1w_1;
            tmp_0.l1w_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.i8_1 = 4;
            this.h8_1 = 3;
            continue $sm;
          case 2:
            this.i8_1 = 4;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Error) {
              var e = this.k8_1;
              var tmp_2 = this;
              tmp_2.l1w_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.h8_1 = 3;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 3:
            this.i8_1 = 4;
            if (!this.k1w_1.c1v_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.k1w_1, null);
            return Unit_instance;
          case 4:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 4) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.v1u_1 = autoFlush;
    this.w1u_1 = new Buffer();
    this.x1u_1 = 0;
    this.y1u_1 = new Object();
    this.z1u_1 = atomic$ref$1(Empty_instance);
    this.a1v_1 = new Buffer();
    this.b1v_1 = new Buffer();
    this.c1v_1 = atomic$ref$1(null);
    this.d1v_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).o1w = function () {
    return this.v1u_1;
  };
  protoOf(ByteChannel).b1w = function () {
    return this.x1u_1 < 1048576;
  };
  protoOf(ByteChannel).p1w = function () {
    var tmp0_safe_receiver = this.c1v_1.kotlinx$atomicfu$value;
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
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).t1g();
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
    if (this.a1v_1.h16()) {
      moveFlushToReadBuffer(this);
    }
    return this.a1v_1;
  };
  protoOf(ByteChannel).q1w = function () {
    if (this.r1w()) {
      var tmp0_safe_receiver = this.c1v_1.kotlinx$atomicfu$value;
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
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).t1g();
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
    return this.b1v_1;
  };
  protoOf(ByteChannel).s1w = function () {
    var tmp0_safe_receiver = this.c1v_1.kotlinx$atomicfu$value;
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
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).t1g();
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
  protoOf(ByteChannel).r1w = function () {
    return !(this.c1v_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).t1w = function () {
    return !(this.s1w() == null) || (this.r1w() && this.x1u_1 === 0 && this.a1v_1.h16());
  };
  protoOf(ByteChannel).u1w = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(ByteChannel).n1w = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(ByteChannel).a1w = function () {
    if (this.b1v_1.h16())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.y1u_1;
    var count = convertToInt(this.b1v_1.e1());
    this.w1u_1.z17(this.b1v_1);
    this.x1u_1 = this.x1u_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.z1u_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.z1u_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.p1u();
    }
  };
  protoOf(ByteChannel).w3 = function () {
    this.a1w();
    if (!this.c1v_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).w1w = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(ByteChannel).x1w = function (cause) {
    if (!(this.c1v_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.c1v_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).t1g();
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
  protoOf(ByteChannel).y1w = function (handler) {
    var existingCause = this.c1v_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).t1g();
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
    if (!this.d1v_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    var cause = this.c1v_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.d1v_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).t1g();
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
    this_0.q17(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.a1x_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.a1x_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.a1x_1.d1(i) === $this.a1x_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.a1x_1.d1(i) === $this.a1x_1.d1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function checkBounds($this, extra) {
    if (compare(add($this.g1x_1, extra), $this.c1x_1) > 0) {
      throw IOException_init_$Create$('Limit of ' + $this.c1x_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.a1x_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1y_1 = _this__u8e3s4;
    this.m1y_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 9;
            this.l1y_1.g1x_1 = new Long(0, 0);
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.l1y_1.d1x_1.h16()) {
              this.n1y_1 = true;
              this.h8_1 = 3;
              continue $sm;
            } else {
              this.h8_1 = 2;
              suspendResult = this.l1y_1.z1w_1.v1w(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.n1y_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            if (!this.n1y_1) {
              this.h8_1 = 7;
              continue $sm;
            }

            this.h8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.l1y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h8_1 = 5;
            suspendResult = checkFullMatch(this.l1y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.l1y_1.g1x_1;
            } else {
              this.h8_1 = 6;
              continue $sm;
            }

          case 6:
            this.h8_1 = 1;
            continue $sm;
          case 7:
            if (!this.m1y_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.l1y_1, this.l1y_1.a1x_1) + '" but encountered end of input');
            }

            this.l1y_1.g1x_1 = add(this.l1y_1.g1x_1, this.l1y_1.f1x_1.k17(this.l1y_1.b1x_1.q1w()));
            this.h8_1 = 8;
            suspendResult = this.l1y_1.b1x_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.l1y_1.g1x_1;
          case 9:
            throw this.k8_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1x_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q1x_1.d1x_1.h16()) {
              this.r1x_1 = true;
              this.h8_1 = 3;
              continue $sm;
            } else {
              this.h8_1 = 2;
              suspendResult = this.q1x_1.z1w_1.v1w(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.r1x_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            if (!this.r1x_1) {
              this.h8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.q1x_1.d1x_1, this.q1x_1.a1x_1.d1(0));
            if (equalsLong(nextMatch, new Long(-1, -1))) {
              var tmp_0 = this.q1x_1.d1x_1;
              checkBounds(this.q1x_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.q1x_1.g1x_1 = add(this.q1x_1.g1x_1, this.q1x_1.d1x_1.k17(this.q1x_1.b1x_1.q1w()));
              this.h8_1 = 5;
              suspendResult = flushIfNeeded(this.q1x_1.b1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.q1x_1, nextMatch);
              var tmp_1 = this.q1x_1;
              var tmp_2 = this.q1x_1.g1x_1;
              var tmp_3 = this.q1x_1.b1x_1.q1w();
              tmp_1.g1x_1 = add(tmp_2, this.q1x_1.d1x_1.h17(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.h8_1 = 4;
              suspendResult = flushIfNeeded(this.q1x_1.b1x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.h8_1 = 6;
            continue $sm;
          case 6:
            this.h8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.k8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1y_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.a1y_1.d1x_1.h16()) {
              this.c1y_1 = true;
              this.h8_1 = 3;
              continue $sm;
            } else {
              this.h8_1 = 2;
              suspendResult = this.a1y_1.z1w_1.v1w(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.c1y_1 = suspendResult;
            this.h8_1 = 3;
            continue $sm;
          case 3:
            if (!this.c1y_1) {
              this.h8_1 = 7;
              continue $sm;
            }

            this.b1y_1 = this.a1y_1.d1x_1.k16();
            if (this.a1y_1.h1x_1 > 0 && !(this.b1y_1 === this.a1y_1.a1x_1.d1(this.a1y_1.h1x_1))) {
              var oldMatchIndex = this.a1y_1.h1x_1;
              while (this.a1y_1.h1x_1 > 0 && !(this.b1y_1 === this.a1y_1.a1x_1.d1(this.a1y_1.h1x_1))) {
                this.a1y_1.h1x_1 = this.a1y_1.e1x_1[this.a1y_1.h1x_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.a1y_1.h1x_1 | 0);
              checkBounds(this.a1y_1, retained);
              var tmp_0 = this.a1y_1;
              var tmp_1 = this.a1y_1.g1x_1;
              var tmp_2 = this.a1y_1.b1x_1.q1w();
              tmp_0.g1x_1 = add(tmp_1, this.a1y_1.f1x_1.h17(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.a1y_1.h1x_1 === 0 && !(this.b1y_1 === this.a1y_1.a1x_1.d1(this.a1y_1.h1x_1))) {
                this.h8_1 = 6;
                suspendResult = writeByte(this.a1y_1.b1x_1, this.b1y_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h8_1 = 4;
                continue $sm;
              }
            } else {
              this.h8_1 = 5;
              continue $sm;
            }

          case 4:
            this.h8_1 = 5;
            continue $sm;
          case 5:
            this.a1y_1.h1x_1 = this.a1y_1.h1x_1 + 1 | 0;
            if (this.a1y_1.h1x_1 === this.a1y_1.a1x_1.e1()) {
              return true;
            }

            this.a1y_1.f1x_1.a18(this.b1y_1);
            this.h8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.a1y_1.g1x_1;
            this.a1y_1.g1x_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.k8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    this.z1w_1 = channel;
    this.a1x_1 = matchString;
    this.b1x_1 = writeChannel;
    this.c1x_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.a1x_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.d1x_1 = this.z1w_1.p1w();
    this.e1x_1 = buildPartialMatchTable(this);
    this.f1x_1 = new Buffer();
    this.g1x_1 = new Long(0, 0);
    this.h1x_1 = 0;
  }
  protoOf(ByteChannelScanner).o1y = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  function attachWriterJob(_this__u8e3s4, writerJob) {
    var tmp = writerJob.p1y_1;
    var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1w(attachWriterJob$lambda(_this__u8e3s4));
    }
  }
  function attachWriterJob$lambda($this_attachWriterJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        $this_attachWriterJob.x1w(cause);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.r1y_1 = null;
    this.s1y_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).s1w = function () {
    return this.r1y_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).t1w = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).p1w = function () {
    return this.s1y_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).u1w = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).x1w = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.t1y_1 = new ByteReadChannel$Companion$Empty$1();
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
    _this__u8e3s4.x1w(IOException_init_$Create$('Channel was cancelled'));
  }
  function readRemaining(_this__u8e3s4, $completion) {
    var tmp = new $readRemainingCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function rethrowCloseCauseIfNeeded(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.s1w();
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
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).o1y(ignoreMissing, $completion);
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
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.s1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.p1w().g16().e1());
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' characters');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' characters');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.s1w();
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
      $out.c1(string);
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
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function $readRemainingCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1z_1 = _this__u8e3s4;
  }
  protoOf($readRemainingCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.d1z_1 = BytePacketBuilder();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.c1z_1.t1w()) {
              this.h8_1 = 3;
              continue $sm;
            }

            this.d1z_1.z17(this.c1z_1.p1w());
            this.h8_1 = 2;
            suspendResult = this.c1z_1.v1w(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.c1z_1);
            return this.d1z_1.g16();
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m1z_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = readBuffer(this.m1z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v1z_1 = _this__u8e3s4;
    this.w1z_1 = channel;
    this.x1z_1 = limit;
  }
  protoOf($copyToCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 12;
            this.y1z_1 = this.x1z_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 8;
            this.i8_1 = 7;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.v1z_1.t1w() && compare(this.y1z_1, new Long(0, 0)) > 0)) {
              this.h8_1 = 6;
              continue $sm;
            }

            if (this.v1z_1.p1w().h16()) {
              this.h8_1 = 3;
              suspendResult = this.v1z_1.v1w(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 4;
              continue $sm;
            }

          case 3:
            this.h8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.y1z_1;
            var b = get_remaining(this.v1z_1.p1w());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            this.v1z_1.p1w().j17(this.w1z_1.q1w(), count);
            this.y1z_1 = subtract(this.y1z_1, count);
            this.h8_1 = 5;
            suspendResult = this.w1z_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.h8_1 = 2;
            continue $sm;
          case 6:
            this.i8_1 = 12;
            this.h8_1 = 10;
            continue $sm;
          case 7:
            this.i8_1 = 8;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              this.v1z_1.x1w(cause);
              close_0(this.w1z_1, cause);
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 8:
            this.i8_1 = 12;
            this.z1z_1 = this.k8_1;
            this.h8_1 = 9;
            suspendResult = this.w1z_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.z1z_1;
          case 10:
            this.i8_1 = 12;
            this.h8_1 = 11;
            suspendResult = this.w1z_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.x1z_1, this.y1z_1);
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i20_1 = _this__u8e3s4;
    this.j20_1 = max;
  }
  protoOf($discardCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.k20_1 = this.j20_1;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.k20_1, new Long(0, 0)) > 0 && !this.i20_1.t1w())) {
              this.h8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.i20_1) === 0) {
              this.h8_1 = 2;
              suspendResult = this.i20_1.v1w(VOID, this);
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
            var tmp0 = this.k20_1;
            var b = get_remaining(this.i20_1.p1w());
            var count = compare(tmp0, b) <= 0 ? tmp0 : b;
            discard_0(this.i20_1.p1w(), count);
            this.k20_1 = subtract(this.k20_1, count);
            this.h8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.j20_1, this.k20_1);
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
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t20_1 = _this__u8e3s4;
    this.u20_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 11;
            this.v20_1 = new Long(0, 0);
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 7;
            this.i8_1 = 6;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.t20_1.t1w()) {
              this.h8_1 = 5;
              continue $sm;
            }

            this.v20_1 = add(this.v20_1, this.t20_1.p1w().k17(this.u20_1.q1w()));
            this.h8_1 = 3;
            suspendResult = this.u20_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.h8_1 = 4;
            suspendResult = this.t20_1.v1w(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h8_1 = 2;
            continue $sm;
          case 5:
            this.i8_1 = 11;
            this.h8_1 = 9;
            continue $sm;
          case 6:
            this.i8_1 = 7;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.k8_1;
              this.t20_1.x1w(cause);
              close_0(this.u20_1, cause);
              throw cause;
            } else {
              throw this.k8_1;
            }

          case 7:
            this.i8_1 = 11;
            this.w20_1 = this.k8_1;
            this.h8_1 = 8;
            suspendResult = this.u20_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.w20_1;
          case 9:
            this.i8_1 = 11;
            this.h8_1 = 10;
            suspendResult = this.u20_1.n1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.v20_1;
          case 11:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 11) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f21_1 = _this__u8e3s4;
    this.g21_1 = buffer;
    this.h21_1 = offset;
    this.i21_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            if (this.f21_1.t1w())
              return -1;
            if (this.f21_1.p1w().h16()) {
              this.h8_1 = 1;
              suspendResult = this.f21_1.v1w(VOID, this);
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
            if (this.f21_1.t1w())
              return -1;
            return readAvailable_0(this.f21_1.p1w(), this.g21_1, this.h21_1, this.i21_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r21_1 = _this__u8e3s4;
    this.s21_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.h8_1 = 1;
            suspendResult = peek(this.r21_1, this.s21_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.s21_1)) {
              this.h8_1 = 3;
              suspendResult = discard(this.r21_1, fromInt(this.s21_1.e1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b22_1 = _this__u8e3s4;
    this.c22_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 6;
            this.d22_1 = new Buffer();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!(compare(this.d22_1.e1(), fromInt(this.c22_1)) < 0)) {
              this.h8_1 = 5;
              continue $sm;
            }

            if (this.b22_1.p1w().h16()) {
              this.h8_1 = 2;
              suspendResult = this.b22_1.v1w(VOID, this);
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
            if (this.b22_1.t1w()) {
              this.h8_1 = 5;
              continue $sm;
            } else {
              this.h8_1 = 4;
              continue $sm;
            }

          case 4:
            if (compare(get_remaining(this.b22_1.p1w()), subtract(numberToLong(this.c22_1), this.d22_1.e1())) > 0) {
              this.b22_1.p1w().j17(this.d22_1, subtract(numberToLong(this.c22_1), this.d22_1.e1()));
            } else {
              this.b22_1.p1w().k17(this.d22_1);
            }

            this.h8_1 = 1;
            continue $sm;
          case 5:
            if (compare(this.d22_1.e1(), fromInt(this.c22_1)) < 0) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.c22_1 + ' bytes but only ' + this.d22_1.e1().toString() + ' available');
            }

            return this.d22_1;
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
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m22_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.n22_1 = new Buffer();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.m22_1.t1w()) {
              this.h8_1 = 3;
              continue $sm;
            }

            this.n22_1.z17(this.m22_1.p1w());
            this.h8_1 = 2;
            suspendResult = this.m22_1.v1w(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8_1 = 1;
            continue $sm;
          case 3:
            var tmp0_safe_receiver = this.m22_1.s1w();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            return this.n22_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w22_1 = _this__u8e3s4;
    this.x22_1 = count;
  }
  protoOf($peekCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            if (this.w22_1.t1w())
              return null;
            this.h8_1 = 1;
            suspendResult = this.w22_1.u1w(this.x22_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.h8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.w22_1.p1w().l17(), this.x22_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g23_1 = _this__u8e3s4;
    this.h23_1 = out;
    this.i23_1 = limit;
    this.j23_1 = lenientLineEnding;
    this.k23_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 18;
            this.m23_1 = this.g23_1.p1w();
            if (this.m23_1.h16()) {
              this.h8_1 = 1;
              suspendResult = this.g23_1.v1w(VOID, this);
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
            if (this.g23_1.t1w())
              return new Long(-1, -1);
            this.l23_1 = {_v: new Long(0, 0)};
            this.h8_1 = 3;
            continue $sm;
          case 3:
            if (!(compare(this.l23_1._v, this.i23_1) < 0 && !this.g23_1.t1w())) {
              this.h8_1 = 10;
              continue $sm;
            }

            var limitLeft = subtract(this.i23_1, this.l23_1._v);
            var lfIndex = indexOf(this.m23_1, 10, VOID, limitLeft);
            var crIndex = internalReadLineTo$scanForSoleCr(this.m23_1, this.j23_1, lfIndex, limitLeft);
            if (compare(crIndex, new Long(0, 0)) >= 0) {
              internalReadLineTo$transferString(this.m23_1, this.h23_1, this.l23_1, crIndex);
              discard_0(this.m23_1, new Long(1, 0));
              return this.l23_1._v;
            }

            if (equalsLong(lfIndex, new Long(0, 0))) {
              discard_0(this.m23_1, new Long(1, 0));
              return this.l23_1._v;
            }

            if (compare(lfIndex, new Long(0, 0)) > 0) {
              var tmp_0;
              var tmp_1 = this.m23_1.g16();
              if (tmp_1.c17(subtract(lfIndex, fromInt(1))) === 13) {
                tmp_0 = new Long(1, 0);
              } else {
                tmp_0 = new Long(0, 0);
              }
              var isCrlf = tmp_0;
              internalReadLineTo$transferString(this.m23_1, this.h23_1, this.l23_1, subtract(lfIndex, isCrlf));
              discard_0(this.m23_1, add(numberToLong(1), isCrlf));
              return this.l23_1._v;
            }

            var b = get_remaining(this.m23_1);
            var count = compare(limitLeft, b) <= 0 ? limitLeft : b;
            var tmp_2 = this.m23_1.g16();
            if (tmp_2.c17(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$transferString(this.m23_1, this.h23_1, this.l23_1, subtract(count, fromInt(1)));
              this.h8_1 = 4;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.m23_1, this.g23_1, this.j23_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$transferString(this.m23_1, this.h23_1, this.l23_1, count);
              this.h8_1 = 6;
              continue $sm;
            }

          case 4:
            if (suspendResult) {
              return this.l23_1._v;
            } else {
              this.h8_1 = 5;
              continue $sm;
            }

          case 5:
            internalReadLineTo$transferString(this.m23_1, this.h23_1, this.l23_1, new Long(1, 0));
            this.h8_1 = 6;
            continue $sm;
          case 6:
            if (compare(this.l23_1._v, this.i23_1) < 0 && equalsLong(get_remaining(this.m23_1), new Long(0, 0))) {
              this.h8_1 = 7;
              suspendResult = this.g23_1.v1w(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o23_1 = false;
              this.h8_1 = 8;
              continue $sm;
            }

          case 7:
            this.o23_1 = !suspendResult;
            this.h8_1 = 8;
            continue $sm;
          case 8:
            if (this.o23_1) {
              this.h8_1 = 10;
              continue $sm;
            } else {
              this.h8_1 = 9;
              continue $sm;
            }

          case 9:
            this.h8_1 = 3;
            continue $sm;
          case 10:
            if (equalsLong(this.l23_1._v, new Long(0, 0)) && this.g23_1.t1w())
              return new Long(-1, -1);
            if (!(compare(this.l23_1._v, this.i23_1) <= 0)) {
              var message = 'Consumed bytes exceed the limit: ' + this.l23_1._v.toString() + ' > ' + this.i23_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (equalsLong(this.l23_1._v, this.i23_1)) {
              if (equalsLong(this.i23_1, new Long(-1, 2147483647)))
                throw new TooLongLineException('Max line length exceeded');
              if (equalsLong(get_remaining(this.m23_1), new Long(0, 0))) {
                this.h8_1 = 12;
                suspendResult = this.g23_1.v1w(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n23_1 = false;
                this.h8_1 = 13;
                continue $sm;
              }
            } else {
              this.h8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.k23_1) {
              throwEndOfStreamException(this.l23_1._v);
            }

            return this.l23_1._v;
          case 12:
            this.n23_1 = !suspendResult;
            this.h8_1 = 13;
            continue $sm;
          case 13:
            if (this.n23_1) {
              throwEndOfStreamException(this.l23_1._v);
            } else {
              this.h8_1 = 14;
              continue $sm;
            }

            break;
          case 14:
            var tmp0_subject = this.m23_1.g16().c17(new Long(0, 0));
            if (tmp0_subject === 10) {
              discard_0(this.m23_1, new Long(1, 0));
              return this.l23_1._v;
            } else {
              if (tmp0_subject === 13) {
                this.h8_1 = 15;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.m23_1, this.g23_1, this.j23_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h8_1 = 17;
                continue $sm;
              }
            }

          case 15:
            if (suspendResult) {
              return this.l23_1._v;
            } else {
              this.h8_1 = 16;
              continue $sm;
            }

          case 16:
            this.h8_1 = 17;
            continue $sm;
          case 17:
            throwTooLongLineException(this.i23_1);
            break;
          case 18:
            throw this.k8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i8_1 === 18) {
          throw e;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x23_1 = _this__u8e3s4;
    this.y23_1 = $this_internalReadLineTo;
    this.z23_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            if (compare(get_remaining(this.x23_1), new Long(2, 0)) >= 0) {
              this.b24_1 = true;
              this.h8_1 = 2;
              continue $sm;
            } else {
              this.h8_1 = 1;
              suspendResult = this.y23_1.u1w(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.b24_1 = suspendResult;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (this.b24_1) {
              this.a24_1 = this.x23_1.g16().c17(new Long(1, 0)) === 10;
              this.h8_1 = 3;
              continue $sm;
            } else {
              this.a24_1 = false;
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.a24_1) {
              discard_0(this.x23_1, new Long(2, 0));
              return true;
            } else {
              this.h8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.z23_1) {
              discard_0(this.x23_1, new Long(1, 0));
              return true;
            }

            return false;
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
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k24_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.k24_1);
            if (this.k24_1.o1w() || get_size(this.k24_1.q1w()) >= 1048576) {
              this.h8_1 = 1;
              suspendResult = this.k24_1.n1w(this);
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
  function ByteWriteChannel$flushAndClose$ref(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref_0(p0);
    return constructCallableReference(function ($completion) {
      return i.p24($completion);
    }, 0, 1, 13, 'flushAndClose', [p0]);
  }
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.p1y_1 = channel;
    this.q1y_1 = job;
  }
  protoOf(WriterJob).p1f = function () {
    return this.q1y_1;
  };
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer_0(_this__u8e3s4, coroutineContext, new ByteChannel(), block);
  }
  function WriterScope(channel, coroutineContext) {
    this.q24_1 = channel;
    this.r24_1 = coroutineContext;
  }
  protoOf(WriterScope).s19 = function () {
    return this.r24_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.p1f().u1a(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.q1w().q17(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
    } else {
      _this__u8e3s4.x1w(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function writer_0(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_getInstance() : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.u1a(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.q1w().a18(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.c25_1 = EmptyCoroutineContext_getInstance();
  }
  protoOf(NO_CALLBACK$1).n8 = function () {
    return this.c25_1;
  };
  protoOf(NO_CALLBACK$1).o8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).s8 = function (result) {
    return this.o8(result);
  };
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    KFunctionImpl.call(this, 1, 1, 13);
    this.o24_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref_0).p24 = function ($completion) {
    return this.o24_1.w1w($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref_0).c9 = function ($completion) {
    return this.p24($completion);
  };
  function writer$slambda($block, $channel, resultContinuation) {
    this.l25_1 = $block;
    this.m25_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).u25 = function ($this$launch, $completion) {
    var tmp = this.v25($this$launch, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(writer$slambda).d9 = function (p1, $completion) {
    return this.u25((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 14;
            this.q25_1 = Job(get_job(this.n25_1.s19()));
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 4;
            this.i8_1 = 3;
            this.h8_1 = 2;
            suspendResult = this.l25_1(new WriterScope(this.m25_1, this.n25_1.s19().zg(this.q25_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q25_1.k1g();
            var tmp_0;
            if (get_job(this.n25_1.s19()).o1a()) {
              this.m25_1.x1w(get_job(this.n25_1.s19()).r1a());
              tmp_0 = Unit_instance;
            }

            this.i8_1 = 14;
            this.h8_1 = 9;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            var tmp_1 = this.k8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.k8_1;
              cancel(this.q25_1, 'Exception thrown while writing to channel', cause);
              this.m25_1.x1w(cause);
              this.i8_1 = 14;
              this.h8_1 = 9;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 4:
            this.i8_1 = 14;
            this.r25_1 = this.k8_1;
            this.h8_1 = 5;
            suspendResult = this.q25_1.y1a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n25_1;
            this.i8_1 = 7;
            this.t25_1 = Companion_instance;
            this.h8_1 = 6;
            suspendResult = this.m25_1.w1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.t25_1;
            tmp_2.s25_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.i8_1 = 14;
            this.h8_1 = 8;
            continue $sm;
          case 7:
            this.i8_1 = 14;
            var tmp_3 = this.k8_1;
            if (tmp_3 instanceof Error) {
              var e = this.k8_1;
              var tmp_4 = this;
              tmp_4.s25_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.h8_1 = 8;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 8:
            this.i8_1 = 14;
            throw this.r25_1;
          case 9:
            this.i8_1 = 14;
            this.h8_1 = 10;
            suspendResult = this.q25_1.y1a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.n25_1;
            this.i8_1 = 12;
            this.p25_1 = Companion_instance;
            this.h8_1 = 11;
            suspendResult = this.m25_1.w1w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.p25_1;
            tmp_5.o25_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.i8_1 = 14;
            this.h8_1 = 13;
            continue $sm;
          case 12:
            this.i8_1 = 14;
            var tmp_6 = this.k8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.k8_1;
              var tmp_7 = this;
              tmp_7.o25_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.h8_1 = 13;
              continue $sm;
            } else {
              throw this.k8_1;
            }

          case 13:
            this.i8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.i8_1 === 14) {
          throw e_1;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(writer$slambda).v25 = function ($this$launch, completion) {
    var i = new writer$slambda(this.l25_1, this.m25_1, completion);
    i.n25_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.u25($this$launch, $completion);
    }, 1);
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.r1w()) {
        $channel.x1w(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a25_1 = _this__u8e3s4;
    this.b25_1 = source;
  }
  protoOf($writePacketCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 4;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.b25_1.h16()) {
              this.h8_1 = 3;
              continue $sm;
            }

            this.a25_1.q1w().u17(this.b25_1, get_remaining(this.b25_1));
            this.h8_1 = 2;
            suspendResult = flushIfNeeded(this.a25_1, this);
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
    return $this.w25_1;
  }
  function CloseToken(origin) {
    this.w25_1 = origin;
  }
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.y25_1.z17($this.x25_1.p1w());
    $this.z25_1 = add($this.z25_1, appended);
  }
  function updateConsumed($this) {
    $this.a26_1 = add($this.a26_1, subtract($this.z25_1, $this.y25_1.e1()));
    $this.z25_1 = $this.y25_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j26_1 = _this__u8e3s4;
    this.k26_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            if (compare(this.j26_1.p1w().e1(), fromInt(this.k26_1)) >= 0) {
              return true;
            }

            this.h8_1 = 1;
            suspendResult = this.j26_1.x25_1.u1w(this.k26_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.j26_1);
              return true;
            } else {
              this.h8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.x25_1 = delegate;
    this.y25_1 = new Buffer();
    this.z25_1 = new Long(0, 0);
    this.a26_1 = new Long(0, 0);
  }
  protoOf(CountedByteReadChannel).l26 = function () {
    updateConsumed(this);
    return this.a26_1;
  };
  protoOf(CountedByteReadChannel).s1w = function () {
    return this.x25_1.s1w();
  };
  protoOf(CountedByteReadChannel).t1w = function () {
    return this.y25_1.h16() && this.x25_1.t1w();
  };
  protoOf(CountedByteReadChannel).p1w = function () {
    transferFromDelegate(this);
    return this.y25_1;
  };
  protoOf(CountedByteReadChannel).u1w = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(CountedByteReadChannel).x1w = function (cause) {
    this.x25_1.x1w(cause);
    this.y25_1.w3();
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
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  var LineEnding_entriesInitialized;
  function LineEnding_initEntries() {
    if (LineEnding_entriesInitialized)
      return Unit_instance;
    LineEnding_entriesInitialized = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
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
    if ($this === Companion_getInstance_2().m26_1) {
      tmp = 'CR';
    } else if ($this === Companion_getInstance_2().n26_1) {
      tmp = 'LF';
    } else if ($this === Companion_getInstance_2().o26_1) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().q26_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.r26_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.b1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.m26_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.n26_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.o26_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.p26_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.q26_1 = listOf([new LineEndingMode(this.m26_1), new LineEndingMode(this.n26_1), new LineEndingMode(this.o26_1)]);
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
    if (!($this === other.r26_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.r26_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.r26_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.r26_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.r26_1, other);
  };
  function SourceByteReadChannel(source) {
    this.s26_1 = source;
    this.t26_1 = null;
  }
  protoOf(SourceByteReadChannel).s1w = function () {
    var tmp0_safe_receiver = this.t26_1;
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
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).t1g();
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
  protoOf(SourceByteReadChannel).t1w = function () {
    return this.s26_1.h16();
  };
  protoOf(SourceByteReadChannel).p1w = function () {
    var tmp0_safe_receiver = this.s1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s26_1.g16();
  };
  protoOf(SourceByteReadChannel).u1w = function (min, $completion) {
    var tmp0_safe_receiver = this.s1w();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.s26_1.j16(fromInt(min));
  };
  protoOf(SourceByteReadChannel).x1w = function (cause) {
    if (!(this.t26_1 == null))
      return Unit_instance;
    this.s26_1.w3();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.t26_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.g16().e1();
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
    return !_this__u8e3s4.h16();
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
    _this__u8e3s4.q17(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.g16();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.g16().e1());
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.q17(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.g16().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.h16() && block(_this__u8e3s4.g16())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? new Long(-1, 2147483647) : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.j16(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = compare(count, b) <= 0 ? count : b;
    _this__u8e3s4.g16().e17(countToDiscard);
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
    var result = _this__u8e3s4.f17(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().u26_1 : charset;
    if (charset.equals(Charsets_getInstance().u26_1))
      return encodeToByteArray(_this__u8e3s4, VOID, VOID, true);
    return encodeToByteArray_0(charset.x26(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().u26_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().u26_1)) {
      if (max === 2147483647)
        return readString_0(_this__u8e3s4);
      var tmp0 = _this__u8e3s4.g16().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = compare(tmp0, b) <= 0 ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.y26(), _this__u8e3s4, max);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().u26_1 : charset;
    if (charset === Charsets_getInstance().u26_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.x26(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).c27 = function () {
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
  protoOf(NoPoolImpl).k27 = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).d1d = function () {
    return Unit_instance;
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).l27 = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().u26_1;
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
      return Charsets_getInstance().v26_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Charset(_name) {
    this.w26_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.w26_1 === other.w26_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.w26_1);
  };
  protoOf(Charset).toString = function () {
    return this.w26_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.w26_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.u26_1 = new CharsetImpl('UTF-8');
    this.v26_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.m27_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_4.l27(name);
  }
  function CharsetEncoder(_charset) {
    this.n27_1 = _charset;
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var tmp0 = input.g16().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = compare(tmp0, b) <= 0 ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.o27(array);
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
    dst.c1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().v26_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().u26_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.t17(result);
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
  protoOf(CharsetImpl).x26 = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).y26 = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.m27_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.n27_1;
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
    this.r27_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.r27_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.r27_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.r27_1.equals(other.r27_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.t27_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.t27_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.t27_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.t27_1.equals(other.t27_1))
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
    this.u27_1 = $this_toKtor;
  }
  protoOf(toKtor$1).o27 = function (buffer) {
    return this.u27_1.decode(buffer);
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
    this.v27_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().i2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).o27 = function (buffer) {
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
          if (!!this.v27_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.a18(toByte(point >> 8));
        }
        builder.a18(toByte(point & 255));
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
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().h1k_1;
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
        dst.a18(toByte(character));
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
    this.d27_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.d27_1;
    tmp.e27_1 = Array(size);
    this.f27_1 = 0;
  }
  protoOf(DefaultPool).g27 = function (instance) {
  };
  protoOf(DefaultPool).h27 = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).i27 = function (instance) {
  };
  protoOf(DefaultPool).j27 = function () {
    if (this.f27_1 === 0)
      return this.c27();
    this.f27_1 = this.f27_1 - 1 | 0;
    var idx = this.f27_1;
    var tmp = this.e27_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.e27_1[idx] = null;
    return this.h27(instance);
  };
  protoOf(DefaultPool).k27 = function (instance) {
    this.i27(instance);
    if (this.f27_1 === this.d27_1) {
      this.g27(instance);
    } else {
      var _unary__edvuaz = this.f27_1;
      this.f27_1 = _unary__edvuaz + 1 | 0;
      this.e27_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).d1d = function () {
    var inductionVariable = 0;
    var last = this.f27_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.e27_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.e27_1[i] = null;
        this.g27(instance);
      }
       while (inductionVariable < last);
    this.f27_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).p1u = resume;
  protoOf(Read).q1u = resume_0;
  protoOf(Write).p1u = resume;
  protoOf(Write).q1u = resume_0;
  protoOf(ByteChannel).v1w = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).v1w = awaitContent$default;
  protoOf(CountedByteReadChannel).v1w = awaitContent$default;
  protoOf(SourceByteReadChannel).v1w = awaitContent$default;
  protoOf(DefaultPool).w3 = close;
  protoOf(NoPoolImpl).w3 = close;
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
  _.$_$.h = readLineStrictTo;
  _.$_$.i = readPacket;
  _.$_$.j = readRemaining;
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
  _.$_$.n1 = attachWriterJob;
  _.$_$.o1 = cancel_0;
  _.$_$.p1 = close_0;
  _.$_$.q1 = counted;
  _.$_$.r1 = invokeOnCompletion;
  _.$_$.s1 = ioDispatcher;
  _.$_$.t1 = readText;
  _.$_$.u1 = rethrowCloseCauseIfNeeded;
  _.$_$.v1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
