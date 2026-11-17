(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.rb;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var toString = kotlin_kotlin.$_$.ub;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g4;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var charSequenceGet = kotlin_kotlin.$_$.ga;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var equals = kotlin_kotlin.$_$.ma;
  var toString_0 = kotlin_kotlin.$_$.og;
  var Enum = kotlin_kotlin.$_$.cf;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var initMetadataForInterface = kotlin_kotlin.$_$.wa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var numberRangeToNumber = kotlin_kotlin.$_$.ob;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var ClosedRange = kotlin_kotlin.$_$.yb;
  var isInterface = kotlin_kotlin.$_$.hb;
  var contains = kotlin_kotlin.$_$.cc;
  var convertToInt = kotlin_kotlin.$_$.j9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.r4;
  var toDoubleOrNull = kotlin_kotlin.$_$.ce;
  var toDouble = kotlin_kotlin.$_$.de;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var hashCode = kotlin_kotlin.$_$.ra;
  var joinToString = kotlin_kotlin.$_$.x6;
  var KtList = kotlin_kotlin.$_$.f5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v3;
  var KtMap = kotlin_kotlin.$_$.h5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getKClassFromExpression = kotlin_kotlin.$_$.jc;
  var getBooleanHashCode = kotlin_kotlin.$_$.oa;
  var getStringHashCode = kotlin_kotlin.$_$.qa;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pa;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var lazy = kotlin_kotlin.$_$.kg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.ca;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var defineProp = kotlin_kotlin.$_$.la;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ia;
  var coerceAtLeast = kotlin_kotlin.$_$.zb;
  var coerceAtMost = kotlin_kotlin.$_$.ac;
  var isBlank = kotlin_kotlin.$_$.gd;
  var Collection = kotlin_kotlin.$_$.a5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a3;
  var singleOrNull = kotlin_kotlin.$_$.q7;
  var emptyMap = kotlin_kotlin.$_$.m6;
  var getValue = kotlin_kotlin.$_$.u6;
  var copyOf = kotlin_kotlin.$_$.g6;
  var arrayCopy = kotlin_kotlin.$_$.p5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var to = kotlin_kotlin.$_$.pg;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.af;
  var invoke = kotlin_kotlin.$_$.fg;
  var CoroutineImpl = kotlin_kotlin.$_$.z8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.bf;
  var Unit = kotlin_kotlin.$_$.xf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h8;
  var initMetadataForLambda = kotlin_kotlin.$_$.xa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ua;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var getKClass = kotlin_kotlin.$_$.kc;
  var Exception = kotlin_kotlin.$_$.ef;
  var ensureNotNull = kotlin_kotlin.$_$.eg;
  var contains_0 = kotlin_kotlin.$_$.vc;
  var plus = kotlin_kotlin.$_$.mg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var convertToByte = kotlin_kotlin.$_$.i9;
  var fromInt = kotlin_kotlin.$_$.n9;
  var equalsLong = kotlin_kotlin.$_$.m9;
  var convertToShort = kotlin_kotlin.$_$.k9;
  var IllegalArgumentException = kotlin_kotlin.$_$.ff;
  var isFinite = kotlin_kotlin.$_$.hg;
  var isFinite_0 = kotlin_kotlin.$_$.gg;
  var charCodeAt = kotlin_kotlin.$_$.fa;
  var toUInt = kotlin_kotlin.$_$.le;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.a1;
  var toULong = kotlin_kotlin.$_$.me;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.h1;
  var toUByte = kotlin_kotlin.$_$.ke;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.t;
  var toUShort = kotlin_kotlin.$_$.ne;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.o1;
  var Companion_getInstance = kotlin_kotlin.$_$.s2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.u2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var setOf = kotlin_kotlin.$_$.p7;
  var equals_0 = kotlin_kotlin.$_$.bd;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.m;
  var numberToChar = kotlin_kotlin.$_$.pb;
  var toString_1 = kotlin_kotlin.$_$.n;
  var toByte = kotlin_kotlin.$_$.sb;
  var startsWith = kotlin_kotlin.$_$.td;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var single = kotlin_kotlin.$_$.qd;
  var Char = kotlin_kotlin.$_$.xe;
  var toInt = kotlin_kotlin.$_$.ge;
  var toList = kotlin_kotlin.$_$.x7;
  var toNumber = kotlin_kotlin.$_$.y9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  var last = kotlin_kotlin.$_$.c7;
  var removeLast = kotlin_kotlin.$_$.m7;
  var lastIndexOf = kotlin_kotlin.$_$.md;
  var Long = kotlin_kotlin.$_$.hf;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i;
  var multiply = kotlin_kotlin.$_$.r9;
  var add = kotlin_kotlin.$_$.e9;
  var subtract = kotlin_kotlin.$_$.x9;
  var compare = kotlin_kotlin.$_$.h9;
  var numberToLong = kotlin_kotlin.$_$.t9;
  var negate = kotlin_kotlin.$_$.s9;
  var charArray = kotlin_kotlin.$_$.ea;
  var indexOf = kotlin_kotlin.$_$.ed;
  var indexOf_0 = kotlin_kotlin.$_$.fd;
  var substring = kotlin_kotlin.$_$.zd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.c3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(LexerMode, 'LexerMode', VOID, Enum);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.f4k_1 = configuration;
    this.g4k_1 = serializersModule;
    this.h4k_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).bt = function () {
    return this.g4k_1;
  };
  protoOf(Json).i4k = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, LexerMode_OBJ_getInstance(), lexer, deserializer.np(), null);
    var result = input.ls(deserializer);
    lexer.w4k();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.r4l();
    return new JsonImpl(conf, builder.o4l_1);
  }
  function JsonBuilder(json) {
    this.x4k_1 = json.f4k_1.s4l_1;
    this.y4k_1 = json.f4k_1.x4l_1;
    this.z4k_1 = json.f4k_1.t4l_1;
    this.a4l_1 = json.f4k_1.u4l_1;
    this.b4l_1 = json.f4k_1.w4l_1;
    this.c4l_1 = json.f4k_1.y4l_1;
    this.d4l_1 = json.f4k_1.z4l_1;
    this.e4l_1 = json.f4k_1.b4m_1;
    this.f4l_1 = json.f4k_1.i4m_1;
    this.g4l_1 = json.f4k_1.d4m_1;
    this.h4l_1 = json.f4k_1.e4m_1;
    this.i4l_1 = json.f4k_1.f4m_1;
    this.j4l_1 = json.f4k_1.g4m_1;
    this.k4l_1 = json.f4k_1.h4m_1;
    this.l4l_1 = json.f4k_1.c4m_1;
    this.m4l_1 = json.f4k_1.v4l_1;
    this.n4l_1 = json.f4k_1.a4m_1;
    this.o4l_1 = json.bt();
    this.p4l_1 = json.f4k_1.j4m_1;
    this.q4l_1 = json.f4k_1.k4m_1;
  }
  protoOf(JsonBuilder).r4l = function () {
    if (this.n4l_1) {
      // Inline function 'kotlin.require' call
      if (!(this.e4l_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.f4l_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.b4l_1) {
      // Inline function 'kotlin.require' call
      if (!(this.c4l_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.c4l_1 === '    ')) {
      var tmp0 = this.c4l_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.c4l_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.x4k_1, this.z4k_1, this.a4l_1, this.m4l_1, this.b4l_1, this.y4k_1, this.c4l_1, this.d4l_1, this.n4l_1, this.e4l_1, this.l4l_1, this.g4l_1, this.h4l_1, this.i4l_1, this.j4l_1, this.k4l_1, this.f4l_1, this.p4l_1, this.q4l_1);
  };
  function validateConfiguration($this) {
    if (equals($this.bt(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.f4k_1);
    $this.bt().h15(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo, maxNestingDepth) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    maxNestingDepth = maxNestingDepth === VOID ? 400 : maxNestingDepth;
    this.s4l_1 = encodeDefaults;
    this.t4l_1 = ignoreUnknownKeys;
    this.u4l_1 = isLenient;
    this.v4l_1 = allowStructuredMapKeys;
    this.w4l_1 = prettyPrint;
    this.x4l_1 = explicitNulls;
    this.y4l_1 = prettyPrintIndent;
    this.z4l_1 = coerceInputValues;
    this.a4m_1 = useArrayPolymorphism;
    this.b4m_1 = classDiscriminator;
    this.c4m_1 = allowSpecialFloatingPointValues;
    this.d4m_1 = useAlternativeNames;
    this.e4m_1 = namingStrategy;
    this.f4m_1 = decodeEnumsCaseInsensitive;
    this.g4m_1 = allowTrailingComma;
    this.h4m_1 = allowComments;
    this.i4m_1 = classDiscriminatorMode;
    this.j4m_1 = exceptionsWithDebugInfo;
    this.k4m_1 = maxNestingDepth;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.s4l_1 + ', ignoreUnknownKeys=' + this.t4l_1 + ', isLenient=' + this.u4l_1 + ', ' + ('allowStructuredMapKeys=' + this.v4l_1 + ', prettyPrint=' + this.w4l_1 + ', explicitNulls=' + this.x4l_1 + ', ') + ("prettyPrintIndent='" + this.y4l_1 + "', coerceInputValues=" + this.z4l_1 + ', useArrayPolymorphism=' + this.a4m_1 + ', ') + ("classDiscriminator='" + this.b4m_1 + "', allowSpecialFloatingPointValues=" + this.c4m_1 + ', ') + ('useAlternativeNames=' + this.d4m_1 + ', namingStrategy=' + toString_0(this.e4m_1) + ', decodeEnumsCaseInsensitive=' + this.f4m_1 + ', ') + ('allowTrailingComma=' + this.g4m_1 + ', allowComments=' + this.h4m_1 + ', classDiscriminatorMode=' + this.i4m_1.toString() + ', ') + ('exceptionsWithDebugInfo=' + this.j4m_1 + ', maxNestingDepth=' + this.k4m_1 + ')');
  };
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    static_init();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    static_init();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.a3f();
  };
  function get_intOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var result = tmp_1;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      return null;
    return convertToInt(result);
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.a3f() + ' is not an Int');
    return convertToInt(result);
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.a3f();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.a3f();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.a3f());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.a3f());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.a3f());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this__u8e3s4.a3f());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.p4m_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.p4m_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.p4m_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.p4m_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.p4m_1.r();
  };
  protoOf(JsonArray).q4m = function (element) {
    return this.p4m_1.j2(element);
  };
  protoOf(JsonArray).j2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.q4m(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.p4m_1.t();
  };
  protoOf(JsonArray).r4m = function (elements) {
    return this.p4m_1.k2(elements);
  };
  protoOf(JsonArray).k2 = function (elements) {
    return this.r4m(elements);
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.p4m_1.d1(index);
  };
  protoOf(JsonArray).s4m = function (element) {
    return this.p4m_1.m2(element);
  };
  protoOf(JsonArray).m2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.s4m(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t4m = function (element) {
    return this.p4m_1.n2(element);
  };
  protoOf(JsonArray).n2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.t4m(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).o2 = function () {
    return this.p4m_1.o2();
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.p4m_1.j1(index);
  };
  protoOf(JsonArray).p2 = function (fromIndex, toIndex) {
    return this.p4m_1.p2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.p4m_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).e1 = function () {
    return this.p4m_1.e1();
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.u4m_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.u4m_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.u4m_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.u4m_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.u4m_1.r();
  };
  protoOf(JsonObject).s29 = function (key) {
    return this.u4m_1.q2(key);
  };
  protoOf(JsonObject).q2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.s29((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).md = function (key) {
    return this.u4m_1.s2(key);
  };
  protoOf(JsonObject).s2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.md((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).e1 = function () {
    return this.u4m_1.e1();
  };
  protoOf(JsonObject).t2 = function () {
    return this.u4m_1.t2();
  };
  protoOf(JsonObject).u2 = function () {
    return this.u4m_1.u2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.u4m_1.l1();
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.a3f()).v4m();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.w4m_1 = 'null';
  }
  protoOf(JsonNull).n4m = function () {
    return false;
  };
  protoOf(JsonNull).a3f = function () {
    return this.w4m_1;
  };
  protoOf(JsonNull).x4m = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).az = function (typeParamsSerializers) {
    return this.x4m();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.y4m_1 = isString;
    this.z4m_1 = coerceToInlineType;
    this.a4n_1 = toString(body);
    if (!(this.z4m_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.z4m_1.uq()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).n4m = function () {
    return this.y4m_1;
  };
  protoOf(JsonLiteral).a3f = function () {
    return this.a4n_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.y4m_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.a4n_1);
      tmp = this_0.toString();
    } else {
      tmp = this.a4n_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.y4m_1 === other.y4m_1))
      return false;
    if (!(this.a4n_1 === other.a4n_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.y4m_1);
    result = imul(31, result) + getStringHashCode(this.a4n_1) | 0;
    return result;
  };
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.a3f();
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.xp('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.xp('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.xp('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.xp('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.xp('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().b4n_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().c4n_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().d4n_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().e4n_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().f4n_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.g4n_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).np = function () {
    return this.g4n_1;
  };
  protoOf(JsonElementSerializer).op = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.m4m();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.b4n_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).np = function () {
    return this.b4n_1;
  };
  protoOf(JsonPrimitiveSerializer).op = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.m4m();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.l4m().f4k_1.j4m_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.h4n_1 = ListSerializer(JsonElementSerializer_getInstance()).np();
    this.i4n_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).sq = function () {
    return this.i4n_1;
  };
  protoOf(JsonArrayDescriptor).xq = function (index) {
    return this.h4n_1.xq(index);
  };
  protoOf(JsonArrayDescriptor).yq = function (name) {
    return this.h4n_1.yq(name);
  };
  protoOf(JsonArrayDescriptor).zq = function (index) {
    return this.h4n_1.zq(index);
  };
  protoOf(JsonArrayDescriptor).ar = function (index) {
    return this.h4n_1.ar(index);
  };
  protoOf(JsonArrayDescriptor).br = function (index) {
    return this.h4n_1.br(index);
  };
  protoOf(JsonArrayDescriptor).tq = function () {
    return this.h4n_1.tq();
  };
  protoOf(JsonArrayDescriptor).lq = function () {
    return this.h4n_1.lq();
  };
  protoOf(JsonArrayDescriptor).uq = function () {
    return this.h4n_1.uq();
  };
  protoOf(JsonArrayDescriptor).vq = function () {
    return this.h4n_1.vq();
  };
  protoOf(JsonArrayDescriptor).wq = function () {
    return this.h4n_1.wq();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.f4n_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).np = function () {
    return this.f4n_1;
  };
  protoOf(JsonArraySerializer).op = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).op(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.j4n_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).np();
    this.k4n_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).sq = function () {
    return this.k4n_1;
  };
  protoOf(JsonObjectDescriptor).xq = function (index) {
    return this.j4n_1.xq(index);
  };
  protoOf(JsonObjectDescriptor).yq = function (name) {
    return this.j4n_1.yq(name);
  };
  protoOf(JsonObjectDescriptor).zq = function (index) {
    return this.j4n_1.zq(index);
  };
  protoOf(JsonObjectDescriptor).ar = function (index) {
    return this.j4n_1.ar(index);
  };
  protoOf(JsonObjectDescriptor).br = function (index) {
    return this.j4n_1.br(index);
  };
  protoOf(JsonObjectDescriptor).tq = function () {
    return this.j4n_1.tq();
  };
  protoOf(JsonObjectDescriptor).lq = function () {
    return this.j4n_1.lq();
  };
  protoOf(JsonObjectDescriptor).uq = function () {
    return this.j4n_1.uq();
  };
  protoOf(JsonObjectDescriptor).vq = function () {
    return this.j4n_1.vq();
  };
  protoOf(JsonObjectDescriptor).wq = function () {
    return this.j4n_1.wq();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.e4n_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).np = function () {
    return this.e4n_1;
  };
  protoOf(JsonObjectSerializer).op = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).op(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.c4n_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).np = function () {
    return this.c4n_1;
  };
  protoOf(JsonNullSerializer).op = function (decoder) {
    verify(decoder);
    if (decoder.xr()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.yr();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.d4n_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).np = function () {
    return this.d4n_1;
  };
  protoOf(JsonLiteralSerializer).op = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.m4m();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.l4m().f4k_1.j4m_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.l4n_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 31);
  }
  function defer$1($deferred) {
    this.l4n_1 = lazy($deferred);
  }
  protoOf(defer$1).sq = function () {
    return _get_original__l7ku1m(this).sq();
  };
  protoOf(defer$1).tq = function () {
    return _get_original__l7ku1m(this).tq();
  };
  protoOf(defer$1).vq = function () {
    return _get_original__l7ku1m(this).vq();
  };
  protoOf(defer$1).xq = function (index) {
    return _get_original__l7ku1m(this).xq(index);
  };
  protoOf(defer$1).yq = function (name) {
    return _get_original__l7ku1m(this).yq(name);
  };
  protoOf(defer$1).zq = function (index) {
    return _get_original__l7ku1m(this).zq(index);
  };
  protoOf(defer$1).ar = function (index) {
    return _get_original__l7ku1m(this).ar(index);
  };
  protoOf(defer$1).br = function (index) {
    return _get_original__l7ku1m(this).br(index);
  };
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint, cause) {
    cause = cause === VOID ? null : cause;
    JsonException.call(this, fullMessage, cause);
    captureStack(this, JsonDecodingException);
    this.n4n_1 = shortMessage;
    this.o4n_1 = offset;
    this.p4n_1 = path;
    this.q4n_1 = input;
    this.r4n_1 = hint;
  }
  function JsonException(message, cause) {
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, JsonException);
    this.o4m_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.o4m_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint, cause) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    cause = cause === VOID ? null : cause;
    JsonException.call(this, formatEncodingException(shortMessage, hint), cause);
    captureStack(this, JsonEncodingException);
    this.t4n_1 = shortMessage;
    this.u4n_1 = classSerialName;
    this.v4n_1 = hint;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.x4n_1 = (!descriptor.br(index) && descriptor.ar(index).lq());
    return $this.x4n_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 32, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.w4n_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.x4n_1 = false;
  }
  protoOf(JsonElementMarker).y4n = function (index) {
    this.w4n_1.vw(index);
  };
  protoOf(JsonElementMarker).z4n = function () {
    return this.w4n_1.ww();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage, hint) {
    hint = hint === VOID ? null : hint;
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, hint, null), shortMessage, -1, null, null, hint);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.a4o('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.s4k_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.b4o(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.sq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.tq().toString() + "'"), keyDescriptor.sq(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input, cause) {
    cause = cause === VOID ? null : cause;
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.r4k_1.j4m_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint, cause);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.f4k_1.t4l_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.wq();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.yq(name);
    if (!(index === -3))
      return index;
    if (!json.f4k_1.d4m_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.sq() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.f4k_1.f4m_1 && equals(descriptor.tq(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.tq(), CLASS_getInstance()) ? json.f4k_1.e4m_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.d4o(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.vq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.zq(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e4o_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.xq(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.f4o(_this__u8e3s4, i, _this__u8e3s4.xq(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.tq(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.xq(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.xq(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.z2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.k4o_1, 2);
    $this.i4o_1 = copyOf($this.i4o_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.j4o_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.j4o_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.g4o_1 = configuration.k4m_1;
    this.h4o_1 = configuration.j4m_1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i4o_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.j4o_1 = tmp_2;
    this.k4o_1 = -1;
  }
  protoOf(JsonPath).l4o = function (sd) {
    this.k4o_1 = this.k4o_1 + 1 | 0;
    var depth = this.k4o_1;
    if (depth >= this.g4o_1) {
      jsonTooNested(this.g4o_1);
    }
    if (depth === this.i4o_1.length) {
      resize(this);
    }
    this.i4o_1[depth] = sd;
  };
  protoOf(JsonPath).m4o = function (index) {
    this.j4o_1[this.k4o_1] = index;
  };
  protoOf(JsonPath).n4o = function (key) {
    var tmp;
    if (!(this.j4o_1[this.k4o_1] === -2)) {
      this.k4o_1 = this.k4o_1 + 1 | 0;
      tmp = this.k4o_1 === this.i4o_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.i4o_1[this.k4o_1] = this.h4o_1 ? key : RedactedKey_instance;
    this.j4o_1[this.k4o_1] = -2;
  };
  protoOf(JsonPath).o4o = function () {
    if (this.j4o_1[this.k4o_1] === -2) {
      this.i4o_1[this.k4o_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).p4o = function () {
    var depth = this.k4o_1;
    if (this.j4o_1[depth] === -2) {
      this.j4o_1[depth] = -1;
      this.k4o_1 = this.k4o_1 - 1 | 0;
    }
    if (!(this.k4o_1 === -1)) {
      this.k4o_1 = this.k4o_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).q4o = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.k4o_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.i4o_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.tq(), LIST_getInstance())) {
            if (!(this.j4o_1[index] === -1)) {
              this_0.q('[');
              this_0.hc(this.j4o_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.j4o_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.xq(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.q4o();
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.wq().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.r4o_1;
    }
    return json.f4k_1.b4m_1;
  }
  function subtypeNotRegisteredMessageJson(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    var tmp;
    if (subClassName == null) {
      tmp = to('Class discriminator was missing and no default serializers were registered ' + scope, null);
    } else {
      tmp = to("Serializer for subclass '" + subClassName + "' is not found " + scope, "Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n" + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
    }
    return tmp;
  }
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.tq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.s4o_1)
      return Unit_instance;
    if (!$this.t4o_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.s4o_1 = configuration.a4m_1;
    this.t4o_1 = !configuration.i4m_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).q15 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).t15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.np();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).u15 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).v15 = function (baseClass, defaultDeserializerProvider) {
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.u4o_1.z4o(6);
    if ($this.u4o_1.a4p() === 4) {
      $this.u4o_1.b4o('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.u4o_1.b4p()) {
      var key = $this.v4o_1 ? $this.u4o_1.d4p() : $this.u4o_1.c4p();
      $this.u4o_1.z4o(5);
      var element = $this.e4p();
      // Inline function 'kotlin.collections.set' call
      result.z2(key, element);
      lastToken = $this.u4o_1.f4p();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.u4o_1.b4o('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.u4o_1.z4o(7);
    } else if (lastToken === 4) {
      if (!$this.w4o_1) {
        invalidTrailingComma($this.u4o_1);
      }
      $this.u4o_1.z4o(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function readArray($this) {
    var lastToken = $this.u4o_1.f4p();
    if ($this.u4o_1.a4p() === 4) {
      $this.u4o_1.b4o('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.u4o_1.b4p()) {
      var element = $this.e4p();
      result.c1(element);
      lastToken = $this.u4o_1.f4p();
      if (!(lastToken === 4)) {
        var tmp0 = $this.u4o_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.s4k_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.b4o(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.u4o_1.z4o(9);
    } else if (lastToken === 4) {
      if (!$this.w4o_1) {
        invalidTrailingComma($this.u4o_1, 'array');
      }
      $this.u4o_1.z4o(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.v4o_1 || !isString) {
      tmp = $this.u4o_1.d4p();
    } else {
      tmp = $this.u4o_1.c4p();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.c4q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h4q = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.i4q($this$DeepRecursiveFunction, it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).g9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.h4q(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            var tmp0_subject = this.c4q_1.u4o_1.a4p();
            if (tmp0_subject === 1) {
              this.f4q_1 = readValue(this.c4q_1, true);
              this.m8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.f4q_1 = readValue(this.c4q_1, false);
                this.m8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.g4q_1 = this.c4q_1;
                  this.g4q_1.y4o_1 = this.g4q_1.y4o_1 + 1 | 0;
                  if (this.g4q_1.y4o_1 >= this.g4q_1.x4o_1) {
                    jsonTooNested(this.g4q_1.x4o_1);
                  }
                  this.m8_1 = 1;
                  suspendResult = readObject_0(this.c4q_1, this.d4q_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    var tmp_0 = this;
                    var this_0 = this.c4q_1;
                    this_0.y4o_1 = this_0.y4o_1 + 1 | 0;
                    if (this_0.y4o_1 >= this_0.x4o_1) {
                      jsonTooNested(this_0.x4o_1);
                    }
                    var result = readArray(this.c4q_1);
                    this_0.y4o_1 = this_0.y4o_1 - 1 | 0;
                    tmp_0.f4q_1 = result;
                    this.m8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_1 = this;
                    this.c4q_1.u4o_1.b4o("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            var result_0 = suspendResult;
            this.g4q_1.y4o_1 = this.g4q_1.y4o_1 - 1 | 0;
            this.f4q_1 = result_0;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            return this.f4q_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i4q = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.c4q_1, completion);
    i.d4q_1 = $this$DeepRecursiveFunction;
    i.e4q_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.h4q($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o4p_1 = _this__u8e3s4;
    this.p4p_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.r4p_1 = this.o4p_1;
            this.s4p_1 = this.r4p_1.u4o_1.z4o(6);
            if (this.r4p_1.u4o_1.a4p() === 4) {
              this.r4p_1.u4o_1.b4o('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.q4p_1 = LinkedHashMap_init_$Create$();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.r4p_1.u4o_1.b4p()) {
              this.m8_1 = 4;
              continue $sm;
            }

            this.t4p_1 = this.r4p_1.v4o_1 ? this.r4p_1.u4o_1.d4p() : this.r4p_1.u4o_1.c4p();
            this.r4p_1.u4o_1.z4o(5);
            this.m8_1 = 2;
            suspendResult = this.p4p_1.fn(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.q4p_1;
            var key = this.t4p_1;
            tmp0.z2(key, element);
            this.s4p_1 = this.r4p_1.u4o_1.f4p();
            var tmp0_subject = this.s4p_1;
            if (tmp0_subject === 4) {
              this.m8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.m8_1 = 4;
                continue $sm;
              } else {
                this.r4p_1.u4o_1.b4o('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.m8_1 = 1;
            continue $sm;
          case 4:
            if (this.s4p_1 === 6) {
              this.r4p_1.u4o_1.z4o(7);
            } else if (this.s4p_1 === 4) {
              if (!this.r4p_1.w4o_1) {
                invalidTrailingComma(this.r4p_1.u4o_1);
              }
              this.r4p_1.u4o_1.z4o(7);
            }

            return new JsonObject(this.q4p_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.u4o_1 = lexer;
    this.v4o_1 = configuration.u4l_1;
    this.w4o_1 = configuration.g4m_1;
    this.x4o_1 = configuration.k4m_1;
    this.y4o_1 = this.u4o_1.t4k_1.k4o_1;
  }
  protoOf(JsonTreeReader).e4p = function () {
    var token = this.u4o_1.a4p();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      this.y4o_1 = this.y4o_1 + 1 | 0;
      if (this.y4o_1 >= this.x4o_1) {
        jsonTooNested(this.x4o_1);
      }
      var result;
      if (this.y4o_1 === 200) {
        this.y4o_1 = this.y4o_1 - 1 | 0;
        result = readDeepRecursive(this);
      } else {
        result = readObject(this);
        this.y4o_1 = this.y4o_1 - 1 | 0;
      }
      tmp = result;
    } else if (token === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      this.y4o_1 = this.y4o_1 + 1 | 0;
      if (this.y4o_1 >= this.x4o_1) {
        jsonTooNested(this.x4o_1);
      }
      var result_0 = readArray(this);
      this.y4o_1 = this.y4o_1 - 1 | 0;
      tmp = result_0;
    } else {
      this.u4o_1.b4o('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function jsonTooNested(maxStackDepth) {
    throw decodingExceptionOf('Json input is too nested and may be impossible to parse without stack overflow.', 'Current nesting limit is ' + maxStackDepth + ". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.");
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    LexerMode_OBJ_instance = new LexerMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_LIST_instance = new LexerMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    LexerMode_MAP_instance = new LexerMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_POLY_OBJ_instance = new LexerMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var LexerMode_OBJ_instance;
  var LexerMode_LIST_instance;
  var LexerMode_MAP_instance;
  var LexerMode_POLY_OBJ_instance;
  function LexerMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.l4q_1 = begin;
    this.m4q_1 = end;
  }
  function modeFor(_this__u8e3s4, desc) {
    var tmp0_subject = desc.tq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = LexerMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = LexerMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ar(0), _this__u8e3s4.bt());
          var keyKind = keyDescriptor.tq();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = LexerMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.f4k_1.v4l_1) {
              tmp_0 = LexerMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = LexerMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.tq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.uq()) {
      tmp = carrierDescriptor(_this__u8e3s4.ar(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function LexerMode_OBJ_getInstance() {
    static_init_0();
    return LexerMode_OBJ_instance;
  }
  function LexerMode_LIST_getInstance() {
    static_init_0();
    return LexerMode_LIST_instance;
  }
  function LexerMode_MAP_getInstance() {
    static_init_0();
    return LexerMode_MAP_instance;
  }
  function LexerMode_POLY_OBJ_getInstance() {
    static_init_0();
    return LexerMode_POLY_OBJ_instance;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.c4o_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).n4q = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c4o_1;
    var value_0 = this_0.s2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.z2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.z2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).d4o = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.o4q(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.n4q(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).o4q = function (descriptor, key) {
    var tmp0_safe_receiver = this.c4o_1.s2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.p4q_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.p4q_1 === unknownKey) {
      $receiver.p4q_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.dt(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.l4k_1.a4p() === 4) {
      $this.l4k_1.b4o('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.n4k_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.n4k_1 === -1)) {
        hasComma = $this.l4k_1.r4q();
      }
    } else {
      $this.l4k_1.q4q(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.l4k_1.b4p()) {
      if (decodingKey) {
        if ($this.n4k_1 === -1) {
          var tmp0 = $this.l4k_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.s4k_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.b4o(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.l4k_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.s4k_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.b4o(tmp$ret$3, position_0);
          }
        }
      }
      $this.n4k_1 = $this.n4k_1 + 1 | 0;
      tmp = $this.n4k_1;
    } else {
      if (hasComma && !$this.j4k_1.f4k_1.g4m_1) {
        invalidTrailingComma($this.l4k_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.j4k_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.br(index);
      var elementDescriptor = descriptor.ar(index);
      var tmp;
      if (isOptional && !elementDescriptor.lq()) {
        tmp = $this.l4k_1.s4q(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.tq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.lq()) {
          tmp_0 = $this.l4k_1.s4q(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.l4k_1.t4q($this.p4k_1.u4l_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.f4k_1.x4l_1 && elementDescriptor.lq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.l4k_1.c4p();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.l4k_1.r4q();
    while ($this.l4k_1.b4p()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.l4k_1.q4q(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.j4k_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.p4k_1.z4l_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.l4k_1.r4q();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.q4k_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.y4n(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.j4k_1.f4k_1.g4m_1) {
      invalidTrailingComma($this.l4k_1);
    }
    var tmp1_safe_receiver = $this.q4k_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z4n();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.j4k_1) || trySkip($this, $this.o4k_1, key)) {
      $this.l4k_1.v4q($this.p4k_1.u4l_1);
    } else {
      $this.l4k_1.t4k_1.p4o();
      $this.l4k_1.u4q(key);
    }
    return $this.l4k_1.r4q();
  }
  function decodeListIndex($this) {
    var hasComma = $this.l4k_1.r4q();
    var tmp;
    if ($this.l4k_1.b4p()) {
      if (!($this.n4k_1 === -1) && !hasComma) {
        $this.l4k_1.b4o('Expected end of the array or comma');
      }
      $this.n4k_1 = $this.n4k_1 + 1 | 0;
      tmp = $this.n4k_1;
    } else {
      if (hasComma && !$this.j4k_1.f4k_1.g4m_1) {
        invalidTrailingComma($this.l4k_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.p4k_1.u4l_1) {
      tmp = $this.l4k_1.x4q();
    } else {
      tmp = $this.l4k_1.w4q();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.j4k_1 = json;
    this.k4k_1 = mode;
    this.l4k_1 = lexer;
    this.m4k_1 = this.j4k_1.bt();
    this.n4k_1 = -1;
    this.o4k_1 = discriminatorHolder;
    this.p4k_1 = this.j4k_1.f4k_1;
    this.q4k_1 = this.p4k_1.x4l_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).l4m = function () {
    return this.j4k_1;
  };
  protoOf(StreamingJsonDecoder).bt = function () {
    return this.m4k_1;
  };
  protoOf(StreamingJsonDecoder).m4m = function () {
    return (new JsonTreeReader(this.j4k_1.f4k_1, this.l4k_1)).e4p();
  };
  protoOf(StreamingJsonDecoder).ls = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.l4k_1.t4k_1;
    var tmp3_withExceptionHandling_this = this.l4k_1;
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp_0;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp_0 = true;
      } else {
        tmp_0 = this.j4k_1.f4k_1.a4m_1;
      }
      if (tmp_0) {
        return deserializer.op(this);
      }
      var discriminator = classDiscriminator(deserializer.np(), this.j4k_1);
      var tmp0_elvis_lhs = this.l4k_1.y4q(discriminator, this.p4k_1.u4l_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_2;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_2 = true;
          } else {
            tmp_2 = this.l4m().f4k_1.a4m_1;
          }
          if (tmp_2) {
            tmp$ret$2 = tmp2.op(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.np(), this.l4m());
          var tmp2_0 = this.m4m();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.np().sq();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.l4k_1.t4k_1.q4o();
            var tmp_3;
            if (this.l4m().f4k_1.j4m_1) {
              var tmp$ret$8 = toString(tmp2_0);
              tmp_3 = toString(minify(tmp$ret$8));
            } else {
              tmp_3 = null;
            }
            var inputValue = tmp_3;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.md(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4 = tmp2.cq(this, type);
          var actualSerializer = (!(tmp_4 == null) ? isInterface(tmp_4, DeserializationStrategy) : false) ? tmp_4 : null;
          if (actualSerializer == null) {
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, tmp2.bq());
            var message = _destruct__k2r9zo.bg();
            var hint = _destruct__k2r9zo.cg();
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.l4k_1.t4k_1.q4o();
            var tmp_5;
            if (this.l4m().f4k_1.j4m_1) {
              var tmp$ret$13 = jsonTree.toString();
              tmp_5 = toString(minify(tmp$ret$13));
            } else {
              tmp_5 = null;
            }
            var inputValue_0 = tmp_5;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
          }
          tmp$ret$2 = readPolymorphicJson(this.l4m(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_1;
      var tmp_6 = deserializer.cq(this, type_0);
      var actualSerializer_0 = (!(tmp_6 == null) ? isInterface(tmp_6, DeserializationStrategy) : false) ? tmp_6 : null;
      if (actualSerializer_0 == null) {
        var _destruct__k2r9zo_0 = subtypeNotRegisteredMessageJson(type_0, deserializer.bq());
        var message_0 = _destruct__k2r9zo_0.bg();
        var hint_0 = _destruct__k2r9zo_0.cg();
        this.l4k_1.b4o(message_0, VOID, hint_0);
      }
      this.o4k_1 = new DiscriminatorHolder(discriminator);
      tmp = actualSerializer_0.op(this);
    } catch ($p) {
      var tmp_7;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_8 = plus(e.message, ' at path: ');
        var tmp$ret$14 = tmp2_withExceptionHandling_this.q4o();
        throw missingFieldExceptionWithNewMessage(e, tmp_8 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = tmp2_withExceptionHandling_this.q4o();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_9;
            if (this.l4m().f4k_1.j4m_1) {
              var tmp$ret$19 = tmp3_withExceptionHandling_this.z4q();
              tmp_9 = toString(minify(tmp$ret$19));
            } else {
              tmp_9 = null;
            }
            var inputValue_1 = tmp_9;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ms = function (descriptor) {
    var newMode = modeFor(this.j4k_1, descriptor);
    this.l4k_1.t4k_1.l4o(descriptor);
    this.l4k_1.q4q(newMode.l4q_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.j4k_1, newMode, this.l4k_1, descriptor, this.o4k_1);
        break;
      default:
        var tmp_0;
        if (this.k4k_1.equals(newMode) && this.j4k_1.f4k_1.x4l_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.j4k_1, newMode, this.l4k_1, descriptor, this.o4k_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ns = function (descriptor) {
    if (descriptor.vq() === 0 && ignoreUnknownKeys(descriptor, this.j4k_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.l4k_1.r4q() && !this.j4k_1.f4k_1.g4m_1) {
      invalidTrailingComma(this.l4k_1, '');
    }
    this.l4k_1.q4q(this.k4k_1.m4q_1);
    this.l4k_1.t4k_1.p4o();
  };
  protoOf(StreamingJsonDecoder).xr = function () {
    var tmp;
    var tmp0_safe_receiver = this.q4k_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4n_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.l4k_1.a4r();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).yr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ys = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.k4k_1.equals(LexerMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.l4k_1.t4k_1.o4o();
    }
    var value = protoOf(AbstractDecoder).ys.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.l4k_1.t4k_1.n4o(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).dt = function (descriptor) {
    var index;
    switch (this.k4k_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.k4k_1.equals(LexerMode_MAP_getInstance())) {
      this.l4k_1.t4k_1.m4o(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).zr = function () {
    return this.l4k_1.b4r();
  };
  protoOf(StreamingJsonDecoder).as = function () {
    var value = this.l4k_1.c4r();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.l4k_1.b4o("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).bs = function () {
    var value = this.l4k_1.c4r();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.l4k_1.b4o("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).cs = function () {
    var value = this.l4k_1.c4r();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.l4k_1.b4o("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).ds = function () {
    return this.l4k_1.c4r();
  };
  protoOf(StreamingJsonDecoder).es = function () {
    var tmp0 = this.l4k_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.j4k_1.f4k_1.c4m_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l4k_1, result);
  };
  protoOf(StreamingJsonDecoder).fs = function () {
    var tmp0 = this.l4k_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.j4k_1.f4k_1.c4m_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l4k_1, result);
  };
  protoOf(StreamingJsonDecoder).gs = function () {
    var string = this.l4k_1.d4p();
    if (!(string.length === 1)) {
      this.l4k_1.b4o("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).hs = function () {
    var tmp;
    if (this.p4k_1.u4l_1) {
      tmp = this.l4k_1.x4q();
    } else {
      tmp = this.l4k_1.c4p();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).js = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.l4k_1, this.j4k_1) : protoOf(AbstractDecoder).js.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).is = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.j4k_1, this.hs(), ' at path ' + this.l4k_1.t4k_1.q4o());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.d4r_1 = lexer;
    this.e4r_1 = json.bt();
  }
  protoOf(JsonDecoderForUnsignedTypes).bt = function () {
    return this.e4r_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).dt = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).cs = function () {
    var tmp0 = this.d4r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).ds = function () {
    var tmp0 = this.d4r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).as = function () {
    var tmp0 = this.d4r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).bs = function () {
    var tmp0 = this.d4r_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.d4p();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.b4o("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.uq() && get_unsignedNumberDescriptors().j2(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).np(), serializer_1(Companion_getInstance_0()).np(), serializer_2(Companion_getInstance_1()).np(), serializer_3(Companion_getInstance_2()).np()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.ec(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.ec(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(128);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    var descriptor = deserializer.np();
    return (new JsonTreeDecoder(_this__u8e3s4, element, descriptor, discriminator, descriptor)).ls(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.l4r(tag);
    var tmp;
    if ($this.l4m().f4k_1.j4m_1) {
      var tmp$ret$3 = toString($this.m4r());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.h4r_1 = json;
    this.i4r_1 = value;
    this.j4r_1 = polymorphicDiscriminator;
    this.k4r_1 = this.l4m().f4k_1;
  }
  protoOf(AbstractJsonTreeDecoder).l4m = function () {
    return this.h4r_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.i4r_1;
  };
  protoOf(AbstractJsonTreeDecoder).bt = function () {
    return this.l4m().bt();
  };
  protoOf(AbstractJsonTreeDecoder).m4r = function () {
    var tmp0_safe_receiver = this.s13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.n4r(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).l4r = function (currentTag) {
    return this.u13() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).m4m = function () {
    return this.m4r();
  };
  protoOf(AbstractJsonTreeDecoder).ls = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.m4r();
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_0;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp_0 = true;
        } else {
          tmp_0 = this.l4m().f4k_1.a4m_1;
        }
        if (tmp_0) {
          tmp$ret$2 = deserializer.op(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.np(), this.l4m());
        var tmp2 = this.m4m();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.np().sq();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path = this.u13();
          var tmp_1;
          if (this.l4m().f4k_1.j4m_1) {
            var tmp$ret$8 = toString(tmp2);
            tmp_1 = toString(minify(tmp$ret$8));
          } else {
            tmp_1 = null;
          }
          var inputValue = tmp_1;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
        }
        var jsonTree = tmp2;
        var tmp0_safe_receiver = jsonTree.md(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2 = deserializer.cq(this, type);
        var actualSerializer = (!(tmp_2 == null) ? isInterface(tmp_2, DeserializationStrategy) : false) ? tmp_2 : null;
        if (actualSerializer == null) {
          var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, deserializer.bq());
          var message = _destruct__k2r9zo.bg();
          var hint = _destruct__k2r9zo.cg();
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_0 = this.u13();
          var tmp_3;
          if (this.l4m().f4k_1.j4m_1) {
            var tmp$ret$13 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$13));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
        }
        tmp$ret$2 = readPolymorphicJson(this.l4m(), discriminator, jsonTree, actualSerializer);
      }
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_5 = plus(e.message, ' at path: ');
        var tmp$ret$14 = this.u13();
        throw missingFieldExceptionWithNewMessage(e, tmp_5 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = this.u13();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_6;
            if (this.l4m().f4k_1.j4m_1) {
              var tmp$ret$19 = toString(tmp2_withExceptionHandling_this);
              tmp_6 = toString(minify(tmp$ret$19));
            } else {
              tmp_6 = null;
            }
            var inputValue_1 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).t13 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).ms = function (descriptor) {
    var currentObject = this.m4r();
    var tmp0_subject = descriptor.tq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.l4m();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.sq();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u13();
        var tmp_2;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.l4m();
        var keyDescriptor = carrierDescriptor(descriptor.ar(0), this_0.bt());
        var keyKind = keyDescriptor.tq();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.l4m();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.sq();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.u13();
            var tmp_6;
            if (this.l4m().f4k_1.j4m_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject, descriptor);
        } else {
          if (this_0.f4k_1.v4l_1) {
            var tmp_7 = this.l4m();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.sq();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.u13();
              var tmp_8;
              if (this.l4m().f4k_1.j4m_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.l4m();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.sq();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.u13();
          var tmp_10;
          if (this.l4m().f4k_1.j4m_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, descriptor, this.j4r_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).ns = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).xr = function () {
    var tmp = this.m4r();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).o4r = function (tag, enumDescriptor) {
    var tmp = this.l4m();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.n4r(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.sq();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.l4r(tag);
      var tmp_0;
      if (this.l4m().f4k_1.j4m_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.a3f());
  };
  protoOf(AbstractJsonTreeDecoder).g14 = function (tag, enumDescriptor) {
    return this.o4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).p4r = function (tag) {
    return !(this.n4r(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).w13 = function (tag) {
    return this.p4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).x13 = function (tag) {
    return this.q4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).y13 = function (tag) {
    return this.r4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).z13 = function (tag) {
    return this.s4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).a14 = function (tag) {
    return this.t4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).b14 = function (tag) {
    return this.u4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.l4m().f4k_1.c4m_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.l4m().f4k_1.j4m_1) {
      var tmp$ret$13 = toString(this.m4r());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).c14 = function (tag) {
    return this.v4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.l4m().f4k_1.c4m_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.l4m().f4k_1.j4m_1) {
      var tmp$ret$13 = toString(this.m4r());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).d14 = function (tag) {
    return this.w4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x4r = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n4r(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.a3f()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.x1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).e14 = function (tag) {
    return this.x4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y4r = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.n4r(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.l4r(tag);
      var tmp;
      if (this.l4m().f4k_1.j4m_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.l4r(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.l4m().f4k_1.j4m_1) {
        var tmp$ret$10 = toString(this.m4r());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.y4m_1 && !this.l4m().f4k_1.u4l_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.l4r(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.l4m().f4k_1.j4m_1) {
        var tmp$ret$14 = toString(this.m4r());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.a4n_1;
  };
  protoOf(AbstractJsonTreeDecoder).f14 = function (tag) {
    return this.y4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z4r = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.l4m();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.n4r(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.sq();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.l4r(tag);
        var tmp_1;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.a3f());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.l4m());
    } else {
      tmp = protoOf(NamedValueDecoder).h14.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).h14 = function (tag, inlineDescriptor) {
    return this.z4r((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).js = function (descriptor) {
    return !(this.s13() == null) ? protoOf(NamedValueDecoder).js.call(this, descriptor) : (new JsonPrimitiveDecoder(this.l4m(), this.n1(), this.j4r_1)).js(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, element) {
    var tmp0 = $this.l4m();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.br(index);
      var elementDescriptor = descriptor.ar(index);
      var tmp;
      if (isOptional && !elementDescriptor.lq()) {
        tmp = element instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.tq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.lq()) {
          tmp_0 = element instanceof JsonNull;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_safe_receiver = element instanceof JsonPrimitive ? element : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.f4k_1.x4l_1 && elementDescriptor.lq();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function throwUnknownKey($this, key) {
    var tmp2 = "Encountered an unknown key '" + key + "'";
    var tmp4 = $this.u13();
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
    var tmp;
    if ($this.l4m().f4k_1.j4m_1) {
      var tmp$ret$3 = $this.n1().toString();
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
  }
  function JsonTreeDecoder(json, value, descriptor, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.g4s_1 = value;
    this.h4s_1 = polyDescriptor;
    this.i4s_1 = this.n1().l1().t();
    this.j4s_1 = this.k4r_1.x4l_1 ? null : new JsonElementMarker(descriptor);
    this.k4s_1 = null;
    this.l4s_1 = null;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.g4s_1;
  };
  protoOf(JsonTreeDecoder).dt = function (descriptor) {
    var entries = this.i4s_1;
    $l$loop: while (entries.u()) {
      var entry = entries.v();
      var key = entry.m1();
      var index = getJsonNameIndex(descriptor, this.l4m(), key);
      if (!(index === -3)) {
        if (this.k4r_1.z4l_1 && coerceInputValue_0(this, descriptor, index, entry.n1())) {
          continue $l$loop;
        }
        var tmp0_safe_receiver = this.j4s_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.y4n(index);
        }
        this.k4s_1 = key;
        this.l4s_1 = entry.n1();
        return index;
      }
      if (!(key === this.j4r_1) && !ignoreUnknownKeys(descriptor, this.l4m())) {
        throwUnknownKey(this, key);
      }
    }
    var tmp1_safe_receiver = this.j4s_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z4n();
    var markerIndex = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    if (!(markerIndex === -1)) {
      this.k4s_1 = descriptor.xq(markerIndex);
      this.l4s_1 = null;
    }
    return markerIndex;
  };
  protoOf(JsonTreeDecoder).xr = function () {
    var tmp;
    var tmp0_safe_receiver = this.j4s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4n_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = protoOf(AbstractJsonTreeDecoder).xr.call(this);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JsonTreeDecoder).o13 = function (descriptor, index) {
    var tmp0_elvis_lhs = this.k4s_1;
    return tmp0_elvis_lhs == null ? descriptor.xq(index) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).n4r = function (tag) {
    var tmp0_elvis_lhs = this.l4s_1;
    return tmp0_elvis_lhs == null ? getValue(this.n1(), tag) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).ms = function (descriptor) {
    if (descriptor === this.h4s_1) {
      var tmp = this.l4m();
      var tmp2 = this.m4r();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.h4s_1.sq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.u13();
        var tmp_0;
        if (this.l4m().f4k_1.j4m_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, descriptor, this.j4r_1, this.h4s_1);
    }
    return protoOf(AbstractJsonTreeDecoder).ms.call(this, descriptor);
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.s4s_1 = value;
    this.t4s_1 = this.s4s_1.e1();
    this.u4s_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.s4s_1;
  };
  protoOf(JsonTreeListDecoder).o13 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).n4r = function (tag) {
    return this.s4s_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).dt = function (descriptor) {
    while (this.u4s_1 < (this.t4s_1 - 1 | 0)) {
      this.u4s_1 = this.u4s_1 + 1 | 0;
      return this.u4s_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.b4t_1 = value;
    this.i14('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.b4t_1;
  };
  protoOf(JsonPrimitiveDecoder).dt = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).n4r = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.b4t_1;
  };
  function JsonTreeMapDecoder(json, value, descriptor) {
    JsonTreeDecoder.call(this, json, value, descriptor);
    this.o4t_1 = toList(value.t2());
    this.p4t_1 = imul(this.o4t_1.e1(), 2);
    this.q4t_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).o13 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.o4t_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).dt = function (descriptor) {
    while (this.q4t_1 < (this.p4t_1 - 1 | 0)) {
      this.q4t_1 = this.q4t_1 + 1 | 0;
      return this.q4t_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).n4r = function (tag) {
    return (this.q4t_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.n1(), tag);
  };
  protoOf(JsonTreeMapDecoder).ns = function (descriptor) {
  };
  function appendEscape($this, lastPosition, current) {
    $this.r4t(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.r4t(lastPosition, currentPosition);
    var result = $this.v4k_1.toString();
    $this.v4k_1.kc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.u4k_1);
    $this.u4k_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.z4q(), $this.s4k_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.s4t(currentPosition);
    if (currentPosition === -1) {
      $this.b4o('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.z4q();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.z4q(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.b4o("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.v4k_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.s4k_1 = startPos;
      $this.t4t();
      if (($this.s4k_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.b4o('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.s4k_1);
    }
    $this.v4k_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.b4o("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.s4t(start);
    if (current >= charSequenceLength($this.z4q()) || current === -1) {
      $this.b4o('EOF');
    }
    var tmp = $this.z4q();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.b4o("Expected valid boolean literal prefix, but had '" + $this.d4p() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.z4q()) - current | 0) < literalSuffix.length) {
      $this.b4o('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.z4q(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.b4o("Expected valid boolean literal prefix, but had '" + $this.d4p() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.s4k_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.r4k_1 = configuration;
    this.s4k_1 = 0;
    this.t4k_1 = new JsonPath(this.r4k_1);
    this.u4k_1 = null;
    this.v4k_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).t4t = function () {
  };
  protoOf(AbstractJsonLexer).r4q = function () {
    var current = this.u4t();
    var source = this.z4q();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.s4k_1 = this.s4k_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).v4t = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).w4k = function () {
    var nextToken = this.f4p();
    if (!(nextToken === 10)) {
      this.b4o('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.z4q(), this.s4k_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).z4o = function (expected) {
    var token = this.f4p();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.s4k_1 > 0 ? this.s4k_1 - 1 | 0 : this.s4k_1;
      var s = this.s4k_1 === charSequenceLength(this.z4q()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.z4q(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.b4o(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).w4t = function (expected) {
    if (this.s4k_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.s4k_1;
        try {
          this.s4k_1 = this.s4k_1 - 1 | 0;
          tmp$ret$0 = this.d4p();
          break $l$block;
        }finally {
          this.s4k_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.a4o("Expected string literal but 'null' literal was found", this.s4k_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.s4k_1 > 0 ? this.s4k_1 - 1 | 0 : this.s4k_1;
    var s = this.s4k_1 === charSequenceLength(this.z4q()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.z4q(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.b4o(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).a4p = function () {
    var source = this.z4q();
    var cpos = this.s4k_1;
    $l$loop_0: while (true) {
      cpos = this.s4t(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.s4k_1 = cpos;
      return charToTokenClass(ch);
    }
    this.s4k_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).s4q = function (doConsume) {
    var current = this.u4t();
    current = this.s4t(current);
    var len = charSequenceLength(this.z4q()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.z4q(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.z4q(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.s4k_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).a4r = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.s4q(doConsume) : $super.s4q.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).t4q = function (isLenient) {
    var token = this.a4p();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.d4p();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.c4p();
    }
    var string = tmp;
    this.u4k_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).x4t = function () {
    this.u4k_1 = null;
  };
  protoOf(AbstractJsonLexer).q16 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.z4q();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).c4p = function () {
    if (!(this.u4k_1 == null)) {
      return takePeeked(this);
    }
    return this.w4q();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.s4t(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.b4o('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.r4t(lastPosition, currentPosition);
          currentPosition = this.s4t(currentPosition);
          if (currentPosition === -1) {
            this.b4o('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.q16(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.s4k_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).x4q = function () {
    var result = this.d4p();
    if (result === 'null' && wasUnquotedString(this)) {
      this.b4o("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).d4p = function () {
    if (!(this.u4k_1 == null)) {
      return takePeeked(this);
    }
    var current = this.u4t();
    if (current >= charSequenceLength(this.z4q()) || current === -1) {
      this.b4o('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.z4q(), current));
    if (token === 1) {
      return this.c4p();
    }
    if (!(token === 0)) {
      this.b4o('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.z4q(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.z4q(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.z4q())) {
        usedAppend = true;
        this.r4t(this.s4k_1, current);
        var eof = this.s4t(current);
        if (eof === -1) {
          this.s4k_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.q16(this.s4k_1, current);
    } else {
      tmp = decodedString(this, this.s4k_1, current);
    }
    var result = tmp;
    this.s4k_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).r4t = function (fromIndex, toIndex) {
    this.v4k_1.ec(this.z4q(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).v4q = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.a4p();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.d4p();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.a4p();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.d4p();
        else
          this.w4q();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.b4o('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.b4o('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.b4o('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.f4p();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.z4q()) + "', currentPosition=" + this.s4k_1 + ')';
  };
  protoOf(AbstractJsonLexer).u4q = function (key) {
    var processed = this.q16(0, this.s4k_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.a4o("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).a4o = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.t4k_1.q4o(), hint, this.z4q());
  };
  protoOf(AbstractJsonLexer).b4o = function (message, position, hint, $super) {
    position = position === VOID ? this.s4k_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.a4o(message, position, hint) : $super.a4o.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).c4r = function () {
    var current = this.u4t();
    current = this.s4t(current);
    if (current >= charSequenceLength(this.z4q()) || current === -1) {
      this.b4o('EOF');
    }
    var tmp;
    if (charSequenceGet(this.z4q(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.z4q())) {
        this.b4o('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.z4q()))) {
      var ch = charSequenceGet(this.z4q(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.b4o("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.b4o("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.b4o("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.b4o("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.b4o("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.b4o('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.b4o('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.b4o('EOF');
      }
      if (!(charSequenceGet(this.z4q(), current) === _Char___init__impl__6a9atx(34))) {
        this.b4o('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.s4k_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.b4o('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.b4o("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.b4o('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).v4m = function () {
    var result = this.c4r();
    var next = this.f4p();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.s4k_1 > 0 ? this.s4k_1 - 1 | 0 : this.s4k_1;
      var s = this.s4k_1 === charSequenceLength(this.z4q()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.z4q(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.b4o(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).b4r = function () {
    var current = this.u4t();
    if (current === charSequenceLength(this.z4q())) {
      this.b4o('EOF');
    }
    var tmp;
    if (charSequenceGet(this.z4q(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.s4k_1 === charSequenceLength(this.z4q())) {
        this.b4o('EOF');
      }
      if (!(charSequenceGet(this.z4q(), this.s4k_1) === _Char___init__impl__6a9atx(34))) {
        this.b4o('Expected closing quotation mark');
      }
      this.s4k_1 = this.s4k_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().z4t_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().y4t_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.y4t_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.z4t_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.y4t_1 = charArray(117);
    this.z4t_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).f4p = function () {
    var source = this.z4q();
    var cpos = this.u4t();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.s4k_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).b4p = function () {
    var current = this.u4t();
    if (current >= this.z4q().length || current === -1)
      return false;
    return this.v4t(charCodeAt(this.z4q(), current));
  };
  protoOf(StringJsonLexerWithComments).q4q = function (expected) {
    var source = this.z4q();
    var current = this.u4t();
    if (current >= source.length || current === -1) {
      this.s4k_1 = -1;
      this.w4t(expected);
    }
    var c = charCodeAt(source, current);
    this.s4k_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.w4t(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).a4p = function () {
    var source = this.z4q();
    var cpos = this.u4t();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.s4k_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).u4t = function () {
    var current = this.s4k_1;
    if (current === -1)
      return current;
    var source = this.z4q();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.s4k_1 = source.length;
            this.b4o('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.s4k_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.l4u_1 = source;
  }
  protoOf(StringJsonLexer).z4q = function () {
    return this.l4u_1;
  };
  protoOf(StringJsonLexer).s4t = function (position) {
    return position < this.z4q().length ? position : -1;
  };
  protoOf(StringJsonLexer).f4p = function () {
    var source = this.z4q();
    var cpos = this.s4k_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.s4k_1 = cpos;
      return charToTokenClass(c);
    }
    this.s4k_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).b4p = function () {
    var current = this.s4k_1;
    if (current === -1)
      return false;
    var source = this.z4q();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.s4k_1 = current;
      return this.v4t(c);
    }
    this.s4k_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).u4t = function () {
    var current = this.s4k_1;
    if (current === -1)
      return current;
    var source = this.z4q();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.s4k_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).q4q = function (expected) {
    if (this.s4k_1 === -1) {
      this.w4t(expected);
    }
    var source = this.z4q();
    var cpos = this.s4k_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.s4k_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.w4t(expected);
    }
    this.s4k_1 = -1;
    this.w4t(expected);
  };
  protoOf(StringJsonLexer).w4q = function () {
    this.q4q(_Char___init__impl__6a9atx(34));
    var current = this.s4k_1;
    var closingQuote = indexOf_0(this.z4q(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.d4p();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.s4k_1 > 0 ? this.s4k_1 - 1 | 0 : this.s4k_1;
      var s = this.s4k_1 === charSequenceLength(this.z4q()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.z4q(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.b4o(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.z4q(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.z4q(), this.s4k_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.s4k_1 = closingQuote + 1 | 0;
    return substring(this.z4q(), current, closingQuote);
  };
  protoOf(StringJsonLexer).y4q = function (keyToMatch, isLenient) {
    var positionSnapshot = this.s4k_1;
    try {
      if (!(this.f4p() === 6))
        return null;
      var firstKey = this.t4q(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.x4t();
      if (!(this.f4p() === 5))
        return null;
      return this.t4q(isLenient);
    }finally {
      this.s4k_1 = positionSnapshot;
      this.x4t();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.f4k_1.h4m_1 ? new StringJsonLexer(source, json.f4k_1) : new StringJsonLexerWithComments(source, json.f4k_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.h4k_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).lq = get_isNullable;
  protoOf(defer$1).uq = get_isInline;
  protoOf(defer$1).wq = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).s15 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonArray;
  _.$_$.b = JsonDecoder;
  _.$_$.c = JsonObject;
  _.$_$.d = JsonPrimitive;
  _.$_$.e = Json_0;
  _.$_$.f = get_boolean;
  _.$_$.g = get_booleanOrNull;
  _.$_$.h = get_double;
  _.$_$.i = get_doubleOrNull;
  _.$_$.j = get_float;
  _.$_$.k = get_floatOrNull;
  _.$_$.l = get_int;
  _.$_$.m = get_intOrNull;
  _.$_$.n = get_long;
  _.$_$.o = get_longOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
