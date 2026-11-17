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
  var copyOfRange = kotlin_kotlin.$_$.y5;
  var protoOf = kotlin_kotlin.$_$.rb;
  var objectCreate = kotlin_kotlin.$_$.qb;
  var toCharArray = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.ta;
  var getKClassFromExpression = kotlin_kotlin.$_$.jc;
  var THROW_CCE = kotlin_kotlin.$_$.mf;
  var Unit_instance = kotlin_kotlin.$_$.v2;
  var contentEquals = kotlin_kotlin.$_$.v5;
  var contentHashCode = kotlin_kotlin.$_$.w5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.n4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.s;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.t;
  var compareTo = kotlin_kotlin.$_$.ja;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var Comparable = kotlin_kotlin.$_$.ye;
  var initMetadataForClass = kotlin_kotlin.$_$.sa;
  var decodeToString = kotlin_kotlin.$_$.xc;
  var initMetadataForObject = kotlin_kotlin.$_$.ya;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
  //endregion
  function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
    return $this;
  }
  function ByteString_init_$Create$(data, startIndex, endIndex) {
    return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
  }
  function Companion() {
    Companion_instance = this;
    this.l16_1 = new ByteString(new Int8Array(0), null);
    this.m16_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).n16 = function (byteArray) {
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
    this.o16_1 = data;
    this.p16_1 = 0;
  }
  protoOf(ByteString).e1 = function () {
    return this.o16_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.o16_1.length === this.o16_1.length))
      return false;
    if (!(other.p16_1 === 0) && !(this.p16_1 === 0) && !(other.p16_1 === this.p16_1))
      return false;
    return contentEquals(this.o16_1, other.o16_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.p16_1;
    if (hc === 0) {
      hc = contentHashCode(this.o16_1);
      this.p16_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).d1 = function (index) {
    if (index < 0 || index >= this.e1())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.e1() + ')');
    return this.o16_1[index];
  };
  protoOf(ByteString).q16 = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().l16_1;
    } else {
      tmp = ByteString_init_$Create$(this.o16_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).r16 = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.e1() : endIndex;
    return $super === VOID ? this.q16(startIndex, endIndex) : $super.q16.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).s16 = function (other) {
    if (other === this)
      return 0;
    var localData = this.o16_1;
    var otherData = other.o16_1;
    var inductionVariable = 0;
    var tmp0 = this.e1();
    // Inline function 'kotlin.math.min' call
    var b = other.e1();
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
        var tmp$ret$5 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$5);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.e1(), other.e1());
  };
  protoOf(ByteString).d = function (other) {
    return this.s16(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.e1().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.e1(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.q('ByteString(size=');
    $this$with.q(sizeStr);
    $this$with.q(' hex=');
    var localData = this.o16_1;
    var inductionVariable = 0;
    var last = this.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.s(Companion_getInstance().m16_1[(b >>> 4 | 0) & 15]);
        $this$with.s(Companion_getInstance().m16_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.s(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).t16 = function () {
    return this.o16_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().l16_1;
    } else {
      tmp = Companion_getInstance().n16(bytes);
    }
    return tmp;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.t16());
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.e1() === 0;
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).u16 = function (array) {
    return Companion_getInstance().n16(array);
  };
  var UnsafeByteStringOperations_instance;
  function UnsafeByteStringOperations_getInstance() {
    return UnsafeByteStringOperations_instance;
  }
  //region block: init
  UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UnsafeByteStringOperations_instance;
  _.$_$.b = ByteString_init_$Create$;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
