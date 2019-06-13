(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("imodeljs_common"));
	else if(typeof define === 'function' && define.amd)
		define("presentation_common", ["bentleyjs_core", "imodeljs_common"], factory);
	else if(typeof exports === 'object')
		exports["presentation_common"] = factory(require("bentleyjs_core"), require("imodeljs_common"));
	else
		root["presentation_common"] = factory(root["bentleyjs_core"], root["imodeljs_common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_common__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["presentation-common"],{

/***/ "./lib/EC.js":
/*!*******************!*\
  !*** ./lib/EC.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** @public */
var InstanceKey;
(function (InstanceKey) {
    /**
     * Compare 2 instance keys
     * @public
     */
    function compare(lhs, rhs) {
        const classNameCompare = lhs.className.localeCompare(rhs.className);
        if (classNameCompare !== 0)
            return classNameCompare;
        return lhs.id.localeCompare(rhs.id);
    }
    InstanceKey.compare = compare;
    /** @internal */
    function toJSON(json) {
        return Object.assign({}, json, { id: json.id.toString() });
    }
    InstanceKey.toJSON = toJSON;
    /**
     * Deserializes [[InstanceKey]] from [[InstanceKeyJSON]]
     * @internal
     */
    function fromJSON(json) {
        return Object.assign({}, json, { id: bentleyjs_core_1.Id64.fromJSON(json.id) });
    }
    InstanceKey.fromJSON = fromJSON;
})(InstanceKey = exports.InstanceKey || (exports.InstanceKey = {}));
/** @public */
var ClassInfo;
(function (ClassInfo) {
    /** @internal */
    function toJSON(info) {
        return Object.assign({}, info, { id: info.id.toString() });
    }
    ClassInfo.toJSON = toJSON;
    /**
     * Deserializes [[ClassInfo]] from [[ClassInfoJSON]]
     * @internal
     */
    function fromJSON(json) {
        return Object.assign({}, json, { id: bentleyjs_core_1.Id64.fromJSON(json.id) });
    }
    ClassInfo.fromJSON = fromJSON;
})(ClassInfo = exports.ClassInfo || (exports.ClassInfo = {}));
/** @public */
var PropertyInfo;
(function (PropertyInfo) {
    /** @internal */
    function toJSON(info) {
        return Object.assign({}, info, { classInfo: ClassInfo.toJSON(info.classInfo) });
    }
    PropertyInfo.toJSON = toJSON;
    /**
     * Deserializes [[PropertyInfo]] from [[PropertyInfoJSON]]
     * @internal
     */
    function fromJSON(json) {
        return Object.assign({}, json, { classInfo: ClassInfo.fromJSON(json.classInfo) });
    }
    PropertyInfo.fromJSON = fromJSON;
})(PropertyInfo = exports.PropertyInfo || (exports.PropertyInfo = {}));
/** @public */
var RelatedClassInfo;
(function (RelatedClassInfo) {
    /** @internal */
    function toJSON(info) {
        return Object.assign({}, info, { sourceClassInfo: ClassInfo.toJSON(info.sourceClassInfo), targetClassInfo: ClassInfo.toJSON(info.targetClassInfo), relationshipInfo: ClassInfo.toJSON(info.relationshipInfo) });
    }
    RelatedClassInfo.toJSON = toJSON;
    /**
     * Deserializes [[RelatedClassInfo]] from [[RelatedClassInfoJSON]]
     * @internal
     */
    function fromJSON(json) {
        return Object.assign({}, json, { sourceClassInfo: ClassInfo.fromJSON(json.sourceClassInfo), targetClassInfo: ClassInfo.fromJSON(json.targetClassInfo), relationshipInfo: ClassInfo.fromJSON(json.relationshipInfo) });
    }
    RelatedClassInfo.fromJSON = fromJSON;
})(RelatedClassInfo = exports.RelatedClassInfo || (exports.RelatedClassInfo = {}));


/***/ }),

/***/ "./lib/Error.js":
/*!**********************!*\
  !*** ./lib/Error.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/**
 * Status codes used by Presentation APIs.
 * @public
 */
var PresentationStatus;
(function (PresentationStatus) {
    /** Success result */
    PresentationStatus[PresentationStatus["Success"] = 0] = "Success";
    /** Error: Unknown */
    PresentationStatus[PresentationStatus["Error"] = 65536] = "Error";
    /** Error: Not initialized */
    PresentationStatus[PresentationStatus["NotInitialized"] = 65537] = "NotInitialized";
    /** Error: Attempting to use something after disposal */
    PresentationStatus[PresentationStatus["UseAfterDisposal"] = 65538] = "UseAfterDisposal";
    /** Error: Argument is invalid */
    PresentationStatus[PresentationStatus["InvalidArgument"] = 65539] = "InvalidArgument";
    /** Error: Received invalid response */
    PresentationStatus[PresentationStatus["InvalidResponse"] = 65540] = "InvalidResponse";
    /** Error: Requested content when there is none. */
    PresentationStatus[PresentationStatus["NoContent"] = 65541] = "NoContent";
    /** Error: Backend needs to be synced with client state */
    PresentationStatus[PresentationStatus["BackendOutOfSync"] = 65542] = "BackendOutOfSync";
    /** Error: The timeout for the request was reached which prevented it from being fulfilled */
    PresentationStatus[PresentationStatus["BackendTimeout"] = 65543] = "BackendTimeout";
})(PresentationStatus = exports.PresentationStatus || (exports.PresentationStatus = {}));
/**
 * An error type thrown by Presentation APIs.
 * @public
 */
class PresentationError extends bentleyjs_core_1.BentleyError {
    /**
     * Creates an instance of Error.
     * @param errorNumber Error code
     * @param message Optional brief description of the error. The `message` property combined with the `name`
     * property is used by the `Error.prototype.toString()` method to create a string representation of the Error.
     * @param log Optional log function which logs the error.
     * @param getMetaData Optional function that returns meta-data related to an error.
     */
    constructor(errorNumber, message, log, getMetaData) {
        super(errorNumber, message, log, "Presentation", getMetaData);
    }
    /**
     * Returns the name of each error status. The name is used by the `Error.prototype.toString()`
     * method to create a string representation of the error.
     */
    // tslint:disable-next-line:naming-convention
    _initName() {
        let value = PresentationStatus[this.errorNumber];
        if (!value)
            value = `Unknown Error (${this.errorNumber})`;
        return value;
    }
}
exports.PresentationError = PresentationError;


/***/ }),

/***/ "./lib/KeySet.js":
/*!***********************!*\
  !*** ./lib/KeySet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const Key_1 = __webpack_require__(/*! ./hierarchy/Key */ "./lib/hierarchy/Key.js");
const Error_1 = __webpack_require__(/*! ./Error */ "./lib/Error.js");
/** @public */
var Key;
(function (Key) {
    /** Check if the supplied key is a `NodeKey` */
    function isNodeKey(key) {
        return key.type;
    }
    Key.isNodeKey = isNodeKey;
    /** Check if the supplied key is an `InstanceKey` */
    function isInstanceKey(key) {
        return key.className && key.id;
    }
    Key.isInstanceKey = isInstanceKey;
    /** Check if the supplied key is an `EntityProps` */
    function isEntityProps(key) {
        return key.classFullName && key.id;
    }
    Key.isEntityProps = isEntityProps;
})(Key = exports.Key || (exports.Key = {}));
/**
 * A class that holds multiple [[Key]] objects. It's basically
 * used as a container that holds multiple keys of different types.
 *
 * @public
 */
