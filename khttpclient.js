(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var Enum = kotlin_kotlin.$_$.cf;
  var protoOf = kotlin_kotlin.$_$.rb;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var split = kotlin_kotlin.$_$.sd;
  var lastOrNull = kotlin_kotlin.$_$.b7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.o;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.ub;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a3;
  var ensureNotNull = kotlin_kotlin.$_$.eg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.t1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var append = kotlin_io_ktor_ktor_http.$_$.m1;
  var copyToArray = kotlin_kotlin.$_$.i6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.kc;
  var arrayOf = kotlin_kotlin.$_$.ag;
  var createKType = kotlin_kotlin.$_$.ic;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.s6;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h8;
  var closeFinally = kotlin_kotlin.$_$.bg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ua;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j2;
  var isByteArray = kotlin_kotlin.$_$.bb;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var decodeToString = kotlin_kotlin.$_$.xc;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var lazy = kotlin_kotlin.$_$.kg;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pa;
  var isBlank = kotlin_kotlin.$_$.gd;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.l1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).m4u = function (key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  };
  protoOf(Companion).n4u = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).o4u = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    static_init();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    static_init();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    static_init();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    static_init();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.p4u_1 = type;
    this.q4u_1 = key;
    this.r4u_1 = value;
    this.s4u_1 = fileName;
    this.t4u_1 = fileBody;
  }
  protoOf(HttpParameter).u4u = function () {
    var tmp0_safe_receiver = this.s4u_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).v4u = function () {
    switch (this.u4u()) {
      case 'txt':
        return Text_getInstance().p2i_1;
      case 'html':
        return Text_getInstance().s2i_1;
      case 'css':
        return Text_getInstance().q2i_1;
      case 'csv':
        return Text_getInstance().r2i_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().w2h_1;
      case 'png':
        return Image_getInstance().y2h_1;
      case 'gif':
        return Image_getInstance().t2h_1;
      case 'svg':
        return Image_getInstance().z2h_1;
      case 'mpeg':
        return Video_getInstance().a2j_1;
      case 'mp4':
        return Video_getInstance().b2j_1;
      case 'mov':
        return Video_getInstance().d2j_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().u2g_1;
      case 'xml':
        return Application_getInstance().a2h_1;
      case 'zip':
        return Application_getInstance().d2h_1;
      case 'pdf':
        return Application_getInstance().g2h_1;
    }
    return Application_getInstance().x2g_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function canSendOnly($this, param) {
    if (param.p4u_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.v4u();
    return tmp0_subject.equals(Application_getInstance().u2g_1) ? true : tmp0_subject.equals(Image_getInstance().w2h_1) ? true : tmp0_subject.equals(Image_getInstance().y2h_1) ? true : tmp0_subject.equals(Image_getInstance().t2h_1) ? true : tmp0_subject.equals(Video_getInstance().a2j_1) ? true : tmp0_subject.equals(Video_getInstance().b2j_1) ? true : tmp0_subject.equals(Video_getInstance().d2j_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.z4v_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.o3d_1 = $req.y4v_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.v4v_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.a2b(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.o42($req.a4w_1);
      $this$timeout.p42($req.b4w_1);
      $this$timeout.q42($req.c4w_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4v_1 = _this__u8e3s4;
    this.f4v_1 = method;
  }
  protoOf($proceedCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 9;
            this.l4v_1 = this.e4v_1;
            var tmp_0 = this;
            tmp_0.m4v_1 = HttpClient(HttpRequest$proceed$lambda(this.l4v_1));
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.i4v_1 = this.m4v_1;
            this.h4v_1 = null;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 8;
            this.n8_1 = 7;
            var client = this.i4v_1;
            var tmp0_safe_receiver = this.e4v_1.s4v_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.e4v_1.v4v_1.z2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.e4v_1.t4v_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.e4v_1.v4v_1;
              var key = 'User-Agent';
              tmp0.z2(key, tmp1_safe_receiver);
            }

            this.k4v_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.y3c_1 = this.f4v_1;
            if (!(this.l4v_1.r4v_1 == null)) {
              var tmp0_0 = this.l4v_1.r4v_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.x3c_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.l4v_1.n4v_1, this.l4v_1.o4v_1, this.l4v_1.q4v_1, this.l4v_1.p4v_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.l4v_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.l4v_1));
            if (!this.e4v_1.w4v_1 && !this.e4v_1.x4v_1 && this.l4v_1.u4v_1.e1() === 1 && canSendOnly(this.e4v_1, first(this.l4v_1.u4v_1))) {
              var param = first(this.l4v_1.u4v_1);
              var body = new ByteArrayContent(ensureNotNull(param.t4u_1), param.v4u());
              if (body == null) {
                this_0.a3d_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3 = null instanceof ByteArrayContent;
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.t3i(new TypeInfo(tmp_2, tmp_3, tmp_4));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.a3d_1 = body;
                  this_0.t3i(null);
                } else {
                  this_0.a3d_1 = body;
                  var tmp_6 = getKClass(ByteArrayContent);
                  var tmp_7 = null instanceof ByteArrayContent;
                  var tmp_8;
                  try {
                    tmp_8 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p_0) {
                    var tmp_9;
                    if ($p_0 instanceof Error) {
                      var _unused_var__etf5q3_0 = $p_0;
                      tmp_9 = null;
                    } else {
                      throw $p_0;
                    }
                    tmp_8 = tmp_9;
                  }
                  this_0.t3i(new TypeInfo(tmp_6, tmp_7, tmp_8));
                }
              }
            } else {
              if (this.f4v_1.equals(Companion_getInstance_1().u2n_1)) {
                var _iterator__ex2g4s = this.l4v_1.u4v_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.p4u_1.a1_1 === 0) {
                    this_0.x3c_1.h2r_1.a2b(element.q4u_1, ensureNotNull(element.r4u_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.l4v_1.u4v_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.p4u_1.equals(Type_QUERY_getInstance())) {
                    destination.c1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.l4v_1.u4v_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.p4u_1.equals(Type_PARAM_getInstance())) {
                    destination_0.c1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.l4v_1.u4v_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.p4u_1.equals(Type_FILE_getInstance())) {
                    destination_1.c1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.x3c_1.h2r_1.a2b(element_3.q4u_1, ensureNotNull(element_3.r4u_1));
                  }
                }
                var tmp_10;
                if (!params.r()) {
                  tmp_10 = true;
                } else {
                  tmp_10 = !files.r();
                }
                if (tmp_10) {
                  if (this.e4v_1.x4v_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().f2h_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.a2b(element_4.q4u_1, ensureNotNull(element_4.r4u_1));
                    }
                    var body_0 = new FormDataContent(this_1.m2j());
                    if (body_0 == null) {
                      this_0.a3d_1 = NullBody_instance;
                      var tmp_11 = getKClass(FormDataContent);
                      var tmp_12 = null instanceof FormDataContent;
                      var tmp_13;
                      try {
                        tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p_1) {
                        var tmp_14;
                        if ($p_1 instanceof Error) {
                          var _unused_var__etf5q3_1 = $p_1;
                          tmp_14 = null;
                        } else {
                          throw $p_1;
                        }
                        tmp_13 = tmp_14;
                      }
                      this_0.t3i(new TypeInfo(tmp_11, tmp_12, tmp_13));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.a3d_1 = body_0;
                        this_0.t3i(null);
                      } else {
                        this_0.a3d_1 = body_0;
                        var tmp_15 = getKClass(FormDataContent);
                        var tmp_16 = null instanceof FormDataContent;
                        var tmp_17;
                        try {
                          tmp_17 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_18;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_18 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_17 = tmp_18;
                        }
                        this_0.t3i(new TypeInfo(tmp_15, tmp_16, tmp_17));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().i2i_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.o4b(element_5.q4u_1, ensureNotNull(element_5.r4u_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_19 = ensureNotNull(element_6.t4u_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.v4u());
                      this_3.a2b('Content-Disposition', 'filename=' + element_6.s4u_1);
                      this_2.p4b(element_6.q4u_1, tmp_19, this_3.m2j());
                    }
                    var this_4 = this_2.q4b();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.a3d_1 = NullBody_instance;
                      var tmp_20 = getKClass(MultiPartFormDataContent);
                      var tmp_21 = null instanceof MultiPartFormDataContent;
                      var tmp_22;
                      try {
                        tmp_22 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_23;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_23 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_22 = tmp_23;
                      }
                      this_0.t3i(new TypeInfo(tmp_20, tmp_21, tmp_22));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.a3d_1 = body_1;
                        this_0.t3i(null);
                      } else {
                        this_0.a3d_1 = body_1;
                        var tmp_24 = getKClass(MultiPartFormDataContent);
                        var tmp_25 = null instanceof MultiPartFormDataContent;
                        var tmp_26;
                        try {
                          tmp_26 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_27;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_27 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_26 = tmp_27;
                        }
                        this_0.t3i(new TypeInfo(tmp_24, tmp_25, tmp_26));
                      }
                    }
                  }
                }
              }
            }

            this.m8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).x4d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.m8_1 = 5;
            suspendResult = this.k4v_1.e4w(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.j4v_1 = suspendResult;
            this.n8_1 = 9;
            this.m8_1 = 6;
            var tmp_28 = this;
            continue $sm;
          case 6:
            var tmp_29 = this.j4v_1;
            this.n8_1 = 9;
            closeFinally(this.i4v_1, this.h4v_1);
            this.g4v_1 = tmp_29;
            this.m8_1 = 11;
            continue $sm;
          case 7:
            this.n8_1 = 8;
            var tmp_30 = this.p8_1;
            if (tmp_30 instanceof Error) {
              var e = this.p8_1;
              var tmp_31 = this;
              this.h4v_1 = e;
              throw e;
            } else {
              throw this.p8_1;
            }

          case 8:
            this.n8_1 = 9;
            var t = this.p8_1;
            closeFinally(this.i4v_1, this.h4v_1);
            throw t;
          case 9:
            throw this.p8_1;
          case 10:
            this.n8_1 = 9;
            closeFinally(this.i4v_1, this.h4v_1);
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 11;
            continue $sm;
          case 11:
            return this.g4v_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.n8_1 === 9) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.n4v_1 = 'https';
    this.o4v_1 = null;
    this.p4v_1 = null;
    this.q4v_1 = null;
    this.r4v_1 = null;
    this.s4v_1 = null;
    this.t4v_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.u4v_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.v4v_1 = LinkedHashMap_init_$Create$();
    this.w4v_1 = false;
    this.x4v_1 = false;
    this.y4v_1 = true;
    this.z4v_1 = false;
    this.a4w_1 = null;
    this.b4w_1 = null;
    this.c4w_1 = null;
  }
  protoOf(HttpRequest).f4w = function (path) {
    // Inline function 'kotlin.also' call
    this.p4v_1 = path;
    return this;
  };
  protoOf(HttpRequest).g4w = function (url) {
    // Inline function 'kotlin.also' call
    this.r4v_1 = url;
    return this;
  };
  protoOf(HttpRequest).h4w = function (accept) {
    // Inline function 'kotlin.also' call
    this.s4v_1 = accept;
    return this;
  };
  protoOf(HttpRequest).i4w = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.v4v_1.z2(key, value);
    return this;
  };
  protoOf(HttpRequest).j4w = function (forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.w4v_1 = forceMultipartFormData;
    return this;
  };
  protoOf(HttpRequest).k4w = function (key, value) {
    // Inline function 'kotlin.also' call
    this.u4v_1.c1(Companion_instance.m4u(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).l4w = function (key, value) {
    // Inline function 'kotlin.also' call
    this.u4v_1.c1(Companion_instance.n4u(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).o4u = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.u4v_1.c1(Companion_instance.o4u(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).m4w = function ($completion) {
    return proceed(this, Companion_getInstance_1().u2n_1, $completion);
  };
  protoOf(HttpRequest).n4w = function ($completion) {
    return proceed(this, Companion_getInstance_1().v2n_1, $completion);
  };
  protoOf(HttpRequest).o4w = function ($completion) {
    return proceed(this, Companion_getInstance_1().w2n_1, $completion);
  };
  protoOf(HttpRequest).p4w = function ($completion) {
    return proceed(this, Companion_getInstance_1().y2n_1, $completion);
  };
  protoOf(HttpRequest).q4w = function ($completion) {
    return proceed(this, Companion_getInstance_1().x2n_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.z4k_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4w_1 = _this__u8e3s4;
    this.a4x_1 = response;
  }
  protoOf($fromCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.c4x_1 = this.a4x_1.s3e().s2q_1;
            this.b4x_1 = toMap(this.a4x_1.t2n());
            var this_0 = this.a4x_1;
            this.m8_1 = 1;
            var tmp_0 = this_0.q3e();
            var tmp_1 = PrimitiveClasses_getInstance().xb();
            var tmp_2 = !(null == null) ? isByteArray(null) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(PrimitiveClasses_getInstance().xb(), arrayOf([]), false);
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
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.c4x_1, this.b4x_1, ARGUMENT);
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
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.d4w_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).e4w = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.f4x_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.h4x();
    }, 1, 0, 33);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.d4x_1 = status;
    this.e4x_1 = headers;
    this.f4x_1 = body;
    var tmp = this;
    tmp.g4x_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).h4x = function () {
    var tmp0 = this.g4x_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.e3e(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.k3j_1 = ProxyBuilder_instance.e4k(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
