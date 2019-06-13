(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bentleyjs_core", [], factory);
	else if(typeof exports === 'object')
		exports["bentleyjs_core"] = factory();
	else
		root["bentleyjs_core"] = factory();
})(this, function() {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["bentleyjs-core"],{

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

/***/ "./lib/Assert.js":
/*!***********************!*\
  !*** ./lib/Assert.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
// @todo Needs to be commented out in a production environment.
/**
 * Assert by throwing a programmer error.
 * @param condition The result of a boolean expression.
 * @param msg An optional message to include in the thrown exception. Defaults to "Programmer Error".
 * @throws Error containing the specified message if condition is false.
 * @note This function should be used to validate conditions that should never realistically occur, or
 * which indicate a misuse of the API which should be eliminated during development.
 * @beta Need strategy for removing assert in production builds
 */
function assert(condition, msg) {
    if (!condition)
        throw new Error("Assert: " + ((msg !== undefined) ? msg : "Programmer Error"));
}
exports.assert = assert;


/***/ }),

/***/ "./lib/BeEvent.js":
/*!************************!*\
  !*** ./lib/BeEvent.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Events */
Object.defineProperty(exports, "__esModule", { value: true });
class EventContext {
    constructor(listener, scope, once) {
        this.listener = listener;
        this.scope = scope;
        this.once = once;
    }
}
/**
 * Manages a set of *listeners* for a particular event and notifies them when the event is raised.
 * This class is usually instantiated inside of a container class and
 * exposed as a property for others to *subscribe* via [[BeEvent.addListener]].
 * @public
 */
class BeEvent {
    constructor() {
        this._listeners = [];
        this._insideRaiseEvent = false;
    }
    /** The number of listeners currently subscribed to the event. */
    get numberOfListeners() { return this._listeners.length; }
    /**
     * Registers a Listener to be executed whenever this event is raised.
     * @param listener The function to be executed when the event is raised.
     * @param scope An optional object scope to serve as the 'this' pointer when listener is invoked.
     * @returns A function that will remove this event listener.
     * @see [[BeEvent.raiseEvent]], [[BeEvent.removeListener]]
     */
    addListener(listener, scope) {
        this._listeners.push(new EventContext(listener, scope, false));
        const event = this;
        return () => { event.removeListener(listener, scope); };
    }
    /**
     * Registers a callback function to be executed *only once* when the event is raised.
     * @param listener The function to be executed once when the event is raised.
     * @param scope An optional object scope to serve as the `this` pointer in which the listener function will execute.
     * @returns A function that will remove this event listener.
     * @see [[BeEvent.raiseEvent]], [[BeEvent.removeListener]]
     */
    addOnce(listener, scope) {
        this._listeners.push(new EventContext(listener, scope, true));
        const event = this;
        return () => { event.removeListener(listener, scope); };
    }
    /**
     * Un-register a previously registered listener.
     * @param listener The listener to be unregistered.
     * @param  scope The scope that was originally passed to addListener.
     * @returns 'true' if the listener was removed; 'false' if the listener and scope are not registered with the event.
     * @see [[BeEvent.raiseEvent]], [[BeEvent.addListener]]
     */
    removeListener(listener, scope) {
        const listeners = this._listeners;
        for (let i = 0; i < listeners.length; ++i) {
            const context = listeners[i];
            if (context.listener === listener && context.scope === scope) {
                if (this._insideRaiseEvent) {
                    context.listener = undefined;
                }
                else {
                    listeners.splice(i, 1);
                }
                return true;
            }
        }
        return false;
    }
    /**
     * Raises the event by calling each registered listener with the supplied arguments.
     * @param args This method takes any number of parameters and passes them through to the listeners.
     * @see [[BeEvent.removeListener]], [[BeEvent.addListener]]
     */
    raiseEvent(...args) {
        this._insideRaiseEvent = true;
        const listeners = this._listeners;
        const length = listeners.length;
        let dropped = false;
        for (let i = 0; i < length; ++i) {
            const context = listeners[i];
            if (!context.listener) {
                dropped = true;
            }
            else {
                context.listener.apply(context.scope, args);
                if (context.once) {
                    context.listener = undefined;
                    dropped = true;
                }
            }
        }
        // if we had dropped listeners, remove them now
        if (dropped) {
            this._listeners = this._listeners.filter((ctx) => ctx.listener !== undefined);
        }
        this._insideRaiseEvent = false;
    }
    /** Determine whether this BeEvent has a specified listener registered.
     * @param listener The listener to check.
     * @param scope optional scope argument to match call to addListener
     */
    has(listener, scope) {
        for (const ctx of this._listeners) {
            if (ctx.listener === listener && ctx.scope === scope) {
                return true;
            }
        }
        return false;
    }
    /** Clear all Listeners from this BeEvent. */
    clear() { this._listeners.length = 0; }
}
exports.BeEvent = BeEvent;
/** Specialization of BeEvent for Ui events that take a single strongly typed argument.
 * @beta Right name? Right package?
 */
class BeUiEvent extends BeEvent {
    /** Raises event with single strongly typed argument. */
    emit(args) { this.raiseEvent(args); }
}
exports.BeUiEvent = BeUiEvent;
/**
 * A list of BeEvent objects, accessible by an event name.
 * This class may be used instead of explicitly declaring each BeEvent as a member of a containing class.
 * @beta Is this class used?
 */
class BeEventList {
    constructor() {
        this._events = {};
    }
    /**
     * Gets the BeEvent associated with a name.
     * @param name The name of the event.
     * @note the BeEvent will be created if none existed before this call.
     */
    get(name) {
        let event = this._events[name];
        if (event)
            return event;
        event = new BeEvent();
        this._events[name] = event;
        return event;
    }
    /**
     * Removes the BeEvent associated with a name.
     * @param name The name of the event.
     */
    remove(name) {
        this._events[name] = undefined;
    }
}
exports.BeEventList = BeEventList;


/***/ }),

/***/ "./lib/BeSQLite.js":
/*!*************************!*\
  !*** ./lib/BeSQLite.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module BeSQLite */
Object.defineProperty(exports, "__esModule", { value: true });
/** Whether to open a database readonly or writeable.
 * @public
 */
var OpenMode;
(function (OpenMode) {
    OpenMode[OpenMode["Readonly"] = 1] = "Readonly";
    OpenMode[OpenMode["ReadWrite"] = 2] = "ReadWrite";
})(OpenMode = exports.OpenMode || (exports.OpenMode = {}));
/** Values, stored in changesets, that indicate what operation was performed on the database.
 * @public
 */
var DbOpcode;
(function (DbOpcode) {
    /** A row was deleted. */
    DbOpcode[DbOpcode["Delete"] = 9] = "Delete";
    /** A new row was inserted. */
    DbOpcode[DbOpcode["Insert"] = 18] = "Insert";
    /** Some columns of an existing row were updated. */
    DbOpcode[DbOpcode["Update"] = 23] = "Update";
})(DbOpcode = exports.DbOpcode || (exports.DbOpcode = {}));
/** Values for return codes from BeSQLite functions. Consult SQLite documentation for further explanations.
 * @public
 */
var DbResult;
(function (DbResult) {
    /** Success */
    DbResult[DbResult["BE_SQLITE_OK"] = 0] = "BE_SQLITE_OK";
    /** SQL error or missing database */
    DbResult[DbResult["BE_SQLITE_ERROR"] = 1] = "BE_SQLITE_ERROR";
    /** Internal logic error */
    DbResult[DbResult["BE_SQLITE_INTERNAL"] = 2] = "BE_SQLITE_INTERNAL";
    /** Access permission denied */
    DbResult[DbResult["BE_SQLITE_PERM"] = 3] = "BE_SQLITE_PERM";
    /** Callback routine requested an abort */
    DbResult[DbResult["BE_SQLITE_ABORT"] = 4] = "BE_SQLITE_ABORT";
    /** The database file is locked */
    DbResult[DbResult["BE_SQLITE_BUSY"] = 5] = "BE_SQLITE_BUSY";
    /** A table in the database is locked */
    DbResult[DbResult["BE_SQLITE_LOCKED"] = 6] = "BE_SQLITE_LOCKED";
    /** A malloc() failed */
    DbResult[DbResult["BE_SQLITE_NOMEM"] = 7] = "BE_SQLITE_NOMEM";
    /** Attempt to write a readonly database */
    DbResult[DbResult["BE_SQLITE_READONLY"] = 8] = "BE_SQLITE_READONLY";
    /** Operation terminated by interrupt */
    DbResult[DbResult["BE_SQLITE_INTERRUPT"] = 9] = "BE_SQLITE_INTERRUPT";
    /** Some kind of disk I/O error occurred */
    DbResult[DbResult["BE_SQLITE_IOERR"] = 10] = "BE_SQLITE_IOERR";
    /** The database disk image is malformed */
    DbResult[DbResult["BE_SQLITE_CORRUPT"] = 11] = "BE_SQLITE_CORRUPT";
    /** NOT USED. Table or record not found */
    DbResult[DbResult["BE_SQLITE_NOTFOUND"] = 12] = "BE_SQLITE_NOTFOUND";
    /** Insertion failed because database is full or write operation failed because disk is full */
    DbResult[DbResult["BE_SQLITE_FULL"] = 13] = "BE_SQLITE_FULL";
    /** Unable to open the database file */
    DbResult[DbResult["BE_SQLITE_CANTOPEN"] = 14] = "BE_SQLITE_CANTOPEN";
    /** Database lock protocol error */
    DbResult[DbResult["BE_SQLITE_PROTOCOL"] = 15] = "BE_SQLITE_PROTOCOL";
    /** Database is empty */
    DbResult[DbResult["BE_SQLITE_EMPTY"] = 16] = "BE_SQLITE_EMPTY";
    /** The database schema changed */
    DbResult[DbResult["BE_SQLITE_SCHEMA"] = 17] = "BE_SQLITE_SCHEMA";
    /** String or BLOB exceeds size limit */
    DbResult[DbResult["BE_SQLITE_TOOBIG"] = 18] = "BE_SQLITE_TOOBIG";
    /** Abort due to constraint violation. See extended error values. */
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_BASE"] = 19] = "BE_SQLITE_CONSTRAINT_BASE";
    /** Data type mismatch */
    DbResult[DbResult["BE_SQLITE_MISMATCH"] = 20] = "BE_SQLITE_MISMATCH";
    /** Library used incorrectly */
    DbResult[DbResult["BE_SQLITE_MISUSE"] = 21] = "BE_SQLITE_MISUSE";
    /** Uses OS features not supported on host */
    DbResult[DbResult["BE_SQLITE_NOLFS"] = 22] = "BE_SQLITE_NOLFS";
    /** Authorization denied */
    DbResult[DbResult["BE_SQLITE_AUTH"] = 23] = "BE_SQLITE_AUTH";
    /** Auxiliary database format error */
    DbResult[DbResult["BE_SQLITE_FORMAT"] = 24] = "BE_SQLITE_FORMAT";
    /** 2nd parameter to Bind out of range */
    DbResult[DbResult["BE_SQLITE_RANGE"] = 25] = "BE_SQLITE_RANGE";
    /** File opened that is not a database file */
    DbResult[DbResult["BE_SQLITE_NOTADB"] = 26] = "BE_SQLITE_NOTADB";
    /** Step() has another row ready */
    DbResult[DbResult["BE_SQLITE_ROW"] = 100] = "BE_SQLITE_ROW";
    /** Step() has finished executing */
    DbResult[DbResult["BE_SQLITE_DONE"] = 101] = "BE_SQLITE_DONE";
    DbResult[DbResult["BE_SQLITE_IOERR_READ"] = 266] = "BE_SQLITE_IOERR_READ";
    DbResult[DbResult["BE_SQLITE_IOERR_SHORT_READ"] = 522] = "BE_SQLITE_IOERR_SHORT_READ";
    DbResult[DbResult["BE_SQLITE_IOERR_WRITE"] = 778] = "BE_SQLITE_IOERR_WRITE";
    DbResult[DbResult["BE_SQLITE_IOERR_FSYNC"] = 1034] = "BE_SQLITE_IOERR_FSYNC";
    DbResult[DbResult["BE_SQLITE_IOERR_DIR_FSYNC"] = 1290] = "BE_SQLITE_IOERR_DIR_FSYNC";
    DbResult[DbResult["BE_SQLITE_IOERR_TRUNCATE"] = 1546] = "BE_SQLITE_IOERR_TRUNCATE";
    DbResult[DbResult["BE_SQLITE_IOERR_FSTAT"] = 1802] = "BE_SQLITE_IOERR_FSTAT";
    DbResult[DbResult["BE_SQLITE_IOERR_UNLOCK"] = 2058] = "BE_SQLITE_IOERR_UNLOCK";
    DbResult[DbResult["BE_SQLITE_IOERR_RDLOCK"] = 2314] = "BE_SQLITE_IOERR_RDLOCK";
    DbResult[DbResult["BE_SQLITE_IOERR_DELETE"] = 2570] = "BE_SQLITE_IOERR_DELETE";
    DbResult[DbResult["BE_SQLITE_IOERR_BLOCKED"] = 2826] = "BE_SQLITE_IOERR_BLOCKED";
    DbResult[DbResult["BE_SQLITE_IOERR_NOMEM"] = 3082] = "BE_SQLITE_IOERR_NOMEM";
    DbResult[DbResult["BE_SQLITE_IOERR_ACCESS"] = 3338] = "BE_SQLITE_IOERR_ACCESS";
    DbResult[DbResult["BE_SQLITE_IOERR_CHECKRESERVEDLOCK"] = 3594] = "BE_SQLITE_IOERR_CHECKRESERVEDLOCK";
    DbResult[DbResult["BE_SQLITE_IOERR_LOCK"] = 3850] = "BE_SQLITE_IOERR_LOCK";
    DbResult[DbResult["BE_SQLITE_IOERR_CLOSE"] = 4106] = "BE_SQLITE_IOERR_CLOSE";
    DbResult[DbResult["BE_SQLITE_IOERR_DIR_CLOSE"] = 4362] = "BE_SQLITE_IOERR_DIR_CLOSE";
    DbResult[DbResult["BE_SQLITE_IOERR_SHMOPEN"] = 4618] = "BE_SQLITE_IOERR_SHMOPEN";
    DbResult[DbResult["BE_SQLITE_IOERR_SHMSIZE"] = 4874] = "BE_SQLITE_IOERR_SHMSIZE";
    DbResult[DbResult["BE_SQLITE_IOERR_SHMLOCK"] = 5130] = "BE_SQLITE_IOERR_SHMLOCK";
    DbResult[DbResult["BE_SQLITE_IOERR_SHMMAP"] = 5386] = "BE_SQLITE_IOERR_SHMMAP";
    DbResult[DbResult["BE_SQLITE_IOERR_SEEK"] = 5642] = "BE_SQLITE_IOERR_SEEK";
    DbResult[DbResult["BE_SQLITE_IOERR_DELETE_NOENT"] = 5898] = "BE_SQLITE_IOERR_DELETE_NOENT";
    /** attempt to create a new file when a file by that name already exists */
    DbResult[DbResult["BE_SQLITE_ERROR_FileExists"] = 16777226] = "BE_SQLITE_ERROR_FileExists";
    /** attempt to open a BeSQLite::Db that is already in use somewhere. */
    DbResult[DbResult["BE_SQLITE_ERROR_AlreadyOpen"] = 33554442] = "BE_SQLITE_ERROR_AlreadyOpen";
    /** attempt to open a BeSQLite::Db that doesn't have a property table. */
    DbResult[DbResult["BE_SQLITE_ERROR_NoPropertyTable"] = 50331658] = "BE_SQLITE_ERROR_NoPropertyTable";
    /** the database name is not a file. */
    DbResult[DbResult["BE_SQLITE_ERROR_FileNotFound"] = 67108874] = "BE_SQLITE_ERROR_FileNotFound";
    /** there is no transaction active and the database was opened with AllowImplicitTransactions=false */
    DbResult[DbResult["BE_SQLITE_ERROR_NoTxnActive"] = 83886090] = "BE_SQLITE_ERROR_NoTxnActive";
    /** wrong BeSQLite profile version */
    DbResult[DbResult["BE_SQLITE_ERROR_BadDbProfile"] = 100663306] = "BE_SQLITE_ERROR_BadDbProfile";
    /** Profile of file could not be determined. */
    DbResult[DbResult["BE_SQLITE_ERROR_InvalidProfileVersion"] = 117440522] = "BE_SQLITE_ERROR_InvalidProfileVersion";
    /** Upgrade of profile of file failed. */
    DbResult[DbResult["BE_SQLITE_ERROR_ProfileUpgradeFailed"] = 134217738] = "BE_SQLITE_ERROR_ProfileUpgradeFailed";
    /** Profile of file is too old. Therefore file can only be opened read-only. */
    DbResult[DbResult["BE_SQLITE_ERROR_ProfileTooOldForReadWrite"] = 150994954] = "BE_SQLITE_ERROR_ProfileTooOldForReadWrite";
    /** Profile of file is too old. Therefore file cannot be opened. */
    DbResult[DbResult["BE_SQLITE_ERROR_ProfileTooOld"] = 167772170] = "BE_SQLITE_ERROR_ProfileTooOld";
    /** Profile of file is too new for read-write access. Therefore file can only be opened read-only. */
    DbResult[DbResult["BE_SQLITE_ERROR_ProfileTooNewForReadWrite"] = 184549386] = "BE_SQLITE_ERROR_ProfileTooNewForReadWrite";
    /** Profile of file is too new. Therefore file cannot be opened. */
    DbResult[DbResult["BE_SQLITE_ERROR_ProfileTooNew"] = 201326602] = "BE_SQLITE_ERROR_ProfileTooNew";
    /** attempt to commit with active changetrack */
    DbResult[DbResult["BE_SQLITE_ERROR_ChangeTrackError"] = 218103818] = "BE_SQLITE_ERROR_ChangeTrackError";
    /** invalid version of the revision file is being imported */
    DbResult[DbResult["BE_SQLITE_ERROR_InvalidChangeSetVersion"] = 234881034] = "BE_SQLITE_ERROR_InvalidChangeSetVersion";
    /** The schemas found in the database need to be upgraded. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaUpgradeRequired"] = 251658250] = "BE_SQLITE_ERROR_SchemaUpgradeRequired";
    /** The schemas found in the database are too new, and the application needs to be upgraded. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaTooNew"] = 268435466] = "BE_SQLITE_ERROR_SchemaTooNew";
    /** The schemas found in the database are too old, and the DgnDb needs to be upgraded. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaTooOld"] = 285212682] = "BE_SQLITE_ERROR_SchemaTooOld";
    /** Error acquiring a lock on the schemas before upgrade. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaLockFailed"] = 301989898] = "BE_SQLITE_ERROR_SchemaLockFailed";
    /** Error upgrading the schemas in the database. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaUpgradeFailed"] = 318767114] = "BE_SQLITE_ERROR_SchemaUpgradeFailed";
    /** Error importing the schemas into the database. */
    DbResult[DbResult["BE_SQLITE_ERROR_SchemaImportFailed"] = 335544330] = "BE_SQLITE_ERROR_SchemaImportFailed";
    /** Error acquiring locks or codes */
    DbResult[DbResult["BE_SQLITE_ERROR_CouldNotAcquireLocksOrCodes"] = 352321546] = "BE_SQLITE_ERROR_CouldNotAcquireLocksOrCodes";
    DbResult[DbResult["BE_SQLITE_LOCKED_SHAREDCACHE"] = 262] = "BE_SQLITE_LOCKED_SHAREDCACHE";
    DbResult[DbResult["BE_SQLITE_BUSY_RECOVERY"] = 261] = "BE_SQLITE_BUSY_RECOVERY";
    DbResult[DbResult["BE_SQLITE_CANTOPEN_NOTEMPDIR"] = 270] = "BE_SQLITE_CANTOPEN_NOTEMPDIR";
    DbResult[DbResult["BE_SQLITE_CANTOPEN_ISDIR"] = 526] = "BE_SQLITE_CANTOPEN_ISDIR";
    DbResult[DbResult["BE_SQLITE_CANTOPEN_FULLPATH"] = 782] = "BE_SQLITE_CANTOPEN_FULLPATH";
    DbResult[DbResult["BE_SQLITE_CORRUPT_VTAB"] = 267] = "BE_SQLITE_CORRUPT_VTAB";
    DbResult[DbResult["BE_SQLITE_READONLY_RECOVERY"] = 264] = "BE_SQLITE_READONLY_RECOVERY";
    DbResult[DbResult["BE_SQLITE_READONLY_CANTLOCK"] = 520] = "BE_SQLITE_READONLY_CANTLOCK";
    DbResult[DbResult["BE_SQLITE_READONLY_ROLLBACK"] = 776] = "BE_SQLITE_READONLY_ROLLBACK";
    DbResult[DbResult["BE_SQLITE_ABORT_ROLLBACK"] = 516] = "BE_SQLITE_ABORT_ROLLBACK";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_CHECK"] = 275] = "BE_SQLITE_CONSTRAINT_CHECK";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_COMMITHOOK"] = 531] = "BE_SQLITE_CONSTRAINT_COMMITHOOK";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_FOREIGNKEY"] = 787] = "BE_SQLITE_CONSTRAINT_FOREIGNKEY";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_FUNCTION"] = 1043] = "BE_SQLITE_CONSTRAINT_FUNCTION";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_NOTNULL"] = 1299] = "BE_SQLITE_CONSTRAINT_NOTNULL";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_PRIMARYKEY"] = 1555] = "BE_SQLITE_CONSTRAINT_PRIMARYKEY";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_TRIGGER"] = 1811] = "BE_SQLITE_CONSTRAINT_TRIGGER";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_UNIQUE"] = 2067] = "BE_SQLITE_CONSTRAINT_UNIQUE";
    DbResult[DbResult["BE_SQLITE_CONSTRAINT_VTAB"] = 2323] = "BE_SQLITE_CONSTRAINT_VTAB";
})(DbResult = exports.DbResult || (exports.DbResult = {}));
/** Options that specify how to apply ChangeSets.
 * @public
 */