class KeySet {
    /**
     * Creates an instance of KeySet.
     * @param source Optional source to initialize from.
     */
    constructor(source) {
        this._instanceKeys = new Map();
        this._nodeKeys = new Set();
        this._guid = bentleyjs_core_1.Guid.createValue();
        if (source)
            this.add(source);
    }
    /**
     * Get a GUID that identifies changes in this keyset. The value
     * does not uniquely identify contents of the keyset, but it can be
     * used to check whether keyset has changed.
     */
    get guid() { return this._guid; }
    /**
     * Get a map of instance keys stored in this KeySet
     *
     * **Warning**: getting instance keys might be expensive for
     * large KeySets.
     */
    get instanceKeys() {
        const map = new Map();
        for (const entry of this._instanceKeys)
            map.set(entry["0"], new Set([...entry["1"]].map((key) => bentleyjs_core_1.Id64.fromJSON(key))));
        return map;
    }
    /**
     * Get instance keys count
     */
    get instanceKeysCount() {
        let count = 0;
        this._instanceKeys.forEach((set) => count += set.size);
        return count;
    }
    /**
     * Get a set of node keys stored in this KeySet
     *
     * **Warning**: getting node keys might be expensive for
     * large KeySets.
     */
    get nodeKeys() {
        const set = new Set();
        for (const serialized of this._nodeKeys) {
            const key = Key_1.NodeKey.fromJSON(JSON.parse(serialized));
            set.add(key);
        }
        return set;
    }
    /**
     * Get node keys count
     */
    get nodeKeysCount() {
        return this._nodeKeys.size;
    }
    isKeySet(set) {
        return set._nodeKeys && set._instanceKeys;
    }
    isKeysArray(keys) {
        return Array.isArray(keys);
    }
    /**
     * Clear this KeySet.
     * @returns itself
     */
    clear() {
        if (this.isEmpty)
            return this;
        this._instanceKeys = new Map();
        this._nodeKeys = new Set();
        this._guid = bentleyjs_core_1.Guid.createValue();
        return this;
    }
    addKeySet(keyset, pred) {
        for (const key of keyset._nodeKeys) {
            if (!pred || pred(Key_1.NodeKey.fromJSON(JSON.parse(key))))
                this._nodeKeys.add(key);
        }
        for (const entry of keyset._instanceKeys) {
            let set = this._instanceKeys.get(entry["0"]);
            if (!set) {
                set = new Set();
                this._instanceKeys.set(entry["0"], set);
            }
            entry["1"].forEach((id) => {
                if (!pred || pred({ className: entry[0], id }))
                    set.add(id);
            });
        }
    }
    addKeySetJSON(keyset) {
        for (const key of keyset.nodeKeys)
            this._nodeKeys.add(JSON.stringify(key));
        for (const entry of keyset.instanceKeys)
            this._instanceKeys.set(entry["0"], new Set(entry["1"]));
    }
    /**
     * Add a key or keys to this KeySet.
     * @param value A key or keys to add.
     * @param pred An optional predicate function that indicates whether a key should be added
     * @returns itself
     */
    add(value, pred) {
        if (!value)
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
        const sizeBefore = this.size;
        if (this.isKeySet(value)) {
            this.addKeySet(value, pred);
        }
        else if (this.isKeysArray(value)) {
            value.forEach((key) => (!pred || pred(key)) ? this.add(key) : undefined);
        }
        else if (Key.isEntityProps(value)) {
            this.add({ className: value.classFullName, id: bentleyjs_core_1.Id64.fromJSON(value.id) });
        }
        else if (Key.isInstanceKey(value)) {
            if (!this._instanceKeys.has(value.className))
                this._instanceKeys.set(value.className, new Set());
            this._instanceKeys.get(value.className).add(value.id);
        }
        else if (Key.isNodeKey(value)) {
            this._nodeKeys.add(JSON.stringify(value));
        }
        else {
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
        }
        if (this.size !== sizeBefore)
            this._guid = bentleyjs_core_1.Guid.createValue();
        return this;
    }
    deleteKeySet(keyset) {
        for (const key of keyset._nodeKeys)
            this._nodeKeys.delete(key);
        for (const entry of keyset._instanceKeys) {
            const set = this._instanceKeys.get(entry["0"]);
            if (set) {
                entry["1"].forEach((key) => {
                    set.delete(key);
                });
            }
        }
    }
    /**
     * Deletes a key or keys from this KeySet.
     * @param value A key or keys to delete.
     * @returns itself
     */
    delete(value) {
        if (!value)
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
        const sizeBefore = this.size;
        if (this.isKeySet(value)) {
            this.deleteKeySet(value);
        }
        else if (this.isKeysArray(value)) {
            for (const key of value)
                this.delete(key);
        }
        else if (Key.isEntityProps(value)) {
            this.delete({ className: value.classFullName, id: value.id });
        }
        else if (Key.isInstanceKey(value)) {
            const set = this._instanceKeys.get(value.className);
            if (set)
                set.delete(value.id);
        }
        else if (Key.isNodeKey(value)) {
            this._nodeKeys.delete(JSON.stringify(value));
        }
        else {
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
        }
        if (this.size !== sizeBefore)
            this._guid = bentleyjs_core_1.Guid.createValue();
        return this;
    }
    /**
     * Check if this KeySet contains the specified key.
     * @param value The key to check.
     */
    has(value) {
        if (!value)
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
        if (Key.isEntityProps(value))
            return this.has({ className: value.classFullName, id: value.id });
        if (Key.isInstanceKey(value)) {
            const set = this._instanceKeys.get(value.className);
            return !!(set && set.has(value.id));
        }
        if (Key.isNodeKey(value))
            return this._nodeKeys.has(JSON.stringify(value));
        throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${value}`);
    }
    hasKeySet(readonlyKeys, checkType) {
        // note: cast-away read-onlyness to access private members...
        const keys = readonlyKeys;
        if (checkType === "all") {
            if (this._nodeKeys.size < keys._nodeKeys.size || this._instanceKeys.size < keys._instanceKeys.size)
                return false;
            if ([...keys._nodeKeys].some((key) => !this._nodeKeys.has(key)))
                return false;
            for (const otherEntry of keys._instanceKeys) {
                const thisEntryKeys = this._instanceKeys.get(otherEntry["0"]);
                if (!thisEntryKeys || thisEntryKeys.size < otherEntry["1"].size)
                    return false;
                if ([...otherEntry["1"]].some((key) => !thisEntryKeys.has(key)))
                    return false;
            }
            return true;
        }
        // "any" check type
        if ([...keys._nodeKeys].some((key) => this._nodeKeys.has(key)))
            return true;
        for (const otherEntry of keys._instanceKeys) {
            const thisEntryKeys = this._instanceKeys.get(otherEntry["0"]);
            if (thisEntryKeys && [...otherEntry["1"]].some((key) => thisEntryKeys.has(key)))
                return true;
        }
        return false;
    }
    hasKeysArray(keys, checkType) {
        if (checkType === "all") {
            if (this.size < keys.length)
                return false;
            for (const key of keys) {
                if (!this.has(key))
                    return false;
            }
            return true;
        }
        // "any" check type
        for (const key of keys) {
            if (this.has(key))
                return true;
        }
        return false;
    }
    /**
     * Check if this KeySet contains all the specified keys.
     * @param keys The keys to check.
     */
    hasAll(keys) {
        if (!keys)
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${keys}`);
        if (this.isKeySet(keys))
            return this.hasKeySet(keys, "all");
        if (this.isKeysArray(keys))
            return this.hasKeysArray(keys, "all");
        throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: keys = ${keys}`);
    }
    /**
     * Check if this KeySet contains any of the specified keys.
     * @param keys The keys to check.
     */
    hasAny(keys) {
        if (!keys)
            throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: value = ${keys}`);
        if (this.isKeySet(keys))
            return this.hasKeySet(keys, "any");
        if (this.isKeysArray(keys))
            return this.hasKeysArray(keys, "any");
        throw new Error_1.PresentationError(Error_1.PresentationStatus.InvalidArgument, `Invalid argument: keys = ${keys}`);
    }
    /**
     * Get the number of keys stored in this KeySet.
     */
    get size() {
        const nodeKeysCount = this._nodeKeys.size;
        let instanceIdsCount = 0;
        for (const set of this._instanceKeys.values())
            instanceIdsCount += set.size;
        return nodeKeysCount + instanceIdsCount;
    }
    /**
     * Is this KeySet currently empty.
     */
    get isEmpty() {
        return 0 === this.size;
    }
    /**
     * Serializes this KeySet to JSON
     * @internal
     */
    toJSON() {
        const instanceKeys = new Array();
        for (const entry of this._instanceKeys.entries()) {
            if (entry["1"].size > 0)
                instanceKeys.push([entry["0"], [...entry["1"]]]);
        }
        const nodeKeys = new Array();
        for (const serializedKey of this._nodeKeys.values())
            nodeKeys.push(JSON.parse(serializedKey));
        return {
            instanceKeys,
            nodeKeys,
        };
    }
    /**
     * Creates a KeySet from JSON
     * @internal
     */
    static fromJSON(json) {
        const keyset = new KeySet();
        keyset.addKeySetJSON(json);
        return keyset;
    }
}
exports.KeySet = KeySet;


/***/ }),

/***/ "./lib/Logging.js":
/*!************************!*\
  !*** ./lib/Logging.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:naming-convention
/**
 * Enum of logging namespaces used by Presentation library.
 * Use `@bentley/bentleyjs-core/Logger` to enable logging for these namespaces.
 *
 * @public
 */
var LoggingNamespaces;
(function (LoggingNamespaces) {
    LoggingNamespaces["ECObjects"] = "ECObjects";
    LoggingNamespaces["ECObjects_ECExpressions"] = "ECObjects.ECExpressions";
    LoggingNamespaces["ECObjects_ECExpressions_Parse"] = "ECObjects.ECExpressions.Parse";
    LoggingNamespaces["ECObjects_ECExpressions_Evaluate"] = "ECObjects.ECExpressions.Evaluate";
    LoggingNamespaces["ECPresentation"] = "ECPresentation";
    LoggingNamespaces["ECPresentation_Connections"] = "ECPresentation.Connections";
    LoggingNamespaces["ECPresentation_RulesEngine"] = "ECPresentation.RulesEngine";
    LoggingNamespaces["ECPresentation_RulesEngine_Content"] = "ECPresentation.RulesEngine.Content";
    LoggingNamespaces["ECPresentation_RulesEngine_Localization"] = "ECPresentation.RulesEngine.Localization";
    LoggingNamespaces["ECPresentation_RulesEngine_Navigation"] = "ECPresentation.RulesEngine.Navigation";
    LoggingNamespaces["ECPresentation_RulesEngine_Navigation_Cache"] = "ECPresentation.RulesEngine.Navigation.Cache";
    LoggingNamespaces["ECPresentation_RulesEngine_Threads"] = "ECPresentation.RulesEngine.Threads";
    LoggingNamespaces["ECPresentation_RulesEngine_Update"] = "ECPresentation.RulesEngine.Update";
    LoggingNamespaces["ECPresentation_RulesEngine_RulesetVariables"] = "ECPresentation.RulesEngine.RulesetVariables";
})(LoggingNamespaces = exports.LoggingNamespaces || (exports.LoggingNamespaces = {}));
// tslint:enable:naming-convention


/***/ }),

/***/ "./lib/PresentationRpcInterface.js":
/*!*****************************************!*\
  !*** ./lib/PresentationRpcInterface.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RPC */
Object.defineProperty(exports, "__esModule", { value: true });
const imodeljs_common_1 = __webpack_require__(/*! @bentley/imodeljs-common */ "@bentley/imodeljs-common");
/**
 * Interface used for communication between Presentation backend and frontend.
 *
 * @public
 */
class PresentationRpcInterface extends imodeljs_common_1.RpcInterface {
    /*===========================================================================================
      NOTE: Any add/remove/change to the methods below requires an update of the interface version.
      NOTE: Please consult the README in core/common/src/rpc for the semantic versioning rules.
    ===========================================================================================*/
    async getNodesAndCount(_token, _options, _parentKey) { return this.forward(arguments); }
    async getNodes(_token, _options, _parentKey) { return this.forward(arguments); }
    async getNodesCount(_token, _options, _parentKey) { return this.forward(arguments); }
    async getNodePaths(_token, _options, _paths, _markedIndex) { return this.forward(arguments); }
    async getFilteredNodePaths(_token, _options, _filterText) { return this.forward(arguments); }
    async getContentDescriptor(_token, _options, _displayType, _keys, _selection) { return this.forward(arguments); }
    async getContentSetSize(_token, _options, _descriptorOrOverrides, _keys) { return this.forward(arguments); }
    async getContent(_token, _options, _descriptorOrOverrides, _keys) { return this.forward(arguments); }
    async getContentAndSize(_token, _options, _descriptorOrOverrides, _keys) { return this.forward(arguments); }
    async getDistinctValues(_token, _options, _descriptor, _keys, _fieldName, _maximumValueCount) { return this.forward(arguments); }
    async getDisplayLabel(_token, _options, _key) { return this.forward(arguments); }
    async getDisplayLabels(_token, _options, _keys) { return this.forward(arguments); }
    async getSelectionScopes(_token, _options) { return this.forward(arguments); }
    async computeSelection(_token, _options, _ids, _scopeId) { return this.forward(arguments); }
    /** @internal Used internally to sync backend with frontend state */
    async syncClientState(_token, _options) { return this.forward(arguments); }
}
/** The immutable name of the interface. */
PresentationRpcInterface.interfaceName = "PresentationRpcInterface"; // tslint:disable-line: naming-convention
/** The semantic version of the interface. */
PresentationRpcInterface.interfaceVersion = "1.0.0";
exports.PresentationRpcInterface = PresentationRpcInterface;


/***/ }),

/***/ "./lib/RegisteredRuleset.js":
/*!**********************************!*\
  !*** ./lib/RegisteredRuleset.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A ruleset that is registered in a ruleset manager.
 * @public
 */
