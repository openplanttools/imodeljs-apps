(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("imodeljs_frontend"), require("presentation_common"));
	else if(typeof define === 'function' && define.amd)
		define("presentation_frontend", ["bentleyjs_core", "imodeljs_frontend", "presentation_common"], factory);
	else if(typeof exports === 'object')
		exports["presentation_frontend"] = factory(require("bentleyjs_core"), require("imodeljs_frontend"), require("presentation_common"));
	else
		root["presentation_frontend"] = factory(root["bentleyjs_core"], root["imodeljs_frontend"], root["presentation_common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_frontend__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_common__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["presentation-frontend"],{

/***/ "./lib/PersistenceHelper.js":
/*!**********************************!*\
  !*** ./lib/PersistenceHelper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
/**
 * Static class which can be used to convert between
 * [KeySet]($presentation-common) and
 * [PersistentKeysContainer]($presentation-common).
 *
 * @beta
 */
class PersistenceHelper {
    /* istanbul ignore next */
    constructor() { }
    /**
     * Create a [PersistentKeysContainer]($presentation-common)
     * @param imodel iModel whose keys are contained in the `keyset`
     * @param keyset The keys to put into the persistent container
     */
    static async createPersistentKeysContainer(imodel, keyset) {
        var e_1, _a;
        const instanceClassNames = Array.from(keyset.instanceKeys.keys());
        const instanceClassNameBindings = instanceClassNames.map(() => "?").join(",");
        const modelClassNameObjs = [];
        try {
            for (var _b = __asyncValues(imodel.query(`
      SELECT s.Alias || '.' || c.Name AS fullClassName
        FROM [meta].[ECSchemaDef] s
        JOIN [meta].[ECClassDef] c ON c.SchemaId = s.ECInstanceId
        JOIN [meta].[ClassHasAllBaseClasses] b ON b.SourceECInstanceId = c.ECInstanceId
        JOIN [meta].[ECClassDef] mc ON mc.ECInstanceId = b.TargetECInstanceId
        JOIN [meta].[ECSchemaDef] ms ON ms.ECInstanceId = mc.SchemaId
       WHERE ms.Alias || '.' || mc.Name = 'bis.Model'
             AND s.Alias || '.' || c.Name IN (${instanceClassNameBindings})
    `, instanceClassNames)), _c; _c = await _b.next(), !_c.done;) {
                const modelClassNameObj = _c.value;
                modelClassNameObjs.push(modelClassNameObj);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        const modelClassNames = new Set(modelClassNameObjs.map((o) => o.fullClassName));
        let modelIds = new Array();
        let elementIds = new Array();
        for (const entry of keyset.instanceKeys.entries()) {
            const className = entry[0];
            const ids = entry[1];
            if (modelClassNames.has(className))
                modelIds = modelIds.concat(Array.from(ids));
            else
                elementIds = elementIds.concat(Array.from(ids));
        }
        return {
            models: modelIds,
            elements: elementIds,
            nodes: Array.from(keyset.nodeKeys),
        };
    }
    /**
     * Create a [KeySet]($presentation-common)
     * @param imodel iModel whose keys are contained in the `container`
     * @param container Container of keys to put into the KeySet
     */
    static async createKeySet(imodel, container) {
        const keyset = new presentation_common_1.KeySet();
        keyset.add(container.nodes);
        keyset.add(await imodel.models.getProps(container.models));
        keyset.add(await imodel.elements.getProps(container.elements));
        return keyset;
    }
}
exports.PersistenceHelper = PersistenceHelper;


/***/ }),

/***/ "./lib/Presentation.js":
/*!*****************************!*\
  !*** ./lib/Presentation.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const PresentationManager_1 = __webpack_require__(/*! ./PresentationManager */ "./lib/PresentationManager.js");
const SelectionManager_1 = __webpack_require__(/*! ./selection/SelectionManager */ "./lib/selection/SelectionManager.js");
const SelectionScopesManager_1 = __webpack_require__(/*! ./selection/SelectionScopesManager */ "./lib/selection/SelectionScopesManager.js");
let presentationManager;
let selectionManager;
let i18n;
/**
 * Static class used to statically set up Presentation library for the frontend.
 * Basically what it does is:
 * - Create a singleton [[PresentationManager]] instance
 * - Create a singleton [[SelectionManager]] instance
 *
 * @public
 */
class Presentation {
    /* istanbul ignore next */
    constructor() { }
    /**
     * Initializes Presentation library for the frontend.
     *
     * Example:
     * ``` ts
     * [[include:Presentation.Frontend.Initialization]]
     * ```
     *
     * The method should be called after a call
     * to [IModelApp.startup]($imodeljs-frontend)
     *
     * @param props Optional properties to use when creating [[PresentationManager]]. If not provided
     * or provided with `activeLocale` not set, `Presentation.i18n.languageList()[0]` is used as active locale.
     */
    static initialize(props) {
        if (!imodeljs_frontend_1.IModelApp.initialized) {
            throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.NotInitialized, "IModelApp.startup must be called before calling Presentation.initialize");
        }
        if (!i18n) {
            i18n = imodeljs_frontend_1.IModelApp.i18n;
        }
        if (!presentationManager) {
            if (!props)
                props = {};
            if (!props.activeLocale) {
                const languages = Presentation.i18n.languageList();
                props.activeLocale = (languages.length ? languages[0] : undefined);
            }
            presentationManager = PresentationManager_1.PresentationManager.create(props);
        }
        if (!selectionManager) {
            const scopesManager = new SelectionScopesManager_1.SelectionScopesManager({
                rpcRequestsHandler: presentationManager.rpcRequestsHandler,
                localeProvider: () => this.presentation.activeLocale,
            });
            selectionManager = new SelectionManager_1.SelectionManager({
                scopes: scopesManager,
            });
        }
    }
    /**
     * Terminates Presentation library frontend. This method should be called
     * before a call to [IModelApp.shutdown]($imodeljs-frontend)
     */
    static terminate() {
        if (presentationManager)
            presentationManager.dispose();
        presentationManager = undefined;
        selectionManager = undefined;
        i18n = undefined;
    }
    /**
     * Get the singleton [[PresentationManager]]
     */
    static get presentation() {
        if (!presentationManager)
            throw new Error("Presentation must be first initialized by calling Presentation.initialize");
        return presentationManager;
    }
    /** @internal */
    static set presentation(value) {
        if (presentationManager)
            presentationManager.dispose();
        presentationManager = value;
    }
    /**
     * Get the singleton [[SelectionManager]]
     */
    static get selection() {
        if (!selectionManager)
            throw new Error("Presentation must be first initialized by calling Presentation.initialize");
        return selectionManager;
    }
    /** @internal */
    static set selection(value) {
        selectionManager = value;
    }
    /**
     * Get localization manager used by Presentation frontend.
     * Returns the result of `IModelApp.i18n`.
     */
    static get i18n() {
        if (!i18n)
            throw new Error("Presentation must be first initialized by calling Presentation.initialize");
        return i18n;
    }
    /** @internal */
    static set i18n(value) {
        i18n = value;
    }
}
exports.Presentation = Presentation;