var ChangeSetApplyOption;
(function (ChangeSetApplyOption) {
    /** ChangeSet won't be used.  */
    ChangeSetApplyOption[ChangeSetApplyOption["None"] = 0] = "None";
    /** ChangeSet will be merged into the Db */
    ChangeSetApplyOption[ChangeSetApplyOption["Merge"] = 1] = "Merge";
    /** ChangeSet will be reversed from the Db */
    ChangeSetApplyOption[ChangeSetApplyOption["Reverse"] = 2] = "Reverse";
    /** ChangeSet will be reinstated into the Db */
    ChangeSetApplyOption[ChangeSetApplyOption["Reinstate"] = 3] = "Reinstate";
})(ChangeSetApplyOption = exports.ChangeSetApplyOption || (exports.ChangeSetApplyOption = {}));


/***/ }),

/***/ "./lib/BentleyError.js":
/*!*****************************!*\
  !*** ./lib/BentleyError.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Errors */
Object.defineProperty(exports, "__esModule", { value: true });
const BeSQLite_1 = __webpack_require__(/*! ./BeSQLite */ "./lib/BeSQLite.js");
const Logger_1 = __webpack_require__(/*! ./Logger */ "./lib/Logger.js");
/** Standard status code.
 * This status code should be rarely used.
 * Prefer to throw an exception to indicate an error, rather than returning a special status code.
 * If a status code is to be returned, prefer to return a more specific error status type such as IModelStatus or DbResult.
 * @public
 */
var BentleyStatus;
(function (BentleyStatus) {
    BentleyStatus[BentleyStatus["SUCCESS"] = 0] = "SUCCESS";
    BentleyStatus[BentleyStatus["ERROR"] = 32768] = "ERROR";
})(BentleyStatus = exports.BentleyStatus || (exports.BentleyStatus = {}));
/** Status codes that are used in conjunction with [[BentleyError]].
 * Error status codes are divided into separate ranges for different kinds of errors. All known ranges at least should be defined here, to avoid collisions.
 * @public
 */
var IModelStatus;
(function (IModelStatus) {
    IModelStatus[IModelStatus["IMODEL_ERROR_BASE"] = 65536] = "IMODEL_ERROR_BASE";
    IModelStatus[IModelStatus["Success"] = 0] = "Success";
    IModelStatus[IModelStatus["AlreadyLoaded"] = 65537] = "AlreadyLoaded";
    IModelStatus[IModelStatus["AlreadyOpen"] = 65538] = "AlreadyOpen";
    IModelStatus[IModelStatus["BadArg"] = 65539] = "BadArg";
    IModelStatus[IModelStatus["BadElement"] = 65540] = "BadElement";
    IModelStatus[IModelStatus["BadModel"] = 65541] = "BadModel";
    IModelStatus[IModelStatus["BadRequest"] = 65542] = "BadRequest";
    IModelStatus[IModelStatus["BadSchema"] = 65543] = "BadSchema";
    IModelStatus[IModelStatus["CannotUndo"] = 65544] = "CannotUndo";
    IModelStatus[IModelStatus["CodeNotReserved"] = 65545] = "CodeNotReserved";
    IModelStatus[IModelStatus["DeletionProhibited"] = 65546] = "DeletionProhibited";
    IModelStatus[IModelStatus["DuplicateCode"] = 65547] = "DuplicateCode";
    IModelStatus[IModelStatus["DuplicateName"] = 65548] = "DuplicateName";
    IModelStatus[IModelStatus["ElementBlockedChange"] = 65549] = "ElementBlockedChange";
    IModelStatus[IModelStatus["FileAlreadyExists"] = 65550] = "FileAlreadyExists";
    IModelStatus[IModelStatus["FileNotFound"] = 65551] = "FileNotFound";
    IModelStatus[IModelStatus["FileNotLoaded"] = 65552] = "FileNotLoaded";
    IModelStatus[IModelStatus["ForeignKeyConstraint"] = 65553] = "ForeignKeyConstraint";
    IModelStatus[IModelStatus["IdExists"] = 65554] = "IdExists";
    IModelStatus[IModelStatus["InDynamicTransaction"] = 65555] = "InDynamicTransaction";
    IModelStatus[IModelStatus["InvalidCategory"] = 65556] = "InvalidCategory";
    IModelStatus[IModelStatus["InvalidCode"] = 65557] = "InvalidCode";
    IModelStatus[IModelStatus["InvalidCodeSpec"] = 65558] = "InvalidCodeSpec";
    IModelStatus[IModelStatus["InvalidId"] = 65559] = "InvalidId";
    IModelStatus[IModelStatus["InvalidName"] = 65560] = "InvalidName";
    IModelStatus[IModelStatus["InvalidParent"] = 65561] = "InvalidParent";
    IModelStatus[IModelStatus["InvalidProfileVersion"] = 65562] = "InvalidProfileVersion";
    IModelStatus[IModelStatus["IsCreatingChangeSet"] = 65563] = "IsCreatingChangeSet";
    IModelStatus[IModelStatus["LockNotHeld"] = 65564] = "LockNotHeld";
    IModelStatus[IModelStatus["Mismatch2d3d"] = 65565] = "Mismatch2d3d";
    IModelStatus[IModelStatus["MismatchGcs"] = 65566] = "MismatchGcs";
    IModelStatus[IModelStatus["MissingDomain"] = 65567] = "MissingDomain";
    IModelStatus[IModelStatus["MissingHandler"] = 65568] = "MissingHandler";
    IModelStatus[IModelStatus["MissingId"] = 65569] = "MissingId";
    IModelStatus[IModelStatus["NoGeometry"] = 65570] = "NoGeometry";
    IModelStatus[IModelStatus["NoMultiTxnOperation"] = 65571] = "NoMultiTxnOperation";
    IModelStatus[IModelStatus["NotDgnMarkupProject"] = 65572] = "NotDgnMarkupProject";
    IModelStatus[IModelStatus["NotEnabled"] = 65573] = "NotEnabled";
    IModelStatus[IModelStatus["NotFound"] = 65574] = "NotFound";
    IModelStatus[IModelStatus["NotOpen"] = 65575] = "NotOpen";
    IModelStatus[IModelStatus["NotOpenForWrite"] = 65576] = "NotOpenForWrite";
    IModelStatus[IModelStatus["NotSameUnitBase"] = 65577] = "NotSameUnitBase";
    IModelStatus[IModelStatus["NothingToRedo"] = 65578] = "NothingToRedo";
    IModelStatus[IModelStatus["NothingToUndo"] = 65579] = "NothingToUndo";
    IModelStatus[IModelStatus["ParentBlockedChange"] = 65580] = "ParentBlockedChange";
    IModelStatus[IModelStatus["ReadError"] = 65581] = "ReadError";
    IModelStatus[IModelStatus["ReadOnly"] = 65582] = "ReadOnly";
    IModelStatus[IModelStatus["ReadOnlyDomain"] = 65583] = "ReadOnlyDomain";
    IModelStatus[IModelStatus["RepositoryManagerError"] = 65584] = "RepositoryManagerError";
    IModelStatus[IModelStatus["SQLiteError"] = 65585] = "SQLiteError";
    IModelStatus[IModelStatus["TransactionActive"] = 65586] = "TransactionActive";
    IModelStatus[IModelStatus["UnitsMissing"] = 65587] = "UnitsMissing";
    IModelStatus[IModelStatus["UnknownFormat"] = 65588] = "UnknownFormat";
    IModelStatus[IModelStatus["UpgradeFailed"] = 65589] = "UpgradeFailed";
    IModelStatus[IModelStatus["ValidationFailed"] = 65590] = "ValidationFailed";
    IModelStatus[IModelStatus["VersionTooNew"] = 65591] = "VersionTooNew";
    IModelStatus[IModelStatus["VersionTooOld"] = 65592] = "VersionTooOld";
    IModelStatus[IModelStatus["ViewNotFound"] = 65593] = "ViewNotFound";
    IModelStatus[IModelStatus["WriteError"] = 65594] = "WriteError";
    IModelStatus[IModelStatus["WrongClass"] = 65595] = "WrongClass";
    IModelStatus[IModelStatus["WrongIModel"] = 65596] = "WrongIModel";
    IModelStatus[IModelStatus["WrongDomain"] = 65597] = "WrongDomain";
    IModelStatus[IModelStatus["WrongElement"] = 65598] = "WrongElement";
    IModelStatus[IModelStatus["WrongHandler"] = 65599] = "WrongHandler";
    IModelStatus[IModelStatus["WrongModel"] = 65600] = "WrongModel";
    IModelStatus[IModelStatus["ConstraintNotUnique"] = 65601] = "ConstraintNotUnique";
    IModelStatus[IModelStatus["NoGeoLocation"] = 65602] = "NoGeoLocation";
    IModelStatus[IModelStatus["ServerTimeout"] = 65603] = "ServerTimeout";
})(IModelStatus = exports.IModelStatus || (exports.IModelStatus = {}));
/** Error status from various briefcase operations
 * @beta Should these be internal?
 */
var BriefcaseStatus;
(function (BriefcaseStatus) {
    BriefcaseStatus[BriefcaseStatus["CannotAcquire"] = 131072] = "CannotAcquire";
    BriefcaseStatus[BriefcaseStatus["CannotDownload"] = 131073] = "CannotDownload";
    BriefcaseStatus[BriefcaseStatus["CannotUpload"] = 131074] = "CannotUpload";
    BriefcaseStatus[BriefcaseStatus["CannotCopy"] = 131075] = "CannotCopy";
    BriefcaseStatus[BriefcaseStatus["CannotDelete"] = 131076] = "CannotDelete";
    BriefcaseStatus[BriefcaseStatus["VersionNotFound"] = 131077] = "VersionNotFound";
    BriefcaseStatus[BriefcaseStatus["CannotApplyChanges"] = 131078] = "CannotApplyChanges";
})(BriefcaseStatus = exports.BriefcaseStatus || (exports.BriefcaseStatus = {}));
/** RpcInterface status codes
 * @beta Should these be internal?
 */
var RpcInterfaceStatus;
(function (RpcInterfaceStatus) {
    RpcInterfaceStatus[RpcInterfaceStatus["Success"] = 0] = "Success";
    RpcInterfaceStatus[RpcInterfaceStatus["RPC_INTERFACE_ERROR_BASE"] = 135168] = "RPC_INTERFACE_ERROR_BASE";
    /** The RpcInterface implemented by the server is incompatible with the interface requested by the client. */
    RpcInterfaceStatus[RpcInterfaceStatus["IncompatibleVersion"] = 135168] = "IncompatibleVersion";
})(RpcInterfaceStatus = exports.RpcInterfaceStatus || (exports.RpcInterfaceStatus = {}));
/** Error status from various ChangeSet operations
 * @beta Should these be internal?
 */
var ChangeSetStatus;
(function (ChangeSetStatus) {
    ChangeSetStatus[ChangeSetStatus["Success"] = 0] = "Success";
    ChangeSetStatus[ChangeSetStatus["CHANGESET_ERROR_BASE"] = 90112] = "CHANGESET_ERROR_BASE";
    /** Error applying a change set when reversing or reinstating it */
    ChangeSetStatus[ChangeSetStatus["ApplyError"] = 90113] = "ApplyError";
    /** Change tracking has not been enabled. The ChangeSet API mandates this. */
    ChangeSetStatus[ChangeSetStatus["ChangeTrackingNotEnabled"] = 90114] = "ChangeTrackingNotEnabled";
    /** Contents of the change stream are corrupted and does not match the ChangeSet */
    ChangeSetStatus[ChangeSetStatus["CorruptedChangeStream"] = 90115] = "CorruptedChangeStream";
    /** File containing the changes to the change set is not found */
    ChangeSetStatus[ChangeSetStatus["FileNotFound"] = 90116] = "FileNotFound";
    /** Error writing the contents of the change set to the backing change stream file */
    ChangeSetStatus[ChangeSetStatus["FileWriteError"] = 90117] = "FileWriteError";
    /**  Cannot perform the operation since the Db has local changes */
    ChangeSetStatus[ChangeSetStatus["HasLocalChanges"] = 90118] = "HasLocalChanges";
    /**  Cannot perform the operation since current transaction has uncommitted changes */
    ChangeSetStatus[ChangeSetStatus["HasUncommittedChanges"] = 90119] = "HasUncommittedChanges";
    /**  Invalid ChangeSet Id */
    ChangeSetStatus[ChangeSetStatus["InvalidId"] = 90120] = "InvalidId";
    /**  Invalid version of the change set */
    ChangeSetStatus[ChangeSetStatus["InvalidVersion"] = 90121] = "InvalidVersion";
    /** Cannot perform the operation since system is in the middle of a dynamic transaction */
    ChangeSetStatus[ChangeSetStatus["InDynamicTransaction"] = 90122] = "InDynamicTransaction";
    /** Cannot perform operation since system is in the middle of a creating a change set */
    ChangeSetStatus[ChangeSetStatus["IsCreatingChangeSet"] = 90123] = "IsCreatingChangeSet";
    /** Cannot perform operation since the system is not creating a change set */
    ChangeSetStatus[ChangeSetStatus["IsNotCreatingChangeSet"] = 90124] = "IsNotCreatingChangeSet";
    /** Error propagating the changes after the merge */
    ChangeSetStatus[ChangeSetStatus["MergePropagationError"] = 90125] = "MergePropagationError";
    /** No change sets to merge */
    ChangeSetStatus[ChangeSetStatus["NothingToMerge"] = 90126] = "NothingToMerge";
    /** No transactions are available to create a change set */
    ChangeSetStatus[ChangeSetStatus["NoTransactions"] = 90127] = "NoTransactions";
    /** Parent change set of the Db does not match the parent id of the change set */
    ChangeSetStatus[ChangeSetStatus["ParentMismatch"] = 90128] = "ParentMismatch";
    /** Error performing a SQLite operation on the Db */
    ChangeSetStatus[ChangeSetStatus["SQLiteError"] = 90129] = "SQLiteError";
    /** ChangeSet originated in a different Db */
    ChangeSetStatus[ChangeSetStatus["WrongDgnDb"] = 90130] = "WrongDgnDb";
    /** Could not open the DgnDb to merge change set */
    ChangeSetStatus[ChangeSetStatus["CouldNotOpenDgnDb"] = 90131] = "CouldNotOpenDgnDb";
    /** Cannot merge changes in in an open DgnDb. Close the DgnDb, and process the operation when it is opened. */
    ChangeSetStatus[ChangeSetStatus["MergeSchemaChangesOnOpen"] = 90132] = "MergeSchemaChangesOnOpen";
    /** Cannot reverse or reinstate schema changes in an open DgnDb. Close the DgnDb, and process the operation when it is opened. */
    ChangeSetStatus[ChangeSetStatus["ReverseOrReinstateSchemaChangesOnOpen"] = 90133] = "ReverseOrReinstateSchemaChangesOnOpen";
    /** Cannot process changes schema changes in an open DgnDb. Close the DgnDb, and process the operation when it is opened. */
    ChangeSetStatus[ChangeSetStatus["ProcessSchemaChangesOnOpen"] = 90134] = "ProcessSchemaChangesOnOpen";
    /** Cannot merge changes into a Readonly DgnDb. */
    ChangeSetStatus[ChangeSetStatus["CannotMergeIntoReadonly"] = 90135] = "CannotMergeIntoReadonly";
    /**  Cannot merge changes into a Master DgnDb. */
    ChangeSetStatus[ChangeSetStatus["CannotMergeIntoMaster"] = 90136] = "CannotMergeIntoMaster";
    /** Cannot merge changes into a DgnDb that has reversed change sets. */
    ChangeSetStatus[ChangeSetStatus["CannotMergeIntoReversed"] = 90137] = "CannotMergeIntoReversed";
})(ChangeSetStatus = exports.ChangeSetStatus || (exports.ChangeSetStatus = {}));
/** Return codes for methods which perform repository management operations
 * @beta Should these be internal?
 */
var RepositoryStatus;
(function (RepositoryStatus) {
    RepositoryStatus[RepositoryStatus["Success"] = 0] = "Success";
    /** The repository server did not respond to a request */
    RepositoryStatus[RepositoryStatus["ServerUnavailable"] = 86017] = "ServerUnavailable";
    /** A requested lock was already held by another briefcase */
    RepositoryStatus[RepositoryStatus["LockAlreadyHeld"] = 86018] = "LockAlreadyHeld";
    /** Failed to sync briefcase manager with server */
    RepositoryStatus[RepositoryStatus["SyncError"] = 86019] = "SyncError";
    /** Response from server not understood */
    RepositoryStatus[RepositoryStatus["InvalidResponse"] = 86020] = "InvalidResponse";
    /** An operation requires local changes to be committed or abandoned */
    RepositoryStatus[RepositoryStatus["PendingTransactions"] = 86021] = "PendingTransactions";
    /** A lock cannot be relinquished because the associated object has been modified */
    RepositoryStatus[RepositoryStatus["LockUsed"] = 86022] = "LockUsed";
    /** An operation required creation of a ChangeSet, which failed */
    RepositoryStatus[RepositoryStatus["CannotCreateChangeSet"] = 86023] = "CannotCreateChangeSet";
    /** Request to server not understood */
    RepositoryStatus[RepositoryStatus["InvalidRequest"] = 86024] = "InvalidRequest";
    /** A change set committed to the server must be integrated into the briefcase before the operation can be completed */
    RepositoryStatus[RepositoryStatus["ChangeSetRequired"] = 86025] = "ChangeSetRequired";
    /** A requested DgnCode is reserved by another briefcase or in use */
    RepositoryStatus[RepositoryStatus["CodeUnavailable"] = 86026] = "CodeUnavailable";
    /** A DgnCode cannot be released because it has not been reserved by the requesting briefcase */
    RepositoryStatus[RepositoryStatus["CodeNotReserved"] = 86027] = "CodeNotReserved";
    /** A DgnCode cannot be relinquished because it has been used locally */
    RepositoryStatus[RepositoryStatus["CodeUsed"] = 86028] = "CodeUsed";
    /** A required lock is not held by this briefcase */
    RepositoryStatus[RepositoryStatus["LockNotHeld"] = 86029] = "LockNotHeld";
    /** Repository is currently locked, no changes allowed */
    RepositoryStatus[RepositoryStatus["RepositoryIsLocked"] = 86030] = "RepositoryIsLocked";
})(RepositoryStatus = exports.RepositoryStatus || (exports.RepositoryStatus = {}));
/** Status from returned HTTP status code
 * @beta Should these be internal?
 */