class RegisteredRuleset {
    /** Create a registered ruleset */
    constructor(ruleset, uniqueIdentifier, disposeFunc) {
        this._disposeFunc = disposeFunc;
        this._ruleset = ruleset;
        this._uniqueIdentifier = uniqueIdentifier;
    }
    /** Dispose registered ruleset. */
    dispose() {
        this._disposeFunc(this);
    }
    get uniqueIdentifier() { return this._uniqueIdentifier; }
    get id() { return this._ruleset.id; }
    get supportedSchemas() { return this._ruleset.supportedSchemas; }
    get supplementationInfo() { return this._ruleset.supplementationInfo; }
    get rules() { return this._ruleset.rules; }
    get vars() { return this._ruleset.vars; }
    toJSON() { return this._ruleset; }
}
exports.RegisteredRuleset = RegisteredRuleset;
/** @internal */
var RulesetManagerState;
(function (RulesetManagerState) {
    RulesetManagerState.STATE_ID = "rulesets";
})(RulesetManagerState = exports.RulesetManagerState || (exports.RulesetManagerState = {}));


/***/ }),

/***/ "./lib/RpcRequestsHandler.js":
/*!***********************************!*\
  !*** ./lib/RpcRequestsHandler.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RPC */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const imodeljs_common_1 = __webpack_require__(/*! @bentley/imodeljs-common */ "@bentley/imodeljs-common");
const Error_1 = __webpack_require__(/*! ./Error */ "./lib/Error.js");
const PresentationRpcInterface_1 = __webpack_require__(/*! ./PresentationRpcInterface */ "./lib/PresentationRpcInterface.js");
/**
 * RPC requests handler that wraps [[PresentationRpcInterface]] and
 * adds handling for cases when backend needs to be synced with client
 * state.
 *
 * @internal
 */
class RpcRequestsHandler {
    constructor(props) {
        this._maxRequestRepeatCount = 10;
        // tslint:disable-next-line:naming-convention
        this.onClientStateChanged = () => {
            this._clientStateId = bentleyjs_core_1.Guid.createValue();
        };
        this.clientId = (props && props.clientId) ? props.clientId : bentleyjs_core_1.Guid.createValue();
        this._clientStateHolders = [];
    }
    /** ID that identifies current client state */
    get clientStateId() { return this._clientStateId; }
    dispose() {
        this._clientStateHolders.forEach((h) => h.onStateChanged.removeListener(this.onClientStateChanged));
        this._clientStateHolders = [];
    }
    // tslint:disable-next-line:naming-convention
    get rpcClient() { return imodeljs_common_1.RpcManager.getClientForInterface(PresentationRpcInterface_1.PresentationRpcInterface); }
    createRequestOptions(options) {
        return Object.assign({}, options, {
            clientId: this.clientId,
            clientStateId: this._clientStateId,
        });
    }
    registerClientStateHolder(holder) {
        this._clientStateHolders.push(holder);
        holder.onStateChanged.addListener(this.onClientStateChanged);
    }
    unregisterClientStateHolder(holder) {
        const index = this._clientStateHolders.indexOf(holder);
        if (-1 !== index)
            this._clientStateHolders.splice(index, 1);
        holder.onStateChanged.removeListener(this.onClientStateChanged);
    }
    /**
     * Syncs backend with the client state provided by client state holders
     *
     * @internal
     */
    async sync(token) {
        const clientState = {};
        for (const holder of this._clientStateHolders) {
            const holderState = holder.state;
            const existing = clientState[holder.key];
            if (existing && typeof existing === "object" && typeof holderState === "object") {
                clientState[holder.key] = Object.assign({}, existing, holderState);
            }
            else {
                clientState[holder.key] = holderState;
            }
        }
        await this.rpcClient.syncClientState(token.toJSON(), this.createRequestOptions({ state: clientState }));
    }
    async requestRepeatedly(func, options, imodelToken, repeatCount = 1) {
        const response = await func(options);
        if (response.statusCode === Error_1.PresentationStatus.Success)
            return response.result;
        if (response.statusCode === Error_1.PresentationStatus.BackendOutOfSync) {
            options.clientStateId = this._clientStateId;
            await this.sync(imodelToken);
            return this.requestRepeatedly(func, options, imodelToken);
        }
        if (response.statusCode === Error_1.PresentationStatus.BackendTimeout && repeatCount < this._maxRequestRepeatCount) {
            repeatCount++;
            return this.requestRepeatedly(func, options, imodelToken, repeatCount);
        }
        throw new Error_1.PresentationError(response.statusCode, response.errorMessage);
    }
    /**
     * Send request to current backend. If the backend is unknown to the requestor,
     * the request is rejected with `PresentationStatus.UnknownBackend` status. In
     * such case the client is synced with the backend using registered `syncHandlers`
     * and the request is repeated.
     *
     * @internal
     */
    async request(context, func, options, ...args) {
        const _a = options, { imodel } = _a, rpcOptions = __rest(_a, ["imodel"]); // TS2700: Rest types may only be created from object types...
        const doRequest = async (funcOptions) => func.apply(context, [imodel, funcOptions, ...args]);
        return this.requestRepeatedly(doRequest, rpcOptions, options.imodel);
    }
    async getNodesAndCount(options, parentKey) {
        return this.request(this.rpcClient, this.rpcClient.getNodesAndCount, this.createRequestOptions(options), parentKey);
    }
    async getNodes(options, parentKey) {
        return this.request(this.rpcClient, this.rpcClient.getNodes, this.createRequestOptions(options), parentKey);
    }
    async getNodesCount(options, parentKey) {
        return this.request(this.rpcClient, this.rpcClient.getNodesCount, this.createRequestOptions(options), parentKey);
    }
    async getNodePaths(options, paths, markedIndex) {
        return this.request(this.rpcClient, this.rpcClient.getNodePaths, this.createRequestOptions(options), paths, markedIndex);
    }
    async getFilteredNodePaths(options, filterText) {
        return this.request(this.rpcClient, this.rpcClient.getFilteredNodePaths, this.createRequestOptions(options), filterText);
    }
    async getContentDescriptor(options, displayType, keys, selection) {
        return this.request(this.rpcClient, this.rpcClient.getContentDescriptor, this.createRequestOptions(options), displayType, keys, selection);
    }
    async getContentSetSize(options, descriptorOrOverrides, keys) {
        return this.request(this.rpcClient, this.rpcClient.getContentSetSize, this.createRequestOptions(options), descriptorOrOverrides, keys);
    }
    async getContent(options, descriptorOrOverrides, keys) {
        return this.request(this.rpcClient, this.rpcClient.getContent, this.createRequestOptions(options), descriptorOrOverrides, keys);
    }
    async getContentAndSize(options, descriptorOrOverrides, keys) {
        return this.request(this.rpcClient, this.rpcClient.getContentAndSize, this.createRequestOptions(options), descriptorOrOverrides, keys);
    }
    async getDistinctValues(options, descriptor, keys, fieldName, maximumValueCount) {
        return this.request(this.rpcClient, this.rpcClient.getDistinctValues, this.createRequestOptions(options), descriptor, keys, fieldName, maximumValueCount);
    }
    async getDisplayLabel(options, key) {
        return this.request(this.rpcClient, this.rpcClient.getDisplayLabel, this.createRequestOptions(options), key);
    }
    async getDisplayLabels(options, keys) {
        return this.request(this.rpcClient, this.rpcClient.getDisplayLabels, this.createRequestOptions(options), keys);
    }
    async getSelectionScopes(options) {
        return this.request(this.rpcClient, this.rpcClient.getSelectionScopes, this.createRequestOptions(options));
    }
    async computeSelection(options, ids, scopeId) {
        return this.request(this.rpcClient, this.rpcClient.computeSelection, this.createRequestOptions(options), ids, scopeId);
    }
}
exports.RpcRequestsHandler = RpcRequestsHandler;


/***/ }),

/***/ "./lib/RulesetVariables.js":
/*!*********************************!*\
  !*** ./lib/RulesetVariables.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Possible variable value types
 * @internal
 */
var VariableValueTypes;
(function (VariableValueTypes) {
    /** Integer value */
    VariableValueTypes["Int"] = "int";
    /** Array of integer values */
    VariableValueTypes["IntArray"] = "int[]";
    /** Boolean value */
    VariableValueTypes["Bool"] = "bool";
    /** String value */
    VariableValueTypes["String"] = "string";
    /** Id64String value */
    VariableValueTypes["Id64"] = "id64";
    /** Array of Id64String values */
    VariableValueTypes["Id64Array"] = "id64[]";
})(VariableValueTypes = exports.VariableValueTypes || (exports.VariableValueTypes = {}));
/** @internal */
var RulesetVariablesState;
(function (RulesetVariablesState) {
    RulesetVariablesState.STATE_ID = "ruleset variables";
})(RulesetVariablesState = exports.RulesetVariablesState || (exports.RulesetVariablesState = {}));


/***/ }),

/***/ "./lib/RulesetsFactory.js":
/*!********************************!*\
  !*** ./lib/RulesetsFactory.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const Rule_1 = __webpack_require__(/*! ./rules/Rule */ "./lib/rules/Rule.js");
const ContentSpecification_1 = __webpack_require__(/*! ./rules/content/ContentSpecification */ "./lib/rules/content/ContentSpecification.js");
const Value_1 = __webpack_require__(/*! ./content/Value */ "./lib/content/Value.js");
const TypeDescription_1 = __webpack_require__(/*! ./content/TypeDescription */ "./lib/content/TypeDescription.js");
const RelationshipDirection_1 = __webpack_require__(/*! ./rules/RelationshipDirection */ "./lib/rules/RelationshipDirection.js");
/**
 * A factory class that can be used to create presentation rulesets targeted towards
 * specific use cases.
 *
 * @public
 */
