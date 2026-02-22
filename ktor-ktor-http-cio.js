(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-utils.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-bytestring.js', './kotlinx-io-kotlinx-io-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'), require('./kotlinx-io-kotlinx-io-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-http-cio'.");
    }
    globalThis['ktor-ktor-http-cio'] = factory(typeof globalThis['ktor-ktor-http-cio'] === 'undefined' ? {} : globalThis['ktor-ktor-http-cio'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlinx-io-kotlinx-io-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring, kotlin_org_jetbrains_kotlinx_kotlinx_io_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty1 = kotlin_kotlin.$_$.ue;
  var getPropertyCallableRef = kotlin_kotlin.$_$.rc;
  var toString = kotlin_kotlin.$_$.yd;
  var protoOf = kotlin_kotlin.$_$.vd;
  var listOf = kotlin_kotlin.$_$.q8;
  var Entry = kotlin_kotlin.$_$.d6;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var VOID = kotlin_kotlin.$_$.c;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.sj;
  var map = kotlin_kotlin.$_$.af;
  var toList = kotlin_kotlin.$_$.df;
  var toSet = kotlin_kotlin.$_$.ef;
  var contains = kotlin_io_ktor_ktor_utils.$_$.u;
  var contains_0 = kotlin_io_ktor_ktor_utils.$_$.t;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.v;
  var Headers = kotlin_io_ktor_ktor_http.$_$.i1;
  var CoroutineImpl = kotlin_kotlin.$_$.ta;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.wc;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.j;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var readText = kotlin_io_ktor_ktor_io.$_$.a2;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.d1;
  var closeFinally = kotlin_kotlin.$_$.kj;
  var Long = kotlin_kotlin.$_$.qi;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.r;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var DefaultPool = kotlin_io_ktor_ktor_io.$_$.l1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var StringBuilder = kotlin_kotlin.$_$.gf;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.h1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var take = kotlin_kotlin.$_$.cf;
  var last = kotlin_kotlin.$_$.ze;
  var SequenceScope = kotlin_kotlin.$_$.xe;
  var abs = kotlin_kotlin.$_$.zd;
  var initMetadataForLambda = kotlin_kotlin.$_$.zc;
  var sequence = kotlin_kotlin.$_$.bf;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var fill = kotlin_kotlin.$_$.y7;
  var isIntArray = kotlin_kotlin.$_$.id;
  var SuspendFunction1 = kotlin_kotlin.$_$.va;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x2;
  var endsWith = kotlin_kotlin.$_$.rf;
  var charSequenceLength = kotlin_kotlin.$_$.kc;
  var charSequenceGet = kotlin_kotlin.$_$.jc;
  var Char = kotlin_kotlin.$_$.gi;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.y2;
  var contains_1 = kotlin_kotlin.$_$.mf;
  var charSequenceSubSequence = kotlin_kotlin.$_$.lc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.d3;
  var IllegalStateException = kotlin_kotlin.$_$.pi;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.fc;
  var readLineStrictTo = kotlin_io_ktor_ktor_io.$_$.g;
  var equalsLong = kotlin_kotlin.$_$.nb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var setOf = kotlin_kotlin.$_$.e9;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_io.$_$.s;
  var LineEndingMode__plus_impl_ttpz2j = kotlin_io_ktor_ktor_io.$_$.p;
  var listOf_0 = kotlin_kotlin.$_$.r8;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ByteString_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.a;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var toString_0 = kotlin_kotlin.$_$.oh;
  var toByte = kotlin_kotlin.$_$.wd;
  var copyOfRange = kotlin_kotlin.$_$.h7;
  var produce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var startsWith = kotlin_kotlin.$_$.xg;
  var readUntil = kotlin_io_ktor_ktor_io.$_$.k;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.u1;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.jd;
  var counted = kotlin_io_ktor_ktor_io.$_$.x1;
  var writer = kotlin_io_ktor_ktor_io.$_$.b2;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.e1;
  var compare = kotlin_kotlin.$_$.ib;
  var skipIfFound = kotlin_io_ktor_ktor_io.$_$.l;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.n1;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var close = kotlin_io_ktor_ktor_io.$_$.w1;
  var subtract = kotlin_kotlin.$_$.zb;
  var convertToInt = kotlin_kotlin.$_$.kb;
  var readPacket = kotlin_io_ktor_ktor_io.$_$.i;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.c;
  var add = kotlin_kotlin.$_$.eb;
  var fromInt = kotlin_kotlin.$_$.ob;
  var ByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var compareTo = kotlin_kotlin.$_$.mc;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var Collection = kotlin_kotlin.$_$.u5;
  var emptyList = kotlin_kotlin.$_$.v7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var toString_1 = kotlin_kotlin.$_$.e3;
  var charCodeAt = kotlin_kotlin.$_$.ic;
  var ensureNotNull = kotlin_kotlin.$_$.nj;
  var isCharSequence = kotlin_kotlin.$_$.fd;
  var getStringHashCode = kotlin_kotlin.$_$.sc;
  var CharSequence = kotlin_kotlin.$_$.fi;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Appendable = kotlin_kotlin.$_$.ff;
  var NoPoolImpl = kotlin_io_ktor_ktor_io.$_$.m1;
  var charArray = kotlin_kotlin.$_$.hc;
  var shiftLeft = kotlin_kotlin.$_$.wb;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var numberRangeToNumber = kotlin_kotlin.$_$.sd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var numberToLong = kotlin_kotlin.$_$.vb;
  var toLongArray = kotlin_kotlin.$_$.q9;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.b3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.a3;
  var toByteArray_0 = kotlin_kotlin.$_$.l9;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var isWhitespace = kotlin_kotlin.$_$.eg;
  var cancel = kotlin_io_ktor_ktor_io.$_$.v1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [Entry]);
  initMetadataForClass(CIOHeaders, 'CIOHeaders', VOID, VOID, [Headers]);
  initMetadataForCoroutine($readPartCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPartSuspendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($eventToDataCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($partToDataCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CIOMultipartDataBase, 'CIOMultipartDataBase', VOID, VOID, [MultiPartData, CoroutineScope], [0, 1]);
  initMetadataForClass(ChunkSizeBufferPool$1, VOID, VOID, DefaultPool);
  initMetadataForLambda(HttpHeadersMap$getAll$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(HttpHeadersMap, 'HttpHeadersMap');
  initMetadataForLambda(HeadersData$headersStarts$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(HeadersData, 'HeadersData', HeadersData);
  initMetadataForClass(IntArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(HeadersDataPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(ParserException, 'ParserException', VOID, IllegalStateException);
  initMetadataForCoroutine($parseHeadersCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultipartEvent, 'MultipartEvent');
  initMetadataForClass(Preamble, 'Preamble', VOID, MultipartEvent);
  initMetadataForClass(MultipartPart, 'MultipartPart', VOID, MultipartEvent);
  initMetadataForClass(Epilogue, 'Epilogue', VOID, MultipartEvent);
  initMetadataForLambda(parseMultipart$slambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(parseMultipart$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($parsePartHeadersImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($parsePartBodyImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundReadCountCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForCompanion(Companion);
  initMetadataForClass(AsciiCharTree, 'AsciiCharTree');
  initMetadataForClass(SubSequenceImpl, 'SubSequenceImpl', VOID, VOID, [CharSequence]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', CharArrayBuilder, VOID, [CharSequence, Appendable]);
  initMetadataForClass(CharArrayPool$1, VOID, VOID, NoPoolImpl);
  initMetadataForClass(CharArrayPool$2, VOID, VOID, DefaultPool);
  initMetadataForClass(UnsupportedMediaTypeExceptionCIO, 'UnsupportedMediaTypeExceptionCIO', VOID, IOException);
  initMetadataForClass(MutableRange, 'MutableRange');
  //endregion
  function _get_offset__c6qzmg($this) {
    return $this.offset_1;
  }
  function _get_headers__gprxor($this) {
    return $this.headers_1;
  }
  function _get_names__dwg6t3($this) {
    var tmp0 = $this.names$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('names', 1, tmp, CIOHeaders$_get_names_$ref_z8h5o1(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function Entry_0($outer, offset) {
    this.$this_1 = $outer;
    this.offset_1 = offset;
  }
  protoOf(Entry_0).get_key_18j28a_k$ = function () {
    return toString(this.$this_1.headers_1.nameAtOffset_nevk7t_k$(this.offset_1));
  };
  protoOf(Entry_0).get_value_j01efc_k$ = function () {
    return listOf(toString(this.$this_1.headers_1.valueAtOffset_rvq37j_k$(this.offset_1)));
  };
  function CIOHeaders$names$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.apply' call
      var this_0 = LinkedHashSet_init_$Create$(this$0.headers_1.get_size_woubt6_k$());
      var _iterator__ex2g4s = this$0.headers_1.offsets_plvqo0_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var offset = _iterator__ex2g4s.next_20eer_k$();
        this_0.add_utx5q5_k$(toString(this$0.headers_1.nameAtOffset_nevk7t_k$(offset)));
      }
      return this_0;
    };
  }
  function CIOHeaders$_get_names_$ref_z8h5o1() {
    return function (p0) {
      return _get_names__dwg6t3(p0);
    };
  }
  function CIOHeaders$getAll$lambda(it) {
    return toString(it);
  }
  function CIOHeaders$entries$lambda(this$0) {
    return function (idx) {
      return new Entry_0(this$0, idx);
    };
  }
  function CIOHeaders(headers) {
    this.headers_1 = headers;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.names$delegate_1 = lazy(tmp_0, CIOHeaders$names$delegate$lambda(this));
  }
  protoOf(CIOHeaders).get_caseInsensitiveName_ehooe5_k$ = function () {
    return true;
  };
  protoOf(CIOHeaders).names_1q9mbs_k$ = function () {
    return _get_names__dwg6t3(this);
  };
  protoOf(CIOHeaders).get_6bo4tg_k$ = function (name) {
    var tmp0_safe_receiver = this.headers_1.get_6bo4tg_k$(name);
    return tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
  };
  protoOf(CIOHeaders).getAll_ffxf4h_k$ = function (name) {
    var tmp = this.headers_1.getAll_ffxf4h_k$(name);
    // Inline function 'kotlin.takeIf' call
    var this_0 = toList(map(tmp, CIOHeaders$getAll$lambda));
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this_0.isEmpty_y1axqb_k$()) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(CIOHeaders).isEmpty_y1axqb_k$ = function () {
    return this.headers_1.get_size_woubt6_k$() === 0;
  };
  protoOf(CIOHeaders).entries_qbkxv4_k$ = function () {
    var tmp = this.headers_1.offsets_plvqo0_k$();
    return toSet(map(tmp, CIOHeaders$entries$lambda(this)));
  };
  function _set_previousPart__ohu1o3($this, _set____db54di) {
    $this.previousPart_1 = _set____db54di;
  }
  function _get_previousPart__8y3b3z($this) {
    return $this.previousPart_1;
  }
  function _get_events__f13j82($this) {
    return $this.events_1;
  }
  function readPartSuspend($this, $completion) {
    var tmp = new $readPartSuspendCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function eventToData($this, event, $completion) {
    var tmp = new $eventToDataCOROUTINE$($this, event, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function partToData($this, part, $completion) {
    var tmp = new $partToDataCOROUTINE$($this, part, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function CIOMultipartDataBase$partToData$lambda($part) {
    return function () {
      $part.release_wu5yyf_k$();
      return Unit_getInstance();
    };
  }
  function CIOMultipartDataBase$partToData$lambda_0($part) {
    return function () {
      return $part.get_body_wojkyz_k$();
    };
  }
  function CIOMultipartDataBase$partToData$lambda_1($part) {
    return function () {
      $part.release_wu5yyf_k$();
      return Unit_getInstance();
    };
  }
  function $readPartCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readPartCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp0_safe_receiver = this._this__u8e3s4__1.previousPart_1;
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_dispose_swvq5y_k$();
            if (tmp1_safe_receiver == null)
              null;
            else
              tmp1_safe_receiver();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            var tmp2_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this._this__u8e3s4__1.events_1.tryReceive_y3ovg2_k$());
            if (tmp2_elvis_lhs == null) {
              this.set_state_rjd8d0_k$(4);
              var tmp_0 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT0__1 = tmp2_elvis_lhs;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            var event = this.WHEN_RESULT0__1;
            this.set_state_rjd8d0_k$(3);
            suspendResult = eventToData(this._this__u8e3s4__1, event, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp3_safe_receiver = suspendResult;
            if (tmp3_safe_receiver == null)
              null;
            else {
              this._this__u8e3s4__1.previousPart_1 = tmp3_safe_receiver;
              return tmp3_safe_receiver;
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            suspendResult = readPartSuspend(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return suspendResult;
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
  function $readPartSuspendCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($readPartSuspendCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            this.set_exceptionState_fex74n_k$(5);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = this._this__u8e3s4__1.events_1.receive_awoumx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            this.set_state_rjd8d0_k$(3);
            suspendResult = eventToData(this._this__u8e3s4__1, event, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var tmp0_safe_receiver = suspendResult;
            if (tmp0_safe_receiver == null)
              null;
            else {
              return tmp0_safe_receiver;
            }

            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 4:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof ClosedReceiveChannelException) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              return null;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 6:
            throw this.get_exception_x0n6w6_k$();
          case 7:
            this.set_exceptionState_fex74n_k$(6);
            return Unit_getInstance();
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
  function $eventToDataCOROUTINE$(_this__u8e3s4, event, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.event_1 = event;
  }
  protoOf($eventToDataCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_exceptionState_fex74n_k$(3);
            if (this.event_1 instanceof MultipartPart) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = partToData(this._this__u8e3s4__1, this.event_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              this.event_1.release_wu5yyf_k$();
              tmp_0.WHEN_RESULT1__1 = null;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.TRY_RESULT0__1 = this.WHEN_RESULT1__1;
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(4);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              this.event_1.release_wu5yyf_k$();
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 4:
            throw this.get_exception_x0n6w6_k$();
          case 5:
            this.set_exceptionState_fex74n_k$(4);
            return this.TRY_RESULT0__1;
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
  function $partToDataCOROUTINE$(_this__u8e3s4, part, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.part_1 = part;
  }
  protoOf($partToDataCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.part_1.get_headers_ef25jx_k$().await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.headers0__1 = suspendResult;
            var tmp0_safe_receiver = this.headers0__1.get_6bo4tg_k$('Content-Disposition');
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = Companion_getInstance().parse_pc1q8p_k$(toString(tmp0_safe_receiver));
            }

            var contentDisposition = tmp_0;
            var filename = contentDisposition == null ? null : contentDisposition.parameter_w3eqbz_k$('filename');
            var body = this.part_1.get_body_wojkyz_k$();
            if (filename == null) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = readRemaining(body, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            var tmp_1 = CIOMultipartDataBase$partToData$lambda_0(this.part_1);
            return new FileItem(tmp_1, CIOMultipartDataBase$partToData$lambda_1(this.part_1), new CIOHeaders(this.headers0__1));
          case 3:
            var packet = suspendResult;
            l$ret$7: do {
              var exception = null;
              l$ret$5: do {
                l$ret$3: do {
                  var tmp$ret$0;
                  l$ret$1: do {
                    var tmp_2;
                    try {
                      var tmp_3;
                      try {
                        var tmp_4 = readText(packet);
                        tmp$ret$0 = new FormItem(tmp_4, CIOMultipartDataBase$partToData$lambda(this.part_1), new CIOHeaders(this.headers0__1));
                        break l$ret$1;
                      } catch ($p) {
                        var tmp_5;
                        if ($p instanceof Error) {
                          var e = $p;
                          exception = e;
                          throw e;
                        } else {
                          throw $p;
                        }
                      }
                    } catch ($p) {
                      var tmp_6;
                      var t = $p;
                      closeFinally(packet, exception);
                      throw t;
                    }
                  }
                   while (false);
                  var tmp_7 = tmp$ret$0;
                  closeFinally(packet, exception);
                  return tmp_7;
                }
                 while (false);
                closeFinally(packet, exception);
                break l$ret$7;
              }
               while (false);
              closeFinally(packet, exception);
            }
             while (false);
            break;
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
  function CIOMultipartDataBase(coroutineContext, channel, contentType, contentLength, formFieldLimit) {
    formFieldLimit = formFieldLimit === VOID ? new Long(65536, 0) : formFieldLimit;
    this.coroutineContext_1 = coroutineContext;
    this.previousPart_1 = null;
    this.events_1 = parseMultipart(this, channel, contentType, contentLength, formFieldLimit);
  }
  protoOf(CIOMultipartDataBase).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(CIOMultipartDataBase).readPart_rsoh2l_k$ = function ($completion) {
    var tmp = new $readPartCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function get_ChunkSizeBufferPool() {
    _init_properties_ChunkedTransferEncoding_kt__hi13vs();
    return ChunkSizeBufferPool;
  }
  var ChunkSizeBufferPool;
  function get_CrLf() {
    _init_properties_ChunkedTransferEncoding_kt__hi13vs();
    return CrLf;
  }
  var CrLf;
  function get_LastChunkBytes() {
    _init_properties_ChunkedTransferEncoding_kt__hi13vs();
    return LastChunkBytes;
  }
  var LastChunkBytes;
  function ChunkSizeBufferPool$1() {
    DefaultPool.call(this, 2048);
  }
  protoOf(ChunkSizeBufferPool$1).produceInstance_xswihh_k$ = function () {
    return StringBuilder_init_$Create$(128);
  };
  protoOf(ChunkSizeBufferPool$1).clearInstance_x11ncc_k$ = function (instance) {
    // Inline function 'kotlin.apply' call
    instance.clear_1keqml_k$();
    return instance;
  };
  protoOf(ChunkSizeBufferPool$1).clearInstance_nfz4jw_k$ = function (instance) {
    return this.clearInstance_x11ncc_k$(instance instanceof StringBuilder ? instance : THROW_CCE());
  };
  var properties_initialized_ChunkedTransferEncoding_kt_x17w8q;
  function _init_properties_ChunkedTransferEncoding_kt__hi13vs() {
    if (!properties_initialized_ChunkedTransferEncoding_kt_x17w8q) {
      properties_initialized_ChunkedTransferEncoding_kt_x17w8q = true;
      ChunkSizeBufferPool = new ChunkSizeBufferPool$1();
      CrLf = toByteArray('\r\n');
      LastChunkBytes = toByteArray('0\r\n\r\n');
    }
  }
  function get_IntArrayPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return IntArrayPool;
  }
  var IntArrayPool;
  function get_HeadersDataPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return HeadersDataPool;
  }
  var HeadersDataPool;
  function _get_builder__bi005y($this) {
    return $this.builder_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _set_headerCapacity__4w2v74($this, _set____db54di) {
    $this.headerCapacity_1 = _set____db54di;
  }
  function _get_headerCapacity__kn0kuc($this) {
    return $this.headerCapacity_1;
  }
  function _set_headersData__qdrknf($this, _set____db54di) {
    $this.headersData_1 = _set____db54di;
  }
  function _get_headersData__3wmloh($this) {
    return $this.headersData_1;
  }
  function thresholdReached($this) {
    return $this.size_1 >= $this.headerCapacity_1 * 0.75;
  }
  function idxToOffset($this, idx) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(idx >= 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(idx < $this.size_1)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return last(take($this.offsets_plvqo0_k$(), idx + 1 | 0));
  }
  function resize($this) {
    var prevSize = $this.size_1;
    var prevData = $this.headersData_1;
    $this.size_1 = 0;
    $this.headerCapacity_1 = imul($this.headerCapacity_1, 2) | 128;
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = get_HeadersDataPool().borrow_mvkpor_k$();
    this_0.prepare_vwo6lb_k$(imul(prevData.arraysCount_qdzoj9_k$(), 2) | 1);
    tmp.headersData_1 = this_0;
    var _iterator__ex2g4s = prevData.headersStarts_9a2v7t_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var headerOffset = _iterator__ex2g4s.next_20eer_k$();
      $this.put_ca69tt_k$(prevData.at_whxqnv_k$(headerOffset + 1 | 0), prevData.at_whxqnv_k$(headerOffset + 2 | 0), prevData.at_whxqnv_k$(headerOffset + 3 | 0), prevData.at_whxqnv_k$(headerOffset + 4 | 0));
    }
    get_HeadersDataPool().recycle_d2xv5h_k$(prevData);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(prevSize === $this.size_1)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function headerHasName($this, name, headerOffset) {
    var nameStartIndex = $this.headersData_1.at_whxqnv_k$(headerOffset + 1 | 0);
    var nameEndIndex = $this.headersData_1.at_whxqnv_k$(headerOffset + 2 | 0);
    return equalsLowerCase($this.builder_1, nameStartIndex, nameEndIndex, name);
  }
  function HttpHeadersMap$getAll$slambda(this$0, $name, resultContinuation) {
    this.this$0__1 = this$0;
    this.$name_1 = $name;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpHeadersMap$getAll$slambda).invoke_v1hwmy_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_z1m03u_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HttpHeadersMap$getAll$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_v1hwmy_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpHeadersMap$getAll$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            if (this.this$0__1.size_1 === 0)
              return Unit_getInstance();
            var this_0 = hashCodeLowerCase(this.$name_1);
            var hash = abs(this_0);
            this.headerIndex0__1 = hash % this.this$0__1.headerCapacity_1 | 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!!(this.this$0__1.headersData_1.at_whxqnv_k$(imul(this.headerIndex0__1, 6) + 0 | 0) === -1)) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            if (headerHasName(this.this$0__1, this.$name_1, imul(this.headerIndex0__1, 6))) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.this$0__1.valueAtOffset_rvq37j_k$(imul(this.headerIndex0__1, 6)), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 2:
            this.headerIndex0__1 = (this.headerIndex0__1 + 1 | 0) % this.this$0__1.headerCapacity_1 | 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            this.nextHeaderIndex1__1 = this.this$0__1.headersData_1.at_whxqnv_k$(imul(this.headerIndex0__1, 6) + 5 | 0);
            if (this.nextHeaderIndex1__1 === -1) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            this.headerIndex0__1 = this.nextHeaderIndex1__1;
            this.set_state_rjd8d0_k$(1);
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
  protoOf(HttpHeadersMap$getAll$slambda).create_z1m03u_k$ = function ($this$sequence, completion) {
    var i = new HttpHeadersMap$getAll$slambda(this.this$0__1, this.$name_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(HttpHeadersMap$getAll$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_z1m03u_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function HttpHeadersMap$getAll$slambda_0(this$0, $name, resultContinuation) {
    var i = new HttpHeadersMap$getAll$slambda(this$0, $name, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_v1hwmy_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HttpHeadersMap(builder) {
    this.builder_1 = builder;
    this.size_1 = 0;
    this.headerCapacity_1 = 0;
    this.headersData_1 = get_HeadersDataPool().borrow_mvkpor_k$();
  }
  protoOf(HttpHeadersMap).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(HttpHeadersMap).find_341no7_k$ = function (name, fromIndex) {
    if (this.size_1 === 0)
      return -1;
    var offset = idxToOffset(this, fromIndex);
    var nextIndex = fromIndex;
    while (!(this.headersData_1.at_whxqnv_k$(offset + 0 | 0) === -1)) {
      if (headerHasName(this, name, offset)) {
        return nextIndex;
      }
      nextIndex = nextIndex + 1 | 0;
      offset = (offset / 6 | 0) % this.headerCapacity_1 | 0;
    }
    return -1;
  };
  protoOf(HttpHeadersMap).find$default_2c6xen_k$ = function (name, fromIndex, $super) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    return $super === VOID ? this.find_341no7_k$(name, fromIndex) : $super.find_341no7_k$.call(this, name, fromIndex);
  };
  protoOf(HttpHeadersMap).get_6bo4tg_k$ = function (name) {
    if (this.size_1 === 0)
      return null;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(name);
    var hash = abs(this_0);
    var headerIndex = hash % this.headerCapacity_1 | 0;
    while (!(this.headersData_1.at_whxqnv_k$(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        return this.valueAtOffset_rvq37j_k$(imul(headerIndex, 6));
      }
      headerIndex = (headerIndex + 1 | 0) % this.headerCapacity_1 | 0;
    }
    return null;
  };
  protoOf(HttpHeadersMap).getAll_ffxf4h_k$ = function (name) {
    return sequence(HttpHeadersMap$getAll$slambda_0(this, name, null));
  };
  protoOf(HttpHeadersMap).offsets_plvqo0_k$ = function () {
    return this.headersData_1.headersStarts_9a2v7t_k$();
  };
  protoOf(HttpHeadersMap).put_2iceip_k$ = function (nameHash, valueHash, nameStartIndex, nameEndIndex, valueStartIndex, valueEndIndex) {
    this.put_ca69tt_k$(nameStartIndex, nameEndIndex, valueStartIndex, valueEndIndex);
  };
  protoOf(HttpHeadersMap).put_ca69tt_k$ = function (nameStartIndex, nameEndIndex, valueStartIndex, valueEndIndex) {
    if (thresholdReached(this)) {
      resize(this);
    }
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(this.builder_1, nameStartIndex, nameEndIndex);
    var hash = abs(this_0);
    var name = this.builder_1.subSequence_hm5hnj_k$(nameStartIndex, nameEndIndex);
    var headerIndex = hash % this.headerCapacity_1 | 0;
    var sameNameHeaderIndex = -1;
    while (!(this.headersData_1.at_whxqnv_k$(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        sameNameHeaderIndex = headerIndex;
      }
      headerIndex = (headerIndex + 1 | 0) % this.headerCapacity_1 | 0;
    }
    var headerOffset = imul(headerIndex, 6);
    this.headersData_1.set_g707pu_k$(headerOffset + 0 | 0, hash);
    this.headersData_1.set_g707pu_k$(headerOffset + 1 | 0, nameStartIndex);
    this.headersData_1.set_g707pu_k$(headerOffset + 2 | 0, nameEndIndex);
    this.headersData_1.set_g707pu_k$(headerOffset + 3 | 0, valueStartIndex);
    this.headersData_1.set_g707pu_k$(headerOffset + 4 | 0, valueEndIndex);
    this.headersData_1.set_g707pu_k$(headerOffset + 5 | 0, -1);
    if (!(sameNameHeaderIndex === -1)) {
      this.headersData_1.set_g707pu_k$(imul(sameNameHeaderIndex, 6) + 5 | 0, headerIndex);
    }
    this.size_1 = this.size_1 + 1 | 0;
  };
  protoOf(HttpHeadersMap).nameAt_2ywsjq_k$ = function (idx) {
    return this.nameAtOffset_nevk7t_k$(idxToOffset(this, idx));
  };
  protoOf(HttpHeadersMap).valueAt_sbdne4_k$ = function (idx) {
    return this.valueAtOffset_rvq37j_k$(idxToOffset(this, idx));
  };
  protoOf(HttpHeadersMap).nameAtOffset_nevk7t_k$ = function (headerOffset) {
    var nameStartIndex = this.headersData_1.at_whxqnv_k$(headerOffset + 1 | 0);
    var nameEndIndex = this.headersData_1.at_whxqnv_k$(headerOffset + 2 | 0);
    return this.builder_1.subSequence_hm5hnj_k$(nameStartIndex, nameEndIndex);
  };
  protoOf(HttpHeadersMap).valueAtOffset_rvq37j_k$ = function (headerOffset) {
    var valueStartIndex = this.headersData_1.at_whxqnv_k$(headerOffset + 3 | 0);
    var valueEndIndex = this.headersData_1.at_whxqnv_k$(headerOffset + 4 | 0);
    return this.builder_1.subSequence_hm5hnj_k$(valueStartIndex, valueEndIndex);
  };
  protoOf(HttpHeadersMap).release_wu5yyf_k$ = function () {
    this.size_1 = 0;
    this.headerCapacity_1 = 0;
    get_HeadersDataPool().recycle_d2xv5h_k$(this.headersData_1);
    this.headersData_1 = get_HeadersDataPool().borrow_mvkpor_k$();
  };
  protoOf(HttpHeadersMap).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    dumpTo(this, '', this_0);
    return this_0.toString();
  };
  function _set_arrays__o6miot($this, _set____db54di) {
    $this.arrays_1 = _set____db54di;
  }
  function _get_arrays__pnd3bl($this) {
    return $this.arrays_1;
  }
  function HeadersData$headersStarts$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HeadersData$headersStarts$slambda).invoke_pgsqqr_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_rkcuc7_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HeadersData$headersStarts$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_pgsqqr_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HeadersData$headersStarts$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.joinedIndex0__1 = 0;
            this._iterator_3_yqohr3__1 = this.this$0__1.arrays_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_3_yqohr3__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.arr2__1 = this._iterator_3_yqohr3__1.next_20eer_k$();
            this.localIndex1__1 = 0;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!(this.localIndex1__1 < this.arr2__1.length)) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            if (!(this.this$0__1.at_whxqnv_k$(this.joinedIndex0__1 + 0 | 0) === -1)) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.joinedIndex0__1, this);
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
            this.localIndex1__1 = this.localIndex1__1 + 6 | 0;
            this.joinedIndex0__1 = this.joinedIndex0__1 + 6 | 0;
            this.set_state_rjd8d0_k$(2);
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
  protoOf(HeadersData$headersStarts$slambda).create_rkcuc7_k$ = function ($this$sequence, completion) {
    var i = new HeadersData$headersStarts$slambda(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(HeadersData$headersStarts$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rkcuc7_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function HeadersData$headersStarts$slambda_0(this$0, resultContinuation) {
    var i = new HeadersData$headersStarts$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_pgsqqr_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HeadersData() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.arrays_1 = ArrayList_init_$Create$();
  }
  protoOf(HeadersData).arraysCount_qdzoj9_k$ = function () {
    return this.arrays_1.get_size_woubt6_k$();
  };
  protoOf(HeadersData).prepare_vwo6lb_k$ = function (subArraysCount) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < subArraysCount)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.arrays_1.add_utx5q5_k$(get_IntArrayPool().borrow_mvkpor_k$());
      }
       while (inductionVariable < subArraysCount);
  };
  protoOf(HeadersData).at_whxqnv_k$ = function (index) {
    return this.arrays_1.get_c1px32_k$(index / 768 | 0)[index % 768 | 0];
  };
  protoOf(HeadersData).set_g707pu_k$ = function (index, value) {
    this.arrays_1.get_c1px32_k$(index / 768 | 0)[index % 768 | 0] = value;
  };
  protoOf(HeadersData).headersStarts_9a2v7t_k$ = function () {
    return sequence(HeadersData$headersStarts$slambda_0(this, null));
  };
  protoOf(HeadersData).release_wu5yyf_k$ = function () {
    var _iterator__ex2g4s = this.arrays_1.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var array = _iterator__ex2g4s.next_20eer_k$();
      get_IntArrayPool().recycle_d2xv5h_k$(array);
    }
    this.arrays_1.clear_j9egeb_k$();
  };
  function dumpTo(_this__u8e3s4, indent, out) {
    _init_properties_HttpHeadersMap_kt__hwatby();
    var _iterator__ex2g4s = _this__u8e3s4.offsets_plvqo0_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var offset = _iterator__ex2g4s.next_20eer_k$();
      out.append_jgojdo_k$(indent);
      out.append_jgojdo_k$(_this__u8e3s4.nameAtOffset_nevk7t_k$(offset));
      out.append_jgojdo_k$(' => ');
      out.append_jgojdo_k$(_this__u8e3s4.valueAtOffset_rvq37j_k$(offset));
      out.append_jgojdo_k$('\n');
    }
  }
  function IntArrayPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(IntArrayPool$1).produceInstance_xswihh_k$ = function () {
    var tmp = 0;
    var tmp_0 = new Int32Array(768);
    while (tmp < 768) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  };
  protoOf(IntArrayPool$1).clearInstance_c5szmx_k$ = function (instance) {
    fill(instance, -1);
    return protoOf(DefaultPool).clearInstance_nfz4jw_k$.call(this, instance);
  };
  protoOf(IntArrayPool$1).clearInstance_nfz4jw_k$ = function (instance) {
    return this.clearInstance_c5szmx_k$(isIntArray(instance) ? instance : THROW_CCE());
  };
  function HeadersDataPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(HeadersDataPool$1).produceInstance_xswihh_k$ = function () {
    return new HeadersData();
  };
  protoOf(HeadersDataPool$1).clearInstance_adg7k9_k$ = function (instance) {
    instance.release_wu5yyf_k$();
    return protoOf(DefaultPool).clearInstance_nfz4jw_k$.call(this, instance);
  };
  protoOf(HeadersDataPool$1).clearInstance_nfz4jw_k$ = function (instance) {
    return this.clearInstance_adg7k9_k$(instance instanceof HeadersData ? instance : THROW_CCE());
  };
  var properties_initialized_HttpHeadersMap_kt_kotj4w;
  function _init_properties_HttpHeadersMap_kt__hwatby() {
    if (!properties_initialized_HttpHeadersMap_kt_kotj4w) {
      properties_initialized_HttpHeadersMap_kt_kotj4w = true;
      IntArrayPool = new IntArrayPool$1();
      HeadersDataPool = new HeadersDataPool$1();
    }
  }
  function get_hostForbiddenSymbols() {
    _init_properties_HttpParser_kt__gbdom1();
    return hostForbiddenSymbols;
  }
  var hostForbiddenSymbols;
  function get_httpLineEndings() {
    _init_properties_HttpParser_kt__gbdom1();
    return httpLineEndings;
  }
  var httpLineEndings;
  function get_versions() {
    _init_properties_HttpParser_kt__gbdom1();
    return versions;
  }
  var versions;
  function parseHeaders(input, builder, range, $completion) {
    range = range === VOID ? new MutableRange(0, 0) : range;
    var tmp = new $parseHeadersCOROUTINE$(input, builder, range, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function parseHeaderName(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var index = range.get_start_iypx6h_k$();
    var end = range.get_end_18j6ha_k$();
    while (index < end) {
      var ch = text.get_kdzpvg_k$(index);
      if (ch === _Char___init__impl__6a9atx(58) && !(index === range.get_start_iypx6h_k$())) {
        range.set_start_x5zd0j_k$(index + 1 | 0);
        return index;
      }
      if (isDelimiter(ch)) {
        parseHeaderNameFailed(text, index, range.get_start_iypx6h_k$(), ch);
      }
      index = index + 1 | 0;
    }
    noColonFound(text, range);
  }
  function parseHeaderValue(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var start = range.get_start_iypx6h_k$();
    var end = range.get_end_18j6ha_k$();
    var index = start;
    index = skipSpacesAndHorizontalTabs(text, index, end);
    if (index >= end) {
      range.set_start_x5zd0j_k$(end);
      return Unit_getInstance();
    }
    var valueStart = index;
    var valueLastIndex = index;
    while (index < end) {
      var ch = text.get_kdzpvg_k$(index);
      if (ch !== _Char___init__impl__6a9atx(9) && ch !== _Char___init__impl__6a9atx(32))
        if (ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(10)) {
          characterIsNotAllowed(text, ch);
        } else
          valueLastIndex = index;
      index = index + 1 | 0;
    }
    range.set_start_x5zd0j_k$(valueStart);
    range.set_end_2o0hu2_k$(valueLastIndex + 1 | 0);
  }
  function validateHostHeader(host) {
    _init_properties_HttpParser_kt__gbdom1();
    if (endsWith(host, ':')) {
      throw new ParserException("Host header with ':' should contains port: " + toString(host));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.any' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(host)) {
        var element = charSequenceGet(host, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (get_hostForbiddenSymbols().contains_aljjnj_k$(new Char(element))) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      throw new ParserException('Host cannot contain any of the following symbols: ' + toString(get_hostForbiddenSymbols()));
    }
  }
  function isDelimiter(ch) {
    _init_properties_HttpParser_kt__gbdom1();
    return Char__compareTo_impl_ypi4mb(ch, _Char___init__impl__6a9atx(32)) <= 0 || contains_1('"(),/:;<=>?@[\\]{}', ch);
  }
  function parseHeaderNameFailed(text, index, start, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    if (ch === _Char___init__impl__6a9atx(58)) {
      throw new ParserException('Empty header names are not allowed as per RFC7230.');
    }
    if (index === start) {
      throw new ParserException('Multiline headers via line folding is not supported since it is deprecated as per RFC7230.');
    }
    characterIsNotAllowed(text, ch);
  }
  function noColonFound(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var tmp2 = range.get_start_iypx6h_k$();
    // Inline function 'kotlin.text.substring' call
    var endIndex = range.get_end_18j6ha_k$();
    var tmp$ret$0 = toString(charSequenceSubSequence(text, tmp2, endIndex));
    throw new ParserException('No colon in HTTP header in ' + tmp$ret$0 + ' in builder: \n' + toString(text));
  }
  function characterIsNotAllowed(text, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(ch);
    throw new ParserException('Character with code ' + (tmp$ret$0 & 255) + ' is not allowed in header names, \n' + toString(text));
  }
  function ParserException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ParserException);
  }
  function $parseHeadersCOROUTINE$(input, builder, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.input_1 = input;
    this.builder_1 = builder;
    this.range_1 = range;
  }
  protoOf($parseHeadersCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.headers0__1 = new HttpHeadersMap(this.builder_1);
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = readLineStrictTo(this.input_1, this.builder_1, new Long(8192, 0), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            if (equalsLong(ARGUMENT, new Long(-1, -1))) {
              this.headers0__1.release_wu5yyf_k$();
              return null;
            } else {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

          case 3:
            this.range_1.set_end_2o0hu2_k$(this.builder_1.get_length_g42xv3_k$());
            this.rangeLength1__1 = this.range_1.get_end_18j6ha_k$() - this.range_1.get_start_iypx6h_k$() | 0;
            if (this.rangeLength1__1 === 0) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 4:
            if (this.rangeLength1__1 >= 8192) {
              var message = 'Header line length limit exceeded';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var nameStart = this.range_1.get_start_iypx6h_k$();
            var nameEnd = parseHeaderName(this.builder_1, this.range_1);
            var headerEnd = this.range_1.get_end_18j6ha_k$();
            parseHeaderValue(this.builder_1, this.range_1);
            var valueStart = this.range_1.get_start_iypx6h_k$();
            var valueEnd = this.range_1.get_end_18j6ha_k$();
            this.range_1.set_start_x5zd0j_k$(headerEnd);
            this.headers0__1.put_ca69tt_k$(nameStart, nameEnd, valueStart, valueEnd);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 5:
            var host = this.headers0__1.get_6bo4tg_k$('Host');
            if (!(host == null)) {
              validateHostHeader(host);
            }

            return this.headers0__1;
          case 6:
            this.set_exceptionState_fex74n_k$(7);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              this.headers0__1.release_wu5yyf_k$();
              throw t;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

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
  var properties_initialized_HttpParser_kt_uedryv;
  function _init_properties_HttpParser_kt__gbdom1() {
    if (!properties_initialized_HttpParser_kt_uedryv) {
      properties_initialized_HttpParser_kt_uedryv = true;
      hostForbiddenSymbols = setOf([new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(64))]);
      httpLineEndings = LineEndingMode__plus_impl_ttpz2j(Companion_getInstance_0().get_CRLF_gdqv27_k$(), Companion_getInstance_0().get_LF_b8k5ow_k$());
      versions = Companion_getInstance_2().build_qfjo4r_k$(listOf_0(['HTTP/1.0', 'HTTP/1.1']));
    }
  }
  function get_CrLf_0() {
    _init_properties_Multipart_kt__ato98a();
    return CrLf_0;
  }
  var CrLf_0;
  function get_PrefixString() {
    _init_properties_Multipart_kt__ato98a();
    return PrefixString;
  }
  var PrefixString;
  function MultipartEvent$MultipartPart$release$lambda(this$0) {
    return function (t) {
      var tmp;
      if (!(t == null)) {
        this$0.headers_1.getCompleted_nczk2z_k$().release_wu5yyf_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Preamble(body) {
    MultipartEvent.call(this);
    this.body_1 = body;
  }
  protoOf(Preamble).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(Preamble).release_wu5yyf_k$ = function () {
    this.body_1.close_yn9xrc_k$();
  };
  function MultipartPart(headers, body) {
    MultipartEvent.call(this);
    this.headers_1 = headers;
    this.body_1 = body;
  }
  protoOf(MultipartPart).get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  protoOf(MultipartPart).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(MultipartPart).release_wu5yyf_k$ = function () {
    this.headers_1.invokeOnCompletion_n6cffu_k$(MultipartEvent$MultipartPart$release$lambda(this));
    discardBlocking(this.body_1);
  };
  function Epilogue(body) {
    MultipartEvent.call(this);
    this.body_1 = body;
  }
  protoOf(Epilogue).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(Epilogue).release_wu5yyf_k$ = function () {
    this.body_1.close_yn9xrc_k$();
  };
  function MultipartEvent() {
  }
  function parseMultipart(_this__u8e3s4, input, contentType, contentLength, maxPartSize) {
    maxPartSize = maxPartSize === VOID ? new Long(-1, 2147483647) : maxPartSize;
    _init_properties_Multipart_kt__ato98a();
    if (!MultiPart_getInstance().contains_vaykv6_k$(contentType)) {
      throw new UnsupportedMediaTypeExceptionCIO('Failed to parse multipart: Content-Type should be multipart/* but it is ' + toString(contentType));
    }
    var boundaryByteBuffer = parseBoundaryInternal(contentType);
    var boundaryBytes = ByteString_init_$Create$(boundaryByteBuffer);
    return parseMultipart_0(_this__u8e3s4, boundaryBytes, input, contentLength, maxPartSize);
  }
  function parseBoundaryInternal(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var boundaryParameter = findBoundary(contentType);
    if (boundaryParameter === -1) {
      throw IOException_init_$Create$("Failed to parse multipart: Content-Type's boundary parameter is missing");
    }
    var boundaryStart = boundaryParameter + 9 | 0;
    var boundaryBytes = new Int8Array(74);
    var position = {_v: 0};
    parseBoundaryInternal$put(position, boundaryBytes, 13);
    parseBoundaryInternal$put(position, boundaryBytes, 10);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    var state = 0;
    var inductionVariable = boundaryStart;
    var last = charSequenceLength(contentType);
    if (inductionVariable < last)
      loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        // Inline function 'kotlin.code' call
        var v = Char__toInt_impl_vasixd(ch) & 65535;
        if ((v & 65535) > 127) {
          throw IOException_init_$Create$('Failed to parse multipart: wrong boundary byte 0x' + toString_0(v, 16) + ' - should be 7bit character');
        }
        switch (state) {
          case 0:
            if (ch !== _Char___init__impl__6a9atx(32))
              if (ch === _Char___init__impl__6a9atx(34)) {
                state = 2;
              } else if (ch === _Char___init__impl__6a9atx(59) || ch === _Char___init__impl__6a9atx(44)) {
                break loop;
              } else {
                state = 1;
                parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
              }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(44) || ch === _Char___init__impl__6a9atx(59)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(92)) {
              state = 3;
            } else if (ch === _Char___init__impl__6a9atx(34)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 3:
            parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            state = 2;
            break;
        }
      }
       while (inductionVariable < last);
    if (position._v === 4) {
      throw IOException_init_$Create$('Empty multipart boundary is not allowed');
    }
    return copyOfRange(boundaryBytes, 0, position._v);
  }
  function parseMultipart_0(_this__u8e3s4, boundaryPrefixed, input, totalLength, maxPartSize) {
    _init_properties_Multipart_kt__ato98a();
    return produce(_this__u8e3s4, VOID, VOID, parseMultipart$slambda_0(input, boundaryPrefixed, maxPartSize, totalLength, null));
  }
  function findBoundary(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var state = 0;
    var paramNameCount = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(contentType) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        switch (state) {
          case 0:
            if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(61)) {
              state = 2;
            } else if (ch === _Char___init__impl__6a9atx(59)) {
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(44)) {
              state = 0;
            } else if (ch !== _Char___init__impl__6a9atx(32))
              if (paramNameCount === 0 && startsWith(contentType, 'boundary=', i, true)) {
                return i;
              } else {
                paramNameCount = paramNameCount + 1 | 0;
              }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(34))
              state = 3;
            else if (ch === _Char___init__impl__6a9atx(44))
              state = 0;
            else if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 3:
            if (ch === _Char___init__impl__6a9atx(34)) {
              state = 1;
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(92)) {
              state = 4;
            }

            break;
          case 4:
            state = 3;
            break;
        }
      }
       while (inductionVariable <= last);
    return -1;
  }
  function parsePreambleImpl(boundary, input, output, limit, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    return readUntil(input, boundary, output, limit, true, $completion);
  }
  function parsePartHeadersImpl(input, $completion) {
    var tmp = new $parsePartHeadersImplCOROUTINE$(input, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function parsePartBodyImpl(boundaryPrefixed, input, output, headers, limit, $completion) {
    var tmp = new $parsePartBodyImplCOROUTINE$(boundaryPrefixed, input, output, headers, limit, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function skipIfFoundReadCount(_this__u8e3s4, prefix, $completion) {
    var tmp = new $skipIfFoundReadCountCOROUTINE$(_this__u8e3s4, prefix, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function throwLimitExceeded(actual, limit) {
    _init_properties_Multipart_kt__ato98a();
    throw IOException_init_$Create$('Multipart content length exceeds limit ' + actual.toString() + ' > ' + limit.toString() + '; ' + "limit is defined using 'formFieldLimit' argument");
  }
  function parseBoundaryInternal$put(position, boundaryBytes, value) {
    if (position._v >= boundaryBytes.length) {
      throw IOException_init_$Create$("Failed to parse multipart: boundary shouldn't be longer than 70 characters");
    }
    var _unary__edvuaz = position._v;
    position._v = _unary__edvuaz + 1 | 0;
    boundaryBytes[_unary__edvuaz] = value;
  }
  function parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation) {
    this.$firstBoundary_1 = $firstBoundary;
    this.$countedInput_1 = $countedInput;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda$slambda).invoke_86bb4c_k$ = function ($this$writer, $completion) {
    var tmp = this.create_fmjhmg_k$($this$writer, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(parseMultipart$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_86bb4c_k$(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = parsePreambleImpl(this.$firstBoundary_1, this.$countedInput_1, this.$this$writer_1.get_channel_dhi7tm_k$(), new Long(8193, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$writer_1.get_channel_dhi7tm_k$().flushAndClose_3zd2q_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(parseMultipart$slambda$slambda).create_fmjhmg_k$ = function ($this$writer, completion) {
    var i = new parseMultipart$slambda$slambda(this.$firstBoundary_1, this.$countedInput_1, completion);
    i.$this$writer_1 = $this$writer;
    return i;
  };
  protoOf(parseMultipart$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_fmjhmg_k$(value instanceof WriterScope ? value : THROW_CCE(), completion);
  };
  function parseMultipart$slambda$slambda_0($firstBoundary, $countedInput, resultContinuation) {
    var i = new parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.invoke_86bb4c_k$($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    this.$input_1 = $input;
    this.$boundaryPrefixed_1 = $boundaryPrefixed;
    this.$maxPartSize_1 = $maxPartSize;
    this.$totalLength_1 = $totalLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda).invoke_xu0y9h_k$ = function ($this$produce, $completion) {
    var tmp = this.create_bp8dz3_k$($this$produce, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(parseMultipart$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_xu0y9h_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(25);
            this.countedInput0__1 = counted(this.$input_1);
            this.readBeforeParse1__1 = this.countedInput0__1.get_totalBytesRead_dai8jq_k$();
            this.firstBoundary5__1 = this.$boundaryPrefixed_1.substring$default_i6q0hx_k$(get_PrefixString().get_size_woubt6_k$());
            this.set_state_rjd8d0_k$(1);
            suspendResult = readRemaining(writer(this.$this$produce_1, VOID, VOID, parseMultipart$slambda$slambda_0(this.firstBoundary5__1, this.countedInput0__1, null)).get_channel_dhi7tm_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var preambleData = suspendResult;
            if (compare(get_remaining(preambleData), new Long(0, 0)) > 0) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.$this$produce_1.send_44jogj_k$(new Preamble(preambleData), this);
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
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!this.countedInput0__1.get_isClosedForRead_ajcc1s_k$()) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = skipIfFound(this.countedInput0__1, get_PrefixString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT6__1 = false;
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

          case 5:
            this.WHEN_RESULT6__1 = !suspendResult;
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            if (!this.WHEN_RESULT6__1) {
              this.set_state_rjd8d0_k$(15);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(7);
            suspendResult = skipIfFound(this.countedInput0__1, get_CrLf_0(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(8);
            suspendResult = skipIfFound(this.countedInput0__1, this.firstBoundary5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (suspendResult) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(9);
              continue $sm;
            }

          case 9:
            this.body2__1 = new ByteChannel();
            this.headers4__1 = CompletableDeferred();
            var part = new MultipartPart(this.headers4__1, this.body2__1);
            this.set_state_rjd8d0_k$(10);
            suspendResult = this.$this$produce_1.send_44jogj_k$(part, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.headersMap3__1 = null;
            this.set_exceptionState_fex74n_k$(14);
            this.set_state_rjd8d0_k$(11);
            suspendResult = parsePartHeadersImpl(this.countedInput0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.headersMap3__1 = suspendResult;
            if (!this.headers4__1.complete_ixf84q_k$(this.headersMap3__1)) {
              this.headersMap3__1.release_wu5yyf_k$();
              throw CancellationException_init_$Create$('Multipart processing has been cancelled');
            }

            this.set_state_rjd8d0_k$(12);
            suspendResult = parsePartBodyImpl(this.$boundaryPrefixed_1, this.countedInput0__1, this.body2__1, this.headersMap3__1, this.$maxPartSize_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            this.body2__1.close_yn9xrc_k$();
            this.set_exceptionState_fex74n_k$(25);
            this.set_state_rjd8d0_k$(13);
            continue $sm;
          case 13:
            this.set_exceptionState_fex74n_k$(25);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 14:
            this.set_exceptionState_fex74n_k$(25);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var cause = this.get_exception_x0n6w6_k$();
              if (this.headers4__1.completeExceptionally_xyzekf_k$(cause)) {
                var tmp0_safe_receiver = this.headersMap3__1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.release_wu5yyf_k$();
                }
              }
              close(this.body2__1, cause);
              throw cause;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 15:
            this.set_state_rjd8d0_k$(16);
            suspendResult = skipIfFound(this.countedInput0__1, get_CrLf_0(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 16:
            this.set_state_rjd8d0_k$(17);
            suspendResult = skipIfFound(this.countedInput0__1, get_CrLf_0(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            if (!(this.$totalLength_1 == null)) {
              var consumedExceptEpilogue = subtract(this.countedInput0__1.get_totalBytesRead_dai8jq_k$(), this.readBeforeParse1__1);
              var size = subtract(this.$totalLength_1, consumedExceptEpilogue);
              if (compare(size, new Long(2147483647, 0)) > 0)
                throw IOException_init_$Create$('Failed to parse multipart: prologue is too long');
              if (compare(size, new Long(0, 0)) > 0) {
                this.set_state_rjd8d0_k$(21);
                suspendResult = readPacket(this.countedInput0__1, convertToInt(size), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(23);
                continue $sm;
              }
            } else {
              this.set_state_rjd8d0_k$(18);
              suspendResult = readRemaining(this.countedInput0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 18:
            var epilogueContent = suspendResult;
            if (!epilogueContent.exhausted_p1jt55_k$()) {
              this.set_state_rjd8d0_k$(19);
              suspendResult = this.$this$produce_1.send_44jogj_k$(new Epilogue(epilogueContent), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(20);
              continue $sm;
            }

          case 19:
            this.set_state_rjd8d0_k$(20);
            continue $sm;
          case 20:
            this.set_state_rjd8d0_k$(24);
            continue $sm;
          case 21:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new Epilogue(ARGUMENT);
            this.set_state_rjd8d0_k$(22);
            suspendResult = this.$this$produce_1.send_44jogj_k$(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            this.set_state_rjd8d0_k$(23);
            continue $sm;
          case 23:
            this.set_state_rjd8d0_k$(24);
            continue $sm;
          case 24:
            return Unit_getInstance();
          case 25:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 25) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(parseMultipart$slambda).create_bp8dz3_k$ = function ($this$produce, completion) {
    var i = new parseMultipart$slambda(this.$input_1, this.$boundaryPrefixed_1, this.$maxPartSize_1, this.$totalLength_1, completion);
    i.$this$produce_1 = $this$produce;
    return i;
  };
  protoOf(parseMultipart$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_bp8dz3_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function parseMultipart$slambda_0($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    var i = new parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.invoke_xu0y9h_k$($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $parsePartHeadersImplCOROUTINE$(input, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.input_1 = input;
  }
  protoOf($parsePartHeadersImplCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.builder0__1 = new CharArrayBuilder();
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = parseHeaders(this.input_1, this.builder0__1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              throw EOFException_init_$Create$('Failed to parse multipart headers: unexpected end of stream');
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            return tmp_0;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              var t = this.get_exception_x0n6w6_k$();
              this.builder0__1.release_wu5yyf_k$();
              throw t;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

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
  function $parsePartBodyImplCOROUTINE$(boundaryPrefixed, input, output, headers, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.boundaryPrefixed_1 = boundaryPrefixed;
    this.input_1 = input;
    this.output_1 = output;
    this.headers_1 = headers;
    this.limit_1 = limit;
  }
  protoOf($parsePartBodyImplCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp0_safe_receiver = this.headers_1.get_6bo4tg_k$('Content-Length');
            var contentLength = tmp0_safe_receiver == null ? null : parseDecLong(tmp0_safe_receiver);
            if (contentLength == null) {
              this.set_state_rjd8d0_k$(3);
              suspendResult = readUntil(this.input_1, this.boundaryPrefixed_1, this.output_1, this.limit_1, true, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var containsUpper = this.limit_1;
              if (compare(new Long(0, 0), contentLength) <= 0 ? compare(contentLength, containsUpper) <= 0 : false) {
                this.set_state_rjd8d0_k$(1);
                suspendResult = copyTo(this.input_1, this.output_1, contentLength, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                throwLimitExceeded(contentLength, this.limit_1);
              }
            }

            break;
          case 1:
            this.ARGUMENT2__1 = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = skipIfFoundReadCount(this.input_1, this.boundaryPrefixed_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.WHEN_RESULT1__1 = add(this.ARGUMENT2__1, ARGUMENT);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 3:
            this.WHEN_RESULT1__1 = suspendResult;
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.byteCount0__1 = this.WHEN_RESULT1__1;
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.output_1.flush_4wsz1p_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return this.byteCount0__1;
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
  function $skipIfFoundReadCountCOROUTINE$(_this__u8e3s4, prefix, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.prefix_1 = prefix;
  }
  protoOf($skipIfFoundReadCountCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = skipIfFound(this._this__u8e3s4__1, this.prefix_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              tmp_0.WHEN_RESULT0__1 = fromInt(this.prefix_1.get_size_woubt6_k$());
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT0__1 = new Long(0, 0);
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
  var properties_initialized_Multipart_kt_wu0sh0;
  function _init_properties_Multipart_kt__ato98a() {
    if (!properties_initialized_Multipart_kt_wu0sh0) {
      properties_initialized_Multipart_kt_wu0sh0 = true;
      CrLf_0 = ByteString_init_$Create$(toByteArray('\r\n'));
      PrefixString = ByteString(new Int8Array([45, 45]));
    }
  }
  function build($this, resultList, from, maxLength, idx, length, charAt) {
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = from.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      var key = charAt(element, idx);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var ch = element_0.get_key_18j28a_k$().value_1;
      // Inline function 'kotlin.collections.component2' call
      var list_0 = element_0.get_value_j01efc_k$();
      var nextIdx = idx + 1 | 0;
      var children = ArrayList_init_$Create$();
      var tmp_0 = Companion_getInstance_2();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = list_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
        if (length(element_1) > nextIdx) {
          destination_0.add_utx5q5_k$(element_1);
        }
      }
      build(tmp_0, children, destination_0, maxLength, nextIdx, length, charAt);
      children.trimToSize_dmxq0i_k$();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_2 = list_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
        if (length(element_2) === nextIdx) {
          destination_1.add_utx5q5_k$(element_2);
        }
      }
      resultList.add_utx5q5_k$(new Node(ch, destination_1, children));
    }
  }
  function AsciiCharTree$Companion$build$lambda(it) {
    return charSequenceLength(it);
  }
  function AsciiCharTree$Companion$build$lambda_0(s, idx) {
    return new Char(charSequenceGet(s, idx));
  }
  function Node(ch, exact, children) {
    this.ch_1 = ch;
    this.exact_1 = exact;
    this.children_1 = children;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(256);
    while (tmp_0 < 256) {
      var tmp_2 = tmp_0;
      var tmp0 = this.children_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlin.code' call
          var this_0 = element.ch_1;
          if (Char__toInt_impl_vasixd(this_0) === tmp_2) {
            if (found) {
              tmp$ret$3 = null;
              break $l$block_0;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        tmp$ret$3 = single;
      }
      tmp_1[tmp_2] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.array_1 = tmp_1;
  }
  protoOf(Node).get_ch_hg44k0_k$ = function () {
    return this.ch_1;
  };
  protoOf(Node).get_exact_ir3cgm_k$ = function () {
    return this.exact_1;
  };
  protoOf(Node).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Node).get_array_iosoq8_k$ = function () {
    return this.array_1;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).build_qfjo4r_k$ = function (from) {
    var tmp = AsciiCharTree$Companion$build$lambda;
    return this.build_su3zc2_k$(from, tmp, AsciiCharTree$Companion$build$lambda_0);
  };
  protoOf(Companion).build_su3zc2_k$ = function (from, length, charAt) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = from.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.next_20eer_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = length(maxElem);
      do {
        var e = iterator.next_20eer_k$();
        var v = length(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext_bitz1p_k$());
      tmp$ret$0 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = length(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Unable to build char tree from an empty list');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var maxLen = tmp_0;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(from, Collection)) {
        tmp_1 = from.isEmpty_y1axqb_k$();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$2 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s = from.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (length(element) === 0) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      throw IllegalArgumentException_init_$Create$('There should be no empty entries');
    var root = ArrayList_init_$Create$();
    build(this, root, from, maxLen, 0, length, charAt);
    root.trimToSize_dmxq0i_k$();
    return new AsciiCharTree(new Node(_Char___init__impl__6a9atx(0), emptyList(), root));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function AsciiCharTree(root) {
    Companion_getInstance_2();
    this.root_1 = root;
  }
  protoOf(AsciiCharTree).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(AsciiCharTree).search_gssjl1_k$ = function (sequence, fromIdx, end, lowerCase, stopPredicate) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(sequence) === 0)
      throw IllegalArgumentException_init_$Create$("Couldn't search in char tree for empty string");
    var node = this.root_1;
    var inductionVariable = fromIdx;
    if (inductionVariable < end)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = charSequenceGet(sequence, index);
        // Inline function 'kotlin.code' call
        var currentCode = Char__toInt_impl_vasixd(current);
        if (stopPredicate(new Char(current), currentCode))
          break $l$loop;
        var tmp0_elvis_lhs = node.array_1[currentCode];
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (lowerCase) {
            var tmp_1 = node.array_1;
            // Inline function 'kotlin.text.lowercaseChar' call
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$4 = toString_1(current).toLowerCase();
            // Inline function 'kotlin.code' call
            var this_0 = charCodeAt(tmp$ret$4, 0);
            tmp_0 = tmp_1[Char__toInt_impl_vasixd(this_0)];
          } else {
            tmp_0 = null;
          }
          tmp = tmp_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var tmp1_elvis_lhs = tmp;
        var tmp_2;
        if (tmp1_elvis_lhs == null) {
          return emptyList();
        } else {
          tmp_2 = tmp1_elvis_lhs;
        }
        var nextNode = tmp_2;
        node = nextNode;
      }
       while (inductionVariable < end);
    return node.exact_1;
  };
  protoOf(AsciiCharTree).search$default_4x26p3_k$ = function (sequence, fromIdx, end, lowerCase, stopPredicate, $super) {
    fromIdx = fromIdx === VOID ? 0 : fromIdx;
    end = end === VOID ? charSequenceLength(sequence) : end;
    lowerCase = lowerCase === VOID ? false : lowerCase;
    return $super === VOID ? this.search_gssjl1_k$(sequence, fromIdx, end, lowerCase, stopPredicate) : $super.search_gssjl1_k$.call(this, sequence, fromIdx, end, lowerCase, stopPredicate);
  };
  function _set_stringified__8lq3aj($this, _set____db54di) {
    $this.stringified_1 = _set____db54di;
  }
  function _get_stringified__w4zscp($this) {
    return $this.stringified_1;
  }
  function _set_buffers__zfahji($this, _set____db54di) {
    $this.buffers_1 = _set____db54di;
  }
  function _get_buffers__9zla2m($this) {
    return $this.buffers_1;
  }
  function _set_current__qj3kk($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function _set_stringified__8lq3aj_0($this, _set____db54di) {
    $this.stringified_1 = _set____db54di;
  }
  function _get_stringified__w4zscp_0($this) {
    return $this.stringified_1;
  }
  function _set_released__w8m9xi($this, _set____db54di) {
    $this.released_1 = _set____db54di;
  }
  function _get_released__pzlgku($this) {
    return $this.released_1;
  }
  function _set_remaining__v5vng1($this, _set____db54di) {
    $this.remaining_1 = _set____db54di;
  }
  function _get_remaining__1v171h($this) {
    return $this.remaining_1;
  }
  function _set_length__xo12bz($this, _set____db54di) {
    $this.length_1 = _set____db54di;
  }
  function getImpl($this, index) {
    return bufferForIndex($this, index)[index % ensureNotNull($this.current_1).length | 0];
  }
  function copy($this, startIndex, endIndex) {
    if (startIndex === endIndex)
      return '';
    var builder = StringBuilder_init_$Create$(endIndex - startIndex | 0);
    var buffer;
    var base = startIndex - (startIndex % 2048 | 0) | 0;
    while (base < endIndex) {
      buffer = bufferForIndex($this, base);
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = startIndex - base | 0;
      var innerStartIndex = Math.max(0, b);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = endIndex - base | 0;
      var innerEndIndex = Math.min(a, 2048);
      var inductionVariable = innerStartIndex;
      if (inductionVariable < innerEndIndex)
        do {
          var innerIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          builder.append_am5a4z_k$(buffer[innerIndex]);
        }
         while (inductionVariable < innerEndIndex);
      base = base + 2048 | 0;
    }
    return builder;
  }
  function SubSequenceImpl($outer, start, end) {
    this.$this_1 = $outer;
    this.start_1 = start;
    this.end_1 = end;
    this.stringified_1 = null;
  }
  protoOf(SubSequenceImpl).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SubSequenceImpl).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(SubSequenceImpl).get_length_g42xv3_k$ = function () {
    return this.end_1 - this.start_1 | 0;
  };
  protoOf(SubSequenceImpl).get_kdzpvg_k$ = function (index) {
    var withOffset = index + this.start_1 | 0;
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(withOffset < this.end_1)) {
      var message_0 = 'index (' + index + ') should be less than length (' + this.get_length_g42xv3_k$() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this.$this_1, withOffset);
  };
  protoOf(SubSequenceImpl).subSequence_hm5hnj_k$ = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message = 'start is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message_0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= (this.end_1 - this.start_1 | 0))) {
      var message_1 = 'end should be less than length (' + this.get_length_g42xv3_k$() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (startIndex === endIndex)
      return '';
    return new SubSequenceImpl(this.$this_1, this.start_1 + startIndex | 0, this.start_1 + endIndex | 0);
  };
  protoOf(SubSequenceImpl).toString = function () {
    var tmp0_elvis_lhs = this.stringified_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this.$this_1, this.start_1, this.end_1));
      this.stringified_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SubSequenceImpl).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(charSequenceLength(other) === this.get_length_g42xv3_k$()))
      return false;
    return rangeEqualsImpl(this.$this_1, this.start_1, other, 0, this.get_length_g42xv3_k$());
  };
  protoOf(SubSequenceImpl).hashCode = function () {
    var tmp0_safe_receiver = this.stringified_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this.$this_1, this.start_1, this.end_1) : tmp1_elvis_lhs;
  };
  function bufferForIndex($this, index) {
    var list = $this.buffers_1;
    if (list == null) {
      if (index >= 2048) {
        throwSingleBuffer($this, index);
      }
      var tmp0_elvis_lhs = $this.current_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throwSingleBuffer($this, index);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    return list.get_c1px32_k$(index / ensureNotNull($this.current_1).length | 0);
  }
  function throwSingleBuffer($this, index) {
    if ($this.released_1)
      throw IllegalStateException_init_$Create$('Buffer is already released');
    throw IndexOutOfBoundsException_init_$Create$('' + index + ' is not in range [0; ' + currentPosition($this) + ')');
  }
  function nonFullBuffer($this) {
    return $this.remaining_1 === 0 ? appendNewArray($this) : ensureNotNull($this.current_1);
  }
  function appendNewArray($this) {
    var newBuffer = $this.pool_1.borrow_mvkpor_k$();
    var existing = $this.current_1;
    $this.current_1 = newBuffer;
    $this.remaining_1 = newBuffer.length;
    $this.released_1 = false;
    if (!(existing == null)) {
      var tmp0_elvis_lhs = $this.buffers_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$();
        $this.buffers_1 = this_0;
        this_0.add_utx5q5_k$(existing);
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var list = tmp;
      list.add_utx5q5_k$(newBuffer);
    }
    return newBuffer;
  }
  function rangeEqualsImpl($this, start, other, otherStart, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(getImpl($this, start + i | 0) === charSequenceGet(other, otherStart + i | 0)))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function hashCodeImpl($this, start, end) {
    var hc = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, hc);
        // Inline function 'kotlin.code' call
        var this_0 = getImpl($this, i);
        hc = tmp + Char__toInt_impl_vasixd(this_0) | 0;
      }
       while (inductionVariable < end);
    return hc;
  }
  function currentPosition($this) {
    return ensureNotNull($this.current_1).length - $this.remaining_1 | 0;
  }
  function CharArrayBuilder(pool) {
    pool = pool === VOID ? get_CharArrayPool() : pool;
    this.pool_1 = pool;
    this.buffers_1 = null;
    this.current_1 = null;
    this.stringified_1 = null;
    this.released_1 = false;
    this.remaining_1 = 0;
    this.length_1 = 0;
  }
  protoOf(CharArrayBuilder).get_pool_wosj1h_k$ = function () {
    return this.pool_1;
  };
  protoOf(CharArrayBuilder).get_length_g42xv3_k$ = function () {
    return this.length_1;
  };
  protoOf(CharArrayBuilder).get_kdzpvg_k$ = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(index < this.length_1)) {
      var message_0 = 'index ' + index + ' is not in range [0, ' + this.length_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this, index);
  };
  protoOf(CharArrayBuilder).subSequence_hm5hnj_k$ = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') should be less or equal to endIndex (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message_0 = 'startIndex is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= this.length_1)) {
      var message_1 = 'endIndex (' + endIndex + ') is greater than length (' + this.length_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new SubSequenceImpl(this, startIndex, endIndex);
  };
  protoOf(CharArrayBuilder).toString = function () {
    var tmp0_elvis_lhs = this.stringified_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this, 0, this.length_1));
      this.stringified_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CharArrayBuilder).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(this.length_1 === charSequenceLength(other)))
      return false;
    return rangeEqualsImpl(this, 0, other, 0, this.length_1);
  };
  protoOf(CharArrayBuilder).hashCode = function () {
    var tmp0_safe_receiver = this.stringified_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this, 0, this.length_1) : tmp1_elvis_lhs;
  };
  protoOf(CharArrayBuilder).append_am5a4z_k$ = function (value) {
    nonFullBuffer(this)[ensureNotNull(this.current_1).length - this.remaining_1 | 0] = value;
    this.stringified_1 = null;
    this.remaining_1 = this.remaining_1 - 1 | 0;
    this.length_1 = this.length_1 + 1 | 0;
    return this;
  };
  protoOf(CharArrayBuilder).append_xdc1zw_k$ = function (value, startIndex, endIndex) {
    if (value == null)
      return this;
    var current = startIndex;
    while (current < endIndex) {
      var buffer = nonFullBuffer(this);
      var offset = buffer.length - this.remaining_1 | 0;
      var tmp0 = endIndex - current | 0;
      // Inline function 'kotlin.math.min' call
      var b = this.remaining_1;
      var bytesToCopy = Math.min(tmp0, b);
      var inductionVariable = 0;
      if (inductionVariable < bytesToCopy)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffer[offset + i | 0] = charSequenceGet(value, current + i | 0);
        }
         while (inductionVariable < bytesToCopy);
      current = current + bytesToCopy | 0;
      this.remaining_1 = this.remaining_1 - bytesToCopy | 0;
    }
    this.stringified_1 = null;
    this.length_1 = this.length_1 + (endIndex - startIndex | 0) | 0;
    return this;
  };
  protoOf(CharArrayBuilder).append_jgojdo_k$ = function (value) {
    if (value == null)
      return this;
    return this.append_xdc1zw_k$(value, 0, charSequenceLength(value));
  };
  protoOf(CharArrayBuilder).release_wu5yyf_k$ = function () {
    var list = this.buffers_1;
    if (!(list == null)) {
      this.current_1 = null;
      var inductionVariable = 0;
      var last = list.get_size_woubt6_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.pool_1.recycle_d2xv5h_k$(list.get_c1px32_k$(i));
        }
         while (inductionVariable < last);
    } else {
      var tmp0_safe_receiver = this.current_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.pool_1.recycle_d2xv5h_k$(tmp0_safe_receiver);
      }
      this.current_1 = null;
    }
    this.released_1 = true;
    this.buffers_1 = null;
    this.stringified_1 = null;
    this.length_1 = 0;
    this.remaining_1 = 0;
  };
  function get_CharArrayPool() {
    _init_properties_CharArrayPool_kt__u4nq0d();
    return CharArrayPool;
  }
  var CharArrayPool;
  function CharArrayPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(CharArrayPool$1).borrow_mvkpor_k$ = function () {
    return charArray(2048);
  };
  function CharArrayPool$2() {
    DefaultPool.call(this, 4096);
  }
  protoOf(CharArrayPool$2).produceInstance_xswihh_k$ = function () {
    return charArray(2048);
  };
  var properties_initialized_CharArrayPool_kt_aq0u0f;
  function _init_properties_CharArrayPool_kt__u4nq0d() {
    if (!properties_initialized_CharArrayPool_kt_aq0u0f) {
      properties_initialized_CharArrayPool_kt_aq0u0f = true;
      var tmp;
      if (isPoolingDisabled()) {
        tmp = new CharArrayPool$1();
      } else {
        tmp = new CharArrayPool$2();
      }
      CharArrayPool = tmp;
    }
  }
  function get_DefaultHttpMethods() {
    _init_properties_Chars_kt__d3i39x();
    return DefaultHttpMethods;
  }
  var DefaultHttpMethods;
  function get_HexTable() {
    _init_properties_Chars_kt__d3i39x();
    return HexTable;
  }
  var HexTable;
  function get_HexLetterTable() {
    _init_properties_Chars_kt__d3i39x();
    return HexLetterTable;
  }
  var HexLetterTable;
  function hashCodeLowerCase(_this__u8e3s4, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    var hashCode = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var v = tmp;
        hashCode = imul(31, hashCode) + v | 0;
      }
       while (inductionVariable < end);
    return hashCode;
  }
  function equalsLowerCase(_this__u8e3s4, start, end, other) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    if (!((end - start | 0) === charSequenceLength(other)))
      return false;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var tmp_2 = tmp;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(other, pos - start | 0);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_7 = Char__toInt_impl_vasixd(this_6);
        var tmp_3;
        // Inline function 'kotlin.code' call
        var this_8 = _Char___init__impl__6a9atx(65);
        var containsLower_0 = Char__toInt_impl_vasixd(this_8);
        var tmp_4;
        // Inline function 'kotlin.code' call
        var this_9 = _Char___init__impl__6a9atx(90);
        if (this_7 <= Char__toInt_impl_vasixd(this_9)) {
          tmp_4 = containsLower_0 <= this_7;
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(97);
          var tmp_5 = Char__toInt_impl_vasixd(this_10);
          // Inline function 'kotlin.code' call
          var this_11 = _Char___init__impl__6a9atx(65);
          tmp_3 = tmp_5 + (this_7 - Char__toInt_impl_vasixd(this_11) | 0) | 0;
        } else {
          tmp_3 = this_7;
        }
        if (!(tmp_2 === tmp_3))
          return false;
      }
       while (inductionVariable < end);
    return true;
  }
  function parseDecLong(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var length = charSequenceLength(_this__u8e3s4);
    if (length > 19) {
      numberFormatException(_this__u8e3s4);
    }
    if (length === 19)
      return parseDecLongWithCheck(_this__u8e3s4);
    var result = new Long(0, 0);
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = subtract(fromInt(tmp$ret$0), new Long(48, 0));
        if (compare(digit, new Long(0, 0)) < 0 || compare(digit, new Long(9, 0)) > 0) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = add(add(shiftLeft(result, 3), shiftLeft(result, 1)), digit);
      }
       while (inductionVariable < length);
    return result;
  }
  function toLowerCase(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(65);
    var containsLower = Char__toInt_impl_vasixd(this_0);
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(90);
    if (_this__u8e3s4 <= Char__toInt_impl_vasixd(this_1)) {
      tmp_0 = containsLower <= _this__u8e3s4;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(97);
      var tmp_1 = Char__toInt_impl_vasixd(this_2);
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(65);
      tmp = tmp_1 + (_this__u8e3s4 - Char__toInt_impl_vasixd(this_3) | 0) | 0;
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function numberFormatException(cs) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number ' + toString(cs) + ': too large for Long type');
  }
  function parseDecLongWithCheck(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var result = new Long(0, 0);
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = subtract(fromInt(tmp$ret$0), new Long(48, 0));
        if (compare(digit, new Long(0, 0)) < 0 || compare(digit, new Long(9, 0)) > 0) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = add(add(shiftLeft(result, 3), shiftLeft(result, 1)), digit);
        if (compare(result, new Long(0, 0)) < 0) {
          numberFormatException(_this__u8e3s4);
        }
      }
       while (inductionVariable <= last);
    return result;
  }
  function numberFormatException_0(cs, idx) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number: ' + toString(cs) + ', wrong digit: ' + toString_1(charSequenceGet(cs, idx)) + ' at position ' + idx);
  }
  function DefaultHttpMethods$lambda(it) {
    _init_properties_Chars_kt__d3i39x();
    return it.get_value_j01efc_k$().length;
  }
  function DefaultHttpMethods$lambda_0(m, idx) {
    _init_properties_Chars_kt__d3i39x();
    return new Char(charCodeAt(m.get_value_j01efc_k$(), idx));
  }
  var properties_initialized_Chars_kt_phjfhp;
  function _init_properties_Chars_kt__d3i39x() {
    if (!properties_initialized_Chars_kt_phjfhp) {
      properties_initialized_Chars_kt_phjfhp = true;
      var tmp = Companion_getInstance_2();
      var tmp_0 = Companion_getInstance_1().get_DefaultMethods_5alqxy_k$();
      var tmp_1 = DefaultHttpMethods$lambda;
      DefaultHttpMethods = tmp.build_su3zc2_k$(tmp_0, tmp_1, DefaultHttpMethods$lambda_0);
      // Inline function 'kotlin.collections.map' call
      var this_0 = numberRangeToNumber(0, 255);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var inductionVariable = this_0.get_first_irdx8n_k$();
      var last = this_0.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = item;
          var tmp_2;
          if (48 <= v ? v <= 57 : false) {
            tmp_2 = subtract(numberToLong(v), new Long(48, 0));
          } else {
            var tmp_3;
            var tmp_4 = fromInt(v);
            // Inline function 'kotlin.code' call
            var this_1 = _Char___init__impl__6a9atx(97);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
            if (compare(tmp_4, fromInt(tmp$ret$0)) >= 0) {
              var tmp_5 = fromInt(v);
              // Inline function 'kotlin.code' call
              var this_2 = _Char___init__impl__6a9atx(102);
              var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
              tmp_3 = compare(tmp_5, fromInt(tmp$ret$1)) <= 0;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              // Inline function 'kotlin.code' call
              var this_3 = _Char___init__impl__6a9atx(97);
              var tmp$ret$2 = Char__toInt_impl_vasixd(this_3);
              // Inline function 'kotlin.Long.plus' call
              var this_4 = subtract(numberToLong(v), fromInt(tmp$ret$2));
              tmp_2 = add(this_4, fromInt(10));
            } else {
              var tmp_6;
              var tmp_7 = fromInt(v);
              // Inline function 'kotlin.code' call
              var this_5 = _Char___init__impl__6a9atx(65);
              var tmp$ret$4 = Char__toInt_impl_vasixd(this_5);
              if (compare(tmp_7, fromInt(tmp$ret$4)) >= 0) {
                var tmp_8 = fromInt(v);
                // Inline function 'kotlin.code' call
                var this_6 = _Char___init__impl__6a9atx(70);
                var tmp$ret$5 = Char__toInt_impl_vasixd(this_6);
                tmp_6 = compare(tmp_8, fromInt(tmp$ret$5)) <= 0;
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                // Inline function 'kotlin.code' call
                var this_7 = _Char___init__impl__6a9atx(65);
                var tmp$ret$6 = Char__toInt_impl_vasixd(this_7);
                // Inline function 'kotlin.Long.plus' call
                var this_8 = subtract(numberToLong(v), fromInt(tmp$ret$6));
                tmp_2 = add(this_8, fromInt(10));
              } else {
                tmp_2 = new Long(-1, -1);
              }
            }
          }
          var tmp$ret$8 = tmp_2;
          destination.add_utx5q5_k$(tmp$ret$8);
        }
         while (!(item === last));
      HexTable = toLongArray(destination);
      // Inline function 'kotlin.collections.map' call
      var this_9 = numberRangeToNumber(0, 15);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_9, 10));
      var inductionVariable_0 = this_9.get_first_irdx8n_k$();
      var last_0 = this_9.get_last_wopotb_k$();
      if (inductionVariable_0 <= last_0)
        do {
          var item_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var it = item_0;
          var tmp_9;
          if (it < 10) {
            tmp_9 = toByte(48 + it | 0);
          } else {
            // Inline function 'kotlin.code' call
            var this_10 = Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), it), 10);
            var tmp$ret$0_0 = Char__toInt_impl_vasixd(this_10);
            tmp_9 = toByte(tmp$ret$0_0);
          }
          var tmp$ret$1_0 = tmp_9;
          destination_0.add_utx5q5_k$(tmp$ret$1_0);
        }
         while (!(item_0 === last_0));
      HexLetterTable = toByteArray_0(destination_0);
    }
  }
  function UnsupportedMediaTypeExceptionCIO(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, UnsupportedMediaTypeExceptionCIO);
  }
  function MutableRange(start, end) {
    this.start_1 = start;
    this.end_1 = end;
  }
  protoOf(MutableRange).set_start_x5zd0j_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(MutableRange).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(MutableRange).set_end_2o0hu2_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(MutableRange).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(start=' + this.start_1 + ', end=' + this.end_1 + ')';
  };
  function skipSpacesAndHorizontalTabs(text, start, end) {
    var index = start;
    $l$loop: while (index < end) {
      var ch = text.get_kdzpvg_k$(index);
      if (!isWhitespace(ch) && !(ch === _Char___init__impl__6a9atx(9)))
        break $l$loop;
      index = index + 1 | 0;
    }
    return index;
  }
  function discardBlocking(_this__u8e3s4) {
    cancel(_this__u8e3s4);
  }
  function isPoolingDisabled() {
    return false;
  }
  //region block: post-declaration
  protoOf(CIOHeaders).contains_zh0gsb_k$ = contains;
  protoOf(CIOHeaders).contains_7gmd9b_k$ = contains_0;
  protoOf(CIOHeaders).forEach_jocloe_k$ = forEach;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CIOMultipartDataBase;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-cio.js.map