/***/ }),

/***/ "./lib/PresentationManager.js":
/*!************************************!*\
  !*** ./lib/PresentationManager.js ***!
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
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const RulesetVariablesManager_1 = __webpack_require__(/*! ./RulesetVariablesManager */ "./lib/RulesetVariablesManager.js");
const RulesetManager_1 = __webpack_require__(/*! ./RulesetManager */ "./lib/RulesetManager.js");
/**
 * Frontend Presentation manager which basically just forwards all calls to
 * the backend implementation.
 *
 * @public
 */
class PresentationManager {
    constructor(props) {
        if (props)
            this.activeLocale = props.activeLocale;
        this._requestsHandler = (props && props.rpcRequestsHandler)
            ? props.rpcRequestsHandler
            : new presentation_common_1.RpcRequestsHandler(props ? { clientId: props.clientId } : undefined);
        this._rulesetVars = new Map();
        const rulesets = new RulesetManager_1.RulesetManagerImpl();
        this._rulesets = rulesets;
        this._requestsHandler.registerClientStateHolder(rulesets);
    }
    dispose() {
        this._requestsHandler.dispose();
    }
    /**
     * Create a new PresentationManager instance
     * @param props Optional properties used to configure the manager
     */
    static create(props) {
        return new PresentationManager(props);
    }
    /** @internal */
    get rpcRequestsHandler() { return this._requestsHandler; }
    /**
     * Get rulesets manager
     */
    rulesets() { return this._rulesets; }
    /**
     * Get ruleset variables manager for specific ruleset
     * @param rulesetId Id of the ruleset to get the vars manager for
     */
    vars(rulesetId) {
        if (!this._rulesetVars.has(rulesetId)) {
            const varsManager = new RulesetVariablesManager_1.RulesetVariablesManagerImpl(rulesetId);
            this._rulesetVars.set(rulesetId, varsManager);
            this._requestsHandler.registerClientStateHolder(varsManager);
        }
        return this._rulesetVars.get(rulesetId);
    }
    toIModelTokenOptions(options) {
        // 1. put default `locale`
        // 2. put all `options` members (if `locale` is set, it'll override the default put at #1)
        // 3. put `imodel` of type `IModelToken` which overwrites the `imodel` from `options` put at #2
        return Object.assign({}, { locale: this.activeLocale }, options, {
            imodel: options.imodel.iModelToken,
        });
    }
    /**
     * Retrieves nodes.
     * @param requestOptions options for the request
     * @param parentKey    Key of the parent node.
     * @return A promise object that returns either a nodes response object with nodes and nodes count on success or an error string on error.
     */
    async getNodesAndCount(requestOptions, parentKey) {
        const parentKeyJson = parentKey ? presentation_common_1.NodeKey.toJSON(parentKey) : undefined;
        const result = await this._requestsHandler.getNodesAndCount(this.toIModelTokenOptions(requestOptions), parentKeyJson);
        return Object.assign({}, result, { nodes: result.nodes.map(presentation_common_1.Node.fromJSON) });
    }
    /**
     * Retrieves nodes
     * @param requestOptions options for the request
     * @param parentKey    Key of the parent node if requesting for child nodes
     * @return A promise object that returns either an array of nodes on success or an error string on error.
     */
    async getNodes(requestOptions, parentKey) {
        const parentKeyJson = parentKey ? presentation_common_1.NodeKey.toJSON(parentKey) : undefined;
        const result = await this._requestsHandler.getNodes(this.toIModelTokenOptions(requestOptions), parentKeyJson);
        return result.map(presentation_common_1.Node.fromJSON);
    }
    /**
     * Retrieves nodes count.
     * @param requestOptions options for the request
     * @param parentKey Key of the parent node if requesting for child nodes count.
     * @return A promise object that returns the number of nodes.
     */
    async getNodesCount(requestOptions, parentKey) {
        const parentKeyJson = parentKey ? presentation_common_1.NodeKey.toJSON(parentKey) : undefined;
        return this._requestsHandler.getNodesCount(this.toIModelTokenOptions(requestOptions), parentKeyJson);
    }
    /**
     * Retrieves paths from root nodes to children nodes according to specified keys. Intersecting paths will be merged.
     * @param requestOptions options for the request
     * @param paths Paths from root node to some child node.
     * @param markedIndex Index of the path in `paths` that will be marked.
     * @return A promise object that returns either an array of paths on success or an error string on error.
     */
    async getNodePaths(requestOptions, paths, markedIndex) {
        const pathsJson = paths.map((p) => p.map(presentation_common_1.InstanceKey.toJSON));
        const result = await this._requestsHandler.getNodePaths(this.toIModelTokenOptions(requestOptions), pathsJson, markedIndex);
        return result.map(presentation_common_1.NodePathElement.fromJSON);
    }
    /**
     * Retrieves paths from root nodes to nodes containing filter text in their label.
     * @param requestOptions options for the request
     * @param filterText Text to filter nodes against.
     * @return A promise object that returns either an array of paths on success or an error string on error.
     */
    async getFilteredNodePaths(requestOptions, filterText) {
        const result = await this._requestsHandler.getFilteredNodePaths(this.toIModelTokenOptions(requestOptions), filterText);
        return result.map(presentation_common_1.NodePathElement.fromJSON);
    }
    /**
     * Retrieves the content descriptor which can be used to get content.
     * @param requestOptions options for the request
     * @param displayType  The preferred display type of the return content.
     * @param keys         Keys of ECInstances to get the content for.
     * @param selection    Optional selection info in case the content is being requested due to selection change.
     * @return A promise object that returns either a descriptor on success or an error string on error.
     */
    async getContentDescriptor(requestOptions, displayType, keys, selection) {
        const result = await this._requestsHandler.getContentDescriptor(this.toIModelTokenOptions(requestOptions), displayType, keys.toJSON(), selection);
        return presentation_common_1.Descriptor.fromJSON(result);
    }
    /**
     * Retrieves the content set size based on the supplied content descriptor override.
     * @param requestOptions          options for the request
     * @param descriptorOrOverrides   Content descriptor or its overrides specifying how the content should be customized
     * @param keys                    Keys of ECInstances to get the content for.
     * @return A promise object that returns either a number on success or an error string on error.
     * Even if concrete implementation returns content in pages, this function returns the total
     * number of records in the content set.
     */
    async getContentSetSize(requestOptions, descriptorOrOverrides, keys) {
        return this._requestsHandler.getContentSetSize(this.toIModelTokenOptions(requestOptions), this.createDescriptorParam(descriptorOrOverrides), keys.toJSON());
    }
    /**
     * Retrieves the content based on the supplied content descriptor override.
     * @param requestOptions          options for the request
     * @param descriptorOrOverrides   Content descriptor or its overrides specifying how the content should be customized
     * @param keys                    Keys of ECInstances to get the content for.
     * @return A promise object that returns either content on success or an error string on error.
     */
    async getContent(requestOptions, descriptorOrOverrides, keys) {
        const result = await this._requestsHandler.getContent(this.toIModelTokenOptions(requestOptions), this.createDescriptorParam(descriptorOrOverrides), keys.toJSON());
        return presentation_common_1.Content.fromJSON(result);
    }
    /**
     * Retrieves the content and content set size based on the supplied content descriptor override.
     * @param requestOptions          Options for the request.
     * @param descriptorOrOverrides   Content descriptor or its overrides specifying how the content should be customized
     * @param keys                    Keys of ECInstances to get the content for.
     * @returns A promise object that returns either content and content set size on success or an error string on error.
     */
    async getContentAndSize(requestOptions, descriptorOrOverrides, keys) {
        const result = await this._requestsHandler.getContentAndSize(this.toIModelTokenOptions(requestOptions), this.createDescriptorParam(descriptorOrOverrides), keys.toJSON());
        return Object.assign({}, result, { content: presentation_common_1.Content.fromJSON(result.content) });
    }
    createDescriptorParam(descriptorOrOverrides) {
        if (descriptorOrOverrides instanceof presentation_common_1.Descriptor)
            return descriptorOrOverrides.createStrippedDescriptor().toJSON();
        return descriptorOrOverrides;
    }
    /**
     * Retrieves distinct values of specific field from the content based on the supplied content descriptor override.
     * @param requestOptions options for the request
     * @param descriptor           Content descriptor which specifies how the content should be returned.
     * @param keys                 Keys of ECInstances to get the content for.
     * @param fieldName            Name of the field from which to take values.
     * @param maximumValueCount    Maximum numbers of values that can be returned. Unlimited if 0.
     * @return A promise object that returns either distinct values on success or an error string on error.
     */
    async getDistinctValues(requestOptions, descriptor, keys, fieldName, maximumValueCount = 0) {
        return this._requestsHandler.getDistinctValues(this.toIModelTokenOptions(requestOptions), descriptor.createStrippedDescriptor().toJSON(), keys.toJSON(), fieldName, maximumValueCount);
    }
    /**
     * Retrieves display label of specific item
     * @param requestOptions options for the request
     * @param key Key of instance to get label for
     */
    async getDisplayLabel(requestOptions, key) {
        return this._requestsHandler.getDisplayLabel(this.toIModelTokenOptions(requestOptions), presentation_common_1.InstanceKey.toJSON(key));
    }
    /**
     * Retrieves display label of specific items
     * @param requestOptions options for the request
     * @param keys Keys of instances to get labels for
     */
    async getDisplayLabels(requestOptions, keys) {
        return this._requestsHandler.getDisplayLabels(this.toIModelTokenOptions(requestOptions), keys.map(presentation_common_1.InstanceKey.toJSON));
    }
}
exports.PresentationManager = PresentationManager;