var HttpStatus;
(function (HttpStatus) {
    /** 2xx Success */
    HttpStatus[HttpStatus["Success"] = 0] = "Success";
    /** 1xx Informational responses */
    HttpStatus[HttpStatus["Info"] = 94209] = "Info";
    /** 3xx Redirection */
    HttpStatus[HttpStatus["Redirection"] = 94210] = "Redirection";
    /** 4xx Client errors */
    HttpStatus[HttpStatus["ClientError"] = 94211] = "ClientError";
    /** 5xx Server errors */
    HttpStatus[HttpStatus["ServerError"] = 94212] = "ServerError";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
/** Server returned WSG errors
 * @beta Right name? Right package?
 */
var WSStatus;
(function (WSStatus) {
    WSStatus[WSStatus["Success"] = 0] = "Success";
    WSStatus[WSStatus["WSERROR_BASE"] = 98304] = "WSERROR_BASE";
    WSStatus[WSStatus["Unknown"] = 98305] = "Unknown";
    WSStatus[WSStatus["LoginFailed"] = 98306] = "LoginFailed";
    WSStatus[WSStatus["SslRequired"] = 98307] = "SslRequired";
    WSStatus[WSStatus["NotEnoughRights"] = 98308] = "NotEnoughRights";
    WSStatus[WSStatus["RepositoryNotFound"] = 98309] = "RepositoryNotFound";
    WSStatus[WSStatus["SchemaNotFound"] = 98310] = "SchemaNotFound";
    WSStatus[WSStatus["ClassNotFound"] = 98311] = "ClassNotFound";
    WSStatus[WSStatus["PropertyNotFound"] = 98312] = "PropertyNotFound";
    WSStatus[WSStatus["InstanceNotFound"] = 98313] = "InstanceNotFound";
    WSStatus[WSStatus["FileNotFound"] = 98314] = "FileNotFound";
    WSStatus[WSStatus["NotSupported"] = 98315] = "NotSupported";
    WSStatus[WSStatus["NoServerLicense"] = 98316] = "NoServerLicense";
    WSStatus[WSStatus["NoClientLicense"] = 98317] = "NoClientLicense";
    WSStatus[WSStatus["TooManyBadLoginAttempts"] = 98318] = "TooManyBadLoginAttempts";
    WSStatus[WSStatus["LoginRequired"] = 98319] = "LoginRequired";
})(WSStatus = exports.WSStatus || (exports.WSStatus = {}));
/** iModelHub Services Errors
 * @beta Right package?
 */
var IModelHubStatus;
(function (IModelHubStatus) {
    IModelHubStatus[IModelHubStatus["Success"] = 0] = "Success";
    IModelHubStatus[IModelHubStatus["IMODELHUBERROR_BASE"] = 102400] = "IMODELHUBERROR_BASE";
    IModelHubStatus[IModelHubStatus["IMODELHUBERROR_REQUESTERRORBASE"] = 102656] = "IMODELHUBERROR_REQUESTERRORBASE";
    IModelHubStatus[IModelHubStatus["Unknown"] = 102401] = "Unknown";
    IModelHubStatus[IModelHubStatus["MissingRequiredProperties"] = 102402] = "MissingRequiredProperties";
    IModelHubStatus[IModelHubStatus["InvalidPropertiesValues"] = 102403] = "InvalidPropertiesValues";
    IModelHubStatus[IModelHubStatus["UserDoesNotHavePermission"] = 102404] = "UserDoesNotHavePermission";
    IModelHubStatus[IModelHubStatus["UserDoesNotHaveAccess"] = 102405] = "UserDoesNotHaveAccess";
    IModelHubStatus[IModelHubStatus["InvalidBriefcase"] = 102406] = "InvalidBriefcase";
    IModelHubStatus[IModelHubStatus["BriefcaseDoesNotExist"] = 102407] = "BriefcaseDoesNotExist";
    IModelHubStatus[IModelHubStatus["BriefcaseDoesNotBelongToUser"] = 102408] = "BriefcaseDoesNotBelongToUser";
    IModelHubStatus[IModelHubStatus["AnotherUserPushing"] = 102409] = "AnotherUserPushing";
    IModelHubStatus[IModelHubStatus["ChangeSetAlreadyExists"] = 102410] = "ChangeSetAlreadyExists";
    IModelHubStatus[IModelHubStatus["ChangeSetDoesNotExist"] = 102411] = "ChangeSetDoesNotExist";
    IModelHubStatus[IModelHubStatus["FileIsNotUploaded"] = 102412] = "FileIsNotUploaded";
    IModelHubStatus[IModelHubStatus["iModelIsNotInitialized"] = 102413] = "iModelIsNotInitialized";
    IModelHubStatus[IModelHubStatus["ChangeSetPointsToBadSeed"] = 102414] = "ChangeSetPointsToBadSeed";
    IModelHubStatus[IModelHubStatus["OperationFailed"] = 102415] = "OperationFailed";
    IModelHubStatus[IModelHubStatus["PullIsRequired"] = 102416] = "PullIsRequired";
    IModelHubStatus[IModelHubStatus["MaximumNumberOfBriefcasesPerUser"] = 102417] = "MaximumNumberOfBriefcasesPerUser";
    IModelHubStatus[IModelHubStatus["MaximumNumberOfBriefcasesPerUserPerMinute"] = 102418] = "MaximumNumberOfBriefcasesPerUserPerMinute";
    IModelHubStatus[IModelHubStatus["DatabaseTemporarilyLocked"] = 102419] = "DatabaseTemporarilyLocked";
    IModelHubStatus[IModelHubStatus["iModelIsLocked"] = 102420] = "iModelIsLocked";
    IModelHubStatus[IModelHubStatus["CodesExist"] = 102421] = "CodesExist";
    IModelHubStatus[IModelHubStatus["LocksExist"] = 102422] = "LocksExist";
    IModelHubStatus[IModelHubStatus["iModelAlreadyExists"] = 102423] = "iModelAlreadyExists";
    IModelHubStatus[IModelHubStatus["iModelDoesNotExist"] = 102424] = "iModelDoesNotExist";
    IModelHubStatus[IModelHubStatus["FileDoesNotExist"] = 102425] = "FileDoesNotExist";
    IModelHubStatus[IModelHubStatus["FileAlreadyExists"] = 102426] = "FileAlreadyExists";
    IModelHubStatus[IModelHubStatus["LockDoesNotExist"] = 102427] = "LockDoesNotExist";
    IModelHubStatus[IModelHubStatus["LockOwnedByAnotherBriefcase"] = 102428] = "LockOwnedByAnotherBriefcase";
    IModelHubStatus[IModelHubStatus["CodeStateInvalid"] = 102429] = "CodeStateInvalid";
    IModelHubStatus[IModelHubStatus["CodeReservedByAnotherBriefcase"] = 102430] = "CodeReservedByAnotherBriefcase";
    IModelHubStatus[IModelHubStatus["CodeDoesNotExist"] = 102431] = "CodeDoesNotExist";
    IModelHubStatus[IModelHubStatus["EventTypeDoesNotExist"] = 102432] = "EventTypeDoesNotExist";
    IModelHubStatus[IModelHubStatus["EventSubscriptionDoesNotExist"] = 102433] = "EventSubscriptionDoesNotExist";
    IModelHubStatus[IModelHubStatus["EventSubscriptionAlreadyExists"] = 102434] = "EventSubscriptionAlreadyExists";
    IModelHubStatus[IModelHubStatus["ProjectIdIsNotSpecified"] = 102435] = "ProjectIdIsNotSpecified";
    IModelHubStatus[IModelHubStatus["FailedToGetProjectPermissions"] = 102436] = "FailedToGetProjectPermissions";
    IModelHubStatus[IModelHubStatus["FailedToGetProjectMembers"] = 102437] = "FailedToGetProjectMembers";
    IModelHubStatus[IModelHubStatus["ChangeSetAlreadyHasVersion"] = 102438] = "ChangeSetAlreadyHasVersion";
    IModelHubStatus[IModelHubStatus["VersionAlreadyExists"] = 102439] = "VersionAlreadyExists";
    IModelHubStatus[IModelHubStatus["JobSchedulingFailed"] = 102440] = "JobSchedulingFailed";
    IModelHubStatus[IModelHubStatus["ConflictsAggregate"] = 102441] = "ConflictsAggregate";
    IModelHubStatus[IModelHubStatus["FailedToGetProjectById"] = 102442] = "FailedToGetProjectById";
    IModelHubStatus[IModelHubStatus["DatabaseOperationFailed"] = 102443] = "DatabaseOperationFailed";
    IModelHubStatus[IModelHubStatus["SeedFileInitializationFailed"] = 102444] = "SeedFileInitializationFailed";
    IModelHubStatus[IModelHubStatus["FailedToGetAssetPermissions"] = 102445] = "FailedToGetAssetPermissions";
    IModelHubStatus[IModelHubStatus["FailedToGetAssetMembers"] = 102446] = "FailedToGetAssetMembers";
    // Errors that are returned for incorrect iModelHub request.
    IModelHubStatus[IModelHubStatus["UndefinedArgumentError"] = 102657] = "UndefinedArgumentError";
    IModelHubStatus[IModelHubStatus["InvalidArgumentError"] = 102658] = "InvalidArgumentError";
    IModelHubStatus[IModelHubStatus["MissingDownloadUrlError"] = 102659] = "MissingDownloadUrlError";
    IModelHubStatus[IModelHubStatus["NotSupportedInBrowser"] = 102660] = "NotSupportedInBrowser";
    IModelHubStatus[IModelHubStatus["FileHandlerNotSet"] = 102661] = "FileHandlerNotSet";
    IModelHubStatus[IModelHubStatus["FileNotFound"] = 102662] = "FileNotFound";
    IModelHubStatus[IModelHubStatus["InitializationTimeout"] = 102663] = "InitializationTimeout";
})(IModelHubStatus = exports.IModelHubStatus || (exports.IModelHubStatus = {}));
/** Authentication Errors
 * @beta Internal? Right package?
 */
var AuthStatus;
(function (AuthStatus) {
    AuthStatus[AuthStatus["Success"] = 0] = "Success";
    AuthStatus[AuthStatus["AUTHSTATUS_BASE"] = 131072] = "AUTHSTATUS_BASE";
    AuthStatus[AuthStatus["Error"] = 131072] = "Error";
})(AuthStatus = exports.AuthStatus || (exports.AuthStatus = {}));
/** The error type thrown by this module. `BentleyError` subclasses `Error` to add an `errorNumber` member. See [[IModelStatus]] for `errorNumber` values.
 * @public
 */
class BentleyError extends Error {
    /** Construct a new BentleyError
     * @param errorNumber The required error number originating from one of the standard status enums.
     * See [[IModelStatus]], [[DbResult]], [[BentleyStatus]], [[BriefcaseStatus]], [[RepositoryStatus]], [[ChangeSetStatus]], [[HttpStatus]], [[WSStatus]], [[IModelHubStatus]]
     * @param message The optional error message (should not be localized).
     * @param log The optional LogFunction that should be used to log this BentleyError.
     * @param category The optional logger category to use when logging.
     * @param getMetaData Optional data to be passed to the logger.
     */
    constructor(errorNumber, message, log, category, getMetaData) {
        super(message);
        this.errorNumber = errorNumber;
        this._getMetaData = getMetaData;
        this.name = this._initName();
        if (log)
            Logger_1.Logger.logException(category || "BentleyError", this, log, this._getMetaData); // TODO: Can we come up with a better default category?
    }
    /** Returns true if this BentleyError includes (optional) meta data. */
    get hasMetaData() { return this._getMetaData !== undefined; }
    /** Return the meta data associated with this BentleyError. */
    getMetaData() {
        return this.hasMetaData ? this._getMetaData() : undefined;
    }
    /** This function returns the name of each error status. Override this method to handle more error status codes. */
    _initName() {
        switch (this.errorNumber) {
            // IModelStatus cases
            case IModelStatus.AlreadyLoaded: return "Already Loaded";
            case IModelStatus.AlreadyOpen: return "Already Open";
            case IModelStatus.BadArg: return "Bad Arg";
            case IModelStatus.BadElement: return "Bad Element";
            case IModelStatus.BadModel: return "Bad Model";
            case IModelStatus.BadRequest: return "Bad Request";
            case IModelStatus.BadSchema: return "Bad Schema";
            case IModelStatus.CannotUndo: return "Can not Undo";
            case IModelStatus.CodeNotReserved: return "Code Not Reserved";
            case IModelStatus.DeletionProhibited: return "Deletion Prohibited";
            case IModelStatus.DuplicateCode: return "Duplicate Code";
            case IModelStatus.DuplicateName: return "Duplicate Name";
            case IModelStatus.ElementBlockedChange: return "Element Blocked Change";
            case IModelStatus.FileAlreadyExists: return "File Already Exists";
            case IModelStatus.FileNotFound: return "File Not Found";
            case IModelStatus.FileNotLoaded: return "File Not Loaded";
            case IModelStatus.ForeignKeyConstraint: return "ForeignKey Constraint";
            case IModelStatus.IdExists: return "Id Exists";
            case IModelStatus.InDynamicTransaction: return "InDynamicTransaction";
            case IModelStatus.InvalidCategory: return "Invalid Category";
            case IModelStatus.InvalidCode: return "Invalid Code";
            case IModelStatus.InvalidCodeSpec: return "Invalid CodeSpec";
            case IModelStatus.InvalidId: return "Invalid Id";
            case IModelStatus.InvalidName: return "Invalid Name";
            case IModelStatus.InvalidParent: return "Invalid Parent";
            case IModelStatus.InvalidProfileVersion: return "Invalid Profile Version";
            case IModelStatus.IsCreatingChangeSet: return "IsCreatingChangeSet";
            case IModelStatus.LockNotHeld: return "Lock Not Held";
            case IModelStatus.Mismatch2d3d: return "Mismatch 2d3d";
            case IModelStatus.MismatchGcs: return "Mismatch Gcs";
            case IModelStatus.MissingDomain: return "Missing Domain";
            case IModelStatus.MissingHandler: return "Missing Handler";
            case IModelStatus.MissingId: return "Missing Id";
            case IModelStatus.NoGeometry: return "No Geometry";
            case IModelStatus.NoMultiTxnOperation: return "NoMultiTxnOperation";
            case IModelStatus.NotDgnMarkupProject: return "NotDgnMarkupProject";
            case IModelStatus.NotEnabled: return "Not Enabled";
            case IModelStatus.NotFound: return "Not Found";
            case IModelStatus.NotOpen: return "Not Open";
            case IModelStatus.NotOpenForWrite: return "Not Open For Write";
            case IModelStatus.NotSameUnitBase: return "Not Same Unit Base";
            case IModelStatus.NothingToRedo: return "Nothing To Redo";
            case IModelStatus.NothingToUndo: return "Nothing To Undo";
            case IModelStatus.ParentBlockedChange: return "Parent Blocked Change";
            case IModelStatus.ReadError: return "Read Error";
            case IModelStatus.ReadOnly: return "ReadOnly";
            case IModelStatus.ReadOnlyDomain: return "ReadOnlyDomain";
            case IModelStatus.RepositoryManagerError: return "RepositoryManagerError";
            case IModelStatus.SQLiteError: return "SQLiteError";
            case IModelStatus.TransactionActive: return "Transaction Active";
            case IModelStatus.UnitsMissing: return "Units Missing";
            case IModelStatus.UnknownFormat: return "Unknown Format";
            case IModelStatus.UpgradeFailed: return "Upgrade Failed";
            case IModelStatus.ValidationFailed: return "Validation Failed";
            case IModelStatus.VersionTooNew: return "Version Too New";
            case IModelStatus.VersionTooOld: return "Version Too Old";
            case IModelStatus.ViewNotFound: return "View Not Found";
            case IModelStatus.WriteError: return "Write Error";
            case IModelStatus.WrongClass: return "Wrong Class";
            case IModelStatus.WrongIModel: return "Wrong IModel";
            case IModelStatus.WrongDomain: return "Wrong Domain";
            case IModelStatus.WrongElement: return "Wrong Element";
            case IModelStatus.WrongHandler: return "Wrong Handler";
            case IModelStatus.WrongModel: return "Wrong Model";
            // DbResult cases
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR: return "BE_SQLITE_ERROR";
            case BeSQLite_1.DbResult.BE_SQLITE_INTERNAL: return "BE_SQLITE_INTERNAL";
            case BeSQLite_1.DbResult.BE_SQLITE_PERM: return "BE_SQLITE_PERM";
            case BeSQLite_1.DbResult.BE_SQLITE_ABORT: return "BE_SQLITE_ABORT";
            case BeSQLite_1.DbResult.BE_SQLITE_BUSY: return "Db is busy";
            case BeSQLite_1.DbResult.BE_SQLITE_LOCKED: return "Db is Locked";
            case BeSQLite_1.DbResult.BE_SQLITE_NOMEM: return "BE_SQLITE_NOMEM";
            case BeSQLite_1.DbResult.BE_SQLITE_READONLY: return "Readonly";
            case BeSQLite_1.DbResult.BE_SQLITE_INTERRUPT: return "BE_SQLITE_INTERRUPT";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR: return "BE_SQLITE_IOERR";
            case BeSQLite_1.DbResult.BE_SQLITE_CORRUPT: return "BE_SQLITE_CORRUPT";
            case BeSQLite_1.DbResult.BE_SQLITE_NOTFOUND: return "Not Found";
            case BeSQLite_1.DbResult.BE_SQLITE_FULL: return "BE_SQLITE_FULL";
            case BeSQLite_1.DbResult.BE_SQLITE_CANTOPEN: return "Can't open";
            case BeSQLite_1.DbResult.BE_SQLITE_PROTOCOL: return "BE_SQLITE_PROTOCOL";
            case BeSQLite_1.DbResult.BE_SQLITE_EMPTY: return "BE_SQLITE_EMPTY";
            case BeSQLite_1.DbResult.BE_SQLITE_SCHEMA: return "BE_SQLITE_SCHEMA";
            case BeSQLite_1.DbResult.BE_SQLITE_TOOBIG: return "BE_SQLITE_TOOBIG";
            case BeSQLite_1.DbResult.BE_SQLITE_MISMATCH: return "BE_SQLITE_MISMATCH";
            case BeSQLite_1.DbResult.BE_SQLITE_MISUSE: return "BE_SQLITE_MISUSE";
            case BeSQLite_1.DbResult.BE_SQLITE_NOLFS: return "BE_SQLITE_NOLFS";
            case BeSQLite_1.DbResult.BE_SQLITE_AUTH: return "BE_SQLITE_AUTH";
            case BeSQLite_1.DbResult.BE_SQLITE_FORMAT: return "BE_SQLITE_FORMAT";
            case BeSQLite_1.DbResult.BE_SQLITE_RANGE: return "BE_SQLITE_RANGE";
            case BeSQLite_1.DbResult.BE_SQLITE_NOTADB: return "Not a Database";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_READ: return "BE_SQLITE_IOERR_READ";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SHORT_READ: return "BE_SQLITE_IOERR_SHORT_READ";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_WRITE: return "BE_SQLITE_IOERR_WRITE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_FSYNC: return "BE_SQLITE_IOERR_FSYNC";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_DIR_FSYNC: return "BE_SQLITE_IOERR_DIR_FSYNC";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_TRUNCATE: return "BE_SQLITE_IOERR_TRUNCATE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_FSTAT: return "BE_SQLITE_IOERR_FSTAT";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_UNLOCK: return "BE_SQLITE_IOERR_UNLOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_RDLOCK: return "BE_SQLITE_IOERR_RDLOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_DELETE: return "BE_SQLITE_IOERR_DELETE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_BLOCKED: return "BE_SQLITE_IOERR_BLOCKED";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_NOMEM: return "BE_SQLITE_IOERR_NOMEM";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_ACCESS: return "BE_SQLITE_IOERR_ACCESS";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_CHECKRESERVEDLOCK: return "BE_SQLITE_IOERR_CHECKRESERVEDLOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_LOCK: return "BE_SQLITE_IOERR_LOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_CLOSE: return "BE_SQLITE_IOERR_CLOSE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_DIR_CLOSE: return "BE_SQLITE_IOERR_DIR_CLOSE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SHMOPEN: return "BE_SQLITE_IOERR_SHMOPEN";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SHMSIZE: return "BE_SQLITE_IOERR_SHMSIZE";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SHMLOCK: return "BE_SQLITE_IOERR_SHMLOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SHMMAP: return "BE_SQLITE_IOERR_SHMMAP";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_SEEK: return "BE_SQLITE_IOERR_SEEK";
            case BeSQLite_1.DbResult.BE_SQLITE_IOERR_DELETE_NOENT: return "BE_SQLITE_IOERR_DELETE_NOENT";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_FileExists: return "File Exists";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_AlreadyOpen: return "Already Open";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_NoPropertyTable: return "No Property Table";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_FileNotFound: return "File Not Found";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_NoTxnActive: return "No Txn Active";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_BadDbProfile: return "Bad Db Profile";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_InvalidProfileVersion: return "Invalid Profile Version";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ProfileUpgradeFailed: return "Profile Upgrade Failed";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ProfileTooOldForReadWrite: return "Profile Too Old For ReadWrite";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ProfileTooOld: return "Profile Too Old";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ProfileTooNewForReadWrite: return "Profile Too New For ReadWrite";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ProfileTooNew: return "Profile Too New";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_ChangeTrackError: return "ChangeTrack Error";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_InvalidChangeSetVersion: return "Invalid ChangeSet Version";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaUpgradeRequired: return "Schema Upgrade Required";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaTooNew: return "Schema Too New";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaTooOld: return "Schema Too Old";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaLockFailed: return "Schema Lock Failed";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaUpgradeFailed: return "Schema Upgrade Failed";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_SchemaImportFailed: return "Schema Import Failed";
            case BeSQLite_1.DbResult.BE_SQLITE_ERROR_CouldNotAcquireLocksOrCodes: return "Could Not Acquire Locks Or Codes";
            case BeSQLite_1.DbResult.BE_SQLITE_LOCKED_SHAREDCACHE: return "BE_SQLITE_LOCKED_SHAREDCACHE";
            case BeSQLite_1.DbResult.BE_SQLITE_BUSY_RECOVERY: return "BE_SQLITE_BUSY_RECOVERY";
            case BeSQLite_1.DbResult.BE_SQLITE_CANTOPEN_NOTEMPDIR: return "SQLite No Temp Dir";
            case BeSQLite_1.DbResult.BE_SQLITE_CANTOPEN_ISDIR: return "BE_SQLITE_CANTOPEN_ISDIR";
            case BeSQLite_1.DbResult.BE_SQLITE_CANTOPEN_FULLPATH: return "BE_SQLITE_CANTOPEN_FULLPATH";
            case BeSQLite_1.DbResult.BE_SQLITE_CORRUPT_VTAB: return "BE_SQLITE_CORRUPT_VTAB";
            case BeSQLite_1.DbResult.BE_SQLITE_READONLY_RECOVERY: return "BE_SQLITE_READONLY_RECOVERY";
            case BeSQLite_1.DbResult.BE_SQLITE_READONLY_CANTLOCK: return "BE_SQLITE_READONLY_CANTLOCK";
            case BeSQLite_1.DbResult.BE_SQLITE_READONLY_ROLLBACK: return "BE_SQLITE_READONLY_ROLLBACK";
            case BeSQLite_1.DbResult.BE_SQLITE_ABORT_ROLLBACK: return "BE_SQLITE_ABORT_ROLLBACK";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_CHECK: return "BE_SQLITE_CONSTRAINT_CHECK";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_COMMITHOOK: return "CommitHook Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_FOREIGNKEY: return "Foreign Key Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_FUNCTION: return "Function Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_NOTNULL: return "NotNull Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_PRIMARYKEY: return "Primary Key Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_TRIGGER: return "Trigger Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_UNIQUE: return "Unique Constraint Error";
            case BeSQLite_1.DbResult.BE_SQLITE_CONSTRAINT_VTAB: return "VTable Constraint Error";
            // BentleyStatus cases
            case BentleyStatus.ERROR: return "Error";
            // BriefcaseStatus
            case BriefcaseStatus.CannotAcquire: return "CannotAcquire";
            case BriefcaseStatus.CannotDownload: return "CannotDownload";
            case BriefcaseStatus.CannotCopy: return "CannotCopy";
            case BriefcaseStatus.CannotDelete: return "CannotDelete";
            case BriefcaseStatus.VersionNotFound: return "VersionNotFound";
            // RpcInterface
            case RpcInterfaceStatus.IncompatibleVersion: return "RpcInterfaceStatus.IncompatibleVersion";
            // ChangeSetStatus
            case ChangeSetStatus.ApplyError: return "Error applying a change set when reversing or reinstating it";
            case ChangeSetStatus.ChangeTrackingNotEnabled: return "Change tracking has not been enabled. The ChangeSet API mandates this";
            case ChangeSetStatus.CorruptedChangeStream: return "Contents of the change stream are corrupted and does not match the ChangeSet";
            case ChangeSetStatus.FileNotFound: return "File containing the changes was not found";
            case ChangeSetStatus.FileWriteError: return "Error writing the contents of the change set to the backing change stream file";
            case ChangeSetStatus.HasLocalChanges: return "Cannot perform the operation since the Db has local changes";
            case ChangeSetStatus.HasUncommittedChanges: return "Cannot perform the operation since current transaction has uncommitted changes";
            case ChangeSetStatus.InvalidId: return "Invalid ChangeSet Id";
            case ChangeSetStatus.InvalidVersion: return "Invalid version of the change set";
            case ChangeSetStatus.InDynamicTransaction: return "Cannot perform the operation since system is in the middle of a dynamic transaction";
            case ChangeSetStatus.IsCreatingChangeSet: return "Cannot perform operation since system is in the middle of a creating a change set";
            case ChangeSetStatus.IsNotCreatingChangeSet: return "Cannot perform operation since the system is not creating a change set";
            case ChangeSetStatus.MergePropagationError: return "Error propagating the changes after the merge";
            case ChangeSetStatus.NothingToMerge: return "No change sets to merge";
            case ChangeSetStatus.NoTransactions: return "No transactions are available to create a change set";
            case ChangeSetStatus.ParentMismatch: return "Parent change set of the Db does not match the parent id of the change set";
            case ChangeSetStatus.SQLiteError: return "Error performing a SQLite operation on the Db";
            case ChangeSetStatus.WrongDgnDb: return "ChangeSet originated in a different Db";
            case ChangeSetStatus.CouldNotOpenDgnDb: return "Could not open the DgnDb to merge change set";
            case ChangeSetStatus.MergeSchemaChangesOnOpen: return "Cannot merge changes in in an open DgnDb. Close the DgnDb, and process the operation when it is opened";
            case ChangeSetStatus.ReverseOrReinstateSchemaChangesOnOpen: return "Cannot reverse or reinstate schema changes in an open DgnDb. Close the DgnDb, and process the operation when it is opened";
            case ChangeSetStatus.ProcessSchemaChangesOnOpen: return "Cannot process changes schema changes in an open DgnDb. Close the DgnDb, and process the operation when it is opened";
            case ChangeSetStatus.CannotMergeIntoReadonly: return "Cannot merge changes into a Readonly DgnDb";
            case ChangeSetStatus.CannotMergeIntoMaster: return "Cannot merge changes into a Master DgnDb";
            case ChangeSetStatus.CannotMergeIntoReversed: return "Cannot merge changes into a DgnDb that has reversed change sets";
            // RepositoryStatus
            case RepositoryStatus.ServerUnavailable: return "ServerUnavailable";
            case RepositoryStatus.LockAlreadyHeld: return "LockAlreadyHeld";
            case RepositoryStatus.SyncError: return "SyncError";
            case RepositoryStatus.InvalidResponse: return "InvalidResponse";
            case RepositoryStatus.PendingTransactions: return "PendingTransactions";
            case RepositoryStatus.LockUsed: return "LockUsed";
            case RepositoryStatus.CannotCreateChangeSet: return "CannotCreateChangeSet";
            case RepositoryStatus.InvalidRequest: return "InvalidRequest";
            case RepositoryStatus.ChangeSetRequired: return "ChangeSetRequired";
            case RepositoryStatus.CodeUnavailable: return "CodeUnavailable";
            case RepositoryStatus.CodeNotReserved: return "CodeNotReserved";
            case RepositoryStatus.CodeUsed: return "CodeUsed";
            case RepositoryStatus.LockNotHeld: return "LockNotHeld";
            case RepositoryStatus.RepositoryIsLocked: return "RepositoryIsLocked";
            // HTTP Status
            case HttpStatus.Info: return "HTTP Info";
            case HttpStatus.Redirection: return "HTTP Redirection";
            case HttpStatus.ClientError: return "HTTP Client error";
            case HttpStatus.ServerError: return "HTTP Server error";
            // WSStatus
            case WSStatus.Unknown: return "Unknown error";
            case WSStatus.ClassNotFound: return "Class not found";
            case WSStatus.FileNotFound: return "File not found";
            case WSStatus.InstanceNotFound: return "Instance not found";
            case WSStatus.LoginFailed: return "Login failed";
            case WSStatus.NoClientLicense: return "No client license";
            case WSStatus.NoServerLicense: return "No server license";
            case WSStatus.NotEnoughRights: return "Not enough rights";
            case WSStatus.NotSupported: return "Not supported";
            case WSStatus.PropertyNotFound: return "Property not found";
            case WSStatus.RepositoryNotFound: return "Repository not found";
            case WSStatus.SchemaNotFound: return "Schema not found";
            case WSStatus.SslRequired: return "SSL required";
            case WSStatus.TooManyBadLoginAttempts: return "Too many bad login attempts";
            // IModelHubStatus
            case IModelHubStatus.Unknown: return "Unknown error";
            case IModelHubStatus.MissingRequiredProperties: return "Missing required properties";
            case IModelHubStatus.InvalidPropertiesValues: return "Invalid properties values";
            case IModelHubStatus.UserDoesNotHavePermission: return "User does not have permission";
            case IModelHubStatus.UserDoesNotHaveAccess: return "User does not have access";
            case IModelHubStatus.InvalidBriefcase: return "Invalid briefcase";
            case IModelHubStatus.BriefcaseDoesNotExist: return "Briefcase does not exist";
            case IModelHubStatus.BriefcaseDoesNotBelongToUser: return "Briefcase does not belong to user";
            case IModelHubStatus.AnotherUserPushing: return "Another user pushing";
            case IModelHubStatus.ChangeSetAlreadyExists: return "ChangeSet already exists";
            case IModelHubStatus.ChangeSetDoesNotExist: return "ChangeSet does not exist";
            case IModelHubStatus.FileIsNotUploaded: return "File is not uploaded";
            case IModelHubStatus.iModelIsNotInitialized: return "iModel is not initialized";
            case IModelHubStatus.ChangeSetPointsToBadSeed: return "ChangeSet points to a bad seed file";
            case IModelHubStatus.OperationFailed: return "iModelHub operation has failed";
            case IModelHubStatus.PullIsRequired: return "Pull is required";
            case IModelHubStatus.MaximumNumberOfBriefcasesPerUser: return "Limit of briefcases per user was reached";
            case IModelHubStatus.MaximumNumberOfBriefcasesPerUserPerMinute: return "Limit of briefcases per user per minute was reached";
            case IModelHubStatus.DatabaseTemporarilyLocked: return "Database is temporarily locked";
            case IModelHubStatus.iModelIsLocked: return "iModel is locked";
            case IModelHubStatus.CodesExist: return "Code already exists";
            case IModelHubStatus.LocksExist: return "Lock already exists";
            case IModelHubStatus.iModelAlreadyExists: return "iModel already exists";
            case IModelHubStatus.iModelDoesNotExist: return "iModel does not exist";
            case IModelHubStatus.LockDoesNotExist: return "Lock does not exist";
            case IModelHubStatus.LockOwnedByAnotherBriefcase: return "Lock is owned by another briefcase";
            case IModelHubStatus.CodeStateInvalid: return "Code state is invalid";
            case IModelHubStatus.CodeReservedByAnotherBriefcase: return "Code is reserved by another briefcase";
            case IModelHubStatus.CodeDoesNotExist: return "Code does not exist";
            case IModelHubStatus.FileDoesNotExist: return "File does not exist";
            case IModelHubStatus.FileAlreadyExists: return "File already exists";
            case IModelHubStatus.EventTypeDoesNotExist: return "Event type does not exist";
            case IModelHubStatus.EventSubscriptionDoesNotExist: return "Event subscription does not exist";
            case IModelHubStatus.EventSubscriptionAlreadyExists: return "Event subscription already exists";
            case IModelHubStatus.ProjectIdIsNotSpecified: return "Project Id is not specified";
            case IModelHubStatus.FailedToGetProjectPermissions: return "Failed to get project permissions";
            case IModelHubStatus.FailedToGetProjectMembers: return "Failed to get project members";
            case IModelHubStatus.FailedToGetAssetPermissions: return "Failed to get asset permissions";
            case IModelHubStatus.FailedToGetAssetMembers: return "Failed to get asset members";
            case IModelHubStatus.ChangeSetAlreadyHasVersion: return "ChangeSet already has version";
            case IModelHubStatus.VersionAlreadyExists: return "Version already exists";
            case IModelHubStatus.JobSchedulingFailed: return "Failed to schedule a background job";
            case IModelHubStatus.ConflictsAggregate: return "Codes or locks are owned by another briefcase";
            case IModelHubStatus.FailedToGetProjectById: return "Failed to query project by its id";
            case IModelHubStatus.DatabaseOperationFailed: return "Database operation has failed";
            // errors that are returned for incorrect iModelHub request.
            case IModelHubStatus.UndefinedArgumentError: return "Undefined argument";
            case IModelHubStatus.InvalidArgumentError: return "Invalid argument";
            case IModelHubStatus.MissingDownloadUrlError: return "Missing download url";
            case IModelHubStatus.NotSupportedInBrowser: return "Not supported in browser";
            case IModelHubStatus.FileHandlerNotSet: return "File handler is not set";
            case IModelHubStatus.FileNotFound: return "File not found";
            // errors returned from authorization
            case AuthStatus.Error: return "Authorization error";
            // Unexpected cases
            case IModelStatus.Success:
            case BeSQLite_1.DbResult.BE_SQLITE_OK:
            case BeSQLite_1.DbResult.BE_SQLITE_ROW:
            case BeSQLite_1.DbResult.BE_SQLITE_DONE:
            case BentleyStatus.SUCCESS:
                return "Success";
            default:
                return "Error (" + this.errorNumber + ")";
        }
    }
}
exports.BentleyError = BentleyError;


/***/ }),

