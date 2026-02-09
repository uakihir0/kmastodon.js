(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'khttpclient'.");
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
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var THROW_IAE = kotlin_kotlin.$_$.wi;
  var enumEntries = kotlin_kotlin.$_$.ab;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var Enum = kotlin_kotlin.$_$.li;
  var protoOf = kotlin_kotlin.$_$.vd;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var VOID = kotlin_kotlin.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.h1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var split = kotlin_kotlin.$_$.tg;
  var lastOrNull = kotlin_kotlin.$_$.o8;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var CoroutineImpl = kotlin_kotlin.$_$.ta;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.yd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.n1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.i2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.nj;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var contentType = kotlin_io_ktor_ktor_http.$_$.y1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var append = kotlin_io_ktor_ktor_http.$_$.r1;
  var copyToArray = kotlin_kotlin.$_$.r7;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.oe;
  var arrayOf = kotlin_kotlin.$_$.jj;
  var createKType = kotlin_kotlin.$_$.me;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.n;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.z;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.o;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.m1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var first = kotlin_kotlin.$_$.c8;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.q;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ba;
  var closeFinally = kotlin_kotlin.$_$.kj;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.wc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.f1;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.o1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f5;
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var isByteArray = kotlin_kotlin.$_$.dd;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var decodeToString = kotlin_kotlin.$_$.nf;
  var lazy = kotlin_kotlin.$_$.tj;
  var KProperty1 = kotlin_kotlin.$_$.ue;
  var getPropertyCallableRef = kotlin_kotlin.$_$.rc;
  var isBlank = kotlin_kotlin.$_$.ag;
  var ProxyBuilder_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.q1;
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
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  function values() {
    return [Type_QUERY_getInstance(), Type_PARAM_getInstance(), Type_FILE_getInstance(), Type_JSON_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'QUERY':
        return Type_QUERY_getInstance();
      case 'PARAM':
        return Type_PARAM_getInstance();
      case 'FILE':
        return Type_FILE_getInstance();
      case 'JSON':
        return Type_JSON_getInstance();
      default:
        Type_initEntries();
        THROW_IAE('No enum constant work.socialhub.khttpclient.HttpParameter.Type.' + value);
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Type_entriesInitialized;
  function Type_initEntries() {
    if (Type_entriesInitialized)
      return Unit_getInstance();
    Type_entriesInitialized = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  var $ENTRIES;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).query_r463rc_k$ = function (key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  };
  protoOf(Companion).param_rhfqfh_k$ = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).file_65915o_k$ = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).json_tyne5q_k$ = function (json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    Type_initEntries();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    Type_initEntries();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    Type_initEntries();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    Type_initEntries();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    Companion_getInstance_2();
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.type_1 = type;
    this.key_1 = key;
    this.value_1 = value;
    this.fileName_1 = fileName;
    this.fileBody_1 = fileBody;
  }
  protoOf(HttpParameter).get_type_wovaf7_k$ = function () {
    return this.type_1;
  };
  protoOf(HttpParameter).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(HttpParameter).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(HttpParameter).get_fileName_r258mo_k$ = function () {
    return this.fileName_1;
  };
  protoOf(HttpParameter).get_fileBody_r1xuyv_k$ = function () {
    return this.fileBody_1;
  };
  protoOf(HttpParameter).fileExtension_kyjtgd_k$ = function () {
    var tmp0_safe_receiver = this.fileName_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).fileContentType_sakr3r_k$ = function () {
    switch (this.fileExtension_kyjtgd_k$()) {
      case 'txt':
        return Text_getInstance().get_Plain_ifc0ap_k$();
      case 'html':
        return Text_getInstance().get_Html_wo3384_k$();
      case 'css':
        return Text_getInstance().get_CSS_18jwcm_k$();
      case 'csv':
        return Text_getInstance().get_CSV_18jwcj_k$();
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().get_JPEG_wo3lip_k$();
      case 'png':
        return Image_getInstance().get_PNG_18jmu8_k$();
      case 'gif':
        return Image_getInstance().get_GIF_18jtmt_k$();
      case 'svg':
        return Image_getInstance().get_SVG_18jkf9_k$();
      case 'mpeg':
        return Video_getInstance().get_MPEG_wo5iha_k$();
      case 'mp4':
        return Video_getInstance().get_MP4_18jp14_k$();
      case 'mov':
        return Video_getInstance().get_QuickTime_7v18bz_k$();
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().get_Json_wo4ci9_k$();
      case 'xml':
        return Application_getInstance().get_Xml_18jg4y_k$();
      case 'zip':
        return Application_getInstance().get_Zip_18jeqw_k$();
      case 'pdf':
        return Application_getInstance().get_Pdf_18jmaf_k$();
    }
    return Application_getInstance().get_OctetStream_nfka06_k$();
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function canSendOnly($this, param) {
    if (param.get_type_wovaf7_k$().equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.fileContentType_sakr3r_k$();
    return tmp0_subject.equals(Application_getInstance().get_Json_wo4ci9_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_JPEG_wo3lip_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_PNG_18jmu8_k$()) ? true : tmp0_subject.equals(Image_getInstance().get_GIF_18jtmt_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_MPEG_wo5iha_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_MP4_18jp14_k$()) ? true : tmp0_subject.equals(Video_getInstance().get_QuickTime_7v18bz_k$()) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.skipSSLValidation_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_getInstance();
      }
      $this$HttpClient.set_followRedirects_im56s4_k$($req.followRedirect_1);
      return Unit_getInstance();
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.header_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var k = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var v = element.get_value_j01efc_k$();
        $this$headers.append_rhug0a_k$(k, v);
      }
      return Unit_getInstance();
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.set_requestTimeoutMillis_xyy1t6_k$($req.requestTimeoutMillis_1);
      $this$timeout.set_connectTimeoutMillis_lkrilr_k$($req.connectTimeoutMillis_1);
      $this$timeout.set_socketTimeoutMillis_wmp1zo_k$($req.socketTimeoutMillis_1);
      return Unit_getInstance();
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.method_1 = method;
  }
  protoOf($proceedCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.req6__1 = this._this__u8e3s4__1;
            var tmp_0 = this;
            tmp_0.tmp07__1 = HttpClient(HttpRequest$proceed$lambda(this.req6__1));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.this2__1 = this.tmp07__1;
            this.exception1__1 = null;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(8);
            this.set_exceptionState_fex74n_k$(7);
            var client = this.this2__1;
            var tmp0_safe_receiver = this._this__u8e3s4__1.accept_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this._this__u8e3s4__1.header_1.put_4fpzoq_k$('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this._this__u8e3s4__1.userAgent_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this._this__u8e3s4__1.header_1;
              var key = 'User-Agent';
              tmp0.put_4fpzoq_k$(key, tmp1_safe_receiver);
            }

            this.ARGUMENT5__1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.set_method_hoo95u_k$(this.method_1);
            if (!(this.req6__1.url_1 == null)) {
              var tmp0_0 = this.req6__1.url_1;
              var tmp$ret$0 = Unit_getInstance();
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
              takeFrom(this_0.get_url_18iuii_k$(), URLBuilder(tmp_1));
            } else {
              url(this_0, this.req6__1.schema_1, this.req6__1.host_1, this.req6__1.port_1, this.req6__1.path_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.req6__1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.req6__1));
            if (!this._this__u8e3s4__1.forceMultipartFormData_1 && !this._this__u8e3s4__1.forceApplicationFormUrlEncoded_1 && this.req6__1.params_1.get_size_woubt6_k$() === 1 && canSendOnly(this._this__u8e3s4__1, first(this.req6__1.params_1))) {
              var param = first(this.req6__1.params_1);
              var body = new ByteArrayContent(ensureNotNull(param.get_fileBody_r1xuyv_k$()), param.fileContentType_sakr3r_k$());
              if (body == null) {
                this_0.set_body_slfhxt_k$(NullBody_getInstance());
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3;
                try {
                  tmp_3 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
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
                this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_2, tmp_3));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.set_body_slfhxt_k$(body);
                  this_0.set_bodyType_8pgqkl_k$(null);
                } else {
                  this_0.set_body_slfhxt_k$(body);
                  var tmp_5 = getKClass(ByteArrayContent);
                  var tmp_6;
                  try {
                    tmp_6 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_7;
                    if ($p instanceof Error) {
                      var _unused_var__etf5q3_0 = $p;
                      tmp_7 = null;
                    } else {
                      throw $p;
                    }
                    tmp_6 = tmp_7;
                  }
                  this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_5, tmp_6));
                }
              }
            } else {
              if (this.method_1.equals(Companion_getInstance_1().get_Get_18jsxf_k$())) {
                var _iterator__ex2g4s = this.req6__1.params_1.iterator_jk1svi_k$();
                while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                  var element = _iterator__ex2g4s.next_20eer_k$();
                  if (element.get_type_wovaf7_k$().get_ordinal_ip24qg_k$() === 0) {
                    this_0.get_url_18iuii_k$().get_parameters_cl4rkd_k$().append_rhug0a_k$(element.get_key_18j28a_k$(), ensureNotNull(element.get_value_j01efc_k$()));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.req6__1.params_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.iterator_jk1svi_k$();
                while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
                  var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
                  if (element_0.get_type_wovaf7_k$().equals(Type_QUERY_getInstance())) {
                    destination.add_utx5q5_k$(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.req6__1.params_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.iterator_jk1svi_k$();
                while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
                  var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
                  if (element_1.get_type_wovaf7_k$().equals(Type_PARAM_getInstance())) {
                    destination_0.add_utx5q5_k$(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.req6__1.params_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.iterator_jk1svi_k$();
                while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
                  var element_2 = _iterator__ex2g4s_2.next_20eer_k$();
                  if (element_2.get_type_wovaf7_k$().equals(Type_FILE_getInstance())) {
                    destination_1.add_utx5q5_k$(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.isEmpty_y1axqb_k$()) {
                  var _iterator__ex2g4s_3 = queries.iterator_jk1svi_k$();
                  while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
                    var element_3 = _iterator__ex2g4s_3.next_20eer_k$();
                    this_0.get_url_18iuii_k$().get_parameters_cl4rkd_k$().append_rhug0a_k$(element_3.get_key_18j28a_k$(), ensureNotNull(element_3.get_value_j01efc_k$()));
                  }
                }
                var tmp_8;
                if (!params.isEmpty_y1axqb_k$()) {
                  tmp_8 = true;
                } else {
                  tmp_8 = !files.isEmpty_y1axqb_k$();
                }
                if (tmp_8) {
                  if (this._this__u8e3s4__1.forceApplicationFormUrlEncoded_1) {
                    if (!files.isEmpty_y1axqb_k$()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().get_FormUrlEncoded_vh57zg_k$());
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.iterator_jk1svi_k$();
                    while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
                      var element_4 = _iterator__ex2g4s_4.next_20eer_k$();
                      this_1.append_rhug0a_k$(element_4.get_key_18j28a_k$(), ensureNotNull(element_4.get_value_j01efc_k$()));
                    }
                    var body_0 = new FormDataContent(this_1.build_1k0s4u_k$());
                    if (body_0 == null) {
                      this_0.set_body_slfhxt_k$(NullBody_getInstance());
                      var tmp_9 = getKClass(FormDataContent);
                      var tmp_10;
                      try {
                        tmp_10 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p) {
                        var tmp_11;
                        if ($p instanceof Error) {
                          var _unused_var__etf5q3_1 = $p;
                          tmp_11 = null;
                        } else {
                          throw $p;
                        }
                        tmp_10 = tmp_11;
                      }
                      this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_9, tmp_10));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.set_body_slfhxt_k$(body_0);
                        this_0.set_bodyType_8pgqkl_k$(null);
                      } else {
                        this_0.set_body_slfhxt_k$(body_0);
                        var tmp_12 = getKClass(FormDataContent);
                        var tmp_13;
                        try {
                          tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p) {
                          var tmp_14;
                          if ($p instanceof Error) {
                            var _unused_var__etf5q3_2 = $p;
                            tmp_14 = null;
                          } else {
                            throw $p;
                          }
                          tmp_13 = tmp_14;
                        }
                        this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_12, tmp_13));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().get_FormData_mwpwuh_k$());
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.iterator_jk1svi_k$();
                    while (_iterator__ex2g4s_5.hasNext_bitz1p_k$()) {
                      var element_5 = _iterator__ex2g4s_5.next_20eer_k$();
                      this_2.append$default_90frxg_k$(element_5.get_key_18j28a_k$(), ensureNotNull(element_5.get_value_j01efc_k$()));
                    }
                    var _iterator__ex2g4s_6 = files.iterator_jk1svi_k$();
                    while (_iterator__ex2g4s_6.hasNext_bitz1p_k$()) {
                      var element_6 = _iterator__ex2g4s_6.next_20eer_k$();
                      var tmp_15 = element_6.get_key_18j28a_k$();
                      var tmp_16 = ensureNotNull(element_6.get_fileBody_r1xuyv_k$());
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.fileContentType_sakr3r_k$());
                      this_3.append_rhug0a_k$('Content-Disposition', 'filename=' + element_6.get_fileName_r258mo_k$());
                      this_2.append_57lmty_k$(tmp_15, tmp_16, this_3.build_1k0s4u_k$());
                    }
                    var this_4 = this_2.build_3aenbz_k$();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.set_body_slfhxt_k$(NullBody_getInstance());
                      var tmp_17 = getKClass(MultiPartFormDataContent);
                      var tmp_18;
                      try {
                        tmp_18 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p) {
                        var tmp_19;
                        if ($p instanceof Error) {
                          var _unused_var__etf5q3_3 = $p;
                          tmp_19 = null;
                        } else {
                          throw $p;
                        }
                        tmp_18 = tmp_19;
                      }
                      this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_17, tmp_18));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.set_body_slfhxt_k$(body_1);
                        this_0.set_bodyType_8pgqkl_k$(null);
                      } else {
                        this_0.set_body_slfhxt_k$(body_1);
                        var tmp_20 = getKClass(MultiPartFormDataContent);
                        var tmp_21;
                        try {
                          tmp_21 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p) {
                          var tmp_22;
                          if ($p instanceof Error) {
                            var _unused_var__etf5q3_4 = $p;
                            tmp_22 = null;
                          } else {
                            throw $p;
                          }
                          tmp_21 = tmp_22;
                        }
                        this_0.set_bodyType_8pgqkl_k$(new TypeInfo(tmp_20, tmp_21));
                      }
                    }
                  }
                }
              }
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = (new HttpStatement(this_0, client)).execute_rsj18j_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.ARGUMENT5__1.from_47xwmg_k$(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.tmp$ret$24__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            var tmp_23 = this;
            continue $sm;
          case 6:
            var tmp_24 = this.tmp$ret$24__1;
            this.set_exceptionState_fex74n_k$(9);
            closeFinally(this.this2__1, this.exception1__1);
            this.tmp$ret$60__1 = tmp_24;
            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_25 = this.get_exception_x0n6w6_k$();
            if (tmp_25 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_26 = this;
              this.exception1__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t = this.get_exception_x0n6w6_k$();
            closeFinally(this.this2__1, this.exception1__1);
            throw t;
          case 9:
            throw this.get_exception_x0n6w6_k$();
          case 10:
            this.set_exceptionState_fex74n_k$(9);
            closeFinally(this.this2__1, this.exception1__1);
            if (false) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(11);
            continue $sm;
          case 11:
            return this.tmp$ret$60__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.schema_1 = 'https';
    this.host_1 = null;
    this.path_1 = null;
    this.port_1 = null;
    this.url_1 = null;
    this.accept_1 = null;
    this.userAgent_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.params_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.header_1 = LinkedHashMap_init_$Create$();
    this.forceMultipartFormData_1 = false;
    this.forceApplicationFormUrlEncoded_1 = false;
    this.followRedirect_1 = true;
    this.skipSSLValidation_1 = false;
    this.requestTimeoutMillis_1 = null;
    this.connectTimeoutMillis_1 = null;
    this.socketTimeoutMillis_1 = null;
  }
  protoOf(HttpRequest).set_schema_ah6guk_k$ = function (_set____db54di) {
    this.schema_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_schema_je6tuy_k$ = function () {
    return this.schema_1;
  };
  protoOf(HttpRequest).set_host_ry2fea_k$ = function (_set____db54di) {
    this.host_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_host_wonf8x_k$ = function () {
    return this.host_1;
  };
  protoOf(HttpRequest).set_path_kc1l6z_k$ = function (_set____db54di) {
    this.path_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(HttpRequest).set_port_9es2ar_k$ = function (_set____db54di) {
    this.port_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_port_wosj4a_k$ = function () {
    return this.port_1;
  };
  protoOf(HttpRequest).set_url_fvthdx_k$ = function (_set____db54di) {
    this.url_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_url_18iuii_k$ = function () {
    return this.url_1;
  };
  protoOf(HttpRequest).set_accept_nhv2jy_k$ = function (_set____db54di) {
    this.accept_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_accept_avafwx_k$ = function () {
    return this.accept_1;
  };
  protoOf(HttpRequest).set_userAgent_8igxae_k$ = function (_set____db54di) {
    this.userAgent_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_userAgent_dnxump_k$ = function () {
    return this.userAgent_1;
  };
  protoOf(HttpRequest).get_params_hy4oen_k$ = function () {
    return this.params_1;
  };
  protoOf(HttpRequest).get_header_e7o2vq_k$ = function () {
    return this.header_1;
  };
  protoOf(HttpRequest).set_forceMultipartFormData_i23dpl_k$ = function (_set____db54di) {
    this.forceMultipartFormData_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_forceMultipartFormData_g7otko_k$ = function () {
    return this.forceMultipartFormData_1;
  };
  protoOf(HttpRequest).set_forceApplicationFormUrlEncoded_n2kkvk_k$ = function (_set____db54di) {
    this.forceApplicationFormUrlEncoded_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_forceApplicationFormUrlEncoded_j7bqs1_k$ = function () {
    return this.forceApplicationFormUrlEncoded_1;
  };
  protoOf(HttpRequest).set_followRedirect_gnzcob_k$ = function (_set____db54di) {
    this.followRedirect_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_followRedirect_r61hl6_k$ = function () {
    return this.followRedirect_1;
  };
  protoOf(HttpRequest).set_skipSSLValidation_vxv48c_k$ = function (_set____db54di) {
    this.skipSSLValidation_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_skipSSLValidation_injbgd_k$ = function () {
    return this.skipSSLValidation_1;
  };
  protoOf(HttpRequest).set_requestTimeoutMillis_xyy1t6_k$ = function (_set____db54di) {
    this.requestTimeoutMillis_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_requestTimeoutMillis_rgkxdt_k$ = function () {
    return this.requestTimeoutMillis_1;
  };
  protoOf(HttpRequest).set_connectTimeoutMillis_lkrilr_k$ = function (_set____db54di) {
    this.connectTimeoutMillis_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_connectTimeoutMillis_jog9kq_k$ = function () {
    return this.connectTimeoutMillis_1;
  };
  protoOf(HttpRequest).set_socketTimeoutMillis_wmp1zo_k$ = function (_set____db54di) {
    this.socketTimeoutMillis_1 = _set____db54di;
  };
  protoOf(HttpRequest).get_socketTimeoutMillis_3uzxud_k$ = function () {
    return this.socketTimeoutMillis_1;
  };
  protoOf(HttpRequest).schema_nqvidj_k$ = function (schema) {
    // Inline function 'kotlin.also' call
    this.schema_1 = schema;
    return this;
  };
  protoOf(HttpRequest).host_oz5yoi_k$ = function (host) {
    // Inline function 'kotlin.also' call
    this.host_1 = host;
    return this;
  };
  protoOf(HttpRequest).path_3j3ft7_k$ = function (path) {
    // Inline function 'kotlin.also' call
    this.path_1 = path;
    return this;
  };
  protoOf(HttpRequest).port_td6q2_k$ = function (port) {
    // Inline function 'kotlin.also' call
    this.port_1 = port;
    return this;
  };
  protoOf(HttpRequest).url_uv2bth_k$ = function (url) {
    // Inline function 'kotlin.also' call
    this.url_1 = url;
    return this;
  };
  protoOf(HttpRequest).accept_nclv9q_k$ = function (accept) {
    // Inline function 'kotlin.also' call
    this.accept_1 = accept;
    return this;
  };
  protoOf(HttpRequest).userAgent_79bk8w_k$ = function (userAgent) {
    // Inline function 'kotlin.also' call
    this.userAgent_1 = userAgent;
    return this;
  };
  protoOf(HttpRequest).header_32bnnx_k$ = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.header_1.put_4fpzoq_k$(key, value);
    return this;
  };
  protoOf(HttpRequest).forceMultipartFormData_kdsoq2_k$ = function (forceMultipartFormData) {
    // Inline function 'kotlin.also' call
    this.forceMultipartFormData_1 = forceMultipartFormData;
    return this;
  };
  protoOf(HttpRequest).forceApplicationFormUrlEncoded_75e9ul_k$ = function (forceApplicationFormUrlEncoded) {
    // Inline function 'kotlin.also' call
    this.forceApplicationFormUrlEncoded_1 = forceApplicationFormUrlEncoded;
    return this;
  };
  protoOf(HttpRequest).followRedirect_pnbnu0_k$ = function (followRedirect) {
    // Inline function 'kotlin.also' call
    this.followRedirect_1 = followRedirect;
    return this;
  };
  protoOf(HttpRequest).skipSSLValidation_rsj18h_k$ = function (skipSSLValidation) {
    // Inline function 'kotlin.also' call
    this.skipSSLValidation_1 = skipSSLValidation;
    return this;
  };
  protoOf(HttpRequest).requestTimeoutMillis_6pin1y_k$ = function (requestTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.requestTimeoutMillis_1 = requestTimeoutMillis;
    return this;
  };
  protoOf(HttpRequest).connectTimeoutMillis_b5elap_k$ = function (connectTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.connectTimeoutMillis_1 = connectTimeoutMillis;
    return this;
  };
  protoOf(HttpRequest).socketTimeoutMillis_qj3ug6_k$ = function (socketTimeoutMillis) {
    // Inline function 'kotlin.also' call
    this.socketTimeoutMillis_1 = socketTimeoutMillis;
    return this;
  };
  protoOf(HttpRequest).query_u1ndh0_k$ = function (key, value) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().query_r463rc_k$(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).queries_u14c3j_k$ = function (queries) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = queries.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      this.query_u1ndh0_k$(k, v);
    }
    return this;
  };
  protoOf(HttpRequest).param_sgc4j3_k$ = function (key, value) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().param_rhfqfh_k$(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).params_lw6ktd_k$ = function (params) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = params.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var k = element.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v = element.get_value_j01efc_k$();
      this.param_sgc4j3_k$(k, v);
    }
    return this;
  };
  protoOf(HttpRequest).file_65915o_k$ = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().file_65915o_k$(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).json_tyne5q_k$ = function (json) {
    // Inline function 'kotlin.also' call
    this.params_1.add_utx5q5_k$(Companion_getInstance_2().json_tyne5q_k$(json));
    return this;
  };
  protoOf(HttpRequest).pathValue_hbfy18_k$ = function (key, value) {
    // Inline function 'kotlin.also' call
    var tmp = this;
    var tmp0_safe_receiver = this.path_1;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '{' + key + '}';
      // Inline function 'kotlin.text.replace' call
      tmp_0 = Regex_init_$Create$(this_0).replace_1ix0wf_k$(tmp0_safe_receiver, value);
    }
    tmp.path_1 = tmp_0;
    var tmp_1 = this;
    var tmp1_safe_receiver = this.url_1;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toRegex' call
      var this_1 = '{' + key + '}';
      // Inline function 'kotlin.text.replace' call
      tmp_2 = Regex_init_$Create$(this_1).replace_1ix0wf_k$(tmp1_safe_receiver, value);
    }
    tmp_1.url_1 = tmp_2;
    return this;
  };
  protoOf(HttpRequest).get_r3bkvm_k$ = function ($completion) {
    return proceed(this, Companion_getInstance_1().get_Get_18jsxf_k$(), $completion);
  };
  protoOf(HttpRequest).post_etl1qc_k$ = function ($completion) {
    return proceed(this, Companion_getInstance_1().get_Post_wo83k9_k$(), $completion);
  };
  protoOf(HttpRequest).put_v4p3gr_k$ = function ($completion) {
    return proceed(this, Companion_getInstance_1().get_Put_18jlve_k$(), $completion);
  };
  protoOf(HttpRequest).delete_6n5gk9_k$ = function ($completion) {
    return proceed(this, Companion_getInstance_1().get_Delete_2tr9d8_k$(), $completion);
  };
  protoOf(HttpRequest).patch_hyutss_k$ = function ($completion) {
    return proceed(this, Companion_getInstance_1().get_Patch_if5ddr_k$(), $completion);
  };
  protoOf(HttpRequest).forceMultipart_5yucl8_k$ = function (forceMultipart) {
    // Inline function 'kotlin.also' call
    this.forceMultipartFormData_1 = forceMultipart;
    return this;
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.set_ignoreUnknownKeys_pzvtne_k$(true);
    return Unit_getInstance();
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.response_1 = response;
  }
  protoOf($fromCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.ARGUMENT1__1 = this.response_1.get_status_jnf6d7_k$().get_value_j01efc_k$();
            this.ARGUMENT0__1 = toMap(this.response_1.get_headers_ef25jx_k$());
            var this_0 = this.response_1;
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = this_0.get_call_wojxrb_k$();
            var tmp_1 = PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$();
            var tmp_2;
            try {
              tmp_2 = createKType(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), arrayOf([]), false);
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

            suspendResult = tmp_0.bodyNullable_wn8z59_k$(new TypeInfo(tmp_1, tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.ARGUMENT1__1, this.ARGUMENT0__1, ARGUMENT);
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
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.mapper_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).from_47xwmg_k$ = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Companion_0).get_mapper_giyu6i_k$ = function () {
    return this.mapper_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.body_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return function (p0) {
      return p0.get_stringBody_otz1zw_k$();
    };
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.status_1 = status;
    this.headers_1 = headers;
    this.body_1 = body;
    var tmp = this;
    tmp.stringBody$delegate_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).get_status_jnf6d7_k$ = function () {
    return this.status_1;
  };
  protoOf(HttpResponse).get_headers_ef25jx_k$ = function () {
    return this.headers_1;
  };
  protoOf(HttpResponse).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(HttpResponse).get_stringBody_otz1zw_k$ = function () {
    var tmp0 = this.stringBody$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.get_value_j01efc_k$();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.engine_24osvz_k$(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.set_proxy_6o7pub_k$(ProxyBuilder_getInstance().http_koe7wm_k$(Url($proxyUrl)));
      return Unit_getInstance();
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