class RulesetsFactory {
    /**
     * Create a ruleset with content rules for getting instances are of the
     * same ECClass and have the same property value as the provided `record`.
     * @param field A field identifying which property of the record we should use
     * @param record A record whose similar instances should be found
     */
    createSimilarInstancesRuleset(field, record) {
        if (!field.isPropertiesField())
            throw new Error("Can only create 'similar instances' ruleset for properties-based records");
        if (field.type.valueFormat !== TypeDescription_1.PropertyValueFormat.Primitive)
            throw new Error("Can only create 'similar instances' ruleset for primitive properties");
        if (field.properties.length === 0)
            throw new Error("Invalid properties' field with no properties");
        if (record.isFieldMerged(field.name))
            throw new Error("Can't create 'similar instances' ruleset for merged values");
        if (!record.classInfo)
            throw new Error("Can't create 'similar instances' for records based on multiple different ECClass instances");
        const propertyName = getPropertyName(field);
        const propertyValue = getPropertyValue(record, field);
        const relatedInstances = createRelatedInstanceSpecs(field);
        const relatedInstanceSpecs = relatedInstances.map((r) => r.spec);
        const ruleset = {
            id: `SimilarInstances/${propertyName}/${bentleyjs_core_1.Guid.createValue()}`,
            rules: [],
        };
        ruleset.rules.push({
            ruleType: Rule_1.RuleTypes.Content,
            specifications: [{
                    specType: ContentSpecification_1.ContentSpecificationTypes.ContentInstancesOfSpecificClasses,
                    classes: createMultiClassSpecification(record.classInfo),
                    arePolymorphic: true,
                    relatedInstances: relatedInstanceSpecs,
                    instanceFilter: createInstanceFilter(relatedInstanceSpecs, propertyName, propertyValue.v),
                }],
        });
        const description = createDescription(record, relatedInstances.map((r) => r.class), field, propertyValue.d);
        return { ruleset, description };
    }
}
exports.RulesetsFactory = RulesetsFactory;
const createDescription = (record, relatedClasses, field, value) => {
    const classes = (relatedClasses.length > 0) ? relatedClasses : [record.classInfo];
    return classes.reduce((descr, classInfo, index) => {
        if (index !== 0)
            descr += " OR ";
        descr += `[${classInfo.label}].[${field.label}] = ${value}`;
        return descr;
    }, "");
};
const getPropertyName = (field) => {
    let name = field.properties[0].property.name;
    if (field.type.typeName === "navigation")
        name += ".Id";
    return name;
};
const toString = (displayValue) => {
    if (!displayValue)
        return "NULL";
    return displayValue.toString();
};
const getPropertyValue = (record, field) => {
    const fieldNamesStack = [];
    let currField = field;
    while (currField) {
        fieldNamesStack.push(currField.name);
        currField = currField.parent;
    }
    let currFieldName = fieldNamesStack.pop();
    let displayValue = record.displayValues[currFieldName];
    let value = record.values[currFieldName];
    currFieldName = fieldNamesStack.pop();
    while (currFieldName) {
        if (!Value_1.Value.isNestedContent(value) || value.length === 0)
            throw new Error("Invalid record value");
        if (value.length > 1)
            throw new Error("Can't create 'similar instances' for records related through many part of *-to-many relationship");
        if (value[0].mergedFieldNames.indexOf(currFieldName) !== -1)
            throw new Error("Can't create 'similar instances' ruleset for merged values");
        displayValue = value[0].displayValues[currFieldName];
        value = value[0].values[currFieldName];
        currFieldName = fieldNamesStack.pop();
    }
    return { v: value, d: toString(displayValue) };
};
const createInstanceFilter = (relatedInstances, propertyName, propertyValue) => {
    const aliases = relatedInstances.map((relatedInstanceSpec) => relatedInstanceSpec.alias);
    if (aliases.length === 0)
        aliases.push("this");
    return aliases.reduce((filter, alias, index) => {
        if (index !== 0)
            filter += " OR ";
        filter += createComparison(`${alias}.${propertyName}`, "=", propertyValue);
        return filter;
    }, "");
};
const createComparison = (name, operator, value) => {
    let compareValue;
    if (typeof value === "undefined")
        compareValue = "NULL";
    else if (typeof value === "string")
        compareValue = `"${value}"`;
    else if (typeof value === "boolean")
        compareValue = value ? "TRUE" : "FALSE";
    else if (typeof value === "number")
        compareValue = value.toString();
    else
        throw new Error("Unsupported value format");
    return `${name} ${operator} ${compareValue}`;
};
const createMultiClassSpecification = (classInfo) => {
    const [schemaName, className] = classInfo.name.split(":");
    return { schemaName, classNames: [className] };
};
const createSingleClassSpecification = (classInfo) => {
    const [schemaName, className] = classInfo.name.split(":");
    return { schemaName, className };
};
const createRelatedInstanceSpec = (relatedClassInfo, index) => ({
    spec: {
        relationship: createSingleClassSpecification(relatedClassInfo.relationshipInfo),
        class: createSingleClassSpecification(relatedClassInfo.isForwardRelationship ? relatedClassInfo.targetClassInfo : relatedClassInfo.sourceClassInfo),
        requiredDirection: relatedClassInfo.isForwardRelationship ? RelationshipDirection_1.RelationshipDirection.Backward : RelationshipDirection_1.RelationshipDirection.Forward,
        isRequired: true,
        alias: `related_${index}`,
    },
    class: relatedClassInfo.isForwardRelationship ? relatedClassInfo.targetClassInfo : relatedClassInfo.sourceClassInfo,
});
const createRelatedInstanceSpecs = (field) => {
    const specs = new Array();
    field.properties.forEach((property, index) => {
        if (property.relatedClassPath.length === 0) {
            // not related
            return;
        }
        if (property.relatedClassPath.length > 1) {
            // RelatedInstance presentation rule doesn't support multiple step relationships yet
            throw new Error("Can't create related instance specification for property related through multiple relationships");
        }
        specs.push(createRelatedInstanceSpec(property.relatedClassPath[0], index));
    });
    if (field.parent) {
        if (specs.length > 0) {
            // note: should prepend field.parent.pathToPrimaryClass to every spec, but
            // RelatedInstance presentation rule doesn't support multiple step relationships yet
            throw new Error("Can't create related instance specification for property related through multiple relationships");
        }
        if (field.parent.pathToPrimaryClass.length === 0) {
            throw new Error("Expecting nested fields to always have relationship path to primary class");
        }
        if (field.parent.pathToPrimaryClass.length > 1) {
            // RelatedInstance presentation rule doesn't support multiple step relationships yet
            throw new Error("Can't create related instance specification for property related through multiple relationships");
        }
        specs.push(createRelatedInstanceSpec(field.parent.pathToPrimaryClass[0], 0));
    }
    return specs;
};


/***/ }),

/***/ "./lib/Utils.js":
/*!**********************!*\
  !*** ./lib/Utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const Key_1 = __webpack_require__(/*! ./hierarchy/Key */ "./lib/hierarchy/Key.js");
/**
 * Get total number of instances included in the supplied key set. The
 * count is calculated by adding all of the following:
 * - `keys.instanceKeysCount`
 * - number of `keys.nodeKeys` which are *ECInstance* keys
 * - for every grouping node key in `keys.nodeKeys`, number of grouped instances
 *
 * E.g. if `keys` contains one instance key, one *ECInstance* node key
 * and one grouping node key which groups 3 instances, the result is 5.
 *
 * @public
 */
exports.getInstancesCount = (keys) => {
    let count = keys.instanceKeysCount;
    keys.nodeKeys.forEach((key) => {
        if (Key_1.NodeKey.isInstanceNodeKey(key)) {
            count++;
        }
        else if (Key_1.NodeKey.isGroupingNodeKey(key)) {
            count += key.groupedInstancesCount;
        }
    });
    return count;
};


/***/ }),

/***/ "./lib/content/Content.js":
/*!********************************!*\
  !*** ./lib/content/Content.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const Descriptor_1 = __webpack_require__(/*! ./Descriptor */ "./lib/content/Descriptor.js");
const Item_1 = __webpack_require__(/*! ./Item */ "./lib/content/Item.js");
/**
 * A data structure that contains the [[Descriptor]] and a list of [[Item]]
 * objects which are based on that descriptor.
 *
 * @public
 */
class Content {
    /** Create a new [[Content]] instance */
    constructor(descriptor, items) {
        this.descriptor = descriptor;
        this.contentSet = items;
    }
    /** @internal */
    toJSON() {
        return {
            descriptor: this.descriptor.toJSON(),
            contentSet: this.contentSet.map((item) => item.toJSON()),
        };
    }
    /**
     * Deserialize Content from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized content or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Content.reviver);
        const descriptor = Descriptor_1.Descriptor.fromJSON(json.descriptor);
        if (!descriptor)
            return undefined;
        const contentSet = json.contentSet
            .map((itemJson) => Item_1.Item.fromJSON(itemJson))
            .filter((item) => (item !== undefined));
        return new Content(descriptor, contentSet);
    }
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing Content objects.
     *
     * @internal
     */
    static reviver(key, value) {
        return key === "" ? Content.fromJSON(value) : value;
    }
}
exports.Content = Content;


/***/ }),

/***/ "./lib/content/Descriptor.js":
/*!***********************************!*\
  !*** ./lib/content/Descriptor.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
const Fields_1 = __webpack_require__(/*! ./Fields */ "./lib/content/Fields.js");
const selectClassInfoFromJSON = (json) => {
    return Object.assign({}, json, { selectClassInfo: EC_1.ClassInfo.fromJSON(json.selectClassInfo), pathToPrimaryClass: json.pathToPrimaryClass.map((p) => EC_1.RelatedClassInfo.fromJSON(p)), relatedPropertyPaths: json.relatedPropertyPaths.map((rp) => (rp.map((p) => EC_1.RelatedClassInfo.fromJSON(p)))) });
};
/**
 * Flags that control content format.
 * @public
 */
var ContentFlags;
(function (ContentFlags) {
    /** Each content record only has [[InstanceKey]] and no data */
    ContentFlags[ContentFlags["KeysOnly"] = 1] = "KeysOnly";
    /** Each content record additionally has an image id */
    ContentFlags[ContentFlags["ShowImages"] = 2] = "ShowImages";
    /** Each content record additionally has a display label */
    ContentFlags[ContentFlags["ShowLabels"] = 4] = "ShowLabels";
    /** All content records are merged into a single record (see [Merging values]($docs/learning/content/Terminology#value-merging)) */
    ContentFlags[ContentFlags["MergeResults"] = 8] = "MergeResults";
    /** Content has only distinct values */
    ContentFlags[ContentFlags["DistinctValues"] = 16] = "DistinctValues";
    /** Doesn't create property or calculated fields. Can be used in conjunction with [[ShowLabels]]. */
    ContentFlags[ContentFlags["NoFields"] = 32] = "NoFields";
})(ContentFlags = exports.ContentFlags || (exports.ContentFlags = {}));
/**
 * Data sorting direction
 * @public
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/**
 * Data structure that describes content: fields, sorting, filtering, format, etc.
 * Descriptor may be changed to control how content is created.
 *
 * @public
 */