/***/ }),

/***/ "./lib/RulesetManager.js":
/*!*******************************!*\
  !*** ./lib/RulesetManager.js ***!
  \*******************************/
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
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
/** @internal */
class RulesetManagerImpl {
    constructor() {
        this._clientRulesets = new Map();
        this.key = presentation_common_1.RulesetManagerState.STATE_ID;
        this.onStateChanged = new bentleyjs_core_1.BeEvent();
    }
    get state() {
        const rulesets = [];
        this._clientRulesets.forEach((m) => {
            m.forEach((r) => rulesets.push(r.toJSON()));
        });
        return rulesets;
    }
    /**
     * Get a ruleset with the specified id.
     */
    async get(id) {
        const m = this._clientRulesets.get(id);
        if (!m)
            return undefined;
        return m[0];
    }
    /**
     * Register the supplied ruleset
     */
    async add(ruleset) {
        const registered = new presentation_common_1.RegisteredRuleset(ruleset, bentleyjs_core_1.Guid.createValue(), (r) => this.remove(r));
        if (!this._clientRulesets.has(ruleset.id))
            this._clientRulesets.set(ruleset.id, []);
        this._clientRulesets.get(ruleset.id).push(registered);
        this.onStateChanged.raiseEvent();
        return registered;
    }
    /**
     * Unregister the supplied ruleset
     */
    async remove(ruleset) {
        let rulesetId, uniqueIdentifier;
        if (Array.isArray(ruleset)) {
            rulesetId = ruleset[0];
            uniqueIdentifier = ruleset[1];
        }
        else {
            rulesetId = ruleset.id;
            uniqueIdentifier = ruleset.uniqueIdentifier;
        }
        const m = this._clientRulesets.get(rulesetId);
        if (!m)
            return false;
        let didRemove = false;
        for (let i = 0; i < m.length; ++i) {
            if (m[i].uniqueIdentifier === uniqueIdentifier) {
                m.splice(i, 1);
                didRemove = true;
                break;
            }
        }
        if (didRemove)
            this.onStateChanged.raiseEvent();
        return didRemove;
    }
    /**
     * Remove all rulesets registered in this session.
     */
    async clear() {
        if (0 === this._clientRulesets.size)
            return;
        this._clientRulesets.clear();
        this.onStateChanged.raiseEvent();
    }
}
exports.RulesetManagerImpl = RulesetManagerImpl;