/***/ "./lib/BentleyLoggerCategory.js":
/*!**************************************!*\
  !*** ./lib/BentleyLoggerCategory.js ***!
  \**************************************/
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
var BentleyLoggerCategory;
(function (BentleyLoggerCategory) {
    /** The logger category used by common classes relating to ElementProps. */
    BentleyLoggerCategory["Performance"] = "Performance";
})(BentleyLoggerCategory = exports.BentleyLoggerCategory || (exports.BentleyLoggerCategory = {}));


/***/ }),

/***/ "./lib/ClientRequestContext.js":
/*!*************************************!*\
  !*** ./lib/ClientRequestContext.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
const Id_1 = __webpack_require__(/*! ./Id */ "./lib/Id.js");
/** Provides generic context for a server application to get details of a particular
 * request that originated at the client. This context is used to pass information for various
 * purposes including usage tracking and logging. Services that require authorization are
 * passed an instance of the subclass:
 * [[AuthorizedClientRequestContext]].
 * @see [ClientRequestContext rules]($docs/learning/backend/managingclientrequestcontext.md).
 * @see [[AuthorizedClientRequestContext]]
 * @public
 */
class ClientRequestContext {
    /** Create a new ClientRequestContext */
    constructor(activityId = Id_1.Guid.createValue(), applicationId = "", applicationVersion = "", sessionId = Id_1.Guid.empty) {
        this.activityId = activityId;
        this.applicationId = applicationId;
        this.applicationVersion = applicationVersion;
        this.sessionId = sessionId;
        this._useContextForRpc = false;
    }
    /** Get the current client request context */
    static get current() { return ClientRequestContext._current; }
    /**
     * Set or reset the current ClientRequestContext to be this object. Should be called by async functions and the functions that they call
     * at every resume point. See [ClientRequestContext rules]($docs/learning/backend/managingclientrequestcontext.md).
     */
    enter() {
        ClientRequestContext._current = this;
        return this;
    }
    get useContextForRpc() { return this._useContextForRpc; }
    set useContextForRpc(value) { this._useContextForRpc = value; }
    /** @internal */
    toJSON() {
        return {
            activityId: this.activityId,
            applicationId: this.applicationId,
            applicationVersion: this.applicationVersion,
            sessionId: this.sessionId,
        };
    }
}
ClientRequestContext._current = new ClientRequestContext();
exports.ClientRequestContext = ClientRequestContext;


/***/ }),

/***/ "./lib/Compare.js":
/*!************************!*\
  !*** ./lib/Compare.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An [[OrderedComparator]] for numbers that treats two numbers as equal if the absolute value of their difference is less than a specified tolerance.
 * @public
 */
function compareWithTolerance(a, b, tolerance = 0.1) {
    if (a < b - tolerance)
        return -1;
    else if (a > b + tolerance)
        return 1;
    else
        return 0;
}
exports.compareWithTolerance = compareWithTolerance;
/** @public */
function compareNumbers(a, b) { return a - b; }
exports.compareNumbers = compareNumbers;
/** @public */
function compareBooleans(a, b) { return a !== b ? (a < b ? -1 : 1) : 0; }
exports.compareBooleans = compareBooleans;
/** @public */
function compareStrings(a, b) { return a === b ? 0 : (a < b ? -1 : 1); }
exports.compareStrings = compareStrings;
/** @public */
function comparePossiblyUndefined(compareDefined, lhs, rhs) {
    if (undefined === lhs)
        return undefined === rhs ? 0 : -1;
    else if (undefined === rhs)
        return 1;
    else
        return compareDefined(lhs, rhs);
}
exports.comparePossiblyUndefined = comparePossiblyUndefined;
/** @public */
function compareStringsOrUndefined(lhs, rhs) { return comparePossiblyUndefined(compareStrings, lhs, rhs); }
exports.compareStringsOrUndefined = compareStringsOrUndefined;
/** @public */
function compareNumbersOrUndefined(lhs, rhs) { return comparePossiblyUndefined(compareNumbers, lhs, rhs); }
exports.compareNumbersOrUndefined = compareNumbersOrUndefined;


/***/ }),

/***/ "./lib/Dictionary.js":
/*!***************************!*\
  !*** ./lib/Dictionary.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Collections */
Object.defineProperty(exports, "__esModule", { value: true });
const SortedArray_1 = __webpack_require__(/*! ./SortedArray */ "./lib/SortedArray.js");
class DictionaryIterator {
    constructor(keys, values) {
        this._curIndex = -1;
        this._keys = keys;
        this._values = values;
    }
    next() {
        if (++this._curIndex >= this._keys.length) {
            // The ECMAScript spec states that value=undefined is valid if done=true. The TypeScript interface violates the spec hence the cast to any and back below.
            return { done: true };
        }
        else {
            return {
                value: {
                    key: this._keys[this._curIndex],
                    value: this._values[this._curIndex],
                },
                done: false,
            };
        }
    }
}
/**
 * Maintains a mapping of keys to values.
 * Unlike the standard Map<K, V>, a Dictionary<K, V> supports custom comparison logic for keys of object type (and for any other type).
 * The user supplies a key comparison function to the constructor, that must meet the following criteria given 'lhs' and 'rhs' of type K:
 *  - If lhs is equal to rhs, returns 0
 *  - If lhs is less than rhs, returns a negative value
 *  - If lhs is greater than rhs, returns a positive value
 *  - If compare(lhs, rhs) returns 0, then compare(rhs, lhs) must also return 0
 *  - If compare(lhs, rhs) returns a negative value, then compare(rhs, lhs) must return a positive value, and vice versa.
 *
 * Modifying a key in a way that affects the comparison function will produce unpredictable results, the
 * most likely of which is that keys will cease to map to the values with which they were initially inserted.
 * @public
 */