class Descriptor {
    /** Construct a new Descriptor using a `DescriptorSource` */
    constructor(source) {
        Object.assign(this, source, {
            selectClasses: [...source.selectClasses],
            fields: [...source.fields],
        });
    }
    /** @internal */
    toJSON() {
        return Object.assign({}, this, {
            fields: this.fields.map((field) => field.toJSON()),
        });
    }
    /**
     * Deserialize Descriptor from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized descriptor or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Descriptor.reviver);
        const descriptor = Object.create(Descriptor.prototype);
        return Object.assign(descriptor, json, {
            fields: json.fields.map((fieldJson) => {
                const field = Fields_1.Field.fromJSON(fieldJson);
                if (field)
                    field.rebuildParentship();
                return field;
            }).filter((field) => (undefined !== field)),
            selectClasses: json.selectClasses.map((selectClass) => selectClassInfoFromJSON(selectClass)),
        });
    }
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing Content objects.
     *
     * @internal
     */
    static reviver(key, value) {
        return key === "" ? Descriptor.fromJSON(value) : value;
    }
    /**
     * Get field by its name
     * @param name Name of the field to find
     * @param recurse Recurse into nested fields
     */
    getFieldByName(name, recurse) {
        return findField(this.fields, name, recurse);
    }
    /** @internal */
    createDescriptorOverrides() {
        return {
            displayType: this.displayType,
            hiddenFieldNames: [],
            sortingFieldName: this.sortingField ? this.sortingField.name : undefined,
            sortDirection: this.sortDirection,
            contentFlags: this.contentFlags,
            filterExpression: this.filterExpression,
        };
    }
    /** @internal */
    createStrippedDescriptor() {
        const stripped = Object.create(Descriptor.prototype);
        return Object.assign(stripped, this, {
            fields: [],
            selectClasses: [],
        });
    }
}
exports.Descriptor = Descriptor;
const findField = (fields, name, recurse) => {
    for (const field of fields) {
        if (field.name === name)
            return field;
        if (recurse && field.isNestedContentField()) {
            const nested = findField(field.nestedFields, name, recurse);
            if (nested)
                return nested;
        }
    }
    return undefined;
};


/***/ }),

/***/ "./lib/content/DisplayTypes.js":
/*!*************************************!*\
  !*** ./lib/content/DisplayTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Displayed content types. Affects how the content is formatted, e.g.
 * the [[ContentFlags]].
 *
 * @public
 */
var DefaultContentDisplayTypes;
(function (DefaultContentDisplayTypes) {
    /** Unknown content type. */
    DefaultContentDisplayTypes["Undefined"] = "Undefined";
    /** Grid or table view content type. By default adds [[ContentFlags.ShowLabels]] flag. */
    DefaultContentDisplayTypes["Grid"] = "Grid";
    /** Property pane content type. By default adds [[ContentFlags.MergeResults]] flag. */
    DefaultContentDisplayTypes["PropertyPane"] = "PropertyPane";
    /** List content type. By default adds [[ContentFlags.NoFields]] and [[ContentFlags.ShowLabels]] flags */
    DefaultContentDisplayTypes["List"] = "List";
    /** Viewport content type. By default adds [[ContentFlags.KeysOnly]] flag. */
    DefaultContentDisplayTypes["Viewport"] = "Graphics";
})(DefaultContentDisplayTypes = exports.DefaultContentDisplayTypes || (exports.DefaultContentDisplayTypes = {}));


/***/ }),

/***/ "./lib/content/Fields.js":
/*!*******************************!*\
  !*** ./lib/content/Fields.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
const Property_1 = __webpack_require__(/*! ./Property */ "./lib/content/Property.js");
/**
 * Is supplied field a properties field.
 * @internal
 */
const isPropertiesField = (field) => {
    return field.properties;
};
/**
 * Is supplied field a nested content field.
 * @internal
 */
const isNestedContentField = (field) => {
    return field.nestedFields;
};
/**
 * Describes a single content field. A field is usually represented as a grid column
 * or a property pane row.
 *
 * @public
 */
class Field {
    /**
     * Creates an instance of Field.
     * @param category Category information
     * @param name Unique name
     * @param label Display label
     * @param type Description of this field's values data type
     * @param isReadonly Are values in this field read-only
     * @param priority Priority of the field
     * @param editor Property editor used to edit values of this field
     */
    constructor(category, name, label, type, isReadonly, priority, editor) {
        this.category = category;
        this.name = name;
        this.label = label;
        this.type = type;
        this.isReadonly = isReadonly;
        this.priority = priority;
        this.editor = editor;
    }
    /**
     * Is this a [[PropertiesField]]
     */
    isPropertiesField() { return isPropertiesField(this); }
    /**
     * Is this a [[NestedContentField]]
     */
    isNestedContentField() { return isNestedContentField(this); }
    /**
     * Get parent
     */
    get parent() { return this._parent; }
    /** @internal */
    toJSON() {
        return {
            category: this.category,
            name: this.name,
            label: this.label,
            type: this.type,
            isReadonly: this.isReadonly,
            priority: this.priority,
            editor: this.editor,
        };
    }
    /**
     * Deserialize Field from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized field or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Field.reviver);
        if (isPropertiesField(json))
            return PropertiesField.fromJSON(json);
        if (isNestedContentField(json))
            return NestedContentField.fromJSON(json);
        const field = Object.create(Field.prototype);
        return Object.assign(field, json);
    }
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing Field objects.
     *
     * @internal
     */
    static reviver(key, value) {
        return key === "" ? Field.fromJSON(value) : value;
    }
    /** @internal */
    resetParentship() {
        this._parent = undefined;
    }
    /** @internal */
    rebuildParentship(parentField) {
        this._parent = parentField;
    }
}
exports.Field = Field;
/**
 * Describes a content field that's based on one or more similar
 * EC properties.
 *
 * @public
 */
class PropertiesField extends Field {
    /**
     * Creates an instance of PropertiesField.
     * @param category Category information
     * @param name Unique name
     * @param label Display label
     * @param type Description of this field's values data type
     * @param isReadonly Are values in this field read-only
     * @param priority Priority of the field
     * @param properties A list of properties this field is created from
     * @param editor Property editor used to edit values of this field
     */
    constructor(category, name, label, description, isReadonly, priority, properties, editor) {
        super(category, name, label, description, isReadonly, priority, editor);
        this.properties = properties;
    }
    /** @internal */
    toJSON() {
        return Object.assign({}, super.toJSON(), { properties: this.properties.map((p) => Property_1.Property.toJSON(p)) });
    }
    /**
     * Deserialize PropertiesField from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized properties field or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Field.reviver);
        const field = Object.create(PropertiesField.prototype);
        return Object.assign(field, json, {
            properties: json.properties.map((p) => Property_1.Property.fromJSON(p)),
        });
    }
}
exports.PropertiesField = PropertiesField;
/**
 * Describes a content field that contains [Nested content]($docs/learning/content/Terminology#nested-content).
 *
 * @public
 */
class NestedContentField extends Field {
    /**
     * Creates an instance of NestedContentField.
     * @param category Category information
     * @param name Unique name
     * @param label Display label
     * @param type Description of this field's values data type
     * @param isReadonly Are values in this field read-only
     * @param priority Priority of the field
     * @param contentClassInfo Information about an ECClass whose properties are nested inside this field
     * @param pathToPrimaryClass Relationship path to [Primary class]($docs/learning/content/Terminology#primary-class)
     * @param nestedFields Contained nested fields
     * @param editor Property editor used to edit values of this field
     */
    constructor(category, name, label, description, isReadonly, priority, contentClassInfo, pathToPrimaryClass, nestedFields, editor) {
        super(category, name, label, description, isReadonly, priority, editor);
        this.contentClassInfo = contentClassInfo;
        this.pathToPrimaryClass = pathToPrimaryClass;
        this.nestedFields = nestedFields;
    }
    /** @internal */
    toJSON() {
        return Object.assign({}, super.toJSON(), { contentClassInfo: this.contentClassInfo, pathToPrimaryClass: this.pathToPrimaryClass, nestedFields: this.nestedFields.map((field) => field.toJSON()) });
    }
    /**
     * Deserialize NestedContentField from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized nested content field or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Field.reviver);
        const field = Object.create(NestedContentField.prototype);
        return Object.assign(field, json, {
            nestedFields: json.nestedFields.map((nestedFieldJson) => Field.fromJSON(nestedFieldJson)).filter((nestedField) => (undefined !== nestedField)),
            contentClassInfo: EC_1.ClassInfo.fromJSON(json.contentClassInfo),
            pathToPrimaryClass: json.pathToPrimaryClass.map((p) => EC_1.RelatedClassInfo.fromJSON(p)),
        });
    }
    /** @internal */
    resetParentship() {
        super.resetParentship();
        for (const nestedField of this.nestedFields)
            nestedField.resetParentship();
    }
    /** @internal */
    rebuildParentship(parentField) {
        super.rebuildParentship(parentField);
        for (const nestedField of this.nestedFields)
            nestedField.rebuildParentship(this);
    }
}
exports.NestedContentField = NestedContentField;


/***/ }),

/***/ "./lib/content/Item.js":
/*!*****************************!*\
  !*** ./lib/content/Item.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
const Value_1 = __webpack_require__(/*! ./Value */ "./lib/content/Value.js");
/**
 * A data structure that represents a single content record.
 * @public
 */
class Item {
    /**
     * Creates an instance of Item.
     * @param primaryKeys Keys of instances whose data is contained in this item
     * @param label Display label of the item
     * @param imageId ID of the image associated with this item
     * @param classInfo For cases when item consists only of same class instances, information about the ECClass
     * @param values Raw values dictionary
     * @param displayValues Display values dictionary
     * @param mergedFieldNames List of field names whose values are merged (see [Merging values]($docs/learning/content/Terminology#value-merging))
     * @param extendedData Extended data injected into this content item
     */
    constructor(primaryKeys, label, imageId, classInfo, values, displayValues, mergedFieldNames, extendedData) {
        this.primaryKeys = primaryKeys;
        this.label = label;
        this.imageId = imageId;
        this.classInfo = classInfo;
        this.values = values;
        this.displayValues = displayValues;
        this.mergedFieldNames = mergedFieldNames;
        this.extendedData = extendedData;
    }
    /**
     * Is value of field with the specified name merged in this record.
     */
    isFieldMerged(fieldName) {
        return -1 !== this.mergedFieldNames.indexOf(fieldName);
    }
    /** @internal */
    toJSON() {
        return Object.assign({}, this, {
            classInfo: this.classInfo ? EC_1.ClassInfo.toJSON(this.classInfo) : undefined,
            values: Value_1.Value.toJSON(this.values),
            displayValues: Value_1.DisplayValue.toJSON(this.displayValues),
        });
    }
    /**
     * Deserialize Item from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized item or undefined if deserialization failed
     *
     * @internal
     */
    static fromJSON(json) {
        if (!json)
            return undefined;
        if (typeof json === "string")
            return JSON.parse(json, Item.reviver);
        const item = Object.create(Item.prototype);
        return Object.assign(item, json, {
            primaryKeys: json.primaryKeys.map((pk) => EC_1.InstanceKey.fromJSON(pk)),
            classInfo: json.classInfo ? EC_1.ClassInfo.fromJSON(json.classInfo) : undefined,
            values: Value_1.Value.fromJSON(json.values),
            displayValues: Value_1.DisplayValue.fromJSON(json.displayValues),
        });
    }
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing Item objects.
     *
     * @internal
     */
    static reviver(key, value) {
        return key === "" ? Item.fromJSON(value) : value;
    }
}
exports.Item = Item;


/***/ }),

