(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-core'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'kotlinx-io-kotlinx-io-core'.");
    }
    globalThis['kotlinx-io-kotlinx-io-core'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Long = kotlin_kotlin.$_$.qi;
  var compare = kotlin_kotlin.$_$.ib;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var toString = kotlin_kotlin.$_$.yd;
  var Unit_getInstance = kotlin_kotlin.$_$.s5;
  var fromInt = kotlin_kotlin.$_$.ob;
  var subtract = kotlin_kotlin.$_$.zb;
  var bitwiseAnd = kotlin_kotlin.$_$.fb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.x2;
  var charArrayOf = kotlin_kotlin.$_$.gc;
  var THROW_CCE = kotlin_kotlin.$_$.vi;
  var protoOf = kotlin_kotlin.$_$.vd;
  var Annotation = kotlin_kotlin.$_$.ci;
  var initMetadataForClass = kotlin_kotlin.$_$.uc;
  var VOID = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.nj;
  var equalsLong = kotlin_kotlin.$_$.nb;
  var toShort = kotlin_kotlin.$_$.xd;
  var shiftLeft = kotlin_kotlin.$_$.wb;
  var bitwiseOr = kotlin_kotlin.$_$.gb;
  var add = kotlin_kotlin.$_$.eb;
  var convertToInt = kotlin_kotlin.$_$.kb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var UnsafeByteStringOperations_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.b;
  var AutoCloseable = kotlin_kotlin.$_$.ei;
  var initMetadataForInterface = kotlin_kotlin.$_$.yc;
  var objectCreate = kotlin_kotlin.$_$.ud;
  var initMetadataForCompanion = kotlin_kotlin.$_$.vc;
  var arrayCopy = kotlin_kotlin.$_$.r6;
  var toByte = kotlin_kotlin.$_$.wd;
  var shiftRightUnsigned = kotlin_kotlin.$_$.xb;
  var convertToByte = kotlin_kotlin.$_$.jb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var initMetadataForObject = kotlin_kotlin.$_$.ad;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.d3;
  var multiply = kotlin_kotlin.$_$.tb;
  var charCodeAt = kotlin_kotlin.$_$.ic;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.kc;
  var endsWith = kotlin_kotlin.$_$.sf;
  var startsWith = kotlin_kotlin.$_$.ug;
  var substring = kotlin_kotlin.$_$.eh;
  var charArray = kotlin_kotlin.$_$.hc;
  var numberToChar = kotlin_kotlin.$_$.td;
  var concatToString = kotlin_kotlin.$_$.kf;
  var Char = kotlin_kotlin.$_$.gi;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.fc;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.n1;
  var Exception_init_$Init$_1 = kotlin_kotlin.$_$.l1;
  var Exception_init_$Init$_2 = kotlin_kotlin.$_$.p1;
  var Exception = kotlin_kotlin.$_$.ni;
  var KProperty0 = kotlin_kotlin.$_$.te;
  var getPropertyCallableRef = kotlin_kotlin.$_$.rc;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var lazy = kotlin_kotlin.$_$.tj;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var asReversed = kotlin_kotlin.$_$.u6;
  var contains = kotlin_kotlin.$_$.mf;
  var getStringHashCode = kotlin_kotlin.$_$.sc;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InternalIoApi, 'InternalIoApi', VOID, VOID, [Annotation]);
  initMetadataForClass(UnsafeIoApi, 'UnsafeIoApi', VOID, VOID, [Annotation]);
  initMetadataForClass(DelicateIoApi, 'DelicateIoApi', VOID, VOID, [Annotation]);
  initMetadataForInterface(RawSource, 'RawSource', VOID, VOID, [AutoCloseable]);
  function readAtMostTo$default(sink, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    return $super === VOID ? this.readAtMostTo_kub29z_k$(sink, startIndex, endIndex) : $super.readAtMostTo_kub29z_k$.call(this, sink, startIndex, endIndex);
  }
  initMetadataForInterface(Source, 'Source', VOID, VOID, [RawSource]);
  initMetadataForInterface(RawSink, 'RawSink', VOID, VOID, [AutoCloseable]);
  function write$default(source, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? source.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.write_ti570x_k$(source, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.write_ti570x_k$.call(this, source, startIndex, endIndex);
    }
    return tmp;
  }
  initMetadataForInterface(Sink, 'Sink', VOID, VOID, [RawSink]);
  initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
  initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [RawSource]);
  initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Segment, 'Segment');
  initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
  initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
  function delete$default(path, mustExist, $super) {
    mustExist = mustExist === VOID ? true : mustExist;
    var tmp;
    if ($super === VOID) {
      this.delete_wo7h84_k$(path, mustExist);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.delete_wo7h84_k$.call(this, path, mustExist);
    }
    return tmp;
  }
  function createDirectories$default(path, mustCreate, $super) {
    mustCreate = mustCreate === VOID ? false : mustCreate;
    var tmp;
    if ($super === VOID) {
      this.createDirectories_7nzr80_k$(path, mustCreate);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.createDirectories_7nzr80_k$.call(this, path, mustCreate);
    }
    return tmp;
  }
  function sink$default(path, append, $super) {
    append = append === VOID ? false : append;
    return $super === VOID ? this.sink_ed8sos_k$(path, append) : $super.sink_ed8sos_k$.call(this, path, append);
  }
  initMetadataForInterface(FileSystem, 'FileSystem');
  initMetadataForClass(SystemFileSystemImpl, 'SystemFileSystemImpl', VOID, VOID, [FileSystem]);
  initMetadataForClass(FileMetadata, 'FileMetadata', FileMetadata);
  initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
  initMetadataForInterface(SegmentReadContext, 'SegmentReadContext');
  initMetadataForInterface(SegmentWriteContext, 'SegmentWriteContext');
  initMetadataForInterface(BufferIterationContext, 'BufferIterationContext', VOID, VOID, [SegmentReadContext]);
  initMetadataForClass(SegmentReadContextImpl$1, VOID, VOID, VOID, [SegmentReadContext]);
  initMetadataForClass(SegmentWriteContextImpl$1, VOID, VOID, VOID, [SegmentWriteContext]);
  initMetadataForClass(BufferIterationContextImpl$1, VOID, VOID, VOID, [BufferIterationContext]);
  initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
  initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
  initMetadataForObject(SegmentPool, 'SegmentPool');
  initMetadataForClass(FileNotFoundException, 'FileNotFoundException', VOID, IOException);
  initMetadataForClass(SystemFileSystem$1, VOID, VOID, SystemFileSystemImpl);
  initMetadataForClass(Path_1, 'Path');
  initMetadataForClass(FileSource, 'FileSource', VOID, VOID, [RawSource]);
  initMetadataForClass(FileSink, 'FileSink', VOID, VOID, [RawSink]);
  //endregion
  function get_HEX_DIGIT_CHARS() {
    _init_properties__Util_kt__g8tcl9();
    return HEX_DIGIT_CHARS;
  }
  var HEX_DIGIT_CHARS;
  function and(_this__u8e3s4, other) {
    _init_properties__Util_kt__g8tcl9();
    return _this__u8e3s4 & other;
  }
  function checkBounds(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    if (compare(startIndex, new Long(0, 0)) < 0 || compare(endIndex, size) > 0) {
      throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
    if (compare(startIndex, endIndex) > 0) {
      throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
    }
  }
  function checkByteCount(byteCount) {
    _init_properties__Util_kt__g8tcl9();
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function minOf(a, b) {
    _init_properties__Util_kt__g8tcl9();
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = fromInt(b);
    return compare(a, b_0) <= 0 ? a : b_0;
  }
  function checkBounds_0(size, startIndex, endIndex) {
    _init_properties__Util_kt__g8tcl9();
    return checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
  }
  function checkOffsetAndCount(size, offset, byteCount) {
    _init_properties__Util_kt__g8tcl9();
    if (compare(offset, new Long(0, 0)) < 0 || compare(offset, size) > 0 || compare(subtract(size, offset), byteCount) < 0 || compare(byteCount, new Long(0, 0)) < 0) {
      throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
    }
  }
  function minOf_0(a, b) {
    _init_properties__Util_kt__g8tcl9();
    // Inline function 'kotlin.comparisons.minOf' call
    var a_0 = fromInt(a);
    return compare(a_0, b) <= 0 ? a_0 : b;
  }
  function shr(_this__u8e3s4, other) {
    _init_properties__Util_kt__g8tcl9();
    return _this__u8e3s4 >> other;
  }
  function and_0(_this__u8e3s4, other) {
    _init_properties__Util_kt__g8tcl9();
    return bitwiseAnd(fromInt(_this__u8e3s4), other);
  }
  var properties_initialized__Util_kt_67kc5b;
  function _init_properties__Util_kt__g8tcl9() {
    if (!properties_initialized__Util_kt_67kc5b) {
      properties_initialized__Util_kt_67kc5b = true;
      // Inline function 'kotlin.charArrayOf' call
      HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
    }
  }
  function InternalIoApi() {
  }
  protoOf(InternalIoApi).equals = function (other) {
    if (!(other instanceof InternalIoApi))
      return false;
    other instanceof InternalIoApi || THROW_CCE();
    return true;
  };
  protoOf(InternalIoApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalIoApi).toString = function () {
    return '@kotlinx.io.InternalIoApi(' + ')';
  };
  function UnsafeIoApi() {
  }
  protoOf(UnsafeIoApi).equals = function (other) {
    if (!(other instanceof UnsafeIoApi))
      return false;
    other instanceof UnsafeIoApi || THROW_CCE();
    return true;
  };
  protoOf(UnsafeIoApi).hashCode = function () {
    return 0;
  };
  protoOf(UnsafeIoApi).toString = function () {
    return '@kotlinx.io.UnsafeIoApi(' + ')';
  };
  function DelicateIoApi() {
  }
  protoOf(DelicateIoApi).equals = function (other) {
    if (!(other instanceof DelicateIoApi))
      return false;
    other instanceof DelicateIoApi || THROW_CCE();
    return true;
  };
  protoOf(DelicateIoApi).hashCode = function () {
    return 0;
  };
  protoOf(DelicateIoApi).toString = function () {
    return '@kotlinx.io.DelicateIoApi(' + ')';
  };
  function throwEof($this, byteCount) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.get_size_woubt6_k$().toString() + ', required: ' + byteCount.toString() + ')');
  }
  function pushSegment($this, newTail, tryCompact) {
    if ($this.head_1 == null) {
      $this.head_1 = newTail;
      $this.tail_1 = newTail;
    } else if (tryCompact) {
      $this.tail_1 = ensureNotNull($this.tail_1).push_h69db4_k$(newTail).compact_he236d_k$();
      if (ensureNotNull($this.tail_1).get_prev_d7or6k_k$() == null) {
        $this.head_1 = $this.tail_1;
      }
    } else {
      $this.tail_1 = ensureNotNull($this.tail_1).push_h69db4_k$(newTail);
    }
  }
  function Buffer() {
    this.head_1 = null;
    this.tail_1 = null;
    this.sizeMut_1 = new Long(0, 0);
  }
  protoOf(Buffer).set_head_gc442i_k$ = function (_set____db54di) {
    this.head_1 = _set____db54di;
  };
  protoOf(Buffer).get_head_1rxik1_k$ = function () {
    return this.head_1;
  };
  protoOf(Buffer).set_tail_w98yye_k$ = function (_set____db54di) {
    this.tail_1 = _set____db54di;
  };
  protoOf(Buffer).get_tail_yzvxr5_k$ = function () {
    return this.tail_1;
  };
  protoOf(Buffer).get_size_woubt6_k$ = function () {
    return this.sizeMut_1;
  };
  protoOf(Buffer).set_sizeMut_cp56bw_k$ = function (_set____db54di) {
    this.sizeMut_1 = _set____db54di;
  };
  protoOf(Buffer).get_sizeMut_lwlia2_k$ = function () {
    return this.sizeMut_1;
  };
  protoOf(Buffer).get_buffer_bmaafd_k$ = function () {
    return this;
  };
  protoOf(Buffer).exhausted_p1jt55_k$ = function () {
    return equalsLong(this.get_size_woubt6_k$(), new Long(0, 0));
  };
  protoOf(Buffer).require_28r0pl_k$ = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (compare(this.get_size_woubt6_k$(), byteCount) < 0) {
      throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.get_size_woubt6_k$().toString() + ', required: ' + byteCount.toString() + ')');
    }
  };
  protoOf(Buffer).request_mpoy7z_k$ = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount: ' + byteCount.toString() + ' < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return compare(this.get_size_woubt6_k$(), byteCount) >= 0;
  };
  protoOf(Buffer).readByte_ectjk2_k$ = function () {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(1, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize === 0) {
      this.recycleHead_e8xkbv_k$();
      return this.readByte_ectjk2_k$();
    }
    var v = segment.readByte_newmca_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, new Long(1, 0));
    if (segmentSize === 1) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  };
  protoOf(Buffer).readShort_ilpyey_k$ = function () {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(2, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 2) {
      this.require_28r0pl_k$(new Long(2, 0));
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readShort_ilpyey_k$();
      }
      // Inline function 'kotlinx.io.and' call
      var tmp_0 = (this.readByte_ectjk2_k$() & 255) << 8;
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$1 = this.readByte_ectjk2_k$() & 255;
      return toShort(tmp_0 | tmp$ret$1);
    }
    var v = segment.readShort_7b409e_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, new Long(2, 0));
    if (segmentSize === 2) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  };
  protoOf(Buffer).readInt_hv8cxl_k$ = function () {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(4, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 4) {
      this.require_28r0pl_k$(new Long(4, 0));
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readInt_hv8cxl_k$();
      }
      return this.readShort_ilpyey_k$() << 16 | this.readShort_ilpyey_k$() & 65535;
    }
    var v = segment.readInt_wxtzen_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, new Long(4, 0));
    if (segmentSize === 4) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  };
  protoOf(Buffer).readLong_ecnd8u_k$ = function () {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwEof(this, new Long(8, 0));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var segment = tmp;
    var segmentSize = segment.get_size_woubt6_k$();
    if (segmentSize < 8) {
      this.require_28r0pl_k$(new Long(8, 0));
      if (segmentSize === 0) {
        this.recycleHead_e8xkbv_k$();
        return this.readLong_ecnd8u_k$();
      }
      return bitwiseOr(shiftLeft(fromInt(this.readInt_hv8cxl_k$()), 32), bitwiseAnd(fromInt(this.readInt_hv8cxl_k$()), new Long(-1, 0)));
    }
    var v = segment.readLong_ud3obe_k$();
    this.sizeMut_1 = subtract(this.sizeMut_1, new Long(8, 0));
    if (segmentSize === 8) {
      this.recycleHead_e8xkbv_k$();
    }
    return v;
  };
  protoOf(Buffer).hintEmit_6b2e5m_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Buffer).emit_jn20hp_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Buffer).flush_shahbo_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Buffer).copyTo_f80oje_k$ = function (out, startIndex, endIndex) {
    checkBounds(this.get_size_woubt6_k$(), startIndex, endIndex);
    if (equalsLong(startIndex, endIndex))
      return Unit_getInstance();
    var currentOffset = startIndex;
    var remainingByteCount = subtract(endIndex, startIndex);
    out.sizeMut_1 = add(out.sizeMut_1, remainingByteCount);
    var s = this.head_1;
    while (compare(currentOffset, fromInt(ensureNotNull(s).get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0)) >= 0) {
      currentOffset = subtract(currentOffset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
      s = s.get_next_dym7ms_k$();
    }
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      var copy = ensureNotNull(s).sharedCopy_efss0u_k$();
      copy.set_pos_tbkcm1_k$(copy.get_pos_c7hn7x_k$() + convertToInt(currentOffset) | 0);
      var tmp0 = copy.get_pos_c7hn7x_k$() + convertToInt(remainingByteCount) | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = copy.get_limit_kzbf7q_k$();
      var tmp$ret$0 = Math.min(tmp0, b);
      copy.set_limit_3yu7ea_k$(tmp$ret$0);
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (out.head_1 == null) {
        out.head_1 = copy;
        out.tail_1 = copy;
      } else if (false) {
        out.tail_1 = ensureNotNull(out.tail_1).push_h69db4_k$(copy).compact_he236d_k$();
        if (ensureNotNull(out.tail_1).get_prev_d7or6k_k$() == null) {
          out.head_1 = out.tail_1;
        }
      } else {
        out.tail_1 = ensureNotNull(out.tail_1).push_h69db4_k$(copy);
      }
      remainingByteCount = subtract(remainingByteCount, fromInt(copy.get_limit_kzbf7q_k$() - copy.get_pos_c7hn7x_k$() | 0));
      currentOffset = new Long(0, 0);
      s = s.get_next_dym7ms_k$();
    }
  };
  protoOf(Buffer).copyTo$default_txus2s_k$ = function (out, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    var tmp;
    if ($super === VOID) {
      this.copyTo_f80oje_k$(out, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.copyTo_f80oje_k$.call(this, out, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(Buffer).completeSegmentByteCount_46ltjp_k$ = function () {
    var result = this.get_size_woubt6_k$();
    if (equalsLong(result, new Long(0, 0)))
      return new Long(0, 0);
    var tail = ensureNotNull(this.tail_1);
    if (tail.get_limit_kzbf7q_k$() < 8192 && tail.get_owner_cz9qry_k$()) {
      result = subtract(result, fromInt(tail.get_limit_kzbf7q_k$() - tail.get_pos_c7hn7x_k$() | 0));
    }
    return result;
  };
  protoOf(Buffer).get_ugtq3c_k$ = function (position) {
    if (compare(position, new Long(0, 0)) < 0 || compare(position, this.get_size_woubt6_k$()) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.get_size_woubt6_k$().toString() + '))');
    }
    if (equalsLong(position, new Long(0, 0))) {
      return ensureNotNull(this.head_1).getUnchecked_g7gmig_k$(0);
    }
    // Inline function 'kotlinx.io.seek' call
    if (this.head_1 == null) {
      var offset = new Long(-1, -1);
      return ensureNotNull(null).getUnchecked_g7gmig_k$(convertToInt(subtract(position, offset)));
    }
    if (compare(subtract(this.get_size_woubt6_k$(), position), position) < 0) {
      var s = this.tail_1;
      var offset_0 = this.get_size_woubt6_k$();
      $l$loop: while (!(s == null) && compare(offset_0, position) > 0) {
        offset_0 = subtract(offset_0, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
        if (compare(offset_0, position) <= 0)
          break $l$loop;
        s = s.get_prev_d7or6k_k$();
      }
      var tmp0 = s;
      var offset_1 = offset_0;
      return ensureNotNull(tmp0).getUnchecked_g7gmig_k$(convertToInt(subtract(position, offset_1)));
    } else {
      var s_0 = this.head_1;
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_0 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
        var nextOffset = add(tmp0_0, fromInt(other));
        if (compare(nextOffset, position) > 0)
          break $l$loop_0;
        s_0 = s_0.get_next_dym7ms_k$();
        offset_2 = nextOffset;
      }
      var tmp0_1 = s_0;
      var offset_3 = offset_2;
      return ensureNotNull(tmp0_1).getUnchecked_g7gmig_k$(convertToInt(subtract(position, offset_3)));
    }
  };
  protoOf(Buffer).clear_j9egeb_k$ = function () {
    return this.skip_bgd4sf_k$(this.get_size_woubt6_k$());
  };
  protoOf(Buffer).skip_bgd4sf_k$ = function (byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      var tmp0_elvis_lhs = this.head_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var head = tmp;
      var tmp0 = remainingByteCount;
      // Inline function 'kotlinx.io.minOf' call
      var b = head.get_limit_kzbf7q_k$() - head.get_pos_c7hn7x_k$() | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b_0 = fromInt(b);
      var tmp$ret$4 = compare(tmp0, b_0) <= 0 ? tmp0 : b_0;
      var toSkip = convertToInt(tmp$ret$4);
      this.sizeMut_1 = subtract(this.sizeMut_1, fromInt(toSkip));
      remainingByteCount = subtract(remainingByteCount, fromInt(toSkip));
      head.set_pos_tbkcm1_k$(head.get_pos_c7hn7x_k$() + toSkip | 0);
      if (head.get_pos_c7hn7x_k$() === head.get_limit_kzbf7q_k$()) {
        this.recycleHead_e8xkbv_k$();
      }
    }
  };
  protoOf(Buffer).readAtMostTo_kub29z_k$ = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return -1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var s = tmp;
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = s.get_size_woubt6_k$();
    var toCopy = Math.min(tmp0, b);
    s.readTo_7avxxz_k$(sink, startIndex, startIndex + toCopy | 0);
    this.sizeMut_1 = subtract(this.sizeMut_1, fromInt(toCopy));
    if (isEmpty(s)) {
      this.recycleHead_e8xkbv_k$();
    }
    return toCopy;
  };
  protoOf(Buffer).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(this.get_size_woubt6_k$(), new Long(0, 0)))
      return new Long(-1, -1);
    var bytesWritten = compare(byteCount, this.get_size_woubt6_k$()) > 0 ? this.get_size_woubt6_k$() : byteCount;
    sink.write_yvqjfp_k$(this, bytesWritten);
    return bytesWritten;
  };
  protoOf(Buffer).readTo_rtq83_k$ = function (sink, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (compare(this.get_size_woubt6_k$(), byteCount) < 0) {
      sink.write_yvqjfp_k$(this, this.get_size_woubt6_k$());
      throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.get_size_woubt6_k$().toString() + ' bytes were written.');
    }
    sink.write_yvqjfp_k$(this, byteCount);
  };
  protoOf(Buffer).transferTo_lu4ka2_k$ = function (sink) {
    var byteCount = this.get_size_woubt6_k$();
    if (compare(byteCount, new Long(0, 0)) > 0) {
      sink.write_yvqjfp_k$(this, byteCount);
    }
    return byteCount;
  };
  protoOf(Buffer).peek_21nx7_k$ = function () {
    return buffered(new PeekSource(this));
  };
  protoOf(Buffer).writableSegment_voqx71_k$ = function (minimumCapacity) {
    // Inline function 'kotlin.require' call
    if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
      var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.tail_1 == null) {
      var result = SegmentPool_getInstance().take_2451j_k$();
      this.head_1 = result;
      this.tail_1 = result;
      return result;
    }
    var t = ensureNotNull(this.tail_1);
    if ((t.get_limit_kzbf7q_k$() + minimumCapacity | 0) > 8192 || !t.get_owner_cz9qry_k$()) {
      var newTail = t.push_h69db4_k$(SegmentPool_getInstance().take_2451j_k$());
      this.tail_1 = newTail;
      return newTail;
    }
    return t;
  };
  protoOf(Buffer).write_ti570x_k$ = function (source, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = source.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var currentOffset = startIndex;
    while (currentOffset < endIndex) {
      var tail = this.writableSegment_voqx71_k$(1);
      var tmp0 = endIndex - currentOffset | 0;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tail.get_remainingCapacity_c94947_k$();
      var toCopy = Math.min(tmp0, b);
      tail.write_j6nfmf_k$(source, currentOffset, currentOffset + toCopy | 0);
      currentOffset = currentOffset + toCopy | 0;
    }
    var tmp = this;
    var tmp0_0 = this.sizeMut_1;
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    tmp.sizeMut_1 = add(tmp0_0, fromInt(other));
  };
  protoOf(Buffer).write_nimze1_k$ = function (source, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      var read = source.readAtMostTo_nyls31_k$(this, remainingByteCount);
      if (equalsLong(read, new Long(-1, -1))) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + subtract(byteCount, remainingByteCount).toString() + ' were read.'));
      }
      remainingByteCount = subtract(remainingByteCount, read);
    }
  };
  protoOf(Buffer).write_yvqjfp_k$ = function (source, byteCount) {
    // Inline function 'kotlin.require' call
    if (!!(source === this)) {
      var message = 'source == this';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkOffsetAndCount(source.sizeMut_1, new Long(0, 0), byteCount);
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      if (compare(remainingByteCount, fromInt(ensureNotNull(source.head_1).get_size_woubt6_k$())) < 0) {
        var tail = this.tail_1;
        var tmp;
        if (!(tail == null) && tail.get_owner_cz9qry_k$()) {
          var tmp0 = remainingByteCount;
          // Inline function 'kotlin.Long.plus' call
          var other = tail.get_limit_kzbf7q_k$();
          var tmp0_0 = add(tmp0, fromInt(other));
          // Inline function 'kotlin.Long.minus' call
          var other_0 = tail.get_shared_lt0222_k$() ? 0 : tail.get_pos_c7hn7x_k$();
          var tmp$ret$3 = subtract(tmp0_0, fromInt(other_0));
          tmp = compare(tmp$ret$3, new Long(8192, 0)) <= 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          ensureNotNull(source.head_1).writeTo_vgyea0_k$(tail, convertToInt(remainingByteCount));
          source.sizeMut_1 = subtract(source.sizeMut_1, remainingByteCount);
          this.sizeMut_1 = add(this.sizeMut_1, remainingByteCount);
          return Unit_getInstance();
        } else {
          source.head_1 = ensureNotNull(source.head_1).split_p6jwdi_k$(convertToInt(remainingByteCount));
        }
      }
      var segmentToMove = ensureNotNull(source.head_1);
      var movedByteCount = fromInt(segmentToMove.get_size_woubt6_k$());
      source.head_1 = segmentToMove.pop_417547_k$();
      if (source.head_1 == null) {
        source.tail_1 = null;
      }
      // Inline function 'kotlinx.io.Buffer.pushSegment' call
      if (this.head_1 == null) {
        this.head_1 = segmentToMove;
        this.tail_1 = segmentToMove;
      } else if (true) {
        this.tail_1 = ensureNotNull(this.tail_1).push_h69db4_k$(segmentToMove).compact_he236d_k$();
        if (ensureNotNull(this.tail_1).get_prev_d7or6k_k$() == null) {
          this.head_1 = this.tail_1;
        }
      } else {
        this.tail_1 = ensureNotNull(this.tail_1).push_h69db4_k$(segmentToMove);
      }
      source.sizeMut_1 = subtract(source.sizeMut_1, movedByteCount);
      this.sizeMut_1 = add(this.sizeMut_1, movedByteCount);
      remainingByteCount = subtract(remainingByteCount, movedByteCount);
    }
  };
  protoOf(Buffer).transferFrom_v29myr_k$ = function (source) {
    var totalBytesRead = new Long(0, 0);
    $l$loop: while (true) {
      var readCount = source.readAtMostTo_nyls31_k$(this, new Long(8192, 0));
      if (equalsLong(readCount, new Long(-1, -1)))
        break $l$loop;
      totalBytesRead = add(totalBytesRead, readCount);
    }
    return totalBytesRead;
  };
  protoOf(Buffer).writeByte_9ih3z3_k$ = function (byte) {
    this.writableSegment_voqx71_k$(1).writeByte_naaedl_k$(byte);
    this.sizeMut_1 = add(this.sizeMut_1, new Long(1, 0));
  };
  protoOf(Buffer).writeShort_vn2jsb_k$ = function (short) {
    this.writableSegment_voqx71_k$(2).writeShort_n1l1d9_k$(short);
    this.sizeMut_1 = add(this.sizeMut_1, new Long(2, 0));
  };
  protoOf(Buffer).writeInt_i8xgjs_k$ = function (int) {
    this.writableSegment_voqx71_k$(4).writeInt_6bnyio_k$(int);
    this.sizeMut_1 = add(this.sizeMut_1, new Long(4, 0));
  };
  protoOf(Buffer).writeLong_2rx6yl_k$ = function (long) {
    this.writableSegment_voqx71_k$(8).writeLong_uftc01_k$(long);
    this.sizeMut_1 = add(this.sizeMut_1, new Long(8, 0));
  };
  protoOf(Buffer).copy_1tks5_k$ = function () {
    var result = new Buffer();
    if (equalsLong(this.get_size_woubt6_k$(), new Long(0, 0)))
      return result;
    var head = ensureNotNull(this.head_1);
    var headCopy = head.sharedCopy_efss0u_k$();
    result.head_1 = headCopy;
    result.tail_1 = headCopy;
    var s = head.get_next_dym7ms_k$();
    while (!(s == null)) {
      result.tail_1 = ensureNotNull(result.tail_1).push_h69db4_k$(s.sharedCopy_efss0u_k$());
      s = s.get_next_dym7ms_k$();
    }
    result.sizeMut_1 = this.get_size_woubt6_k$();
    return result;
  };
  protoOf(Buffer).close_yn9xrc_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(Buffer).toString = function () {
    if (equalsLong(this.get_size_woubt6_k$(), new Long(0, 0)))
      return 'Buffer(size=0)';
    var maxPrintableBytes = 64;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.get_size_woubt6_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(maxPrintableBytes);
    var tmp$ret$1 = compare(a, b) <= 0 ? a : b;
    var len = convertToInt(tmp$ret$1);
    var builder = StringBuilder_init_$Create$(imul(len, 2) + (compare(this.get_size_woubt6_k$(), fromInt(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
    var bytesWritten = 0;
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    UnsafeBufferOperations_getInstance();
    var curr = this.head_1;
    while (!(curr == null)) {
      var tmp0 = get_SegmentReadContextImpl();
      var segment = curr;
      var idx = 0;
      while (bytesWritten < len && idx < segment.get_size_woubt6_k$()) {
        var _unary__edvuaz = idx;
        idx = _unary__edvuaz + 1 | 0;
        var b_0 = tmp0.getUnchecked_akrbjy_k$(segment, _unary__edvuaz);
        bytesWritten = bytesWritten + 1 | 0;
        var tmp = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.shr' call
        var tmp$ret$2 = b_0 >> 4;
        var tmp_0 = builder.append_am5a4z_k$(tmp[tmp$ret$2 & 15]);
        var tmp_1 = get_HEX_DIGIT_CHARS();
        // Inline function 'kotlinx.io.and' call
        var tmp$ret$3 = b_0 & 15;
        tmp_0.append_am5a4z_k$(tmp_1[tmp$ret$3]);
      }
      curr = curr.get_next_dym7ms_k$();
    }
    if (compare(this.get_size_woubt6_k$(), fromInt(maxPrintableBytes)) > 0) {
      builder.append_am5a4z_k$(_Char___init__impl__6a9atx(8230));
    }
    return 'Buffer(size=' + this.get_size_woubt6_k$().toString() + ' hex=' + builder.toString() + ')';
  };
  protoOf(Buffer).recycleHead_e8xkbv_k$ = function () {
    var oldHead = ensureNotNull(this.head_1);
    var nextHead = oldHead.get_next_dym7ms_k$();
    this.head_1 = nextHead;
    if (nextHead == null) {
      this.tail_1 = null;
    } else {
      nextHead.set_prev_lowsh9_k$(null);
    }
    oldHead.set_next_szvhf1_k$(null);
    SegmentPool_getInstance().recycle_3mobff_k$(oldHead);
  };
  protoOf(Buffer).recycleTail_61sxi3_k$ = function () {
    var oldTail = ensureNotNull(this.tail_1);
    var newTail = oldTail.get_prev_d7or6k_k$();
    this.tail_1 = newTail;
    if (newTail == null) {
      this.head_1 = null;
    } else {
      newTail.set_next_szvhf1_k$(null);
    }
    oldTail.set_prev_lowsh9_k$(null);
    SegmentPool_getInstance().recycle_3mobff_k$(oldTail);
  };
  function seek(_this__u8e3s4, fromIndex, lambda) {
    if (_this__u8e3s4.head_1 == null) {
      return lambda(null, new Long(-1, -1));
    }
    if (compare(subtract(_this__u8e3s4.get_size_woubt6_k$(), fromIndex), fromIndex) < 0) {
      var s = _this__u8e3s4.tail_1;
      var offset = _this__u8e3s4.get_size_woubt6_k$();
      $l$loop: while (!(s == null) && compare(offset, fromIndex) > 0) {
        offset = subtract(offset, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
        if (compare(offset, fromIndex) <= 0)
          break $l$loop;
        s = s.get_prev_d7or6k_k$();
      }
      return lambda(s, offset);
    } else {
      var s_0 = _this__u8e3s4.head_1;
      var offset_0 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0 = offset_0;
        // Inline function 'kotlin.Long.plus' call
        var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
        var nextOffset = add(tmp0, fromInt(other));
        if (compare(nextOffset, fromIndex) > 0)
          break $l$loop_0;
        s_0 = s_0.get_next_dym7ms_k$();
        offset_0 = nextOffset;
      }
      return lambda(s_0, offset_0);
    }
  }
  function indexOf(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.get_size_woubt6_k$() : endIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = _this__u8e3s4.get_size_woubt6_k$();
    var endOffset = compare(endIndex, b) <= 0 ? endIndex : b;
    checkBounds(_this__u8e3s4.get_size_woubt6_k$(), startIndex, endOffset);
    if (equalsLong(startIndex, endOffset))
      return new Long(-1, -1);
    // Inline function 'kotlinx.io.seek' call
    if (_this__u8e3s4.get_head_1rxik1_k$() == null) {
      var o = new Long(-1, -1);
      if (equalsLong(o, new Long(-1, -1))) {
        return new Long(-1, -1);
      }
      var segment = null;
      var offset = o;
      do {
        // Inline function 'kotlin.check' call
        if (!(compare(endOffset, offset) > 0)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        ensureNotNull(segment);
        var tmp = segment;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = convertToInt(subtract(startIndex, offset));
        var tmp_0 = Math.max(a, 0);
        var tmp0 = segment.get_size_woubt6_k$();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = convertToInt(subtract(endOffset, offset));
        var tmp$ret$3 = Math.min(tmp0, b_0);
        var idx = indexOf_0(tmp, byte, tmp_0, tmp$ret$3);
        if (!(idx === -1)) {
          return add(offset, fromInt(idx));
        }
        var tmp0_0 = offset;
        // Inline function 'kotlin.Long.plus' call
        var other = segment.get_size_woubt6_k$();
        offset = add(tmp0_0, fromInt(other));
        segment = segment.get_next_dym7ms_k$();
      }
       while (!(segment == null) && compare(offset, endOffset) < 0);
      return new Long(-1, -1);
    }
    if (compare(subtract(_this__u8e3s4.get_size_woubt6_k$(), startIndex), startIndex) < 0) {
      var s = _this__u8e3s4.get_tail_yzvxr5_k$();
      var offset_0 = _this__u8e3s4.get_size_woubt6_k$();
      $l$loop: while (!(s == null) && compare(offset_0, startIndex) > 0) {
        offset_0 = subtract(offset_0, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
        if (compare(offset_0, startIndex) <= 0)
          break $l$loop;
        s = s.get_prev_d7or6k_k$();
      }
      var tmp0_1 = s;
      var o_0 = offset_0;
      if (equalsLong(o_0, new Long(-1, -1))) {
        return new Long(-1, -1);
      }
      var segment_0 = tmp0_1;
      var offset_1 = o_0;
      do {
        // Inline function 'kotlin.check' call
        if (!(compare(endOffset, offset_1) > 0)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        ensureNotNull(segment_0);
        var tmp_1 = segment_0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_0 = convertToInt(subtract(startIndex, offset_1));
        var tmp_2 = Math.max(a_0, 0);
        var tmp0_2 = segment_0.get_size_woubt6_k$();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_1 = convertToInt(subtract(endOffset, offset_1));
        var tmp$ret$8 = Math.min(tmp0_2, b_1);
        var idx_0 = indexOf_0(tmp_1, byte, tmp_2, tmp$ret$8);
        if (!(idx_0 === -1)) {
          return add(offset_1, fromInt(idx_0));
        }
        var tmp0_3 = offset_1;
        // Inline function 'kotlin.Long.plus' call
        var other_0 = segment_0.get_size_woubt6_k$();
        offset_1 = add(tmp0_3, fromInt(other_0));
        segment_0 = segment_0.get_next_dym7ms_k$();
      }
       while (!(segment_0 == null) && compare(offset_1, endOffset) < 0);
      return new Long(-1, -1);
    } else {
      var s_0 = _this__u8e3s4.get_head_1rxik1_k$();
      var offset_2 = new Long(0, 0);
      $l$loop_0: while (!(s_0 == null)) {
        var tmp0_4 = offset_2;
        // Inline function 'kotlin.Long.plus' call
        var other_1 = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
        var nextOffset = add(tmp0_4, fromInt(other_1));
        if (compare(nextOffset, startIndex) > 0)
          break $l$loop_0;
        s_0 = s_0.get_next_dym7ms_k$();
        offset_2 = nextOffset;
      }
      var tmp0_5 = s_0;
      var o_1 = offset_2;
      if (equalsLong(o_1, new Long(-1, -1))) {
        return new Long(-1, -1);
      }
      var segment_1 = tmp0_5;
      var offset_3 = o_1;
      do {
        // Inline function 'kotlin.check' call
        if (!(compare(endOffset, offset_3) > 0)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        ensureNotNull(segment_1);
        var tmp_3 = segment_1;
        // Inline function 'kotlin.comparisons.maxOf' call
        var a_1 = convertToInt(subtract(startIndex, offset_3));
        var tmp_4 = Math.max(a_1, 0);
        var tmp0_6 = segment_1.get_size_woubt6_k$();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_2 = convertToInt(subtract(endOffset, offset_3));
        var tmp$ret$13 = Math.min(tmp0_6, b_2);
        var idx_1 = indexOf_0(tmp_3, byte, tmp_4, tmp$ret$13);
        if (!(idx_1 === -1)) {
          return add(offset_3, fromInt(idx_1));
        }
        var tmp0_7 = offset_3;
        // Inline function 'kotlin.Long.plus' call
        var other_2 = segment_1.get_size_woubt6_k$();
        offset_3 = add(tmp0_7, fromInt(other_2));
        segment_1 = segment_1.get_next_dym7ms_k$();
      }
       while (!(segment_1 == null) && compare(offset_3, endOffset) < 0);
      return new Long(-1, -1);
    }
  }
  function readByteString(_this__u8e3s4, byteCount) {
    return UnsafeByteStringOperations_getInstance().wrapUnsafe_3fobxs_k$(readByteArray_0(_this__u8e3s4, byteCount));
  }
  function buffered(_this__u8e3s4) {
    return new RealSource(_this__u8e3s4);
  }
  function _get_upstream__8b4500($this) {
    return $this.upstream_1;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_expectedSegment__ufl0ui($this, _set____db54di) {
    $this.expectedSegment_1 = _set____db54di;
  }
  function _get_expectedSegment__uhstm2($this) {
    return $this.expectedSegment_1;
  }
  function _set_expectedPos__7eepj($this, _set____db54di) {
    $this.expectedPos_1 = _set____db54di;
  }
  function _get_expectedPos__u2zrmd($this) {
    return $this.expectedPos_1;
  }
  function _set_closed__kdb0et($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1($this) {
    return $this.closed_1;
  }
  function _set_pos__4wcab5($this, _set____db54di) {
    $this.pos_1 = _set____db54di;
  }
  function _get_pos__e6evgd($this) {
    return $this.pos_1;
  }
  function PeekSource(upstream) {
    this.upstream_1 = upstream;
    this.buffer_1 = this.upstream_1.get_buffer_bmaafd_k$();
    this.expectedSegment_1 = this.buffer_1.get_head_1rxik1_k$();
    var tmp = this;
    var tmp0_safe_receiver = this.buffer_1.get_head_1rxik1_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pos_c7hn7x_k$();
    tmp.expectedPos_1 = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    this.closed_1 = false;
    this.pos_1 = new Long(0, 0);
  }
  protoOf(PeekSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.io.checkByteCount' call
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!(this.expectedSegment_1 == null || (this.expectedSegment_1 === this.buffer_1.get_head_1rxik1_k$() && this.expectedPos_1 === ensureNotNull(this.buffer_1.get_head_1rxik1_k$()).get_pos_c7hn7x_k$()))) {
      var message_1 = 'Peek source is invalid because upstream source was used';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    if (equalsLong(byteCount, new Long(0, 0)))
      return new Long(0, 0);
    // Inline function 'kotlin.Long.plus' call
    var this_0 = this.pos_1;
    var tmp$ret$7 = add(this_0, fromInt(1));
    if (!this.upstream_1.request_mpoy7z_k$(tmp$ret$7))
      return new Long(-1, -1);
    if (this.expectedSegment_1 == null && !(this.buffer_1.get_head_1rxik1_k$() == null)) {
      this.expectedSegment_1 = this.buffer_1.get_head_1rxik1_k$();
      this.expectedPos_1 = ensureNotNull(this.buffer_1.get_head_1rxik1_k$()).get_pos_c7hn7x_k$();
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = subtract(this.buffer_1.get_size_woubt6_k$(), this.pos_1);
    var toCopy = compare(byteCount, b) <= 0 ? byteCount : b;
    this.buffer_1.copyTo_f80oje_k$(sink, this.pos_1, add(this.pos_1, toCopy));
    this.pos_1 = add(this.pos_1, toCopy);
    return toCopy;
  };
  protoOf(PeekSource).close_yn9xrc_k$ = function () {
    this.closed_1 = true;
  };
  function RawSource() {
  }
  function _get_bufferField__cx5nm1($this) {
    return $this.bufferField_1;
  }
  function checkNotClosed($this) {
    // Inline function 'kotlin.check' call
    if (!!$this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function RealSource(source) {
    this.source_1 = source;
    this.closed_1 = false;
    this.bufferField_1 = new Buffer();
  }
  protoOf(RealSource).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(RealSource).set_closed_z8zuoc_k$ = function (_set____db54di) {
    this.closed_1 = _set____db54di;
  };
  protoOf(RealSource).get_closed_byjrzp_k$ = function () {
    return this.closed_1;
  };
  protoOf(RealSource).get_buffer_bmaafd_k$ = function () {
    return this.bufferField_1;
  };
  protoOf(RealSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    if (equalsLong(this.bufferField_1.get_size_woubt6_k$(), new Long(0, 0))) {
      var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0));
      if (equalsLong(read, new Long(-1, -1)))
        return new Long(-1, -1);
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = this.bufferField_1.get_size_woubt6_k$();
    var toRead = compare(byteCount, b) <= 0 ? byteCount : b;
    return this.bufferField_1.readAtMostTo_nyls31_k$(sink, toRead);
  };
  protoOf(RealSource).exhausted_p1jt55_k$ = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.bufferField_1.exhausted_p1jt55_k$() && equalsLong(this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0)), new Long(-1, -1));
  };
  protoOf(RealSource).require_28r0pl_k$ = function (byteCount) {
    if (!this.request_mpoy7z_k$(byteCount))
      throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
  };
  protoOf(RealSource).request_mpoy7z_k$ = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    while (compare(this.bufferField_1.get_size_woubt6_k$(), byteCount) < 0) {
      if (equalsLong(this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0)), new Long(-1, -1)))
        return false;
    }
    return true;
  };
  protoOf(RealSource).readByte_ectjk2_k$ = function () {
    this.require_28r0pl_k$(new Long(1, 0));
    return this.bufferField_1.readByte_ectjk2_k$();
  };
  protoOf(RealSource).readAtMostTo_kub29z_k$ = function (sink, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    if (equalsLong(this.bufferField_1.get_size_woubt6_k$(), new Long(0, 0))) {
      var read = this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0));
      if (equalsLong(read, new Long(-1, -1)))
        return -1;
    }
    var tmp0 = endIndex - startIndex | 0;
    // Inline function 'kotlinx.io.minOf' call
    var b = this.bufferField_1.get_size_woubt6_k$();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = fromInt(tmp0);
    var tmp$ret$2 = compare(a, b) <= 0 ? a : b;
    var toRead = convertToInt(tmp$ret$2);
    return this.bufferField_1.readAtMostTo_kub29z_k$(sink, startIndex, startIndex + toRead | 0);
  };
  protoOf(RealSource).readTo_rtq83_k$ = function (sink, byteCount) {
    try {
      this.require_28r0pl_k$(byteCount);
    } catch ($p) {
      if ($p instanceof EOFException) {
        var e = $p;
        sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
        throw e;
      } else {
        throw $p;
      }
    }
    this.bufferField_1.readTo_rtq83_k$(sink, byteCount);
  };
  protoOf(RealSource).transferTo_lu4ka2_k$ = function (sink) {
    var totalBytesWritten = new Long(0, 0);
    while (!equalsLong(this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0)), new Long(-1, -1))) {
      var emitByteCount = this.bufferField_1.completeSegmentByteCount_46ltjp_k$();
      if (compare(emitByteCount, new Long(0, 0)) > 0) {
        totalBytesWritten = add(totalBytesWritten, emitByteCount);
        sink.write_yvqjfp_k$(this.bufferField_1, emitByteCount);
      }
    }
    if (compare(this.bufferField_1.get_size_woubt6_k$(), new Long(0, 0)) > 0) {
      totalBytesWritten = add(totalBytesWritten, this.bufferField_1.get_size_woubt6_k$());
      sink.write_yvqjfp_k$(this.bufferField_1, this.bufferField_1.get_size_woubt6_k$());
    }
    return totalBytesWritten;
  };
  protoOf(RealSource).readShort_ilpyey_k$ = function () {
    this.require_28r0pl_k$(new Long(2, 0));
    return this.bufferField_1.readShort_ilpyey_k$();
  };
  protoOf(RealSource).readInt_hv8cxl_k$ = function () {
    this.require_28r0pl_k$(new Long(4, 0));
    return this.bufferField_1.readInt_hv8cxl_k$();
  };
  protoOf(RealSource).readLong_ecnd8u_k$ = function () {
    this.require_28r0pl_k$(new Long(8, 0));
    return this.bufferField_1.readLong_ecnd8u_k$();
  };
  protoOf(RealSource).skip_bgd4sf_k$ = function (byteCount) {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount, new Long(0, 0)) >= 0)) {
      var message_0 = 'byteCount: ' + byteCount.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var remainingByteCount = byteCount;
    while (compare(remainingByteCount, new Long(0, 0)) > 0) {
      if (equalsLong(this.bufferField_1.get_size_woubt6_k$(), new Long(0, 0)) && equalsLong(this.source_1.readAtMostTo_nyls31_k$(this.bufferField_1, new Long(8192, 0)), new Long(-1, -1))) {
        throw EOFException_init_$Create$_0('Source exhausted before skipping ' + byteCount.toString() + ' bytes ' + ('(only ' + subtract(remainingByteCount, byteCount).toString() + ' bytes were skipped).'));
      }
      var tmp0 = remainingByteCount;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.bufferField_1.get_size_woubt6_k$();
      var toSkip = compare(tmp0, b) <= 0 ? tmp0 : b;
      this.bufferField_1.skip_bgd4sf_k$(toSkip);
      remainingByteCount = subtract(remainingByteCount, toSkip);
    }
  };
  protoOf(RealSource).peek_21nx7_k$ = function () {
    // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return buffered(new PeekSource(this));
  };
  protoOf(RealSource).close_yn9xrc_k$ = function () {
    if (this.closed_1)
      return Unit_getInstance();
    this.closed_1 = true;
    this.source_1.close_yn9xrc_k$();
    this.bufferField_1.clear_j9egeb_k$();
  };
  protoOf(RealSource).toString = function () {
    return 'buffered(' + toString(this.source_1) + ')';
  };
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function Segment_init_$Init$($this) {
    Segment.call($this);
    $this.data_1 = new Int8Array(8192);
    $this.owner_1 = true;
    $this.copyTracker_1 = null;
    return $this;
  }
  function Segment_init_$Create$() {
    return Segment_init_$Init$(objectCreate(protoOf(Segment)));
  }
  function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
    Segment.call($this);
    $this.data_1 = data;
    $this.pos_1 = pos;
    $this.limit_1 = limit;
    $this.copyTracker_1 = shareToken;
    $this.owner_1 = owner;
    return $this;
  }
  function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
    return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
  }
  function Companion() {
    Companion_instance = this;
    this.SIZE_1 = 8192;
    this.SHARE_MINIMUM_1 = 1024;
  }
  protoOf(Companion).get_SIZE_fo5rta_k$ = function () {
    return this.SIZE_1;
  };
  protoOf(Companion).get_SHARE_MINIMUM_96sg1f_k$ = function () {
    return this.SHARE_MINIMUM_1;
  };
  protoOf(Companion).new_79u2a0_k$ = function () {
    return Segment_init_$Create$();
  };
  protoOf(Companion).new_jmbae1_k$ = function (data, pos, limit, copyTracker, owner) {
    return Segment_init_$Create$_0(data, pos, limit, copyTracker, owner);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  protoOf(Segment).set_pos_tbkcm1_k$ = function (_set____db54di) {
    this.pos_1 = _set____db54di;
  };
  protoOf(Segment).get_pos_c7hn7x_k$ = function () {
    return this.pos_1;
  };
  protoOf(Segment).set_limit_3yu7ea_k$ = function (_set____db54di) {
    this.limit_1 = _set____db54di;
  };
  protoOf(Segment).get_limit_kzbf7q_k$ = function () {
    return this.limit_1;
  };
  protoOf(Segment).get_shared_lt0222_k$ = function () {
    var tmp0_safe_receiver = this.copyTracker_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_shared_jgtlda_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Segment).set_copyTracker_zbl494_k$ = function (_set____db54di) {
    this.copyTracker_1 = _set____db54di;
  };
  protoOf(Segment).get_copyTracker_4g5ha6_k$ = function () {
    return this.copyTracker_1;
  };
  protoOf(Segment).set_owner_8qbt4d_k$ = function (_set____db54di) {
    this.owner_1 = _set____db54di;
  };
  protoOf(Segment).get_owner_cz9qry_k$ = function () {
    return this.owner_1;
  };
  protoOf(Segment).set_next_szvhf1_k$ = function (_set____db54di) {
    this.next_1 = _set____db54di;
  };
  protoOf(Segment).get_next_dym7ms_k$ = function () {
    return this.next_1;
  };
  protoOf(Segment).set_prev_lowsh9_k$ = function (_set____db54di) {
    this.prev_1 = _set____db54di;
  };
  protoOf(Segment).get_prev_d7or6k_k$ = function () {
    return this.prev_1;
  };
  protoOf(Segment).sharedCopy_efss0u_k$ = function () {
    var tmp0_elvis_lhs = this.copyTracker_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = SegmentPool_getInstance().tracker_hnhzgo_k$();
      this.copyTracker_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var t = tmp;
    var tmp_0 = this.pos_1;
    var tmp_1 = this.limit_1;
    // Inline function 'kotlin.also' call
    t.addCopy_6z3v8m_k$();
    return Segment_init_$Create$_0(this.data_1, tmp_0, tmp_1, t, false);
  };
  protoOf(Segment).pop_417547_k$ = function () {
    var result = this.next_1;
    if (!(this.prev_1 == null)) {
      ensureNotNull(this.prev_1).next_1 = this.next_1;
    }
    if (!(this.next_1 == null)) {
      ensureNotNull(this.next_1).prev_1 = this.prev_1;
    }
    this.next_1 = null;
    this.prev_1 = null;
    return result;
  };
  protoOf(Segment).push_h69db4_k$ = function (segment) {
    segment.prev_1 = this;
    segment.next_1 = this.next_1;
    if (!(this.next_1 == null)) {
      ensureNotNull(this.next_1).prev_1 = segment;
    }
    this.next_1 = segment;
    return segment;
  };
  protoOf(Segment).split_p6jwdi_k$ = function (byteCount) {
    // Inline function 'kotlin.require' call
    if (!(byteCount > 0 && byteCount <= (this.limit_1 - this.pos_1 | 0))) {
      var message = 'byteCount out of range';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var prefix;
    if (byteCount >= 1024) {
      prefix = this.sharedCopy_efss0u_k$();
    } else {
      prefix = SegmentPool_getInstance().take_2451j_k$();
      var tmp0 = this.data_1;
      var tmp2 = prefix.data_1;
      var tmp5 = this.pos_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.pos_1 + byteCount | 0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
    }
    prefix.limit_1 = prefix.pos_1 + byteCount | 0;
    this.pos_1 = this.pos_1 + byteCount | 0;
    if (!(this.prev_1 == null)) {
      ensureNotNull(this.prev_1).push_h69db4_k$(prefix);
    } else {
      prefix.next_1 = this;
      this.prev_1 = prefix;
    }
    return prefix;
  };
  protoOf(Segment).compact_he236d_k$ = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.prev_1 == null)) {
      var message = 'cannot compact';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!ensureNotNull(this.prev_1).owner_1)
      return this;
    var byteCount = this.limit_1 - this.pos_1 | 0;
    var availableByteCount = (8192 - ensureNotNull(this.prev_1).limit_1 | 0) + (ensureNotNull(this.prev_1).get_shared_lt0222_k$() ? 0 : ensureNotNull(this.prev_1).pos_1) | 0;
    if (byteCount > availableByteCount)
      return this;
    var predecessor = this.prev_1;
    this.writeTo_vgyea0_k$(ensureNotNull(predecessor), byteCount);
    var successor = this.pop_417547_k$();
    // Inline function 'kotlin.check' call
    if (!(successor == null)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    SegmentPool_getInstance().recycle_3mobff_k$(this);
    return predecessor;
  };
  protoOf(Segment).writeByte_naaedl_k$ = function (byte) {
    var _unary__edvuaz = this.limit_1;
    this.limit_1 = _unary__edvuaz + 1 | 0;
    this.data_1[_unary__edvuaz] = byte;
  };
  protoOf(Segment).writeShort_n1l1d9_k$ = function (short) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte(short & 255);
    this.limit_1 = limit;
  };
  protoOf(Segment).writeInt_6bnyio_k$ = function (int) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = toByte((int >>> 24 | 0) & 255);
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = toByte((int >>> 16 | 0) & 255);
    var _unary__edvuaz_1 = limit;
    limit = _unary__edvuaz_1 + 1 | 0;
    data[_unary__edvuaz_1] = toByte((int >>> 8 | 0) & 255);
    var _unary__edvuaz_2 = limit;
    limit = _unary__edvuaz_2 + 1 | 0;
    data[_unary__edvuaz_2] = toByte(int & 255);
    this.limit_1 = limit;
  };
  protoOf(Segment).writeLong_uftc01_k$ = function (long) {
    var data = this.data_1;
    var limit = this.limit_1;
    var _unary__edvuaz = limit;
    limit = _unary__edvuaz + 1 | 0;
    data[_unary__edvuaz] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 56), new Long(255, 0)));
    var _unary__edvuaz_0 = limit;
    limit = _unary__edvuaz_0 + 1 | 0;
    data[_unary__edvuaz_0] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 48), new Long(255, 0)));
    var _unary__edvuaz_1 = limit;
    limit = _unary__edvuaz_1 + 1 | 0;
    data[_unary__edvuaz_1] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 40), new Long(255, 0)));
    var _unary__edvuaz_2 = limit;
    limit = _unary__edvuaz_2 + 1 | 0;
    data[_unary__edvuaz_2] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 32), new Long(255, 0)));
    var _unary__edvuaz_3 = limit;
    limit = _unary__edvuaz_3 + 1 | 0;
    data[_unary__edvuaz_3] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 24), new Long(255, 0)));
    var _unary__edvuaz_4 = limit;
    limit = _unary__edvuaz_4 + 1 | 0;
    data[_unary__edvuaz_4] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 16), new Long(255, 0)));
    var _unary__edvuaz_5 = limit;
    limit = _unary__edvuaz_5 + 1 | 0;
    data[_unary__edvuaz_5] = convertToByte(bitwiseAnd(shiftRightUnsigned(long, 8), new Long(255, 0)));
    var _unary__edvuaz_6 = limit;
    limit = _unary__edvuaz_6 + 1 | 0;
    data[_unary__edvuaz_6] = convertToByte(bitwiseAnd(long, new Long(255, 0)));
    this.limit_1 = limit;
  };
  protoOf(Segment).readByte_newmca_k$ = function () {
    var _unary__edvuaz = this.pos_1;
    this.pos_1 = _unary__edvuaz + 1 | 0;
    return this.data_1[_unary__edvuaz];
  };
  protoOf(Segment).readShort_7b409e_k$ = function () {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 8;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
    var s = toShort(tmp | tmp$ret$1);
    this.pos_1 = pos;
    return s;
  };
  protoOf(Segment).readInt_wxtzen_k$ = function () {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp = (data[_unary__edvuaz] & 255) << 24;
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = tmp | (data[_unary__edvuaz_0] & 255) << 16;
    var _unary__edvuaz_1 = pos;
    pos = _unary__edvuaz_1 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var tmp_1 = tmp_0 | (data[_unary__edvuaz_1] & 255) << 8;
    var _unary__edvuaz_2 = pos;
    pos = _unary__edvuaz_2 + 1 | 0;
    // Inline function 'kotlinx.io.and' call
    var i = tmp_1 | data[_unary__edvuaz_2] & 255;
    this.pos_1 = pos;
    return i;
  };
  protoOf(Segment).readLong_ud3obe_k$ = function () {
    var data = this.data_1;
    var pos = this.pos_1;
    var _unary__edvuaz = pos;
    pos = _unary__edvuaz + 1 | 0;
    var tmp0 = data[_unary__edvuaz];
    // Inline function 'kotlinx.io.and' call
    var other = new Long(255, 0);
    var tmp$ret$0 = bitwiseAnd(fromInt(tmp0), other);
    var tmp = shiftLeft(tmp$ret$0, 56);
    var _unary__edvuaz_0 = pos;
    pos = _unary__edvuaz_0 + 1 | 0;
    var tmp0_0 = data[_unary__edvuaz_0];
    // Inline function 'kotlinx.io.and' call
    var other_0 = new Long(255, 0);
    var tmp$ret$1 = bitwiseAnd(fromInt(tmp0_0), other_0);
    var tmp_0 = bitwiseOr(tmp, shiftLeft(tmp$ret$1, 48));
    var _unary__edvuaz_1 = pos;
    pos = _unary__edvuaz_1 + 1 | 0;
    var tmp0_1 = data[_unary__edvuaz_1];
    // Inline function 'kotlinx.io.and' call
    var other_1 = new Long(255, 0);
    var tmp$ret$2 = bitwiseAnd(fromInt(tmp0_1), other_1);
    var tmp_1 = bitwiseOr(tmp_0, shiftLeft(tmp$ret$2, 40));
    var _unary__edvuaz_2 = pos;
    pos = _unary__edvuaz_2 + 1 | 0;
    var tmp0_2 = data[_unary__edvuaz_2];
    // Inline function 'kotlinx.io.and' call
    var other_2 = new Long(255, 0);
    var tmp$ret$3 = bitwiseAnd(fromInt(tmp0_2), other_2);
    var tmp_2 = bitwiseOr(tmp_1, shiftLeft(tmp$ret$3, 32));
    var _unary__edvuaz_3 = pos;
    pos = _unary__edvuaz_3 + 1 | 0;
    var tmp0_3 = data[_unary__edvuaz_3];
    // Inline function 'kotlinx.io.and' call
    var other_3 = new Long(255, 0);
    var tmp$ret$4 = bitwiseAnd(fromInt(tmp0_3), other_3);
    var tmp_3 = bitwiseOr(tmp_2, shiftLeft(tmp$ret$4, 24));
    var _unary__edvuaz_4 = pos;
    pos = _unary__edvuaz_4 + 1 | 0;
    var tmp0_4 = data[_unary__edvuaz_4];
    // Inline function 'kotlinx.io.and' call
    var other_4 = new Long(255, 0);
    var tmp$ret$5 = bitwiseAnd(fromInt(tmp0_4), other_4);
    var tmp_4 = bitwiseOr(tmp_3, shiftLeft(tmp$ret$5, 16));
    var _unary__edvuaz_5 = pos;
    pos = _unary__edvuaz_5 + 1 | 0;
    var tmp0_5 = data[_unary__edvuaz_5];
    // Inline function 'kotlinx.io.and' call
    var other_5 = new Long(255, 0);
    var tmp$ret$6 = bitwiseAnd(fromInt(tmp0_5), other_5);
    var tmp_5 = bitwiseOr(tmp_4, shiftLeft(tmp$ret$6, 8));
    var _unary__edvuaz_6 = pos;
    pos = _unary__edvuaz_6 + 1 | 0;
    var tmp0_6 = data[_unary__edvuaz_6];
    // Inline function 'kotlinx.io.and' call
    var other_6 = new Long(255, 0);
    var tmp$ret$7 = bitwiseAnd(fromInt(tmp0_6), other_6);
    var v = bitwiseOr(tmp_5, tmp$ret$7);
    this.pos_1 = pos;
    return v;
  };
  protoOf(Segment).writeTo_vgyea0_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!sink.owner_1) {
      var message = 'only owner can write';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if ((sink.limit_1 + byteCount | 0) > 8192) {
      if (sink.get_shared_lt0222_k$())
        throw IllegalArgumentException_init_$Create$_0();
      if (((sink.limit_1 + byteCount | 0) - sink.pos_1 | 0) > 8192)
        throw IllegalArgumentException_init_$Create$_0();
      var tmp0 = sink.data_1;
      var tmp2 = sink.data_1;
      var tmp5 = sink.pos_1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = sink.limit_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, tmp2, 0, tmp5, endIndex);
      sink.limit_1 = sink.limit_1 - sink.pos_1 | 0;
      sink.pos_1 = 0;
    }
    var tmp0_0 = this.data_1;
    var tmp2_0 = sink.data_1;
    var tmp4 = sink.limit_1;
    var tmp6 = this.pos_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = this.pos_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, tmp2_0, tmp4, tmp6, endIndex_0);
    sink.limit_1 = sink.limit_1 + byteCount | 0;
    this.pos_1 = this.pos_1 + byteCount | 0;
  };
  protoOf(Segment).readTo_7avxxz_k$ = function (dst, dstStartOffset, dstEndOffset) {
    var len = dstEndOffset - dstStartOffset | 0;
    var tmp0 = this.data_1;
    var tmp6 = this.pos_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.pos_1 + len | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstStartOffset, tmp6, endIndex);
    this.pos_1 = this.pos_1 + len | 0;
  };
  protoOf(Segment).write_j6nfmf_k$ = function (src, srcStartOffset, srcEndOffset) {
    var tmp2 = this.data_1;
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = this.limit_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, destinationOffset, srcStartOffset, srcEndOffset);
    this.limit_1 = this.limit_1 + (srcEndOffset - srcStartOffset | 0) | 0;
  };
  protoOf(Segment).get_size_woubt6_k$ = function () {
    return this.limit_1 - this.pos_1 | 0;
  };
  protoOf(Segment).get_remainingCapacity_c94947_k$ = function () {
    return this.data_1.length - this.limit_1 | 0;
  };
  protoOf(Segment).dataAsByteArray_g1m4im_k$ = function (readOnly) {
    return this.data_1;
  };
  protoOf(Segment).writeBackData_bei69s_k$ = function (data, bytesToCommit) {
    return Unit_getInstance();
  };
  protoOf(Segment).getUnchecked_g7gmig_k$ = function (index) {
    return this.data_1[this.pos_1 + index | 0];
  };
  protoOf(Segment).setUnchecked_5zbo2s_k$ = function (index, value) {
    this.data_1[this.limit_1 + index | 0] = value;
  };
  protoOf(Segment).setUnchecked_fqg8f0_k$ = function (index, b0, b1) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
  };
  protoOf(Segment).setUnchecked_lebl98_k$ = function (index, b0, b1, b2) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
  };
  protoOf(Segment).setUnchecked_8pgckc_k$ = function (index, b0, b1, b2, b3) {
    var d = this.data_1;
    var l = this.limit_1;
    d[l + index | 0] = b0;
    d[(l + index | 0) + 1 | 0] = b1;
    d[(l + index | 0) + 2 | 0] = b2;
    d[(l + index | 0) + 3 | 0] = b3;
  };
  function Segment() {
    Companion_getInstance();
    this.pos_1 = 0;
    this.limit_1 = 0;
    this.copyTracker_1 = null;
    this.owner_1 = false;
    this.next_1 = null;
    this.prev_1 = null;
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$() === 0;
  }
  function SegmentCopyTracker() {
  }
  function AlwaysSharedCopyTracker() {
    AlwaysSharedCopyTracker_instance = this;
    SegmentCopyTracker.call(this);
  }
  protoOf(AlwaysSharedCopyTracker).get_shared_jgtlda_k$ = function () {
    return true;
  };
  protoOf(AlwaysSharedCopyTracker).addCopy_6z3v8m_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(AlwaysSharedCopyTracker).removeCopy_i5rgnt_k$ = function () {
    return true;
  };
  var AlwaysSharedCopyTracker_instance;
  function AlwaysSharedCopyTracker_getInstance() {
    if (AlwaysSharedCopyTracker_instance == null)
      new AlwaysSharedCopyTracker();
    return AlwaysSharedCopyTracker_instance;
  }
  function indexOf_0(_this__u8e3s4, byte, startOffset, endOffset) {
    // Inline function 'kotlin.require' call
    if (!(0 <= startOffset ? startOffset < _this__u8e3s4.get_size_woubt6_k$() : false)) {
      var message = '' + startOffset;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startOffset <= endOffset ? endOffset <= _this__u8e3s4.get_size_woubt6_k$() : false)) {
      var message_0 = '' + endOffset;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var p = _this__u8e3s4.pos_1;
    var data = _this__u8e3s4.dataAsByteArray_g1m4im_k$(true);
    var inductionVariable = startOffset;
    if (inductionVariable < endOffset)
      do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (data[p + idx | 0] === byte) {
          return idx;
        }
      }
       while (inductionVariable < endOffset);
    return -1;
  }
  function Sink() {
  }
  function get_HEX_DIGIT_BYTES() {
    _init_properties_Sinks_kt__92ml72();
    return HEX_DIGIT_BYTES;
  }
  var HEX_DIGIT_BYTES;
  function writeToInternalBuffer(_this__u8e3s4, lambda) {
    _init_properties_Sinks_kt__92ml72();
    lambda(_this__u8e3s4.get_buffer_bmaafd_k$());
    _this__u8e3s4.hintEmit_6b2e5m_k$();
  }
  var properties_initialized_Sinks_kt_u7wmts;
  function _init_properties_Sinks_kt__92ml72() {
    if (!properties_initialized_Sinks_kt_u7wmts) {
      properties_initialized_Sinks_kt_u7wmts = true;
      var tmp = 0;
      var tmp_0 = new Int8Array(16);
      while (tmp < 16) {
        var tmp_1 = tmp;
        var tmp_2;
        if (tmp_1 < 10) {
          // Inline function 'kotlin.code' call
          var this_0 = _Char___init__impl__6a9atx(48);
          tmp_2 = Char__toInt_impl_vasixd(this_0);
        } else {
          // Inline function 'kotlin.code' call
          var this_1 = _Char___init__impl__6a9atx(97);
          tmp_2 = Char__toInt_impl_vasixd(this_1) - 10 | 0;
        }
        tmp_0[tmp_1] = toByte(tmp_2 + tmp_1 | 0);
        tmp = tmp + 1 | 0;
      }
      HEX_DIGIT_BYTES = tmp_0;
    }
  }
  function Source() {
  }
  function readByteArray(_this__u8e3s4) {
    return readByteArrayImpl(_this__u8e3s4, -1);
  }
  function readByteArray_0(_this__u8e3s4, byteCount) {
    // Inline function 'kotlinx.io.checkByteCount' call
    var byteCount_0 = fromInt(byteCount);
    // Inline function 'kotlin.require' call
    if (!(compare(byteCount_0, new Long(0, 0)) >= 0)) {
      var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return readByteArrayImpl(_this__u8e3s4, byteCount);
  }
  function indexOf_1(_this__u8e3s4, byte, startIndex, endIndex) {
    startIndex = startIndex === VOID ? new Long(0, 0) : startIndex;
    endIndex = endIndex === VOID ? new Long(-1, 2147483647) : endIndex;
    // Inline function 'kotlin.require' call
    if (!(compare(new Long(0, 0), startIndex) <= 0 ? compare(startIndex, endIndex) <= 0 : false)) {
      var tmp;
      if (compare(endIndex, new Long(0, 0)) < 0) {
        tmp = 'startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') should be non negative';
      } else {
        tmp = 'startIndex (' + startIndex.toString() + ') is not within the range [0..endIndex(' + endIndex.toString() + '))';
      }
      var message = tmp;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(startIndex, endIndex))
      return new Long(-1, -1);
    var offset = startIndex;
    $l$loop: while (true) {
      var tmp_0;
      if (compare(offset, endIndex) < 0) {
        // Inline function 'kotlin.Long.plus' call
        var this_0 = offset;
        var tmp$ret$2 = add(this_0, fromInt(1));
        tmp_0 = _this__u8e3s4.request_mpoy7z_k$(tmp$ret$2);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = _this__u8e3s4.get_buffer_bmaafd_k$();
      var tmp_2 = offset;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
      var tmp$ret$3 = compare(endIndex, b) <= 0 ? endIndex : b;
      var idx = indexOf(tmp_1, byte, tmp_2, tmp$ret$3);
      if (!equalsLong(idx, new Long(-1, -1))) {
        return idx;
      }
      offset = _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$();
    }
    return new Long(-1, -1);
  }
  function readByteArrayImpl(_this__u8e3s4, size) {
    var arraySize = size;
    if (size === -1) {
      var fetchSize = new Long(2147483647, 0);
      while (compare(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$(), new Long(2147483647, 0)) < 0 && _this__u8e3s4.request_mpoy7z_k$(fetchSize)) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = fetchSize;
        fetchSize = multiply(this_0, fromInt(2));
      }
      // Inline function 'kotlin.check' call
      if (!(compare(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$(), new Long(2147483647, 0)) < 0)) {
        var message = "Can't create an array of size " + _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$().toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
      arraySize = convertToInt(_this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
    } else {
      _this__u8e3s4.require_28r0pl_k$(fromInt(size));
    }
    var array = new Int8Array(arraySize);
    readTo(_this__u8e3s4.get_buffer_bmaafd_k$(), array);
    return array;
  }
  function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? sink.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = sink.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var offset = startIndex;
    while (offset < endIndex) {
      var bytesRead = _this__u8e3s4.readAtMostTo_kub29z_k$(sink, offset, endIndex);
      if (bytesRead === -1) {
        throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
      }
      offset = offset + bytesRead | 0;
    }
  }
  function readString(_this__u8e3s4, byteCount) {
    _this__u8e3s4.require_28r0pl_k$(byteCount);
    return commonReadUtf8(_this__u8e3s4.get_buffer_bmaafd_k$(), byteCount);
  }
  function readString_0(_this__u8e3s4) {
    _this__u8e3s4.request_mpoy7z_k$(new Long(-1, 2147483647));
    return commonReadUtf8(_this__u8e3s4.get_buffer_bmaafd_k$(), _this__u8e3s4.get_buffer_bmaafd_k$().get_size_woubt6_k$());
  }
  function writeString(_this__u8e3s4, string, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? string.length : endIndex;
    // Inline function 'kotlinx.io.checkBounds' call
    var size = string.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    // Inline function 'kotlinx.io.writeToInternalBuffer' call
    // Inline function 'kotlinx.io.commonWriteUtf8' call
    var this_0 = _this__u8e3s4.get_buffer_bmaafd_k$();
    var i = startIndex;
    while (i < endIndex) {
      var p0 = i;
      // Inline function 'kotlin.code' call
      var this_1 = charCodeAt(string, p0);
      var c = Char__toInt_impl_vasixd(this_1);
      if (c < 128) {
        UnsafeBufferOperations_getInstance();
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = this_0.writableSegment_voqx71_k$(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.get_remainingCapacity_c94947_k$() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            var p0_0 = i;
            // Inline function 'kotlin.code' call
            var this_2 = charCodeAt(string, p0_0);
            c = Char__toInt_impl_vasixd(this_2);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_3 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$7 = add(this_3, fromInt(bytesWritten));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$7);
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_4 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$11 = add(this_4, fromInt(bytesWritten));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$11);
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            this_0.recycleTail_61sxi3_k$();
          }
        }
      } else if (c < 2048) {
        UnsafeBufferOperations_getInstance();
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = this_0.writableSegment_voqx71_k$(2);
          get_SegmentWriteContextImpl().setUnchecked_3svw1y_k$(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_5 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$13 = add(this_5, fromInt(bytesWritten_0));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$13);
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.get_remainingCapacity_c94947_k$() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_6 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$17 = add(this_6, fromInt(bytesWritten_0));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$17);
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            this_0.recycleTail_61sxi3_k$();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        UnsafeBufferOperations_getInstance();
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = this_0.writableSegment_voqx71_k$(3);
          get_SegmentWriteContextImpl().setUnchecked_ofazem_k$(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_7 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$19 = add(this_7, fromInt(bytesWritten_1));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$19);
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.get_remainingCapacity_c94947_k$() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_8 = this_0.get_sizeMut_lwlia2_k$();
            var tmp$ret$23 = add(this_8, fromInt(bytesWritten_1));
            this_0.set_sizeMut_cp56bw_k$(tmp$ret$23);
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            this_0.recycleTail_61sxi3_k$();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          var p0_1 = i + 1 | 0;
          // Inline function 'kotlin.code' call
          var this_9 = charCodeAt(string, p0_1);
          tmp = Char__toInt_impl_vasixd(this_9);
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(63);
          var tmp$ret$26 = Char__toInt_impl_vasixd(this_10);
          this_0.writeByte_9ih3z3_k$(toByte(tmp$ret$26));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          UnsafeBufferOperations_getInstance();
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = this_0.writableSegment_voqx71_k$(4);
            get_SegmentWriteContextImpl().setUnchecked_7scgvu_k$(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
              // Inline function 'kotlin.Long.plus' call
              var this_11 = this_0.get_sizeMut_lwlia2_k$();
              var tmp$ret$28 = add(this_11, fromInt(bytesWritten_2));
              this_0.set_sizeMut_cp56bw_k$(tmp$ret$28);
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.get_remainingCapacity_c94947_k$() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.get_remainingCapacity_c94947_k$();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
              // Inline function 'kotlin.Long.plus' call
              var this_12 = this_0.get_sizeMut_lwlia2_k$();
              var tmp$ret$32 = add(this_12, fromInt(bytesWritten_2));
              this_0.set_sizeMut_cp56bw_k$(tmp$ret$32);
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              this_0.recycleTail_61sxi3_k$();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
    _this__u8e3s4.hintEmit_6b2e5m_k$();
  }
  function commonReadUtf8(_this__u8e3s4, byteCount) {
    if (equalsLong(byteCount, new Long(0, 0)))
      return '';
    // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
    UnsafeBufferOperations_getInstance();
    var curr = _this__u8e3s4.get_head_1rxik1_k$();
    while (!(curr == null)) {
      get_SegmentReadContextImpl();
      if (compare(fromInt(curr.get_size_woubt6_k$()), byteCount) >= 0) {
        var result = '';
        // Inline function 'kotlinx.io.unsafe.withData' call
        var tmp0 = curr.dataAsByteArray_g1m4im_k$(true);
        var tmp2 = curr.get_pos_c7hn7x_k$();
        var tmp0_0 = curr.get_limit_kzbf7q_k$();
        // Inline function 'kotlin.math.min' call
        var b = tmp2 + convertToInt(byteCount) | 0;
        var tmp$ret$0 = Math.min(tmp0_0, b);
        result = commonToUtf8String(tmp0, tmp2, tmp$ret$0);
        _this__u8e3s4.skip_bgd4sf_k$(byteCount);
        return result;
      }
      return commonToUtf8String(readByteArray_0(_this__u8e3s4, convertToInt(byteCount)));
    }
    // Inline function 'kotlin.error' call
    var message = 'Unreacheable';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function commonWriteUtf8(_this__u8e3s4, beginIndex, endIndex, charAt) {
    var i = beginIndex;
    while (i < endIndex) {
      // Inline function 'kotlin.code' call
      var this_0 = charAt(i).value_1;
      var c = Char__toInt_impl_vasixd(this_0);
      if (c < 128) {
        UnsafeBufferOperations_getInstance();
        $l$block_0: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail = _this__u8e3s4.writableSegment_voqx71_k$(1);
          var ctx = get_SegmentWriteContextImpl();
          var segmentOffset = -i | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b = i + tail.get_remainingCapacity_c94947_k$() | 0;
          var runLimit = Math.min(endIndex, b);
          var _unary__edvuaz = i;
          i = _unary__edvuaz + 1 | 0;
          ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
          $l$loop: while (i < runLimit) {
            // Inline function 'kotlin.code' call
            var this_1 = charAt(i).value_1;
            c = Char__toInt_impl_vasixd(this_1);
            if (c >= 128)
              break $l$loop;
            var _unary__edvuaz_0 = i;
            i = _unary__edvuaz_0 + 1 | 0;
            ctx.setUnchecked_b2f64i_k$(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
          }
          var bytesWritten = i + segmentOffset | 0;
          if (bytesWritten === 1) {
            tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_2 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$4 = add(this_2, fromInt(bytesWritten));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$4);
            break $l$block_0;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
            var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message));
          }
          if (!(bytesWritten === 0)) {
            tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_3 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$8 = add(this_3, fromInt(bytesWritten));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$8);
            break $l$block_0;
          }
          if (isEmpty(tail)) {
            _this__u8e3s4.recycleTail_61sxi3_k$();
          }
        }
      } else if (c < 2048) {
        UnsafeBufferOperations_getInstance();
        $l$block_2: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_0 = _this__u8e3s4.writableSegment_voqx71_k$(2);
          get_SegmentWriteContextImpl().setUnchecked_3svw1y_k$(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
          var bytesWritten_0 = 2;
          if (bytesWritten_0 === 2) {
            tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_4 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$10 = add(this_4, fromInt(bytesWritten_0));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$10);
            break $l$block_2;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.get_remainingCapacity_c94947_k$() : false)) {
            var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message_0));
          }
          if (!(bytesWritten_0 === 0)) {
            tail_0.set_limit_3yu7ea_k$(tail_0.get_limit_kzbf7q_k$() + bytesWritten_0 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_5 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$14 = add(this_5, fromInt(bytesWritten_0));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$14);
            break $l$block_2;
          }
          if (isEmpty(tail_0)) {
            _this__u8e3s4.recycleTail_61sxi3_k$();
          }
        }
        i = i + 1 | 0;
      } else if (c < 55296 || c > 57343) {
        UnsafeBufferOperations_getInstance();
        $l$block_4: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_1 = _this__u8e3s4.writableSegment_voqx71_k$(3);
          get_SegmentWriteContextImpl().setUnchecked_ofazem_k$(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
          var bytesWritten_1 = 3;
          if (bytesWritten_1 === 3) {
            tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_6 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$16 = add(this_6, fromInt(bytesWritten_1));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$16);
            break $l$block_4;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.get_remainingCapacity_c94947_k$() : false)) {
            var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.get_remainingCapacity_c94947_k$();
            throw IllegalStateException_init_$Create$(toString(message_1));
          }
          if (!(bytesWritten_1 === 0)) {
            tail_1.set_limit_3yu7ea_k$(tail_1.get_limit_kzbf7q_k$() + bytesWritten_1 | 0);
            // Inline function 'kotlin.Long.plus' call
            var this_7 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
            var tmp$ret$20 = add(this_7, fromInt(bytesWritten_1));
            _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$20);
            break $l$block_4;
          }
          if (isEmpty(tail_1)) {
            _this__u8e3s4.recycleTail_61sxi3_k$();
          }
        }
        i = i + 1 | 0;
      } else {
        var tmp;
        if ((i + 1 | 0) < endIndex) {
          // Inline function 'kotlin.code' call
          var this_8 = charAt(i + 1 | 0).value_1;
          tmp = Char__toInt_impl_vasixd(this_8);
        } else {
          tmp = 0;
        }
        var low = tmp;
        if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
          // Inline function 'kotlin.code' call
          var this_9 = _Char___init__impl__6a9atx(63);
          var tmp$ret$22 = Char__toInt_impl_vasixd(this_9);
          _this__u8e3s4.writeByte_9ih3z3_k$(toByte(tmp$ret$22));
          i = i + 1 | 0;
        } else {
          var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
          UnsafeBufferOperations_getInstance();
          $l$block_6: {
            // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
            var tail_2 = _this__u8e3s4.writableSegment_voqx71_k$(4);
            get_SegmentWriteContextImpl().setUnchecked_7scgvu_k$(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
            var bytesWritten_2 = 4;
            if (bytesWritten_2 === 4) {
              tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
              // Inline function 'kotlin.Long.plus' call
              var this_10 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
              var tmp$ret$24 = add(this_10, fromInt(bytesWritten_2));
              _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$24);
              break $l$block_6;
            }
            // Inline function 'kotlin.check' call
            if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.get_remainingCapacity_c94947_k$() : false)) {
              var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.get_remainingCapacity_c94947_k$();
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            if (!(bytesWritten_2 === 0)) {
              tail_2.set_limit_3yu7ea_k$(tail_2.get_limit_kzbf7q_k$() + bytesWritten_2 | 0);
              // Inline function 'kotlin.Long.plus' call
              var this_11 = _this__u8e3s4.get_sizeMut_lwlia2_k$();
              var tmp$ret$28 = add(this_11, fromInt(bytesWritten_2));
              _this__u8e3s4.set_sizeMut_cp56bw_k$(tmp$ret$28);
              break $l$block_6;
            }
            if (isEmpty(tail_2)) {
              _this__u8e3s4.recycleTail_61sxi3_k$();
            }
          }
          i = i + 2 | 0;
        }
      }
    }
  }
  function FileSystem() {
  }
  function SystemFileSystemImpl() {
  }
  function FileMetadata(isRegularFile, isDirectory, size) {
    isRegularFile = isRegularFile === VOID ? false : isRegularFile;
    isDirectory = isDirectory === VOID ? false : isDirectory;
    size = size === VOID ? new Long(0, 0) : size;
    this.isRegularFile_1 = isRegularFile;
    this.isDirectory_1 = isDirectory;
    this.size_1 = size;
  }
  protoOf(FileMetadata).get_isRegularFile_wfnog5_k$ = function () {
    return this.isRegularFile_1;
  };
  protoOf(FileMetadata).get_isDirectory_hgpbzu_k$ = function () {
    return this.isDirectory_1;
  };
  protoOf(FileMetadata).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  function Path(base, parts) {
    return Path_0(base.toString(), parts.slice());
  }
  function removeTrailingSeparators(path, isWindows_) {
    isWindows_ = isWindows_ === VOID ? get_isWindows() : isWindows_;
    if (isWindows_) {
      var tmp;
      if (path.length > 1) {
        var tmp_0;
        if (charCodeAt(path, 1) === _Char___init__impl__6a9atx(58)) {
          tmp_0 = 3;
        } else if (isUnc(path)) {
          tmp_0 = 2;
        } else {
          tmp_0 = 1;
        }
        tmp = tmp_0;
      } else {
        tmp = 1;
      }
      var limit = tmp;
      return removeTrailingSeparatorsWindows(limit, path);
    }
    return removeTrailingSeparatorsUnix(path);
  }
  function Path_0(base, parts) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    this_0.append_22ad7x_k$(base);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = parts.length;
    while (inductionVariable < last) {
      var element = parts[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        tmp = !endsWith(this_0, get_SystemPathSeparator());
      } else {
        tmp = false;
      }
      if (tmp) {
        this_0.append_am5a4z_k$(get_SystemPathSeparator());
      }
      this_0.append_22ad7x_k$(element);
    }
    var tmp$ret$5 = this_0.toString();
    return Path_2(tmp$ret$5);
  }
  function isUnc(path) {
    if (path.length < 2)
      return false;
    if (startsWith(path, '\\\\'))
      return true;
    if (startsWith(path, '//'))
      return true;
    return false;
  }
  function removeTrailingSeparatorsWindows(suffixLength, path) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(suffixLength >= 1)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var idx = path.length;
    $l$loop: while (idx > suffixLength) {
      var c = charCodeAt(path, idx - 1 | 0);
      if (!(c === _Char___init__impl__6a9atx(92)) && !(c === _Char___init__impl__6a9atx(47)))
        break $l$loop;
      idx = idx - 1 | 0;
    }
    return substring(path, 0, idx);
  }
  function removeTrailingSeparatorsUnix(path) {
    var idx = path.length;
    while (idx > 1 && charCodeAt(path, idx - 1 | 0) === _Char___init__impl__6a9atx(47)) {
      idx = idx - 1 | 0;
    }
    return substring(path, 0, idx);
  }
  function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
    beginIndex = beginIndex === VOID ? 0 : beginIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
    if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
      throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
    }
    var chars = charArray(endIndex - beginIndex | 0);
    var length = 0;
    // Inline function 'kotlinx.io.internal.processUtf16Chars' call
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        var c = numberToChar(b0);
        var _unary__edvuaz = length;
        length = _unary__edvuaz + 1 | 0;
        chars[_unary__edvuaz] = c;
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz_0 = index;
          index = _unary__edvuaz_0 + 1 | 0;
          var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
          var _unary__edvuaz_1 = length;
          length = _unary__edvuaz_1 + 1 | 0;
          chars[_unary__edvuaz_1] = c_0;
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp2 = index;
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            if (endIndex <= (tmp2 + 1 | 0)) {
              var c_1 = numberToChar(65533);
              var _unary__edvuaz_2 = length;
              length = _unary__edvuaz_2 + 1 | 0;
              chars[_unary__edvuaz_2] = c_1;
              tmp$ret$5 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp2];
            var b1 = _this__u8e3s4[tmp2 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              var c_2 = numberToChar(65533);
              var _unary__edvuaz_3 = length;
              length = _unary__edvuaz_3 + 1 | 0;
              chars[_unary__edvuaz_3] = c_2;
              tmp$ret$5 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              var c_3 = numberToChar(65533);
              var _unary__edvuaz_4 = length;
              length = _unary__edvuaz_4 + 1 | 0;
              chars[_unary__edvuaz_4] = c_3;
            } else {
              var c_4 = numberToChar(codePoint);
              var _unary__edvuaz_5 = length;
              length = _unary__edvuaz_5 + 1 | 0;
              chars[_unary__edvuaz_5] = c_4;
            }
            tmp$ret$5 = 2;
          }
          index = tmp + tmp$ret$5 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp2_0 = index;
            var tmp$ret$19;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              if (endIndex <= (tmp2_0 + 2 | 0)) {
                var c_5 = numberToChar(65533);
                var _unary__edvuaz_6 = length;
                length = _unary__edvuaz_6 + 1 | 0;
                chars[_unary__edvuaz_6] = c_5;
                var tmp_1;
                if (endIndex <= (tmp2_0 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$19 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$19 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp2_0];
              var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                var c_6 = numberToChar(65533);
                var _unary__edvuaz_7 = length;
                length = _unary__edvuaz_7 + 1 | 0;
                chars[_unary__edvuaz_7] = c_6;
                tmp$ret$19 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                var c_7 = numberToChar(65533);
                var _unary__edvuaz_8 = length;
                length = _unary__edvuaz_8 + 1 | 0;
                chars[_unary__edvuaz_8] = c_7;
                tmp$ret$19 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                var c_8 = numberToChar(65533);
                var _unary__edvuaz_9 = length;
                length = _unary__edvuaz_9 + 1 | 0;
                chars[_unary__edvuaz_9] = c_8;
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                var c_9 = numberToChar(65533);
                var _unary__edvuaz_10 = length;
                length = _unary__edvuaz_10 + 1 | 0;
                chars[_unary__edvuaz_10] = c_9;
              } else {
                var c_10 = numberToChar(codePoint_0);
                var _unary__edvuaz_11 = length;
                length = _unary__edvuaz_11 + 1 | 0;
                chars[_unary__edvuaz_11] = c_10;
              }
              tmp$ret$19 = 3;
            }
            index = tmp_0 + tmp$ret$19 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp2_1 = index;
              var tmp$ret$41;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                if (endIndex <= (tmp2_1 + 3 | 0)) {
                  if (!(65533 === 65533)) {
                    var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_12 = length;
                    length = _unary__edvuaz_12 + 1 | 0;
                    chars[_unary__edvuaz_12] = c_11;
                    var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_13 = length;
                    length = _unary__edvuaz_13 + 1 | 0;
                    chars[_unary__edvuaz_13] = c_12;
                  } else {
                    var c_13 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_14 = length;
                    length = _unary__edvuaz_14 + 1 | 0;
                    chars[_unary__edvuaz_14] = c_13;
                  }
                  var tmp_3;
                  if (endIndex <= (tmp2_1 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$41 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp2_1 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
                      tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$41 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$41 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp2_1];
                var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_15 = length;
                    length = _unary__edvuaz_15 + 1 | 0;
                    chars[_unary__edvuaz_15] = c_14;
                    var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_16 = length;
                    length = _unary__edvuaz_16 + 1 | 0;
                    chars[_unary__edvuaz_16] = c_15;
                  } else {
                    var c_16 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_17 = length;
                    length = _unary__edvuaz_17 + 1 | 0;
                    chars[_unary__edvuaz_17] = c_16;
                  }
                  tmp$ret$41 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_18 = length;
                    length = _unary__edvuaz_18 + 1 | 0;
                    chars[_unary__edvuaz_18] = c_17;
                    var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_19 = length;
                    length = _unary__edvuaz_19 + 1 | 0;
                    chars[_unary__edvuaz_19] = c_18;
                  } else {
                    var c_19 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_20 = length;
                    length = _unary__edvuaz_20 + 1 | 0;
                    chars[_unary__edvuaz_20] = c_19;
                  }
                  tmp$ret$41 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_21 = length;
                    length = _unary__edvuaz_21 + 1 | 0;
                    chars[_unary__edvuaz_21] = c_20;
                    var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_22 = length;
                    length = _unary__edvuaz_22 + 1 | 0;
                    chars[_unary__edvuaz_22] = c_21;
                  } else {
                    var c_22 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_23 = length;
                    length = _unary__edvuaz_23 + 1 | 0;
                    chars[_unary__edvuaz_23] = c_22;
                  }
                  tmp$ret$41 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  if (!(65533 === 65533)) {
                    var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_24 = length;
                    length = _unary__edvuaz_24 + 1 | 0;
                    chars[_unary__edvuaz_24] = c_23;
                    var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_25 = length;
                    length = _unary__edvuaz_25 + 1 | 0;
                    chars[_unary__edvuaz_25] = c_24;
                  } else {
                    var c_25 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_26 = length;
                    length = _unary__edvuaz_26 + 1 | 0;
                    chars[_unary__edvuaz_26] = c_25;
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  if (!(65533 === 65533)) {
                    var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_27 = length;
                    length = _unary__edvuaz_27 + 1 | 0;
                    chars[_unary__edvuaz_27] = c_26;
                    var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_28 = length;
                    length = _unary__edvuaz_28 + 1 | 0;
                    chars[_unary__edvuaz_28] = c_27;
                  } else {
                    var c_28 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_29 = length;
                    length = _unary__edvuaz_29 + 1 | 0;
                    chars[_unary__edvuaz_29] = c_28;
                  }
                } else if (codePoint_1 < 65536) {
                  if (!(65533 === 65533)) {
                    var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_30 = length;
                    length = _unary__edvuaz_30 + 1 | 0;
                    chars[_unary__edvuaz_30] = c_29;
                    var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                    var _unary__edvuaz_31 = length;
                    length = _unary__edvuaz_31 + 1 | 0;
                    chars[_unary__edvuaz_31] = c_30;
                  } else {
                    var c_31 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_32 = length;
                    length = _unary__edvuaz_32 + 1 | 0;
                    chars[_unary__edvuaz_32] = c_31;
                  }
                } else {
                  if (!(codePoint_1 === 65533)) {
                    var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                    var _unary__edvuaz_33 = length;
                    length = _unary__edvuaz_33 + 1 | 0;
                    chars[_unary__edvuaz_33] = c_32;
                    var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                    var _unary__edvuaz_34 = length;
                    length = _unary__edvuaz_34 + 1 | 0;
                    chars[_unary__edvuaz_34] = c_33;
                  } else {
                    var c_34 = _Char___init__impl__6a9atx(65533);
                    var _unary__edvuaz_35 = length;
                    length = _unary__edvuaz_35 + 1 | 0;
                    chars[_unary__edvuaz_35] = c_34;
                  }
                }
                tmp$ret$41 = 4;
              }
              index = tmp_2 + tmp$ret$41 | 0;
            } else {
              var c_35 = _Char___init__impl__6a9atx(65533);
              var _unary__edvuaz_36 = length;
              length = _unary__edvuaz_36 + 1 | 0;
              chars[_unary__edvuaz_36] = c_35;
              index = index + 1 | 0;
            }
          }
        }
      }
    }
    return concatToString(chars, 0, length);
  }
  function processUtf16Chars(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    var index = beginIndex;
    while (index < endIndex) {
      var b0 = _this__u8e3s4[index];
      if (b0 >= 0) {
        yield_0(new Char(numberToChar(b0)));
        index = index + 1 | 0;
        while (index < endIndex && _this__u8e3s4[index] >= 0) {
          var _unary__edvuaz = index;
          index = _unary__edvuaz + 1 | 0;
          yield_0(new Char(numberToChar(_this__u8e3s4[_unary__edvuaz])));
        }
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 5 === -2) {
          var tmp = index;
          var tmp2 = index;
          var tmp$ret$2;
          $l$block_0: {
            // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
            if (endIndex <= (tmp2 + 1 | 0)) {
              yield_0(new Char(numberToChar(65533)));
              tmp$ret$2 = 1;
              break $l$block_0;
            }
            var b0_0 = _this__u8e3s4[tmp2];
            var b1 = _this__u8e3s4[tmp2 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1 & 192) === 128)) {
              yield_0(new Char(numberToChar(65533)));
              tmp$ret$2 = 1;
              break $l$block_0;
            }
            var codePoint = 3968 ^ b1 ^ b0_0 << 6;
            if (codePoint < 128) {
              yield_0(new Char(numberToChar(65533)));
            } else {
              yield_0(new Char(numberToChar(codePoint)));
            }
            tmp$ret$2 = 2;
          }
          index = tmp + tmp$ret$2 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 4 === -2) {
            var tmp_0 = index;
            var tmp2_0 = index;
            var tmp$ret$12;
            $l$block_4: {
              // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
              if (endIndex <= (tmp2_0 + 2 | 0)) {
                yield_0(new Char(numberToChar(65533)));
                var tmp_1;
                if (endIndex <= (tmp2_0 + 1 | 0)) {
                  tmp_1 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_1 = !((_this__u8e3s4[tmp2_0 + 1 | 0] & 192) === 128);
                }
                if (tmp_1) {
                  tmp$ret$12 = 1;
                  break $l$block_4;
                } else {
                  tmp$ret$12 = 2;
                  break $l$block_4;
                }
              }
              var b0_1 = _this__u8e3s4[tmp2_0];
              var b1_0 = _this__u8e3s4[tmp2_0 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_0 & 192) === 128)) {
                yield_0(new Char(numberToChar(65533)));
                tmp$ret$12 = 1;
                break $l$block_4;
              }
              var b2 = _this__u8e3s4[tmp2_0 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2 & 192) === 128)) {
                yield_0(new Char(numberToChar(65533)));
                tmp$ret$12 = 2;
                break $l$block_4;
              }
              var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
              if (codePoint_0 < 2048) {
                yield_0(new Char(numberToChar(65533)));
              } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
                yield_0(new Char(numberToChar(65533)));
              } else {
                yield_0(new Char(numberToChar(codePoint_0)));
              }
              tmp$ret$12 = 3;
            }
            index = tmp_0 + tmp$ret$12 | 0;
          } else {
            // Inline function 'kotlinx.io.shr' call
            if (b0 >> 3 === -2) {
              var tmp_2 = index;
              var tmp2_1 = index;
              var tmp$ret$26;
              $l$block_10: {
                // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
                if (endIndex <= (tmp2_1 + 3 | 0)) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  var tmp_3;
                  if (endIndex <= (tmp2_1 + 1 | 0)) {
                    tmp_3 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_3 = !((_this__u8e3s4[tmp2_1 + 1 | 0] & 192) === 128);
                  }
                  if (tmp_3) {
                    tmp$ret$26 = 1;
                    break $l$block_10;
                  } else {
                    var tmp_4;
                    if (endIndex <= (tmp2_1 + 2 | 0)) {
                      tmp_4 = true;
                    } else {
                      // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                      // Inline function 'kotlinx.io.and' call
                      tmp_4 = !((_this__u8e3s4[tmp2_1 + 2 | 0] & 192) === 128);
                    }
                    if (tmp_4) {
                      tmp$ret$26 = 2;
                      break $l$block_10;
                    } else {
                      tmp$ret$26 = 3;
                      break $l$block_10;
                    }
                  }
                }
                var b0_2 = _this__u8e3s4[tmp2_1];
                var b1_1 = _this__u8e3s4[tmp2_1 + 1 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b1_1 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$26 = 1;
                  break $l$block_10;
                }
                var b2_0 = _this__u8e3s4[tmp2_1 + 2 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b2_0 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$26 = 2;
                  break $l$block_10;
                }
                var b3 = _this__u8e3s4[tmp2_1 + 3 | 0];
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                if (!((b3 & 192) === 128)) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                  tmp$ret$26 = 3;
                  break $l$block_10;
                }
                var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
                if (codePoint_1 > 1114111) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else if (codePoint_1 < 65536) {
                  if (!(65533 === 65533)) {
                    yield_0(new Char(numberToChar((65533 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((65533 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                } else {
                  if (!(codePoint_1 === 65533)) {
                    yield_0(new Char(numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0)));
                    yield_0(new Char(numberToChar((codePoint_1 & 1023) + 56320 | 0)));
                  } else {
                    yield_0(new Char(_Char___init__impl__6a9atx(65533)));
                  }
                }
                tmp$ret$26 = 4;
              }
              index = tmp_2 + tmp$ret$26 | 0;
            } else {
              yield_0(new Char(_Char___init__impl__6a9atx(65533)));
              index = index + 1 | 0;
            }
          }
        }
      }
    }
  }
  function process2Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 1 | 0)) {
      yield_0(65533);
      return 1;
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b1 & 192) === 128)) {
      yield_0(65533);
      return 1;
    }
    var codePoint = 3968 ^ b1 ^ b0 << 6;
    if (codePoint < 128)
      yield_0(65533);
    else
      yield_0(codePoint);
    return 2;
  }
  function process3Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 2 | 0)) {
      yield_0(65533);
      var tmp;
      if (endIndex <= (beginIndex + 1 | 0)) {
        tmp = true;
      } else {
        // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
        // Inline function 'kotlinx.io.and' call
        tmp = !((_this__u8e3s4[beginIndex + 1 | 0] & 192) === 128);
      }
      if (tmp) {
        return 1;
      } else {
        return 2;
      }
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b1 & 192) === 128)) {
      yield_0(65533);
      return 1;
    }
    var b2 = _this__u8e3s4[beginIndex + 2 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b2 & 192) === 128)) {
      yield_0(65533);
      return 2;
    }
    var codePoint = -123008 ^ b2 ^ b1 << 6 ^ b0 << 12;
    if (codePoint < 2048) {
      yield_0(65533);
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      yield_0(65533);
    } else {
      yield_0(codePoint);
    }
    return 3;
  }
  function process4Utf8Bytes(_this__u8e3s4, beginIndex, endIndex, yield_0) {
    if (endIndex <= (beginIndex + 3 | 0)) {
      yield_0(65533);
      var tmp;
      if (endIndex <= (beginIndex + 1 | 0)) {
        tmp = true;
      } else {
        // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
        // Inline function 'kotlinx.io.and' call
        tmp = !((_this__u8e3s4[beginIndex + 1 | 0] & 192) === 128);
      }
      if (tmp) {
        return 1;
      } else {
        var tmp_0;
        if (endIndex <= (beginIndex + 2 | 0)) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          tmp_0 = !((_this__u8e3s4[beginIndex + 2 | 0] & 192) === 128);
        }
        if (tmp_0) {
          return 2;
        } else {
          return 3;
        }
      }
    }
    var b0 = _this__u8e3s4[beginIndex];
    var b1 = _this__u8e3s4[beginIndex + 1 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b1 & 192) === 128)) {
      yield_0(65533);
      return 1;
    }
    var b2 = _this__u8e3s4[beginIndex + 2 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b2 & 192) === 128)) {
      yield_0(65533);
      return 2;
    }
    var b3 = _this__u8e3s4[beginIndex + 3 | 0];
    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
    // Inline function 'kotlinx.io.and' call
    if (!((b3 & 192) === 128)) {
      yield_0(65533);
      return 3;
    }
    var codePoint = 3678080 ^ b3 ^ b2 << 6 ^ b1 << 12 ^ b0 << 18;
    if (codePoint > 1114111) {
      yield_0(65533);
    } else if (55296 <= codePoint ? codePoint <= 57343 : false) {
      yield_0(65533);
    } else if (codePoint < 65536) {
      yield_0(65533);
    } else {
      yield_0(codePoint);
    }
    return 4;
  }
  function isUtf8Continuation(byte) {
    // Inline function 'kotlinx.io.and' call
    return (byte & 192) === 128;
  }
  function get_SegmentReadContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentReadContextImpl;
  }
  var SegmentReadContextImpl;
  function get_SegmentWriteContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return SegmentWriteContextImpl;
  }
  var SegmentWriteContextImpl;
  function get_BufferIterationContextImpl() {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    return BufferIterationContextImpl;
  }
  var BufferIterationContextImpl;
  function UnsafeBufferOperations() {
    UnsafeBufferOperations_instance = this;
  }
  protoOf(UnsafeBufferOperations).get_maxSafeWriteCapacity_ix7dyp_k$ = function () {
    return 8192;
  };
  protoOf(UnsafeBufferOperations).moveToTail_f7osh2_k$ = function (buffer, bytes, startIndex, endIndex) {
    // Inline function 'kotlinx.io.checkBounds' call
    var size = bytes.length;
    checkBounds(fromInt(size), fromInt(startIndex), fromInt(endIndex));
    var segment = Companion_getInstance().new_jmbae1_k$(bytes, startIndex, endIndex, AlwaysSharedCopyTracker_getInstance(), false);
    var tail = buffer.get_tail_yzvxr5_k$();
    if (tail == null) {
      buffer.set_head_gc442i_k$(segment);
      buffer.set_tail_w98yye_k$(segment);
    } else {
      buffer.set_tail_w98yye_k$(tail.push_h69db4_k$(segment));
    }
    var tmp0 = buffer.get_sizeMut_lwlia2_k$();
    // Inline function 'kotlin.Long.plus' call
    var other = endIndex - startIndex | 0;
    var tmp$ret$1 = add(tmp0, fromInt(other));
    buffer.set_sizeMut_cp56bw_k$(tmp$ret$1);
  };
  protoOf(UnsafeBufferOperations).moveToTail$default_5ltpac_k$ = function (buffer, bytes, startIndex, endIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? bytes.length : endIndex;
    var tmp;
    if ($super === VOID) {
      this.moveToTail_f7osh2_k$(buffer, bytes, startIndex, endIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.moveToTail_f7osh2_k$.call(this, buffer, bytes, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(UnsafeBufferOperations).readFromHead_6suamh_k$ = function (buffer, readAction) {
    // Inline function 'kotlin.require' call
    if (!!buffer.exhausted_p1jt55_k$()) {
      var message = 'Buffer is empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var head = ensureNotNull(buffer.get_head_1rxik1_k$());
    var bytesRead = readAction(head.dataAsByteArray_g1m4im_k$(true), head.get_pos_c7hn7x_k$(), head.get_limit_kzbf7q_k$());
    if (!(bytesRead === 0)) {
      if (bytesRead < 0)
        throw IllegalStateException_init_$Create$('Returned negative read bytes count');
      if (bytesRead > head.get_size_woubt6_k$())
        throw IllegalStateException_init_$Create$('Returned too many bytes');
      buffer.skip_bgd4sf_k$(fromInt(bytesRead));
    }
    return bytesRead;
  };
  protoOf(UnsafeBufferOperations).readFromHead_cm0j2_k$ = function (buffer, readAction) {
    // Inline function 'kotlin.require' call
    if (!!buffer.exhausted_p1jt55_k$()) {
      var message = 'Buffer is empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var head = ensureNotNull(buffer.get_head_1rxik1_k$());
    var bytesRead = readAction(get_SegmentReadContextImpl(), head);
    if (!(bytesRead === 0)) {
      if (bytesRead < 0)
        throw IllegalStateException_init_$Create$('Returned negative read bytes count');
      if (bytesRead > head.get_size_woubt6_k$())
        throw IllegalStateException_init_$Create$('Returned too many bytes');
      buffer.skip_bgd4sf_k$(fromInt(bytesRead));
    }
    return bytesRead;
  };
  protoOf(UnsafeBufferOperations).writeToTail_k0ioxb_k$ = function (buffer, minimumCapacity, writeAction) {
    var tail = buffer.writableSegment_voqx71_k$(minimumCapacity);
    var data = tail.dataAsByteArray_g1m4im_k$(false);
    var bytesWritten = writeAction(data, tail.get_limit_kzbf7q_k$(), data.length);
    if (bytesWritten === minimumCapacity) {
      tail.writeBackData_bei69s_k$(data, bytesWritten);
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_0 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$0 = add(this_0, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$0);
      return bytesWritten;
    }
    // Inline function 'kotlin.check' call
    if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
      var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(bytesWritten === 0)) {
      tail.writeBackData_bei69s_k$(data, bytesWritten);
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_1 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$3 = add(this_1, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$3);
      return bytesWritten;
    }
    if (isEmpty(tail)) {
      buffer.recycleTail_61sxi3_k$();
    }
    return bytesWritten;
  };
  protoOf(UnsafeBufferOperations).writeToTail_rx223z_k$ = function (buffer, minimumCapacity, writeAction) {
    var tail = buffer.writableSegment_voqx71_k$(minimumCapacity);
    var bytesWritten = writeAction(get_SegmentWriteContextImpl(), tail);
    if (bytesWritten === minimumCapacity) {
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_0 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$0 = add(this_0, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$0);
      return bytesWritten;
    }
    // Inline function 'kotlin.check' call
    if (!(0 <= bytesWritten ? bytesWritten <= tail.get_remainingCapacity_c94947_k$() : false)) {
      var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.get_remainingCapacity_c94947_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(bytesWritten === 0)) {
      tail.set_limit_3yu7ea_k$(tail.get_limit_kzbf7q_k$() + bytesWritten | 0);
      // Inline function 'kotlin.Long.plus' call
      var this_1 = buffer.get_sizeMut_lwlia2_k$();
      var tmp$ret$3 = add(this_1, fromInt(bytesWritten));
      buffer.set_sizeMut_cp56bw_k$(tmp$ret$3);
      return bytesWritten;
    }
    if (isEmpty(tail)) {
      buffer.recycleTail_61sxi3_k$();
    }
    return bytesWritten;
  };
  protoOf(UnsafeBufferOperations).iterate_sp3fsv_k$ = function (buffer, iterationAction) {
    iterationAction(get_BufferIterationContextImpl(), buffer.get_head_1rxik1_k$());
  };
  protoOf(UnsafeBufferOperations).iterate_27wlwe_k$ = function (buffer, offset, iterationAction) {
    // Inline function 'kotlin.require' call
    if (!(compare(offset, new Long(0, 0)) >= 0)) {
      var message = 'Offset must be non-negative: ' + offset.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (compare(offset, buffer.get_size_woubt6_k$()) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$("Offset should be less than buffer's size (" + buffer.get_size_woubt6_k$().toString() + '): ' + offset.toString());
    }
    $l$block_1: {
      // Inline function 'kotlinx.io.seek' call
      if (buffer.get_head_1rxik1_k$() == null) {
        var o = new Long(-1, -1);
        iterationAction(get_BufferIterationContextImpl(), null, o);
        break $l$block_1;
      }
      if (compare(subtract(buffer.get_size_woubt6_k$(), offset), offset) < 0) {
        var s = buffer.get_tail_yzvxr5_k$();
        var offset_0 = buffer.get_size_woubt6_k$();
        $l$loop: while (!(s == null) && compare(offset_0, offset) > 0) {
          offset_0 = subtract(offset_0, fromInt(s.get_limit_kzbf7q_k$() - s.get_pos_c7hn7x_k$() | 0));
          if (compare(offset_0, offset) <= 0)
            break $l$loop;
          s = s.get_prev_d7or6k_k$();
        }
        var tmp0 = s;
        var o_0 = offset_0;
        iterationAction(get_BufferIterationContextImpl(), tmp0, o_0);
        break $l$block_1;
      } else {
        var s_0 = buffer.get_head_1rxik1_k$();
        var offset_1 = new Long(0, 0);
        $l$loop_0: while (!(s_0 == null)) {
          var tmp0_0 = offset_1;
          // Inline function 'kotlin.Long.plus' call
          var other = s_0.get_limit_kzbf7q_k$() - s_0.get_pos_c7hn7x_k$() | 0;
          var nextOffset = add(tmp0_0, fromInt(other));
          if (compare(nextOffset, offset) > 0)
            break $l$loop_0;
          s_0 = s_0.get_next_dym7ms_k$();
          offset_1 = nextOffset;
        }
        var tmp0_1 = s_0;
        var o_1 = offset_1;
        iterationAction(get_BufferIterationContextImpl(), tmp0_1, o_1);
        break $l$block_1;
      }
    }
  };
  protoOf(UnsafeBufferOperations).forEachSegment_g07ukb_k$ = function (buffer, action) {
    var curr = buffer.get_head_1rxik1_k$();
    while (!(curr == null)) {
      action(get_SegmentReadContextImpl(), curr);
      curr = curr.get_next_dym7ms_k$();
    }
  };
  var UnsafeBufferOperations_instance;
  function UnsafeBufferOperations_getInstance() {
    if (UnsafeBufferOperations_instance == null)
      new UnsafeBufferOperations();
    return UnsafeBufferOperations_instance;
  }
  function SegmentReadContext() {
  }
  function withData(_this__u8e3s4, segment, readAction) {
    _init_properties_UnsafeBufferOperations_kt__xw75gy();
    readAction(segment.dataAsByteArray_g1m4im_k$(true), segment.get_pos_c7hn7x_k$(), segment.get_limit_kzbf7q_k$());
  }
  function SegmentWriteContext() {
  }
  function BufferIterationContext() {
  }
  function SegmentReadContextImpl$1() {
  }
  protoOf(SegmentReadContextImpl$1).getUnchecked_akrbjy_k$ = function (segment, offset) {
    return segment.getUnchecked_g7gmig_k$(offset);
  };
  function SegmentWriteContextImpl$1() {
  }
  protoOf(SegmentWriteContextImpl$1).setUnchecked_b2f64i_k$ = function (segment, offset, value) {
    segment.setUnchecked_5zbo2s_k$(offset, value);
  };
  protoOf(SegmentWriteContextImpl$1).setUnchecked_3svw1y_k$ = function (segment, offset, b0, b1) {
    segment.setUnchecked_fqg8f0_k$(offset, b0, b1);
  };
  protoOf(SegmentWriteContextImpl$1).setUnchecked_ofazem_k$ = function (segment, offset, b0, b1, b2) {
    segment.setUnchecked_lebl98_k$(offset, b0, b1, b2);
  };
  protoOf(SegmentWriteContextImpl$1).setUnchecked_7scgvu_k$ = function (segment, offset, b0, b1, b2, b3) {
    segment.setUnchecked_8pgckc_k$(offset, b0, b1, b2, b3);
  };
  function BufferIterationContextImpl$1() {
  }
  protoOf(BufferIterationContextImpl$1).next_oktxsl_k$ = function (segment) {
    return segment.get_next_dym7ms_k$();
  };
  protoOf(BufferIterationContextImpl$1).getUnchecked_akrbjy_k$ = function (segment, offset) {
    return get_SegmentReadContextImpl().getUnchecked_akrbjy_k$(segment, offset);
  };
  var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
  function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
    if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
      properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
      SegmentReadContextImpl = new SegmentReadContextImpl$1();
      SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
      BufferIterationContextImpl = new BufferIterationContextImpl$1();
    }
  }
  function IOException_init_$Init$($this) {
    Exception_init_$Init$($this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$() {
    var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$);
    return tmp;
  }
  function IOException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_0(message) {
    var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_0);
    return tmp;
  }
  function IOException_init_$Init$_1(cause, $this) {
    Exception_init_$Init$_1(cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_1(cause) {
    var tmp = IOException_init_$Init$_1(cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_1);
    return tmp;
  }
  function IOException_init_$Init$_2(message, cause, $this) {
    Exception_init_$Init$_2(message, cause, $this);
    IOException.call($this);
    return $this;
  }
  function IOException_init_$Create$_2(message, cause) {
    var tmp = IOException_init_$Init$_2(message, cause, objectCreate(protoOf(IOException)));
    captureStack(tmp, IOException_init_$Create$_2);
    return tmp;
  }
  function IOException() {
    captureStack(this, IOException);
  }
  function EOFException_init_$Init$($this) {
    IOException_init_$Init$($this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$() {
    var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$);
    return tmp;
  }
  function EOFException_init_$Init$_0(message, $this) {
    IOException_init_$Init$_0(message, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_0(message) {
    var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_0);
    return tmp;
  }
  function EOFException_init_$Init$_1(message, cause, $this) {
    IOException_init_$Init$_2(message, cause, $this);
    EOFException.call($this);
    return $this;
  }
  function EOFException_init_$Create$_1(message, cause) {
    var tmp = EOFException_init_$Init$_1(message, cause, objectCreate(protoOf(EOFException)));
    captureStack(tmp, EOFException_init_$Create$_1);
    return tmp;
  }
  function EOFException() {
    captureStack(this, EOFException);
  }
  function withCaughtException(block) {
    try {
      block();
      return null;
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        return t;
      } else {
        throw $p;
      }
    }
  }
  function RawSink() {
  }
  function SegmentPool() {
    SegmentPool_instance = this;
    this.MAX_SIZE_1 = 0;
    this.byteCount_1 = 0;
  }
  protoOf(SegmentPool).get_MAX_SIZE_bmfi1n_k$ = function () {
    return this.MAX_SIZE_1;
  };
  protoOf(SegmentPool).get_byteCount_pu5ghu_k$ = function () {
    return this.byteCount_1;
  };
  protoOf(SegmentPool).take_2451j_k$ = function () {
    return Companion_getInstance().new_79u2a0_k$();
  };
  protoOf(SegmentPool).recycle_3mobff_k$ = function (segment) {
  };
  protoOf(SegmentPool).tracker_hnhzgo_k$ = function () {
    return AlwaysSharedCopyTracker_getInstance();
  };
  var SegmentPool_instance;
  function SegmentPool_getInstance() {
    if (SegmentPool_instance == null)
      new SegmentPool();
    return SegmentPool_instance;
  }
  function get_path() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp0 = path$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('path', 0, tmp, _get_path_$ref_hpvpv9(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var path$delegate;
  function get_fs() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp0 = fs$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fs', 0, tmp, _get_fs_$ref_rnlob1(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var fs$delegate;
  function get_os() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp0 = os$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('os', 0, tmp, _get_os_$ref_hoy4d2(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var os$delegate;
  function get_buffer() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp0 = buffer$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('buffer', 0, tmp, _get_buffer_$ref_mc964a(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var buffer$delegate;
  function path$delegate$lambda() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp;
    try {
      tmp = eval('require')('path');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw UnsupportedOperationException_init_$Create$("Module 'path' could not be imported", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function _get_path_$ref_hpvpv9() {
    return function () {
      return get_path();
    };
  }
  function fs$delegate$lambda() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp;
    try {
      tmp = eval('require')('fs');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw UnsupportedOperationException_init_$Create$("Module 'fs' could not be imported", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function _get_fs_$ref_rnlob1() {
    return function () {
      return get_fs();
    };
  }
  function os$delegate$lambda() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp;
    try {
      tmp = eval('require')('os');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw UnsupportedOperationException_init_$Create$("Module 'os' could not be imported", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function _get_os_$ref_hoy4d2() {
    return function () {
      return get_os();
    };
  }
  function buffer$delegate$lambda() {
    _init_properties_nodeModulesJs_kt__ngjjzw();
    var tmp;
    try {
      tmp = eval('require')('buffer');
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        throw UnsupportedOperationException_init_$Create$("Module 'buffer' could not be imported", e);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function _get_buffer_$ref_mc964a() {
    return function () {
      return get_buffer();
    };
  }
  var properties_initialized_nodeModulesJs_kt_oooz8e;
  function _init_properties_nodeModulesJs_kt__ngjjzw() {
    if (!properties_initialized_nodeModulesJs_kt_oooz8e) {
      properties_initialized_nodeModulesJs_kt_oooz8e = true;
      path$delegate = lazy(path$delegate$lambda);
      fs$delegate = lazy(fs$delegate$lambda);
      os$delegate = lazy(os$delegate$lambda);
      buffer$delegate = lazy(buffer$delegate$lambda);
    }
  }
  function get_SystemFileSystem() {
    _init_properties_FileSystemNodeJs_kt__m4c3u();
    return SystemFileSystem;
  }
  var SystemFileSystem;
  function get_isWindows() {
    _init_properties_FileSystemNodeJs_kt__m4c3u();
    return isWindows;
  }
  var isWindows;
  function FileNotFoundException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, FileNotFoundException);
  }
  function SystemFileSystem$o$delete$lambda($path) {
    return function () {
      var tmp0_elvis_lhs = get_fs().statSync($path.get_path_j6ylwq_k$());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throw new FileNotFoundException('File does not exist: ' + $path.toString());
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var stats = tmp;
      var tmp_0;
      if (stats.isDirectory()) {
        get_fs().rmdirSync($path.get_path_j6ylwq_k$());
        tmp_0 = Unit_getInstance();
      } else {
        get_fs().rmSync($path.get_path_j6ylwq_k$());
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SystemFileSystem$o$atomicMove$lambda($source, $destination) {
    return function () {
      get_fs().renameSync($source.get_path_j6ylwq_k$(), $destination.get_path_j6ylwq_k$());
      return Unit_getInstance();
    };
  }
  function SystemFileSystem$o$metadataOrNull$lambda($path, $metadata) {
    return function () {
      var tmp0_elvis_lhs = get_fs().statSync($path.get_path_j6ylwq_k$());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_getInstance();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var stat = tmp;
      var mode = stat.mode;
      var isFile = (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFREG;
      $metadata._v = new FileMetadata(isFile, (mode & get_fs().constants.S_IFMT) === get_fs().constants.S_IFDIR, isFile ? fromInt(stat.size) : new Long(-1, -1));
      return Unit_getInstance();
    };
  }
  function SystemFileSystem$1() {
    SystemFileSystemImpl.call(this);
  }
  protoOf(SystemFileSystem$1).exists_hs0cko_k$ = function (path) {
    return get_fs().existsSync(path.get_path_j6ylwq_k$());
  };
  protoOf(SystemFileSystem$1).delete_wo7h84_k$ = function (path, mustExist) {
    if (!this.exists_hs0cko_k$(path)) {
      if (mustExist) {
        throw new FileNotFoundException('File does not exist: ' + path.toString());
      }
      return Unit_getInstance();
    }
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$delete$lambda(path));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_2('Delete failed for ' + path.toString(), tmp0_safe_receiver);
    }
  };
  protoOf(SystemFileSystem$1).createDirectories_7nzr80_k$ = function (path, mustCreate) {
    var metadata = this.metadataOrNull_ojv48r_k$(path);
    if (!(metadata == null)) {
      if (mustCreate) {
        throw IOException_init_$Create$_0('Path already exists: ' + path.toString());
      }
      if (metadata.get_isRegularFile_wfnog5_k$()) {
        throw IOException_init_$Create$_0("Path already exists and it's a file: " + path.toString());
      }
      return Unit_getInstance();
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var parts = ArrayList_init_$Create$();
    var p = path;
    while (!(p == null) && !this.exists_hs0cko_k$(p)) {
      parts.add_utx5q5_k$(p.toString());
      p = p.get_parent_hy4reb_k$();
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = asReversed(parts).iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      get_fs().mkdirSync(element);
    }
  };
  protoOf(SystemFileSystem$1).atomicMove_uo79h0_k$ = function (source, destination) {
    if (!this.exists_hs0cko_k$(source)) {
      throw new FileNotFoundException('Source does not exist: ' + source.get_path_j6ylwq_k$());
    }
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$atomicMove$lambda(source, destination));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_2('Move failed from ' + source.toString() + ' to ' + destination.toString(), tmp0_safe_receiver);
    }
  };
  protoOf(SystemFileSystem$1).metadataOrNull_ojv48r_k$ = function (path) {
    if (!this.exists_hs0cko_k$(path))
      return null;
    var metadata = {_v: null};
    var tmp0_safe_receiver = withCaughtException(SystemFileSystem$o$metadataOrNull$lambda(path, metadata));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_2('Stat failed for ' + path.toString(), tmp0_safe_receiver);
    }
    return metadata._v;
  };
  protoOf(SystemFileSystem$1).source_rb8tqf_k$ = function (path) {
    return new FileSource(path);
  };
  protoOf(SystemFileSystem$1).sink_ed8sos_k$ = function (path, append) {
    return new FileSink(path, append);
  };
  protoOf(SystemFileSystem$1).resolve_reyh1k_k$ = function (path) {
    if (!this.exists_hs0cko_k$(path))
      throw new FileNotFoundException(path.get_path_j6ylwq_k$());
    return Path_2(get_fs().realpathSync.native(path.get_path_j6ylwq_k$()));
  };
  protoOf(SystemFileSystem$1).list_p4xs2e_k$ = function (directory) {
    var tmp0_elvis_lhs = this.metadataOrNull_ojv48r_k$(directory);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new FileNotFoundException(directory.get_path_j6ylwq_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metadata = tmp;
    if (!metadata.get_isDirectory_hgpbzu_k$())
      throw IOException_init_$Create$_0('Not a directory: ' + directory.get_path_j6ylwq_k$());
    var tmp1_elvis_lhs = get_fs().opendirSync(directory.get_path_j6ylwq_k$());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IOException_init_$Create$_0('Unable to read directory: ' + directory.get_path_j6ylwq_k$());
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var dir = tmp_0;
    try {
      // Inline function 'kotlin.collections.buildList' call
      // Inline function 'kotlin.collections.buildListInternal' call
      // Inline function 'kotlin.apply' call
      var this_0 = ArrayList_init_$Create$();
      var child = dir.readSync();
      while (!(child == null)) {
        this_0.add_utx5q5_k$(Path(directory, [child.name]));
        child = dir.readSync();
      }
      return this_0.build_nmwvly_k$();
    }finally {
      dir.closeSync();
    }
  };
  var properties_initialized_FileSystemNodeJs_kt_vmmd20;
  function _init_properties_FileSystemNodeJs_kt__m4c3u() {
    if (!properties_initialized_FileSystemNodeJs_kt_vmmd20) {
      properties_initialized_FileSystemNodeJs_kt_vmmd20 = true;
      SystemFileSystem = new SystemFileSystem$1();
      isWindows = get_os().platform() === 'win32';
    }
  }
  function get_SystemPathSeparator() {
    _init_properties_PathsNodeJs_kt__bvvvsp();
    var tmp0 = SystemPathSeparator$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('SystemPathSeparator', 0, tmp, _get_SystemPathSeparator_$ref_lvdbpt(), null);
    return tmp0.get_value_j01efc_k$().value_1;
  }
  var SystemPathSeparator$delegate;
  function Path_1(rawPath, any) {
    this.path_1 = removeTrailingSeparators(rawPath);
  }
  protoOf(Path_1).get_path_j6ylwq_k$ = function () {
    return this.path_1;
  };
  protoOf(Path_1).get_parent_hy4reb_k$ = function () {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.path_1;
    if (charSequenceLength(this_0) === 0)
      return null;
    if (get_isWindows()) {
      if (!contains(this.path_1, _Char___init__impl__6a9atx(47)) && !contains(this.path_1, _Char___init__impl__6a9atx(92))) {
        return null;
      }
    } else if (!contains(this.path_1, get_SystemPathSeparator())) {
      return null;
    }
    var p = get_path().dirname(this.path_1);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(p) === 0) {
      tmp = null;
    } else {
      if (p === this.path_1) {
        tmp = null;
      } else {
        tmp = Path_2(p);
      }
    }
    return tmp;
  };
  protoOf(Path_1).get_isAbsolute_4pnyd2_k$ = function () {
    return get_path().isAbsolute(this.path_1);
  };
  protoOf(Path_1).get_name_woqyms_k$ = function () {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.path_1;
    if (charSequenceLength(this_0) === 0)
      return '';
    var p = get_path().basename(this.path_1);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(p) === 0) {
      tmp = '';
    } else {
      tmp = p;
    }
    return tmp;
  };
  protoOf(Path_1).toString = function () {
    return this.path_1;
  };
  protoOf(Path_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Path_1))
      return false;
    return this.path_1 === other.path_1;
  };
  protoOf(Path_1).hashCode = function () {
    return getStringHashCode(this.path_1);
  };
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_closed__kdb0et_0($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_0($this) {
    return $this.closed_1;
  }
  function _set_offset__aq0ezo($this, _set____db54di) {
    $this.offset_1 = _set____db54di;
  }
  function _get_offset__c6qzmg($this) {
    return $this.offset_1;
  }
  function _get_fd__ndc0wd($this) {
    return $this.fd_1;
  }
  function open($this, path) {
    if (!get_fs().existsSync(path.path_1)) {
      throw new FileNotFoundException('File does not exist: ' + path.path_1);
    }
    var fd = {_v: -1};
    var tmp0_safe_receiver = withCaughtException(FileSource$open$lambda(fd, path));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_2('Failed to open a file ' + path.path_1 + '.', tmp0_safe_receiver);
    }
    if (fd._v < 0)
      throw IOException_init_$Create$_0('Failed to open a file ' + path.path_1 + '.');
    return fd._v;
  }
  function FileSource$open$lambda($fd, $path) {
    return function () {
      $fd._v = get_fs().openSync($path.path_1, 'r');
      return Unit_getInstance();
    };
  }
  function FileSource$readAtMostTo$lambda(this$0) {
    return function () {
      this$0.buffer_1 = get_fs().readFileSync(this$0.fd_1, null);
      return Unit_getInstance();
    };
  }
  function FileSource(path) {
    this.path_1 = path;
    this.buffer_1 = null;
    this.closed_1 = false;
    this.offset_1 = 0;
    this.fd_1 = open(this, this.path_1);
  }
  protoOf(FileSource).readAtMostTo_nyls31_k$ = function (sink, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Source is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (equalsLong(byteCount, new Long(0, 0))) {
      return new Long(0, 0);
    }
    if (this.buffer_1 === null) {
      var tmp0_safe_receiver = withCaughtException(FileSource$readAtMostTo$lambda(this));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.also' call
        throw IOException_init_$Create$_2('Failed to read data from ' + this.path_1.path_1, tmp0_safe_receiver);
      }
    }
    var len = ensureNotNull(this.buffer_1).length;
    if (this.offset_1 >= len) {
      return new Long(-1, -1);
    }
    // Inline function 'kotlinx.io.minOf' call
    var b = len - this.offset_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = fromInt(b);
    var bytesToRead = compare(byteCount, b_0) <= 0 ? byteCount : b_0;
    var inductionVariable = new Long(0, 0);
    if (compare(inductionVariable, bytesToRead) < 0)
      do {
        var i = inductionVariable;
        inductionVariable = add(inductionVariable, new Long(1, 0));
        var tmp = ensureNotNull(this.buffer_1);
        var _unary__edvuaz = this.offset_1;
        this.offset_1 = _unary__edvuaz + 1 | 0;
        sink.writeByte_9ih3z3_k$(tmp.readInt8(_unary__edvuaz));
      }
       while (compare(inductionVariable, bytesToRead) < 0);
    return bytesToRead;
  };
  protoOf(FileSource).close_yn9xrc_k$ = function () {
    if (!this.closed_1) {
      this.closed_1 = true;
      get_fs().closeSync(this.fd_1);
    }
  };
  function _set_closed__kdb0et_1($this, _set____db54di) {
    $this.closed_1 = _set____db54di;
  }
  function _get_closed__iwkfs1_1($this) {
    return $this.closed_1;
  }
  function _get_fd__ndc0wd_0($this) {
    return $this.fd_1;
  }
  function open_0($this, path, append) {
    var flags = append ? 'a' : 'w';
    var fd = {_v: -1};
    var tmp0_safe_receiver = withCaughtException(FileSink$open$lambda(fd, path, flags));
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      throw IOException_init_$Create$_2('Failed to open a file ' + path.path_1 + '.', tmp0_safe_receiver);
    }
    if (fd._v < 0)
      throw IOException_init_$Create$_0('Failed to open a file ' + path.path_1 + '.');
    return fd._v;
  }
  function FileSink$open$lambda($fd, $path, $flags) {
    return function () {
      $fd._v = get_fs().openSync($path.path_1, $flags);
      return Unit_getInstance();
    };
  }
  function FileSink$write$lambda(this$0, $buf) {
    return function () {
      get_fs().writeFileSync(this$0.fd_1, $buf);
      return Unit_getInstance();
    };
  }
  function FileSink(path, append) {
    this.closed_1 = false;
    this.fd_1 = open_0(this, path, append);
  }
  protoOf(FileSink).write_yvqjfp_k$ = function (source, byteCount) {
    // Inline function 'kotlin.check' call
    if (!!this.closed_1) {
      var message = 'Sink is closed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (equalsLong(byteCount, new Long(0, 0))) {
      return Unit_getInstance();
    }
    // Inline function 'kotlin.comparisons.minOf' call
    var b = source.get_size_woubt6_k$();
    var remainingBytes = compare(byteCount, b) <= 0 ? byteCount : b;
    while (compare(remainingBytes, new Long(0, 0)) > 0) {
      var segmentBytes = 0;
      // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.readFromHead' call
      UnsafeBufferOperations_getInstance();
      // Inline function 'kotlin.require' call
      if (!!source.exhausted_p1jt55_k$()) {
        var message_0 = 'Buffer is empty';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var head = ensureNotNull(source.get_head_1rxik1_k$());
      var tmp0 = head.dataAsByteArray_g1m4im_k$(true);
      var tmp2 = head.get_pos_c7hn7x_k$();
      segmentBytes = head.get_limit_kzbf7q_k$() - tmp2 | 0;
      var buf = get_buffer().Buffer.allocUnsafe(segmentBytes);
      var inductionVariable = 0;
      var last = segmentBytes;
      if (inductionVariable < last)
        do {
          var offset = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buf.writeInt8(tmp0[tmp2 + offset | 0], offset);
        }
         while (inductionVariable < last);
      var tmp0_safe_receiver = withCaughtException(FileSink$write$lambda(this, buf));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.also' call
        throw IOException_init_$Create$_2('Write failed', tmp0_safe_receiver);
      }
      var bytesRead = segmentBytes;
      if (!(bytesRead === 0)) {
        if (bytesRead < 0)
          throw IllegalStateException_init_$Create$('Returned negative read bytes count');
        if (bytesRead > head.get_size_woubt6_k$())
          throw IllegalStateException_init_$Create$('Returned too many bytes');
        source.skip_bgd4sf_k$(fromInt(bytesRead));
      }
      var tmp0_0 = remainingBytes;
      // Inline function 'kotlin.Long.minus' call
      var other = segmentBytes;
      remainingBytes = subtract(tmp0_0, fromInt(other));
    }
  };
  protoOf(FileSink).flush_shahbo_k$ = function () {
    return Unit_getInstance();
  };
  protoOf(FileSink).close_yn9xrc_k$ = function () {
    if (!this.closed_1) {
      this.closed_1 = true;
      get_fs().closeSync(this.fd_1);
    }
  };
  function Path_2(path) {
    _init_properties_PathsNodeJs_kt__bvvvsp();
    return new Path_1(path, null);
  }
  function SystemPathSeparator$delegate$lambda() {
    _init_properties_PathsNodeJs_kt__bvvvsp();
    var sep = get_path().sep;
    // Inline function 'kotlin.check' call
    if (!(sep.length === 1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return new Char(charCodeAt(sep, 0));
  }
  function _get_SystemPathSeparator_$ref_lvdbpt() {
    return function () {
      return new Char(get_SystemPathSeparator());
    };
  }
  var properties_initialized_PathsNodeJs_kt_2u5gc7;
  function _init_properties_PathsNodeJs_kt__bvvvsp() {
    if (!properties_initialized_PathsNodeJs_kt_2u5gc7) {
      properties_initialized_PathsNodeJs_kt_2u5gc7 = true;
      SystemPathSeparator$delegate = lazy(SystemPathSeparator$delegate$lambda);
    }
  }
  //region block: post-declaration
  protoOf(Buffer).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
  protoOf(Buffer).write$default_h97jte_k$ = write$default;
  protoOf(RealSource).readAtMostTo$default_wtrooa_k$ = readAtMostTo$default;
  protoOf(SystemFileSystemImpl).delete$default_6ix9e7_k$ = delete$default;
  protoOf(SystemFileSystemImpl).createDirectories$default_dm5znv_k$ = createDirectories$default;
  protoOf(SystemFileSystemImpl).sink$default_v7kfux_k$ = sink$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EOFException_init_$Create$_0;
  _.$_$.b = IOException_init_$Init$;
  _.$_$.c = IOException_init_$Init$_0;
  _.$_$.d = IOException_init_$Create$_0;
  _.$_$.e = IOException_init_$Init$_2;
  _.$_$.f = IOException_init_$Create$_2;
  _.$_$.g = Buffer;
  _.$_$.h = IOException;
  _.$_$.i = Source;
  _.$_$.j = indexOf_1;
  _.$_$.k = readByteArray_0;
  _.$_$.l = readByteArray;
  _.$_$.m = readByteString;
  _.$_$.n = readString_0;
  _.$_$.o = readString;
  _.$_$.p = writeString;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.js.map