class Dictionary {
    /**
     * Construct a new Dictionary<K, V>.
     * @param compareKeys The function used to compare keys within the dictionary.
     * @param cloneKey The function invoked to clone a key for insertion into the dictionary. The default implementation simply returns its input.
     * @param cloneValue The function invoked to clone a value for insertion into the dictionary. The default implementation simply returns its input.
     */
    constructor(compareKeys, cloneKey = SortedArray_1.shallowClone, cloneValue = SortedArray_1.shallowClone) {
        this._keys = [];
        this._values = [];
        this._compareKeys = compareKeys;
        this._cloneKey = cloneKey;
        this._cloneValue = cloneValue;
    }
    /** The number of entries in the dictionary. */
    get size() { return this._keys.length; }
    /** Returns an iterator over the key-value pairs in the Dictionary suitable for use in `for-of` loops. Entries are returned in sorted order by key. */
    [Symbol.iterator]() { return new DictionaryIterator(this._keys, this._values); }
    /** Removes all entries from this dictionary */
    clear() {
        this._keys = [];
        this._values = [];
    }
    /**
     * Looks up a value by its key.
     * @param key The key to search for
     * @returns the value associated with the key, or undefined if the key is not present in the dictionary.
     */
    get(key) {
        const bound = this.lowerBound(key);
        return bound.equal ? this._values[bound.index] : undefined;
    }
    /**
     * Determines if an entry exists for the specified key
     * @param key The key to search for
     * @returns true if an entry exists in this dictionary corresponding to the specified key.
     */
    has(key) {
        return this.lowerBound(key).equal;
    }
    /**
     * Deletes a value using its key.
     * @param key The key to delete
     * @returns true if the key was found and deleted.
     */
    delete(key) {
        const bound = this.lowerBound(key);
        if (bound.equal) {
            this._values.splice(bound.index, 1);
            this._keys.splice(bound.index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Attempts to insert a new entry into the dictionary. If an entry with an equivalent key exists, the dictionary is unmodified.
     * If the new entry is in fact inserted, both the key and value will be cloned using the functions supplied to the dictionary's constructor.
     * @param key The key to associate with the value
     * @param value The value to associate with the key
     * @returns true if the new entry was inserted, false if an entry with an equivalent key already exists.
     */
    insert(key, value) {
        const bound = this.lowerBound(key);
        if (!bound.equal) {
            this._keys.splice(bound.index, 0, this._cloneKey(key));
            this._values.splice(bound.index, 0, this._cloneValue(value));
        }
        return !bound.equal;
    }
    /**
     * Sets the value associated with the specified key in the dictionary.
     * If no such key already exists, this is equivalent to insert(key, value); otherwise, the existing value associated with the key is replaced.
     * In either case, the value will be cloned using the function supplied to the dictionary's constructor.
     */
    set(key, value) {
        value = this._cloneValue(value);
        const bound = this.lowerBound(key);
        if (bound.equal) {
            this._values[bound.index] = value;
        }
        else {
            this._keys.splice(bound.index, 0, this._cloneKey(key));
            this._values.splice(bound.index, 0, value);
        }
    }
    /**
     * Extracts the contents of this dictionary as an array of { key, value } pairs, and empties this dictionary.
     * @returns An array of { key, value } pairs sorted by key.
     */
    extractPairs() {
        const pairs = [];
        for (let i = 0; i < this.size; i++)
            pairs.push({ key: this._keys[i], value: this._values[i] });
        this.clear();
        return pairs;
    }
    /**
     * Extracts the contents of this dictionary as a pair of { keys, values } arrays, and empties this dictionary.
     * The array of keys is sorted according to the comparison criterion.
     * The position of each value in the array of values corresponds the the position of the corresponding key in the array of keys.
     * @returns a pair of { keys, values } arrays in which key[i] corresponds to value[i] in this dictionary and the keys are in sorted order.
     */
    extractArrays() {
        const result = { keys: this._keys, values: this._values };
        this.clear();
        return result;
    }
    /** Apply a function to each (key, value) pair in the dictionary, in sorted order.
     * @param func The function to be applied.
     */
    forEach(func) {
        for (let i = 0; i < this.size; i++)
            func(this._keys[i], this._values[i]);
    }
    /**
     * Computes the position at which the specified key should be inserted to maintain sorted order.
     * @param key The key whose position is to be computed.
     * @returns an object with 'index' corresponding to the computed position and 'equal' set to true if an equivalent key already exists at that index.
     */
    lowerBound(key) { return SortedArray_1.lowerBound(key, this._keys, this._compareKeys); }
}
exports.Dictionary = Dictionary;


/***/ }),

/***/ "./lib/Disposable.js":
/*!***************************!*\
  !*** ./lib/Disposable.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
/** Convenience function for disposing of a disposable object that may be undefined.
 * This is primarily used to simplify implementations of [[IDisposable.dispose]].
 * As a simple example:
 * ```ts
 *  class Disposable implements IDisposable {
 *    public member1?: DisposableType1;
 *    public member2?: DisposableType2;
 *
 *    public dispose() {
 *      this.member1 = dispose(this.member1); // If member1 is defined, dispose of it and set it to undefined.
 *      this.member2 = dispose(this.member2); // Likewise for member2.
 *    }
 *  }
 * ```
 * @param disposable The object to be disposed of.
 * @returns undefined
 * @public
 */
function dispose(disposable) {
    if (undefined !== disposable)
        disposable.dispose();
    return undefined;
}
exports.dispose = dispose;
/** Disposes of and empties a list of disposable objects.
 * @param list The list of disposable objects.
 * @returns undefined
 * @public
 */
function disposeArray(list) {
    if (undefined === list)
        return undefined;
    for (const entry of list)
        dispose(entry);
    list.length = 0;
    return undefined;
}
exports.disposeArray = disposeArray;
/** A 'using' function which is a substitution for .NET's using statement. It makes sure that 'dispose'
 * is called on the resource no matter if the func returns or throws. If func returns, the return value
 * of this function is equal to return value of func. If func throws, this function also throws (after
 * disposing the resource).
 * @public
 */
function using(resources, func) {
    if (!Array.isArray(resources))
        return using([resources], func);
    const doDispose = () => resources.forEach((disposable) => disposable.dispose());
    let shouldDisposeImmediately = true;
    try {
        const result = func(...resources);
        if (result instanceof Promise) {
            shouldDisposeImmediately = false;
            result.then(doDispose, doDispose);
        }
        return result;
    }
    finally {
        if (shouldDisposeImmediately)
            doDispose();
    }
}
exports.using = using;
class FuncDisposable {
    constructor(disposeFunc) { this._disposeFunc = disposeFunc; }
    dispose() { this._disposeFunc(); }
}
/** A disposable container of disposable objects.
 * @public
 */
class DisposableList {
    /** Creates a disposable list. */
    constructor(disposables = []) {
        this._disposables = [];
        disposables.forEach((disposable) => {
            this.add(disposable);
        });
    }
    isDisposable(x) {
        return x.dispose !== undefined;
    }
    /** Register an object for disposal. */
    add(disposable) {
        if (this.isDisposable(disposable))
            this._disposables.push(disposable);
        else
            this._disposables.push(new FuncDisposable(disposable));
    }
    /** Unregister disposable object. */
    remove(disposable) {
        const idx = this._disposables.indexOf(disposable);
        if (-1 !== idx)
            this._disposables.splice(idx, 1);
    }
    /** Disposes all registered objects. */
    dispose() {
        for (const disposable of this._disposables)
            disposable.dispose();
    }
}
exports.DisposableList = DisposableList;


/***/ }),

/***/ "./lib/Id.js":
/*!*******************!*\
  !*** ./lib/Id.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Ids */
Object.defineProperty(exports, "__esModule", { value: true });
function toHex(str) {
    const v = parseInt(str, 16);
    return Number.isNaN(v) ? 0 : v;
}
function isLowerCaseNonZeroHexDigit(str, index) {
    return isLowerCaseHexDigit(str, index, false);
}
function isLowerCaseHexDigit(str, index, allowZero = true) {
    const charCode = str.charCodeAt(index);
    const minDecimalDigit = allowZero ? 0x30 : 0x31; // '0' or '1'...
    return (charCode >= minDecimalDigit && charCode <= 0x39) || (charCode >= 0x61 && charCode <= 0x66); //  '0'-'9, 'a' -'f'
}
function isValidHexString(id, startIndex, len) {
    if (len === 0)
        return false;
    // No leading zeroes...
    if (!isLowerCaseNonZeroHexDigit(id, startIndex))
        return false;
    // ...followed by len-1 lowercase hexadecimal digits.
    for (let i = 1; i < len; i++)
        if (!isLowerCaseHexDigit(id, startIndex + i))
            return false;
    return true;
}
/**
 * The Id64 namespace provides facilities for working with 64-bit identifiers. These Ids are stored as 64-bit integers inside an [[IModelDb]], but must be represented
 * as strings in JavaScript because JavaScript does not intrinsically support 64-bit integers.
 *
 * The [[Id64String]] type alias is used to indicate function arguments, return types, and variables which are known to contain a well-formed representation of a 64-bit Id.
 *
 * See [Working with Ids]($docs/learning/common/Id64.md) for a detailed description and code examples.
 * @public
 */
var Id64;
(function (Id64) {
    /** Extract the "local" Id portion of an Id64String, contained in the lower 40 bits of the 64-bit value. */
    function getLocalId(id) {
        if (isInvalid(id))
            return 0;
        let start = 2;
        const len = id.length;
        if (len > 12)
            start = (len - 10);
        return toHex(id.slice(start));
    }
    Id64.getLocalId = getLocalId;
    /** Extract the briefcase Id portion of an Id64String, contained in the upper 24 bits of the 64-bit value. */
    function getBriefcaseId(id) {
        if (isInvalid(id))
            return 0;
        const str = id.toString();
        let start = 2;
        const len = str.length;
        if (len <= 12)
            return 0;
        start = (len - 10);
        return toHex(str.slice(2, start));
    }
    Id64.getBriefcaseId = getBriefcaseId;
    /** Create an Id64String from its JSON representation.
     * @param prop The JSON representation of an Id.
     * @returns A well-formed Id string.
     * @note if the input is undefined, the result is "0", indicating an invalid Id.
     * @note if the input is not undefined, the result is the same as that of [[Id64.fromString]].
     */
    function fromJSON(prop) {
        return typeof prop === "string" ? Id64.fromString(prop) : Id64.invalid;
    }
    Id64.fromJSON = fromJSON;
    /** Given a string value, attempt to normalize it into a well-formed Id string.
     * If the input is already a well-formed Id string, it is returned unmodified.
     * Otherwise, the input is trimmed of leading and trailing whitespace, converted to lowercase, and an attempt is made to parse it as a 64-bit hexadecimal integer.
     * If parsing succeeds the normalized result is returned; otherwise the result is "0", indicating an invalid Id.
     *
     * For a description of "well-formed", see [Working with Ids]($docs/learning/common/Id64.md).
     */
    function fromString(val) {
        // NB: in case this is called from JavaScript, we must check the run-time type...
        if (typeof val !== "string")
            return Id64.invalid;
        // Skip the common case in which the input is already a well-formed Id string
        if (Id64.isId64(val))
            return val;
        // Attempt to normalize the input into a well-formed Id string
        val = val.toLowerCase().trim();
        const len = val.length;
        if (len < 2 || val[0] !== "0" || val[1] !== "x")
            return Id64.invalid;
        let low = 0;
        let high = 0;
        let start = 2;
        if (len > 12) {
            start = (len - 10);
            high = toHex(val.slice(2, start));
        }
        low = toHex(val.slice(start));
        return fromLocalAndBriefcaseIds(low, high);
    }
    Id64.fromString = fromString;
    // Used when constructing local ID portion of Id64String. Performance optimization.
    const _localIdPrefixByLocalIdLength = [
        "0000000000",
        "000000000",
        "00000000",
        "0000000",
        "000000",
        "00000",
        "0000",
        "000",
        "00",
        "0",
        "",
    ];
    /** Produce an Id string from a local and briefcase Id.
     * @param localId The non-zero local Id as an unsigned 40-bit integer.
     * @param briefcaseId The briefcase Id as an unsigned 24-bit integer.
     * @returns an Id64String containing the hexadecimal string representation of the unsigned 64-bit integer which would result from the
     * operation `localId | (briefcaseId << 40)`, or an invalid Id "0" if the inputs are invalid.
     */
    function fromLocalAndBriefcaseIds(localId, briefcaseId) {
        // NB: Yes, we must check the run-time type...
        if (typeof localId !== "number" || typeof briefcaseId !== "number")
            return Id64.invalid;
        localId = Math.floor(localId);
        if (0 === localId)
            return Id64.invalid;
        briefcaseId = Math.floor(briefcaseId);
        const lowStr = localId.toString(16);
        return "0x" + ((briefcaseId === 0) ? lowStr : (briefcaseId.toString(16) + (_localIdPrefixByLocalIdLength[lowStr.length] + lowStr)));
    }
    Id64.fromLocalAndBriefcaseIds = fromLocalAndBriefcaseIds;
    // Used as a buffer when converting a pair of 32-bit integers to an Id64String. Significant performance optimization.
    const _scratchCharCodes = [
        0x30,
        0x78,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
        0x30,
    ];
    // Convert 4-bit unsigned integer to char code representing lower-case hexadecimal digit.
    function uint4ToCharCode(uint4) {
        return uint4 + (uint4 < 10 ? 0x30 : 0x57);
    }
    // Convert char code representing lower-case hexadecimal digit to 4-bit unsigned integer.
    function charCodeToUint4(char) {
        return char - (char >= 0x57 ? 0x57 : 0x30);
    }
    // Convert a substring to a uint32. This is twice as fast as using Number.parseInt().
    function substringToUint32(id, start, end) {
        let uint32 = 0;
        for (let i = start; i < end; i++) {
            const uint4 = charCodeToUint4(id.charCodeAt(i));
            const shift = (end - i - 1) << 2;
            const mask = uint4 << shift;
            uint32 = (uint32 | mask) >>> 0; // >>> 0 to force unsigned because javascript
        }
        return uint32;
    }
    /** Create an Id64String from a pair of unsigned 32-bit integers.
     * @param lowBytes The lower 4 bytes of the Id
     * @param highBytes The upper 4 bytes of the Id
     * @returns an Id64String containing the hexadecimal string representation of the unsigned 64-bit integer which would result from the
     * operation `lowBytes | (highBytes << 32)`.
     */
    function fromUint32Pair(lowBytes, highBytes) {
        const localIdLow = lowBytes >>> 0;
        const localIdHigh = (highBytes & 0x000000ff) * (0xffffffff + 1); // aka (highBytes & 0xff) << 32
        const localId = localIdLow + localIdHigh; // aka localIdLow | localIdHigh
        if (0 === localId)
            return Id64.invalid;
        // Need to omit or preserve leading zeroes...
        const buffer = _scratchCharCodes;
        let index = 2;
        for (let i = 7; i >= 0; i--) {
            const shift = i << 2;
            const mask = 0xf << shift;
            const uint4 = (highBytes & mask) >>> shift;
            if (index > 2 || 0 !== uint4)
                buffer[index++] = uint4ToCharCode(uint4);
        }
        for (let i = 7; i >= 0; i--) {
            const shift = i << 2;
            const mask = 0xf << shift;
            const uint4 = (lowBytes & mask) >>> shift;
            if (index > 2 || 0 !== uint4)
                buffer[index++] = uint4ToCharCode(uint4);
        }
        if (buffer.length !== index)
            buffer.length = index;
        return String.fromCharCode(..._scratchCharCodes);
    }
    Id64.fromUint32Pair = fromUint32Pair;
    /** @internal */
    function isValidUint32Pair(lowBytes, highBytes) {
        // Detect local ID of zero
        return 0 !== lowBytes || 0 !== (highBytes & 0x000000ff);
    }
    Id64.isValidUint32Pair = isValidUint32Pair;
    /** Convert an Id64String to a 64-bit unsigned integer represented as a pair of unsigned 32-bit integers. */
    function getUint32Pair(id) {
        return {
            lower: getLowerUint32(id),
            upper: getUpperUint32(id),
        };
    }
    Id64.getUint32Pair = getUint32Pair;
    /** Extract an unsigned 32-bit integer from the lower 4 bytes of an Id64String. */
    function getLowerUint32(id) {
        if (isInvalid(id))
            return 0;
        const end = id.length;
        const start = end > 10 ? end - 8 : 2;
        return substringToUint32(id, start, end);
    }
    Id64.getLowerUint32 = getLowerUint32;
    /** Extract an unsigned 32-bit integer from the upper 4 bytes of an Id64String. */
    function getUpperUint32(id) {
        const len = id.length;
        if (len <= 10 || isInvalid(id))
            return 0;
        return substringToUint32(id, 2, len - 8);
    }
    Id64.getUpperUint32 = getUpperUint32;
    /** Convert an [[Id64Arg]] into an [[Id64Set]].
     *
     * This method can be used by functions that accept an Id64Arg to conveniently process the value(s). For example:
     * ```ts
     *   public addCategories(arg: Id64Arg) { Id64.toIdSet(arg).forEach((id) => this.categories.add(id)); }
     * ```
     *
     * Alternatively, to avoid allocating a new Id64Set, use [[Id64.forEach]] or [[Id64.iterate]].
     *
     * @param arg The Ids to convert to an Id64Set.
     * @param makeCopy If true, and the input is already an Id64Set, returns a deep copy of the input.
     * @returns An Id64Set containing the set of [[Id64String]]s represented by the Id64Arg.
     */
    function toIdSet(arg, makeCopy = false) {
        if (arg instanceof Set)
            return makeCopy ? new Set(arg) : arg;
        const ids = new Set();
        if (typeof arg === "string")
            ids.add(arg);
        else if (Array.isArray(arg)) {
            arg.forEach((id) => {
                if (typeof id === "string")
                    ids.add(id);
            });
        }
        return ids;
    }
    Id64.toIdSet = toIdSet;
    /** Execute a function on each [[Id64String]] of an [[Id64Arg]].
     * @param arg The Id(s) to iterate.
     * @param callback The function to invoke on each Id.
     * @see [[Id64.iterate]] for a similar function which allows iteration to be halted before it completes.
     */
    function forEach(arg, callback) {
        Id64.iterate(arg, (id) => {
            callback(id);
            return true;
        });
    }
    Id64.forEach = forEach;
    /** Execute a function on each [[Id64String]] of an [[Id64Arg]], optionally terminating before iteration completes.
     * @param arg The Id(s) to iterate.
     * @param callback The function to invoke on each Id. The function returns false to terminate iteration, or true to continue iteration.
     * @returns True if all Ids were iterated, or false if iteration was terminated due to the callback returning false.
     */
    function iterate(arg, callback) {
        if (typeof arg === "string")
            return callback(arg);
        for (const id of arg)
            if (!callback(id))
                return false;
        return true;
    }
    Id64.iterate = iterate;
    /** Return the first [[Id64String]] of an [[Id64Arg]]. */
    function getFirst(arg) {
        return typeof arg === "string" ? arg : (Array.isArray(arg) ? arg[0] : arg.values().next().value);
    }
    Id64.getFirst = getFirst;
    /** Return the number of [[Id64String]]s represented by an [[Id64Arg]]. */
    function sizeOf(arg) {
        return typeof arg === "string" ? 1 : (Array.isArray(arg) ? arg.length : arg.size);
    }
    Id64.sizeOf = sizeOf;
    /** Returns true if the [[Id64Arg]] contains the specified Id. */
    function has(arg, id) {
        if (typeof arg === "string")
            return arg === id;
        if (Array.isArray(arg))
            return -1 !== arg.indexOf(id);
        return arg.has(id);
    }
    Id64.has = has;
    /** The string representation of an invalid Id. */
    Id64.invalid = "0";
    /** Determine if the supplied id string represents a transient Id.
     * @param id A well-formed Id string.
     * @returns true if the Id represents a transient Id.
     * @note This method assumes the input is a well-formed Id string.
     * @see [[Id64.isTransientId64]]
     * @see [[TransientIdSequence]]
     */
    function isTransient(id) {
        // A transient Id is of the format "0xffffffxxxxxxxxxx" where the leading 6 digits indicate an invalid briefcase Id.
        return 18 === id.length && id.startsWith("0xffffff");
    }
    Id64.isTransient = isTransient;
    /** Determine if the input is a well-formed [[Id64String]] and represents a transient Id.
     * @see [[Id64.isTransient]]
     * @see [[Id64.isId64]]
     * @see [[TransientIdSequence]]
     */
    function isTransientId64(id) {
        return isValidId64(id) && isTransient(id);
    }
    Id64.isTransientId64 = isTransientId64;
    /** Determine if the input is a well-formed [[Id64String]].
     *
     * For a description of "well-formed", see [Working with Ids]($docs/learning/common/Id64.md).
     * @see [[Id64.isValidId64]]
     */
    function isId64(id) {
        const len = id.length;
        if (0 === len || 18 < len)
            return false;
        if ("0" !== id[0])
            return false;
        // Well-formed invalid Id: "0"
        if (1 === len)
            return true;
        // Valid Ids begin with "0x" followed by at least one lower-case hexadecimal digit.
        if (2 === len || "x" !== id[1])
            return false;
        // If briefcase Id is present, it occupies at least one digit, followed by 10 digits for local Id
        let localIdStart = 2;
        if (len > 12) {
            localIdStart = len - 10;
            // Verify briefcase Id
            if (!isValidHexString(id, 2, localIdStart - 2))
                return false;
            // Skip leading zeroes in local Id
            for (let i = localIdStart; i < len; i++) {
                if (0x30 !== id.charCodeAt(i)) // '0'
                    break;
                else
                    localIdStart++;
            }
            if (localIdStart >= len)
                return false;
        }
        return isValidHexString(id, localIdStart, len - localIdStart);
    }
    Id64.isId64 = isId64;
    /** Returns true if the input is not equal to the representation of an invalid Id.
     * @note This method assumes the input is a well-formed Id string.
     * @see [[Id64.isInvalid]]
     * @see [[Id64.isValidId64]]
     */
    function isValid(id) { return Id64.invalid !== id; }
    Id64.isValid = isValid;
    /** Returns true if the input is a well-formed [[Id64String]] representing a valid Id.
     * @see [[Id64.isValid]]
     * @see [[Id64.isId64]]
     */
    function isValidId64(id) { return Id64.invalid !== id && Id64.isId64(id); }
    Id64.isValidId64 = isValidId64;
    /** Returns true if the input is a well-formed [[Id64String]] representing an invalid Id.
     * @see [[Id64.isValid]]
     */
    function isInvalid(id) { return Id64.invalid === id; }
    Id64.isInvalid = isInvalid;
    /** A specialized replacement for Set<Id64String> optimized for performance-critical code which represents large sets of 64-bit IDs as pairs of
     * 32-bit integers.
     * The internal representation is a Map<number, Set<number>> where the Map key is the upper 4 bytes of the IDs and the Set elements are the lower 4 bytes of the IDs.
     * Because the upper 4 bytes store the 24-bit briefcase ID plus the upper 8 bits of the local ID, there will be a very small distribution of unique Map keys.
     * To further optimize this data type, the following assumptions are made regarding the { lower, upper } inputs, and no validation is performed to confirm them:
     *  - The inputs are unsigned 32-bit integers;
     *  - The inputs represent a valid Id64String (e.g., local ID is not zero).
     * @see [[Id64.Uint32Map]] for a similarly-optimized replacement for Map<Id64String, T>
     * @public
     */
    class Uint32Set {
        /** Construct a new Uint32Set.
         * @param ids If supplied, all of the specified Ids will be added to the new set.
         */
        constructor(ids) {
            this._map = new Map();
            if (undefined !== ids)
                this.addIds(ids);
        }
        /** Remove all contents of this set. */
        clear() {
            this._map.clear();
        }
        /** Add an Id to the set. */
        addId(id) {
            this.add(Id64.getLowerUint32(id), Id64.getUpperUint32(id));
        }
        /** Add any number of Ids to the set. */
        addIds(ids) {
            Id64.forEach(ids, (id) => this.addId(id));
        }
        /** Returns true if the set contains the specified Id. */
        hasId(id) { return this.has(Id64.getLowerUint32(id), Id64.getUpperUint32(id)); }
        /** Add an Id to the set. */
        add(low, high) {
            let set = this._map.get(high);
            if (undefined === set) {
                set = new Set();
                this._map.set(high, set);
            }
            set.add(low);
        }
        /** Remove an Id from the set. */
        deleteId(id) {
            this.delete(Id64.getLowerUint32(id), Id64.getUpperUint32(id));
        }
        /** Remove any number of Ids from the set. */
        deleteIds(ids) {
            Id64.forEach(ids, (id) => this.deleteId(id));
        }
        /** Remove an Id from the set. */
        delete(low, high) {
            const set = this._map.get(high);
            if (undefined !== set)
                set.delete(low);
        }
        /** Returns true if the set contains the specified Id. */
        has(low, high) {
            const set = this._map.get(high);
            return undefined !== set && set.has(low);
        }
        /** Returns true if the set contains no Ids. */
        get isEmpty() { return 0 === this._map.size; }
        /** Returns the number of Ids contained in the set. */
        get size() {
            let size = 0;
            for (const entry of this._map)
                size += entry[1].size;
            return size;
        }
        /** Populates and returns an array of all Ids contained in the set. */
        toId64Array() {
            const ids = [];
            for (const entry of this._map)
                for (const low of entry[1])
                    ids.push(Id64.fromUint32Pair(low, entry[0]));
            return ids;
        }
        /** Populates and returns a set of all Ids contained in the set. */
        toId64Set() {
            const ids = new Set();
            for (const entry of this._map)
                for (const low of entry[1])
                    ids.add(Id64.fromUint32Pair(low, entry[0]));
            return ids;
        }
        /** Execute a function against each Id in this set. */
        forEach(func) {
            for (const entry of this._map)
                for (const lo of entry[1])
                    func(lo, entry[0]);
        }
    }
    Id64.Uint32Set = Uint32Set;
    /** A specialized replacement for Map<Id64String, T> optimized for performance-critical code.
     * @see [[Id64.Uint32Set]] for implementation details.
     * @public
     */
    class Uint32Map {
        constructor() {
            this._map = new Map();
        }
        /** Remove all entries from the map. */
        clear() { this._map.clear(); }
        /** Find an entry in the map by Id. */
        getById(id) { return this.get(Id64.getLowerUint32(id), Id64.getUpperUint32(id)); }
        /** Set an entry in the map by Id. */
        setById(id, value) { this.set(Id64.getLowerUint32(id), Id64.getUpperUint32(id), value); }
        /** Set an entry in the map by Id components. */
        set(low, high, value) {
            let map = this._map.get(high);
            if (undefined === map) {
                map = new Map();
                this._map.set(high, map);
            }
            map.set(low, value);
        }
        /** Get an entry from the map by Id components. */
        get(low, high) {
            const map = this._map.get(high);
            return undefined !== map ? map.get(low) : undefined;
        }
        /** Returns true if the map contains no entries. */
        get isEmpty() { return 0 === this._map.size; }
        /** Returns the number of entries in the map. */
        get size() {
            let size = 0;
            for (const entry of this._map)
                size += entry[1].size;
            return size;
        }
        /** Execute a function against each entry in this map. */
        forEach(func) {
            for (const outerEntry of this._map)
                for (const innerEntry of outerEntry[1])
                    func(innerEntry[0], outerEntry[0], innerEntry[1]);
        }
    }
    Id64.Uint32Map = Uint32Map;
})(Id64 = exports.Id64 || (exports.Id64 = {}));
/**
 * Generates unique [[Id64String]] values in sequence, which are guaranteed not to conflict with Ids associated with persistent elements or models.
 * This is useful for associating stable, non-persistent identifiers with things like [Decorator]($frontend)s.
 * A TransientIdSequence can generate a maximum of (2^40)-2 unique Ids.
 * @public
 */