/***/ "./lib/content/Property.js":
/*!*********************************!*\
  !*** ./lib/content/Property.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
/** @public */
var Property;
(function (Property) {
    /** @internal */
    function toJSON(prop) {
        return {
            property: EC_1.PropertyInfo.toJSON(prop.property),
            relatedClassPath: prop.relatedClassPath.map((rci) => EC_1.RelatedClassInfo.toJSON(rci)),
        };
    }
    Property.toJSON = toJSON;
    /**
     * Deserializes [[Property]] from [[PropertyJSON]]
     * @internal
     */
    function fromJSON(json) {
        return {
            property: EC_1.PropertyInfo.fromJSON(json.property),
            relatedClassPath: json.relatedClassPath.map((p) => EC_1.RelatedClassInfo.fromJSON(p)),
        };
    }
    Property.fromJSON = fromJSON;
})(Property = exports.Property || (exports.Property = {}));


/***/ }),

/***/ "./lib/content/TypeDescription.js":
/*!****************************************!*\
  !*** ./lib/content/TypeDescription.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Format of the property value.
 * @public
 */
var PropertyValueFormat;
(function (PropertyValueFormat) {
    /** Primitive value */
    PropertyValueFormat["Primitive"] = "Primitive";
    /** Array value */
    PropertyValueFormat["Array"] = "Array";
    /** Struct value */
    PropertyValueFormat["Struct"] = "Struct";
})(PropertyValueFormat = exports.PropertyValueFormat || (exports.PropertyValueFormat = {}));


/***/ }),

/***/ "./lib/content/Value.js":
/*!******************************!*\
  !*** ./lib/content/Value.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Content */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
/** @public */
var Value;
(function (Value) {
    /** Is the value a primitive */
    function isPrimitive(value) { return isPrimitiveValue(value); }
    Value.isPrimitive = isPrimitive;
    /** Is the value an array */
    function isArray(value) { return isArrayValue(value); }
    Value.isArray = isArray;
    /** Is the value a map / struct */
    function isMap(value) { return isMapValue(value); }
    Value.isMap = isMap;
    /** Is the value a nested content value */
    function isNestedContent(value) { return isNestedContentValue(value); }
    Value.isNestedContent = isNestedContent;
    /** @internal */
    function fromJSON(json) {
        if (json === null)
            return undefined;
        if (isNestedContentValue(json))
            return json.map(NestedContentValue.fromJSON);
        if (isArrayValue(json))
            return valuesArrayFromJSON(json);
        if (isMapValue(json))
            return valuesMapFromJSON(json);
        return json;
    }
    Value.fromJSON = fromJSON;
    /** @internal */
    function toJSON(value) {
        if (undefined === value)
            return null;
        if (isNestedContentValue(value))
            return value.map(NestedContentValue.toJSON);
        if (isArrayValue(value))
            return valuesArrayToJSON(value);
        if (isMapValue(value))
            return valuesMapToJSON(value);
        return value;
    }
    Value.toJSON = toJSON;
})(Value = exports.Value || (exports.Value = {}));
var DisplayValue;
(function (DisplayValue) {
    /** Is the value a primitive */
    function isPrimitive(value) { return isPrimitiveValue(value); }
    DisplayValue.isPrimitive = isPrimitive;
    /** Is the value an array */
    function isArray(value) { return isArrayValue(value); }
    DisplayValue.isArray = isArray;
    /** Is the value a map / struct */
    function isMap(value) { return isMapValue(value); }
    DisplayValue.isMap = isMap;
    /** @internal */
    function fromJSON(json) {
        if (json === null)
            return undefined;
        if (isArrayValue(json))
            return displayValuesArrayFromJSON(json);
        if (isMapValue(json))
            return displayValuesMapFromJSON(json);
        return json;
    }
    DisplayValue.fromJSON = fromJSON;
    /** @internal */
    function toJSON(value) {
        if (undefined === value)
            return null;
        if (isArrayValue(value))
            return displayValuesArrayToJSON(value);
        if (isMapValue(value))
            return displayValuesMapToJSON(value);
        return value;
    }
    DisplayValue.toJSON = toJSON;
})(DisplayValue = exports.DisplayValue || (exports.DisplayValue = {}));
/** @public */
var NestedContentValue;
(function (NestedContentValue) {
    /** @internal */
    function toJSON(json) {
        return {
            primaryKeys: json.primaryKeys.map(EC_1.InstanceKey.toJSON),
            values: valuesMapToJSON(json.values),
            displayValues: displayValuesMapToJSON(json.displayValues),
            mergedFieldNames: json.mergedFieldNames,
        };
    }
    NestedContentValue.toJSON = toJSON;
    /** @internal */
    function fromJSON(json) {
        return {
            primaryKeys: json.primaryKeys.map(EC_1.InstanceKey.fromJSON),
            values: valuesMapFromJSON(json.values),
            displayValues: displayValuesMapFromJSON(json.displayValues),
            mergedFieldNames: json.mergedFieldNames,
        };
    }
    NestedContentValue.fromJSON = fromJSON;
})(NestedContentValue = exports.NestedContentValue || (exports.NestedContentValue = {}));
function isNestedContentValue(v) {
    return (v !== undefined) && Array.isArray(v)
        && ((v.length === 0)
            || v[0].primaryKeys !== undefined
                && v[0].values !== undefined
                && v[0].displayValues !== undefined
                && v[0].mergedFieldNames !== undefined);
}
function isArrayValue(v) {
    // note: we don't guarantee by 100% that v is ValuesArray | DisplayValuesArray, but merely make compiler happy.
    // we have other means to determine the type of value.
    return (v !== undefined) && Array.isArray(v);
}
function isMapValue(v) {
    return (v !== undefined) && (typeof v === "object") && !Array.isArray(v);
}
function isPrimitiveValue(v) {
    return !isArrayValue(v) && !isMapValue(v);
}
function valuesArrayFromJSON(json) {
    return json.map(Value.fromJSON);
}
function valuesArrayToJSON(values) {
    return values.map(Value.toJSON);
}
function valuesMapFromJSON(json) {
    const map = {};
    for (const key in json) {
        /* istanbul ignore else */
        if (json.hasOwnProperty(key)) {
            map[key] = Value.fromJSON(json[key]);
        }
    }
    return map;
}
function valuesMapToJSON(values) {
    const map = {};
    for (const key in values) {
        /* istanbul ignore else */
        if (values.hasOwnProperty(key)) {
            map[key] = Value.toJSON(values[key]);
        }
    }
    return map;
}
function displayValuesArrayFromJSON(json) {
    return json.map(DisplayValue.fromJSON);
}
function displayValuesArrayToJSON(values) {
    return values.map(DisplayValue.toJSON);
}
function displayValuesMapFromJSON(json) {
    const map = {};
    for (const key in json) {
        /* istanbul ignore else */
        if (json.hasOwnProperty(key)) {
            map[key] = DisplayValue.fromJSON(json[key]);
        }
    }
    return map;
}
function displayValuesMapToJSON(values) {
    const map = {};
    for (const key in values) {
        /* istanbul ignore else */
        if (values.hasOwnProperty(key)) {
            map[key] = DisplayValue.toJSON(values[key]);
        }
    }
    return map;
}


/***/ }),

/***/ "./lib/hierarchy/Key.js":
/*!******************************!*\
  !*** ./lib/hierarchy/Key.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Hierarchies */
Object.defineProperty(exports, "__esModule", { value: true });
const EC_1 = __webpack_require__(/*! ../EC */ "./lib/EC.js");
/**
 * Standard node types
 * @public
 */
var StandardNodeTypes;
(function (StandardNodeTypes) {
    StandardNodeTypes["ECInstanceNode"] = "ECInstanceNode";
    StandardNodeTypes["ECClassGroupingNode"] = "ECClassGroupingNode";
    StandardNodeTypes["ECPropertyGroupingNode"] = "ECPropertyGroupingNode";
    StandardNodeTypes["DisplayLabelGroupingNode"] = "DisplayLabelGroupingNode";
})(StandardNodeTypes = exports.StandardNodeTypes || (exports.StandardNodeTypes = {}));
/** @public */
var NodeKey;
(function (NodeKey) {
    /**
     * Serialize given [[NodeKey]] to JSON
     * @internal
     */
    function toJSON(key) {
        if (isInstanceNodeKey(key))
            return Object.assign({}, key, { instanceKey: EC_1.InstanceKey.toJSON(key.instanceKey) });
        return Object.assign({}, key);
    }
    NodeKey.toJSON = toJSON;
    /**
     * Deserialize node key from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized node key
     *
     * @internal
     */
    function fromJSON(json) {
        if (isInstanceNodeKey(json))
            return Object.assign({}, json, { instanceKey: EC_1.InstanceKey.fromJSON(json.instanceKey) });
        return Object.assign({}, json);
    }
    NodeKey.fromJSON = fromJSON;
    /**
     * Checks if the supplied key is an [[ECInstanceNodeKey]]
     * @public
     */
    function isInstanceNodeKey(key) {
        return key.type === StandardNodeTypes.ECInstanceNode;
    }
    NodeKey.isInstanceNodeKey = isInstanceNodeKey;
    /**
     * Checks if the supplied key is an [[ECClassGroupingNodeKey]]
     * @public
     */
    function isClassGroupingNodeKey(key) {
        return key.type === StandardNodeTypes.ECClassGroupingNode;
    }
    NodeKey.isClassGroupingNodeKey = isClassGroupingNodeKey;
    /**
     * Checks if the supplied key is an [[ECPropertyGroupingNodeKey]]
     * @public
     */
    function isPropertyGroupingNodeKey(key) {
        return key.type === StandardNodeTypes.ECPropertyGroupingNode;
    }
    NodeKey.isPropertyGroupingNodeKey = isPropertyGroupingNodeKey;
    /**
     * Checks if the supplied key is a [[LabelGroupingNodeKey]]
     * @public
     */
    function isLabelGroupingNodeKey(key) {
        return key.type === StandardNodeTypes.DisplayLabelGroupingNode;
    }
    NodeKey.isLabelGroupingNodeKey = isLabelGroupingNodeKey;
    /**
     * Checks if the supplied key is a grouping node key
     * @public
     */
    function isGroupingNodeKey(key) {
        return isClassGroupingNodeKey(key) || isPropertyGroupingNodeKey(key) || isLabelGroupingNodeKey(key);
    }
    NodeKey.isGroupingNodeKey = isGroupingNodeKey;
})(NodeKey = exports.NodeKey || (exports.NodeKey = {}));


/***/ }),

/***/ "./lib/hierarchy/Node.js":
/*!*******************************!*\
  !*** ./lib/hierarchy/Node.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Hierarchies */