/***/ }),

/***/ "./lib/RulesetVariablesManager.js":
/*!****************************************!*\
  !*** ./lib/RulesetVariablesManager.js ***!
  \****************************************/
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
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
/** @internal */
class RulesetVariablesManagerImpl {
    constructor(rulesetId) {
        this._clientValues = new Map();
        this.key = presentation_common_1.RulesetVariablesState.STATE_ID;
        this.onStateChanged = new bentleyjs_core_1.BeEvent();
        this._rulesetId = rulesetId;
    }
    get state() {
        const state = {};
        const values = [];
        for (const entry of this._clientValues)
            values.push([entry[0], entry[1][0], entry[1][1]]);
        state[this._rulesetId] = values;
        return state;
    }
    changeValueType(actualValue, fromType, toType) {
        switch (toType) {
            case presentation_common_1.VariableValueTypes.Bool:
                switch (fromType) {
                    case presentation_common_1.VariableValueTypes.Int: return (0 !== actualValue);
                    case presentation_common_1.VariableValueTypes.Id64: return bentleyjs_core_1.Id64.isValidId64(actualValue);
                    default: return undefined;
                }
            case presentation_common_1.VariableValueTypes.Int:
                switch (fromType) {
                    case presentation_common_1.VariableValueTypes.Bool: return actualValue ? 1 : 0;
                    case presentation_common_1.VariableValueTypes.Id64: return bentleyjs_core_1.Id64.getUpperUint32(actualValue);
                    default: return undefined;
                }
            case presentation_common_1.VariableValueTypes.IntArray:
                switch (fromType) {
                    case presentation_common_1.VariableValueTypes.Id64Array: return actualValue.map((id) => bentleyjs_core_1.Id64.getUpperUint32(id));
                    default: return undefined;
                }
            case presentation_common_1.VariableValueTypes.Id64:
                switch (fromType) {
                    case presentation_common_1.VariableValueTypes.Bool: return bentleyjs_core_1.Id64.fromLocalAndBriefcaseIds(actualValue ? 1 : 0, 0);
                    case presentation_common_1.VariableValueTypes.Int: return bentleyjs_core_1.Id64.fromLocalAndBriefcaseIds(actualValue, 0);
                    default: return undefined;
                }
            case presentation_common_1.VariableValueTypes.Id64Array:
                switch (fromType) {
                    case presentation_common_1.VariableValueTypes.IntArray: return actualValue.map((int) => bentleyjs_core_1.Id64.fromLocalAndBriefcaseIds(int, 0));
                    default: return undefined;
                }
        }
        return undefined;
    }
    async getValue(id, type) {
        const value = this._clientValues.get(id);
        if (!value)
            return undefined;
        if (value[0] !== type)
            return this.changeValueType(value[1], value[0], type);
        return value[1];
    }
    async setValue(id, type, value) {
        this._clientValues.set(id, [type, value]);
        this.onStateChanged.raiseEvent();
    }
    /**
     * Retrieves `string` variable value.
     * Returns empty string if variable does not exist or does not convert to string.
     */
    async getString(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.String) || "";
    }
    /**
     * Sets `string` variable value
     */
    async setString(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.String, value);
    }
    /**
     * Retrieves `boolean` variable value.
     * Returns `false` if variable does not exist or does not convert to boolean.
     */
    async getBool(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.Bool) || false;
    }
    /**
     * Sets `boolean` variable value
     */
    async setBool(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.Bool, value);
    }
    /**
     * Retrieves `number` variable value.
     * Returns `0` if variable does not exist or does not convert to integer.
     */
    async getInt(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.Int) || 0;
    }
    /**
     * Sets `number` variable value
     */
    async setInt(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.Int, value);
    }
    /**
     * Retrieves `number[]` variable value.
     * Returns empty array if variable does not exist or does not convert to integer array.
     */
    async getInts(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.IntArray) || [];
    }
    /**
     * Sets `number[]` variable value
     */
    async setInts(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.IntArray, value);
    }
    /**
     * Retrieves `Id64String` variable value.
     * Returns invalid Id64String if variable does not exist or does not convert to Id64String.
     */
    async getId64(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.Id64) || bentleyjs_core_1.Id64.invalid;
    }
    /**
     * Sets `Id64String` variable value
     */
    async setId64(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.Id64, value);
    }
    /**
     * Retrieves `Id64String[]` variable value.
     * Returns empty array if variable does not exist or does not convert to Id64String array.
     */
    async getId64s(variableId) {
        return await this.getValue(variableId, presentation_common_1.VariableValueTypes.Id64Array) || [];
    }
    /**
     * Sets `Id64String[]` variable value
     */
    async setId64s(variableId, value) {
        await this.setValue(variableId, presentation_common_1.VariableValueTypes.Id64Array, value);
    }
}
exports.RulesetVariablesManagerImpl = RulesetVariablesManagerImpl;


