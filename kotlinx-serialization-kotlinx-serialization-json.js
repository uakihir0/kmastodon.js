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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var toString = kotlin_kotlin.$_$.nb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var charSequenceGet = kotlin_kotlin.$_$.z9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d;
  var equals = kotlin_kotlin.$_$.fa;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var Enum = kotlin_kotlin.$_$.ve;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var numberRangeToNumber = kotlin_kotlin.$_$.hb;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var ClosedRange = kotlin_kotlin.$_$.rb;
  var isInterface = kotlin_kotlin.$_$.ab;
  var contains = kotlin_kotlin.$_$.vb;
  var convertToInt = kotlin_kotlin.$_$.c9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.l4;
  var toDoubleOrNull = kotlin_kotlin.$_$.vd;
  var toDouble = kotlin_kotlin.$_$.wd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e4;
  var hashCode = kotlin_kotlin.$_$.ka;
  var joinToString = kotlin_kotlin.$_$.p6;
  var KtList = kotlin_kotlin.$_$.z4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p3;
  var KtMap = kotlin_kotlin.$_$.b5;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getKClassFromExpression = kotlin_kotlin.$_$.cc;
  var getBooleanHashCode = kotlin_kotlin.$_$.ha;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ia;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var lazy = kotlin_kotlin.$_$.dg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var captureStack = kotlin_kotlin.$_$.v9;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var defineProp = kotlin_kotlin.$_$.ea;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.ba;
  var coerceAtLeast = kotlin_kotlin.$_$.sb;
  var coerceAtMost = kotlin_kotlin.$_$.tb;
  var isBlank = kotlin_kotlin.$_$.zc;
  var Collection = kotlin_kotlin.$_$.u4;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v2;
  var singleOrNull = kotlin_kotlin.$_$.j7;
  var emptyMap = kotlin_kotlin.$_$.e6;
  var getValue = kotlin_kotlin.$_$.m6;
  var copyOf = kotlin_kotlin.$_$.y5;
  var arrayCopy = kotlin_kotlin.$_$.i5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.te;
  var invoke = kotlin_kotlin.$_$.yf;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ue;
  var Unit = kotlin_kotlin.$_$.qf;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a8;
  var initMetadataForLambda = kotlin_kotlin.$_$.qa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.na;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var getKClass = kotlin_kotlin.$_$.dc;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var ensureNotNull = kotlin_kotlin.$_$.xf;
  var substringBefore = kotlin_kotlin.$_$.qd;
  var removeSuffix = kotlin_kotlin.$_$.fd;
  var substringAfter = kotlin_kotlin.$_$.pd;
  var contains_0 = kotlin_kotlin.$_$.oc;
  var plus = kotlin_kotlin.$_$.fg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var convertToByte = kotlin_kotlin.$_$.b9;
  var fromInt = kotlin_kotlin.$_$.g9;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var convertToShort = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException = kotlin_kotlin.$_$.ye;
  var isFinite = kotlin_kotlin.$_$.ag;
  var isFinite_0 = kotlin_kotlin.$_$.zf;
  var charCodeAt = kotlin_kotlin.$_$.y9;
  var toUInt = kotlin_kotlin.$_$.ee;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.x;
  var toULong = kotlin_kotlin.$_$.fe;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.e1;
  var toUByte = kotlin_kotlin.$_$.de;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.q;
  var toUShort = kotlin_kotlin.$_$.ge;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.l1;
  var Companion_getInstance = kotlin_kotlin.$_$.k2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l2;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.j2;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.m2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var setOf = kotlin_kotlin.$_$.i7;
  var equals_0 = kotlin_kotlin.$_$.uc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j;
  var numberToChar = kotlin_kotlin.$_$.ib;
  var toString_1 = kotlin_kotlin.$_$.k;
  var toByte = kotlin_kotlin.$_$.lb;
  var startsWith = kotlin_kotlin.$_$.ld;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var single = kotlin_kotlin.$_$.id;
  var Char = kotlin_kotlin.$_$.qe;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var emptySet = kotlin_kotlin.$_$.f6;
  var plus_0 = kotlin_kotlin.$_$.a7;
  var toInt = kotlin_kotlin.$_$.zd;
  var toList = kotlin_kotlin.$_$.q7;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toNumber = kotlin_kotlin.$_$.r9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eg;
  var last = kotlin_kotlin.$_$.u6;
  var removeLast = kotlin_kotlin.$_$.f7;
  var lastIndexOf = kotlin_kotlin.$_$.dd;
  var Long = kotlin_kotlin.$_$.af;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.f;
  var multiply = kotlin_kotlin.$_$.l9;
  var add = kotlin_kotlin.$_$.x8;
  var subtract = kotlin_kotlin.$_$.q9;
  var compare = kotlin_kotlin.$_$.a9;
  var numberToLong = kotlin_kotlin.$_$.n9;
  var negate = kotlin_kotlin.$_$.m9;
  var charArray = kotlin_kotlin.$_$.x9;
  var indexOf = kotlin_kotlin.$_$.xc;
  var indexOf_0 = kotlin_kotlin.$_$.yc;
  var substring = kotlin_kotlin.$_$.sd;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x2;
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
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
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
    this.l4j_1 = configuration;
    this.m4j_1 = serializersModule;
    this.n4j_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ps = function () {
    return this.m4j_1;
  };
  protoOf(Json).o4j = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.bp(), null);
    var result = input.zr(deserializer);
    lexer.c4k();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.w4k();
    return new JsonImpl(conf, builder.u4k_1);
  }
  function JsonBuilder(json) {
    this.d4k_1 = json.l4j_1.x4k_1;
    this.e4k_1 = json.l4j_1.c4l_1;
    this.f4k_1 = json.l4j_1.y4k_1;
    this.g4k_1 = json.l4j_1.z4k_1;
    this.h4k_1 = json.l4j_1.b4l_1;
    this.i4k_1 = json.l4j_1.d4l_1;
    this.j4k_1 = json.l4j_1.e4l_1;
    this.k4k_1 = json.l4j_1.g4l_1;
    this.l4k_1 = json.l4j_1.n4l_1;
    this.m4k_1 = json.l4j_1.i4l_1;
    this.n4k_1 = json.l4j_1.j4l_1;
    this.o4k_1 = json.l4j_1.k4l_1;
    this.p4k_1 = json.l4j_1.l4l_1;
    this.q4k_1 = json.l4j_1.m4l_1;
    this.r4k_1 = json.l4j_1.h4l_1;
    this.s4k_1 = json.l4j_1.a4l_1;
    this.t4k_1 = json.l4j_1.f4l_1;
    this.u4k_1 = json.ps();
    this.v4k_1 = json.l4j_1.o4l_1;
  }
  protoOf(JsonBuilder).w4k = function () {
    if (this.t4k_1) {
      // Inline function 'kotlin.require' call
      if (!(this.k4k_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.l4k_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.h4k_1) {
      // Inline function 'kotlin.require' call
      if (!(this.i4k_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.i4k_1 === '    ')) {
      var tmp0 = this.i4k_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.i4k_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.d4k_1, this.f4k_1, this.g4k_1, this.s4k_1, this.h4k_1, this.e4k_1, this.i4k_1, this.j4k_1, this.t4k_1, this.k4k_1, this.r4k_1, this.m4k_1, this.n4k_1, this.o4k_1, this.p4k_1, this.q4k_1, this.l4k_1, this.v4k_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ps(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.l4j_1);
    $this.ps().p14(collector);
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
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo) {
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
    this.x4k_1 = encodeDefaults;
    this.y4k_1 = ignoreUnknownKeys;
    this.z4k_1 = isLenient;
    this.a4l_1 = allowStructuredMapKeys;
    this.b4l_1 = prettyPrint;
    this.c4l_1 = explicitNulls;
    this.d4l_1 = prettyPrintIndent;
    this.e4l_1 = coerceInputValues;
    this.f4l_1 = useArrayPolymorphism;
    this.g4l_1 = classDiscriminator;
    this.h4l_1 = allowSpecialFloatingPointValues;
    this.i4l_1 = useAlternativeNames;
    this.j4l_1 = namingStrategy;
    this.k4l_1 = decodeEnumsCaseInsensitive;
    this.l4l_1 = allowTrailingComma;
    this.m4l_1 = allowComments;
    this.n4l_1 = classDiscriminatorMode;
    this.o4l_1 = exceptionsWithDebugInfo;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.x4k_1 + ', ignoreUnknownKeys=' + this.y4k_1 + ', isLenient=' + this.z4k_1 + ', ' + ('allowStructuredMapKeys=' + this.a4l_1 + ', prettyPrint=' + this.b4l_1 + ', explicitNulls=' + this.c4l_1 + ', ') + ("prettyPrintIndent='" + this.d4l_1 + "', coerceInputValues=" + this.e4l_1 + ', useArrayPolymorphism=' + this.f4l_1 + ', ') + ("classDiscriminator='" + this.g4l_1 + "', allowSpecialFloatingPointValues=" + this.h4l_1 + ', ') + ('useAlternativeNames=' + this.i4l_1 + ', namingStrategy=' + toString_0(this.j4l_1) + ', decodeEnumsCaseInsensitive=' + this.k4l_1 + ', ') + ('allowTrailingComma=' + this.l4l_1 + ', allowComments=' + this.m4l_1 + ', classDiscriminatorMode=' + this.n4l_1.toString() + ', exceptionsWithDebugInfo=' + this.o4l_1 + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
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
    return this.q3d();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.q3d() + ' is not an Int');
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
    var this_0 = _this__u8e3s4.q3d();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.q3d();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.q3d());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.q3d());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.q3d());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this__u8e3s4.q3d());
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
    this.t4l_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.t4l_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.t4l_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.t4l_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.t4l_1.r();
  };
  protoOf(JsonArray).u4l = function (element) {
    return this.t4l_1.i2(element);
  };
  protoOf(JsonArray).i2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.u4l(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.t4l_1.t();
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.t4l_1.d1(index);
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.t4l_1.j1(index);
  };
  protoOf(JsonArray).j2 = function (fromIndex, toIndex) {
    return this.t4l_1.j2(fromIndex, toIndex);
  };
  protoOf(JsonArray).e1 = function () {
    return this.t4l_1.e1();
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
    this.v4l_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.v4l_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.v4l_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.v4l_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.v4l_1.r();
  };
  protoOf(JsonObject).c29 = function (key) {
    return this.v4l_1.l2(key);
  };
  protoOf(JsonObject).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c29((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).gd = function (key) {
    return this.v4l_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.gd((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).e1 = function () {
    return this.v4l_1.e1();
  };
  protoOf(JsonObject).o2 = function () {
    return this.v4l_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.v4l_1.p2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.v4l_1.l1();
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.q3d()).w4l();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.x4l_1 = 'null';
  }
  protoOf(JsonNull).r4l = function () {
    return false;
  };
  protoOf(JsonNull).q3d = function () {
    return this.x4l_1;
  };
  protoOf(JsonNull).y4l = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).qy = function (typeParamsSerializers) {
    return this.y4l();
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
    this.z4l_1 = isString;
    this.a4m_1 = coerceToInlineType;
    this.b4m_1 = toString(body);
    if (!(this.a4m_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.a4m_1.iq()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).r4l = function () {
    return this.z4l_1;
  };
  protoOf(JsonLiteral).q3d = function () {
    return this.b4m_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.z4l_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.b4m_1);
      tmp = this_0.toString();
    } else {
      tmp = this.b4m_1;
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
    if (!(this.z4l_1 === other.z4l_1))
      return false;
    if (!(this.b4m_1 === other.b4m_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.z4l_1);
    result = imul(31, result) + getStringHashCode(this.b4m_1) | 0;
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
      tmp = _this__u8e3s4.q3d();
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
    $this$buildSerialDescriptor.np('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.np('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.np('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.np('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.np('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().c4m_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().d4m_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().e4m_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().f4m_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().g4m_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.h4m_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).bp = function () {
    return this.h4m_1;
  };
  protoOf(JsonElementSerializer).cp = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.q4l();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.c4m_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).bp = function () {
    return this.c4m_1;
  };
  protoOf(JsonPrimitiveSerializer).cp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.q4l();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.p4l().l4j_1.o4l_1) {
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
    this.i4m_1 = ListSerializer(JsonElementSerializer_getInstance()).bp();
    this.j4m_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).gq = function () {
    return this.j4m_1;
  };
  protoOf(JsonArrayDescriptor).lq = function (index) {
    return this.i4m_1.lq(index);
  };
  protoOf(JsonArrayDescriptor).mq = function (name) {
    return this.i4m_1.mq(name);
  };
  protoOf(JsonArrayDescriptor).nq = function (index) {
    return this.i4m_1.nq(index);
  };
  protoOf(JsonArrayDescriptor).oq = function (index) {
    return this.i4m_1.oq(index);
  };
  protoOf(JsonArrayDescriptor).pq = function (index) {
    return this.i4m_1.pq(index);
  };
  protoOf(JsonArrayDescriptor).hq = function () {
    return this.i4m_1.hq();
  };
  protoOf(JsonArrayDescriptor).zp = function () {
    return this.i4m_1.zp();
  };
  protoOf(JsonArrayDescriptor).iq = function () {
    return this.i4m_1.iq();
  };
  protoOf(JsonArrayDescriptor).jq = function () {
    return this.i4m_1.jq();
  };
  protoOf(JsonArrayDescriptor).kq = function () {
    return this.i4m_1.kq();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.g4m_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).bp = function () {
    return this.g4m_1;
  };
  protoOf(JsonArraySerializer).cp = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).cp(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.k4m_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).bp();
    this.l4m_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).gq = function () {
    return this.l4m_1;
  };
  protoOf(JsonObjectDescriptor).lq = function (index) {
    return this.k4m_1.lq(index);
  };
  protoOf(JsonObjectDescriptor).mq = function (name) {
    return this.k4m_1.mq(name);
  };
  protoOf(JsonObjectDescriptor).nq = function (index) {
    return this.k4m_1.nq(index);
  };
  protoOf(JsonObjectDescriptor).oq = function (index) {
    return this.k4m_1.oq(index);
  };
  protoOf(JsonObjectDescriptor).pq = function (index) {
    return this.k4m_1.pq(index);
  };
  protoOf(JsonObjectDescriptor).hq = function () {
    return this.k4m_1.hq();
  };
  protoOf(JsonObjectDescriptor).zp = function () {
    return this.k4m_1.zp();
  };
  protoOf(JsonObjectDescriptor).iq = function () {
    return this.k4m_1.iq();
  };
  protoOf(JsonObjectDescriptor).jq = function () {
    return this.k4m_1.jq();
  };
  protoOf(JsonObjectDescriptor).kq = function () {
    return this.k4m_1.kq();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.f4m_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).bp = function () {
    return this.f4m_1;
  };
  protoOf(JsonObjectSerializer).cp = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).cp(decoder));
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
    this.d4m_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).bp = function () {
    return this.d4m_1;
  };
  protoOf(JsonNullSerializer).cp = function (decoder) {
    verify(decoder);
    if (decoder.lr()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.mr();
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
    this.e4m_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).bp = function () {
    return this.e4m_1;
  };
  protoOf(JsonLiteralSerializer).cp = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.q4l();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.p4l().l4j_1.o4l_1) {
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
    var tmp0 = $this.m4m_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 29);
  }
  function defer$1($deferred) {
    this.m4m_1 = lazy($deferred);
  }
  protoOf(defer$1).gq = function () {
    return _get_original__l7ku1m(this).gq();
  };
  protoOf(defer$1).hq = function () {
    return _get_original__l7ku1m(this).hq();
  };
  protoOf(defer$1).jq = function () {
    return _get_original__l7ku1m(this).jq();
  };
  protoOf(defer$1).lq = function (index) {
    return _get_original__l7ku1m(this).lq(index);
  };
  protoOf(defer$1).mq = function (name) {
    return _get_original__l7ku1m(this).mq(name);
  };
  protoOf(defer$1).nq = function (index) {
    return _get_original__l7ku1m(this).nq(index);
  };
  protoOf(defer$1).oq = function (index) {
    return _get_original__l7ku1m(this).oq(index);
  };
  protoOf(defer$1).pq = function (index) {
    return _get_original__l7ku1m(this).pq(index);
  };
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint) {
    JsonException.call(this, fullMessage);
    captureStack(this, JsonDecodingException);
    this.o4m_1 = shortMessage;
    this.p4m_1 = offset;
    this.q4m_1 = path;
    this.r4m_1 = input;
    this.s4m_1 = hint;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
    this.s4l_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.s4l_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    JsonException.call(this, formatEncodingException(shortMessage, hint));
    captureStack(this, JsonEncodingException);
    this.u4m_1 = shortMessage;
    this.v4m_1 = classSerialName;
    this.w4m_1 = hint;
  }
  function readIfAbsent($this, descriptor, index) {
    $this.y4m_1 = (!descriptor.pq(index) && descriptor.oq(index).zp());
    return $this.y4m_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 30, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.x4m_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.y4m_1 = false;
  }
  protoOf(JsonElementMarker).z4m = function (index) {
    this.x4m_1.lw(index);
  };
  protoOf(JsonElementMarker).a4n = function () {
    return this.x4m_1.mw();
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
  function decodingExceptionOf(shortMessage) {
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, null, null), shortMessage, -1, null, null, null);
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
    _this__u8e3s4.b4n('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.y4j_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.c4n(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.gq() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.hq().toString() + "'"), keyDescriptor.gq(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input) {
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.x4j_1.o4l_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint);
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
    if (json.l4j_1.y4k_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.kq();
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
    var index = _this__u8e3s4.mq(name);
    if (!(index === -3))
      return index;
    if (!json.l4j_1.i4l_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.gq() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.hq(), CLASS_getInstance()) ? json.l4j_1.j4l_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.e4n(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.l4j_1.k4l_1 && equals(descriptor.hq(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.jq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.nq(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.b1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f4n_1;
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
          tmp_0 = _this__u8e3s4.lq(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.g4n(_this__u8e3s4, i, _this__u8e3s4.lq(i));
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
    var entity = equals($this_buildDeserializationNamesMap.hq(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).l2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.lq(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.lq(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.u2(name, index);
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
    var newSize = imul($this.k4n_1, 2);
    $this.i4n_1 = copyOf($this.i4n_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.j4n_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.j4n_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.h4n_1 = configuration;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.i4n_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.j4n_1 = tmp_2;
    this.k4n_1 = -1;
  }
  protoOf(JsonPath).l4n = function (sd) {
    this.k4n_1 = this.k4n_1 + 1 | 0;
    var depth = this.k4n_1;
    if (depth === this.i4n_1.length) {
      resize(this);
    }
    this.i4n_1[depth] = sd;
  };
  protoOf(JsonPath).m4n = function (index) {
    this.j4n_1[this.k4n_1] = index;
  };
  protoOf(JsonPath).n4n = function (key) {
    var tmp;
    if (!(this.j4n_1[this.k4n_1] === -2)) {
      this.k4n_1 = this.k4n_1 + 1 | 0;
      tmp = this.k4n_1 === this.i4n_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.i4n_1[this.k4n_1] = this.h4n_1.o4l_1 ? key : RedactedKey_instance;
    this.j4n_1[this.k4n_1] = -2;
  };
  protoOf(JsonPath).o4n = function () {
    if (this.j4n_1[this.k4n_1] === -2) {
      this.i4n_1[this.k4n_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).p4n = function () {
    var depth = this.k4n_1;
    if (this.j4n_1[depth] === -2) {
      this.j4n_1[depth] = -1;
      this.k4n_1 = this.k4n_1 - 1 | 0;
    }
    if (!(this.k4n_1 === -1)) {
      this.k4n_1 = this.k4n_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).q4n = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.k4n_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.i4n_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.hq(), LIST_getInstance())) {
            if (!(this.j4n_1[index] === -1)) {
              this_0.q('[');
              this_0.bc(this.j4n_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.j4n_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.lq(idx));
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
    return this.q4n();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.hq();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.r4n_1)
      return Unit_instance;
    if (!$this.s4n_1)
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
    this.r4n_1 = configuration.f4l_1;
    this.s4n_1 = !configuration.n4l_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).y14 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).b15 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.bp();
    checkKind(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).c15 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).d15 = function (baseClass, defaultDeserializerProvider) {
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.t4n_1.x4n(6);
    if ($this.t4n_1.y4n() === 4) {
      $this.t4n_1.c4n('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.t4n_1.z4n()) {
      var key = $this.u4n_1 ? $this.t4n_1.b4o() : $this.t4n_1.a4o();
      $this.t4n_1.x4n(5);
      var element = $this.c4o();
      // Inline function 'kotlin.collections.set' call
      result.u2(key, element);
      lastToken = $this.t4n_1.d4o();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.t4n_1.c4n('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.t4n_1.x4n(7);
    } else if (lastToken === 4) {
      if (!$this.v4n_1) {
        invalidTrailingComma($this.t4n_1);
      }
      $this.t4n_1.x4n(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  }
  function readArray($this) {
    var lastToken = $this.t4n_1.d4o();
    if ($this.t4n_1.y4n() === 4) {
      $this.t4n_1.c4n('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.t4n_1.z4n()) {
      var element = $this.c4o();
      result.b1(element);
      lastToken = $this.t4n_1.d4o();
      if (!(lastToken === 4)) {
        var tmp0 = $this.t4n_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.y4j_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.c4n(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.t4n_1.x4n(9);
    } else if (lastToken === 4) {
      if (!$this.v4n_1) {
        invalidTrailingComma($this.t4n_1, 'array');
      }
      $this.t4n_1.x4n(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.u4n_1 || !isString) {
      tmp = $this.t4n_1.b4o();
    } else {
      tmp = $this.t4n_1.a4o();
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
    this.a4p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e4p = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.f4p($this$DeepRecursiveFunction, it, $completion);
    tmp.j8_1 = Unit_instance;
    tmp.k8_1 = null;
    return tmp.p8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).b9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.e4p(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 3;
            var tmp0_subject = this.a4p_1.t4n_1.y4n();
            if (tmp0_subject === 1) {
              this.d4p_1 = readValue(this.a4p_1, true);
              this.h8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.d4p_1 = readValue(this.a4p_1, false);
                this.h8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.h8_1 = 1;
                  suspendResult = readObject_0(this.a4p_1, this.b4p_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.d4p_1 = readArray(this.a4p_1);
                    this.h8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.a4p_1.t4n_1.c4n("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.d4p_1 = suspendResult;
            this.h8_1 = 2;
            continue $sm;
          case 2:
            return this.d4p_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).f4p = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.a4p_1, completion);
    i.b4p_1 = $this$DeepRecursiveFunction;
    i.c4p_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.e4p($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m4o_1 = _this__u8e3s4;
    this.n4o_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).p8 = function () {
    var suspendResult = this.j8_1;
    $sm: do
      try {
        var tmp = this.h8_1;
        switch (tmp) {
          case 0:
            this.i8_1 = 5;
            this.p4o_1 = this.m4o_1;
            this.q4o_1 = this.p4o_1.t4n_1.x4n(6);
            if (this.p4o_1.t4n_1.y4n() === 4) {
              this.p4o_1.t4n_1.c4n('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.o4o_1 = LinkedHashMap_init_$Create$();
            this.h8_1 = 1;
            continue $sm;
          case 1:
            if (!this.p4o_1.t4n_1.z4n()) {
              this.h8_1 = 4;
              continue $sm;
            }

            this.r4o_1 = this.p4o_1.u4n_1 ? this.p4o_1.t4n_1.b4o() : this.p4o_1.t4n_1.a4o();
            this.p4o_1.t4n_1.x4n(5);
            this.h8_1 = 2;
            suspendResult = this.n4o_1.tm(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.o4o_1;
            var key = this.r4o_1;
            tmp0.u2(key, element);
            this.q4o_1 = this.p4o_1.t4n_1.d4o();
            var tmp0_subject = this.q4o_1;
            if (tmp0_subject === 4) {
              this.h8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.h8_1 = 4;
                continue $sm;
              } else {
                this.p4o_1.t4n_1.c4n('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.h8_1 = 1;
            continue $sm;
          case 4:
            if (this.q4o_1 === 6) {
              this.p4o_1.t4n_1.x4n(7);
            } else if (this.q4o_1 === 4) {
              if (!this.p4o_1.v4n_1) {
                invalidTrailingComma(this.p4o_1.t4n_1);
              }
              this.p4o_1.t4n_1.x4n(7);
            }

            return new JsonObject(this.o4o_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.t4n_1 = lexer;
    this.u4n_1 = configuration.z4k_1;
    this.v4n_1 = configuration.l4l_1;
    this.w4n_1 = 0;
  }
  protoOf(JsonTreeReader).c4o = function () {
    var token = this.t4n_1.y4n();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.w4n_1 = this.w4n_1 + 1 | 0;
      if (this.w4n_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.w4n_1 = this.w4n_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.t4n_1.c4n('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.kq().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.g4p_1;
    }
    return json.l4j_1.g4l_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.d4n_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).h4p = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.d4n_1;
    var value_0 = this_0.n2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.u2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.u2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).e4n = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.i4p(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.h4p(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).i4p = function (descriptor, key) {
    var tmp0_safe_receiver = this.d4n_1.n2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.n2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.j4p_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.j4p_1 === unknownKey) {
      $receiver.j4p_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.rs(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.r4j_1.y4n() === 4) {
      $this.r4j_1.c4n('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.t4j_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.t4j_1 === -1)) {
        hasComma = $this.r4j_1.l4p();
      }
    } else {
      $this.r4j_1.k4p(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.r4j_1.z4n()) {
      if (decodingKey) {
        if ($this.t4j_1 === -1) {
          var tmp0 = $this.r4j_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.y4j_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.c4n(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.r4j_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.y4j_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.c4n(tmp$ret$3, position_0);
          }
        }
      }
      $this.t4j_1 = $this.t4j_1 + 1 | 0;
      tmp = $this.t4j_1;
    } else {
      if (hasComma && !$this.p4j_1.l4j_1.l4l_1) {
        invalidTrailingComma($this.r4j_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.p4j_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.pq(index);
      var elementDescriptor = descriptor.oq(index);
      var tmp;
      if (isOptional && !elementDescriptor.zp()) {
        tmp = $this.r4j_1.m4p(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.hq(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.zp()) {
          tmp_0 = $this.r4j_1.m4p(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.r4j_1.n4p($this.v4j_1.z4k_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.l4j_1.c4l_1 && elementDescriptor.zp();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.r4j_1.a4o();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.r4j_1.l4p();
    while ($this.r4j_1.z4n()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.r4j_1.k4p(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.p4j_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.v4j_1.e4l_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.r4j_1.l4p();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.w4j_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.z4m(index);
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
    if (hasComma && !$this.p4j_1.l4j_1.l4l_1) {
      invalidTrailingComma($this.r4j_1);
    }
    var tmp1_safe_receiver = $this.w4j_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a4n();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.p4j_1) || trySkip($this, $this.u4j_1, key)) {
      $this.r4j_1.p4p($this.v4j_1.z4k_1);
    } else {
      $this.r4j_1.z4j_1.p4n();
      $this.r4j_1.o4p(key);
    }
    return $this.r4j_1.l4p();
  }
  function decodeListIndex($this) {
    var hasComma = $this.r4j_1.l4p();
    var tmp;
    if ($this.r4j_1.z4n()) {
      if (!($this.t4j_1 === -1) && !hasComma) {
        $this.r4j_1.c4n('Expected end of the array or comma');
      }
      $this.t4j_1 = $this.t4j_1 + 1 | 0;
      tmp = $this.t4j_1;
    } else {
      if (hasComma && !$this.p4j_1.l4j_1.l4l_1) {
        invalidTrailingComma($this.r4j_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.v4j_1.z4k_1) {
      tmp = $this.r4j_1.r4p();
    } else {
      tmp = $this.r4j_1.q4p();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.p4j_1 = json;
    this.q4j_1 = mode;
    this.r4j_1 = lexer;
    this.s4j_1 = this.p4j_1.ps();
    this.t4j_1 = -1;
    this.u4j_1 = discriminatorHolder;
    this.v4j_1 = this.p4j_1.l4j_1;
    this.w4j_1 = this.v4j_1.c4l_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).p4l = function () {
    return this.p4j_1;
  };
  protoOf(StreamingJsonDecoder).ps = function () {
    return this.s4j_1;
  };
  protoOf(StreamingJsonDecoder).q4l = function () {
    return (new JsonTreeReader(this.p4j_1.l4j_1, this.r4j_1)).c4o();
  };
  protoOf(StreamingJsonDecoder).zr = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.p4j_1.l4j_1.f4l_1;
      }
      if (tmp) {
        return deserializer.cp(this);
      }
      var discriminator = classDiscriminator(deserializer.bp(), this.p4j_1);
      var tmp0_elvis_lhs = this.r4j_1.s4p(discriminator, this.v4j_1.z4k_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.p4l().l4j_1.f4l_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.cp(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.bp(), this.p4l());
          var tmp2_0 = this.q4l();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.bp().gq();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.r4j_1.z4j_1.q4n();
            var tmp_2;
            if (this.p4l().l4j_1.o4l_1) {
              var tmp$ret$6 = toString(tmp2_0);
              tmp_2 = toString(minify(tmp$ret$6));
            } else {
              tmp_2 = null;
            }
            var inputValue = tmp_2;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.gd(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_3;
          try {
            tmp_3 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_4;
            if ($p instanceof SerializationException) {
              var it = $p;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var shortMessage = ensureNotNull(it.message);
              var tmp_5;
              if (this.p4l().l4j_1.o4l_1) {
                var tmp$ret$10 = jsonTree.toString();
                tmp_5 = toString(minify(tmp$ret$10));
              } else {
                tmp_5 = null;
              }
              var inputValue_0 = tmp_5;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_3;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.p4l(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p_0) {
        var tmp_8;
        if ($p_0 instanceof SerializationException) {
          var it_0 = $p_0;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.r4j_1.c4n(message, VOID, hint);
        } else {
          throw $p_0;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.u4j_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.cp(this);
    } catch ($p_1) {
      if ($p_1 instanceof MissingFieldException) {
        var e = $p_1;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw missingFieldExceptionWithNewMessage(e, plus(e.message, ' at path: ') + this.r4j_1.z4j_1.q4n());
      } else {
        throw $p_1;
      }
    }
  };
  protoOf(StreamingJsonDecoder).as = function (descriptor) {
    var newMode = switchMode(this.p4j_1, descriptor);
    this.r4j_1.z4j_1.l4n(descriptor);
    this.r4j_1.k4p(newMode.v4p_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.p4j_1, newMode, this.r4j_1, descriptor, this.u4j_1);
        break;
      default:
        var tmp_0;
        if (this.q4j_1.equals(newMode) && this.p4j_1.l4j_1.c4l_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.p4j_1, newMode, this.r4j_1, descriptor, this.u4j_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).bs = function (descriptor) {
    if (descriptor.jq() === 0 && ignoreUnknownKeys(descriptor, this.p4j_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.r4j_1.l4p() && !this.p4j_1.l4j_1.l4l_1) {
      invalidTrailingComma(this.r4j_1, '');
    }
    this.r4j_1.k4p(this.q4j_1.w4p_1);
    this.r4j_1.z4j_1.p4n();
  };
  protoOf(StreamingJsonDecoder).lr = function () {
    var tmp;
    var tmp0_safe_receiver = this.w4j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4m_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.r4j_1.x4p();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).mr = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).ms = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.q4j_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.r4j_1.z4j_1.o4n();
    }
    var value = protoOf(AbstractDecoder).ms.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.r4j_1.z4j_1.n4n(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).rs = function (descriptor) {
    var index;
    switch (this.q4j_1.a1_1) {
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
    if (!this.q4j_1.equals(WriteMode_MAP_getInstance())) {
      this.r4j_1.z4j_1.m4n(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).nr = function () {
    return this.r4j_1.y4p();
  };
  protoOf(StreamingJsonDecoder).or = function () {
    var value = this.r4j_1.z4p();
    if (!equalsLong(value, fromInt(convertToByte(value)))) {
      this.r4j_1.c4n("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).pr = function () {
    var value = this.r4j_1.z4p();
    if (!equalsLong(value, fromInt(convertToShort(value)))) {
      this.r4j_1.c4n("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).qr = function () {
    var value = this.r4j_1.z4p();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.r4j_1.c4n("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).rr = function () {
    return this.r4j_1.z4p();
  };
  protoOf(StreamingJsonDecoder).sr = function () {
    var tmp0 = this.r4j_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.p4j_1.l4j_1.h4l_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r4j_1, result);
  };
  protoOf(StreamingJsonDecoder).tr = function () {
    var tmp0 = this.r4j_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.p4j_1.l4j_1.h4l_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.r4j_1, result);
  };
  protoOf(StreamingJsonDecoder).ur = function () {
    var string = this.r4j_1.b4o();
    if (!(string.length === 1)) {
      this.r4j_1.c4n("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).vr = function () {
    var tmp;
    if (this.v4j_1.z4k_1) {
      tmp = this.r4j_1.r4p();
    } else {
      tmp = this.r4j_1.a4o();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xr = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.r4j_1, this.p4j_1) : protoOf(AbstractDecoder).xr.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).wr = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.p4j_1, this.vr(), ' at path ' + this.r4j_1.z4j_1.q4n());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.a4q_1 = lexer;
    this.b4q_1 = json.ps();
  }
  protoOf(JsonDecoderForUnsignedTypes).ps = function () {
    return this.b4q_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).rs = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).qr = function () {
    var tmp0 = this.a4q_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).rr = function () {
    var tmp0 = this.a4q_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).or = function () {
    var tmp0 = this.a4q_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).pr = function () {
    var tmp0 = this.a4q_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.b4o();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.c4n("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    return _this__u8e3s4.iq() && get_unsignedNumberDescriptors().i2(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).bp(), serializer_1(Companion_getInstance_0()).bp(), serializer_2(Companion_getInstance_1()).bp(), serializer_3(Companion_getInstance_2()).bp()]);
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
          _this__u8e3s4.yb(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.yb(value, lastPos, value.length);
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
      var this_7 = new Int8Array(93);
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
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.bp())).zr(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.i4q(tag);
    var tmp;
    if ($this.p4l().l4j_1.o4l_1) {
      var tmp$ret$3 = toString($this.j4q());
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
    this.e4q_1 = json;
    this.f4q_1 = value;
    this.g4q_1 = polymorphicDiscriminator;
    this.h4q_1 = this.p4l().l4j_1;
  }
  protoOf(AbstractJsonTreeDecoder).p4l = function () {
    return this.e4q_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.f4q_1;
  };
  protoOf(AbstractJsonTreeDecoder).ps = function () {
    return this.p4l().ps();
  };
  protoOf(AbstractJsonTreeDecoder).j4q = function () {
    var tmp0_safe_receiver = this.a13();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.k4q(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).i4q = function (currentTag) {
    return this.c13() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).q4l = function () {
    return this.j4q();
  };
  protoOf(AbstractJsonTreeDecoder).zr = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.p4l().l4j_1.f4l_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.cp(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.bp(), this.p4l());
      var tmp2 = this.q4l();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.bp().gq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c13();
        var tmp_0;
        if (this.p4l().l4j_1.o4l_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var jsonTree = tmp2;
      var tmp0_safe_receiver = jsonTree.gd(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_1;
      try {
        tmp_1 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof SerializationException) {
          var it = $p;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var shortMessage = ensureNotNull(it.message);
          var tmp_3;
          if (this.p4l().l4j_1.o4l_1) {
            var tmp$ret$10 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$10));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue_0), shortMessage, -1, null, inputValue_0, null);
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_1;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.p4l(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).b13 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).as = function (descriptor) {
    var currentObject = this.j4q();
    var tmp0_subject = descriptor.hq();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.p4l();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.gq();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c13();
        var tmp_2;
        if (this.p4l().l4j_1.o4l_1) {
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
        var this_0 = this.p4l();
        var keyDescriptor = carrierDescriptor(descriptor.oq(0), this_0.ps());
        var keyKind = keyDescriptor.hq();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.p4l();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.gq();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.c13();
            var tmp_6;
            if (this.p4l().l4j_1.o4l_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject);
        } else {
          if (this_0.l4j_1.a4l_1) {
            var tmp_7 = this.p4l();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.gq();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.c13();
              var tmp_8;
              if (this.p4l().l4j_1.o4l_1) {
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
        var tmp_9 = this.p4l();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.gq();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.c13();
          var tmp_10;
          if (this.p4l().l4j_1.o4l_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, this.g4q_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).bs = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).lr = function () {
    var tmp = this.j4q();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).l4q = function (tag, enumDescriptor) {
    var tmp = this.p4l();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.k4q(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.gq();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.i4q(tag);
      var tmp_0;
      if (this.p4l().l4j_1.o4l_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.q3d());
  };
  protoOf(AbstractJsonTreeDecoder).o13 = function (tag, enumDescriptor) {
    return this.l4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).m4q = function (tag) {
    return !(this.k4q(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).e13 = function (tag) {
    return this.m4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
  protoOf(AbstractJsonTreeDecoder).f13 = function (tag) {
    return this.n4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
  protoOf(AbstractJsonTreeDecoder).g13 = function (tag) {
    return this.o4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
  protoOf(AbstractJsonTreeDecoder).h13 = function (tag) {
    return this.p4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
  protoOf(AbstractJsonTreeDecoder).i13 = function (tag) {
    return this.q4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
  protoOf(AbstractJsonTreeDecoder).j13 = function (tag) {
    return this.r4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
    var specialFp = this.p4l().l4j_1.h4l_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.p4l().l4j_1.o4l_1) {
      var tmp$ret$13 = toString(this.j4q());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).k13 = function (tag) {
    return this.s4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
    var specialFp = this.p4l().l4j_1.h4l_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.p4l().l4j_1.o4l_1) {
      var tmp$ret$13 = toString(this.j4q());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).l13 = function (tag) {
    return this.t4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u4q = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.k4q(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp;
        if (this.p4l().l4j_1.o4l_1) {
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
        var tmp0_elvis_lhs = new Char(single(literal.q3d()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.w1_1;
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
  protoOf(AbstractJsonTreeDecoder).m13 = function (tag) {
    return this.u4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v4q = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.k4q(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.i4q(tag);
      var tmp;
      if (this.p4l().l4j_1.o4l_1) {
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
      var tmp4 = this.i4q(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.p4l().l4j_1.o4l_1) {
        var tmp$ret$10 = toString(this.j4q());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.z4l_1 && !this.p4l().l4j_1.z4k_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.i4q(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.p4l().l4j_1.o4l_1) {
        var tmp$ret$14 = toString(this.j4q());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.b4m_1;
  };
  protoOf(AbstractJsonTreeDecoder).n13 = function (tag) {
    return this.v4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w4q = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.p4l();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.k4q(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.gq();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.i4q(tag);
        var tmp_1;
        if (this.p4l().l4j_1.o4l_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.q3d());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.p4l());
    } else {
      tmp = protoOf(NamedValueDecoder).p13.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).p13 = function (tag, inlineDescriptor) {
    return this.w4q((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).xr = function (descriptor) {
    return !(this.a13() == null) ? protoOf(NamedValueDecoder).xr.call(this, descriptor) : (new JsonPrimitiveDecoder(this.p4l(), this.n1(), this.g4q_1)).xr(descriptor);
  };
  function setForceNull($this, descriptor, index) {
    $this.g4r_1 = (!$this.p4l().l4j_1.c4l_1 && !descriptor.pq(index) && descriptor.oq(index).zp());
    return $this.g4r_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.d4r_1 = value;
    this.e4r_1 = polyDescriptor;
    this.f4r_1 = 0;
    this.g4r_1 = false;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.d4r_1;
  };
  protoOf(JsonTreeDecoder).rs = function (descriptor) {
    $l$loop: while (this.f4r_1 < descriptor.jq()) {
      var _unary__edvuaz = this.f4r_1;
      this.f4r_1 = _unary__edvuaz + 1 | 0;
      var name = this.v12(descriptor, _unary__edvuaz);
      var index = this.f4r_1 - 1 | 0;
      this.g4r_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.n1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.h4q_1.e4l_1)
          return index;
        var tmp0 = this.p4l();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.pq(index);
          var elementDescriptor = descriptor.oq(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.zp()) {
            var tmp_1 = this.h4r(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.hq(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.zp()) {
              var tmp_3 = this.h4r(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.h4r(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.l4j_1.c4l_1 && elementDescriptor.zp();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).lr = function () {
    return !this.g4r_1 && protoOf(AbstractJsonTreeDecoder).lr.call(this);
  };
  protoOf(JsonTreeDecoder).w12 = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.p4l());
    var baseName = descriptor.lq(index);
    if (strategy == null) {
      if (!this.h4q_1.i4l_1)
        return baseName;
      if (this.n1().o2().i2(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.p4l(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.n1().o2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (deserializationNamesMap_0.n2(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.g4n(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).k4q = function (tag) {
    return getValue(this.n1(), tag);
  };
  protoOf(JsonTreeDecoder).h4r = function (tag) {
    return this.n1().gd(tag);
  };
  protoOf(JsonTreeDecoder).as = function (descriptor) {
    if (descriptor === this.e4r_1) {
      var tmp = this.p4l();
      var tmp2 = this.j4q();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.e4r_1.gq();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.c13();
        var tmp_0;
        if (this.p4l().l4j_1.o4l_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, this.g4q_1, this.e4r_1);
    }
    return protoOf(AbstractJsonTreeDecoder).as.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).bs = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.p4l())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.hq();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.p4l());
    var tmp_1;
    if (strategy == null && !this.h4q_1.i4l_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.p4l(), descriptor).o2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.p4l()).i4p(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.n1().o2().t();
    while (_iterator__ex2g4s.u()) {
      var key = _iterator__ex2g4s.v();
      if (!names.i2(key) && !(key === this.g4q_1)) {
        var tmp2 = "Encountered an unknown key '" + key + "'";
        var tmp4 = this.c13();
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
        var tmp_3;
        if (this.p4l().l4j_1.o4l_1) {
          var tmp$ret$4 = this.n1().toString();
          tmp_3 = toString(minify(tmp$ret$4));
        } else {
          tmp_3 = null;
        }
        var inputValue = tmp_3;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.o4r_1 = value;
    this.p4r_1 = this.o4r_1.e1();
    this.q4r_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.o4r_1;
  };
  protoOf(JsonTreeListDecoder).w12 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).k4q = function (tag) {
    return this.o4r_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).rs = function (descriptor) {
    while (this.q4r_1 < (this.p4r_1 - 1 | 0)) {
      this.q4r_1 = this.q4r_1 + 1 | 0;
      return this.q4r_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.x4r_1 = value;
    this.q13('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.x4r_1;
  };
  protoOf(JsonPrimitiveDecoder).rs = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).k4q = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.x4r_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.i4s_1 = value;
    this.j4s_1 = toList(this.i4s_1.o2());
    this.k4s_1 = imul(this.j4s_1.e1(), 2);
    this.l4s_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n1 = function () {
    return this.i4s_1;
  };
  protoOf(JsonTreeMapDecoder).w12 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.j4s_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).rs = function (descriptor) {
    while (this.l4s_1 < (this.k4s_1 - 1 | 0)) {
      this.l4s_1 = this.l4s_1 + 1 | 0;
      return this.l4s_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).k4q = function (tag) {
    return (this.l4s_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.i4s_1, tag);
  };
  protoOf(JsonTreeMapDecoder).bs = function (descriptor) {
  };
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.v4p_1 = begin;
    this.w4p_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.hq();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.oq(0), _this__u8e3s4.ps());
          var keyKind = keyDescriptor.hq();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.l4j_1.a4l_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.hq(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.iq()) {
      tmp = carrierDescriptor(_this__u8e3s4.oq(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.m4s(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.m4s(lastPosition, currentPosition);
    var result = $this.b4k_1.toString();
    $this.b4k_1.ec(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.a4k_1);
    $this.a4k_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.n4s(), $this.y4j_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.o4s(currentPosition);
    if (currentPosition === -1) {
      $this.c4n('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.n4s();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.n4s(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.c4n("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.b4k_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.y4j_1 = startPos;
      $this.p4s();
      if (($this.y4j_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.c4n('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.y4j_1);
    }
    $this.b4k_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.c4n("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.o4s(start);
    if (current >= charSequenceLength($this.n4s()) || current === -1) {
      $this.c4n('EOF');
    }
    var tmp = $this.n4s();
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
        $this.c4n("Expected valid boolean literal prefix, but had '" + $this.b4o() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.n4s()) - current | 0) < literalSuffix.length) {
      $this.c4n('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.n4s(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.c4n("Expected valid boolean literal prefix, but had '" + $this.b4o() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.y4j_1 = current + literalSuffix.length | 0;
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
    this.x4j_1 = configuration;
    this.y4j_1 = 0;
    this.z4j_1 = new JsonPath(this.x4j_1);
    this.a4k_1 = null;
    this.b4k_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).p4s = function () {
  };
  protoOf(AbstractJsonLexer).l4p = function () {
    var current = this.q4s();
    var source = this.n4s();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.y4j_1 = this.y4j_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).r4s = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).c4k = function () {
    var nextToken = this.d4o();
    if (!(nextToken === 10)) {
      this.c4n('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.n4s(), this.y4j_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).x4n = function (expected) {
    var token = this.d4o();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.y4j_1 > 0 ? this.y4j_1 - 1 | 0 : this.y4j_1;
      var s = this.y4j_1 === charSequenceLength(this.n4s()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.n4s(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.c4n(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).s4s = function (expected) {
    if (this.y4j_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.y4j_1;
        try {
          this.y4j_1 = this.y4j_1 - 1 | 0;
          tmp$ret$0 = this.b4o();
          break $l$block;
        }finally {
          this.y4j_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.b4n("Expected string literal but 'null' literal was found", this.y4j_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.y4j_1 > 0 ? this.y4j_1 - 1 | 0 : this.y4j_1;
    var s = this.y4j_1 === charSequenceLength(this.n4s()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.n4s(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.c4n(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).y4n = function () {
    var source = this.n4s();
    var cpos = this.y4j_1;
    $l$loop_0: while (true) {
      cpos = this.o4s(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.y4j_1 = cpos;
      return charToTokenClass(ch);
    }
    this.y4j_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).m4p = function (doConsume) {
    var current = this.q4s();
    current = this.o4s(current);
    var len = charSequenceLength(this.n4s()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.n4s(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.n4s(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.y4j_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).x4p = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.m4p(doConsume) : $super.m4p.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).n4p = function (isLenient) {
    var token = this.y4n();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.b4o();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.a4o();
    }
    var string = tmp;
    this.a4k_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).t4s = function () {
    this.a4k_1 = null;
  };
  protoOf(AbstractJsonLexer).y15 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.n4s();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).a4o = function () {
    if (!(this.a4k_1 == null)) {
      return takePeeked(this);
    }
    return this.q4p();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.o4s(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.c4n('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.m4s(lastPosition, currentPosition);
          currentPosition = this.o4s(currentPosition);
          if (currentPosition === -1) {
            this.c4n('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.y15(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.y4j_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).r4p = function () {
    var result = this.b4o();
    if (result === 'null' && wasUnquotedString(this)) {
      this.c4n("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).b4o = function () {
    if (!(this.a4k_1 == null)) {
      return takePeeked(this);
    }
    var current = this.q4s();
    if (current >= charSequenceLength(this.n4s()) || current === -1) {
      this.c4n('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.n4s(), current));
    if (token === 1) {
      return this.a4o();
    }
    if (!(token === 0)) {
      this.c4n('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.n4s(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.n4s(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.n4s())) {
        usedAppend = true;
        this.m4s(this.y4j_1, current);
        var eof = this.o4s(current);
        if (eof === -1) {
          this.y4j_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.y15(this.y4j_1, current);
    } else {
      tmp = decodedString(this, this.y4j_1, current);
    }
    var result = tmp;
    this.y4j_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).m4s = function (fromIndex, toIndex) {
    this.b4k_1.yb(this.n4s(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).p4p = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.y4n();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.b4o();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.y4n();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.b4o();
        else
          this.q4p();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.b1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8)) {
          this.c4n('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6)) {
          this.c4n('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.c4n('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.d4o();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.n4s()) + "', currentPosition=" + this.y4j_1 + ')';
  };
  protoOf(AbstractJsonLexer).o4p = function (key) {
    var processed = this.y15(0, this.y4j_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.b4n("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).b4n = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.z4j_1.q4n(), hint, this.n4s());
  };
  protoOf(AbstractJsonLexer).c4n = function (message, position, hint, $super) {
    position = position === VOID ? this.y4j_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.b4n(message, position, hint) : $super.b4n.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).z4p = function () {
    var current = this.q4s();
    current = this.o4s(current);
    if (current >= charSequenceLength(this.n4s()) || current === -1) {
      this.c4n('EOF');
    }
    var tmp;
    if (charSequenceGet(this.n4s(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.n4s())) {
        this.c4n('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.n4s()))) {
      var ch = charSequenceGet(this.n4s(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.c4n("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.c4n("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.c4n("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.c4n("Unexpected symbol '-' in numeric literal", current);
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
        this.c4n("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
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
        this.c4n('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.c4n('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.c4n('EOF');
      }
      if (!(charSequenceGet(this.n4s(), current) === _Char___init__impl__6a9atx(34))) {
        this.c4n('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.y4j_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.c4n('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.c4n("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.c4n('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).w4l = function () {
    var result = this.z4p();
    var next = this.d4o();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.y4j_1 > 0 ? this.y4j_1 - 1 | 0 : this.y4j_1;
      var s = this.y4j_1 === charSequenceLength(this.n4s()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.n4s(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.c4n(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).y4p = function () {
    var current = this.q4s();
    if (current === charSequenceLength(this.n4s())) {
      this.c4n('EOF');
    }
    var tmp;
    if (charSequenceGet(this.n4s(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.y4j_1 === charSequenceLength(this.n4s())) {
        this.c4n('EOF');
      }
      if (!(charSequenceGet(this.n4s(), this.y4j_1) === _Char___init__impl__6a9atx(34))) {
        this.c4n('Expected closing quotation mark');
      }
      this.y4j_1 = this.y4j_1 + 1 | 0;
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
      var tmp_0 = CharMappings_getInstance().v4s_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().u4s_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.u4s_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v4s_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u4s_1 = charArray(117);
    this.v4s_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).d4o = function () {
    var source = this.n4s();
    var cpos = this.q4s();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.y4j_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).z4n = function () {
    var current = this.q4s();
    if (current >= this.n4s().length || current === -1)
      return false;
    return this.r4s(charCodeAt(this.n4s(), current));
  };
  protoOf(StringJsonLexerWithComments).k4p = function (expected) {
    var source = this.n4s();
    var current = this.q4s();
    if (current >= source.length || current === -1) {
      this.y4j_1 = -1;
      this.s4s(expected);
    }
    var c = charCodeAt(source, current);
    this.y4j_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.s4s(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).y4n = function () {
    var source = this.n4s();
    var cpos = this.q4s();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.y4j_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).q4s = function () {
    var current = this.y4j_1;
    if (current === -1)
      return current;
    var source = this.n4s();
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
            this.y4j_1 = source.length;
            this.c4n('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.y4j_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.h4t_1 = source;
  }
  protoOf(StringJsonLexer).n4s = function () {
    return this.h4t_1;
  };
  protoOf(StringJsonLexer).o4s = function (position) {
    return position < this.n4s().length ? position : -1;
  };
  protoOf(StringJsonLexer).d4o = function () {
    var source = this.n4s();
    var cpos = this.y4j_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.y4j_1 = cpos;
      return charToTokenClass(c);
    }
    this.y4j_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).z4n = function () {
    var current = this.y4j_1;
    if (current === -1)
      return false;
    var source = this.n4s();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.y4j_1 = current;
      return this.r4s(c);
    }
    this.y4j_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).q4s = function () {
    var current = this.y4j_1;
    if (current === -1)
      return current;
    var source = this.n4s();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.y4j_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).k4p = function (expected) {
    if (this.y4j_1 === -1) {
      this.s4s(expected);
    }
    var source = this.n4s();
    var cpos = this.y4j_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.y4j_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.s4s(expected);
    }
    this.y4j_1 = -1;
    this.s4s(expected);
  };
  protoOf(StringJsonLexer).q4p = function () {
    this.k4p(_Char___init__impl__6a9atx(34));
    var current = this.y4j_1;
    var closingQuote = indexOf_0(this.n4s(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.b4o();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.y4j_1 > 0 ? this.y4j_1 - 1 | 0 : this.y4j_1;
      var s = this.y4j_1 === charSequenceLength(this.n4s()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.n4s(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.c4n(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.n4s(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.n4s(), this.y4j_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.y4j_1 = closingQuote + 1 | 0;
    return substring(this.n4s(), current, closingQuote);
  };
  protoOf(StringJsonLexer).s4p = function (keyToMatch, isLenient) {
    var positionSnapshot = this.y4j_1;
    try {
      if (!(this.d4o() === 6))
        return null;
      var firstKey = this.n4p(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.t4s();
      if (!(this.d4o() === 5))
        return null;
      return this.n4p(isLenient);
    }finally {
      this.y4j_1 = positionSnapshot;
      this.t4s();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.l4j_1.m4l_1 ? new StringJsonLexer(source, json.l4j_1) : new StringJsonLexerWithComments(source, json.l4j_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n4j_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).zp = get_isNullable;
  protoOf(defer$1).iq = get_isInline;
  protoOf(defer$1).kq = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).a15 = contextual;
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