Object.defineProperty(exports, "__esModule", { value: true });
const Key_1 = __webpack_require__(/*! ./Key */ "./lib/hierarchy/Key.js");
/** @public */
var Node;
(function (Node) {
    /**
     * Serialize given node to JSON.
     * @internal
     */
    function toJSON(node) {
        return Object.assign({}, node, { key: Key_1.NodeKey.toJSON(node.key) });
    }
    Node.toJSON = toJSON;
    /**
     * Deserialize node from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized node
     *
     * @internal
     */
    function fromJSON(json) {
        if (typeof json === "string")
            return JSON.parse(json, reviver);
        return Object.assign({}, json, {
            key: Key_1.NodeKey.fromJSON(json.key),
        });
    }
    Node.fromJSON = fromJSON;
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing [[Node]] objects.
     *
     * @internal
     */
    function reviver(key, value) {
        return key === "" ? fromJSON(value) : value;
    }
    Node.reviver = reviver;
    /**
     * Deserialize nodes list from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized nodes list
     *
     * @internal
     */
    function listFromJSON(json) {
        if (typeof json === "string")
            return JSON.parse(json, listReviver);
        return json.map((m) => fromJSON(m));
    }
    Node.listFromJSON = listFromJSON;
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing [[Node]][] objects.
     *
     * @internal
     */
    function listReviver(key, value) {
        return key === "" ? listFromJSON(value) : value;
    }
    Node.listReviver = listReviver;
})(Node = exports.Node || (exports.Node = {}));


/***/ }),

/***/ "./lib/hierarchy/NodePathElement.js":
/*!******************************************!*\
  !*** ./lib/hierarchy/NodePathElement.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Hierarchies */
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __webpack_require__(/*! ./Node */ "./lib/hierarchy/Node.js");
/** @public */
var NodePathElement;
(function (NodePathElement) {
    /**
     * Serialize given [[NodePathElement]] to JSON
     * @internal
     */
    function toJSON(npe) {
        const result = {
            node: Node_1.Node.toJSON(npe.node),
            index: npe.index,
            children: npe.children.map(NodePathElement.toJSON),
        };
        if (undefined !== npe.isMarked)
            result.isMarked = npe.isMarked;
        if (undefined !== npe.filteringData)
            result.filteringData = nodePathFilteringDataToJson(npe.filteringData);
        return result;
    }
    NodePathElement.toJSON = toJSON;
    /**
     * Deserialize [[NodePathElement]] from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized [[NodePathElement]]
     *
     * @internal
     */
    function fromJSON(json) {
        if (typeof json === "string")
            return JSON.parse(json, reviver);
        const result = {
            index: json.index,
            node: Node_1.Node.fromJSON(json.node),
            children: listFromJSON(json.children),
        };
        if (undefined !== json.isMarked)
            result.isMarked = json.isMarked;
        if (undefined !== json.filteringData)
            result.filteringData = nodePathFilteringDataFromJson(json.filteringData);
        return result;
    }
    NodePathElement.fromJSON = fromJSON;
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing [[NodePathElement]] objects.
     *
     * @internal
     */
    function reviver(key, value) {
        return key === "" ? fromJSON(value) : value;
    }
    NodePathElement.reviver = reviver;
    /**
     * Deserialize [[NodePathElement]] list from JSON
     * @param json JSON or JSON serialized to string to deserialize from
     * @returns Deserialized [[NodePathElement]] list
     *
     * @internal
     */
    function listFromJSON(json) {
        if (typeof json === "string")
            return JSON.parse(json, listReviver);
        return json.map((m) => fromJSON(m));
    }
    NodePathElement.listFromJSON = listFromJSON;
    /**
     * Reviver function that can be used as a second argument for
     * `JSON.parse` method when parsing [[NodePathElement]][] objects.
     *
     * @internal
     */
    function listReviver(key, value) {
        return key === "" ? listFromJSON(value) : value;
    }
    NodePathElement.listReviver = listReviver;
})(NodePathElement = exports.NodePathElement || (exports.NodePathElement = {}));
const nodePathFilteringDataToJson = (npfd) => {
    return {
        occurances: npfd.matchesCount,
        childrenOccurances: npfd.childMatchesCount,
    };
};
const nodePathFilteringDataFromJson = (json) => {
    return {
        matchesCount: json.occurances,
        childMatchesCount: json.childrenOccurances,
    };
};


/***/ }),

/***/ "./lib/presentation-common.js":
/*!************************************!*\
  !*** ./lib/presentation-common.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
var EC_1 = __webpack_require__(/*! ./EC */ "./lib/EC.js");
exports.InstanceKey = EC_1.InstanceKey;
exports.ClassInfo = EC_1.ClassInfo;
exports.PropertyInfo = EC_1.PropertyInfo;
exports.RelatedClassInfo = EC_1.RelatedClassInfo;
var Error_1 = __webpack_require__(/*! ./Error */ "./lib/Error.js");
exports.PresentationError = Error_1.PresentationError;
exports.PresentationStatus = Error_1.PresentationStatus;
var KeySet_1 = __webpack_require__(/*! ./KeySet */ "./lib/KeySet.js");
exports.KeySet = KeySet_1.KeySet;
exports.Key = KeySet_1.Key;
var PresentationRpcInterface_1 = __webpack_require__(/*! ./PresentationRpcInterface */ "./lib/PresentationRpcInterface.js");
exports.PresentationRpcInterface = PresentationRpcInterface_1.PresentationRpcInterface;
var RpcRequestsHandler_1 = __webpack_require__(/*! ./RpcRequestsHandler */ "./lib/RpcRequestsHandler.js");
exports.RpcRequestsHandler = RpcRequestsHandler_1.RpcRequestsHandler;
var RulesetVariables_1 = __webpack_require__(/*! ./RulesetVariables */ "./lib/RulesetVariables.js");
exports.RulesetVariablesState = RulesetVariables_1.RulesetVariablesState;
exports.VariableValueTypes = RulesetVariables_1.VariableValueTypes;
var RegisteredRuleset_1 = __webpack_require__(/*! ./RegisteredRuleset */ "./lib/RegisteredRuleset.js");
exports.RegisteredRuleset = RegisteredRuleset_1.RegisteredRuleset;
exports.RulesetManagerState = RegisteredRuleset_1.RulesetManagerState;
var RulesetsFactory_1 = __webpack_require__(/*! ./RulesetsFactory */ "./lib/RulesetsFactory.js");
exports.RulesetsFactory = RulesetsFactory_1.RulesetsFactory;
var Logging_1 = __webpack_require__(/*! ./Logging */ "./lib/Logging.js");
exports.LoggingNamespaces = Logging_1.LoggingNamespaces;
var Utils_1 = __webpack_require__(/*! ./Utils */ "./lib/Utils.js");
exports.getInstancesCount = Utils_1.getInstancesCount;
var Content_1 = __webpack_require__(/*! ./content/Content */ "./lib/content/Content.js");
exports.Content = Content_1.Content;
var Descriptor_1 = __webpack_require__(/*! ./content/Descriptor */ "./lib/content/Descriptor.js");
exports.Descriptor = Descriptor_1.Descriptor;
exports.SortDirection = Descriptor_1.SortDirection;
exports.ContentFlags = Descriptor_1.ContentFlags;
var DisplayTypes_1 = __webpack_require__(/*! ./content/DisplayTypes */ "./lib/content/DisplayTypes.js");
exports.DefaultContentDisplayTypes = DisplayTypes_1.DefaultContentDisplayTypes;
var Fields_1 = __webpack_require__(/*! ./content/Fields */ "./lib/content/Fields.js");
exports.Field = Fields_1.Field;
exports.PropertiesField = Fields_1.PropertiesField;
exports.NestedContentField = Fields_1.NestedContentField;
var Item_1 = __webpack_require__(/*! ./content/Item */ "./lib/content/Item.js");
exports.Item = Item_1.Item;
var Property_1 = __webpack_require__(/*! ./content/Property */ "./lib/content/Property.js");
exports.Property = Property_1.Property;
var TypeDescription_1 = __webpack_require__(/*! ./content/TypeDescription */ "./lib/content/TypeDescription.js");
exports.PropertyValueFormat = TypeDescription_1.PropertyValueFormat;
var Value_1 = __webpack_require__(/*! ./content/Value */ "./lib/content/Value.js");
exports.Value = Value_1.Value;
exports.DisplayValue = Value_1.DisplayValue;
exports.NestedContentValue = Value_1.NestedContentValue;
/** @module Hierarchies */
var Key_1 = __webpack_require__(/*! ./hierarchy/Key */ "./lib/hierarchy/Key.js");
exports.NodeKey = Key_1.NodeKey;
exports.StandardNodeTypes = Key_1.StandardNodeTypes;
var Node_1 = __webpack_require__(/*! ./hierarchy/Node */ "./lib/hierarchy/Node.js");
exports.Node = Node_1.Node;
var NodePathElement_1 = __webpack_require__(/*! ./hierarchy/NodePathElement */ "./lib/hierarchy/NodePathElement.js");
exports.NodePathElement = NodePathElement_1.NodePathElement;
var ChildNodeSpecification_1 = __webpack_require__(/*! ./rules/hierarchy/ChildNodeSpecification */ "./lib/rules/hierarchy/ChildNodeSpecification.js");
exports.ChildNodeSpecificationTypes = ChildNodeSpecification_1.ChildNodeSpecificationTypes;
var CustomQueryInstanceNodesSpecification_1 = __webpack_require__(/*! ./rules/hierarchy/CustomQueryInstanceNodesSpecification */ "./lib/rules/hierarchy/CustomQueryInstanceNodesSpecification.js");
exports.QuerySpecificationTypes = CustomQueryInstanceNodesSpecification_1.QuerySpecificationTypes;
var InstanceLabelOverride_1 = __webpack_require__(/*! ./rules/customization/InstanceLabelOverride */ "./lib/rules/customization/InstanceLabelOverride.js");
exports.InstanceLabelOverrideValueSpecificationType = InstanceLabelOverride_1.InstanceLabelOverrideValueSpecificationType;
var GroupingRule_1 = __webpack_require__(/*! ./rules/customization/GroupingRule */ "./lib/rules/customization/GroupingRule.js");
exports.GroupingSpecificationTypes = GroupingRule_1.GroupingSpecificationTypes;
exports.PropertyGroupingValue = GroupingRule_1.PropertyGroupingValue;
var ContentSpecification_1 = __webpack_require__(/*! ./rules/content/ContentSpecification */ "./lib/rules/content/ContentSpecification.js");
exports.ContentSpecificationTypes = ContentSpecification_1.ContentSpecificationTypes;
var RelatedPropertiesSpecification_1 = __webpack_require__(/*! ./rules/content/modifiers/RelatedPropertiesSpecification */ "./lib/rules/content/modifiers/RelatedPropertiesSpecification.js");
exports.RelationshipMeaning = RelatedPropertiesSpecification_1.RelationshipMeaning;
exports.RelatedPropertiesSpecialValues = RelatedPropertiesSpecification_1.RelatedPropertiesSpecialValues;
var PropertyEditorsSpecification_1 = __webpack_require__(/*! ./rules/content/modifiers/PropertyEditorsSpecification */ "./lib/rules/content/modifiers/PropertyEditorsSpecification.js");
exports.PropertyEditorParameterTypes = PropertyEditorsSpecification_1.PropertyEditorParameterTypes;
var Rule_1 = __webpack_require__(/*! ./rules/Rule */ "./lib/rules/Rule.js");
exports.RuleTypes = Rule_1.RuleTypes;
var Variables_1 = __webpack_require__(/*! ./rules/Variables */ "./lib/rules/Variables.js");
exports.VariableValueType = Variables_1.VariableValueType;
var RelationshipDirection_1 = __webpack_require__(/*! ./rules/RelationshipDirection */ "./lib/rules/RelationshipDirection.js");
exports.RelationshipDirection = RelationshipDirection_1.RelationshipDirection;
/* istanbul ignore next */
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("presentation-common", "1.0.0");
}


