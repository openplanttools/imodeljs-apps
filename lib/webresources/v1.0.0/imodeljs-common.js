(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("geometry_core"), require("imodeljs_clients"));
	else if(typeof define === 'function' && define.amd)
		define("imodeljs_common", ["bentleyjs_core", "geometry_core", "imodeljs_clients"], factory);
	else if(typeof exports === 'object')
		exports["imodeljs_common"] = factory(require("bentleyjs_core"), require("geometry_core"), require("imodeljs_clients"));
	else
		root["imodeljs_common"] = factory(root["bentleyjs_core"], root["geometry_core"], root["imodeljs_clients"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_geometry_core__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_clients__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["imodeljs-common"],{

/***/ "../../common/temp/node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js":
/*!******************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js":
/*!************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../common/temp/node_modules/.registry.npmjs.org/base64-js/1.3.0/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../common/temp/node_modules/.registry.npmjs.org/ieee754/1.1.13/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../common/temp/node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/4.32.2/node_modules/webpack/buildin/global.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/ieee754/1.1.13/node_modules/ieee754/index.js":
/*!***************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/ieee754/1.1.13/node_modules/ieee754/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js":
/*!**************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/isarray/1.0.0/node_modules/isarray/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/os-browserify/0.3.0/node_modules/os-browserify/browser.js":
/*!****************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/os-browserify/0.3.0/node_modules/os-browserify/browser.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js":
/*!******************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/punycode/1.4.1/node_modules/punycode/punycode.js":
/*!*******************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/punycode/1.4.1/node_modules/punycode/punycode.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/4.32.2/node_modules/webpack/buildin/module.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../../webpack/4.32.2/node_modules/webpack/buildin/global.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/decode.js":
/*!*******************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/decode.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/encode.js":
/*!*******************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/encode.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/index.js":
/*!******************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/index.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/safe-buffer/5.1.2/node_modules/safe-buffer/index.js":
/*!**********************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/safe-buffer/5.1.2/node_modules/safe-buffer/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/semver/5.7.0/node_modules/semver/semver.js":
/*!*************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/semver/5.7.0/node_modules/semver/semver.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var R = 0

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
var NUMERICIDENTIFIERLOOSE = R++
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')'

var MAINVERSIONLOOSE = R++
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')'

var PRERELEASEIDENTIFIERLOOSE = R++
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))'

var PRERELEASELOOSE = R++
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?'

src[FULL] = '^' + FULLPLAIN + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?'

var LOOSE = R++
src[LOOSE] = '^' + LOOSEPLAIN + '$'

var GTLT = R++
src[GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
var XRANGEIDENTIFIER = R++
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

var XRANGEPLAIN = R++
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?'

var XRANGEPLAINLOOSE = R++
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?'

var XRANGE = R++
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
var XRANGELOOSE = R++
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++
src[LONETILDE] = '(?:~>?)'

var TILDETRIM = R++
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

var TILDE = R++
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
var TILDELOOSE = R++
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++
src[LONECARET] = '(?:\\^)'

var CARETTRIM = R++
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
var caretTrimReplace = '$1^'

var CARET = R++
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
var CARETLOOSE = R++
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
var COMPARATOR = R++
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$'

var HYPHENRANGELOOSE = R++
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
var STAR = R++
src[STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[LOOSE] : re[FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1]
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY) {
    return true
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options)
        })
      })
    })
  })
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[CARETLOOSE] : re[CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '')
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  var match = version.match(re[COERCE])

  if (match == null) {
    return null
  }

  return parse(match[1] +
    '.' + (match[2] || '0') +
    '.' + (match[3] || '0'))
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/0.11.10/node_modules/process/browser.js */ "../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/string_decoder/1.2.0/node_modules/string_decoder/lib/string_decoder.js":
/*!*****************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/string_decoder/1.2.0/node_modules/string_decoder/lib/string_decoder.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "../../common/temp/node_modules/.registry.npmjs.org/safe-buffer/5.1.2/node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/url-search-params/1.1.0/node_modules/url-search-params/build/url-search-params.node.js":
/*!*********************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/url-search-params/1.1.0/node_modules/url-search-params/build/url-search-params.node.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


function URLSearchParams(query) {
  var
    index, key, value,
    pairs, i, length,
    dict = Object.create(null)
  ;
  this[secret] = dict;
  if (!query) return;
  if (typeof query === 'string') {
    if (query.charAt(0) === '?') {
      query = query.slice(1);
    }
    for (
      pairs = query.split('&'),
      i = 0,
      length = pairs.length; i < length; i++
    ) {
      value = pairs[i];
      index = value.indexOf('=');
      if (-1 < index) {
        appendTo(
          dict,
          decode(value.slice(0, index)),
          decode(value.slice(index + 1))
        );
      } else if (value.length){
        appendTo(
          dict,
          decode(value),
          ''
        );
      }
    }
  } else {
    if (isArray(query)) {
      for (
        i = 0,
        length = query.length; i < length; i++
      ) {
        value = query[i];
        appendTo(dict, value[0], value[1]);
      }
    } else if (query.forEach) {
      query.forEach(addEach, dict);
    } else {
      for (key in query) {
         appendTo(dict, key, query[key]);
      }
    }
  }
}

var
  isArray = Array.isArray,
  URLSearchParamsProto = URLSearchParams.prototype,
  find = /[!'\(\)~]|%20|%00/g,
  plus = /\+/g,
  replace = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  },
  replacer = function (match) {
    return replace[match];
  },
  secret = '__URLSearchParams__:' + Math.random()
;

function addEach(value, key) {
  /* jshint validthis:true */
  appendTo(this, key, value);
}

function appendTo(dict, name, value) {
  var res = isArray(value) ? value.join(',') : value;
  if (name in dict)
    dict[name].push(res);
  else
    dict[name] = [res];
}

function decode(str) {
  return decodeURIComponent(str.replace(plus, ' '));
}

function encode(str) {
  return encodeURIComponent(str).replace(find, replacer);
}

URLSearchParamsProto.append = function append(name, value) {
  appendTo(this[secret], name, value);
};

URLSearchParamsProto.delete = function del(name) {
  delete this[secret][name];
};

URLSearchParamsProto.get = function get(name) {
  var dict = this[secret];
  return name in dict ? dict[name][0] : null;
};

URLSearchParamsProto.getAll = function getAll(name) {
  var dict = this[secret];
  return name in dict ? dict[name].slice(0) : [];
};

URLSearchParamsProto.has = function has(name) {
  return name in this[secret];
};

URLSearchParamsProto.set = function set(name, value) {
  this[secret][name] = ['' + value];
};

URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
  var dict = this[secret];
  Object.getOwnPropertyNames(dict).forEach(function(name) {
    dict[name].forEach(function(value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

/*
URLSearchParamsProto.toBody = function() {
  return new Blob(
    [this.toString()],
    {type: 'application/x-www-form-urlencoded'}
  );
};
*/

URLSearchParamsProto.toJSON = function toJSON() {
  return {};
};

URLSearchParamsProto.toString = function toString() {
  var dict = this[secret], query = [], i, key, name, value;
  for (key in dict) {
    name = encode(key);
    for (
      i = 0,
      value = dict[key];
      i < value.length; i++
    ) {
      query.push(name + '=' + encode(value[i]));
    }
  }
  return query.join('&');
};

URLSearchParams = (module.exports = global.URLSearchParams || URLSearchParams);

(function (URLSearchParamsProto) {

  var iterable = (function () {
    try {
      return !!Symbol.iterator;
    } catch(error) {
      return false;
    }
  }());

  // mostly related to issue #24
  if (!('forEach' in URLSearchParamsProto)) {
    URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
      var names = Object.create(null);
      this.toString()
          .replace(/=[\s\S]*?(?:&|$)/g, '=')
          .split('=')
          .forEach(function (name) {
            if (!name.length || name in names) return;
            (names[name] = this.getAll(name)).forEach(function(value) {
              callback.call(thisArg, value, name, this);
            }, this);
          }, this);
    };
  }

  if (!('keys' in URLSearchParamsProto)) {
    URLSearchParamsProto.keys = function keys() {
      var items = [];
      this.forEach(function(value, name) { items.push(name); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('values' in URLSearchParamsProto)) {
    URLSearchParamsProto.values = function values() {
      var items = [];
      this.forEach(function(value) { items.push(value); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (!('entries' in URLSearchParamsProto)) {
    URLSearchParamsProto.entries = function entries() {
      var items = [];
      this.forEach(function(value, name) { items.push([name, value]); });
      var iterator = {
        next: function() {
          var value = items.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }

      return iterator;
    };
  }

  if (iterable && !(Symbol.iterator in URLSearchParamsProto)) {
    URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
  }

  if (!('sort' in URLSearchParamsProto)) {
    URLSearchParamsProto.sort = function sort() {
      var
        entries = this.entries(),
        entry = entries.next(),
        done = entry.done,
        keys = [],
        values = Object.create(null),
        i, key, value
      ;
      while (!done) {
        value = entry.value;
        key = value[0];
        keys.push(key);
        if (!(key in values)) {
          values[key] = [];
        }
        values[key].push(value[1]);
        entry = entries.next();
        done = entry.done;
      }
      // not the champion in efficiency
      // but these two bits just do the job
      keys.sort();
      for (i = 0; i < keys.length; i++) {
        this.delete(keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        this.append(key, values[key].shift());
      }
    };
  }

}(URLSearchParams.prototype));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/4.32.2/node_modules/webpack/buildin/global.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/url.js":
/*!*****************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/url.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "../../common/temp/node_modules/.registry.npmjs.org/punycode/1.4.1/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "../../common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "../../common/temp/node_modules/.registry.npmjs.org/querystring-es3/0.2.1/node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/util.js":
/*!******************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/util.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./lib/CloudStorage.js":
/*!*****************************!*\
  !*** ./lib/CloudStorage.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @beta */
var CloudStorageProvider;
(function (CloudStorageProvider) {
    CloudStorageProvider[CloudStorageProvider["Azure"] = 0] = "Azure";
    CloudStorageProvider[CloudStorageProvider["Amazon"] = 1] = "Amazon";
    CloudStorageProvider[CloudStorageProvider["AliCloud"] = 2] = "AliCloud";
})(CloudStorageProvider = exports.CloudStorageProvider || (exports.CloudStorageProvider = {}));
/** @beta */
var CloudStorageContainerUrl;
(function (CloudStorageContainerUrl) {
    function empty() {
        return {
            descriptor: { name: "" },
            valid: 0,
            expires: 0,
            url: "",
        };
    }
    CloudStorageContainerUrl.empty = empty;
})(CloudStorageContainerUrl = exports.CloudStorageContainerUrl || (exports.CloudStorageContainerUrl = {}));
/** @beta */
class CloudStorageCache {
    constructor() {
        this._pendingContainerRequests = new Map();
        this._containers = new Map();
    }
    supplyUrlBase(_container, _id) { return undefined; }
    async retrieve(id) {
        return new Promise(async (resolve) => {
            try {
                const container = await this.getContainer(id);
                if (!container.url) {
                    resolve(undefined);
                    return;
                }
                const response = await this.requestResource(container, id);
                if (response.ok) {
                    const content = await this.instantiateResource(response);
                    resolve(content);
                }
                else {
                    resolve(undefined);
                }
            }
            catch (_err) {
                // todo: log this?
                resolve(undefined);
            }
        });
    }
    async requestResource(container, id) {
        const url = new URL(container.url, this.supplyUrlBase(container, id));
        url.pathname += `/${this.formResourceName(id)}`;
        const init = {
            headers: container.headers,
            method: "GET",
        };
        return fetch(url.toString(), init);
    }
    async getContainer(id) {
        const now = new Date().getTime();
        const name = this.formContainerName(id);
        let container = this._containers.get(name);
        if (container && container.url && (container.valid > now || container.expires < now)) {
            container = undefined;
            this._containers.delete(name);
        }
        if (!container) {
            let request = this._pendingContainerRequests.get(name);
            if (!request) {
                request = new Promise(async (resolve, reject) => {
                    try {
                        container = await this.obtainContainerUrl(id, { name });
                        this._containers.set(name, container);
                        this._pendingContainerRequests.delete(name);
                        resolve(container);
                    }
                    catch (err) {
                        this._pendingContainerRequests.delete(name);
                        reject(err);
                    }
                });
                this._pendingContainerRequests.set(name, request);
            }
            return request;
        }
        return Promise.resolve(container);
    }
}
exports.CloudStorageCache = CloudStorageCache;


/***/ }),

/***/ "./lib/CloudStorageTileCache.js":
/*!**************************************!*\
  !*** ./lib/CloudStorageTileCache.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CloudStorage_1 = __webpack_require__(/*! ./CloudStorage */ "./lib/CloudStorage.js");
const IModelTileRpcInterface_1 = __webpack_require__(/*! ./rpc/IModelTileRpcInterface */ "./lib/rpc/IModelTileRpcInterface.js");
/** @beta */
class CloudStorageTileCache extends CloudStorage_1.CloudStorageCache {
    static getCache() {
        if (!CloudStorageTileCache._instance) {
            CloudStorageTileCache._instance = new CloudStorageTileCache();
        }
        return CloudStorageTileCache._instance;
    }
    supplyExpiryForContainerUrl(_id) {
        const expiry = new Date();
        const today = new Date().getDay();
        const rolloverDay = 6; // saturday
        expiry.setHours((rolloverDay - today) * 24);
        expiry.setHours(23);
        expiry.setMinutes(59);
        expiry.setSeconds(59);
        expiry.setMilliseconds(999);
        return expiry;
    }
    constructor() {
        super();
    }
    async obtainContainerUrl(id, descriptor) {
        const client = IModelTileRpcInterface_1.IModelTileRpcInterface.getClient();
        return client.getTileCacheContainerUrl(id.iModelToken.toJSON(), descriptor);
    }
    async instantiateResource(response) {
        const data = await response.arrayBuffer();
        if (!data.byteLength) {
            return undefined;
        }
        return new Uint8Array(data);
    }
    formContainerName(id) {
        return `${id.iModelToken.iModelId}`;
    }
    formResourceName(id) {
        const changeSetId = id.iModelToken.changeSetId || "first";
        return `tiles/${id.treeId}/${changeSetId}/${id.contentId}`;
    }
}
exports.CloudStorageTileCache = CloudStorageTileCache;


/***/ }),

/***/ "./lib/Code.js":
/*!*********************!*\
  !*** ./lib/Code.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Codes */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** A three-part structure containing information about the [Code]($docs/bis/intro/codes) of an Element
 * @public
 */
class Code {
    constructor(val) {
        this.spec = bentleyjs_core_1.Id64.fromJSON(val.spec);
        this.scope = bentleyjs_core_1.JsonUtils.asString(val.scope, "");
        this.value = bentleyjs_core_1.JsonUtils.asString(val.value);
    }
    /** Create an empty, non-unique code with no special meaning. */
    static createEmpty() { const id = bentleyjs_core_1.Id64.fromLocalAndBriefcaseIds(1, 0); return new Code({ spec: id, scope: id }); }
    static fromJSON(json) { return json ? new Code(json) : Code.createEmpty(); }
    getValue() { return this.value ? this.value : ""; }
    equals(other) { return this.spec === other.spec && this.scope === other.scope && this.value === other.value; }
}
exports.Code = Code;
/** Names of the internal BIS CodeSpecs. These names match those specified by the native library.
 * For other domains, the best practice is to include the domain name or alias as part of the CodeSpec name to ensure global uniqueness.
 * @public
 */
var BisCodeSpec;
(function (BisCodeSpec) {
    BisCodeSpec["nullCodeSpec"] = "bis:NullCodeSpec";
    BisCodeSpec["annotationFrameStyle"] = "bis:AnnotationFrameStyle";
    BisCodeSpec["annotationLeaderStyle"] = "bis:AnnotationLeaderStyle";
    BisCodeSpec["annotationTextStyle"] = "bis:AnnotationTextStyle";
    BisCodeSpec["auxCoordSystem2d"] = "bis:AuxCoordSystem2d";
    BisCodeSpec["auxCoordSystem3d"] = "bis:AuxCoordSystem3d";
    BisCodeSpec["auxCoordSystemSpatial"] = "bis:AuxCoordSystemSpatial";
    BisCodeSpec["categorySelector"] = "bis:CategorySelector";
    BisCodeSpec["colorBook"] = "bis:ColorBook";
    BisCodeSpec["displayStyle"] = "bis:DisplayStyle";
    BisCodeSpec["drawing"] = "bis:Drawing";
    BisCodeSpec["drawingCategory"] = "bis:DrawingCategory";
    BisCodeSpec["geometryPart"] = "bis:GeometryPart";
    BisCodeSpec["graphicalType2d"] = "bis:GraphicalType2d";
    BisCodeSpec["lineStyle"] = "bis:LineStyle";
    BisCodeSpec["linkElement"] = "bis:LinkElement";
    BisCodeSpec["modelSelector"] = "bis:ModelSelector";
    BisCodeSpec["physicalMaterial"] = "bis:PhysicalMaterial";
    BisCodeSpec["physicalType"] = "bis:PhysicalType";
    BisCodeSpec["informationPartitionElement"] = "bis:InformationPartitionElement";
    BisCodeSpec["renderMaterial"] = "bis:RenderMaterial";
    BisCodeSpec["sheet"] = "bis:Sheet";
    BisCodeSpec["spatialCategory"] = "bis:SpatialCategory";
    BisCodeSpec["spatialLocationType"] = "bis:SpatialLocationType";
    BisCodeSpec["subCategory"] = "bis:SubCategory";
    BisCodeSpec["subject"] = "bis:Subject";
    BisCodeSpec["templateRecipe2d"] = "bis:TemplateRecipe2d";
    BisCodeSpec["templateRecipe3d"] = "bis:TemplateRecipe3d";
    BisCodeSpec["textAnnotationSeed"] = "bis:TextAnnotationSeed";
    BisCodeSpec["texture"] = "bis:Texture";
    BisCodeSpec["viewDefinition"] = "bis:ViewDefinition";
})(BisCodeSpec = exports.BisCodeSpec || (exports.BisCodeSpec = {}));
/** The scope of the Code.
 * @public
 */
var CodeScopeSpec;
(function (CodeScopeSpec) {
    /** The standard ways the CodeScope can be specified.
     * @public
     */
    let Type;
    (function (Type) {
        /** The Code value must be unique within (at least) the iModel repository */
        Type[Type["Repository"] = 1] = "Repository";
        /** The Code value must be unique within the scope of the Model */
        Type[Type["Model"] = 2] = "Model";
        /** The Code value must be unique among other children of the same parent element */
        Type[Type["ParentElement"] = 3] = "ParentElement";
        /** The Code value must be unique among other elements also scoped by the same element */
        Type[Type["RelatedElement"] = 4] = "RelatedElement";
    })(Type = CodeScopeSpec.Type || (CodeScopeSpec.Type = {}));
    /** Requirements for how the CodeScope Element is identified.
     * @public
     */
    let ScopeRequirement;
    (function (ScopeRequirement) {
        /** The Code is required to have a valid ElementId as its scope */
        ScopeRequirement[ScopeRequirement["ElementId"] = 1] = "ElementId";
        /** The Code is required to have a valid FederationGuid as its scope */
        ScopeRequirement[ScopeRequirement["FederationGuid"] = 2] = "FederationGuid";
    })(ScopeRequirement = CodeScopeSpec.ScopeRequirement || (CodeScopeSpec.ScopeRequirement = {}));
})(CodeScopeSpec = exports.CodeScopeSpec || (exports.CodeScopeSpec = {}));
/** A [Code Specification]($docs/bis/intro/glossary#codespec) captures the rules for encoding and decoding significant business information into
 * and from a Code (string). This specification is used to generate and validate Codes.
 *
 * A CodeSpec defines the format of a Code for a certain type of Element in an IModel.
 * A CodeSpec can identify an external system that maintains and/or assigns Codes.
 * @public
 */
class CodeSpec {
    constructor(iModel, id, name, specScopeType, scopeReq, properties) {
        this.iModel = iModel;
        this.id = id;
        this.name = name;
        this.specScopeType = specScopeType;
        this.scopeReq = (undefined !== scopeReq) ? scopeReq : CodeScopeSpec.ScopeRequirement.ElementId;
        this.properties = properties;
    }
    get isValid() { return bentleyjs_core_1.Id64.isValid(this.id); }
}
exports.CodeSpec = CodeSpec;


/***/ }),

/***/ "./lib/ColorDef.js":
/*!*************************!*\
  !*** ./lib/ColorDef.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Symbology */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
// spell-checker: disable
/** A set of known colors by name, as a 32-bit integer in the form 0xBBGGRR (red is the low byte).
 * This is different than color values in #RRGGBB format for HTML pages (red and blue are swapped).
 * @note If your colors don't look right, likely you're using 0xRRGGBB where ColorDef expects 0xBBGGRR.
 * @public
 */
var ColorByName;
(function (ColorByName) {
    ColorByName[ColorByName["aliceBlue"] = 16775408] = "aliceBlue";
    ColorByName[ColorByName["amber"] = 49151] = "amber";
    ColorByName[ColorByName["antiqueWhite"] = 14150650] = "antiqueWhite";
    ColorByName[ColorByName["aqua"] = 16776960] = "aqua";
    ColorByName[ColorByName["aquamarine"] = 13959039] = "aquamarine";
    ColorByName[ColorByName["azure"] = 16777200] = "azure";
    ColorByName[ColorByName["beige"] = 14480885] = "beige";
    ColorByName[ColorByName["bisque"] = 12903679] = "bisque";
    ColorByName[ColorByName["black"] = 0] = "black";
    ColorByName[ColorByName["blanchedAlmond"] = 13495295] = "blanchedAlmond";
    ColorByName[ColorByName["blue"] = 16711680] = "blue";
    ColorByName[ColorByName["blueViolet"] = 14822282] = "blueViolet";
    ColorByName[ColorByName["brown"] = 2763429] = "brown";
    ColorByName[ColorByName["burlyWood"] = 8894686] = "burlyWood";
    ColorByName[ColorByName["cadetBlue"] = 10526303] = "cadetBlue";
    ColorByName[ColorByName["chartreuse"] = 65407] = "chartreuse";
    ColorByName[ColorByName["chocolate"] = 1993170] = "chocolate";
    ColorByName[ColorByName["coral"] = 5275647] = "coral";
    ColorByName[ColorByName["cornflowerBlue"] = 15570276] = "cornflowerBlue";
    ColorByName[ColorByName["cornSilk"] = 14481663] = "cornSilk";
    ColorByName[ColorByName["crimson"] = 3937500] = "crimson";
    ColorByName[ColorByName["cyan"] = 16776960] = "cyan";
    ColorByName[ColorByName["darkBlue"] = 9109504] = "darkBlue";
    ColorByName[ColorByName["darkBrown"] = 2179941] = "darkBrown";
    ColorByName[ColorByName["darkCyan"] = 9145088] = "darkCyan";
    ColorByName[ColorByName["darkGoldenrod"] = 755384] = "darkGoldenrod";
    ColorByName[ColorByName["darkGray"] = 11119017] = "darkGray";
    ColorByName[ColorByName["darkGreen"] = 25600] = "darkGreen";
    ColorByName[ColorByName["darkGrey"] = 11119017] = "darkGrey";
    ColorByName[ColorByName["darkKhaki"] = 7059389] = "darkKhaki";
    ColorByName[ColorByName["darkMagenta"] = 9109643] = "darkMagenta";
    ColorByName[ColorByName["darkOliveGreen"] = 3107669] = "darkOliveGreen";
    ColorByName[ColorByName["darkOrange"] = 36095] = "darkOrange";
    ColorByName[ColorByName["darkOrchid"] = 13382297] = "darkOrchid";
    ColorByName[ColorByName["darkRed"] = 139] = "darkRed";
    ColorByName[ColorByName["darkSalmon"] = 8034025] = "darkSalmon";
    ColorByName[ColorByName["darkSeagreen"] = 9419919] = "darkSeagreen";
    ColorByName[ColorByName["darkSlateBlue"] = 9125192] = "darkSlateBlue";
    ColorByName[ColorByName["darkSlateGray"] = 5197615] = "darkSlateGray";
    ColorByName[ColorByName["darkSlateGrey"] = 5197615] = "darkSlateGrey";
    ColorByName[ColorByName["darkTurquoise"] = 13749760] = "darkTurquoise";
    ColorByName[ColorByName["darkViolet"] = 13828244] = "darkViolet";
    ColorByName[ColorByName["deepPink"] = 9639167] = "deepPink";
    ColorByName[ColorByName["deepSkyBlue"] = 16760576] = "deepSkyBlue";
    ColorByName[ColorByName["dimGray"] = 6908265] = "dimGray";
    ColorByName[ColorByName["dimGrey"] = 6908265] = "dimGrey";
    ColorByName[ColorByName["dodgerBlue"] = 16748574] = "dodgerBlue";
    ColorByName[ColorByName["fireBrick"] = 2237106] = "fireBrick";
    ColorByName[ColorByName["floralWhite"] = 15792895] = "floralWhite";
    ColorByName[ColorByName["forestGreen"] = 2263842] = "forestGreen";
    ColorByName[ColorByName["fuchsia"] = 16711935] = "fuchsia";
    ColorByName[ColorByName["gainsboro"] = 14474460] = "gainsboro";
    ColorByName[ColorByName["ghostWhite"] = 16775416] = "ghostWhite";
    ColorByName[ColorByName["gold"] = 55295] = "gold";
    ColorByName[ColorByName["goldenrod"] = 2139610] = "goldenrod";
    ColorByName[ColorByName["gray"] = 8421504] = "gray";
    ColorByName[ColorByName["green"] = 32768] = "green";
    ColorByName[ColorByName["greenYellow"] = 3145645] = "greenYellow";
    ColorByName[ColorByName["grey"] = 8421504] = "grey";
    ColorByName[ColorByName["honeydew"] = 15794160] = "honeydew";
    ColorByName[ColorByName["hotPink"] = 11823615] = "hotPink";
    ColorByName[ColorByName["indianRed"] = 6053069] = "indianRed";
    ColorByName[ColorByName["indigo"] = 8519755] = "indigo";
    ColorByName[ColorByName["ivory"] = 15794175] = "ivory";
    ColorByName[ColorByName["khaki"] = 9234160] = "khaki";
    ColorByName[ColorByName["lavender"] = 16443110] = "lavender";
    ColorByName[ColorByName["lavenderBlush"] = 16118015] = "lavenderBlush";
    ColorByName[ColorByName["lawnGreen"] = 64636] = "lawnGreen";
    ColorByName[ColorByName["lemonChiffon"] = 13499135] = "lemonChiffon";
    ColorByName[ColorByName["lightBlue"] = 15128749] = "lightBlue";
    ColorByName[ColorByName["lightCoral"] = 8421616] = "lightCoral";
    ColorByName[ColorByName["lightCyan"] = 16777184] = "lightCyan";
    ColorByName[ColorByName["lightGoldenrodYellow"] = 13826810] = "lightGoldenrodYellow";
    ColorByName[ColorByName["lightGray"] = 13882323] = "lightGray";
    ColorByName[ColorByName["lightGreen"] = 9498256] = "lightGreen";
    ColorByName[ColorByName["lightGrey"] = 13882323] = "lightGrey";
    ColorByName[ColorByName["lightPink"] = 12695295] = "lightPink";
    ColorByName[ColorByName["lightSalmon"] = 8036607] = "lightSalmon";
    ColorByName[ColorByName["lightSeagreen"] = 11186720] = "lightSeagreen";
    ColorByName[ColorByName["lightSkyBlue"] = 16436871] = "lightSkyBlue";
    ColorByName[ColorByName["lightSlateGray"] = 10061943] = "lightSlateGray";
    ColorByName[ColorByName["lightSlateGrey"] = 10061943] = "lightSlateGrey";
    ColorByName[ColorByName["lightSteelBlue"] = 14599344] = "lightSteelBlue";
    ColorByName[ColorByName["lightyellow"] = 14745599] = "lightyellow";
    ColorByName[ColorByName["lime"] = 65280] = "lime";
    ColorByName[ColorByName["limeGreen"] = 3329330] = "limeGreen";
    ColorByName[ColorByName["linen"] = 15134970] = "linen";
    ColorByName[ColorByName["magenta"] = 16711935] = "magenta";
    ColorByName[ColorByName["maroon"] = 128] = "maroon";
    ColorByName[ColorByName["mediumAquamarine"] = 11193702] = "mediumAquamarine";
    ColorByName[ColorByName["mediumBlue"] = 13434880] = "mediumBlue";
    ColorByName[ColorByName["mediumOrchid"] = 13850042] = "mediumOrchid";
    ColorByName[ColorByName["mediumPurple"] = 14381203] = "mediumPurple";
    ColorByName[ColorByName["mediumSeaGreen"] = 7451452] = "mediumSeaGreen";
    ColorByName[ColorByName["mediumSlateBlue"] = 15624315] = "mediumSlateBlue";
    ColorByName[ColorByName["mediumSpringGreen"] = 10156544] = "mediumSpringGreen";
    ColorByName[ColorByName["mediumTurquoise"] = 13422920] = "mediumTurquoise";
    ColorByName[ColorByName["mediumVioletRed"] = 8721863] = "mediumVioletRed";
    ColorByName[ColorByName["midnightBlue"] = 7346457] = "midnightBlue";
    ColorByName[ColorByName["mintCream"] = 16449525] = "mintCream";
    ColorByName[ColorByName["mistyRose"] = 14804223] = "mistyRose";
    ColorByName[ColorByName["moccasin"] = 11920639] = "moccasin";
    ColorByName[ColorByName["navajoWhite"] = 11394815] = "navajoWhite";
    ColorByName[ColorByName["navy"] = 8388608] = "navy";
    ColorByName[ColorByName["oldLace"] = 15136253] = "oldLace";
    ColorByName[ColorByName["olive"] = 32896] = "olive";
    ColorByName[ColorByName["oliveDrab"] = 2330219] = "oliveDrab";
    ColorByName[ColorByName["orange"] = 42495] = "orange";
    ColorByName[ColorByName["orangeRed"] = 17919] = "orangeRed";
    ColorByName[ColorByName["orchid"] = 14053594] = "orchid";
    ColorByName[ColorByName["paleGoldenrod"] = 11200750] = "paleGoldenrod";
    ColorByName[ColorByName["paleGreen"] = 10025880] = "paleGreen";
    ColorByName[ColorByName["paleTurquoise"] = 15658671] = "paleTurquoise";
    ColorByName[ColorByName["paleVioletRed"] = 9662683] = "paleVioletRed";
    ColorByName[ColorByName["papayaWhip"] = 14020607] = "papayaWhip";
    ColorByName[ColorByName["peachPuff"] = 12180223] = "peachPuff";
    ColorByName[ColorByName["peru"] = 4163021] = "peru";
    ColorByName[ColorByName["pink"] = 13353215] = "pink";
    ColorByName[ColorByName["plum"] = 14524637] = "plum";
    ColorByName[ColorByName["powderBlue"] = 15130800] = "powderBlue";
    ColorByName[ColorByName["purple"] = 8388736] = "purple";
    ColorByName[ColorByName["rebeccaPurple"] = 10040166] = "rebeccaPurple";
    ColorByName[ColorByName["red"] = 255] = "red";
    ColorByName[ColorByName["rosyBrown"] = 9408444] = "rosyBrown";
    ColorByName[ColorByName["royalBlue"] = 14772545] = "royalBlue";
    ColorByName[ColorByName["saddleBrown"] = 1262987] = "saddleBrown";
    ColorByName[ColorByName["salmon"] = 7504122] = "salmon";
    ColorByName[ColorByName["sandyBrown"] = 6333684] = "sandyBrown";
    ColorByName[ColorByName["seaGreen"] = 5737262] = "seaGreen";
    ColorByName[ColorByName["seaShell"] = 15660543] = "seaShell";
    ColorByName[ColorByName["sienna"] = 2970272] = "sienna";
    ColorByName[ColorByName["silver"] = 12632256] = "silver";
    ColorByName[ColorByName["skyBlue"] = 15453831] = "skyBlue";
    ColorByName[ColorByName["slateBlue"] = 13458026] = "slateBlue";
    ColorByName[ColorByName["slateGray"] = 9470064] = "slateGray";
    ColorByName[ColorByName["slateGrey"] = 9470064] = "slateGrey";
    ColorByName[ColorByName["snow"] = 16448255] = "snow";
    ColorByName[ColorByName["springGreen"] = 8388352] = "springGreen";
    ColorByName[ColorByName["steelBlue"] = 11829830] = "steelBlue";
    ColorByName[ColorByName["tan"] = 9221330] = "tan";
    ColorByName[ColorByName["teal"] = 8421376] = "teal";
    ColorByName[ColorByName["thistle"] = 14204888] = "thistle";
    ColorByName[ColorByName["tomato"] = 4678655] = "tomato";
    ColorByName[ColorByName["turquoise"] = 13688896] = "turquoise";
    ColorByName[ColorByName["violet"] = 15631086] = "violet";
    ColorByName[ColorByName["wheat"] = 11788021] = "wheat";
    ColorByName[ColorByName["white"] = 16777215] = "white";
    ColorByName[ColorByName["whiteSmoke"] = 16119285] = "whiteSmoke";
    ColorByName[ColorByName["yellow"] = 65535] = "yellow";
    ColorByName[ColorByName["yellowGreen"] = 3329434] = "yellowGreen";
})(ColorByName = exports.ColorByName || (exports.ColorByName = {}));
/** A color defined by Hue, Saturation, and Lightness.
 * @see [here](https://en.wikipedia.org/wiki/HSL_and_HSV) for difference between HSL and HSV
 * @public
 */
class HSLColor {
    constructor() {
        /** Hue */
        this.h = 0;
        /** Saturation */
        this.s = 0;
        /** Lightness */
        this.l = 0;
    }
    clone() { const out = new HSLColor(); out.h = this.h; out.s = this.s; out.l = this.l; return out; }
    toColorDef(out) { return ColorDef.fromHSL(this.h, this.s, this.l, out); }
    static fromColorDef(val, out) { return val.toHSL(out); }
}
exports.HSLColor = HSLColor;
/** A color defined by Hue, Saturation, and Value
 * @see [here](https://en.wikipedia.org/wiki/HSL_and_HSV) for difference between HSL and HSV
 * @public
 */
class HSVColor {
    constructor() {
        /** Hue */
        this.h = 0;
        /** Saturation */
        this.s = 0;
        /** Value */
        this.v = 0;
    }
    clone() { const out = new HSVColor(); out.h = this.h; out.s = this.s; out.v = this.v; return out; }
    toColorDef(out) { return ColorDef.fromHSV(this, out); }
    static fromColorDef(val, out) { return val.toHSV(out); }
    adjustColor(darkenColor, delta) {
        if (darkenColor) {
            let weightedDelta = delta * 2 /* HSV_VALUE_WEIGHT */;
            if (this.v >= weightedDelta) {
                this.v -= weightedDelta;
            }
            else {
                weightedDelta -= this.v;
                this.v = 0;
                this.s = this.s + weightedDelta < 100 ? this.s + weightedDelta : 100;
            }
        }
        else {
            let weightedDelta = delta * 4 /* HSV_SATURATION_WEIGHT */;
            if (this.s >= weightedDelta) {
                this.s -= weightedDelta;
            }
            else {
                weightedDelta -= this.s;
                this.s = 0;
                this.v = this.v + weightedDelta < 100 ? this.v + weightedDelta : 100;
            }
        }
    }
}
exports.HSVColor = HSVColor;
const scratchBytes = new Uint8Array(4);
const scratchUInt32 = new Uint32Array(scratchBytes.buffer);
/** An integer representation of a color.
 *
 * Colors are stored as 4 components: Red, Blue, Green, and Transparency (0=fully opaque). Each is an 8-bit integer between 0-255.
 *
 * Much confusion results from attempting to interpret those 4 one-byte values as a 4 byte integer. There are generally two sources
 * of confusion:
 *  1. The order the Red, Green, Blue bytes
 *  2. Whether to specify transparency or opacity (sometimes referred to as "alpha")
 *
 * Generally, iModel.js prefers to use `0xTTBBGGRR` (red in the low byte. 0==fully opaque in high byte), but this class provides methods
 * to convert to `0xRRGGBB` (see [[getRgb]]) and `0xAABBGGRR` (red in the low byte, 0==fully transparent in high byte. see [[getAbgr]]).
 *
 * The constructor also accepts strings in the common HTML formats.
 * @public
 */
class ColorDef {
    /**
     * Create a new ColorDef.
     * @param val value to use.
     * If a number, it is interpreted as a 0xTTBBGGRR (Red in the low byte, high byte is transparency 0==fully opaque) value.
     *
     * If a string, must be in one of the following forms:
     * *"rgb(255,0,0)"*
     * *"rgba(255,0,0,255)"*
     * *"rgb(100%,0%,0%)"*
     * *"hsl(120,50%,50%)"*
     * *"#rrbbgg"*
     * *"blanchedAlmond"* (see possible values from [[ColorByName]]). Case insensitve.
     */
    constructor(val) {
        this._tbgr = 0;
        if (!val)
            return;
        if (typeof val === "number") {
            this.tbgr = val;
            return;
        }
        if (val instanceof ColorDef) {
            this._tbgr = val._tbgr;
            return;
        }
        this.fromString(val);
    }
    /** Swap the red and blue values of a 32-bit integer representing a color. Transparency and green are unchanged. */
    static rgb2bgr(val) { scratchUInt32[0] = val; return scratchBytes[3] << 24 + scratchBytes[0] << 16 + scratchBytes[1] << 8 + scratchBytes[2]; }
    /** Make a copy of this ColorDef */
    clone() { return new ColorDef(this._tbgr); }
    /** Set the color of this ColorDef from another ColorDef */
    setFrom(other) { this._tbgr = other._tbgr; }
    /** Convert this ColorDef to a 32 bit number representing the 0xTTBBGGRR value */
    toJSON() { return this._tbgr; }
    /** Create a new ColorDef from a json object. If the json object is a number, it is assumed to be a 0xTTBBGGRR value. */
    static fromJSON(json) { return new ColorDef(json); }
    /** Initialize or create a ColorDef fromn Red,Green,Blue,Transparency values. All values should be between 0-255 */
    static from(red, green, blue, transparency, result) {
        result = result ? result : new ColorDef();
        scratchBytes[0] = red;
        scratchBytes[1] = green;
        scratchBytes[2] = blue;
        scratchBytes[3] = transparency || 0;
        result._tbgr = scratchUInt32[0];
        return result;
    }
    /** Get the r,g,b,t values from this ColorDef. Returned as an object with {r, g, b, t} members. Values will be integers between 0-255. */
    get colors() { scratchUInt32[0] = this._tbgr; return { b: scratchBytes[2], g: scratchBytes[1], r: scratchBytes[0], t: scratchBytes[3] }; }
    /** The color value of this ColorDef as an integer in the form 0xTTBBGGRR (red in the low byte) */
    get tbgr() { return this._tbgr; }
    set tbgr(tbgr) { scratchUInt32[0] = tbgr; this._tbgr = scratchUInt32[0]; } // force to be a 32 bit unsigned integer
    /** Get the value of the color as a number in 0xAABBGGRR format (i.e. red is in low byte). Transparency (0==fully opaque) converted to alpha (0==fully transparent).  */
    getAbgr() { scratchUInt32[0] = this._tbgr; scratchBytes[3] = 255 - scratchBytes[3]; return scratchUInt32[0]; }
    /** Get the RGB value of the color as a number in 0xRRGGBB format (i.e blue is in the low byte). Transparency is ignored. Value will be from 0 to 2^24 */
    getRgb() { scratchUInt32[0] = this._tbgr; return (scratchBytes[0] << 16) + (scratchBytes[1] << 8) + scratchBytes[2]; }
    /** Change the alpha value for this ColorDef.
     * @param alpha the new alpha value. Must be between 0-255.
     */
    setAlpha(alpha) { scratchUInt32[0] = this._tbgr; scratchBytes[3] = 255 - (alpha | 0); this._tbgr = scratchUInt32[0]; }
    /** Get the alpha value for this ColorDef. Will be between 0-255 */
    getAlpha() { scratchUInt32[0] = this._tbgr; return 255 - scratchBytes[3]; }
    /** True if this ColorDef is fully opaque */
    get isOpaque() { return 255 === this.getAlpha(); }
    /** Change the transparency value for this ColorDef
     * @param transparency the new transparency value. Must be between 0-255, where 0 means 'fully opaque' and 255 means 'fully transparent'.
     */
    setTransparency(transparency) { this.setAlpha(255 - transparency); }
    /** The "known name" for this ColorDef. Will be undefined if color value is not in [[ColorByName]] list */
    get name() { return ColorByName[this._tbgr]; }
    /** Convert this ColorDef to a string in the form "#rrggbb" where values are hex digits of the respective colors */
    toHexString() { return "#" + ("000000" + this.getRgb().toString(16)).slice(-6); }
    /** Convert this ColorDef to a string in the form "rgb(r,g,b)" where values are decimal digits of the respective colors */
    toRgbString() { const c = this.colors; return "rgb(" + (c.r | 0) + "," + (c.g | 0) + "," + (c.b | 0) + ")"; }
    fromString(val) {
        if (typeof val !== "string")
            return this;
        val = val.toLowerCase();
        let m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(val);
        if (m) { // rgb / hsl
            let color;
            const name = m[1];
            const components = m[2];
            switch (name) {
                case "rgb":
                case "rgba":
                    color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components);
                    if (color) { // rgb(255,0,0) rgba(255,0,0,0.5)
                        return ColorDef.from(Math.min(255, parseInt(color[1], 10)), Math.min(255, parseInt(color[2], 10)), Math.min(255, parseInt(color[3], 10)), color[5] != null ? 255 - Math.min(255, parseInt(color[5], 10)) : 0, this);
                    }
                    color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components);
                    if (color) { // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
                        return ColorDef.from((Math.min(100, parseInt(color[1], 10)) / 100) * 255, (Math.min(100, parseInt(color[2], 10)) / 100) * 255, (Math.min(100, parseInt(color[3], 10)) / 100) * 255, color[5] != null ? 255 - ((Math.min(100, parseInt(color[5], 10)) / 100) * 255) : 0, this);
                    }
                    break;
                case "hsl":
                case "hsla":
                    color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components);
                    if (color) { // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
                        const h = parseFloat(color[1]) / 360;
                        const s = parseInt(color[2], 10) / 100;
                        const l = parseInt(color[3], 10) / 100;
                        return ColorDef.fromHSL(h, s, l, this);
                    }
                    break;
            }
            // tslint:disable-next-line:no-conditional-assignment
        }
        else if (m = /^\#([a-f0-9]+)$/.exec(val)) { // hex color
            const hex = m[1];
            const size = hex.length;
            if (size === 3) { // #ff0
                return ColorDef.from(parseInt(hex.charAt(0) + hex.charAt(0), 16), parseInt(hex.charAt(1) + hex.charAt(1), 16), parseInt(hex.charAt(2) + hex.charAt(2), 16), 0, this);
            }
            if (size === 6) { // #ff0000
                return ColorDef.from(parseInt(hex.charAt(0) + hex.charAt(1), 16), parseInt(hex.charAt(2) + hex.charAt(3), 16), parseInt(hex.charAt(4) + hex.charAt(5), 16), 0, this);
            }
        }
        if (val && val.length > 0) { // ColorRgb value
            Object.entries(ColorByName).some((v) => {
                if (v[1].toLowerCase() !== val)
                    return false;
                this._tbgr = Number(v[0]);
                return true;
            });
        }
        return this;
    }
    /** Create a ColorDef that is the linear interpolation of this ColorDef and another ColorDef, using a weighting factor.
     * @param color2 The other color
     * @param weight The weighting factor for color2. 0.0 = this color, 1.0 = color2.
     * @param result Optional ColorDef to hold result. If undefined, a new ColorDef is created.
     */
    lerp(color2, weight, result) {
        const color = color2.colors;
        const c = this.colors;
        c.r += (color.r - c.r) * weight;
        c.g += (color.g - c.g) * weight;
        c.b += (color.b - c.b) * weight;
        return ColorDef.from(c.r, c.g, c.b, c.t, result);
    }
    /** Create a new ColorDef that is the inverse (all colors set to 255 - this) of this color. */
    invert() { const colors = this.colors; return ColorDef.from(255 - colors.r, 255 - colors.g, 255 - colors.b); }
    /** Create a ColorDef from hue, saturation, lightness values */
    static fromHSL(h, s, l, out) {
        const torgb = (p1, q1, t) => {
            if (t < 0)
                t += 1;
            if (t > 1)
                t -= 1;
            if (t < 1 / 6)
                return p1 + (q1 - p1) * 6 * t;
            if (t < 1 / 2)
                return q1;
            if (t < 2 / 3)
                return p1 + (q1 - p1) * 6 * (2 / 3 - t);
            return p1;
        };
        const hue2rgb = (p1, q1, t) => Math.round(torgb(p1, q1, t) * 255);
        const modulo = (n, m) => ((n % m) + m) % m;
        // h,s,l ranges are in 0.0 - 1.0
        h = modulo(h, 1);
        s = geometry_core_1.Geometry.clamp(s, 0, 1);
        l = geometry_core_1.Geometry.clamp(l, 0, 1);
        if (s === 0)
            return ColorDef.from(l, l, l, 0, out);
        const p = l <= 0.5 ? l * (1 + s) : l + s - (l * s);
        const q = (2 * l) - p;
        return ColorDef.from(hue2rgb(q, p, h + 1 / 3), hue2rgb(q, p, h), hue2rgb(q, p, h - 1 / 3), 0, out);
    }
    /** Create an [[HSLColor]] from this ColorDef */
    toHSL(opt) {
        // h,s,l ranges are in 0.0 - 1.0
        const col = this.colors;
        col.r /= 255;
        col.g /= 255;
        col.b /= 255;
        const max = Math.max(col.r, col.g, col.b);
        const min = Math.min(col.r, col.g, col.b);
        let hue = 0;
        let saturation;
        const lightness = (min + max) / 2.0;
        if (min === max) {
            saturation = 0;
        }
        else {
            const delta = max - min;
            saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
            switch (max) {
                case col.r:
                    hue = (col.g - col.b) / delta + (col.g < col.b ? 6 : 0);
                    break;
                case col.g:
                    hue = (col.b - col.r) / delta + 2;
                    break;
                case col.b:
                    hue = (col.r - col.g) / delta + 4;
                    break;
            }
            hue /= 6;
        }
        const hsl = opt ? opt : new HSLColor();
        hsl.h = hue;
        hsl.s = saturation;
        hsl.l = lightness;
        return hsl;
    }
    /** Create an [[HSVColor]] from this ColorDef */
    toHSV(out) {
        const hsv = out ? out : new HSVColor();
        const { r, g, b } = this.colors;
        let min = (r < g) ? r : g;
        if (b < min)
            min = b;
        let max = (r > g) ? r : g;
        if (b > max)
            max = b;
        /* amount of "blackness" present */
        hsv.v = Math.floor((max / 255.0 * 100) + 0.5);
        const deltaRgb = max - min;
        hsv.s = (max !== 0.0) ? Math.floor((deltaRgb / max * 100) + 0.5) : 0;
        if (hsv.s) {
            const redDistance = (max - r) / deltaRgb;
            const greenDistance = (max - g) / deltaRgb;
            const blueDistance = (max - b) / deltaRgb;
            let intermediateHue;
            if (r === max) /* color between yellow & magenta */
                intermediateHue = blueDistance - greenDistance;
            else if (g === max) /* color between cyan & yellow */
                intermediateHue = 2.0 + redDistance - blueDistance;
            else /* color between magenta & cyan */
                intermediateHue = 4.0 + greenDistance - redDistance;
            /* intermediate hue is [0..6] */
            intermediateHue *= 60;
            if (intermediateHue < 0.0)
                intermediateHue += 360;
            hsv.h = Math.floor(intermediateHue + 0.5);
            if (hsv.h >= 360)
                hsv.h = 0;
        }
        else {
            hsv.h = 0;
        }
        return hsv;
    }
    /** Create a ColorDef from an HSVColor */
    static fromHSV(hsv, out) {
        // Check for simple case first.
        if ((!hsv.s) || (hsv.h === -1)) {
            // hue must be undefined, have no color only white
            const white = 0xff & Math.floor(((255.0 * hsv.v) / 100.0) + 0.5 + 3.0e-14);
            return ColorDef.from(white, white, white, 0, out);
        }
        let dhue = hsv.h, dsaturation = hsv.s, dvalue = hsv.v;
        if (dhue === 360)
            dhue = 0.0;
        dhue /= 60; // hue is now [0..6]
        const hueIntpart = Math.floor(dhue); // convert double -> int
        const hueFractpart = dhue - hueIntpart;
        dvalue /= 100;
        dsaturation /= 100;
        const p = 0xff & Math.floor((dvalue * (1.0 - dsaturation) * 255.0) + 0.5);
        const q = 0xff & Math.floor((dvalue * (1.0 - (dsaturation * hueFractpart)) * 255.0) + 0.5);
        const t = 0xff & Math.floor((dvalue * (1.0 - (dsaturation * (1.0 - hueFractpart))) * 255.0) + 0.5);
        const v = 0xff & Math.floor(dvalue * 255 + 0.5);
        let r = 0, b = 0, g = 0;
        switch (hueIntpart) {
            case 0:
                r = v;
                g = t;
                b = p;
                break; // reddish
            case 1:
                r = q, g = v;
                b = p;
                break; // yellowish
            case 2:
                r = p, g = v;
                b = t;
                break; // greenish
            case 3:
                r = p, g = q;
                b = v;
                break; // cyanish
            case 4:
                r = t, g = p;
                b = v;
                break; // bluish
            case 5:
                r = v, g = p;
                b = q;
                break; // magenta-ish
        }
        return ColorDef.from(r, g, b, 0, out);
    }
    visibilityCheck(other) {
        const fg = this.colors;
        const bg = other.colors;
        // Compute luminosity
        const red = Math.abs(fg.r - bg.r);
        const green = Math.abs(fg.g - bg.g);
        const blue = Math.abs(fg.b - bg.b);
        return (0.30 * red) + (0.59 * green) + (0.11 * blue);
    }
    /**
     * Create a new ColorDef that is adjusted from this ColorDef for maximum contrast against another color. The color will either be lighter
     * or darker, depending on which has more visibility against the other color.
     * @param other the color to contrast with
     * @param alpha optional alpha value for the adjusted color. If not supplied alpha from this color is used.
     */
    adjustForContrast(other, alpha) {
        const visibility = this.visibilityCheck(other);
        if (40 /* VISIBILITY_GOAL */ <= visibility) {
            const color = this.clone();
            if (undefined !== alpha)
                color.setAlpha(alpha);
            return color;
        }
        const adjPercent = Math.floor(((40 /* VISIBILITY_GOAL */ - visibility) / 255.0) * 100.0);
        const darkerHSV = this.toHSV();
        const brightHSV = darkerHSV.clone();
        darkerHSV.adjustColor(true, adjPercent);
        brightHSV.adjustColor(false, adjPercent);
        if (undefined === alpha)
            alpha = this.getAlpha();
        const darker = ColorDef.fromHSV(darkerHSV);
        darker.setAlpha(alpha);
        const bright = ColorDef.fromHSV(brightHSV);
        bright.setAlpha(alpha);
        if (bright.getRgb() === other.getRgb()) // Couldn't adjust brighter...
            return darker;
        if (darker.getRgb() === other.getRgb()) // Couldn't adjust darker...
            return bright;
        // NOTE: Best choice is the one most visible against the other color...
        return (bright.visibilityCheck(other) >= darker.visibilityCheck(other)) ? bright : darker;
    }
    /** True if the value of this ColorDef is the same as another ColorDef. */
    equals(other) { return this._tbgr === other._tbgr; }
}
/** A black frozen ColorDef. */
ColorDef.black = new ColorDef(ColorByName.black);
/** A white frozen ColorDef. */
ColorDef.white = new ColorDef(ColorByName.white);
/** A red frozen ColorDef. */
ColorDef.red = new ColorDef(ColorByName.red);
/** A green frozen ColorDef. */
ColorDef.green = new ColorDef(ColorByName.green);
/** A blue frozen ColorDef. */
ColorDef.blue = new ColorDef(ColorByName.blue);
exports.ColorDef = ColorDef;
Object.freeze(ColorDef.black);
Object.freeze(ColorDef.white);
Object.freeze(ColorDef.red);
Object.freeze(ColorDef.green);
Object.freeze(ColorDef.blue);
/** An immutable representation of a color with red, green, and blue components each in the integer range [0, 255].
 * @public
 */
class RgbColor {
    /** Constructs from red, green, and blue components.
     * @param r Red
     * @param g Green
     * @param b Blue
     */
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.r = Math.max(0, Math.min(this.r, 0xff));
        this.g = Math.max(0, Math.min(this.g, 0xff));
        this.b = Math.max(0, Math.min(this.b, 0xff));
    }
    equals(other) { return this.r === other.r && this.g === other.g && this.b === other.b; }
    /** Constructs from the red, green, and blue components of a ColorDef. The alpha component is ignored. */
    static fromColorDef(colorDef) {
        const colors = colorDef.colors;
        return new RgbColor(colors.r, colors.g, colors.b);
    }
}
exports.RgbColor = RgbColor;


/***/ }),

/***/ "./lib/CommonLoggerCategory.js":
/*!*************************************!*\
  !*** ./lib/CommonLoggerCategory.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Logging */
Object.defineProperty(exports, "__esModule", { value: true });
/** Logger categories used by this package
 * @see [Logger]($bentley)
 * @public
 */
var CommonLoggerCategory;
(function (CommonLoggerCategory) {
    /** The logger category used by common classes relating to ElementProps. */
    CommonLoggerCategory["ElementProps"] = "imodeljs-common.ElementProps";
    /** The logger category used by the portions of the RpcInterface framework that run on the backend. */
    CommonLoggerCategory["RpcInterfaceBackend"] = "imodeljs-backend.RpcInterface";
    /** The logger category used by the portions of the RpcInterface framework that run on the frontend. */
    CommonLoggerCategory["RpcInterfaceFrontend"] = "imodeljs-frontend.RpcInterface";
})(CommonLoggerCategory = exports.CommonLoggerCategory || (exports.CommonLoggerCategory = {}));


/***/ }),

/***/ "./lib/ECSqlTypes.js":
/*!***************************!*\
  !*** ./lib/ECSqlTypes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module ECSQL */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** Describes the different data types an ECSQL value can be of.
 * See also [ECSQL]($docs/learning/ECSQL).
 * @public
 */
var ECSqlValueType;
(function (ECSqlValueType) {
    // do not change the values of the enum as it must match its counterpart in the addon
    ECSqlValueType[ECSqlValueType["Blob"] = 1] = "Blob";
    ECSqlValueType[ECSqlValueType["Boolean"] = 2] = "Boolean";
    ECSqlValueType[ECSqlValueType["DateTime"] = 3] = "DateTime";
    ECSqlValueType[ECSqlValueType["Double"] = 4] = "Double";
    ECSqlValueType[ECSqlValueType["Geometry"] = 5] = "Geometry";
    ECSqlValueType[ECSqlValueType["Id"] = 6] = "Id";
    ECSqlValueType[ECSqlValueType["Int"] = 7] = "Int";
    ECSqlValueType[ECSqlValueType["Int64"] = 8] = "Int64";
    ECSqlValueType[ECSqlValueType["Point2d"] = 9] = "Point2d";
    ECSqlValueType[ECSqlValueType["Point3d"] = 10] = "Point3d";
    ECSqlValueType[ECSqlValueType["String"] = 11] = "String";
    ECSqlValueType[ECSqlValueType["Navigation"] = 12] = "Navigation";
    ECSqlValueType[ECSqlValueType["Struct"] = 13] = "Struct";
    ECSqlValueType[ECSqlValueType["PrimitiveArray"] = 14] = "PrimitiveArray";
    ECSqlValueType[ECSqlValueType["StructArray"] = 15] = "StructArray";
    ECSqlValueType[ECSqlValueType["Guid"] = 16] = "Guid";
})(ECSqlValueType = exports.ECSqlValueType || (exports.ECSqlValueType = {}));
/** Equivalent of the ECEnumeration OpCode in the **ECDbChange** ECSchema.
 * The enum can be used when programmatically binding values to the InstanceChange.OpCode property of
 * the ECDbChange ECSchema.
 *
 * See also
 * - [ChangeSummary Overview]($docs/learning/ChangeSummaries)
 * @public
 */
var ChangeOpCode;
(function (ChangeOpCode) {
    ChangeOpCode[ChangeOpCode["Insert"] = 1] = "Insert";
    ChangeOpCode[ChangeOpCode["Update"] = 2] = "Update";
    ChangeOpCode[ChangeOpCode["Delete"] = 4] = "Delete";
})(ChangeOpCode = exports.ChangeOpCode || (exports.ChangeOpCode = {}));
/** The enum represents the values for the ChangedValueState argument of the ECSQL function **Changes**.
 * The enum can be used when programmatically binding values to the ChangedValueState argument
 * in an ECSQL using the **Changes** ECSQL function.
 *
 * See also
 * - [ChangeSummary Overview]($docs/learning/ChangeSummaries)
 * @public
 */
var ChangedValueState;
(function (ChangedValueState) {
    ChangedValueState[ChangedValueState["AfterInsert"] = 1] = "AfterInsert";
    ChangedValueState[ChangedValueState["BeforeUpdate"] = 2] = "BeforeUpdate";
    ChangedValueState[ChangedValueState["AfterUpdate"] = 3] = "AfterUpdate";
    ChangedValueState[ChangedValueState["BeforeDelete"] = 4] = "BeforeDelete";
})(ChangedValueState = exports.ChangedValueState || (exports.ChangedValueState = {}));
/** Defines the ECSQL system properties.
 * See also [ECSQL]($docs/learning/ECSQL).
 * @public
 */
var ECSqlSystemProperty;
(function (ECSqlSystemProperty) {
    ECSqlSystemProperty[ECSqlSystemProperty["ECInstanceId"] = 0] = "ECInstanceId";
    ECSqlSystemProperty[ECSqlSystemProperty["ECClassId"] = 1] = "ECClassId";
    ECSqlSystemProperty[ECSqlSystemProperty["SourceECInstanceId"] = 2] = "SourceECInstanceId";
    ECSqlSystemProperty[ECSqlSystemProperty["SourceECClassId"] = 3] = "SourceECClassId";
    ECSqlSystemProperty[ECSqlSystemProperty["TargetECInstanceId"] = 4] = "TargetECInstanceId";
    ECSqlSystemProperty[ECSqlSystemProperty["TargetECClassId"] = 5] = "TargetECClassId";
    ECSqlSystemProperty[ECSqlSystemProperty["NavigationId"] = 6] = "NavigationId";
    ECSqlSystemProperty[ECSqlSystemProperty["NavigationRelClassId"] = 7] = "NavigationRelClassId";
    ECSqlSystemProperty[ECSqlSystemProperty["PointX"] = 8] = "PointX";
    ECSqlSystemProperty[ECSqlSystemProperty["PointY"] = 9] = "PointY";
    ECSqlSystemProperty[ECSqlSystemProperty["PointZ"] = 10] = "PointZ";
})(ECSqlSystemProperty = exports.ECSqlSystemProperty || (exports.ECSqlSystemProperty = {}));
/** Utility to format ECProperty names according to the iModel.js formatting rules.
 * See also [ECSQL Row Format]($docs/learning/ECSQLRowFormat).
 * @public
 */
class ECJsNames {
    /** Formats the specified ECProperty name according to the iModel.js formatting rules.
     *
     *  See [ECSQL Row Format]($docs/learning/ECSQLRowFormat) which describes the formatting rules.
     *
     * @param ecProperty Property name as defined in the ECSchema for regular ECProperties
     *        or the name of an ECSQL system properties
     * @param isSystemProperty if omitted, the method will try to find out whether the given property
     *        is a system property or not. If true is specified, the method will throw if the property name
     *        is not a known system property. If false is specified, the method will not attempt to recognize
     *        the property name as system property.
     */
    static toJsName(propName, isSystemProperty) {
        bentleyjs_core_1.assert(propName !== undefined, "propName must not be undefined");
        const propTypeUnknown = isSystemProperty === undefined || isSystemProperty === null;
        const accessStringTokens = propName.split(".");
        const tokenCount = accessStringTokens.length;
        bentleyjs_core_1.assert(tokenCount > 0);
        if (tokenCount === 1) {
            if (propTypeUnknown || isSystemProperty) {
                if (propName === "ECInstanceId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.ECInstanceId);
                if (propName === "ECClassId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.ECClassId);
                if (propName === "SourceECInstanceId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.SourceECInstanceId);
                if (propName === "TargetECInstanceId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.TargetECInstanceId);
                if (propName === "SourceECClassId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.SourceECClassId);
                if (propName === "TargetECClassId")
                    return ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.TargetECClassId);
                return ECJsNames.lowerFirstChar(propName);
            }
            return ECJsNames.lowerFirstChar(propName);
        }
        // parse access string and convert the leaf tokens if they are system props
        // The first char of the access string is lowered.
        let jsName = ECJsNames.lowerFirstChar(accessStringTokens[0] + ".");
        for (let j = 1; j < tokenCount - 1; j++) {
            jsName += accessStringTokens[j] + ".";
        }
        const leafToken = accessStringTokens[tokenCount - 1];
        if (propTypeUnknown || isSystemProperty) {
            if (leafToken === "Id")
                jsName += ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.NavigationId);
            else if (leafToken === "RelECClassId")
                jsName += ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.NavigationRelClassId);
            else if (leafToken === "X")
                jsName += ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.PointX);
            else if (leafToken === "Y")
                jsName += ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.PointY);
            else if (leafToken === "Z")
                jsName += ECJsNames.systemPropertyToJsName(ECSqlSystemProperty.PointZ);
            else if (propTypeUnknown)
                jsName += ECJsNames.lowerFirstChar(leafToken);
            else
                throw new Error(`Property ${leafToken} of access string ${propName} is no ECSQL system property.`);
        }
        else
            jsName += leafToken;
        return jsName;
    }
    /** Returns the name of the specified ECSQL system property according to the
     *  iModel.js formatting rules.
     *
     *  See [ECSQL Row Format]($docs/learning/ECSQLRowFormat) which describes the formatting rules.
     * @param systemPropertyType System property type
     */
    static systemPropertyToJsName(systemPropertyType) {
        switch (systemPropertyType) {
            case ECSqlSystemProperty.ECInstanceId:
            case ECSqlSystemProperty.NavigationId:
                return "id";
            case ECSqlSystemProperty.ECClassId:
                return "className";
            case ECSqlSystemProperty.SourceECInstanceId:
                return "sourceId";
            case ECSqlSystemProperty.SourceECClassId:
                return "sourceClassName";
            case ECSqlSystemProperty.TargetECInstanceId:
                return "targetId";
            case ECSqlSystemProperty.TargetECClassId:
                return "targetClassName";
            case ECSqlSystemProperty.NavigationRelClassId:
                return "relClassName";
            case ECSqlSystemProperty.PointX:
                return "x";
            case ECSqlSystemProperty.PointY:
                return "y";
            case ECSqlSystemProperty.PointZ:
                return "z";
            default:
                throw new Error(`Unknown ECSqlSystemProperty enum value ${systemPropertyType}.`);
        }
    }
    static lowerFirstChar(name) { return name[0].toLowerCase() + name.substring(1); }
}
exports.ECJsNames = ECJsNames;


/***/ }),

/***/ "./lib/ElementProps.js":
/*!*****************************!*\
  !*** ./lib/ElementProps.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module WireFormats */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ./IModelError */ "./lib/IModelError.js");
const CommonLoggerCategory_1 = __webpack_require__(/*! ./CommonLoggerCategory */ "./lib/CommonLoggerCategory.js");
/** The Id and relationship class of an Element that is somehow related to another Element
 * @public
 */
class RelatedElement {
    constructor(props) { this.id = bentleyjs_core_1.Id64.fromJSON(props.id); this.relClassName = props.relClassName; }
    static fromJSON(json) { return json ? new RelatedElement(json) : undefined; }
    /** Accept the value of a navigation property that might be in the shortened format of just an id or might be in the full RelatedElement format. */
    static idFromJson(json) {
        if ((typeof json === "object") && ("id" in json)) {
            const r = RelatedElement.fromJSON(json);
            if (r === undefined)
                throw new IModelError_1.IModelError(IModelError_1.IModelStatus.BadArg, "Problem parsing Id64 from json", bentleyjs_core_1.Logger.logWarning, CommonLoggerCategory_1.CommonLoggerCategory.ElementProps);
            return r.id;
        }
        return bentleyjs_core_1.Id64.fromJSON(json);
    }
}
exports.RelatedElement = RelatedElement;
/** A [RelatedElement]($common) relationship that describes the [TypeDefinitionElement]($backend) of an element.
 * @public
 */
class TypeDefinition extends RelatedElement {
}
exports.TypeDefinition = TypeDefinition;


/***/ }),

/***/ "./lib/EntityProps.js":
/*!****************************!*\
  !*** ./lib/EntityProps.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module WireFormats */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const ElementProps_1 = __webpack_require__(/*! ./ElementProps */ "./lib/ElementProps.js");
/** The primitive types of an Entity property.
 * @beta
 */
var PrimitiveTypeCode;
(function (PrimitiveTypeCode) {
    PrimitiveTypeCode[PrimitiveTypeCode["Uninitialized"] = 0] = "Uninitialized";
    PrimitiveTypeCode[PrimitiveTypeCode["Binary"] = 257] = "Binary";
    PrimitiveTypeCode[PrimitiveTypeCode["Boolean"] = 513] = "Boolean";
    PrimitiveTypeCode[PrimitiveTypeCode["DateTime"] = 769] = "DateTime";
    PrimitiveTypeCode[PrimitiveTypeCode["Double"] = 1025] = "Double";
    PrimitiveTypeCode[PrimitiveTypeCode["Integer"] = 1281] = "Integer";
    PrimitiveTypeCode[PrimitiveTypeCode["Long"] = 1537] = "Long";
    PrimitiveTypeCode[PrimitiveTypeCode["Point2d"] = 1793] = "Point2d";
    PrimitiveTypeCode[PrimitiveTypeCode["Point3d"] = 2049] = "Point3d";
    PrimitiveTypeCode[PrimitiveTypeCode["String"] = 2305] = "String";
})(PrimitiveTypeCode = exports.PrimitiveTypeCode || (exports.PrimitiveTypeCode = {}));
/** Metadata for a property.
 * @beta
 */
class PropertyMetaData {
    constructor(jsonObj) {
        this.primitiveType = jsonObj.primitiveType;
        if (jsonObj.structName)
            this.structName = jsonObj.structName;
        this.extendedType = jsonObj.extendedType;
        this.description = jsonObj.description;
        this.displayLabel = jsonObj.displayLabel;
        if (undefined !== jsonObj.minimumValue)
            this.minimumValue = jsonObj.minimumValue;
        if (undefined !== jsonObj.maximumValue)
            this.maximumValue = jsonObj.maximumValue;
        if (undefined !== jsonObj.minimumLength)
            this.minimumLength = jsonObj.minimumLength;
        if (undefined !== jsonObj.maximumLength)
            this.maximumLength = jsonObj.maximumLength;
        this.readOnly = jsonObj.readOnly;
        this.kindOfQuantity = jsonObj.kindOfQuantity;
        this.isCustomHandled = jsonObj.isCustomHandled;
        if (undefined !== jsonObj.minOccurs)
            this.minOccurs = jsonObj.minOccurs;
        if (undefined !== jsonObj.maxOccurs)
            this.maxOccurs = jsonObj.maxOccurs;
        this.direction = jsonObj.direction;
        this.relationshipClass = jsonObj.relationshipClass;
        this.customAttributes = jsonObj.customAttributes;
    }
    /** Create a typed value, or array of values, from a factory and an input object */
    createValueOrArray(func, jsonObj) {
        if (undefined === this.minOccurs)
            return func(jsonObj); // not an array
        const val = [];
        jsonObj.forEach((element) => val.push(func(element)));
        return val;
    }
    /** construct a single property from an input object according to this metadata */
    createProperty(jsonObj) {
        if (jsonObj === undefined)
            return undefined;
        if (undefined !== this.primitiveType) {
            switch (this.primitiveType) {
                case PrimitiveTypeCode.Boolean:
                case PrimitiveTypeCode.Double:
                case PrimitiveTypeCode.Integer:
                case PrimitiveTypeCode.String:
                    return jsonObj; // this works even for arrays or strings that are JSON because the parsed JSON is already the right type
                case PrimitiveTypeCode.Point2d:
                    return this.createValueOrArray(geometry_core_1.Point2d.fromJSON, jsonObj);
                case PrimitiveTypeCode.Point3d:
                    return this.createValueOrArray(geometry_core_1.Point3d.fromJSON, jsonObj);
            }
        }
        if (this.direction !== undefined) // the presence of this means it is a navigation property
            return jsonObj.id !== undefined ? new ElementProps_1.RelatedElement(jsonObj) : bentleyjs_core_1.Id64.fromJSON(jsonObj);
        return jsonObj;
    }
}
exports.PropertyMetaData = PropertyMetaData;
/** Metadata for an Entity.
 * @beta
 */
class EntityMetaData {
    constructor(jsonObj) {
        this.ecclass = jsonObj.ecclass;
        this.description = jsonObj.description;
        this.modifier = jsonObj.modifier;
        this.displayLabel = jsonObj.displayLabel;
        this.baseClasses = jsonObj.baseClasses;
        this.customAttributes = jsonObj.customAttributes;
        this.properties = {};
        for (const propName in jsonObj.properties) {
            if (propName)
                this.properties[propName] = new PropertyMetaData(jsonObj.properties[propName]);
        }
    }
}
exports.EntityMetaData = EntityMetaData;


/***/ }),

/***/ "./lib/FeatureGates.js":
/*!*****************************!*\
  !*** ./lib/FeatureGates.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** A set of "gates" that can enable or disable features at runtime.
 * @internal
 */
class FeatureGates {
    constructor() {
        /** Event raised every time any feature changes. */
        this.onChanged = new bentleyjs_core_1.BeEvent();
        /** A map of the current set of features. */
        this.gates = new Map();
    }
    /** Get the value of a potentially gated feature.
     * @param feature The name of the feature to check. May be a "path" of period-separated feature sub-groups (e.g. "feature1.groupA.showMe").
     *       Feature names are case-sensitive.
     * @param defaultVal Optionally, value to return if feature is undefined.
     */
    check(feature, defaultVal) {
        const val = this.gates.get(feature);
        return val === undefined ? defaultVal : val;
    }
    /** Gate access to a feature.
     * @param feature The name of the feature to gate. May be a "path" of period-separated feature sub-groups (e.g. "feature1.groupA.showMe").
     *  Feature names are case-sensitive.
     * @param val Value to set. If undefined, feature is deleted.
     */
    setGate(feature, val) {
        if (feature.length === 0)
            return;
        if (val === undefined)
            this.gates.delete(feature);
        else
            this.gates.set(feature, val);
        this.onChanged.raiseEvent(feature, val);
    }
    /** Register a listener to be called whenever the value of a specific gate changes.
     * @param feature The name of the feature to monitor
     * @param monitor The listener to call when `feature` changes. Receives a single argument holding the new value of the feature (may be undefined).
     * @returns A function that may be called to remove the listener.
     * @note Use [[onChanged]] to listen to changes for *all* gates.
     */
    addMonitor(feature, monitor) { return this.onChanged.addListener((changed, val) => { if (changed === feature)
        monitor(val); }); }
}
exports.FeatureGates = FeatureGates;


/***/ }),

/***/ "./lib/FeatureIndex.js":
/*!*****************************!*\
  !*** ./lib/FeatureIndex.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Rendering */
Object.defineProperty(exports, "__esModule", { value: true });
const ColorDef_1 = __webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js");
/** @internal */
class NonUniformColor {
    constructor(colors, indices, hasAlpha) {
        this.colors = new Uint32Array(colors.buffer);
        this.indices = Uint16Array.from(indices);
        this.isOpaque = !hasAlpha;
    }
}
exports.NonUniformColor = NonUniformColor;
/** @internal */
class ColorIndex {
    get hasAlpha() { return !this._color.isOpaque; }
    get isUniform() { return this._color instanceof ColorDef_1.ColorDef; }
    get numColors() { return this.isUniform ? 1 : this.nonUniform.colors.length; }
    constructor() { this._color = ColorDef_1.ColorDef.white.clone(); }
    reset() { this._color = ColorDef_1.ColorDef.white.clone(); }
    get uniform() { return this.isUniform ? this._color : undefined; }
    initUniform(color) { this._color = ("number" === typeof color) ? new ColorDef_1.ColorDef(color) : color.clone(); }
    get nonUniform() { return !this.isUniform ? this._color : undefined; }
    initNonUniform(colors, indices, hasAlpha) {
        this._color = new NonUniformColor(colors, indices, hasAlpha);
    }
}
exports.ColorIndex = ColorIndex;
/** @internal */
var FeatureIndexType;
(function (FeatureIndexType) {
    FeatureIndexType[FeatureIndexType["Empty"] = 0] = "Empty";
    FeatureIndexType[FeatureIndexType["Uniform"] = 1] = "Uniform";
    FeatureIndexType[FeatureIndexType["NonUniform"] = 2] = "NonUniform";
})(FeatureIndexType = exports.FeatureIndexType || (exports.FeatureIndexType = {}));
/** @internal */
class FeatureIndex {
    constructor() {
        this.type = FeatureIndexType.Empty;
        this.featureID = 0;
        this.reset();
    }
    get isUniform() { return FeatureIndexType.Uniform === this.type; }
    get isEmpty() { return FeatureIndexType.Empty === this.type; }
    reset() { this.type = FeatureIndexType.Empty; this.featureID = 0; this.featureIDs = undefined; }
}
exports.FeatureIndex = FeatureIndex;


/***/ }),

/***/ "./lib/Fonts.js":
/*!**********************!*\
  !*** ./lib/Fonts.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Symbology */
Object.defineProperty(exports, "__esModule", { value: true });
/** The type of a font.
 * @public
 */
var FontType;
(function (FontType) {
    FontType[FontType["TrueType"] = 1] = "TrueType";
    FontType[FontType["Rsc"] = 2] = "Rsc";
    FontType[FontType["Shx"] = 3] = "Shx";
})(FontType = exports.FontType || (exports.FontType = {}));
/** A FontMap holds the table of known fonts available in an iModel.
 * A font is referenced by an "id" that is local to the iModel. This table maps those local ids to a FontProps.
 * @public
 */
class FontMap {
    constructor(props) {
        this.fonts = new Map();
        props.fonts.forEach((font) => this.fonts.set(font.id, font));
    }
    toJSON() {
        const fonts = [];
        this.fonts.forEach((font) => fonts.push(font));
        return { fonts };
    }
    /** look up a font by name or number and return its FontProps */
    getFont(arg) {
        if (typeof arg === "number")
            return this.fonts.get(arg);
        for (const font of this.fonts.values())
            if (font.name === arg)
                return font;
        return undefined;
    }
}
exports.FontMap = FontMap;


/***/ }),

/***/ "./lib/Frustum.js":
/*!************************!*\
  !*** ./lib/Frustum.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Views */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** The 8 corners of the [Normalized Plane Coordinate]($docs/learning/glossary.md#npc) cube.
 * @public
 */
var Npc;
(function (Npc) {
    /** Left bottom rear */
    Npc[Npc["_000"] = 0] = "_000";
    /** Right bottom rear */
    Npc[Npc["_100"] = 1] = "_100";
    /** Left top rear */
    Npc[Npc["_010"] = 2] = "_010";
    /** Right top rear */
    Npc[Npc["_110"] = 3] = "_110";
    /** Left bottom front */
    Npc[Npc["_001"] = 4] = "_001";
    /** Right bottom front */
    Npc[Npc["_101"] = 5] = "_101";
    /** Left top front */
    Npc[Npc["_011"] = 6] = "_011";
    /** Right top front */
    Npc[Npc["_111"] = 7] = "_111";
    Npc[Npc["LeftBottomRear"] = 0] = "LeftBottomRear";
    Npc[Npc["RightBottomRear"] = 1] = "RightBottomRear";
    Npc[Npc["LeftTopRear"] = 2] = "LeftTopRear";
    Npc[Npc["RightTopRear"] = 3] = "RightTopRear";
    Npc[Npc["LeftBottomFront"] = 4] = "LeftBottomFront";
    Npc[Npc["RightBottomFront"] = 5] = "RightBottomFront";
    Npc[Npc["LeftTopFront"] = 6] = "LeftTopFront";
    Npc[Npc["RightTopFront"] = 7] = "RightTopFront";
    /** useful for sizing arrays */
    Npc[Npc["CORNER_COUNT"] = 8] = "CORNER_COUNT";
})(Npc = exports.Npc || (exports.Npc = {}));
/** The 8 corners of an [[Npc]] Frustum.
 * @public
 */
exports.NpcCorners = [
    new geometry_core_1.Point3d(0.0, 0.0, 0.0),
    new geometry_core_1.Point3d(1.0, 0.0, 0.0),
    new geometry_core_1.Point3d(0.0, 1.0, 0.0),
    new geometry_core_1.Point3d(1.0, 1.0, 0.0),
    new geometry_core_1.Point3d(0.0, 0.0, 1.0),
    new geometry_core_1.Point3d(1.0, 0.0, 1.0),
    new geometry_core_1.Point3d(0.0, 1.0, 1.0),
    new geometry_core_1.Point3d(1.0, 1.0, 1.0),
];
exports.NpcCorners.forEach((corner) => Object.freeze(corner));
Object.freeze(exports.NpcCorners);
/** The center point of the [Normalized Plane Coordinate]($docs/learning/glossary.md#npc) cube.
 * @public
 */
exports.NpcCenter = new geometry_core_1.Point3d(.5, .5, .5); // tslint:disable-line:variable-name
Object.freeze(exports.NpcCenter);
/** The region of physical (3d) space that appears in a view. It forms the field-of-view of a camera.
 * It is stored as 8 points, in [[Npc]] order, that must define a truncated pyramid.
 * @public
 */
class Frustum {
    /** Constructor for Frustum. Members are initialized to the Npc cube. */
    constructor() {
        /** Array of the 8 points of this Frustum. */
        this.points = [];
        for (let i = 0; i < 8; ++i)
            this.points[i] = exports.NpcCorners[i].clone();
    }
    /** Initialize this Frustum to the 8 corners of the NPC cube. */
    initNpc() { for (let i = 0; i < 8; ++i)
        geometry_core_1.Point3d.createFrom(exports.NpcCorners[i], this.points[i]); return this; }
    /** Get a corner Point from this Frustum. */
    getCorner(i) { return this.points[i]; }
    /** Get the point at the center of this Frustum (halfway between RightTopFront and LeftBottomRear. */
    getCenter() { return this.getCorner(Npc.RightTopFront).interpolate(0.5, this.getCorner(Npc.LeftBottomRear)); }
    /** Get the distance between two corners of this Frustum. */
    distance(corner1, corner2) { return this.getCorner(corner1).distance(this.getCorner(corner2)); }
    /** Get the ratio of the length of the diagonal of the front plane to the diagonal of the back plane. */
    getFraction() { return geometry_core_1.Geometry.safeDivideFraction(this.distance(Npc.LeftTopFront, Npc.RightBottomFront), this.distance(Npc.LeftTopRear, Npc.RightBottomRear), 0); }
    /** Multiply all the points of this Frustum by a Transform, in place. */
    multiply(trans) { trans.multiplyPoint3dArrayInPlace(this.points); }
    /** Offset all of the points of this Frustum by a vector. */
    translate(offset) { for (const pt of this.points)
        pt.plus(offset); }
    /** Transform all the points of this Frustum and return the result in another Frustum. */
    transformBy(trans, result) { result = result ? result : new Frustum(); trans.multiplyPoint3dArray(this.points, result.points); return result; }
    /** Calculate a bounding range from the 8 points in this Frustum. */
    toRange(range) { range = range ? range : new geometry_core_1.Range3d(); geometry_core_1.Range3d.createArray(this.points, range); return range; }
    /** Make a copy of this Frustum.
     * @param result Optional Frustum for copy. If undefined allocate a new Frustum.
     */
    clone(result) { result = result ? result : new Frustum(); result.setFrom(this); return result; }
    /** Set the points of this Frustum to be copies of the points in another Frustum. */
    setFrom(other) { for (let i = 0; i < 8; ++i) {
        this.points[i].setFrom(other.points[i]);
    } }
    /** Scale this Frustum, in place, about its center by a scale factor. */
    scaleAboutCenter(scale) {
        const orig = this.clone();
        const f = 0.5 * (1.0 + scale);
        orig.points[Npc._111].interpolate(f, orig.points[Npc._000], this.points[Npc._000]);
        orig.points[Npc._011].interpolate(f, orig.points[Npc._100], this.points[Npc._100]);
        orig.points[Npc._101].interpolate(f, orig.points[Npc._010], this.points[Npc._010]);
        orig.points[Npc._001].interpolate(f, orig.points[Npc._110], this.points[Npc._110]);
        orig.points[Npc._110].interpolate(f, orig.points[Npc._001], this.points[Npc._001]);
        orig.points[Npc._010].interpolate(f, orig.points[Npc._101], this.points[Npc._101]);
        orig.points[Npc._100].interpolate(f, orig.points[Npc._011], this.points[Npc._011]);
        orig.points[Npc._000].interpolate(f, orig.points[Npc._111], this.points[Npc._111]);
    }
    /** Create a Map4d that converts world coordinates to/from [[Npc]] coordinates of this Frustum. */
    toMap4d() {
        const org = this.getCorner(Npc.LeftBottomRear);
        const xVec = org.vectorTo(this.getCorner(Npc.RightBottomRear));
        const yVec = org.vectorTo(this.getCorner(Npc.LeftTopRear));
        const zVec = org.vectorTo(this.getCorner(Npc.LeftBottomFront));
        return geometry_core_1.Map4d.createVectorFrustum(org, xVec, yVec, zVec, this.getFraction());
    }
    /** Invalidate this Frustum by setting all 8 points to zero. */
    invalidate() { for (let i = 0; i < 8; ++i)
        this.points[i].set(0, 0, 0); }
    /** Return true if this Frustum is equal to another Frustum */
    equals(rhs) {
        for (let i = 0; i < 8; ++i) {
            if (!this.points[i].isExactEqual(rhs.points[i]))
                return false;
        }
        return true;
    }
    /** Return true if all of the points in this Frustum are *almost* the same as the points in another Frustum.
     * @see [[equals]], [XYZ.isAlmostEqual]($geometry)
     */
    isSame(other) { for (let i = 0; i < 8; ++i) {
        if (!this.points[i].isAlmostEqual(other.points[i]))
            return false;
    } return true; }
    /** Initialize this Frustum from a Range */
    initFromRange(range) {
        const getZ = (arg) => arg.z !== undefined ? arg.z : 0;
        const pts = this.points;
        pts[0].x = pts[2].x = pts[4].x = pts[6].x = range.low.x;
        pts[1].x = pts[3].x = pts[5].x = pts[7].x = range.high.x;
        pts[0].y = pts[1].y = pts[4].y = pts[5].y = range.low.y;
        pts[2].y = pts[3].y = pts[6].y = pts[7].y = range.high.y;
        pts[0].z = pts[1].z = pts[2].z = pts[3].z = getZ(range.low);
        pts[4].z = pts[5].z = pts[6].z = pts[7].z = getZ(range.high);
    }
    /** Create a new Frustum from a Range3d */
    static fromRange(range, out) {
        const frustum = undefined !== out ? out : new Frustum();
        frustum.initFromRange(range);
        return frustum;
    }
    /** Return true if this Frustum has a mirror (is not in the correct order.) */
    get hasMirror() {
        const pts = this.points;
        const u = pts[Npc._000].vectorTo(pts[Npc._001]);
        const v = pts[Npc._000].vectorTo(pts[Npc._010]);
        const w = pts[Npc._000].vectorTo(pts[Npc._100]);
        return (u.tripleProduct(v, w) > 0);
    }
    /** Make sure the frustum point order does not include mirroring. If so, reverse the order. */
    fixPointOrder() {
        if (!this.hasMirror)
            return;
        // frustum has mirroring, reverse points
        const pts = this.points;
        for (let i = 0; i < 8; i += 2) {
            const tmpPoint = pts[i];
            pts[i] = pts[i + 1];
            pts[i + 1] = tmpPoint;
        }
    }
    /** Get a convex set of clipping planes bounding the region contained by this Frustum. */
    getRangePlanes(clipFront, clipBack, expandPlaneDistance) {
        const convexSet = geometry_core_1.ConvexClipPlaneSet.createEmpty();
        const scratchNormal = geometry_core_1.Vector3d.create();
        geometry_core_1.Vector3d.createCrossProductToPoints(this.points[5], this.points[3], this.points[1], scratchNormal);
        if (scratchNormal.normalizeInPlace())
            convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[1]) - expandPlaneDistance));
        geometry_core_1.Vector3d.createCrossProductToPoints(this.points[2], this.points[4], this.points[0], scratchNormal);
        if (scratchNormal.normalizeInPlace())
            convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[0]) - expandPlaneDistance));
        geometry_core_1.Vector3d.createCrossProductToPoints(this.points[3], this.points[6], this.points[2], scratchNormal);
        if (scratchNormal.normalizeInPlace())
            convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[2]) - expandPlaneDistance));
        geometry_core_1.Vector3d.createCrossProductToPoints(this.points[4], this.points[1], this.points[0], scratchNormal);
        if (scratchNormal.normalizeInPlace())
            convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[0]) - expandPlaneDistance));
        if (clipBack) {
            geometry_core_1.Vector3d.createCrossProductToPoints(this.points[1], this.points[2], this.points[0], scratchNormal);
            if (scratchNormal.normalizeInPlace())
                convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[0]) - expandPlaneDistance));
        }
        if (clipFront) {
            geometry_core_1.Vector3d.createCrossProductToPoints(this.points[6], this.points[5], this.points[4], scratchNormal);
            if (scratchNormal.normalizeInPlace())
                convexSet.addPlaneToConvexSet(geometry_core_1.ClipPlane.createNormalAndDistance(scratchNormal, scratchNormal.dotProduct(this.points[4]) - expandPlaneDistance));
        }
        return convexSet;
    }
}
exports.Frustum = Frustum;


/***/ }),

/***/ "./lib/GeoCoordinateServices.js":
/*!**************************************!*\
  !*** ./lib/GeoCoordinateServices.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Views */
Object.defineProperty(exports, "__esModule", { value: true });
/** @public */
var GeoCoordStatus;
(function (GeoCoordStatus) {
    GeoCoordStatus[GeoCoordStatus["Success"] = 0] = "Success";
    GeoCoordStatus[GeoCoordStatus["NoGCSDefined"] = 100] = "NoGCSDefined";
    GeoCoordStatus[GeoCoordStatus["OutOfUsefulRange"] = 1] = "OutOfUsefulRange";
    GeoCoordStatus[GeoCoordStatus["OutOfMathematicalDomain"] = 2] = "OutOfMathematicalDomain";
    GeoCoordStatus[GeoCoordStatus["NoDatumConverter"] = 25] = "NoDatumConverter";
    GeoCoordStatus[GeoCoordStatus["VerticalDatumConvertError"] = 26] = "VerticalDatumConvertError";
    GeoCoordStatus[GeoCoordStatus["CSMapError"] = 4096] = "CSMapError";
    GeoCoordStatus[GeoCoordStatus["Pending"] = -41556] = "Pending";
})(GeoCoordStatus = exports.GeoCoordStatus || (exports.GeoCoordStatus = {}));


/***/ }),

/***/ "./lib/IModel.js":
/*!***********************!*\
  !*** ./lib/IModel.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module iModels */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const Cartographic_1 = __webpack_require__(/*! ./geometry/Cartographic */ "./lib/geometry/Cartographic.js");
const IModelError_1 = __webpack_require__(/*! ./IModelError */ "./lib/IModelError.js");
/** A token that identifies a specific instance of an iModel to be operated on
 * @public
 */
class IModelToken {
    /** Constructs an IModelToken from a props object. */
    static fromJSON(props) {
        return new IModelToken(props.key, props.contextId, props.iModelId, props.changeSetId, props.openMode);
    }
    /** Constructor */
    constructor(key, contextId, iModelid, changesetId, openMode) {
        this.key = key;
        this.contextId = contextId;
        this.iModelId = iModelid;
        this.changeSetId = changesetId;
        this.openMode = openMode;
    }
    /** Creates a props object for this IModelToken. */
    toJSON() {
        return {
            key: this.key,
            contextId: this.contextId,
            iModelId: this.iModelId,
            changeSetId: this.changeSetId,
            openMode: this.openMode,
        };
    }
}
exports.IModelToken = IModelToken;
/** The position and orientation of an iModel on the earth in [ECEF](https://en.wikipedia.org/wiki/ECEF) (Earth Centered Earth Fixed) coordinates
 * @public
 */
class EcefLocation {
    /** Get the transform from iModel Spatial coordinates to ECEF from this EcefLocation */
    getTransform() { return geometry_core_1.Transform.createOriginAndMatrix(this.origin, this.orientation.toMatrix3d()); }
    /** Construct a new EcefLocation. Once constructed, it is frozen and cannot be modified. */
    constructor(props) {
        this.origin = geometry_core_1.Point3d.fromJSON(props.origin);
        this.orientation = geometry_core_1.YawPitchRollAngles.fromJSON(props.orientation);
        this.origin.freeze(); // may not be modified
        this.orientation.freeze(); // may not be modified
    }
    /** Construct ECEF Location from cartographic origin.   */
    static createFromCartographicOrigin(origin) {
        const ecefOrigin = origin.toEcef();
        const zVector = geometry_core_1.Vector3d.createFrom(ecefOrigin).normalize();
        const xVector = geometry_core_1.Vector3d.create(-Math.sin(origin.longitude), Math.cos(origin.latitude), 0.0);
        const matrix = geometry_core_1.Matrix3d.createRigidFromColumns(zVector, xVector, geometry_core_1.AxisOrder.ZXY);
        return new EcefLocation({ origin: ecefOrigin, orientation: geometry_core_1.YawPitchRollAngles.createFromMatrix3d(matrix) });
    }
}
exports.EcefLocation = EcefLocation;
/** Represents an iModel in JavaScript.
 * @public
 */
class IModel {
    /** @internal */
    constructor(iModelToken) { this._token = iModelToken; }
    /**
     * The volume, in spatial coordinates, inside which the entire project is contained.
     * @note The object returned from this method is frozen. You *must* make a copy before you do anything that might attempt to modify it.
     */
    get projectExtents() { return this._projectExtents; }
    set projectExtents(extents) {
        this._projectExtents = extents.clone();
        this._projectExtents.ensureMinLengths(1.0); // don't allow any axis of the project extents to be less than 1 meter.
        this._projectExtents.freeze();
    }
    /** An offset to be applied to all spatial coordinates. */
    get globalOrigin() { return this._globalOrigin; }
    /** The [EcefLocation]($docs/learning/glossary#ecefLocation) of the iModel in Earth Centered Earth Fixed coordinates. */
    get ecefLocation() { return this._ecefLocation; }
    /** Set the [EcefLocation]($docs/learning/glossary#ecefLocation) for this iModel. */
    setEcefLocation(ecef) {
        this._ecefLocation = new EcefLocation(ecef);
        this._ecefTrans = undefined;
    }
    /** @internal */
    toJSON() {
        const out = {};
        out.name = this.name;
        out.rootSubject = this.rootSubject;
        out.projectExtents = this.projectExtents.toJSON();
        out.globalOrigin = this.globalOrigin.toJSON();
        out.ecefLocation = this.ecefLocation;
        out.iModelToken = this.iModelToken;
        return out;
    }
    /** The token that can be used to find this iModel instance. */
    get iModelToken() { return this._token; }
    /** @internal */
    initialize(name, props) {
        this.name = name;
        this.rootSubject = props.rootSubject;
        this.projectExtents = geometry_core_1.Range3d.fromJSON(props.projectExtents);
        this._globalOrigin = geometry_core_1.Point3d.fromJSON(props.globalOrigin);
        this._globalOrigin.freeze(); // cannot be modified
        if (props.ecefLocation)
            this.setEcefLocation(props.ecefLocation);
    }
    /** Get the default subCategoryId for the supplied categoryId */
    static getDefaultSubCategoryId(categoryId) {
        return bentleyjs_core_1.Id64.isValid(categoryId) ? bentleyjs_core_1.Id64.fromLocalAndBriefcaseIds(bentleyjs_core_1.Id64.getLocalId(categoryId) + 1, bentleyjs_core_1.Id64.getBriefcaseId(categoryId)) : bentleyjs_core_1.Id64.invalid;
    }
    /** True if this iModel has an [EcefLocation]($docs/learning/glossary#ecefLocation). */
    get isGeoLocated() { return undefined !== this._ecefLocation; }
    /** Get the Transform from this iModel's Spatial coordinates to ECEF coordinates using its [[IModel.ecefLocation]].
     * @throws IModelError if [[isGeoLocated]] is false.
     */
    getEcefTransform() {
        if (undefined === this._ecefLocation)
            throw new IModelError_1.IModelError(bentleyjs_core_1.IModelStatus.NoGeoLocation, "iModel is not GeoLocated");
        if (this._ecefTrans === undefined) {
            this._ecefTrans = this._ecefLocation.getTransform();
            this._ecefTrans.freeze();
        }
        return this._ecefTrans;
    }
    /**
     * Convert a point in this iModel's Spatial coordinates to an ECEF point using its [[IModel.ecefLocation]].
     * @param spatial A point in the iModel's spatial coordinates
     * @param result If defined, use this for output
     * @returns A Point3d in ECEF coordinates
     * @throws IModelError if [[isGeoLocated]] is false.
     */
    spatialToEcef(spatial, result) { return this.getEcefTransform().multiplyPoint3d(spatial, result); }
    /**
     * Convert a point in ECEF coordinates to a point in this iModel's Spatial coordinates using its [[ecefLocation]].
     * @param ecef A point in ECEF coordinates
     * @param result If defined, use this for output
     * @returns A Point3d in this iModel's spatial coordinates
     * @throws IModelError if [[isGeoLocated]] is false.
     * @note The resultant point will only be meaningful if the ECEF coordinate is close on the earth to the iModel.
     */
    ecefToSpatial(ecef, result) { return this.getEcefTransform().multiplyInversePoint3d(ecef, result); }
    /**
     * Convert a point in this iModel's Spatial coordinates to a [[Cartographic]] using its [[IModel.ecefLocation]].
     * @param spatial A point in the iModel's spatial coordinates
     * @param result If defined, use this for output
     * @returns A Cartographic location
     * @throws IModelError if [[isGeoLocated]] is false.
     */
    spatialToCartographicFromEcef(spatial, result) { return Cartographic_1.Cartographic.fromEcef(this.spatialToEcef(spatial), result); }
    /**
     * Convert a [[Cartographic]] to a point in this iModel's Spatial coordinates using its [[IModel.ecefLocation]].
     * @param cartographic A cartographic location
     * @param result If defined, use this for output
     * @returns A point in this iModel's spatial coordinates
     * @throws IModelError if [[isGeoLocated]] is false.
     * @note The resultant point will only be meaningful if the ECEF coordinate is close on the earth to the iModel.
     */
    cartographicToSpatialFromEcef(cartographic, result) { return this.ecefToSpatial(cartographic.toEcef(result), result); }
}
/** The Id of the repository model. */
IModel.repositoryModelId = "0x1";
/** The Id of the root subject element. */
IModel.rootSubjectId = "0x1";
/** The Id of the dictionary model. */
IModel.dictionaryId = "0x10";
exports.IModel = IModel;


/***/ }),

/***/ "./lib/IModelError.js":
/*!****************************!*\
  !*** ./lib/IModelError.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module iModels */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
var bentleyjs_core_2 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
exports.BentleyStatus = bentleyjs_core_2.BentleyStatus;
exports.BentleyError = bentleyjs_core_2.BentleyError;
exports.IModelStatus = bentleyjs_core_2.IModelStatus;
exports.BriefcaseStatus = bentleyjs_core_2.BriefcaseStatus;
exports.DbResult = bentleyjs_core_2.DbResult;
exports.AuthStatus = bentleyjs_core_2.AuthStatus;
exports.RepositoryStatus = bentleyjs_core_2.RepositoryStatus;
exports.ChangeSetStatus = bentleyjs_core_2.ChangeSetStatus;
exports.RpcInterfaceStatus = bentleyjs_core_2.RpcInterfaceStatus;
/** The error type thrown by this module. See [[IModelStatus]] for `errorNumber` values.
 * @public
 */
class IModelError extends bentleyjs_core_1.BentleyError {
    constructor(errorNumber, message, log, category, getMetaData) {
        super(errorNumber, message, log, category, getMetaData);
    }
}
exports.IModelError = IModelError;
/** @public */
class ServerError extends IModelError {
    constructor(errorNumber, message, log) {
        super(errorNumber, message, log);
        this.name = "Server error (" + errorNumber + ")";
    }
}
exports.ServerError = ServerError;
/** @public */
class ServerTimeoutError extends ServerError {
    constructor(message, log) {
        super(bentleyjs_core_1.IModelStatus.ServerTimeout, message, log);
        this.name = "Server timeout error";
    }
}
exports.ServerTimeoutError = ServerTimeoutError;
/** @public */
class BackendError extends IModelError {
    constructor(errorNumber, name, message, log, category, getMetaData) {
        super(errorNumber, message, log, category, getMetaData);
        this.name = name;
    }
}
exports.BackendError = BackendError;


/***/ }),

/***/ "./lib/IModelVersion.js":
/*!******************************!*\
  !*** ./lib/IModelVersion.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module iModels */
Object.defineProperty(exports, "__esModule", { value: true });
const imodeljs_clients_1 = __webpack_require__(/*! @bentley/imodeljs-clients */ "@bentley/imodeljs-clients");
const IModelError_1 = __webpack_require__(/*! ./IModelError */ "./lib/IModelError.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** Option to specify the version of the iModel to be acquired and used
 * @public
 */
class IModelVersion {
    constructor() { }
    /** Describes the first version of the iModel */
    static first() {
        const version = new IModelVersion();
        version._first = true;
        return version;
    }
    /** Describes the latest version of the iModel  */
    static latest() {
        const version = new IModelVersion();
        version._latest = true;
        return version;
    }
    /** Describes a version of the iModel by the last change set that needs
     * to be applied or merged to the iModel.
     * Note that all ChangeSets up to and and including the specified ChangeSet
     * needs to be applied.
     * If the changeSetId is an empty string, it is assumed to be the first version
     * before any change sets have been applied.
     */
    static asOfChangeSet(changeSetId) {
        const version = new IModelVersion();
        if (changeSetId === "") {
            version._first = true;
            return version;
        }
        version._afterChangeSetId = changeSetId;
        return version;
    }
    /** Describes a version of the iModel with the specified version name  */
    static named(versionName) {
        const version = new IModelVersion();
        version._versionName = versionName;
        return version;
    }
    /** Creates a version from an untyped JSON object */
    static fromJson(jsonObj) {
        const version = new IModelVersion();
        Object.assign(version, jsonObj);
        return version;
    }
    /** Returns true if this describes the first version */
    get isFirst() { return !!this._first; }
    /** Returns true if this describes the latest version */
    get isLatest() { return !!this._latest; }
    /** Returns the last change set id to be applied to the iModel
     * to get to this specified version. @see asOfChangeSet().
     * Note that this method does not attempt to resolve the change set
     * if this describes the first version, last version, named version, etc.
     * @see evaluateChangeSet() for those use cases.
     */
    getAsOfChangeSet() { return this._afterChangeSetId; }
    /** Returns the name of the version if this describes a named version. @see named() */
    getName() { return this._versionName; }
    /** Evaluate the ChangeSet Id corresponding to the version. All change sets up to and including
     * the returned ChangeSet Id need to be applied to update the iModel to this version.
     * Returns an empty string if this contains the first version (before any change sets). If the
     * version was already specified as of a ChangeSet, the method simply returns
     * that Id without any validation.
     */
    async evaluateChangeSet(requestContext, iModelId, imodelClient) {
        if (this._first)
            return Promise.resolve("");
        if (this._afterChangeSetId) {
            return Promise.resolve(this._afterChangeSetId);
        }
        if (this._latest) {
            return IModelVersion.getLatestChangeSetId(requestContext, imodelClient, iModelId);
        }
        if (this._versionName) {
            return IModelVersion.getChangeSetFromNamedVersion(requestContext, imodelClient, iModelId, this._versionName);
        }
        return Promise.reject(new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid version"));
    }
    /** Gets the last change set that was applied to the imodel */
    static async getLatestChangeSetId(requestContext, imodelClient, iModelId) {
        const changeSets = await imodelClient.changeSets.get(requestContext, iModelId, new imodeljs_clients_1.ChangeSetQuery().top(1).latest());
        return (changeSets.length === 0) ? "" : changeSets[changeSets.length - 1].wsgId;
    }
    /** Get the change set from the specified named version */
    static async getChangeSetFromNamedVersion(requestContext, imodelClient, iModelId, versionName) {
        const versions = await imodelClient.versions.get(requestContext, iModelId, new imodeljs_clients_1.VersionQuery().select("ChangeSetId").byName(versionName));
        if (!versions[0] || !versions[0].changeSetId)
            return Promise.reject(new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Problem getting versions"));
        return versions[0].changeSetId;
    }
}
exports.IModelVersion = IModelVersion;


/***/ }),

/***/ "./lib/Image.js":
/*!**********************!*\
  !*** ./lib/Image.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Rendering */
Object.defineProperty(exports, "__esModule", { value: true });
/** Format of an [[ImageBuffer]].
 * The format determines how many bytes are allocated for each pixel in the buffer and the semantics of each byte.
 * @see [[ImageBuffer.getNumBytesPerPixel]]
 * @public
 */
var ImageBufferFormat;
(function (ImageBufferFormat) {
    /** RGBA format - 4 bytes per pixel. */
    ImageBufferFormat[ImageBufferFormat["Rgba"] = 0] = "Rgba";
    /** RGB format - 3 bytes per pixel. */
    ImageBufferFormat[ImageBufferFormat["Rgb"] = 2] = "Rgb";
    /** 1 byte per pixel. */
    ImageBufferFormat[ImageBufferFormat["Alpha"] = 5] = "Alpha";
})(ImageBufferFormat = exports.ImageBufferFormat || (exports.ImageBufferFormat = {}));
/** Uncompressed rectangular bitmap image data.
 * @public
 */
class ImageBuffer {
    /** Return the number of bytes allocated for each pixel. */
    get numBytesPerPixel() { return ImageBuffer.getNumBytesPerPixel(this.format); }
    /** Determine the number of bytes allocated to a single pixel for the specified format. */
    static getNumBytesPerPixel(format) {
        switch (format) {
            case ImageBufferFormat.Alpha: return 1;
            case ImageBufferFormat.Rgb: return 3;
            default: return 4;
        }
    }
    /** Get the height of this image in pixels. */
    get height() { return ImageBuffer.computeHeight(this.data, this.format, this.width); }
    /** Create a new ImageBuffer.
     * @note The ImageBuffer takes ownership of the input Uint8Array.
     * @param data The uncompressed image bytes. Must be a multiple of the width times the number of bytes per pixel specified by the format.
     * @param format The format of the image.
     * @param width The width of the image in pixels.
     * @returns A new ImageBuffer, or undefined if the length of the Uint8Array is not appropriate for the specified width and format.
     */
    static create(data, format, width) {
        return this.isValidData(data, format, width) ? new ImageBuffer(data, format, width) : undefined;
    }
    /** @internal */
    static isValidData(data, format, width) {
        const height = this.computeHeight(data, format, width);
        return width > 0 && height > 0 && Math.floor(width) === width && Math.floor(height) === height;
    }
    /** @internal */
    static computeHeight(data, format, width) {
        return data.length / (width * this.getNumBytesPerPixel(format));
    }
    /** @internal */
    constructor(data, format, width) {
        this.data = data;
        this.format = format;
        this.width = width;
    }
}
exports.ImageBuffer = ImageBuffer;
/** Returns whether the input is a power of two.
 * @note Floating point inputs are truncated.
 * @public
 */
function isPowerOfTwo(num) { return 0 === (num & (num - 1)); }
exports.isPowerOfTwo = isPowerOfTwo;
/** Returns the first power-of-two value greater than or equal to the input.
 * @note Floating point inputs are truncated.
 * @public
 */
function nextHighestPowerOfTwo(num) {
    --num;
    for (let i = 1; i < 32; i <<= 1)
        num = num | num >> i;
    return num + 1;
}
exports.nextHighestPowerOfTwo = nextHighestPowerOfTwo;
/** The format of an ImageSource.
 * @public
 */
var ImageSourceFormat;
(function (ImageSourceFormat) {
    /** Image data is stored with JPEG compression. */
    ImageSourceFormat[ImageSourceFormat["Jpeg"] = 0] = "Jpeg";
    /** Image data is stored with PNG compression. */
    ImageSourceFormat[ImageSourceFormat["Png"] = 2] = "Png";
    /** Image is stored as an Svg stream.
     * @note SVG is only valid for ImageSources in JavaScript. It *may not* be used for persistent textures.
     */
    ImageSourceFormat[ImageSourceFormat["Svg"] = 3] = "Svg";
})(ImageSourceFormat = exports.ImageSourceFormat || (exports.ImageSourceFormat = {}));
/** @internal */
function isValidImageSourceFormat(format) {
    switch (format) {
        case ImageSourceFormat.Jpeg:
        case ImageSourceFormat.Png:
        case ImageSourceFormat.Svg:
            return true;
        default:
            return false;
    }
}
exports.isValidImageSourceFormat = isValidImageSourceFormat;
/** Image data encoded and compressed in either Jpeg or Png format.
 * @public
 */
class ImageSource {
    /** Construct a new ImageSource, which takes ownership of the Uint8Array. */
    constructor(data, format) {
        this.data = data;
        this.format = format;
    }
}
exports.ImageSource = ImageSource;


/***/ }),

/***/ "./lib/Lighting.js":
/*!*************************!*\
  !*** ./lib/Lighting.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Views */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const ColorDef_1 = __webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js");
/** The type of a [[Light]]
 * @internal
 */
var LightType;
(function (LightType) {
    LightType[LightType["Invalid"] = 0] = "Invalid";
    LightType[LightType["Solar"] = 1] = "Solar";
    LightType[LightType["Ambient"] = 2] = "Ambient";
    LightType[LightType["Flash"] = 3] = "Flash";
    LightType[LightType["Portrait"] = 4] = "Portrait";
    LightType[LightType["Point"] = 5] = "Point";
    LightType[LightType["Spot"] = 6] = "Spot";
    LightType[LightType["Area"] = 7] = "Area";
    LightType[LightType["Distant"] = 8] = "Distant";
    LightType[LightType["SkyOpening"] = 9] = "SkyOpening";
})(LightType = exports.LightType || (exports.LightType = {}));
/** A light to illuminate the contents of a scene.
 * @internal
 */
class Light {
    constructor(opts) {
        opts = opts ? opts : {};
        this.lightType = bentleyjs_core_1.JsonUtils.asInt(opts.lightType);
        this.intensity = bentleyjs_core_1.JsonUtils.asDouble(opts.intensity);
        this.kelvin = bentleyjs_core_1.JsonUtils.asDouble(opts.kelvin);
        this.shadows = bentleyjs_core_1.JsonUtils.asDouble(opts.shadows);
        this.bulbs = bentleyjs_core_1.JsonUtils.asInt(opts.bulbs);
        this.lumens = bentleyjs_core_1.JsonUtils.asDouble(opts.lumens);
        this.color = ColorDef_1.ColorDef.fromJSON(opts.color);
        if (opts.intensity2)
            this.intensity2 = bentleyjs_core_1.JsonUtils.asDouble(opts.intensity2);
        if (opts.color2)
            this.color2 = ColorDef_1.ColorDef.fromJSON(opts.color2);
    }
    get isValid() { return this.lightType !== LightType.Invalid; }
    get isVisible() { return this.isValid && this.intensity > 0.0; }
}
exports.Light = Light;
/** A light from a single location.
 * @internal
 */
class Spot extends Light {
    constructor(opts) {
        opts = opts ? opts : {};
        super(opts);
        this.lightType = LightType.Spot;
        this.inner = geometry_core_1.Angle.fromJSON(opts.inner);
        this.outer = geometry_core_1.Angle.fromJSON(opts.outer);
    }
}
exports.Spot = Spot;


/***/ }),

/***/ "./lib/MaterialProps.js":
/*!******************************!*\
  !*** ./lib/MaterialProps.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module WireFormats */
Object.defineProperty(exports, "__esModule", { value: true });
/** @beta */
var TextureMapUnits;
(function (TextureMapUnits) {
    TextureMapUnits[TextureMapUnits["Relative"] = 0] = "Relative";
    TextureMapUnits[TextureMapUnits["Meters"] = 3] = "Meters";
    TextureMapUnits[TextureMapUnits["Millimeters"] = 4] = "Millimeters";
    TextureMapUnits[TextureMapUnits["Feet"] = 5] = "Feet";
    TextureMapUnits[TextureMapUnits["Inches"] = 6] = "Inches";
})(TextureMapUnits = exports.TextureMapUnits || (exports.TextureMapUnits = {}));


/***/ }),

/***/ "./lib/OctEncodedNormal.js":
/*!*********************************!*\
  !*** ./lib/OctEncodedNormal.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Rendering */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** @internal */
class OctEncodedNormal {
    constructor(val) { this.value = OctEncodedNormal.roundUint16(val); }
    static clamp(val, minVal, maxVal) { return val < minVal ? minVal : (val > maxVal ? maxVal : val); }
    static clampUint8(val) { return this.roundUint16(0.5 + (this.clamp(val, -1, 1) * 0.5 + 0.5) * 255); }
    static roundUint16(val) { this._scratchUInt16[0] = val; return this._scratchUInt16[0]; }
    static signNotZero(val) { return val < 0.0 ? -1.0 : 1.0; }
    static encode(vec) {
        const denom = Math.abs(vec.x) + Math.abs(vec.y) + Math.abs(vec.z);
        let rx = vec.x / denom;
        let ry = vec.y / denom;
        if (vec.z < 0) {
            const x = rx;
            const y = ry;
            rx = (1 - Math.abs(y)) * OctEncodedNormal.signNotZero(x);
            ry = (1 - Math.abs(x)) * OctEncodedNormal.signNotZero(y);
        }
        return this.clampUint8(ry) << 8 | this.clampUint8(rx);
    }
    static fromVector(val) { return new OctEncodedNormal(this.encode(val)); }
    decode() {
        const val = this.value;
        let ex = val & 0xff;
        let ey = val >> 8;
        ex = ex / 255.0 * 2.0 - 1.0;
        ey = ey / 255.0 * 2.0 - 1.0;
        const n = new geometry_core_1.Vector3d(ex, ey, 1 - (Math.abs(ex) + Math.abs(ey)));
        if (n.z < 0) {
            const x = n.x;
            const y = n.y;
            n.x = (1 - Math.abs(y)) * OctEncodedNormal.signNotZero(x);
            n.y = (1 - Math.abs(x)) * OctEncodedNormal.signNotZero(y);
        }
        return n.normalize();
    }
}
OctEncodedNormal._scratchUInt16 = new Uint16Array(1);
exports.OctEncodedNormal = OctEncodedNormal;
/** @internal */
class OctEncodedNormalPair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
exports.OctEncodedNormalPair = OctEncodedNormalPair;


/***/ }),

/***/ "./lib/Paging.js":
/*!***********************!*\
  !*** ./lib/Paging.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Queue priority for query and its not guaranteed
 * @public
 */
var QueryPriority;
(function (QueryPriority) {
    QueryPriority[QueryPriority["Low"] = 0] = "Low";
    QueryPriority[QueryPriority["Normal"] = 1] = "Normal";
    QueryPriority[QueryPriority["High"] = 2] = "High";
})(QueryPriority = exports.QueryPriority || (exports.QueryPriority = {}));
/** State of query operations
 * @internal
 */
var QueryResponseStatus;
(function (QueryResponseStatus) {
    QueryResponseStatus[QueryResponseStatus["Partial"] = 3] = "Partial";
    QueryResponseStatus[QueryResponseStatus["Done"] = 2] = "Done";
    QueryResponseStatus[QueryResponseStatus["Error"] = 5] = "Error";
    QueryResponseStatus[QueryResponseStatus["Timeout"] = 4] = "Timeout";
    QueryResponseStatus[QueryResponseStatus["PostError"] = 6] = "PostError";
})(QueryResponseStatus = exports.QueryResponseStatus || (exports.QueryResponseStatus = {}));


/***/ }),

/***/ "./lib/QPoint.js":
/*!***********************!*\
  !*** ./lib/QPoint.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Rendering */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/**
 * Provides facilities for quantizing floating point values within a specified range into 16-bit unsigned integers.
 * This is a lossy compression technique.
 * Given a floating point range [min, max], a floating point value `x` within that range is quantized by subtracting
 * `min`, scaling the result according to `max`, and truncating the result to an integer.
 * Therefore min quantizes to 0, max to 0xffff, (min+max)/2 to 0x7fff, and so on.
 * These routines are chiefly used internally by classes like QPoint2d and QPoint3d.
 * @internal
 */
var Quantization;
(function (Quantization) {
    const rangeScale = 0xffff;
    function computeScale(extent) { return 0.0 === extent ? extent : rangeScale / extent; }
    Quantization.computeScale = computeScale;
    function isInRange(qpos) { return qpos >= 0.0 && qpos < rangeScale + 1.0; }
    Quantization.isInRange = isInRange;
    function quantize(pos, origin, scale) { return Math.floor(Math.max(0.0, Math.min(rangeScale, 0.5 + (pos - origin) * scale))); }
    Quantization.quantize = quantize;
    function isQuantizable(pos, origin, scale) { return isInRange(quantize(pos, origin, scale)); }
    Quantization.isQuantizable = isQuantizable;
    function unquantize(qpos, origin, scale) { return 0.0 === scale ? origin : origin + qpos / scale; }
    Quantization.unquantize = unquantize;
    function isQuantized(qpos) { return isInRange(qpos) && qpos === Math.floor(qpos); }
    Quantization.isQuantized = isQuantized;
})(Quantization = exports.Quantization || (exports.Quantization = {}));
/** Parameters used for quantization of 2d points.
 * @internal
 */
class QParams2d {
    constructor(ox = 0, oy = 0, sx = 0, sy = 0) {
        this.origin = new geometry_core_1.Point2d();
        this.scale = new geometry_core_1.Point2d();
        this.setFrom(ox, oy, sx, sy);
    }
    setFrom(ox, oy, sx, sy) {
        this.origin.x = ox;
        this.origin.y = oy;
        this.scale.x = sx;
        this.scale.y = sy;
    }
    copyFrom(src) { this.setFrom(src.origin.x, src.origin.y, src.scale.x, src.scale.y); }
    clone(out) {
        const result = undefined !== out ? out : new QParams2d();
        result.copyFrom(this);
        return result;
    }
    /** Initialize these parameters to support quantization of values within the specified range. */
    setFromRange(range) {
        if (!range.isNull) {
            this.setFrom(range.low.x, range.low.y, Quantization.computeScale(range.high.x - range.low.x), Quantization.computeScale(range.high.y - range.low.y));
        }
        else {
            this.origin.x = this.origin.y = this.scale.x = this.scale.y = 0;
        }
    }
    /** Creates parameters to support quantization of values within the specified range. */
    static fromRange(range, out) {
        const params = undefined !== out ? out : new QParams2d();
        params.setFromRange(range);
        return params;
    }
    /** Creates parameters supporting quantization of values within the range [-1.0, 1.0]. */
    static fromNormalizedRange() { return QParams2d.fromRange(geometry_core_1.Range2d.createArray([geometry_core_1.Point2d.create(-1, -1), geometry_core_1.Point2d.create(1, 1)])); }
    /** Creates parameters supporting quantization of values within the range [0.0, 1.0]. */
    static fromZeroToOne() { return QParams2d.fromRange(geometry_core_1.Range2d.createArray([geometry_core_1.Point2d.create(0, 0), geometry_core_1.Point2d.create(1, 1)])); }
}
exports.QParams2d = QParams2d;
/** Represents a quantized 2d point as an (x, y) pair in the integer range [0, 0xffff].
 * @internal
 */
class QPoint2d {
    constructor() {
        this._x = 0;
        this._y = 0;
    }
    get x() { return this._x; }
    set x(x) { bentleyjs_core_1.assert(Quantization.isQuantized(x)); this._x = x; }
    get y() { return this._y; }
    set y(y) { bentleyjs_core_1.assert(Quantization.isQuantized(y)); this._y = y; }
    /** Initialize this point by quantizing the supplied Point2d using the specified params */
    init(pos, params) {
        this.x = Quantization.quantize(pos.x, params.origin.x, params.scale.x);
        this.y = Quantization.quantize(pos.y, params.origin.y, params.scale.y);
    }
    /** Creates a quantized point from the supplied Point2d using the specified params */
    static create(pos, params) {
        const qpt = new QPoint2d();
        qpt.init(pos, params);
        return qpt;
    }
    copyFrom(src) {
        this.x = src.x;
        this.y = src.y;
    }
    clone(out) {
        const result = undefined !== out ? out : new QPoint2d();
        result.copyFrom(this);
        return result;
    }
    /**
     * Sets the x and y components directly.
     * @param x Must be an integer in the range [0, 0xffff]
     * @param y Must be an integer in the range [0, 0xffff]
     */
    setFromScalars(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Creates a QPoint2d directly from x and y components.
     * @param x Must be an integer in the range [0, 0xffff]
     * @param y Must be an integer in the range [0, 0xffff]
     */
    static fromScalars(x, y) {
        const pt = new QPoint2d();
        pt.setFromScalars(x, y);
        return pt;
    }
    /** Returns a Point2d unquantized according to the supplied params. */
    unquantize(params, out) {
        const pt = undefined !== out ? out : new geometry_core_1.Point2d();
        pt.x = Quantization.unquantize(this.x, params.origin.x, params.scale.x);
        pt.y = Quantization.unquantize(this.y, params.origin.y, params.scale.y);
        return pt;
    }
}
exports.QPoint2d = QPoint2d;
/** A list of 2d points all quantized to the same range.
 * @internal
 */
class QPoint2dList {
    constructor(params) {
        this._list = new Array();
        this.params = params.clone();
    }
    /** Clears out the contents of the list */
    clear() { this._list.length = 0; }
    /** Clears out the contents of the list and changes the quantization parameters. */
    reset(params) { this.clear(); this.params.copyFrom(params); }
    /** Quantizes the supplied Point2d to this list's range and appends it to the list. */
    add(pt) { this._list.push(QPoint2d.create(pt, this.params)); }
    /** Adds a previously-quantized point to this list. */
    push(qpt) { this._list.push(qpt.clone()); }
    /** Returns the number of points in the list. */
    get length() { return this._list.length; }
    /** Returns the unquantized value of the point at the specified index in the list. */
    unquantize(index, out) {
        bentleyjs_core_1.assert(index < this.length);
        if (index < this.length) {
            return this._list[index].unquantize(this.params, out);
        }
        else {
            return undefined !== out ? out : new geometry_core_1.Point2d();
        }
    }
    /** Changes the quantization parameters and requantizes all points in the list to the new range. */
    requantize(params) {
        for (let i = 0; i < this.length; i++) {
            const pt = this.unquantize(i);
            this._list[i].init(pt, params);
        }
        this.params.copyFrom(params);
    }
    /** Extracts the current contents of the list as a Uint16Array. */
    toTypedArray() {
        const array = new Uint16Array(this.length * 2);
        const pts = this._list;
        for (let i = 0; i < this.length; i++) {
            const pt = pts[i];
            array[i * 2] = pt.x;
            array[i * 2 + 1] = pt.y;
        }
        return array;
    }
    /** Construct a QPoint2dList containing all points in the supplied list, quantized to the range of those points. */
    static fromPoints(points, out) {
        let qPoints;
        const qParams = QParams2d.fromRange(geometry_core_1.Range2d.createArray(points));
        if (out) {
            qPoints = out;
            qPoints.reset(qParams);
        }
        else
            qPoints = new QPoint2dList(qParams);
        for (const point of points)
            qPoints.add(point);
        return qPoints;
    }
}
exports.QPoint2dList = QPoint2dList;
/** Parameters used for quantization of 3d points.
 * @internal
 */
class QParams3d {
    constructor(ox = 0, oy = 0, oz = 0, sx = 0, sy = 0, sz = 0) {
        this.origin = new geometry_core_1.Point3d();
        this.scale = new geometry_core_1.Point3d();
        this.setFrom(ox, oy, oz, sx, sy, sz);
    }
    setFrom(ox, oy, oz, sx, sy, sz) {
        this.origin.x = ox;
        this.origin.y = oy;
        this.origin.z = oz;
        this.scale.x = sx;
        this.scale.y = sy;
        this.scale.z = sz;
    }
    copyFrom(src) { this.setFrom(src.origin.x, src.origin.y, src.origin.z, src.scale.x, src.scale.y, src.scale.z); }
    clone(out) {
        const result = undefined !== out ? out : new QParams3d();
        result.copyFrom(this);
        return result;
    }
    /** Initialize from origin and scale */
    setFromOriginAndScale(origin, scale) { this.setFrom(origin.x, origin.y, origin.z, scale.x, scale.y, scale.z); }
    /** Initialize these parameters to support quantization of values within the specified range. */
    setFromRange(range) {
        if (!range.isNull) {
            this.setFrom(range.low.x, range.low.y, range.low.z, Quantization.computeScale(range.high.x - range.low.x), Quantization.computeScale(range.high.y - range.low.y), Quantization.computeScale(range.high.z - range.low.z));
        }
        else {
            this.origin.x = this.origin.y = this.origin.z = 0;
            this.scale.x = this.scale.y = this.scale.z = 0;
        }
    }
    /** Creates parameters to support quantization of values within the specified range. */
    static fromRange(range, out) {
        const params = undefined !== out ? out : new QParams3d();
        params.setFromRange(range);
        return params;
    }
    /** Creates parameters supporting quantization of values within the range [-1.0, 1.0]. */
    static fromOriginAndScale(origin, scale, out) {
        const params = undefined !== out ? out : new QParams3d();
        params.setFromOriginAndScale(origin, scale);
        return params;
    }
    /** Creates parameters supporting quantization of values within the range [-1.0, 1.0]. */
    static fromNormalizedRange() { return QParams3d.fromRange(geometry_core_1.Range3d.createArray([geometry_core_1.Point3d.create(-1, -1, -1), geometry_core_1.Point3d.create(1, 1, 1)])); }
    /** Creates parameters supporting quantization of values within the range [0.0, 1.0]. */
    static fromZeroToOne() { return QParams3d.fromRange(geometry_core_1.Range3d.createArray([geometry_core_1.Point3d.create(0, 0, 0), geometry_core_1.Point3d.create(1, 1, 1)])); }
}
exports.QParams3d = QParams3d;
/** Represents a quantized 3d point as an (x, y, z) triplet in the integer range [0, 0xffff].
 * @internal
 */
class QPoint3d {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._z = 0;
    }
    get x() { return this._x; }
    set x(x) { bentleyjs_core_1.assert(Quantization.isQuantized(x)); this._x = x; }
    get y() { return this._y; }
    set y(y) { bentleyjs_core_1.assert(Quantization.isQuantized(y)); this._y = y; }
    get z() { return this._z; }
    set z(z) { bentleyjs_core_1.assert(Quantization.isQuantized(z)); this._z = z; }
    /** Initialize this point by quantizing the supplied Point3d using the specified params */
    init(pos, params) {
        this.x = Quantization.quantize(pos.x, params.origin.x, params.scale.x);
        this.y = Quantization.quantize(pos.y, params.origin.y, params.scale.y);
        this.z = Quantization.quantize(pos.z, params.origin.z, params.scale.z);
    }
    /** Creates a quantized point from the supplied Point3d using the specified params */
    static create(pos, params) {
        const qpt = new QPoint3d();
        qpt.init(pos, params);
        return qpt;
    }
    copyFrom(src) {
        this.x = src.x;
        this.y = src.y;
        this.z = src.z;
    }
    clone(out) {
        const result = undefined !== out ? out : new QPoint3d();
        result.copyFrom(this);
        return result;
    }
    /**
     * Sets the x, y, and z components directly.
     * @param x Must be an integer in the range [0, 0xffff]
     * @param y Must be an integer in the range [0, 0xffff]
     * @param z Must be an integer in the range [0, 0xffff]
     */
    setFromScalars(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Creates a QPoint3d directly from x, y, and z components.
     * @param x Must be an integer in the range [0, 0xffff]
     * @param y Must be an integer in the range [0, 0xffff]
     * @param z Must be an integer in the range [0, 0xffff]
     */
    static fromScalars(x, y, z, out) {
        const pt = undefined === out ? new QPoint3d() : out;
        pt.setFromScalars(x, y, z);
        return pt;
    }
    /** Returns a Point3d unquantized according to the supplied params. */
    unquantize(params, out) {
        const pt = undefined !== out ? out : new geometry_core_1.Point3d();
        pt.x = Quantization.unquantize(this.x, params.origin.x, params.scale.x);
        pt.y = Quantization.unquantize(this.y, params.origin.y, params.scale.y);
        pt.z = Quantization.unquantize(this.z, params.origin.z, params.scale.z);
        return pt;
    }
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }
    compare(rhs) {
        let diff = this.x - rhs.x;
        if (0 === diff) {
            diff = this.y - rhs.y;
            if (0 === diff) {
                diff = this.z - rhs.z;
            }
        }
        return diff;
    }
}
exports.QPoint3d = QPoint3d;
/** A list of 3d points all quantized to the same range.
 * @internal
 */
class QPoint3dList {
    constructor(paramsIn) {
        this._list = [];
        this.params = paramsIn ? paramsIn.clone() : QParams3d.fromRange(geometry_core_1.Range3d.createNull());
    }
    get list() { return this._list; }
    /** Construct a QPoint3dList containing all points in the supplied list, quantized to the range of those points. */
    static fromPoints(points, out) {
        let qPoints;
        const qParams = QParams3d.fromRange(geometry_core_1.Range3d.createArray(points));
        if (out) {
            qPoints = out;
            qPoints.reset(qParams);
        }
        else
            qPoints = new QPoint3dList(qParams);
        for (const point of points)
            qPoints.add(point);
        return qPoints;
    }
    /** Clears out the contents of the list */
    clear() { this._list.length = 0; }
    /** Clears out the contents of the list and changes the quantization parameters. */
    reset(params) { this.clear(); this.params.copyFrom(params); }
    /** Quantizes the supplied Point3d to this list's range and appends it to the list. */
    add(pt) { this._list.push(QPoint3d.create(pt, this.params)); }
    /** Adds a previously-quantized point to this list. */
    push(qpt) { this._list.push(qpt.clone()); }
    /** Returns the number of points in the list. */
    get length() { return this._list.length; }
    /** Returns the unquantized value of the point at the specified index in the list. */
    unquantize(index, out) {
        bentleyjs_core_1.assert(index < this.length);
        if (index < this.length) {
            return this._list[index].unquantize(this.params, out);
        }
        else {
            return undefined !== out ? out : new geometry_core_1.Point3d();
        }
    }
    /** Changes the quantization parameters and requantizes all points in the list to the new range. */
    requantize(params) {
        for (let i = 0; i < this.length; i++) {
            const pt = this.unquantize(i);
            this._list[i].init(pt, params);
        }
        this.params.copyFrom(params);
    }
    /** Extracts the current contents of the list as a Uint16Array. */
    toTypedArray() {
        const array = new Uint16Array(this.length * 3);
        const pts = this._list;
        for (let i = 0; i < this.length; i++) {
            const pt = pts[i];
            array[i * 3 + 0] = pt.x;
            array[i * 3 + 1] = pt.y;
            array[i * 3 + 2] = pt.z;
        }
        return array;
    }
    static createFrom(points, params) {
        const list = new QPoint3dList(params);
        for (const point of points)
            list.add(point);
        return list;
    }
    [Symbol.iterator]() {
        let key = 0;
        return { next: () => { const result = key < this._list.length ? { value: this._list[key], done: false } : { value: this._list[key - 1], done: true }; key++; return result; } };
    }
}
exports.QPoint3dList = QPoint3dList;


/***/ }),

/***/ "./lib/Render.js":
/*!***********************!*\
  !*** ./lib/Render.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Rendering */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const ColorDef_1 = __webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js");
const IModel_1 = __webpack_require__(/*! ./IModel */ "./lib/IModel.js");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const Image_1 = __webpack_require__(/*! ./Image */ "./lib/Image.js");
/** Flags indicating whether and how the interiors of closed planar regions is displayed within a view.
 * @public
 */
var FillFlags;
(function (FillFlags) {
    /** No fill */
    FillFlags[FillFlags["None"] = 0] = "None";
    /** Use the element's fill color when fill is enabled in the view's [[ViewFlags]]. */
    FillFlags[FillFlags["ByView"] = 1] = "ByView";
    /** Use the element's fill color even when fill is disabled in the view's [[ViewFlags]]. */
    FillFlags[FillFlags["Always"] = 2] = "Always";
    /** Render the fill behind other geometry belonging to the same element.
     * For example if an element's geometry contains text with background fill, the text always renders in front of the fill.
     */
    FillFlags[FillFlags["Behind"] = 4] = "Behind";
    /** Combines Behind and Always flags. */
    FillFlags[FillFlags["Blanking"] = 6] = "Blanking";
    /** Use the view's background color instead of the element's fill color. */
    FillFlags[FillFlags["Background"] = 8] = "Background";
})(FillFlags = exports.FillFlags || (exports.FillFlags = {}));
/** @internal */
var PolylineTypeFlags;
(function (PolylineTypeFlags) {
    PolylineTypeFlags[PolylineTypeFlags["Normal"] = 0] = "Normal";
    PolylineTypeFlags[PolylineTypeFlags["Edge"] = 1] = "Edge";
    PolylineTypeFlags[PolylineTypeFlags["Outline"] = 2] = "Outline";
})(PolylineTypeFlags = exports.PolylineTypeFlags || (exports.PolylineTypeFlags = {}));
/** Flags describing a polyline. A polyline may represent a continuous line string, or a set of discrete points.
 * @internal
 */
class PolylineFlags {
    constructor(is2d = false, isPlanar = false, isDisjoint = false, type = PolylineTypeFlags.Normal) {
        this.isDisjoint = isDisjoint;
        this.isPlanar = isPlanar;
        this.is2d = is2d;
        this.type = type;
    }
    clone() { return new PolylineFlags(this.is2d, this.isPlanar, this.isDisjoint, this.type); }
    /** Create a PolylineFlags from a serialized numeric representation. */
    static unpack(value) {
        const isDisjoint = 0 !== (value & 1);
        const isPlanar = 0 !== (value & 2);
        const is2d = 0 !== (value & 4);
        const type = (value >> 3);
        bentleyjs_core_1.assert(type === PolylineTypeFlags.Normal || type === PolylineTypeFlags.Edge || type === PolylineTypeFlags.Outline);
        return new PolylineFlags(is2d, isPlanar, isDisjoint, type);
    }
    initDefaults() {
        this.isDisjoint = this.isPlanar = this.is2d = false;
        this.type = PolylineTypeFlags.Normal;
    }
    get isOutlineEdge() { return PolylineTypeFlags.Outline === this.type; }
    get isNormalEdge() { return PolylineTypeFlags.Edge === this.type; }
    get isAnyEdge() { return PolylineTypeFlags.Normal !== this.type; }
    setIsNormalEdge() { this.type = PolylineTypeFlags.Edge; }
    setIsOutlineEdge() { this.type = PolylineTypeFlags.Outline; }
    /** Convert these flags to a numeric representation for serialization. */
    pack() {
        let val = 0;
        if (this.isDisjoint)
            val += 1;
        if (this.isPlanar)
            val += 1 << 1;
        if (this.is2d)
            val += 1 << 2;
        val += this.type << 3;
        return val;
    }
    equals(other) {
        return this.type === other.type && this.is2d === other.is2d && this.isPlanar === other.isPlanar && this.isDisjoint === other.isDisjoint;
    }
}
exports.PolylineFlags = PolylineFlags;
/** @internal */
class PolylineData {
    constructor(vertIndices = [], numIndices = 0) {
        this.vertIndices = vertIndices;
        this.numIndices = numIndices;
    }
    get isValid() { return 0 < this.numIndices; }
    reset() { this.numIndices = 0; this.vertIndices = []; }
    init(polyline) {
        this.numIndices = polyline.indices.length;
        this.vertIndices = 0 < this.numIndices ? polyline.indices : [];
        return this.isValid;
    }
}
exports.PolylineData = PolylineData;
/** @internal */
class MeshPolyline {
    constructor(indices = []) {
        this.indices = indices.slice();
    }
    addIndex(index) {
        const { indices } = this;
        if (indices.length === 0 || indices[indices.length - 1] !== index)
            indices.push(index);
    }
    clear() { this.indices.length = 0; }
}
exports.MeshPolyline = MeshPolyline;
/** @internal */
class MeshPolylineList extends Array {
    constructor(...args) { super(...args); }
}
exports.MeshPolylineList = MeshPolylineList;
/** @internal */
class MeshEdge {
    constructor(index0, index1) {
        this.indices = [0, 0];
        if (undefined === index0 || undefined === index1)
            return;
        if (index0 < index1) {
            this.indices[0] = index0;
            this.indices[1] = index1;
        }
        else {
            this.indices[0] = index1;
            this.indices[1] = index0;
        }
    }
}
exports.MeshEdge = MeshEdge;
/** @internal */
class MeshEdges {
    constructor() {
        this.visible = [];
        this.silhouette = [];
        this.polylines = new MeshPolylineList();
        this.silhouetteNormals = [];
    }
}
exports.MeshEdges = MeshEdges;
/** @internal */
class EdgeArgs {
    init(meshEdges) {
        this.clear();
        if (undefined !== meshEdges && 0 < meshEdges.visible.length)
            this.edges = meshEdges.visible;
        return this.isValid;
    }
    clear() { this.edges = undefined; }
    get isValid() { return 0 < this.numEdges; }
    get numEdges() { return undefined !== this.edges ? this.edges.length : 0; }
}
exports.EdgeArgs = EdgeArgs;
/** @internal */
class SilhouetteEdgeArgs extends EdgeArgs {
    init(meshEdges) {
        this.clear();
        if (undefined !== meshEdges && 0 < meshEdges.silhouette.length) {
            this.edges = meshEdges.silhouette;
            this.normals = meshEdges.silhouetteNormals;
        }
        return this.isValid;
    }
    clear() { this.normals = undefined; super.clear(); }
}
exports.SilhouetteEdgeArgs = SilhouetteEdgeArgs;
/** @internal */
class PolylineEdgeArgs {
    constructor(lines) { this.init(lines); }
    init(lines) {
        this.lines = undefined !== lines && 0 < lines.length ? lines : undefined;
        return this.isValid;
    }
    get numLines() { return undefined !== this.lines ? this.lines.length : 0; }
    get isValid() { return this.numLines > 0; }
    clear() { this.lines = undefined; }
}
exports.PolylineEdgeArgs = PolylineEdgeArgs;
/** Represents a texture image applied to a surface during rendering.
 * A RenderTexture is typically - but not always - associated with a [[RenderMaterial]].
 * @see [[RenderSystem]] for functions used to create RenderTextures.
 * @beta
 */
class RenderTexture {
    get isTileSection() { return 2 /* TileSection */ === this.type; }
    get isGlyph() { return 1 /* Glyph */ === this.type; }
    get isSkyBox() { return 3 /* SkyBox */ === this.type; }
    constructor(params) {
        this.key = params.key;
        this.type = params.type;
        this.isOwned = params.isOwned;
    }
}
exports.RenderTexture = RenderTexture;
/** Represents a texture image applied to a surface during rendering.
 * A RenderTexture is typically - but not always - associated with a [[RenderMaterial]].
 * @see [[RenderSystem]] for functions used to create RenderTextures.
 * @beta
 */
(function (RenderTexture) {
    /** Parameters used to construct a [[RenderTexture]]. */
    class Params {
        constructor(key, type = 0 /* Normal */, isOwned = false) {
            this.key = key;
            this.type = type;
            this.isOwned = isOwned;
        }
        get isTileSection() { return 2 /* TileSection */ === this.type; }
        get isGlyph() { return 1 /* Glyph */ === this.type; }
        get isSkyBox() { return 3 /* SkyBox */ === this.type; }
    }
    /** Obtain a RenderTexture params object with default values. */
    Params.defaults = new Params();
    RenderTexture.Params = Params;
})(RenderTexture = exports.RenderTexture || (exports.RenderTexture = {}));
/** Represents a material which can be applied to a surface to control aspects of its appearance such as color, reflectivity, texture, and so on.
 * @beta
 */
class RenderMaterial {
    constructor(params) {
        this.key = params.key;
        this.textureMapping = params.textureMapping;
    }
    get hasTexture() { return this.textureMapping !== undefined && this.textureMapping.texture !== undefined; }
}
exports.RenderMaterial = RenderMaterial;
/** Represents a material which can be applied to a surface to control aspects of its appearance such as color, reflectivity, and so on.
 * @beta
 */
(function (RenderMaterial) {
    /** Parameters used to construct a [[RenderMaterial]] */
    class Params {
        constructor(key) {
            this.diffuse = 0.6;
            this.specular = .4;
            this.specularExponent = 13.5;
            this.reflect = 0.0;
            this.transparency = 0.0;
            this.refract = 1.0;
            this.ambient = .3;
            this.shadows = true;
            this.key = key;
        }
        /** Create a RenderMaterial params object using specified key and ColorDef values, as well as an optional texture mapping. */
        static fromColors(key, diffuseColor, specularColor, emissiveColor, reflectColor, textureMap) {
            const materialParams = new Params();
            materialParams.key = key;
            materialParams.diffuseColor = diffuseColor;
            materialParams.specularColor = specularColor;
            materialParams.emissiveColor = emissiveColor;
            materialParams.reflectColor = reflectColor;
            materialParams.textureMapping = textureMap;
            return materialParams;
        }
    }
    /** Obtain an immutable instance of a RenderMaterial with all default properties. */
    Params.defaults = new Params();
    RenderMaterial.Params = Params;
})(RenderMaterial = exports.RenderMaterial || (exports.RenderMaterial = {}));
Object.freeze(RenderMaterial.Params.defaults);
/** @internal */
var ImageLight;
(function (ImageLight) {
    class Solar {
        constructor(direction = new geometry_core_1.Vector3d(), color = ColorDef_1.ColorDef.white, intensity = 0) {
            this.direction = direction;
            this.color = color;
            this.intensity = intensity;
        }
    }
    ImageLight.Solar = Solar;
})(ImageLight = exports.ImageLight || (exports.ImageLight = {}));
/** The "cooked" material and symbology for a [[RenderGraphic]]. This determines the appearance
 * (e.g. texture, color, width, linestyle, etc.) used to draw Geometry.
 * @beta
 */
class GraphicParams {
    constructor() {
        this.fillFlags = FillFlags.None;
        this.linePixels = LinePixels.Solid;
        this.rasterWidth = 1;
        this.lineColor = new ColorDef_1.ColorDef();
        this.fillColor = new ColorDef_1.ColorDef();
        this.trueWidthStart = 0;
        this.trueWidthEnd = 0;
    }
    /** set the line color
     *  @param lineColor the new line color for this GraphicParams.
     */
    setLineColor(lineColor) { this.lineColor.setFrom(lineColor); }
    setLineTransparency(transparency) { this.lineColor.setAlpha(transparency); }
    /**
     * Set the current fill color for this GraphicParams.
     * @param fillColor the new fill color for this GraphicParams.
     */
    setFillColor(fillColor) { this.fillColor.setFrom(fillColor); }
    setFillTransparency(transparency) { this.fillColor.setAlpha(transparency); }
    /** Set the linear pixel pattern for this GraphicParams. This is only valid for overlay decorators in pixel mode. */
    setLinePixels(code) { this.linePixels = code; this.lineTexture = undefined; }
    static fromSymbology(lineColor, fillColor, lineWidth, linePixels = LinePixels.Solid) {
        const graphicParams = new GraphicParams();
        graphicParams.setLineColor(lineColor);
        graphicParams.setFillColor(fillColor);
        graphicParams.rasterWidth = lineWidth;
        graphicParams.setLinePixels(linePixels);
        return graphicParams;
    }
    static fromBlankingFill(fillColor) {
        const graphicParams = new GraphicParams();
        graphicParams.setFillColor(fillColor);
        graphicParams.fillFlags = FillFlags.Blanking;
        return graphicParams;
    }
}
exports.GraphicParams = GraphicParams;
/** Enumerates the available rendering modes. The rendering mode chiefly controls whether and how surfaces and their edges are drawn.
 * Generally speaking,
 *  - Wireframe draws only edges.
 *  - SmoothShade draws only surfaces.
 *  - HiddenLine and SolidFill draw both surfaces and edges.
 *  - Lighting is only applied in SmoothShade mode.
 *
 * The [[FillFlags]] associated with planar regions controls whether and how the region's interior area is displayed in Wireframe mode.
 * [[ViewFlags]] has options for enabling display of visible and/or hidden edges in SmoothShade mode.
 * [[HiddenLine.Settings]] allow aspects of edge and surface symbology to be overridden within a view.
 * @public
 */
var RenderMode;
(function (RenderMode) {
    /** Render only edges, no surfaces, with exceptions for planar regions with [[FillFlags]] set up to render the surface in wireframe mode. */
    RenderMode[RenderMode["Wireframe"] = 0] = "Wireframe";
    /** Render only surfaces, no edges, with lighting. */
    RenderMode[RenderMode["SmoothShade"] = 6] = "SmoothShade";
    /** Render edges and surfaces. Surfaces are drawn using the view's background color instead of the element's fill color. */
    RenderMode[RenderMode["HiddenLine"] = 3] = "HiddenLine";
    /** Render edges and surfaces. */
    RenderMode[RenderMode["SolidFill"] = 4] = "SolidFill";
})(RenderMode = exports.RenderMode || (exports.RenderMode = {}));
/** The current position (eyepoint), lens angle, and focus distance of a camera.
 * @public
 */
class Camera {
    static isValidLensAngle(val) { return val.radians > (Math.PI / 8.0) && val.radians < Math.PI; }
    static validateLensAngle(val) { if (!this.isValidLensAngle(val))
        val.setRadians(Math.PI / 2.0); }
    invalidateFocus() { this.focusDist = 0.0; }
    get isFocusValid() { return this.focusDist > 0.0 && this.focusDist < 1.0e14; }
    getFocusDistance() { return this.focusDist; }
    setFocusDistance(dist) { this.focusDist = dist; }
    get isLensValid() { return Camera.isValidLensAngle(this.lens); }
    validateLens() { Camera.validateLensAngle(this.lens); }
    getLensAngle() { return this.lens; }
    setLensAngle(angle) { this.lens.setFrom(angle); }
    getEyePoint() { return this.eye; }
    setEyePoint(pt) { this.eye.setFrom(pt); }
    get isValid() { return this.isLensValid && this.isFocusValid; }
    equals(other) { return this.lens === other.lens && this.focusDist === other.focusDist && this.eye.isExactEqual(other.eye); }
    clone() { return new Camera(this); }
    setFrom(rhs) {
        this.lens.setFrom(rhs.lens);
        this.focusDist = rhs.focusDist;
        this.eye.setFrom(rhs.eye);
    }
    /** Construct a Camera
     * @param props The properties of the new camera. If undefined, create a camera with eye at {0,0,0}, 90 degree lens, 1 meter focus distance.
     */
    constructor(props) {
        if (props !== undefined) {
            this.lens = geometry_core_1.Angle.fromJSON(props.lens);
            this.focusDist = bentleyjs_core_1.JsonUtils.asDouble(props.focusDist);
            this.eye = geometry_core_1.Point3d.fromJSON(props.eye);
            return;
        }
        this.lens = geometry_core_1.Angle.createRadians(Math.PI / 2.0);
        this.focusDist = 1;
        this.eye = new geometry_core_1.Point3d();
    }
}
exports.Camera = Camera;
/** Flags for controlling how graphics appear within a View.
 * @public
 */
class ViewFlags {
    constructor() {
        /** The [[RenderMode]] of the view. */
        this.renderMode = RenderMode.Wireframe;
        /** Shows or hides dimensions. */
        this.dimensions = true;
        /** Shows or hides pattern geometry. */
        this.patterns = true;
        /** Controls whether non-zero line weights are used or display using weight 0. */
        this.weights = true;
        /** Controls whether custom line styles are used (e.g. control whether elements with custom line styles draw normally, or as solid lines). */
        this.styles = true;
        /** Controls whether element transparency is used (e.g. control whether elements with transparency draw normally, or as opaque). */
        this.transparency = true;
        /** @internal This doesn't belong here - it is not persistent. */
        this.continuousRendering = false;
        /** Controls whether the fills on filled elements are displayed. */
        this.fill = true;
        /** Controls whether to display texture maps for material assignments. When off only material color is used for display. */
        this.textures = true;
        /** Controls whether materials are used (e.g. control whether geometry with materials draw normally, or as if it has no material). */
        this.materials = true;
        /** Shows or hides the ACS triad. */
        this.acsTriad = false;
        /** Shows or hides the grid. The grid settings are a design file setting. */
        this.grid = false;
        /** Shows or hides visible edges in the shaded render mode. */
        this.visibleEdges = false;
        /** Shows or hides hidden edges in the shaded render mode. */
        this.hiddenEdges = false;
        /** Controls whether the source lights in spatial models are used */
        this.sourceLights = false;
        /** Controls whether camera (ambient, portrait, flashbulb) lights are used. */
        this.cameraLights = false;
        /** Controls whether sunlight used */
        this.solarLight = false;
        /** Shows or hides shadows. */
        this.shadows = false;
        /** Controls whether the clip volume is applied. */
        this.clipVolume = true;
        /** Shows or hides construction class geometry. */
        this.constructions = false;
        /** Draw all graphics in a single color */
        this.monochrome = false;
        /** @internal unused Ignore geometry maps */
        this.noGeometryMap = false;
        /** Display background map */
        this.backgroundMap = false;
        /** Use material colors for hidden lines */
        this.hLineMaterialColors = false;
        /** @internal 0=none, 1=generate mask, 2=use mask */
        this.edgeMask = 0;
        /** Controls whether ambient occlusion is used. */
        this.ambientOcclusion = false;
        /** Controls whether surface discard is always applied regardless of other ViewFlags.
         * Surface shaders contain complicated logic to ensure that the edges of a surface always draw in front of the surface, and that planar surfaces sketched coincident with
         * non-planar surfaces always draw in front of those non-planar surfaces.
         * When this view flag is set to false (the default), then for 3d views if the render mode is wireframe (only edges are displayed) or smooth shader with visible edges turned off (only surfaces are displayed),
         * that logic does not execute, potentially improving performance for no degradation in visual quality. In some scenarios - such as wireframe views containing many planar regions with interior fill, or smooth views containing many coincident planar and non-planar surfaces - enabling this view flag improves display quality by forcing that logic to execute.
         */
        this.forceSurfaceDiscard = false;
    }
    clone(out) { return ViewFlags.createFrom(this, out); }
    static createFrom(other, out) {
        const val = undefined !== out ? out : new ViewFlags();
        if (other) {
            val.renderMode = other.renderMode;
            val.dimensions = other.dimensions;
            val.patterns = other.patterns;
            val.weights = other.weights;
            val.styles = other.styles;
            val.transparency = other.transparency;
            val.continuousRendering = other.continuousRendering;
            val.fill = other.fill;
            val.textures = other.textures;
            val.materials = other.materials;
            val.acsTriad = other.acsTriad;
            val.grid = other.grid;
            val.visibleEdges = other.visibleEdges;
            val.hiddenEdges = other.hiddenEdges;
            val.sourceLights = other.sourceLights;
            val.cameraLights = other.cameraLights;
            val.solarLight = other.solarLight;
            val.shadows = other.shadows;
            val.clipVolume = other.clipVolume;
            val.constructions = other.constructions;
            val.monochrome = other.monochrome;
            val.noGeometryMap = other.noGeometryMap;
            val.hLineMaterialColors = other.hLineMaterialColors;
            val.backgroundMap = other.backgroundMap;
            val.edgeMask = other.edgeMask;
            val.ambientOcclusion = other.ambientOcclusion;
            val.forceSurfaceDiscard = other.forceSurfaceDiscard;
        }
        return val;
    }
    /** @internal */
    hiddenEdgesVisible() {
        switch (this.renderMode) {
            case RenderMode.SolidFill:
            case RenderMode.HiddenLine:
                return this.hiddenEdges;
            case RenderMode.SmoothShade:
                return this.visibleEdges && this.hiddenEdges;
        }
        return true;
    }
    /** @internal */
    edgesRequired() {
        switch (this.renderMode) {
            case RenderMode.SolidFill:
            case RenderMode.HiddenLine:
            case RenderMode.Wireframe:
                return true;
            case RenderMode.SmoothShade:
                return this.visibleEdges;
        }
    }
    toJSON() {
        const out = {};
        if (!this.constructions)
            out.noConstruct = true;
        if (!this.dimensions)
            out.noDim = true;
        if (!this.patterns)
            out.noPattern = true;
        if (!this.weights)
            out.noWeight = true;
        if (!this.styles)
            out.noStyle = true;
        if (!this.transparency)
            out.noTransp = true;
        if (this.continuousRendering)
            out.contRend = true;
        if (!this.fill)
            out.noFill = true;
        if (this.grid)
            out.grid = true;
        if (this.acsTriad)
            out.acs = true;
        if (!this.textures)
            out.noTexture = true;
        if (!this.materials)
            out.noMaterial = true;
        if (!this.cameraLights)
            out.noCameraLights = true;
        if (!this.sourceLights)
            out.noSourceLights = true;
        if (!this.solarLight)
            out.noSolarLight = true;
        if (this.visibleEdges)
            out.visEdges = true;
        if (this.hiddenEdges)
            out.hidEdges = true;
        if (this.shadows)
            out.shadows = true;
        if (this.clipVolume)
            out.clipVol = true;
        if (this.hLineMaterialColors)
            out.hlMatColors = true;
        if (this.monochrome)
            out.monochrome = true;
        if (this.backgroundMap)
            out.backgroundMap = true;
        if (this.edgeMask !== 0)
            out.edgeMask = this.edgeMask;
        if (this.ambientOcclusion)
            out.ambientOcclusion = true;
        if (this.forceSurfaceDiscard)
            out.forceSurfaceDiscard = true;
        out.renderMode = this.renderMode;
        return out;
    }
    static fromJSON(json) {
        const val = new ViewFlags();
        if (!json)
            return val;
        val.constructions = !bentleyjs_core_1.JsonUtils.asBool(json.noConstruct);
        val.dimensions = !bentleyjs_core_1.JsonUtils.asBool(json.noDim);
        val.patterns = !bentleyjs_core_1.JsonUtils.asBool(json.noPattern);
        val.weights = !bentleyjs_core_1.JsonUtils.asBool(json.noWeight);
        val.styles = !bentleyjs_core_1.JsonUtils.asBool(json.noStyle);
        val.transparency = !bentleyjs_core_1.JsonUtils.asBool(json.noTransp);
        val.continuousRendering = bentleyjs_core_1.JsonUtils.asBool(json.contRend);
        val.fill = !bentleyjs_core_1.JsonUtils.asBool(json.noFill);
        val.grid = bentleyjs_core_1.JsonUtils.asBool(json.grid);
        val.acsTriad = bentleyjs_core_1.JsonUtils.asBool(json.acs);
        val.textures = !bentleyjs_core_1.JsonUtils.asBool(json.noTexture);
        val.materials = !bentleyjs_core_1.JsonUtils.asBool(json.noMaterial);
        val.cameraLights = !bentleyjs_core_1.JsonUtils.asBool(json.noCameraLights);
        val.sourceLights = !bentleyjs_core_1.JsonUtils.asBool(json.noSourceLights);
        val.solarLight = !bentleyjs_core_1.JsonUtils.asBool(json.noSolarLight);
        val.visibleEdges = bentleyjs_core_1.JsonUtils.asBool(json.visEdges);
        val.hiddenEdges = bentleyjs_core_1.JsonUtils.asBool(json.hidEdges);
        val.shadows = bentleyjs_core_1.JsonUtils.asBool(json.shadows);
        val.clipVolume = bentleyjs_core_1.JsonUtils.asBool(json.clipVol);
        val.monochrome = bentleyjs_core_1.JsonUtils.asBool(json.monochrome);
        val.edgeMask = bentleyjs_core_1.JsonUtils.asInt(json.edgeMask);
        val.hLineMaterialColors = bentleyjs_core_1.JsonUtils.asBool(json.hlMatColors);
        val.backgroundMap = bentleyjs_core_1.JsonUtils.asBool(json.backgroundMap);
        val.ambientOcclusion = bentleyjs_core_1.JsonUtils.asBool(json.ambientOcclusion);
        val.forceSurfaceDiscard = bentleyjs_core_1.JsonUtils.asBool(json.forceSurfaceDiscard);
        const renderModeValue = bentleyjs_core_1.JsonUtils.asInt(json.renderMode);
        if (renderModeValue < RenderMode.HiddenLine)
            val.renderMode = RenderMode.Wireframe;
        else if (renderModeValue > RenderMode.SolidFill)
            val.renderMode = RenderMode.SmoothShade;
        else
            val.renderMode = renderModeValue;
        return val;
    }
    equals(other) {
        return this.renderMode === other.renderMode
            && this.dimensions === other.dimensions
            && this.patterns === other.patterns
            && this.weights === other.weights
            && this.styles === other.styles
            && this.transparency === other.transparency
            && this.continuousRendering === other.continuousRendering
            && this.fill === other.fill
            && this.textures === other.textures
            && this.materials === other.materials
            && this.acsTriad === other.acsTriad
            && this.grid === other.grid
            && this.visibleEdges === other.visibleEdges
            && this.hiddenEdges === other.hiddenEdges
            && this.sourceLights === other.sourceLights
            && this.cameraLights === other.cameraLights
            && this.solarLight === other.solarLight
            && this.shadows === other.shadows
            && this.clipVolume === other.clipVolume
            && this.constructions === other.constructions
            && this.monochrome === other.monochrome
            && this.noGeometryMap === other.noGeometryMap
            && this.hLineMaterialColors === other.hLineMaterialColors
            && this.backgroundMap === other.backgroundMap
            && this.edgeMask === other.edgeMask
            && this.ambientOcclusion === other.ambientOcclusion
            && this.forceSurfaceDiscard === other.forceSurfaceDiscard;
    }
}
exports.ViewFlags = ViewFlags;
/** @alpha */
var ViewFlag;
(function (ViewFlag) {
    /** Overrides a subset of ViewFlags.
     * @alpha
     */
    class Overrides {
        /** Construct a ViewFlagsOverrides which overrides all flags to match the specified ViewFlags, or overrides nothing if no ViewFlags are supplied. */
        constructor(flags) {
            this._present = 0;
            this._values = new ViewFlags();
            if (undefined !== flags)
                this.overrideAll(flags);
        }
        setPresent(flag) { this._present |= (1 << flag); }
        isPresent(flag) { return 0 !== (this._present & (1 << flag)); }
        overrideAll(flags) {
            ViewFlags.createFrom(flags, this._values);
            this._present = 0xffffffff;
        }
        clone(out) {
            const result = undefined !== out ? out : new Overrides();
            result.copyFrom(this);
            return result;
        }
        copyFrom(other) {
            other._values.clone(this._values);
            this._present = other._present;
        }
        setShowDimensions(val) { this._values.dimensions = val; this.setPresent(2 /* kDimensions */); }
        setShowPatterns(val) { this._values.patterns = val; this.setPresent(3 /* kPatterns */); }
        setShowWeights(val) { this._values.weights = val; this.setPresent(4 /* kWeights */); }
        setShowStyles(val) { this._values.styles = val; this.setPresent(5 /* kStyles */); }
        setShowTransparency(val) { this._values.transparency = val; this.setPresent(6 /* kTransparency */); }
        setShowFill(val) { this._values.fill = val; this.setPresent(8 /* kFill */); }
        setShowTextures(val) { this._values.textures = val; this.setPresent(9 /* kTextures */); }
        setShowMaterials(val) { this._values.materials = val; this.setPresent(10 /* kMaterials */); }
        setShowSourceLights(val) { this._values.sourceLights = val; this.setPresent(13 /* kSourceLights */); }
        setShowCameraLights(val) { this._values.cameraLights = val; this.setPresent(14 /* kCameraLights */); }
        setShowSolarLight(val) { this._values.solarLight = val; this.setPresent(15 /* kSolarLight */); }
        setShowVisibleEdges(val) { this._values.visibleEdges = val; this.setPresent(11 /* kVisibleEdges */); }
        setShowHiddenEdges(val) { this._values.hiddenEdges = val; this.setPresent(12 /* kHiddenEdges */); }
        setShowShadows(val) { this._values.shadows = val; this.setPresent(16 /* kShadows */); }
        setShowClipVolume(val) { this._values.clipVolume = val; this.setPresent(17 /* kClipVolume */); }
        setShowConstructions(val) { this._values.constructions = val; this.setPresent(18 /* kConstructions */); }
        setMonochrome(val) { this._values.monochrome = val; this.setPresent(19 /* kMonochrome */); }
        setIgnoreGeometryMap(val) { this._values.noGeometryMap = val; this.setPresent(20 /* kGeometryMap */); }
        setShowBackgroundMap(val) { this._values.backgroundMap = val; this.setPresent(23 /* kBackgroundMap */); }
        setUseHlineMaterialColors(val) { this._values.hLineMaterialColors = val; this.setPresent(21 /* kHlineMaterialColors */); }
        setForceSurfaceDiscard(val) { this._values.forceSurfaceDiscard = val; this.setPresent(24 /* kForceSurfaceDiscard */); }
        setEdgeMask(val) { this._values.edgeMask = val; this.setPresent(22 /* kEdgeMask */); }
        setRenderMode(val) { this._values.renderMode = val; this.setPresent(0 /* kRenderMode */); }
        anyOverridden() { return 0 !== this._present; }
        clear() { this._present = 0; }
        /** If ViewFlags.clipVolume is overridden, return the override value; else return undefined.
         * @internal
         */
        get clipVolumeOverride() {
            return this.isPresent(17 /* kClipVolume */) ? this._values.clipVolume : undefined;
        }
        /** Apply these overrides to the supplied ViewFlags */
        apply(base) {
            if (!this.anyOverridden())
                return base;
            if (this.isPresent(2 /* kDimensions */))
                base.dimensions = this._values.dimensions;
            if (this.isPresent(3 /* kPatterns */))
                base.patterns = this._values.patterns;
            if (this.isPresent(4 /* kWeights */))
                base.weights = this._values.weights;
            if (this.isPresent(5 /* kStyles */))
                base.styles = this._values.styles;
            if (this.isPresent(6 /* kTransparency */))
                base.transparency = this._values.transparency;
            if (this.isPresent(8 /* kFill */))
                base.fill = this._values.fill;
            if (this.isPresent(9 /* kTextures */))
                base.textures = this._values.textures;
            if (this.isPresent(10 /* kMaterials */))
                base.materials = this._values.materials;
            if (this.isPresent(15 /* kSolarLight */))
                base.solarLight = this._values.solarLight;
            if (this.isPresent(14 /* kCameraLights */))
                base.cameraLights = this._values.cameraLights;
            if (this.isPresent(13 /* kSourceLights */))
                base.sourceLights = this._values.sourceLights;
            if (this.isPresent(11 /* kVisibleEdges */))
                base.visibleEdges = this._values.visibleEdges;
            if (this.isPresent(12 /* kHiddenEdges */))
                base.hiddenEdges = this._values.hiddenEdges;
            if (this.isPresent(16 /* kShadows */))
                base.shadows = this._values.shadows;
            if (this.isPresent(17 /* kClipVolume */))
                base.clipVolume = this._values.clipVolume;
            if (this.isPresent(18 /* kConstructions */))
                base.constructions = this._values.constructions;
            if (this.isPresent(19 /* kMonochrome */))
                base.monochrome = this._values.monochrome;
            if (this.isPresent(20 /* kGeometryMap */))
                base.noGeometryMap = this._values.noGeometryMap;
            if (this.isPresent(23 /* kBackgroundMap */))
                base.backgroundMap = this._values.backgroundMap;
            if (this.isPresent(21 /* kHlineMaterialColors */))
                base.hLineMaterialColors = this._values.hLineMaterialColors;
            if (this.isPresent(24 /* kForceSurfaceDiscard */))
                base.forceSurfaceDiscard = this._values.forceSurfaceDiscard;
            if (this.isPresent(22 /* kEdgeMask */))
                base.edgeMask = this._values.edgeMask;
            if (this.isPresent(0 /* kRenderMode */))
                base.renderMode = this._values.renderMode;
            return base;
        }
    }
    ViewFlag.Overrides = Overrides;
})(ViewFlag = exports.ViewFlag || (exports.ViewFlag = {}));
/** Enumerates the available patterns for drawing patterned lines.
 * Each is a 32-bit pattern in which each bit specifies the on- or off-state of a pixel along the line. The pattern repeats along the length of the entire line.
 * @public
 */
var LinePixels;
(function (LinePixels) {
    /** A solid line. */
    LinePixels[LinePixels["Solid"] = 0] = "Solid";
    /** A solid line. */
    LinePixels[LinePixels["Code0"] = 0] = "Code0";
    /** 1 lit pixel followed by 7 unlit pixels: =&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= */
    LinePixels[LinePixels["Code1"] = 2155905152] = "Code1";
    /** 5 lit pixels followed by 3 unlit pixels: =====&nbsp;&nbsp;&nbsp;=====&nbsp;&nbsp;&nbsp;===== */
    LinePixels[LinePixels["Code2"] = 4177066232] = "Code2";
    /** 11 lit pixels followed by 5 unlit pixels: ===========&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=========== */
    LinePixels[LinePixels["Code3"] = 4292935648] = "Code3";
    /** 7 lit pixels followed by 4 unlit pixels followed by 1 lit pixel followed by 1 lit pixel: =======&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;=======&nbsp;&nbsp;&nbsp;&nbsp;= */
    LinePixels[LinePixels["Code4"] = 4262526480] = "Code4";
    /** 3 lit pixels followed by 5 unlit pixels: ===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;===&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=== */
    LinePixels[LinePixels["Code5"] = 3772834016] = "Code5";
    /** 5 lit pixels followed by 3 unlit followed by 1 lit followed by 3 unlit followed by 1 lit followed by 3 unlit: =====&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;===== */
    LinePixels[LinePixels["Code6"] = 4169726088] = "Code6";
    /** 8 lit pixels followed by 3 unlit followed by 2 lit followed by 3 unlit: ========&nbsp;&nbsp;&nbsp;==&nbsp;&nbsp;&nbsp;======== */
    LinePixels[LinePixels["Code7"] = 4279828248] = "Code7";
    /** 2 lit pixels followed by 2 unlit pixels - default style for drawing hidden edges: ==&nbsp;&nbsp;==&nbsp;&nbsp;==&nbsp;&nbsp;== */
    LinePixels[LinePixels["HiddenLine"] = 3435973836] = "HiddenLine";
    /** Barely visible - 1 lit pixel followed by 31 unlit pixels. */
    LinePixels[LinePixels["Invisible"] = 1] = "Invisible";
    /** Indicates no valid line style or none specified, depending on context. */
    LinePixels[LinePixels["Invalid"] = -1] = "Invalid";
})(LinePixels = exports.LinePixels || (exports.LinePixels = {}));
/** Represents a bounding sphere.  Optional optimization for FrustumPlane containment test.
 * @internal
 */
class BoundingSphere {
    constructor(center, radius) { this.center = center ? center : geometry_core_1.Point3d.createZero(); this.radius = undefined === radius ? 0.0 : radius; }
    init(center, radius) { this.center = center; this.radius = radius; }
    transformBy(transform, result) {
        transform.multiplyPoint3d(this.center, result.center);
        result.radius = this.radius * Math.max(transform.matrix.columnXMagnitude(), Math.max(transform.matrix.columnYMagnitude(), (transform.matrix.columnZMagnitude())));
        return result;
    }
}
exports.BoundingSphere = BoundingSphere;
/** Represents a frustum as 6 planes and provides containment and intersection testing
 * @internal
 */
class FrustumPlanes {
    constructor(frustum) {
        if (undefined !== frustum) {
            this.init(frustum);
        }
    }
    get isValid() { return undefined !== this._planes; }
    init(frustum) {
        if (undefined === this._planes) {
            this._planes = [];
        }
        else {
            this._planes.length = 0;
        }
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 1, 3, 5); // right
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 0, 4, 2); // left
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 2, 6, 3); // top
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 0, 1, 4); // bottom
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 0, 2, 1); // back
        FrustumPlanes.addPlaneFromPoints(this._planes, frustum.points, 4, 5, 6); // front
    }
    computeFrustumContainment(box, sphere) { return this.computeContainment(box.points, sphere); }
    intersectsFrustum(box) { return 0 /* Outside */ !== this.computeFrustumContainment(box); }
    containsPoint(point, tolerance = 1.0e-8) { return 0 /* Outside */ !== this.computeContainment([point], undefined, tolerance); }
    computeContainment(points, sphere, tolerance = 1.0e-8) {
        bentleyjs_core_1.assert(this.isValid);
        if (undefined === this._planes) {
            return 0 /* Outside */;
        }
        let allInside = true;
        for (const plane of this._planes) {
            if (sphere) { // if sphere provide detect total inside and outside without using corners.
                const centerDistance = plane.evaluatePoint(sphere.center);
                const tolerancePlusRadius = tolerance + sphere.radius;
                if (centerDistance < -tolerancePlusRadius)
                    return 0 /* Outside */;
                if (centerDistance > tolerancePlusRadius)
                    continue;
            }
            let nOutside = 0;
            for (const point of points) {
                if (plane.evaluatePoint(point) + tolerance < 0.0) {
                    ++nOutside;
                    allInside = false;
                }
            }
            if (nOutside === points.length) {
                return 0 /* Outside */;
            }
        }
        return allInside ? 2 /* Inside */ : 1 /* Partial */;
    }
    intersectsRay(origin, direction) {
        bentleyjs_core_1.assert(this.isValid);
        if (undefined === this._planes) {
            return false;
        }
        let tFar = 1e37;
        let tNear = -tFar;
        for (const plane of this._planes) {
            const vD = plane.dotProductVector(direction);
            const vN = plane.evaluatePoint(origin);
            if (0.0 === vD) {
                // ray is parallel... no need to continue testing if outside halfspace.
                if (vN < 0.0) {
                    return false;
                }
            }
            else {
                const rayDistance = -vN / vD;
                if (vD < 0.0) {
                    tFar = Math.min(rayDistance, tFar);
                }
                else {
                    tNear = Math.max(rayDistance, tNear);
                }
            }
        }
        return tNear <= tFar;
    }
}
exports.FrustumPlanes = FrustumPlanes;
/** @internal */
(function (FrustumPlanes) {
    /** @internal */
    function addPlaneFromPoints(planes, points, i0, i1, i2, expandPlaneDistance = 1.0e-6) {
        const normal = geometry_core_1.Vector3d.createCrossProductToPoints(points[i2], points[i1], points[i0]);
        normal.normalizeInPlace();
        const plane = geometry_core_1.ClipPlane.createNormalAndDistance(normal, normal.dotProduct(points[i0]) - expandPlaneDistance);
        if (undefined !== plane) {
            planes.push(plane);
        }
    }
    FrustumPlanes.addPlaneFromPoints = addPlaneFromPoints;
})(FrustumPlanes = exports.FrustumPlanes || (exports.FrustumPlanes = {}));
/** Namespace containing types controlling how ambient occlusion should be drawn.
 * @beta
 */
var AmbientOcclusion;
(function (AmbientOcclusion) {
    /** Describes the properties with which ambient occlusion should be drawn. These properties correspond to a horizon-based ambient occlusion approach. */
    class Settings {
        constructor(json) {
            if (undefined === json)
                return;
            this.bias = bentleyjs_core_1.JsonUtils.asDouble(json.bias, Settings._defaultBias);
            this.zLengthCap = bentleyjs_core_1.JsonUtils.asDouble(json.zLengthCap, Settings._defaultZLengthCap);
            this.intensity = bentleyjs_core_1.JsonUtils.asDouble(json.intensity, Settings._defaultIntensity);
            this.texelStepSize = bentleyjs_core_1.JsonUtils.asDouble(json.texelStepSize, Settings._defaultTexelStepSize);
            this.blurDelta = bentleyjs_core_1.JsonUtils.asDouble(json.blurDelta, Settings._defaultBlurDelta);
            this.blurSigma = bentleyjs_core_1.JsonUtils.asDouble(json.blurSigma, Settings._defaultBlurSigma);
            this.blurTexelStepSize = bentleyjs_core_1.JsonUtils.asDouble(json.blurTexelStepSize, Settings._defaultBlurTexelStepSize);
        }
        static fromJSON(json) { return undefined !== json ? new Settings(json) : this.defaults; }
        toJSON() {
            return {
                bias: this.bias,
                zLengthCap: this.zLengthCap,
                intensity: this.intensity,
                texelStepSize: this.texelStepSize,
                blurDelta: this.blurDelta,
                blurSigma: this.blurSigma,
                blurTexelStepSize: this.blurTexelStepSize,
            };
        }
    }
    Settings._defaultBias = 0.25;
    Settings._defaultZLengthCap = 0.0025;
    Settings._defaultIntensity = 2.0;
    Settings._defaultTexelStepSize = 1.95;
    Settings._defaultBlurDelta = 1.0;
    Settings._defaultBlurSigma = 2.0;
    Settings._defaultBlurTexelStepSize = 1.0;
    Settings.defaults = new Settings({});
    AmbientOcclusion.Settings = Settings;
})(AmbientOcclusion = exports.AmbientOcclusion || (exports.AmbientOcclusion = {}));
/** Namespace containing types controlling how edges and surfaces should be drawn in "hidden line" and "solid fill" [[RenderMode]]s.
 * @beta
 */
var HiddenLine;
(function (HiddenLine) {
    /** Describes the symbology with which edges should be drawn. */
    class Style {
        constructor(json, hidden) {
            if (bentleyjs_core_1.JsonUtils.isEmptyObjectOrUndefined(json)) {
                if (hidden)
                    this.pattern = LinePixels.HiddenLine;
                return;
            }
            json = json; // per JsonUtils.isEmptyObjectOrUndefined()
            if (undefined !== json.color && false !== json.ovrColor)
                this.color = ColorDef_1.ColorDef.fromJSON(json.color);
            if (undefined !== json.pattern) {
                const pattern = bentleyjs_core_1.JsonUtils.asInt(json.pattern, hidden ? LinePixels.HiddenLine : LinePixels.Invalid);
                if (LinePixels.Invalid !== pattern)
                    this.pattern = pattern;
            }
            else if (hidden) {
                this.pattern = LinePixels.HiddenLine;
            }
            if (undefined !== json.width) {
                let width = bentleyjs_core_1.JsonUtils.asInt(json.width, 0);
                if (0 !== width) {
                    width = Math.max(1, width);
                    this.width = Math.min(32, width);
                }
            }
        }
        /** @internal */
        get ovrColor() { return undefined !== this.color; }
        static fromJSON(json, hidden) {
            if (undefined !== json)
                return new Style(json, hidden);
            return hidden ? this.defaultHidden : this.defaultVisible;
        }
        /** Create a Style equivalent to this one but with the specified color override. */
        overrideColor(color) {
            if (undefined !== this.color && this.color.equals(color))
                return this;
            return Style.fromJSON({
                color,
                ovrColor: true,
                pattern: this.pattern,
                width: this.width,
            });
        }
        /** Returns true if this Style is equivalent to the supplied Style. */
        equals(other) {
            if (this === other)
                return true;
            else if (this.ovrColor !== other.ovrColor || this.pattern !== other.pattern || this.width !== other.width)
                return false;
            else
                return undefined === this.color || this.color.equals(other.color);
        }
        toJSON() {
            return {
                ovrColor: this.ovrColor,
                color: undefined !== this.color ? this.color : ColorDef_1.ColorDef.white,
                pattern: undefined !== this.pattern ? this.pattern : LinePixels.Invalid,
                width: undefined !== this.width ? this.width : 0,
            };
        }
    }
    Style.defaultVisible = new Style({});
    Style.defaultHidden = new Style({}, true);
    HiddenLine.Style = Style;
    /** Describes how visible and hidden edges and transparent surfaces should be rendered in "hidden line" and "solid fill" [[RenderMode]]s. */
    class Settings {
        constructor(json) {
            this.visible = Style.fromJSON(json.visible);
            this.hidden = Style.fromJSON(json.hidden, true);
            this.transparencyThreshold = bentleyjs_core_1.JsonUtils.asDouble(json.transThreshold, 1.0);
        }
        get transThreshold() { return this.transparencyThreshold; }
        /** Create a DisplaySettings from its JSON representation. */
        static fromJSON(json) {
            if (bentleyjs_core_1.JsonUtils.isEmptyObjectOrUndefined(json))
                return this.defaults;
            else if (json instanceof Settings)
                return json;
            else
                return new Settings(json);
        }
        toJSON() {
            return {
                visible: this.visible.toJSON(),
                hidden: this.hidden.toJSON(),
                transThreshold: this.transThreshold,
            };
        }
    }
    /** The default display settings. */
    Settings.defaults = new Settings({});
    HiddenLine.Settings = Settings;
})(HiddenLine = exports.HiddenLine || (exports.HiddenLine = {}));
/** @beta */
var Gradient;
(function (Gradient) {
    /** Flags applied to a [[Gradient.Symb]]. */
    let Flags;
    (function (Flags) {
        /** No flags. */
        Flags[Flags["None"] = 0] = "None";
        /** Reverse the order of the gradient keys. */
        Flags[Flags["Invert"] = 1] = "Invert";
        /** Draw an outline around the surface to which the gradient is applied. */
        Flags[Flags["Outline"] = 2] = "Outline";
    })(Flags = Gradient.Flags || (Gradient.Flags = {}));
    /** Enumerates the modes by which a [[Gradient.Symb]]'s keys are applied to create an image. */
    let Mode;
    (function (Mode) {
        Mode[Mode["None"] = 0] = "None";
        Mode[Mode["Linear"] = 1] = "Linear";
        Mode[Mode["Curved"] = 2] = "Curved";
        Mode[Mode["Cylindrical"] = 3] = "Cylindrical";
        Mode[Mode["Spherical"] = 4] = "Spherical";
        Mode[Mode["Hemispherical"] = 5] = "Hemispherical";
        /** @beta */
        Mode[Mode["Thematic"] = 6] = "Thematic";
    })(Mode = Gradient.Mode || (Gradient.Mode = {}));
    /** @beta */
    let ThematicMode;
    (function (ThematicMode) {
        ThematicMode[ThematicMode["Smooth"] = 0] = "Smooth";
        ThematicMode[ThematicMode["Stepped"] = 1] = "Stepped";
        ThematicMode[ThematicMode["SteppedWithDelimiter"] = 2] = "SteppedWithDelimiter";
        ThematicMode[ThematicMode["IsoLines"] = 3] = "IsoLines";
    })(ThematicMode = Gradient.ThematicMode || (Gradient.ThematicMode = {}));
    /** @internal */
    let ThematicColorScheme;
    (function (ThematicColorScheme) {
        ThematicColorScheme[ThematicColorScheme["BlueRed"] = 0] = "BlueRed";
        ThematicColorScheme[ThematicColorScheme["RedBlue"] = 1] = "RedBlue";
        ThematicColorScheme[ThematicColorScheme["Monochrome"] = 2] = "Monochrome";
        ThematicColorScheme[ThematicColorScheme["Topographic"] = 3] = "Topographic";
        ThematicColorScheme[ThematicColorScheme["SeaMountain"] = 4] = "SeaMountain";
        ThematicColorScheme[ThematicColorScheme["Custom"] = 5] = "Custom";
    })(ThematicColorScheme = Gradient.ThematicColorScheme || (Gradient.ThematicColorScheme = {}));
    /** Gradient settings specific to thematic mesh display
     * @beta
     */
    class ThematicSettings {
        constructor() {
            this.mode = ThematicMode.Smooth;
            this.stepCount = 10;
            this.marginColor = ColorDef_1.ColorDef.from(0x3f, 0x3f, 0x3f);
            this.colorScheme = ThematicColorScheme.BlueRed;
            this.rangeLow = 1.0E200;
            this.rangeHigh = -1.0E200;
        }
        get range() { return (this.rangeLow > this.rangeHigh) ? geometry_core_1.Range1d.createNull() : geometry_core_1.Range1d.createXX(this.rangeLow, this.rangeHigh); }
        set range(range) { this.rangeLow = range.low; this.rangeHigh = range.high; }
        static get margin() { return .001; } // A fixed portion of the gradient for out of range values.
        static get contentRange() { return 1.0 - 2.0 * ThematicSettings.margin; }
        static get contentMax() { return 1.0 - ThematicSettings.margin; }
        static fromJSON(json) {
            const result = new ThematicSettings();
            result.mode = json.mode;
            result.stepCount = json.stepCount;
            result.marginColor = new ColorDef_1.ColorDef(json.marginColor);
            result.colorScheme = json.colorScheme;
            result.rangeLow = json.rangeLow;
            result.rangeHigh = json.rangeHigh;
            return result;
        }
        clone(out) {
            const result = undefined !== out ? out : new ThematicSettings();
            result.copyFrom(this);
            return result;
        }
        copyFrom(other) {
            this.mode = other.mode;
            this.stepCount = other.stepCount;
            this.marginColor = new ColorDef_1.ColorDef(other.marginColor);
            this.colorScheme = other.colorScheme;
            this.rangeLow = other.rangeLow;
            this.rangeHigh = other.rangeHigh;
        }
    }
    ThematicSettings.defaults = new ThematicSettings();
    Gradient.ThematicSettings = ThematicSettings;
    /** Gradient fraction value to [[ColorDef]] pair
     * @see [[Gradient.KeyColorProps]]
     */
    class KeyColor {
        constructor(json) {
            this.value = json.value;
            this.color = new ColorDef_1.ColorDef(json.color);
        }
    }
    Gradient.KeyColor = KeyColor;
    /** Multi-color area fill defined by a range of colors that vary by position.
     * Gradient fill can be applied to planar regions.
     * @see [[Gradient.SymbProps]]
     */
    class Symb {
        constructor() {
            this.mode = Mode.None;
            this.flags = Flags.None;
            this.shift = 0;
            this.keys = [];
        }
        /** create a GradientSymb from a json object. */
        static fromJSON(json) {
            const result = new Symb();
            if (!json)
                return result;
            result.mode = json.mode;
            result.flags = (json.flags === undefined) ? Flags.None : json.flags;
            result.angle = json.angle ? geometry_core_1.Angle.fromJSON(json.angle) : undefined;
            result.tint = json.tint;
            result.shift = json.shift ? json.shift : 0;
            json.keys.forEach((key) => result.keys.push(new KeyColor(key)));
            result.thematicSettings = (json.thematicSettings === undefined) ? undefined : ThematicSettings.fromJSON(json.thematicSettings);
            return result;
        }
        /** @beta */
        static createThematic(settings) {
            const result = new Symb();
            result.mode = Mode.Thematic;
            result.thematicSettings = settings;
            if (settings.colorScheme < ThematicColorScheme.Custom) {
                const fixedSchemeKeys = [[[0.0, 0, 255, 0], [0.25, 0, 255, 255], [0.5, 0, 0, 255], [0.75, 255, 0, 255], [1.0, 255, 0, 0]],
                    [[0.0, 255, 0, 0], [0.25, 255, 0, 255], [0.5, 0, 0, 255], [0.75, 0, 255, 255], [1.0, 0, 255, 0]],
                    [[0.0, 0, 0, 0], [1.0, 255, 255, 255]],
                    [[0.0, 152, 148, 188], [0.5, 204, 160, 204], [1.0, 152, 72, 128]],
                    [[0.0, 0, 255, 0], [0.2, 72, 96, 160], [0.4, 152, 96, 160], [0.6, 128, 32, 104], [0.7, 148, 180, 128], [1.0, 240, 240, 240]]]; // Based off of the sea-mountain gradient in Point Clouds.
                for (const keyValue of fixedSchemeKeys[settings.colorScheme])
                    result.keys.push(new KeyColor({ value: keyValue[0], color: ColorDef_1.ColorDef.from(keyValue[1], keyValue[3], keyValue[2]) }));
            }
            return result;
        }
        clone() {
            return Symb.fromJSON(this);
        }
        /** Returns true if this symbology is equal to another, false otherwise. */
        equals(other) {
            return Symb.compareSymb(this, other) === 0;
        }
        /** Compares two gradient symbologies. Used for ordering Gradient.Symb objects.
         * @param lhs First gradient to compare
         * @param rhs Second gradient to compare
         * @returns 0 if lhs is equivalent to rhs, a negative number if lhs compares less than rhs, or a positive number if lhs compares greater than rhs.
         */
        static compareSymb(lhs, rhs) {
            if (lhs === rhs)
                return 0; // Same pointer
            if (lhs.mode !== rhs.mode)
                return lhs.mode - rhs.mode;
            if (lhs.flags !== rhs.flags)
                if (lhs.flags === undefined)
                    return -1;
                else if (rhs.flags === undefined)
                    return 1;
                else
                    return lhs.flags - rhs.flags;
            if (lhs.tint !== rhs.tint)
                if (lhs.tint === undefined)
                    return -1;
                else if (rhs.tint === undefined)
                    return 1;
                else
                    return lhs.tint - rhs.tint;
            if (lhs.shift !== rhs.shift)
                if (lhs.shift === undefined)
                    return -1;
                else if (rhs.shift === undefined)
                    return 1;
                else
                    return lhs.shift - rhs.shift;
            if ((lhs.angle === undefined) !== (rhs.angle === undefined))
                if (lhs.angle === undefined)
                    return -1;
                else
                    return 1;
            if (lhs.angle && !lhs.angle.isAlmostEqualNoPeriodShift(rhs.angle))
                return lhs.angle.radians - rhs.angle.radians;
            if (lhs.keys.length !== rhs.keys.length)
                return lhs.keys.length - rhs.keys.length;
            for (let i = 0; i < lhs.keys.length; i++) {
                if (lhs.keys[i].value !== rhs.keys[i].value)
                    return lhs.keys[i].value - rhs.keys[i].value;
                if (!lhs.keys[i].color.equals(rhs.keys[i].color))
                    return lhs.keys[i].color.tbgr - rhs.keys[i].color.tbgr;
            }
            return 0;
        }
        /** Compare this symbology to another.
         * @see [[Gradient.Symb.compareSymb]]
         */
        compare(other) {
            return Gradient.Symb.compareSymb(this, other);
        }
        /**
         * Ensure the value given is within the range of 0 to 255,
         * and truncate the value to only the 8 least significant bits.
         */
        roundToByte(num) {
            return Math.min(num + .5, 255.0) & 0xFF;
        }
        /** Maps a value to an RGBA value adjusted from a color present in this symbology's array. */
        mapColor(value) {
            if (value < 0)
                value = 0;
            else if (value > 1)
                value = 1;
            if ((this.flags & Flags.Invert) !== 0)
                value = 1 - value;
            let idx = 0;
            let d;
            let w0;
            let w1;
            if (this.keys.length <= 2) {
                w0 = 1.0 - value;
                w1 = value;
            }
            else { // locate value in map, blend corresponding colors
                while (idx < (this.keys.length - 2) && value > this.keys[idx + 1].value)
                    idx++;
                d = this.keys[idx + 1].value - this.keys[idx].value;
                w1 = d < 0.0001 ? 0.0 : (value - this.keys[idx].value) / d;
                w0 = 1.0 - w1;
            }
            const color0 = this.keys[idx].color;
            const color1 = this.keys[idx + 1].color;
            const colors0 = color0.colors;
            const colors1 = color1.colors;
            const red = w0 * colors0.r + w1 * colors1.r;
            const green = w0 * colors0.g + w1 * colors1.g;
            const blue = w0 * colors0.b + w1 * colors1.b;
            const transparency = w0 * colors0.t + w1 * colors1.t;
            return ColorDef_1.ColorDef.from(this.roundToByte(red), this.roundToByte(green), this.roundToByte(blue), this.roundToByte(transparency));
        }
        get hasTranslucency() {
            for (const key of this.keys) {
                if (!key.color.isOpaque)
                    return true;
            }
            return false;
        }
        /** Returns true if the [[Gradient.Flags.Outline]] flag is set. */
        get isOutlined() { return 0 !== (this.flags & Flags.Outline); }
        /** Applies this gradient's settings to produce a bitmap image. */
        getImage(width, height) {
            if (this.mode === Mode.Thematic) {
                width = 1;
                height = 8192; // Thematic image height
            }
            const hasAlpha = this.hasTranslucency;
            const thisAngle = (this.angle === undefined) ? 0 : this.angle.radians;
            const cosA = Math.cos(thisAngle);
            const sinA = Math.sin(thisAngle);
            const image = new Uint8Array(width * height * (hasAlpha ? 4 : 3));
            let currentIdx = image.length - 1;
            const shift = Math.min(1.0, Math.abs(this.shift));
            switch (this.mode) {
                case Mode.Linear:
                case Mode.Cylindrical: {
                    const xs = 0.5 - 0.25 * shift * cosA;
                    const ys = 0.5 - 0.25 * shift * sinA;
                    let dMax;
                    let dMin = dMax = 0.0;
                    let d;
                    for (let j = 0; j < 2; j++) {
                        for (let i = 0; i < 2; i++) {
                            d = (i - xs) * cosA + (j - ys) * sinA;
                            if (d < dMin)
                                dMin = d;
                            if (d > dMax)
                                dMax = d;
                        }
                    }
                    for (let j = 0; j < height; j++) {
                        const y = j / height - ys;
                        for (let i = 0; i < width; i++) {
                            const x = i / width - xs;
                            d = x * cosA + y * sinA;
                            let f;
                            if (this.mode === Mode.Linear) {
                                if (d > 0)
                                    f = 0.5 + 0.5 * d / dMax;
                                else
                                    f = 0.5 - 0.5 * d / dMin;
                            }
                            else {
                                if (d > 0)
                                    f = Math.sin(Math.PI / 2 * (1.0 - d / dMax));
                                else
                                    f = Math.sin(Math.PI / 2 * (1.0 - d / dMin));
                            }
                            const color = this.mapColor(f);
                            if (hasAlpha)
                                image[currentIdx--] = color.getAlpha();
                            image[currentIdx--] = color.colors.b;
                            image[currentIdx--] = color.colors.g;
                            image[currentIdx--] = color.colors.r;
                        }
                    }
                    break;
                }
                case Mode.Curved: {
                    const xs = 0.5 + 0.5 * sinA - 0.25 * shift * cosA;
                    const ys = 0.5 - 0.5 * cosA - 0.25 * shift * sinA;
                    for (let j = 0; j < height; j++) {
                        const y = j / height - ys;
                        for (let i = 0; i < width; i++) {
                            const x = i / width - xs;
                            const xr = 0.8 * (x * cosA + y * sinA);
                            const yr = y * cosA - x * sinA;
                            const f = Math.sin(Math.PI / 2 * (1 - Math.sqrt(xr * xr + yr * yr)));
                            const color = this.mapColor(f);
                            if (hasAlpha)
                                image[currentIdx--] = color.getAlpha();
                            image[currentIdx--] = color.colors.b;
                            image[currentIdx--] = color.colors.g;
                            image[currentIdx--] = color.colors.r;
                        }
                    }
                    break;
                }
                case Mode.Spherical: {
                    const r = 0.5 + 0.125 * Math.sin(2.0 * thisAngle);
                    const xs = 0.5 * shift * (cosA + sinA) * r;
                    const ys = 0.5 * shift * (sinA - cosA) * r;
                    for (let j = 0; j < height; j++) {
                        const y = ys + j / height - 0.5;
                        for (let i = 0; i < width; i++) {
                            const x = xs + i / width - 0.5;
                            const f = Math.sin(Math.PI / 2 * (1.0 - Math.sqrt(x * x + y * y) / r));
                            const color = this.mapColor(f);
                            if (hasAlpha)
                                image[currentIdx--] = color.getAlpha();
                            image[currentIdx--] = color.colors.b;
                            image[currentIdx--] = color.colors.g;
                            image[currentIdx--] = color.colors.r;
                        }
                    }
                    break;
                }
                case Mode.Hemispherical: {
                    const xs = 0.5 + 0.5 * sinA - 0.5 * shift * cosA;
                    const ys = 0.5 - 0.5 * cosA - 0.5 * shift * sinA;
                    for (let j = 0; j < height; j++) {
                        const y = j / height - ys;
                        for (let i = 0; i < width; i++) {
                            const x = i / width - xs;
                            const f = Math.sin(Math.PI / 2 * (1.0 - Math.sqrt(x * x + y * y)));
                            const color = this.mapColor(f);
                            if (hasAlpha)
                                image[currentIdx--] = color.getAlpha();
                            image[currentIdx--] = color.colors.b;
                            image[currentIdx--] = color.colors.g;
                            image[currentIdx--] = color.colors.r;
                        }
                    }
                    break;
                }
                case Mode.Thematic: {
                    let settings = this.thematicSettings;
                    if (settings === undefined) {
                        settings = ThematicSettings.defaults;
                    }
                    // TBD - Stepped and isolines...
                    for (let j = 0; j < height; j++) {
                        let f = 1 - j / height;
                        let color;
                        if (f < ThematicSettings.margin || f > ThematicSettings.contentMax) {
                            color = settings.marginColor;
                        }
                        else {
                            f = (f - ThematicSettings.margin) / (ThematicSettings.contentRange);
                            switch (settings.mode) {
                                case ThematicMode.SteppedWithDelimiter:
                                case ThematicMode.Stepped: {
                                    if (settings.stepCount !== 0) {
                                        const fStep = Math.floor(f * settings.stepCount + .99999) / settings.stepCount;
                                        const delimitFraction = 1 / 1024;
                                        if (settings.mode === ThematicMode.SteppedWithDelimiter && Math.abs(fStep - f) < delimitFraction)
                                            color = new ColorDef_1.ColorDef(0xff000000);
                                        else
                                            color = this.mapColor(fStep);
                                    }
                                    break;
                                }
                                case ThematicMode.Smooth:
                                    color = this.mapColor(f);
                                    break;
                            }
                        }
                        for (let i = 0; i < width; i++) {
                            if (hasAlpha)
                                image[currentIdx--] = color.getAlpha();
                            image[currentIdx--] = color.colors.b;
                            image[currentIdx--] = color.colors.g;
                            image[currentIdx--] = color.colors.r;
                        }
                    }
                }
            }
            bentleyjs_core_1.assert(-1 === currentIdx);
            const imageBuffer = Image_1.ImageBuffer.create(image, hasAlpha ? Image_1.ImageBufferFormat.Rgba : Image_1.ImageBufferFormat.Rgb, width);
            bentleyjs_core_1.assert(undefined !== imageBuffer);
            return imageBuffer;
        }
    }
    Gradient.Symb = Symb;
})(Gradient = exports.Gradient || (exports.Gradient = {}));
/** Whether a closed region should be drawn for wireframe display with its internal area filled or not.
 * @public
 */
var FillDisplay;
(function (FillDisplay) {
    /** don't fill, even if fill attribute is on for the viewport */
    FillDisplay[FillDisplay["Never"] = 0] = "Never";
    /** fill if the fill attribute is on for the viewport */
    FillDisplay[FillDisplay["ByView"] = 1] = "ByView";
    /** always fill, even if the fill attribute is off for the viewport */
    FillDisplay[FillDisplay["Always"] = 2] = "Always";
    /** always fill, fill will always be behind other geometry */
    FillDisplay[FillDisplay["Blanking"] = 3] = "Blanking";
})(FillDisplay = exports.FillDisplay || (exports.FillDisplay = {}));
/** Describes how a view's background color affects the interior area of a closed region.
 * @public
 */
var BackgroundFill;
(function (BackgroundFill) {
    /** single color fill uses the fill color and line color to draw either a solid or outline fill */
    BackgroundFill[BackgroundFill["None"] = 0] = "None";
    /** single color fill uses the view's background color to draw a solid fill */
    BackgroundFill[BackgroundFill["Solid"] = 1] = "Solid";
    /** single color fill uses the view's background color and line color to draw an outline fill */
    BackgroundFill[BackgroundFill["Outline"] = 2] = "Outline";
})(BackgroundFill = exports.BackgroundFill || (exports.BackgroundFill = {}));
/** Categorizes a piece of geometry within a GeometryStream. Visibility of classes of geometry can be toggled
 * within a view using [[ViewFlags]].
 * @see [[GeometryStreamProps]].
 * @see [[Feature]].
 * @public
 */
var GeometryClass;
(function (GeometryClass) {
    /** Used to classify the "real" geometry within a model. Most geometry falls within this class. */
    GeometryClass[GeometryClass["Primary"] = 0] = "Primary";
    /** Used to classify geometry used as a drawing aid in constructing the Primary geometry. For example, grid lines. */
    GeometryClass[GeometryClass["Construction"] = 1] = "Construction";
    /** Used to classify annotations which dimension (measure) the Primary geometry. */
    GeometryClass[GeometryClass["Dimension"] = 2] = "Dimension";
    /** Used to classify geometry used to fill planar regions with a 2d pattern (e.g., hatch lines). */
    GeometryClass[GeometryClass["Pattern"] = 3] = "Pattern";
})(GeometryClass = exports.GeometryClass || (exports.GeometryClass = {}));
/** @internal */
class SceneLights {
    constructor(imageBased, fstop = 0) {
        this.imageBased = imageBased;
        this.fstop = fstop;
        this._list = [];
    }
    get isEmpty() { return this._list.length === 0; }
    addLight(light) { if (light.isValid)
        this._list.push(light); }
}
exports.SceneLights = SceneLights;
/** Describes the display properties of graphics in a persistent element's GeometryStream that aren't inherited from [[SubCategoryAppearance]].
 * @see [[GeometryStreamProps]].
 * @public
 */
class GeometryParams {
    /** Create a GeometryParams given a [[Category]] Id for a [[GeometricElement]] and optional [[SubCategory]] Id. The [[SubCategory.appearance]] establishes the non-overriden display properties of
     * graphics in a GeometricElement's [[GeometryStreamProps]]. A GeometricElement refers to a single Category through [[GeometricElement.category]], while it's graphics can appear on multiple SubCategories
     * by adding a [[GeometryAppearanceProps]] with a SubCategory change to the GeometryStream.
     * @note If a valid SubCategory Id is not supplied, the default SubCategory for the parent Category is used. To be considered valid, [[SubCategory.getCategoryId]] must refer to the specified Category Id.
     */
    constructor(categoryId, subCategoryId = bentleyjs_core_1.Id64.invalid) {
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        if (!bentleyjs_core_1.Id64.isValid(subCategoryId))
            this.subCategoryId = IModel_1.IModel.getDefaultSubCategoryId(categoryId);
    }
    clone() {
        const retVal = new GeometryParams(this.categoryId, this.subCategoryId);
        retVal.materialId = this.materialId;
        retVal.elmPriority = this.elmPriority;
        retVal.weight = this.weight;
        retVal.lineColor = this.lineColor ? this.lineColor.clone() : undefined;
        retVal.fillColor = this.fillColor ? this.fillColor.clone() : undefined;
        retVal.backgroundFill = this.backgroundFill;
        retVal.fillDisplay = this.fillDisplay;
        retVal.elmTransparency = this.elmTransparency;
        retVal.fillTransparency = this.fillTransparency;
        retVal.geometryClass = this.geometryClass;
        retVal.styleInfo = this.styleInfo ? this.styleInfo.clone() : undefined;
        retVal.gradient = this.gradient ? this.gradient.clone() : undefined;
        retVal.pattern = this.pattern ? this.pattern.clone() : undefined;
        return retVal;
    }
    /** Clears [[SubCategoryAppearance]] overrides while preserving [[categoryId]] and [[subCategoryId]]. */
    resetAppearance() {
        this.materialId = undefined;
        this.elmPriority = undefined;
        this.weight = undefined;
        this.lineColor = undefined;
        this.fillColor = undefined;
        this.backgroundFill = undefined;
        this.fillDisplay = undefined;
        this.elmTransparency = undefined;
        this.fillTransparency = undefined;
        this.geometryClass = undefined;
        this.styleInfo = undefined;
        this.gradient = undefined;
        this.pattern = undefined;
    }
    /** Compare two [[GeometryParams]] for equivalence, i.e. both values are undefined and inherited from [[SubCategoryAppearance]] or have the same override. */
    isEquivalent(other) {
        if (this === other)
            return true; // Same pointer
        if (this.categoryId !== other.categoryId)
            return false;
        if (this.subCategoryId !== other.subCategoryId)
            return false;
        if (this.geometryClass !== other.geometryClass)
            return false;
        if (this.elmPriority !== other.elmPriority)
            return false;
        if (this.elmTransparency !== other.elmTransparency)
            return false;
        if (this.fillTransparency !== other.fillTransparency)
            return false;
        if ((this.lineColor === undefined) !== (other.lineColor === undefined))
            return false;
        if (this.lineColor && !this.lineColor.equals(other.lineColor))
            return false;
        if (this.weight !== other.weight)
            return false;
        if ((this.materialId === undefined) !== (other.materialId === undefined))
            return false;
        if (this.materialId && this.materialId !== other.materialId)
            return false;
        if ((this.styleInfo === undefined) !== (other.styleInfo === undefined))
            return false;
        if (this.styleInfo && !this.styleInfo.equals(other.styleInfo))
            return false;
        if (this.fillDisplay !== other.fillDisplay)
            return false;
        if (this.fillDisplay !== undefined && this.fillDisplay !== FillDisplay.Never) {
            if ((this.gradient === undefined) !== (other.gradient === undefined))
                return false;
            if (this.gradient && !this.gradient.equals(other.gradient))
                return false;
            if (this.backgroundFill !== other.backgroundFill)
                return false;
            if (this.backgroundFill === undefined || this.backgroundFill === BackgroundFill.None) {
                if ((this.fillColor === undefined) !== (other.fillColor === undefined))
                    return false;
                if (this.fillColor && !this.fillColor.equals(other.fillColor))
                    return false;
            }
        }
        if ((this.pattern === undefined) !== (other.pattern === undefined))
            return false;
        if (this.pattern && !this.pattern.equals(other.pattern))
            return false;
        return true;
    }
    /** Change [[categoryId]] to the supplied id, [[subCategoryId]] to the supplied category's the default subCategory, and optionally clear any [[SubCategoryAppearance]] overrides. */
    setCategoryId(categoryId, clearAppearanceOverrides = true) {
        this.categoryId = categoryId;
        this.subCategoryId = IModel_1.IModel.getDefaultSubCategoryId(categoryId);
        if (clearAppearanceOverrides)
            this.resetAppearance();
    }
    /** Change [[subCategoryId]] to the supplied id and optionally clear any [[SubCategoryAppearance]] overrides. */
    setSubCategoryId(subCategoryId, clearAppearanceOverrides = true) {
        this.subCategoryId = subCategoryId;
        if (clearAppearanceOverrides)
            this.resetAppearance();
    }
}
exports.GeometryParams = GeometryParams;
/** Contains types related to display of hilited elements within a [[Viewport]].
 * @public
 */
var Hilite;
(function (Hilite) {
    /**  Describes the width of the outline applied to hilited geometry. The outline is drawn around the union of all hilited geometry and is visible behind non-hilited geometry.
     * @see [[Hilite.Settings]]
     */
    let Silhouette;
    (function (Silhouette) {
        /** No outline. */
        Silhouette[Silhouette["None"] = 0] = "None";
        /** 1-pixel-wide outline. */
        Silhouette[Silhouette["Thin"] = 1] = "Thin";
        /** 2-pixel-wide outline. */
        Silhouette[Silhouette["Thick"] = 2] = "Thick";
    })(Silhouette = Hilite.Silhouette || (Hilite.Silhouette = {}));
    /**
     * Describes how the hilite effect is applied to elements within a [[Viewport]].
     * The hilite effect is applied to elements contained in the [[IModelConnection]]'s [[SelectionSet]].
     * It is designed to draw attention to those elements. The effect is produced as follows:
     *  1. All hilited elements are drawn as normal, except that their element color is mixed with the hilite color.
     *  2. The union of the regions of the screen corresponding to hilited elements is computed.
     *  3. A silhouette is drawn using the hilite color around the boundaries of the hilited region. This silhouette is visible behind other geometry.
     *  4. The hilite color is mixed with the color of each pixel within the hilited region. This enables surfaces of hilited geometry to be visible behind other geometry.
     *
     * The Settings allow an application to customize how this effect is applied.
     * @see [[Viewport.hilite]]
     */
    class Settings {
        constructor(color = ColorDef_1.ColorDef.from(0x23, 0xbb, 0xfc), visibleRatio = 0.25, hiddenRatio = 0.0, silhouette = Silhouette.Thin) {
            this.color = color;
            this.silhouette = silhouette;
            this.visibleRatio = Settings.clamp(visibleRatio);
            this.hiddenRatio = Settings.clamp(hiddenRatio);
        }
        static clamp(value) { return Math.min(1.0, Math.max(0.0, value)); }
    }
    Hilite.Settings = Settings;
})(Hilite = exports.Hilite || (exports.Hilite = {}));
/** Describes a "feature" within a batched [[RenderGraphic]]. A batched [[RenderGraphic]] can
 * contain multiple features. Each feature is associated with a unique combination of
 * attributes (elementId, subcategory, geometry class). This allows geometry to be
 * more efficiently batched on the GPU, while enabling features to be re-symbolized
 * individually.
 *
 * As a simple example, a single mesh primitive may contain geometry for 3 elements,
 * all belonging to the same subcategory and geometry class. The mesh would therefore
 * contain 3 Features. Each vertex within the mesh would be associated with the
 * index of the Feature to which it belongs, where the index is determined by the
 * FeatureTable associated with the primitive.
 *
 * @see [[FeatureSymbology]] for mechanisms for controlling or overriding the symbology of individual features within a [[ViewState]].
 * @public
 */
class Feature {
    constructor(elementId = bentleyjs_core_1.Id64.invalid, subCategoryId = bentleyjs_core_1.Id64.invalid, geometryClass = GeometryClass.Primary) {
        this.elementId = elementId;
        this.subCategoryId = subCategoryId;
        this.geometryClass = geometryClass;
    }
    get isDefined() { return !bentleyjs_core_1.Id64.isInvalid(this.elementId) || !bentleyjs_core_1.Id64.isInvalid(this.subCategoryId) || this.geometryClass !== GeometryClass.Primary; }
    get isUndefined() { return !this.isDefined; }
    /** Returns true if this feature is equivalent to the supplied feature. */
    equals(other) { return 0 === this.compare(other); }
    /** Performs ordinal comparison of this feature with another.
     * @param rhs The feature to compare with.
     * @returns zero if the features are equivalent, a negative value if this feature compares as "less than" `rhs`, or a positive value if this feature compares "greater than" `rhs`.
     */
    compare(rhs) {
        if (this === rhs)
            return 0;
        let cmp = bentleyjs_core_1.compareNumbers(this.geometryClass, rhs.geometryClass);
        if (0 === cmp) {
            cmp = bentleyjs_core_1.compareStrings(this.elementId, rhs.elementId);
            if (0 === cmp) {
                cmp = bentleyjs_core_1.compareStrings(this.subCategoryId, rhs.subCategoryId);
            }
        }
        return cmp;
    }
}
exports.Feature = Feature;
/** Describes the type of a 'batch' of graphics representing multiple [[Feature]]s.
 * The most commonly-encountered batches are Tiles, which can be of either Primary or
 * Classifier type.
 * @beta
 */
var BatchType;
(function (BatchType) {
    /** This batch contains graphics derived from a model's visible geometry. */
    BatchType[BatchType["Primary"] = 0] = "Primary";
    /**
     * This batch contains colod volumes which are used to classify a model's visible geometry.
     * The graphics themselves are not rendered to the screen; instead they are rendered to the stencil buffer
     * to resymbolize the primary geometry.
     */
    BatchType[BatchType["VolumeClassifier"] = 1] = "VolumeClassifier";
    /**
     * This batch contains planar graphics which are used to classify a model's visible geometry.
     * The graphics themselves are not rendered to the screen; instead they are rendered to a texture buffer
     * to resymbolize the primary geometry.
     */
    BatchType[BatchType["PlanarClassifier"] = 2] = "PlanarClassifier";
})(BatchType = exports.BatchType || (exports.BatchType = {}));
/** Defines a look-up table for [[Feature]]s within a batched [[RenderGraphic]]. Consecutive 32-bit
 * indices are assigned to each unique Feature. Primitives within the [[RenderGraphic]] can
 * use per-vertex indices to specify the distribution of Features within the primitive.V
 * A FeatureTable can be shared amongst multiple primitives within a single [[RenderGraphic]], and
 * amongst multiple sub-Graphics of a [[RenderGraphic]].
 * @see [[FeatureSymbology]] for mechanisms for resymbolizing features within a [[ViewState]].
 * @beta
 */
class FeatureTable extends bentleyjs_core_1.IndexMap {
    /** Construct an empty FeatureTable. */
    constructor(maxFeatures, modelId = bentleyjs_core_1.Id64.invalid, type = BatchType.Primary) {
        super((lhs, rhs) => lhs.compare(rhs), maxFeatures);
        this.modelId = modelId;
        this.type = type;
    }
    /** Returns the maximum number of [[Feature]]s this FeatureTable can contain. */
    get maxFeatures() { return this._maximumSize; }
    /** @internal */
    get anyDefined() { return this.length > 1 || (1 === this.length && this._array[0].value.isDefined); }
    /** Returns true if this FeatureTable contains exactly one [[Feature]]. */
    get isUniform() { return 1 === this.length; }
    /** If this FeatureTable contains exactly one [[Feature]], returns that Feature; otherwise returns undefined. */
    get uniform() { return 1 === this.length ? this._array[0].value : undefined; }
    /** Returns true if this FeatureTable is associated with [[BatchType.VolumeClassifier]] geometry. */
    get isVolumeClassifier() { return BatchType.VolumeClassifier === this.type; }
    /** Returns true if this FeatureTable is associated with [[BatchType.PlanarClassifier]] geometry. */
    get isPlanarClassifier() { return BatchType.PlanarClassifier === this.type; }
    /** Returns the Feature corresponding to the specified index, or undefined if the index is not present. */
    findFeature(index) {
        for (const entry of this._array)
            if (entry.index === index)
                return entry.value;
        return undefined;
    }
    /** @internal */
    insertWithIndex(feature, index) {
        const bound = this.lowerBound(feature);
        bentleyjs_core_1.assert(!bound.equal);
        bentleyjs_core_1.assert(!this.isFull);
        const entry = new bentleyjs_core_1.IndexedValue(feature, index);
        this._array.splice(bound.index, 0, entry);
    }
    /** @internal */
    getArray() { return this._array; }
}
exports.FeatureTable = FeatureTable;
/** Describes how to map a [[RenderTexture]] image onto a surface.
 * @see [[RenderMaterial]].
 * @beta
 */
class TextureMapping {
    constructor(tx, params) {
        this.texture = tx;
        this.params = params;
    }
    /** @internal */
    computeUVParams(visitor, transformToImodel) {
        return this.params.computeUVParams(visitor, transformToImodel);
    }
}
exports.TextureMapping = TextureMapping;
/** @beta */
(function (TextureMapping) {
    /** Enumerates the possible texture mapping modes. */
    let Mode;
    (function (Mode) {
        Mode[Mode["None"] = -1] = "None";
        Mode[Mode["Parametric"] = 0] = "Parametric";
        Mode[Mode["ElevationDrape"] = 1] = "ElevationDrape";
        Mode[Mode["Planar"] = 2] = "Planar";
        /** @internal */
        Mode[Mode["DirectionalDrape"] = 3] = "DirectionalDrape";
        /** @internal */
        Mode[Mode["Cubic"] = 4] = "Cubic";
        /** @internal */
        Mode[Mode["Spherical"] = 5] = "Spherical";
        /** @internal */
        Mode[Mode["Cylindrical"] = 6] = "Cylindrical";
        /** @internal */
        Mode[Mode["Solid"] = 7] = "Solid";
        /** @internal Only valid for lights */
        Mode[Mode["FrontProject"] = 8] = "FrontProject";
    })(Mode = TextureMapping.Mode || (TextureMapping.Mode = {}));
    /** A 2x3 matrix for mapping a texture image to a surface. */
    class Trans2x3 {
        constructor(t00 = 1, t01 = 0, t02 = 0, t10 = 0, t11 = 1, t12 = 0) {
            this._vals = new Array(2);
            const vals = this._vals;
            vals[0] = [t00, t01, t02];
            vals[1] = [t10, t11, t12];
        }
        setTransform() {
            const transform = geometry_core_1.Transform.createIdentity(), vals = this._vals, matrix = transform.matrix;
            for (let i = 0, len = 2; i < 2; ++i)
                for (let j = 0; j < len; ++j)
                    matrix.setAt(i, j, vals[i][j]);
            transform.origin.x = vals[0][2];
            transform.origin.y = vals[1][2];
            this._transform = transform;
        }
        get transform() { if (undefined === this._transform)
            this.setTransform(); return this._transform; }
    }
    TextureMapping.Trans2x3 = Trans2x3;
    /** Parameters describing how a texture image is mapped to a surface. */
    class Params {
        constructor(props = {}) {
            const { textureMat2x3 = new Trans2x3(), textureWeight = 1.0, mapMode = Mode.Parametric, worldMapping = false } = props;
            this.textureMatrix = textureMat2x3;
            this.weight = textureWeight;
            this.mode = mapMode;
            this.worldMapping = worldMapping;
        }
        /**
         * Generates UV parameters for textured surfaces. Returns undefined on failure.
         * @internal
         */
        computeUVParams(visitor, transformToImodel) {
            switch (this.mode) {
                default: // Fall through to parametric in default case
                case TextureMapping.Mode.Parametric: {
                    return this.computeParametricUVParams(visitor, this.textureMatrix.transform, !this.worldMapping);
                }
                case TextureMapping.Mode.Planar: {
                    const normalIndices = visitor.normalIndex;
                    if (!normalIndices)
                        return undefined;
                    // Ignore planar mode unless master or sub units for scaleMode and facet is planar
                    if (!this.worldMapping || (visitor.normalIndex !== undefined && (normalIndices[0] !== normalIndices[1] || normalIndices[0] !== normalIndices[2]))) {
                        return this.computeParametricUVParams(visitor, this.textureMatrix.transform, !this.worldMapping);
                    }
                    else {
                        return this.computePlanarUVParams(visitor, this.textureMatrix.transform);
                    }
                }
                case TextureMapping.Mode.ElevationDrape: {
                    return this.computeElevationDrapeUVParams(visitor, this.textureMatrix.transform, transformToImodel);
                }
            }
        }
        /** Computes UV parameters given a texture mapping mode of parametric. */
        computeParametricUVParams(visitor, uvTransform, isRelativeUnits) {
            const params = [];
            for (let i = 0; i < visitor.numEdgesThisFacet; i++) {
                let param = geometry_core_1.Point2d.create();
                if (isRelativeUnits || !visitor.tryGetDistanceParameter(i, param)) {
                    if (!visitor.tryGetNormalizedParameter(i, param)) {
                        // If mesh does not have facetFaceData, we still want to use the texture coordinates if they are present
                        param = visitor.getParam(i);
                    }
                }
                params.push(uvTransform.multiplyPoint2d(param));
            }
            return params;
        }
        /** Computes UV parameters given a texture mapping mode of planar. The result is stored in the Point2d array given. */
        computePlanarUVParams(visitor, uvTransform) {
            const params = [];
            const points = visitor.point;
            let normal;
            if (visitor.normal === undefined)
                normal = points.getPoint3dAtUncheckedPointIndex(0).crossProductToPoints(points.getPoint3dAtUncheckedPointIndex(1), points.getPoint3dAtUncheckedPointIndex(2));
            else
                normal = visitor.normal.getVector3dAtCheckedVectorIndex(0);
            if (!normal.normalize(normal))
                return undefined;
            // adjust U texture coordinate to be a continuous length starting at the
            // origin. V coordinate stays the same. This mode assumes Z is up vector
            // Flipping normal puts us in a planar coordinate system consistent with MicroStation's display system
            normal.scale(-1.0, normal);
            // pick the first vertex normal
            const sideVector = geometry_core_1.Vector3d.create(normal.y, -normal.x, 0.0);
            // if the magnitude of the normal is near zero, the real normal points
            // almost straighten up.. In this case, use Y as the up vector to match QV
            const magnitude = sideVector.magnitude();
            sideVector.normalize(sideVector); // won't remain undefined if failed due to following check..
            if (magnitude < 1e-3) {
                normal.set(0, 0, -1);
                sideVector.set(1, 0, 0);
            }
            const upVector = sideVector.crossProduct(normal).normalize();
            if (!upVector)
                return undefined;
            const numEdges = visitor.numEdgesThisFacet;
            for (let i = 0; i < numEdges; i++) {
                const vector = geometry_core_1.Vector3d.createFrom(points.getPoint3dAtUncheckedPointIndex(i));
                params.push(geometry_core_1.Point2d.create(vector.dotProduct(sideVector), vector.dotProduct(upVector)));
                uvTransform.multiplyPoint2d(params[i], params[i]);
            }
            return params;
        }
        /** Computes UV parameters given a texture mapping mode of elevation drape. The result is stored in the Point2d array given. */
        computeElevationDrapeUVParams(visitor, uvTransform, transformToIModel) {
            const params = [];
            const numEdges = visitor.numEdgesThisFacet;
            for (let i = 0; i < numEdges; i++) {
                const point = visitor.point.getPoint3dAtUncheckedPointIndex(i);
                if (transformToIModel !== undefined)
                    transformToIModel.multiplyPoint3d(point, point);
                params.push(geometry_core_1.Point2d.createFrom(point));
                uvTransform.multiplyPoint2d(params[i], params[i]);
            }
            return params;
        }
    }
    TextureMapping.Params = Params;
})(TextureMapping = exports.TextureMapping || (exports.TextureMapping = {}));
/** @alpha */
class AnalysisStyle {
    static fromJSON(json) {
        const result = new AnalysisStyle();
        if (!json)
            return result;
        result.inputName = json.inputName;
        result.displacementChannelName = json.displacementChannelName;
        result.scalarChannelName = json.scalarChannelName;
        result.normalChannelName = json.normalChannelName;
        result.displacementScale = json.displacementScale;
        result.scalarRange = json.scalarRange ? geometry_core_1.Range1d.fromJSON(json.scalarRange) : undefined;
        result.scalarThematicSettings = json.scalarThematicSettings ? Gradient.ThematicSettings.fromJSON(json.scalarThematicSettings) : undefined;
        result.inputRange = json.inputRange ? geometry_core_1.Range1d.fromJSON(json.inputRange) : undefined;
        return result;
    }
    copyFrom(source) {
        this.inputName = source.inputName;
        this.displacementChannelName = source.displacementChannelName;
        this.scalarChannelName = source.scalarChannelName;
        this.normalChannelName = source.normalChannelName;
        this.displacementScale = source.displacementScale;
        if (source.scalarRange)
            this.scalarRange = source.scalarRange.clone();
        if (source.scalarThematicSettings)
            this.scalarThematicSettings = source.scalarThematicSettings.clone();
        this.scalarThematicSettings = source.scalarThematicSettings;
        if (source.inputRange)
            this.inputRange = source.inputRange.clone();
    }
    clone(out) {
        const result = undefined !== out ? out : new AnalysisStyle();
        result.copyFrom(this);
        return result;
    }
}
exports.AnalysisStyle = AnalysisStyle;
/** A circle drawn at a Z elevation, whose diameter is the the XY diagonal of the project extents, used to represent the ground as a reference point within a spatial view.
 * @public
 */
class GroundPlane {
    constructor(ground) {
        /** Whether the ground plane should be displayed. */
        this.display = false;
        /** The Z height at which to draw the plane. */
        this.elevation = 0.0;
        ground = ground ? ground : {};
        this.display = bentleyjs_core_1.JsonUtils.asBool(ground.display, false);
        this.elevation = bentleyjs_core_1.JsonUtils.asDouble(ground.elevation, -.01);
        this.aboveColor = (undefined !== ground.aboveColor) ? ColorDef_1.ColorDef.fromJSON(ground.aboveColor) : new ColorDef_1.ColorDef(ColorDef_1.ColorByName.darkGreen);
        this.belowColor = (undefined !== ground.belowColor) ? ColorDef_1.ColorDef.fromJSON(ground.belowColor) : new ColorDef_1.ColorDef(ColorDef_1.ColorByName.darkBrown);
    }
    toJSON() {
        return {
            display: this.display,
            elevation: this.elevation,
            aboveColor: this.aboveColor.toJSON(),
            belowColor: this.belowColor.toJSON(),
        };
    }
    /** Returns and locally stores gradient symbology for the ground plane texture depending on whether we are looking from above or below.
     * Will store the ground colors used in the optional ColorDef array provided.
     * @internal
     */
    getGroundPlaneGradient(aboveGround) {
        let gradient = aboveGround ? this._aboveSymb : this._belowSymb;
        if (undefined !== gradient)
            return gradient;
        const values = [0, .25, .5]; // gradient goes from edge of rectangle (0.0) to center (1.0)...
        const color = aboveGround ? this.aboveColor : this.belowColor;
        const alpha = aboveGround ? 0x80 : 0x85;
        const groundColors = [color.clone(), color.clone(), color.clone()];
        groundColors[0].setTransparency(0xff);
        groundColors[1].setTransparency(alpha);
        groundColors[2].setTransparency(alpha);
        // Get the possibly cached gradient from the system, specific to whether or not we want ground from above or below.
        gradient = new Gradient.Symb();
        gradient.mode = Gradient.Mode.Spherical;
        gradient.keys = [{ color: groundColors[0], value: values[0] }, { color: groundColors[1], value: values[1] }, { color: groundColors[2], value: values[2] }];
        // Store the gradient for possible future use
        if (aboveGround)
            this._aboveSymb = gradient;
        else
            this._belowSymb = gradient;
        return gradient;
    }
}
exports.GroundPlane = GroundPlane;
/** Namespace containing types controlling how solar shadows should be drawn.
 * @beta
 */
var SolarShadows;
(function (SolarShadows) {
    /** Solar shadows are imposed as a color scaling on geometry that is occluded from solar lighting.  Shadows are imposed independently
     * of solar lighting and is applied to unlit geometry such as reality models and map tiles.
     * @beta
     */
    class Settings {
        constructor(props) {
            this.bias = props ? bentleyjs_core_1.JsonUtils.asDouble(props.bias, SolarShadows.Settings._defaultBias) : SolarShadows.Settings._defaultBias;
            this.color = (props !== undefined && props.color !== undefined) ? ColorDef_1.ColorDef.fromJSON(props.color) : new ColorDef_1.ColorDef(ColorDef_1.ColorByName.grey);
        }
        clone() { return new SolarShadows.Settings(this); }
        static fromJSON(props) { return new Settings(props); }
        toJSON() {
            return {
                bias: this.bias,
                color: this.color,
            };
        }
    }
    Settings._defaultBias = .001;
    SolarShadows.Settings = Settings;
})(SolarShadows = exports.SolarShadows || (exports.SolarShadows = {}));


/***/ }),

/***/ "./lib/RpcInterface.js":
/*!*****************************!*\
  !*** ./lib/RpcInterface.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcRegistry_1 = __webpack_require__(/*! ./rpc/core/RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const RpcConfiguration_1 = __webpack_require__(/*! ./rpc/core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const semver = __webpack_require__(/*! semver */ "../../common/temp/node_modules/.registry.npmjs.org/semver/5.7.0/node_modules/semver/semver.js");
/** An RPC interface is a set of operations exposed by a service that a client can call, using configurable protocols,
 * in a platform-independent way. TheRpcInterface class is the base class for RPC interface definitions and implementations.
 * @public
 */
class RpcInterface {
    constructor() {
        /** The configuration for the RPC interface. */
        this.configuration = RpcConfiguration_1.RpcConfiguration.supply(this);
    }
    /** Determines whether the backend version of an RPC interface is compatible (according to semantic versioning) with the frontend version of the interface. */
    static isVersionCompatible(backend, frontend) {
        const difference = semver.diff(backend, frontend);
        if (semver.prerelease(backend) || semver.prerelease(frontend)) {
            return difference === null;
        }
        else if (semver.major(backend) === 0 || semver.major(frontend) === 0) {
            return difference === null || (difference === "patch" && semver.patch(frontend) < semver.patch(backend));
        }
        else {
            return difference === null || difference === "patch" || (difference === "minor" && semver.minor(frontend) < semver.minor(backend));
        }
    }
    /** Obtains the implementation result for an RPC operation. */
    async forward(parameters) {
        const parametersCompat = (arguments.length === 1 && typeof (parameters) === "object") ? parameters : arguments;
        const parametersArray = Array.isArray(parametersCompat) ? parametersCompat : Array.prototype.slice.call(parametersCompat);
        const operationName = parametersArray.pop();
        const request = new this.configuration.protocol.requestType(this, operationName, parametersArray);
        request.submit(); // tslint:disable-line:no-floating-promises
        this[RpcRegistry_1.CURRENT_REQUEST] = request;
        return request.response;
    }
}
exports.RpcInterface = RpcInterface;
RpcInterface.prototype.configurationSupplier = undefined;


/***/ }),

/***/ "./lib/RpcManager.js":
/*!***************************!*\
  !*** ./lib/RpcManager.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcRegistry_1 = __webpack_require__(/*! ./rpc/core/RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
/** RPC interface management is concerned with coordination of access and configuration for RPC interfaces.
 * @public
 */
class RpcManager {
    /** Initializes an RPC interface class.
     * @note This function must be called on the frontend and on the backend for each RPC interface class used by an application.
     */
    static initializeInterface(definition) {
        RpcRegistry_1.RpcRegistry.instance.initializeRpcInterface(definition);
    }
    /** Terminates an RPC interface class. */
    static terminateInterface(definition) {
        RpcRegistry_1.RpcRegistry.instance.terminateRpcInterface(definition);
    }
    /** Returns the RPC client instance for the frontend. */
    static getClientForInterface(definition) {
        return RpcRegistry_1.RpcRegistry.instance.getClientForInterface(definition);
    }
    /** Register the RPC implementation class for the backend. */
    static registerImpl(definition, implementation) {
        RpcRegistry_1.RpcRegistry.instance.registerImpl(definition, implementation);
    }
    /** Supply the instance of the RPC interface implementation class for the backend (optional). */
    static supplyImplInstance(definition, instance) {
        RpcRegistry_1.RpcRegistry.instance.supplyImplInstance(definition, instance);
    }
    /** Unregister the RPC implementation class for the backend. */
    static unregisterImpl(definition) {
        RpcRegistry_1.RpcRegistry.instance.unregisterImpl(definition);
    }
    /** Describes the RPC interfaces and endpoints that are currently available from the backend.
     * @note Some endpoints may be marked incompatible if the frontend expected a different interface declaration than the backend supplied. RPC operations against an incompatible interface will fail.
     */
    static async describeAvailableEndpoints() {
        return RpcRegistry_1.RpcRegistry.instance.describeAvailableEndpoints();
    }
}
exports.RpcManager = RpcManager;


/***/ }),

/***/ "./lib/SpatialClassificationProps.js":
/*!*******************************************!*\
  !*** ./lib/SpatialClassificationProps.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Geometry may be classified by its spatial location.  This is typically used to classify reality models.
 * A volume classifier classifies on all space within a closed mesh.  A planar classifier classifies within a
 * planar region swept perpendicular to its plane.
 * @beta
 */
var SpatialClassificationProps;
(function (SpatialClassificationProps) {
    /** Classification Type
     * @beta
     */
    let Type;
    (function (Type) {
        Type[Type["Planar"] = 0] = "Planar";
        Type[Type["Volume"] = 1] = "Volume";
    })(Type = SpatialClassificationProps.Type || (SpatialClassificationProps.Type = {}));
    /** Display modes
     * @beta
     */
    let Display;
    (function (Display) {
        /** If off, geometry is omitted (invisible) */
        Display[Display["Off"] = 0] = "Off";
        /** If on geometry is displayed without alteration */
        Display[Display["On"] = 1] = "On";
        /** Dimmed geometry is darkened. */
        Display[Display["Dimmed"] = 2] = "Dimmed";
        /** Display tinted to hilite color */
        Display[Display["Hilite"] = 3] = "Hilite";
        /** Display with the classifier color */
        Display[Display["ElementColor"] = 4] = "ElementColor";
    })(Display = SpatialClassificationProps.Display || (SpatialClassificationProps.Display = {}));
    /** Flags
     * @beta
     */
    class Flags {
        constructor(inside = Display.ElementColor, outside = Display.Dimmed) {
            this.inside = Display.ElementColor;
            this.outside = Display.Dimmed;
            this.selected = Display.Hilite;
            this.type = 0; // Not currently implemented
            this.inside = inside;
            this.outside = outside;
        }
    }
    SpatialClassificationProps.Flags = Flags;
    /** Properties describe a single application of a classifier to a model.
     * @beta
     */
    class Properties {
        constructor(props) {
            this.name = props.name;
            this.modelId = props.modelId;
            this.expand = props.expand;
            this.flags = props.flags ? props.flags : new Flags();
            this.isActive = props.isActive;
        }
    }
    SpatialClassificationProps.Properties = Properties;
})(SpatialClassificationProps = exports.SpatialClassificationProps || (exports.SpatialClassificationProps = {}));


/***/ }),

/***/ "./lib/SubCategoryAppearance.js":
/*!**************************************!*\
  !*** ./lib/SubCategoryAppearance.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Views */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const ColorDef_1 = __webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js");
/** Parameters that define the way geometry on a [[SubCategory]] appears.
 * SubCategoryAppearance describes the intrinsic appearance of geometry belonging to that SubCategory, independent of a particular [[ViewState]].
 * Aspects of a SubCategory's appearance can be overridden in the context of a particular [[ViewState]] through the use of [[SubCategoryOverride]s.
 * @public
 */
class SubCategoryAppearance {
    constructor(props) {
        if (!props) {
            this.color = ColorDef_1.ColorDef.black;
            this.weight = 0;
            this.priority = 0;
            this.transparency = 0;
            this.invisible = this.dontPlot = this.dontSnap = this.dontLocate = false;
            this.styleId = bentleyjs_core_1.Id64.invalid;
            this.materialId = bentleyjs_core_1.Id64.invalid;
            return;
        }
        this.invisible = bentleyjs_core_1.JsonUtils.asBool(props.invisible);
        this.dontSnap = bentleyjs_core_1.JsonUtils.asBool(props.dontSnap);
        this.dontLocate = bentleyjs_core_1.JsonUtils.asBool(props.dontLocate);
        this.dontPlot = bentleyjs_core_1.JsonUtils.asBool(props.dontPlot);
        this.color = ColorDef_1.ColorDef.fromJSON(props.color);
        this.weight = bentleyjs_core_1.JsonUtils.asInt(props.weight);
        this.styleId = bentleyjs_core_1.Id64.fromJSON(props.style);
        this.priority = bentleyjs_core_1.JsonUtils.asInt(props.priority);
        this.materialId = bentleyjs_core_1.Id64.fromJSON(props.material);
        this.transparency = bentleyjs_core_1.JsonUtils.asInt(props.transp);
    }
    equals(other) {
        return this.invisible === other.invisible &&
            this.dontPlot === other.dontPlot &&
            this.dontSnap === other.dontSnap &&
            this.dontLocate === other.dontLocate &&
            this.color.equals(other.color) &&
            this.weight === other.weight &&
            this.priority === other.priority &&
            this.styleId === other.styleId &&
            this.materialId === other.materialId &&
            this.transparency === other.transparency;
    }
    /** @internal */
    toJSON() {
        const val = { color: this.color.toJSON() };
        if (this.invisible)
            val.invisible = true;
        if (this.dontPlot)
            val.dontPlot = true;
        if (this.dontSnap)
            val.dontSnap = true;
        if (this.dontLocate)
            val.dontLocate = true;
        if (0 !== this.weight)
            val.weight = this.weight;
        if (0 !== this.priority)
            val.priority = this.priority;
        if (bentleyjs_core_1.Id64.isValid(this.styleId))
            val.style = this.styleId;
        if (bentleyjs_core_1.Id64.isValid(this.materialId))
            val.material = this.materialId;
        if (0.0 !== this.transparency)
            val.transp = this.transparency;
        return val;
    }
    clone() { return new SubCategoryAppearance(this.toJSON()); }
}
SubCategoryAppearance.defaults = new SubCategoryAppearance();
exports.SubCategoryAppearance = SubCategoryAppearance;
/** Overrides selected aspects of a [[SubCategoryAppearance]] in the context of a [[ViewState]].
 * When determining how geometry belonging to a [[SubCategory]] will appear when drawn within a view:
 *  1. The base [[SubCategoryAppearance]] associated with that subcategory is obtained.
 *  2. The [[SubCategoryOverride]] associated with that subcategory in the [[ViewState]] is obtained.
 *  3. Any aspects of the appearance overridden by the SubCategoryOverride are replaced with the values from the SubCategoryOverride.
 * An aspect is overridden by virtue of not being set to "undefined" in the SubCategoryOverride.
 * @see [[ViewState.overrideSubCategory]]
 * @public
 */
class SubCategoryOverride {
    constructor(props) {
        if (undefined !== props.invisible)
            this.invisible = bentleyjs_core_1.JsonUtils.asBool(props.invisible);
        if (undefined !== props.color)
            this.color = ColorDef_1.ColorDef.fromJSON(props.color);
        if (undefined !== props.weight)
            this.weight = bentleyjs_core_1.JsonUtils.asInt(props.weight);
        if (undefined !== props.style)
            this.style = bentleyjs_core_1.Id64.fromJSON(props.style);
        if (undefined !== props.material)
            this.material = bentleyjs_core_1.Id64.fromJSON(props.material);
        if (undefined !== props.priority)
            this.priority = bentleyjs_core_1.JsonUtils.asInt(props.priority);
        if (undefined !== props.transp)
            this.transparency = bentleyjs_core_1.JsonUtils.asDouble(props.transp);
    }
    /** Returns true if any aspect of the appearance is overridden (i.e., if any member is not undefined). */
    get anyOverridden() {
        return undefined !== this.invisible || undefined !== this.color || undefined !== this.weight || undefined !== this.style || undefined !== this.priority || undefined !== this.material || undefined !== this.transparency;
    }
    /** Returns a SubCategoryAppearance overridden to match the properties defined by this SubCategoryOverride. */
    override(appearance) {
        if (!this.anyOverridden)
            return appearance;
        const props = appearance.toJSON();
        const ovrProps = this.toJSON();
        if (undefined !== ovrProps.invisible)
            props.invisible = ovrProps.invisible;
        if (undefined !== ovrProps.weight)
            props.weight = ovrProps.weight;
        if (undefined !== ovrProps.style)
            props.style = ovrProps.style;
        if (undefined !== ovrProps.material)
            props.material = ovrProps.material;
        if (undefined !== ovrProps.priority)
            props.priority = ovrProps.priority;
        if (undefined !== ovrProps.transp)
            props.transp = ovrProps.transp;
        if (undefined !== ovrProps.color)
            props.color = ovrProps.color;
        return new SubCategoryAppearance(props);
    }
    /** Convert this SubCategoryOverride to a JSON object
     * @internal
     */
    toJSON() {
        const val = {
            invisible: this.invisible,
            weight: this.weight,
            style: this.style,
            material: this.material,
            priority: this.priority,
            transp: this.transparency,
        };
        if (undefined !== this.color)
            val.color = this.color.toJSON();
        return val;
    }
    /** Perform equality comparison against another SubCategoryOverride. */
    equals(other) {
        if (this.invisible !== other.invisible || this.weight !== other.weight || this.style !== other.style
            || this.priority !== other.priority || this.material !== other.material || this.transparency !== other.transparency)
            return false;
        if (undefined !== this.color && undefined !== other.color)
            return this.color.tbgr === other.color.tbgr;
        else
            return undefined === this.color && undefined === other.color;
    }
    /** Create a new SubCategoryOverride from a JSON object */
    static fromJSON(json) {
        return undefined !== json ? new SubCategoryOverride(json) : this.defaults;
    }
}
/** A default SubCategoryOverride which overrides nothing. */
SubCategoryOverride.defaults = new SubCategoryOverride({});
exports.SubCategoryOverride = SubCategoryOverride;
/** The *rank* for a Category
 * @public
 */
var Rank;
(function (Rank) {
    /** This category is predefined by the system */
    Rank[Rank["System"] = 0] = "System";
    /** This category is defined by a schema. Elements in this category are not recognized by system classes. */
    Rank[Rank["Domain"] = 1] = "Domain";
    /** This category is defined by an application. Elements in this category are not recognized by system and schema classes. */
    Rank[Rank["Application"] = 2] = "Application";
    /** This category is defined by a user. Elements in this category are not recognized by system, schema, and application classes. */
    Rank[Rank["User"] = 3] = "User";
})(Rank = exports.Rank || (exports.Rank = {}));


/***/ }),

/***/ "./lib/TextureProps.js":
/*!*****************************!*\
  !*** ./lib/TextureProps.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module WireFormats */
Object.defineProperty(exports, "__esModule", { value: true });
/** @beta */
var TextureFlags;
(function (TextureFlags) {
    TextureFlags[TextureFlags["None"] = 0] = "None";
})(TextureFlags = exports.TextureFlags || (exports.TextureFlags = {}));


/***/ }),

/***/ "./lib/ViewProps.js":
/*!**************************!*\
  !*** ./lib/ViewProps.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Views */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const ColorDef_1 = __webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js");
const Render_1 = __webpack_require__(/*! ./Render */ "./lib/Render.js");
const SubCategoryAppearance_1 = __webpack_require__(/*! ./SubCategoryAppearance */ "./lib/SubCategoryAppearance.js");
/** Describes the type of background map displayed by a [[DisplayStyle]]
 * @see [[BackgroundMapProps]]
 * @see [[DisplayStyleSettingsProps]]
 * @public
 */
var BackgroundMapType;
(function (BackgroundMapType) {
    BackgroundMapType[BackgroundMapType["Street"] = 1] = "Street";
    BackgroundMapType[BackgroundMapType["Aerial"] = 2] = "Aerial";
    BackgroundMapType[BackgroundMapType["Hybrid"] = 3] = "Hybrid";
})(BackgroundMapType = exports.BackgroundMapType || (exports.BackgroundMapType = {}));
/** Enumerates the supported types of [SkyBox]($frontend) images.
 * @public
 */
var SkyBoxImageType;
(function (SkyBoxImageType) {
    SkyBoxImageType[SkyBoxImageType["None"] = 0] = "None";
    /** A single image mapped to the surface of a sphere. @see [[SkySphere]] */
    SkyBoxImageType[SkyBoxImageType["Spherical"] = 1] = "Spherical";
    /** 6 images mapped to the faces of a cube. @see [[SkyCube]] */
    SkyBoxImageType[SkyBoxImageType["Cube"] = 2] = "Cube";
    /** @internal not yet supported */
    SkyBoxImageType[SkyBoxImageType["Cylindrical"] = 3] = "Cylindrical";
})(SkyBoxImageType = exports.SkyBoxImageType || (exports.SkyBoxImageType = {}));
/** Provides access to the settings defined by a [[DisplayStyle]] or [[DisplayStyleState]], and ensures that
 * the style's JSON properties are kept in sync.
 * @beta
 */
class DisplayStyleSettings {
    /** Construct a new DisplayStyleSettings from an [[ElementProps.jsonProperties]].
     * @param jsonProperties An object with an optional `styles` property containing a display style's settings.
     * @note When the `DisplayStyleSetting`'s properties are modified by public setters, the `jsonProperties`'s `styles` object will be updated to reflect the change.
     * @note If `jsonProperties` contains no `styles` member, one will be added as an empty object.
     * @note Generally there is no reason to create an object of this type directly; a [[DisplayStyle]] or [[DisplayStyleState]] constructs one as part of its own construction.
     */
    constructor(jsonProperties) {
        this._subCategoryOverrides = new Map();
        this._excludedElements = new Set();
        if (undefined === jsonProperties.styles)
            jsonProperties.styles = {};
        this._json = jsonProperties.styles;
        this._viewFlags = Render_1.ViewFlags.fromJSON(this._json.viewflags);
        this._background = ColorDef_1.ColorDef.fromJSON(this._json.backgroundColor);
        this._monochrome = undefined !== this._json.monochromeColor ? ColorDef_1.ColorDef.fromJSON(this._json.monochromeColor) : ColorDef_1.ColorDef.white.clone();
        const ovrsArray = bentleyjs_core_1.JsonUtils.asArray(this._json.subCategoryOvr);
        if (undefined !== ovrsArray) {
            for (const ovrJson of ovrsArray) {
                const subCatId = bentleyjs_core_1.Id64.fromJSON(ovrJson.subCategory);
                if (bentleyjs_core_1.Id64.isValid(subCatId)) {
                    const subCatOvr = SubCategoryAppearance_1.SubCategoryOverride.fromJSON(ovrJson);
                    if (subCatOvr.anyOverridden)
                        this.changeSubCategoryOverride(subCatId, false, subCatOvr);
                }
            }
        }
        const exElemArray = bentleyjs_core_1.JsonUtils.asArray(this._json.excludedElements);
        if (undefined !== exElemArray) {
            for (const exElemStr of exElemArray) {
                const exElem = bentleyjs_core_1.Id64.fromJSON(exElemStr);
                if (bentleyjs_core_1.Id64.isValid(exElem)) {
                    this._excludedElements.add(exElem);
                }
            }
        }
    }
    /** The ViewFlags associated with the display style.
     * @note If the style is associated with a [[ViewState]] attached to a [[Viewport]], use [[ViewState.viewFlags]] to modify the ViewFlags to ensure
     * the changes are promptly visible on the screen.
     * @note Do not modify the ViewFlags in place. Clone them and pass the clone to the setter.
     */
    get viewFlags() { return this._viewFlags; }
    set viewFlags(flags) {
        flags.clone(this._viewFlags);
        this._json.viewflags = flags.toJSON();
    }
    /** The background color.
     * @note Do not modify the color in place. Clone it and pass the clone to the setter.
     */
    get backgroundColor() { return this._background; }
    set backgroundColor(color) {
        this._background.setFrom(color);
        this._json.backgroundColor = color.toJSON();
    }
    /** The color used to draw geometry in monochrome mode.
     * @note Do not modify the color in place. Clone it and pass the clone to the setter.
     * @see [[ViewFlags.monochrome]] for enabling monochrome mode.
     */
    get monochromeColor() { return this._monochrome; }
    set monochromeColor(color) {
        this._monochrome.setFrom(color);
        this._json.monochromeColor = color.toJSON();
    }
    /** @alpha */
    get backgroundMap() {
        const props = this._json.backgroundMap;
        return undefined !== props ? props : {};
    }
    /** @alpha */
    set backgroundMap(map) { this._json.backgroundMap = map; }
    /** Customize the way geometry belonging to a [[SubCategory]] is drawn by this display style.
     * @param id The ID of the SubCategory whose appearance is to be overridden.
     * @param ovr The overrides to apply to the [[SubCategoryAppearance]].
     * @note If this style is associated with a [[ViewState]] attached to a [[Viewport]], use [[ViewState.overrideSubCategory]] to ensure
     * the changes are promptly visible on the screen.
     * @see [[dropSubCategoryOverride]]
     */
    overrideSubCategory(id, ovr) { this.changeSubCategoryOverride(id, true, ovr); }
    /** Remove any [[SubCategoryOverride]] applied to a [[SubCategoryAppearance]] by this style.
     * @param id The ID of the [[SubCategory]].
     * @note If this style is associated with a [[ViewState]] attached to a [[Viewport]], use [[ViewState.dropSubCategoryOverride]] to ensure
     * the changes are promptly visible on the screen.
     * @see [[overrideSubCategory]]
     */
    dropSubCategoryOverride(id) { this.changeSubCategoryOverride(id, true); }
    /** Obtain the overrides applied to a [[SubCategoryAppearance]] by this style.
     * @param id The ID of the [[SubCategory]].
     * @returns The corresponding SubCategoryOverride, or undefined if the SubCategory's appearance is not overridden.
     * @see [[overrideSubCategory]]
     */
    getSubCategoryOverride(id) { return this._subCategoryOverrides.get(id); }
    /** Returns true if an [[SubCategoryOverride]s are defined by this style. */
    get hasSubCategoryOverride() { return this._subCategoryOverrides.size > 0; }
    /** The set of elements that the display style will exclude.
     * @returns The set of excluded elements.
     */
    get excludedElements() { return this._excludedElements; }
    /** Add an element to the set of excluded elements defined by the display style.
     * @param id The ID of the element to be excluded.
     */
    addExcludedElements(id) {
        if (bentleyjs_core_1.Id64.isValid(id)) {
            if (undefined === this._json.excludedElements)
                this._json.excludedElements = [];
            this._json.excludedElements.push(id);
            this._excludedElements.add(id);
        }
    }
    /** Remove an element from the set of excluded elements defined by the display style.
     * @param id The ID of the element to be removed from the set of excluded elements.
     */
    dropExcludedElement(id) {
        if (this._json.excludedElements !== undefined) {
            const index = this._json.excludedElements.indexOf(id);
            if (index > -1)
                this._json.excludedElements.splice(index, 1);
            if (this._json.excludedElements.length === 0)
                this._json.excludedElements = undefined;
        }
        this._excludedElements.delete(id);
    }
    /** @internal */
    toJSON() { return this._json; }
    findIndexOfSubCategoryOverrideInJSON(id, allowAppend) {
        const ovrsArray = bentleyjs_core_1.JsonUtils.asArray(this._json.subCategoryOvr);
        if (undefined === ovrsArray) {
            if (allowAppend) {
                this._json.subCategoryOvr = [];
                return 0;
            }
            else {
                return -1;
            }
        }
        else {
            for (let i = 0; i < ovrsArray.length; i++) {
                if (ovrsArray[i].subCategory === id)
                    return i;
            }
            return allowAppend ? ovrsArray.length : -1;
        }
    }
    changeSubCategoryOverride(id, updateJson, ovr) {
        if (undefined === ovr) {
            // undefined => drop the override if present.
            this._subCategoryOverrides.delete(id);
            if (updateJson) {
                const index = this.findIndexOfSubCategoryOverrideInJSON(id, false);
                if (-1 !== index)
                    this._json.subCategoryOvr.splice(index, 1);
            }
        }
        else {
            // add override, or update if present.
            this._subCategoryOverrides.set(id, ovr);
            if (updateJson) {
                const index = this.findIndexOfSubCategoryOverrideInJSON(id, true);
                this._json.subCategoryOvr[index] = ovr.toJSON();
                this._json.subCategoryOvr[index].subCategory = id;
            }
        }
    }
    /** @internal */
    equalSubCategoryOverrides(other) {
        if (this._subCategoryOverrides.size !== other._subCategoryOverrides.size)
            return false;
        for (const [key, value] of this._subCategoryOverrides.entries()) {
            const otherValue = other._subCategoryOverrides.get(key);
            if (undefined === otherValue || !value.equals(otherValue))
                return false;
        }
        return true;
    }
}
exports.DisplayStyleSettings = DisplayStyleSettings;
/** Provides access to the settings defined by a [[DisplayStyle3d]] or [[DisplayStyle3dState]], and ensures that
 * the style's JSON properties are kept in sync.
 * @beta
 */
class DisplayStyle3dSettings extends DisplayStyleSettings {
    get _json3d() { return this._json; }
    constructor(jsonProperties) {
        super(jsonProperties);
        this._hline = Render_1.HiddenLine.Settings.fromJSON(this._json3d.hline);
        this._ao = Render_1.AmbientOcclusion.Settings.fromJSON(this._json3d.ao);
        this._solarShadows = Render_1.SolarShadows.Settings.fromJSON(this._json3d.solarShadows);
    }
    /** @internal */
    toJSON() { return this._json3d; }
    /** The settings that control how visible and hidden edges are displayed.
     * @note Do not modify the settings in place. Clone them and pass the clone to the setter.
     */
    get hiddenLineSettings() { return this._hline; }
    set hiddenLineSettings(hline) {
        this._hline = hline;
        this._json3d.hline = hline.toJSON();
    }
    /** The settings that control how ambient occlusion is displayed.
     * @note Do not modify the settings in place. Clone them and pass the clone to the setter.
     */
    get ambientOcclusionSettings() { return this._ao; }
    set ambientOcclusionSettings(ao) {
        this._ao = ao;
        this._json3d.ao = ao.toJSON();
    }
    /** The settings that control how solar shadows are displayed.
     * @note Do not modify the settings in place. Clone them and pass the clone to the setter.
     */
    get solarShadowsSettings() { return this._solarShadows; }
    set solarShadowsSettings(solarShadows) {
        this._solarShadows = solarShadows;
        this._json3d.solarShadows = solarShadows.toJSON();
    }
    /** @internal */
    get environment() {
        const env = this._json3d.environment;
        return undefined !== env ? env : {};
    }
    /** @internal */
    set environment(environment) { this._json3d.environment = environment; }
}
exports.DisplayStyle3dSettings = DisplayStyle3dSettings;


/***/ }),

/***/ "./lib/geometry/AreaPattern.js":
/*!*************************************!*\
  !*** ./lib/geometry/AreaPattern.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Geometry */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const ColorDef_1 = __webpack_require__(/*! ../ColorDef */ "./lib/ColorDef.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** @public */
var AreaPattern;
(function (AreaPattern) {
    class HatchDefLine {
        constructor(json) {
            this.angle = json.angle ? geometry_core_1.Angle.fromJSON(json.angle) : undefined;
            this.through = json.through ? geometry_core_1.Point2d.fromJSON(json.through) : undefined;
            this.offset = json.offset ? geometry_core_1.Point2d.fromJSON(json.offset) : undefined;
            if (json.dashes) {
                const dashes = [];
                json.dashes.forEach((dash) => dashes.push(dash));
                this.dashes = dashes;
            }
        }
    }
    AreaPattern.HatchDefLine = HatchDefLine;
    /** Defines a hatch, cross hatch, or area pattern. */
    class Params {
        /** create an AreaPattern.Params from a json object. */
        static fromJSON(json) {
            const result = new Params();
            if (!json)
                return result;
            result.origin = json.origin ? geometry_core_1.Point3d.fromJSON(json.origin) : undefined;
            result.rotation = json.rotation ? geometry_core_1.YawPitchRollAngles.fromJSON(json.rotation) : undefined;
            result.space1 = json.space1;
            result.space2 = json.space2;
            result.angle1 = json.angle1 ? geometry_core_1.Angle.fromJSON(json.angle1) : undefined;
            result.angle2 = json.angle2 ? geometry_core_1.Angle.fromJSON(json.angle2) : undefined;
            result.scale = json.scale;
            result.color = json.color ? ColorDef_1.ColorDef.fromJSON(json.color) : undefined;
            result.weight = json.weight;
            result.invisibleBoundary = json.invisibleBoundary;
            result.snappable = json.snappable;
            result.symbolId = json.symbolId ? bentleyjs_core_1.Id64.fromJSON(json.symbolId) : undefined;
            if (!json.defLines)
                return result;
            const defLines = [];
            json.defLines.forEach((defLine) => defLines.push(new HatchDefLine(defLine)));
            result.defLines = defLines;
            return result;
        }
        clone() {
            return Params.fromJSON(this);
        }
        equals(other) {
            if (this === other)
                return true; // Same pointer
            if (this.scale !== other.scale ||
                this.space1 !== other.space1 ||
                this.space2 !== other.space2 ||
                this.weight !== other.weight ||
                this.invisibleBoundary !== other.invisibleBoundary ||
                this.snappable !== other.snappable)
                return false;
            if ((this.color === undefined) !== (other.color === undefined))
                return false;
            if (this.color && !this.color.equals(other.color))
                return false;
            if ((this.angle1 === undefined) !== (other.angle1 === undefined))
                return false;
            if (this.angle1 && !this.angle1.isAlmostEqualNoPeriodShift(other.angle1))
                return false;
            if ((this.angle2 === undefined) !== (other.angle2 === undefined))
                return false;
            if (this.angle2 && !this.angle2.isAlmostEqualNoPeriodShift(other.angle2))
                return false;
            if ((this.origin === undefined) !== (other.origin === undefined))
                return false;
            if (this.origin && !this.origin.isAlmostEqual(other.origin))
                return false;
            if ((this.rotation === undefined) !== (other.rotation === undefined))
                return false;
            if (this.rotation && !this.rotation.isAlmostEqual(other.rotation))
                return false;
            if ((this.symbolId === undefined) !== (other.symbolId === undefined))
                return false;
            if (this.symbolId && !(this.symbolId === other.symbolId))
                return false;
            if ((this.defLines === undefined) !== (other.defLines === undefined))
                return false;
            if (this.defLines) {
                if (this.defLines.length !== other.defLines.length)
                    return false;
                for (let i = 0; i < this.defLines.length; ++i) {
                    const otherLine = other.defLines[i];
                    const thisLine = this.defLines[i];
                    if ((thisLine.angle === undefined) !== (otherLine.angle === undefined))
                        return false;
                    if (thisLine.angle && !thisLine.angle.isAlmostEqualNoPeriodShift(otherLine.angle))
                        return false;
                    if ((thisLine.through === undefined) !== (otherLine.through === undefined))
                        return false;
                    if (thisLine.through && !thisLine.through.isAlmostEqual(otherLine.through))
                        return false;
                    if ((thisLine.offset === undefined) !== (otherLine.offset === undefined))
                        return false;
                    if (thisLine.offset && !thisLine.offset.isAlmostEqual(otherLine.offset))
                        return false;
                    if ((thisLine.dashes === undefined) !== (otherLine.dashes === undefined))
                        return false;
                    if (thisLine.dashes && thisLine.dashes.length !== otherLine.dashes.length)
                        return false;
                    if (thisLine.dashes) {
                        for (let dash = 0; dash < thisLine.dashes.length; ++dash) {
                            if (!geometry_core_1.Geometry.isSameCoordinate(thisLine.dashes[dash], otherLine.dashes[dash]))
                                return false;
                        }
                    }
                }
            }
            return true;
        }
        static transformPatternSpace(transform, oldSpace, patRot, angle) {
            let tmpRot;
            if (angle && !angle.isAlmostZero) {
                const yprTriple = new geometry_core_1.YawPitchRollAngles(angle);
                const angRot = yprTriple.toMatrix3d();
                tmpRot = patRot.multiplyMatrixMatrix(angRot);
            }
            else {
                tmpRot = patRot;
            }
            const yDir = tmpRot.getColumn(1);
            yDir.scale(oldSpace, yDir);
            transform.multiplyVector(yDir, yDir);
            return yDir.magnitude();
        }
        static getTransformPatternScale(transform) {
            const xDir = transform.matrix.getColumn(0);
            const mag = xDir.magnitude();
            return (mag > 1.0e-10) ? mag : 1.0;
        }
        applyTransform(transform) {
            if (transform.isIdentity)
                return true;
            const origin = this.origin ? this.origin : geometry_core_1.Point3d.createZero();
            const rMatrix = this.rotation ? this.rotation.toMatrix3d() : geometry_core_1.Matrix3d.createIdentity();
            if (this.symbolId !== undefined) {
                this.space1 = Params.transformPatternSpace(transform, this.space1 ? this.space1 : 0.0, rMatrix, this.angle1);
                this.space2 = Params.transformPatternSpace(transform, this.space2 ? this.space2 : 0.0, rMatrix, this.angle2);
                const scale = Params.getTransformPatternScale(transform);
                this.scale = this.scale ? this.scale *= scale : scale;
            }
            else if (this.defLines) {
                const scale = Params.getTransformPatternScale(transform);
                if (!geometry_core_1.Geometry.isSameCoordinate(scale, 1.0)) {
                    this.scale = this.scale ? this.scale *= scale : scale;
                    for (const line of this.defLines) {
                        if (line.through) {
                            line.through.x *= scale;
                            line.through.y *= scale;
                        }
                        if (line.offset) {
                            line.offset.x *= scale;
                            line.offset.y *= scale;
                        }
                        if (line.dashes) {
                            for (let iDash = 0; iDash < line.dashes.length; iDash++)
                                line.dashes[iDash] *= scale;
                        }
                    }
                }
            }
            else {
                this.space1 = Params.transformPatternSpace(transform, this.space1 ? this.space1 : 0.0, rMatrix, this.angle1);
                if (this.space2 && 0 !== this.space2)
                    this.space2 = Params.transformPatternSpace(transform, this.space2, rMatrix, this.angle2);
            }
            transform.multiplyPoint3d(origin);
            rMatrix.multiplyMatrixMatrix(transform.matrix, rMatrix);
            const normalized = geometry_core_1.Matrix3d.createRigidFromMatrix3d(rMatrix);
            if (!normalized)
                return false;
            const newRotation = geometry_core_1.YawPitchRollAngles.createFromMatrix3d(normalized);
            if (undefined === newRotation)
                return false;
            this.origin = origin;
            this.rotation = newRotation;
            return true;
        }
    }
    AreaPattern.Params = Params;
})(AreaPattern = exports.AreaPattern || (exports.AreaPattern = {}));


/***/ }),

/***/ "./lib/geometry/Cartographic.js":
/*!**************************************!*\
  !*** ./lib/geometry/Cartographic.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Geometry */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** A position on the earth defined by longitude, latitude, and height above the [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System) ellipsoid.
 * @public
 */
class Cartographic {
    /**
     * @param longitude longitude, in radians.
     * @param latitude latitude, in radians.
     * @param height The height, in meters, above the ellipsoid.
     */
    constructor(longitude = 0, latitude = 0, height = 0) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.height = height;
    }
    /** Create a new Cartographic from longitude and latitude specified in radians.
     * @param longitude longitude, in radians.
     * @param latitude latitude, in radians.
     * @param height The height, in meters, above the ellipsoid.
     * @param result The object onto which to store the result.
     */
    static fromRadians(longitude, latitude, height = 0, result) {
        if (!result)
            return new Cartographic(longitude, latitude, height);
        result.longitude = longitude;
        result.latitude = latitude;
        result.height = height;
        return result;
    }
    /** Create a new Cartographic from longitude and latitude specified in degrees. The values in the resulting object will be in radians.
     * @param longitude longitude, in degrees.
     * @param latitude latitude, in degrees.
     * @param height The height, in meters, above the ellipsoid.
     * @param result The object onto which to store the result.
     */
    static fromDegrees(longitude, latitude, height, result) {
        return Cartographic.fromRadians(geometry_core_1.Angle.degreesToRadians(longitude), geometry_core_1.Angle.degreesToRadians(latitude), height, result);
    }
    /** Create a new Cartographic from longitude and latitude in [Angle]($geometry)s. The values in the resulting object will be in radians.
     * @param longitude longitude.
     * @param latitude latitude.
     * @param height The height, in meters, above the ellipsoid.
     * @param result The object into which to store the result (optional)
     */
    static fromAngles(longitude, latitude, height, result) {
        return Cartographic.fromRadians(longitude.radians, latitude.radians, height, result);
    }
    /** Creates a new Cartographic from an [ECEF](https://en.wikipedia.org/wiki/ECEF) position.
     * @param cartesian The position, in ECEF, to convert to cartographic representation.
     * @param [result] The object onto which to store the result.
     * @returns The modified result parameter, new Cartographic instance if none was provided, or undefined if the cartesian is at the center of the ellipsoid.
     */
    static fromEcef(cartesian, result) {
        const oneOverRadii = Cartographic._wgs84OneOverRadii;
        const oneOverRadiiSquared = Cartographic._wgs84OneOverRadiiSquared;
        const centerToleranceSquared = Cartographic._wgs84CenterToleranceSquared;
        const p = Cartographic.scaleToGeodeticSurface(cartesian, oneOverRadii, oneOverRadiiSquared, centerToleranceSquared, Cartographic._cartesianToCartographicP);
        if (!p)
            return undefined;
        const n = Cartographic._cartesianToCartographicN;
        Cartographic.multiplyComponents(p, oneOverRadiiSquared, n);
        Cartographic.normalize(n, n);
        const h = p.vectorTo(cartesian, Cartographic._cartesianToCartographicH);
        const longitude = Math.atan2(n.y, n.x);
        const latitude = Math.asin(n.z);
        const height = Math.sign(h.dotProduct(cartesian)) * h.magnitude();
        if (!result)
            return new Cartographic(longitude, latitude, height);
        result.longitude = longitude;
        result.latitude = latitude;
        result.height = height;
        return result;
    }
    /** Duplicates a Cartographic. */
    clone(result) {
        if (!result)
            return new Cartographic(this.longitude, this.latitude, this.height);
        result.longitude = this.longitude;
        result.latitude = this.latitude;
        result.height = this.height;
        return result;
    }
    /** Return true if this Cartographic is the same as right */
    equals(right) {
        return (this === right) ||
            ((this.longitude === right.longitude) &&
                (this.latitude === right.latitude) &&
                (this.height === right.height));
    }
    /** Compares this Cartographic component-wise and returns true if they are within the provided epsilon, */
    equalsEpsilon(right, epsilon) {
        return (this === right) ||
            ((Math.abs(this.longitude - right.longitude) <= epsilon) &&
                (Math.abs(this.latitude - right.latitude) <= epsilon) &&
                (Math.abs(this.height - right.height) <= epsilon));
    }
    static normalize(cartesian, result) {
        const magnitude = cartesian.magnitude();
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        result.z = cartesian.z / magnitude;
    }
    static multiplyComponents(left, right, result) {
        result.x = left.x * right.x;
        result.y = left.y * right.y;
        result.z = left.z * right.z;
    }
    static scalePoint(cartesian, scalar, result) {
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        result.z = cartesian.z * scalar;
    }
    static addPoints(left, right, result) {
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        result.z = left.z + right.z;
    }
    /** Create a string representing this cartographic in the format '(longitude, latitude, height)'. */
    toString() { return "(" + this.longitude + ", " + this.latitude + ", " + this.height + ")"; }
    static scaleToGeodeticSurface(cartesian, oneOverRadii, oneOverRadiiSquared, centerToleranceSquared, result) {
        const positionX = cartesian.x;
        const positionY = cartesian.y;
        const positionZ = cartesian.z;
        const oneOverRadiiX = oneOverRadii.x;
        const oneOverRadiiY = oneOverRadii.y;
        const oneOverRadiiZ = oneOverRadii.z;
        const x2 = positionX * positionX * oneOverRadiiX * oneOverRadiiX;
        const y2 = positionY * positionY * oneOverRadiiY * oneOverRadiiY;
        const z2 = positionZ * positionZ * oneOverRadiiZ * oneOverRadiiZ;
        // Compute the squared ellipsoid norm.
        const squaredNorm = x2 + y2 + z2;
        const ratio = Math.sqrt(1.0 / squaredNorm);
        // As an initial approximation, assume that the radial intersection is the projection point.
        const intersection = Cartographic._scaleToGeodeticSurfaceIntersection;
        Cartographic.scalePoint(cartesian, ratio, intersection);
        // If the position is near the center, the iteration will not converge.
        if (squaredNorm < centerToleranceSquared) {
            return !isFinite(ratio) ? undefined : geometry_core_1.Point3d.createFrom(intersection, result);
        }
        const oneOverRadiiSquaredX = oneOverRadiiSquared.x;
        const oneOverRadiiSquaredY = oneOverRadiiSquared.y;
        const oneOverRadiiSquaredZ = oneOverRadiiSquared.z;
        // Use the gradient at the intersection point in place of the true unit normal.
        // The difference in magnitude will be absorbed in the multiplier.
        const gradient = Cartographic._scaleToGeodeticSurfaceGradient;
        gradient.x = intersection.x * oneOverRadiiSquaredX * 2.0;
        gradient.y = intersection.y * oneOverRadiiSquaredY * 2.0;
        gradient.z = intersection.z * oneOverRadiiSquaredZ * 2.0;
        // Compute the initial guess at the normal vector multiplier, lambda.
        let lambda = (1.0 - ratio) * cartesian.magnitude() / (0.5 * gradient.magnitude());
        let correction = 0.0;
        let func;
        let denominator;
        let xMultiplier;
        let yMultiplier;
        let zMultiplier;
        let xMultiplier2;
        let yMultiplier2;
        let zMultiplier2;
        let xMultiplier3;
        let yMultiplier3;
        let zMultiplier3;
        do {
            lambda -= correction;
            xMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredX);
            yMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredY);
            zMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredZ);
            xMultiplier2 = xMultiplier * xMultiplier;
            yMultiplier2 = yMultiplier * yMultiplier;
            zMultiplier2 = zMultiplier * zMultiplier;
            xMultiplier3 = xMultiplier2 * xMultiplier;
            yMultiplier3 = yMultiplier2 * yMultiplier;
            zMultiplier3 = zMultiplier2 * zMultiplier;
            func = x2 * xMultiplier2 + y2 * yMultiplier2 + z2 * zMultiplier2 - 1.0;
            // "denominator" here refers to the use of this expression in the velocity and acceleration
            // computations in the sections to follow.
            denominator = x2 * xMultiplier3 * oneOverRadiiSquaredX + y2 * yMultiplier3 * oneOverRadiiSquaredY + z2 * zMultiplier3 * oneOverRadiiSquaredZ;
            const derivative = -2.0 * denominator;
            correction = func / derivative;
        } while (Math.abs(func) > 0.01);
        if (!result)
            return new geometry_core_1.Point3d(positionX * xMultiplier, positionY * yMultiplier, positionZ * zMultiplier);
        result.x = positionX * xMultiplier;
        result.y = positionY * yMultiplier;
        result.z = positionZ * zMultiplier;
        return result;
    }
    /** Return an ECEF point from a Cartographic point */
    toEcef(result) {
        const cosLatitude = Math.cos(this.latitude);
        const scratchN = Cartographic._scratchN;
        const scratchK = Cartographic._scratchK;
        scratchN.x = cosLatitude * Math.cos(this.longitude);
        scratchN.y = cosLatitude * Math.sin(this.longitude);
        scratchN.z = Math.sin(this.latitude);
        Cartographic.normalize(scratchN, scratchN);
        Cartographic.multiplyComponents(Cartographic._wgs84RadiiSquared, scratchN, scratchK);
        const gamma = Math.sqrt(scratchN.dotProduct(scratchK));
        Cartographic.scalePoint(scratchK, 1.0 / gamma, scratchK);
        Cartographic.scalePoint(scratchN, this.height, scratchN);
        result = result ? result : new geometry_core_1.Point3d();
        Cartographic.addPoints(scratchK, scratchN, result);
        return result;
    }
}
Cartographic._cartesianToCartographicN = new geometry_core_1.Point3d();
Cartographic._cartesianToCartographicP = new geometry_core_1.Point3d();
Cartographic._cartesianToCartographicH = new geometry_core_1.Vector3d();
Cartographic._wgs84OneOverRadii = new geometry_core_1.Point3d(1.0 / 6378137.0, 1.0 / 6378137.0, 1.0 / 6356752.3142451793);
Cartographic._wgs84OneOverRadiiSquared = new geometry_core_1.Point3d(1.0 / (6378137.0 * 6378137.0), 1.0 / (6378137.0 * 6378137.0), 1.0 / (6356752.3142451793 * 6356752.3142451793));
Cartographic._wgs84RadiiSquared = new geometry_core_1.Point3d(6378137.0 * 6378137.0, 6378137.0 * 6378137.0, 6356752.3142451793 * 6356752.3142451793);
Cartographic._wgs84CenterToleranceSquared = 0.1;
Cartographic._scratchN = new geometry_core_1.Vector3d();
Cartographic._scratchK = new geometry_core_1.Vector3d();
Cartographic._scaleToGeodeticSurfaceIntersection = new geometry_core_1.Point3d();
Cartographic._scaleToGeodeticSurfaceGradient = new geometry_core_1.Point3d();
exports.Cartographic = Cartographic;
/** A cartographic range representing a rectangular region if low longitude/latitude > high then area crossing seam is indicated.
 * @public
 */
class CartographicRange {
    constructor(spatialRange, spatialToEcef) {
        // These following are used to preserve the min/max latitude and longitudes.
        // The longitudes are raw values and may cross over the -PI or 2PI boundaries.
        this._minLongitude = 0;
        this._maxLongitude = 0;
        this._minLatitude = 0;
        this._maxLatitude = 0;
        const ecefRange = spatialToEcef.multiplyRange(spatialRange);
        const low = Cartographic.fromEcef(ecefRange.low);
        const high = Cartographic.fromEcef(ecefRange.high);
        const longitudeRanges = [];
        this._minLongitude = Math.min(low.longitude, high.longitude), this._maxLongitude = Math.max(low.longitude, high.longitude);
        if (this._maxLongitude - this._minLongitude > geometry_core_1.Angle.piRadians) {
            longitudeRanges.push(geometry_core_1.Range1d.createXX(0.0, this._minLongitude));
            longitudeRanges.push(geometry_core_1.Range1d.createXX(this._maxLongitude, geometry_core_1.Angle.pi2Radians));
        }
        else {
            longitudeRanges.push(geometry_core_1.Range1d.createXX(this._minLongitude, this._maxLongitude));
        }
        this._ranges = [];
        for (const longitudeRange of longitudeRanges) {
            this._minLatitude = Math.min(low.latitude, high.latitude), this._maxLatitude = Math.max(low.latitude, high.latitude);
            if (this._maxLatitude - this._minLatitude > geometry_core_1.Angle.piOver2Radians) {
                this._ranges.push(geometry_core_1.Range2d.createXYXY(longitudeRange.low, 0.0, longitudeRange.high, this._minLatitude));
                this._ranges.push(geometry_core_1.Range2d.createXYXY(longitudeRange.low, this._maxLatitude, longitudeRange.high, geometry_core_1.Angle.piRadians));
            }
            else {
                this._ranges.push(geometry_core_1.Range2d.createXYXY(longitudeRange.low, this._minLatitude, longitudeRange.high, this._maxLatitude));
            }
        }
    }
    intersectsRange(other) {
        for (const range of this._ranges)
            for (const otherRange of other._ranges)
                if (range.intersectsRange(otherRange))
                    return true;
        return false;
    }
    /** This method returns the raw latitude / longitude for the range in a Range2d object.
     * The X value represents the longitude and the Y value the latitudes.
     * Y values are kept conscribed between -PI and +PI while
     * longitude values can be expressed in any range between -2PI to +2PI
     * given the minimum longitude is always smaller numerically than the maximum longitude.
     * Note that usually the longitudes are usually by convention in the range of -PI to PI except
     * for ranges that overlap the -PI/+PI frontier in which case either representation is acceptable.
     */
    getLongitudeLatitudeBoundingBox() {
        return geometry_core_1.Range2d.createXYXY(this._minLongitude, this._minLatitude, this._maxLongitude, this._maxLatitude);
    }
}
exports.CartographicRange = CartographicRange;


/***/ }),

/***/ "./lib/geometry/GeometryStream.js":
/*!****************************************!*\
  !*** ./lib/geometry/GeometryStream.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Geometry */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const ColorDef_1 = __webpack_require__(/*! ../ColorDef */ "./lib/ColorDef.js");
const Render_1 = __webpack_require__(/*! ../Render */ "./lib/Render.js");
const TextString_1 = __webpack_require__(/*! ./TextString */ "./lib/geometry/TextString.js");
const LineStyle_1 = __webpack_require__(/*! ./LineStyle */ "./lib/geometry/LineStyle.js");
const AreaPattern_1 = __webpack_require__(/*! ./AreaPattern */ "./lib/geometry/AreaPattern.js");
const IModelError_1 = __webpack_require__(/*! ../IModelError */ "./lib/IModelError.js");
/** @beta */
var BRepEntity;
(function (BRepEntity) {
    /** Enum for type of solid kernel entity this represents */
    let Type;
    (function (Type) {
        /** Body consisting of at least one solid region */
        Type[Type["Solid"] = 0] = "Solid";
        /** Body consisting of connected sets of faces having edges that are shared by a maximum of two faces */
        Type[Type["Sheet"] = 1] = "Sheet";
        /** Body consisting of connected sets of edges having vertices that are shared by a maximum of two edges */
        Type[Type["Wire"] = 2] = "Wire";
    })(Type = BRepEntity.Type || (BRepEntity.Type = {}));
})(BRepEntity = exports.BRepEntity || (exports.BRepEntity = {}));
/** GeometryStreamBuilder is a helper class for populating the [[GeometryStreamProps]] array needed to create a [[GeometricElement]] or [[GeometryPart]].
 * @public
 */
class GeometryStreamBuilder {
    constructor() {
        /** GeometryStream entries */
        this.geometryStream = [];
    }
    /** Supply optional local to world transform. Used to transform world coordinate input relative to element placement.
     * For a [[GeometricElement]]'s placement to be meaningful, world coordinate geometry should never be appended to an element with an identity placement.
     * Can be called with undefined or identity transform to start appending geometry supplied in local coordinates again.
     */
    setLocalToWorld(localToWorld) {
        this._worldToLocal = (undefined === localToWorld || localToWorld.isIdentity ? undefined : localToWorld.inverse());
    }
    /** Supply local to world transform from a Point3d and optional YawPitchRollAngles.
     * @see [[Placement3d]]
     */
    setLocalToWorld3d(origin, angles = geometry_core_1.YawPitchRollAngles.createDegrees(0.0, 0.0, 0.0)) {
        this.setLocalToWorld(geometry_core_1.Transform.createOriginAndMatrix(origin, angles.toMatrix3d()));
    }
    /** Supply local to world transform from a Point2d and optional Angle.
     * @see [[Placement2d]]
     */
    setLocalToWorld2d(origin, angle = geometry_core_1.Angle.createDegrees(0.0)) {
        this.setLocalToWorld(geometry_core_1.Transform.createOriginAndMatrix(geometry_core_1.Point3d.createFrom(origin), geometry_core_1.Matrix3d.createRotationAroundVector(geometry_core_1.Vector3d.unitZ(), angle)));
    }
    /** Store local ranges in GeometryStream for all subsequent geometry appended. Can improve performance of range testing for elements with a GeometryStream
     * containing more than one [[GeometryQuery]] differentiable by range. Not useful for a single [[GeometryQuery]] as its range and that of the [[GeometricElement]] are the same.
     * Ignored when defining a [[GeometryPart]] and not needed when only appending [[GeometryPart]] instances to a [[GeometricElement]] as these store their own range.
     */
    appendGeometryRanges() {
        this.geometryStream.push({ subRange: geometry_core_1.Range3d.createNull() });
    }
    /** Change [[SubCategory]] or reset to [[SubCategoryAppearance]] for subsequent geometry.
     *  An invalid sub-category id can be supplied to force a reset to the current [[SubCategoryAppearance]].
     *  It is not valid to change the sub-category when defining a [[GeometryPart]]. A [[GeometryPart]] inherit the symbology of their instance for anything not explicitly overridden.
     */
    appendSubCategoryChange(subCategoryId) {
        this.geometryStream.push({ appearance: { subCategory: subCategoryId } });
        return true;
    }
    /** Change [[GeometryParams]] for subsequent geometry.
     *  It is not valid to change the sub-category when defining a [[GeometryPart]]. A [[GeometryPart]] inherits the symbology of their instance for anything not explicitly overridden.
     */
    appendGeometryParamsChange(geomParams) {
        const appearance = {
            subCategory: geomParams.subCategoryId,
            color: geomParams.lineColor,
            weight: geomParams.weight,
            style: geomParams.styleInfo ? geomParams.styleInfo.styleId : undefined,
            transparency: geomParams.elmTransparency,
            displayPriority: geomParams.elmPriority,
            geometryClass: geomParams.geometryClass,
        };
        this.geometryStream.push({ appearance });
        if (undefined !== geomParams.materialId)
            this.geometryStream.push({ material: { materialId: geomParams.materialId } });
        if (undefined !== geomParams.fillDisplay && Render_1.FillDisplay.Never !== geomParams.fillDisplay) {
            const fill = {
                display: geomParams.fillDisplay,
                transparency: geomParams.fillTransparency,
            };
            if (undefined !== geomParams.gradient && Render_1.Gradient.Mode.None !== geomParams.gradient.mode)
                fill.gradient = geomParams.gradient.clone();
            else if (undefined !== geomParams.backgroundFill && Render_1.BackgroundFill.None !== geomParams.backgroundFill)
                fill.backgroundFill = geomParams.backgroundFill;
            else if (undefined !== geomParams.fillColor)
                fill.color = geomParams.fillColor;
            this.geometryStream.push({ fill });
        }
        if (undefined !== geomParams.pattern) {
            const localPattern = geomParams.pattern.clone();
            if (undefined !== this._worldToLocal && !localPattern.applyTransform(this._worldToLocal))
                return false;
            this.geometryStream.push({ pattern: localPattern });
        }
        if (undefined !== geomParams.styleInfo && undefined !== geomParams.styleInfo.styleMod) {
            const localStyleMod = new LineStyle_1.LineStyle.Modifier(geomParams.styleInfo.styleMod);
            if (undefined !== this._worldToLocal && !localStyleMod.applyTransform(this._worldToLocal))
                return false;
            this.geometryStream.push({ styleMod: localStyleMod });
        }
        return true;
    }
    /** Append a [[GeometryPart]] instance with relative position, orientation, and scale to a [[GeometryStreamProps]] array for creating a [[GeometricElement3d]].
     *  Not valid when defining a [[GeometryPart]] as nesting of parts is not supported.
     */
    appendGeometryPart3d(partId, instanceOrigin, instanceRotation, instanceScale) {
        if (undefined === this._worldToLocal) {
            this.geometryStream.push({ geomPart: { part: partId, origin: instanceOrigin, rotation: instanceRotation, scale: instanceScale } });
            return true;
        }
        const partTrans = geometry_core_1.Transform.createOriginAndMatrix(instanceOrigin, instanceRotation ? instanceRotation.toMatrix3d() : geometry_core_1.Matrix3d.createIdentity());
        if (undefined !== instanceScale)
            partTrans.matrix.scaleColumnsInPlace(instanceScale, instanceScale, instanceScale);
        const resultTrans = partTrans.multiplyTransformTransform(this._worldToLocal);
        const scales = new geometry_core_1.Vector3d();
        if (!resultTrans.matrix.normalizeColumnsInPlace(scales))
            return false;
        const newRotation = geometry_core_1.YawPitchRollAngles.createFromMatrix3d(resultTrans.matrix);
        if (undefined === newRotation)
            return false;
        this.geometryStream.push({ geomPart: { part: partId, origin: resultTrans.getOrigin(), rotation: newRotation, scale: scales.x } });
        return true;
    }
    /** Append a [[GeometryPart]] instance with relative position, orientation, and scale to a [[GeometryStreamProps]] array for creating a [[GeometricElement2d]].
     *  Not valid when defining a [[GeometryPart]] as nesting of parts is not supported.
     */
    appendGeometryPart2d(partId, instanceOrigin, instanceRotation, instanceScale) {
        return this.appendGeometryPart3d(partId, instanceOrigin ? geometry_core_1.Point3d.createFrom(instanceOrigin) : undefined, instanceRotation ? new geometry_core_1.YawPitchRollAngles(instanceRotation) : undefined, instanceScale);
    }
    /** Append a [[TextString]] supplied in either local or world coordinates to the [[GeometryStreamProps]] array */
    appendTextString(textString) {
        if (undefined === this._worldToLocal) {
            this.geometryStream.push({ textString });
            return true;
        }
        const localTextString = new TextString_1.TextString(textString);
        if (!localTextString.transformInPlace(this._worldToLocal))
            return false;
        this.geometryStream.push({ textString: localTextString });
        return true;
    }
    /** Append a [[GeometryQuery]] supplied in either local or world coordinates to the [[GeometryStreamProps]] array */
    appendGeometry(geometry) {
        if (undefined === this._worldToLocal) {
            const geomData = geometry_core_1.IModelJson.Writer.toIModelJson(geometry);
            if (undefined === geomData)
                return false;
            this.geometryStream.push(geomData);
            return true;
        }
        const localGeometry = geometry.cloneTransformed(this._worldToLocal);
        if (undefined === localGeometry)
            return false;
        const localGeomData = geometry_core_1.IModelJson.Writer.toIModelJson(localGeometry);
        if (undefined === localGeomData)
            return false;
        this.geometryStream.push(localGeomData);
        return true;
    }
    /** Append [[BRepEntity.DataProps]] supplied in either local or world coordinates to the [[GeometryStreamProps]] array
     * @beta
     */
    appendBRepData(brep) {
        if (undefined === this._worldToLocal) {
            this.geometryStream.push({ brep });
            return true;
        }
        const entityTrans = geometry_core_1.Transform.fromJSON(brep.transform);
        const localTrans = entityTrans.multiplyTransformTransform(this._worldToLocal);
        const localBrep = {
            data: brep.data,
            type: brep.type,
            transform: localTrans.isIdentity ? undefined : localTrans,
            faceSymbology: brep.faceSymbology,
        };
        this.geometryStream.push({ brep: localBrep });
        return true;
    }
}
exports.GeometryStreamBuilder = GeometryStreamBuilder;
/** Holds current state information for [[GeometryStreamIterator]]
 * @public
 */
class GeometryStreamIteratorEntry {
    constructor(category) {
        this.geomParams = new Render_1.GeometryParams(category !== undefined ? category : bentleyjs_core_1.Id64.invalid);
    }
}
exports.GeometryStreamIteratorEntry = GeometryStreamIteratorEntry;
/** GeometryStreamIterator is a helper class for iterating a [[GeometryStreamProps]].
 * A [[GeometricElement]]'s GeometryStream must be specifically requested using [[ElementLoadProps.wantGeometry]].
 * @public
 */
class GeometryStreamIterator {
    /** Construct a new GeometryStreamIterator given a [[GeometryStreamProps]] from either a [[GeometricElement3d]], [[GeometricElement2d]], or [[GeometryPart]].
     * Supply the [[GeometricElement]]'s category to initialize the appearance information for each geometric entry.
     */
    constructor(geometryStream, category) {
        /** Current entry position */
        this._index = 0;
        this.geometryStream = geometryStream;
        this.entry = new GeometryStreamIteratorEntry(category !== undefined ? category : bentleyjs_core_1.Id64.invalid);
    }
    /** Supply optional local to world transform. Used to transform entries that are stored relative to the element placement and return them in world coordinates. */
    setLocalToWorld(localToWorld) {
        this.entry.localToWorld = (undefined === localToWorld || localToWorld.isIdentity ? undefined : localToWorld.clone());
    }
    /** Supply local to world transform from Point3d and optional YawPitchRollAngles.
     * @see [[Placement3d]]
     */
    setLocalToWorld3d(origin, angles = geometry_core_1.YawPitchRollAngles.createDegrees(0.0, 0.0, 0.0)) {
        this.setLocalToWorld(geometry_core_1.Transform.createOriginAndMatrix(origin, angles.toMatrix3d()));
    }
    /** Supply local to world transform from Point2d and optional Angle.
     * @see [[Placement2d]]
     */
    setLocalToWorld2d(origin, angle = geometry_core_1.Angle.createDegrees(0.0)) {
        this.setLocalToWorld(geometry_core_1.Transform.createOriginAndMatrix(geometry_core_1.Point3d.createFrom(origin), geometry_core_1.Matrix3d.createRotationAroundVector(geometry_core_1.Vector3d.unitZ(), angle)));
    }
    /** Create a new GeometryStream iterator for a [[GeometricElement3d]].
     * If [[GeometricElement3dProps.placement]] is not undefined, placement relative entries will be returned transformed to world coordinates.
     * @throws [[IModelError]] if element.geom is undefined.
     */
    static fromGeometricElement3d(element) {
        if (element.geom === undefined)
            throw new IModelError_1.IModelError(bentleyjs_core_1.IModelStatus.NoGeometry, "GeometricElement has no geometry or geometry wasn't requested");
        const result = new GeometryStreamIterator(element.geom, element.category);
        if (element.placement !== undefined)
            result.setLocalToWorld3d(geometry_core_1.Point3d.fromJSON(element.placement.origin), geometry_core_1.YawPitchRollAngles.fromJSON(element.placement.angles));
        return result;
    }
    /** Create a new GeometryStream iterator for a [[GeometricElement2d]].
     * If [[GeometricElement2dProps.placement]] is not undefined, placement relative entries will be returned transformed to world coordinates.
     * @throws [[IModelError]] if element.geom is undefined.
     */
    static fromGeometricElement2d(element) {
        if (element.geom === undefined)
            throw new IModelError_1.IModelError(bentleyjs_core_1.IModelStatus.NoGeometry, "GeometricElement has no geometry or geometry wasn't requested");
        const result = new GeometryStreamIterator(element.geom, element.category);
        if (element.placement !== undefined)
            result.setLocalToWorld2d(geometry_core_1.Point2d.fromJSON(element.placement.origin), geometry_core_1.Angle.fromJSON(element.placement.angle));
        return result;
    }
    /** Create a new GeometryStream iterator for a [[GeometryPart]].
     * To iterate a part's GeometryStream in the context of a part instance found for a [[GeometricElement]], provide the optional [[GeometryParams]] and Transform from the [[GeometricElement]]'s [[GeometryStreamIterator]].
     * Supply the [[GeometryParams]] to return appearance information as inherited from the [[GeometricElement]].
     * Supply the partToWorld transform to return the part geometry in world coordinates.
     * Supply the partToLocal transform to return the part geometry relative to the [[GeometricElement]]'s placement.
     * @throws [[IModelError]] if geomPart.geom is undefined.
     */
    static fromGeometryPart(geomPart, geomParams, partTransform) {
        if (geomPart.geom === undefined)
            throw new IModelError_1.IModelError(bentleyjs_core_1.IModelStatus.NoGeometry, "GeometryPart has no geometry or geometry wasn't requested");
        const result = new GeometryStreamIterator(geomPart.geom);
        if (geomParams !== undefined)
            result.entry.geomParams = geomParams.clone();
        if (partTransform !== undefined)
            result.setLocalToWorld(partTransform);
        return result;
    }
    /** Get the transform that if applied to a [[GeometryPart]]'s GeometryStream entries would return them in world coordinates. */
    partToWorld() {
        if (this.entry.localToWorld === undefined || this.entry.partToLocal === undefined)
            return this.entry.localToWorld;
        return this.entry.partToLocal.multiplyTransformTransform(this.entry.localToWorld);
    }
    /** Advance to next displayable geometric entry while updating the current [[GeometryParams]] from appearance related entries.
     * Geometric entries are [[TextString]], [[GeometryQuery]], [[GeometryPart]], and [[BRepEntity.DataProps]].
     */
    next() {
        this.entry.partToLocal = this.entry.partId = this.entry.geometryQuery = this.entry.textString = this.entry.brep = undefined; // NOTE: localRange remains valid until new subRange entry is encountered
        while (this._index < this.geometryStream.length) {
            const entry = this.geometryStream[this._index++];
            if (entry.appearance) {
                this.entry.geomParams.resetAppearance();
                if (entry.appearance.subCategory)
                    this.entry.geomParams.subCategoryId = bentleyjs_core_1.Id64.fromJSON(entry.appearance.subCategory);
                if (entry.appearance.color)
                    this.entry.geomParams.lineColor = new ColorDef_1.ColorDef(entry.appearance.color);
                if (entry.appearance.weight)
                    this.entry.geomParams.weight = entry.appearance.weight;
                if (entry.appearance.style)
                    this.entry.geomParams.styleInfo = new LineStyle_1.LineStyle.Info(bentleyjs_core_1.Id64.fromJSON(entry.appearance.style));
                if (entry.appearance.transparency)
                    this.entry.geomParams.elmTransparency = entry.appearance.transparency;
                if (entry.appearance.displayPriority)
                    this.entry.geomParams.elmPriority = entry.appearance.displayPriority;
                if (entry.appearance.geometryClass)
                    this.entry.geomParams.geometryClass = entry.appearance.geometryClass;
            }
            else if (entry.styleMod) {
                if (this.entry.geomParams.styleInfo === undefined)
                    continue;
                const styleMod = new LineStyle_1.LineStyle.Modifier(entry.styleMod);
                if (this.entry.localToWorld !== undefined)
                    styleMod.applyTransform(this.entry.localToWorld);
                this.entry.geomParams.styleInfo = new LineStyle_1.LineStyle.Info(this.entry.geomParams.styleInfo.styleId, styleMod);
            }
            else if (entry.fill) {
                if (entry.fill.display)
                    this.entry.geomParams.fillDisplay = entry.fill.display;
                if (entry.fill.transparency)
                    this.entry.geomParams.fillTransparency = entry.fill.transparency;
                if (entry.fill.gradient)
                    this.entry.geomParams.gradient = Render_1.Gradient.Symb.fromJSON(entry.fill.gradient);
                else if (entry.fill.backgroundFill)
                    this.entry.geomParams.backgroundFill = entry.fill.backgroundFill;
                else if (entry.fill.color)
                    this.entry.geomParams.fillColor = new ColorDef_1.ColorDef(entry.fill.color);
            }
            else if (entry.pattern) {
                const params = AreaPattern_1.AreaPattern.Params.fromJSON(entry.pattern);
                if (this.entry.localToWorld !== undefined)
                    params.applyTransform(this.entry.localToWorld);
                this.entry.geomParams.pattern = params;
            }
            else if (entry.material) {
                if (entry.material.materialId)
                    this.entry.geomParams.materialId = bentleyjs_core_1.Id64.fromJSON(entry.material.materialId);
            }
            else if (entry.subRange) {
                this.entry.localRange = geometry_core_1.Range3d.fromJSON(entry.subRange);
            }
            else if (entry.geomPart) {
                this.entry.partId = bentleyjs_core_1.Id64.fromJSON(entry.geomPart.part);
                if (entry.geomPart.origin !== undefined || entry.geomPart.rotation !== undefined || entry.geomPart.scale !== undefined) {
                    const origin = entry.geomPart.origin ? geometry_core_1.Point3d.fromJSON(entry.geomPart.origin) : geometry_core_1.Point3d.createZero();
                    const rotation = entry.geomPart.rotation ? geometry_core_1.YawPitchRollAngles.fromJSON(entry.geomPart.rotation).toMatrix3d() : geometry_core_1.Matrix3d.createIdentity();
                    this.entry.partToLocal = geometry_core_1.Transform.createRefs(origin, rotation);
                    if (entry.geomPart.scale)
                        this.entry.partToLocal.multiplyTransformTransform(geometry_core_1.Transform.createRefs(geometry_core_1.Point3d.createZero(), geometry_core_1.Matrix3d.createUniformScale(entry.geomPart.scale)), this.entry.partToLocal);
                }
                return { value: this.entry, done: false };
            }
            else if (entry.textString) {
                this.entry.textString = new TextString_1.TextString(entry.textString);
                if (this.entry.localToWorld !== undefined)
                    this.entry.textString.transformInPlace(this.entry.localToWorld);
                return { value: this.entry, done: false };
            }
            else if (entry.brep) {
                this.entry.brep = entry.brep;
                if (this.entry.localToWorld !== undefined) {
                    const entityTrans = geometry_core_1.Transform.fromJSON(entry.brep.transform);
                    this.entry.brep.transform = entityTrans.multiplyTransformTransform(this.entry.localToWorld);
                }
                return { value: this.entry, done: false };
            }
            else {
                this.entry.geometryQuery = geometry_core_1.IModelJson.Reader.parse(entry);
                if (this.entry.geometryQuery === undefined)
                    continue;
                if (this.entry.localToWorld !== undefined)
                    this.entry.geometryQuery.tryTransformInPlace(this.entry.localToWorld);
                return { value: this.entry, done: false };
            }
        }
        return { value: this.entry, done: true };
    }
    [Symbol.iterator]() {
        return this;
    }
}
exports.GeometryStreamIterator = GeometryStreamIterator;


/***/ }),

/***/ "./lib/geometry/LineStyle.js":
/*!***********************************!*\
  !*** ./lib/geometry/LineStyle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Symbology */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** @public */
var LineStyle;
(function (LineStyle) {
    /** Optional modifiers to override line style definition */
    class Modifier {
        /** constructor for LineStyle.Modifier */
        constructor(props) {
            this.scale = props.scale;
            this.dashScale = props.dashScale;
            this.gapScale = props.gapScale;
            this.startWidth = props.startWidth;
            this.endWidth = props.endWidth;
            this.distPhase = props.distPhase;
            this.fractPhase = props.fractPhase;
            this.centerPhase = props.centerPhase;
            this.segmentMode = props.segmentMode;
            this.physicalWidth = props.physicalWidth;
            this.normal = props.normal ? geometry_core_1.Vector3d.fromJSON(props.normal) : undefined;
            this.rotation = props.rotation ? geometry_core_1.YawPitchRollAngles.fromJSON(props.rotation) : undefined;
        }
        /** Returns a deep copy of this object. */
        clone() {
            return new Modifier(this);
        }
        /** Compare two LineStyle.Modifier for equivalence */
        equals(other) {
            if (this === other) // same pointer
                return true;
            if (other.scale !== this.scale ||
                other.dashScale !== this.dashScale ||
                other.gapScale !== this.gapScale ||
                other.startWidth !== this.startWidth ||
                other.endWidth !== this.endWidth ||
                other.distPhase !== this.distPhase ||
                other.fractPhase !== this.fractPhase ||
                other.centerPhase !== this.centerPhase ||
                other.segmentMode !== this.segmentMode ||
                other.physicalWidth !== this.physicalWidth)
                return false;
            if ((this.normal === undefined) !== (other.normal === undefined))
                return false;
            if (this.normal && !this.normal.isAlmostEqual(other.normal))
                return false;
            if ((this.rotation === undefined) !== (other.rotation === undefined))
                return false;
            if (this.rotation && !this.rotation.isAlmostEqual(other.rotation))
                return false;
            return true;
        }
        applyTransform(transform) {
            if (transform.isIdentity)
                return true;
            if (this.normal) {
                transform.matrix.multiplyVector(this.normal, this.normal);
                const normalized = this.normal.normalize();
                if (normalized)
                    this.normal.setFrom(normalized);
                else
                    return false;
            }
            if (this.rotation) {
                const newTransform = this.rotation.toMatrix3d().multiplyMatrixTransform(transform);
                const scales = new geometry_core_1.Vector3d();
                if (!newTransform.matrix.normalizeColumnsInPlace(scales))
                    return false;
                const newRotation = geometry_core_1.YawPitchRollAngles.createFromMatrix3d(newTransform.matrix);
                if (undefined === newRotation)
                    return false;
                this.rotation.setFrom(newRotation);
            }
            let scaleFactor = 1.0;
            const scaleVector = geometry_core_1.Vector3d.create();
            const scaleMatrix = transform.matrix;
            scaleMatrix.normalizeRowsInPlace(scaleVector);
            // Check for flatten transform, dividing scaleVector by 3 gives wrong scaleFactor
            if (scaleVector.x !== 0.0 && scaleVector.y !== 0.0 && scaleVector.z !== 0.0)
                scaleFactor = (scaleVector.x + scaleVector.y + scaleVector.z) / 3.0;
            else
                scaleFactor = (scaleVector.x + scaleVector.y + scaleVector.z) / 2.0;
            if (1.0 === scaleFactor)
                return true;
            if (this.scale)
                this.scale *= scaleFactor;
            if (this.physicalWidth)
                return true;
            if (this.startWidth)
                this.startWidth *= scaleFactor;
            if (this.endWidth)
                this.endWidth *= scaleFactor;
            return true;
        }
    }
    LineStyle.Modifier = Modifier;
    /** Line style id and optional modifiers to override line style definition */
    class Info {
        /** Creates a LineStyle.Info object */
        constructor(styleId, styleMod) {
            this.styleId = styleId;
            this.styleMod = styleMod;
        }
        /** Returns a deep copy of this object. */
        clone() {
            return new Info(this.styleId, this.styleMod ? this.styleMod.clone() : undefined);
        }
        equals(other) {
            if (this === other)
                return true;
            if (this.styleId !== other.styleId)
                return false;
            if ((this.styleMod === undefined) !== (other.styleMod === undefined))
                return false;
            if (this.styleMod && !this.styleMod.equals(other.styleMod))
                return false;
            return true;
        }
    }
    LineStyle.Info = Info;
})(LineStyle = exports.LineStyle || (exports.LineStyle = {}));


/***/ }),

/***/ "./lib/geometry/Placement.js":
/*!***********************************!*\
  !*** ./lib/geometry/Placement.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Geometry */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
const Frustum_1 = __webpack_require__(/*! ../Frustum */ "./lib/Frustum.js");
/** The placement of a GeometricElement3d. This includes the origin, orientation, and size (bounding box) of the element.
 * All geometry of a GeometricElement are relative to its placement.
 * @public
 */
class Placement3d {
    constructor(origin, angles, bbox) {
        this.origin = origin;
        this.angles = angles;
        this.bbox = bbox;
    }
    /** Get the rotation from local coordinates of this placement to world coordinates. */
    get rotation() { return this.angles.toMatrix3d(); }
    /** Get the transform from local coordinates of this placement to world coordinates. */
    get transform() { return geometry_core_1.Transform.createOriginAndMatrix(this.origin, this.rotation); }
    /** Create a new Placement3d from a Placement3dProps. */
    static fromJSON(json) {
        const props = json ? json : {};
        return new Placement3d(geometry_core_1.Point3d.fromJSON(props.origin), geometry_core_1.YawPitchRollAngles.fromJSON(props.angles), geometry_core_1.Range3d.fromJSON(props.bbox));
    }
    /** Get the 8 corners, in world coordinates, of this placement. */
    getWorldCorners(out) {
        const frust = Frustum_1.Frustum.fromRange(this.bbox, out);
        frust.multiply(this.transform);
        return frust;
    }
    /** Set the contents of this Placement3d from another Placement3d */
    setFrom(other) {
        this.origin.setFrom(other.origin);
        this.angles.setFrom(other.angles);
        this.bbox.setFrom(other.bbox);
    }
    /** Determine whether this Placement3d is valid. */
    get isValid() { return !this.bbox.isNull && Math.max(this.origin.maxAbs(), this.bbox.maxAbs()) < geometry_core_1.Constant.circumferenceOfEarth; }
    /** Calculate the axis-aligned bounding box for this placement. */
    calculateRange() {
        const range = new geometry_core_1.Range3d();
        if (!this.isValid)
            return range;
        this.transform.multiplyRange(this.bbox, range);
        // low and high are not allowed to be equal
        range.ensureMinLengths();
        return range;
    }
}
exports.Placement3d = Placement3d;
/** The placement of a GeometricElement2d. This includes the origin, rotation, and size (bounding box) of the element.
 * @public
 */
class Placement2d {
    constructor(origin, angle, bbox) {
        this.origin = origin;
        this.angle = angle;
        this.bbox = bbox;
    }
    /** Get the rotation from local coordinates of this placement to world coordinates. */
    get rotation() { return geometry_core_1.Matrix3d.createRotationAroundVector(geometry_core_1.Vector3d.unitZ(), this.angle); }
    /** Get the transform from local coordinates of this placement to world coordinates. */
    get transform() { return geometry_core_1.Transform.createOriginAndMatrix(geometry_core_1.Point3d.createFrom(this.origin), this.rotation); }
    /** Create a new Placement2d from a Placement2dProps. */
    static fromJSON(json) {
        const props = json ? json : {};
        return new Placement2d(geometry_core_1.Point2d.fromJSON(props.origin), geometry_core_1.Angle.fromJSON(props.angle), geometry_core_1.Range2d.fromJSON(props.bbox));
    }
    /** Get the 8 corners, in world coordinates, of this placement. */
    getWorldCorners(out) {
        const frust = Frustum_1.Frustum.fromRange(this.bbox, out);
        frust.multiply(this.transform);
        return frust;
    }
    /** Determine whether this Placement2d is valid. */
    get isValid() { return !this.bbox.isNull && Math.max(this.origin.maxAbs(), this.bbox.maxAbs()) < geometry_core_1.Constant.circumferenceOfEarth; }
    /** Set the contents of this Placement3d from another Placement3d */
    setFrom(other) {
        this.origin.setFrom(other.origin);
        this.angle.setFrom(other.angle);
        this.bbox.setFrom(other.bbox);
    }
    /** Calculate the axis-aligned bounding box for this placement. */
    calculateRange() {
        const range = new geometry_core_1.Range3d();
        if (!this.isValid)
            return range;
        this.transform.multiplyRange(geometry_core_1.Range3d.createRange2d(this.bbox, 0), range);
        // low and high are not allowed to be equal
        range.ensureMinLengths();
        range.low.z = -1.0; // is the 2dFrustumDepth, which === 1 meter
        range.high.z = 1.0;
        return range;
    }
}
exports.Placement2d = Placement2d;


/***/ }),

/***/ "./lib/geometry/TextString.js":
/*!************************************!*\
  !*** ./lib/geometry/TextString.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Geometry */
Object.defineProperty(exports, "__esModule", { value: true });
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** A single line of text, all with the same font, styles (underline, bold, italic), and size.
 * This class also holds the origin and direction for the text.
 * A paragraph is composed of one or more instances of TextStrings.
 * @public
 */
class TextString {
    get width() { return this.height * (this.widthFactor ? this.widthFactor : 1.0); }
    constructor(props) {
        this.text = props.text;
        this.font = props.font;
        this.height = props.height;
        this.widthFactor = props.widthFactor;
        this.bold = props.bold;
        this.italic = props.italic;
        this.underline = props.underline;
        this.origin = geometry_core_1.Point3d.fromJSON(props.origin);
        this.rotation = geometry_core_1.YawPitchRollAngles.fromJSON(props.rotation);
    }
    toJSON() {
        const val = {};
        val.text = this.text;
        val.font = this.font;
        val.height = this.height;
        val.widthFactor = this.widthFactor;
        val.bold = this.bold;
        val.italic = this.italic;
        val.underline = this.underline;
        if (!this.origin.isAlmostZero)
            val.origin = this.origin;
        if (!this.rotation.isIdentity())
            val.rotation = this.rotation;
        return val;
    }
    transformInPlace(transform) {
        const newOrigin = transform.multiplyPoint3d(this.origin, this.origin);
        const newTransform = this.rotation.toMatrix3d().multiplyMatrixTransform(transform);
        const scales = new geometry_core_1.Vector3d();
        if (!newTransform.matrix.normalizeColumnsInPlace(scales))
            return false;
        const newRotation = geometry_core_1.YawPitchRollAngles.createFromMatrix3d(newTransform.matrix);
        if (undefined === newRotation)
            return false;
        const newHeight = this.height * scales.y;
        const newWidth = this.width * scales.x;
        if (newHeight < 1.0e-10 || newWidth < 1.0e-10)
            return false;
        this.origin.setFrom(newOrigin);
        this.rotation.setFrom(newRotation);
        this.height = newHeight;
        this.widthFactor = (newHeight === newWidth ? undefined : (newWidth / newHeight));
        return true;
    }
}
exports.TextString = TextString;


/***/ }),

/***/ "./lib/imodeljs-common.js":
/*!********************************!*\
  !*** ./lib/imodeljs-common.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
__export(__webpack_require__(/*! ./Code */ "./lib/Code.js"));
__export(__webpack_require__(/*! ./ColorDef */ "./lib/ColorDef.js"));
__export(__webpack_require__(/*! ./ECSqlTypes */ "./lib/ECSqlTypes.js"));
__export(__webpack_require__(/*! ./ElementProps */ "./lib/ElementProps.js"));
__export(__webpack_require__(/*! ./EntityProps */ "./lib/EntityProps.js"));
__export(__webpack_require__(/*! ./FeatureGates */ "./lib/FeatureGates.js"));
__export(__webpack_require__(/*! ./FeatureIndex */ "./lib/FeatureIndex.js"));
__export(__webpack_require__(/*! ./Frustum */ "./lib/Frustum.js"));
__export(__webpack_require__(/*! ./Fonts */ "./lib/Fonts.js"));
__export(__webpack_require__(/*! ./GeoCoordinateServices */ "./lib/GeoCoordinateServices.js"));
__export(__webpack_require__(/*! ./RpcInterface */ "./lib/RpcInterface.js"));
__export(__webpack_require__(/*! ./RpcManager */ "./lib/RpcManager.js"));
__export(__webpack_require__(/*! ./TextureProps */ "./lib/TextureProps.js"));
__export(__webpack_require__(/*! ./Image */ "./lib/Image.js"));
__export(__webpack_require__(/*! ./IModel */ "./lib/IModel.js"));
__export(__webpack_require__(/*! ./IModelError */ "./lib/IModelError.js"));
__export(__webpack_require__(/*! ./IModelVersion */ "./lib/IModelVersion.js"));
__export(__webpack_require__(/*! ./Lighting */ "./lib/Lighting.js"));
__export(__webpack_require__(/*! ./CommonLoggerCategory */ "./lib/CommonLoggerCategory.js"));
__export(__webpack_require__(/*! ./MaterialProps */ "./lib/MaterialProps.js"));
__export(__webpack_require__(/*! ./OctEncodedNormal */ "./lib/OctEncodedNormal.js"));
__export(__webpack_require__(/*! ./QPoint */ "./lib/QPoint.js"));
__export(__webpack_require__(/*! ./SubCategoryAppearance */ "./lib/SubCategoryAppearance.js"));
__export(__webpack_require__(/*! ./SpatialClassificationProps */ "./lib/SpatialClassificationProps.js"));
__export(__webpack_require__(/*! ./ViewProps */ "./lib/ViewProps.js"));
__export(__webpack_require__(/*! ./Render */ "./lib/Render.js"));
__export(__webpack_require__(/*! ./Paging */ "./lib/Paging.js"));
__export(__webpack_require__(/*! ./geometry/AreaPattern */ "./lib/geometry/AreaPattern.js"));
__export(__webpack_require__(/*! ./geometry/Cartographic */ "./lib/geometry/Cartographic.js"));
__export(__webpack_require__(/*! ./geometry/GeometryStream */ "./lib/geometry/GeometryStream.js"));
__export(__webpack_require__(/*! ./geometry/LineStyle */ "./lib/geometry/LineStyle.js"));
__export(__webpack_require__(/*! ./geometry/Placement */ "./lib/geometry/Placement.js"));
__export(__webpack_require__(/*! ./geometry/TextString */ "./lib/geometry/TextString.js"));
__export(__webpack_require__(/*! ./rpc/TestRpcManager */ "./lib/rpc/TestRpcManager.js"));
__export(__webpack_require__(/*! ./rpc/WipRpcInterface */ "./lib/rpc/WipRpcInterface.js"));
__export(__webpack_require__(/*! ./rpc/DevToolsRpcInterface */ "./lib/rpc/DevToolsRpcInterface.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcConstants */ "./lib/rpc/core/RpcConstants.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcInvocation */ "./lib/rpc/core/RpcInvocation.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcOperation */ "./lib/rpc/core/RpcOperation.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcProtocol */ "./lib/rpc/core/RpcProtocol.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcRegistry */ "./lib/rpc/core/RpcRegistry.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcRequest */ "./lib/rpc/core/RpcRequest.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcControl */ "./lib/rpc/core/RpcControl.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js"));
__export(__webpack_require__(/*! ./rpc/core/RpcPendingQueue */ "./lib/rpc/core/RpcPendingQueue.js"));
__export(__webpack_require__(/*! ./rpc/electron/ElectronRpcManager */ "./lib/rpc/electron/ElectronRpcManager.js"));
__export(__webpack_require__(/*! ./rpc/electron/ElectronRpcProtocol */ "./lib/rpc/electron/ElectronRpcProtocol.js"));
__export(__webpack_require__(/*! ./rpc/electron/ElectronRpcRequest */ "./lib/rpc/electron/ElectronRpcRequest.js"));
__export(__webpack_require__(/*! ./rpc/mobile/MobileRpcManager */ "./lib/rpc/mobile/MobileRpcManager.js"));
__export(__webpack_require__(/*! ./rpc/mobile/MobileRpcProtocol */ "./lib/rpc/mobile/MobileRpcProtocol.js"));
__export(__webpack_require__(/*! ./rpc/mobile/MobileRpcRequest */ "./lib/rpc/mobile/MobileRpcRequest.js"));
__export(__webpack_require__(/*! ./rpc/web/BentleyCloudRpcManager */ "./lib/rpc/web/BentleyCloudRpcManager.js"));
__export(__webpack_require__(/*! ./rpc/web/BentleyCloudRpcProtocol */ "./lib/rpc/web/BentleyCloudRpcProtocol.js"));
__export(__webpack_require__(/*! ./rpc/web/OpenAPI */ "./lib/rpc/web/OpenAPI.js"));
__export(__webpack_require__(/*! ./rpc/web/WebAppRpcProtocol */ "./lib/rpc/web/WebAppRpcProtocol.js"));
__export(__webpack_require__(/*! ./rpc/web/RpcMultipart */ "./lib/rpc/web/RpcMultipart.js"));
__export(__webpack_require__(/*! ./rpc/web/WebAppRpcRequest */ "./lib/rpc/web/WebAppRpcRequest.js"));
__export(__webpack_require__(/*! ./rpc/mobile/MobileRpcManager */ "./lib/rpc/mobile/MobileRpcManager.js"));
__export(__webpack_require__(/*! ./rpc/IModelReadRpcInterface */ "./lib/rpc/IModelReadRpcInterface.js"));
__export(__webpack_require__(/*! ./rpc/IModelTileRpcInterface */ "./lib/rpc/IModelTileRpcInterface.js"));
__export(__webpack_require__(/*! ./rpc/IModelWriteRpcInterface */ "./lib/rpc/IModelWriteRpcInterface.js"));
__export(__webpack_require__(/*! ./rpc/SnapshotIModelRpcInterface */ "./lib/rpc/SnapshotIModelRpcInterface.js"));
__export(__webpack_require__(/*! ./CloudStorage */ "./lib/CloudStorage.js"));
__export(__webpack_require__(/*! ./CloudStorageTileCache */ "./lib/CloudStorageTileCache.js"));
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("imodeljs-common", "1.0.0");
}
/** @docs-package-description
 * The imodeljs-common package contains classes for working with iModels that can be used in both [frontend]($docs/learning/frontend/index.md) and [backend]($docs/learning/backend/index.md).
 */
/**
 * @docs-group-description WireFormats
 * Definitions of the "props" interfaces and types that define the [wire format]($docs/learning/wireformat.md) for communication between the frontend and backend
 */
/**
 * @docs-group-description Codes
 * Classes for working with [Codes]($docs/bis/intro/codes.md)
 */
/**
 * @docs-group-description Geometry
 * Classes for working with geometry.
 */
/**
 * @docs-group-description Views
 * Classes for working with views of models and elements.
 */
/**
 * @docs-group-description Rendering
 * Classes for rendering geometry in views.
 */
/**
 * @docs-group-description Symbology
 * Classes that affect the appearance of geometry in a view
 */
/**
 * @docs-group-description iModels
 * Classes for working with [iModels]($docs/learning/IModels.md) in both the frontend and backend
 */
/**
 * @docs-group-description RpcInterface
 * Classes for working with [RpcInterfaces]($docs/learning/RpcInterface.md).
 */
/**
 * @docs-group-description ECSQL
 * Classes for working with [ECSQL]($docs/learning/ECSQL.md), [Spatial Queries]($docs/learning/SpatialQueries.md), and [ECSQL Geometry Functions]($docs/learning/GeometrySqlFuncs.md)
 */


/***/ }),

/***/ "./lib/rpc/DevToolsRpcInterface.js":
/*!*****************************************!*\
  !*** ./lib/rpc/DevToolsRpcInterface.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
/** Options to get the backend statistics
 * @internal
 */
var DevToolsStatsOptions;
(function (DevToolsStatsOptions) {
    DevToolsStatsOptions[DevToolsStatsOptions["None"] = 0] = "None";
    /** All unitized values are setup as formatted strings with the appropriate units */
    DevToolsStatsOptions[DevToolsStatsOptions["FormatUnits"] = 1] = "FormatUnits";
})(DevToolsStatsOptions = exports.DevToolsStatsOptions || (exports.DevToolsStatsOptions = {}));
/** The purpose of this class is to house RPC methods for developer tools.
 * Note that this should NOT be used in production environments.
 * @internal
 */
class DevToolsRpcInterface extends RpcInterface_1.RpcInterface {
    /** Returns the IModelReadRpcInterface instance for the frontend. */
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(DevToolsRpcInterface); }
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in this folder for the semantic versioning rules.
    ==========================================================================================*/
    // Sends a ping and returns true if the backend received the ping
    async ping(_iModelToken) { return this.forward(arguments); }
    // Returns JSON object with backend performance and memory statistics
    async stats(_iModelToken, _options) { return this.forward(arguments); }
    // Returns JSON object with backend versions (application and iModelJs)
    async versions(_iModelToken) { return this.forward(arguments); }
    // Sets a new log level for the specified category and returns the old log level
    async setLogLevel(_iModelToken, _loggerCategory, _logLevel) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
DevToolsRpcInterface.interfaceName = "DevToolsRpcInterface";
/** The semantic version of the interface.
 * @note The DevToolsRpcInterface will remain at 0.x since it is for testing only and not intended for production.
 */
DevToolsRpcInterface.interfaceVersion = "0.4.0";
exports.DevToolsRpcInterface = DevToolsRpcInterface;


/***/ }),

/***/ "./lib/rpc/IModelReadRpcInterface.js":
/*!*******************************************!*\
  !*** ./lib/rpc/IModelReadRpcInterface.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
const RpcControl_1 = __webpack_require__(/*! ./core/RpcControl */ "./lib/rpc/core/RpcControl.js");
/** Response if the IModelDb was not found at the backend
 * (if the service has moved)
 * @public
 */
class IModelNotFoundResponse extends RpcControl_1.RpcNotFoundResponse {
}
exports.IModelNotFoundResponse = IModelNotFoundResponse;
/** The RPC interface for reading from an iModel.
 * All operations only require read-only access.
 * This interface is not normally used directly. See IModelConnection for higher-level and more convenient API for accessing iModels from a frontend.
 * @public
 */
class IModelReadRpcInterface extends RpcInterface_1.RpcInterface {
    /** Returns the IModelReadRpcInterface instance for the frontend. */
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(IModelReadRpcInterface); }
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in this folder for the semantic versioning rules.
    ===========================================================================================*/
    async openForRead(_iModelToken) { return this.forward(arguments); }
    async close(_iModelToken) { return this.forward(arguments); }
    async queryRows(_iModelToken, _ecsql, _bindings, _limit, _quota, _priority) { return this.forward(arguments); }
    async getModelProps(_iModelToken, _modelIds) { return this.forward(arguments); }
    async queryModelRanges(_iModelToken, _modelIds) { return this.forward(arguments); }
    async queryModelProps(_iModelToken, _params) { return this.forward(arguments); }
    async getElementProps(_iModelToken, _elementIds) { return this.forward(arguments); }
    async queryElementProps(_iModelToken, _params) { return this.forward(arguments); }
    async queryEntityIds(_iModelToken, _params) { return this.forward(arguments); }
    async getClassHierarchy(_iModelToken, _startClassName) { return this.forward(arguments); }
    async getAllCodeSpecs(_iModelToken) { return this.forward(arguments); }
    async getViewStateData(_iModelToken, _viewDefinitionId) { return this.forward(arguments); }
    async readFontJson(_iModelToken) { return this.forward(arguments); }
    async getToolTipMessage(_iModelToken, _elementId) { return this.forward(arguments); }
    async getViewThumbnail(_iModelToken, _viewId) { return this.forward(arguments); }
    async getDefaultViewId(_iModelToken) { return this.forward(arguments); }
    /** @beta */
    async requestSnap(_iModelToken, _sessionId, _props) { return this.forward(arguments); }
    /** @beta */
    async cancelSnap(_iModelToken, _sessionId) { return this.forward(arguments); }
    /** @beta */
    async getIModelCoordinatesFromGeoCoordinates(_iModelToken, _props) { return this.forward(arguments); }
    /** @beta */
    async getGeoCoordinatesFromIModelCoordinates(_iModelToken, _props) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
IModelReadRpcInterface.interfaceName = "IModelReadRpcInterface";
/** The semantic version of the interface. */
IModelReadRpcInterface.interfaceVersion = "1.0.0";
exports.IModelReadRpcInterface = IModelReadRpcInterface;


/***/ }),

/***/ "./lib/rpc/IModelTileRpcInterface.js":
/*!*******************************************!*\
  !*** ./lib/rpc/IModelTileRpcInterface.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const CloudStorageTileCache_1 = __webpack_require__(/*! ../CloudStorageTileCache */ "./lib/CloudStorageTileCache.js");
const IModel_1 = __webpack_require__(/*! ../IModel */ "./lib/IModel.js");
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
/** @public */
class IModelTileRpcInterface extends RpcInterface_1.RpcInterface {
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(IModelTileRpcInterface); }
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in this folder for the semantic versioning rules.
    ===========================================================================================*/
    /** @beta */
    async getTileCacheContainerUrl(_tokenProps, _id) {
        return this.forward(arguments);
    }
    /** @internal */
    async requestTileTreeProps(_tokenProps, _id) { return this.forward(arguments); }
    /** @internal */
    async requestTileContent(iModelToken, treeId, contentId) {
        const cached = await IModelTileRpcInterface.checkCache(iModelToken, treeId, contentId);
        return cached || this.forward(arguments);
    }
    static async checkCache(tokenProps, treeId, contentId) {
        const iModelToken = IModel_1.IModelToken.fromJSON(tokenProps);
        const cached = await CloudStorageTileCache_1.CloudStorageTileCache.getCache().retrieve({ iModelToken, treeId, contentId });
        if (cached) {
            return cached;
        }
        return undefined;
    }
}
/** The immutable name of the interface. */
IModelTileRpcInterface.interfaceName = "IModelTileRpcInterface";
/** The semantic version of the interface. */
IModelTileRpcInterface.interfaceVersion = "1.0.0";
exports.IModelTileRpcInterface = IModelTileRpcInterface;


/***/ }),

/***/ "./lib/rpc/IModelWriteRpcInterface.js":
/*!********************************************!*\
  !*** ./lib/rpc/IModelWriteRpcInterface.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
/** The RPC interface for writing to an iModel.
 * All operations require read+write access.
 * This interface is not normally used directly. See IModelConnection for higher-level and more convenient API for accessing iModels from a frontend.
 * @alpha
 */
class IModelWriteRpcInterface extends RpcInterface_1.RpcInterface {
    /** Returns the IModelWriteRpcInterface client instance for the frontend. */
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(IModelWriteRpcInterface); }
    /*===========================================================================================
        NOTE: Any add/remove/change to the methods below requires an update of the interface version.
        NOTE: Please consult the README in this folder for the semantic versioning rules.
    ===========================================================================================*/
    async openForWrite(_iModelToken) { return this.forward(arguments); }
    async saveChanges(_iModelToken, _description) { return this.forward(arguments); }
    async updateProjectExtents(_iModelToken, _newExtents) { return this.forward(arguments); }
    async saveThumbnail(_iModelToken, _val) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
IModelWriteRpcInterface.interfaceName = "IModelWriteRpcInterface";
/** The version of the interface. */
IModelWriteRpcInterface.interfaceVersion = "0.4.0";
exports.IModelWriteRpcInterface = IModelWriteRpcInterface;


/***/ }),

/***/ "./lib/rpc/SnapshotIModelRpcInterface.js":
/*!***********************************************!*\
  !*** ./lib/rpc/SnapshotIModelRpcInterface.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
/** The RPC interface for working with *snapshot* iModels.
 * This interface is intended for desktop and mobile products. Web products are discouraged from registering this interface.
 * @beta
 */
class SnapshotIModelRpcInterface extends RpcInterface_1.RpcInterface {
    /** Returns the SnapshotIModelRpcInterface client instance for the frontend. */
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(SnapshotIModelRpcInterface); }
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in this folder for the semantic versioning rules.
    ===========================================================================================*/
    async openSnapshot(_fileName) { return this.forward(arguments); }
    async closeSnapshot(_iModelToken) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
SnapshotIModelRpcInterface.interfaceName = "SnapshotIModelRpcInterface";
/** The version of the interface. */
SnapshotIModelRpcInterface.interfaceVersion = "1.0.0";
exports.SnapshotIModelRpcInterface = SnapshotIModelRpcInterface;


/***/ }),

/***/ "./lib/rpc/TestRpcManager.js":
/*!***********************************!*\
  !*** ./lib/rpc/TestRpcManager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcConfiguration_1 = __webpack_require__(/*! ./core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
/** An RpcManager that uses RpcDefaultConfiguration/RpcDirectProtocol to make client stubs invoke
 * registered server impls as direct method calls within the same JavaScript context. In other words,
 * TestRpcManager sets up a protocol that uses our remoting mechanism but cuts out the communication
 * part of it. (No IPC or XHR is used or required.)
 * Nevertheless, all of the rest of the call marshalling and operation monitoring mechanism is used.
 * That makes TestRpcManager a way to write simple, single-process integration tests for frontends
 * and backends that actually use RpcInterfaces. Note that to write such a single-process integration
 * test, you must make *both* client and server use TestRpcManager to configure their RpcInterfaces.
 * It will not work if one side uses TestRpcManager and the other uses some other protocol (say, cloud).
 * That means that you must actually program the backend to know when it is running in direct test
 * mode and to employ TestRpcManager in that case.
 * @internal
 */
class TestRpcManager {
    static initialize(interfaces) {
        const config = class extends RpcConfiguration_1.RpcDefaultConfiguration {
            constructor() {
                super(...arguments);
                this.interfaces = () => interfaces;
            }
        };
        for (const def of interfaces)
            RpcConfiguration_1.RpcConfiguration.assign(def, () => RpcConfiguration_1.RpcDefaultConfiguration);
        const instance = RpcConfiguration_1.RpcConfiguration.obtain(config);
        RpcConfiguration_1.RpcConfiguration.initializeInterfaces(instance);
    }
}
exports.TestRpcManager = TestRpcManager;


/***/ }),

/***/ "./lib/rpc/WipRpcInterface.js":
/*!************************************!*\
  !*** ./lib/rpc/WipRpcInterface.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../RpcManager */ "./lib/RpcManager.js");
/** The purpose of this class is to house WIP RPC methods. For example:
 * - WIP methods where signatures or behavior is still changing
 * - Experimental methods that we may decide are a bad idea and never release
 * The idea is to house these WIP RPC methods away from other RpcInterfaces that have stated compatibility goals.
 * Once stable, the goal is to move methods out to their rightful home.
 * Apps/services should understand the *flux* implied by registering this RpcInterface and should be in control of both the client and server before even considering using it.
 * @internal
 */
class WipRpcInterface extends RpcInterface_1.RpcInterface {
    /** Returns the IModelReadRpcInterface instance for the frontend. */
    static getClient() { return RpcManager_1.RpcManager.getClientForInterface(WipRpcInterface); }
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in this folder for the semantic versioning rules.
    ==========================================================================================*/
    async placeholder(_iModelToken) { return this.forward(arguments); } // here to test that WipRpcInterface is configured properly
    async isChangeCacheAttached(_iModelToken) { return this.forward(arguments); }
    async attachChangeCache(_iModelToken) { return this.forward(arguments); }
    async detachChangeCache(_iModelToken) { return this.forward(arguments); }
    async getChangedElements(_iModelToken, _startChangesetId, _endChangesetId) { return this.forward(arguments); }
    async isChangesetProcessed(_iModelToken, _changesetId) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
WipRpcInterface.interfaceName = "WipRpcInterface";
/** The semantic version of the interface.
 * @note The WipRpcInterface will never progress to 1.0 since it is never intended to be public.
 */
WipRpcInterface.interfaceVersion = "0.3.0";
exports.WipRpcInterface = WipRpcInterface;


/***/ }),

/***/ "./lib/rpc/core/RpcConfiguration.js":
/*!******************************************!*\
  !*** ./lib/rpc/core/RpcConfiguration.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const RpcManager_1 = __webpack_require__(/*! ../../RpcManager */ "./lib/RpcManager.js");
const RpcControl_1 = __webpack_require__(/*! ./RpcControl */ "./lib/rpc/core/RpcControl.js");
const RpcProtocol_1 = __webpack_require__(/*! ./RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const RpcRegistry_1 = __webpack_require__(/*! ./RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const RpcRequest_1 = __webpack_require__(/*! ./RpcRequest */ "./lib/rpc/core/RpcRequest.js");
/** A RpcConfiguration specifies how calls on an RPC interface will be marshalled, plus other operating parameters.
 * RpcConfiguration is the base class for specific configurations.
 * @public
 */
class RpcConfiguration {
    constructor() {
        /** The target interval (in milliseconds) between connection attempts for pending RPC operation requests. */
        this.pendingOperationRetryInterval = 10000;
        /** The control channel for the configuration.
         * @internal
         */
        this.controlChannel = RpcControl_1.RpcControlChannel.obtain(this);
    }
    /** Sets the configuration supplier for an RPC interface class. */
    static assign(definition, supplier) {
        definition.prototype.configurationSupplier = supplier;
    }
    /** Obtains the instance of an RPC configuration class. */
    static obtain(configurationConstructor) {
        let instance = configurationConstructor[RpcRegistry_1.INSTANCE];
        if (!instance)
            instance = configurationConstructor[RpcRegistry_1.INSTANCE] = new configurationConstructor();
        return instance;
    }
    /** Initializes the RPC interfaces managed by the configuration. */
    static initializeInterfaces(configuration) {
        configuration.interfaces().forEach((definition) => RpcManager_1.RpcManager.initializeInterface(definition));
        configuration.controlChannel.initialize();
    }
    /** @internal */
    static supply(definition) {
        return RpcConfiguration.obtain(definition.configurationSupplier ? definition.configurationSupplier() : RpcDefaultConfiguration);
    }
    /** @internal */
    onRpcClientInitialized(definition, client) {
        this.protocol.onRpcClientInitialized(definition, client);
    }
    /** @internal */
    onRpcImplInitialized(definition, impl) {
        this.protocol.onRpcImplInitialized(definition, impl);
    }
    /** @internal */
    onRpcClientTerminated(definition, client) {
        this.protocol.onRpcClientTerminated(definition, client);
    }
    /** @internal */
    onRpcImplTerminated(definition, impl) {
        this.protocol.onRpcImplTerminated(definition, impl);
    }
}
/** Whether development mode is enabled.
 * @note This parameter determines whether developer convenience features like backend stack traces are available.
 * @note This parameter facilitates development-only scenarios like using snapshot iModels in a web application.
 */
RpcConfiguration.developmentMode = false;
/** Whether strict mode is enabled.
 * This parameter determines system behaviors relating to strict checking:
 * - Whether an error is thrown if the type marshaling system encounters an unregistered type (only in strict mode).
 */
RpcConfiguration.strictMode = false;
/**
 * Whether to throw an error when the IModelToken in the operation parameter list differs from the token in the URL.
 * @note By default, a warning is loggged and the operation is allowed to proceed.
 * @note The parameter token is always replaced by the url token (unless RpcOperationPolicy.allowTokenMismatch is set).
 */
RpcConfiguration.throwOnTokenMismatch = false;
/** Enables passing of application-specific context with each RPC request. */
RpcConfiguration.requestContext = {
    getId: (_request) => "",
    serialize: async (_request) => ({
        id: "",
        applicationId: "",
        applicationVersion: "",
        sessionId: "",
        authorization: "",
        userId: "",
    }),
    deserialize: async (_request) => new bentleyjs_core_1.ClientRequestContext(""),
};
exports.RpcConfiguration = RpcConfiguration;
/** A default configuration that can be used for basic testing within a library.
 * @internal
 */
class RpcDefaultConfiguration extends RpcConfiguration {
    constructor() {
        super(...arguments);
        this.interfaces = () => [];
        this.protocol = new RpcDirectProtocol(this);
    }
}
exports.RpcDefaultConfiguration = RpcDefaultConfiguration;
/** A default protocol that can be used for basic testing within a library.
 * @internal
 */
class RpcDirectProtocol extends RpcProtocol_1.RpcProtocol {
    constructor() {
        super(...arguments);
        this.requestType = RpcDirectRequest;
    }
}
exports.RpcDirectProtocol = RpcDirectProtocol;
/** A default request type that can be used for basic testing within a library.
 * @internal
 */
class RpcDirectRequest extends RpcRequest_1.RpcRequest {
    constructor() {
        super(...arguments);
        this.headers = new Map();
        this.fulfillment = undefined;
    }
    async send() {
        const request = await this.protocol.serialize(this);
        return new Promise(async (resolve, reject) => {
            try {
                this.fulfillment = await this.protocol.fulfill(request);
                resolve(this.fulfillment.status);
            }
            catch (err) {
                reject(err);
            }
        });
    }
    setHeader(name, value) {
        this.headers.set(name, value);
    }
    async load() {
        return Promise.resolve(this.fulfillment.result);
    }
}
exports.RpcDirectRequest = RpcDirectRequest;


/***/ }),

/***/ "./lib/rpc/core/RpcConstants.js":
/*!**************************************!*\
  !*** ./lib/rpc/core/RpcConstants.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
/** Describes available options for RPC response caching.
 * @public
 */
var RpcResponseCacheControl;
(function (RpcResponseCacheControl) {
    RpcResponseCacheControl[RpcResponseCacheControl["None"] = 0] = "None";
    RpcResponseCacheControl[RpcResponseCacheControl["Immutable"] = 1] = "Immutable";
})(RpcResponseCacheControl = exports.RpcResponseCacheControl || (exports.RpcResponseCacheControl = {}));
/** RPC protocol event types.
 * @public
 */
var RpcProtocolEvent;
(function (RpcProtocolEvent) {
    RpcProtocolEvent[RpcProtocolEvent["RequestCreated"] = 0] = "RequestCreated";
    RpcProtocolEvent[RpcProtocolEvent["ResponseLoaded"] = 1] = "ResponseLoaded";
    RpcProtocolEvent[RpcProtocolEvent["ResponseLoading"] = 2] = "ResponseLoading";
    RpcProtocolEvent[RpcProtocolEvent["ConnectionErrorReceived"] = 3] = "ConnectionErrorReceived";
    RpcProtocolEvent[RpcProtocolEvent["UnknownErrorReceived"] = 4] = "UnknownErrorReceived";
    RpcProtocolEvent[RpcProtocolEvent["BackendErrorReceived"] = 5] = "BackendErrorReceived";
    RpcProtocolEvent[RpcProtocolEvent["ConnectionAborted"] = 6] = "ConnectionAborted";
    RpcProtocolEvent[RpcProtocolEvent["RequestReceived"] = 7] = "RequestReceived";
    RpcProtocolEvent[RpcProtocolEvent["BackendResponseCreated"] = 8] = "BackendResponseCreated";
    RpcProtocolEvent[RpcProtocolEvent["BackendReportedPending"] = 9] = "BackendReportedPending";
    RpcProtocolEvent[RpcProtocolEvent["BackendReportedNotFound"] = 10] = "BackendReportedNotFound";
    RpcProtocolEvent[RpcProtocolEvent["BackendErrorOccurred"] = 11] = "BackendErrorOccurred";
})(RpcProtocolEvent = exports.RpcProtocolEvent || (exports.RpcProtocolEvent = {}));
/** The status of an RPC operation request.
 * @public
 */
var RpcRequestStatus;
(function (RpcRequestStatus) {
    RpcRequestStatus[RpcRequestStatus["Unknown"] = 0] = "Unknown";
    RpcRequestStatus[RpcRequestStatus["Created"] = 1] = "Created";
    RpcRequestStatus[RpcRequestStatus["Submitted"] = 2] = "Submitted";
    RpcRequestStatus[RpcRequestStatus["Pending"] = 3] = "Pending";
    RpcRequestStatus[RpcRequestStatus["Resolved"] = 4] = "Resolved";
    RpcRequestStatus[RpcRequestStatus["Rejected"] = 5] = "Rejected";
    RpcRequestStatus[RpcRequestStatus["Disposed"] = 6] = "Disposed";
    RpcRequestStatus[RpcRequestStatus["NotFound"] = 7] = "NotFound";
})(RpcRequestStatus = exports.RpcRequestStatus || (exports.RpcRequestStatus = {}));
/** RPC request event types.
 * @public
 */
var RpcRequestEvent;
(function (RpcRequestEvent) {
    RpcRequestEvent[RpcRequestEvent["StatusChanged"] = 0] = "StatusChanged";
    RpcRequestEvent[RpcRequestEvent["PendingUpdateReceived"] = 1] = "PendingUpdateReceived";
})(RpcRequestEvent = exports.RpcRequestEvent || (exports.RpcRequestEvent = {}));
/** RPC content types.
 * @public
 */
var RpcContentType;
(function (RpcContentType) {
    RpcContentType[RpcContentType["Unknown"] = 0] = "Unknown";
    RpcContentType[RpcContentType["Text"] = 1] = "Text";
    RpcContentType[RpcContentType["Binary"] = 2] = "Binary";
    RpcContentType[RpcContentType["Multipart"] = 3] = "Multipart";
    RpcContentType[RpcContentType["Stream"] = 4] = "Stream";
})(RpcContentType = exports.RpcContentType || (exports.RpcContentType = {}));
/** RPC supported mobile platforms.
 * @beta
 */
var RpcMobilePlatform;
(function (RpcMobilePlatform) {
    RpcMobilePlatform[RpcMobilePlatform["Unknown"] = 0] = "Unknown";
    RpcMobilePlatform[RpcMobilePlatform["Android"] = 1] = "Android";
    RpcMobilePlatform[RpcMobilePlatform["iOS"] = 2] = "iOS";
})(RpcMobilePlatform = exports.RpcMobilePlatform || (exports.RpcMobilePlatform = {}));
/** Endpoints for RPC protocols.
 * @public
 */
var RpcEndpoint;
(function (RpcEndpoint) {
    RpcEndpoint[RpcEndpoint["Frontend"] = 0] = "Frontend";
    RpcEndpoint[RpcEndpoint["Backend"] = 1] = "Backend";
})(RpcEndpoint = exports.RpcEndpoint || (exports.RpcEndpoint = {}));
/** @internal */
exports.WEB_RPC_CONSTANTS = {
    CONTENT: "Content-Type",
    TEXT: "text/plain",
    ANY_TEXT: "text/",
    BINARY: "application/octet-stream",
    MULTIPART: "multipart/form-data",
};


/***/ }),

/***/ "./lib/rpc/core/RpcControl.js":
/*!************************************!*\
  !*** ./lib/rpc/core/RpcControl.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../../RpcInterface */ "./lib/RpcInterface.js");
const RpcManager_1 = __webpack_require__(/*! ../../RpcManager */ "./lib/RpcManager.js");
const RpcConfiguration_1 = __webpack_require__(/*! ./RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcOperation_1 = __webpack_require__(/*! ./RpcOperation */ "./lib/rpc/core/RpcOperation.js");
const RpcRegistry_1 = __webpack_require__(/*! ./RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const IModel_1 = __webpack_require__(/*! ../../IModel */ "./lib/IModel.js");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
// tslint:disable:space-before-function-paren
/** An RPC operation control response.
 * @public
 */
class RpcControlResponse {
}
exports.RpcControlResponse = RpcControlResponse;
/** A pending RPC operation response.
 * @public
 */
class RpcPendingResponse extends RpcControlResponse {
    /** Constructs a pending response. */
    constructor(message = "") {
        super();
        this.message = message;
    }
}
exports.RpcPendingResponse = RpcPendingResponse;
/** A RPC operation response.
 * @public
 */
class RpcNotFoundResponse extends RpcControlResponse {
}
exports.RpcNotFoundResponse = RpcNotFoundResponse;
/** Manages requests and responses for an RPC configuration.
 * @internal
 */
class RpcControlChannel {
    constructor(configuration) {
        var _a;
        this._initialized = false;
        this._clientActive = false;
        this._describeEndpoints = undefined;
        this._channelInterface = (_a = class extends RpcInterface_1.RpcInterface {
                async describeEndpoints() { return this.forward(arguments); }
            },
            _a.interfaceVersion = "CONTROL",
            _a.interfaceName = "",
            _a);
        this._channelImpl = class extends RpcInterface_1.RpcInterface {
            async describeEndpoints() {
                const endpoints = [];
                this.configuration.interfaces().forEach((definition) => {
                    if (!RpcRegistry_1.RpcRegistry.instance.isRpcInterfaceInitialized(definition))
                        return;
                    const description = { interfaceName: definition.interfaceName, interfaceVersion: definition.interfaceVersion, operationNames: [], compatible: true };
                    RpcOperation_1.RpcOperation.forEach(definition, (operation) => description.operationNames.push(operation.operationName));
                    endpoints.push(description);
                });
                return Promise.resolve(endpoints);
            }
        };
        this._configuration = configuration;
        RpcControlChannel.channels.push(this);
    }
    /** @internal */
    async describeEndpoints() {
        this.activateClient();
        return this._describeEndpoints();
    }
    /** @internal */
    static obtain(configuration) {
        if (RpcControlChannel._obtainLock)
            return undefined;
        ++RpcControlChannel._obtainLock;
        const channel = new RpcControlChannel(configuration);
        --RpcControlChannel._obtainLock;
        return channel;
    }
    computeId() {
        const interfaces = [];
        this._configuration.interfaces().forEach((definition) => interfaces.push(`${definition.interfaceName}@${definition.interfaceVersion}`));
        const id = interfaces.sort().join(",");
        if (typeof (btoa) !== "undefined")
            return btoa(id);
        else if (typeof (Buffer) !== "undefined")
            return Buffer.from(id, "binary").toString("base64");
        else
            return id;
    }
    activateClient() {
        if (this._clientActive)
            return;
        if (!this._initialized) {
            if (this._configuration.interfaces().length)
                throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Invalid state.`);
            this.initialize();
        }
        this._clientActive = true;
        RpcOperation_1.RpcOperation.forEach(this._channelInterface, (operation) => operation.policy.token = (_request) => RpcOperation_1.RpcOperation.fallbackToken || new IModel_1.IModelToken("none", "none", "none", "none", undefined));
        const client = RpcManager_1.RpcManager.getClientForInterface(this._channelInterface);
        this._describeEndpoints = async () => client.describeEndpoints();
    }
    /** @internal */
    initialize() {
        if (this._initialized)
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Already initialized.`);
        this._initialized = true;
        const id = this.computeId();
        Object.defineProperty(this._channelInterface, "interfaceName", { value: id });
        Object.defineProperty(this._channelImpl, "interfaceName", { value: id });
        RpcConfiguration_1.RpcConfiguration.assign(this._channelInterface, () => this._configuration.constructor);
        RpcManager_1.RpcManager.registerImpl(this._channelInterface, this._channelImpl);
        RpcManager_1.RpcManager.initializeInterface(this._channelInterface);
    }
    /** @internal */
    handleUnknownOperation(invocation, _error) {
        const op = invocation.request.operation;
        if (op.interfaceVersion === "CONTROL" && op.operationName === "describeEndpoints") {
            op.interfaceDefinition = this._channelInterface.interfaceName;
            return true;
        }
        return false;
    }
}
/** @internal */
RpcControlChannel.channels = [];
RpcControlChannel._obtainLock = 0;
exports.RpcControlChannel = RpcControlChannel;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/rpc/core/RpcInvocation.js":
/*!***************************************!*\
  !*** ./lib/rpc/core/RpcInvocation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const CommonLoggerCategory_1 = __webpack_require__(/*! ../../CommonLoggerCategory */ "./lib/CommonLoggerCategory.js");
const RpcInterface_1 = __webpack_require__(/*! ../../RpcInterface */ "./lib/RpcInterface.js");
const RpcConfiguration_1 = __webpack_require__(/*! ./RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcConstants_1 = __webpack_require__(/*! ./RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const RpcControl_1 = __webpack_require__(/*! ./RpcControl */ "./lib/rpc/core/RpcControl.js");
const RpcMarshaling_1 = __webpack_require__(/*! ./RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js");
const RpcOperation_1 = __webpack_require__(/*! ./RpcOperation */ "./lib/rpc/core/RpcOperation.js");
const RpcRegistry_1 = __webpack_require__(/*! ./RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
/** An RPC operation invocation in response to a request.
 * @public
 */
class RpcInvocation {
    /** Constructs an invocation. */
    constructor(protocol, request) {
        this._threw = false;
        this._pending = false;
        this._notFound = false;
        this._timeIn = 0;
        this._timeOut = 0;
        /** The operation of the request. */
        this.operation = undefined;
        this._timeIn = new Date().getTime();
        this.protocol = protocol;
        this.request = request;
        try {
            try {
                this.operation = RpcOperation_1.RpcOperation.lookup(this.request.operation.interfaceDefinition, this.request.operation.operationName);
                const backend = this.operation.interfaceVersion;
                const frontend = this.request.operation.interfaceVersion;
                if (!RpcInterface_1.RpcInterface.isVersionCompatible(backend, frontend)) {
                    throw new IModelError_1.IModelError(bentleyjs_core_1.RpcInterfaceStatus.IncompatibleVersion, `Backend version ${backend} does not match frontend version ${frontend} for RPC interface ${this.operation.operationName}.`);
                }
            }
            catch (error) {
                if (this.handleUnknownOperation(error)) {
                    this.operation = RpcOperation_1.RpcOperation.lookup(this.request.operation.interfaceDefinition, this.request.operation.operationName);
                }
                else {
                    throw error;
                }
            }
            this.operation.policy.invocationCallback(this);
            this.result = this.resolve();
        }
        catch (error) {
            this.result = this.reject(error);
        }
        this.fulfillment = this.result.then((value) => this.fulfillResolved(value), (reason) => this.fulfillRejected(reason));
    }
    /** The status for this request. */
    get status() {
        if (this._threw) {
            return RpcConstants_1.RpcRequestStatus.Rejected;
        }
        else {
            if (this._pending)
                return RpcConstants_1.RpcRequestStatus.Pending;
            else if (this._notFound)
                return RpcConstants_1.RpcRequestStatus.NotFound;
            else
                return RpcConstants_1.RpcRequestStatus.Resolved;
        }
    }
    /** The elapsed time for this invocation. */
    get elapsed() {
        return this._timeOut - this._timeIn;
    }
    /**
     * The invocation for the current RPC operation.
     * @note The return value of this function is only reliable in an RPC impl class member function where program control was received from the RpcInvocation constructor function.
     */
    static current(rpcImpl) {
        return rpcImpl[RpcRegistry_1.CURRENT_INVOCATION];
    }
    handleUnknownOperation(error) {
        return this.protocol.configuration.controlChannel.handleUnknownOperation(this, error);
    }
    async resolve() {
        const clientRequestContext = await RpcConfiguration_1.RpcConfiguration.requestContext.deserialize(this.request);
        clientRequestContext.enter();
        this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.RequestReceived, this);
        const parameters = RpcMarshaling_1.RpcMarshaling.deserialize(this.protocol, this.request.parameters);
        this.applyPolicies(parameters);
        const impl = RpcRegistry_1.RpcRegistry.instance.getImplForInterface(this.operation.interfaceDefinition);
        impl[RpcRegistry_1.CURRENT_INVOCATION] = this;
        const op = this.lookupOperationFunction(impl);
        return Promise.resolve(op.call(impl, ...parameters));
    }
    applyPolicies(parameters) {
        if (!parameters || !Array.isArray(parameters)) {
            return;
        }
        for (let i = 0; i !== parameters.length; ++i) {
            const parameter = parameters[i];
            const isToken = typeof (parameter) === "object" && parameter !== null && parameter.hasOwnProperty("iModelId") && parameter.hasOwnProperty("contextId");
            if (isToken && this.protocol.checkToken && !this.operation.policy.allowTokenMismatch) {
                const inflated = this.protocol.inflateToken(parameter, this.request);
                parameters[i] = inflated;
                if (!RpcInvocation.compareTokens(parameter, inflated)) {
                    if (RpcConfiguration_1.RpcConfiguration.throwOnTokenMismatch) {
                        throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "IModelToken mismatch detected for this request.");
                    }
                    else {
                        bentleyjs_core_1.Logger.logWarning(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceBackend, "IModelToken mismatch detected for this request.");
                    }
                }
            }
        }
    }
    static compareTokens(a, b) {
        return a.key === b.key &&
            a.contextId === b.contextId &&
            a.iModelId === b.iModelId &&
            a.changeSetId === b.changeSetId &&
            a.openMode === b.openMode;
    }
    async reject(error) {
        this._threw = true;
        this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendErrorOccurred, this);
        return Promise.reject(error);
    }
    async fulfillResolved(value) {
        this._timeOut = new Date().getTime();
        this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendResponseCreated, this);
        const result = await RpcMarshaling_1.RpcMarshaling.serialize(this.protocol, value);
        return this.fulfill(result, value);
    }
    async fulfillRejected(reason) {
        this._timeOut = new Date().getTime();
        if (!RpcConfiguration_1.RpcConfiguration.developmentMode)
            reason.stack = undefined;
        const result = await RpcMarshaling_1.RpcMarshaling.serialize(this.protocol, reason);
        if (reason instanceof RpcControl_1.RpcPendingResponse) {
            this._pending = true;
            result.objects = reason.message;
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendReportedPending, this);
        }
        else if (reason instanceof RpcControl_1.RpcNotFoundResponse) {
            this._notFound = true;
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendReportedNotFound, this);
        }
        else {
            this._threw = true;
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendErrorOccurred, this);
        }
        return this.fulfill(result, reason);
    }
    fulfill(result, rawResult) {
        const fulfillment = {
            result,
            rawResult,
            status: this.protocol.getCode(this.status),
            id: this.request.id,
            interfaceName: this.operation.interfaceDefinition.interfaceName,
        };
        return fulfillment;
    }
    lookupOperationFunction(implementation) {
        const func = implementation[this.operation.operationName];
        if (!func || typeof (func) !== "function") {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `RPC interface class "${implementation.constructor.name}" does not implement operation "${this.operation.operationName}".`, bentleyjs_core_1.Logger.logError, CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceBackend);
        }
        return func;
    }
}
exports.RpcInvocation = RpcInvocation;


/***/ }),

/***/ "./lib/rpc/core/RpcMarshaling.js":
/*!***************************************!*\
  !*** ./lib/rpc/core/RpcMarshaling.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-string-literal
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
let marshalingTarget;
let chunkThreshold = 0;
/** @internal */
var MarshalingBinaryMarker;
(function (MarshalingBinaryMarker) {
    function createDefault() {
        return { isBinary: true, index: 0, size: -1, chunks: 1 };
    }
    MarshalingBinaryMarker.createDefault = createDefault;
})(MarshalingBinaryMarker = exports.MarshalingBinaryMarker || (exports.MarshalingBinaryMarker = {}));
/** @public */
var RpcSerializedValue;
(function (RpcSerializedValue) {
    function create(objects = "", data = []) {
        return { objects, data };
    }
    RpcSerializedValue.create = create;
})(RpcSerializedValue = exports.RpcSerializedValue || (exports.RpcSerializedValue = {}));
/** @internal */
class RpcMarshaling {
    constructor() { }
    /** Serializes a value. */
    static async serialize(protocol, value) {
        const serialized = RpcSerializedValue.create();
        if (typeof (value) === "undefined") {
            return serialized;
        }
        marshalingTarget = serialized;
        chunkThreshold = protocol ? protocol.transferChunkThreshold : 0;
        serialized.objects = JSON.stringify(value, WireFormat.marshal);
        marshalingTarget = undefined;
        chunkThreshold = 0;
        return serialized;
    }
    /** Deserializes a value. */
    static deserialize(protocol, value) {
        if (value.objects === "") {
            return undefined;
        }
        marshalingTarget = value;
        chunkThreshold = protocol ? protocol.transferChunkThreshold : 0;
        const result = JSON.parse(value.objects, WireFormat.unmarshal);
        marshalingTarget = undefined;
        chunkThreshold = 0;
        return result;
    }
}
exports.RpcMarshaling = RpcMarshaling;
class WireFormat {
    /** JSON.stringify replacer callback. */
    static marshal(_key, value) {
        const asBinary = WireFormat.marshalBinary(value);
        if (asBinary) {
            return asBinary;
        }
        const asError = WireFormat.marshalError(value);
        if (asError) {
            return asError;
        }
        return value;
    }
    /** JSON.parse reviver callback. */
    static unmarshal(_key, value) {
        if (typeof (value) === "object" && value !== null && value.hasOwnProperty("isBinary") && value.isBinary) {
            return WireFormat.unmarshalBinary(value);
        }
        return value;
    }
    static marshalBinary(value) {
        if (value instanceof Uint8Array || Buffer.isBuffer(value)) {
            const marker = { isBinary: true, index: -1, size: value.byteLength, chunks: 1 };
            if (chunkThreshold && value.byteLength > chunkThreshold) {
                marker.index = marshalingTarget.data.length;
                marker.chunks = 0;
                let cursor = value.byteOffset;
                const end = cursor + value.byteLength;
                let chunk = chunkThreshold;
                for (;;) {
                    if (cursor >= end) {
                        break;
                    }
                    marshalingTarget.data.push(new Uint8Array(value.buffer, cursor, chunk));
                    ++marker.chunks;
                    cursor += chunk;
                    const consumed = cursor - value.byteOffset;
                    const remaining = value.byteLength - consumed;
                    chunk = Math.min(chunkThreshold, remaining);
                }
            }
            else {
                marker.index = marshalingTarget.data.push(value) - 1;
            }
            return marker;
        }
        else {
            return undefined;
        }
    }
    static unmarshalBinary(value) {
        if (value.index >= marshalingTarget.data.length) {
            throw new IModelError_1.IModelError(IModelError_1.BentleyStatus.ERROR, `Cannot unmarshal missing binary value.`);
        }
        if (value.chunks === 0) {
            return new Uint8Array();
        }
        else if (value.chunks === 1) {
            return new Uint8Array(marshalingTarget.data[value.index]);
        }
        else {
            const buffer = new ArrayBuffer(value.size);
            const view = new Uint8Array(buffer);
            let cursor = 0;
            for (let c = 0; c !== value.chunks; ++c) {
                const chunk = marshalingTarget.data[value.index + c];
                view.set(chunk, cursor);
                cursor += chunk.byteLength;
            }
            return view;
        }
    }
    static marshalError(value) {
        if (value instanceof Error) {
            const props = Object.getOwnPropertyDescriptors(value);
            props["isError"] = { configurable: true, enumerable: true, writable: true, value: true };
            props["name"] = { configurable: true, enumerable: true, writable: true, value: value.name };
            props["message"] = { configurable: true, enumerable: true, writable: true, value: value.message };
            props["stack"] = { configurable: true, enumerable: true, writable: true, value: value.stack };
            return Object.create(Object.prototype, props);
        }
        return undefined;
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/rpc/core/RpcOperation.js":
/*!**************************************!*\
  !*** ./lib/rpc/core/RpcOperation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcRegistry_1 = __webpack_require__(/*! ./RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const RpcConstants_1 = __webpack_require__(/*! ./RpcConstants */ "./lib/rpc/core/RpcConstants.js");
/** The policy for an RPC operation.
 * @public
 */
class RpcOperationPolicy {
    constructor() {
        /** Supplies the IModelToken for an operation request. */
        this.token = (request) => request.findTokenPropsParameter();
        /** Supplies the initial retry interval for an operation request. */
        this.retryInterval = (configuration) => configuration.pendingOperationRetryInterval;
        /** Called before every operation request on the frontend is sent. */
        this.requestCallback = (_request) => { };
        /** Called after every operation request on the frontend is sent. */
        this.sentCallback = (_request) => { };
        /** Called for every operation invocation on the backend. */
        this.invocationCallback = (_invocation) => { };
        /**
         * Determines if caching is permitted for an operation response.
         * @note Not all RPC protocols support caching.
         */
        this.allowResponseCaching = (_request) => RpcConstants_1.RpcResponseCacheControl.None;
        /** Forces RpcConfiguration.strictMode for this operation. */
        this.forceStrictMode = false;
        /** Whether the IModelToken in the operation parameter list is allowed to differ from the token in the request URL. */
        this.allowTokenMismatch = false;
    }
}
exports.RpcOperationPolicy = RpcOperationPolicy;
/** An RPC operation descriptor.
 * @public
 */
class RpcOperation {
    /** @internal */
    constructor(definition, operation, policy) {
        this.interfaceDefinition = definition;
        this.operationName = operation;
        this.policy = policy;
    }
    /** Looks up an RPC operation by name. */
    static lookup(target, operationName) {
        const definition = typeof (target) === "string" ? RpcRegistry_1.RpcRegistry.instance.lookupInterfaceDefinition(target) : target;
        const propertyName = RpcOperation.computeOperationName(operationName);
        const proto = definition.prototype;
        if (!proto.hasOwnProperty(propertyName))
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `RPC interface class "${definition.interfaceName}" does not does not declare operation "${operationName}"`);
        return proto[propertyName][RpcRegistry_1.OPERATION];
    }
    /** Iterates the operations of an RPC interface definition. */
    static forEach(definition, callback) {
        Object.getOwnPropertyNames(definition.prototype).forEach((operationName) => {
            if (operationName === "constructor" || operationName === "configurationSupplier")
                return;
            const propertyName = RpcOperation.computeOperationName(operationName);
            callback(definition.prototype[propertyName][RpcRegistry_1.OPERATION]);
        });
    }
    /** The version of this operation. */
    get interfaceVersion() { return this.interfaceDefinition.interfaceVersion; }
    /** @internal */
    static computeOperationName(identifier) {
        const c = identifier.indexOf(":");
        if (c === -1)
            return identifier;
        return identifier.substring(0, c + 1);
    }
}
/** A fallback token to use for RPC requests that do not semantically depend on an iModel. */
RpcOperation.fallbackToken = undefined;
exports.RpcOperation = RpcOperation;
/** @public */
(function (RpcOperation) {
    function obtainInstance(obj) {
        if (obj instanceof RpcOperationPolicy) {
            return obj;
        }
        else {
            const instance = new RpcOperationPolicy();
            Object.assign(instance, obj);
            return instance;
        }
    }
    /** Decorator for setting the policy for an RPC operation function. */
    function setPolicy(policy) {
        return (target, propertyKey, descriptor) => {
            descriptor.value[RpcRegistry_1.OPERATION] = new RpcOperation(target.constructor, propertyKey, obtainInstance(policy));
        };
    }
    RpcOperation.setPolicy = setPolicy;
    /** Convenience decorator for setting an RPC operation policy that allows response caching. */
    function allowResponseCaching(control = RpcConstants_1.RpcResponseCacheControl.Immutable) {
        return (target, propertyKey, descriptor) => {
            descriptor.value[RpcRegistry_1.OPERATION] = new RpcOperation(target.constructor, propertyKey, new class extends RpcOperationPolicy {
                constructor() {
                    super(...arguments);
                    this.allowResponseCaching = () => control;
                }
            }());
        };
    }
    RpcOperation.allowResponseCaching = allowResponseCaching;
    /** Decorator for setting the default policy for an RPC interface definition class. */
    function setDefaultPolicy(policy) {
        return (definition) => {
            definition[RpcRegistry_1.POLICY] = obtainInstance(policy);
        };
    }
    RpcOperation.setDefaultPolicy = setDefaultPolicy;
})(RpcOperation = exports.RpcOperation || (exports.RpcOperation = {}));


/***/ }),

/***/ "./lib/rpc/core/RpcPendingQueue.js":
/*!*****************************************!*\
  !*** ./lib/rpc/core/RpcPendingQueue.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcConstants_1 = __webpack_require__(/*! ./RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const RpcRequest_1 = __webpack_require__(/*! ./RpcRequest */ "./lib/rpc/core/RpcRequest.js");
/** Manages pending RPC requests and responses.
 * @internal
 */
class RpcPendingQueue {
    constructor() {
        this._pendingInterval = undefined;
        this._pending = [];
        this._pendingLock = 0;
        this._pendingIntervalHandler = function () {
            const now = new Date().getTime();
            ++this._pendingLock;
            for (const request of this._pending) {
                if (request.connecting || (request.lastSubmitted + request.retryInterval) > now) {
                    continue;
                }
                request.submit(); // tslint:disable-line:no-floating-promises
            }
            --this._pendingLock;
            this.cleanupPendingQueue();
        }.bind(this);
        RpcRequest_1.RpcRequest.events.addListener(this.requestEventHandler, this);
    }
    static initialize() {
        if (!RpcPendingQueue.instance) {
            RpcPendingQueue.instance = new RpcPendingQueue();
        }
    }
    requestEventHandler(type, request) {
        if (type !== RpcConstants_1.RpcRequestEvent.StatusChanged)
            return;
        switch (request.status) {
            case RpcConstants_1.RpcRequestStatus.Submitted: {
                this.enqueuePending(request);
                break;
            }
            case RpcConstants_1.RpcRequestStatus.Resolved:
            case RpcConstants_1.RpcRequestStatus.Rejected:
            case RpcConstants_1.RpcRequestStatus.NotFound: {
                this.dequeuePending(request);
                break;
            }
        }
    }
    enqueuePending(request) {
        this._pending.push(request);
        this.setPendingInterval();
    }
    dequeuePending(request) {
        if (this._pendingLock)
            return;
        const i = this._pending.indexOf(request);
        this._pending.splice(i, 1);
        this.clearPendingInterval();
    }
    cleanupPendingQueue() {
        if (this._pendingLock)
            return;
        let i = this._pending.length;
        while (i--) {
            if (!this._pending[i].pending) {
                this._pending.splice(i, 1);
            }
        }
        this.clearPendingInterval();
    }
    setPendingInterval() {
        if (this._pendingInterval)
            return;
        this._pendingInterval = setInterval(this._pendingIntervalHandler, 0);
    }
    clearPendingInterval() {
        if (!this._pending.length) {
            clearInterval(this._pendingInterval);
            this._pendingInterval = undefined;
        }
    }
}
exports.RpcPendingQueue = RpcPendingQueue;


/***/ }),

/***/ "./lib/rpc/core/RpcProtocol.js":
/*!*************************************!*\
  !*** ./lib/rpc/core/RpcProtocol.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const RpcConfiguration_1 = __webpack_require__(/*! ./RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcConstants_1 = __webpack_require__(/*! ./RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const RpcInvocation_1 = __webpack_require__(/*! ./RpcInvocation */ "./lib/rpc/core/RpcInvocation.js");
const RpcMarshaling_1 = __webpack_require__(/*! ./RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js");
/** @public */
var RpcRequestFulfillment;
(function (RpcRequestFulfillment) {
    async function forUnknownError(request, error) {
        const result = await RpcMarshaling_1.RpcMarshaling.serialize(undefined, error);
        return {
            interfaceName: request.operation.interfaceDefinition,
            id: request.id,
            result,
            rawResult: error,
            status: RpcConstants_1.RpcRequestStatus.Rejected,
        };
    }
    RpcRequestFulfillment.forUnknownError = forUnknownError;
})(RpcRequestFulfillment = exports.RpcRequestFulfillment || (exports.RpcRequestFulfillment = {}));
/** An application protocol for an RPC interface.
 * @public
 */
class RpcProtocol {
    /** Constructs a protocol. */
    constructor(configuration) {
        /** Events raised by the protocol. See [[RpcProtocolEvent]] */
        this.events = new bentleyjs_core_1.BeEvent();
        /** The RPC invocation class for this protocol. */
        this.invocationType = RpcInvocation_1.RpcInvocation;
        this.serializedClientRequestContextHeaderNames = {
            /** The name of the request id header. */
            id: "",
            /** The name of the application id header  */
            applicationId: "",
            /** The name of the version header. */
            applicationVersion: "",
            /** The name of the session id header  */
            sessionId: "",
            /** The name of the authorization header. */
            authorization: "",
            /** The id of the authorized user */
            userId: "",
        };
        /** If greater than zero, specifies where to break large binary request payloads. */
        this.transferChunkThreshold = 0;
        /** Used by protocols that can transmit stream values natively. */
        this.preserveStreams = false;
        /** Used by protocols that can transmit IModelToken values natively. */
        this.checkToken = false;
        this.configuration = configuration;
        this.events.addListener((type, object) => RpcProtocol.events.raiseEvent(type, object));
    }
    /** If checkToken is true, will be called on the backend to inflate the IModelToken for each request. */
    inflateToken(tokenFromBody, _request) { return tokenFromBody; }
    /** Override to supply the status corresponding to a protocol-specific code value. */
    getStatus(code) {
        return code;
    }
    /** Override to supply the protocol-specific code corresponding to a status value. */
    getCode(status) {
        return status;
    }
    /** Override to supply the protocol-specific path value for an RPC operation. */
    supplyPathForOperation(operation, _request) {
        return JSON.stringify(operation);
    }
    /** Override to supply the operation for a protocol-specific path value. */
    getOperationFromPath(path) {
        return JSON.parse(path);
    }
    /** Obtains the implementation result on the backend for an RPC operation request. */
    async fulfill(request) {
        return new (this.invocationType)(this, request).fulfillment;
    }
    /** Serializes a request. */
    async serialize(request) {
        const serializedContext = await RpcConfiguration_1.RpcConfiguration.requestContext.serialize(request);
        return Object.assign({}, serializedContext, { operation: {
                interfaceDefinition: request.operation.interfaceDefinition.interfaceName,
                operationName: request.operation.operationName,
                interfaceVersion: request.operation.interfaceVersion,
            }, method: request.method, path: request.path, parameters: await RpcMarshaling_1.RpcMarshaling.serialize(request.protocol, request.parameters), caching: RpcConstants_1.RpcResponseCacheControl.None });
    }
    /** @internal */
    onRpcClientInitialized(_definition, _client) { }
    /** @internal */
    onRpcImplInitialized(_definition, _impl) { }
    /** @internal */
    onRpcClientTerminated(_definition, _client) { }
    /** @internal */
    onRpcImplTerminated(_definition, _impl) { }
}
/** Events raised by all protocols. See [[RpcProtocolEvent]] */
RpcProtocol.events = new bentleyjs_core_1.BeEvent();
exports.RpcProtocol = RpcProtocol;


/***/ }),

/***/ "./lib/rpc/core/RpcRegistry.js":
/*!*************************************!*\
  !*** ./lib/rpc/core/RpcRegistry.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInterface_1 = __webpack_require__(/*! ../../RpcInterface */ "./lib/RpcInterface.js");
const RpcOperation_1 = __webpack_require__(/*! ./RpcOperation */ "./lib/rpc/core/RpcOperation.js");
const RpcControl_1 = __webpack_require__(/*! ./RpcControl */ "./lib/rpc/core/RpcControl.js");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const imodeljs_common_1 = __webpack_require__(/*! ../../imodeljs-common */ "./lib/imodeljs-common.js");
// tslint:disable:ban-types
/** @internal */
exports.REGISTRY = Symbol.for("@bentley/imodeljs-common/RpcRegistry");
/** @internal */
exports.OPERATION = Symbol.for("@bentley/imodeljs-common/RpcOperation");
/** @internal */
exports.POLICY = Symbol.for("@bentley/imodeljs-common/RpcOperationPolicy");
/** @internal */
exports.INSTANCE = Symbol.for("@bentley/imodeljs-common/RpcInterface/__instance__");
/** @internal */
exports.CURRENT_REQUEST = Symbol.for("@bentley/imodeljs-common/RpcRequest/__current__");
/** @internal */
exports.CURRENT_INVOCATION = Symbol.for("@bentley/imodeljs-common/RpcInvocation/__current__");
/** @internal */
class RpcRegistry {
    constructor() {
        this.definitionClasses = new Map();
        this.proxies = new Map();
        this.implementations = new Map();
        this.suppliedImplementations = new Map();
        this.implementationClasses = new Map();
        this.id = (() => {
            let i = 0;
            return () => ++i;
        })();
    }
    static get instance() {
        if (!RpcRegistry._instance) {
            const globalObj = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
            if (!globalObj[exports.REGISTRY])
                globalObj[exports.REGISTRY] = new RpcRegistry();
            RpcRegistry._instance = globalObj[exports.REGISTRY];
        }
        return RpcRegistry._instance;
    }
    lookupInterfaceDefinition(name) {
        if (!this.definitionClasses.has(name))
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `RPC interface "${name}" is not initialized.`);
        return this.definitionClasses.get(name);
    }
    async describeAvailableEndpoints() {
        const requests = [];
        for (const channel of RpcControl_1.RpcControlChannel.channels) {
            requests.push(channel.describeEndpoints());
        }
        return Promise.all(requests).then((responses) => {
            const endpoints = responses.reduce((a, b) => a.concat(b), []);
            for (const endpoint of endpoints) {
                const definition = this.definitionClasses.get(endpoint.interfaceName);
                endpoint.compatible = (definition && RpcInterface_1.RpcInterface.isVersionCompatible(endpoint.interfaceVersion, definition.interfaceVersion)) ? true : false;
            }
            return endpoints;
        });
    }
    getClientForInterface(definition) {
        let instance = this.proxies.get(definition.interfaceName);
        if (!instance)
            instance = this.instantiateClient(definition);
        return instance;
    }
    getImplForInterface(definition) {
        let instance = this.implementations.get(definition.interfaceName);
        if (!instance)
            instance = this.instantiateImpl(definition);
        return instance;
    }
    lookupImpl(interfaceName) {
        const definition = this.lookupInterfaceDefinition(interfaceName);
        return this.getImplForInterface(definition);
    }
    registerImpl(definition, implementation) {
        this.unregisterImpl(definition);
        this.implementationClasses.set(definition.interfaceName, implementation);
    }
    unregisterImpl(definition) {
        this.implementationClasses.delete(definition.interfaceName);
        const impl = this.implementations.get(definition.interfaceName);
        if (impl) {
            impl.configuration.onRpcImplTerminated(definition, impl);
            this.implementations.delete(definition.interfaceName);
        }
    }
    supplyImplInstance(definition, instance) {
        this.suppliedImplementations.set(definition.interfaceName, instance);
    }
    isRpcInterfaceInitialized(definition) {
        return this.definitionClasses.has(definition.interfaceName);
    }
    initializeRpcInterface(definition) {
        if (this.definitionClasses.has(definition.interfaceName))
            return;
        this.notifyInitialize();
        this.definitionClasses.set(definition.interfaceName, definition);
        this.configureOperations(definition);
    }
    terminateRpcInterface(definition) {
        this.unregisterImpl(definition);
        this.purgeClient(definition);
        this.definitionClasses.delete(definition.interfaceName);
    }
    instantiateImpl(definition) {
        this.checkInitialized(definition);
        const registeredImplementation = this.implementationClasses.get(definition.interfaceName);
        if (!registeredImplementation)
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `An RPC interface implementation class for "${definition.interfaceName}" is not registered.`);
        if (definition.prototype.configurationSupplier)
            registeredImplementation.prototype.configurationSupplier = definition.prototype.configurationSupplier;
        const supplied = this.suppliedImplementations.get(definition.interfaceName);
        const implementation = supplied || new registeredImplementation();
        if (!(implementation instanceof registeredImplementation))
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Invalid RPC interface implementation.`);
        if (supplied) {
            supplied.configuration = imodeljs_common_1.RpcConfiguration.supply(supplied);
        }
        this.implementations.set(definition.interfaceName, implementation);
        implementation.configuration.onRpcImplInitialized(definition, implementation);
        return implementation;
    }
    instantiateClient(definition) {
        this.checkInitialized(definition);
        const proxy = new definition();
        this.proxies.set(definition.interfaceName, proxy);
        Object.getOwnPropertyNames(definition.prototype).forEach((operationName) => {
            if (operationName === "constructor" || operationName === "configurationSupplier")
                return;
            this.interceptOperation(proxy, operationName);
        });
        proxy.configuration.onRpcClientInitialized(definition, proxy);
        return proxy;
    }
    interceptOperation(proxy, operation) {
        const clientFunction = proxy[operation];
        // tslint:disable-next-line:only-arrow-functions
        proxy[operation] = function () {
            const args = Array.from(arguments);
            args.push(operation);
            return clientFunction.apply(proxy, args);
        };
    }
    checkInitialized(definition) {
        if (!this.definitionClasses.has(definition.interfaceName))
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `RPC interface "${definition.interfaceName}" is not initialized.`);
    }
    configureOperations(definition) {
        const proto = definition.prototype;
        Object.getOwnPropertyNames(proto).forEach((operationName) => {
            if (operationName === "constructor" || operationName === "configurationSupplier")
                return;
            const propertyName = RpcOperation_1.RpcOperation.computeOperationName(operationName);
            if (!proto[propertyName][exports.OPERATION]) {
                const policy = definition[exports.POLICY] || new RpcOperation_1.RpcOperationPolicy();
                proto[propertyName][exports.OPERATION] = new RpcOperation_1.RpcOperation(definition, propertyName, policy);
            }
        });
    }
    purgeClient(definition) {
        const proxy = this.proxies.get(definition.interfaceName);
        if (proxy) {
            proxy.configuration.onRpcClientTerminated(definition, proxy);
            this.proxies.delete(definition.interfaceName);
        }
    }
    notifyInitialize() {
        imodeljs_common_1.initializeRpcRequest();
        imodeljs_common_1.RpcPendingQueue.initialize();
    }
}
exports.RpcRegistry = RpcRegistry;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/rpc/core/RpcRequest.js":
/*!************************************!*\
  !*** ./lib/rpc/core/RpcRequest.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const RpcOperation_1 = __webpack_require__(/*! ./RpcOperation */ "./lib/rpc/core/RpcOperation.js");
const RpcProtocol_1 = __webpack_require__(/*! ./RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const RpcConfiguration_1 = __webpack_require__(/*! ./RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcMarshaling_1 = __webpack_require__(/*! ./RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js");
const RpcRegistry_1 = __webpack_require__(/*! ./RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcConstants_1 = __webpack_require__(/*! ./RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const CommonLoggerCategory_1 = __webpack_require__(/*! ../../CommonLoggerCategory */ "./lib/CommonLoggerCategory.js");
const aggregateLoad = { lastRequest: 0, lastResponse: 0 };
/** @public */
class ResponseLike {
    get body() { return null; }
    async arrayBuffer() { return this._data; }
    async blob() { throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Not implemented."); }
    async formData() { throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Not implemented."); }
    async json() { return this._data; }
    async text() { return this._data; }
    get bodyUsed() { return false; }
    get headers() { throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Not implemented."); }
    get ok() { return this.status >= 200 && this.status <= 299; }
    get redirected() { return false; }
    get status() { return 200; }
    get statusText() { return ""; }
    get trailer() { throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Not implemented."); }
    get type() { return "basic"; }
    get url() { return ""; }
    clone() { return Object.assign({}, this); }
    constructor(data) {
        this._data = Promise.resolve(data);
    }
}
exports.ResponseLike = ResponseLike;
/** A RPC operation request.
 * @public
 */
class RpcRequest {
    /** Constructs an RPC request. */
    constructor(client, operation, parameters) {
        this._resolve = () => undefined;
        this._resolveRaw = () => undefined;
        this._reject = () => undefined;
        this._rejectRaw = () => undefined;
        this._created = 0;
        this._lastSubmitted = 0;
        this._lastUpdated = 0;
        this._status = RpcConstants_1.RpcRequestStatus.Unknown;
        this._extendedStatus = "";
        this._connecting = false;
        this._active = true;
        this._hasRawListener = false;
        this._raw = undefined;
        this._response = undefined;
        this._created = new Date().getTime();
        this.path = "";
        this.method = "";
        this.client = client;
        this.protocol = client.configuration.protocol;
        this.operation = RpcOperation_1.RpcOperation.lookup(client.constructor, operation);
        this.parameters = parameters;
        this.retryInterval = this.operation.policy.retryInterval(client.configuration);
        this.response = new Promise((resolve, reject) => { this._resolve = resolve; this._reject = reject; });
        this._rawPromise = new Promise((resolve, reject) => { this._resolveRaw = resolve; this._rejectRaw = reject; });
        this.id = RpcConfiguration_1.RpcConfiguration.requestContext.getId(this) || bentleyjs_core_1.Guid.createValue();
        this.setStatus(RpcConstants_1.RpcRequestStatus.Created);
        this.operation.policy.requestCallback(this);
    }
    /** The aggregate operations profile of all active RPC interfaces. */
    static get aggregateLoad() { return aggregateLoad; }
    /**
     * The request for the current RPC operation.
     * @note The return value of this function is only reliable if program control was received from a RPC interface class member function that directly returns the result of calling RpcInterface.forward.
     */
    static current(context) {
        return context[RpcRegistry_1.CURRENT_REQUEST];
    }
    /** The status of this request. */
    get status() { return this._status; }
    /** Extended status information for this request (if available). */
    get extendedStatus() { return this._extendedStatus; }
    /** The last submission for this request. */
    get lastSubmitted() { return this._lastSubmitted; }
    /** The last status update received for this request. */
    get lastUpdated() { return this._lastUpdated; }
    /** Whether a connection is active for this request. */
    get connecting() { return this._connecting; }
    /** Whether this request is pending. */
    get pending() {
        switch (this.status) {
            case RpcConstants_1.RpcRequestStatus.Submitted:
            case RpcConstants_1.RpcRequestStatus.Pending: {
                return true;
            }
            default: {
                return false;
            }
        }
    }
    /** The elapsed time for this request. */
    get elapsed() {
        return this._lastUpdated - this._created;
    }
    /** Finds the first parameter of a given structural type if present. */
    findParameterOfType(requiredProperties) {
        for (const param of this.parameters) {
            for (const prop of Object.getOwnPropertyNames(requiredProperties)) {
                if (param.hasOwnProperty(prop) && typeof (param[prop]) === requiredProperties[prop]) {
                    return param;
                }
            }
        }
        return undefined;
    }
    /** Finds the first IModelTokenProps parameter if present. */
    findTokenPropsParameter() {
        if (RpcConfiguration_1.RpcConfiguration.developmentMode) {
            return this.findParameterOfType({ iModelId: "string" });
        }
        else {
            return this.findParameterOfType({ iModelId: "string", contextId: "string" });
        }
    }
    /** The raw implementation response for this request. */
    get rawResponse() {
        this._hasRawListener = true;
        return this._rawPromise;
    }
    /** Sets the last updated time for the request. */
    setLastUpdatedTime() {
        this._lastUpdated = new Date().getTime();
    }
    /* @internal */
    async submit() {
        if (!this._active)
            return;
        this._lastSubmitted = new Date().getTime();
        if (this.status === RpcConstants_1.RpcRequestStatus.Created || this.status === RpcConstants_1.RpcRequestStatus.NotFound) {
            this.setStatus(RpcConstants_1.RpcRequestStatus.Submitted);
        }
        try {
            this._connecting = true;
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.RequestCreated, this);
            const sent = this.setHeaders().then(() => this.send());
            this.operation.policy.sentCallback(this);
            const response = await sent;
            const status = this.protocol.getStatus(response);
            if (this._hasRawListener && status === RpcConstants_1.RpcRequestStatus.Resolved && typeof (this._response) !== "undefined") {
                this._connecting = false;
                this.resolveRaw();
            }
            else {
                this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.ResponseLoading, this);
                if (status === RpcConstants_1.RpcRequestStatus.Unknown) {
                    this._connecting = false;
                    this.handleUnknownResponse(response);
                    return;
                }
                const value = await this.load();
                this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.ResponseLoaded, this);
                this._connecting = false;
                this.handleResponse(response, value);
            }
        }
        catch (err) {
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.ConnectionErrorReceived, this, err);
            this._connecting = false;
            this.reject(err);
        }
    }
    handleUnknownResponse(code) {
        this.reject(new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Unknown response ${code}.`));
    }
    handleResponse(code, value) {
        const status = this.protocol.getStatus(code);
        switch (status) {
            case RpcConstants_1.RpcRequestStatus.Resolved: {
                return this.handleResolved(value);
            }
            case RpcConstants_1.RpcRequestStatus.Rejected: {
                return this.handleRejected(value);
            }
            case RpcConstants_1.RpcRequestStatus.Pending: {
                return this.setPending(status, value.objects);
            }
            case RpcConstants_1.RpcRequestStatus.NotFound: {
                return this.handleNotFound(status, value);
            }
        }
    }
    handleResolved(value) {
        try {
            this._raw = value.objects;
            const result = RpcMarshaling_1.RpcMarshaling.deserialize(this.protocol, value);
            if (ArrayBuffer.isView(result)) {
                this._raw = result.buffer;
            }
            return this.resolve(result);
        }
        catch (err) {
            return this.reject(err);
        }
    }
    handleRejected(value) {
        this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.BackendErrorReceived, this);
        try {
            const error = RpcMarshaling_1.RpcMarshaling.deserialize(this.protocol, value);
            const hasInfo = error && typeof (error) === "object" && error.hasOwnProperty("name") && error.hasOwnProperty("message");
            const name = hasInfo ? error.name : "";
            const message = hasInfo ? error.message : "";
            const errorNumber = (hasInfo && error.hasOwnProperty("errorNumber")) ? error.errorNumber : bentleyjs_core_1.BentleyStatus.ERROR;
            return this.reject(new IModelError_1.BackendError(errorNumber, name, message, bentleyjs_core_1.Logger.logError, CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceFrontend, () => error));
        }
        catch (err) {
            return this.reject(err);
        }
    }
    handleNotFound(status, value) {
        const response = RpcMarshaling_1.RpcMarshaling.deserialize(this.protocol, value);
        this.setStatus(status);
        let resubmitted = false;
        RpcRequest.notFoundHandlers.raiseEvent(this, response, () => {
            if (resubmitted)
                throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Already resubmitted using this handler.`);
            resubmitted = true;
            this.submit(); // tslint:disable-line:no-floating-promises
        }, (reason) => this.reject(reason));
        return;
    }
    resolve(result) {
        if (!this._active)
            return;
        this._active = false;
        this.setLastUpdatedTime();
        this._resolve(result);
        if (this._hasRawListener) {
            if (typeof (this._raw) === "undefined") {
                throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Cannot access raw response.");
            }
            this._resolveRaw(new ResponseLike(this._raw));
        }
        this.setStatus(RpcConstants_1.RpcRequestStatus.Resolved);
        this.dispose();
    }
    resolveRaw() {
        if (typeof (this._response) === "undefined") {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Cannot access raw response.");
        }
        this._active = false;
        this.setLastUpdatedTime();
        this._resolveRaw(this._response);
        this.setStatus(RpcConstants_1.RpcRequestStatus.Resolved);
        this.dispose();
    }
    reject(reason) {
        if (!this._active)
            return;
        this._active = false;
        this.setLastUpdatedTime();
        this._reject(reason);
        if (this._hasRawListener) {
            this._rejectRaw(reason);
        }
        this.setStatus(RpcConstants_1.RpcRequestStatus.Rejected);
        this.dispose();
    }
    /** @internal */
    dispose() {
        this.setStatus(RpcConstants_1.RpcRequestStatus.Disposed);
        this._raw = undefined;
        this._response = undefined;
        const client = this.client;
        if (client[RpcRegistry_1.CURRENT_REQUEST] === this) {
            client[RpcRegistry_1.CURRENT_REQUEST] = undefined;
        }
    }
    setPending(status, extendedStatus) {
        if (!this._active)
            return;
        this.setLastUpdatedTime();
        this._extendedStatus = extendedStatus;
        this.setStatus(status);
        RpcRequest.events.raiseEvent(RpcConstants_1.RpcRequestEvent.PendingUpdateReceived, this);
    }
    async setHeaders() {
        const headerNames = this.protocol.serializedClientRequestContextHeaderNames;
        const headerValues = await RpcConfiguration_1.RpcConfiguration.requestContext.serialize(this);
        if (headerNames.id)
            this.setHeader(headerNames.id, headerValues.id || this.id); // Cannot be empty
        if (headerNames.applicationVersion)
            this.setHeader(headerNames.applicationVersion, headerValues.applicationVersion);
        if (headerNames.applicationId)
            this.setHeader(headerNames.applicationId, headerValues.applicationId);
        if (headerNames.sessionId)
            this.setHeader(headerNames.sessionId, headerValues.sessionId);
        if (headerNames.authorization && headerValues.authorization)
            this.setHeader(headerNames.authorization, headerValues.authorization);
        if (headerNames.userId && headerValues.userId)
            this.setHeader(headerNames.userId, headerValues.userId);
    }
    setStatus(status) {
        if (this._status === status)
            return;
        this._status = status;
        RpcRequest.events.raiseEvent(RpcConstants_1.RpcRequestEvent.StatusChanged, this);
    }
}
/** Events raised by RpcRequest. See [[RpcRequestEvent]] */
RpcRequest.events = new bentleyjs_core_1.BeEvent();
/** Resolvers for "not found" requests. See [[RpcRequestNotFoundHandler]] */
RpcRequest.notFoundHandlers = new bentleyjs_core_1.BeEvent();
exports.RpcRequest = RpcRequest;
/** @internal */
exports.initializeRpcRequest = (() => {
    let initialized = false;
    return () => {
        if (initialized) {
            return;
        }
        initialized = true;
        RpcRequest.events.addListener((type, request) => {
            if (type !== RpcConstants_1.RpcRequestEvent.StatusChanged)
                return;
            switch (request.status) {
                case RpcConstants_1.RpcRequestStatus.Submitted: {
                    aggregateLoad.lastRequest = request.lastSubmitted;
                    break;
                }
                case RpcConstants_1.RpcRequestStatus.Pending:
                case RpcConstants_1.RpcRequestStatus.Resolved:
                case RpcConstants_1.RpcRequestStatus.Rejected: {
                    aggregateLoad.lastResponse = request.lastUpdated;
                    break;
                }
            }
        });
        RpcProtocol_1.RpcProtocol.events.addListener((type) => {
            const now = new Date().getTime();
            switch (type) {
                case RpcConstants_1.RpcProtocolEvent.RequestReceived: {
                    aggregateLoad.lastRequest = now;
                    break;
                }
                case RpcConstants_1.RpcProtocolEvent.BackendReportedPending:
                case RpcConstants_1.RpcProtocolEvent.BackendErrorOccurred:
                case RpcConstants_1.RpcProtocolEvent.BackendResponseCreated: {
                    aggregateLoad.lastResponse = now;
                    break;
                }
            }
        });
    };
})();


/***/ }),

/***/ "./lib/rpc/electron/ElectronIpcTransport.js":
/*!**************************************************!*\
  !*** ./lib/rpc/electron/ElectronIpcTransport.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcProtocol_1 = __webpack_require__(/*! ../core/RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const ElectronRpcProtocol_1 = __webpack_require__(/*! ./ElectronRpcProtocol */ "./lib/rpc/electron/ElectronRpcProtocol.js");
const OBJECTS_CHANNEL = "@bentley/imodeljs-common/ElectronRpcProtocol/objects";
const DATA_CHANNEL = "@bentley/imodeljs-common/ElectronRpcProtocol/data";
/** @internal */
exports.interop = (() => {
    let electron = null;
    if (typeof (global) !== "undefined" && global && global.process && global.process.type) {
        // tslint:disable-next-line:no-eval
        electron = eval("require")("electron");
    }
    return electron;
})();
/** @internal */
class ElectronIpcTransport {
    constructor(ipc) {
        this._ipc = ipc;
        this._partials = new Map();
        this._setupDataChannel();
        this._setupObjectsChannel();
    }
    sendRequest(request) {
        const value = this._extractValue(request);
        this._send(request, value);
    }
    _setupDataChannel() {
        this._ipc.on(DATA_CHANNEL, async (evt, chunk) => {
            let pending = this._partials.get(chunk.id);
            if (!pending) {
                pending = [];
                this._partials.set(chunk.id, pending);
            }
            if (Array.isArray(pending)) {
                pending.push(chunk);
            }
            else {
                ++pending.received;
                const value = this._extractValue(pending.message);
                value.data[chunk.index] = chunk.data;
                if (pending.received === (value.chunks || 0)) {
                    this.handleComplete(pending.message.id, evt);
                }
            }
        });
    }
    _setupObjectsChannel() {
        this._ipc.on(OBJECTS_CHANNEL, async (evt, message) => {
            const pending = this._partials.get(message.id);
            if (pending && !Array.isArray(pending)) {
                throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Message already received for id "${message.id}".`);
            }
            const partial = { message, received: 0 };
            this._partials.set(message.id, partial);
            const value = this._extractValue(partial.message);
            if (pending && Array.isArray(pending)) {
                for (const chunk of pending) {
                    ++partial.received;
                    value.data[chunk.index] = chunk.data;
                }
            }
            if (partial.received === (value.chunks || 0)) {
                this.handleComplete(message.id, evt);
            }
        });
    }
    _extractValue(t) {
        if (t.parameters) {
            return t.parameters;
        }
        if (t.result) {
            return t.result;
        }
        throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Unknown value type.");
    }
    _send(message, value, evt) {
        const chunks = value.data;
        if (chunks.length) {
            value.chunks = chunks.length;
            value.data = [];
        }
        (evt ? evt.sender : this._ipc).send(OBJECTS_CHANNEL, message);
        for (let index = 0; index !== chunks.length; ++index) {
            const chunk = { id: message.id, index, data: chunks[index] };
            (evt ? evt.sender : this._ipc).send(DATA_CHANNEL, chunk);
        }
    }
    sendResponse(message, evt) {
        const value = this._extractValue(message);
        this._send(message, value, evt);
    }
    loadMessage(id) {
        const partial = this._partials.get(id);
        if (!partial || Array.isArray(partial)) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Incomplete transmission for id "${id}".`);
        }
        this._partials.delete(id);
        return partial.message;
    }
}
exports.ElectronIpcTransport = ElectronIpcTransport;
class FrontendIpcTransport extends ElectronIpcTransport {
    async handleComplete(id) {
        const message = this.loadMessage(id);
        const protocol = ElectronRpcProtocol_1.ElectronRpcProtocol.instances.get(message.interfaceName);
        const request = protocol.requests.get(message.id);
        protocol.requests.delete(message.id);
        request.notifyResponse(message);
    }
}
class BackendIpcTransport extends ElectronIpcTransport {
    async handleComplete(id, evt) {
        const message = this.loadMessage(id);
        let response;
        try {
            const protocol = ElectronRpcProtocol_1.ElectronRpcProtocol.obtainInstance(message);
            response = await protocol.fulfill(message);
        }
        catch (err) {
            response = await RpcProtocol_1.RpcRequestFulfillment.forUnknownError(message, err);
        }
        this.sendResponse(response, evt);
    }
}
let transport;
if (exports.interop) {
    if (exports.interop.ipcMain) {
        transport = new BackendIpcTransport(exports.interop.ipcMain);
    }
    else if (exports.interop.ipcRenderer) {
        transport = new FrontendIpcTransport(exports.interop.ipcRenderer);
    }
}
/** @internal */
exports.ipcTransport = transport;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js */ "../../common/temp/node_modules/.registry.npmjs.org/webpack/4.32.2/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/rpc/electron/ElectronRpcManager.js":
/*!************************************************!*\
  !*** ./lib/rpc/electron/ElectronRpcManager.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcManager_1 = __webpack_require__(/*! ../../RpcManager */ "./lib/RpcManager.js");
const RpcConfiguration_1 = __webpack_require__(/*! ../core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const ElectronIpcTransport_1 = __webpack_require__(/*! ./ElectronIpcTransport */ "./lib/rpc/electron/ElectronIpcTransport.js");
const ElectronRpcProtocol_1 = __webpack_require__(/*! ./ElectronRpcProtocol */ "./lib/rpc/electron/ElectronRpcProtocol.js");
/** RPC interface configuration for an Electron-based application.
 * @beta
 */
class ElectronRpcConfiguration extends RpcConfiguration_1.RpcConfiguration {
    static get isElectron() { return ElectronIpcTransport_1.interop !== null; }
}
exports.ElectronRpcConfiguration = ElectronRpcConfiguration;
/** Coordinates usage of RPC interfaces for an Electron-based application.
 * @beta
 */
class ElectronRpcManager extends RpcManager_1.RpcManager {
    /** Initializes ElectronRpcManager for the frontend of an application. */
    static initializeClient(params, interfaces) {
        return ElectronRpcManager.performInitialization(params, interfaces);
    }
    /** Initializes ElectronRpcManager for the backend of an application. */
    static initializeImpl(params, interfaces) {
        return ElectronRpcManager.performInitialization(params, interfaces);
    }
    static performInitialization(params, interfaces) {
        const protocol = (params.protocol || ElectronRpcProtocol_1.ElectronRpcProtocol);
        const config = class extends ElectronRpcConfiguration {
            constructor() {
                super(...arguments);
                this.interfaces = () => interfaces;
                this.protocol = new protocol(this);
            }
        };
        for (const def of interfaces) {
            RpcConfiguration_1.RpcConfiguration.assign(def, () => config);
        }
        const instance = RpcConfiguration_1.RpcConfiguration.obtain(config);
        RpcConfiguration_1.RpcConfiguration.initializeInterfaces(instance);
        return instance;
    }
}
exports.ElectronRpcManager = ElectronRpcManager;


/***/ }),

/***/ "./lib/rpc/electron/ElectronRpcProtocol.js":
/*!*************************************************!*\
  !*** ./lib/rpc/electron/ElectronRpcProtocol.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcProtocol_1 = __webpack_require__(/*! ../core/RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const RpcRegistry_1 = __webpack_require__(/*! ../core/RpcRegistry */ "./lib/rpc/core/RpcRegistry.js");
const ElectronRpcRequest_1 = __webpack_require__(/*! ./ElectronRpcRequest */ "./lib/rpc/electron/ElectronRpcRequest.js");
/** RPC interface protocol for an Electron-based application.
 * @beta
 */
class ElectronRpcProtocol extends RpcProtocol_1.RpcProtocol {
    /** Constructs an Electron protocol. */
    constructor(configuration) {
        super(configuration);
        /** The RPC request class for this protocol. */
        this.requestType = ElectronRpcRequest_1.ElectronRpcRequest;
        /** Specifies where to break large binary request payloads. */
        this.transferChunkThreshold = 48 * 1024 * 1024;
        /** @internal */
        this.requests = new Map();
    }
    static obtainInstance(request) {
        const interfaceName = request.operation.interfaceDefinition;
        let protocol = ElectronRpcProtocol.instances.get(interfaceName);
        if (!protocol) {
            RpcRegistry_1.RpcRegistry.instance.lookupImpl(interfaceName);
            protocol = ElectronRpcProtocol.instances.get(interfaceName);
        }
        return protocol;
    }
    /** @internal */
    onRpcClientInitialized(definition, _client) {
        this.registerInterface(definition);
    }
    /** @internal */
    onRpcImplInitialized(definition, _impl) {
        this.registerInterface(definition);
    }
    /** @internal */
    onRpcClientTerminated(definition, _client) {
        this.purgeInterface(definition);
    }
    /** @internal */
    onRpcImplTerminated(definition, _impl) {
        this.purgeInterface(definition);
    }
    registerInterface(definition) {
        if (ElectronRpcProtocol.instances.has(definition.interfaceName))
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `RPC interface "${definition.interfaceName}"" is already associated with a protocol.`);
        ElectronRpcProtocol.instances.set(definition.interfaceName, this);
    }
    purgeInterface(definition) {
        ElectronRpcProtocol.instances.delete(definition.interfaceName);
    }
}
ElectronRpcProtocol.instances = new Map();
exports.ElectronRpcProtocol = ElectronRpcProtocol;


/***/ }),

/***/ "./lib/rpc/electron/ElectronRpcRequest.js":
/*!************************************************!*\
  !*** ./lib/rpc/electron/ElectronRpcRequest.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcRequest_1 = __webpack_require__(/*! ../core/RpcRequest */ "./lib/rpc/core/RpcRequest.js");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const ElectronIpcTransport_1 = __webpack_require__(/*! ./ElectronIpcTransport */ "./lib/rpc/electron/ElectronIpcTransport.js");
/** @beta */
class ElectronRpcRequest extends RpcRequest_1.RpcRequest {
    constructor() {
        super(...arguments);
        this._res = () => undefined;
        this._fulfillment = undefined;
        /** Convenience access to the protocol of this request. */
        this.protocol = this.client.configuration.protocol;
    }
    /** Sends the request. */
    async send() {
        try {
            this.protocol.requests.set(this.id, this);
            const request = await this.protocol.serialize(this);
            ElectronIpcTransport_1.ipcTransport.sendRequest(request);
        }
        catch (e) {
            this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.ConnectionErrorReceived, this);
        }
        return new Promise((resolve) => { this._res = resolve; });
    }
    /** Loads the request. */
    async load() {
        const fulfillment = this._fulfillment;
        if (!fulfillment) {
            return Promise.reject("No request fulfillment available.");
        }
        return Promise.resolve(fulfillment.result);
    }
    /** Sets request header values. */
    setHeader(_name, _value) {
        // No implementation
    }
    /** @internal */
    notifyResponse(fulfillment) {
        this._fulfillment = fulfillment;
        this._res(fulfillment.status);
    }
}
exports.ElectronRpcRequest = ElectronRpcRequest;


/***/ }),

/***/ "./lib/rpc/mobile/MobileRpcManager.js":
/*!********************************************!*\
  !*** ./lib/rpc/mobile/MobileRpcManager.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RpcConfiguration_1 = __webpack_require__(/*! ../core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const MobileRpcProtocol_1 = __webpack_require__(/*! ./MobileRpcProtocol */ "./lib/rpc/mobile/MobileRpcProtocol.js");
/** Holds configuration for the RpcInterfaces used by the application.
 * @beta
 */
class MobileRpcConfiguration extends RpcConfiguration_1.RpcConfiguration {
    static getMobilePlatform() {
        if (typeof window === "undefined") {
            return RpcConstants_1.RpcMobilePlatform.Unknown;
        }
        const win = window;
        const userAgent = win.navigator.userAgent || win.navigator.vendor || win.opera;
        if (/android/i.test(userAgent)) {
            return RpcConstants_1.RpcMobilePlatform.Android;
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !win.MSStream) {
            return RpcConstants_1.RpcMobilePlatform.iOS;
        }
        return RpcConstants_1.RpcMobilePlatform.Unknown;
    }
    /** Check if running backend running on mobile */
    static get isMobileBackend() { return MobileRpcProtocol_1.interop !== null; }
    /** Check if running backend running on mobile */
    static get isMobileFrontend() { return MobileRpcConfiguration.platform !== RpcConstants_1.RpcMobilePlatform.Unknown; }
    /** Check if running backend running on wkwebview on ios */
    static get isIOSFrontend() { return MobileRpcConfiguration.isMobileFrontend && window.webkit && window.webkit.messageHandlers; }
}
/** Return type of mobile platform using browser userAgent */
MobileRpcConfiguration.platform = MobileRpcConfiguration.getMobilePlatform();
exports.MobileRpcConfiguration = MobileRpcConfiguration;
/** Coordinates usage of RPC interfaces for an Mobile-based application.
 * @beta
 */
class MobileRpcManager {
    static performInitialization(interfaces, endPoint) {
        const config = class extends MobileRpcConfiguration {
            constructor() {
                super(...arguments);
                this.interfaces = () => interfaces;
                this.protocol = new MobileRpcProtocol_1.MobileRpcProtocol(this, endPoint);
            }
        };
        for (const def of interfaces) {
            RpcConfiguration_1.RpcConfiguration.assign(def, () => config);
        }
        const instance = RpcConfiguration_1.RpcConfiguration.obtain(config);
        RpcConfiguration_1.RpcConfiguration.initializeInterfaces(instance);
        return instance;
    }
    /** Initializes MobileRpcManager for the frontend of an application. */
    static initializeClient(interfaces) {
        return MobileRpcManager.performInitialization(interfaces, RpcConstants_1.RpcEndpoint.Frontend);
    }
    /** Initializes MobileRpcManager for the backend of an application. */
    static initializeImpl(interfaces) {
        return MobileRpcManager.performInitialization(interfaces, RpcConstants_1.RpcEndpoint.Backend);
    }
}
exports.MobileRpcManager = MobileRpcManager;


/***/ }),

/***/ "./lib/rpc/mobile/MobileRpcProtocol.js":
/*!*********************************************!*\
  !*** ./lib/rpc/mobile/MobileRpcProtocol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const RpcProtocol_1 = __webpack_require__(/*! ../core/RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const MobileRpcRequest_1 = __webpack_require__(/*! ./MobileRpcRequest */ "./lib/rpc/mobile/MobileRpcRequest.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
/** @internal */
exports.CHANNEL = "@bentley/imodeljs-mobilegateway";
/** @internal */
exports.interop = (() => {
    let mobilegateway = null;
    if (typeof window === "undefined" && typeof (bentley) !== "undefined") {
        // tslint:disable-next-line:no-eval
        mobilegateway = bentley.imodeljs.servicesTier.require(exports.CHANNEL);
    }
    return mobilegateway;
})();
/** RPC interface protocol for an Mobile-based application.
 * @beta
 */
class MobileRpcProtocol extends RpcProtocol_1.RpcProtocol {
    constructor(configuration, endPoint) {
        super(configuration);
        this.socket = undefined;
        this.requests = new Map();
        this._pending = [];
        this._capacity = 1;
        this._sendInterval = undefined;
        this._sendIntervalHandler = () => this.trySend();
        this.requestType = MobileRpcRequest_1.MobileRpcRequest;
        this._partialRequest = undefined;
        this._partialFulfillment = undefined;
        this._partialData = [];
        if (endPoint === RpcConstants_1.RpcEndpoint.Frontend) {
            this.initializeFrontend();
        }
        else if (endPoint === RpcConstants_1.RpcEndpoint.Backend) {
            this.initializeBackend();
        }
    }
    static async encodeRequest(request) {
        const serialized = await request.protocol.serialize(request);
        const data = serialized.parameters.data;
        serialized.parameters.data = data.map((v) => v.byteLength);
        return [JSON.stringify(serialized), ...data];
    }
    static encodeResponse(fulfillment) {
        const data = fulfillment.result.data;
        fulfillment.result.data = data.map((v) => v.byteLength);
        const raw = fulfillment.rawResult;
        fulfillment.rawResult = undefined;
        const encoded = [JSON.stringify(fulfillment), ...data];
        fulfillment.rawResult = raw;
        return encoded;
    }
    initializeFrontend() {
        if (typeof (WebSocket) === "undefined") {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "MobileRpcProtocol on frontend require websocket to work");
        }
        this.socket = new WebSocket(`ws://localhost:${window.location.hash.substr(1)}`);
        this.socket.binaryType = "arraybuffer";
        this.socket.addEventListener("message", async (event) => this.handleMessageFromBackend(event.data));
        this.socket.addEventListener("open", (_event) => this.scheduleSend());
    }
    scheduleSend() {
        if (!this._pending.length) {
            return;
        }
        this.trySend();
        if (this._pending.length && typeof (this._sendInterval) === "undefined") {
            this._sendInterval = window.setInterval(this._sendIntervalHandler, 0);
        }
    }
    trySend() {
        if (this.socket.readyState !== WebSocket.OPEN) {
            return;
        }
        while (this._capacity !== 0 && this._pending.length) {
            --this._capacity;
            const next = this._pending.shift();
            for (const chunk of next) {
                this.socket.send(chunk);
            }
        }
        if (!this._pending.length && typeof (this._sendInterval) !== "undefined") {
            window.clearInterval(this._sendInterval);
            this._sendInterval = undefined;
        }
    }
    handleMessageFromBackend(data) {
        if (typeof (data) === "string") {
            this.handleStringFromBackend(data);
        }
        else {
            this.handleBinaryFromBackend(data);
        }
    }
    handleStringFromBackend(data) {
        if (this._partialFulfillment) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (already receiving response).");
        }
        const response = JSON.parse(data);
        this._partialFulfillment = response;
        if (!response.result.data.length) {
            this.notifyResponse();
        }
    }
    handleBinaryFromBackend(data) {
        const fulfillment = this._partialFulfillment;
        if (!fulfillment) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (no response received).");
        }
        this._partialData.push(new Uint8Array(data));
        if (this._partialData.length === fulfillment.result.data.length) {
            this.notifyResponse();
        }
    }
    notifyResponse() {
        const response = this._partialFulfillment;
        if (!response) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (no response exists).");
        }
        ++this._capacity;
        this.consumePartialData(response.result);
        this._partialFulfillment = undefined;
        const request = this.requests.get(response.id);
        this.requests.delete(response.id);
        request.notifyResponse(response);
    }
    consumePartialData(value) {
        for (let i = 0, l = value.data.length; i !== l; ++i) {
            value.data[i] = this._partialData[i];
        }
        this._partialData.length = 0;
    }
    initializeBackend() {
        const mobilegateway = exports.interop;
        if (mobilegateway === undefined || mobilegateway == null) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "MobileRpcProtocol on backend require native bridge to be setup");
        }
        mobilegateway.handler = (payload) => this.handleMessageFromFrontend(payload);
        self.__imodeljs_mobilegateway_handler__ = mobilegateway.handler;
    }
    handleMessageFromFrontend(data) {
        if (typeof (data) === "string") {
            this.handleStringFromFrontend(data);
        }
        else {
            this.handleBinaryFromFrontend(data);
        }
    }
    handleStringFromFrontend(data) {
        if (this._partialRequest) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (already receiving request).");
        }
        const request = JSON.parse(data);
        this._partialRequest = request;
        if (!request.parameters.data.length) {
            this.notifyRequest(); // tslint:disable-line:no-floating-promises
        }
    }
    handleBinaryFromFrontend(data) {
        const request = this._partialRequest;
        if (!request) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (no request received).");
        }
        this._partialData.push(new Uint8Array(data));
        if (this._partialData.length === request.parameters.data.length) {
            this.notifyRequest(); // tslint:disable-line:no-floating-promises
        }
    }
    async notifyRequest() {
        const request = this._partialRequest;
        if (!request) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state (no request exists).");
        }
        this.consumePartialData(request.parameters);
        this._partialRequest = undefined;
        const fulfillment = await this.fulfill(request);
        const response = MobileRpcProtocol.encodeResponse(fulfillment);
        this.sendToFrontend(response);
    }
    sendToBackend(message) {
        this._pending.push(message);
        this.scheduleSend();
    }
    sendToFrontend(message) {
        const mobilegateway = exports.interop;
        for (const chunk of message) {
            if (typeof (chunk) === "string") {
                mobilegateway.sendString(chunk);
            }
            else {
                mobilegateway.sendBinary(chunk);
            }
        }
    }
}
exports.MobileRpcProtocol = MobileRpcProtocol;


/***/ }),

/***/ "./lib/rpc/mobile/MobileRpcRequest.js":
/*!********************************************!*\
  !*** ./lib/rpc/mobile/MobileRpcRequest.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RpcRequest_1 = __webpack_require__(/*! ../core/RpcRequest */ "./lib/rpc/core/RpcRequest.js");
const MobileRpcProtocol_1 = __webpack_require__(/*! ./MobileRpcProtocol */ "./lib/rpc/mobile/MobileRpcProtocol.js");
/** @beta */
class MobileRpcRequest extends RpcRequest_1.RpcRequest {
    constructor() {
        super(...arguments);
        this._res = () => undefined;
        this._fulfillment = undefined;
        /** Convenience access to the protocol of this request. */
        this.protocol = this.client.configuration.protocol;
    }
    /** Sends the request. */
    async send() {
        this.protocol.requests.set(this.id, this);
        const parts = await MobileRpcProtocol_1.MobileRpcProtocol.encodeRequest(this);
        this.protocol.sendToBackend(parts);
        return new Promise((resolve) => { this._res = resolve; });
    }
    /** Loads the request. */
    async load() {
        const fulfillment = this._fulfillment;
        if (!fulfillment) {
            return Promise.reject("No request fulfillment available.");
        }
        return Promise.resolve(fulfillment.result);
    }
    /** Sets request header values. */
    setHeader(_name, _value) {
        // No implementation
    }
    /** @internal */
    notifyResponse(fulfillment) {
        this._fulfillment = fulfillment;
        this._res(fulfillment.status);
    }
}
exports.MobileRpcRequest = MobileRpcRequest;


/***/ }),

/***/ "./lib/rpc/web/BentleyCloudRpcManager.js":
/*!***********************************************!*\
  !*** ./lib/rpc/web/BentleyCloudRpcManager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcManager_1 = __webpack_require__(/*! ../../RpcManager */ "./lib/RpcManager.js");
const RpcConfiguration_1 = __webpack_require__(/*! ../core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
const RpcRequest_1 = __webpack_require__(/*! ../core/RpcRequest */ "./lib/rpc/core/RpcRequest.js");
const BentleyCloudRpcProtocol_1 = __webpack_require__(/*! ./BentleyCloudRpcProtocol */ "./lib/rpc/web/BentleyCloudRpcProtocol.js");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
/** Operating parameters for Bentley cloud RPC interface deployments.
 * @public
 */
class BentleyCloudRpcConfiguration extends RpcConfiguration_1.RpcConfiguration {
}
exports.BentleyCloudRpcConfiguration = BentleyCloudRpcConfiguration;
/** Coordinates usage of RPC interfaces for Bentley cloud deployments.
 * @public
 */
class BentleyCloudRpcManager extends RpcManager_1.RpcManager {
    /** Initializes BentleyCloudRpcManager for the frontend of an application. */
    static initializeClient(params, interfaces) {
        return BentleyCloudRpcManager.performInitialization(params, interfaces);
    }
    /** Initializes BentleyCloudRpcManager for the backend of an application. */
    static initializeImpl(params, interfaces) {
        return BentleyCloudRpcManager.performInitialization(params, interfaces);
    }
    static performInitialization(params, interfaces) {
        const protocol = class extends (params.protocol || BentleyCloudRpcProtocol_1.BentleyCloudRpcProtocol) {
            constructor() {
                super(...arguments);
                this.pathPrefix = params.uriPrefix || "";
                this.info = params.info;
            }
        };
        const config = class extends BentleyCloudRpcConfiguration {
            constructor() {
                super(...arguments);
                this.interfaces = () => interfaces;
                this.protocol = new protocol(this);
            }
        };
        for (const def of interfaces) {
            RpcConfiguration_1.RpcConfiguration.assign(def, () => config);
        }
        const instance = RpcConfiguration_1.RpcConfiguration.obtain(config);
        RpcConfiguration_1.RpcConfiguration.initializeInterfaces(instance);
        if (params.pendingRequestListener) {
            const listener = params.pendingRequestListener;
            RpcRequest_1.RpcRequest.events.addListener((type, request) => {
                if (type === RpcConstants_1.RpcRequestEvent.PendingUpdateReceived && request.protocol === instance.protocol) {
                    listener(type, request);
                }
            });
        }
        return instance;
    }
}
exports.BentleyCloudRpcManager = BentleyCloudRpcManager;


/***/ }),

/***/ "./lib/rpc/web/BentleyCloudRpcProtocol.js":
/*!************************************************!*\
  !*** ./lib/rpc/web/BentleyCloudRpcProtocol.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const url_1 = __webpack_require__(/*! url */ "../../common/temp/node_modules/.registry.npmjs.org/url/0.11.0/node_modules/url/url.js");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const CommonLoggerCategory_1 = __webpack_require__(/*! ../../CommonLoggerCategory */ "./lib/CommonLoggerCategory.js");
const WebAppRpcProtocol_1 = __webpack_require__(/*! ./WebAppRpcProtocol */ "./lib/rpc/web/WebAppRpcProtocol.js");
const IModel_1 = __webpack_require__(/*! ../../IModel */ "./lib/IModel.js");
const RpcConfiguration_1 = __webpack_require__(/*! ../core/RpcConfiguration */ "./lib/rpc/core/RpcConfiguration.js");
var AppMode;
(function (AppMode) {
    AppMode["MilestoneReview"] = "1";
    AppMode["WorkGroupEdit"] = "2";
})(AppMode || (AppMode = {}));
/** An http protocol for Bentley cloud RPC interface deployments.
 * @public
 */
class BentleyCloudRpcProtocol extends WebAppRpcProtocol_1.WebAppRpcProtocol {
    constructor() {
        super(...arguments);
        this.checkToken = true;
        /** The name of various HTTP request headers based on client's request context */
        this.serializedClientRequestContextHeaderNames = {
            /** The name of the HTTP request id header. */
            id: "X-Correlation-Id",
            /** The name of the HTTP application id header. */
            applicationId: "X-Application-Id",
            /** The name of the HTTP application version header. */
            applicationVersion: "X-Application-Version",
            /** The name of the HTTP session id header. */
            sessionId: "X-Session-Id",
            /** The name of the HTTP authorization header. */
            authorization: "Authorization",
            /** The id of the authorized user */
            userId: "X-User-Id",
        };
    }
    /** Returns the operation specified by an OpenAPI-compatible URI path. */
    getOperationFromPath(path) {
        const url = new url_1.URL(path, "https://localhost/");
        const components = url.pathname.split("/");
        const operationComponent = components.slice(-1)[0];
        const encodedRequest = url.searchParams.get("parameters") || "";
        const firstHyphen = operationComponent.indexOf("-");
        const lastHyphen = operationComponent.lastIndexOf("-");
        const interfaceDefinition = operationComponent.slice(0, firstHyphen);
        const interfaceVersion = operationComponent.slice(firstHyphen + 1, lastHyphen);
        const operationName = operationComponent.slice(lastHyphen + 1);
        return { interfaceDefinition, operationName, interfaceVersion, encodedRequest };
    }
    /** Supplies the OpenAPI-compatible URI path for an RPC operation. */
    supplyPathForOperation(operation, request) {
        const prefix = this.pathPrefix;
        const appTitle = this.info.title;
        const appVersion = this.info.version;
        const operationId = `${operation.interfaceDefinition.interfaceName}-${operation.interfaceVersion}-${operation.operationName}`;
        let appMode;
        let contextId;
        let iModelId;
        let routeChangeSetId;
        /* Note: The changeSetId field is omitted in the route in the case of ReadWrite connections since the connection is generally expected to be at the
         * latest version and not some specific changeSet. Also, for the first version (before any changeSets), the changeSetId in the route is arbitrarily
         * set to "0" instead of an empty string, since the latter is more un-intuitive for a route. However, in all other use cases, including the changeSetId
         * held by the IModelToken itself, the changeSetId of "" (i.e., empty string) signifies the first version - this is more intuitive and retains
         * compatibility with the majority of use cases. */
        if (request === undefined) {
            appMode = "{modeId}";
            contextId = "{contextId}";
            iModelId = "{iModelId}";
            routeChangeSetId = "{changeSetId}";
        }
        else {
            const token = operation.policy.token(request);
            if (!token || (!token.contextId && !RpcConfiguration_1.RpcConfiguration.developmentMode) || !token.iModelId)
                throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid iModelToken for RPC operation request", bentleyjs_core_1.Logger.logError, CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceFrontend);
            contextId = encodeURIComponent(token.contextId || "");
            iModelId = encodeURIComponent(token.iModelId);
            if (token.openMode === bentleyjs_core_1.OpenMode.Readonly) {
                appMode = AppMode.MilestoneReview;
                bentleyjs_core_1.assert(token.changeSetId !== undefined, "ChangeSetId needs to be setup in IModelToken before open");
                routeChangeSetId = token.changeSetId === "" ? "0" : token.changeSetId;
            }
            else {
                appMode = AppMode.WorkGroupEdit;
            }
        }
        return `${prefix}/${appTitle}/${appVersion}/mode/${appMode}/context/${contextId}/imodel/${iModelId}${!!routeChangeSetId ? "/changeset/" + routeChangeSetId : ""}/${operationId}`;
    }
    /**
     * Inflates the IModelToken from the URL path for each request on the backend.
     * @note This function updates the IModelToken value supplied in the request body.
     */
    inflateToken(tokenFromBody, request) {
        const urlPathComponents = request.path.split("/");
        const iModelKey = tokenFromBody.key;
        let openMode = tokenFromBody.openMode;
        let iModelId = tokenFromBody.iModelId;
        let contextId = tokenFromBody.contextId;
        let changeSetId = tokenFromBody.changeSetId;
        for (let i = 0; i <= urlPathComponents.length; ++i) {
            const key = urlPathComponents[i];
            const value = urlPathComponents[i + 1];
            if (key === "mode") {
                openMode = (value === AppMode.WorkGroupEdit) ? bentleyjs_core_1.OpenMode.ReadWrite : bentleyjs_core_1.OpenMode.Readonly;
                ++i;
            }
            else if (key === "context") {
                contextId = value;
                ++i;
            }
            else if (key === "imodel") {
                iModelId = value;
                ++i;
            }
            else if (key === "changeset") {
                changeSetId = (value === "0") ? "" : value;
                ++i;
            }
        }
        return new IModel_1.IModelToken(iModelKey, contextId, iModelId, changeSetId, openMode);
    }
    /** Returns the OpenAPI-compatible URI path parameters for an RPC operation.
     * @internal
     */
    supplyPathParametersForOperation(_operation) {
        return [
            { name: "modeId", in: "path", required: true, schema: { type: "string" } },
            { name: "contextId", in: "path", required: true, schema: { type: "string" } },
            { name: "iModelId", in: "path", required: true, schema: { type: "string" } },
            { name: "changeSetId", in: "path", required: false, schema: { type: "string" } },
        ];
    }
}
exports.BentleyCloudRpcProtocol = BentleyCloudRpcProtocol;


/***/ }),

/***/ "./lib/rpc/web/OpenAPI.js":
/*!********************************!*\
  !*** ./lib/rpc/web/OpenAPI.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcOperation_1 = __webpack_require__(/*! ../core/RpcOperation */ "./lib/rpc/core/RpcOperation.js");
/** An OpenAPI-compatible description of an RPC protocol.
 * @internal
 */
class RpcOpenAPIDescription {
    /** The OpenAPI paths object for the protocol. */
    get paths() {
        const paths = {};
        this.protocol.configuration.interfaces().forEach((definition) => {
            RpcOperation_1.RpcOperation.forEach(definition, (operation) => {
                const path = this.protocol.supplyPathForOperation(operation, undefined);
                paths[path] = this.generateDescription(operation);
            });
        });
        return paths;
    }
    /** An OpenAPI 3.0 (Swagger) description of the RESTful API that is exposed through the protocol. */
    get document() {
        return {
            openapi: "3.0.0",
            info: this.protocol.info,
            paths: this.paths,
        };
    }
    /** Creates an OpenAPI description of an RPC protocol. */
    constructor(protocol) {
        this.protocol = protocol;
    }
    /** Converts to JSON. */
    toJSON() {
        return this.document;
    }
    generateDescription(operation) {
        const requestContent = { "application/json": { schema: { type: "array" } } };
        const responseContent = { "application/json": { schema: { type: "object" } } };
        const description = {};
        description.head = {
            requestBody: { content: requestContent, required: true },
            responses: {
                200: { description: "Success", content: responseContent },
                default: { description: "Error", content: responseContent },
            },
        };
        const parameters = this.protocol.supplyPathParametersForOperation(operation);
        if (parameters.length)
            description.parameters = parameters;
        return description;
    }
}
exports.RpcOpenAPIDescription = RpcOpenAPIDescription;


/***/ }),

/***/ "./lib/rpc/web/RpcMultipart.js":
/*!*************************************!*\
  !*** ./lib/rpc/web/RpcMultipart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
/** Support for transporting RPC values using the HTTP multipart content type.
 * @internal
 */
class RpcMultipart {
    /** Creates a multipart form object for an RPC value. */
    static createForm(value) {
        const form = new FormData();
        RpcMultipart.writeValueToForm(form, value);
        return form;
    }
    /** Creates a multipart stream for an RPC value. */
    static createStream(_value) {
        throw new IModelError_1.IModelError(IModelError_1.BentleyStatus.ERROR, "Not implemented.");
    }
    /** Obtains the RPC value from a multipart HTTP request. */
    static async parseRequest(_req) {
        throw new IModelError_1.IModelError(IModelError_1.BentleyStatus.ERROR, "Not implemented.");
    }
    /** @internal */
    static writeValueToForm(form, value) {
        form.append("objects", value.objects);
        for (let i = 0; i !== value.data.length; ++i) {
            if (typeof (Blob) !== "undefined") {
                form.append(`data-${i}`, new Blob([value.data[i]], { type: "application/octet-stream" }));
            }
            else {
                const buf = value.data[i];
                form.append(`data-${i}`, Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength));
            }
        }
    }
}
exports.RpcMultipart = RpcMultipart;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/rpc/web/WebAppRpcLogging.js":
/*!*****************************************!*\
  !*** ./lib/rpc/web/WebAppRpcLogging.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcInvocation_1 = __webpack_require__(/*! ../core/RpcInvocation */ "./lib/rpc/core/RpcInvocation.js");
const WebAppRpcRequest_1 = __webpack_require__(/*! ./WebAppRpcRequest */ "./lib/rpc/web/WebAppRpcRequest.js");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const CommonLoggerCategory_1 = __webpack_require__(/*! ../../CommonLoggerCategory */ "./lib/CommonLoggerCategory.js");
// tslint:disable-next-line:no-var-requires
const os = (typeof (process) !== "undefined") ? __webpack_require__(/*! os */ "../../common/temp/node_modules/.registry.npmjs.org/os-browserify/0.3.0/node_modules/os-browserify/browser.js") : undefined;
function getHostname() {
    if (os !== undefined) {
        return os.hostname();
    }
    else {
        if (typeof (window) !== "undefined") {
            return window.location.host;
        }
        else {
            return "imodeljs-mobile";
        }
    }
}
/** @internal */
class WebAppRpcLogging {
    static logProtocolEvent(event, object) {
        if (object instanceof WebAppRpcRequest_1.WebAppRpcRequest) {
            switch (event) {
                case RpcConstants_1.RpcProtocolEvent.RequestCreated: return WebAppRpcLogging.logRequest(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceFrontend, "RpcInterface.frontend.request", object);
                case RpcConstants_1.RpcProtocolEvent.ResponseLoaded: return WebAppRpcLogging.logResponse(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceFrontend, "RpcInterface.frontend.response", object, object.metadata.status, object.elapsed);
                case RpcConstants_1.RpcProtocolEvent.ConnectionErrorReceived: return WebAppRpcLogging.logErrorFrontend("RpcInterface.frontend.connectionError", object);
                case RpcConstants_1.RpcProtocolEvent.ConnectionAborted: return WebAppRpcLogging.logErrorFrontend("RpcInterface.frontend.connectionAborted", object);
            }
        }
        else if (object instanceof RpcInvocation_1.RpcInvocation) {
            switch (event) {
                case RpcConstants_1.RpcProtocolEvent.RequestReceived: return WebAppRpcLogging.logRequest(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceBackend, "RpcInterface.backend.request", object.request);
                case RpcConstants_1.RpcProtocolEvent.BackendErrorOccurred: return WebAppRpcLogging.logErrorBackend("RpcInterface.backend.error", object);
                case RpcConstants_1.RpcProtocolEvent.BackendResponseCreated: return WebAppRpcLogging.logResponse(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceBackend, "RpcInterface.backend.response", object.request, object.status, object.elapsed);
            }
        }
    }
    static getRpcInterfaceName(g) {
        return (typeof g === "string") ? g : g.interfaceName;
    }
    static findPathIds(path) {
        let contextId = "";
        let iModelId = "";
        const tokens = path.split("/");
        for (let i = 0; i !== tokens.length; ++i) {
            if ((/^context$/i).test(tokens[i])) {
                contextId = tokens[i + 1] || "";
            }
            if ((/^imodel$/i).test(tokens[i])) {
                iModelId = tokens[i + 1] || "";
            }
        }
        return { contextId, iModelId };
    }
    static buildOperationDescriptor(operation) {
        const interfaceName = typeof (operation.interfaceDefinition) === "string" ? operation.interfaceDefinition : operation.interfaceDefinition.interfaceName;
        const operationName = operation.operationName;
        return `${interfaceName}.${operationName}`;
    }
    static logRequest(loggerCategory, message, object) {
        const operationDescriptor = WebAppRpcLogging.buildOperationDescriptor(object.operation);
        const pathIds = WebAppRpcLogging.findPathIds(object.path);
        bentleyjs_core_1.Logger.logTrace(loggerCategory, `${message}.${operationDescriptor}`, () => (Object.assign({ method: object.method, path: object.path, operation: object.operation.operationName, rpcInterface: WebAppRpcLogging.getRpcInterfaceName(object.operation.interfaceDefinition), 
            // Alert! The following properties are required by Bentley DevOps standards. Do not change their names!
            ActivityId: object.id, TimeElapsed: ("elapsed" in object) ? object.elapsed : 0, MachineName: getHostname() }, pathIds)));
    }
    static logResponse(loggerCategory, message, object, status, elapsed) {
        const operationDescriptor = WebAppRpcLogging.buildOperationDescriptor(object.operation);
        const pathIds = WebAppRpcLogging.findPathIds(object.path);
        bentleyjs_core_1.Logger.logTrace(loggerCategory, `${message}.${operationDescriptor}`, () => (Object.assign({ method: object.method, path: object.path, operation: object.operation.operationName, rpcInterface: WebAppRpcLogging.getRpcInterfaceName(object.operation.interfaceDefinition), status, 
            // Alert! The following properties are required by Bentley DevOps standards. Do not change their names!
            ActivityId: object.id, TimeElapsed: elapsed, MachineName: getHostname() }, pathIds)));
    }
    static logErrorFrontend(message, request) {
        const operationDescriptor = WebAppRpcLogging.buildOperationDescriptor(request.operation);
        const pathIds = WebAppRpcLogging.findPathIds(request.path);
        bentleyjs_core_1.Logger.logInfo(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceFrontend, `${message}.${operationDescriptor}`, () => (Object.assign({ method: request.method, path: request.path, 
            // Alert! The following properties are required by Bentley DevOps standards. Do not change their names!
            ActivityId: request.id, MachineName: getHostname() }, pathIds)));
    }
    static logErrorBackend(message, invocation) {
        const operationDescriptor = WebAppRpcLogging.buildOperationDescriptor(invocation.operation);
        const pathIds = WebAppRpcLogging.findPathIds(invocation.request.path);
        bentleyjs_core_1.Logger.logInfo(CommonLoggerCategory_1.CommonLoggerCategory.RpcInterfaceBackend, `${message}.${operationDescriptor}`, () => (Object.assign({ method: invocation.request.method, path: invocation.request.path, status: invocation.status, error: invocation.result, 
            // Alert! The following properties are required by Bentley DevOps standards. Do not change their names!
            ActivityId: invocation.request.id, MachineName: getHostname() }, pathIds)));
    }
}
exports.WebAppRpcLogging = WebAppRpcLogging;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js */ "../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/rpc/web/WebAppRpcProtocol.js":
/*!******************************************!*\
  !*** ./lib/rpc/web/WebAppRpcProtocol.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const RpcProtocol_1 = __webpack_require__(/*! ../core/RpcProtocol */ "./lib/rpc/core/RpcProtocol.js");
const OpenAPI_1 = __webpack_require__(/*! ./OpenAPI */ "./lib/rpc/web/OpenAPI.js");
const WebAppRpcLogging_1 = __webpack_require__(/*! ./WebAppRpcLogging */ "./lib/rpc/web/WebAppRpcLogging.js");
const WebAppRpcRequest_1 = __webpack_require__(/*! ./WebAppRpcRequest */ "./lib/rpc/web/WebAppRpcRequest.js");
/** The HTTP application protocol.
 * @public
 */
class WebAppRpcProtocol extends RpcProtocol_1.RpcProtocol {
    /** Constructs an HTTP protocol. */
    constructor(configuration) {
        super(configuration);
        this.preserveStreams = true;
        /** An optional prefix for RPC operation URI paths. */
        this.pathPrefix = "";
        /** The RPC request class for this protocol. */
        this.requestType = WebAppRpcRequest_1.WebAppRpcRequest;
        this.events.addListener(WebAppRpcLogging_1.WebAppRpcLogging.logProtocolEvent);
    }
    /** Convenience handler for an RPC operation get request for an HTTP server. */
    async handleOperationGetRequest(req, res) {
        return this.handleOperationPostRequest(req, res);
    }
    /** Convenience handler for an RPC operation post request for an HTTP server. */
    async handleOperationPostRequest(req, res) {
        const request = await WebAppRpcRequest_1.WebAppRpcRequest.parseRequest(this, req);
        const fulfillment = await this.fulfill(request);
        WebAppRpcRequest_1.WebAppRpcRequest.sendResponse(this, request, fulfillment, res);
    }
    /** Convenience handler for an OpenAPI description request for an HTTP server. */
    handleOpenApiDescriptionRequest(_req, res) {
        const description = JSON.stringify(this.openAPIDescription);
        res.send(description);
    }
    /** Converts an HTTP content type value to an RPC content type value. */
    static computeContentType(httpType) {
        if (!httpType)
            return RpcConstants_1.RpcContentType.Unknown;
        if (httpType.indexOf(RpcConstants_1.WEB_RPC_CONSTANTS.ANY_TEXT) === 0) {
            return RpcConstants_1.RpcContentType.Text;
        }
        else if (httpType.indexOf(RpcConstants_1.WEB_RPC_CONSTANTS.BINARY) === 0) {
            return RpcConstants_1.RpcContentType.Binary;
        }
        else if (httpType.indexOf(RpcConstants_1.WEB_RPC_CONSTANTS.MULTIPART) === 0) {
            return RpcConstants_1.RpcContentType.Multipart;
        }
        else {
            return RpcConstants_1.RpcContentType.Unknown;
        }
    }
    /** Supplies the status corresponding to a protocol-specific code value. */
    getStatus(code) {
        switch (code) {
            case 404: return RpcConstants_1.RpcRequestStatus.NotFound;
            case 202: return RpcConstants_1.RpcRequestStatus.Pending;
            case 200: return RpcConstants_1.RpcRequestStatus.Resolved;
            case 500: return RpcConstants_1.RpcRequestStatus.Rejected;
            default: return RpcConstants_1.RpcRequestStatus.Unknown;
        }
    }
    /** Supplies the protocol-specific code corresponding to a status value. */
    getCode(status) {
        switch (status) {
            case RpcConstants_1.RpcRequestStatus.NotFound: return 404;
            case RpcConstants_1.RpcRequestStatus.Pending: return 202;
            case RpcConstants_1.RpcRequestStatus.Resolved: return 200;
            case RpcConstants_1.RpcRequestStatus.Rejected: return 500;
            default: return 501;
        }
    }
    /** Whether an HTTP status code indicates a request timeout. */
    isTimeout(code) {
        return code === 504;
    }
    /** An OpenAPI-compatible description of this protocol.
     * @internal
     */
    get openAPIDescription() { return new OpenAPI_1.RpcOpenAPIDescription(this); }
}
exports.WebAppRpcProtocol = WebAppRpcProtocol;


/***/ }),

/***/ "./lib/rpc/web/WebAppRpcRequest.js":
/*!*****************************************!*\
  !*** ./lib/rpc/web/WebAppRpcRequest.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RpcInterface */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const IModelError_1 = __webpack_require__(/*! ../../IModelError */ "./lib/IModelError.js");
const RpcConstants_1 = __webpack_require__(/*! ../core/RpcConstants */ "./lib/rpc/core/RpcConstants.js");
const RpcMarshaling_1 = __webpack_require__(/*! ../core/RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js");
const RpcRequest_1 = __webpack_require__(/*! ../core/RpcRequest */ "./lib/rpc/core/RpcRequest.js");
const RpcMultipartParser_1 = __webpack_require__(/*! ./multipart/RpcMultipartParser */ "./lib/rpc/web/multipart/RpcMultipartParser.js");
const RpcMultipart_1 = __webpack_require__(/*! ./RpcMultipart */ "./lib/rpc/web/RpcMultipart.js");
const WebAppRpcProtocol_1 = __webpack_require__(/*! ./WebAppRpcProtocol */ "./lib/rpc/web/WebAppRpcProtocol.js");
const URLSearchParams = __webpack_require__(/*! url-search-params */ "../../common/temp/node_modules/.registry.npmjs.org/url-search-params/1.1.0/node_modules/url-search-params/build/url-search-params.node.js");
/** A web application RPC request.
 * @public
 */
class WebAppRpcRequest extends RpcRequest_1.RpcRequest {
    /** Constructs a web application request. */
    constructor(client, operation, parameters) {
        super(client, operation, parameters);
        this._loading = false;
        this._request = {};
        this._pathSuffix = "";
        /** Convenience access to the protocol of this request. */
        this.protocol = this.client.configuration.protocol;
        /** Standardized access to metadata about the request (useful for purposes such as logging). */
        this.metadata = { status: 0, message: "" };
        this.path = this.protocol.supplyPathForOperation(this.operation, this);
        this.method = "head";
        this._request.headers = {};
    }
    get _headers() { return this._request.headers; }
    /** Parse headers */
    static parseHeaders(protocol, req) {
        const headerNames = protocol.serializedClientRequestContextHeaderNames;
        const parsedHeaders = {
            id: req.header(headerNames.id) || "",
            applicationId: req.header(headerNames.applicationId) || "",
            applicationVersion: req.header(headerNames.applicationVersion) || "",
            sessionId: req.header(headerNames.sessionId) || "",
            authorization: headerNames.authorization ? req.header(headerNames.authorization) : undefined,
            userId: headerNames.userId ? req.header(headerNames.userId) : undefined,
        };
        return parsedHeaders;
    }
    /** Parses a request. */
    static async parseRequest(protocol, req) {
        const operation = protocol.getOperationFromPath(req.url);
        const parsedHeaders = this.parseHeaders(protocol, req);
        const request = Object.assign({}, parsedHeaders, { operation: {
                interfaceDefinition: operation.interfaceDefinition,
                operationName: operation.operationName,
                interfaceVersion: operation.interfaceVersion,
            }, method: req.method, path: req.url, parameters: operation.encodedRequest ? WebAppRpcRequest.parseFromPath(operation) : await WebAppRpcRequest.parseFromBody(req), caching: operation.encodedRequest ? RpcConstants_1.RpcResponseCacheControl.Immutable : RpcConstants_1.RpcResponseCacheControl.None });
        if (!request.id) {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Invalid request.`);
        }
        return request;
    }
    /** Sends the response for a web request. */
    static sendResponse(protocol, request, fulfillment, res) {
        const transportType = WebAppRpcRequest.computeTransportType(fulfillment.result, fulfillment.rawResult);
        if (transportType === RpcConstants_1.RpcContentType.Text) {
            WebAppRpcRequest.sendText(protocol, request, fulfillment, res);
        }
        else if (transportType === RpcConstants_1.RpcContentType.Binary) {
            WebAppRpcRequest.sendBinary(protocol, request, fulfillment, res);
        }
        else if (transportType === RpcConstants_1.RpcContentType.Multipart) {
            WebAppRpcRequest.sendMultipart(protocol, request, fulfillment, res);
        }
        else if (transportType === RpcConstants_1.RpcContentType.Stream) {
            WebAppRpcRequest.sendStream(protocol, request, fulfillment, res);
        }
        else {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Unknown response type.");
        }
    }
    /** Determines the most efficient transport type for an RPC value. */
    static computeTransportType(value, source) {
        if (source instanceof Uint8Array || (Array.isArray(source) && source[0] instanceof Uint8Array)) {
            return RpcConstants_1.RpcContentType.Binary;
        }
        else if (value.data.length > 0) {
            return RpcConstants_1.RpcContentType.Multipart;
        }
        else if (value.stream) {
            return RpcConstants_1.RpcContentType.Stream;
        }
        else {
            return RpcConstants_1.RpcContentType.Text;
        }
    }
    /** Sets request header values. */
    setHeader(name, value) {
        this._headers[name] = value;
    }
    /** Sends the request. */
    async send() {
        this._loading = true;
        await this.setupTransport();
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.performFetch());
            }
            catch (reason) {
                reject(new IModelError_1.ServerError(-1, reason || "Server connection error."));
            }
        });
    }
    handleUnknownResponse(code) {
        if (this.protocol.isTimeout(code)) {
            this.reject(new IModelError_1.ServerTimeoutError("Request timeout."));
        }
        else {
            this.reject(new IModelError_1.ServerError(code, "Unknown server response code."));
        }
    }
    async load() {
        return new Promise(async (resolve, reject) => {
            try {
                if (!this._loading)
                    return;
                const response = this._response;
                if (!response) {
                    reject(new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Invalid state."));
                    return;
                }
                const contentType = response.headers.get(RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT);
                const responseType = WebAppRpcProtocol_1.WebAppRpcProtocol.computeContentType(contentType);
                if (responseType === RpcConstants_1.RpcContentType.Text) {
                    resolve(await this.loadText(response));
                }
                else if (responseType === RpcConstants_1.RpcContentType.Binary) {
                    resolve(await this.loadBinary(response));
                }
                else if (responseType === RpcConstants_1.RpcContentType.Multipart) {
                    resolve(await this.loadMultipart(response, contentType));
                }
                else {
                    reject(new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Unknown response type"));
                }
                this._loading = false;
                this.setLastUpdatedTime();
                this.protocol.events.raiseEvent(RpcConstants_1.RpcProtocolEvent.ResponseLoaded, this);
            }
            catch (reason) {
                if (!this._loading)
                    return;
                this._loading = false;
                reject(new IModelError_1.ServerError(this.metadata.status, reason || "Unknown server response error."));
            }
        });
    }
    static configureResponse(protocol, request, fulfillment, res) {
        const success = protocol.getStatus(fulfillment.status) === RpcConstants_1.RpcRequestStatus.Resolved;
        if (success && request.caching === RpcConstants_1.RpcResponseCacheControl.Immutable) {
            res.set("Cache-Control", "private, max-age=31536000, immutable");
        }
    }
    static sendText(protocol, request, fulfillment, res) {
        const response = fulfillment.result.objects;
        res.set(RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT, RpcConstants_1.WEB_RPC_CONSTANTS.TEXT);
        WebAppRpcRequest.configureResponse(protocol, request, fulfillment, res);
        res.status(fulfillment.status).send(response);
    }
    static sendBinary(protocol, request, fulfillment, res) {
        const data = fulfillment.result.data[0];
        const response = Buffer.isBuffer(data) ? data : Buffer.from(data);
        res.set(RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT, RpcConstants_1.WEB_RPC_CONSTANTS.BINARY);
        WebAppRpcRequest.configureResponse(protocol, request, fulfillment, res);
        res.status(fulfillment.status).send(response);
    }
    static sendMultipart(protocol, request, fulfillment, res) {
        const response = RpcMultipart_1.RpcMultipart.createStream(fulfillment.result);
        const headers = response.getHeaders();
        for (const header in headers) {
            if (headers.hasOwnProperty(header)) {
                res.set(header, headers[header]);
            }
        }
        WebAppRpcRequest.configureResponse(protocol, request, fulfillment, res);
        res.status(fulfillment.status);
        response.pipe(res);
    }
    static sendStream(protocol, request, fulfillment, res) {
        const response = fulfillment.result.stream;
        WebAppRpcRequest.configureResponse(protocol, request, fulfillment, res);
        res.status(fulfillment.status);
        response.pipe(res);
    }
    static parseFromPath(operation) {
        const decoded = operation.encodedRequest ? Buffer.from(operation.encodedRequest, "base64").toString("binary") : "";
        return RpcMarshaling_1.RpcSerializedValue.create(decoded);
    }
    static async parseFromBody(req) {
        const contentType = WebAppRpcProtocol_1.WebAppRpcProtocol.computeContentType(req.header(RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT));
        if (contentType === RpcConstants_1.RpcContentType.Text) {
            return RpcMarshaling_1.RpcSerializedValue.create(req.body);
        }
        else if (contentType === RpcConstants_1.RpcContentType.Binary) {
            const objects = JSON.stringify([RpcMarshaling_1.MarshalingBinaryMarker.createDefault()]);
            const data = [req.body];
            return RpcMarshaling_1.RpcSerializedValue.create(objects, data);
        }
        else if (contentType === RpcConstants_1.RpcContentType.Multipart) {
            return RpcMultipart_1.RpcMultipart.parseRequest(req);
        }
        else {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, `Unknown content type.`);
        }
    }
    async performFetch() {
        const path = new URL(this.path, location.origin);
        if (this._pathSuffix) {
            const params = new URLSearchParams();
            params.set("parameters", this._pathSuffix);
            path.search = `?${params.toString()}`;
        }
        const request = new Request(path.toString(), this._request);
        const response = await fetch(request);
        this._response = response;
        this.metadata.status = response.status;
        return response.status;
    }
    async loadText(response) {
        const value = await response.text();
        this.metadata.message = value;
        return RpcMarshaling_1.RpcSerializedValue.create(value);
    }
    async loadBinary(response) {
        const value = new Uint8Array(await response.arrayBuffer());
        const objects = JSON.stringify(RpcMarshaling_1.MarshalingBinaryMarker.createDefault());
        return RpcMarshaling_1.RpcSerializedValue.create(objects, [value]);
    }
    async loadMultipart(response, contentType) {
        const data = await response.arrayBuffer();
        const value = new RpcMultipartParser_1.RpcMultipartParser(contentType, Buffer.from(data)).parse();
        return value;
    }
    async setupTransport() {
        const parameters = (await this.protocol.serialize(this)).parameters;
        const transportType = WebAppRpcRequest.computeTransportType(parameters, this.parameters);
        if (transportType === RpcConstants_1.RpcContentType.Binary) {
            this.setupBinaryTransport(parameters);
        }
        else if (transportType === RpcConstants_1.RpcContentType.Multipart) {
            this.setupMultipartTransport(parameters);
        }
        else if (transportType === RpcConstants_1.RpcContentType.Text) {
            this.setupTextTransport(parameters);
        }
        else {
            throw new IModelError_1.IModelError(bentleyjs_core_1.BentleyStatus.ERROR, "Unknown request type.");
        }
    }
    setupBinaryTransport(parameters) {
        this._headers[RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT] = RpcConstants_1.WEB_RPC_CONSTANTS.BINARY;
        this._request.method = "post";
        this._request.body = parameters.data[0];
    }
    setupMultipartTransport(parameters) {
        // IMPORTANT: do not set a multipart Content-Type header value. The browser does this automatically!
        delete this._headers[RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT];
        this._request.method = "post";
        this._request.body = RpcMultipart_1.RpcMultipart.createForm(parameters);
    }
    setupTextTransport(parameters) {
        if (this.operation.policy.allowResponseCaching(this)) {
            const encodedBody = btoa(parameters.objects);
            if (encodedBody.length <= WebAppRpcRequest.maxUrlComponentSize) {
                this._request.method = "get";
                this._request.body = undefined;
                delete this._headers[RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT];
                this._pathSuffix = encodedBody;
                return;
            }
        }
        this._pathSuffix = "";
        this._headers[RpcConstants_1.WEB_RPC_CONSTANTS.CONTENT] = RpcConstants_1.WEB_RPC_CONSTANTS.TEXT;
        this._request.method = "post";
        this._request.body = parameters.objects;
    }
}
/** The maximum size permitted for an encoded component in a URL.
 * @note This is used for features like encoding the payload of a cacheable request in the URL.
 */
WebAppRpcRequest.maxUrlComponentSize = 1024;
exports.WebAppRpcRequest = WebAppRpcRequest;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/rpc/web/multipart/RpcMultipartParser.js":
/*!*****************************************************!*\
  !*** ./lib/rpc/web/multipart/RpcMultipartParser.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/*
Adapted from https://github.com/pillarjs/multiparty. Multiparty license as follows:
(The MIT License)

Copyright (c) 2013 Felix Geisendörfer
Copyright (c) 2014 Andrew Kelley
Copyright (c) 2014 Douglas Christopher Wilson

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const string_decoder_1 = __webpack_require__(/*! string_decoder */ "../../common/temp/node_modules/.registry.npmjs.org/string_decoder/1.2.0/node_modules/string_decoder/lib/string_decoder.js");
const RpcMarshaling_1 = __webpack_require__(/*! ../../core/RpcMarshaling */ "./lib/rpc/core/RpcMarshaling.js");
const START = 0;
const START_BOUNDARY = 1;
const HEADER_FIELD_START = 2;
const HEADER_FIELD = 3;
const HEADER_VALUE_START = 4;
const HEADER_VALUE = 5;
const HEADER_VALUE_ALMOST_DONE = 6;
const HEADERS_ALMOST_DONE = 7;
const PART_DATA_START = 8;
const PART_DATA = 9;
const CLOSE_BOUNDARY = 10;
const END = 11;
const LF = 10;
const CR = 13;
const SPACE = 32;
const HYPHEN = 45;
const COLON = 58;
const A = 97;
const Z = 122;
const CONTENT_TYPE_RE = /^multipart\/(?:form-data|related)(?:;|$)/i;
const CONTENT_TYPE_PARAM_RE = /;\s*([^=]+)=(?:"([^"]+)"|([^;]+))/gi;
class RpcMultipartParser {
    constructor(contentType, buffer) {
        let m = CONTENT_TYPE_RE.exec(contentType);
        if (!m) {
            throw new Error("unsupported content-type");
        }
        let boundary = "";
        CONTENT_TYPE_PARAM_RE.lastIndex = m.index + m[0].length - 1;
        while ((m = CONTENT_TYPE_PARAM_RE.exec(contentType))) {
            if (m[1].toLowerCase() !== "boundary")
                continue;
            boundary = m[2] || m[3];
            break;
        }
        if (!boundary) {
            throw new Error("content-type missing boundary");
        }
        this._headerFieldDecoder = null;
        this._headerValueDecoder = null;
        this._headerField = "";
        this._partHeaders = {};
        this._partName = null;
        this._partChunks = [];
        this._headerValue = "";
        this._headerFieldMark = null;
        this._headerValueMark = null;
        this._partDataMark = null;
        this._partBoundaryFlag = false;
        this._boundary = boundary;
        this._buffer = buffer;
        this._value = RpcMarshaling_1.RpcSerializedValue.create();
    }
    parse() {
        let i = 0;
        const len = this._buffer.length;
        let prevIndex = 0;
        let index = 0;
        let state = START;
        const boundary = Buffer.alloc(this._boundary.length + 4);
        boundary.write("\r\n--", 0, this._boundary.length + 4, "ascii");
        boundary.write(this._boundary, 4, this._boundary.length, "ascii");
        const boundaryChars = {};
        for (const char of boundary) {
            boundaryChars[char] = true;
        }
        const boundaryLength = boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = this._buffer.length;
        const lookbehind = Buffer.alloc(boundaryLength + 8);
        let c;
        let cl;
        for (i = 0; i < len; i++) {
            c = this._buffer[i];
            switch (state) {
                case START:
                    index = 0;
                    state = START_BOUNDARY;
                /* falls through */
                case START_BOUNDARY:
                    if (index === boundaryLength - 2 && c === HYPHEN) {
                        index = 1;
                        state = CLOSE_BOUNDARY;
                        break;
                    }
                    else if (index === boundaryLength - 2) {
                        if (c !== CR)
                            throw new Error("Expected CR Received " + c);
                        index++;
                        break;
                    }
                    else if (index === boundaryLength - 1) {
                        if (c !== LF)
                            throw new Error("Expected LF Received " + c);
                        index = 0;
                        this._onParsePartBegin();
                        state = HEADER_FIELD_START;
                        break;
                    }
                    if (c !== boundary[index + 2])
                        index = -2;
                    if (c === boundary[index + 2])
                        index++;
                    break;
                case HEADER_FIELD_START:
                    state = HEADER_FIELD;
                    this._headerFieldMark = i;
                    index = 0;
                /* falls through */
                case HEADER_FIELD:
                    if (c === CR) {
                        this._headerFieldMark = null;
                        state = HEADERS_ALMOST_DONE;
                        break;
                    }
                    index++;
                    if (c === HYPHEN)
                        break;
                    if (c === COLON) {
                        if (index === 1) {
                            // empty header field
                            throw new Error("Empty header field");
                        }
                        this._onParseHeaderField(this._buffer.slice(this._headerFieldMark, i));
                        this._headerFieldMark = null;
                        state = HEADER_VALUE_START;
                        break;
                    }
                    cl = c | 0x20;
                    if (cl < A || cl > Z) {
                        throw new Error("Expected alphabetic character, received " + c);
                    }
                    break;
                case HEADER_VALUE_START:
                    if (c === SPACE)
                        break;
                    this._headerValueMark = i;
                    state = HEADER_VALUE;
                /* falls through */
                case HEADER_VALUE:
                    if (c === CR) {
                        this._onParseHeaderValue(this._buffer.slice(this._headerValueMark, i));
                        this._headerValueMark = null;
                        this._onParseHeaderEnd();
                        state = HEADER_VALUE_ALMOST_DONE;
                    }
                    break;
                case HEADER_VALUE_ALMOST_DONE:
                    if (c !== LF)
                        throw new Error("Expected LF Received " + c);
                    state = HEADER_FIELD_START;
                    break;
                case HEADERS_ALMOST_DONE:
                    if (c !== LF)
                        throw new Error("Expected LF Received " + c);
                    const err = this._onParseHeadersEnd(i + 1);
                    if (err)
                        throw err;
                    state = PART_DATA_START;
                    break;
                case PART_DATA_START:
                    state = PART_DATA;
                    this._partDataMark = i;
                /* falls through */
                case PART_DATA:
                    prevIndex = index;
                    if (index === 0) {
                        // boyer-moore derrived algorithm to safely skip non-boundary data
                        i += boundaryEnd;
                        while (i < bufferLength && !(this._buffer[i] in boundaryChars)) {
                            i += boundaryLength;
                        }
                        i -= boundaryEnd;
                        c = this._buffer[i];
                    }
                    if (index < boundaryLength) {
                        if (boundary[index] === c) {
                            if (index === 0) {
                                this._onParsePartData(this._buffer.slice(this._partDataMark, i));
                                this._partDataMark = null;
                            }
                            index++;
                        }
                        else {
                            index = 0;
                        }
                    }
                    else if (index === boundaryLength) {
                        index++;
                        if (c === CR) {
                            // CR = part boundary
                            this._partBoundaryFlag = true;
                        }
                        else if (c === HYPHEN) {
                            index = 1;
                            state = CLOSE_BOUNDARY;
                            break;
                        }
                        else {
                            index = 0;
                        }
                    }
                    else if (index - 1 === boundaryLength) {
                        if (this._partBoundaryFlag) {
                            index = 0;
                            if (c === LF) {
                                this._partBoundaryFlag = false;
                                this._onParsePartEnd();
                                this._onParsePartBegin();
                                state = HEADER_FIELD_START;
                                break;
                            }
                        }
                        else {
                            index = 0;
                        }
                    }
                    if (index > 0) {
                        // when matching a possible boundary, keep a lookbehind reference
                        // in case it turns out to be a false lead
                        lookbehind[index - 1] = c;
                    }
                    else if (prevIndex > 0) {
                        // if our boundary turned out to be rubbish, the captured lookbehind
                        // belongs to partData
                        this._onParsePartData(lookbehind.slice(0, prevIndex));
                        prevIndex = 0;
                        this._partDataMark = i;
                        // reconsider the current character even so it interrupted the sequence
                        // it could be the beginning of a new sequence
                        i--;
                    }
                    break;
                case CLOSE_BOUNDARY:
                    if (c !== HYPHEN)
                        throw new Error("Expected HYPHEN Received " + c);
                    if (index === 1) {
                        this._onParsePartEnd();
                        state = END;
                    }
                    else if (index > 1) {
                        throw new Error("Parser has invalid state.");
                    }
                    index++;
                    break;
                case END:
                    break;
                default:
                    throw new Error("Parser has invalid state.");
            }
        }
        if (this._headerFieldMark != null) {
            this._onParseHeaderField(this._buffer.slice(this._headerFieldMark));
            this._headerFieldMark = 0;
        }
        if (this._headerValueMark != null) {
            this._onParseHeaderValue(this._buffer.slice(this._headerValueMark));
            this._headerValueMark = 0;
        }
        if (this._partDataMark != null) {
            this._onParsePartData(this._buffer.slice(this._partDataMark));
            this._partDataMark = 0;
        }
        return this._value;
    }
    _onParsePartBegin() {
        this._clearPartVars();
    }
    _clearPartVars() {
        this._partHeaders = {};
        this._partName = null;
        this._partChunks.length = 0;
        this._headerFieldDecoder = new string_decoder_1.StringDecoder("utf8");
        this._headerField = "";
        this._headerValueDecoder = new string_decoder_1.StringDecoder("utf8");
        this._headerValue = "";
    }
    _onParseHeaderField(b) {
        this._headerField += this._headerFieldDecoder.write(b);
    }
    _onParseHeaderValue(b) {
        this._headerValue += this._headerValueDecoder.write(b);
    }
    _onParseHeaderEnd() {
        this._headerField = this._headerField.toLowerCase();
        this._partHeaders[this._headerField] = this._headerValue;
        let m;
        if (this._headerField === "content-disposition") {
            if (m = this._headerValue.match(/\bname="([^"]+)"/i)) {
                this._partName = m[1];
            }
            // this._partFilename = parseFilename(this._headerValue);
        }
        else if (this._headerField === "content-transfer-encoding") {
            // this._partTransferEncoding = this._headerValue.toLowerCase();
        }
        this._headerFieldDecoder = new string_decoder_1.StringDecoder("utf8");
        this._headerField = "";
        this._headerValueDecoder = new string_decoder_1.StringDecoder("utf8");
        this._headerValue = "";
    }
    _onParsePartData(b) {
        this._partChunks.push(b);
    }
    _onParsePartEnd() {
        const partValue = this._partChunks.length === 1 ? this._partChunks[0] : Buffer.concat(this._partChunks);
        if (this._partName === "objects") {
            this._value.objects = partValue.toString();
        }
        else {
            this._value.data.push(partValue);
        }
        this._clearPartVars();
    }
    _onParseHeadersEnd(_offset) {
    }
}
exports.RpcMultipartParser = RpcMultipartParser;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js */ "../../common/temp/node_modules/.registry.npmjs.org/buffer/4.9.1/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "@bentley/bentleyjs-core":
/*!*********************************!*\
  !*** external "bentleyjs_core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__;

/***/ }),

/***/ "@bentley/geometry-core":
/*!********************************!*\
  !*** external "geometry_core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_geometry_core__;

/***/ }),

/***/ "@bentley/imodeljs-clients":
/*!***********************************!*\
  !*** external "imodeljs_clients" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_clients__;

/***/ })

},[["./lib/imodeljs-common.js","runtime"]]]);
});
//# sourceMappingURL=imodeljs-common.js.map