/***/ }),

/***/ "./lib/presentation-frontend.js":
/*!**************************************!*\
  !*** ./lib/presentation-frontend.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
var PersistenceHelper_1 = __webpack_require__(/*! ./PersistenceHelper */ "./lib/PersistenceHelper.js");
exports.PersistenceHelper = PersistenceHelper_1.PersistenceHelper;
var Presentation_1 = __webpack_require__(/*! ./Presentation */ "./lib/Presentation.js");
exports.Presentation = Presentation_1.Presentation;
var PresentationManager_1 = __webpack_require__(/*! ./PresentationManager */ "./lib/PresentationManager.js");
exports.PresentationManager = PresentationManager_1.PresentationManager;
/** @module UnifiedSelection */
var SelectionChangeEvent_1 = __webpack_require__(/*! ./selection/SelectionChangeEvent */ "./lib/selection/SelectionChangeEvent.js");
exports.SelectionChangeEvent = SelectionChangeEvent_1.SelectionChangeEvent;
exports.SelectionChangeType = SelectionChangeEvent_1.SelectionChangeType;
var SelectionManager_1 = __webpack_require__(/*! ./selection/SelectionManager */ "./lib/selection/SelectionManager.js");
exports.SelectionManager = SelectionManager_1.SelectionManager;
var SelectionScopesManager_1 = __webpack_require__(/*! ./selection/SelectionScopesManager */ "./lib/selection/SelectionScopesManager.js");
exports.SelectionScopesManager = SelectionScopesManager_1.SelectionScopesManager;
var SelectionHandler_1 = __webpack_require__(/*! ./selection/SelectionHandler */ "./lib/selection/SelectionHandler.js");
exports.SelectionHandler = SelectionHandler_1.SelectionHandler;
/* istanbul ignore next */
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("presentation-frontend", "1.0.0");
}


/***/ }),

/***/ "./lib/selection/SelectionChangeEvent.js":
/*!***********************************************!*\
  !*** ./lib/selection/SelectionChangeEvent.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/**
 * An event broadcasted on selection changes
 * @public
 */
class SelectionChangeEvent extends bentleyjs_core_1.BeEvent {
}
exports.SelectionChangeEvent = SelectionChangeEvent;
/**
 * The type of selection change
 * @public
 */
var SelectionChangeType;
(function (SelectionChangeType) {
    /** Added to selection. */
    SelectionChangeType[SelectionChangeType["Add"] = 0] = "Add";
    /** Removed from selection. */
    SelectionChangeType[SelectionChangeType["Remove"] = 1] = "Remove";
    /** Selection was replaced. */
    SelectionChangeType[SelectionChangeType["Replace"] = 2] = "Replace";
    /** Selection was cleared. */
    SelectionChangeType[SelectionChangeType["Clear"] = 3] = "Clear";
})(SelectionChangeType = exports.SelectionChangeType || (exports.SelectionChangeType = {}));


/***/ }),

/***/ "./lib/selection/SelectionHandler.js":
/*!*******************************************!*\
  !*** ./lib/selection/SelectionHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/**
 * A class that handles selection changes and helps to change
 * internal the selection state.
 *
 * @public
 */
class SelectionHandler {
    /**
     * Constructor.
     * @param manager SelectionManager used to store overall selection.
     * @param name The name of the selection handler.
     * @param rulesetId Id of a ruleset selection changes will be associated.
     * @param imodel iModel connection with which the selection changes will be associated with.
     * @param onSelect Callback function called when selection changes.
     */
    constructor(manager, name, imodel, rulesetId, onSelect) {
        /**
         * Called when the selection changes. Handles this callback by first checking whether
         * the event should be handled at all (using the `shouldHandle` method) and then calling `onSelect`
         */
        this.onSelectionChanged = (evt, provider) => {
            if (!this.onSelect || !this.shouldHandle(evt))
                return;
            this._inSelect = true;
            this.onSelect(evt, provider);
            this._inSelect = false;
        };
        this._inSelect = false;
        this.manager = manager;
        this._disposables = new bentleyjs_core_1.DisposableList();
        this.name = name;
        this.rulesetId = rulesetId;
        this.imodel = imodel;
        this.onSelect = onSelect;
        this._disposables.add(this.manager.selectionChange.addListener(this.onSelectionChanged));
    }
    /**
     * Destructor. Must be called before disposing this object to make sure it cleans
     * up correctly.
     */
    dispose() {
        this._disposables.dispose();
    }
    /** Called to check whether the event should be handled by this handler */
    shouldHandle(evt) {
        if (this.name === evt.source)
            return false;
        return true;
    }
    /** Get selection levels for the imodel managed by this handler */
    getSelectionLevels() {
        return this.manager.getSelectionLevels(this.imodel);
    }
    /**
     * Get selection for the imodel managed by this handler.
     * @param level Level of the selection to get. Defaults to 0.
     */
    getSelection(level) {
        return this.manager.getSelection(this.imodel, level);
    }
    /**
     * Add to selection.
     * @param keys The keys to add to selection.
     * @param level Level of the selection.
     */
    addToSelection(keys, level = 0) {
        if (this._inSelect)
            return;
        return this.manager.addToSelection(this.name, this.imodel, keys, level, this.rulesetId);
    }
    /**
     * Remove from selection.
     * @param keys The keys to remove from selection.
     * @param level Level of the selection.
     */
    removeFromSelection(keys, level = 0) {
        if (this._inSelect)
            return;
        return this.manager.removeFromSelection(this.name, this.imodel, keys, level, this.rulesetId);
    }
    /**
     * Change selection.
     * @param keys The keys indicating the new selection.
     * @param level Level of the selection.
     */
    replaceSelection(keys, level = 0) {
        if (this._inSelect)
            return;
        return this.manager.replaceSelection(this.name, this.imodel, keys, level, this.rulesetId);
    }
    /**
     * Clear selection.
     * @param level Level of the selection.
     */
    clearSelection(level = 0) {
        if (this._inSelect)
            return;
        return this.manager.clearSelection(this.name, this.imodel, level, this.rulesetId);
    }
}
exports.SelectionHandler = SelectionHandler;