class TransientIdSequence {
    constructor() {
        this._localId = 0;
    }
    /** Generate and return the next transient Id64String in the sequence. */
    get next() { return Id64.fromLocalAndBriefcaseIds(++this._localId, 0xffffff); }
}
exports.TransientIdSequence = TransientIdSequence;
/**
 * The Guid namespace provides facilities for working with GUID strings using the "8-4-4-4-12" pattern.
 *
 * The [[GuidString]] type alias is used to indicate function arguments, return types, and variables which are known to
 * be in the GUID format.
 * @public
 */
var Guid;
(function (Guid) {
    const uuidPattern = new RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
    /** Represents the empty Guid 00000000-0000-0000-0000-000000000000 */
    Guid.empty = "00000000-0000-0000-0000-000000000000";
    /** Determine whether the input string is "guid-like". That is, it follows the 8-4-4-4-12 pattern. This does not enforce
     *  that the string is actually in valid UUID format.
     */
    function isGuid(value) { return uuidPattern.test(value); }
    Guid.isGuid = isGuid;
    /** Determine whether the input string is a valid V4 Guid string */
    function isV4Guid(value) { return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(value); }
    Guid.isV4Guid = isV4Guid;
    /** Create a new V4 Guid value */
    function createValue() {
        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    Guid.createValue = createValue;
})(Guid = exports.Guid || (exports.Guid = {}));


/***/ }),

/***/ "./lib/IndexMap.js":
/*!*************************!*\
  !*** ./lib/IndexMap.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Collections */
Object.defineProperty(exports, "__esModule", { value: true });
const SortedArray_1 = __webpack_require__(/*! ./SortedArray */ "./lib/SortedArray.js");
/** Associates a value of type T with an index representing its insertion order in an IndexMap<T>
 * @public
 */
class IndexedValue {
    constructor(value, index) {
        this.value = value;
        this.index = index;
    }
}
exports.IndexedValue = IndexedValue;
/**
 * Maintains a set of unique elements in sorted order and retains the insertion order of each.
 * The uniqueness of the elements is determined by a comparison routine supplied by the user.
 * The user may also supply a maximum size, beyond which insertions will fail.
 * @public
 */
class IndexMap {
    /**
     * Construct a new IndexMap<T>.
     * @param compare The function used to compare elements within the map.
     * @param maximumSize The maximum number of elements permitted in the IndexMap. The maximum index of an element is maximumSize-1.
     * @param clone The function invoked to clone a new element for insertion into the array. The default implementation simply returns its input.
     */
    constructor(compare, maximumSize = Number.MAX_SAFE_INTEGER, clone = SortedArray_1.shallowClone) {
        this._array = [];
        this._compareValues = compare;
        this._clone = clone;
        this._maximumSize = maximumSize;
    }
    /** The number of elements in the map. */
    get length() { return this._array.length; }
    /** Returns true if the maximum number of elements have been inserted. */
    get isFull() { return this.length >= this._maximumSize; }
    /** Returns true if the map contains no elements. */
    get isEmpty() { return 0 === this.length; }
    /** Removes all elements from the map. */
    clear() { this._array = []; }
    /** Attempt to insert a new value into the map.
     * If an equivalent element already exists in the map, the corresponding index is returned.
     * If the map is full, nothing is inserted and -1 is returned.
     * Otherwise:
     *  The new element is mapped to the next-available index (that is, the length of the map prior to insertion of this new element);
     *  the value is cloned using the function supplied to the IndexMap constructor;
     *  the cloned result is inserted into the map; and
     *  the index of the new element is returned.
     * @param value The value to insert
     * @param onInsert The optional callback method to call if insertion occurs with the inserted value
     * @returns the index of the equivalent element in the map, or -1 if the map is full and no equivalent element exists.
     */
    insert(value, onInsert) {
        const bound = this.lowerBound(value);
        if (bound.equal)
            return this._array[bound.index].index;
        else if (this.isFull)
            return -1;
        const entry = new IndexedValue(this._clone(value), this._array.length);
        if (undefined !== onInsert)
            onInsert(entry.value);
        this._array.splice(bound.index, 0, entry);
        return entry.index;
    }
    /**
     * Finds the index of an element equivalent to the supplied value.
     * @param value the value to find
     * @returns the index of an equivalent element in the map, or -1 if no such element exists.
     */
    indexOf(value) {
        const bound = this.lowerBound(value);
        return bound.equal ? this._array[bound.index].index : -1;
    }
    lowerBound(value) { return SortedArray_1.lowerBound(value, this._array, (lhs, rhs) => this._compareValues(lhs, rhs.value)); }
}
exports.IndexMap = IndexMap;


/***/ }),

/***/ "./lib/JsonUtils.js":
/*!**************************!*\
  !*** ./lib/JsonUtils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
/** Utility functions for converting from JSON objects, with default values.
 * @public
 */
var JsonUtils;
(function (JsonUtils) {
    /** Get a value as a boolean.
     * @param json the input JSON object
     * @param defaultVal default value if json cannot be converted to boolean
     * @returns the value of json as a boolean, or default value
     */
    function asBool(json, defaultVal = false) { return isNullOrUndefined(json) ? defaultVal : !!json; }
    JsonUtils.asBool = asBool;
    /** Get a value as an integer.
     * @param json the input JSON object
     * @param defaultVal default value if json cannot be converted to integer
     * @returns the value of json as an integer, or default value
     */
    function asInt(json, defaultVal = 0) { return (typeof json === "number") ? Math.trunc(json) : defaultVal; }
    JsonUtils.asInt = asInt;
    /** Get a value as a double.
     * @param json the input JSON object
     * @param defaultVal default value if json cannot be converted to double
     * @returns the value of json as a double, or default value
     */
    function asDouble(json, defaultVal = 0) { return (typeof json === "number") ? json : defaultVal; }
    JsonUtils.asDouble = asDouble;
    /** Get a value as a string.
     * @param json the input JSON object
     * @param defaultVal default value if json cannot be converted to string
     * @returns the value of json as a string, or default value
     */
    function asString(json, defaultVal = "") { return isNullOrUndefined(json) ? defaultVal : json.toString(); }
    JsonUtils.asString = asString;
    /** Get a value as an array.
     * @param json the input JSON object
     * @returns the input JSON object if it is an array, otherwise undefined
     */
    function asArray(json) { return Array.isArray(json) ? json : undefined; }
    JsonUtils.asArray = asArray;
    /** Get a value as an object.
     * @param json the input JSON object
     * @returns the input JSON object if it is an object, otherwise undefined
     */
    function asObject(json) { return "object" === typeof json ? json : undefined; }
    JsonUtils.asObject = asObject;
    /** Set or remove a number on a json object, given a key name, a value, and a default value. Sets `json[key] = val` if val is *not* equal to the default,
     * otherwise `delete json[key]`. This is used to omit values from JSON strings that are of known defaults.
     * @param json the JSON object to affect
     * @param key the name of the member to set or remove
     * @param val the value to set
     * @param defaultVal the default value.
     */
    function setOrRemoveNumber(json, key, val, defaultVal) { if (val === defaultVal)
        delete json[key];
    else
        json[key] = val; }
    JsonUtils.setOrRemoveNumber = setOrRemoveNumber;
    /** Set or remove a boolean on a json object, given a key name, a value, and a default value. Sets `json[key] = val` if val is *not* equal to the default,
     * otherwise `delete json[key]`. This is used to omit values from JSON strings that are of known defaults.
     * @param json the JSON object to affect
     * @param key the name of the member to set or remove
     * @param val the value to set
     * @param defaultVal the default value.
     */
    function setOrRemoveBoolean(json, key, val, defaultVal) { if (val === defaultVal)
        delete json[key];
    else
        json[key] = val; }
    JsonUtils.setOrRemoveBoolean = setOrRemoveBoolean;
    /** Determine if a Javascript object is equivalent to `{}`.
     * @param json The JSON object to test.
     * @returns true if `json` is an Object with no keys.
     */
    function isEmptyObject(json) {
        return "object" === typeof json && 0 === Object.keys(json).length;
    }
    JsonUtils.isEmptyObject = isEmptyObject;
    /** Determine if the input is undefined or an empty Javascript object.
     * @param json The JSON object to test.
     * @returns true if `json` is undefined or is an Object with no keys (equivalent to `{}`).
     */
    function isEmptyObjectOrUndefined(json) {
        return undefined === json || isEmptyObject(json);
    }
    JsonUtils.isEmptyObjectOrUndefined = isEmptyObjectOrUndefined;
    function isNullOrUndefined(json) { return null === json || undefined === json; }
    /**
     * Convert the input object into a "pure" JavaScript object, with only instances of "object" or primitives in the returned value.
     * Works recursively for object members, and over arrays entries. Calls "toJSON" on any members that implement it.
     */
    function toObject(val) {
        if (typeof val === "boolean" || typeof val === "number" || typeof val === "string")
            return val;
        if (typeof val !== "object")
            return undefined;
        // See if the object has toJSON() function defined.
        if (typeof val.toJSON !== "undefined")
            return toObject(val.toJSON());
        // if it's an array, convert each member.
        if (Array.isArray(val)) {
            const arr = new Array(val.length);
            val.forEach((el, i) => { arr[i] = toObject(el); });
            return arr;
        }
        // Convert each property
        const out = {};
        Object.getOwnPropertyNames(val).forEach((prop) => {
            const transformVal = toObject(val[prop]);
            if (transformVal !== undefined)
                out[prop] = transformVal;
        });
        return out;
    }
    JsonUtils.toObject = toObject;
})(JsonUtils = exports.JsonUtils || (exports.JsonUtils = {}));


/***/ }),

/***/ "./lib/LRUMap.js":
/*!***********************!*\
  !*** ./lib/LRUMap.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Collections */
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionary_1 = __webpack_require__(/*! ./Dictionary */ "./lib/Dictionary.js");
/*
 * Derived from:
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md at https://github.com/rsms/js-lru for details.
 */
/** An entry holds the key and value, and pointers to any older and newer entries.
 * @public
 */
class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
exports.Entry = Entry;
class EntryIterator {
    constructor(oldestEntry) {
        this._entry = oldestEntry;
    }
    next() {
        const ent = this._entry;
        if (!ent)
            return { done: true, value: undefined };
        this._entry = ent.newer;
        const val = [ent.key, ent.value];
        return { done: false, value: val };
    }
}
class KeyIterator {
    constructor(oldestEntry) {
        this._entry = oldestEntry;
    }
    next() {
        const ent = this._entry;
        if (!ent)
            return { done: true, value: undefined };
        this._entry = ent.newer;
        return { done: false, value: ent.key };
    }
}
class ValueIterator {
    constructor(oldestEntry) {
        this._entry = oldestEntry;
    }
    next() {
        const ent = this._entry;
        if (!ent)
            return { done: true, value: undefined };
        this._entry = ent.newer;
        return { done: false, value: ent.value };
    }
}
/**
 * A mapping of a key/value pairs, where the size of the cache can be limited.
 *
 * When entries are inserted, if the cache is "full", the
 * least-recently-used (LRU) value is dropped. When entries are retrieved, they are moved to the front of the LRU list.
 *
 * Illustration of the design:
 *
 * ```
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 * ```
 * @public
 */
class LRUCache {
    /**
     * Construct a new LRUCache to hold up to `limit` entries.
     */
    constructor(limit, container) {
        this.size = 0;
        this.limit = limit;
        this.oldest = this.newest = undefined;
        this._container = container;
    }
    markEntryAsUsed(entry) {
        if (entry === this.newest)
            return; // Already the most recently used entry, so no need to update the list
        // HEAD--------------TAIL
        //   <.older   .newer>
        //  <--- add direction --
        //   A  B  C  <D>  E
        if (entry.newer) {
            if (entry === this.oldest) {
                this.oldest = entry.newer;
            }
            entry.newer.older = entry.older; // C <-- E.
        }
        if (entry.older) {
            entry.older.newer = entry.newer; // C. --> E
        }
        entry.newer = undefined; // D --x
        entry.older = this.newest; // D. --> E
        if (this.newest) {
            this.newest.newer = entry; // E. <-- D
        }
        this.newest = entry;
    }
    /**  Replace all values in this cache with key-value pairs (2-element Arrays) from provided iterable. */
    assign(entries) {
        let entry;
        let limit = this.limit || Number.MAX_VALUE;
        this._container.clear();
        const it = entries[Symbol.iterator]();
        for (let itv = it.next(); !itv.done; itv = it.next()) {
            const e = new Entry(itv.value[0], itv.value[1]);
            this._container.set(e.key, e);
            if (!entry) {
                this.oldest = e;
            }
            else {
                entry.newer = e;
                e.older = entry;
            }
            entry = e;
            if (limit-- === 0) {
                throw new Error("overflow");
            }
        }
        this.newest = entry;
        this.size = this._container.size;
    }
    /** Get and register recent use of <key>.
     *  Returns the value associated with <key> or undefined if not in cache.
     */
    get(key) {
        // First, find our cache entry
        const entry = this._container.get(key);
        if (!entry)
            return; // Not cached. Sorry.
        // As <key> was found in the cache, register it as being requested recently
        this.markEntryAsUsed(entry);
        return entry.value;
    }
    /** Put <value> into the cache associated with <key>. Replaces any existing entry with the same key.
     *  @returns `this`.
     */
    set(key, value) {
        let entry = this._container.get(key);
        if (entry) {
            // update existing
            entry.value = value;
            this.markEntryAsUsed(entry);
            return this;
        }
        // new entry
        this._container.set(key, (entry = new Entry(key, value)));
        if (this.newest) {
            // link previous tail to the new tail (entry)
            this.newest.newer = entry;
            entry.older = this.newest;
        }
        else {
            // we're first in
            this.oldest = entry;
        }
        // add new entry to the end of the linked list -- it is now the freshest entry.
        this.newest = entry;
        ++this.size;
        if (this.size > this.limit) {
            // we hit the limit -- remove the head
            this.shift();
        }
        return this;
    }
    /**  Purge the least recently used (oldest) entry from the cache.
     *  @returns The removed entry or undefined if the cache was empty.
     */
    shift() {
        const entry = this.oldest;
        if (entry) {
            if (entry.newer) {
                // advance the list
                this.oldest = entry.newer;
                this.oldest.older = undefined;
            }
            else {
                // the cache is exhausted
                this.oldest = undefined;
                this.newest = undefined;
            }
            // Remove last strong reference to <entry> and remove links from the purged
            // entry being returned:
            entry.newer = entry.older = undefined;
            this._container.delete(entry.key);
            --this.size;
            return [entry.key, entry.value];
        }
        return undefined;
    }
    /** Access value for `key` without registering recent use. Useful if you do not
     *  want to change the state of the cache, but only "peek" at it.
     *  @returns The value associated with `key` if found, or undefined if not found.
     */
    find(key) {
        const e = this._container.get(key);
        return e ? e.value : undefined;
    }
    /** Check if there's a value for key in the cache without registering recent use. */
    has(key) {
        return this._container.has(key);
    }
    /**  Remove entry `key` from cache and return its value.
     *  @returns The removed value, or undefined if not found.
     */
    delete(key) {
        const entry = this._container.get(key);
        if (!entry)
            return;
        this._container.delete(entry.key);
        if (entry.newer && entry.older) {
            // re-link the older entry with the newer entry
            entry.older.newer = entry.newer;
            entry.newer.older = entry.older;
        }
        else if (entry.newer) {
            // remove the link to us
            entry.newer.older = undefined;
            // link the newer entry to head
            this.oldest = entry.newer;
        }
        else if (entry.older) {
            // remove the link to us
            entry.older.newer = undefined;
            // link the newer entry to head
            this.newest = entry.older;
        }
        else { // if(entry.older === undefined && entry.newer === undefined) {
            this.oldest = this.newest = undefined;
        }
        this.size--;
        return entry.value;
    }
    /**  Removes all entries */
    clear() {
        // Note: clearing links should be safe, as we don't expose live links to user
        this.oldest = this.newest = undefined;
        this.size = 0;
        this._container.clear();
    }
    /** Returns an iterator over all keys, starting with the oldest. */
    keys() {
        return this.oldest ? new KeyIterator(this.oldest) : undefined;
    }
    /** Returns an iterator over all values, starting with the oldest. */
    values() {
        return this.oldest ? new ValueIterator(this.oldest) : undefined;
    }
    /** Returns an iterator over all entries, starting with the oldest. */
    entries() {
        return this.oldest ? new EntryIterator(this.oldest) : undefined;
    }
    /**  Call `fun` for each entry, starting with the oldest entry. */
    forEach(fun, thisObj) {
        if (typeof thisObj !== "object") {
            thisObj = this;
        }
        let entry = this.oldest;
        while (entry) {
            fun.call(thisObj, entry.value, entry.key, this);
            entry = entry.newer;
        }
    }
    /** Returns a JSON (array) representation */
    toJSON() {
        const s = new Array(this.size);
        let i = 0;
        let entry = this.oldest;
        while (entry) {
            s[i++] = { key: entry.key, value: entry.value };
            entry = entry.newer;
        }
        return s;
    }
    /** Returns a String representation */
    toString() {
        let s = "";
        let entry = this.oldest;
        while (entry) {
            s += String(entry.key) + ":" + entry.value;
            entry = entry.newer;
            if (entry) {
                s += " < ";
            }
        }
        return s;
    }
}
exports.LRUCache = LRUCache;
/** A [[LRUCache]] using a standard Map as its internal storage.
 * @public
 */
