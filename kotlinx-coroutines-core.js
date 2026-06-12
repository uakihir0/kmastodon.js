(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var protoOf = kotlin_kotlin.$_$.kb;
  var Continuation = kotlin_kotlin.$_$.m8;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.s1;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.c8;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.q4;
  var toString = kotlin_kotlin.$_$.nb;
  var isInterface = kotlin_kotlin.$_$.ab;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e4;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var hashCode = kotlin_kotlin.$_$.ka;
  var equals = kotlin_kotlin.$_$.fa;
  var Companion_instance = kotlin_kotlin.$_$.i2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var createFailure = kotlin_kotlin.$_$.wf;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.j3;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.i8;
  var Key_instance = kotlin_kotlin.$_$.r1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h8;
  var get = kotlin_kotlin.$_$.j8;
  var minusKey = kotlin_kotlin.$_$.k8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.l8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var addSuppressed = kotlin_kotlin.$_$.sf;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var Enum = kotlin_kotlin.$_$.ve;
  var startCoroutine = kotlin_kotlin.$_$.t8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eg;
  var Long = kotlin_kotlin.$_$.af;
  var compare = kotlin_kotlin.$_$.a9;
  var intercepted = kotlin_kotlin.$_$.d8;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.t2;
  var add = kotlin_kotlin.$_$.x8;
  var subtract = kotlin_kotlin.$_$.q9;
  var RuntimeException = kotlin_kotlin.$_$.ef;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.n4;
  var captureStack = kotlin_kotlin.$_$.v9;
  var Error_0 = kotlin_kotlin.$_$.we;
  var Error_init_$Init$ = kotlin_kotlin.$_$.q3;
  var Element = kotlin_kotlin.$_$.q8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.v8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u2;
  var CancellationException = kotlin_kotlin.$_$.z7;
  var ArrayList = kotlin_kotlin.$_$.t4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.g4;
  var plus = kotlin_kotlin.$_$.r8;
  var get_0 = kotlin_kotlin.$_$.o8;
  var fold = kotlin_kotlin.$_$.n8;
  var minusKey_0 = kotlin_kotlin.$_$.p8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p3;
  var anyToString = kotlin_kotlin.$_$.t9;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var UnsupportedOperationException = kotlin_kotlin.$_$.rf;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.i3;
  var Companion_getInstance = kotlin_kotlin.$_$.d2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.o2;
  var toDuration = kotlin_kotlin.$_$.me;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var charCodeAt = kotlin_kotlin.$_$.y9;
  var toString_1 = kotlin_kotlin.$_$.k;
  var substring = kotlin_kotlin.$_$.rd;
  var returnIfSuspended = kotlin_kotlin.$_$.s2;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.xf;
  var fromInt = kotlin_kotlin.$_$.g9;
  var multiply = kotlin_kotlin.$_$.l9;
  var divide = kotlin_kotlin.$_$.e9;
  var modulo = kotlin_kotlin.$_$.k9;
  var convertToInt = kotlin_kotlin.$_$.c9;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var bitwiseAnd = kotlin_kotlin.$_$.y8;
  var shiftRight = kotlin_kotlin.$_$.p9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.w6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.i4;
  var compareTo = kotlin_kotlin.$_$.ca;
  var last = kotlin_kotlin.$_$.ed;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d;
  var shiftLeft = kotlin_kotlin.$_$.o9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var NoSuchElementException = kotlin_kotlin.$_$.bf;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.j4;
  var IllegalStateException = kotlin_kotlin.$_$.ze;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.d4;
  var getKClass = kotlin_kotlin.$_$.dc;
  var Unit = kotlin_kotlin.$_$.qf;
  var Exception = kotlin_kotlin.$_$.xe;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.w3;
  var defineProp = kotlin_kotlin.$_$.ea;
  var toLongOrNull = kotlin_kotlin.$_$.ae;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.b8;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.f8;
  var plus_0 = kotlin_kotlin.$_$.d7;
  var KtList = kotlin_kotlin.$_$.z4;
  var listOf_0 = kotlin_kotlin.$_$.v6;
  var getKClassFromExpression = kotlin_kotlin.$_$.cc;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.v3;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.l3;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.k3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.a3;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.m4;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g3;
  var stackTraceToString = kotlin_kotlin.$_$.gg;
  var removeFirstOrNull = kotlin_kotlin.$_$.e7;
  var KtMutableList = kotlin_kotlin.$_$.c5;
  var coerceIn = kotlin_kotlin.$_$.ub;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.b1b(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.b1b.call(this, cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.v1a(onCancelling, invokeImmediately, handler) : $super.v1a.call(this, onCancelling, invokeImmediately, handler);
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [Job, Continuation, CoroutineScope], [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [DisposableHandle, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForInterface(CompletableJob, 'CompletableJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForClass(CoroutineName, 'CoroutineName', VOID, AbstractCoroutineContextElement);
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  initMetadataForInterface(CopyableThrowable, 'CopyableThrowable');
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().v1g(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [CompletableJob], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode, [DisposableHandle]);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException, [CopyableThrowable]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.v1q(cause) : $super.v1q.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.b1b(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.b1b.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ProducerScope], [1, 0]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, Waiter, SelectInstance], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.o19(parentContext.u8(Key_instance_3));
    }
    this.r19_1 = parentContext.zg(this);
  }
  protoOf(AbstractCoroutine).n8 = function () {
    return this.r19_1;
  };
  protoOf(AbstractCoroutine).s19 = function () {
    return this.r19_1;
  };
  protoOf(AbstractCoroutine).t19 = function () {
    return protoOf(JobSupport).t19.call(this);
  };
  protoOf(AbstractCoroutine).u19 = function (value) {
  };
  protoOf(AbstractCoroutine).v19 = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).w19 = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).x19 = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.v19(state.y19_1, state.a1a());
    } else {
      this.u19(state);
    }
  };
  protoOf(AbstractCoroutine).s8 = function (result) {
    var state = this.b1a(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.c1a(state);
  };
  protoOf(AbstractCoroutine).c1a = function (state) {
    return this.d1a(state);
  };
  protoOf(AbstractCoroutine).e1a = function (exception) {
    handleCoroutineException(this.r19_1, exception);
  };
  protoOf(AbstractCoroutine).f1a = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.r19_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).f1a.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).f1a.call(this);
  };
  protoOf(AbstractCoroutine).g1a = function (start, receiver, block) {
    start.j1a(block, receiver, this);
  };
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.r1b() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.g1a(start, coroutine, block);
    return coroutine;
  }
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.r1b() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.g1a(start, coroutine, block);
    return coroutine;
  }
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1c_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.a1c_1.q1b(this);
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).e1c = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.i1c_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).q1a = function () {
    startCoroutineCancellable_1(this.i1c_1, this);
  };
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).o1b = function (exception) {
    handleCoroutineException(this.r19_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.p1c_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).q1a = function () {
    startCoroutineCancellable_1(this.p1c_1, this);
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.a1d(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.b1d_1 = handle;
  }
  protoOf(DisposeOnCancel).c1d = function (cause) {
    return this.b1d_1.d1d();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.b1d_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.k1d();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.l1d()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function UserSupplied(handler) {
    this.m1d_1 = handler;
  }
  protoOf(UserSupplied).c1d = function (cause) {
    this.m1d_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.m1d_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.z1c_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.m1a();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.o1d_1)) {
      var tmp_0 = $this.v1c_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).n1d();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.v1c_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.p1d(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.x1c_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.u1d(index, cause, $this.n8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.n8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.x1c_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.x1c_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.x1c_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.x1c_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.n8().u8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.z1c_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.y1c_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.y1c_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.d1e()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y19_1;
              if (isInterface(handler, CancelHandler)) {
                $this.a1e(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.w1d_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.b1e()) {
                $this.a1e(handler, state.z1d_1);
                return Unit_instance;
              }
              var update = state.c1e(VOID, handler);
              if ($this.y1c_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.y1c_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.y1c_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.o1d_1, onCancellation, idempotent);
          if (!$this.y1c_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.y1d_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.e1e();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.v1c_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.w1c_1 = this.v1c_1.n8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.x1c_1 = atomic$int$1(tmp$ret$1);
    this.y1c_1 = atomic$ref$1(Active_instance);
    this.z1c_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).f1e = function () {
    return this.v1c_1;
  };
  protoOf(CancellableContinuationImpl).n8 = function () {
    return this.w1c_1;
  };
  protoOf(CancellableContinuationImpl).m1a = function () {
    return this.y1c_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).n1a = function () {
    var tmp = this.m1a();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).o1a = function () {
    var tmp = this.m1a();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).g1e = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.n1a()) {
      handle.d1d();
      this.z1c_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).l1d = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.y1c_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.y1d_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.e1e();
      return false;
    }
    var tmp_0 = this.x1c_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.y1c_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).h1e = function () {
    return this.m1a();
  };
  protoOf(CancellableContinuationImpl).i1e = function (takenState, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.y1c_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.b1e()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.c1e(VOID, VOID, VOID, VOID, cause);
            if (this.y1c_1.atomicfu$compareAndSet(state, update)) {
              state.j1e(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.y1c_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(CancellableContinuationImpl).k1e = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.y1c_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.y1c_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.a1e(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.o1d_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).l1e = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.k1e(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).a1e = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.c1d(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).m1e = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.n8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.n8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).n1e = function (parent) {
    return parent.r1a();
  };
  protoOf(CancellableContinuationImpl).o1e = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.p1e();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.p1e();
    }
    var state = this.m1a();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.y19_1, this);
    if (get_isCancellableMode(this.o1d_1)) {
      var job = this.n8().u8(Key_instance_3);
      if (!(job == null) && !job.t19()) {
        var cause = job.r1a();
        this.i1e(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.q1e(state);
  };
  protoOf(CancellableContinuationImpl).p1e = function () {
    var tmp = this.v1c_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1e(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.e1e();
    this.k1e(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).s8 = function (result) {
    return this.s1e(toState(result, this), this.o1d_1);
  };
  protoOf(CancellableContinuationImpl).t1e = function (value, onCancellation) {
    return this.u1e(value, this.o1d_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).v1e = function (segment, index) {
    var tmp0 = this.x1c_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).s1c = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).a1d = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).u1e = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.y1c_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.y1c_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.z1e()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.m1e(onCancellation, tmp0.y19_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).s1e = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.u1e(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.u1e.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).e1e = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.d1d();
    this.z1c_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).q1c = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).r1c = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.o1d_1);
  };
  protoOf(CancellableContinuationImpl).t1c = function (_this__u8e3s4, value) {
    var tmp = this.v1c_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.f1d_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.o1d_1;
    }
    this.s1e(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).q1e = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = state.v1d_1;
    } else {
      tmp = state;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).a1f = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).a1f.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.v1c_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.b1f() + '(' + toDebugString(this.v1c_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).b1f = function () {
    return 'CancellableContinuation';
  };
  function NotCompleted() {
  }
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.v1d_1 = result;
    this.w1d_1 = cancelHandler;
    this.x1d_1 = onCancellation;
    this.y1d_1 = idempotentResume;
    this.z1d_1 = cancelCause;
  }
  protoOf(CompletedContinuation).b1e = function () {
    return !(this.z1d_1 == null);
  };
  protoOf(CompletedContinuation).j1e = function (cont, cause) {
    var tmp0_safe_receiver = this.w1d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.a1e(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.x1d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.m1e(tmp1_safe_receiver, cause, this.v1d_1);
    }
  };
  protoOf(CompletedContinuation).e1f = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).c1e = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.v1d_1 : result;
    cancelHandler = cancelHandler === VOID ? this.w1d_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.x1d_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.y1d_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.z1d_1 : cancelCause;
    return $super === VOID ? this.e1f(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.e1f.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.v1d_1) + ', cancelHandler=' + toString_0(this.w1d_1) + ', onCancellation=' + toString_0(this.x1d_1) + ', idempotentResume=' + toString_0(this.y1d_1) + ', cancelCause=' + toString_0(this.z1d_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.v1d_1 == null ? 0 : hashCode(this.v1d_1);
    result = imul(result, 31) + (this.w1d_1 == null ? 0 : hashCode(this.w1d_1)) | 0;
    result = imul(result, 31) + (this.x1d_1 == null ? 0 : hashCode(this.x1d_1)) | 0;
    result = imul(result, 31) + (this.y1d_1 == null ? 0 : hashCode(this.y1d_1)) | 0;
    result = imul(result, 31) + (this.z1d_1 == null ? 0 : hashCode(this.z1d_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    if (!equals(this.v1d_1, other.v1d_1))
      return false;
    if (!equals(this.w1d_1, other.w1d_1))
      return false;
    if (!equals(this.x1d_1, other.x1d_1))
      return false;
    if (!equals(this.y1d_1, other.y1d_1))
      return false;
    if (!equals(this.z1d_1, other.z1d_1))
      return false;
    return true;
  };
  function ChildContinuation(child) {
    JobNode.call(this);
    this.j1f_1 = child;
  }
  protoOf(ChildContinuation).k1f = function () {
    return true;
  };
  protoOf(ChildContinuation).c1d = function (cause) {
    this.j1f_1.l1e(this.j1f_1.n1e(this.p1f()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1g_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 2;
            this.h8_1 = 1;
            suspendResult = this.f1g_1.q1b(this);
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.o19(parent);
  }
  protoOf(CompletableDeferredImpl).a1b = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).e1c = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(CompletableDeferredImpl).i1g = function (value) {
    return this.j1b(value);
  };
  protoOf(CompletableDeferredImpl).j1g = function (exception) {
    return this.j1b(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.y19_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(state);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.y19_1 = cause;
    this.z19_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).a1a = function () {
    return this.z19_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).d1e = function () {
    return this.z19_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.y19_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.y1e_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).z1e = function () {
    return this.y1e_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).m1g = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).v8 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).w8 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.o1g();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.p1g_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.u8(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.q1g(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineName(name) {
    AbstractCoroutineContextElement.call(this, Key_instance_2);
    this.s1g_1 = name;
  }
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.s1g_1 + ')';
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.s1g_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    if (!(this.s1g_1 === other.s1g_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.s19().u8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.b1b(cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel(_this__u8e3s4, CancellationException_0(message, cause));
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.u8(Key_instance_3) == null) ? context : context.zg(Job_0()));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).s19 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).j1a = function (block, receiver, completion) {
    var tmp;
    switch (this.a1_1) {
      case 0:
        startCoroutineCancellable_0(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).r1b = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function CopyableThrowable() {
  }
  function delay(timeMillis, $completion) {
    if (compare(timeMillis, new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    if (compare(timeMillis, new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.n8()).u1g(timeMillis, cancellable);
    }
    return cancellable.o1e();
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.u8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.y1g_1 = new Long(0, 0);
    this.z1g_1 = false;
    this.a1h_1 = null;
  }
  protoOf(EventLoop).b1h = function () {
    var tmp0_elvis_lhs = this.a1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.cf();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.c1f();
    return true;
  };
  protoOf(EventLoop).c1h = function (task) {
    var tmp0_elvis_lhs = this.a1h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.a1h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.af(task);
  };
  protoOf(EventLoop).d1h = function () {
    return compare(this.y1g_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).e1h = function () {
    var tmp0_safe_receiver = this.a1h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).f1h = function (unconfined) {
    this.y1g_1 = add(this.y1g_1, delta(this, unconfined));
    if (!unconfined)
      this.z1g_1 = true;
  };
  protoOf(EventLoop).g1h = function (unconfined) {
    this.y1g_1 = subtract(this.y1g_1, delta(this, unconfined));
    if (compare(this.y1g_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.z1g_1) {
      this.h1h();
    }
  };
  protoOf(EventLoop).h1h = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.i1h_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).j1h = function () {
    var tmp0_elvis_lhs = this.i1h_1.l1h();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().i1h_1.m1h(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.u8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.b1b(CancellationException_0(message, cause));
  }
  function cancel_2(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.u8(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1b(cause);
    }
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.x1a(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.k1f();
      tmp = _this__u8e3s4.v1a(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u8(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).d1d = function () {
  };
  protoOf(NonDisposableHandle).f1b = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.t19())
      throw _this__u8e3s4.r1a();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.r1h_1 = handle;
  }
  protoOf(DisposeOnCompletion).k1f = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).c1d = function (cause) {
    return this.r1h_1.d1d();
  };
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).p1f = function () {
    var tmp = this.o1f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).t19 = function () {
    return true;
  };
  protoOf(JobNode).q1f = function () {
    return null;
  };
  protoOf(JobNode).d1d = function () {
    return this.p1f().z1a(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.p1f()) + ']';
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1h_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.w1h_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.w1h_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y19_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.x1h();
    var exceptions = state.y1h(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.o1b(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).d1e();
      }
    }
    if (!wasCancelling) {
      $this.l1b(finalException);
    }
    $this.x19(finalState);
    var casSuccess = $this.m19_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.r()) {
      if (state.x1h()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.w19() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (!(element instanceof CancellationException)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var firstNonCancellation = tmp$ret$1;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.d1(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.t();
        while (_iterator__ex2g4s_0.u()) {
          var element_0 = _iterator__ex2g4s_0.v();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$3 = null;
      }
      var detailedTimeoutException = tmp$ret$3;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.e1() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.e1());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.t();
    while (_iterator__ex2g4s.u()) {
      var exception = _iterator__ex2g4s.v();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.b1(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.m19_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.l1b(null);
    $this.x19(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.l1a();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.d1d();
      $this.k1a(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y19_1;
    if (state instanceof JobNode) {
      try {
        state.c1d(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.e1a(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.q1f();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.l1b(cause);
    list.z1h(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.r1f_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.k1f();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.c1d(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.r1f_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.e1a(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.m1b())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.l1a();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.f1b(cause) || isCancellation;
  }
  function notifyCompletion($this, $receiver, cause) {
    $receiver.z1h(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = $receiver.r1f_1;
    while (!equals(cur, $receiver)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.c1d(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.r1f_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.e1a(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.b1i_1)
        return 0;
      if (!$this.m19_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.q1a();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.m19_1.atomicfu$compareAndSet(state, state.a1i_1))
          return -1;
        $this.q1a();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.b1i_1 ? list : new InactiveNodeList(list);
    $this.m19_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.w1f(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.r1f_1;
    $this.m19_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.m1a();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.o1e();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.m1a();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.c1i();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.w19() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = (isInterface(cause, ParentJob) ? cause : THROW_CCE()).i1b();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.m1a();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.d1i())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.x1h();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.e1i(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.f1i();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.t1h_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.t19()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.q1f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.m19_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.c1i())
      return get_COMPLETING_ALREADY();
    finishing.g1i(true);
    if (!(finishing === state)) {
      if (!$this.m19_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.x1h();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.e1i(tmp0_safe_receiver.y19_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.f1i();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.z1h(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, $receiver) {
    var tmp0_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y19_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.l1i_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.t1h_1.z1h(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.d1a(finalState);
  }
  function nextChild($this, $receiver) {
    var cur = $receiver;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.t1f_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.s1f_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.r1f_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.t1f_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.x1h() ? 'Cancelling' : state.c1i() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.t19() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.t1h_1 = list;
    this.u1h_1 = atomic$boolean$1(isCompleting);
    this.v1h_1 = atomic$ref$1(rootCause);
    this.w1h_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).q1f = function () {
    return this.t1h_1;
  };
  protoOf(Finishing).g1i = function (value) {
    this.u1h_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).c1i = function () {
    return this.u1h_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).m1i = function (value) {
    this.v1h_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).f1i = function () {
    return this.v1h_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).d1i = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).x1h = function () {
    return !(this.f1i() == null);
  };
  protoOf(Finishing).t19 = function () {
    return this.f1i() == null;
  };
  protoOf(Finishing).y1h = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.f1i();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.s2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.b1(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).e1i = function (exception) {
    var rootCause = this.f1i();
    if (rootCause == null) {
      this.m1i(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.b1(eh);
        this_0.b1(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).b1(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.x1h() + ', completing=' + this.c1i() + ', rootCause=' + toString_0(this.f1i()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.t1h_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.r1i_1 = parent;
    this.s1i_1 = state;
    this.t1i_1 = child;
    this.u1i_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).k1f = function () {
    return false;
  };
  protoOf(ChildCompletion).c1d = function (cause) {
    continueCompleting(this.r1i_1, this.s1i_1, this.t1i_1, this.u1i_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.b1j_1 = job;
  }
  protoOf(AwaitContinuation).n1e = function (parent) {
    var state = this.b1j_1.m1a();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.f1i();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.y19_1;
    return parent.r1a();
  };
  protoOf(AwaitContinuation).b1f = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.g1e();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.o1e();
  }
  function JobSupport(active) {
    this.m19_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.n19_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).m1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).k1a = function (value) {
    this.n19_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).l1a = function () {
    return this.n19_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).o19 = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.k1a(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.p1a();
    var handle = parent.k1b(this);
    this.k1a(handle);
    if (this.n1a()) {
      handle.d1d();
      this.k1a(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).m1a = function () {
    return this.m19_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).t19 = function () {
    var state = this.m1a();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.t19();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).n1a = function () {
    var tmp = this.m1a();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).o1a = function () {
    var state = this.m1a();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.x1h();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).p1a = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.m1a();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).q1a = function () {
  };
  protoOf(JobSupport).r1a = function () {
    var state = this.m1a();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.f1i();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.s1a(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        // Inline function 'kotlin.error' call
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.t1a(state.y19_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).s1a = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.w19() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).t1a = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.s1a(_this__u8e3s4, message) : $super.s1a.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).u1a = function (handler) {
    return this.x1a(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).v1a = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.x1a(invokeImmediately, tmp);
  };
  protoOf(JobSupport).x1a = function (invokeImmediately, node) {
    node.o1f_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.m1a();
        if (state instanceof Empty) {
          if (state.b1i_1) {
            if (this.m19_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.q1f();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.k1f()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f1i();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.u1f(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.c1d(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.u1f(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.m1a();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.c1d(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.y19_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).y1a = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.n8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).z1a = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.m1a();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.m19_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.q1f() == null)) {
            node.v1f();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).a1b = function () {
    return false;
  };
  protoOf(JobSupport).b1b = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.w19() : null, null, this);
    } else {
      tmp = cause;
    }
    this.d1b(tmp);
  };
  protoOf(JobSupport).w19 = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).d1b = function (cause) {
    this.h1b(cause);
  };
  protoOf(JobSupport).e1b = function (parentJob) {
    this.h1b(parentJob);
  };
  protoOf(JobSupport).f1b = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.h1b(cause) && this.n1b();
  };
  protoOf(JobSupport).g1b = function (cause) {
    return this.h1b(cause);
  };
  protoOf(JobSupport).h1b = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.a1b()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.d1a(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).i1b = function () {
    var state = this.m1a();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.f1i();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.y19_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          // Inline function 'kotlin.error' call
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).j1b = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.m1a();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.d1a(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).b1a = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.m1a();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).k1b = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.o1f_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.m1a();
        if (state instanceof Empty) {
          if (state.b1i_1) {
            if (this.m19_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.q1f();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.u1f(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.u1f(node, 3);
                var latestState = this.m1a();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.f1i();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y19_1;
                }
                var rootCause = tmp_0;
                node.c1d(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.m1a();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.c1d(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.y19_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).e1a = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).l1b = function (cause) {
  };
  protoOf(JobSupport).m1b = function () {
    return false;
  };
  protoOf(JobSupport).n1b = function () {
    return true;
  };
  protoOf(JobSupport).o1b = function (exception) {
    return false;
  };
  protoOf(JobSupport).x19 = function (state) {
  };
  protoOf(JobSupport).d1a = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.p1b() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).p1b = function () {
    return this.f1a() + '{' + stateString(this, this.m1a()) + '}';
  };
  protoOf(JobSupport).f1a = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).q1b = function ($completion) {
    $l$loop: while (true) {
      var state = this.m1a();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.y19_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.l1a();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1f();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.n1b())
        return true;
      var tmp_1 = parentJob.l1a();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p1f();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.o19(parent);
    this.e1j_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).a1b = function () {
    return true;
  };
  protoOf(JobImpl).n1b = function () {
    return this.e1j_1;
  };
  protoOf(JobImpl).k1g = function () {
    return this.j1b(Unit_instance);
  };
  protoOf(JobImpl).j1g = function (exception) {
    return this.j1b(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.b1i_1 = isActive;
  }
  protoOf(Empty).t19 = function () {
    return this.b1i_1;
  };
  protoOf(Empty).q1f = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.b1i_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).t19 = function () {
    return true;
  };
  protoOf(NodeList).q1f = function () {
    return this;
  };
  protoOf(NodeList).i1j = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('List{');
    this_0.q(state);
    this_0.q('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.r1f_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.q(', ');
        this_0.w(node);
      }
      cur = cur.r1f_1;
    }
    this_0.q(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.i1j('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function IncompleteStateBox(state) {
    this.s1h_1 = state;
  }
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.a1i_1 = list;
  }
  protoOf(InactiveNodeList).q1f = function () {
    return this.a1i_1;
  };
  protoOf(InactiveNodeList).t19 = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.a1i_1.i1j('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.n1j_1 = handler;
  }
  protoOf(InvokeOnCompletion).k1f = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).c1d = function (cause) {
    return this.n1j_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.s1j_1 = handler;
    this.t1j_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).k1f = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).c1d = function (cause) {
    if (this.t1j_1.atomicfu$compareAndSet(false, true))
      this.s1j_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.y1j_1 = continuation;
  }
  protoOf(ResumeOnCompletion).k1f = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).c1d = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.y1j_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.s8(tmp$ret$1);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.l1i_1 = childJob;
  }
  protoOf(ChildHandleNode).k1f = function () {
    return true;
  };
  protoOf(ChildHandleNode).c1d = function (cause) {
    return this.l1i_1.e1b(this.p1f());
  };
  protoOf(ChildHandleNode).f1b = function (cause) {
    return this.p1f().f1b(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.d1k_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).k1f = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).c1d = function (cause) {
    var state = this.p1f().m1a();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.d1k_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.y19_1;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.s8(tmp$ret$2);
    } else {
      var tmp0_0 = this.d1k_1;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = unboxState(state);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
      tmp0_0.s8(tmp$ret$4);
    }
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function JobNode$invoke$ref(p0) {
    return constructCallableReference(function (p0_0) {
      p0.c1d(p0_0);
      return Unit_instance;
    }, 1, 0, 8, 'invoke', [p0]);
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.g1k();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).g1k = function () {
    var main = Dispatchers_getInstance().l1k();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.f1k();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).f1b = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.a1l_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).t1g = function () {
    var tmp0_elvis_lhs = this.message;
    // Inline function 'kotlin.also' call
    var this_0 = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.a1l_1);
    initCause(this_0, this);
    return this_0;
  };
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.n8(), uCont);
    this.f1l_1 = time;
  }
  protoOf(TimeoutCoroutine).c1f = function () {
    var delay = get_delay(this.r19_1);
    var tmp0_safe_receiver = this.r19_1.u8(Key_instance_2);
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1g_1;
    this.g1b(TimeoutCancellationException_0(this.f1l_1, delay, this, name));
  };
  protoOf(TimeoutCoroutine).f1a = function () {
    return protoOf(ScopeCoroutine).f1a.call(this) + '(timeMillis=' + this.f1l_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.j1l_1;
    var context = cont.n8();
    disposeOnCompletion(coroutine, get_delay(context).v1g(coroutine.f1l_1, coroutine, coroutine.r19_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine, coroutineName) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.w1g(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var baseMessage = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    var tmp_0;
    if (!(coroutineName == null)) {
      // Inline function 'kotlin.text.replaceFirstChar' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(baseMessage) > 0) {
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(baseMessage, 0);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5 = toString_1(this_0).toLowerCase();
        var tmp0 = charCodeAt(tmp$ret$5, 0);
        // Inline function 'kotlin.text.plus' call
        var other = substring(baseMessage, 1);
        tmp_1 = toString_1(tmp0) + other;
      } else {
        tmp_1 = baseMessage;
      }
      tmp_0 = 'Coroutine "' + coroutineName + '" ' + tmp_1;
    } else {
      tmp_0 = baseMessage;
    }
    var message = tmp_0;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x1k_1 = timeMillis;
    this.y1k_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            if (compare(this.x1k_1, new Long(0, 0)) <= 0)
              return null;
            this.z1k_1 = {_v: null};
            this.i8_1 = 2;
            this.h8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.x1k_1, this);
            this.z1k_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.y1k_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.i8_1 = 3;
            var tmp_0 = this.k8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.k8_1;
              if (e.a1l_1 === this.z1k_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.k8_1;
            }

          case 3:
            throw this.k8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i8_1 === 3) {
          throw e_0;
        } else {
          this.h8_1 = this.i8_1;
          this.k8_1 = e_0;
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).m1g = function (context) {
    return false;
  };
  protoOf(Unconfined).n1g = function (context, block) {
    var yieldContext = context.u8(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.n1l_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function Waiter() {
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.t1l_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.s1l_1 = channel;
    this.t1l_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).u1l = function () {
    return ensureNotNull(this.s1l_1);
  };
  protoOf(ChannelSegment).v1l = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).w1l = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).x1l = function (index) {
    return this.t1l_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).y1l = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.x1l(index);
    this.z1l(index);
    return this_0;
  };
  protoOf(ChannelSegment).z1l = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).a1m = function (index) {
    return this.t1l_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).b1m = function (index, value) {
    this.t1l_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).c1m = function (index, from, to) {
    return this.t1l_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).d1m = function (index, update) {
    return this.t1l_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).u1d = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.x1l(index_0);
    $l$loop: while (true) {
      var cur = this.a1m(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.c1m(index_0, cur, update)) {
          this.z1l(index_0);
          this.q1m(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.u1l().f1m_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.z1l(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.u1l().f1m_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).q1m = function (index, receiver) {
    if (receiver) {
      var tmp = this.u1l();
      var tmp0 = this.s1d_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.r1m(tmp$ret$1);
    }
    this.s1m();
  };
  function onClosedHasNext($this) {
    $this.e1n_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.g1n_1.h1n();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.f1n_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.g1n_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, this_0.i1n()) < 0) {
          segment.c1n();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.l1m_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.j1n()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.h1m_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.s1d_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, this_0.i1n()) < 0) {
                segment_0.c1n();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.c1n();
              $this.e1n_1 = updCellResult_0;
              $this.f1n_1 = null;
              var tmp0_safe_receiver = $this.g1n_1.f1m_1;
              cancellable.t1e(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.g1n_1, tmp0_safe_receiver, updCellResult_0));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.c1n();
        $this.e1n_1 = updCellResult;
        $this.f1n_1 = null;
        var tmp0_safe_receiver_0 = $this.g1n_1.f1m_1;
        cancellable.t1e(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.g1n_1, tmp0_safe_receiver_0, updCellResult));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.p1e();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.o1e();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.f1n_1);
    $this.f1n_1 = null;
    $this.e1n_1 = get_CHANNEL_CLOSED();
    var cause = $this.g1n_1.h1n();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.s8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s8(tmp$ret$3);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1n_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            if (!(this.s1n_1.e1n_1 === get_NO_RECEIVE_RESULT()) && !(this.s1n_1.e1n_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.t1n_1 = true;
              this.h8_1 = 11;
              continue $sm;
            } else {
              this.d1o_1 = this.s1n_1.g1n_1;
              this.c1o_1 = null;
              this.h8_1 = 1;
              continue $sm;
            }

          case 1:
            this.z1n_1 = this.d1o_1;
            this.a1o_1 = this.c1o_1;
            this.w1n_1 = this.z1n_1.l1m_1.kotlinx$atomicfu$value;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h8_1 = 9;
              continue $sm;
            }

            if (this.z1n_1.j1n()) {
              var tmp_1 = this;
              tmp_1.u1n_1 = onClosedHasNext(this.s1n_1);
              this.h8_1 = 10;
              continue $sm;
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            this.x1n_1 = this.z1n_1.h1m_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.x1n_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.x1n_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.y1n_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.w1n_1.s1d_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.z1n_1, id, this.w1n_1);
              if (tmp0_elvis_lhs == null) {
                this.h8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.b1o_1 = tmp0_elvis_lhs;
                this.h8_1 = 4;
                continue $sm;
              }
            } else {
              this.h8_1 = 5;
              continue $sm;
            }

          case 4:
            this.w1n_1 = this.b1o_1;
            this.h8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.z1n_1, this.w1n_1, this.y1n_1, this.x1n_1, this.a1o_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.a1o_1;
              var tmp1_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.z1n_1, tmp1_safe_receiver, this.w1n_1, this.y1n_1);
              }
              this.w1n_1;
              this.y1n_1;
              this.x1n_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.x1n_1, this.z1n_1.i1n()) < 0) {
                  this.w1n_1.c1n();
                }
                this.h8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.w1n_1;
                  var tmp2 = this.y1n_1;
                  var r = this.x1n_1;
                  this.h8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.s1n_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.w1n_1.c1n();
                  this.s1n_1.e1n_1 = updCellResult;
                  tmp_7.v1n_1 = true;
                  this.h8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.u1n_1 = this.v1n_1;
            this.h8_1 = 10;
            continue $sm;
          case 8:
            throw this.k8_1;
          case 9:
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 10;
            continue $sm;
          case 10:
            this.t1n_1 = this.u1n_1;
            this.h8_1 = 11;
            continue $sm;
          case 11:
            return this.t1n_1;
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
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.i1m_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return equalsLong(it, new Long(0, 0)) || equalsLong(it, new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    $l$block: {
      var tmp0_safe_receiver = $this.f1m_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.e1o());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.s8(tmp$ret$5);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.e1o();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.s8(tmp$ret$7);
    }
    return cancellable.o1e();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.c1n();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s8(tmp$ret$5);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.s8(tmp$ret$8);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (compare(s, $this.f1o()) < 0) {
            segment.c1n();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.c1n();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
              var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$13 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$13);
              if (!equalsLong(segment_0.s1d_1, id)) {
                var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (access$updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.c1n();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$17 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.s8(tmp$ret$17);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$20 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.s8(tmp$ret$20);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.s1m();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (compare(s_0, $this.f1o()) < 0) {
                    segment_0.c1n();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.c1n();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.p1e();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.o1e();
  }
  function prepareSenderForSuspension($this, $receiver, segment, index) {
    $receiver.v1e(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.f1m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.n8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.e1o(), cont);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s8(tmp$ret$1);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.w1l(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.a1m(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.c1m(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.c1m(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (isInterface(state, Waiter)) {
        segment.z1l(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.b1m(index, get_DONE_RCV());
          $this.g1o();
          tmp = 0;
        } else {
          if (!(segment.d1m(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.q1m(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.a1m(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.c1m(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.c1m(index, null, get_INTERRUPTED_SEND())) {
              segment.q1m(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.c1m(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.c1m(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.z1l(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.z1l(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.z1l(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.z1l(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.h1o_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.b1m(index, get_DONE_RCV());
          $this.g1o();
          tmp_0 = 0;
        } else {
          if (!(segment.d1m(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.q1m(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = bitwiseAnd(curSendersAndCloseStatus, new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (compare(curSenders, _get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.f1o();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.e1m_1;
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = compare(curSenders, tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, $receiver, element) {
    var tmp;
    if (isInterface($receiver, SelectInstance)) {
      tmp = $receiver.m1o($this, element);
    } else {
      if ($receiver instanceof ReceiveCatching) {
        if (!($receiver instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().k1o(element);
        var tmp1_safe_receiver = $this.f1m_1;
        tmp = tryResume0($receiver.l1o_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if ($receiver instanceof BufferedChannelIterator) {
          if (!($receiver instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = $receiver.i1o(element);
        } else {
          if (isInterface($receiver, CancellableContinuation)) {
            if (!isInterface($receiver, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.f1m_1;
            tmp = tryResume0($receiver, element, tmp2_safe_receiver == null ? null : bindCancellationFun_0($this, tmp2_safe_receiver));
          } else {
            // Inline function 'kotlin.error' call
            var message = 'Unexpected receiver type: ' + toString($receiver);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, $this.i1n()) < 0) {
          segment.c1n();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.l1m_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.j1n()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.h1m_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.s1d_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, $this.i1n()) < 0) {
                segment_0.c1n();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.c1n();
              var tmp0_safe_receiver = $this.f1m_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver);
              cancellable.t1e(updCellResult_0, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.c1n();
        var tmp0_safe_receiver_0 = $this.f1m_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver_0);
        cancellable.t1e(updCellResult, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.p1e();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.o1e();
  }
  function prepareReceiverForSuspension($this, $receiver, segment, index) {
    $this.n1o();
    $receiver.v1e(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.s8(tmp$ret$1);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.a1m(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var this_0 = $this.g1m_1.kotlinx$atomicfu$value;
      var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
      if (compare(r, senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.c1m(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.c1m(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.y1l(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.a1m(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var this_0 = $this.g1m_1.kotlinx$atomicfu$value;
        var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
        if (compare(r, senders) < 0) {
          if (segment.c1m(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.c1m(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.c1m(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.y1l(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.c1m(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.h1o_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.b1m(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.y1l(index);
          } else {
            segment.b1m(index, get_INTERRUPTED_SEND());
            segment.q1m(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, $receiver, segment, index) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0($receiver, Unit_instance);
    } else {
      if (isInterface($receiver, SelectInstance)) {
        if (!($receiver instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = $receiver.s1o($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.z1l(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if ($receiver instanceof SendBroadcast) {
          tmp = tryResume0($receiver.o1o_1, true);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected waiter: ' + toString($receiver);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.m1m_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.i1m_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.i1n();
      if (compare(s, b) <= 0) {
        if (compare(segment.s1d_1, id) < 0 && !(segment.y1m() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      }
      if (!equalsLong(segment.s1d_1, id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.a1m(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (compare(b, $this.h1m_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.c1m(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.b1m(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.b1m(index, get_INTERRUPTED_SEND());
            segment.q1m(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.a1m(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (compare(b, $this.h1m_1.kotlinx$atomicfu$value) < 0) {
          if (segment.c1m(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.c1m(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.b1m(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.b1m(index, get_INTERRUPTED_SEND());
              segment.q1m(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.c1m(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    // Inline function 'kotlin.also' call
    var this_0 = $this.j1m_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!equalsLong(bitwiseAnd(this_0, new Long(0, 1073741824)), new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var this_1 = $this.j1m_1.kotlinx$atomicfu$value;
        if (!!equalsLong(bitwiseAnd(this_1, new Long(0, 1073741824)), new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function BufferedChannelIterator($outer) {
    this.g1n_1 = $outer;
    this.e1n_1 = get_NO_RECEIVE_RESULT();
    this.f1n_1 = null;
  }
  protoOf(BufferedChannelIterator).t1o = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BufferedChannelIterator).v1e = function (segment, index) {
    var tmp0_safe_receiver = this.f1n_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.v1e(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).v = function () {
    var result = this.e1n_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.e1n_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.g1n_1));
    return result;
  };
  protoOf(BufferedChannelIterator).i1o = function (element) {
    var cont = ensureNotNull(this.f1n_1);
    this.f1n_1 = null;
    this.e1n_1 = element;
    var tmp0_safe_receiver = this.g1n_1.f1m_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.g1n_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).u1o = function () {
    var cont = ensureNotNull(this.f1n_1);
    this.f1n_1 = null;
    this.e1n_1 = get_CHANNEL_CLOSED();
    var cause = this.g1n_1.h1n();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.s8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.s8(tmp$ret$3);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.h1n();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.p1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.h1n());
  }
  function markClosed($this) {
    var tmp0 = $this.g1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$3, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$4 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$4, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancelled($this) {
    var tmp0 = $this.g1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$2 = bitwiseAnd(cur, new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$2, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.g1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$3, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function completeCloseOrCancel($this) {
    $this.v1o();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.x1o()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!equalsLong(lastBufferedCellGlobalIndex, new Long(-1, -1))) {
        $this.w1o(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.m1m_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.k1m_1.kotlinx$atomicfu$value;
    if (compare(it.s1d_1, lastSegment.s1d_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.l1m_1.kotlinx$atomicfu$value;
    if (compare(it_0.s1d_1, lastSegment.s1d_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.s1d_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (compare(globalIndex, $this.f1o()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.a1m(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                segment.s1m();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.b1n();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.f1m_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.s1d_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.a1m(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (compare(globalIndex, $this.f1o()) < 0)
                  break process_segments;
                if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.x1l(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.z1l(index);
                  segment.s1m();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                    segment.s1m();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (isInterface(state, Waiter)) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (compare(globalIndex, $this.f1o()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.h1o_1;
                    } else {
                      tmp_0 = isInterface(state, Waiter) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.x1l(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.z1l(index);
                      segment.s1m();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.b1n();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp1_safe_receiver = undeliveredElementException;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.s1d_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var tmp$ret$1 = add(this_0, fromInt(index));
          if (compare(tmp$ret$1, sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.a1m(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                segment.s1m();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.h1o_1);
                  segment.q1m(index, true);
                  break cell_update;
                }
              } else {
                if (isInterface(state, Waiter)) {
                  if (segment.c1m(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.q1m(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.b1n();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp == null) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.e1() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.d1(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, true);
  }
  function resumeSenderOnCancelledChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, false);
  }
  function resumeWaiterOnClosedChannel($this, $receiver, receiver) {
    if ($receiver instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $receiver.o1o_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      this_0.s8(tmp$ret$1);
    } else {
      if (isInterface($receiver, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.e1o();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
        $receiver.s8(tmp$ret$3);
      } else {
        if ($receiver instanceof ReceiveCatching) {
          var tmp0 = $receiver.l1o_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().y1o($this.h1n()));
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          tmp0.s8(tmp$ret$5);
        } else {
          if ($receiver instanceof BufferedChannelIterator) {
            $receiver.u1o();
          } else {
            if (isInterface($receiver, SelectInstance))
              $receiver.m1o($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString($receiver);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, $receiver) {
    return isClosed($this, $receiver, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, $receiver) {
    return isClosed($this, $receiver, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.z1o() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        // Inline function 'kotlin.error' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.a1m(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.c1m(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return equalsLong(globalIndex, $this.f1o());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.k1m_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.s1d_1, tmp2.s1d_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.u1m()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.v1m()) {
                  cur.y3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.v1m()) {
                tmp2.y3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.s1d_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.f1o()) < 0) {
        startFrom.c1n();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.s1d_1, id) > 0) {
        var tmp0_1 = segment.s1d_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$7);
        var tmp0_2 = segment.s1d_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$8 = multiply(tmp0_2, fromInt(other_1));
        if (compare(tmp$ret$8, $this.f1o()) < 0) {
          segment.c1n();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.l1m_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.s1d_1, tmp2.s1d_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.u1m()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.v1m()) {
                  cur.y3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.v1m()) {
                tmp2.y3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.s1d_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.i1n()) < 0) {
        startFrom.c1n();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = divide(tmp0_1, fromInt(other_0));
        tmp_1 = compare(id, tmp$ret$7) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.m1m_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          // Inline function 'kotlinx.atomicfu.loop' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (compare(cur_0.s1d_1, segment.s1d_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.u1m()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.v1m()) {
                cur_0.y3();
              }
              break $l$block_5;
            }
            if (segment.v1m()) {
              segment.y3();
            }
          }
        }
      }
      var tmp_2;
      if (compare(segment.s1d_1, id) > 0) {
        var tmp0_3 = segment.s1d_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$11 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$11);
        var tmp0_4 = segment.s1d_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        var tmp$ret$12 = multiply(tmp0_4, fromInt(other_2));
        if (compare(tmp$ret$12, $this.i1n()) < 0) {
          segment.c1n();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.m1m_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.s1d_1, tmp2.s1d_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.u1m()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.v1m()) {
                  cur.y3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.v1m()) {
                tmp2.y3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.s1d_1, id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.s1d_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_0, fromInt(other));
        if ($this.i1m_1.atomicfu$compareAndSet(tmp_2, tmp$ret$7)) {
          var tmp0_1 = segment.s1d_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$8 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$8, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (compare(segment.s1d_1, id) < 0) {
      var tmp0_elvis_lhs = segment.y1m();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.t1m()) {
        var tmp1_elvis_lhs = segment.y1m();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.m1m_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.loop' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (compare(cur.s1d_1, tmp2.s1d_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.u1m()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.v1m()) {
              cur.y3();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.v1m()) {
            tmp2.y3();
          }
        }
        tmp$ret$0 = tmp$ret$1;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.g1m_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = bitwiseAnd(cur, new Long(-1, 268435455));
      if (compare(curCounter, value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$3 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$3);
      if ($this.g1m_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.h1m_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (compare(cur, value) >= 0)
        return Unit_instance;
      if ($this.h1m_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function bindCancellationFunResult($this, $receiver) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.f1m_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, $receiver, element) {
    return BufferedChannel$bindCancellationFun$lambda($receiver, element);
  }
  function bindCancellationFun_0($this, $receiver) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.f1m_1), element, context);
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.g1m_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.k1m_1;
  }
  function access$prepareSenderForSuspension($this, $receiver, segment, index) {
    return prepareSenderForSuspension($this, $receiver, segment, index);
  }
  function access$updateCellSend($this, segment, index, element, s, waiter, closed) {
    return updateCellSend($this, segment, index, element, s, waiter, closed);
  }
  function access$_get_isClosedForSend0__sm8f7a($this, $receiver) {
    return _get_isClosedForSend0__kxgf9m($this, $receiver);
  }
  function access$findSegmentSend($this, id, startFrom) {
    return findSegmentSend($this, id, startFrom);
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.f1m_1, $element, $select.n8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationChannelResultImplDoNotCall(tmp0, p0_0, p1.b1p_1, p2);
      return Unit_instance;
    }, 3, 0, 9, 'onCancellationChannelResultImplDoNotCall', [p0]);
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationImplDoNotCall(tmp0, p0_0, p1, p2);
      return Unit_instance;
    }, 3, 0, 10, 'onCancellationImplDoNotCall', [p0]);
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k1p_1 = _this__u8e3s4;
    this.l1p_1 = element;
  }
  protoOf($sendCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 11;
            this.w1p_1 = this.k1p_1;
            this.v1p_1 = this.l1p_1;
            this.u1p_1 = null;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.o1p_1 = this.w1p_1;
            this.r1p_1 = this.v1p_1;
            this.p1p_1 = this.u1p_1;
            this.n1p_1 = access$_get_sendSegment__111kgq(this.o1p_1).kotlinx$atomicfu$value;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this.o1p_1).atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.q1p_1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
            this.s1p_1 = access$_get_isClosedForSend0__sm8f7a(this.o1p_1, sendersAndCloseStatusCur);
            var tmp0 = this.q1p_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.q1p_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.m1p_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.n1p_1.s1d_1, id)) {
              var tmp0_elvis_lhs = access$findSegmentSend(this.o1p_1, id, this.n1p_1);
              if (tmp0_elvis_lhs == null) {
                if (this.s1p_1) {
                  this.h8_1 = 10;
                  suspendResult = onClosedSend(this.k1p_1, this.l1p_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.h8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.t1p_1 = tmp0_elvis_lhs;
                this.h8_1 = 3;
                continue $sm;
              }
            } else {
              this.h8_1 = 4;
              continue $sm;
            }

          case 3:
            this.n1p_1 = this.t1p_1;
            this.h8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = access$updateCellSend(this.o1p_1, this.n1p_1, this.m1p_1, this.r1p_1, this.q1p_1, this.p1p_1, this.s1p_1);
            if (tmp1_subject === 0) {
              this.n1p_1.c1n();
              this.h8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.h8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.s1p_1) {
                    this.n1p_1.s1m();
                    this.h8_1 = 9;
                    suspendResult = onClosedSend(this.k1p_1, this.l1p_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.h8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (compare(this.q1p_1, this.o1p_1.f1o()) < 0) {
                      this.n1p_1.c1n();
                    }
                    this.h8_1 = 7;
                    suspendResult = onClosedSend(this.k1p_1, this.l1p_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.n1p_1.c1n();
                      this.h8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.n1p_1;
                        var tmp2 = this.m1p_1;
                        var tmp4 = this.r1p_1;
                        var s = this.q1p_1;
                        this.h8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.k1p_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.h8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.h8_1 = 2;
            continue $sm;
          case 6:
            this.h8_1 = 13;
            continue $sm;
          case 7:
            this.h8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.p1p_1;
            var tmp2_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.o1p_1, tmp2_safe_receiver, this.n1p_1, this.m1p_1);
            }

            this.n1p_1;
            this.m1p_1;
            this.h8_1 = 13;
            continue $sm;
          case 9:
            this.h8_1 = 13;
            continue $sm;
          case 10:
            this.h8_1 = 13;
            continue $sm;
          case 11:
            throw this.k8_1;
          case 12:
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1q_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 8;
            this.p1q_1 = this.f1q_1;
            this.o1q_1 = null;
            this.h8_1 = 1;
            continue $sm;
          case 1:
            this.l1q_1 = this.p1q_1;
            this.m1q_1 = this.o1q_1;
            this.i1q_1 = this.l1q_1.l1m_1.kotlinx$atomicfu$value;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h8_1 = 9;
              continue $sm;
            }

            if (this.l1q_1.j1n()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.f1q_1));
            } else {
              this.h8_1 = 3;
              continue $sm;
            }

          case 3:
            this.j1q_1 = this.l1q_1.h1m_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.j1q_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.j1q_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.k1q_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.i1q_1.s1d_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.l1q_1, id, this.i1q_1);
              if (tmp0_elvis_lhs == null) {
                this.h8_1 = 2;
                var tmp_2 = this;
                continue $sm;
              } else {
                this.n1q_1 = tmp0_elvis_lhs;
                this.h8_1 = 4;
                continue $sm;
              }
            } else {
              this.h8_1 = 5;
              continue $sm;
            }

          case 4:
            this.i1q_1 = this.n1q_1;
            this.h8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.l1q_1, this.i1q_1, this.k1q_1, this.j1q_1, this.m1q_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_3 = this;
              var tmp_4 = this.m1q_1;
              var tmp1_safe_receiver = (!(tmp_4 == null) ? isInterface(tmp_4, Waiter) : false) ? tmp_4 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.l1q_1, tmp1_safe_receiver, this.i1q_1, this.k1q_1);
              }
              this.i1q_1;
              this.k1q_1;
              this.j1q_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.j1q_1, this.l1q_1.i1n()) < 0) {
                  this.i1q_1.c1n();
                }
                this.h8_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.i1q_1;
                  var tmp2 = this.k1q_1;
                  var r = this.j1q_1;
                  this.h8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.f1q_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  this.i1q_1.c1n();
                  return updCellResult;
                }
              }
            }

          case 6:
            this.h1q_1 = suspendResult;
            this.h8_1 = 7;
            continue $sm;
          case 7:
            this.g1q_1 = this.h1q_1;
            this.h8_1 = 10;
            continue $sm;
          case 8:
            throw this.k8_1;
          case 9:
            if (false) {
              this.h8_1 = 1;
              continue $sm;
            }

            this.h8_1 = 10;
            continue $sm;
          case 10:
            return this.g1q_1;
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
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.e1m_1 = capacity;
    this.f1m_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.e1m_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.e1m_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.g1m_1 = atomic$long$1(new Long(0, 0));
    this.h1m_1 = atomic$long$1(new Long(0, 0));
    this.i1m_1 = atomic$long$1(initialBufferEnd(this.e1m_1));
    this.j1m_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.k1m_1 = atomic$ref$1(firstSegment);
    this.l1m_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.m1m_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.f1m_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.n1m_1 = tmp_3;
    this.o1m_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.p1m_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).i1n = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var this_0 = this.g1m_1.kotlinx$atomicfu$value;
    return bitwiseAnd(this_0, new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).f1o = function () {
    return this.h1m_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).q1q = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BufferedChannel).r1q = function (element) {
    if (shouldSendSuspend0(this, this.g1m_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().s1q();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq(this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = access$_get_isClosedForSend0__sm8f7a(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.s1d_1, id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$0 = Companion_getInstance_0().y1o(this.e1o());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.c1n();
            tmp$ret$0 = Companion_getInstance_0().k1o(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$0 = Companion_getInstance_0().k1o(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.s1m();
              tmp$ret$0 = Companion_getInstance_0().y1o(this.e1o());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.s1m();
            tmp$ret$0 = Companion_getInstance_0().s1q();
            break $l$block_5;
          case 4:
            if (compare(s, this.f1o()) < 0) {
              segment.c1n();
            }

            tmp$ret$0 = Companion_getInstance_0().y1o(this.e1o());
            break $l$block_5;
          case 5:
            segment.c1n();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).n1o = function () {
  };
  protoOf(BufferedChannel).g1o = function () {
  };
  protoOf(BufferedChannel).t1q = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(BufferedChannel).w1o = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.l1m_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.h1m_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.e1m_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = compare(tmp0, b) >= 0 ? tmp0 : b;
      if (compare(globalCellIndex, tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.h1m_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!equalsLong(segment.s1d_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (compare(r, this.i1n()) < 0) {
          segment.c1n();
        }
      } else {
        segment.c1n();
        var tmp1_safe_receiver = this.f1m_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp1_safe_receiver, updCellResult);
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).r1m = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (compare(_get_bufferEndCounter__2d4hee(this), globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var this_0 = this.j1m_1.kotlinx$atomicfu$value;
        var ebCompleted = bitwiseAnd(this_0, new Long(-1, 1073741823));
        if (equalsLong(b, ebCompleted) && equalsLong(b, _get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.j1m_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$5 = bitwiseAnd(cur, new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$5, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.j1m_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = bitwiseAnd(ebCompletedAndBit, new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !equalsLong(bitwiseAnd(ebCompletedAndBit, new Long(0, 1073741824)), new Long(0, 0));
      if (equalsLong(b_0, ebCompleted_0) && equalsLong(b_0, _get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.j1m_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$10 = bitwiseAnd(cur_0, new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$10, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.j1m_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).t = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).h1n = function () {
    var tmp = this.o1m_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).e1o = function () {
    var tmp0_elvis_lhs = this.h1n();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).u1q = function () {
  };
  protoOf(BufferedChannel).v1q = function (cause) {
    return this.w1q(cause, false);
  };
  protoOf(BufferedChannel).b1b = function (cause) {
    this.y1q(cause);
  };
  protoOf(BufferedChannel).y1q = function (cause) {
    return this.w1q(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).w1q = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.o1m_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.u1q();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).x1o = function () {
    return false;
  };
  protoOf(BufferedChannel).v1o = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.g1m_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).j1n = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.g1m_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).z1o = function () {
    $l$loop: while (true) {
      var segment = this.l1m_1.kotlinx$atomicfu$value;
      var r = this.f1o();
      var s = this.i1n();
      if (compare(s, r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!equalsLong(segment.s1d_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (compare(this.l1m_1.kotlinx$atomicfu$value.s1d_1, id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.c1n();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.h1m_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.g1m_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.q('closed,');
    } else if (tmp0_subject === 3) {
      sb.q('cancelled,');
    }
    sb.q('capacity=' + this.e1m_1 + ',');
    sb.q('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.l1m_1.kotlinx$atomicfu$value, this.k1m_1.kotlinx$atomicfu$value, this.m1m_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!(element === get_NULL_SEGMENT())) {
        destination.b1(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.t();
      if (!iterator.u())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.s1d_1;
      do {
        var e = iterator.v();
        var v = e.s1d_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.f1o();
    var s = this.i1n();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.s1d_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (compare(globalCellIndex, s) >= 0 && compare(globalCellIndex, r) >= 0)
            break append_elements;
          var cellState = segment.a1m(i);
          var element_0 = segment.x1l(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (compare(s, globalCellIndex) <= 0 ? compare(globalCellIndex, r) < 0 : false) ? 'receive' : (compare(r, globalCellIndex) <= 0 ? compare(globalCellIndex, s) < 0 : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (compare(s, globalCellIndex) <= 0 ? compare(globalCellIndex, r) < 0 : false) ? 'onReceive' : (compare(r, globalCellIndex) <= 0 ? compare(globalCellIndex, s) < 0 : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.q('(' + cellStateString + ',' + toString(element_0) + '),');
          } else {
            sb.q(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp4_elvis_lhs = segment.y1m();
      var tmp_0;
      if (tmp4_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp4_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.fc(sb.a() - 1 | 0);
    }
    sb.q(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.h1o_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.h1o_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.q1c(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.r1c(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? new Long(0, 1073741824) : new Long(0, 0), counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.u1l(), 0);
  }
  function createSegment$ref() {
    return constructCallableReference(function (p0, p1) {
      return createSegment(p0, p1);
    }, 2, 0, 11, 'createSegment');
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.a1r_1 = 2147483647;
    this.b1r_1 = 0;
    this.c1r_1 = -1;
    this.d1r_1 = -2;
    this.e1r_1 = -3;
    this.f1r_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.g1r_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1r_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.h1r_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.h1r_1, other.h1r_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.h1r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.h1r_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.j1o_1 = new Failed();
  }
  protoOf(Companion).k1o = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).s1q = function () {
    return _ChannelResult___init__impl__siwsuf(this.j1o_1);
  };
  protoOf(Companion).y1o = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other.b1p_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.b1p_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.b1p_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.b1p_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.b1p_1, other);
  };
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().g1r_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.l1r_1 = _channel;
  }
  protoOf(ChannelCoroutine).b1b = function (cause) {
    if (this.o1a())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.w19() : null, null, this);
    } else {
      tmp = cause;
    }
    this.d1b(tmp);
  };
  protoOf(ChannelCoroutine).z1q = function (cause, $super) {
    return this.c1b(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).d1b = function (cause) {
    var exception = this.t1a(cause);
    this.l1r_1.b1b(exception);
    this.g1b(exception);
  };
  protoOf(ChannelCoroutine).v1o = function () {
    return this.l1r_1.v1o();
  };
  protoOf(ChannelCoroutine).q1q = function (element, $completion) {
    return this.l1r_1.q1q(element, $completion);
  };
  protoOf(ChannelCoroutine).r1q = function (element) {
    return this.l1r_1.r1q(element);
  };
  protoOf(ChannelCoroutine).v1q = function (cause) {
    return this.l1r_1.v1q(cause);
  };
  protoOf(ChannelCoroutine).t1q = function ($completion) {
    return this.l1r_1.t1q($completion);
  };
  protoOf(ChannelCoroutine).t = function () {
    return this.l1r_1.t();
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.b1b(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.z1r_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).r1q.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.f1m_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().k1o(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.s1d_1, id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().y1o($this.e1o());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend($this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.c1n();
            return Companion_getInstance_0().k1o(Unit_instance);
          case 1:
            return Companion_getInstance_0().k1o(Unit_instance);
          case 2:
            if (closed) {
              segment.s1m();
              return Companion_getInstance_0().y1o($this.e1o());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.s1d_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$10 = add(this_0, fromInt(i));
            $this.w1o(tmp$ret$10);
            return Companion_getInstance_0().k1o(Unit_instance);
          case 4:
            if (compare(s, $this.f1o()) < 0) {
              segment.c1n();
            }

            return Companion_getInstance_0().y1o($this.e1o());
          case 5:
            segment.c1n();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.y1r_1 = capacity;
    this.z1r_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.z1r_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).o() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.y1r_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.y1r_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).x1o = function () {
    return this.z1r_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).q1q = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.f1m_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.e1o());
        throw tmp1_safe_receiver;
      }
      throw this.e1o();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).r1q = function (element) {
    return trySendImpl(this, element, false);
  };
  function produce(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce_0(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function ProducerScope() {
  }
  function produce_0(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.u1a(onCompletion);
    }
    coroutine.g1a(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).t19 = function () {
    return protoOf(ChannelCoroutine).t19.call(this);
  };
  protoOf(ProducerCoroutine).e1s = function (value) {
    this.l1r_1.x1q();
  };
  protoOf(ProducerCoroutine).u19 = function (value) {
    return this.e1s(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).v19 = function (cause, handled) {
    var processed = this.l1r_1.v1q(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.r19_1, cause);
    }
  };
  protoOf(ProducerCoroutine).z1q = function (cause, $super) {
    return this.c1b(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.s1d_1 = id;
    this.t1d_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).t1m = function () {
    return this.t1d_1.kotlinx$atomicfu$value === this.v1l() && !this.a1n();
  };
  protoOf(Segment).u1m = function () {
    var tmp0 = this.t1d_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.v1l()) || this.a1n())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(Segment).v1m = function () {
    return this.t1d_1.atomicfu$addAndGet(-65536) === this.v1l() && !this.a1n();
  };
  protoOf(Segment).s1m = function () {
    if (this.t1d_1.atomicfu$incrementAndGet() === this.v1l()) {
      this.y3();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.d1n())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      // Inline function 'kotlin.error' call
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other.a1p_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.a1p_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.a1p_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.a1p_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.a1p_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.w1m_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.b1n();
    while (!(cur === null) && cur.t1m())
      cur = cur.x1m_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.y1m());
    while (cur.t1m()) {
      var tmp0_elvis_lhs = cur.y1m();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.w1m_1 = atomic$ref$1(null);
    this.x1m_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).y1m = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).z1m = function (value) {
    return this.w1m_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).a1n = function () {
    return this.y1m() == null;
  };
  protoOf(ConcurrentLinkedListNode).b1n = function () {
    return this.x1m_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).c1n = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.x1m_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).d1n = function () {
    return this.w1m_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).y3 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.a1n())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.x1m_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.w1m_1.kotlinx$atomicfu$value = next;
      if (next.t1m() && !next.a1n())
        continue $l$loop_0;
      if (!(prev === null) && prev.t1m())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (compare(cur.s1d_1, id) < 0 || cur.t1m()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.s1d_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.z1m(newTail)) {
        if (cur.t1m()) {
          cur.y3();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().t();
    while (_iterator__ex2g4s.u()) {
      var handler = _iterator__ex2g4s.v();
      try {
        handler.q1g(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p_0) {
      if ($p_0 instanceof Error) {
        var e = $p_0;
      } else {
        throw $p_0;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWithInternal(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.f1d_1, _this__u8e3s4.n8())) {
        _this__u8e3s4.h1d_1 = state;
        _this__u8e3s4.o1d_1 = 1;
        safeDispatch(_this__u8e3s4.f1d_1, _this__u8e3s4.n8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().j1h();
          if (false && eventLoop.e1h()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.d1h()) {
            _this__u8e3s4.h1d_1 = state;
            _this__u8e3s4.o1d_1 = 1;
            eventLoop.c1h(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.f1h(true);
            try {
              var tmp$ret$5;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.n8().u8(Key_instance_3);
                if (!(job == null) && !job.t19()) {
                  var cause = job.r1a();
                  _this__u8e3s4.i1e(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.s8(tmp$ret$7);
                  tmp$ret$5 = true;
                  break $l$block_0;
                }
                tmp$ret$5 = false;
              }
              if (!tmp$ret$5) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.g1d_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.i1d_1;
                _this__u8e3s4.g1d_1.s8(result);
              }
              $l$loop: while (eventLoop.b1h()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.d1f(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.g1h(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.s8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.j1d_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.f1d_1 = dispatcher;
    this.g1d_1 = continuation;
    this.h1d_1 = get_UNDEFINED();
    this.i1d_1 = threadContextElements(this.n8());
    this.j1d_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).n1d = function () {
    return !(this.j1d_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).f1s = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1d_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).o1g = function () {
    this.f1s();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1e();
    }
  };
  protoOf(DispatchedContinuation).k1d = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1d_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.j1d_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.j1d_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).r1e = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1d_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.j1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.j1d_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).p1d = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.j1d_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.j1d_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.j1d_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).h1e = function () {
    var state = this.h1d_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.h1d_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).f1e = function () {
    return this;
  };
  protoOf(DispatchedContinuation).s8 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.f1d_1, this.n8())) {
      this.h1d_1 = state;
      this.o1d_1 = 0;
      safeDispatch(this.f1d_1, this.n8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().j1h();
        if (false && eventLoop.e1h()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.d1h()) {
          this.h1d_1 = state;
          this.o1d_1 = 0;
          eventLoop.c1h(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.f1h(true);
          try {
            this.n8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.i1d_1;
            this.g1d_1.s8(result);
            $l$loop: while (eventLoop.b1h()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.d1f(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.g1h(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.f1d_1.toString() + ', ' + toDebugString(this.g1d_1) + ']';
  };
  protoOf(DispatchedContinuation).n8 = function () {
    return this.g1d_1.n8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.n1g(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.m1g(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.o1d_1 = resumeMode;
  }
  protoOf(DispatchedTask).i1e = function (takenState, cause) {
  };
  protoOf(DispatchedTask).q1e = function (state) {
    return state;
  };
  protoOf(DispatchedTask).a1f = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y19_1;
  };
  protoOf(DispatchedTask).c1f = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.f1e();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.g1d_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.i1d_1;
      var context = continuation.n8();
      var state = this.h1e();
      var exception = this.a1f(state);
      var job = exception == null && get_isCancellableMode(this.o1d_1) ? context.u8(Key_instance_3) : null;
      if (!(job == null) && !job.t19()) {
        var cause = job.r1a();
        this.i1e(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.s8(tmp$ret$4);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.s8(tmp$ret$6);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.q1e(state);
          var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
          continuation.s8(tmp$ret$8);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.f1e().n8(), e.p1g_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.d1f(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).d1f = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.f1e().n8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.f1e();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.o1d_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.f1d_1;
      var context = delegate.n8();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.p1g_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.p1g_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().j1h();
    if (eventLoop.d1h()) {
      eventLoop.c1h(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.f1h(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.f1e(), true);
        $l$loop: while (eventLoop.b1h()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.d1f(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.g1h(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.h1e();
    var exception = _this__u8e3s4.a1f(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.q1e(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.g1d_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.i1d_1;
      this_0.g1d_1.s8(result);
    } else {
      delegate.s8(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).b1(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        list.b1(_get_holder__f6h5pd($this));
        list.b1(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.j1l_1 = uCont;
  }
  protoOf(ScopeCoroutine).m1b = function () {
    return true;
  };
  protoOf(ScopeCoroutine).d1a = function (state) {
    resumeCancellableWithInternal(intercepted(this.j1l_1), recoverResult(state, this.j1l_1));
  };
  protoOf(ScopeCoroutine).k1l = function () {
  };
  protoOf(ScopeCoroutine).c1a = function (state) {
    this.j1l_1.s8(recoverResult(state, this.j1l_1));
  };
  function ContextScope(context) {
    this.g1s_1 = context;
  }
  protoOf(ContextScope).s19 = function () {
    return this.g1s_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.g1s_1) + ')';
  };
  function Symbol(symbol) {
    this.h1s_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.h1s_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(compare(minValue, parsed) <= 0 ? compare(parsed, maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.p1g_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.s8(tmp$ret$0);
    throw reportException;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.n8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.p1g_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.s8(tmp$ret$6);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
      actualCompletion.s8(tmp$ret$8);
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    return startUndispatched(_this__u8e3s4, false, receiver, block);
  }
  function startUndispatched(_this__u8e3s4, alwaysRethrow, receiver, block) {
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof DispatchException) {
        var e = $p;
        dispatchExceptionAndMakeCompleting(_this__u8e3s4, e);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          tmp_0 = new CompletedExceptionally(e_0);
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.b1a(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.k1l();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.y19_1)) {
        throw recoverStackTrace(state.y19_1, _this__u8e3s4.j1l_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.y19_1, _this__u8e3s4.j1l_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function dispatchExceptionAndMakeCompleting(_this__u8e3s4, e) {
    _this__u8e3s4.j1b(new CompletedExceptionally(e.p1g_1));
    throw recoverStackTrace(e.p1g_1, _this__u8e3s4.j1l_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.a1l_1 === _this__u8e3s4);
    }
    return tmp;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  var PARAM_CLAUSE_0;
  function SelectInstance() {
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.p1o_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.l1s($this, internalResult);
        if ($this.p1o_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.r1o_1 = internalResult;
          if (tryResume_0(cont, onCancellation))
            return 0;
          $this.r1o_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.p1o_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.p1o_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.q1o_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element.i1s_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function ClauseData() {
  }
  protoOf(ClauseData).l1s = function (select, internalResult) {
    var tmp0_safe_receiver = this.k1s_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.j1s_1, internalResult);
  };
  function SelectImplementation() {
  }
  protoOf(SelectImplementation).s1o = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_0(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.q1c(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.r1c(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).o();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).o1s = function () {
    process.nextTick(this.v1s_1.t1s_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.z1s();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.s1s_1 = dispatcher;
    var tmp = this;
    tmp.t1s_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).a1t = function () {
    this.s1s_1.o1s();
  };
  protoOf(ScheduledMessageQueue).b1t = function () {
    setTimeout(this.t1s_1, 0);
  };
  protoOf(ScheduledMessageQueue).c1t = function (timeout) {
    setTimeout(this.t1s_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.m1t_1 && event.data == this$0.n1t_1) {
        event.stopPropagation();
        this$0.z1s();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.z1s();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.m1t_1 = window_0;
    this.n1t_1 = 'dispatchCoroutine';
    this.m1t_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).a1t = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).b1t = function () {
    this.m1t_1.postMessage(this.n1t_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function toThrowable(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof Error ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? Exception_init_$Create$("Promise resolved with a non-Throwable exception '" + _this__u8e3s4.toString() + "' (type " + toString(getKClassFromExpression(_this__u8e3s4)) + ')') : tmp0_elvis_lhs;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.s19().zg(context);
    return !(combined === Dispatchers_getInstance().h1k_1) && combined.u8(Key_instance) == null ? combined.zg(Dispatchers_getInstance().h1k_1) : combined;
  }
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().h1k_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.h1k_1 = createDefaultDispatcher();
    this.i1k_1 = Unconfined_getInstance();
    this.j1k_1 = new JsMainDispatcher(this.h1k_1, false);
    this.k1k_1 = null;
  }
  protoOf(Dispatchers).l1k = function () {
    var tmp0_elvis_lhs = this.k1k_1;
    return tmp0_elvis_lhs == null ? this.j1k_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.p1t_1 = delegate;
    this.q1t_1 = invokeImmediately;
    this.r1t_1 = this.q1t_1 ? this : new JsMainDispatcher(this.p1t_1, true);
  }
  protoOf(JsMainDispatcher).f1k = function () {
    return this.r1t_1;
  };
  protoOf(JsMainDispatcher).m1g = function (context) {
    return !this.q1t_1;
  };
  protoOf(JsMainDispatcher).n1g = function (context, block) {
    return this.p1t_1.n1g(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.g1k();
    return tmp0_elvis_lhs == null ? this.p1t_1.toString() : tmp0_elvis_lhs;
  };
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.s1t_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.s1t_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.s1t_1, this.s1t_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.s1t_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function Runnable$run$ref(p0) {
    return constructCallableReference(function () {
      p0.c1f();
      return Unit_instance;
    }, 0, 0, 12, 'run', [p0]);
  }
  function SchedulerTask() {
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.r1f_1 = this;
    this.s1f_1 = this;
    this.t1f_1 = false;
  }
  protoOf(LockFreeLinkedListNode).u1f = function (node, permissionsBitmask) {
    var prev = this.s1f_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.w1t_1 & permissionsBitmask) === 0 && prev.u1f(node, permissionsBitmask));
    } else {
      node.r1f_1 = this;
      node.s1f_1 = prev;
      prev.r1f_1 = node;
      this.s1f_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).z1h = function (forbiddenElementsBit) {
    this.u1f(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).v1f = function () {
    if (this.t1f_1)
      return false;
    var prev = this.s1f_1;
    var next = this.r1f_1;
    prev.r1f_1 = next;
    next.s1f_1 = prev;
    this.t1f_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).w1f = function (node) {
    if (!(this.r1f_1 === this))
      return false;
    this.u1f(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.w1t_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.k1h_1 = null;
  }
  protoOf(CommonThreadLocal).l1h = function () {
    return this.k1h_1;
  };
  protoOf(CommonThreadLocal).m1h = function (value) {
    this.k1h_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).n1g = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.g1e();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.o1e();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.s8(tmp$ret$1);
      return null;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = toThrowable(it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.s8(tmp$ret$1);
      return null;
    };
  }
  function propagateExceptionFinalResort(exception) {
    // Inline function 'kotlin.with' call
    throwAsyncJsError(exception.message, getKClassFromExpression(exception).o(), stackTraceToString(exception));
    return Unit_instance;
  }
  function throwAsyncJsError(message, className, stack) {
    var error = new Error();
    error.message = message;
    error.name = className;
    error.stack = stack;
    if (typeof globalThis.reportError === 'function') {
      // Up-to-date browsers and some non-browser JS runtimes (Deno, Bun)
      globalThis.reportError(error);
    } else {
      // Fallback for old browsers (pre-2022), Node.js
      setTimeout(function () {
        throw error;
      }, 0);
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).o1s = function () {
    this.v1s_1.c1t(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.c1f();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.t1c(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.v1s_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).n1g = function (context, block) {
    this.v1s_1.d1t(block);
  };
  protoOf(SetTimeoutBasedDispatcher).v1g = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).u1g = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.w1s_1 = ArrayDeque_init_$Create$();
    this.x1s_1 = 16;
    this.y1s_1 = false;
  }
  protoOf(MessageQueue).d1t = function (element) {
    this.e1t(element);
    if (!this.y1s_1) {
      this.y1s_1 = true;
      this.a1t();
    }
  };
  protoOf(MessageQueue).z1s = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.x1s_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.c1f();
        }
         while (inductionVariable < times);
    }finally {
      if (this.r()) {
        this.y1s_1 = false;
      } else {
        this.b1t();
      }
    }
  };
  protoOf(MessageQueue).e1t = function (element) {
    return this.w1s_1.b1(element);
  };
  protoOf(MessageQueue).b1 = function (element) {
    return this.e1t((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).f1t = function (index, element) {
    this.w1s_1.s2(index, element);
  };
  protoOf(MessageQueue).s2 = function (index, element) {
    return this.f1t(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).g1t = function (elements) {
    return this.w1s_1.i1(elements);
  };
  protoOf(MessageQueue).i1 = function (elements) {
    return this.g1t(elements);
  };
  protoOf(MessageQueue).q2 = function () {
    this.w1s_1.q2();
  };
  protoOf(MessageQueue).h1t = function (index, element) {
    return this.w1s_1.r2(index, element);
  };
  protoOf(MessageQueue).r2 = function (index, element) {
    return this.h1t(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t2 = function (index) {
    return this.w1s_1.t2(index);
  };
  protoOf(MessageQueue).j1 = function (index) {
    return this.w1s_1.j1(index);
  };
  protoOf(MessageQueue).j2 = function (fromIndex, toIndex) {
    return this.w1s_1.j2(fromIndex, toIndex);
  };
  protoOf(MessageQueue).r = function () {
    return this.w1s_1.r();
  };
  protoOf(MessageQueue).i1t = function (element) {
    return this.w1s_1.i2(element);
  };
  protoOf(MessageQueue).i2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.i1t((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).t = function () {
    return this.w1s_1.t();
  };
  protoOf(MessageQueue).d1 = function (index) {
    return this.w1s_1.d1(index);
  };
  protoOf(MessageQueue).e1 = function () {
    return this.w1s_1.we_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.e1u_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).d1d = function () {
    w3cClearTimeout(this.e1u_1.g1u_1, this.i1u_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.t1c(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.g1u_1 = window_0;
    this.h1u_1 = new WindowMessageQueue(this.g1u_1);
  }
  protoOf(WindowDispatcher).n1g = function (context, block) {
    return this.h1u_1.d1t(block);
  };
  protoOf(WindowDispatcher).u1g = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.g1u_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).v1g = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.g1u_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)));
  }
  function ClearTimeout(handle) {
    this.i1u_1 = handle;
  }
  protoOf(ClearTimeout).d1d = function () {
    w3cClearTimeout_0(this.i1u_1);
  };
  protoOf(ClearTimeout).c1d = function (cause) {
    this.d1d();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.i1u_1 + ']';
  };
  //region block: post-declaration
  protoOf(JobSupport).w1a = invokeOnCompletion$default;
  protoOf(JobSupport).c1b = cancel$default;
  protoOf(JobSupport).zg = plus;
  protoOf(JobSupport).u8 = get_0;
  protoOf(JobSupport).yg = fold;
  protoOf(JobSupport).xg = minusKey_0;
  protoOf(CoroutineDispatcher).u8 = get;
  protoOf(CoroutineDispatcher).xg = minusKey;
  protoOf(BufferedChannel).x1q = close$default;
  protoOf(BufferedChannel).z1q = cancel$default_0;
  protoOf(ChannelCoroutine).x1q = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.f();
  });
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = _ChannelResult___get_isClosed__impl__mg7kuu;
  _.$_$.b = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.c = Factory_getInstance;
  _.$_$.d = Key_instance_1;
  _.$_$.e = Dispatchers_getInstance;
  _.$_$.f = GlobalScope_instance;
  _.$_$.g = Key_instance_3;
  _.$_$.h = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.i = BufferOverflow_SUSPEND_getInstance;
  _.$_$.j = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.k = await_0;
  _.$_$.l = delay;
  _.$_$.m = withTimeoutOrNull;
  _.$_$.n = cancel$default_0;
  _.$_$.o = close$default;
  _.$_$.p = ChannelResult;
  _.$_$.q = Channel;
  _.$_$.r = ClosedReceiveChannelException;
  _.$_$.s = ClosedSendChannelException;
  _.$_$.t = ProducerScope;
  _.$_$.u = ReceiveChannel;
  _.$_$.v = SendChannel;
  _.$_$.w = cancelConsumed;
  _.$_$.x = produce;
  _.$_$.y = recoverStackTrace;
  _.$_$.z = startCoroutineCancellable;
  _.$_$.a1 = CancellableContinuationImpl;
  _.$_$.b1 = CancellationException_0;
  _.$_$.c1 = CompletableDeferred;
  _.$_$.d1 = CompletableJob;
  _.$_$.e1 = CopyableThrowable;
  _.$_$.f1 = CoroutineDispatcher;
  _.$_$.g1 = CoroutineName;
  _.$_$.h1 = CoroutineScope_0;
  _.$_$.i1 = CoroutineScope;
  _.$_$.j1 = DisposableHandle;
  _.$_$.k1 = Job_0;
  _.$_$.l1 = SupervisorJob;
  _.$_$.m1 = async;
  _.$_$.n1 = cancel;
  _.$_$.o1 = cancel_2;
  _.$_$.p1 = cancel_0;
  _.$_$.q1 = cancel_1;
  _.$_$.r1 = get_job;
  _.$_$.s1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
