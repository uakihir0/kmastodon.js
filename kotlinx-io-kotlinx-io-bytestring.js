(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-bytestring'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-bytestring'.");
    }
    globalThis['kotlinx-io-kotlinx-io-bytestring'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.c;
  var copyOfRange = kotlin_kotlin.$_$.h7;
  var protoOf = kotlin_kotlin.$_$.vd;
  var objectCreate = kotlin_kotlin.$_$.ud;
  var toCharArray = kotlin_kotlin.$_$.hh;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var getKClassFromExpression = kotlin_kotlin.$_$.ne;
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var contentEquals = kotlin_kotlin.$_$.d7;
  var contentHashCode = kotlin_kotlin.$_$.e7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var toString = kotlin_kotlin.$_$.yd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var arrayCopy = kotlin_kotlin.$_$.r6;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.j3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.k3;
  var compareTo = kotlin_kotlin.$_$.mc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x2;
  var Comparable = kotlin_kotlin.$_$.hi;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var decodeToString = kotlin_kotlin.$_$.nf;
  var Annotation = kotlin_kotlin.$_$.ci;
  var initMetadataForObject = kotlin_kotlin.$_$.ad;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForClass(UnsafeByteStringApi, 'UnsafeByteStringApi', VOID, VOID, [Annotation]);
  initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
  //endregion
  function _get_HEX_DIGITS__ouctnl($this) {
    return $this.HEX_DIGITS_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
    return $this;
  }
  function ByteString_init_$Create$(data, startIndex, endIndex) {
    return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
  }
  function _set_hashCode__t13pwk($this, _set____db54di) {
    $this.hashCode_2 = _set____db54di;
  }
  function _get_hashCode__t740ls($this) {
    return $this.hashCode_2;
  }
  function Companion() {
    Companion_instance = this;
    this.EMPTY_1 = new ByteString(new Int8Array(0), null);
    this.HEX_DIGITS_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).get_EMPTY_2we6ee_k$ = function () {
    return this.EMPTY_1;
  };
  protoOf(Companion).wrap_yhiemk_k$ = function (byteArray) {
    return new ByteString(byteArray, null);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ByteString(data, dummy) {
    Companion_getInstance();
    this.data_1 = data;
    this.hashCode_2 = 0;
  }
  protoOf(ByteString).get_size_woubt6_k$ = function () {
    return this.data_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.data_1.length === this.data_1.length))
      return false;
    if (!(other.hashCode_2 === 0) && !(this.hashCode_2 === 0) && !(other.hashCode_2 === this.hashCode_2))
      return false;
    return contentEquals(this.data_1, other.data_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.hashCode_2;
    if (hc === 0) {
      hc = contentHashCode(this.data_1);
      this.hashCode_2 = hc;
    }
    return hc;
  };
  protoOf(ByteString).get_c1px32_k$ = function (index) {
    if (index < 0 || index >= this.get_size_woubt6_k$())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.get_size_woubt6_k$() + ')');
    return this.data_1[index];
  };
  protoOf(ByteString).toByteArray_q2o6eu_k$ = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') > endIndex (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return copyOfRange(this.data_1, startIndex, endIndex);
  };
  protoOf(ByteString).toByteArray$default_jc5aj_k$ = function (startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    return $super === VOID ? this.toByteArray_q2o6eu_k$(startIndex, endIndex) : $super.toByteArray_q2o6eu_k$.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).copyInto_wpxnot_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') > endIndex (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.copyInto' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.data_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(ByteString).copyInto$default_jhe2in_k$ = function (destination, destinationOffset, startIndex, endIndex, $super) {
    destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    var tmp;
    if ($super === VOID) {
      this.copyInto_wpxnot_k$(destination, destinationOffset, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.copyInto_wpxnot_k$.call(this, destination, destinationOffset, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).substring_d7lab3_k$ = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().EMPTY_1;
    } else {
      tmp = ByteString_init_$Create$(this.data_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).substring$default_i6q0hx_k$ = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    return $super === VOID ? this.substring_d7lab3_k$(startIndex, endIndex) : $super.substring_d7lab3_k$.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).compareTo_yqa6ez_k$ = function (other) {
    if (other === this)
      return 0;
    var localData = this.data_1;
    var otherData = other.data_1;
    var inductionVariable = 0;
    var tmp0 = this.get_size_woubt6_k$();
    // Inline function 'kotlin.math.min' call
    var b = other.get_size_woubt6_k$();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp0_0 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp0_0) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.get_size_woubt6_k$(), other.get_size_woubt6_k$());
  };
  protoOf(ByteString).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_yqa6ez_k$(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.get_size_woubt6_k$().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.get_size_woubt6_k$(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.append_22ad7x_k$('ByteString(size=');
    $this$with.append_22ad7x_k$(sizeStr);
    $this$with.append_22ad7x_k$(' hex=');
    var localData = this.data_1;
    var inductionVariable = 0;
    var last = this.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.append_am5a4z_k$(Companion_getInstance().HEX_DIGITS_1[(b >>> 4 | 0) & 15]);
        $this$with.append_am5a4z_k$(Companion_getInstance().HEX_DIGITS_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.append_am5a4z_k$(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).getBackingArrayReference_x19ruh_k$ = function () {
    return this.data_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().EMPTY_1;
    } else {
      tmp = Companion_getInstance().wrap_yhiemk_k$(bytes);
    }
    return tmp;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.getBackingArrayReference_x19ruh_k$());
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$() === 0;
  }
  function UnsafeByteStringApi() {
  }
  protoOf(UnsafeByteStringApi).equals = function (other) {
    if (!(other instanceof UnsafeByteStringApi))
      return false;
    other instanceof UnsafeByteStringApi || THROW_CCE();
    return true;
  };
  protoOf(UnsafeByteStringApi).hashCode = function () {
    return 0;
  };
  protoOf(UnsafeByteStringApi).toString = function () {
    return '@kotlinx.io.bytestring.unsafe.UnsafeByteStringApi(' + ')';
  };
  function UnsafeByteStringOperations() {
    UnsafeByteStringOperations_instance = this;
  }
  protoOf(UnsafeByteStringOperations).wrapUnsafe_3fobxs_k$ = function (array) {
    return Companion_getInstance().wrap_yhiemk_k$(array);
  };
  protoOf(UnsafeByteStringOperations).withByteArrayUnsafe_wjoldj_k$ = function (byteString, block) {
    block(byteString.getBackingArrayReference_x19ruh_k$());
  };
  var UnsafeByteStringOperations_instance;
  function UnsafeByteStringOperations_getInstance() {
    if (UnsafeByteStringOperations_instance == null)
      new UnsafeByteStringOperations();
    return UnsafeByteStringOperations_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteString_init_$Create$;
  _.$_$.b = UnsafeByteStringOperations_getInstance;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