class LRUMap extends LRUCache {
    /**
     * Construct a new LRUMap to hold up to `limit` entries.
     */
    constructor(limit) {
        super(limit, new Map());
    }
}
exports.LRUMap = LRUMap;
/** A [[LRUCache]] using a [[Dictionary]] as its internal storage, permitting custom key comparison logic.
 * @public
 */
class LRUDictionary extends LRUCache {
    /**
     * Construct a new LRUDictionary to hold up to `limit` entries.
     * @param limit The maximum number of entries permitted in the dictionary.
     * @param compareKeys The function used to compare keys within the dictionary.
     */
    constructor(limit, compareKeys) {
        super(limit, new Dictionary_1.Dictionary(compareKeys));
    }
}
exports.LRUDictionary = LRUDictionary;


/***/ }),

/***/ "./lib/Logger.js":
/*!***********************!*\
  !*** ./lib/Logger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Logging */
Object.defineProperty(exports, "__esModule", { value: true });
const BentleyError_1 = __webpack_require__(/*! ./BentleyError */ "./lib/BentleyError.js");
const ClientRequestContext_1 = __webpack_require__(/*! ./ClientRequestContext */ "./lib/ClientRequestContext.js");
const BentleyLoggerCategory_1 = __webpack_require__(/*! ./BentleyLoggerCategory */ "./lib/BentleyLoggerCategory.js");
/** Use to categorize logging messages by severity.
 * @public
 */
var LogLevel;
(function (LogLevel) {
    /** Tracing and debugging - low level */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Information - mid level */
    LogLevel[LogLevel["Info"] = 1] = "Info";
    /** Warnings - high level */
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    /** Errors - highest level */
    LogLevel[LogLevel["Error"] = 3] = "Error";
    /** Higher than any real logging level. This is used to turn a category off. */
    LogLevel[LogLevel["None"] = 4] = "None";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/** Logger allows libraries and apps to report potentially useful information about operations, and it allows apps and users to control
 * how or if the logged information is displayed or collected. See [Learning about Logging]($docs/learning/common/Logging.md).
 * @public
 */
class Logger {
    /** Initialize the logger streams. Should be called at application initialization time. */
    static initialize(logError, logWarning, logInfo, logTrace) {
        Logger._logError = logError;
        Logger._logWarning = logWarning;
        Logger._logInfo = logInfo;
        Logger._logTrace = logTrace;
        Logger.turnOffLevelDefault();
        Logger.turnOffCategories();
    }
    /** Initialize the logger streams to the console. Should be called at application initialization time. */
    static initializeToConsole() {
        // tslint:disable:no-console
        Logger.initialize((category, message, getMetaData) => console.log("Error   |" + category + "| " + message + Logger.formatMetaData(getMetaData)), (category, message, getMetaData) => console.log("Warning |" + category + "| " + message + Logger.formatMetaData(getMetaData)), (category, message, getMetaData) => console.log("Info    |" + category + "| " + message + Logger.formatMetaData(getMetaData)), (category, message, getMetaData) => console.log("Trace   |" + category + "| " + message + Logger.formatMetaData(getMetaData)));
    }
    // WIP: This modifies the incoming Object!
    static addClientRequestContext(metaData) {
        const requestContext = ClientRequestContext_1.ClientRequestContext.current;
        metaData.ActivityId = requestContext.activityId;
        metaData.SessionId = requestContext.sessionId;
        metaData.ApplicationId = requestContext.applicationId;
        metaData.ApplicationVersion = requestContext.applicationVersion;
    }
    /** @internal used by addon */
    static getCurrentClientRequestContext() {
        return ClientRequestContext_1.ClientRequestContext.current;
    }
    /** @internal used by addon */
    static setCurrentClientRequestContext(obj) {
        if (obj === undefined) {
            if (ClientRequestContext_1.ClientRequestContext.current.activityId !== "")
                new ClientRequestContext_1.ClientRequestContext("").enter();
        }
        else {
            if (!(obj instanceof ClientRequestContext_1.ClientRequestContext))
                throw new TypeError(`${JSON.stringify(obj)} -- this is not an instance of ClientRequestContext`);
            obj.enter();
        }
    }
    /** Should the callstack be included when an exception is logged?  */
    static set logExceptionCallstacks(b) {
        Logger._logExceptionCallstacks = b;
    }
    /** Should the callstack be included when an exception is logged?  */
    static get logExceptionCallstacks() {
        return Logger._logExceptionCallstacks;
    }
    /** Compose the metadata for a log message.  */
    static makeMetaData(getMetaData) {
        const metaData = getMetaData ? Object.assign({}, getMetaData()) : {}; // Copy object to avoid mutating the original
        Logger.addClientRequestContext(metaData);
        return metaData;
    }
    /** Format the metadata for a log message.  */
    static formatMetaData(getMetaData) {
        if (!getMetaData)
            return "";
        return " " + JSON.stringify(Logger.makeMetaData(getMetaData));
    }
    /** Set the least severe level at which messages should be displayed by default. Call setLevel to override this default setting for specific categories. */
    static setLevelDefault(minLevel) {
        Logger._minLevel = minLevel;
    }
    /** Set the minimum logging level for the specified category. The minimum level is least severe level at which messages in the
     * specified category should be displayed.
     */
    static setLevel(category, minLevel) {
        Logger._categoryFilter.set(category, minLevel);
    }
    /** Interpret a string as the name of a LogLevel */
    static parseLogLevel(str) {
        switch (str.toUpperCase()) {
            case "EXCEPTION": return LogLevel.Error;
            case "FATAL": return LogLevel.Error;
            case "ERROR": return LogLevel.Error;
            case "WARNING": return LogLevel.Warning;
            case "INFO": return LogLevel.Info;
            case "TRACE": return LogLevel.Trace;
            case "DEBUG": return LogLevel.Trace;
        }
        return LogLevel.None;
    }
    /** Set the log level for multiple categories at once. Also see [[validateProps]] */
    static configureLevels(cfg) {
        Logger.validateProps(cfg);
        if (cfg.defaultLevel !== undefined) {
            this.setLevelDefault(Logger.parseLogLevel(cfg.defaultLevel));
        }
        if (cfg.categoryLevels !== undefined) {
            for (const cl of cfg.categoryLevels) {
                this.setLevel(cl.category, Logger.parseLogLevel(cl.logLevel));
            }
        }
    }
    static isLogLevel(v) {
        return LogLevel.hasOwnProperty(v);
    }
    /** Check that the specified object is a valid LoggerLevelsConfig. This is useful when reading a config from a .json file. */
    static validateProps(config) {
        const validProps = ["defaultLevel", "categoryLevels"];
        for (const prop of Object.keys(config)) {
            if (!validProps.includes(prop))
                throw new BentleyError_1.BentleyError(BentleyError_1.IModelStatus.BadArg, "LoggerLevelsConfig - unrecognized property: " + prop);
            if (prop === "defaultLevel") {
                if (!Logger.isLogLevel(config.defaultLevel))
                    throw new BentleyError_1.BentleyError(BentleyError_1.IModelStatus.BadArg, "LoggerLevelsConfig.defaultLevel must be a LogLevel. Invalid value: " + JSON.stringify(config.defaultLevel));
            }
            else if (prop === "categoryLevels") {
                const value = config[prop];
                if (!Array.isArray(value))
                    throw new BentleyError_1.BentleyError(BentleyError_1.IModelStatus.BadArg, "LoggerLevelsConfig.categoryLevels must be an array. Invalid value: " + JSON.stringify(value));
                for (const item of config[prop]) {
                    if (!item.hasOwnProperty("category") || !item.hasOwnProperty("logLevel"))
                        throw new BentleyError_1.BentleyError(BentleyError_1.IModelStatus.BadArg, "LoggerLevelsConfig.categoryLevels - each item must be a LoggerCategoryAndLevel {category: logLevel:}. Invalid value: " + JSON.stringify(item));
                    if (!Logger.isLogLevel(item.logLevel))
                        throw new BentleyError_1.BentleyError(BentleyError_1.IModelStatus.BadArg, "LoggerLevelsConfig.categoryLevels - each item's logLevel property must be a LogLevel. Invalid value: " + JSON.stringify(item.logLevel));
                }
            }
        }
    }
    /** Get the minimum logging level for the specified category. */
    static getLevel(category) {
        // Prefer the level set for this category specifically
        const minLevelForThisCategory = Logger._categoryFilter.get(category);
        if (minLevelForThisCategory !== undefined)
            return minLevelForThisCategory;
        // Fall back on the level set for the parent of this category.
        const parent = category.lastIndexOf(".");
        if ((parent !== undefined) && (parent !== -1))
            return Logger.getLevel(category.slice(0, parent));
        // Fall back on the default level.
        return Logger._minLevel;
    }
    /** Turns off the least severe level at which messages should be displayed by default.
     * This turns off logging for all messages for which no category minimum level is defined.
     */
    static turnOffLevelDefault() {
        Logger._minLevel = undefined;
    }
    /** Turns off all category level filters previously defined with [[Logger.setLevel]].
     */
    static turnOffCategories() {
        Logger._categoryFilter.clear();
    }
    /** Check if messages in the specified category should be displayed at this level of severity. */
    static isEnabled(category, level) {
        const minLevel = Logger.getLevel(category);
        return (minLevel !== undefined) && (level >= minLevel);
    }
    /** Log the specified message to the **error** stream.
     * @param category  The category of the message.
     * @param message  The message.
     * @param metaData  Optional data for the message
     */
    static logError(category, message, metaData) {
        if (Logger._logError && Logger.isEnabled(category, LogLevel.Error))
            Logger._logError(category, message, metaData);
    }
    static getExceptionMessage(err) {
        let msg = err.toString();
        if (Logger.logExceptionCallstacks && err.stack)
            msg += "\n" + err.stack;
        return msg;
    }
    /** Log the specified exception. The special "ExceptionType" property will be added as metadata,
     * in addition to any other metadata that may be supplied by the caller, unless the
     * metadata supplied by the caller already includes this property.
     * @param category  The category of the message.
     * @param err  The exception object.
     * @param log The logger output function to use - defaults to Logger.logError
     * @param metaData  Optional data for the message
     */
    static logException(category, err, log = Logger.logError, metaData) {
        log(category, Logger.getExceptionMessage(err), () => {
            const mdata = metaData ? metaData() : {};
            if (!mdata.hasOwnProperty("ExceptionType"))
                mdata.ExceptionType = err.constructor.name;
            return mdata;
        });
    }
    /** Log the specified message to the **warning** stream.
     * @param category  The category of the message.
     * @param message  The message.
     * @param metaData  Optional data for the message
     */
    static logWarning(category, message, metaData) {
        if (Logger._logWarning && Logger.isEnabled(category, LogLevel.Warning))
            Logger._logWarning(category, message, metaData);
    }
    /** Log the specified message to the **info** stream.
     * @param category  The category of the message.
     * @param message  The message.
     * @param metaData  Optional data for the message
     */
    static logInfo(category, message, metaData) {
        if (Logger._logInfo && Logger.isEnabled(category, LogLevel.Info))
            Logger._logInfo(category, message, metaData);
    }
    /** Log the specified message to the **trace** stream.
     * @param category  The category of the message.
     * @param message  The message.
     * @param metaData  Optional data for the message
     */
    static logTrace(category, message, metaData) {
        if (Logger._logTrace && Logger.isEnabled(category, LogLevel.Trace))
            Logger._logTrace(category, message, metaData);
    }
}
Logger._categoryFilter = new Map();
Logger._minLevel = undefined;
Logger._logExceptionCallstacks = false;
exports.Logger = Logger;
/** Simple performance diagnostics utility.
 * It measures the time from construction to disposal. On disposal it logs the routine name along with
 * the duration in milliseconds.
 * It also logs the routine name at construction time so that nested calls can be disambiguated.
 *
 * The timings are logged using the log category **Performance** and log severity [[LogLevel.INFO]].
 * Enable those, if you want to capture timings.
 * @public
 */
class PerfLogger {
    constructor(operation, metaData) {
        this._operation = operation;
        this._metaData = metaData;
        if (!Logger.isEnabled(BentleyLoggerCategory_1.BentleyLoggerCategory.Performance, PerfLogger._severity)) {
            this._startTimeStamp = 0;
            return;
        }
        Logger.logInfo(BentleyLoggerCategory_1.BentleyLoggerCategory.Performance, `${this._operation},START`, this._metaData);
        this._startTimeStamp = new Date().getTime(); // take timestamp
    }
    logMessage() {
        const endTimeStamp = new Date().getTime();
        if (!Logger.isEnabled(BentleyLoggerCategory_1.BentleyLoggerCategory.Performance, PerfLogger._severity))
            return;
        Logger.logInfo(BentleyLoggerCategory_1.BentleyLoggerCategory.Performance, `${this._operation},END`, () => {
            const mdata = this._metaData ? this._metaData() : {};
            return Object.assign({}, mdata, { TimeElapsed: endTimeStamp - this._startTimeStamp });
        });
    }
    dispose() {
        this.logMessage();
    }
}
PerfLogger._severity = LogLevel.Info;
exports.PerfLogger = PerfLogger;
/** Helps with macro-substitution
 * @alpha Better name?
 */
class EnvMacroSubst {
    /** Replace macros delimited by ${} assuming that they refer to environment variables. */
    static replace(str, defaultValues) {
        let startMacro;
        let startNext = 0;
        // tslint:disable-next-line:no-conditional-assignment
        while ((startMacro = str.indexOf("${", startNext)) !== -1) {
            const endMacro = str.indexOf("}", startMacro + 2);
            if (endMacro === -1) {
                startNext = startMacro + 2;
                continue;
            }
            const envvar = str.slice(startMacro + 2, endMacro);
            let subst = process.env[envvar];
            if (subst === undefined) {
                if ((defaultValues === undefined) || !defaultValues.hasOwnProperty(envvar)) {
                    startNext = endMacro + 1;
                    continue;
                }
                subst = defaultValues[envvar];
            }
            str = str.slice(0, startMacro) + subst + str.slice(endMacro + 1);
            startNext += startMacro + subst.length;
        }
        return str;
    }
    /** Check if the string contains ${}, indicating the presence of a macro. */
    static containsEnvvars(str) {
        return str.includes("${") && str.includes("}");
    }
    /** Replace macros delimited by ${} that are found in any of the object's properties */
    static replaceInProperties(obj, recurse, defaultValues) {
        for (const prop of Object.keys(obj)) {
            if (typeof obj[prop] === "string") {
                if (EnvMacroSubst.containsEnvvars(obj[prop]))
                    obj[prop] = EnvMacroSubst.replace(obj[prop], defaultValues);
            }
            else if (recurse && (typeof obj[prop] === "object")) {
                EnvMacroSubst.replaceInProperties(obj[prop], true, defaultValues);
            }
        }
    }
    /** Check if the string contains ${}, indicating the presence of a macro. */
    static anyPropertyContainsEnvvars(obj, recurse) {
        for (const prop of Object.keys(obj)) {
            if (typeof obj[prop] === "string") {
                if (EnvMacroSubst.containsEnvvars(obj[prop]))
                    return true;
            }
            else if (recurse && (typeof obj[prop] === "object")) {
                if (EnvMacroSubst.anyPropertyContainsEnvvars(obj[prop], true))
                    return true;
            }
        }
        return false;
    }
}
exports.EnvMacroSubst = EnvMacroSubst;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js */ "../../common/temp/node_modules/.registry.npmjs.org/process/0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/PriorityQueue.js":
/*!******************************!*\
  !*** ./lib/PriorityQueue.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Collections */
Object.defineProperty(exports, "__esModule", { value: true });
const SortedArray_1 = __webpack_require__(/*! ./SortedArray */ "./lib/SortedArray.js");
/**
 * A [priority queue](https://en.wikipedia.org/wiki/Priority_queue) implemented as a heap array.
 * The queue is ordered by an [[OrderedComparator]] function supplied by the user such that the value in the queue that compares less than all other values is always located at the front of the queue.
 * @public
 */
class PriorityQueue {
    /**
     * Constructor
     * @param compare The function used to compare values in the queue. If `compare(x, y)` returns a negative value, then x is placed before y in the queue.
     * @param clone The function used to clone a value for insertion onto the queue. The default implementation simply returns its input.
     * @note If the criterion which control the result of the `compare` function changes, then [[PriorityQueue.sort]] should be used to reorder the queue according to the new criterion.
     */
    constructor(compare, clone = SortedArray_1.shallowClone) {
        this._array = [];
        this._compare = compare;
        this._clone = clone;
    }
    /** The number of values in the queue. */
    get length() { return this._array.length; }
    /** Returns true if the queue contains no values. */
    get isEmpty() { return 0 === this.length; }
    /** Returns an iterator over the contents of the heap suitable for use in `for-of` loops. */
    [Symbol.iterator]() { return this._array[Symbol.iterator](); }
    _swap(a, b) {
        const temp = this._array[a];
        this._array[a] = this._array[b];
        this._array[b] = temp;
    }
    _heapify(index) {
        let candidate = -1;
        while (true) {
            const right = 2 * (index + 1);
            const left = right - 1;
            if (left < this.length && this._compare(this._array[left], this._array[index]) < 0)
                candidate = left;
            else
                candidate = index;
            if (right < this.length && this._compare(this._array[right], this._array[candidate]) < 0)
                candidate = right;
            if (candidate !== index) {
                this._swap(candidate, index);
                index = candidate;
            }
            else {
                break;
            }
        }
    }
    /**
     * Reorders the queue. This function should only (and *always*) be called when the criteria governing the ordering of items on the queue have changed.
     * For example, a priority queue containing graphics sorted by their distance from the camera would need to be reordered when the position of the camera changes.
     */
    sort() {
        for (let i = Math.ceil(this.length / 2); i >= 0; i--)
            this._heapify(i);
    }
    /**
     * Pushes a value onto the queue according to the sorting criterion.
     * @param value The value to insert
     * @returns The inserted value, cloned according to the [[CloneFunction]] supplied to this queue's constructor.
     */
    push(value) {
        const clone = this._clone(value);
        let index = this.length;
        this._array.push(clone);
        while (index !== 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this._compare(this._array[index], this._array[parent]) < 0) {
                this._swap(index, parent);
                index = parent;
            }
            else {
                break;
            }
        }
        return clone;
    }
    /** Returns the element at the front of the queue, or `undefined` if the queue is empty. */
    get front() {
        return this._peek(0);
    }
    /**
     * Removes the front-most element off of the queue and returns it.
     * @returns The front-most element, or undefined if the queue is empty.
     */
    pop() {
        return this._pop(0);
    }
    /** Removes all values from the queue. */
    clear() {
        this._array.length = 0;
    }
    /**
     * Removes the value at the specified index from the queue and reorders the queue.
     * @param index The index of the value to remove
     * @returns the value at the specified index, or undefined if the index is out of range.
     */
    _pop(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        const root = this._array[index];
        this._swap(index, this.length - 1);
        this._array.length--;
        this._heapify(index);
        return root;
    }
    /**
     * Returns the value at the specified index in the queue.
     * @param index The index of the value to retrieve
     * @returns the value at the specified index, or undefined if the index is out of range.
     */
    _peek(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        else
            return this._array[index];
    }
}
exports.PriorityQueue = PriorityQueue;


/***/ }),