/***/ }),

/***/ "./lib/selection/SelectionManager.js":
/*!*******************************************!*\
  !*** ./lib/selection/SelectionManager.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const SelectionChangeEvent_1 = __webpack_require__(/*! ./SelectionChangeEvent */ "./lib/selection/SelectionChangeEvent.js");
/**
 * The selection manager which stores the overall selection.
 * @public
 */
class SelectionManager {
    /**
     * Creates an instance of SelectionManager.
     */
    constructor(props) {
        this._selectionContainerMap = new Map();
        this._imodelToolSelectionSyncHandlers = new Map();
        this.selectionChange = new SelectionChangeEvent_1.SelectionChangeEvent();
        this.scopes = props.scopes;
        imodeljs_frontend_1.IModelConnection.onClose.addListener((imodel) => {
            this.onConnectionClose(imodel);
        });
    }
    onConnectionClose(imodel) {
        this.clearSelection("Connection Close Event", imodel);
        this._selectionContainerMap.delete(imodel);
    }
    getContainer(imodel) {
        let selectionContainer = this._selectionContainerMap.get(imodel);
        if (!selectionContainer) {
            selectionContainer = new SelectionContainer();
            this._selectionContainerMap.set(imodel, selectionContainer);
        }
        return selectionContainer;
    }
    /**
     * Request the manager to sync with imodel's tool selection (see `IModelConnection.selectionSet`).
     */
    setSyncWithIModelToolSelection(imodel, sync = true) {
        const registration = this._imodelToolSelectionSyncHandlers.get(imodel);
        if (sync) {
            if (!registration || registration.requestorsCount === 0) {
                this._imodelToolSelectionSyncHandlers.set(imodel, { requestorsCount: 1, handler: new ToolSelectionSyncHandler(imodel, imodeljs_frontend_1.IModelApp.locateManager, this) });
            }
            else {
                this._imodelToolSelectionSyncHandlers.set(imodel, Object.assign({}, registration, { requestorsCount: registration.requestorsCount + 1 }));
            }
        }
        else {
            if (registration && registration.requestorsCount > 0) {
                const requestorsCount = registration.requestorsCount - 1;
                if (requestorsCount > 0) {
                    this._imodelToolSelectionSyncHandlers.set(imodel, Object.assign({}, registration, { requestorsCount }));
                }
                else {
                    this._imodelToolSelectionSyncHandlers.delete(imodel);
                    registration.handler.dispose();
                }
            }
        }
    }
    /** Get the selection levels currently stored in this manager for the specified imodel */
    getSelectionLevels(imodel) {
        return this.getContainer(imodel).getSelectionLevels();
    }
    /** Get the selection currently stored in this manager */
    getSelection(imodel, level = 0) {
        return this.getContainer(imodel).getSelection(level);
    }
    handleEvent(evt) {
        const container = this.getContainer(evt.imodel);
        const selectedItemsSet = container.getSelection(evt.level);
        const guidBefore = selectedItemsSet.guid;
        switch (evt.changeType) {
            case SelectionChangeEvent_1.SelectionChangeType.Add:
                selectedItemsSet.add(evt.keys);
                break;
            case SelectionChangeEvent_1.SelectionChangeType.Remove:
                selectedItemsSet.delete(evt.keys);
                break;
            case SelectionChangeEvent_1.SelectionChangeType.Replace:
                if (selectedItemsSet.size !== evt.keys.size || !selectedItemsSet.hasAll(evt.keys)) {
                    // note: the above check is only needed to avoid changing
                    // guid of the keyset if we're replacing keyset with the same keys
                    selectedItemsSet.clear().add(evt.keys);
                }
                break;
            case SelectionChangeEvent_1.SelectionChangeType.Clear:
                selectedItemsSet.clear();
                break;
        }
        if (selectedItemsSet.guid === guidBefore)
            return;
        container.clear(evt.level + 1);
        this.selectionChange.raiseEvent(evt, this);
    }
    /**
     * Add keys to the selection
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param keys Keys to add
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    addToSelection(source, imodel, keys, level = 0, rulesetId) {
        const evt = {
            source,
            level,
            imodel,
            changeType: SelectionChangeEvent_1.SelectionChangeType.Add,
            keys: new presentation_common_1.KeySet(keys),
            timestamp: new Date(),
            rulesetId,
        };
        this.handleEvent(evt);
    }
    /**
     * Remove keys from current selection
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param keys Keys to remove
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    removeFromSelection(source, imodel, keys, level = 0, rulesetId) {
        const evt = {
            source,
            level,
            imodel,
            changeType: SelectionChangeEvent_1.SelectionChangeType.Remove,
            keys: new presentation_common_1.KeySet(keys),
            timestamp: new Date(),
            rulesetId,
        };
        this.handleEvent(evt);
    }
    /**
     * Replace current selection
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param keys Keys to add
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    replaceSelection(source, imodel, keys, level = 0, rulesetId) {
        const evt = {
            source,
            level,
            imodel,
            changeType: SelectionChangeEvent_1.SelectionChangeType.Replace,
            keys: new presentation_common_1.KeySet(keys),
            timestamp: new Date(),
            rulesetId,
        };
        this.handleEvent(evt);
    }
    /**
     * Clear current selection
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    clearSelection(source, imodel, level = 0, rulesetId) {
        const evt = {
            source,
            level,
            imodel,
            changeType: SelectionChangeEvent_1.SelectionChangeType.Clear,
            keys: new presentation_common_1.KeySet(),
            timestamp: new Date(),
            rulesetId,
        };
        this.handleEvent(evt);
    }
    /**
     * Add keys to selection after applying [selection scope]($docs/learning/unified-selection/Terminology#selection-scope) on them.
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param ids Element IDs to add
     * @param scope Selection scope to apply
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    async addToSelectionWithScope(source, imodel, ids, scope, level = 0, rulesetId) {
        const scopedKeys = await this.scopes.computeSelection(imodel, ids, scope);
        this.addToSelection(source, imodel, scopedKeys, level, rulesetId);
    }
    /**
     * Remove keys from current selection after applying [selection scope]($docs/learning/unified-selection/Terminology#selection-scope) on them.
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param ids Element IDs to remove
     * @param scope Selection scope to apply
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    async removeFromSelectionWithScope(source, imodel, ids, scope, level = 0, rulesetId) {
        const scopedKeys = await this.scopes.computeSelection(imodel, ids, scope);
        this.removeFromSelection(source, imodel, scopedKeys, level, rulesetId);
    }
    /**
     * Replace current selection with keys after applying [selection scope]($docs/learning/unified-selection/Terminology#selection-scope) on them.
     * @param source Name of the selection source
     * @param imodel iModel associated with the selection
     * @param ids Element IDs to replace with
     * @param scope Selection scope to apply
     * @param level Selection level (see [Selection levels]($docs/learning/unified-selection/Terminology#selection-level))
     * @param rulesetId ID of the ruleset in case the selection was changed from a rules-driven control
     */
    async replaceSelectionWithScope(source, imodel, ids, scope, level = 0, rulesetId) {
        const scopedKeys = await this.scopes.computeSelection(imodel, ids, scope);
        this.replaceSelection(source, imodel, scopedKeys, level, rulesetId);
    }
}
exports.SelectionManager = SelectionManager;
/** @internal */
class SelectionContainer {
    constructor() {
        this._selectedItemsSetMap = new Map();
    }
    getSelection(level) {
        let selectedItemsSet = this._selectedItemsSetMap.get(level);
        if (!selectedItemsSet) {
            selectedItemsSet = new presentation_common_1.KeySet();
            this._selectedItemsSetMap.set(level, selectedItemsSet);
        }
        return selectedItemsSet;
    }
    getSelectionLevels() {
        const levels = new Array();
        for (const entry of this._selectedItemsSetMap.entries()) {
            if (!entry[1].isEmpty)
                levels.push(entry[0]);
        }
        return levels.sort();
    }
    clear(level) {
        const keys = this._selectedItemsSetMap.keys();
        for (const key of keys) {
            if (key >= level) {
                const selectedItemsSet = this._selectedItemsSetMap.get(key);
                selectedItemsSet.clear();
            }
        }
    }
}
/** @internal */
exports.TRANSIENT_ELEMENT_CLASSNAME = "/TRANSIENT";
/** @internal */
class ToolSelectionSyncHandler {
    constructor(imodel, locateManager, logicalSelection) {
        this._selectionSourceName = "Tool";
        this._asyncsInProgress = new Set();
        // tslint:disable-next-line:naming-convention
        this.onToolSelectionChanged = async (ev) => {
            // this component only cares about its own imodel
            const imodel = ev.set.iModel;
            if (imodel !== this._imodel)
                return;
            // determine the level of selection changes
            // wip: may want to allow selecting at different levels?
            const selectionLevel = 0;
            let ids;
            switch (ev.type) {
                case imodeljs_frontend_1.SelectionSetEventType.Add:
                    ids = ev.added;
                    break;
                case imodeljs_frontend_1.SelectionSetEventType.Replace:
                    ids = ev.set.elements;
                    break;
                default:
                    ids = ev.removed;
                    break;
            }
            // determine the scope id
            // note: _always_ use "element" scope for fence selection
            let scopeId = getScopeId(this._logicalSelection.scopes.activeScope);
            const currHit = this._locateManager.currHit;
            const isSingleSelectionFromPick = (undefined !== currHit && 1 === bentleyjs_core_1.Id64.sizeOf(ids) && bentleyjs_core_1.Id64.has(ids, currHit.sourceId));
            if (!isSingleSelectionFromPick)
                scopeId = "element";
            // we're always using scoped selection changer even if the scope is set to "element" - that
            // makes sure we're adding to selection keys with concrete classes and not "BisCore:Element", which
            // we can't because otherwise our keys compare fails (presentation components load data with
            // concrete classes)
            const changer = new ScopedSelectionChanger(this._selectionSourceName, this._imodel, this._logicalSelection, scopeId);
            // we know what to do immediately on `clear` events
            if (imodeljs_frontend_1.SelectionSetEventType.Clear === ev.type) {
                await changer.clear(selectionLevel);
                return;
            }
            const parsedIds = parseIds(ids);
            const asyncId = bentleyjs_core_1.Guid.createValue();
            this._asyncsInProgress.add(asyncId);
            try {
                switch (ev.type) {
                    case imodeljs_frontend_1.SelectionSetEventType.Add:
                        await changer.add(parsedIds.transient, parsedIds.persistent, selectionLevel);
                        break;
                    case imodeljs_frontend_1.SelectionSetEventType.Replace:
                        await changer.replace(parsedIds.transient, parsedIds.persistent, selectionLevel);
                        break;
                    case imodeljs_frontend_1.SelectionSetEventType.Remove:
                        await changer.remove(parsedIds.transient, parsedIds.persistent, selectionLevel);
                        break;
                }
            }
            finally {
                this._asyncsInProgress.delete(asyncId);
            }
        };
        this._imodel = imodel;
        this._locateManager = locateManager;
        this._logicalSelection = logicalSelection;
        this._imodelToolSelectionListenerDisposeFunc = imodel.selectionSet.onChanged.addListener(this.onToolSelectionChanged);
    }
    dispose() {
        this._imodelToolSelectionListenerDisposeFunc();
    }
    /** note: used only it tests */
    get pendingAsyncs() { return this._asyncsInProgress; }
}
exports.ToolSelectionSyncHandler = ToolSelectionSyncHandler;
const getScopeId = (scope) => {
    if (!scope)
        return "element";
    if (typeof scope === "string")
        return scope;
    return scope.id;
};
const parseIds = (ids) => {
    let allPersistent = true;
    let allTransient = true;
    bentleyjs_core_1.Id64.iterate(ids, (id) => {
        if (bentleyjs_core_1.Id64.isTransient(id))
            allPersistent = false;
        else
            allTransient = false;
        if (!allPersistent && !allTransient)
            return false;
        return true;
    });
    // avoid making a copy if ids are only persistent or only transient
    if (allPersistent) {
        return { persistent: ids, transient: [] };
    }
    else if (allTransient) {
        return { persistent: [], transient: ids };
    }
    // if `ids` contain mixed ids, we have to copy.. use Array instead of
    // a Set for performance
    const persistentElementIds = [];
    const transientElementIds = [];
    bentleyjs_core_1.Id64.forEach(ids, (id) => {
        if (bentleyjs_core_1.Id64.isTransient(id))
            transientElementIds.push(id);
        else
            persistentElementIds.push(id);
    });
    return { persistent: persistentElementIds, transient: transientElementIds };
};
/** @internal */
class ScopedSelectionChanger {
    constructor(name, imodel, manager, scope) {
        this.name = name;
        this.imodel = imodel;
        this.manager = manager;
        this.scope = scope;
    }
    async clear(level) {
        this.manager.clearSelection(this.name, this.imodel, level);
    }
    async add(transientIds, persistentIds, level) {
        const keys = await this.manager.scopes.computeSelection(this.imodel, persistentIds, this.scope);
        bentleyjs_core_1.Id64.forEach(transientIds, (id) => keys.add({ className: exports.TRANSIENT_ELEMENT_CLASSNAME, id }));
        this.manager.addToSelection(this.name, this.imodel, keys, level);
    }
    async remove(transientIds, persistentIds, level) {
        const keys = await this.manager.scopes.computeSelection(this.imodel, persistentIds, this.scope);
        bentleyjs_core_1.Id64.forEach(transientIds, (id) => keys.add({ className: exports.TRANSIENT_ELEMENT_CLASSNAME, id }));
        this.manager.removeFromSelection(this.name, this.imodel, keys, level);
    }
    async replace(transientIds, persistentIds, level) {
        const keys = await this.manager.scopes.computeSelection(this.imodel, persistentIds, this.scope);
        bentleyjs_core_1.Id64.forEach(transientIds, (id) => keys.add({ className: exports.TRANSIENT_ELEMENT_CLASSNAME, id }));
        this.manager.replaceSelection(this.name, this.imodel, keys, level);
    }
}


