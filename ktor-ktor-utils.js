(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-utils'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-utils'.");
    }
    globalThis['ktor-ktor-utils'] = factory(typeof globalThis['ktor-ktor-utils'] === 'undefined' ? {} : globalThis['ktor-ktor-utils'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f5;
  var arrayOf = kotlin_kotlin.$_$.ah;
  var createKType = kotlin_kotlin.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.q5;
  var VOID = kotlin_kotlin.$_$.h;
  var isBlank = kotlin_kotlin.$_$.zd;
  var toString = kotlin_kotlin.$_$.nc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var protoOf = kotlin_kotlin.$_$.jc;
  var getStringHashCode = kotlin_kotlin.$_$.gb;
  var THROW_CCE = kotlin_kotlin.$_$.mg;
  var initMetadataForClass = kotlin_kotlin.$_$.ib;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var numberToChar = kotlin_kotlin.$_$.fc;
  var indexOf = kotlin_kotlin.$_$.yd;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var to = kotlin_kotlin.$_$.qh;
  var CoroutineImpl = kotlin_kotlin.$_$.ga;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var isInterface = kotlin_kotlin.$_$.xb;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.p9;
  var initMetadataForLambda = kotlin_kotlin.$_$.nb;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.e;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var listOf = kotlin_kotlin.$_$.i8;
  var awaitAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.ia;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var equals = kotlin_kotlin.$_$.bb;
  var hashCode = kotlin_kotlin.$_$.hb;
  var asJsMapView = kotlin_kotlin.$_$.h6;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.c6;
  var KtMutableMap = kotlin_kotlin.$_$.i6;
  var ensureNotNull = kotlin_kotlin.$_$.eh;
  var Entry = kotlin_kotlin.$_$.b6;
  var toString_0 = kotlin_kotlin.$_$.ph;
  var MutableEntry = kotlin_kotlin.$_$.g6;
  var charArray = kotlin_kotlin.$_$.va;
  var charSequenceGet = kotlin_kotlin.$_$.wa;
  var toString_1 = kotlin_kotlin.$_$.g3;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.u9;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CoroutineExceptionHandler = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var MutableIterator = kotlin_kotlin.$_$.e6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.p;
  var toSet = kotlin_kotlin.$_$.i9;
  var KtSet = kotlin_kotlin.$_$.m6;
  var asJsSetView = kotlin_kotlin.$_$.j6;
  var asJsReadonlySetView = kotlin_kotlin.$_$.l6;
  var KtMutableSet = kotlin_kotlin.$_$.k6;
  var THROW_IAE = kotlin_kotlin.$_$.ng;
  var enumEntries = kotlin_kotlin.$_$.na;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var Enum = kotlin_kotlin.$_$.cg;
  var initMetadataForCompanion = kotlin_kotlin.$_$.jb;
  var firstOrNull = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.y;
  var KtMap = kotlin_kotlin.$_$.d6;
  var addAll = kotlin_kotlin.$_$.n6;
  var emptySet = kotlin_kotlin.$_$.q7;
  var emptyMap = kotlin_kotlin.$_$.p7;
  var getBooleanHashCode = kotlin_kotlin.$_$.eb;
  var toList = kotlin_kotlin.$_$.e9;
  var charSequenceLength = kotlin_kotlin.$_$.xa;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.i1;
  var get_lastIndex = kotlin_kotlin.$_$.ee;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.z2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.d3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.f3;
  var equals_0 = kotlin_kotlin.$_$.ud;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var Long = kotlin_kotlin.$_$.hg;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var objectCreate = kotlin_kotlin.$_$.ic;
  var Comparable = kotlin_kotlin.$_$.yf;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var getKClassFromExpression = kotlin_kotlin.$_$.e;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.kb;
  var KtMutableList = kotlin_kotlin.$_$.f6;
  var toMutableList = kotlin_kotlin.$_$.h9;
  var ArrayList = kotlin_kotlin.$_$.r5;
  var emptyList = kotlin_kotlin.$_$.o7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.e8;
  var last = kotlin_kotlin.$_$.g8;
  var mutableListOf = kotlin_kotlin.$_$.l8;
  var KtList = kotlin_kotlin.$_$.a6;
  var joinToString = kotlin_kotlin.$_$.b8;
  var toString_2 = kotlin_kotlin.$_$.hf;
  var extendThrowable = kotlin_kotlin.$_$.cb;
  var captureStack = kotlin_kotlin.$_$.ta;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var getKClass = kotlin_kotlin.$_$.f;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.w4;
  var Continuation = kotlin_kotlin.$_$.z9;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.h3;
  var createFailure = kotlin_kotlin.$_$.dh;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.i3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.j3;
  var fillArrayVal = kotlin_kotlin.$_$.db;
  var intercepted = kotlin_kotlin.$_$.s9;
  var KProperty1 = kotlin_kotlin.$_$.bd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.fb;
  var lazy = kotlin_kotlin.$_$.kh;
  var isNaN_0 = kotlin_kotlin.$_$.ih;
  var numberToLong = kotlin_kotlin.$_$.hc;
  var IllegalStateException = kotlin_kotlin.$_$.gg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var KProperty0 = kotlin_kotlin.$_$.ad;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lh;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(AttributeKey, 'AttributeKey');
  function get(key) {
    var tmp0_elvis_lhs = this.getOrNull_6mjt1v_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function take(key) {
    // Inline function 'kotlin.also' call
    var this_0 = this.get_r696p5_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.take.<anonymous>' call
    this.remove_2btyex_k$(key);
    return this_0;
  }
  function takeOrNull(key) {
    // Inline function 'kotlin.also' call
    var this_0 = this.getOrNull_6mjt1v_k$(key);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.Attributes.takeOrNull.<anonymous>' call
    this.remove_2btyex_k$(key);
    return this_0;
  }
  initMetadataForInterface(Attributes, 'Attributes');
  initMetadataForLambda(split$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(split$slambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(split$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(CaseInsensitiveMap, 'CaseInsensitiveMap', CaseInsensitiveMap, VOID, [KtMutableMap]);
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [MutableEntry]);
  initMetadataForClass(_no_name_provided__qut3iv, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  initMetadataForClass(DelegatingMutableSet$iterator$1, VOID, VOID, VOID, [MutableIterator]);
  initMetadataForClass(DelegatingMutableSet, 'DelegatingMutableSet', VOID, VOID, [KtMutableSet]);
  initMetadataForClass(Platform, 'Platform');
  initMetadataForObject(Jvm, 'Jvm', VOID, Platform);
  initMetadataForObject(Native, 'Native', VOID, Platform);
  initMetadataForClass(Js, 'Js', VOID, Platform);
  initMetadataForClass(WasmJs, 'WasmJs', VOID, Platform);
  initMetadataForClass(JsPlatform, 'JsPlatform', VOID, Enum);
  initMetadataForObject(PlatformUtils, 'PlatformUtils');
  initMetadataForCompanion(Companion);
  function get_0(name) {
    var tmp0_safe_receiver = this.getAll_ffxf4h_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function contains(name) {
    return !(this.getAll_ffxf4h_k$(name) == null);
  }
  function contains_0(name, value) {
    var tmp0_safe_receiver = this.getAll_ffxf4h_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_aljjnj_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function forEach(body) {
    var tmp0_iterator = this.entries_qbkxv4_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      body(k, v);
    }
    return Unit_getInstance();
  }
  initMetadataForInterface(StringValues, 'StringValues');
  initMetadataForInterface(StringValuesBuilder, 'StringValuesBuilder');
  initMetadataForClass(StringValuesBuilderImpl, 'StringValuesBuilderImpl', StringValuesBuilderImpl, VOID, [StringValuesBuilder]);
  initMetadataForClass(StringValuesImpl, 'StringValuesImpl', StringValuesImpl, VOID, [StringValues]);
  initMetadataForClass(CaseInsensitiveString, 'CaseInsensitiveString');
  initMetadataForClass(CopyOnWriteHashMap, 'CopyOnWriteHashMap', CopyOnWriteHashMap);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GMTDate, 'GMTDate', VOID, VOID, [Comparable], VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(WeekDay, 'WeekDay', VOID, Enum);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Month, 'Month', VOID, Enum);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(OpDescriptor, 'OpDescriptor');
  initMetadataForClass(PrepareOp, 'PrepareOp', VOID, OpDescriptor);
  initMetadataForClass(AtomicOp, 'AtomicOp', VOID, OpDescriptor);
  initMetadataForClass(CondAddOp, 'CondAddOp', VOID, AtomicOp);
  initMetadataForClass(AtomicDesc, 'AtomicDesc');
  initMetadataForClass(AbstractAtomicDesc, 'AbstractAtomicDesc', VOID, AtomicDesc);
  initMetadataForClass(AddLastDesc, 'AddLastDesc', VOID, AbstractAtomicDesc);
  initMetadataForClass(RemoveFirstDesc, 'RemoveFirstDesc', VOID, AbstractAtomicDesc);
  initMetadataForClass(LockFreeLinkedListNode$makeCondAddOp$1, VOID, VOID, CondAddOp);
  initMetadataForClass(_no_name_provided__qut3iv_0, VOID, VOID, CondAddOp);
  initMetadataForClass(_no_name_provided__qut3iv_1, VOID, VOID, CondAddOp);
  initMetadataForClass(LockFreeLinkedListNode$describeRemove$1, VOID, VOID, AbstractAtomicDesc);
  initMetadataForClass(Removed, 'Removed');
  initMetadataForCoroutine($proceedLoopCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(PipelineContext, 'PipelineContext', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForClass(DebugPipelineContext, 'DebugPipelineContext', VOID, PipelineContext, VOID, [1, 0]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(PhaseContent, 'PhaseContent');
  initMetadataForClass(Pipeline, 'Pipeline', VOID, VOID, VOID, [2]);
  initMetadataForClass(PipelinePhase, 'PipelinePhase');
  initMetadataForClass(InvalidPhaseException, 'InvalidPhaseException', VOID, Error);
  initMetadataForClass(PipelinePhaseRelation, 'PipelinePhaseRelation');
  initMetadataForClass(After, 'After', VOID, PipelinePhaseRelation);
  initMetadataForClass(Before, 'Before', VOID, PipelinePhaseRelation);
  initMetadataForObject(Last, 'Last', VOID, PipelinePhaseRelation);
  initMetadataForObject(StackWalkingFailed, 'StackWalkingFailed');
  initMetadataForInterface(CoroutineStackFrame, 'CoroutineStackFrame');
  initMetadataForObject(StackWalkingFailedFrame, 'StackWalkingFailedFrame', VOID, VOID, [CoroutineStackFrame, Continuation]);
  initMetadataForClass(SuspendFunctionGun$continuation$1, VOID, VOID, VOID, [Continuation, CoroutineStackFrame]);
  initMetadataForClass(SuspendFunctionGun, 'SuspendFunctionGun', VOID, PipelineContext, VOID, [0, 1]);
  initMetadataForClass(TypeInfo, 'TypeInfo');
  initMetadataForClass(InvalidTimestampException, 'InvalidTimestampException', VOID, IllegalStateException);
  initMetadataForClass(AttributesJs, 'AttributesJs', AttributesJs, VOID, [Attributes]);
  initMetadataForInterface(Logger, 'Logger');
  initMetadataForClass(KtorSimpleLogger$1, VOID, VOID, VOID, [Logger]);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  initMetadataForInterface(Type, 'Type');
  //endregion
  function _get_type__deia8h($this) {
    return $this.type_1;
  }
  function component2($this) {
    return $this.type_1;
  }
  function AttributeKey(name, type) {
    var tmp;
    if (type === VOID) {
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), arrayOf([]), false);
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
      var tmp$ret$0 = tmp_1;
      tmp = new TypeInfo(tmp_0, tmp$ret$0);
    } else {
      tmp = type;
    }
    type = tmp;
    this.name_1 = name;
    this.type_1 = type;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.name_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(this_0)) {
      // Inline function 'io.ktor.util.AttributeKey.<anonymous>' call
      var message = "Name can't be blank";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(AttributeKey).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(AttributeKey).toString = function () {
    return 'AttributeKey: ' + this.name_1;
  };
  protoOf(AttributeKey).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(AttributeKey).copy_8htmhc_k$ = function (name, type) {
    return new AttributeKey(name, type);
  };
  protoOf(AttributeKey).copy$default_2hzojo_k$ = function (name, type, $super) {
    name = name === VOID ? this.name_1 : name;
    type = type === VOID ? this.type_1 : type;
    return $super === VOID ? this.copy_8htmhc_k$(name, type) : $super.copy_8htmhc_k$.call(this, name, type);
  };
  protoOf(AttributeKey).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + this.type_1.hashCode() | 0;
    return result;
  };
  protoOf(AttributeKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AttributeKey))
      return false;
    var tmp0_other_with_cast = other instanceof AttributeKey ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!this.type_1.equals(tmp0_other_with_cast.type_1))
      return false;
    return true;
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = other.get_allKeys_dton90_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.put_gkntno_k$(element instanceof AttributeKey ? element : THROW_CCE(), other.get_r696p5_k$(element));
    }
  }
  function get_BASE64_INVERSE_ALPHABET() {
    _init_properties_Base64_kt__ymmsz3();
    return BASE64_INVERSE_ALPHABET;
  }
  var BASE64_INVERSE_ALPHABET;
  var properties_initialized_Base64_kt_5g824v;
  function _init_properties_Base64_kt__ymmsz3() {
    if (!properties_initialized_Base64_kt_5g824v) {
      properties_initialized_Base64_kt_5g824v = true;
      var tmp = 0;
      var tmp_0 = new Int32Array(256);
      while (tmp < 256) {
        var tmp_1 = tmp;
        tmp_0[tmp_1] = indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', numberToChar(tmp_1));
        tmp = tmp + 1 | 0;
      }
      BASE64_INVERSE_ALPHABET = tmp_0;
    }
  }
  function split(_this__u8e3s4, coroutineScope) {
    var first = new ByteChannel(true);
    var second = new ByteChannel(true);
    var tmp = launch(coroutineScope, VOID, VOID, split$slambda_0(_this__u8e3s4, first, second, null));
    tmp.invokeOnCompletion_n6cffu_k$(split$lambda(first, second));
    return to(first, second);
  }
  function split$slambda$slambda($first, $buffer, $read, resultContinuation) {
    this.$first_1 = $first;
    this.$buffer_1 = $buffer;
    this.$read_1 = $read;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(split$slambda$slambda).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(split$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(split$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = writeFully(this.$first_1, this.$buffer_1, 0, this.$read_1, this);
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
  protoOf(split$slambda$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new split$slambda$slambda(this.$first_1, this.$buffer_1, this.$read_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(split$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function split$slambda$slambda_0($first, $buffer, $read, resultContinuation) {
    var i = new split$slambda$slambda($first, $buffer, $read, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function split$slambda$slambda_1($second, $buffer, $read, resultContinuation) {
    this.$second_1 = $second;
    this.$buffer_1 = $buffer;
    this.$read_1 = $read;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(split$slambda$slambda_1).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(split$slambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(split$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = writeFully(this.$second_1, this.$buffer_1, 0, this.$read_1, this);
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
  protoOf(split$slambda$slambda_1).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new split$slambda$slambda_1(this.$second_1, this.$buffer_1, this.$read_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(split$slambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function split$slambda$slambda_2($second, $buffer, $read, resultContinuation) {
    var i = new split$slambda$slambda_1($second, $buffer, $read, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function split$slambda($this_split, $first, $second, resultContinuation) {
    this.$this_split_1 = $this_split;
    this.$first_1 = $first;
    this.$second_1 = $second;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(split$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(split$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(split$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.buffer0__1 = get_ByteArrayPool().borrow_mvkpor_k$();
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_fex74n_k$(8);
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!!this.$this_split_1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            suspendResult = readAvailable(this.$this_split_1, this.buffer0__1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.read2__1 = suspendResult;
            if (this.read2__1 <= 0) {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            var tmp_0 = async(this.$this$launch_1, VOID, VOID, split$slambda$slambda_0(this.$first_1, this.buffer0__1, this.read2__1, null));
            suspendResult = awaitAll(listOf([tmp_0, async(this.$this$launch_1, VOID, VOID, split$slambda$slambda_2(this.$second_1, this.buffer0__1, this.read2__1, null))]), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 6:
            var tmp_1 = this;
            var tmp0_safe_receiver = this.$this_split_1.get_closedCause_o1qcj8_k$();
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              throw tmp0_safe_receiver;
            }

            tmp_1.tmp$ret$01__1 = tmp_2;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(10);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_3 = this.get_exception_x0n6w6_k$();
            if (tmp_3 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_4 = this;
              this.$this_split_1.cancel_9i2dv0_k$(cause);
              this.$first_1.cancel_9i2dv0_k$(cause);
              this.$second_1.cancel_9i2dv0_k$(cause);
              tmp_4.tmp$ret$01__1 = Unit_getInstance();
              this.set_exceptionState_fex74n_k$(9);
              this.set_state_rjd8d0_k$(10);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            get_ByteArrayPool().recycle_d2xv5h_k$(this.buffer0__1);
            this.$first_1.close_yn9xrc_k$();
            this.$second_1.close_yn9xrc_k$();
            throw t;
          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            this.tmp$ret$01__1;
            this.set_exceptionState_fex74n_k$(9);
            get_ByteArrayPool().recycle_d2xv5h_k$(this.buffer0__1);
            this.$first_1.close_yn9xrc_k$();
            this.$second_1.close_yn9xrc_k$();
            return Unit_getInstance();
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
  protoOf(split$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new split$slambda(this.$this_split_1, this.$first_1, this.$second_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(split$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function split$slambda_0($this_split, $first, $second, resultContinuation) {
    var i = new split$slambda($this_split, $first, $second, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function split$lambda($first, $second) {
    return function (it) {
      if (it == null)
        return Unit_getInstance();
      $first.cancel_9i2dv0_k$(it);
      $second.cancel_9i2dv0_k$(it);
      return Unit_getInstance();
    };
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$DelegatingMutableSet) {
    return $this$DelegatingMutableSet.get_content_h02jrk_k$();
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$DelegatingMutableSet) {
    return caseInsensitive($this$DelegatingMutableSet);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$DelegatingMutableSet) {
    return new Entry_0($this$DelegatingMutableSet.get_key_18j28a_k$().get_content_h02jrk_k$(), $this$DelegatingMutableSet.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$DelegatingMutableSet) {
    return new Entry_0(caseInsensitive($this$DelegatingMutableSet.get_key_18j28a_k$()), $this$DelegatingMutableSet.get_value_j01efc_k$());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.delegate_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CaseInsensitiveMap).get_size_woubt6_k$ = function () {
    return this.delegate_1.get_size_woubt6_k$();
  };
  protoOf(CaseInsensitiveMap).containsKey_w445h6_k$ = function (key) {
    return this.delegate_1.containsKey_aw81wo_k$(new CaseInsensitiveString(key));
  };
  protoOf(CaseInsensitiveMap).containsKey_aw81wo_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.containsKey_w445h6_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).containsValue_600k0x_k$ = function (value) {
    return this.delegate_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(CaseInsensitiveMap).containsValue_yf2ykl_k$ = function (value) {
    if (!!(value == null))
      return false;
    return this.containsValue_600k0x_k$(!(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).get_6bo4tg_k$ = function (key) {
    return this.delegate_1.get_wei43m_k$(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).get_wei43m_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.get_6bo4tg_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(CaseInsensitiveMap).clear_j9egeb_k$ = function () {
    this.delegate_1.clear_j9egeb_k$();
  };
  protoOf(CaseInsensitiveMap).put_1pa1tm_k$ = function (key, value) {
    return this.delegate_1.put_4fpzoq_k$(caseInsensitive(key), value);
  };
  protoOf(CaseInsensitiveMap).put_4fpzoq_k$ = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.put_1pa1tm_k$(tmp, !(value == null) ? value : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).putAll_qpg2h7_k$ = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = from.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      this.put_1pa1tm_k$(key, value);
    }
  };
  protoOf(CaseInsensitiveMap).putAll_wgg6cj_k$ = function (from) {
    return this.putAll_qpg2h7_k$(from);
  };
  protoOf(CaseInsensitiveMap).remove_z05dva_k$ = function (key) {
    return this.delegate_1.remove_gppy8k_k$(caseInsensitive(key));
  };
  protoOf(CaseInsensitiveMap).remove_gppy8k_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.remove_z05dva_k$((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(CaseInsensitiveMap).get_keys_wop4xp_k$ = function () {
    var tmp = this.delegate_1.get_keys_wop4xp_k$();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  protoOf(CaseInsensitiveMap).get_entries_p20ztl_k$ = function () {
    var tmp = this.delegate_1.get_entries_p20ztl_k$();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  protoOf(CaseInsensitiveMap).get_values_ksazhn_k$ = function () {
    return this.delegate_1.get_values_ksazhn_k$();
  };
  protoOf(CaseInsensitiveMap).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.delegate_1, this.delegate_1);
  };
  protoOf(CaseInsensitiveMap).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  function Entry_0(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  protoOf(Entry_0).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry_0).set_value_o0o1ki_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(Entry_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Entry_0).setValue_ck2iw3_k$ = function (newValue) {
    this.value_1 = newValue;
    return this.value_1;
  };
  protoOf(Entry_0).setValue_9cjski_k$ = function (newValue) {
    return this.setValue_ck2iw3_k$((newValue == null ? true : !(newValue == null)) ? newValue : THROW_CCE());
  };
  protoOf(Entry_0).hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.key_1)) | 0) + hashCode(ensureNotNull(this.value_1)) | 0;
  };
  protoOf(Entry_0).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.get_key_18j28a_k$(), this.key_1) && equals(other.get_value_j01efc_k$(), this.value_1);
  };
  protoOf(Entry_0).toString = function () {
    return toString_0(this.key_1) + '=' + toString_0(this.value_1);
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    // Inline function 'kotlin.text.lowercaseChar' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = toString_1(_this__u8e3s4).toLowerCase();
    return charSequenceGet(tmp$ret$2, 0) === _this__u8e3s4;
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    parent = parent === VOID ? null : parent;
    var tmp = SupervisorJob(parent);
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    var tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.plus_s13ygv_k$(tmp$ret$0);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(_no_name_provided__qut3iv).handleException_e679jj_k$ = function (context, exception) {
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    return Unit_getInstance();
  };
  function get_digits() {
    _init_properties_Crypto_kt__txayzl();
    return digits;
  }
  var digits;
  var properties_initialized_Crypto_kt_8g5vqb;
  function _init_properties_Crypto_kt__txayzl() {
    if (!properties_initialized_Crypto_kt_8g5vqb) {
      properties_initialized_Crypto_kt_8g5vqb = true;
      digits = toCharArray('0123456789abcdef');
    }
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_1;
  }
  function _get_convertTo__c5vn9f($this) {
    return $this.convertTo_1;
  }
  function _get_convert__pt3sfy($this) {
    return $this.convert_1;
  }
  function DelegatingMutableSet$iterator$1(this$0) {
    this.this$0__1 = this$0;
    this.delegateIterator_1 = this$0.delegate_1.iterator_jk1svi_k$();
  }
  protoOf(DelegatingMutableSet$iterator$1).get_delegateIterator_k9fnq4_k$ = function () {
    return this.delegateIterator_1;
  };
  protoOf(DelegatingMutableSet$iterator$1).hasNext_bitz1p_k$ = function () {
    return this.delegateIterator_1.hasNext_bitz1p_k$();
  };
  protoOf(DelegatingMutableSet$iterator$1).next_20eer_k$ = function () {
    return this.this$0__1.convertTo_1(this.delegateIterator_1.next_20eer_k$());
  };
  protoOf(DelegatingMutableSet$iterator$1).remove_ldkf9o_k$ = function () {
    return this.delegateIterator_1.remove_ldkf9o_k$();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.delegate_1 = delegate;
    this.convertTo_1 = convertTo;
    this.convert_1 = convert;
    this.size_1 = this.delegate_1.get_size_woubt6_k$();
  }
  protoOf(DelegatingMutableSet).convert_rdtx1s_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      var tmp$ret$0 = this.convert_1(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).convertTo_cf3uxo_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      var tmp$ret$0 = this.convertTo_1(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(DelegatingMutableSet).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(DelegatingMutableSet).add_nwq4bv_k$ = function (element) {
    return this.delegate_1.add_utx5q5_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).add_utx5q5_k$ = function (element) {
    return this.add_nwq4bv_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).addAll_xe9a4x_k$ = function (elements) {
    return this.delegate_1.addAll_4lagoh_k$(this.convert_rdtx1s_k$(elements));
  };
  protoOf(DelegatingMutableSet).addAll_4lagoh_k$ = function (elements) {
    return this.addAll_xe9a4x_k$(elements);
  };
  protoOf(DelegatingMutableSet).clear_j9egeb_k$ = function () {
    this.delegate_1.clear_j9egeb_k$();
  };
  protoOf(DelegatingMutableSet).remove_xcbstq_k$ = function (element) {
    return this.delegate_1.remove_cedx0m_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).remove_cedx0m_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.remove_xcbstq_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).removeAll_raap70_k$ = function (elements) {
    return this.delegate_1.removeAll_y0z8pe_k$(toSet(this.convert_rdtx1s_k$(elements)));
  };
  protoOf(DelegatingMutableSet).removeAll_y0z8pe_k$ = function (elements) {
    return this.removeAll_raap70_k$(elements);
  };
  protoOf(DelegatingMutableSet).retainAll_owub5h_k$ = function (elements) {
    return this.delegate_1.retainAll_9fhiib_k$(toSet(this.convert_rdtx1s_k$(elements)));
  };
  protoOf(DelegatingMutableSet).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_owub5h_k$(elements);
  };
  protoOf(DelegatingMutableSet).contains_z23g47_k$ = function (element) {
    return this.delegate_1.contains_aljjnj_k$(this.convert_1(element));
  };
  protoOf(DelegatingMutableSet).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_z23g47_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(DelegatingMutableSet).containsAll_crj6r5_k$ = function (elements) {
    return this.delegate_1.containsAll_xk45sd_k$(this.convert_rdtx1s_k$(elements));
  };
  protoOf(DelegatingMutableSet).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_crj6r5_k$(elements);
  };
  protoOf(DelegatingMutableSet).isEmpty_y1axqb_k$ = function () {
    return this.delegate_1.isEmpty_y1axqb_k$();
  };
  protoOf(DelegatingMutableSet).iterator_jk1svi_k$ = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  protoOf(DelegatingMutableSet).hashCode = function () {
    return hashCode(this.delegate_1);
  };
  protoOf(DelegatingMutableSet).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, KtSet) : false);
    }
    if (tmp)
      return false;
    var elements = this.convertTo_cf3uxo_k$(this.delegate_1);
    var tmp_0;
    if (other.containsAll_xk45sd_k$(elements)) {
      // Inline function 'kotlin.collections.containsAll' call
      tmp_0 = elements.containsAll_xk45sd_k$(other);
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(DelegatingMutableSet).toString = function () {
    return toString(this.convertTo_cf3uxo_k$(this.delegate_1));
  };
  var JsPlatform_Browser_instance;
  var JsPlatform_Node_instance;
  function values() {
    return [JsPlatform_Browser_getInstance(), JsPlatform_Node_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Browser':
        return JsPlatform_Browser_getInstance();
      case 'Node':
        return JsPlatform_Node_getInstance();
      default:
        JsPlatform_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var JsPlatform_entriesInitialized;
  function JsPlatform_initEntries() {
    if (JsPlatform_entriesInitialized)
      return Unit_getInstance();
    JsPlatform_entriesInitialized = true;
    JsPlatform_Browser_instance = new JsPlatform('Browser', 0);
    JsPlatform_Node_instance = new JsPlatform('Node', 1);
  }
  var $ENTRIES;
  function Jvm() {
    Jvm_instance = this;
    Platform.call(this);
  }
  protoOf(Jvm).toString = function () {
    return 'Jvm';
  };
  protoOf(Jvm).hashCode = function () {
    return 1051825272;
  };
  protoOf(Jvm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Jvm))
      return false;
    other instanceof Jvm || THROW_CCE();
    return true;
  };
  var Jvm_instance;
  function Jvm_getInstance() {
    if (Jvm_instance == null)
      new Jvm();
    return Jvm_instance;
  }
  function Native() {
    Native_instance = this;
    Platform.call(this);
  }
  protoOf(Native).toString = function () {
    return 'Native';
  };
  protoOf(Native).hashCode = function () {
    return -1059277600;
  };
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Native))
      return false;
    other instanceof Native || THROW_CCE();
    return true;
  };
  var Native_instance;
  function Native_getInstance() {
    if (Native_instance == null)
      new Native();
    return Native_instance;
  }
  function Js(jsPlatform) {
    Platform.call(this);
    this.jsPlatform_1 = jsPlatform;
  }
  protoOf(Js).get_jsPlatform_5jelcr_k$ = function () {
    return this.jsPlatform_1;
  };
  protoOf(Js).component1_7eebsc_k$ = function () {
    return this.jsPlatform_1;
  };
  protoOf(Js).copy_a857ft_k$ = function (jsPlatform) {
    return new Js(jsPlatform);
  };
  protoOf(Js).copy$default_jdnrje_k$ = function (jsPlatform, $super) {
    jsPlatform = jsPlatform === VOID ? this.jsPlatform_1 : jsPlatform;
    return $super === VOID ? this.copy_a857ft_k$(jsPlatform) : $super.copy_a857ft_k$.call(this, jsPlatform);
  };
  protoOf(Js).toString = function () {
    return 'Js(jsPlatform=' + this.jsPlatform_1.toString() + ')';
  };
  protoOf(Js).hashCode = function () {
    return this.jsPlatform_1.hashCode();
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    var tmp0_other_with_cast = other instanceof Js ? other : THROW_CCE();
    if (!this.jsPlatform_1.equals(tmp0_other_with_cast.jsPlatform_1))
      return false;
    return true;
  };
  function WasmJs(jsPlatform) {
    Platform.call(this);
    this.jsPlatform_1 = jsPlatform;
  }
  protoOf(WasmJs).get_jsPlatform_5jelcr_k$ = function () {
    return this.jsPlatform_1;
  };
  protoOf(WasmJs).component1_7eebsc_k$ = function () {
    return this.jsPlatform_1;
  };
  protoOf(WasmJs).copy_a857ft_k$ = function (jsPlatform) {
    return new WasmJs(jsPlatform);
  };
  protoOf(WasmJs).copy$default_gsar2_k$ = function (jsPlatform, $super) {
    jsPlatform = jsPlatform === VOID ? this.jsPlatform_1 : jsPlatform;
    return $super === VOID ? this.copy_a857ft_k$(jsPlatform) : $super.copy_a857ft_k$.call(this, jsPlatform);
  };
  protoOf(WasmJs).toString = function () {
    return 'WasmJs(jsPlatform=' + this.jsPlatform_1.toString() + ')';
  };
  protoOf(WasmJs).hashCode = function () {
    return this.jsPlatform_1.hashCode();
  };
  protoOf(WasmJs).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WasmJs))
      return false;
    var tmp0_other_with_cast = other instanceof WasmJs ? other : THROW_CCE();
    if (!this.jsPlatform_1.equals(tmp0_other_with_cast.jsPlatform_1))
      return false;
    return true;
  };
  function JsPlatform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsPlatform_Browser_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Browser_instance;
  }
  function JsPlatform_Node_getInstance() {
    JsPlatform_initEntries();
    return JsPlatform_Node_instance;
  }
  function Platform() {
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var platform = get_platform(this);
    var tmp_0;
    if (platform instanceof Js) {
      tmp_0 = platform.jsPlatform_1.equals(JsPlatform_Browser_getInstance());
    } else {
      if (platform instanceof WasmJs) {
        tmp_0 = platform.jsPlatform_1.equals(JsPlatform_Browser_getInstance());
      } else {
        tmp_0 = false;
      }
    }
    tmp.IS_BROWSER_1 = tmp_0;
    var tmp_1 = this;
    var platform_0 = get_platform(this);
    var tmp_2;
    if (platform_0 instanceof Js) {
      tmp_2 = platform_0.jsPlatform_1.equals(JsPlatform_Node_getInstance());
    } else {
      if (platform_0 instanceof WasmJs) {
        tmp_2 = platform_0.jsPlatform_1.equals(JsPlatform_Node_getInstance());
      } else {
        tmp_2 = false;
      }
    }
    tmp_1.IS_NODE_1 = tmp_2;
    var tmp_3 = this;
    var tmp_4 = get_platform(this);
    tmp_3.IS_JS_1 = tmp_4 instanceof Js;
    var tmp_5 = this;
    var tmp_6 = get_platform(this);
    tmp_5.IS_WASM_JS_1 = tmp_6 instanceof WasmJs;
    this.IS_JVM_1 = equals(get_platform(this), Jvm_getInstance());
    this.IS_NATIVE_1 = equals(get_platform(this), Native_getInstance());
    this.IS_DEVELOPMENT_MODE_1 = get_isDevelopmentMode(this);
    this.IS_NEW_MM_ENABLED_1 = get_isNewMemoryModel(this);
  }
  protoOf(PlatformUtils).get_IS_BROWSER_e36mbg_k$ = function () {
    return this.IS_BROWSER_1;
  };
  protoOf(PlatformUtils).get_IS_NODE_myvmya_k$ = function () {
    return this.IS_NODE_1;
  };
  protoOf(PlatformUtils).get_IS_JS_ib1f85_k$ = function () {
    return this.IS_JS_1;
  };
  protoOf(PlatformUtils).get_IS_WASM_JS_u7btx4_k$ = function () {
    return this.IS_WASM_JS_1;
  };
  protoOf(PlatformUtils).get_IS_JVM_qobnv_k$ = function () {
    return this.IS_JVM_1;
  };
  protoOf(PlatformUtils).get_IS_NATIVE_hc2lur_k$ = function () {
    return this.IS_NATIVE_1;
  };
  protoOf(PlatformUtils).get_IS_DEVELOPMENT_MODE_4qw7yr_k$ = function () {
    return this.IS_DEVELOPMENT_MODE_1;
  };
  protoOf(PlatformUtils).get_IS_NEW_MM_ENABLED_wrrkbx_k$ = function () {
    return this.IS_NEW_MM_ENABLED_1;
  };
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function Companion() {
    Companion_instance = this;
    this.Empty_1 = new StringValuesImpl();
  }
  protoOf(Companion).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  protoOf(Companion).build_cztl77_k$ = function (caseInsensitiveName, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new StringValuesBuilderImpl(caseInsensitiveName);
    // Inline function 'kotlin.contracts.contract' call
    builder(this_0);
    return this_0.build_1k0s4u_k$();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.values_1.get_wei43m_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.collections.mutableListOf' call
      var this_0 = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.validateName_mv1fw7_k$(name);
      // Inline function 'kotlin.collections.set' call
      $this.values_1.put_4fpzoq_k$(name, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.appendAll_ytnfgb_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl$appendMissing$lambda(this$0) {
    return function (name, values) {
      this$0.appendMissing_dlfvfk_k$(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    size = size === VOID ? 8 : size;
    this.caseInsensitiveName_1 = caseInsensitiveName;
    this.values_1 = this.caseInsensitiveName_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  protoOf(StringValuesBuilderImpl).get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  protoOf(StringValuesBuilderImpl).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(StringValuesBuilderImpl).getAll_ffxf4h_k$ = function (name) {
    return this.values_1.get_wei43m_k$(name);
  };
  protoOf(StringValuesBuilderImpl).contains_zh0gsb_k$ = function (name) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.values_1;
    return (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(name);
  };
  protoOf(StringValuesBuilderImpl).contains_7gmd9b_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_wei43m_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_aljjnj_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesBuilderImpl).names_1q9mbs_k$ = function () {
    return this.values_1.get_keys_wop4xp_k$();
  };
  protoOf(StringValuesBuilderImpl).isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  protoOf(StringValuesBuilderImpl).entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  protoOf(StringValuesBuilderImpl).set_j87cuq_k$ = function (name, value) {
    this.validateValue_x1igun_k$(value);
    var list = ensureListForKey(this, name);
    list.clear_j9egeb_k$();
    list.add_utx5q5_k$(value);
  };
  protoOf(StringValuesBuilderImpl).get_6bo4tg_k$ = function (name) {
    var tmp0_safe_receiver = this.getAll_ffxf4h_k$(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesBuilderImpl).append_rhug0a_k$ = function (name, value) {
    this.validateValue_x1igun_k$(value);
    ensureListForKey(this, name).add_utx5q5_k$(value);
  };
  protoOf(StringValuesBuilderImpl).appendAll_k8dlt1_k$ = function (stringValues) {
    stringValues.forEach_jocloe_k$(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).appendMissing_74a134_k$ = function (stringValues) {
    stringValues.forEach_jocloe_k$(StringValuesBuilderImpl$appendMissing$lambda(this));
  };
  protoOf(StringValuesBuilderImpl).appendAll_ytnfgb_k$ = function (name, values) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>' call
    var list = ensureListForKey(this, name);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.validateValue_x1igun_k$(element);
    }
    addAll(list, values);
  };
  protoOf(StringValuesBuilderImpl).appendMissing_dlfvfk_k$ = function (name, values) {
    var tmp0_safe_receiver = this.values_1.get_wei43m_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toSet(tmp0_safe_receiver);
    var existing = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendMissing.<anonymous>' call
      if (!existing.contains_aljjnj_k$(element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    this.appendAll_ytnfgb_k$(name, destination);
  };
  protoOf(StringValuesBuilderImpl).remove_6241ba_k$ = function (name) {
    this.values_1.remove_gppy8k_k$(name);
  };
  protoOf(StringValuesBuilderImpl).removeKeysWithNoEntries_wkzd9d_k$ = function () {
    // Inline function 'kotlin.collections.iterator' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = this.values_1;
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.removeKeysWithNoEntries.<anonymous>' call
      if (element.get_value_j01efc_k$().isEmpty_y1axqb_k$()) {
        destination.put_4fpzoq_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
      }
    }
    var _iterator__ex2g4s = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      // Inline function 'kotlin.collections.component1' call
      var k = _iterator__ex2g4s.next_20eer_k$().get_key_18j28a_k$();
      this.remove_6241ba_k$(k);
    }
  };
  protoOf(StringValuesBuilderImpl).remove_nw7zgk_k$ = function (name, value) {
    var tmp0_safe_receiver = this.values_1.get_wei43m_k$(name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.remove_cedx0m_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesBuilderImpl).clear_j9egeb_k$ = function () {
    this.values_1.clear_j9egeb_k$();
  };
  protoOf(StringValuesBuilderImpl).build_1k0s4u_k$ = function () {
    return new StringValuesImpl(this.caseInsensitiveName_1, this.values_1);
  };
  protoOf(StringValuesBuilderImpl).validateName_mv1fw7_k$ = function (name) {
  };
  protoOf(StringValuesBuilderImpl).validateValue_x1igun_k$ = function (value) {
  };
  function listForKey($this, name) {
    return $this.values_1.get_wei43m_k$(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    caseInsensitiveName = caseInsensitiveName === VOID ? false : caseInsensitiveName;
    values = values === VOID ? emptyMap() : values;
    this.caseInsensitiveName_1 = caseInsensitiveName;
    var tmp;
    if (this.caseInsensitiveName_1) {
      tmp = caseInsensitiveMap();
    } else {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = values.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = element.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = value.get_size_woubt6_k$();
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          var tmp$ret$4 = value.get_c1px32_k$(index);
          list.add_utx5q5_k$(tmp$ret$4);
        }
         while (inductionVariable < size);
      newMap.put_4fpzoq_k$(key, list);
    }
    this.values_1 = newMap;
  }
  protoOf(StringValuesImpl).get_caseInsensitiveName_ehooe5_k$ = function () {
    return this.caseInsensitiveName_1;
  };
  protoOf(StringValuesImpl).get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  protoOf(StringValuesImpl).get_6bo4tg_k$ = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  protoOf(StringValuesImpl).getAll_ffxf4h_k$ = function (name) {
    return listForKey(this, name);
  };
  protoOf(StringValuesImpl).contains_zh0gsb_k$ = function (name) {
    return !(listForKey(this, name) == null);
  };
  protoOf(StringValuesImpl).contains_7gmd9b_k$ = function (name, value) {
    var tmp0_safe_receiver = listForKey(this, name);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.contains_aljjnj_k$(value);
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StringValuesImpl).names_1q9mbs_k$ = function () {
    return unmodifiable(this.values_1.get_keys_wop4xp_k$());
  };
  protoOf(StringValuesImpl).isEmpty_y1axqb_k$ = function () {
    return this.values_1.isEmpty_y1axqb_k$();
  };
  protoOf(StringValuesImpl).entries_qbkxv4_k$ = function () {
    return unmodifiable(this.values_1.get_entries_p20ztl_k$());
  };
  protoOf(StringValuesImpl).forEach_jocloe_k$ = function (body) {
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.values_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var value = _destruct__k2r9zo.get_value_j01efc_k$();
      body(key, value);
    }
  };
  protoOf(StringValuesImpl).toString = function () {
    return 'StringValues(case=' + !this.caseInsensitiveName_1 + ') ' + toString(this.entries_qbkxv4_k$());
  };
  protoOf(StringValuesImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.caseInsensitiveName_1 === other.get_caseInsensitiveName_ehooe5_k$()))
      return false;
    return entriesEquals(this.entries_qbkxv4_k$(), other.entries_qbkxv4_k$());
  };
  protoOf(StringValuesImpl).hashCode = function () {
    return entriesHashCode(this.entries_qbkxv4_k$(), imul(31, getBooleanHashCode(this.caseInsensitiveName_1)));
  };
  function StringValuesBuilder() {
  }
  function appendAll(_this__u8e3s4, builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = builder.entries_qbkxv4_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var values = element.get_value_j01efc_k$();
      _this__u8e3s4.appendAll_ytnfgb_k$(name, values);
    }
    return _this__u8e3s4;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toMap(_this__u8e3s4) {
    // Inline function 'kotlin.collections.associateByTo' call
    var this_0 = _this__u8e3s4.entries_qbkxv4_k$();
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.toMap.<anonymous>' call
      var tmp = element.get_key_18j28a_k$();
      // Inline function 'io.ktor.util.toMap.<anonymous>' call
      var tmp$ret$1 = toList(element.get_value_j01efc_k$());
      destination.put_4fpzoq_k$(tmp, tmp$ret$1);
    }
    return destination;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var it = charSequenceGet(_this__u8e3s4, index);
          if (!(toLowerCasePreservingASCII(it) === it)) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    // Inline function 'kotlin.text.buildString' call
    var capacity = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    this_0.append_xdc1zw_k$(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this_0.append_am5a4z_k$(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    return this_0.toString();
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= ch ? ch <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= ch ? ch <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString_1(ch).toLowerCase();
      tmp = charSequenceGet(tmp$ret$2, 0);
    }
    return tmp;
  }
  function _get_hash__d7hhq5($this) {
    return $this.hash_1;
  }
  function CaseInsensitiveString(content) {
    this.content_1 = content;
    var temp = 0;
    var indexedObject = this.content_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = imul(temp, 31);
      // Inline function 'kotlin.code' call
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString_1(element).toLowerCase();
      var this_0 = charSequenceGet(tmp$ret$2, 0);
      temp = tmp + Char__toInt_impl_vasixd(this_0) | 0;
    }
    this.hash_1 = temp;
  }
  protoOf(CaseInsensitiveString).get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  protoOf(CaseInsensitiveString).equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.content_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.content_1, true)) === true;
  };
  protoOf(CaseInsensitiveString).hashCode = function () {
    return this.hash_1;
  };
  protoOf(CaseInsensitiveString).toString = function () {
    return this.content_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function CopyOnWriteHashMap() {
    this.current_1 = atomic$ref$1(emptyMap());
  }
  protoOf(CopyOnWriteHashMap).put_fa630k_k$ = function (key, value) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_wei43m_k$(key) === value)
        return value;
      var copy = HashMap_init_$Create$(old);
      var replaced = copy.put_4fpzoq_k$(key, value);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return replaced;
    }
     while (true);
  };
  protoOf(CopyOnWriteHashMap).get_h31hzz_k$ = function (key) {
    return this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_wei43m_k$(key);
  };
  protoOf(CopyOnWriteHashMap).set_1tg0p3_k$ = function (key, value) {
    this.put_fa630k_k$(key, value);
  };
  protoOf(CopyOnWriteHashMap).remove_1r2rzn_k$ = function (key) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (old.get_wei43m_k$(key) == null)
        return null;
      var copy = HashMap_init_$Create$(old);
      var removed = copy.remove_gppy8k_k$(key);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return removed;
    }
     while (true);
  };
  protoOf(CopyOnWriteHashMap).computeIfAbsent_gq11cy_k$ = function (key, producer) {
    do {
      var old = this.current_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = old.get_wei43m_k$(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var copy = HashMap_init_$Create$(old);
      var newValue = producer(key);
      // Inline function 'kotlin.collections.set' call
      copy.put_4fpzoq_k$(key, newValue);
      if (this.current_1.atomicfu$compareAndSet(old, copy))
        return newValue;
    }
     while (true);
  };
  function _get_$childSerializers__r2zwns($this) {
    return $this.$childSerializers_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.$childSerializers_1 = [null, null, null, createSimpleEnumSerializer('io.ktor.util.date.WeekDay', values_0()), null, null, createSimpleEnumSerializer('io.ktor.util.date.Month', values_1()), null, null];
    this.START_1 = GMTDate_0(new Long(0, 0));
  }
  protoOf(Companion_0).get_START_igje3d_k$ = function () {
    return this.START_1;
  };
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.ktor.util.date.GMTDate', this, 9);
    tmp0_serialDesc.addElement_5pzumi_k$('seconds', false);
    tmp0_serialDesc.addElement_5pzumi_k$('minutes', false);
    tmp0_serialDesc.addElement_5pzumi_k$('hours', false);
    tmp0_serialDesc.addElement_5pzumi_k$('dayOfWeek', false);
    tmp0_serialDesc.addElement_5pzumi_k$('dayOfMonth', false);
    tmp0_serialDesc.addElement_5pzumi_k$('dayOfYear', false);
    tmp0_serialDesc.addElement_5pzumi_k$('month', false);
    tmp0_serialDesc.addElement_5pzumi_k$('year', false);
    tmp0_serialDesc.addElement_5pzumi_k$('timestamp', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_nns9ic_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().$childSerializers_1;
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.seconds_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 1, value.minutes_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 2, value.hours_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 3, tmp2_cached[3], value.dayOfWeek_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 4, value.dayOfMonth_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 5, value.dayOfYear_1);
    tmp1_output.encodeSerializableElement_isqxcl_k$(tmp0_desc, 6, tmp2_cached[6], value.month_1);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 7, value.year_1);
    tmp1_output.encodeLongElement_cega27_k$(tmp0_desc, 8, value.timestamp_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_nns9ic_k$(encoder, value instanceof GMTDate ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = 0;
    var tmp9_local5 = 0;
    var tmp10_local6 = null;
    var tmp11_local7 = 0;
    var tmp12_local8 = new Long(0, 0);
    var tmp13_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    var tmp14_cached = Companion_getInstance_1().$childSerializers_1;
    if (tmp13_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.decodeLongElement_994anb_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 3, tmp14_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.decodeSerializableElement_uahnnv_k$(tmp0_desc, 6, tmp14_cached[6], tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.decodeIntElement_941u6a_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.decodeLongElement_994anb_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.endStructure_1xqz0n_k$(tmp0_desc);
    return GMTDate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    var tmp0_cached = Companion_getInstance_1().$childSerializers_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[3], IntSerializer_getInstance(), IntSerializer_getInstance(), tmp0_cached[6], IntSerializer_getInstance(), LongSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, $this) {
    if (!(511 === (511 & seen0))) {
      throwMissingFieldException(seen0, 511, $serializer_getInstance().descriptor_1);
    }
    $this.seconds_1 = seconds;
    $this.minutes_1 = minutes;
    $this.hours_1 = hours;
    $this.dayOfWeek_1 = dayOfWeek;
    $this.dayOfMonth_1 = dayOfMonth;
    $this.dayOfYear_1 = dayOfYear;
    $this.month_1 = month;
    $this.year_1 = year;
    $this.timestamp_1 = timestamp;
    return $this;
  }
  function GMTDate_init_$Create$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker) {
    return GMTDate_init_$Init$(seen0, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, serializationConstructorMarker, objectCreate(protoOf(GMTDate)));
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_1();
    this.seconds_1 = seconds;
    this.minutes_1 = minutes;
    this.hours_1 = hours;
    this.dayOfWeek_1 = dayOfWeek;
    this.dayOfMonth_1 = dayOfMonth;
    this.dayOfYear_1 = dayOfYear;
    this.month_1 = month;
    this.year_1 = year;
    this.timestamp_1 = timestamp;
  }
  protoOf(GMTDate).get_seconds_xuhyfq_k$ = function () {
    return this.seconds_1;
  };
  protoOf(GMTDate).get_minutes_ivkhkm_k$ = function () {
    return this.minutes_1;
  };
  protoOf(GMTDate).get_hours_islejq_k$ = function () {
    return this.hours_1;
  };
  protoOf(GMTDate).get_dayOfWeek_3kfgci_k$ = function () {
    return this.dayOfWeek_1;
  };
  protoOf(GMTDate).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(GMTDate).get_dayOfYear_3ke6gp_k$ = function () {
    return this.dayOfYear_1;
  };
  protoOf(GMTDate).get_month_ivc8d3_k$ = function () {
    return this.month_1;
  };
  protoOf(GMTDate).get_year_woy26e_k$ = function () {
    return this.year_1;
  };
  protoOf(GMTDate).get_timestamp_9fccx9_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(GMTDate).compareTo_i273q1_k$ = function (other) {
    return this.timestamp_1.compareTo_9jj042_k$(other.timestamp_1);
  };
  protoOf(GMTDate).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_i273q1_k$(other instanceof GMTDate ? other : THROW_CCE());
  };
  protoOf(GMTDate).copy_1tks5_k$ = function () {
    return GMTDate_0();
  };
  protoOf(GMTDate).component1_7eebsc_k$ = function () {
    return this.seconds_1;
  };
  protoOf(GMTDate).component2_7eebsb_k$ = function () {
    return this.minutes_1;
  };
  protoOf(GMTDate).component3_7eebsa_k$ = function () {
    return this.hours_1;
  };
  protoOf(GMTDate).component4_7eebs9_k$ = function () {
    return this.dayOfWeek_1;
  };
  protoOf(GMTDate).component5_7eebs8_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(GMTDate).component6_7eebs7_k$ = function () {
    return this.dayOfYear_1;
  };
  protoOf(GMTDate).component7_7eebs6_k$ = function () {
    return this.month_1;
  };
  protoOf(GMTDate).component8_7eebs5_k$ = function () {
    return this.year_1;
  };
  protoOf(GMTDate).component9_7eebs4_k$ = function () {
    return this.timestamp_1;
  };
  protoOf(GMTDate).copy_9qfcix_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    return new GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  protoOf(GMTDate).copy$default_xxrh8f_k$ = function (seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp, $super) {
    seconds = seconds === VOID ? this.seconds_1 : seconds;
    minutes = minutes === VOID ? this.minutes_1 : minutes;
    hours = hours === VOID ? this.hours_1 : hours;
    dayOfWeek = dayOfWeek === VOID ? this.dayOfWeek_1 : dayOfWeek;
    dayOfMonth = dayOfMonth === VOID ? this.dayOfMonth_1 : dayOfMonth;
    dayOfYear = dayOfYear === VOID ? this.dayOfYear_1 : dayOfYear;
    month = month === VOID ? this.month_1 : month;
    year = year === VOID ? this.year_1 : year;
    timestamp = timestamp === VOID ? this.timestamp_1 : timestamp;
    return $super === VOID ? this.copy_9qfcix_k$(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) : $super.copy_9qfcix_k$.call(this, seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp);
  };
  protoOf(GMTDate).toString = function () {
    return 'GMTDate(seconds=' + this.seconds_1 + ', minutes=' + this.minutes_1 + ', hours=' + this.hours_1 + ', dayOfWeek=' + this.dayOfWeek_1.toString() + ', dayOfMonth=' + this.dayOfMonth_1 + ', dayOfYear=' + this.dayOfYear_1 + ', month=' + this.month_1.toString() + ', year=' + this.year_1 + ', timestamp=' + this.timestamp_1.toString() + ')';
  };
  protoOf(GMTDate).hashCode = function () {
    var result = this.seconds_1;
    result = imul(result, 31) + this.minutes_1 | 0;
    result = imul(result, 31) + this.hours_1 | 0;
    result = imul(result, 31) + this.dayOfWeek_1.hashCode() | 0;
    result = imul(result, 31) + this.dayOfMonth_1 | 0;
    result = imul(result, 31) + this.dayOfYear_1 | 0;
    result = imul(result, 31) + this.month_1.hashCode() | 0;
    result = imul(result, 31) + this.year_1 | 0;
    result = imul(result, 31) + this.timestamp_1.hashCode() | 0;
    return result;
  };
  protoOf(GMTDate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.seconds_1 === tmp0_other_with_cast.seconds_1))
      return false;
    if (!(this.minutes_1 === tmp0_other_with_cast.minutes_1))
      return false;
    if (!(this.hours_1 === tmp0_other_with_cast.hours_1))
      return false;
    if (!this.dayOfWeek_1.equals(tmp0_other_with_cast.dayOfWeek_1))
      return false;
    if (!(this.dayOfMonth_1 === tmp0_other_with_cast.dayOfMonth_1))
      return false;
    if (!(this.dayOfYear_1 === tmp0_other_with_cast.dayOfYear_1))
      return false;
    if (!this.month_1.equals(tmp0_other_with_cast.month_1))
      return false;
    if (!(this.year_1 === tmp0_other_with_cast.year_1))
      return false;
    if (!this.timestamp_1.equals(tmp0_other_with_cast.timestamp_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).from_1ixx1u_k$ = function (ordinal) {
    return get_entries_0().get_c1px32_k$(ordinal);
  };
  protoOf(Companion_1).from_dvofps_k$ = function (value) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_0();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        if (element.value_1 === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Invalid day of week: ' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    WeekDay_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'MONDAY':
        return WeekDay_MONDAY_getInstance();
      case 'TUESDAY':
        return WeekDay_TUESDAY_getInstance();
      case 'WEDNESDAY':
        return WeekDay_WEDNESDAY_getInstance();
      case 'THURSDAY':
        return WeekDay_THURSDAY_getInstance();
      case 'FRIDAY':
        return WeekDay_FRIDAY_getInstance();
      case 'SATURDAY':
        return WeekDay_SATURDAY_getInstance();
      case 'SUNDAY':
        return WeekDay_SUNDAY_getInstance();
      default:
        WeekDay_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_2();
  }
  var $ENTRIES_0;
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(WeekDay).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).from_1ixx1u_k$ = function (ordinal) {
    return get_entries_1().get_c1px32_k$(ordinal);
  };
  protoOf(Companion_2).from_dvofps_k$ = function (value) {
    // Inline function 'kotlin.collections.find' call
    var this_0 = get_entries_1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'io.ktor.util.date.Companion.from.<anonymous>' call
        if (element.value_1 === value) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Invalid month: ' + value;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    Month_initEntries();
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function values_1() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'JANUARY':
        return Month_JANUARY_getInstance();
      case 'FEBRUARY':
        return Month_FEBRUARY_getInstance();
      case 'MARCH':
        return Month_MARCH_getInstance();
      case 'APRIL':
        return Month_APRIL_getInstance();
      case 'MAY':
        return Month_MAY_getInstance();
      case 'JUNE':
        return Month_JUNE_getInstance();
      case 'JULY':
        return Month_JULY_getInstance();
      case 'AUGUST':
        return Month_AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month_SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month_OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month_NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month_DECEMBER_getInstance();
      default:
        Month_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_3();
  }
  var $ENTRIES_1;
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(Month).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function get_CONDITION_FALSE() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return CONDITION_FALSE;
  }
  var CONDITION_FALSE;
  function get_ALREADY_REMOVED() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return ALREADY_REMOVED;
  }
  var ALREADY_REMOVED;
  function get_LIST_EMPTY() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return LIST_EMPTY;
  }
  var LIST_EMPTY;
  function get_REMOVE_PREPARED() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  function get_NO_DECISION() {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    return NO_DECISION;
  }
  var NO_DECISION;
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return this.symbol_1;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(LockFreeLinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this.get_next_wor1vg_k$() === this;
  };
  protoOf(LockFreeLinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(LockFreeLinkedListHead).describeRemove_by6jov_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(LockFreeLinkedListHead).validate_48efiv_k$ = function () {
    var prev = this;
    var tmp = this.get_next_wor1vg_k$();
    var cur = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
    while (!equals(cur, this)) {
      var next = cur.get_nextNode_88zlwi_k$();
      cur.validateNode_s9f4p7_k$(prev, next);
      prev = cur;
      cur = next;
    }
    var tmp_0 = prev;
    var tmp_1 = this.get_next_wor1vg_k$();
    this.validateNode_s9f4p7_k$(tmp_0, tmp_1 instanceof LockFreeLinkedListNode ? tmp_1 : THROW_CCE());
  };
  function _get__affectedNode__37yt4s($this) {
    return $this._affectedNode_1;
  }
  function _get__affectedNode__37yt4s_0($this) {
    return $this._affectedNode_1;
  }
  function _get__originalNext__qa4rn2($this) {
    return $this._originalNext_1;
  }
  function PrepareOp(next, op, desc) {
    OpDescriptor.call(this);
    this.next_1 = next;
    this.op_1 = op;
    this.desc_1 = desc;
  }
  protoOf(PrepareOp).get_next_wor1vg_k$ = function () {
    return this.next_1;
  };
  protoOf(PrepareOp).get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  protoOf(PrepareOp).get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  protoOf(PrepareOp).perform_8emi3i_k$ = function (affected) {
    if (!(affected instanceof LockFreeLinkedListNode))
      THROW_CCE();
    var decision = this.desc_1.onPrepare_hv6176_k$(affected, this.next_1);
    if (!(decision == null)) {
      if (decision === get_REMOVE_PREPARED()) {
        var removed_0 = removed(this.next_1);
        if (affected._next_1.atomicfu$compareAndSet(this, removed_0)) {
          affected.helpDelete_bjf8pt_k$();
        }
      } else {
        this.op_1.tryDecide_1ianp8_k$(decision);
        affected._next_1.atomicfu$compareAndSet(this, this.next_1);
      }
      return decision;
    }
    var update = this.op_1.get_isDecided_ofk0qx_k$() ? this.next_1 : this.op_1;
    affected._next_1.atomicfu$compareAndSet(this, update);
    return null;
  };
  function _get__originalNext__qa4rn2_0($this) {
    return $this._originalNext_1;
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__prev__krsetd($this) {
    return $this._prev_1;
  }
  function _get__removedRef__c9vjmn($this) {
    return $this._removedRef_1;
  }
  function removed($this) {
    var tmp0_elvis_lhs = $this._removedRef_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new Removed($this);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.removed.<anonymous>' call
      // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
      $this._removedRef_1.set_kotlinx$atomicfu$value_508e3y_k$(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function CondAddOp(newNode) {
    AtomicOp.call(this);
    this.newNode_1 = newNode;
    this.oldNext_1 = null;
  }
  protoOf(CondAddOp).get_newNode_vs1fbt_k$ = function () {
    return this.newNode_1;
  };
  protoOf(CondAddOp).set_oldNext_8oeql7_k$ = function (_set____db54di) {
    this.oldNext_1 = _set____db54di;
  };
  protoOf(CondAddOp).get_oldNext_ljt9v3_k$ = function () {
    return this.oldNext_1;
  };
  protoOf(CondAddOp).complete_zelqld_k$ = function (affected, failure) {
    var success = failure == null;
    var update = success ? this.newNode_1 : this.oldNext_1;
    if (!(update == null) && affected._next_1.atomicfu$compareAndSet(this, update)) {
      if (success) {
        finishAdd(this.newNode_1, ensureNotNull(this.oldNext_1));
      }
    }
  };
  protoOf(CondAddOp).complete_4av0gr_k$ = function (affected, failure) {
    return this.complete_zelqld_k$(affected instanceof LockFreeLinkedListNode ? affected : THROW_CCE(), failure);
  };
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.node_1._next_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.node_1 && this.node_1._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.node_1)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this._affectedNode_1 = atomic$ref$1(null);
  }
  protoOf(AddLastDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AddLastDesc).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(AddLastDesc).takeAffectedNode_icxxqq_k$ = function (op) {
    $l$loop: while (true) {
      var tmp = this.queue_1._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var prev = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      var next = prev._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (next === this.queue_1)
        return prev;
      if (next === op)
        return prev;
      if (next instanceof OpDescriptor) {
        next.perform_8emi3i_k$(prev);
        continue $l$loop;
      }
      var affected = correctPrev(this.queue_1, prev, op);
      if (!(affected == null))
        return affected;
    }
  };
  protoOf(AddLastDesc).get_affectedNode_2377z5_k$ = function () {
    return this._affectedNode_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AddLastDesc).get_originalNext_v4rb6b_k$ = function () {
    return this.queue_1;
  };
  protoOf(AddLastDesc).retry_guxw8v_k$ = function (affected, next) {
    return !(next === this.queue_1);
  };
  protoOf(AddLastDesc).onPrepare_hv6176_k$ = function (affected, next) {
    this._affectedNode_1.atomicfu$compareAndSet(null, affected);
    return null;
  };
  protoOf(AddLastDesc).updatedNext_229jug_k$ = function (affected, next) {
    this.node_1._prev_1.atomicfu$compareAndSet(this.node_1, affected);
    this.node_1._next_1.atomicfu$compareAndSet(this.node_1, this.queue_1);
    return this.node_1;
  };
  protoOf(AddLastDesc).finishOnSuccess_gpgec5_k$ = function (affected, next) {
    finishAdd(this.node_1, this.queue_1);
  };
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this._affectedNode_1 = atomic$ref$1(null);
    this._originalNext_1 = atomic$ref$1(null);
  }
  protoOf(RemoveFirstDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(RemoveFirstDesc).get_result_iyg5d2_k$ = function () {
    var tmp = ensureNotNull(this.get_affectedNode_2377z5_k$());
    return !(tmp == null) ? tmp : THROW_CCE();
  };
  protoOf(RemoveFirstDesc).takeAffectedNode_icxxqq_k$ = function (op) {
    var tmp = this.queue_1.get_next_wor1vg_k$();
    return tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
  };
  protoOf(RemoveFirstDesc).get_affectedNode_2377z5_k$ = function () {
    return this._affectedNode_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(RemoveFirstDesc).get_originalNext_v4rb6b_k$ = function () {
    return this._originalNext_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(RemoveFirstDesc).failure_ov419b_k$ = function (affected, next) {
    return affected === this.queue_1 ? get_LIST_EMPTY() : null;
  };
  protoOf(RemoveFirstDesc).validatePrepared_rjey58_k$ = function (node) {
    return true;
  };
  protoOf(RemoveFirstDesc).retry_guxw8v_k$ = function (affected, next) {
    if (!(next instanceof Removed))
      return false;
    affected.helpDelete_bjf8pt_k$();
    return true;
  };
  protoOf(RemoveFirstDesc).onPrepare_hv6176_k$ = function (affected, next) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(affected instanceof LockFreeLinkedListHead)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!this.validatePrepared_rjey58_k$(!(affected == null) ? affected : THROW_CCE()))
      return get_REMOVE_PREPARED();
    this._affectedNode_1.atomicfu$compareAndSet(null, affected);
    this._originalNext_1.atomicfu$compareAndSet(null, next);
    return null;
  };
  protoOf(RemoveFirstDesc).updatedNext_229jug_k$ = function (affected, next) {
    return removed(next);
  };
  protoOf(RemoveFirstDesc).finishOnSuccess_gpgec5_k$ = function (affected, next) {
    return finishRemove(affected, next);
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  protoOf(AbstractAtomicDesc).takeAffectedNode_icxxqq_k$ = function (op) {
    return ensureNotNull(this.get_affectedNode_2377z5_k$());
  };
  protoOf(AbstractAtomicDesc).failure_ov419b_k$ = function (affected, next) {
    return null;
  };
  protoOf(AbstractAtomicDesc).retry_guxw8v_k$ = function (affected, next) {
    return false;
  };
  protoOf(AbstractAtomicDesc).prepare_yeqf16_k$ = function (op) {
    $l$loop_1: while (true) {
      var affected = this.takeAffectedNode_icxxqq_k$(op);
      var next = affected._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (next === op)
        return null;
      if (op.get_isDecided_ofk0qx_k$())
        return null;
      if (next instanceof OpDescriptor) {
        next.perform_8emi3i_k$(affected);
        continue $l$loop_1;
      }
      var failure = this.failure_ov419b_k$(affected, next);
      if (!(failure == null))
        return failure;
      if (this.retry_guxw8v_k$(affected, next))
        continue $l$loop_1;
      var tmp = next instanceof LockFreeLinkedListNode ? next : THROW_CCE();
      var prepareOp = new PrepareOp(tmp, op instanceof AtomicOp ? op : THROW_CCE(), this);
      if (affected._next_1.atomicfu$compareAndSet(next, prepareOp)) {
        var prepFail = prepareOp.perform_8emi3i_k$(affected);
        if (prepFail === get_REMOVE_PREPARED())
          continue $l$loop_1;
        return prepFail;
      }
    }
  };
  protoOf(AbstractAtomicDesc).complete_r06co5_k$ = function (op, failure) {
    var success = failure == null;
    var tmp0_elvis_lhs = this.get_affectedNode_2377z5_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!success) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var affectedNode = tmp;
    var tmp1_elvis_lhs = this.get_originalNext_v4rb6b_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!success) {
        // Inline function 'kotlin.check.<anonymous>' call
        var message_0 = 'Check failed.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var originalNext = tmp_0;
    var update = success ? this.updatedNext_229jug_k$(affectedNode, originalNext) : originalNext;
    if (affectedNode._next_1.atomicfu$compareAndSet(op, update)) {
      if (success) {
        this.finishOnSuccess_gpgec5_k$(affectedNode, originalNext);
      }
    }
  };
  function finishAdd($this, next) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = next._prev_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.finishAdd.<anonymous>' call
      var nextPrev = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (nextPrev instanceof Removed) {
        tmp = true;
      } else {
        tmp = !($this.get_next_wor1vg_k$() === next);
      }
      if (tmp)
        return Unit_getInstance();
      if (next._prev_1.atomicfu$compareAndSet(nextPrev, $this)) {
        var tmp_0 = $this.get_next_wor1vg_k$();
        if (tmp_0 instanceof Removed) {
          correctPrev(next, nextPrev instanceof LockFreeLinkedListNode ? nextPrev : THROW_CCE(), null);
        }
        return Unit_getInstance();
      }
    }
  }
  function finishRemove($this, next) {
    $this.helpDelete_bjf8pt_k$();
    correctPrev(next, unwrap($this._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$()), null);
  }
  function markPrev($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this._prev_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.markPrev.<anonymous>' call
      var prev = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (prev instanceof Removed)
        return prev.ref_1;
      var tmp;
      if (prev === $this) {
        tmp = findHead($this);
      } else {
        tmp = prev instanceof LockFreeLinkedListNode ? prev : THROW_CCE();
      }
      var removedPrev = removed(tmp);
      if ($this._prev_1.atomicfu$compareAndSet(prev, removedPrev))
        return prev;
    }
  }
  function findHead($this) {
    var cur = $this;
    while (true) {
      if (cur instanceof LockFreeLinkedListHead)
        return cur;
      cur = cur.get_nextNode_88zlwi_k$();
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(cur === $this)) {
        // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.findHead.<anonymous>' call
        var message = 'Cannot loop to this while looking for list head';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function correctPrev($this, _prev, op) {
    var prev = _prev;
    var last = null;
    $l$loop_1: while (true) {
      var prevNext = prev._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (prevNext === op)
        return prev;
      if (prevNext instanceof OpDescriptor) {
        prevNext.perform_8emi3i_k$(prev);
        continue $l$loop_1;
      }
      if (prevNext instanceof Removed) {
        if (!(last === null)) {
          markPrev(prev);
          last._next_1.atomicfu$compareAndSet(prev, prevNext.ref_1);
          prev = last;
          last = null;
        } else {
          prev = unwrap(prev._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$());
        }
        continue $l$loop_1;
      }
      var oldPrev = $this._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (oldPrev instanceof Removed)
        return null;
      if (!(prevNext === $this)) {
        last = prev;
        prev = prevNext instanceof LockFreeLinkedListNode ? prevNext : THROW_CCE();
        continue $l$loop_1;
      }
      if (oldPrev === prev)
        return null;
      if ($this._prev_1.atomicfu$compareAndSet(oldPrev, prev)) {
        var tmp = prev._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(tmp instanceof Removed))
          return null;
      }
    }
  }
  function LockFreeLinkedListNode$makeCondAddOp$1($node, $condition) {
    this.$condition_1 = $condition;
    CondAddOp.call(this, $node);
  }
  protoOf(LockFreeLinkedListNode$makeCondAddOp$1).prepare_oiipx8_k$ = function (affected) {
    return this.$condition_1() ? null : get_CONDITION_FALSE();
  };
  protoOf(LockFreeLinkedListNode$makeCondAddOp$1).prepare_226la0_k$ = function (affected) {
    return this.prepare_oiipx8_k$(affected instanceof LockFreeLinkedListNode ? affected : THROW_CCE());
  };
  function _no_name_provided__qut3iv_0($node, $condition) {
    this.$condition_1 = $condition;
    CondAddOp.call(this, $node);
  }
  protoOf(_no_name_provided__qut3iv_0).prepare_oiipx8_k$ = function (affected) {
    return this.$condition_1() ? null : get_CONDITION_FALSE();
  };
  protoOf(_no_name_provided__qut3iv_0).prepare_226la0_k$ = function (affected) {
    return this.prepare_oiipx8_k$(affected instanceof LockFreeLinkedListNode ? affected : THROW_CCE());
  };
  function _no_name_provided__qut3iv_1($node, $condition) {
    this.$condition_1 = $condition;
    CondAddOp.call(this, $node);
  }
  protoOf(_no_name_provided__qut3iv_1).prepare_oiipx8_k$ = function (affected) {
    return this.$condition_1() ? null : get_CONDITION_FALSE();
  };
  protoOf(_no_name_provided__qut3iv_1).prepare_226la0_k$ = function (affected) {
    return this.prepare_oiipx8_k$(affected instanceof LockFreeLinkedListNode ? affected : THROW_CCE());
  };
  function LockFreeLinkedListNode$describeRemove$1(this$0) {
    this.this$0__1 = this$0;
    AbstractAtomicDesc.call(this);
    this._originalNext_1 = atomic$ref$1(null);
  }
  protoOf(LockFreeLinkedListNode$describeRemove$1).get_affectedNode_2377z5_k$ = function () {
    return this.this$0__1;
  };
  protoOf(LockFreeLinkedListNode$describeRemove$1).get_originalNext_v4rb6b_k$ = function () {
    return this._originalNext_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(LockFreeLinkedListNode$describeRemove$1).failure_ov419b_k$ = function (affected, next) {
    var tmp;
    if (next instanceof Removed) {
      tmp = get_ALREADY_REMOVED();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode$describeRemove$1).onPrepare_hv6176_k$ = function (affected, next) {
    this._originalNext_1.atomicfu$compareAndSet(null, next);
    return null;
  };
  protoOf(LockFreeLinkedListNode$describeRemove$1).updatedNext_229jug_k$ = function (affected, next) {
    return removed(next);
  };
  protoOf(LockFreeLinkedListNode$describeRemove$1).finishOnSuccess_gpgec5_k$ = function (affected, next) {
    return finishRemove(this.this$0__1, next);
  };
  function LockFreeLinkedListNode() {
    this._next_1 = atomic$ref$1(this);
    this._prev_1 = atomic$ref$1(this);
    this._removedRef_1 = atomic$ref$1(null);
  }
  protoOf(LockFreeLinkedListNode).makeCondAddOp_asyvr3_k$ = function (node, condition) {
    return new LockFreeLinkedListNode$makeCondAddOp$1(node, condition);
  };
  protoOf(LockFreeLinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    var tmp = this.get_next_wor1vg_k$();
    return tmp instanceof Removed;
  };
  protoOf(LockFreeLinkedListNode).get_next_wor1vg_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._next_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.<get-next>.<anonymous>' call
      var next = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(next instanceof OpDescriptor))
        return next;
      next.perform_8emi3i_k$(this);
    }
  };
  protoOf(LockFreeLinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return unwrap(this.get_next_wor1vg_k$());
  };
  protoOf(LockFreeLinkedListNode).get_prev_wosl18_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this._prev_1;
    while (true) {
      // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.<get-prev>.<anonymous>' call
      var prev = this_0.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (prev instanceof Removed)
        return prev;
      if (!(prev instanceof LockFreeLinkedListNode))
        THROW_CCE();
      if (prev.get_next_wor1vg_k$() === this)
        return prev;
      correctPrev(this, prev, null);
    }
  };
  protoOf(LockFreeLinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return unwrap(this.get_prev_wosl18_k$());
  };
  protoOf(LockFreeLinkedListNode).addOneIfEmpty_oufrxc_k$ = function (node) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._prev_1.set_kotlinx$atomicfu$value_508e3y_k$(this);
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._next_1.set_kotlinx$atomicfu$value_508e3y_k$(this);
    while (true) {
      var next = this.get_next_wor1vg_k$();
      if (!(next === this))
        return false;
      if (this._next_1.atomicfu$compareAndSet(this, node)) {
        finishAdd(node, this);
        return true;
      }
    }
  };
  protoOf(LockFreeLinkedListNode).addLast_ftvmbg_k$ = function (node) {
    while (true) {
      var tmp = this.get_prev_wosl18_k$();
      var prev = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      if (prev.addNext_m6j135_k$(node, this))
        return Unit_getInstance();
    }
  };
  protoOf(LockFreeLinkedListNode).describeAddLast_8mo0il_k$ = function (node) {
    return new AddLastDesc(this, node);
  };
  protoOf(LockFreeLinkedListNode).addLastIf_s9jbj4_k$ = function (node, condition) {
    // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.makeCondAddOp' call
    var condAdd = new _no_name_provided__qut3iv_0(node, condition);
    while (true) {
      var tmp = this.get_prev_wosl18_k$();
      var prev = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      var tmp0_subject = prev.tryCondAddNext_wloy2u_k$(node, this, condAdd);
      if (tmp0_subject === 1)
        return true;
      else if (tmp0_subject === 2)
        return false;
    }
  };
  protoOf(LockFreeLinkedListNode).addLastIfPrev_7b2tyl_k$ = function (node, predicate) {
    while (true) {
      var tmp = this.get_prev_wosl18_k$();
      var prev = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      if (!predicate(prev))
        return false;
      if (prev.addNext_m6j135_k$(node, this))
        return true;
    }
  };
  protoOf(LockFreeLinkedListNode).addLastIfPrevAndIf_pg0ch0_k$ = function (node, predicate, condition) {
    // Inline function 'io.ktor.util.internal.LockFreeLinkedListNode.makeCondAddOp' call
    var condAdd = new _no_name_provided__qut3iv_1(node, condition);
    while (true) {
      var tmp = this.get_prev_wosl18_k$();
      var prev = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      if (!predicate(prev))
        return false;
      var tmp0_subject = prev.tryCondAddNext_wloy2u_k$(node, this, condAdd);
      if (tmp0_subject === 1)
        return true;
      else if (tmp0_subject === 2)
        return false;
    }
  };
  protoOf(LockFreeLinkedListNode).addNext_m6j135_k$ = function (node, next) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._prev_1.set_kotlinx$atomicfu$value_508e3y_k$(this);
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._next_1.set_kotlinx$atomicfu$value_508e3y_k$(next);
    if (!this._next_1.atomicfu$compareAndSet(next, node))
      return false;
    finishAdd(node, next);
    return true;
  };
  protoOf(LockFreeLinkedListNode).tryCondAddNext_wloy2u_k$ = function (node, next, condAdd) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._prev_1.set_kotlinx$atomicfu$value_508e3y_k$(this);
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    node._next_1.set_kotlinx$atomicfu$value_508e3y_k$(next);
    condAdd.oldNext_1 = next;
    if (!this._next_1.atomicfu$compareAndSet(next, condAdd))
      return 0;
    return condAdd.perform_8emi3i_k$(this) == null ? 1 : 2;
  };
  protoOf(LockFreeLinkedListNode).remove_fgfybg_k$ = function () {
    while (true) {
      var next = this.get_next_wor1vg_k$();
      if (next instanceof Removed) {
        return false;
      }
      if (next === this)
        return false;
      var removed_0 = removed(next instanceof LockFreeLinkedListNode ? next : THROW_CCE());
      if (this._next_1.atomicfu$compareAndSet(next, removed_0)) {
        finishRemove(this, next);
        return true;
      }
    }
  };
  protoOf(LockFreeLinkedListNode).helpRemove_v3bmp7_k$ = function () {
    var tmp = this.get_next_wor1vg_k$();
    var tmp0_elvis_lhs = tmp instanceof Removed ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Must be invoked on a removed node';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var removed = tmp_0;
    finishRemove(this, removed.ref_1);
  };
  protoOf(LockFreeLinkedListNode).describeRemove_by6jov_k$ = function () {
    if (this.get_isRemoved_gzdz59_k$())
      return null;
    return new LockFreeLinkedListNode$describeRemove$1(this);
  };
  protoOf(LockFreeLinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    while (true) {
      var tmp = this.get_next_wor1vg_k$();
      var first = tmp instanceof LockFreeLinkedListNode ? tmp : THROW_CCE();
      if (first === this)
        return null;
      if (first.remove_fgfybg_k$())
        return first;
      first.helpDelete_bjf8pt_k$();
    }
  };
  protoOf(LockFreeLinkedListNode).describeRemoveFirst_nicncv_k$ = function () {
    return new RemoveFirstDesc(this);
  };
  protoOf(LockFreeLinkedListNode).helpDelete_bjf8pt_k$ = function () {
    var last = null;
    var prev = markPrev(this);
    var tmp = this._next_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var next = (tmp instanceof Removed ? tmp : THROW_CCE()).ref_1;
    $l$loop_1: while (true) {
      var nextNext = next.get_next_wor1vg_k$();
      if (nextNext instanceof Removed) {
        markPrev(next);
        next = nextNext.ref_1;
        continue $l$loop_1;
      }
      var prevNext = prev.get_next_wor1vg_k$();
      if (prevNext instanceof Removed) {
        if (!(last == null)) {
          markPrev(prev);
          last._next_1.atomicfu$compareAndSet(prev, prevNext.ref_1);
          prev = last;
          last = null;
        } else {
          prev = unwrap(prev._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$());
        }
        continue $l$loop_1;
      }
      if (!(prevNext === this)) {
        last = prev;
        prev = prevNext instanceof LockFreeLinkedListNode ? prevNext : THROW_CCE();
        if (prev === next)
          return Unit_getInstance();
        continue $l$loop_1;
      }
      if (prev._next_1.atomicfu$compareAndSet(this, next))
        return Unit_getInstance();
    }
  };
  protoOf(LockFreeLinkedListNode).validateNode_s9f4p7_k$ = function (prev, next) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(prev === this._prev_1.get_kotlinx$atomicfu$value_vi2am5_k$())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(next === this._next_1.get_kotlinx$atomicfu$value_vi2am5_k$())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  };
  protoOf(LockFreeLinkedListNode).toString = function () {
    return '' + getKClassFromExpression(this).get_simpleName_r6f8py_k$() + '@' + hashCode(this);
  };
  function Removed(ref) {
    this.ref_1 = ref;
  }
  protoOf(Removed).get_ref_18ix1y_k$ = function () {
    return this.ref_1;
  };
  protoOf(Removed).toString = function () {
    return 'Removed[' + this.ref_1.toString() + ']';
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function decide($this, decision) {
    return $this.tryDecide_1ianp8_k$(decision) ? decision : $this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_isDecided_ofk0qx_k$ = function () {
    return !(this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NO_DECISION());
  };
  protoOf(AtomicOp).tryDecide_1ianp8_k$ = function (decision) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(decision === get_NO_DECISION())) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision);
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = decide(this, this.prepare_226la0_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE()));
    }
    this.complete_4av0gr_k$((affected == null ? true : !(affected == null)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  function OpDescriptor() {
  }
  function unwrap(_this__u8e3s4) {
    _init_properties_LockFreeLinkedList_kt__wekxce();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof Removed ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ref_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      tmp = _this__u8e3s4 instanceof LockFreeLinkedListNode ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function AtomicDesc() {
  }
  var properties_initialized_LockFreeLinkedList_kt_lnmdgw;
  function _init_properties_LockFreeLinkedList_kt__wekxce() {
    if (!properties_initialized_LockFreeLinkedList_kt_lnmdgw) {
      properties_initialized_LockFreeLinkedList_kt_lnmdgw = true;
      CONDITION_FALSE = new Symbol('CONDITION_FALSE');
      ALREADY_REMOVED = new Symbol('ALREADY_REMOVED');
      LIST_EMPTY = new Symbol('LIST_EMPTY');
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
      NO_DECISION = new Symbol('NO_DECISION');
    }
  }
  function _get_interceptors__h4min7($this) {
    return $this.interceptors_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function proceedLoop($this, $completion) {
    var tmp = new $proceedLoopCOROUTINE$0($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $proceedLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($proceedLoopCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.index0__1 = this._this__u8e3s4__1.index_1;
            if (this.index0__1 === -1) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            this.interceptors1__1 = this._this__u8e3s4__1.interceptors_1;
            if (this.index0__1 >= this.interceptors1__1.get_size_woubt6_k$()) {
              this._this__u8e3s4__1.finish_mh2air_k$();
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.executeInterceptor2__1 = this.interceptors1__1.get_c1px32_k$(this.index0__1);
            this._this__u8e3s4__1.index_1 = this.index0__1 + 1 | 0;
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.executeInterceptor2__1(this._this__u8e3s4__1, this._this__u8e3s4__1.subject_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 5:
            return this._this__u8e3s4__1.subject_1;
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
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.interceptors_1 = interceptors;
    this.coroutineContext_1 = coroutineContext;
    this.subject_1 = subject;
    this.index_1 = 0;
  }
  protoOf(DebugPipelineContext).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(DebugPipelineContext).set_subject_651wuj_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  protoOf(DebugPipelineContext).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(DebugPipelineContext).finish_mh2air_k$ = function () {
    this.index_1 = -1;
  };
  protoOf(DebugPipelineContext).proceedWith_i5skhv_k$ = function (subject, $completion) {
    this.subject_1 = subject;
    return this.proceed_tynop7_k$($completion);
  };
  protoOf(DebugPipelineContext).proceed_tynop7_k$ = function ($completion) {
    var index = this.index_1;
    if (index < 0)
      return this.subject_1;
    if (index >= this.interceptors_1.get_size_woubt6_k$()) {
      this.finish_mh2air_k$();
      return this.subject_1;
    }
    return proceedLoop(this, $completion);
  };
  protoOf(DebugPipelineContext).execute_pc5rz_k$ = function (initial, $completion) {
    this.index_1 = 0;
    this.subject_1 = initial;
    return this.proceed_tynop7_k$($completion);
  };
  function _set_interceptors__wod97b($this, _set____db54di) {
    $this.interceptors_1 = _set____db54di;
  }
  function _get_interceptors__h4min7_0($this) {
    return $this.interceptors_1;
  }
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_4().SharedArrayList_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, KtMutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!Companion_getInstance_4().SharedArrayList_1.isEmpty_y1axqb_k$()) {
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      var message = 'The shared empty array list has been modified';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, objectCreate(protoOf(PhaseContent)));
  }
  function copiedInterceptors($this) {
    return toMutableList($this.interceptors_1);
  }
  function copyInterceptors($this) {
    $this.interceptors_1 = copiedInterceptors($this);
    $this.shared_1 = false;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.SharedArrayList_1 = ArrayList_init_$Create$_0();
  }
  protoOf(Companion_3).get_SharedArrayList_vqimaf_k$ = function () {
    return this.SharedArrayList_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_4();
    this.phase_1 = phase;
    this.relation_1 = relation;
    this.interceptors_1 = interceptors;
    this.shared_1 = true;
  }
  protoOf(PhaseContent).get_phase_iwuvki_k$ = function () {
    return this.phase_1;
  };
  protoOf(PhaseContent).get_relation_u22tol_k$ = function () {
    return this.relation_1;
  };
  protoOf(PhaseContent).set_shared_67kjx_k$ = function (_set____db54di) {
    this.shared_1 = _set____db54di;
  };
  protoOf(PhaseContent).get_shared_jgtlda_k$ = function () {
    return this.shared_1;
  };
  protoOf(PhaseContent).get_isEmpty_zauvru_k$ = function () {
    return this.interceptors_1.isEmpty_y1axqb_k$();
  };
  protoOf(PhaseContent).get_size_woubt6_k$ = function () {
    return this.interceptors_1.get_size_woubt6_k$();
  };
  protoOf(PhaseContent).addInterceptor_jvll3j_k$ = function (interceptor) {
    if (this.shared_1) {
      copyInterceptors(this);
    }
    this.interceptors_1.add_utx5q5_k$(interceptor);
  };
  protoOf(PhaseContent).addTo_xrn86a_k$ = function (destination) {
    var interceptors = this.interceptors_1;
    if (destination instanceof ArrayList) {
      destination.ensureCapacity_wr7980_k$(destination.get_size_woubt6_k$() + interceptors.get_size_woubt6_k$() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.add_utx5q5_k$(interceptors.get_c1px32_k$(index));
      }
       while (inductionVariable < last);
  };
  protoOf(PhaseContent).addTo_ddguau_k$ = function (destination) {
    if (this.get_isEmpty_zauvru_k$())
      return Unit_getInstance();
    if (destination.get_isEmpty_zauvru_k$()) {
      destination.interceptors_1 = this.sharedInterceptors_rmg8b1_k$();
      destination.shared_1 = true;
      return Unit_getInstance();
    }
    if (destination.shared_1) {
      copyInterceptors(destination);
    }
    this.addTo_xrn86a_k$(destination.interceptors_1);
  };
  protoOf(PhaseContent).sharedInterceptors_rmg8b1_k$ = function () {
    this.shared_1 = true;
    return this.interceptors_1;
  };
  protoOf(PhaseContent).toString = function () {
    return 'Phase `' + this.phase_1.get_name_woqyms_k$() + '`, ' + this.get_size_woubt6_k$() + ' handlers';
  };
  function _get_phasesRaw__qhc95r($this) {
    return $this.phasesRaw_1;
  }
  function _set_interceptorsQuantity__wbahq($this, _set____db54di) {
    $this.interceptorsQuantity_1 = _set____db54di;
  }
  function _get_interceptorsQuantity__d1rdim($this) {
    return $this.interceptorsQuantity_1;
  }
  function _get__interceptors__h3evks($this) {
    return $this._interceptors_1;
  }
  function _set_interceptors__wod97b_0($this, value) {
    $this._interceptors_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  }
  function _get_interceptors__h4min7_1($this) {
    return $this._interceptors_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function _set_interceptorsListShared__d5l722($this, _set____db54di) {
    $this.interceptorsListShared_1 = _set____db54di;
  }
  function _get_interceptorsListShared__93i9dm($this) {
    return $this.interceptorsListShared_1;
  }
  function _set_interceptorsListSharedPhase__tmqge3($this, _set____db54di) {
    $this.interceptorsListSharedPhase_1 = _set____db54di;
  }
  function _get_interceptorsListSharedPhase__2d8553($this) {
    return $this.interceptorsListSharedPhase_1;
  }
  function Pipeline_init_$Init$(phase, interceptors, $this) {
    Pipeline.call($this, [phase]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = interceptors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.<init>.<anonymous>' call
      $this.intercept_k21bv3_k$(phase, element);
    }
    return $this;
  }
  function Pipeline_init_$Create$(phase, interceptors) {
    return Pipeline_init_$Init$(phase, interceptors, objectCreate(protoOf(Pipeline)));
  }
  function mergeInterceptors($this, from) {
    if ($this.interceptorsQuantity_1 === 0) {
      setInterceptorsListFromAnotherPipeline($this, from);
    } else {
      resetInterceptorsList($this);
    }
    var fromPhases = from.phasesRaw_1;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = fromPhases.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.mergeInterceptors.<anonymous>' call
      var tmp0_elvis_lhs = element instanceof PipelinePhase ? element : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp = (element instanceof PhaseContent ? element : THROW_CCE()).get_phase_iwuvki_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var fromPhase = tmp;
      var tmp_0;
      if (element instanceof PhaseContent) {
        tmp_0 = !element.get_isEmpty_zauvru_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        if (!(element instanceof PhaseContent))
          THROW_CCE();
        element.addTo_ddguau_k$(ensureNotNull(findPhase($this, fromPhase)));
        $this.interceptorsQuantity_1 = $this.interceptorsQuantity_1 + element.get_size_woubt6_k$() | 0;
      }
    }
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.get_developmentMode_eqiro5_k$());
  }
  function findPhase($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_c1px32_k$(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.set_82063s_k$(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.get_phase_iwuvki_k$() === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_c1px32_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.phasesRaw_1;
    var inductionVariable = 0;
    var last = phasesList.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.get_c1px32_k$(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.get_phase_iwuvki_k$() === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.interceptorsQuantity_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.phasesRaw_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.get_c1px32_k$(phaseIndex);
          var tmp0_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.get_isEmpty_zauvru_k$())
            continue $l$loop_0;
          var interceptors = phaseContent.sharedInterceptors_rmg8b1_k$();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var destination = ArrayList_init_$Create$_0();
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.get_c1px32_k$(phaseIndex_0);
        var tmp1_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var phase = tmp_2;
        phase.addTo_xrn86a_k$(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function fastPathMerge($this, from) {
    if (from.phasesRaw_1.isEmpty_y1axqb_k$()) {
      return true;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.phasesRaw_1.isEmpty_y1axqb_k$()) {
      return false;
    }
    var fromPhases = from.phasesRaw_1;
    var inductionVariable = 0;
    var last = get_lastIndex_0(fromPhases);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var fromPhaseOrContent = fromPhases.get_c1px32_k$(index);
        if (fromPhaseOrContent instanceof PipelinePhase) {
          $this.phasesRaw_1.add_utx5q5_k$(fromPhaseOrContent);
          continue $l$loop_0;
        }
        if (!(fromPhaseOrContent instanceof PhaseContent)) {
          continue $l$loop_0;
        }
        if (!(fromPhaseOrContent instanceof PhaseContent))
          THROW_CCE();
        $this.phasesRaw_1.add_utx5q5_k$(new PhaseContent(fromPhaseOrContent.get_phase_iwuvki_k$(), fromPhaseOrContent.get_relation_u22tol_k$(), fromPhaseOrContent.sharedInterceptors_rmg8b1_k$()));
        continue $l$loop_0;
      }
       while (!(index === last));
    $this.interceptorsQuantity_1 = $this.interceptorsQuantity_1 + from.interceptorsQuantity_1 | 0;
    setInterceptorsListFromAnotherPipeline($this, from);
    return true;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7_1($this) == null) {
      cacheInterceptors($this);
    }
    $this.interceptorsListShared_1 = true;
    return ensureNotNull(_get_interceptors__h4min7_1($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b_0($this, null);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b_0($this, list);
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b_0($this, phaseContent.sharedInterceptors_rmg8b1_k$());
    $this.interceptorsListShared_1 = false;
    $this.interceptorsListSharedPhase_1 = phaseContent.get_phase_iwuvki_k$();
  }
  function setInterceptorsListFromAnotherPipeline($this, pipeline) {
    _set_interceptors__wod97b_0($this, sharedInterceptorsList(pipeline));
    $this.interceptorsListShared_1 = true;
    $this.interceptorsListSharedPhase_1 = null;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7_1($this);
    if ($this.phasesRaw_1.isEmpty_y1axqb_k$() || currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.interceptorsListShared_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, KtMutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.interceptorsListSharedPhase_1, phase)) {
      currentInterceptors.add_utx5q5_k$(block);
      return true;
    }
    if (equals(phase, last($this.phasesRaw_1)) || findPhaseIndex($this, phase) === get_lastIndex_0($this.phasesRaw_1)) {
      ensureNotNull(findPhase($this, phase)).addInterceptor_jvll3j_k$(block);
      currentInterceptors.add_utx5q5_k$(block);
      return true;
    }
    return false;
  }
  function insertRelativePhase($this, fromPhaseOrContent, fromPhase) {
    var tmp;
    if (fromPhaseOrContent === fromPhase) {
      tmp = Last_getInstance();
    } else {
      tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_relation_u22tol_k$();
    }
    var fromPhaseRelation = tmp;
    if (fromPhaseRelation instanceof Last) {
      $this.addPhase_zg5395_k$(fromPhase);
    } else {
      var tmp_0;
      if (fromPhaseRelation instanceof Before) {
        tmp_0 = hasPhase($this, fromPhaseRelation.get_relativeTo_o3bmds_k$());
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        $this.insertPhaseBefore_rj4han_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
      } else {
        if (fromPhaseRelation instanceof After) {
          $this.insertPhaseAfter_gfhxiu_k$(fromPhaseRelation.get_relativeTo_o3bmds_k$(), fromPhase);
        } else {
          return false;
        }
      }
    }
    return true;
  }
  function Pipeline$toString$lambda(it) {
    return '    ' + toString(getKClassFromExpression(it));
  }
  function Pipeline(phases) {
    this.attributes_1 = AttributesJsFn(true);
    this.developmentMode_1 = false;
    this.phasesRaw_1 = mutableListOf(phases.slice());
    this.interceptorsQuantity_1 = 0;
    this._interceptors_1 = atomic$ref$1(null);
    this.interceptorsListShared_1 = false;
    this.interceptorsListSharedPhase_1 = null;
  }
  protoOf(Pipeline).get_attributes_dgqof4_k$ = function () {
    return this.attributes_1;
  };
  protoOf(Pipeline).get_developmentMode_eqiro5_k$ = function () {
    return this.developmentMode_1;
  };
  protoOf(Pipeline).get_items_it823b_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.phasesRaw_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'io.ktor.util.pipeline.Pipeline.<get-items>.<anonymous>' call
      var tmp0_elvis_lhs = item instanceof PipelinePhase ? item : null;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp1_safe_receiver = item instanceof PhaseContent ? item : null;
        tmp = ensureNotNull(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_phase_iwuvki_k$());
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var tmp$ret$0 = tmp;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  };
  protoOf(Pipeline).get_isEmpty_zauvru_k$ = function () {
    return this.interceptorsQuantity_1 === 0;
  };
  protoOf(Pipeline).execute_qsx0hz_k$ = function (context, subject, $completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.get_context_h02k06_k$();
    return createContext(this, context, subject, tmp$ret$0).execute_pc5rz_k$(subject, $completion);
  };
  protoOf(Pipeline).addPhase_zg5395_k$ = function (phase) {
    if (hasPhase(this, phase)) {
      return Unit_getInstance();
    }
    this.phasesRaw_1.add_utx5q5_k$(phase);
  };
  protoOf(Pipeline).insertPhaseAfter_gfhxiu_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.phasesRaw_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.phasesRaw_1.get_c1px32_k$(i);
        var tmp0_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_relation_u22tol_k$();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp2_safe_receiver = relation instanceof After ? relation : null;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_relativeTo_o3bmds_k$();
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.phasesRaw_1.add_dl6gt3_k$(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  protoOf(Pipeline).insertPhaseBefore_rj4han_k$ = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference.toString() + ' was not registered for this pipeline');
    }
    this.phasesRaw_1.add_dl6gt3_k$(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  protoOf(Pipeline).intercept_k21bv3_k$ = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase.toString() + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (tryAddToPhaseFastPath(this, phase, block)) {
      this.interceptorsQuantity_1 = this.interceptorsQuantity_1 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.addInterceptor_jvll3j_k$(block);
    this.interceptorsQuantity_1 = this.interceptorsQuantity_1 + 1 | 0;
    resetInterceptorsList(this);
    this.afterIntercepted_wg8ihh_k$();
  };
  protoOf(Pipeline).afterIntercepted_wg8ihh_k$ = function () {
  };
  protoOf(Pipeline).interceptorsForPhase_20o0m5_k$ = function (phase) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_0 = this.phasesRaw_1;
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        if (element instanceof PhaseContent) {
          destination.add_utx5q5_k$(element);
        }
      }
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'io.ktor.util.pipeline.Pipeline.interceptorsForPhase.<anonymous>' call
        if (equals(element_0.get_phase_iwuvki_k$(), phase)) {
          tmp$ret$3 = element_0;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_safe_receiver = tmp$ret$3;
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    var tmp1_elvis_lhs = (tmp == null ? true : isInterface(tmp, KtList)) ? tmp : THROW_CCE();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(Pipeline).mergePhases_d14wdp_k$ = function (from) {
    var fromPhases = from.phasesRaw_1;
    var toInsert = toMutableList(fromPhases);
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!toInsert.isEmpty_y1axqb_k$()) {
        break $l$loop;
      }
      var iterator = toInsert.iterator_jk1svi_k$();
      while (iterator.hasNext_bitz1p_k$()) {
        var fromPhaseOrContent = iterator.next_20eer_k$();
        var tmp0_elvis_lhs = fromPhaseOrContent instanceof PipelinePhase ? fromPhaseOrContent : null;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          tmp = (fromPhaseOrContent instanceof PhaseContent ? fromPhaseOrContent : THROW_CCE()).get_phase_iwuvki_k$();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var fromPhase = tmp;
        if (hasPhase(this, fromPhase)) {
          iterator.remove_ldkf9o_k$();
        } else {
          var inserted = insertRelativePhase(this, fromPhaseOrContent, fromPhase);
          if (inserted) {
            iterator.remove_ldkf9o_k$();
          }
        }
      }
    }
  };
  protoOf(Pipeline).merge_cp7e5x_k$ = function (from) {
    if (fastPathMerge(this, from)) {
      return Unit_getInstance();
    }
    this.mergePhases_d14wdp_k$(from);
    mergeInterceptors(this, from);
  };
  protoOf(Pipeline).resetFrom_6a0d2u_k$ = function (from) {
    this.phasesRaw_1.clear_j9egeb_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.interceptorsQuantity_1 === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    fastPathMerge(this, from);
  };
  protoOf(Pipeline).toString = function () {
    var tmp = this.interceptorsForTests_kzq7w7_k$();
    var interceptors = joinToString(tmp, '\n', VOID, VOID, VOID, VOID, Pipeline$toString$lambda);
    return toString(getKClassFromExpression(this)) + '(0x' + toString_2(hashCode(this), 16) + ') [\n' + interceptors + '\n]';
  };
  protoOf(Pipeline).phaseInterceptors_ss260n_k$ = function (phase) {
    var tmp0_safe_receiver = findPhase(this, phase);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sharedInterceptors_rmg8b1_k$();
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(Pipeline).interceptorsForTests_kzq7w7_k$ = function () {
    var tmp0_elvis_lhs = _get_interceptors__h4min7_1(this);
    return tmp0_elvis_lhs == null ? cacheInterceptors(this) : tmp0_elvis_lhs;
  };
  function PipelineContext(context) {
    this.context_1 = context;
  }
  protoOf(PipelineContext).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    debugMode = debugMode === VOID ? false : debugMode;
    var tmp;
    if (get_DISABLE_SFG() || debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.name_1 = name;
  }
  protoOf(PipelinePhase).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(PipelinePhase).toString = function () {
    return "Phase('" + this.name_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  protoOf(After).get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.relativeTo_1 = relativeTo;
  }
  protoOf(Before).get_relativeTo_o3bmds_k$ = function () {
    return this.relativeTo_1;
  };
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  protoOf(Last).toString = function () {
    return 'Last';
  };
  protoOf(Last).hashCode = function () {
    return 967869129;
  };
  protoOf(Last).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Last))
      return false;
    other instanceof Last || THROW_CCE();
    return true;
  };
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function StackWalkingFailed() {
    StackWalkingFailed_instance = this;
  }
  protoOf(StackWalkingFailed).failedToCaptureStackFrame_fbnwv7_k$ = function () {
    // Inline function 'kotlin.error' call
    var message = 'Failed to capture stack frame. This is usually happens when a coroutine is running so the frame stack is changing quickly and the coroutine debug agent is unable to capture it concurrently. You may retry running your test to see this particular trace.';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  var StackWalkingFailed_instance;
  function StackWalkingFailed_getInstance() {
    if (StackWalkingFailed_instance == null)
      new StackWalkingFailed();
    return StackWalkingFailed_instance;
  }
  function StackWalkingFailedFrame() {
    StackWalkingFailedFrame_instance = this;
  }
  protoOf(StackWalkingFailedFrame).get_callerFrame_pfdb95_k$ = function () {
    return null;
  };
  protoOf(StackWalkingFailedFrame).getStackTraceElement_um8m53_k$ = function () {
    var tmp = getKClass(StackWalkingFailed);
    StackWalkingFailed_getInstance();
    return createStackTraceElement(tmp, 'failedToCaptureStackFrame', 'StackWalkingFailed.kt', 8);
  };
  protoOf(StackWalkingFailedFrame).get_context_h02k06_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  protoOf(StackWalkingFailedFrame).resumeWith_904v4j_k$ = function (result) {
    StackWalkingFailed_getInstance().failedToCaptureStackFrame_fbnwv7_k$();
  };
  protoOf(StackWalkingFailedFrame).resumeWith_dtxwbr_k$ = function (result) {
    return this.resumeWith_904v4j_k$(result);
  };
  var StackWalkingFailedFrame_instance;
  function StackWalkingFailedFrame_getInstance() {
    if (StackWalkingFailedFrame_instance == null)
      new StackWalkingFailedFrame();
    return StackWalkingFailedFrame_instance;
  }
  function peekContinuation($this) {
    if ($this.currentIndex_1 === -2147483648)
      $this.currentIndex_1 = $this.this$0__1.lastSuspensionIndex_1;
    if ($this.currentIndex_1 < 0) {
      $this.currentIndex_1 = -2147483648;
      return null;
    }
    try {
      var tmp0_elvis_lhs = $this.this$0__1.suspensions_1[$this.currentIndex_1];
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return StackWalkingFailedFrame_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var result = tmp;
      $this.currentIndex_1 = $this.currentIndex_1 - 1 | 0;
      return result;
    } catch ($p) {
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        return StackWalkingFailedFrame_getInstance();
      } else {
        throw $p;
      }
    }
  }
  function _get_blocks__xl8szf($this) {
    return $this.blocks_1;
  }
  function _get_suspensions__1l4o5($this) {
    return $this.suspensions_1;
  }
  function _set_lastSuspensionIndex__mqpay($this, _set____db54di) {
    $this.lastSuspensionIndex_1 = _set____db54di;
  }
  function _get_lastSuspensionIndex__cnzjle($this) {
    return $this.lastSuspensionIndex_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.index_1;
      if (currentIndex === $this.blocks_1.get_size_woubt6_k$()) {
        if (!direct) {
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          var value = $this.subject_1;
          var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.index_1 = currentIndex + 1 | 0;
      var next = $this.blocks_1.get_c1px32_k$(currentIndex);
      try {
        var result = pipelineStartCoroutineUninterceptedOrReturn(next, $this, $this.subject_1, $this.continuation_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var cause = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.lastSuspensionIndex_1 < 0) {
      // Inline function 'kotlin.error' call
      var message = 'No more continuations to resume';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var next = ensureNotNull($this.suspensions_1[$this.lastSuspensionIndex_1]);
    var _unary__edvuaz = $this.lastSuspensionIndex_1;
    $this.lastSuspensionIndex_1 = _unary__edvuaz - 1 | 0;
    $this.suspensions_1[_unary__edvuaz] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.resumeWith_dtxwbr_k$(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.resumeWith_dtxwbr_k$(tmp$ret$0);
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.lastSuspensionIndex_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var _unary__edvuaz = $this.lastSuspensionIndex_1;
    $this.lastSuspensionIndex_1 = _unary__edvuaz - 1 | 0;
    $this.suspensions_1[_unary__edvuaz] = null;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.this$0__1 = this$0;
    this.currentIndex_1 = -2147483648;
  }
  protoOf(SuspendFunctionGun$continuation$1).get_callerFrame_pfdb95_k$ = function () {
    var tmp = peekContinuation(this);
    return (!(tmp == null) ? isInterface(tmp, CoroutineStackFrame) : false) ? tmp : null;
  };
  protoOf(SuspendFunctionGun$continuation$1).set_currentIndex_yhm4em_k$ = function (_set____db54di) {
    this.currentIndex_1 = _set____db54di;
  };
  protoOf(SuspendFunctionGun$continuation$1).get_currentIndex_shwroi_k$ = function () {
    return this.currentIndex_1;
  };
  protoOf(SuspendFunctionGun$continuation$1).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(SuspendFunctionGun$continuation$1).get_context_h02k06_k$ = function () {
    var continuation = this.this$0__1.suspensions_1[this.this$0__1.lastSuspensionIndex_1];
    if (!(continuation === this) && !(continuation == null))
      return continuation.get_context_h02k06_k$();
    var index = this.this$0__1.lastSuspensionIndex_1 - 1 | 0;
    while (index >= 0) {
      var _unary__edvuaz = index;
      index = _unary__edvuaz - 1 | 0;
      var cont = this.this$0__1.suspensions_1[_unary__edvuaz];
      if (!(cont === this) && !(cont == null))
        return cont.get_context_h02k06_k$();
    }
    // Inline function 'kotlin.error' call
    var message = 'Not started';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(SuspendFunctionGun$continuation$1).resumeWith_n4kc79_k$ = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      resumeRootWith(this.this$0__1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.this$0__1, false);
  };
  protoOf(SuspendFunctionGun$continuation$1).resumeWith_dtxwbr_k$ = function (result) {
    return this.resumeWith_n4kc79_k$(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.blocks_1 = blocks;
    var tmp = this;
    tmp.continuation_1 = new SuspendFunctionGun$continuation$1(this);
    this.subject_1 = initial;
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.blocks_1.get_size_woubt6_k$();
    tmp_0.suspensions_1 = fillArrayVal(Array(size), null);
    this.lastSuspensionIndex_1 = -1;
    this.index_1 = 0;
  }
  protoOf(SuspendFunctionGun).get_coroutineContext_115oqo_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(SuspendFunctionGun).get_continuation_p3c3s3_k$ = function () {
    return this.continuation_1;
  };
  protoOf(SuspendFunctionGun).set_subject_651wuj_k$ = function (_set____db54di) {
    this.subject_1 = _set____db54di;
  };
  protoOf(SuspendFunctionGun).get_subject_tmjbgd_k$ = function () {
    return this.subject_1;
  };
  protoOf(SuspendFunctionGun).finish_mh2air_k$ = function () {
    this.index_1 = this.blocks_1.get_size_woubt6_k$();
  };
  protoOf(SuspendFunctionGun).proceed_tynop7_k$ = function ($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      if (this.index_1 === this.blocks_1.get_size_woubt6_k$()) {
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      this.addContinuation_71x8tk_k$(intercepted($completion));
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.subject_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  protoOf(SuspendFunctionGun).proceedWith_i5skhv_k$ = function (subject, $completion) {
    this.subject_1 = subject;
    return this.proceed_tynop7_k$($completion);
  };
  protoOf(SuspendFunctionGun).execute_pc5rz_k$ = function (initial, $completion) {
    this.index_1 = 0;
    if (this.index_1 === this.blocks_1.get_size_woubt6_k$())
      return initial;
    this.subject_1 = initial;
    if (this.lastSuspensionIndex_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.proceed_tynop7_k$($completion);
  };
  protoOf(SuspendFunctionGun).addContinuation_71x8tk_k$ = function (continuation) {
    this.lastSuspensionIndex_1 = this.lastSuspensionIndex_1 + 1 | 0;
    this.suspensions_1[this.lastSuspensionIndex_1] = continuation;
  };
  function TypeInfo_init_$Init$(type, reifiedType, kotlinType, $this) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    TypeInfo.call($this, type, kotlinType);
    return $this;
  }
  function TypeInfo_init_$Create$(type, reifiedType, kotlinType) {
    return TypeInfo_init_$Init$(type, reifiedType, kotlinType, objectCreate(protoOf(TypeInfo)));
  }
  function TypeInfo(type, kotlinType) {
    kotlinType = kotlinType === VOID ? null : kotlinType;
    this.type_1 = type;
    this.kotlinType_1 = kotlinType;
  }
  protoOf(TypeInfo).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(TypeInfo).get_kotlinType_flgmsk_k$ = function () {
    return this.kotlinType_1;
  };
  protoOf(TypeInfo).hashCode = function () {
    var tmp0_safe_receiver = this.kotlinType_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? this.type_1.hashCode() : tmp1_elvis_lhs;
  };
  protoOf(TypeInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp;
    if (!(this.kotlinType_1 == null) || !(other.kotlinType_1 == null)) {
      tmp = equals(this.kotlinType_1, other.kotlinType_1);
    } else {
      tmp = this.type_1.equals(other.type_1);
    }
    return tmp;
  };
  protoOf(TypeInfo).toString = function () {
    var tmp0_elvis_lhs = this.kotlinType_1;
    return 'TypeInfo(' + toString(tmp0_elvis_lhs == null ? this.type_1 : tmp0_elvis_lhs) + ')';
  };
  function get_platform(_this__u8e3s4) {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    // Inline function 'kotlin.getValue' call
    var this_0 = platform$delegate;
    platform$factory();
    return this_0.get_value_j01efc_k$();
  }
  var platform$delegate;
  function platform$delegate$lambda() {
    _init_properties_PlatformUtils_js_kt__7rxm8p();
    return new Js(hasNodeApi() ? JsPlatform_Node_getInstance() : JsPlatform_Browser_getInstance());
  }
  function platform$factory() {
    return getPropertyCallableRef('platform', 1, KProperty1, function (receiver) {
      return get_platform(receiver);
    }, null);
  }
  var properties_initialized_PlatformUtils_js_kt_8g036j;
  function _init_properties_PlatformUtils_js_kt__7rxm8p() {
    if (!properties_initialized_PlatformUtils_js_kt_8g036j) {
      properties_initialized_PlatformUtils_js_kt_8g036j = true;
      platform$delegate = lazy(platform$delegate$lambda);
    }
  }
  function GMTDate_0(timestamp) {
    timestamp = timestamp === VOID ? null : timestamp;
    var tmp1_safe_receiver = timestamp == null ? null : timestamp.toDouble_ygsx0s_k$();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp = new Date(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_2().from_1ixx1u_k$((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_3().from_1ixx1u_k$(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + timestamp.toString(), this);
    captureStack(this, InvalidTimestampException);
  }
  function pipelineStartCoroutineUninterceptedOrReturn(interceptor, context, subject, continuation) {
    return (typeof interceptor === 'function' ? interceptor : THROW_CCE())(context, subject, continuation);
  }
  function AttributesJsFn(concurrent) {
    concurrent = concurrent === VOID ? false : concurrent;
    return new AttributesJs();
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function AttributesJs() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(AttributesJs).getOrNull_6mjt1v_k$ = function (key) {
    var tmp = this.map_1.get_wei43m_k$(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(AttributesJs).contains_du0289_k$ = function (key) {
    return this.map_1.containsKey_aw81wo_k$(key);
  };
  protoOf(AttributesJs).put_gkntno_k$ = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.map_1.put_4fpzoq_k$(key, value);
  };
  protoOf(AttributesJs).remove_2btyex_k$ = function (key) {
    this.map_1.remove_gppy8k_k$(key);
  };
  protoOf(AttributesJs).computeIfAbsent_c4qp5i_k$ = function (key, block) {
    var tmp0_safe_receiver = this.map_1.get_wei43m_k$(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return !(tmp0_safe_receiver == null) ? tmp0_safe_receiver : THROW_CCE();
    }
    // Inline function 'kotlin.also' call
    var this_0 = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    this.map_1.put_4fpzoq_k$(key, this_0);
    return this_0;
  };
  protoOf(AttributesJs).get_allKeys_dton90_k$ = function () {
    return toList(this.map_1.get_keys_wop4xp_k$());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function get__crypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    // Inline function 'kotlin.getValue' call
    var this_0 = _crypto$delegate;
    _crypto$factory();
    return this_0.get_value_j01efc_k$();
  }
  var _crypto$delegate;
  function requireCrypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    return eval('require')('crypto');
  }
  function windowCrypto() {
    _init_properties_CryptoJs_kt__3vpuru();
    return window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
  }
  function _crypto$delegate$lambda() {
    _init_properties_CryptoJs_kt__3vpuru();
    return PlatformUtils_getInstance().get_IS_NODE_myvmya_k$() ? requireCrypto() : windowCrypto();
  }
  function _crypto$factory() {
    return getPropertyCallableRef('_crypto', 0, KProperty0, function () {
      return get__crypto();
    }, null);
  }
  var properties_initialized_CryptoJs_kt_linsrw;
  function _init_properties_CryptoJs_kt__3vpuru() {
    if (!properties_initialized_CryptoJs_kt_linsrw) {
      properties_initialized_CryptoJs_kt_linsrw = true;
      _crypto$delegate = lazy(_crypto$delegate$lambda);
    }
  }
  function hasNodeApi() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null || (typeof window !== 'undefined' && typeof window.process !== 'undefined' && window.process.versions != null && window.process.versions.node != null);
  }
  function get_isDevelopmentMode(_this__u8e3s4) {
    return false;
  }
  function get_isNewMemoryModel(_this__u8e3s4) {
    return true;
  }
  function CoroutineStackFrame() {
  }
  function createStackTraceElement(kClass, methodName, fileName, lineNumber) {
    return new Object();
  }
  function KtorSimpleLogger(name) {
    return new KtorSimpleLogger$1();
  }
  function getKtorLogLevel() {
    return process.env.KTOR_LOG_LEVEL;
  }
  function KtorSimpleLogger$1() {
    var tmp = this;
    var tmp_0;
    switch (PlatformUtils_getInstance().get_IS_NODE_myvmya_k$() || PlatformUtils_getInstance().get_IS_BROWSER_e36mbg_k$()) {
      case true:
        // Inline function 'kotlin.Result.getOrNull' call

        // Inline function 'kotlin.runCatching' call

        var tmp_1;
        try {
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var value = getKtorLogLevel();
          tmp_1 = _Result___init__impl__xyqfz8(value);
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var e = $p;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }

        var this_0 = tmp_1;
        var tmp_3;
        if (_Result___get_isFailure__impl__jpiriv(this_0)) {
          tmp_3 = null;
        } else {
          var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
          tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        }

        var tmp1_safe_receiver = tmp_3;
        var tmp_5;
        if (tmp1_safe_receiver == null) {
          tmp_5 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>' call
          var tmp$ret$6;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator = get_entries_2().iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              // Inline function 'io.ktor.util.logging.<no name provided>.level.<anonymous>.<anonymous>' call
              if (element.get_name_woqyms_k$() === tmp1_safe_receiver) {
                tmp$ret$6 = element;
                break $l$block;
              }
            }
            tmp$ret$6 = null;
          }
          tmp_5 = tmp$ret$6;
        }

        var tmp2_elvis_lhs = tmp_5;
        tmp_0 = tmp2_elvis_lhs == null ? LogLevel_INFO_getInstance() : tmp2_elvis_lhs;
        break;
      case false:
        tmp_0 = LogLevel_TRACE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.level_1 = tmp_0;
  }
  protoOf(KtorSimpleLogger$1).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(KtorSimpleLogger$1).error_5zor4u_k$ = function (message) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_ERROR_getInstance()) > 0)
      return Unit_getInstance();
    console.error(message);
  };
  protoOf(KtorSimpleLogger$1).error_1wn1f1_k$ = function (message, cause) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_ERROR_getInstance()) > 0)
      return Unit_getInstance();
    console.error(message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).warn_mz9voc_k$ = function (message) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_WARN_getInstance()) > 0)
      return Unit_getInstance();
    console.warn(message);
  };
  protoOf(KtorSimpleLogger$1).warn_ugzowl_k$ = function (message, cause) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_WARN_getInstance()) > 0)
      return Unit_getInstance();
    console.warn(message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).info_c8jb2c_k$ = function (message) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_INFO_getInstance()) > 0)
      return Unit_getInstance();
    console.info(message);
  };
  protoOf(KtorSimpleLogger$1).info_wgew19_k$ = function (message, cause) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_INFO_getInstance()) > 0)
      return Unit_getInstance();
    console.info(message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).debug_fck32h_k$ = function (message) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_getInstance();
    console.debug('DEBUG: ' + message);
  };
  protoOf(KtorSimpleLogger$1).debug_2dc8ew_k$ = function (message, cause) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_DEBUG_getInstance()) > 0)
      return Unit_getInstance();
    console.debug('DEBUG: ' + message + ', cause: ' + cause.toString());
  };
  protoOf(KtorSimpleLogger$1).trace_fti9bv_k$ = function (message) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_TRACE_getInstance()) > 0)
      return Unit_getInstance();
    console.debug('TRACE: ' + message);
  };
  protoOf(KtorSimpleLogger$1).trace_lm3jna_k$ = function (message, cause) {
    if (this.level_1.compareTo_30rs7w_k$(LogLevel_TRACE_getInstance()) > 0)
      return Unit_getInstance();
    console.debug('TRACE: ' + message + ', cause: ' + cause.toString());
  };
  function Logger() {
  }
  var LogLevel_TRACE_instance;
  var LogLevel_DEBUG_instance;
  var LogLevel_INFO_instance;
  var LogLevel_WARN_instance;
  var LogLevel_ERROR_instance;
  var LogLevel_NONE_instance;
  function values_2() {
    return [LogLevel_TRACE_getInstance(), LogLevel_DEBUG_getInstance(), LogLevel_INFO_getInstance(), LogLevel_WARN_getInstance(), LogLevel_ERROR_getInstance(), LogLevel_NONE_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'TRACE':
        return LogLevel_TRACE_getInstance();
      case 'DEBUG':
        return LogLevel_DEBUG_getInstance();
      case 'INFO':
        return LogLevel_INFO_getInstance();
      case 'WARN':
        return LogLevel_WARN_getInstance();
      case 'ERROR':
        return LogLevel_ERROR_getInstance();
      case 'NONE':
        return LogLevel_NONE_getInstance();
      default:
        LogLevel_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_getInstance();
    LogLevel_entriesInitialized = true;
    LogLevel_TRACE_instance = new LogLevel('TRACE', 0);
    LogLevel_DEBUG_instance = new LogLevel('DEBUG', 1);
    LogLevel_INFO_instance = new LogLevel('INFO', 2);
    LogLevel_WARN_instance = new LogLevel('WARN', 3);
    LogLevel_ERROR_instance = new LogLevel('ERROR', 4);
    LogLevel_NONE_instance = new LogLevel('NONE', 5);
  }
  var $ENTRIES_2;
  function LogLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LogLevel_TRACE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_TRACE_instance;
  }
  function LogLevel_DEBUG_getInstance() {
    LogLevel_initEntries();
    return LogLevel_DEBUG_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_WARN_getInstance() {
    LogLevel_initEntries();
    return LogLevel_WARN_instance;
  }
  function LogLevel_ERROR_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ERROR_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function get_DISABLE_SFG() {
    return DISABLE_SFG;
  }
  var DISABLE_SFG;
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function Type() {
  }
  //region block: post-declaration
  protoOf(CaseInsensitiveMap).asJsMapView_ii14sm_k$ = asJsMapView;
  protoOf(CaseInsensitiveMap).asJsReadonlyMapView_6h4p3w_k$ = asJsReadonlyMapView;
  protoOf(DelegatingMutableSet).asJsSetView_xjflv8_k$ = asJsSetView;
  protoOf(DelegatingMutableSet).asJsReadonlySetView_ciim7e_k$ = asJsReadonlySetView;
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf(AttributesJs).get_r696p5_k$ = get;
  protoOf(AttributesJs).take_cyp7s6_k$ = take;
  protoOf(AttributesJs).takeOrNull_5hqtl0_k$ = takeOrNull;
  //endregion
  //region block: init
  DISABLE_SFG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PlatformUtils_getInstance;
  _.$_$.b = CopyOnWriteHashMap;
  _.$_$.c = GMTDate_0;
  _.$_$.d = LockFreeLinkedListHead;
  _.$_$.e = LockFreeLinkedListNode;
  _.$_$.f = KtorSimpleLogger;
  _.$_$.g = PipelineContext;
  _.$_$.h = PipelinePhase;
  _.$_$.i = Pipeline;
  _.$_$.j = TypeInfo;
  _.$_$.k = instanceOf;
  _.$_$.l = AttributeKey;
  _.$_$.m = AttributesJsFn;
  _.$_$.n = Attributes;
  _.$_$.o = SilentSupervisor;
  _.$_$.p = contains_0;
  _.$_$.q = contains;
  _.$_$.r = forEach;
  _.$_$.s = get_0;
  _.$_$.t = StringValuesBuilderImpl;
  _.$_$.u = StringValuesBuilder;
  _.$_$.v = StringValuesImpl;
  _.$_$.w = StringValues;
  _.$_$.x = appendAll;
  _.$_$.y = caseInsensitiveMap;
  _.$_$.z = isLowerCase;
  _.$_$.a1 = putAll;
  _.$_$.b1 = split;
  _.$_$.c1 = toCharArray;
  _.$_$.d1 = toLowerCasePreservingASCIIRules;
  _.$_$.e1 = toMap;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils.js.map