/***/ }),

/***/ "./lib/rules/RelationshipDirection.js":
/*!********************************************!*\
  !*** ./lib/rules/RelationshipDirection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines direction of a relationship that should be followed
 * @public
 */
var RelationshipDirection;
(function (RelationshipDirection) {
    /** Relationship should be followed in both directions. */
    RelationshipDirection["Both"] = "Both";
    /** Relationship should be followed only in forward direction. */
    RelationshipDirection["Forward"] = "Forward";
    /** Relationship should be followed only in backward direction. */
    RelationshipDirection["Backward"] = "Backward";
})(RelationshipDirection = exports.RelationshipDirection || (exports.RelationshipDirection = {}));


/***/ }),

/***/ "./lib/rules/Rule.js":
/*!***************************!*\
  !*** ./lib/rules/Rule.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for serializing [[Rule]] objects to JSON.
 * @public
 */
var RuleTypes;
(function (RuleTypes) {
    // hierarchy rules
    RuleTypes["RootNodes"] = "RootNodes";
    RuleTypes["ChildNodes"] = "ChildNodes";
    // content rules
    RuleTypes["Content"] = "Content";
    RuleTypes["ContentModifier"] = "ContentModifier";
    // customization rules
    RuleTypes["Grouping"] = "Grouping";
    RuleTypes["PropertySorting"] = "PropertySorting";
    RuleTypes["DisabledSorting"] = "DisabledSorting";
    RuleTypes["InstanceLabelOverride"] = "InstanceLabelOverride";
    RuleTypes["LabelOverride"] = "LabelOverride";
    RuleTypes["CheckBox"] = "CheckBox";
    RuleTypes["ImageIdOverride"] = "ImageIdOverride";
    RuleTypes["StyleOverride"] = "StyleOverride";
    RuleTypes["ExtendedData"] = "ExtendedData";
})(RuleTypes = exports.RuleTypes || (exports.RuleTypes = {}));


/***/ }),

/***/ "./lib/rules/Variables.js":
/*!********************************!*\
  !*** ./lib/rules/Variables.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Available value types of user-controllable variables
 * @public
 */
var VariableValueType;
(function (VariableValueType) {
    /** Bool value, that uses Yes / No strings in the UI */
    VariableValueType["YesNo"] = "YesNo";
    /** Bool value, that uses Show / Hide strings in the UI */
    VariableValueType["ShowHide"] = "ShowHide";
    /** Any string value */
    VariableValueType["String"] = "StringValue";
    /** Any integer value */
    VariableValueType["Int"] = "IntValue";
})(VariableValueType = exports.VariableValueType || (exports.VariableValueType = {}));


/***/ }),

/***/ "./lib/rules/content/ContentSpecification.js":
/*!***************************************************!*\
  !*** ./lib/rules/content/ContentSpecification.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for serializing array of [[ContentSpecification]]
 * @public
 */
var ContentSpecificationTypes;
(function (ContentSpecificationTypes) {
    ContentSpecificationTypes["ContentInstancesOfSpecificClasses"] = "ContentInstancesOfSpecificClasses";
    ContentSpecificationTypes["ContentRelatedInstances"] = "ContentRelatedInstances";
    ContentSpecificationTypes["SelectedNodeInstances"] = "SelectedNodeInstances";
})(ContentSpecificationTypes = exports.ContentSpecificationTypes || (exports.ContentSpecificationTypes = {}));


/***/ }),

/***/ "./lib/rules/content/modifiers/PropertyEditorsSpecification.js":
/*!*********************************************************************!*\
  !*** ./lib/rules/content/modifiers/PropertyEditorsSpecification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for serializing array of [[PropertyEditorParameters]] to JSON
 * @public
 */
var PropertyEditorParameterTypes;
(function (PropertyEditorParameterTypes) {
    PropertyEditorParameterTypes["Json"] = "Json";
    PropertyEditorParameterTypes["Multiline"] = "Multiline";
    PropertyEditorParameterTypes["Range"] = "Range";
    PropertyEditorParameterTypes["Slider"] = "Slider";
})(PropertyEditorParameterTypes = exports.PropertyEditorParameterTypes || (exports.PropertyEditorParameterTypes = {}));


/***/ }),

/***/ "./lib/rules/content/modifiers/RelatedPropertiesSpecification.js":
/*!***********************************************************************!*\
  !*** ./lib/rules/content/modifiers/RelatedPropertiesSpecification.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Meaning of the relationship
 * @public
 */
var RelationshipMeaning;
(function (RelationshipMeaning) {
    /**
     * Related instance is part of the primary instance. Related properties
     * with this meaning are displayed in UI as if they belonged to the
     * primary instance.
     */
    RelationshipMeaning["SameInstance"] = "SameInstance";
    /**
     * Related instance if not part of the primary instance - it should
     * appear as related. UI components may display related instance properties
     * differently, e.g. put them under a different category, etc.
     */
    RelationshipMeaning["RelatedInstance"] = "RelatedInstance";
})(RelationshipMeaning = exports.RelationshipMeaning || (exports.RelationshipMeaning = {}));
/**
 * Special values that can be used in [[RelatedPropertiesSpecification.propertyNames]]
 * @public
 */
var RelatedPropertiesSpecialValues;
(function (RelatedPropertiesSpecialValues) {
    /**
     * Used to specify that no properties should be included. Usually
     * used together with [[RelatedPropertiesSpecification.nestedRelatedProperties]]
     */
    RelatedPropertiesSpecialValues["None"] = "_none_";
})(RelatedPropertiesSpecialValues = exports.RelatedPropertiesSpecialValues || (exports.RelatedPropertiesSpecialValues = {}));


/***/ }),

/***/ "./lib/rules/customization/GroupingRule.js":
/*!*************************************************!*\
  !*** ./lib/rules/customization/GroupingRule.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Available types of [[GroupingSpecification]]
 * @public
 */
var GroupingSpecificationTypes;
(function (GroupingSpecificationTypes) {
    GroupingSpecificationTypes["Class"] = "Class";
    GroupingSpecificationTypes["Property"] = "Property";
    GroupingSpecificationTypes["SameLabelInstance"] = "SameLabelInstance";
})(GroupingSpecificationTypes = exports.GroupingSpecificationTypes || (exports.GroupingSpecificationTypes = {}));
/**
 * Used in [[PropertyGroup]] to specify the type of value to use
 * for grouping and sorting
 *
 * @public
 */
var PropertyGroupingValue;
(function (PropertyGroupingValue) {
    /** By property value */
    PropertyGroupingValue["PropertyValue"] = "PropertyValue";
    /** By display label */
    PropertyGroupingValue["DisplayLabel"] = "DisplayLabel";
})(PropertyGroupingValue = exports.PropertyGroupingValue || (exports.PropertyGroupingValue = {}));


/***/ }),

/***/ "./lib/rules/customization/InstanceLabelOverride.js":
/*!**********************************************************!*\
  !*** ./lib/rules/customization/InstanceLabelOverride.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Types of possible [[InstanceLabelOverride]] label value.
 * @public
 */
var InstanceLabelOverrideValueSpecificationType;
(function (InstanceLabelOverrideValueSpecificationType) {
    InstanceLabelOverrideValueSpecificationType["Composite"] = "Composite";
    InstanceLabelOverrideValueSpecificationType["Property"] = "Property";
    InstanceLabelOverrideValueSpecificationType["ClassName"] = "ClassName";
    InstanceLabelOverrideValueSpecificationType["ClassLabel"] = "ClassLabel";
    InstanceLabelOverrideValueSpecificationType["BriefcaseId"] = "BriefcaseId";
    InstanceLabelOverrideValueSpecificationType["LocalId"] = "LocalId";
})(InstanceLabelOverrideValueSpecificationType = exports.InstanceLabelOverrideValueSpecificationType || (exports.InstanceLabelOverrideValueSpecificationType = {}));


/***/ }),

/***/ "./lib/rules/hierarchy/ChildNodeSpecification.js":
/*!*******************************************************!*\
  !*** ./lib/rules/hierarchy/ChildNodeSpecification.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for serializing array of [[ChildNodeSpecification]]
 * @public
 */
var ChildNodeSpecificationTypes;
(function (ChildNodeSpecificationTypes) {
    // hierarchy specifications
    ChildNodeSpecificationTypes["AllInstanceNodes"] = "AllInstanceNodes";
    ChildNodeSpecificationTypes["AllRelatedInstanceNodes"] = "AllRelatedInstanceNodes";
    ChildNodeSpecificationTypes["RelatedInstanceNodes"] = "RelatedInstanceNodes";
    ChildNodeSpecificationTypes["InstanceNodesOfSpecificClasses"] = "InstanceNodesOfSpecificClasses";
    ChildNodeSpecificationTypes["CustomQueryInstanceNodes"] = "CustomQueryInstanceNodes";
    ChildNodeSpecificationTypes["CustomNode"] = "CustomNode";
})(ChildNodeSpecificationTypes = exports.ChildNodeSpecificationTypes || (exports.ChildNodeSpecificationTypes = {}));


/***/ }),

/***/ "./lib/rules/hierarchy/CustomQueryInstanceNodesSpecification.js":
/*!**********************************************************************!*\
  !*** ./lib/rules/hierarchy/CustomQueryInstanceNodesSpecification.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PresentationRules */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used for serializing array of [[QuerySpecification]] to JSON.
 * @public
 */
var QuerySpecificationTypes;
(function (QuerySpecificationTypes) {
    QuerySpecificationTypes["String"] = "String";
    QuerySpecificationTypes["ECPropertyValue"] = "ECPropertyValue";
})(QuerySpecificationTypes = exports.QuerySpecificationTypes || (exports.QuerySpecificationTypes = {}));


/***/ }),

/***/ "@bentley/bentleyjs-core":
/*!*********************************!*\
  !*** external "bentleyjs_core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__;

/***/ }),

/***/ "@bentley/imodeljs-common":
/*!**********************************!*\
  !*** external "imodeljs_common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_common__;

/***/ })

},[["./lib/presentation-common.js","runtime"]]]);
});
//# sourceMappingURL=presentation-common.js.map