/***/ "./lib/SortedArray.js":
/*!****************************!*\
  !*** ./lib/SortedArray.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Collections */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A [[CloneFunction]] that, given a value of type T, returns the same value.
 * Useful as a default argument for functions that can alternatively accept custom logic for cloning values of object type.
 * @param value The value to clone.
 * @returns the input value.
 * @public
 */
function shallowClone(value) { return value; }
exports.shallowClone = shallowClone;
/**
 * Given a sorted array, computes the position at which the specified value should be inserted into the array so that the array remains sorted.
 * @param value The value whose position is to be computed.
 * @param list An array of U already sorted according to the comparison criterion.
 * @param compare The function used to compare the value with elements in `list`.
 * @returns an object with 'index' corresponding to the computed position and 'equal' set to true if an equivalent element already exists at that index.
 * @public
 */
function lowerBound(value, list, compare) {
    let low = 0;
    let high = list.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const comp = compare(value, list[mid]);
        if (0 === comp)
            return { index: mid, equal: true };
        else if (comp < 0)
            high = mid;
        else
            low = mid + 1;
    }
    return { index: low, equal: false };
}
exports.lowerBound = lowerBound;
/**
 * Maintains an array of some type T in sorted order. The ordering is specified by a function supplied
 * by the user.
 * By default, only unique elements are permitted; attempting to insert a new element that compares
 * as equal to an element already in the array will not modify the contents of the array.
 *
 * This allows a SortedArray<T> to behave like a Set<T> where T is an object and equality is determined
 * by some criterion other than object identity.
 *
 * Because the array is always sorted, querying for the presence of an element is performed using binary
 * search, which is more efficient than a linear search for reasonably large arrays.
 *
 * The user can also specify how the SortedArray takes ownership of inserted values, e.g., by cloning them.
 *
 * The comparison function must meet the following criteria, given 'lhs' and 'rhs' of type T:
 *  - If lhs is equal to rhs, returns 0
 *  - If lhs is less than rhs, returns a negative value
 *  - If lhs is greater than rhs, returns a positive value
 *  - If compare(lhs, rhs) returns 0, then compare(rhs, lhs) must also return 0
 *  - If compare(lhs, rhs) returns a negative value, then compare(rhs, lhs) must return a positive value, and vice versa.
 *
 * Modifying an element in a way that affects the comparison function will produce unpredictable results, the
 * most likely of which is that the array will cease to be sorted.
 * @public
 */
class SortedArray {
    /**
     * Construct a new SortedArray<T>.
     * @param compare The function used to compare elements within the array.
     * @param allowDuplicates If true, multiple values comparing equal may exist in the array.
     * @param clone The function invoked to clone a new element for insertion into the array. The default implementation simply returns its input.
     */
    constructor(compare, allowDuplicates = false, clone = shallowClone) {
        this._array = [];
        this._compare = compare;
        this._clone = clone;
        this._allowDuplicates = allowDuplicates;
    }
    /** The number of elements in the array */
    get length() { return this._array.length; }
    /** Returns true if the array contains no elements. */
    get isEmpty() { return 0 === this.length; }
    /** Clears the contents of the sorted array. */
    clear() { this._array.length = 0; }
    /** Returns an iterator over the contents of the array in sorted order, suitable for use in `for-of` loops. */
    [Symbol.iterator]() { return this._array[Symbol.iterator](); }
    /** Extracts the sorted array as a T[] and empties the contents of this SortedArray.
     * @returns the contents of this SortedArray as a T[].
     */
    extractArray() {
        const result = this._array;
        this._array = [];
        return result;
    }
    /**
     * Attempts to insert a new value into the array at a position determined by the ordering.
     * The behavior differs based on whether or not duplicate elements are permitted.
     * If duplicates are **not** permitted, then:
     *  - If an equivalent element already exists in the array, nothing will be inserted and the index of the existing element will be returned.
     *  - Otherwise, the element is inserted and its index is returned.
     * If duplicates **are** permitted, then:
     *  - The element will be inserted in a correct position based on the sorting criterion;
     *  - The position of the element relative to other elements comparing as equal to it is unspecified; and
     *  - The actual index of the newly-inserted element is returned.
     * If the element is to be inserted, then the supplied value will be passed to the clone function supplied to the constructor and the result will be inserted into the array.
     * @param value The value to insert
     * @param onInsert The optional callback method to call if insertion occurs with the inserted value
     * @returns the index in the array of the newly-inserted value, or, if duplicates are not permitted and an equivalent value already exists, the index of the equivalent value.
     */
    insert(value, onInsert) {
        const bound = this.lowerBound(value);
        if (!bound.equal || this._allowDuplicates)
            this._array.splice(bound.index, 0, this._clone(value));
        if (undefined !== onInsert)
            onInsert(value);
        return bound.index;
    }
    /**
     * Removes the first occurrence of a value comparing equal to the specified value from the array.
     * @param value The value of the element to delete
     * @returns the index of the deleted value, or -1 if no such element exists.
     */
    remove(value) {
        const bound = this.lowerBound(value);
        if (bound.equal) {
            this._array.splice(bound.index, 1);
            return bound.index;
        }
        else {
            return -1;
        }
    }
    /**
     * Looks up the index of an element comparing equal to the specified value using binary search.
     * @param value The value to search for
     * @returns the index of the first equivalent element in the array, or -1 if no such element exists.
     */
    indexOf(value) {
        const bound = this.lowerBound(value);
        return bound.equal ? bound.index : -1;
    }
    /**
     * Returns true if this array contains at least one value comparing equal to the specified value.
     * @param value The value to search for
     * @returns true if an equivalent element exists in the array.
     */
    contains(value) {
        return -1 !== this.indexOf(value);
    }
    /**
     * Looks up an element comparing equal to the specified value using binary search.
     * @param value The value to search for
     * @returns the first equivalent element in the array, or undefined if no such element exists.
     */
    findEqual(value) {
        const index = this.indexOf(value);
        return -1 !== index ? this._array[index] : undefined;
    }
    /**
     * Looks up an element by its index in the array.
     * @param index The array index
     * @returns the element corresponding to that position in the array, or undefined if the supplied index exceeds the length of the array.
     */
    get(index) { return index < this.length ? this._array[index] : undefined; }
    /** Apply a function to each element in the array, in sorted order.
     * @param func The function to be applied.
     */
    forEach(func) {
        for (let i = 0; i < this.length; i++)
            func(this._array[i]);
    }
    /**
     * Computes the position at which the specified value should be inserted to maintain sorted order.
     * @param value The value whose position is to be computed.
     * @returns an object with 'index' corresponding to the computed position and 'equal' set to true if an equivalent element already exists at that index.
     */
    lowerBound(value) { return lowerBound(value, this._array, this._compare); }
}
exports.SortedArray = SortedArray;


/***/ }),

/***/ "./lib/StringUtils.js":
/*!****************************!*\
  !*** ./lib/StringUtils.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
// TextDecoder is not supported on all platforms - this is an alternative for utf-8.
// From https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Source/Core/getStringFromTypedArray.js
// which is itself inspired by https://github.com/inexorabletash/text-encoding
/** @internal */
var Utf8ToString;
(function (Utf8ToString) {
    function inRange(a, min, max) { return min <= a && a <= max; }
    function utf8Handler(bytes) {
        let codePoint = 0;
        let bytesSeen = 0;
        let bytesNeeded = 0;
        let lowerBoundary = 0x80;
        let upperBoundary = 0xbf;
        const codePoints = [];
        const length = bytes.length;
        for (let i = 0; i < length; i++) {
            const currentByte = bytes[i];
            // If bytesNeeded = 0, then we are starting a new character
            if (0 === bytesNeeded) {
                // 1 byte ascii character
                if (inRange(currentByte, 0x00, 0x7f)) {
                    // return a code point whose value is byte.
                    codePoints.push(currentByte);
                    continue;
                }
                // 2 byte character
                if (inRange(currentByte, 0xc2, 0xdf)) {
                    bytesNeeded = 1;
                    codePoint = currentByte & 0x1f;
                    continue;
                }
                // 3 byte character
                if (inRange(currentByte, 0xe0, 0xef)) {
                    if (0xe0 === currentByte)
                        lowerBoundary = 0xa0;
                    else if (0xed === currentByte)
                        upperBoundary = 0x9f;
                    bytesNeeded = 2;
                    codePoint = currentByte & 0xf;
                    continue;
                }
                // 4 byte character
                if (inRange(currentByte, 0xf0, 0xf4)) {
                    if (0xf0 === currentByte)
                        lowerBoundary = 0x90;
                    else if (0xf4 === currentByte)
                        upperBoundary = 0x8f;
                    bytesNeeded = 3;
                    codePoint = currentByte & 0x7;
                    continue;
                }
                // invalid utf-8
                return undefined;
            }
            // out of range so ignore the first part(s) of the character and continue with this byte on its own
            if (!inRange(currentByte, lowerBoundary, upperBoundary)) {
                codePoint = bytesNeeded = bytesSeen = 0;
                lowerBoundary = 0x80;
                upperBoundary = 0xbf;
                --i;
                continue;
            }
            // set appropriate boundaries since we've now checked byte 2 of a potential longer character
            lowerBoundary = 0x80;
            upperBoundary = 0xbf;
            // add byte to code point
            codePoint = (codePoint << 6) | (currentByte & 0x3f);
            // We have the correct number of bytes, so push and reset for next character
            ++bytesSeen;
            if (bytesSeen === bytesNeeded) {
                codePoints.push(codePoint);
                codePoint = bytesNeeded = bytesSeen = 0;
            }
        }
        return codePoints;
    }
    function decodeWithFromCharCode(view) {
        let result = "";
        const codePoints = utf8Handler(view);
        if (undefined === codePoints)
            return undefined;
        for (let cp of codePoints) {
            if (cp <= 0xffff) {
                result += String.fromCharCode(cp);
            }
            else {
                cp -= 0x10000;
                result += String.fromCharCode((cp >> 10) + 0xd800, (cp & 0x3ff) + 0xdc00);
            }
        }
        return result;
    }
    Utf8ToString.decodeWithFromCharCode = decodeWithFromCharCode;
})(Utf8ToString || (Utf8ToString = {}));
/** Exposed only for testing the fall-back used when TextDecoder is unsupported.
 * @internal
 */
function utf8ToStringPolyfill(utf8) {
    return Utf8ToString.decodeWithFromCharCode(utf8);
}
exports.utf8ToStringPolyfill = utf8ToStringPolyfill;
// TextDecoder unsupported in Edge at time of writing.
let textDecoderSupported = true;
/** Given an array of bytes containing a utf-8 string, convert to a string.
 * @param utf8: An array of utf-8 characters as a byte array
 * @returns An equivalent string, or undefined if the array does not contain a valid utf-8 string.
 * @note This function uses Javascript's TextDecoder if supported by the browser; otherwise, it
 * falls back to a less efficient polyfill.
 * @public
 */
function utf8ToString(utf8) {
    let decoder;
    if (textDecoderSupported) {
        try {
            decoder = new TextDecoder("utf-8");
        }
        catch (_ex) {
            textDecoderSupported = false;
        }
    }
    if (undefined !== decoder)
        return decoder.decode(utf8);
    else
        return utf8ToStringPolyfill(utf8);
}
exports.utf8ToString = utf8ToString;
/** Given a base-64-encoded string, decode it into an array of bytes.
 * @param base64 The base-64-encoded string.
 * @returns the decoded byte array.
 * @throws DOMException if the length of the input string is not a multiple of 4.
 * @public
 */
function base64StringToUint8Array(base64) {
    return new Uint8Array(atob(base64).split("").map((c) => c.charCodeAt(0)));
}
exports.base64StringToUint8Array = base64StringToUint8Array;


/***/ }),

/***/ "./lib/Time.js":
/*!*********************!*\
  !*** ./lib/Time.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utils */
Object.defineProperty(exports, "__esModule", { value: true });
/** A duration of time. Can be either positive (towards future) or negative (in the past).
 * BeDurations are immutable.
 * @public
 */
class BeDuration {
    constructor(milliseconds = 0) { this._milliseconds = milliseconds; }
    /** The duration in milliseconds */
    get milliseconds() { return this._milliseconds; }
    get seconds() { return this._milliseconds / 1000; }
    /** Create a BeDuration from seconds.
     * @param seconds the number of seconds for this BeDuration
     */
    static fromSeconds(seconds) { return new BeDuration(seconds * 1000); }
    /** Create a BeDuration from milliseconds.
     * @param milliseconds the number of milliseconds for this BeDuration
     */
    static fromMilliseconds(milliseconds) { return new BeDuration(milliseconds); }
    /** Determine whether this BeDuration is 0 seconds */
    get isZero() { return this._milliseconds === 0; }
    /** Determine whether this BeDuration is towards the future */
    get isTowardsFuture() { return this._milliseconds > 0; }
    /** Determine whether this BeDuration is towards the past */
    get isTowardsPast() { return this._milliseconds < 0; }
    /** Subtract a BeDuration from this BeDuration, returning a new BeDuration. */
    minus(other) { return new BeDuration(this._milliseconds - other._milliseconds); }
    /** Add a BeDuration to this BeDuration, returning a new BeDuration */
    plus(other) { return new BeDuration(this._milliseconds + other._milliseconds); }
    /** Utility function to just wait for the specified time
     * @param ms Duration in milliseconds to wait
     * @return Promise that resolves after the specified wait period
     */
    static async wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
exports.BeDuration = BeDuration;
/** A specific point in time relative to the current time.
 * BeTimePoints are used for timing operations. They are created from a BeDuration relative to the "now".
 * BeTimePoints are immutable.
 * @public
 */
class BeTimePoint {
    /** the time in milliseconds, of this BeTimePoint (relative to January 1, 1970 00:00:00 UTC.) */
    get milliseconds() { return this._milliseconds; }
    constructor(milliseconds) { this._milliseconds = milliseconds; }
    /** Create a BeTimePoint from Date.now() */
    static now() { return new BeTimePoint(Date.now()); }
    /** Create a BeTimePoint at a specified duration in the future from now
     *  @param val the duration from now
     */
    static fromNow(val) { return new BeTimePoint(Date.now() + val.milliseconds); }
    /** Create a BeTimePoint at a specified duration in the past before now
     * @param val the duration before now
     */
    static beforeNow(val) { return new BeTimePoint(Date.now() - val.milliseconds); }
    /** Determine whether this BeTimePoint is a time in the future from the time this method is called (it calls now()!) */
    get isInFuture() { return Date.now() < this._milliseconds; }
    /** Determine whether this BeTimePoint is a time that has already passed before the time this method is called (it calls now()!) */
    get isInPast() { return Date.now() > this._milliseconds; }
    /** Determine whether this BeTimePoint happens before another one.
     * @param other the other BeTimePoint.
     */
    before(other) { return this._milliseconds < other._milliseconds; }
    /** Determine whether this BeTimePoint happens after another one.
     * @param other the other BeTimePoint.
     */
    after(other) { return this._milliseconds > other._milliseconds; }
    /** Subtract a BeDuration from this BeTimePoint, returning a new BeTimePoint. This moves this BeTimePoint backwards in time if BeDuration.isTowardsFuture() === true
     * @param duration the duration to subtract.
     */
    minus(duration) { return new BeTimePoint(this._milliseconds - duration.milliseconds); }
    /** Subtract a BeDuration from this BeTimePoint, returning a new BeTimePoint. This moves this BeTimePoint backwards in time if BeDuration.isTowardsFuture() === true
     * @param duration the duration to subtract.
     */
    plus(duration) { return new BeTimePoint(this._milliseconds + duration.milliseconds); }
}
exports.BeTimePoint = BeTimePoint;
/** A StopWatch for timing operations.
 * @public
 */
class StopWatch {
    /** ctor for StopWatch
     * @param description optional string stored with the StopWatch
     * @param startImmediately if true, StopWatch is started when created. Otherwise, call start() explicitly.
     */
    constructor(description, startImmediately = false) {
        this.description = description;
        if (startImmediately)
            this.start();
    }
    /** Get the elapsed time since start() on a running timer. */
    get current() { return BeDuration.fromMilliseconds(BeTimePoint.now().milliseconds - (!!this._start ? this._start.milliseconds : 0)); }
    /** Get the elapsed time, in seconds, since start() on a running timer. */
    get currentSeconds() { return this.current.seconds; }
    /** Get the elapsed time between start() and stop() on this timer. */
    get elapsed() { return BeDuration.fromMilliseconds((!!this._stop ? this._stop.milliseconds : BeTimePoint.now().milliseconds) - (!!this._start ? this._start.milliseconds : 0)); }
    /** Get the elapsed time, in seconds, between start() and stop() on this  timer. */
    get elapsedSeconds() { return this.elapsed.seconds; }
    /** Start the stopwatch. Any future time measurements will be based on this new value. */
    start() { this.reset(); this._start = BeTimePoint.now(); }
    /** Stop the stopwatch so that the duration can be viewed later. */
    stop() { this._stop = BeTimePoint.now(); return this.elapsed; }
    /** Clear the StopWatch */
    reset() { this._start = this._stop = undefined; }
}
exports.StopWatch = StopWatch;


/***/ }),

/***/ "./lib/bentleyjs-core.js":
/*!*******************************!*\
  !*** ./lib/bentleyjs-core.js ***!
  \*******************************/
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
__export(__webpack_require__(/*! ./Assert */ "./lib/Assert.js"));
__export(__webpack_require__(/*! ./BeEvent */ "./lib/BeEvent.js"));
__export(__webpack_require__(/*! ./BentleyError */ "./lib/BentleyError.js"));
__export(__webpack_require__(/*! ./BeSQLite */ "./lib/BeSQLite.js"));
__export(__webpack_require__(/*! ./Compare */ "./lib/Compare.js"));
__export(__webpack_require__(/*! ./Dictionary */ "./lib/Dictionary.js"));
__export(__webpack_require__(/*! ./Disposable */ "./lib/Disposable.js"));
__export(__webpack_require__(/*! ./Id */ "./lib/Id.js"));
__export(__webpack_require__(/*! ./IndexMap */ "./lib/IndexMap.js"));
__export(__webpack_require__(/*! ./JsonUtils */ "./lib/JsonUtils.js"));
__export(__webpack_require__(/*! ./Logger */ "./lib/Logger.js"));
__export(__webpack_require__(/*! ./BentleyLoggerCategory */ "./lib/BentleyLoggerCategory.js"));
__export(__webpack_require__(/*! ./ClientRequestContext */ "./lib/ClientRequestContext.js"));
__export(__webpack_require__(/*! ./LRUMap */ "./lib/LRUMap.js"));
__export(__webpack_require__(/*! ./SortedArray */ "./lib/SortedArray.js"));
__export(__webpack_require__(/*! ./StringUtils */ "./lib/StringUtils.js"));
__export(__webpack_require__(/*! ./Time */ "./lib/Time.js"));
__export(__webpack_require__(/*! ./PriorityQueue */ "./lib/PriorityQueue.js"));
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("bentleyjs-core", "1.0.0");
}
/** @module Utils */
/** @docs-package-description
 * The bentleyjs-core package contains classes to solve problems that are common for both client and server use cases.
 */
/**
 * @docs-group-description BeSQLite
 * Classes for working with SQLite databases. SQLite underlies IModelDb and ECDb - see [Executing ECSQL]($docs/learning/ECSQL.md)
 */
/**
 * @docs-group-description Errors
 * Classes for working with errors.
 */
/**
 * @docs-group-description Events
 * Classes for raising and handling events.
 */
/**
 * @docs-group-description Ids
 * Classes for working with unique identifiers.
 */
/**
 * @docs-group-description Logging
 * Classes for configuring and logging diagnostic messages - see [Learning about Logging]($docs/learning/common/Logging.md)
 */
/**
 * @docs-group-description Collections
 * Specialized, customizable collection classes like priority queues.
 */
/**
 * @docs-group-description Utils
 * Miscellaneous utility classes.
 */


/***/ })

},[["./lib/bentleyjs-core.js","runtime"]]]);
});
//# sourceMappingURL=bentleyjs-core.js.map