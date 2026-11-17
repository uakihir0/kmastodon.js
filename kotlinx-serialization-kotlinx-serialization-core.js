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
  var protoOf = kotlin_kotlin.$_$.rb;
  var initMetadataForInterface = kotlin_kotlin.$_$.wa;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.h2;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var constructCallableReference = kotlin_kotlin.$_$.ka;
  var emptyList = kotlin_kotlin.$_$.l6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.x1;
  var lazy = kotlin_kotlin.$_$.jg;
  var KProperty1 = kotlin_kotlin.$_$.pc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pa;
  var toString = kotlin_kotlin.$_$.ub;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var captureStack = kotlin_kotlin.$_$.ca;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.d4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.f4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.h4;
  var IllegalArgumentException = kotlin_kotlin.$_$.ff;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.r;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.q;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var isInterface = kotlin_kotlin.$_$.hb;
  var KClass = kotlin_kotlin.$_$.mc;
  var Triple = kotlin_kotlin.$_$.of;
  var getKClass = kotlin_kotlin.$_$.kc;
  var Pair = kotlin_kotlin.$_$.jf;
  var Entry = kotlin_kotlin.$_$.g5;
  var KtMap = kotlin_kotlin.$_$.h5;
  var KtMutableMap = kotlin_kotlin.$_$.k5;
  var LinkedHashMap = kotlin_kotlin.$_$.d5;
  var HashMap = kotlin_kotlin.$_$.b5;
  var KtSet = kotlin_kotlin.$_$.m5;
  var KtMutableSet = kotlin_kotlin.$_$.l5;
  var LinkedHashSet = kotlin_kotlin.$_$.e5;
  var HashSet = kotlin_kotlin.$_$.c5;
  var Collection = kotlin_kotlin.$_$.a5;
  var KtList = kotlin_kotlin.$_$.f5;
  var KtMutableList = kotlin_kotlin.$_$.i5;
  var ArrayList = kotlin_kotlin.$_$.z4;
  var copyToArray = kotlin_kotlin.$_$.i6;
  var Result = kotlin_kotlin.$_$.kf;
  var ensureNotNull = kotlin_kotlin.$_$.eg;
  var equals = kotlin_kotlin.$_$.ma;
  var getStringHashCode = kotlin_kotlin.$_$.qa;
  var isBlank = kotlin_kotlin.$_$.gd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g4;
  var toList = kotlin_kotlin.$_$.y7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.a3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g3;
  var toHashSet = kotlin_kotlin.$_$.v7;
  var toBooleanArray = kotlin_kotlin.$_$.t7;
  var withIndex = kotlin_kotlin.$_$.e8;
  var to = kotlin_kotlin.$_$.pg;
  var toMap = kotlin_kotlin.$_$.a8;
  var lazy_0 = kotlin_kotlin.$_$.kg;
  var contentEquals = kotlin_kotlin.$_$.u5;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  var getKClassFromExpression = kotlin_kotlin.$_$.jc;
  var Long = kotlin_kotlin.$_$.hf;
  var Char = kotlin_kotlin.$_$.xe;
  var Companion_getInstance = kotlin_kotlin.$_$.k2;
  var Duration = kotlin_kotlin.$_$.re;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.l2;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.m2;
  var toIntOrNull = kotlin_kotlin.$_$.fe;
  var hashCode = kotlin_kotlin.$_$.ra;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.k4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var isArray = kotlin_kotlin.$_$.za;
  var coerceAtLeast = kotlin_kotlin.$_$.zb;
  var addAll = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.b3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.h3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.m3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.d3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.e3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.j3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.k3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.f3;
  var LinkedHashSet_init_$Create$_1 = kotlin_kotlin.$_$.l3;
  var until = kotlin_kotlin.$_$.ec;
  var step = kotlin_kotlin.$_$.dc;
  var getValue = kotlin_kotlin.$_$.u6;
  var HashMap_init_$Create$_1 = kotlin_kotlin.$_$.c3;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.i3;
  var longArray = kotlin_kotlin.$_$.mb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var get_lastIndex = kotlin_kotlin.$_$.z6;
  var shiftLeft = kotlin_kotlin.$_$.u9;
  var bitwiseOr = kotlin_kotlin.$_$.g9;
  var equalsLong = kotlin_kotlin.$_$.m9;
  var invert = kotlin_kotlin.$_$.o9;
  var countTrailingZeroBits = kotlin_kotlin.$_$.cg;
  var joinToString = kotlin_kotlin.$_$.x6;
  var toString_0 = kotlin_kotlin.$_$.og;
  var KTypeParameter = kotlin_kotlin.$_$.qc;
  var booleanArray = kotlin_kotlin.$_$.ba;
  var emptyMap = kotlin_kotlin.$_$.m6;
  var contentHashCode = kotlin_kotlin.$_$.x5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.n2;
  var isCharArray = kotlin_kotlin.$_$.cb;
  var copyOf = kotlin_kotlin.$_$.c6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.d2;
  var isDoubleArray = kotlin_kotlin.$_$.eb;
  var copyOf_0 = kotlin_kotlin.$_$.e6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.e2;
  var isFloatArray = kotlin_kotlin.$_$.fb;
  var copyOf_1 = kotlin_kotlin.$_$.f6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.p2;
  var isLongArray = kotlin_kotlin.$_$.p9;
  var copyOf_2 = kotlin_kotlin.$_$.a6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.t2;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.l1;
  var ULongArray = kotlin_kotlin.$_$.tf;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.m1;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.j1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.g1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.f2;
  var isIntArray = kotlin_kotlin.$_$.gb;
  var copyOf_3 = kotlin_kotlin.$_$.h6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.s2;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.e1;
  var UIntArray = kotlin_kotlin.$_$.rf;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.f1;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.c1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.z;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.g2;
  var isShortArray = kotlin_kotlin.$_$.jb;
  var copyOf_4 = kotlin_kotlin.$_$.z5;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.u2;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.s1;
  var UShortArray = kotlin_kotlin.$_$.vf;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.t1;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.q1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.n1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.c2;
  var isByteArray = kotlin_kotlin.$_$.bb;
  var copyOf_5 = kotlin_kotlin.$_$.d6;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.r2;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.x;
  var UByteArray = kotlin_kotlin.$_$.pf;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.y;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.s;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.b2;
  var isBooleanArray = kotlin_kotlin.$_$.ab;
  var copyOf_6 = kotlin_kotlin.$_$.b6;
  var charArray = kotlin_kotlin.$_$.ea;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.i1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.k1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.b1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.d1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.p1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.r1;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.v;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.w;
  var trimIndent = kotlin_kotlin.$_$.oe;
  var charSequenceLength = kotlin_kotlin.$_$.ha;
  var lastOrNull = kotlin_kotlin.$_$.b7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.a7;
  var ULong = kotlin_kotlin.$_$.uf;
  var UInt = kotlin_kotlin.$_$.sf;
  var UByte = kotlin_kotlin.$_$.qf;
  var UShort = kotlin_kotlin.$_$.wf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.lg;
  var asSequence = kotlin_kotlin.$_$.r5;
  var get_js = kotlin_kotlin.$_$.lb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.j2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.w6;
  var get_indices_0 = kotlin_kotlin.$_$.v6;
  var Unit = kotlin_kotlin.$_$.xf;
  var Instant = kotlin_kotlin.$_$.se;
  var Uuid = kotlin_kotlin.$_$.ue;
  var mapOf = kotlin_kotlin.$_$.g7;
  var Companion_instance = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.dg;
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
    return deserializer.op(this);
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
    return $super === VOID ? this.ys(descriptor, index, deserializer, previousValue) : $super.ys.call(this, descriptor, index, deserializer, previousValue);
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
    return this.q15(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.xp('type', serializer_0(StringCompanionObject_instance).np());
      $this$buildSerialDescriptor.xp('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.yp_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.rp_1 = this$0.zp_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.yp_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.np();
    }, 1, 0, 1);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.yp_1 = baseClass;
    this.zp_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.aq_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).bq = function () {
    return this.yp_1;
  };
  protoOf(PolymorphicSerializer).np = function () {
    var tmp0 = this.aq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.yp_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.cq(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.bq());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
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
    this.dq_1 = missingFields;
    this.eq_1 = serialName;
  }
  protoOf(MissingFieldException).fq = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.dq_1, this.eq_1);
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
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.hq(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.gq()) {
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
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.hq(rootClass) : tmp0_elvis_lhs;
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
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.iq(rootClass, serializers) : tmp3_elvis_lhs;
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
        destination.c1(tmp$ret$2);
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
        destination_0.c1(tmp$ret$5);
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
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().jq(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().jq(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().kq(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().kq(clazz, types);
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
    if (_this__u8e3s4.np().lq()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.hq(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.np();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.qq_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.mq_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.pq_1 = original;
    this.qq_1 = kClass;
    this.rq_1 = this.pq_1.sq() + '<' + this.qq_1.o() + '>';
  }
  protoOf(ContextDescriptor).sq = function () {
    return this.rq_1;
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
    return equals(this.pq_1, another.pq_1) && another.qq_1.equals(this.qq_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.qq_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.rq_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.qq_1) + ', original: ' + toString(this.pq_1) + ')';
  };
  protoOf(ContextDescriptor).tq = function () {
    return this.pq_1.tq();
  };
  protoOf(ContextDescriptor).lq = function () {
    return this.pq_1.lq();
  };
  protoOf(ContextDescriptor).uq = function () {
    return this.pq_1.uq();
  };
  protoOf(ContextDescriptor).vq = function () {
    return this.pq_1.vq();
  };
  protoOf(ContextDescriptor).wq = function () {
    return this.pq_1.wq();
  };
  protoOf(ContextDescriptor).xq = function (index) {
    return this.pq_1.xq(index);
  };
  protoOf(ContextDescriptor).yq = function (name) {
    return this.pq_1.yq(name);
  };
  protoOf(ContextDescriptor).zq = function (index) {
    return this.pq_1.zq(index);
  };
  protoOf(ContextDescriptor).ar = function (index) {
    return this.pq_1.ar(index);
  };
  protoOf(ContextDescriptor).br = function (index) {
    return this.pq_1.br(index);
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
    this.dr_1 = $this_elementNames;
    this.cr_1 = $this_elementNames.vq();
  }
  protoOf(elementNames$1).u = function () {
    return this.cr_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.dr_1.vq();
    var _unary__edvuaz = this.cr_1;
    this.cr_1 = _unary__edvuaz - 1 | 0;
    return this.dr_1.xq(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.er_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.er_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.gr_1 = $this_elementDescriptors;
    this.fr_1 = $this_elementDescriptors.vq();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.fr_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.gr_1.vq();
    var _unary__edvuaz = this.fr_1;
    this.fr_1 = _unary__edvuaz - 1 | 0;
    return this.gr_1.ar(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.hr_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.hr_1);
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
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.sp_1.e1(), toList(typeParameters), sdBuilder);
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
    this.pp_1 = serialName;
    this.qp_1 = false;
    this.rp_1 = emptyList();
    this.sp_1 = ArrayList_init_$Create$_0();
    this.tp_1 = HashSet_init_$Create$();
    this.up_1 = ArrayList_init_$Create$_0();
    this.vp_1 = ArrayList_init_$Create$_0();
    this.wp_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).ir = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.tp_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.pp_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.sp_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.up_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.vp_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.wp_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).xp = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.ir(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.ir.call(this, elementName, descriptor, annotations, isOptional);
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
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.sp_1.e1(), toList(typeParameters), sdBuilder);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.ur_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.tr_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 2);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.jr_1 = serialName;
    this.kr_1 = kind;
    this.lr_1 = elementsCount;
    this.mr_1 = builder.rp_1;
    this.nr_1 = toHashSet(builder.sp_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.sp_1;
    tmp.or_1 = copyToArray(this_0);
    this.pr_1 = compactArray(builder.up_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.vp_1;
    tmp_0.qr_1 = copyToArray(this_1);
    this.rr_1 = toBooleanArray(builder.wp_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.or_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.rf_1, item.qf_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.sr_1 = toMap(destination);
    this.tr_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ur_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).sq = function () {
    return this.jr_1;
  };
  protoOf(SerialDescriptorImpl).tq = function () {
    return this.kr_1;
  };
  protoOf(SerialDescriptorImpl).vq = function () {
    return this.lr_1;
  };
  protoOf(SerialDescriptorImpl).wq = function () {
    return this.mr_1;
  };
  protoOf(SerialDescriptorImpl).vr = function () {
    return this.nr_1;
  };
  protoOf(SerialDescriptorImpl).xq = function (index) {
    return getChecked(this.or_1, index);
  };
  protoOf(SerialDescriptorImpl).yq = function (name) {
    var tmp0_elvis_lhs = this.sr_1.s2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).zq = function (index) {
    return getChecked(this.qr_1, index);
  };
  protoOf(SerialDescriptorImpl).ar = function (index) {
    return getChecked(this.pr_1, index);
  };
  protoOf(SerialDescriptorImpl).br = function (index) {
    return getChecked_0(this.rr_1, index);
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
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.tr_1, other.tr_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vq() === other.vq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ar(index).sq() === other.ar(index).sq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ar(index).tq(), other.ar(index).tq())) {
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
  protoOf(AbstractDecoder).wr = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).xr = function () {
    return true;
  };
  protoOf(AbstractDecoder).yr = function () {
    return null;
  };
  protoOf(AbstractDecoder).zr = function () {
    var tmp = this.wr();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).as = function () {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).bs = function () {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).cs = function () {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ds = function () {
    var tmp = this.wr();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).es = function () {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).fs = function () {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).gs = function () {
    var tmp = this.wr();
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).hs = function () {
    var tmp = this.wr();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).is = function (enumDescriptor) {
    var tmp = this.wr();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).js = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ks = function (deserializer, previousValue) {
    return this.ls(deserializer);
  };
  protoOf(AbstractDecoder).ms = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).ns = function (descriptor) {
  };
  protoOf(AbstractDecoder).os = function (descriptor, index) {
    return this.zr();
  };
  protoOf(AbstractDecoder).ps = function (descriptor, index) {
    return this.as();
  };
  protoOf(AbstractDecoder).qs = function (descriptor, index) {
    return this.bs();
  };
  protoOf(AbstractDecoder).rs = function (descriptor, index) {
    return this.cs();
  };
  protoOf(AbstractDecoder).ss = function (descriptor, index) {
    return this.ds();
  };
  protoOf(AbstractDecoder).ts = function (descriptor, index) {
    return this.es();
  };
  protoOf(AbstractDecoder).us = function (descriptor, index) {
    return this.fs();
  };
  protoOf(AbstractDecoder).vs = function (descriptor, index) {
    return this.gs();
  };
  protoOf(AbstractDecoder).ws = function (descriptor, index) {
    return this.hs();
  };
  protoOf(AbstractDecoder).xs = function (descriptor, index) {
    return this.js(descriptor.ar(index));
  };
  protoOf(AbstractDecoder).ys = function (descriptor, index, deserializer, previousValue) {
    return this.ks(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).at = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.np().lq();
    var tmp;
    if (isNullabilitySupported || this.xr()) {
      tmp = this.ks(deserializer, previousValue);
    } else {
      tmp = this.yr();
    }
    return tmp;
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.ws($this.np(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    return compositeDecoder.zs($this.np(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).op = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.np();
    var composite = decoder.ms(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.ct()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.dt(this.np());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.ws(this.np(), index);
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
            value = composite.zs(this.np(), index, serializer);
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
    composite.ns(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).cq = function (decoder, klassName) {
    return decoder.bt().ft(this.bq(), klassName);
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.gt_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).np = function () {
    return this.gt_1;
  };
  protoOf(NothingSerializer_0).op = function (decoder) {
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
    this.ht_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).np = function () {
    return this.ht_1;
  };
  protoOf(DurationSerializer).it = function (decoder) {
    return Companion_getInstance().bm(decoder.hs());
  };
  protoOf(DurationSerializer).op = function (decoder) {
    return new Duration(this.it(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.jt_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).np = function () {
    return this.jt_1;
  };
  protoOf(InstantSerializer).op = function (decoder) {
    return Companion_getInstance_0().om(decoder.hs());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.kt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).np = function () {
    return this.kt_1;
  };
  protoOf(UuidSerializer).op = function (decoder) {
    return Companion_getInstance_1().un(decoder.hs());
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
  protoOf(ArrayClassDesc).sq = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).sq = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).sq = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).sq = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.nt_1 = elementDescriptor;
    this.ot_1 = 1;
  }
  protoOf(ListLikeDescriptor).tq = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).vq = function () {
    return this.ot_1;
  };
  protoOf(ListLikeDescriptor).xq = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return index.toString();
  };
  protoOf(ListLikeDescriptor).yq = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(ListLikeDescriptor).br = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return false;
  };
  protoOf(ListLikeDescriptor).zq = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ar = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return this.nt_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.nt_1, other.nt_1) && this.sq() === other.sq())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.nt_1), 31) + getStringHashCode(this.sq()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.sq() + '(' + toString(this.nt_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.vt_1 = serialName;
    this.wt_1 = keyDescriptor;
    this.xt_1 = valueDescriptor;
    this.yt_1 = 2;
  }
  protoOf(MapLikeDescriptor).sq = function () {
    return this.vt_1;
  };
  protoOf(MapLikeDescriptor).tq = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).vq = function () {
    return this.yt_1;
  };
  protoOf(MapLikeDescriptor).xq = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return index.toString();
  };
  protoOf(MapLikeDescriptor).yq = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(MapLikeDescriptor).br = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return false;
  };
  protoOf(MapLikeDescriptor).zq = function (index) {
    requireNonNegativeIndex(index, this.sq());
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ar = function (index) {
    requireNonNegativeIndex(index, this.sq());
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.wt_1;
        break;
      case 1:
        tmp = this.xt_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.sq() === other.sq()))
      return false;
    if (!equals(this.wt_1, other.wt_1))
      return false;
    if (!equals(this.xt_1, other.xt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.sq());
    result = imul(31, result) + hashCode(this.wt_1) | 0;
    result = imul(31, result) + hashCode(this.xt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.sq() + '(' + toString(this.wt_1) + ', ' + toString(this.xt_1) + ')';
  };
  function requireNonNegativeIndex(index, name) {
    if (index < 0)
      throw IndexOutOfBoundsException_init_$Create$('Illegal index ' + index + ', ' + name + ' expects only non-negative indices');
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.bu_1 = primitive.sq() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).sq = function () {
    return this.bu_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.du_1 = kClass;
    this.eu_1 = new ArrayClassDesc(eSerializer.np());
  }
  protoOf(ReferenceArraySerializer).np = function () {
    return this.eu_1;
  };
  protoOf(ReferenceArraySerializer).fu = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).gu = function (_this__u8e3s4) {
    return this.fu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ReferenceArraySerializer).iu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).ju = function (_this__u8e3s4) {
    return this.iu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).ku = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.du_1);
  };
  protoOf(ReferenceArraySerializer).lu = function (_this__u8e3s4) {
    return this.ku(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).mu = function (_this__u8e3s4, expectedSize) {
    var expectedCapacity = coerceAtLeast(expectedSize, 0);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedCapacity);
    addAll(this_0, _this__u8e3s4);
    return this_0;
  };
  protoOf(ReferenceArraySerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.mu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ReferenceArraySerializer).ou = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ReferenceArraySerializer).pu = function (_this__u8e3s4, index, element) {
    return this.ou(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.wu_1 = new ArrayListClassDesc(element.np());
  }
  protoOf(ArrayListSerializer).np = function () {
    return this.wu_1;
  };
  protoOf(ArrayListSerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ArrayListSerializer).xu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).ju = function (_this__u8e3s4) {
    return this.xu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).yu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).lu = function (_this__u8e3s4) {
    return this.yu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).zu = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof ArrayList) {
      // Inline function 'kotlin.also' call
      _this__u8e3s4.m5(expectedSize);
      return _this__u8e3s4;
    }
    if (expectedSize === _this__u8e3s4.e1())
      return ArrayList_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(ArrayListSerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.zu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ArrayListSerializer).av = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ArrayListSerializer).pu = function (_this__u8e3s4, index, element) {
    return this.av(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.ev_1 = new HashSetClassDesc(eSerializer.np());
  }
  protoOf(HashSetSerializer).np = function () {
    return this.ev_1;
  };
  protoOf(HashSetSerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashSet_init_$Create$();
    return newHashSet(initialCapacityHint);
  };
  protoOf(HashSetSerializer).fv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).ju = function (_this__u8e3s4) {
    return this.fv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).gv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).lu = function (_this__u8e3s4) {
    return this.gv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).hv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashSetSerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.hv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(HashSetSerializer).iv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).pu = function (_this__u8e3s4, index, element) {
    return this.iv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.kv_1 = new LinkedHashSetClassDesc(eSerializer.np());
  }
  protoOf(LinkedHashSetSerializer).np = function () {
    return this.kv_1;
  };
  protoOf(LinkedHashSetSerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      return LinkedHashSet_init_$Create$();
    }
    return newLinkedHashSet(initialCapacityHint);
  };
  protoOf(LinkedHashSetSerializer).lv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).ju = function (_this__u8e3s4) {
    return this.lv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).mv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).lu = function (_this__u8e3s4) {
    return this.mv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).hv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashSetSerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.hv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LinkedHashSetSerializer).nv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).pu = function (_this__u8e3s4, index, element) {
    return this.nv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.qv_1 = new HashMapClassDesc(kSerializer.np(), vSerializer.np());
  }
  protoOf(HashMapSerializer).np = function () {
    return this.qv_1;
  };
  protoOf(HashMapSerializer).rv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).gu = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashMap_init_$Create$();
    return newHashMap(initialCapacityHint);
  };
  protoOf(HashMapSerializer).sv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).ju = function (_this__u8e3s4) {
    return this.sv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).tv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).lu = function (_this__u8e3s4) {
    return this.tv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).uv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashMap(expectedSize);
    this_0.b3(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashMapSerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.bw_1 = new LinkedHashMapClassDesc(kSerializer.np(), vSerializer.np());
  }
  protoOf(LinkedHashMapSerializer).np = function () {
    return this.bw_1;
  };
  protoOf(LinkedHashMapSerializer).rv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).gu = function (_this__u8e3s4) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return LinkedHashMap_init_$Create$();
    return newLinkedHashMap(initialCapacityHint);
  };
  protoOf(LinkedHashMapSerializer).cw = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).ju = function (_this__u8e3s4) {
    return this.cw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).dw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).lu = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).uv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashMap(expectedSize);
    this_0.b3(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashMapSerializer).nu = function (_this__u8e3s4, expectedSize) {
    return this.uv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.qu_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).ru = function (decoder, builder, startIndex, size) {
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
        this.su(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).su = function (decoder, index, builder, checkIndex) {
    this.pu(builder, index, decoder.zs(this.np(), index, this.qu_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).cv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).gu = function (_this__u8e3s4) {
    return this.cv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function newHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashSet_init_$Create$_1(capacity);
  }
  function newLinkedHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashSet_init_$Create$_1(capacity);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.vv_1 = keySerializer;
    this.wv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).xv = function (decoder, builder, startIndex, size) {
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
        this.yv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).ru = function (decoder, builder, startIndex, size) {
    return this.xv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).yv = function (decoder, index, builder, checkIndex) {
    var key = decoder.zs(this.np(), index, this.vv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.dt(this.np());
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
    if (builder.q2(key)) {
      var tmp_2 = this.wv_1.np().tq();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.ys(this.np(), vIndex, this.wv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.zs(this.np(), vIndex, this.wv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.z2(key, value);
  };
  protoOf(MapLikeSerializer).su = function (decoder, index, builder, checkIndex) {
    return this.yv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  function newHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashMap_init_$Create$_1(capacity);
  }
  function newLinkedHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashMap_init_$Create$_1(capacity);
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).uu = function (decoder, previous) {
    var compositeDecoder = decoder.ms(this.np());
    var expectedSize = compositeDecoder.et(this.np());
    // Inline function 'kotlin.require' call
    if (!(expectedSize >= -1)) {
      var message = 'Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: ' + expectedSize;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (!(previous == null)) {
      tmp = this.nu(previous, this.gu(previous) + coerceAtLeast(expectedSize, 0) | 0);
    } else {
      tmp = this.hu(expectedSize);
    }
    var builder = tmp;
    var startIndex = this.ju(builder);
    if (compositeDecoder.ct()) {
      this.ru(compositeDecoder, builder, startIndex, expectedSize);
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.dt(this.np());
        if (index === -1)
          break $l$loop;
        this.tu(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.ns(this.np());
    return this.lu(builder);
  };
  protoOf(AbstractCollectionSerializer).op = function (decoder) {
    return this.uu(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).tu = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.su(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.su.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.fw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.np());
  }
  protoOf(PrimitiveArraySerializer).np = function () {
    return this.fw_1;
  };
  protoOf(PrimitiveArraySerializer).gw = function (_this__u8e3s4) {
    return _this__u8e3s4.hw();
  };
  protoOf(PrimitiveArraySerializer).ju = function (_this__u8e3s4) {
    return this.gw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).iw = function (_this__u8e3s4) {
    return _this__u8e3s4.jw();
  };
  protoOf(PrimitiveArraySerializer).lu = function (_this__u8e3s4) {
    return this.iw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).kw = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).pu = function (_this__u8e3s4, index, element) {
    return this.kw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).hu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return this.lw();
    return this.mw(initialCapacityHint);
  };
  protoOf(PrimitiveArraySerializer).op = function (decoder) {
    return this.uu(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).pw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.hw() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ow(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ow.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.qw_1 = longArray(0);
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
    $this.uw_1[slot] = bitwiseOr($this.uw_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.uw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.uw_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.sw_1($this.rw_1, index)) {
            $this.uw_1[slot] = slotMarks;
            return index;
          }
        }
        $this.uw_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_8();
    this.rw_1 = descriptor;
    this.sw_1 = readIfAbsent;
    var elementsCount = this.rw_1.vq();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.tw_1 = tmp_0;
      this.uw_1 = Companion_getInstance_8().qw_1;
    } else {
      this.tw_1 = new Long(0, 0);
      this.uw_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).vw = function (index) {
    if (index < 64) {
      this.tw_1 = bitwiseOr(this.tw_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ww = function () {
    var elementsCount = this.rw_1.vq();
    while (!equalsLong(this.tw_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.tw_1));
      this.tw_1 = bitwiseOr(this.tw_1, shiftLeft(new Long(1, 0), index));
      if (this.sw_1(this.rw_1, index)) {
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
    var d = new EnumDescriptor(serialName, $this.xw_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.xw_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.mx(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.yw_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.np();
    }, 1, 0, 3);
  }
  function EnumSerializer(serialName, values) {
    this.xw_1 = values;
    this.yw_1 = null;
    var tmp = this;
    tmp.zw_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).np = function () {
    var tmp0 = this.zw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).op = function (decoder) {
    var index = decoder.is(this.np());
    if (!(0 <= index ? index <= (this.xw_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.np().sq() + ' enum values, ' + ('values size is ' + this.xw_1.length));
    }
    return this.xw_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.np().sq() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.ay_1;
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
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.xq(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 4);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.zx_1 = ENUM_getInstance();
    var tmp = this;
    tmp.ay_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).tq = function () {
    return this.zx_1;
  };
  protoOf(EnumDescriptor).ar = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.tq() === ENUM_getInstance()))
      return false;
    if (!(this.sq() === other.sq()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.sq() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.sq());
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
    this.py_1 = true;
  }
  protoOf(InlineClassDescriptor).uq = function () {
    return this.py_1;
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
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.py_1 && contentEquals(this.by(), other.by()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vq() === other.vq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ar(index).sq() === other.ar(index).sq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ar(index).tq(), other.ar(index).tq())) {
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
    this.qy_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).ry = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.qy_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).np = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).op = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.fq(message);
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.ty_1 = OBJECT_getInstance();
    this.uy_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).tq = function () {
    return this.ty_1;
  };
  protoOf(NothingSerialDescriptor).sq = function () {
    return this.uy_1;
  };
  protoOf(NothingSerialDescriptor).vq = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).xq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).yq = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).br = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ar = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).zq = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.uy_1) + imul(31, this.ty_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.vy_1 = serializer;
    this.wy_1 = new SerialDescriptorForNullable(this.vy_1.np());
  }
  protoOf(NullableSerializer).np = function () {
    return this.wy_1;
  };
  protoOf(NullableSerializer).op = function (decoder) {
    return decoder.xr() ? decoder.ls(this.vy_1) : decoder.yr();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.vy_1, other.vy_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.vy_1);
  };
  function SerialDescriptorForNullable(original) {
    this.mq_1 = original;
    this.nq_1 = this.mq_1.sq() + '?';
    this.oq_1 = cachedSerialNames(this.mq_1);
  }
  protoOf(SerialDescriptorForNullable).sq = function () {
    return this.nq_1;
  };
  protoOf(SerialDescriptorForNullable).vr = function () {
    return this.oq_1;
  };
  protoOf(SerialDescriptorForNullable).lq = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.mq_1, other.mq_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.mq_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.mq_1), 31);
  };
  protoOf(SerialDescriptorForNullable).tq = function () {
    return this.mq_1.tq();
  };
  protoOf(SerialDescriptorForNullable).uq = function () {
    return this.mq_1.uq();
  };
  protoOf(SerialDescriptorForNullable).vq = function () {
    return this.mq_1.vq();
  };
  protoOf(SerialDescriptorForNullable).wq = function () {
    return this.mq_1.wq();
  };
  protoOf(SerialDescriptorForNullable).xq = function (index) {
    return this.mq_1.xq(index);
  };
  protoOf(SerialDescriptorForNullable).yq = function (name) {
    return this.mq_1.yq(name);
  };
  protoOf(SerialDescriptorForNullable).zq = function (index) {
    return this.mq_1.zq(index);
  };
  protoOf(SerialDescriptorForNullable).ar = function (index) {
    return this.mq_1.ar(index);
  };
  protoOf(SerialDescriptorForNullable).br = function (index) {
    return this.mq_1.br(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.rp_1 = this$0.yy_1;
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
      return p0.np();
    }, 1, 0, 5);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.xy_1 = objectInstance;
    this.yy_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zy_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).np = function () {
    var tmp0 = this.zy_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).op = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.np();
    var composite = decoder.ms(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.ct()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.dt(this.np());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.ns(descriptor);
    return this.xy_1;
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
    var tmp0 = _this__u8e3s4.ak_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.ak_1);
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
      return _this__u8e3s4.vr();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.vq());
    var inductionVariable = 0;
    var last = _this__u8e3s4.vq();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.xq(i);
        result.c1(element);
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
          var element = descriptor.xq(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.sq());
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
                var element = descriptor.xq(imul(maskSlot, 32) + i | 0);
                missingFields.c1(element);
              }
              missingFieldsBits = missingFieldsBits >>> 1 | 0;
            }
             while (inductionVariable_0 < 32);
        }
      }
       while (inductionVariable <= last);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.sq());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.jx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.lx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ex_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ex_1[i];
        indices.z2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ry();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sy();
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
          var tmp$ret$2 = item.np();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.by();
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.by());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 8);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ax_1 = serialName;
    this.bx_1 = generatedSerializer;
    this.cx_1 = elementsCount;
    this.dx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.cx_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ex_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.cx_1;
    tmp_3.fx_1 = Array(size);
    this.gx_1 = null;
    this.hx_1 = booleanArray(this.cx_1);
    this.ix_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.jx_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.kx_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.lx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).sq = function () {
    return this.ax_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).vq = function () {
    return this.cx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).tq = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).wq = function () {
    var tmp0_elvis_lhs = this.gx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).vr = function () {
    return this.ix_1.t2();
  };
  protoOf(PluginGeneratedSerialDescriptor).by = function () {
    var tmp0 = this.kx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).cy = function (name, isOptional) {
    this.dx_1 = this.dx_1 + 1 | 0;
    this.ex_1[this.dx_1] = name;
    this.hx_1[this.dx_1] = isOptional;
    this.fx_1[this.dx_1] = null;
    if (this.dx_1 === (this.cx_1 - 1 | 0)) {
      this.ix_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).mx = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.cy(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.cy.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).ar = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).np();
  };
  protoOf(PluginGeneratedSerialDescriptor).br = function (index) {
    return getChecked_0(this.hx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).zq = function (index) {
    var tmp0_elvis_lhs = getChecked(this.fx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).xq = function (index) {
    return getChecked(this.ex_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).yq = function (name) {
    var tmp0_elvis_lhs = this.ix_1.s2(name);
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
      if (!(this.sq() === other.sq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.by(), other.by())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.vq() === other.vq())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.vq();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ar(index).sq() === other.ar(index).sq())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ar(index).tq(), other.ar(index).tq())) {
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
    var result = getStringHashCode(_this__u8e3s4.sq());
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
      var tmp0_safe_receiver = element.sq();
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
      var tmp0_safe_receiver_0 = element_0.tq();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.vq());
    var tmp_0 = _this__u8e3s4.sq() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.xq(i) + ': ' + $this_toStringImpl.ar(i).sq();
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
  protoOf(CharArraySerializer_0).dz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.dz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).ez = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return CharArrayBuilder_init_$Create$(_this__u8e3s4);
    return new CharArrayBuilder(copyOf(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(CharArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.ez((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(CharArraySerializer_0).mw = function (size) {
    return CharArrayBuilder_init_$Create$_0(size);
  };
  protoOf(CharArraySerializer_0).lw = function () {
    return CharArrayBuilder_init_$Create$_1();
  };
  protoOf(CharArraySerializer_0).fz = function (decoder, index, builder, checkIndex) {
    builder.iz(decoder.vs(this.fw_1, index));
  };
  protoOf(CharArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.fz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.fz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(DoubleArraySerializer_0).lz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.lz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).mz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return DoubleArrayBuilder_init_$Create$(_this__u8e3s4);
    return new DoubleArrayBuilder(copyOf_0(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(DoubleArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.mz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(DoubleArraySerializer_0).mw = function (size) {
    return DoubleArrayBuilder_init_$Create$_0(size);
  };
  protoOf(DoubleArraySerializer_0).lw = function () {
    return DoubleArrayBuilder_init_$Create$_1();
  };
  protoOf(DoubleArraySerializer_0).nz = function (decoder, index, builder, checkIndex) {
    builder.qz(decoder.us(this.fw_1, index));
  };
  protoOf(DoubleArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.nz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.nz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(FloatArraySerializer_0).tz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.tz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).uz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return FloatArrayBuilder_init_$Create$(_this__u8e3s4);
    return new FloatArrayBuilder(copyOf_1(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(FloatArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.uz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(FloatArraySerializer_0).mw = function (size) {
    return FloatArrayBuilder_init_$Create$_0(size);
  };
  protoOf(FloatArraySerializer_0).lw = function () {
    return FloatArrayBuilder_init_$Create$_1();
  };
  protoOf(FloatArraySerializer_0).vz = function (decoder, index, builder, checkIndex) {
    builder.yz(decoder.ts(this.fw_1, index));
  };
  protoOf(FloatArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.vz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.vz(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(LongArraySerializer_0).b10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.b10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).c10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return LongArrayBuilder_init_$Create$(_this__u8e3s4);
    return new LongArrayBuilder(copyOf_2(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(LongArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.c10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LongArraySerializer_0).mw = function (size) {
    return LongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(LongArraySerializer_0).lw = function () {
    return LongArrayBuilder_init_$Create$_1();
  };
  protoOf(LongArraySerializer_0).d10 = function (decoder, index, builder, checkIndex) {
    builder.g10(decoder.ss(this.fw_1, index));
  };
  protoOf(LongArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.d10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.d10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ULongArraySerializer_0).j10 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.j10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.cp_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).k10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4))
      return ULongArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(_this__u8e3s4), expectedSize));
    return new ULongArrayBuilder(tmp$ret$0, _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4));
  };
  protoOf(ULongArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.k10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.cp_1 : THROW_CCE(), expectedSize);
  };
  protoOf(ULongArraySerializer_0).mw = function (size) {
    return ULongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ULongArraySerializer_0).lw = function () {
    return ULongArrayBuilder_init_$Create$_1();
  };
  protoOf(ULongArraySerializer_0).l10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.xs(this.fw_1, index).ds();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.o10(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.l10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(IntArraySerializer_0).r10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.r10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).s10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return IntArrayBuilder_init_$Create$(_this__u8e3s4);
    return new IntArrayBuilder(copyOf_3(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(IntArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.s10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(IntArraySerializer_0).mw = function (size) {
    return IntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(IntArraySerializer_0).lw = function () {
    return IntArrayBuilder_init_$Create$_1();
  };
  protoOf(IntArraySerializer_0).t10 = function (decoder, index, builder, checkIndex) {
    builder.w10(decoder.rs(this.fw_1, index));
  };
  protoOf(IntArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.t10(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UIntArraySerializer_0).z10 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.z10(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.so_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).a11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4))
      return UIntArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(_this__u8e3s4), expectedSize));
    return new UIntArrayBuilder(tmp$ret$0, _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4));
  };
  protoOf(UIntArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.a11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.so_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UIntArraySerializer_0).mw = function (size) {
    return UIntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UIntArraySerializer_0).lw = function () {
    return UIntArrayBuilder_init_$Create$_1();
  };
  protoOf(UIntArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.xs(this.fw_1, index).cs();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.e11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ShortArraySerializer_0).h11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.h11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).i11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ShortArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ShortArrayBuilder(copyOf_4(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ShortArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.i11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ShortArraySerializer_0).mw = function (size) {
    return ShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ShortArraySerializer_0).lw = function () {
    return ShortArrayBuilder_init_$Create$_1();
  };
  protoOf(ShortArraySerializer_0).j11 = function (decoder, index, builder, checkIndex) {
    builder.m11(decoder.qs(this.fw_1, index));
  };
  protoOf(ShortArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.j11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UShortArraySerializer_0).p11 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.p11(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.mp_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).q11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UShortArray___get_size__impl__jqto1b(_this__u8e3s4))
      return UShortArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(_this__u8e3s4), expectedSize));
    return new UShortArrayBuilder(tmp$ret$0, _UShortArray___get_size__impl__jqto1b(_this__u8e3s4));
  };
  protoOf(UShortArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.q11(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.mp_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UShortArraySerializer_0).mw = function (size) {
    return UShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UShortArraySerializer_0).lw = function () {
    return UShortArrayBuilder_init_$Create$_1();
  };
  protoOf(UShortArraySerializer_0).r11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.xs(this.fw_1, index).bs();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.u11(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.r11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.r11(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(ByteArraySerializer_0).x11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.x11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).y11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ByteArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ByteArrayBuilder(copyOf_5(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ByteArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.y11((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ByteArraySerializer_0).mw = function (size) {
    return ByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ByteArraySerializer_0).lw = function () {
    return ByteArrayBuilder_init_$Create$_1();
  };
  protoOf(ByteArraySerializer_0).z11 = function (decoder, index, builder, checkIndex) {
    builder.c12(decoder.ps(this.fw_1, index));
  };
  protoOf(ByteArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.z11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.z11(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(UByteArraySerializer_0).f12 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.f12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.io_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).g12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4))
      return UByteArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(_this__u8e3s4), expectedSize));
    return new UByteArrayBuilder(tmp$ret$0, _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4));
  };
  protoOf(UByteArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.g12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.io_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UByteArraySerializer_0).mw = function (size) {
    return UByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UByteArraySerializer_0).lw = function () {
    return UByteArrayBuilder_init_$Create$_1();
  };
  protoOf(UByteArraySerializer_0).h12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.xs(this.fw_1, index).as();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.k12(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.h12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.h12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
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
  protoOf(BooleanArraySerializer_0).n12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).gu = function (_this__u8e3s4) {
    return this.n12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).o12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return BooleanArrayBuilder_init_$Create$(_this__u8e3s4);
    return new BooleanArrayBuilder(copyOf_6(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(BooleanArraySerializer_0).nu = function (_this__u8e3s4, expectedSize) {
    return this.o12((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(BooleanArraySerializer_0).mw = function (size) {
    return BooleanArrayBuilder_init_$Create$_0(size);
  };
  protoOf(BooleanArraySerializer_0).lw = function () {
    return BooleanArrayBuilder_init_$Create$_1();
  };
  protoOf(BooleanArraySerializer_0).p12 = function (decoder, index, builder, checkIndex) {
    builder.s12(decoder.os(this.fw_1, index));
  };
  protoOf(BooleanArraySerializer_0).su = function (decoder, index, builder, checkIndex) {
    return this.p12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).nw = function (decoder, index, builder, checkIndex) {
    return this.p12(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder_init_$Init$(bufferWithData, $this) {
    CharArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function CharArrayBuilder_init_$Create$(bufferWithData) {
    return CharArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    CharArrayBuilder.call($this, charArray(initialCapacity), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_0(initialCapacity) {
    return CharArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_1($this) {
    CharArrayBuilder.call($this, charArray(10), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_1() {
    return CharArrayBuilder_init_$Init$_1(objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.gz_1 = bufferWithData;
    this.hz_1 = initialPosition;
  }
  protoOf(CharArrayBuilder).hw = function () {
    return this.hz_1;
  };
  protoOf(CharArrayBuilder).ow = function (requiredCapacity) {
    if (this.gz_1.length < requiredCapacity)
      this.gz_1 = copyOf(this.gz_1, coerceAtLeast(requiredCapacity, imul(this.gz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).iz = function (c) {
    this.pw();
    var tmp = this.gz_1;
    var _unary__edvuaz = this.hz_1;
    this.hz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).jw = function () {
    return copyOf(this.gz_1, this.hz_1);
  };
  function DoubleArrayBuilder_init_$Init$(bufferWithData, $this) {
    DoubleArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$(bufferWithData) {
    return DoubleArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    DoubleArrayBuilder.call($this, new Float64Array(initialCapacity), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_0(initialCapacity) {
    return DoubleArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_1($this) {
    DoubleArrayBuilder.call($this, new Float64Array(10), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_1() {
    return DoubleArrayBuilder_init_$Init$_1(objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.oz_1 = bufferWithData;
    this.pz_1 = initialPosition;
  }
  protoOf(DoubleArrayBuilder).hw = function () {
    return this.pz_1;
  };
  protoOf(DoubleArrayBuilder).ow = function (requiredCapacity) {
    if (this.oz_1.length < requiredCapacity)
      this.oz_1 = copyOf_0(this.oz_1, coerceAtLeast(requiredCapacity, imul(this.oz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).qz = function (c) {
    this.pw();
    var tmp = this.oz_1;
    var _unary__edvuaz = this.pz_1;
    this.pz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).jw = function () {
    return copyOf_0(this.oz_1, this.pz_1);
  };
  function FloatArrayBuilder_init_$Init$(bufferWithData, $this) {
    FloatArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$(bufferWithData) {
    return FloatArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    FloatArrayBuilder.call($this, new Float32Array(initialCapacity), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_0(initialCapacity) {
    return FloatArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_1($this) {
    FloatArrayBuilder.call($this, new Float32Array(10), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_1() {
    return FloatArrayBuilder_init_$Init$_1(objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.wz_1 = bufferWithData;
    this.xz_1 = initialPosition;
  }
  protoOf(FloatArrayBuilder).hw = function () {
    return this.xz_1;
  };
  protoOf(FloatArrayBuilder).ow = function (requiredCapacity) {
    if (this.wz_1.length < requiredCapacity)
      this.wz_1 = copyOf_1(this.wz_1, coerceAtLeast(requiredCapacity, imul(this.wz_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).yz = function (c) {
    this.pw();
    var tmp = this.wz_1;
    var _unary__edvuaz = this.xz_1;
    this.xz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).jw = function () {
    return copyOf_1(this.wz_1, this.xz_1);
  };
  function LongArrayBuilder_init_$Init$(bufferWithData, $this) {
    LongArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function LongArrayBuilder_init_$Create$(bufferWithData) {
    return LongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    LongArrayBuilder.call($this, longArray(initialCapacity), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_0(initialCapacity) {
    return LongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_1($this) {
    LongArrayBuilder.call($this, longArray(10), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_1() {
    return LongArrayBuilder_init_$Init$_1(objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.e10_1 = bufferWithData;
    this.f10_1 = initialPosition;
  }
  protoOf(LongArrayBuilder).hw = function () {
    return this.f10_1;
  };
  protoOf(LongArrayBuilder).ow = function (requiredCapacity) {
    if (this.e10_1.length < requiredCapacity)
      this.e10_1 = copyOf_2(this.e10_1, coerceAtLeast(requiredCapacity, imul(this.e10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).g10 = function (c) {
    this.pw();
    var tmp = this.e10_1;
    var _unary__edvuaz = this.f10_1;
    this.f10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).jw = function () {
    return copyOf_2(this.e10_1, this.f10_1);
  };
  function ULongArrayBuilder_init_$Init$(bufferWithData, $this) {
    ULongArrayBuilder.call($this, bufferWithData, _ULongArray___get_size__impl__ju6dtr(bufferWithData));
    return $this;
  }
  function ULongArrayBuilder_init_$Create$(bufferWithData) {
    return ULongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(initialCapacity), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_0(initialCapacity) {
    return ULongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_1($this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(10), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_1() {
    return ULongArrayBuilder_init_$Init$_1(objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.m10_1 = bufferWithData;
    this.n10_1 = initialPosition;
  }
  protoOf(ULongArrayBuilder).hw = function () {
    return this.n10_1;
  };
  protoOf(ULongArrayBuilder).ow = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.m10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.m10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.m10_1), 2));
      tmp.m10_1 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).o10 = function (c) {
    this.pw();
    var tmp = this.m10_1;
    var _unary__edvuaz = this.n10_1;
    this.n10_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).t12 = function () {
    var tmp0 = this.m10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.n10_1;
    return _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).jw = function () {
    return new ULongArray(this.t12());
  };
  function IntArrayBuilder_init_$Init$(bufferWithData, $this) {
    IntArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function IntArrayBuilder_init_$Create$(bufferWithData) {
    return IntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    IntArrayBuilder.call($this, new Int32Array(initialCapacity), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_0(initialCapacity) {
    return IntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_1($this) {
    IntArrayBuilder.call($this, new Int32Array(10), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_1() {
    return IntArrayBuilder_init_$Init$_1(objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.u10_1 = bufferWithData;
    this.v10_1 = initialPosition;
  }
  protoOf(IntArrayBuilder).hw = function () {
    return this.v10_1;
  };
  protoOf(IntArrayBuilder).ow = function (requiredCapacity) {
    if (this.u10_1.length < requiredCapacity)
      this.u10_1 = copyOf_3(this.u10_1, coerceAtLeast(requiredCapacity, imul(this.u10_1.length, 2)));
  };
  protoOf(IntArrayBuilder).w10 = function (c) {
    this.pw();
    var tmp = this.u10_1;
    var _unary__edvuaz = this.v10_1;
    this.v10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).jw = function () {
    return copyOf_3(this.u10_1, this.v10_1);
  };
  function UIntArrayBuilder_init_$Init$(bufferWithData, $this) {
    UIntArrayBuilder.call($this, bufferWithData, _UIntArray___get_size__impl__r6l8ci(bufferWithData));
    return $this;
  }
  function UIntArrayBuilder_init_$Create$(bufferWithData) {
    return UIntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(initialCapacity), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_0(initialCapacity) {
    return UIntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_1($this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(10), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_1() {
    return UIntArrayBuilder_init_$Init$_1(objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = initialPosition;
  }
  protoOf(UIntArrayBuilder).hw = function () {
    return this.d11_1;
  };
  protoOf(UIntArrayBuilder).ow = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.c11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.c11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.c11_1), 2));
      tmp.c11_1 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).e11 = function (c) {
    this.pw();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).u12 = function () {
    var tmp0 = this.c11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.d11_1;
    return _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).jw = function () {
    return new UIntArray(this.u12());
  };
  function ShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    ShortArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$(bufferWithData) {
    return ShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ShortArrayBuilder.call($this, new Int16Array(initialCapacity), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return ShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_1($this) {
    ShortArrayBuilder.call($this, new Int16Array(10), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_1() {
    return ShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.k11_1 = bufferWithData;
    this.l11_1 = initialPosition;
  }
  protoOf(ShortArrayBuilder).hw = function () {
    return this.l11_1;
  };
  protoOf(ShortArrayBuilder).ow = function (requiredCapacity) {
    if (this.k11_1.length < requiredCapacity)
      this.k11_1 = copyOf_4(this.k11_1, coerceAtLeast(requiredCapacity, imul(this.k11_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).m11 = function (c) {
    this.pw();
    var tmp = this.k11_1;
    var _unary__edvuaz = this.l11_1;
    this.l11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).jw = function () {
    return copyOf_4(this.k11_1, this.l11_1);
  };
  function UShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    UShortArrayBuilder.call($this, bufferWithData, _UShortArray___get_size__impl__jqto1b(bufferWithData));
    return $this;
  }
  function UShortArrayBuilder_init_$Create$(bufferWithData) {
    return UShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(initialCapacity), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return UShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_1($this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(10), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_1() {
    return UShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.s11_1 = bufferWithData;
    this.t11_1 = initialPosition;
  }
  protoOf(UShortArrayBuilder).hw = function () {
    return this.t11_1;
  };
  protoOf(UShortArrayBuilder).ow = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.s11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.s11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.s11_1), 2));
      tmp.s11_1 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).u11 = function (c) {
    this.pw();
    var tmp = this.s11_1;
    var _unary__edvuaz = this.t11_1;
    this.t11_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).v12 = function () {
    var tmp0 = this.s11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.t11_1;
    return _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).jw = function () {
    return new UShortArray(this.v12());
  };
  function ByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    ByteArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(bufferWithData) {
    return ByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return ByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_1($this) {
    ByteArrayBuilder.call($this, new Int8Array(10), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_1() {
    return ByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.a12_1 = bufferWithData;
    this.b12_1 = initialPosition;
  }
  protoOf(ByteArrayBuilder).hw = function () {
    return this.b12_1;
  };
  protoOf(ByteArrayBuilder).ow = function (requiredCapacity) {
    if (this.a12_1.length < requiredCapacity)
      this.a12_1 = copyOf_5(this.a12_1, coerceAtLeast(requiredCapacity, imul(this.a12_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).c12 = function (c) {
    this.pw();
    var tmp = this.a12_1;
    var _unary__edvuaz = this.b12_1;
    this.b12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).jw = function () {
    return copyOf_5(this.a12_1, this.b12_1);
  };
  function UByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    UByteArrayBuilder.call($this, bufferWithData, _UByteArray___get_size__impl__h6pkdv(bufferWithData));
    return $this;
  }
  function UByteArrayBuilder_init_$Create$(bufferWithData) {
    return UByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(initialCapacity), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return UByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_1($this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(10), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_1() {
    return UByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.i12_1 = bufferWithData;
    this.j12_1 = initialPosition;
  }
  protoOf(UByteArrayBuilder).hw = function () {
    return this.j12_1;
  };
  protoOf(UByteArrayBuilder).ow = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.i12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.i12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.i12_1), 2));
      tmp.i12_1 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).k12 = function (c) {
    this.pw();
    var tmp = this.i12_1;
    var _unary__edvuaz = this.j12_1;
    this.j12_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).w12 = function () {
    var tmp0 = this.i12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.j12_1;
    return _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).jw = function () {
    return new UByteArray(this.w12());
  };
  function BooleanArrayBuilder_init_$Init$(bufferWithData, $this) {
    BooleanArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$(bufferWithData) {
    return BooleanArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    BooleanArrayBuilder.call($this, booleanArray(initialCapacity), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_0(initialCapacity) {
    return BooleanArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_1($this) {
    BooleanArrayBuilder.call($this, booleanArray(10), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_1() {
    return BooleanArrayBuilder_init_$Init$_1(objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.q12_1 = bufferWithData;
    this.r12_1 = initialPosition;
  }
  protoOf(BooleanArrayBuilder).hw = function () {
    return this.r12_1;
  };
  protoOf(BooleanArrayBuilder).ow = function (requiredCapacity) {
    if (this.q12_1.length < requiredCapacity)
      this.q12_1 = copyOf_6(this.q12_1, coerceAtLeast(requiredCapacity, imul(this.q12_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).s12 = function (c) {
    this.pw();
    var tmp = this.q12_1;
    var _unary__edvuaz = this.r12_1;
    this.r12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).jw = function () {
    return copyOf_6(this.q12_1, this.r12_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.x12_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).np = function () {
    return this.x12_1;
  };
  protoOf(StringSerializer).op = function (decoder) {
    return decoder.hs();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.y12_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).np = function () {
    return this.y12_1;
  };
  protoOf(IntSerializer).op = function (decoder) {
    return decoder.cs();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.z12_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).np = function () {
    return this.z12_1;
  };
  protoOf(BooleanSerializer).op = function (decoder) {
    return decoder.zr();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.a13_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).np = function () {
    return this.a13_1;
  };
  protoOf(FloatSerializer).op = function (decoder) {
    return decoder.es();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.b13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).np = function () {
    return this.b13_1;
  };
  protoOf(LongSerializer).op = function (decoder) {
    return decoder.ds();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().s2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.c13_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.c13_1 = serialName;
    this.d13_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).sq = function () {
    return this.c13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).tq = function () {
    return this.d13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).vq = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).xq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).yq = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).br = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ar = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).zq = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.c13_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.c13_1 === other.c13_1 && equals(this.d13_1, other.d13_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.c13_1) + imul(31, this.d13_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().u2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.np().sq();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.e13_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).np = function () {
    return this.e13_1;
  };
  protoOf(ByteSerializer).op = function (decoder) {
    return decoder.as();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.f13_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).np = function () {
    return this.f13_1;
  };
  protoOf(ShortSerializer).op = function (decoder) {
    return decoder.bs();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.g13_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).np = function () {
    return this.g13_1;
  };
  protoOf(CharSerializer).h13 = function (decoder) {
    return decoder.gs();
  };
  protoOf(CharSerializer).op = function (decoder) {
    return new Char(this.h13(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.i13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).np = function () {
    return this.i13_1;
  };
  protoOf(DoubleSerializer).op = function (decoder) {
    return decoder.fs();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.j13_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).np = function () {
    return this.j13_1.np();
  };
  protoOf(UnitSerializer).k13 = function (decoder) {
    this.j13_1.op(decoder);
  };
  protoOf(UnitSerializer).op = function (decoder) {
    this.k13(decoder);
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
  protoOf(NamedValueDecoder).n13 = function (_this__u8e3s4, index) {
    return this.p13(this.o13(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).p13 = function (nestedName) {
    var tmp0_elvis_lhs = this.s13();
    return this.t13(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).o13 = function (descriptor, index) {
    return descriptor.xq(index);
  };
  protoOf(NamedValueDecoder).t13 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).u13 = function () {
    return this.q13_1.r() ? '$' : joinToString(this.q13_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.i14(tag);
    var r = block();
    if (!$this.r13_1) {
      $this.j14();
    }
    $this.r13_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ks($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.np().lq();
      var tmp;
      if (isNullabilitySupported || tmp0.xr()) {
        tmp = this$0.ks($deserializer, $previousValue);
      } else {
        tmp = tmp0.yr();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.q13_1 = ArrayList_init_$Create$_0();
    this.r13_1 = false;
  }
  protoOf(TaggedDecoder).bt = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).v13 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).w13 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).x13 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y13 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z13 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a14 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b14 = function (tag) {
    var tmp = this.v13(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c14 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d14 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).e14 = function (tag) {
    var tmp = this.v13(tag);
    return tmp instanceof Char ? tmp.x1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).f14 = function (tag) {
    var tmp = this.v13(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g14 = function (tag, enumDescriptor) {
    var tmp = this.v13(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).h14 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.i14(tag);
    return this;
  };
  protoOf(TaggedDecoder).ks = function (deserializer, previousValue) {
    return this.ls(deserializer);
  };
  protoOf(TaggedDecoder).js = function (descriptor) {
    return this.h14(this.j14(), descriptor);
  };
  protoOf(TaggedDecoder).xr = function () {
    var tmp0_elvis_lhs = this.s13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.w13(currentTag);
  };
  protoOf(TaggedDecoder).yr = function () {
    return null;
  };
  protoOf(TaggedDecoder).zr = function () {
    return this.x13(this.j14());
  };
  protoOf(TaggedDecoder).as = function () {
    return this.y13(this.j14());
  };
  protoOf(TaggedDecoder).bs = function () {
    return this.z13(this.j14());
  };
  protoOf(TaggedDecoder).cs = function () {
    return this.a14(this.j14());
  };
  protoOf(TaggedDecoder).ds = function () {
    return this.b14(this.j14());
  };
  protoOf(TaggedDecoder).es = function () {
    return this.c14(this.j14());
  };
  protoOf(TaggedDecoder).fs = function () {
    return this.d14(this.j14());
  };
  protoOf(TaggedDecoder).gs = function () {
    return this.e14(this.j14());
  };
  protoOf(TaggedDecoder).hs = function () {
    return this.f14(this.j14());
  };
  protoOf(TaggedDecoder).is = function (enumDescriptor) {
    return this.g14(this.j14(), enumDescriptor);
  };
  protoOf(TaggedDecoder).ms = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).ns = function (descriptor) {
  };
  protoOf(TaggedDecoder).os = function (descriptor, index) {
    return this.x13(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).ps = function (descriptor, index) {
    return this.y13(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).qs = function (descriptor, index) {
    return this.z13(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).rs = function (descriptor, index) {
    return this.a14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).ss = function (descriptor, index) {
    return this.b14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).ts = function (descriptor, index) {
    return this.c14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).us = function (descriptor, index) {
    return this.d14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).vs = function (descriptor, index) {
    return this.e14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).ws = function (descriptor, index) {
    return this.f14(this.n13(descriptor, index));
  };
  protoOf(TaggedDecoder).xs = function (descriptor, index) {
    return this.h14(this.n13(descriptor, index), descriptor.ar(index));
  };
  protoOf(TaggedDecoder).ys = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.n13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).at = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.n13(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).s13 = function () {
    return lastOrNull(this.q13_1);
  };
  protoOf(TaggedDecoder).i14 = function (name) {
    this.q13_1.c1(name);
  };
  protoOf(TaggedDecoder).j14 = function () {
    var r = this.q13_1.y2(get_lastIndex_0(this.q13_1));
    this.r13_1 = true;
    return r;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.k14_1 = key;
    this.l14_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.k14_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.l14_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.k14_1) + ', value=' + toString_0(this.l14_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.k14_1 == null ? 0 : hashCode(this.k14_1);
    result = imul(result, 31) + (this.l14_1 == null ? 0 : hashCode(this.l14_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.k14_1, other.k14_1))
      return false;
    if (!equals(this.l14_1, other.l14_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.xp('key', $keySerializer.np());
      $this$buildSerialDescriptor.xp('value', $valueSerializer.np());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.o14_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).np = function () {
    return this.o14_1;
  };
  protoOf(MapEntrySerializer_0).p14 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.xp('first', $keySerializer.np());
      $this$buildClassSerialDescriptor.xp('second', $valueSerializer.np());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.u14_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).np = function () {
    return this.u14_1;
  };
  protoOf(PairSerializer_0).p14 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.zs($this.y14_1, 0, $this.v14_1);
    var b = composite.zs($this.y14_1, 1, $this.w14_1);
    var c = composite.zs($this.y14_1, 2, $this.x14_1);
    composite.ns($this.y14_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.dt($this.y14_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.zs($this.y14_1, 0, $this.v14_1);
          break;
        case 1:
          b = composite.zs($this.y14_1, 1, $this.w14_1);
          break;
        case 2:
          c = composite.zs($this.y14_1, 2, $this.x14_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.ns($this.y14_1);
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
      $this$buildClassSerialDescriptor.xp('first', this$0.v14_1.np());
      $this$buildClassSerialDescriptor.xp('second', this$0.w14_1.np());
      $this$buildClassSerialDescriptor.xp('third', this$0.x14_1.np());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.v14_1 = aSerializer;
    this.w14_1 = bSerializer;
    this.x14_1 = cSerializer;
    var tmp = this;
    tmp.y14_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).np = function () {
    return this.y14_1;
  };
  protoOf(TripleSerializer_0).op = function (decoder) {
    var composite = decoder.ms(this.y14_1);
    if (composite.ct()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.q14_1 = keySerializer;
    this.r14_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).op = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.np();
    var composite = decoder.ms(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.ct()) {
        var key = composite.zs(this.np(), 0, this.q14_1);
        var value = composite.zs(this.np(), 1, this.r14_1);
        tmp$ret$1 = this.p14(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.dt(this.np());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.zs(this.np(), 0, this.q14_1);
            break;
          case 1:
            value_0 = composite.zs(this.np(), 1, this.r14_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.p14(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.ns(descriptor);
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
    this.z14_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance_3()));
  }
  protoOf(ULongSerializer).np = function () {
    return this.z14_1;
  };
  protoOf(ULongSerializer).a15 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.js(this.z14_1).ds();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).op = function (decoder) {
    return new ULong(this.a15(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.b15_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).np = function () {
    return this.b15_1;
  };
  protoOf(UIntSerializer).c15 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.js(this.b15_1).cs();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).op = function (decoder) {
    return new UInt(this.c15(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.d15_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).np = function () {
    return this.d15_1;
  };
  protoOf(UByteSerializer).e15 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.js(this.d15_1).as();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).op = function (decoder) {
    return new UByte(this.e15(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.f15_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).np = function () {
    return this.f15_1;
  };
  protoOf(UShortSerializer).g15 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.js(this.f15_1).bs();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).op = function (decoder) {
    return new UShort(this.g15(decoder));
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
  protoOf(SerializersModule).hq = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.iq(kClass, typeArgumentsSerializers) : $super.iq.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.i15_1 = class2ContextualFactory;
    this.j15_1 = polyBase2Serializers;
    this.k15_1 = polyBase2DefaultSerializerProvider;
    this.l15_1 = polyBase2NamedSerializers;
    this.m15_1 = polyBase2DefaultDeserializerProvider;
    this.n15_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).gq = function () {
    return this.n15_1;
  };
  protoOf(SerialModuleImpl).ft = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.l15_1.s2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.m15_1.s2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).iq = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.i15_1.s2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o15(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).h15 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.i15_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.r15_1;
        collector.s15(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.q15(kclass, serial.p15_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.j15_1.l1().t();
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
        collector.t15(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.k15_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.u15(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.m15_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.v15(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.r15_1 = serializer;
  }
  protoOf(Argless).o15 = function (typeArgumentsSerializers) {
    return this.r15_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.r15_1, this.r15_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.r15_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.p15_1 = provider;
  }
  protoOf(WithTypeArguments).o15 = function (typeArgumentsSerializers) {
    return this.p15_1(typeArgumentsSerializers);
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
    tmp.w15_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.x15_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.y15_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.z15_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.a16_1 = HashMap_init_$Create$();
    this.b16_1 = false;
  }
  protoOf(SerializersModuleBuilder).s15 = function (kClass, serializer) {
    return this.c16(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).q15 = function (kClass, provider) {
    return this.c16(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).t15 = function (baseClass, actualClass, actualSerializer) {
    this.d16(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).u15 = function (baseClass, defaultSerializerProvider) {
    this.e16(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).v15 = function (baseClass, defaultDeserializerProvider) {
    this.f16(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).g16 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.w15_1.s2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.w15_1.z2(forClass, provider);
    if (isInterface_0(forClass))
      this.b16_1 = true;
  };
  protoOf(SerializersModuleBuilder).c16 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.g16(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.g16.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).e16 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.y15_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.y15_1.z2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).f16 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.a16_1.s2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.a16_1.z2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).h16 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.np().sq();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.x15_1;
    var value = this_0.s2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.z2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.z15_1;
    var value_0 = this_1.s2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.z2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.s2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.a3(previousSerializer.np().sq());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.s2(name);
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
        baseClassSerializers.a3(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.z2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.z2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).d16 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.h16(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.h16.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).jw = function () {
    return new SerialModuleImpl(this.w15_1, this.x15_1, this.y15_1, this.z15_1, this.a16_1, this.b16_1);
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
    this.i16_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.i16_1.equals(tmp0_other_with_cast.i16_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.i16_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.i16_1) + ')';
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
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().kb()) {
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
    return rootClass.equals(PrimitiveClasses_getInstance().sb());
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
          var tmp_1 = assocObject.az(args.slice());
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
  function estimateCapacityForHashMap(requiredCapacity) {
    return requiredCapacity;
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().tb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().wb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().rb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().dc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().qb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().cc(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().pb(), serializer_5(Companion_getInstance_3())), to(PrimitiveClasses_getInstance().bc(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_4())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_5())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_6())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().xb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_7())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().kb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().kb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.j16_1 = $factory;
  }
  protoOf(createCache$1).jq = function (key) {
    return this.j16_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.k16_1 = $factory;
  }
  protoOf(createParametrizedCache$1).kq = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.k16_1(key, types);
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
  protoOf(SerialDescriptorImpl).lq = get_isNullable;
  protoOf(SerialDescriptorImpl).uq = get_isInline;
  protoOf(AbstractDecoder).zs = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ls = decodeSerializableValue;
  protoOf(AbstractDecoder).ct = decodeSequentially;
  protoOf(AbstractDecoder).et = decodeCollectionSize;
  protoOf(ListLikeDescriptor).lq = get_isNullable;
  protoOf(ListLikeDescriptor).uq = get_isInline;
  protoOf(ListLikeDescriptor).wq = get_annotations;
  protoOf(MapLikeDescriptor).lq = get_isNullable;
  protoOf(MapLikeDescriptor).uq = get_isInline;
  protoOf(MapLikeDescriptor).wq = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).lq = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).uq = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).sy = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).lq = get_isNullable;
  protoOf(NothingSerialDescriptor).uq = get_isInline;
  protoOf(NothingSerialDescriptor).wq = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).lq = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).uq = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).wq = get_annotations;
  protoOf(TaggedDecoder).zs = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ls = decodeSerializableValue;
  protoOf(TaggedDecoder).ct = decodeSequentially;
  protoOf(TaggedDecoder).et = decodeCollectionSize;
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
  _.$_$.m = SerializationException_init_$Create$_0;
  _.$_$.n = SerializationException_init_$Init$_1;
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
  _.$_$.v1 = missingFieldExceptionWithNewMessage;
  _.$_$.w1 = throwArrayMissingFieldException;
  _.$_$.x1 = throwMissingFieldException;
  _.$_$.y1 = EmptySerializersModule_0;
  _.$_$.z1 = SerializersModuleBuilder;
  _.$_$.a2 = contextual;
  _.$_$.b2 = SerializersModuleCollector;
  _.$_$.c2 = DeserializationStrategy;
  _.$_$.d2 = KSerializer;
  _.$_$.e2 = MissingFieldException;
  _.$_$.f2 = SerializableWith;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
