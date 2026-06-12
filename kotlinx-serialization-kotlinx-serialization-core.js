(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.n2;
  var constructCallableReference = kotlin_kotlin.$_$.da;
  var emptyList = kotlin_kotlin.$_$.d6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.q2;
  var lazy = kotlin_kotlin.$_$.cg;
  var KProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ia;
  var toString = kotlin_kotlin.$_$.nb;
  var initMetadataForClass = kotlin_kotlin.$_$.la;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var captureStack = kotlin_kotlin.$_$.v9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.x3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.b4;
  var IllegalArgumentException = kotlin_kotlin.$_$.ye;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ff;
  var isInterface = kotlin_kotlin.$_$.ab;
  var KClass = kotlin_kotlin.$_$.fc;
  var Triple = kotlin_kotlin.$_$.hf;
  var getKClass = kotlin_kotlin.$_$.dc;
  var Pair = kotlin_kotlin.$_$.cf;
  var Entry = kotlin_kotlin.$_$.a5;
  var KtMap = kotlin_kotlin.$_$.b5;
  var KtMutableMap = kotlin_kotlin.$_$.e5;
  var LinkedHashMap = kotlin_kotlin.$_$.x4;
  var HashMap = kotlin_kotlin.$_$.v4;
  var KtSet = kotlin_kotlin.$_$.g5;
  var KtMutableSet = kotlin_kotlin.$_$.f5;
  var LinkedHashSet = kotlin_kotlin.$_$.y4;
  var HashSet = kotlin_kotlin.$_$.w4;
  var Collection = kotlin_kotlin.$_$.u4;
  var KtList = kotlin_kotlin.$_$.z4;
  var KtMutableList = kotlin_kotlin.$_$.c5;
  var ArrayList = kotlin_kotlin.$_$.t4;
  var copyToArray = kotlin_kotlin.$_$.a6;
  var Result = kotlin_kotlin.$_$.df;
  var ensureNotNull = kotlin_kotlin.$_$.xf;
  var equals = kotlin_kotlin.$_$.fa;
  var getStringHashCode = kotlin_kotlin.$_$.ja;
  var isBlank = kotlin_kotlin.$_$.zc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var toList = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v2;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.b3;
  var toHashSet = kotlin_kotlin.$_$.o7;
  var toBooleanArray = kotlin_kotlin.$_$.m7;
  var withIndex = kotlin_kotlin.$_$.x7;
  var to = kotlin_kotlin.$_$.ig;
  var toMap = kotlin_kotlin.$_$.t7;
  var lazy_0 = kotlin_kotlin.$_$.dg;
  var contentEquals = kotlin_kotlin.$_$.m5;
  var initMetadataForObject = kotlin_kotlin.$_$.ra;
  var getKClassFromExpression = kotlin_kotlin.$_$.cc;
  var Long = kotlin_kotlin.$_$.af;
  var Char = kotlin_kotlin.$_$.qe;
  var Companion_getInstance = kotlin_kotlin.$_$.d2;
  var Duration = kotlin_kotlin.$_$.ke;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.f2;
  var toIntOrNull = kotlin_kotlin.$_$.yd;
  var hashCode = kotlin_kotlin.$_$.ka;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e4;
  var asList = kotlin_kotlin.$_$.j5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.w2;
  var isArray = kotlin_kotlin.$_$.sa;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.c3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.g3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y2;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.z2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f3;
  var until = kotlin_kotlin.$_$.xb;
  var step = kotlin_kotlin.$_$.wb;
  var getValue = kotlin_kotlin.$_$.m6;
  var longArray = kotlin_kotlin.$_$.fb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ma;
  var get_lastIndex = kotlin_kotlin.$_$.r6;
  var shiftLeft = kotlin_kotlin.$_$.o9;
  var bitwiseOr = kotlin_kotlin.$_$.z8;
  var equalsLong = kotlin_kotlin.$_$.f9;
  var invert = kotlin_kotlin.$_$.h9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.vf;
  var joinToString = kotlin_kotlin.$_$.p6;
  var toString_0 = kotlin_kotlin.$_$.hg;
  var KTypeParameter = kotlin_kotlin.$_$.jc;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.a3;
  var booleanArray = kotlin_kotlin.$_$.u9;
  var emptyMap = kotlin_kotlin.$_$.e6;
  var contentHashCode = kotlin_kotlin.$_$.p5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g2;
  var isCharArray = kotlin_kotlin.$_$.va;
  var charArray = kotlin_kotlin.$_$.x9;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.w1;
  var isDoubleArray = kotlin_kotlin.$_$.xa;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.x1;
  var isFloatArray = kotlin_kotlin.$_$.ya;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.h2;
  var isLongArray = kotlin_kotlin.$_$.i9;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.l2;
  var ULongArray = kotlin_kotlin.$_$.mf;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.f1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.d1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.y1;
  var isIntArray = kotlin_kotlin.$_$.za;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.k2;
  var UIntArray = kotlin_kotlin.$_$.kf;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.y;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.z1;
  var isShortArray = kotlin_kotlin.$_$.cb;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.m2;
  var UShortArray = kotlin_kotlin.$_$.of;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.m1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.k1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.v1;
  var isByteArray = kotlin_kotlin.$_$.ua;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.j2;
  var UByteArray = kotlin_kotlin.$_$.if;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.s;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.p;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.u1;
  var isBooleanArray = kotlin_kotlin.$_$.ta;
  var coerceAtLeast = kotlin_kotlin.$_$.sb;
  var copyOf = kotlin_kotlin.$_$.u5;
  var copyOf_0 = kotlin_kotlin.$_$.w5;
  var copyOf_1 = kotlin_kotlin.$_$.x5;
  var copyOf_2 = kotlin_kotlin.$_$.s5;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.i1;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.j1;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.g1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.h1;
  var copyOf_3 = kotlin_kotlin.$_$.z5;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.b1;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.c1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.z;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.a1;
  var copyOf_4 = kotlin_kotlin.$_$.r5;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.p1;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.q1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.n1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.o1;
  var copyOf_5 = kotlin_kotlin.$_$.v5;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.u;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.v;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.r;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.t;
  var copyOf_6 = kotlin_kotlin.$_$.t5;
  var trimIndent = kotlin_kotlin.$_$.he;
  var charSequenceLength = kotlin_kotlin.$_$.aa;
  var lastOrNull = kotlin_kotlin.$_$.t6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.s6;
  var ULong = kotlin_kotlin.$_$.nf;
  var UInt = kotlin_kotlin.$_$.lf;
  var UByte = kotlin_kotlin.$_$.jf;
  var UShort = kotlin_kotlin.$_$.pf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.eg;
  var asSequence = kotlin_kotlin.$_$.k5;
  var get_js = kotlin_kotlin.$_$.eb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.c2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.o6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var get_indices_0 = kotlin_kotlin.$_$.n6;
  var get_longArrayClass = kotlin_kotlin.$_$.j9;
  var Unit = kotlin_kotlin.$_$.qf;
  var Instant = kotlin_kotlin.$_$.le;
  var Uuid = kotlin_kotlin.$_$.ne;
  var mapOf = kotlin_kotlin.$_$.y6;
  var Companion_instance = kotlin_kotlin.$_$.i2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var createFailure = kotlin_kotlin.$_$.wf;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.cp(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.ms(descriptor, index, deserializer, previousValue) : $super.ms.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.y14(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.dp(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.ep());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.np('type', serializer_0(StringCompanionObject_instance).bp());
      $this$buildSerialDescriptor.np('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.op_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.hp_1 = this$0.pp_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.op_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.bp();
    }, 1, 0, 0);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.op_1 = baseClass;
    this.pp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.qp_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).ep = function () {
    return this.op_1;
  };
  protoOf(PolymorphicSerializer).bp = function () {
    var tmp0 = this.qp_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.op_1) + ')';
  };
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.rp_1 = missingFields;
    this.sp_1 = serialName;
  }
  protoOf(MissingFieldException).tp = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.rp_1, this.sp_1);
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.b1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.vp(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.up()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.vp(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.wp(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.b1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.b1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().xp(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().xp(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().yp(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().yp(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.bp().zp()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.vp(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bp();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.eq_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.aq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.dq_1 = original;
    this.eq_1 = kClass;
    this.fq_1 = this.dq_1.gq() + '<' + this.eq_1.o() + '>';
  }
  protoOf(ContextDescriptor).gq = function () {
    return this.fq_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.dq_1, another.dq_1) && another.eq_1.equals(this.eq_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.eq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.fq_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.eq_1) + ', original: ' + toString(this.dq_1) + ')';
  };
  protoOf(ContextDescriptor).hq = function () {
    return this.dq_1.hq();
  };
  protoOf(ContextDescriptor).zp = function () {
    return this.dq_1.zp();
  };
  protoOf(ContextDescriptor).iq = function () {
    return this.dq_1.iq();
  };
  protoOf(ContextDescriptor).jq = function () {
    return this.dq_1.jq();
  };
  protoOf(ContextDescriptor).kq = function () {
    return this.dq_1.kq();
  };
  protoOf(ContextDescriptor).lq = function (index) {
    return this.dq_1.lq(index);
  };
  protoOf(ContextDescriptor).mq = function (name) {
    return this.dq_1.mq(name);
  };
  protoOf(ContextDescriptor).nq = function (index) {
    return this.dq_1.nq(index);
  };
  protoOf(ContextDescriptor).oq = function (index) {
    return this.dq_1.oq(index);
  };
  protoOf(ContextDescriptor).pq = function (index) {
    return this.dq_1.pq(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.rq_1 = $this_elementNames;
    this.qq_1 = $this_elementNames.jq();
  }
  protoOf(elementNames$1).u = function () {
    return this.qq_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.rq_1.jq();
    var _unary__edvuaz = this.qq_1;
    this.qq_1 = _unary__edvuaz - 1 | 0;
    return this.rq_1.lq(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.sq_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.sq_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.uq_1 = $this_elementDescriptors;
    this.tq_1 = $this_elementDescriptors.jq();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.tq_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.uq_1.jq();
    var _unary__edvuaz = this.tq_1;
    this.tq_1 = _unary__edvuaz - 1 | 0;
    return this.uq_1.oq(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.vq_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.vq_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.ip_1.e1(), toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.fp_1 = serialName;
    this.gp_1 = false;
    this.hp_1 = emptyList();
    this.ip_1 = ArrayList_init_$Create$_0();
    this.jp_1 = HashSet_init_$Create$();
    this.kp_1 = ArrayList_init_$Create$_0();
    this.lp_1 = ArrayList_init_$Create$_0();
    this.mp_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).wq = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.jp_1.b1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.fp_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.ip_1.b1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.kp_1.b1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.lp_1.b1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.mp_1.b1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).np = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.wq(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.wq.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.ip_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.ir_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.hr_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 1);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.xq_1 = serialName;
    this.yq_1 = kind;
    this.zq_1 = elementsCount;
    this.ar_1 = builder.hp_1;
    this.br_1 = toHashSet(builder.ip_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.ip_1;
    tmp.cr_1 = copyToArray(this_0);
    this.dr_1 = compactArray(builder.kp_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.lp_1;
    tmp_0.er_1 = copyToArray(this_1);
    this.fr_1 = toBooleanArray(builder.mp_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.cr_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.if_1, item.hf_1);
      destination.b1(tmp$ret$4);
    }
    tmp_1.gr_1 = toMap(destination);
    this.hr_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ir_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).gq = function () {
    return this.xq_1;
  };
  protoOf(SerialDescriptorImpl).hq = function () {
    return this.yq_1;
  };
  protoOf(SerialDescriptorImpl).jq = function () {
    return this.zq_1;
  };
  protoOf(SerialDescriptorImpl).kq = function () {
    return this.ar_1;
  };
  protoOf(SerialDescriptorImpl).jr = function () {
    return this.br_1;
  };
  protoOf(SerialDescriptorImpl).lq = function (index) {
    return getChecked(this.cr_1, index);
  };
  protoOf(SerialDescriptorImpl).mq = function (name) {
    var tmp0_elvis_lhs = this.gr_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).nq = function (index) {
    return getChecked(this.er_1, index);
  };
  protoOf(SerialDescriptorImpl).oq = function (index) {
    return getChecked(this.dr_1, index);
  };
  protoOf(SerialDescriptorImpl).pq = function (index) {
    return getChecked_0(this.fr_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gq() === other.gq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.hr_1, other.hr_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jq() === other.jq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oq(index).gq() === other.oq(index).gq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oq(index).hq(), other.oq(index).hq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).kr = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).lr = function () {
    return true;
  };
  protoOf(AbstractDecoder).mr = function () {
    return null;
  };
  protoOf(AbstractDecoder).nr = function () {
    var tmp = this.kr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).or = function () {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pr = function () {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qr = function () {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rr = function () {
    var tmp = this.kr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).sr = function () {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).tr = function () {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ur = function () {
    var tmp = this.kr();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).vr = function () {
    var tmp = this.kr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).wr = function (enumDescriptor) {
    var tmp = this.kr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).xr = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).yr = function (deserializer, previousValue) {
    return this.zr(deserializer);
  };
  protoOf(AbstractDecoder).as = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).bs = function (descriptor) {
  };
  protoOf(AbstractDecoder).cs = function (descriptor, index) {
    return this.nr();
  };
  protoOf(AbstractDecoder).ds = function (descriptor, index) {
    return this.or();
  };
  protoOf(AbstractDecoder).es = function (descriptor, index) {
    return this.pr();
  };
  protoOf(AbstractDecoder).fs = function (descriptor, index) {
    return this.qr();
  };
  protoOf(AbstractDecoder).gs = function (descriptor, index) {
    return this.rr();
  };
  protoOf(AbstractDecoder).hs = function (descriptor, index) {
    return this.sr();
  };
  protoOf(AbstractDecoder).is = function (descriptor, index) {
    return this.tr();
  };
  protoOf(AbstractDecoder).js = function (descriptor, index) {
    return this.ur();
  };
  protoOf(AbstractDecoder).ks = function (descriptor, index) {
    return this.vr();
  };
  protoOf(AbstractDecoder).ls = function (descriptor, index) {
    return this.xr(descriptor.oq(index));
  };
  protoOf(AbstractDecoder).ms = function (descriptor, index, deserializer, previousValue) {
    return this.yr(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).os = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.bp().zp();
    var tmp;
    if (isNullabilitySupported || this.lr()) {
      tmp = this.yr(deserializer, previousValue);
    } else {
      tmp = this.mr();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.ks($this.bp(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.ns($this.bp(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).cp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bp();
    var composite = decoder.as(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.qs()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.rs(this.bp());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ks(this.bp(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            value = composite.ns(this.bp(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.bs(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).dp = function (decoder, klassName) {
    return decoder.ps().ts(this.ep(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.us_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).bp = function () {
    return this.us_1;
  };
  protoOf(NothingSerializer_0).cp = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.vs_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).bp = function () {
    return this.vs_1;
  };
  protoOf(DurationSerializer).ws = function (decoder) {
    return Companion_getInstance().pl(decoder.vr());
  };
  protoOf(DurationSerializer).cp = function (decoder) {
    return new Duration(this.ws(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.xs_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).bp = function () {
    return this.xs_1;
  };
  protoOf(InstantSerializer).cp = function (decoder) {
    return Companion_getInstance_0().cm(decoder.vr());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.ys_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).bp = function () {
    return this.ys_1;
  };
  protoOf(UuidSerializer).cp = function (decoder) {
    return Companion_getInstance_1().in(decoder.vr());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).gq = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).gq = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).gq = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).gq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.bt_1 = elementDescriptor;
    this.ct_1 = 1;
  }
  protoOf(ListLikeDescriptor).hq = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).jq = function () {
    return this.ct_1;
  };
  protoOf(ListLikeDescriptor).lq = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).mq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).pq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).nq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).oq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.bt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.bt_1, other.bt_1) && this.gq() === other.gq())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.bt_1), 31) + getStringHashCode(this.gq()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.gq() + '(' + toString(this.bt_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.jt_1 = serialName;
    this.kt_1 = keyDescriptor;
    this.lt_1 = valueDescriptor;
    this.mt_1 = 2;
  }
  protoOf(MapLikeDescriptor).gq = function () {
    return this.jt_1;
  };
  protoOf(MapLikeDescriptor).hq = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).jq = function () {
    return this.mt_1;
  };
  protoOf(MapLikeDescriptor).lq = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).mq = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).pq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).nq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).oq = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.gq() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.kt_1;
        break;
      case 1:
        tmp = this.lt_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.gq() === other.gq()))
      return false;
    if (!equals(this.kt_1, other.kt_1))
      return false;
    if (!equals(this.lt_1, other.lt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.gq());
    result = imul(31, result) + hashCode(this.kt_1) | 0;
    result = imul(31, result) + hashCode(this.lt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.gq() + '(' + toString(this.kt_1) + ', ' + toString(this.lt_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.pt_1 = primitive.gq() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).gq = function () {
    return this.pt_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.rt_1 = kClass;
    this.st_1 = new ArrayClassDesc(eSerializer.bp());
  }
  protoOf(ReferenceArraySerializer).bp = function () {
    return this.st_1;
  };
  protoOf(ReferenceArraySerializer).tt = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ReferenceArraySerializer).ut = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).vt = function (_this__u8e3s4) {
    return this.ut(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).wt = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.rt_1);
  };
  protoOf(ReferenceArraySerializer).xt = function (_this__u8e3s4) {
    return this.wt(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).yt = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  protoOf(ReferenceArraySerializer).zt = function (_this__u8e3s4) {
    return this.yt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).au = function (_this__u8e3s4, size) {
    return _this__u8e3s4.h5(size);
  };
  protoOf(ReferenceArraySerializer).bu = function (_this__u8e3s4, size) {
    return this.au(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ReferenceArraySerializer).cu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.s2(index, element);
  };
  protoOf(ReferenceArraySerializer).du = function (_this__u8e3s4, index, element) {
    return this.cu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ku_1 = new ArrayListClassDesc(element.bp());
  }
  protoOf(ArrayListSerializer).bp = function () {
    return this.ku_1;
  };
  protoOf(ArrayListSerializer).tt = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$_0();
  };
  protoOf(ArrayListSerializer).lu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).vt = function (_this__u8e3s4) {
    return this.lu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).xt = function (_this__u8e3s4) {
    return this.mu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).nu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).zt = function (_this__u8e3s4) {
    return this.nu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).ou = function (_this__u8e3s4, size) {
    return _this__u8e3s4.h5(size);
  };
  protoOf(ArrayListSerializer).bu = function (_this__u8e3s4, size) {
    return this.ou(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).pu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.s2(index, element);
  };
  protoOf(ArrayListSerializer).du = function (_this__u8e3s4, index, element) {
    return this.pu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ru_1 = new HashSetClassDesc(eSerializer.bp());
  }
  protoOf(HashSetSerializer).bp = function () {
    return this.ru_1;
  };
  protoOf(HashSetSerializer).tt = function () {
    return HashSet_init_$Create$();
  };
  protoOf(HashSetSerializer).su = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).vt = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).tu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).xt = function (_this__u8e3s4) {
    return this.tu(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).uu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashSetSerializer).zt = function (_this__u8e3s4) {
    return this.uu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).vu = function (_this__u8e3s4, size) {
  };
  protoOf(HashSetSerializer).bu = function (_this__u8e3s4, size) {
    return this.vu(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(HashSetSerializer).wu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(HashSetSerializer).du = function (_this__u8e3s4, index, element) {
    return this.wu(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.yu_1 = new LinkedHashSetClassDesc(eSerializer.bp());
  }
  protoOf(LinkedHashSetSerializer).bp = function () {
    return this.yu_1;
  };
  protoOf(LinkedHashSetSerializer).tt = function () {
    // Inline function 'kotlin.collections.linkedSetOf' call
    return LinkedHashSet_init_$Create$();
  };
  protoOf(LinkedHashSetSerializer).zu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).vt = function (_this__u8e3s4) {
    return this.zu(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).av = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).xt = function (_this__u8e3s4) {
    return this.av(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).uu = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashSetSerializer).zt = function (_this__u8e3s4) {
    return this.uu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).bv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashSetSerializer).bu = function (_this__u8e3s4, size) {
    return this.bv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(LinkedHashSetSerializer).cv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.b1(element);
  };
  protoOf(LinkedHashSetSerializer).du = function (_this__u8e3s4, index, element) {
    return this.cv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.fv_1 = new HashMapClassDesc(kSerializer.bp(), vSerializer.bp());
  }
  protoOf(HashMapSerializer).bp = function () {
    return this.fv_1;
  };
  protoOf(HashMapSerializer).tt = function () {
    return HashMap_init_$Create$();
  };
  protoOf(HashMapSerializer).gv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).vt = function (_this__u8e3s4) {
    return this.gv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).hv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).xt = function (_this__u8e3s4) {
    return this.hv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).iv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(HashMapSerializer).zt = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).jv = function (_this__u8e3s4, size) {
  };
  protoOf(HashMapSerializer).bu = function (_this__u8e3s4, size) {
    return this.jv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.qv_1 = new LinkedHashMapClassDesc(kSerializer.bp(), vSerializer.bp());
  }
  protoOf(LinkedHashMapSerializer).bp = function () {
    return this.qv_1;
  };
  protoOf(LinkedHashMapSerializer).tt = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).rv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).vt = function (_this__u8e3s4) {
    return this.rv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).sv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).xt = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).iv = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).zt = function (_this__u8e3s4) {
    return this.iv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).tv = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).bu = function (_this__u8e3s4, size) {
    return this.tv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.eu_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).fu = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.gu(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).gu = function (decoder, index, builder, checkIndex) {
    this.du(builder, index, decoder.ns(this.bp(), index, this.eu_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.kv_1 = keySerializer;
    this.lv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).mv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.nv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).fu = function (decoder, builder, startIndex, size) {
    return this.mv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).nv = function (decoder, index, builder, checkIndex) {
    var key = decoder.ns(this.bp(), index, this.kv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.rs(this.bp());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.l2(key)) {
      var tmp_2 = this.lv_1.bp().hq();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ms(this.bp(), vIndex, this.lv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ns(this.bp(), vIndex, this.lv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.u2(key, value);
  };
  protoOf(MapLikeSerializer).gu = function (decoder, index, builder, checkIndex) {
    return this.nv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function readSize($this, decoder, builder) {
    var size = decoder.ss($this.bp());
    $this.bu(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).iu = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.zt(previous);
    var builder = tmp1_elvis_lhs == null ? this.tt() : tmp1_elvis_lhs;
    var startIndex = this.vt(builder);
    var compositeDecoder = decoder.as(this.bp());
    if (compositeDecoder.qs()) {
      this.fu(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.rs(this.bp());
        if (index === -1)
          break $l$loop;
        this.hu(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.bs(this.bp());
    return this.xt(builder);
  };
  protoOf(AbstractCollectionSerializer).cp = function (decoder) {
    return this.iu(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).hu = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.gu(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.gu.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.vv_1 = new PrimitiveArrayDescriptor(primitiveSerializer.bp());
  }
  protoOf(PrimitiveArraySerializer).bp = function () {
    return this.vv_1;
  };
  protoOf(PrimitiveArraySerializer).wv = function (_this__u8e3s4) {
    return _this__u8e3s4.xv();
  };
  protoOf(PrimitiveArraySerializer).vt = function (_this__u8e3s4) {
    return this.wv(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).yv = function (_this__u8e3s4) {
    return _this__u8e3s4.zv();
  };
  protoOf(PrimitiveArraySerializer).xt = function (_this__u8e3s4) {
    return this.yv(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).aw = function (_this__u8e3s4, size) {
    return _this__u8e3s4.bw(size);
  };
  protoOf(PrimitiveArraySerializer).bu = function (_this__u8e3s4, size) {
    return this.aw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(PrimitiveArraySerializer).cw = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).du = function (_this__u8e3s4, index, element) {
    return this.cw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).tt = function () {
    return this.zt(this.dw());
  };
  protoOf(PrimitiveArraySerializer).cp = function (decoder) {
    return this.iu(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).fw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.xv() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.bw(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.bw.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.gw_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.kw_1[slot] = bitwiseOr($this.kw_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.kw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.kw_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.iw_1($this.hw_1, index)) {
            $this.kw_1[slot] = slotMarks;
            return index;
          }
        }
        $this.kw_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.hw_1 = descriptor;
    this.iw_1 = readIfAbsent;
    var elementsCount = this.hw_1.jq();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.jw_1 = tmp_0;
      this.kw_1 = Companion_getInstance_8().gw_1;
    } else {
      this.jw_1 = new Long(0, 0);
      this.kw_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).lw = function (index) {
    if (index < 64) {
      this.jw_1 = bitwiseOr(this.jw_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).mw = function () {
    var elementsCount = this.hw_1.jq();
    while (!equalsLong(this.jw_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.jw_1));
      this.jw_1 = bitwiseOr(this.jw_1, shiftLeft(new Long(1, 0), index));
      if (this.iw_1(this.hw_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.nw_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.nw_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.cx(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.ow_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.bp();
    }, 1, 0, 2);
  }
  function EnumSerializer(serialName, values) {
    this.nw_1 = values;
    this.ow_1 = null;
    var tmp = this;
    tmp.pw_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).bp = function () {
    var tmp0 = this.pw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).cp = function (decoder) {
    var index = decoder.wr(this.bp());
    if (!(0 <= index ? index <= (this.nw_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.bp().gq() + ' enum values, ' + ('values size is ' + this.nw_1.length));
    }
    return this.nw_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.bp().gq() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.qx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.lq(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 3);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.px_1 = ENUM_getInstance();
    var tmp = this;
    tmp.qx_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).hq = function () {
    return this.px_1;
  };
  protoOf(EnumDescriptor).oq = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.hq() === ENUM_getInstance()))
      return false;
    if (!(this.gq() === other.gq()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.gq() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.gq());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.fy_1 = true;
  }
  protoOf(InlineClassDescriptor).iq = function () {
    return this.fy_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gq() === other.gq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.fy_1 && contentEquals(this.rx(), other.rx()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jq() === other.jq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oq(index).gq() === other.oq(index).gq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oq(index).hq(), other.oq(index).hq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.gy_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).hy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.gy_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).bp = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).cp = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.tp(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.jy_1 = OBJECT_getInstance();
    this.ky_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).hq = function () {
    return this.jy_1;
  };
  protoOf(NothingSerialDescriptor).gq = function () {
    return this.ky_1;
  };
  protoOf(NothingSerialDescriptor).jq = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).lq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mq = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).pq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).oq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).nq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ky_1) + imul(31, this.jy_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.ly_1 = serializer;
    this.my_1 = new SerialDescriptorForNullable(this.ly_1.bp());
  }
  protoOf(NullableSerializer).bp = function () {
    return this.my_1;
  };
  protoOf(NullableSerializer).cp = function (decoder) {
    return decoder.lr() ? decoder.zr(this.ly_1) : decoder.mr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.ly_1, other.ly_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.ly_1);
  };
  function SerialDescriptorForNullable(original) {
    this.aq_1 = original;
    this.bq_1 = this.aq_1.gq() + '?';
    this.cq_1 = cachedSerialNames(this.aq_1);
  }
  protoOf(SerialDescriptorForNullable).gq = function () {
    return this.bq_1;
  };
  protoOf(SerialDescriptorForNullable).jr = function () {
    return this.cq_1;
  };
  protoOf(SerialDescriptorForNullable).zp = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.aq_1, other.aq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.aq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.aq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).hq = function () {
    return this.aq_1.hq();
  };
  protoOf(SerialDescriptorForNullable).iq = function () {
    return this.aq_1.iq();
  };
  protoOf(SerialDescriptorForNullable).jq = function () {
    return this.aq_1.jq();
  };
  protoOf(SerialDescriptorForNullable).kq = function () {
    return this.aq_1.kq();
  };
  protoOf(SerialDescriptorForNullable).lq = function (index) {
    return this.aq_1.lq(index);
  };
  protoOf(SerialDescriptorForNullable).mq = function (name) {
    return this.aq_1.mq(name);
  };
  protoOf(SerialDescriptorForNullable).nq = function (index) {
    return this.aq_1.nq(index);
  };
  protoOf(SerialDescriptorForNullable).oq = function (index) {
    return this.aq_1.oq(index);
  };
  protoOf(SerialDescriptorForNullable).pq = function (index) {
    return this.aq_1.pq(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.hp_1 = this$0.oy_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.bp();
    }, 1, 0, 4);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.ny_1 = objectInstance;
    this.oy_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.py_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).bp = function () {
    var tmp0 = this.py_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).cp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bp();
    var composite = decoder.as(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.qs()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.rs(this.bp());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.bs(descriptor);
    return this.ny_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.qj_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.qj_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.jr();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.jq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.jq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.lq(i);
        result.b1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.lq(i);
          missingFields.b1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.gq());
  }
  function throwArrayMissingFieldException(seenArray, goldenMaskArray, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var inductionVariable = 0;
    var last = goldenMaskArray.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var maskSlot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var missingFieldsBits = goldenMaskArray[maskSlot] & ~seenArray[maskSlot];
        if (!(missingFieldsBits === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 32)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((missingFieldsBits & 1) === 0)) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element = descriptor.lq(imul(maskSlot, 32) + i | 0);
                missingFields.b1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.gq());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.zw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.bx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.uw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.uw_1[i];
        indices.u2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.rw_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hy();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 5);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.rw_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.iy();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.bp();
          destination.b1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.rx();
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.rx());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.qw_1 = serialName;
    this.rw_1 = generatedSerializer;
    this.sw_1 = elementsCount;
    this.tw_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.sw_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.uw_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.sw_1;
    tmp_3.vw_1 = Array(size);
    this.ww_1 = null;
    this.xw_1 = booleanArray(this.sw_1);
    this.yw_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.zw_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ax_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.bx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).gq = function () {
    return this.qw_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).jq = function () {
    return this.sw_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).hq = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).kq = function () {
    var tmp0_elvis_lhs = this.ww_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).jr = function () {
    return this.yw_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).rx = function () {
    var tmp0 = this.ax_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).sx = function (name, isOptional) {
    this.tw_1 = this.tw_1 + 1 | 0;
    this.uw_1[this.tw_1] = name;
    this.xw_1[this.tw_1] = isOptional;
    this.vw_1[this.tw_1] = null;
    if (this.tw_1 === (this.sw_1 - 1 | 0)) {
      this.yw_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).cx = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.sx(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.sx.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).oq = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).bp();
  };
  protoOf(PluginGeneratedSerialDescriptor).pq = function (index) {
    return getChecked_0(this.xw_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).nq = function (index) {
    var tmp0_elvis_lhs = getChecked(this.vw_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).lq = function (index) {
    return getChecked(this.uw_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).mq = function (name) {
    var tmp0_elvis_lhs = this.yw_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.gq() === other.gq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.rx(), other.rx())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.jq() === other.jq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.jq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oq(index).gq() === other.oq(index).gq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oq(index).hq(), other.oq(index).hq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.gq());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.gq();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.hq();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.jq());
    var tmp_0 = _this__u8e3s4.gq() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.lq(i) + ': ' + $this_toStringImpl.oq(i).gq();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).ty = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  protoOf(CharArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.ty((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).dw = function () {
    return charArray(0);
  };
  protoOf(CharArraySerializer_0).uy = function (decoder, index, builder, checkIndex) {
    builder.xy(decoder.js(this.vv_1, index));
  };
  protoOf(CharArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.uy(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.uy(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).az = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  protoOf(DoubleArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.az((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).dw = function () {
    return new Float64Array(0);
  };
  protoOf(DoubleArraySerializer_0).bz = function (decoder, index, builder, checkIndex) {
    builder.ez(decoder.is(this.vv_1, index));
  };
  protoOf(DoubleArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.bz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.bz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).hz = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  protoOf(FloatArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.hz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).dw = function () {
    return new Float32Array(0);
  };
  protoOf(FloatArraySerializer_0).iz = function (decoder, index, builder, checkIndex) {
    builder.lz(decoder.hs(this.vv_1, index));
  };
  protoOf(FloatArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_3()));
  }
  protoOf(LongArraySerializer_0).oz = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  protoOf(LongArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.oz((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).dw = function () {
    return longArray(0);
  };
  protoOf(LongArraySerializer_0).pz = function (decoder, index, builder, checkIndex) {
    builder.sz(decoder.gs(this.vv_1, index));
  };
  protoOf(LongArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.pz(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_4()));
  }
  protoOf(ULongArraySerializer_0).vz = function (_this__u8e3s4) {
    return new ULongArrayBuilder(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.vz(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.qo_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).wz = function () {
    return _ULongArray___init__impl__twm1l3(0);
  };
  protoOf(ULongArraySerializer_0).dw = function () {
    return new ULongArray(this.wz());
  };
  protoOf(ULongArraySerializer_0).xz = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.ls(this.vv_1, index).rr();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.a10(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.xz(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.xz(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).d10 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  protoOf(IntArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.d10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).dw = function () {
    return new Int32Array(0);
  };
  protoOf(IntArraySerializer_0).e10 = function (decoder, index, builder, checkIndex) {
    builder.h10(decoder.fs(this.vv_1, index));
  };
  protoOf(IntArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.e10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.e10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_5()));
  }
  protoOf(UIntArraySerializer_0).k10 = function (_this__u8e3s4) {
    return new UIntArrayBuilder(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.k10(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.go_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).l10 = function () {
    return _UIntArray___init__impl__ghjpc6(0);
  };
  protoOf(UIntArraySerializer_0).dw = function () {
    return new UIntArray(this.l10());
  };
  protoOf(UIntArraySerializer_0).m10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.ls(this.vv_1, index).qr();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.p10(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.m10(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).s10 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(ShortArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.s10((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).dw = function () {
    return new Int16Array(0);
  };
  protoOf(ShortArraySerializer_0).t10 = function (decoder, index, builder, checkIndex) {
    builder.w10(decoder.es(this.vv_1, index));
  };
  protoOf(ShortArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_6()));
  }
  protoOf(UShortArraySerializer_0).z10 = function (_this__u8e3s4) {
    return new UShortArrayBuilder(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.z10(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.ap_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).a11 = function () {
    return _UShortArray___init__impl__9b26ef(0);
  };
  protoOf(UShortArraySerializer_0).dw = function () {
    return new UShortArray(this.a11());
  };
  protoOf(UShortArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.ls(this.vv_1, index).pr();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.e11(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).h11 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(ByteArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.h11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).dw = function () {
    return new Int8Array(0);
  };
  protoOf(ByteArraySerializer_0).i11 = function (decoder, index, builder, checkIndex) {
    builder.l11(decoder.ds(this.vv_1, index));
  };
  protoOf(ByteArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.i11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.i11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_7()));
  }
  protoOf(UByteArraySerializer_0).o11 = function (_this__u8e3s4) {
    return new UByteArrayBuilder(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.o11(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.wn_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).p11 = function () {
    return _UByteArray___init__impl__ip4y9n(0);
  };
  protoOf(UByteArraySerializer_0).dw = function () {
    return new UByteArray(this.p11());
  };
  protoOf(UByteArraySerializer_0).q11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.ls(this.vv_1, index).or();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.t11(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.q11(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.q11(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).w11 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  protoOf(BooleanArraySerializer_0).zt = function (_this__u8e3s4) {
    return this.w11((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).dw = function () {
    return booleanArray(0);
  };
  protoOf(BooleanArraySerializer_0).x11 = function (decoder, index, builder, checkIndex) {
    builder.a12(decoder.cs(this.vv_1, index));
  };
  protoOf(BooleanArraySerializer_0).gu = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).ew = function (decoder, index, builder, checkIndex) {
    return this.x11(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.vy_1 = bufferWithData;
    this.wy_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(CharArrayBuilder).xv = function () {
    return this.wy_1;
  };
  protoOf(CharArrayBuilder).bw = function (requiredCapacity) {
    if (this.vy_1.length < requiredCapacity)
      this.vy_1 = copyOf(this.vy_1, coerceAtLeast(requiredCapacity, imul(this.vy_1.length, 2)));
  };
  protoOf(CharArrayBuilder).xy = function (c) {
    this.fw();
    var tmp = this.vy_1;
    var _unary__edvuaz = this.wy_1;
    this.wy_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).zv = function () {
    return copyOf(this.vy_1, this.wy_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.cz_1 = bufferWithData;
    this.dz_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(DoubleArrayBuilder).xv = function () {
    return this.dz_1;
  };
  protoOf(DoubleArrayBuilder).bw = function (requiredCapacity) {
    if (this.cz_1.length < requiredCapacity)
      this.cz_1 = copyOf_0(this.cz_1, coerceAtLeast(requiredCapacity, imul(this.cz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).ez = function (c) {
    this.fw();
    var tmp = this.cz_1;
    var _unary__edvuaz = this.dz_1;
    this.dz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).zv = function () {
    return copyOf_0(this.cz_1, this.dz_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.jz_1 = bufferWithData;
    this.kz_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(FloatArrayBuilder).xv = function () {
    return this.kz_1;
  };
  protoOf(FloatArrayBuilder).bw = function (requiredCapacity) {
    if (this.jz_1.length < requiredCapacity)
      this.jz_1 = copyOf_1(this.jz_1, coerceAtLeast(requiredCapacity, imul(this.jz_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).lz = function (c) {
    this.fw();
    var tmp = this.jz_1;
    var _unary__edvuaz = this.kz_1;
    this.kz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).zv = function () {
    return copyOf_1(this.jz_1, this.kz_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.qz_1 = bufferWithData;
    this.rz_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(LongArrayBuilder).xv = function () {
    return this.rz_1;
  };
  protoOf(LongArrayBuilder).bw = function (requiredCapacity) {
    if (this.qz_1.length < requiredCapacity)
      this.qz_1 = copyOf_2(this.qz_1, coerceAtLeast(requiredCapacity, imul(this.qz_1.length, 2)));
  };
  protoOf(LongArrayBuilder).sz = function (c) {
    this.fw();
    var tmp = this.qz_1;
    var _unary__edvuaz = this.rz_1;
    this.rz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).zv = function () {
    return copyOf_2(this.qz_1, this.rz_1);
  };
  function ULongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.yz_1 = bufferWithData;
    this.zz_1 = _ULongArray___get_size__impl__ju6dtr(bufferWithData);
    this.bw(10);
  }
  protoOf(ULongArrayBuilder).xv = function () {
    return this.zz_1;
  };
  protoOf(ULongArrayBuilder).bw = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.yz_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.yz_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.yz_1), 2));
      tmp.yz_1 = _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).a10 = function (c) {
    this.fw();
    var tmp = this.yz_1;
    var _unary__edvuaz = this.zz_1;
    this.zz_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).b12 = function () {
    var tmp0 = this.yz_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.zz_1;
    return _ULongArray___init__impl__twm1l3_0(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).zv = function () {
    return new ULongArray(this.b12());
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.f10_1 = bufferWithData;
    this.g10_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(IntArrayBuilder).xv = function () {
    return this.g10_1;
  };
  protoOf(IntArrayBuilder).bw = function (requiredCapacity) {
    if (this.f10_1.length < requiredCapacity)
      this.f10_1 = copyOf_3(this.f10_1, coerceAtLeast(requiredCapacity, imul(this.f10_1.length, 2)));
  };
  protoOf(IntArrayBuilder).h10 = function (c) {
    this.fw();
    var tmp = this.f10_1;
    var _unary__edvuaz = this.g10_1;
    this.g10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).zv = function () {
    return copyOf_3(this.f10_1, this.g10_1);
  };
  function UIntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.n10_1 = bufferWithData;
    this.o10_1 = _UIntArray___get_size__impl__r6l8ci(bufferWithData);
    this.bw(10);
  }
  protoOf(UIntArrayBuilder).xv = function () {
    return this.o10_1;
  };
  protoOf(UIntArrayBuilder).bw = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.n10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.n10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.n10_1), 2));
      tmp.n10_1 = _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).p10 = function (c) {
    this.fw();
    var tmp = this.n10_1;
    var _unary__edvuaz = this.o10_1;
    this.o10_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).c12 = function () {
    var tmp0 = this.n10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.o10_1;
    return _UIntArray___init__impl__ghjpc6_0(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).zv = function () {
    return new UIntArray(this.c12());
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.u10_1 = bufferWithData;
    this.v10_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(ShortArrayBuilder).xv = function () {
    return this.v10_1;
  };
  protoOf(ShortArrayBuilder).bw = function (requiredCapacity) {
    if (this.u10_1.length < requiredCapacity)
      this.u10_1 = copyOf_4(this.u10_1, coerceAtLeast(requiredCapacity, imul(this.u10_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).w10 = function (c) {
    this.fw();
    var tmp = this.u10_1;
    var _unary__edvuaz = this.v10_1;
    this.v10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).zv = function () {
    return copyOf_4(this.u10_1, this.v10_1);
  };
  function UShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = _UShortArray___get_size__impl__jqto1b(bufferWithData);
    this.bw(10);
  }
  protoOf(UShortArrayBuilder).xv = function () {
    return this.d11_1;
  };
  protoOf(UShortArrayBuilder).bw = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.c11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.c11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.c11_1), 2));
      tmp.c11_1 = _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).e11 = function (c) {
    this.fw();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).d12 = function () {
    var tmp0 = this.c11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.d11_1;
    return _UShortArray___init__impl__9b26ef_0(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).zv = function () {
    return new UShortArray(this.d12());
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j11_1 = bufferWithData;
    this.k11_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(ByteArrayBuilder).xv = function () {
    return this.k11_1;
  };
  protoOf(ByteArrayBuilder).bw = function (requiredCapacity) {
    if (this.j11_1.length < requiredCapacity)
      this.j11_1 = copyOf_5(this.j11_1, coerceAtLeast(requiredCapacity, imul(this.j11_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).l11 = function (c) {
    this.fw();
    var tmp = this.j11_1;
    var _unary__edvuaz = this.k11_1;
    this.k11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).zv = function () {
    return copyOf_5(this.j11_1, this.k11_1);
  };
  function UByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r11_1 = bufferWithData;
    this.s11_1 = _UByteArray___get_size__impl__h6pkdv(bufferWithData);
    this.bw(10);
  }
  protoOf(UByteArrayBuilder).xv = function () {
    return this.s11_1;
  };
  protoOf(UByteArrayBuilder).bw = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.r11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.r11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.r11_1), 2));
      tmp.r11_1 = _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).t11 = function (c) {
    this.fw();
    var tmp = this.r11_1;
    var _unary__edvuaz = this.s11_1;
    this.s11_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).e12 = function () {
    var tmp0 = this.r11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.s11_1;
    return _UByteArray___init__impl__ip4y9n_0(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).zv = function () {
    return new UByteArray(this.e12());
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y11_1 = bufferWithData;
    this.z11_1 = bufferWithData.length;
    this.bw(10);
  }
  protoOf(BooleanArrayBuilder).xv = function () {
    return this.z11_1;
  };
  protoOf(BooleanArrayBuilder).bw = function (requiredCapacity) {
    if (this.y11_1.length < requiredCapacity)
      this.y11_1 = copyOf_6(this.y11_1, coerceAtLeast(requiredCapacity, imul(this.y11_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).a12 = function (c) {
    this.fw();
    var tmp = this.y11_1;
    var _unary__edvuaz = this.z11_1;
    this.z11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).zv = function () {
    return copyOf_6(this.y11_1, this.z11_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.f12_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).bp = function () {
    return this.f12_1;
  };
  protoOf(StringSerializer).cp = function (decoder) {
    return decoder.vr();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.g12_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).bp = function () {
    return this.g12_1;
  };
  protoOf(IntSerializer).cp = function (decoder) {
    return decoder.qr();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.h12_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).bp = function () {
    return this.h12_1;
  };
  protoOf(BooleanSerializer).cp = function (decoder) {
    return decoder.nr();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.i12_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).bp = function () {
    return this.i12_1;
  };
  protoOf(FloatSerializer).cp = function (decoder) {
    return decoder.sr();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.j12_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).bp = function () {
    return this.j12_1;
  };
  protoOf(LongSerializer).cp = function (decoder) {
    return decoder.rr();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().n2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.k12_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.k12_1 = serialName;
    this.l12_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).gq = function () {
    return this.k12_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).hq = function () {
    return this.l12_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).jq = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).lq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).mq = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).pq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).oq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).nq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.k12_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.k12_1 === other.k12_1 && equals(this.l12_1, other.l12_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.k12_1) + imul(31, this.l12_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.bp().gq();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.m12_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).bp = function () {
    return this.m12_1;
  };
  protoOf(ByteSerializer).cp = function (decoder) {
    return decoder.or();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.n12_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).bp = function () {
    return this.n12_1;
  };
  protoOf(ShortSerializer).cp = function (decoder) {
    return decoder.pr();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.o12_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).bp = function () {
    return this.o12_1;
  };
  protoOf(CharSerializer).p12 = function (decoder) {
    return decoder.ur();
  };
  protoOf(CharSerializer).cp = function (decoder) {
    return new Char(this.p12(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.q12_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).bp = function () {
    return this.q12_1;
  };
  protoOf(DoubleSerializer).cp = function (decoder) {
    return decoder.tr();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.r12_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).bp = function () {
    return this.r12_1.bp();
  };
  protoOf(UnitSerializer).s12 = function (decoder) {
    this.r12_1.cp(decoder);
  };
  protoOf(UnitSerializer).cp = function (decoder) {
    this.s12(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).v12 = function (_this__u8e3s4, index) {
    return this.x12(this.w12(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).x12 = function (nestedName) {
    var tmp0_elvis_lhs = this.a13();
    return this.b13(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).w12 = function (descriptor, index) {
    return descriptor.lq(index);
  };
  protoOf(NamedValueDecoder).b13 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).c13 = function () {
    return this.y12_1.r() ? '$' : joinToString(this.y12_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.q13(tag);
    var r = block();
    if (!$this.z12_1) {
      $this.r13();
    }
    $this.z12_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.yr($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.bp().zp();
      var tmp;
      if (isNullabilitySupported || tmp0.lr()) {
        tmp = this$0.yr($deserializer, $previousValue);
      } else {
        tmp = tmp0.mr();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.y12_1 = ArrayList_init_$Create$_0();
    this.z12_1 = false;
  }
  protoOf(TaggedDecoder).ps = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).d13 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).e13 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).f13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).i13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).j13 = function (tag) {
    var tmp = this.d13(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).k13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).l13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).m13 = function (tag) {
    var tmp = this.d13(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).n13 = function (tag) {
    var tmp = this.d13(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).o13 = function (tag, enumDescriptor) {
    var tmp = this.d13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).p13 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.q13(tag);
    return this;
  };
  protoOf(TaggedDecoder).yr = function (deserializer, previousValue) {
    return this.zr(deserializer);
  };
  protoOf(TaggedDecoder).xr = function (descriptor) {
    return this.p13(this.r13(), descriptor);
  };
  protoOf(TaggedDecoder).lr = function () {
    var tmp0_elvis_lhs = this.a13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.e13(currentTag);
  };
  protoOf(TaggedDecoder).mr = function () {
    return null;
  };
  protoOf(TaggedDecoder).nr = function () {
    return this.f13(this.r13());
  };
  protoOf(TaggedDecoder).or = function () {
    return this.g13(this.r13());
  };
  protoOf(TaggedDecoder).pr = function () {
    return this.h13(this.r13());
  };
  protoOf(TaggedDecoder).qr = function () {
    return this.i13(this.r13());
  };
  protoOf(TaggedDecoder).rr = function () {
    return this.j13(this.r13());
  };
  protoOf(TaggedDecoder).sr = function () {
    return this.k13(this.r13());
  };
  protoOf(TaggedDecoder).tr = function () {
    return this.l13(this.r13());
  };
  protoOf(TaggedDecoder).ur = function () {
    return this.m13(this.r13());
  };
  protoOf(TaggedDecoder).vr = function () {
    return this.n13(this.r13());
  };
  protoOf(TaggedDecoder).wr = function (enumDescriptor) {
    return this.o13(this.r13(), enumDescriptor);
  };
  protoOf(TaggedDecoder).as = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).bs = function (descriptor) {
  };
  protoOf(TaggedDecoder).cs = function (descriptor, index) {
    return this.f13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).ds = function (descriptor, index) {
    return this.g13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).es = function (descriptor, index) {
    return this.h13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).fs = function (descriptor, index) {
    return this.i13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).gs = function (descriptor, index) {
    return this.j13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).hs = function (descriptor, index) {
    return this.k13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).is = function (descriptor, index) {
    return this.l13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).js = function (descriptor, index) {
    return this.m13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).ks = function (descriptor, index) {
    return this.n13(this.v12(descriptor, index));
  };
  protoOf(TaggedDecoder).ls = function (descriptor, index) {
    return this.p13(this.v12(descriptor, index), descriptor.oq(index));
  };
  protoOf(TaggedDecoder).ms = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v12(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).os = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.v12(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).a13 = function () {
    return lastOrNull(this.y12_1);
  };
  protoOf(TaggedDecoder).q13 = function (name) {
    this.y12_1.b1(name);
  };
  protoOf(TaggedDecoder).r13 = function () {
    var r = this.y12_1.t2(get_lastIndex_0(this.y12_1));
    this.z12_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.s13_1 = key;
    this.t13_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.s13_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.t13_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.s13_1) + ', value=' + toString_0(this.t13_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.s13_1 == null ? 0 : hashCode(this.s13_1);
    result = imul(result, 31) + (this.t13_1 == null ? 0 : hashCode(this.t13_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.s13_1, other.s13_1))
      return false;
    if (!equals(this.t13_1, other.t13_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.np('key', $keySerializer.bp());
      $this$buildSerialDescriptor.np('value', $valueSerializer.bp());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.w13_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).bp = function () {
    return this.w13_1;
  };
  protoOf(MapEntrySerializer_0).x13 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.np('first', $keySerializer.bp());
      $this$buildClassSerialDescriptor.np('second', $valueSerializer.bp());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.c14_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).bp = function () {
    return this.c14_1;
  };
  protoOf(PairSerializer_0).x13 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.ns($this.g14_1, 0, $this.d14_1);
    var b = composite.ns($this.g14_1, 1, $this.e14_1);
    var c = composite.ns($this.g14_1, 2, $this.f14_1);
    composite.bs($this.g14_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.rs($this.g14_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.ns($this.g14_1, 0, $this.d14_1);
          break;
        case 1:
          b = composite.ns($this.g14_1, 1, $this.e14_1);
          break;
        case 2:
          c = composite.ns($this.g14_1, 2, $this.f14_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.bs($this.g14_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.np('first', this$0.d14_1.bp());
      $this$buildClassSerialDescriptor.np('second', this$0.e14_1.bp());
      $this$buildClassSerialDescriptor.np('third', this$0.f14_1.bp());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.d14_1 = aSerializer;
    this.e14_1 = bSerializer;
    this.f14_1 = cSerializer;
    var tmp = this;
    tmp.g14_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).bp = function () {
    return this.g14_1;
  };
  protoOf(TripleSerializer_0).cp = function (decoder) {
    var composite = decoder.as(this.g14_1);
    if (composite.qs()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.y13_1 = keySerializer;
    this.z13_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).cp = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.bp();
    var composite = decoder.as(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.qs()) {
        var key = composite.ns(this.bp(), 0, this.y13_1);
        var value = composite.ns(this.bp(), 1, this.z13_1);
        tmp$ret$1 = this.x13(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.rs(this.bp());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.ns(this.bp(), 0, this.y13_1);
            break;
          case 1:
            value_0 = composite.ns(this.bp(), 1, this.z13_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.x13(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.bs(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.h14_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).bp = function () {
    return this.h14_1;
  };
  protoOf(ULongSerializer).i14 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.xr(this.h14_1).rr();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).cp = function (decoder) {
    return new ULong(this.i14(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.j14_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).bp = function () {
    return this.j14_1;
  };
  protoOf(UIntSerializer).k14 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.xr(this.j14_1).qr();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).cp = function (decoder) {
    return new UInt(this.k14(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.l14_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).bp = function () {
    return this.l14_1;
  };
  protoOf(UByteSerializer).m14 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.xr(this.l14_1).or();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).cp = function (decoder) {
    return new UByte(this.m14(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.n14_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).bp = function () {
    return this.n14_1;
  };
  protoOf(UShortSerializer).o14 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.xr(this.n14_1).pr();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).cp = function (decoder) {
    return new UShort(this.o14(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).vp = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.wp(kClass, typeArgumentsSerializers) : $super.wp.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.q14_1 = class2ContextualFactory;
    this.r14_1 = polyBase2Serializers;
    this.s14_1 = polyBase2DefaultSerializerProvider;
    this.t14_1 = polyBase2NamedSerializers;
    this.u14_1 = polyBase2DefaultDeserializerProvider;
    this.v14_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).up = function () {
    return this.v14_1;
  };
  protoOf(SerialModuleImpl).ts = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.t14_1.n2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).n2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.u14_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).wp = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.q14_1.n2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w14(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).p14 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.q14_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.z14_1;
        collector.a15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.y14(kclass, serial.x14_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.r14_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.b15(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.s14_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.c15(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.u14_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.d15(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.z14_1 = serializer;
  }
  protoOf(Argless).w14 = function (typeArgumentsSerializers) {
    return this.z14_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.z14_1, this.z14_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.z14_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.x14_1 = provider;
  }
  protoOf(WithTypeArguments).w14 = function (typeArgumentsSerializers) {
    return this.x14_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.e15_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.f15_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.g15_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.h15_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.i15_1 = HashMap_init_$Create$();
    this.j15_1 = false;
  }
  protoOf(SerializersModuleBuilder).a15 = function (kClass, serializer) {
    return this.k15(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).y14 = function (kClass, provider) {
    return this.k15(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).b15 = function (baseClass, actualClass, actualSerializer) {
    this.l15(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).c15 = function (baseClass, defaultSerializerProvider) {
    this.m15(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).d15 = function (baseClass, defaultDeserializerProvider) {
    this.n15(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).o15 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.e15_1.n2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.e15_1.u2(forClass, provider);
    if (isInterface_0(forClass))
      this.j15_1 = true;
  };
  protoOf(SerializersModuleBuilder).k15 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.o15(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.o15.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).m15 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.g15_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.g15_1.u2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).n15 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.i15_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.i15_1.u2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).p15 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.bp().gq();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.f15_1;
    var value = this_0.n2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.u2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.h15_1;
    var value_0 = this_1.n2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.u2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.n2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.v2(previousSerializer.bp().gq());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.n2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.n1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.v2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.u2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.u2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).l15 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.p15(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.p15.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).zv = function () {
    return new SerialModuleImpl(this.e15_1, this.f15_1, this.g15_1, this.h15_1, this.i15_1, this.j15_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.q15_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.q15_1.equals(tmp0_other_with_cast.q15_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.q15_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.q15_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().nb());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.qy(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().ob(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().rb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance_3())), to(get_longArrayClass(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().ib(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().hb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().sb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().gb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().qb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().fb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().fb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.r15_1 = $factory;
  }
  protoOf(createCache$1).xp = function (key) {
    return this.r15_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.s15_1 = $factory;
  }
  protoOf(createParametrizedCache$1).yp = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.s15_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).zp = get_isNullable;
  protoOf(SerialDescriptorImpl).iq = get_isInline;
  protoOf(AbstractDecoder).ns = decodeSerializableElement$default;
  protoOf(AbstractDecoder).zr = decodeSerializableValue;
  protoOf(AbstractDecoder).qs = decodeSequentially;
  protoOf(AbstractDecoder).ss = decodeCollectionSize;
  protoOf(ListLikeDescriptor).zp = get_isNullable;
  protoOf(ListLikeDescriptor).iq = get_isInline;
  protoOf(ListLikeDescriptor).kq = get_annotations;
  protoOf(MapLikeDescriptor).zp = get_isNullable;
  protoOf(MapLikeDescriptor).iq = get_isInline;
  protoOf(MapLikeDescriptor).kq = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).zp = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).iq = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).iy = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).zp = get_isNullable;
  protoOf(NothingSerialDescriptor).iq = get_isInline;
  protoOf(NothingSerialDescriptor).kq = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).zp = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).iq = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).kq = get_annotations;
  protoOf(TaggedDecoder).ns = decodeSerializableElement$default;
  protoOf(TaggedDecoder).zr = decodeSerializableValue;
  protoOf(TaggedDecoder).qs = decodeSequentially;
  protoOf(TaggedDecoder).ss = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = BooleanSerializer_getInstance;
  _.$_$.i = FloatSerializer_getInstance;
  _.$_$.j = IntSerializer_getInstance;
  _.$_$.k = LongSerializer_getInstance;
  _.$_$.l = StringSerializer_getInstance;
  _.$_$.m = SerializationException_init_$Init$_0;
  _.$_$.n = SerializationException_init_$Create$_0;
  _.$_$.o = UnknownFieldException_init_$Create$;
  _.$_$.p = ListSerializer;
  _.$_$.q = MapSerializer;
  _.$_$.r = get_nullable;
  _.$_$.s = serializer_0;
  _.$_$.t = serializer_4;
  _.$_$.u = serializer_2;
  _.$_$.v = serializer_3;
  _.$_$.w = serializer_1;
  _.$_$.x = PolymorphicKind;
  _.$_$.y = PrimitiveKind;
  _.$_$.z = PrimitiveSerialDescriptor;
  _.$_$.a1 = get_annotations;
  _.$_$.b1 = get_isInline;
  _.$_$.c1 = get_isNullable;
  _.$_$.d1 = SerialDescriptor;
  _.$_$.e1 = ENUM;
  _.$_$.f1 = buildClassSerialDescriptor;
  _.$_$.g1 = buildSerialDescriptor;
  _.$_$.h1 = getContextualDescriptor;
  _.$_$.i1 = AbstractDecoder;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = Decoder;
  _.$_$.l1 = AbstractPolymorphicSerializer;
  _.$_$.m1 = ElementMarker;
  _.$_$.n1 = typeParametersSerializers;
  _.$_$.o1 = GeneratedSerializer;
  _.$_$.p1 = InlinePrimitiveDescriptor;
  _.$_$.q1 = NamedValueDecoder;
  _.$_$.r1 = PluginGeneratedSerialDescriptor;
  _.$_$.s1 = ReferenceArraySerializer;
  _.$_$.t1 = SerializerFactory;
  _.$_$.u1 = createSimpleEnumSerializer;
  _.$_$.v1 = jsonCachedSerialNames;
  _.$_$.w1 = missingFieldExceptionWithNewMessage;
  _.$_$.x1 = throwArrayMissingFieldException;
  _.$_$.y1 = throwMissingFieldException;
  _.$_$.z1 = EmptySerializersModule_0;
  _.$_$.a2 = SerializersModuleBuilder;
  _.$_$.b2 = contextual;
  _.$_$.c2 = SerializersModuleCollector;
  _.$_$.d2 = DeserializationStrategy;
  _.$_$.e2 = KSerializer;
  _.$_$.f2 = MissingFieldException;
  _.$_$.g2 = SerializableWith;
  _.$_$.h2 = SerializationException;
  _.$_$.i2 = findPolymorphicSerializer;
  _.$_$.j2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