/***/ }),

/***/ "./lib/selection/SelectionScopesManager.js":
/*!*************************************************!*\
  !*** ./lib/selection/SelectionScopesManager.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
/**
 * A manager that knows available [selection scopes]($docs/learning/unified-selection/Terminology#selection-scope)
 * and can compute logical selection based on element IDs and selection scope.
 *
 * @public
 */
class SelectionScopesManager {
    constructor(props) {
        this._rpcRequestsHandler = props.rpcRequestsHandler;
        this._getLocale = props.localeProvider ? props.localeProvider : (() => undefined);
    }
    /** Get active locale */
    get activeLocale() { return this._getLocale(); }
    /** Get active selection scope or its id */
    get activeScope() { return this._activeScope; }
    /** Set active selection scope or its id */
    set activeScope(scope) { this._activeScope = scope; }
    /**
     * Get available selection scopes.
     * @param imodel The iModel to get selection scopes for
     * @param locale Optional locale to use when localizing scopes' label and description
     */
    async getSelectionScopes(imodel, locale) {
        if (!locale)
            locale = this._getLocale();
        return this._rpcRequestsHandler.getSelectionScopes({ imodel: imodel.iModelToken, locale });
    }
    /**
     * Computes keys that need to be added to logical selection based on provided selection scope.
     * @param ids Element IDs to compute selection for
     * @param scope Selection scope to apply
     */
    async computeSelection(imodel, ids, scope) {
        // get scope id
        const scopeId = (typeof scope === "string") ? scope : scope.id;
        // convert ids input to array
        if (typeof ids === "string")
            ids = [ids];
        else if (ids instanceof Set)
            ids = [...ids];
        // compute selection in batches to avoid HTTP 413
        const keys = new presentation_common_1.KeySet();
        const batchSize = 10000;
        const batchesCount = Math.ceil(ids.length / batchSize);
        const batchKeyPromises = [];
        for (let batchIndex = 0; batchIndex < batchesCount; ++batchIndex) {
            const batchStart = batchSize * batchIndex;
            const batchEnd = (batchStart + batchSize > ids.length) ? ids.length : (batchStart + batchSize);
            const batchIds = (0 === batchIndex && ids.length <= batchEnd) ? ids : ids.slice(batchStart, batchEnd);
            batchKeyPromises.push(this._rpcRequestsHandler.computeSelection({ imodel: imodel.iModelToken }, batchIds, scopeId));
        }
        const batchKeys = (await Promise.all(batchKeyPromises)).map(presentation_common_1.KeySet.fromJSON);
        batchKeys.forEach((bk) => keys.add(bk));
        return keys;
    }
}
exports.SelectionScopesManager = SelectionScopesManager;


/***/ }),

/***/ "@bentley/bentleyjs-core":
/*!*********************************!*\
  !*** external "bentleyjs_core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__;

/***/ }),

/***/ "@bentley/imodeljs-frontend":
/*!************************************!*\
  !*** external "imodeljs_frontend" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_frontend__;

/***/ }),

/***/ "@bentley/presentation-common":
/*!**************************************!*\
  !*** external "presentation_common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_presentation_common__;

/***/ })

},[["./lib/presentation-frontend.js","runtime"]]]);
});
//# sourceMappingURL=presentation-frontend.js.map