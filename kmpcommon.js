(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kmpcommon'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kmpcommon'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kmpcommon'.");
    }
    globalThis.kmpcommon = factory(typeof kmpcommon === 'undefined' ? {} : kmpcommon, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.vj;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l1;
  var to = kotlin_kotlin.$_$.ak;
  var toMap = kotlin_kotlin.$_$.s9;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b7;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var toString = kotlin_kotlin.$_$.ae;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z2;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var get_double = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var get_floatOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var get_intOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var protoOf = kotlin_kotlin.$_$.xd;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var isInterface = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Unit_getInstance = kotlin_kotlin.$_$.c1;
  var getKClassFromExpression = kotlin_kotlin.$_$.pe;
  var println = kotlin_kotlin.$_$.db;
  var Enum = kotlin_kotlin.$_$.mi;
  var Long = kotlin_kotlin.$_$.ri;
  var THROW_CCE = kotlin_kotlin.$_$.wi;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var initMetadataForObject = kotlin_kotlin.$_$.bd;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
  //endregion
  function toAny($this, $receiver) {
    if ($receiver instanceof JsonPrimitive) {
      var tmp;
      if ($receiver.get_isString_zep7bw_k$()) {
        tmp = $receiver.get_content_h02jrk_k$();
      } else if (!(get_intOrNull($receiver) == null)) {
        tmp = get_int($receiver);
      } else if (!(get_longOrNull($receiver) == null)) {
        tmp = get_long($receiver);
      } else if (!(get_floatOrNull($receiver) == null)) {
        tmp = get_float($receiver);
      } else if (!(get_doubleOrNull($receiver) == null)) {
        tmp = get_double($receiver);
      } else if (!(get_booleanOrNull($receiver) == null)) {
        tmp = get_boolean($receiver);
      } else {
        throw IllegalStateException_init_$Create$("Can't deserialize unknown type: " + toString($receiver));
      }
      return tmp;
    } else {
      if ($receiver instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault($receiver, 10));
        var _iterator__ex2g4s = $receiver.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s.next_20eer_k$();
          var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
          destination.add_utx5q5_k$(tmp$ret$2);
        }
        return destination;
      } else {
        if ($receiver instanceof JsonObject) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$($receiver.get_size_woubt6_k$());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = $receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
          while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
            var item_0 = _iterator__ex2g4s_0.next_20eer_k$();
            var tmp$ret$6 = to(item_0.get_key_18j28a_k$(), toAny(AnySerializer_getInstance(), item_0.get_value_j01efc_k$()));
            destination_0.add_utx5q5_k$(tmp$ret$6);
          }
          return toMap(destination_0);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function AnySerializer$additionalSerializer$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function AnySerializer() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.additionalSerializer_1 = AnySerializer$additionalSerializer$lambda;
    this.descriptor_1 = buildClassSerialDescriptor('Any', []);
  }
  protoOf(AnySerializer).set_additionalSerializer_lbmiwd_k$ = function (_set____db54di) {
    this.additionalSerializer_1 = _set____db54di;
  };
  protoOf(AnySerializer).get_additionalSerializer_dfbdsu_k$ = function () {
    return this.additionalSerializer_1;
  };
  protoOf(AnySerializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf(AnySerializer).deserialize_sy6x50_k$ = function (decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var element = decoder.decodeJsonElement_6lz9ye_k$();
    return toAny(this, element);
  };
  protoOf(AnySerializer).serialize_qa2em9_k$ = function (encoder, value) {
    if (typeof value === 'number') {
      encoder.encodeInt_y5zi3z_k$(value);
    } else {
      if (value instanceof Long) {
        encoder.encodeLong_3didw_k$(value);
      } else {
        if (typeof value === 'number') {
          encoder.encodeShort_gza6si_k$(value);
        } else {
          if (typeof value === 'number') {
            encoder.encodeFloat_b8b85a_k$(value);
          } else {
            if (typeof value === 'number') {
              encoder.encodeDouble_n270q9_k$(value);
            } else {
              if (typeof value === 'string') {
                encoder.encodeString_424b5v_k$(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.encodeBoolean_tu2e59_k$(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.encodeString_424b5v_k$(toString(this));
                  } else {
                    if (!this.additionalSerializer_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(AnySerializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_qa2em9_k$(encoder, !(value == null) ? value : THROW_CCE());
  };
  var AnySerializer_instance;
  function AnySerializer_getInstance() {
    if (AnySerializer_instance == null)
      new AnySerializer();
    return AnySerializer_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnySerializer_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kmpcommon.js.map
