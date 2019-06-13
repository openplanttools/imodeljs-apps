(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("imodeljs_frontend"), require("presentation_common"), require("presentation_frontend"), require("ui_components"), require("ui_core"), require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("presentation_components", ["bentleyjs_core", "imodeljs_frontend", "presentation_common", "presentation_frontend", "ui_components", "ui_core", "lodash", "react"], factory);
	else if(typeof exports === 'object')
		exports["presentation_components"] = factory(require("bentleyjs_core"), require("imodeljs_frontend"), require("presentation_common"), require("presentation_frontend"), require("ui_components"), require("ui_core"), require("lodash"), require("react"));
	else
		root["presentation_components"] = factory(root["bentleyjs_core"], root["imodeljs_frontend"], root["presentation_common"], root["presentation_frontend"], root["ui_components"], root["ui_core"], root["_"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_imodeljs_frontend__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_common__, __WEBPACK_EXTERNAL_MODULE__bentley_presentation_frontend__, __WEBPACK_EXTERNAL_MODULE__bentley_ui_components__, __WEBPACK_EXTERNAL_MODULE__bentley_ui_core__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["presentation-components"],{

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/propertygrid/WithUnifiedSelection.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/propertygrid/WithUnifiedSelection.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.pcomponents-property-grid-with-unified-selection {\n  position: relative;\n  height: 100%; }\n  .pcomponents-property-grid-with-unified-selection > span {\n    position: relative;\n    display: block;\n    text-align: center;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/tree/WithFilteringSupport.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/tree/WithFilteringSupport.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n.filteredTree {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .filteredTree .filteredTreeOverlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    background-color: rgba(255, 255, 255, 0.8); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js":
/*!*********************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js":
/*!****************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/urls.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../frontend/lib/selection/SelectionChangeEvent.js":
/*!*********************************************************!*\
  !*** ../frontend/lib/selection/SelectionChangeEvent.js ***!
  \*********************************************************/
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

/***/ "../frontend/lib/selection/SelectionManager.js":
/*!*****************************************************!*\
  !*** ../frontend/lib/selection/SelectionManager.js ***!
  \*****************************************************/
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
const SelectionChangeEvent_1 = __webpack_require__(/*! ./SelectionChangeEvent */ "../frontend/lib/selection/SelectionChangeEvent.js");
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

/***/ "./lib/DataProvidersFactory.js":
/*!*************************************!*\
  !*** ./lib/DataProvidersFactory.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
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
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const DataProvider_1 = __webpack_require__(/*! ./table/DataProvider */ "./lib/table/DataProvider.js");
/**
 * A factory class than can be used to create presentation data providers targeted towards
 * specific use cases.
 *
 * @public
 */
class DataProvidersFactory {
    /** Constructor. */
    constructor(props) {
        this._rulesetsFactory = props && props.rulesetsFactory ? props.rulesetsFactory : new presentation_common_1.RulesetsFactory();
    }
    /**
     * Create a table data provider which returns instances of the same class and
     * having the same property value as the provided property record.
     * @param propertiesProvider A field identifying which property of the record we should use
     * @param record A record whose similar instances should be found
     * @param props Configuration properties for the created provider
     */
    async createSimilarInstancesTableDataProvider(propertiesProvider, record, props) {
        const content = await propertiesProvider.getContent();
        if (!content || content.contentSet.length === 0)
            throw new Error("Properties provider has no content. Where did record come from?");
        const field = content.descriptor.getFieldByName(record.property.name, true);
        if (!field)
            throw new Error("Properties provider doesn't have a property with provided record. Where did record come from?");
        const result = this._rulesetsFactory.createSimilarInstancesRuleset(field, content.contentSet[0]);
        return new TableDataProviderWithDescription(Object.assign({}, props, { imodel: propertiesProvider.imodel, ruleset: result.ruleset, description: result.description }));
    }
}
exports.DataProvidersFactory = DataProvidersFactory;
class TableDataProviderWithDescription extends DataProvider_1.PresentationTableDataProvider {
    constructor(props) {
        const { description } = props, baseProps = __rest(props, ["description"]);
        super(baseProps);
        this.description = description;
    }
    shouldRequestContentForEmptyKeyset() { return true; }
}


/***/ }),

/***/ "./lib/common/ContentBuilder.js":
/*!**************************************!*\
  !*** ./lib/common/ContentBuilder.js ***!
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
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const createArrayValue = (propertyDescription, arrayDescription, values, displayValues) => {
    const records = new Array();
    bentleyjs_core_1.assert(values.length === displayValues.length);
    for (let i = 0; i < values.length; ++i) {
        const memberDescription = {
            name: propertyDescription.name,
            displayLabel: propertyDescription.displayLabel,
            typename: arrayDescription.memberType.typeName,
        };
        const record = createRecord(memberDescription, arrayDescription.memberType, values[i], displayValues[i], true, false);
        records.push(record);
    }
    return {
        valueFormat: imodeljs_frontend_1.PropertyValueFormat.Array,
        items: records,
        itemsTypeName: arrayDescription.memberType.typeName,
    };
};
const createStructValue = (description, valueObj, displayValueObj) => {
    const members = {};
    for (const memberTypeDescription of description.members) {
        const memberPropertyDescription = {
            name: memberTypeDescription.name,
            displayLabel: memberTypeDescription.label,
            typename: memberTypeDescription.type.typeName,
        };
        const record = createRecord(memberPropertyDescription, memberTypeDescription.type, valueObj[memberTypeDescription.name], displayValueObj[memberTypeDescription.name], true, false);
        members[memberTypeDescription.name] = record;
    }
    return {
        valueFormat: imodeljs_frontend_1.PropertyValueFormat.Struct,
        members,
    };
};
const createPrimitiveValue = (value, displayValue) => {
    return {
        valueFormat: imodeljs_frontend_1.PropertyValueFormat.Primitive,
        value,
        displayValue,
    };
};
const createValue = (propertyDescription, typeDescription, isMerged, value, displayValue) => {
    if (undefined === value && undefined === displayValue) {
        return {
            valueFormat: imodeljs_frontend_1.PropertyValueFormat.Primitive,
            value,
            displayValue: "",
        };
    }
    if (!isMerged) {
        if (typeDescription.valueFormat === presentation_common_1.PropertyValueFormat.Array) {
            if (!presentation_common_1.Value.isArray(value) || !presentation_common_1.DisplayValue.isArray(displayValue))
                throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "value and displayValue should both be arrays");
            return createArrayValue(propertyDescription, typeDescription, value, displayValue);
        }
        if (typeDescription.valueFormat === presentation_common_1.PropertyValueFormat.Struct) {
            if (!presentation_common_1.Value.isMap(value) || !presentation_common_1.DisplayValue.isMap(displayValue))
                throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "value and displayValue should both be of map type");
            return createStructValue(typeDescription, value, displayValue);
        }
    }
    return createPrimitiveValue(value, displayValue);
};
const createRecordDescription = (typeDescription, displayValue) => {
    if (presentation_common_1.PropertyValueFormat.Array === typeDescription.valueFormat || presentation_common_1.PropertyValueFormat.Struct === typeDescription.valueFormat)
        return undefined;
    if (presentation_common_1.PropertyValueFormat.Primitive !== typeDescription.valueFormat || !presentation_common_1.DisplayValue.isPrimitive(displayValue))
        throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "displayValue is of wrong type");
    return displayValue.toString();
};
const createRecord = (propertyDescription, typeDescription, value, displayValue, isReadOnly, isMerged, extendedData) => {
    const valueObj = createValue(propertyDescription, typeDescription, isMerged, value, displayValue);
    const record = new imodeljs_frontend_1.PropertyRecord(valueObj, propertyDescription);
    if (displayValue)
        record.description = createRecordDescription(typeDescription, displayValue);
    if (isMerged)
        record.isMerged = true;
    if (isReadOnly)
        record.isReadonly = true;
    if (extendedData)
        record.extendedData = extendedData;
    return record;
};
const createNestedStructRecord = (field, nestedContent, path) => {
    path = path ? [...path] : undefined;
    let pathField;
    if (path && 0 !== path.length) {
        pathField = path.shift();
    }
    const item = new presentation_common_1.Item(nestedContent.primaryKeys, "", "", field.contentClassInfo, nestedContent.values, nestedContent.displayValues, nestedContent.mergedFieldNames);
    const members = {};
    for (const nestedField of field.nestedFields) {
        if (pathField && pathField !== nestedField)
            continue;
        members[nestedField.name] = ContentBuilder.createPropertyRecord(nestedField, item, path);
    }
    const value = {
        valueFormat: imodeljs_frontend_1.PropertyValueFormat.Struct,
        members,
    };
    const record = new imodeljs_frontend_1.PropertyRecord(value, ContentBuilder.createPropertyDescription(field));
    record.isReadonly = field.isReadonly;
    record.isMerged = false;
    return record;
};
const createNestedContentRecord = (field, item, path) => {
    const isMerged = item.isFieldMerged(field.name);
    let value;
    if (isMerged) {
        const displayValue = item.displayValues[field.name];
        if (!presentation_common_1.DisplayValue.isPrimitive(displayValue))
            throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.Error, "displayValue should be primitive");
        // if the value is merged, just take the display value
        value = {
            valueFormat: imodeljs_frontend_1.PropertyValueFormat.Primitive,
            value: undefined,
            displayValue: (undefined !== displayValue) ? displayValue.toString() : "",
        };
    }
    else {
        const dictionaryValue = item.values[field.name];
        if (!presentation_common_1.Value.isNestedContent(dictionaryValue))
            throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.Error, "value should be nested content");
        // nested content value is in NestedContent[] format
        const nestedContentArray = dictionaryValue;
        value = {
            valueFormat: imodeljs_frontend_1.PropertyValueFormat.Array,
            items: nestedContentArray.map((r) => createNestedStructRecord(field, r, path)),
            itemsTypeName: field.type.typeName,
        };
        // if array contains just one value, replace it with the value
        if (1 === value.items.length)
            value = value.items[0].value;
    }
    const record = new imodeljs_frontend_1.PropertyRecord(value, ContentBuilder.createPropertyDescription(field));
    if (isMerged)
        record.isMerged = true;
    if (field.isReadonly || isMerged)
        record.isReadonly = true;
    if (item.extendedData)
        record.extendedData = item.extendedData;
    return record;
};
/**
 * A helper class which creates `ui-components` objects from `presentation` objects.
 * @internal
 */
class ContentBuilder {
    /**
     * Create a property record for specified field and item
     * @param field Content field to create the record for
     * @param item Content item containing the values for `field`
     * @param path Optional path that specifies a path of fields to be
     * included in the record. Only makes sense if `field` is `NestedContentField`.
     * Should start from the first nested field inside `field`.
     */
    static createPropertyRecord(field, item, path) {
        if (field.isNestedContentField())
            return createNestedContentRecord(field, item, path);
        const isValueReadOnly = field.isReadonly || item.isFieldMerged(field.name);
        return createRecord(ContentBuilder.createPropertyDescription(field), field.type, item.values[field.name], item.displayValues[field.name], isValueReadOnly, item.isFieldMerged(field.name), item.extendedData);
    }
    /**
     * Create a property description for the specified field
     * @param field Content field to create description for
     */
    static createPropertyDescription(field) {
        const descr = {
            name: field.name,
            displayLabel: field.label,
            typename: field.type.typeName,
        };
        if (field.editor) {
            descr.editor = { name: field.editor.name, params: [] };
        }
        if (field.type.valueFormat === presentation_common_1.PropertyValueFormat.Primitive && "enum" === field.type.typeName && field.isPropertiesField()) {
            const enumInfo = field.properties[0].property.enumerationInfo;
            descr.enum = {
                choices: enumInfo.choices,
                isStrict: enumInfo.isStrict,
            };
        }
        return descr;
    }
}
exports.ContentBuilder = ContentBuilder;


/***/ }),

/***/ "./lib/common/ContentDataProvider.js":
/*!*******************************************!*\
  !*** ./lib/common/ContentDataProvider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
/** @public */
var CacheInvalidationProps;
(function (CacheInvalidationProps) {
    /**
     * Create CacheInvalidationProps to fully invalidate all caches.
     */
    CacheInvalidationProps.full = () => ({ descriptor: true, descriptorConfiguration: true, size: true, content: true });
})(CacheInvalidationProps || (CacheInvalidationProps = {}));
/**
 * Base class for all presentation-driven content providers.
 * @public
 */
class ContentDataProvider {
    /**
     * Constructor.
     * @param imodel IModel to pull data from.
     * @param ruleset Id of the ruleset to use when requesting content or a ruleset itself.
     * @param displayType The content display type which this provider is going to
     * load data for.
     */
    constructor(imodel, ruleset, displayType) {
        // tslint:disable-next-line:naming-convention
        this.getDefaultContentDescriptor = _.memoize(async () => {
            return presentation_frontend_1.Presentation.presentation.getContentDescriptor(this.createRequestOptions(), this._displayType, this.keys, this.selectionInfo);
        });
        /**
         * Get the content descriptor.
         */
        this.getContentDescriptor = _.memoize(async () => {
            if (!this.shouldRequestContentForEmptyKeyset() && this.keys.isEmpty)
                return undefined;
            const descriptor = await this.getDefaultContentDescriptor();
            if (!descriptor)
                return undefined;
            return this.configureContentDescriptor(descriptor);
        });
        this._getContentAndSize = _.memoize(async (pageOptions) => {
            if (!this.shouldRequestContentForEmptyKeyset() && this.keys.isEmpty)
                return undefined;
            let descriptorOrOverrides;
            if (this.shouldConfigureContentDescriptor()) {
                descriptorOrOverrides = await this.getContentDescriptor();
                if (!descriptorOrOverrides)
                    return undefined;
            }
            else {
                descriptorOrOverrides = this.getDescriptorOverrides();
            }
            const requestSize = undefined !== pageOptions && 0 === pageOptions.start && undefined !== pageOptions.size;
            const options = Object.assign({}, this.createRequestOptions(), { paging: pageOptions });
            if (requestSize)
                return presentation_frontend_1.Presentation.presentation.getContentAndSize(options, descriptorOrOverrides, this.keys);
            const content = await presentation_frontend_1.Presentation.presentation.getContent(options, descriptorOrOverrides, this.keys);
            if (!content)
                return undefined;
            const size = (undefined === pageOptions || undefined === pageOptions.size) ? content.contentSet.length : undefined;
            return { content, size };
        }, createKeyForPageOptions);
        this._rulesetId = (typeof ruleset === "string") ? ruleset : ruleset.id;
        this._displayType = displayType;
        this._imodel = imodel;
        this._keys = new presentation_common_1.KeySet();
        this._previousKeysGuid = this._keys.guid;
        this.invalidateCache(CacheInvalidationProps.full());
        if (typeof ruleset === "object") {
            this.registerRuleset(ruleset); // tslint:disable-line: no-floating-promises
        }
    }
    /** Destructor. Must be called to clean up.  */
    dispose() {
        this._isDisposed = true;
        this.disposeRegisteredRuleset();
    }
    disposeRegisteredRuleset() {
        if (!this._registeredRuleset)
            return;
        this._registeredRuleset.dispose();
        this._registeredRuleset = undefined;
    }
    async registerRuleset(ruleset) {
        this._registeredRuleset = await presentation_frontend_1.Presentation.presentation.rulesets().add(ruleset);
        if (this._isDisposed) {
            // ensure we don't keep a hanging registered ruleset if the data provider
            // gets destroyed before the ruleset finishes registration
            this.disposeRegisteredRuleset();
        }
    }
    /** Display type used to format content */
    get displayType() { return this._displayType; }
    /**
     * Paging options for obtaining content.
     *
     * Presentation data providers, when used with paging, have ability to save one backend request for size / count. That
     * can only be achieved when `pagingSize` property is set on the data provider and it's value matches size which is used when
     * requesting content. To help developers notice this problem, data provider emits a warning similar to this:
     * ```
     * ContentDataProvider.pagingSize doesn't match pageOptions in ContentDataProvider.getContent call. Make sure you set provider's pagingSize to avoid excessive backend requests.
     * ```
     * To fix the issue, developers should make sure the page size used for requesting data is also set for the data provider:
     * ```TS
     * const pageSize = 10;
     * const provider = new ContentDataProvider(imodel, rulesetId, displayType);
     * provider.pagingSize = pageSize;
     * // only one backend request is made for the two following requests:
     * provider.getContentSetSize();
     * provider.getContent({ start: 0, size: pageSize });
     * ```
     */
    get pagingSize() { return this._pagingSize; }
    set pagingSize(value) { this._pagingSize = value; }
    /** IModel to pull data from */
    get imodel() { return this._imodel; }
    set imodel(imodel) {
        if (this._imodel === imodel)
            return;
        this._imodel = imodel;
        this.invalidateCache(CacheInvalidationProps.full());
    }
    /** Id of the ruleset to use when requesting content */
    get rulesetId() { return this._rulesetId; }
    set rulesetId(value) {
        if (this._rulesetId === value)
            return;
        this._rulesetId = value;
        this.invalidateCache(CacheInvalidationProps.full());
    }
    /** Keys defining what to request content for */
    get keys() { return this._keys; }
    set keys(keys) {
        if (keys.guid === this._previousKeysGuid)
            return;
        this._keys = keys;
        this._previousKeysGuid = this._keys.guid;
        this.invalidateCache(CacheInvalidationProps.full());
    }
    /** Information about selection event that results in content change */
    get selectionInfo() { return this._selectionInfo; }
    set selectionInfo(info) {
        if (this._selectionInfo === info)
            return;
        this._selectionInfo = info;
        this.invalidateCache(CacheInvalidationProps.full());
    }
    /**
     * Invalidates cached content.
     */
    invalidateCache(props) {
        if (props.descriptor && this.getDefaultContentDescriptor)
            this.getDefaultContentDescriptor.cache.clear();
        if (props.descriptorConfiguration && this.getContentDescriptor)
            this.getContentDescriptor.cache.clear();
        if ((props.content || props.size) && this._getContentAndSize)
            this._getContentAndSize.cache.clear();
    }
    createRequestOptions() {
        return {
            imodel: this._imodel,
            rulesetId: this._rulesetId,
        };
    }
    /**
     * Called to configure the content descriptor. This is the place where concrete
     * provider implementations can control things like sorting, filtering, hiding fields, etc.
     *
     * The default method implementation takes care of hiding properties. Subclasses
     * should call the base class method to not lose this functionality.
     */
    configureContentDescriptor(descriptor) {
        const fields = descriptor.fields.slice();
        const fieldsCount = fields.length;
        for (let i = fieldsCount - 1; i >= 0; --i) {
            const field = fields[i];
            if (this.shouldExcludeFromDescriptor(field))
                fields.splice(i, 1);
        }
        return new presentation_common_1.Descriptor(Object.assign({}, descriptor, { fields }));
    }
    /**
     * Called to check whether the content descriptor needs advanced configuration. If yes,
     * descriptor is requested from the backend and `configureContentDescriptor()` is called
     * to configure it before requesting content. If not, the provider calls
     * `getDescriptorOverrides()` to get basic configuration and immediately requests
     * content - that saves a trip to the backend.
     */
    shouldConfigureContentDescriptor() { return true; }
    /**
     * Called to check if content should be requested even when `keys` is empty. If this
     * method returns `false`, then content is not requested and this saves a trip
     * to the backend.
     */
    shouldRequestContentForEmptyKeyset() { return false; }
    /** Called to check whether the field should be excluded from the descriptor. */
    shouldExcludeFromDescriptor(field) { return this.isFieldHidden(field); }
    /** Called to check whether the field should be hidden. */
    isFieldHidden(_field) { return false; }
    /**
     * Get the content descriptor overrides.
     *
     * **Note:** The method is only called if `shouldConfigureContentDescriptor()` returns `false` -
     * in that case when requesting content we skip requesting descriptor and instead just pass
     * overrides.
     */
    getDescriptorOverrides() {
        return {
            displayType: this.displayType,
            contentFlags: 0,
            hiddenFieldNames: [],
        };
    }
    /**
     * Get the number of content records.
     */
    async getContentSetSize() {
        const paging = undefined !== this.pagingSize ? { start: 0, size: this.pagingSize } : undefined;
        const contentAndSize = await this._getContentAndSize(paging);
        if (undefined !== contentAndSize)
            return contentAndSize.size;
        return 0;
    }
    /**
     * Get the content.
     * @param pageOptions Paging options.
     */
    async getContent(pageOptions) {
        if (undefined !== pageOptions && pageOptions.size !== this.pagingSize) {
            const msg = `ContentDataProvider.pagingSize doesn't match pageOptions in ContentDataProvider.getContent call.
        Make sure you set provider's pagingSize to avoid excessive backend requests.`;
            bentleyjs_core_1.Logger.logWarning("Presentation.Components", msg);
        }
        const contentAndSize = await this._getContentAndSize(pageOptions);
        if (undefined !== contentAndSize)
            return contentAndSize.content;
        return undefined;
    }
}
exports.ContentDataProvider = ContentDataProvider;
const createKeyForPageOptions = (pageOptions) => {
    if (!pageOptions)
        return "0/0";
    return `${(pageOptions.start) ? pageOptions.start : 0}/${(pageOptions.size) ? pageOptions.size : 0}`;
};


/***/ }),

/***/ "./lib/common/PageContainer.js":
/*!*************************************!*\
  !*** ./lib/common/PageContainer.js ***!
  \*************************************/
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
 * Container which helps with paging by manages specified number of pages
 * and disposing others
 * @internal
 */
class PageContainer {
    /** Constructor */
    constructor(pageSize, maxPages) {
        this._pages = [];
        this._pageSize = pageSize;
        this._maxPages = maxPages;
    }
    /** Get page size used by this container */
    get pageSize() { return this._pageSize; }
    set pageSize(value) {
        if (this._pageSize === value)
            return;
        this._pageSize = value;
        this.invalidatePages();
    }
    /** Drop all pages */
    invalidatePages() { this._pages = []; }
    /** Get a page containing an item with the specified index. */
    getPage(itemIndex) {
        for (const page of this._pages) {
            if (page.position.start <= itemIndex && itemIndex <= page.position.end)
                return page;
        }
        return undefined;
    }
    /**
     * Get item at the specified index or undefined if
     * there's no item with such index loaded.
     */
    getItem(index) {
        const page = this.getPage(index);
        if (!page || !page.items)
            return undefined;
        return page.items[index - page.position.start];
    }
    /** Get index of the specified item */
    getIndex(item) {
        for (const page of this._pages) {
            if (!page.items)
                continue;
            for (let i = 0; i < page.items.length; ++i) {
                const row = page.items[i];
                if (row === item)
                    return page.position.start + i;
            }
        }
        return -1;
    }
    /** Reserve space for a page */
    reservePage(index) {
        // find the place for the new page to insert
        let pageIndex = 0;
        for (const p of this._pages) {
            if (p.position.start >= index)
                break;
            pageIndex++;
        }
        const pageBefore = (pageIndex > 0) ? this._pages[pageIndex - 1] : undefined;
        const pageAfter = (pageIndex < this._pages.length) ? this._pages[pageIndex] : undefined;
        // determine the start of the page for the specified index
        let pageStartIndex = index;
        let pageSize = this.pageSize;
        if (undefined !== pageAfter && pageStartIndex > pageAfter.position.start - this.pageSize) {
            pageStartIndex = pageAfter.position.start - this.pageSize;
        }
        if (undefined !== pageBefore && pageBefore.position.end > pageStartIndex) {
            pageStartIndex = pageBefore.position.end + 1;
        }
        if (pageBefore && pageAfter && (pageAfter.position.start - pageBefore.position.end) < pageSize)
            pageSize = pageAfter.position.start - pageBefore.position.end - 1;
        if (pageStartIndex < 0) {
            pageSize += pageStartIndex;
            pageStartIndex = 0;
        }
        if (pageSize <= 0)
            throw new Error("Invalid page size");
        // insert the new page
        const position = {
            index: pageIndex,
            start: pageStartIndex,
            end: pageStartIndex + pageSize - 1,
        };
        const page = { position };
        this._pages.splice(position.index, 0, page);
        this.reIndexPages(position.index);
        this.disposeFarthestPages(position);
        return page;
    }
    reIndexPages(startIndex) {
        for (let i = startIndex + 1; i < this._pages.length; ++i)
            this._pages[i].position.index = i;
    }
    disposeFarthestPages(position) {
        if (this._pages.length > this._maxPages) {
            // we drop the page that's furthest from the newly created one
            const distanceToFront = position.index;
            const distanceToBack = this._pages.length - position.index - 1;
            if (distanceToBack > distanceToFront)
                this._pages.pop();
            else
                this._pages.splice(0, 1);
        }
    }
}
exports.PageContainer = PageContainer;


/***/ }),

/***/ "./lib/common/StyleHelper.js":
/*!***********************************!*\
  !*** ./lib/common/StyleHelper.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Core */
Object.defineProperty(exports, "__esModule", { value: true });
const colors = {
    AliceBlue: 0xF0F8FFFF,
    AntiqueWhite: 0xFAEBD7FF,
    Aqua: 0x00FFFFFF,
    Aquamarine: 0x7FFFD4FF,
    Azure: 0xF0FFFFFF,
    Beige: 0xF5F5DCFF,
    Bisque: 0xFFE4C4FF,
    Black: 0x000000FF,
    BlanchedAlmond: 0xFFEBCDFF,
    Blue: 0x0000FFFF,
    BlueViolet: 0x8A2BE2FF,
    Brown: 0xA52A2AFF,
    BurlyWood: 0xDEB887FF,
    CadetBlue: 0x5F9EA0FF,
    Chartreuse: 0x7FFF00FF,
    Chocolate: 0xD2691EFF,
    Coral: 0xFF7F50FF,
    CornflowerBlue: 0x6495EDFF,
    Cornsilk: 0xFFF8DCFF,
    Crimson: 0xDC143CFF,
    Cyan: 0x00FFFFFF,
    DarkBlue: 0x00008BFF,
    DarkCyan: 0x008B8BFF,
    DarkGoldenrod: 0xB8860BFF,
    DarkGray: 0xA9A9A9FF,
    DarkGreen: 0x006400FF,
    DarkKhaki: 0xBDB76BFF,
    DarkMagenta: 0x8B008BFF,
    DarkOliveGreen: 0x556B2FFF,
    DarkOrange: 0xFF8C00FF,
    DarkOrchid: 0x9932CCFF,
    DarkRed: 0x8B0000FF,
    DarkSalmon: 0xE9967AFF,
    DarkSeaGreen: 0x8FBC8BFF,
    DarkSlateBlue: 0x483D8BFF,
    DarkSlateGray: 0x2F4F4FFF,
    DarkTurquoise: 0x00CED1FF,
    DarkViolet: 0x9400D3FF,
    DeepPink: 0xFF1493FF,
    DeepSkyBlue: 0x00BFFFFF,
    DimGray: 0x696969FF,
    DodgerBlue: 0x1E90FFFF,
    Firebrick: 0xB22222FF,
    FloralWhite: 0xFFFAF0FF,
    ForestGreen: 0x228B22FF,
    Fuchsia: 0xFF00FFFF,
    Gainsboro: 0xDCDCDCFF,
    GhostWhite: 0xF8F8FFFF,
    Gold: 0xFFD700FF,
    Goldenrod: 0xDAA520FF,
    Gray: 0x808080FF,
    Green: 0x008000FF,
    GreenYellow: 0xADFF2FFF,
    Honeydew: 0xF0FFF0FF,
    HotPink: 0xFF69B4FF,
    IndianRed: 0xCD5C5CFF,
    Indigo: 0x4B0082FF,
    Ivory: 0xFFFFF0FF,
    Khaki: 0xF0E68CFF,
    Lavender: 0xE6E6FAFF,
    LavenderBlush: 0xFFF0F5FF,
    LawnGreen: 0x7CFC00FF,
    LemonChiffon: 0xFFFACDFF,
    LightBlue: 0xADD8E6FF,
    LightCoral: 0xF08080FF,
    LightCyan: 0xE0FFFFFF,
    LightGoldenrodYellow: 0xFAFAD2FF,
    LightGray: 0xD3D3D3FF,
    LightGreen: 0x90EE90FF,
    LightPink: 0xFFB6C1FF,
    LightSalmon: 0xFFA07AFF,
    LightSeaGreen: 0x20B2AAFF,
    LightSkyBlue: 0x87CEFAFF,
    LightSlateGray: 0x778899FF,
    LightSteelBlue: 0xB0C4DEFF,
    LightYellow: 0xFFFFE0FF,
    Lime: 0x00FF00FF,
    LimeGreen: 0x32CD32FF,
    Linen: 0xFAF0E6FF,
    Magenta: 0xFF00FFFF,
    Maroon: 0x800000FF,
    MediumAquamarine: 0x66CDAAFF,
    MediumBlue: 0x0000CDFF,
    MediumOrchid: 0xBA55D3FF,
    MediumPurple: 0x9370DBFF,
    MediumSeaGreen: 0x3CB371FF,
    MediumSlateBlue: 0x7B68EEFF,
    MediumSpringGreen: 0x00FA9AFF,
    MediumTurquoise: 0x48D1CCFF,
    MediumVioletRed: 0xC71585FF,
    MidnightBlue: 0x191970FF,
    MintCream: 0xF5FFFAFF,
    MistyRose: 0xFFE4E1FF,
    Moccasin: 0xFFE4B5FF,
    NavajoWhite: 0xFFDEADFF,
    Navy: 0x000080FF,
    OldLace: 0xFDF5E6FF,
    Olive: 0x808000FF,
    OliveDrab: 0x6B8E23FF,
    Orange: 0xFFA500FF,
    OrangeRed: 0xFF4500FF,
    Orchid: 0xDA70D6FF,
    PaleGoldenrod: 0xEEE8AAFF,
    PaleGreen: 0x98FB98FF,
    PaleTurquoise: 0xAFEEEEFF,
    PaleVioletRed: 0xDB7093FF,
    PapayaWhip: 0xFFEFD5FF,
    PeachPuff: 0xFFDAB9FF,
    Peru: 0xCD853FFF,
    Pink: 0xFFC0CBFF,
    Plum: 0xDDA0DDFF,
    PowderBlue: 0xB0E0E6FF,
    Purple: 0x800080FF,
    Red: 0xFF0000FF,
    RosyBrown: 0xBC8F8FFF,
    RoyalBlue: 0x4169E1FF,
    SaddleBrown: 0x8B4513FF,
    Salmon: 0xFA8072FF,
    SandyBrown: 0xF4A460FF,
    SeaGreen: 0x2E8B57FF,
    SeaShell: 0xFFF5EEFF,
    Sienna: 0xA0522DFF,
    Silver: 0xC0C0C0FF,
    SkyBlue: 0x87CEEBFF,
    SlateBlue: 0x6A5ACDFF,
    SlateGray: 0x708090FF,
    Snow: 0xFFFAFAFF,
    SpringGreen: 0x00FF7FFF,
    SteelBlue: 0x4682B4FF,
    Tan: 0xD2B48CFF,
    Teal: 0x008080FF,
    Thistle: 0xD8BFD8FF,
    Tomato: 0xFF6347FF,
    Transparent: 0xFFFFFFFF,
    Turquoise: 0x40E0D0FF,
    Violet: 0xEE82EEFF,
    Wheat: 0xF5DEB3FF,
    White: 0xFFFFFFFF,
    WhiteSmoke: 0xF5F5F5FF,
    Yellow: 0xFFFF00FF,
    YellowGreen: 0x9ACD32FF,
};
/** @internal */
class StyleHelper {
    static get availableColors() { return colors; }
    static getColor(name) {
        name = name.trim();
        if (name.indexOf("#") === 0 && name.length === 7)
            return StyleHelper.getColorFromHex(name);
        else if (name.toUpperCase().indexOf("RGB(") === 0)
            return StyleHelper.getColorFromRGB(name);
        return StyleHelper.getColorFromColorName(name);
    }
    /** Get color number from a named color. @see `colors` map for available names. */
    static getColorFromColorName(name) {
        if (colors.hasOwnProperty(name))
            return colors[name];
        throw new Error("Invalid color name");
    }
    /** Get color number from an RGB format: `rgb(r,g,b)` */
    static getColorFromRGB(name) {
        name = name.substring(name.indexOf("(") + 1, name.indexOf(")"));
        const components = name.split(",");
        const r = Number(components[0]);
        const g = Number(components[1]);
        const b = Number(components[2]);
        return r << 24 | g << 16 | b << 8 | 255;
    }
    /** Get color number from HEX format: `#ff3300` */
    static getColorFromHex(name) {
        name = name.substr(1, 7);
        let color = parseInt("0x" + name, 16);
        color = color << 8 | 255;
        return color;
    }
    static isBold(node) { return node.fontStyle ? (node.fontStyle.indexOf("Bold") !== -1) : false; }
    static isItalic(node) { return node.fontStyle ? (node.fontStyle.indexOf("Italic") !== -1) : false; }
    static getForeColor(node) { return node.foreColor ? StyleHelper.getColor(node.foreColor) : undefined; }
    static getBackColor(node) { return node.backColor ? StyleHelper.getColor(node.backColor) : undefined; }
}
exports.StyleHelper = StyleHelper;


/***/ }),

/***/ "./lib/common/Utils.js":
/*!*****************************!*\
  !*** ./lib/common/Utils.js ***!
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
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
/**
 * A sorting algorithm for `Array.sort` that sorts items by priority.
 * Higher priority items appear first in the list.
 *
 * @internal
 */
exports.prioritySortFunction = (a, b) => {
    if (a.priority > b.priority)
        return -1;
    if (a.priority < b.priority)
        return 1;
    return 0;
};
let localizationNamespace;
/**
 * Translate a string with the specified id from `PresentationComponents`
 * localization namespace. The `stringId` should not contain namespace - it's
 * prepended automatically.
 *
 * @internal
 */
exports.translate = async (stringId) => {
    const localizationNamespaceName = "PresentationComponents";
    if (!localizationNamespace) {
        localizationNamespace = presentation_frontend_1.Presentation.i18n.registerNamespace(localizationNamespaceName);
    }
    await localizationNamespace.readFinished;
    stringId = `${localizationNamespaceName}:${stringId}`;
    return presentation_frontend_1.Presentation.i18n.translate(stringId);
};
/**
 * Creates a display name for the supplied component
 * @internal
 */
exports.getDisplayName = (component) => {
    if (component.displayName)
        return component.displayName;
    if (component.name)
        return component.name;
    return "Component";
};


/***/ }),

/***/ "./lib/labels/LabelsProvider.js":
/*!**************************************!*\
  !*** ./lib/labels/LabelsProvider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module DisplayLabels */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
/**
 * Presentation Rules-driven labels provider implementation.
 * @public
 */
class LabelsProvider {
    /** Constructor. */
    constructor(imodel) {
        // tslint:disable-next-line:naming-convention
        this.getMemoizedLabel = _.memoize(this.getLabelInternal, (k) => JSON.stringify(k));
        // tslint:disable-next-line:naming-convention
        this.getMemoizedLabels = _.memoize(this.getLabelsInternal, (k) => JSON.stringify(k));
        this.imodel = imodel;
    }
    async getLabelInternal(key) {
        return presentation_frontend_1.Presentation.presentation.getDisplayLabel({ imodel: this.imodel }, key);
    }
    /**
     * Returns label for the specified instance key
     * @param key Key of instance to get label for
     * @param memoize Should the result the memoized by the provider.
     */
    async getLabel(key, memoize = false) {
        return memoize ? this.getMemoizedLabel(key) : this.getLabelInternal(key);
    }
    async getLabelsInternal(keys) {
        return presentation_frontend_1.Presentation.presentation.getDisplayLabels({ imodel: this.imodel }, keys);
    }
    /**
     * Returns labels for the specified instance keys.
     * @param keys Keys of instances to get labels for
     * @param memoize Should the result be memoized by the provider.
     */
    async getLabels(keys, memoize = false) {
        return memoize ? this.getMemoizedLabels(keys) : this.getLabelsInternal(keys);
    }
}
exports.LabelsProvider = LabelsProvider;


/***/ }),

/***/ "./lib/presentation-components.js":
/*!****************************************!*\
  !*** ./lib/presentation-components.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Components */
Object.defineProperty(exports, "__esModule", { value: true });
var ContentBuilder_1 = __webpack_require__(/*! ./common/ContentBuilder */ "./lib/common/ContentBuilder.js");
exports.ContentBuilder = ContentBuilder_1.ContentBuilder;
var ContentDataProvider_1 = __webpack_require__(/*! ./common/ContentDataProvider */ "./lib/common/ContentDataProvider.js");
exports.ContentDataProvider = ContentDataProvider_1.ContentDataProvider;
var DataProvidersFactory_1 = __webpack_require__(/*! ./DataProvidersFactory */ "./lib/DataProvidersFactory.js");
exports.DataProvidersFactory = DataProvidersFactory_1.DataProvidersFactory;
/** @module PropertyGrid */
var DataProvider_1 = __webpack_require__(/*! ./propertygrid/DataProvider */ "./lib/propertygrid/DataProvider.js");
exports.PresentationPropertyDataProvider = DataProvider_1.PresentationPropertyDataProvider;
var WithUnifiedSelection_1 = __webpack_require__(/*! ./propertygrid/WithUnifiedSelection */ "./lib/propertygrid/WithUnifiedSelection.js");
exports.propertyGridWithUnifiedSelection = WithUnifiedSelection_1.propertyGridWithUnifiedSelection;
/** @module Table */
var DataProvider_2 = __webpack_require__(/*! ./table/DataProvider */ "./lib/table/DataProvider.js");
exports.PresentationTableDataProvider = DataProvider_2.PresentationTableDataProvider;
var WithUnifiedSelection_2 = __webpack_require__(/*! ./table/WithUnifiedSelection */ "./lib/table/WithUnifiedSelection.js");
exports.tableWithUnifiedSelection = WithUnifiedSelection_2.tableWithUnifiedSelection;
/** @module Tree */
var DataProvider_3 = __webpack_require__(/*! ./tree/DataProvider */ "./lib/tree/DataProvider.js");
exports.PresentationTreeDataProvider = DataProvider_3.PresentationTreeDataProvider;
var WithUnifiedSelection_3 = __webpack_require__(/*! ./tree/WithUnifiedSelection */ "./lib/tree/WithUnifiedSelection.js");
exports.treeWithUnifiedSelection = WithUnifiedSelection_3.treeWithUnifiedSelection;
var WithFilteringSupport_1 = __webpack_require__(/*! ./tree/WithFilteringSupport */ "./lib/tree/WithFilteringSupport.js");
exports.treeWithFilteringSupport = WithFilteringSupport_1.treeWithFilteringSupport;
/** @module Viewport */
var WithUnifiedSelection_4 = __webpack_require__(/*! ./viewport/WithUnifiedSelection */ "./lib/viewport/WithUnifiedSelection.js");
exports.viewWithUnifiedSelection = WithUnifiedSelection_4.viewWithUnifiedSelection;
/** @module DisplayLabels */
var LabelsProvider_1 = __webpack_require__(/*! ./labels/LabelsProvider */ "./lib/labels/LabelsProvider.js");
exports.LabelsProvider = LabelsProvider_1.LabelsProvider;
/* istanbul ignore next */
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("presentation-components", "1.0.0");
}


/***/ }),

/***/ "./lib/propertygrid/DataProvider.js":
/*!******************************************!*\
  !*** ./lib/propertygrid/DataProvider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module PropertyGrid */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const imodeljs_frontend_1 = __webpack_require__(/*! @bentley/imodeljs-frontend */ "@bentley/imodeljs-frontend");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const ContentDataProvider_1 = __webpack_require__(/*! ../common/ContentDataProvider */ "./lib/common/ContentDataProvider.js");
const ContentBuilder_1 = __webpack_require__(/*! ../common/ContentBuilder */ "./lib/common/ContentBuilder.js");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
const favoritesCategoryName = "Favorite";
let favoritesCategoryPromise;
const getFavoritesCategory = async () => {
    if (!favoritesCategoryPromise) {
        favoritesCategoryPromise = Promise.all([
            Utils_1.translate("categories.favorite.label"),
            Utils_1.translate("categories.favorite.description"),
        ]).then(([label, description]) => ({
            name: favoritesCategoryName,
            label,
            description,
            priority: Number.MAX_VALUE,
            expand: true,
        }));
    }
    return favoritesCategoryPromise;
};
const isValueEmpty = (v) => {
    switch (v.valueFormat) {
        case imodeljs_frontend_1.PropertyValueFormat.Primitive:
            return (null === v.value || undefined === v.value || "" === v.value);
        case imodeljs_frontend_1.PropertyValueFormat.Array:
            return 0 === v.items.length;
        case imodeljs_frontend_1.PropertyValueFormat.Struct:
            return 0 === Object.keys(v.members).length;
    }
    /* istanbul ignore next */
    throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "Unknown property value format");
};
class PropertyDataBuilder {
    constructor(descriptor, item, includeWithNoValues, callbacks) {
        this._descriptor = descriptor;
        this._contentItem = item;
        this._callbacks = callbacks;
        this._includeWithNoValues = includeWithNoValues;
    }
    async createCategorizedFields() {
        const favoritesCategory = await getFavoritesCategory();
        const categories = new Array();
        const categoryFields = {};
        const includeField = (category, field, onlyIfFavorite) => {
            if (field.isNestedContentField()) {
                includeFields(field.nestedFields, true);
            }
            if (onlyIfFavorite && favoritesCategoryName !== field.category.name)
                return;
            if (!categoryFields.hasOwnProperty(category.name)) {
                categories.push(category);
                categoryFields[category.name] = new Array();
            }
            categoryFields[category.name].push(field);
        };
        const includeFields = (fields, onlyIfFavorite) => {
            fields.forEach((field) => {
                if (favoritesCategoryName !== field.category.name && this._callbacks.isFavorite(field))
                    includeField(favoritesCategory, field, false);
                includeField(field.category, field, onlyIfFavorite);
            });
        };
        includeFields(this._descriptor.fields, false);
        // sort categories
        this._callbacks.sortCategories(categories);
        // sort fields
        for (const category of categories)
            this._callbacks.sortFields(category, categoryFields[category.name]);
        return {
            categories,
            fields: categoryFields,
        };
    }
    createRecord(field) {
        let pathToRootField;
        if (field.parent) {
            pathToRootField = [field];
            let parentField = field.parent;
            while (parentField.parent) {
                pathToRootField.push(parentField);
                parentField = parentField.parent;
            }
            field = parentField;
            pathToRootField.reverse();
        }
        return ContentBuilder_1.ContentBuilder.createPropertyRecord(field, this._contentItem, pathToRootField);
    }
    createCategorizedRecords(fields) {
        const result = {
            categories: [],
            records: {},
        };
        for (const category of fields.categories) {
            const records = new Array();
            const addRecord = (field, record) => {
                if (category.name !== favoritesCategoryName) {
                    // note: favorite fields should be displayed even if they're hidden
                    if (this._callbacks.isHidden(field))
                        return;
                    if (!this._includeWithNoValues && !record.isMerged && isValueEmpty(record.value))
                        return;
                }
                records.push(record);
            };
            const handleNestedContentRecord = (field, record) => {
                if (1 === fields.fields[category.name].length) {
                    // note: special handling if this is the only field in the category
                    if (record.value.valueFormat === imodeljs_frontend_1.PropertyValueFormat.Array && 0 === record.value.items.length) {
                        // don't include empty arrays at all
                        return;
                    }
                    if (record.value.valueFormat === imodeljs_frontend_1.PropertyValueFormat.Struct) {
                        // for structs just include all their members
                        for (const nestedField of field.nestedFields)
                            addRecord(nestedField, record.value.members[nestedField.name]);
                        return;
                    }
                }
                addRecord(field, record);
            };
            // create/add records for each field
            for (const field of fields.fields[category.name]) {
                const record = this.createRecord(field);
                if (field.isNestedContentField())
                    handleNestedContentRecord(field, record);
                else
                    addRecord(field, record);
            }
            if (records.length === 0) {
                // don't create the category if it has no records
                continue;
            }
            result.categories.push({
                name: category.name,
                label: category.label,
                expand: category.expand,
            });
            result.records[category.name] = records;
        }
        return result;
    }
    async buildPropertyData() {
        const fields = await this.createCategorizedFields();
        const records = this.createCategorizedRecords(fields);
        return Object.assign({}, records, { label: this._contentItem.label, description: this._contentItem.classInfo ? this._contentItem.classInfo.label : undefined });
    }
}
/**
 * Presentation Rules-driven property data provider implementation.
 * @public
 */
class PresentationPropertyDataProvider extends ContentDataProvider_1.ContentDataProvider {
    /** Constructor. */
    constructor(imodel, rulesetId) {
        super(imodel, rulesetId, presentation_common_1.DefaultContentDisplayTypes.PropertyPane);
        this.onDataChanged = new ui_components_1.PropertyDataChangeEvent();
        /**
         * Returns property data.
         */
        // tslint:disable-next-line:naming-convention
        this.getMemoizedData = _.memoize(async () => {
            const content = await this.getContent();
            if (!content || 0 === content.contentSet.length)
                return createDefaultPropertyData();
            const contentItem = content.contentSet[0];
            const callbacks = {
                isFavorite: this.isFieldFavorite,
                isHidden: this.isFieldHidden,
                sortCategories: this.sortCategories,
                sortFields: this.sortFields,
            };
            const builder = new PropertyDataBuilder(content.descriptor, contentItem, this.includeFieldsWithNoValues, callbacks);
            return builder.buildPropertyData();
        });
        this._includeFieldsWithNoValues = true;
    }
    invalidateCache(props) {
        super.invalidateCache(props);
        if (this.getMemoizedData)
            this.getMemoizedData.cache.clear();
        if (this.onDataChanged)
            this.onDataChanged.raiseEvent();
    }
    /**
     * Tells the data provider to _not_ request descriptor and instead configure
     * content using `getDescriptorOverrides()` call
     */
    shouldConfigureContentDescriptor() { return false; }
    /**
     * Provides content configuration for the property grid
     */
    getDescriptorOverrides() {
        return Object.assign({}, super.getDescriptorOverrides(), { contentFlags: presentation_common_1.ContentFlags.ShowLabels | presentation_common_1.ContentFlags.MergeResults });
    }
    /**
     * Hides the computed display label field from the list of properties
     */
    isFieldHidden(field) {
        return field.name === "/DisplayLabel/";
    }
    /**
     * Should fields with no values be included in the property list. No value means:
     * - For *primitive* fields: null, undefined, "" (empty string)
     * - For *array* fields: [] (empty array)
     * - For *struct* fields: {} (object with no members)
     */
    get includeFieldsWithNoValues() { return this._includeFieldsWithNoValues; }
    set includeFieldsWithNoValues(value) {
        if (this._includeFieldsWithNoValues === value)
            return;
        this._includeFieldsWithNoValues = value;
        this.invalidateCache({ content: true });
    }
    /** Should the specified field be included in the favorites category. */
    isFieldFavorite(_field) { return false; }
    /**
     * Sorts the specified list of categories by priority. May be overriden
     * to supply a different sorting algorithm.
     */
    sortCategories(categories) {
        categories.sort(Utils_1.prioritySortFunction);
    }
    /**
     * Sorts the specified list of fields by priority. May be overriden
     * to supply a different sorting algorithm.
     */
    sortFields(_category, fields) {
        fields.sort(Utils_1.prioritySortFunction);
    }
    /**
     * Returns property data.
     */
    async getData() {
        return this.getMemoizedData();
    }
}
exports.PresentationPropertyDataProvider = PresentationPropertyDataProvider;
const createDefaultPropertyData = () => ({
    label: "",
    categories: [],
    records: {},
});


/***/ }),

/***/ "./lib/propertygrid/WithUnifiedSelection.js":
/*!**************************************************!*\
  !*** ./lib/propertygrid/WithUnifiedSelection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
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
const React = __webpack_require__(/*! react */ "react");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
__webpack_require__(/*! ./WithUnifiedSelection.scss */ "./lib/propertygrid/WithUnifiedSelection.scss");
const DEFAULT_REQUESTED_CONTENT_INSTANCES_LIMIT = 100;
/**
 * A HOC component that adds unified selection functionality to the supplied
 * property grid component.
 *
 * **Note:** it is required for the property grid to use [[IPresentationPropertyDataProvider]]
 *
 * @public
 */
// tslint:disable-next-line: variable-name naming-convention
function propertyGridWithUnifiedSelection(PropertyGridComponent) {
    return class WithUnifiedSelection extends React.Component {
        constructor(props) {
            super(props);
            // tslint:disable-next-line:naming-convention
            this.onSelectionChanged = (evt) => {
                this.updateDataProviderSelection(evt.level);
            };
            this.state = {};
            this.initLocalizedStrings(); // tslint:disable-line:no-floating-promises
        }
        async initLocalizedStrings() {
            const localizedStrings = {
                tooManyElements: await Utils_1.translate("property-grid.too-many-elements-selected"),
            };
            if (this._isMounted)
                this.setState({ localizedStrings });
        }
        /** Returns the display name of this component */
        static get displayName() { return `WithUnifiedSelection(${Utils_1.getDisplayName(PropertyGridComponent)})`; }
        /** Get selection handler used by this property grid */
        get selectionHandler() { return this._selectionHandler; }
        /** Get ID of the ruleset used by this unified selection property grid */
        get rulesetId() { return this.props.dataProvider.rulesetId; }
        /** Get imodel used by this property grid to query property data */
        get imodel() { return this.props.dataProvider.imodel; }
        // tslint:disable-next-line: naming-convention
        get requestedContentInstancesLimit() {
            if (undefined === this.props.requestedContentInstancesLimit)
                return DEFAULT_REQUESTED_CONTENT_INSTANCES_LIMIT;
            return this.props.requestedContentInstancesLimit;
        }
        componentDidMount() {
            const name = `PropertyGrid_${counter++}`;
            const imodel = this.props.dataProvider.imodel;
            const rulesetId = this.props.dataProvider.rulesetId;
            this._isMounted = true;
            this._selectionHandler = this.props.selectionHandler
                ? this.props.selectionHandler : new presentation_frontend_1.SelectionHandler(presentation_frontend_1.Presentation.selection, name, imodel, rulesetId);
            this._selectionHandler.onSelect = this.onSelectionChanged;
            this.updateDataProviderSelection();
        }
        componentWillUnmount() {
            if (this._selectionHandler)
                this._selectionHandler.dispose();
            this._isMounted = false;
        }
        componentDidUpdate() {
            if (this._selectionHandler) {
                this._selectionHandler.imodel = this.props.dataProvider.imodel;
                this._selectionHandler.rulesetId = this.props.dataProvider.rulesetId;
            }
        }
        getSelectedKeys(selectionLevel) {
            if (undefined === selectionLevel) {
                const availableLevels = this._selectionHandler.getSelectionLevels();
                if (0 === availableLevels.length)
                    return undefined;
                selectionLevel = availableLevels[availableLevels.length - 1];
            }
            for (let i = selectionLevel; i >= 0; i--) {
                const selection = this._selectionHandler.getSelection(i);
                if (!selection.isEmpty)
                    return new presentation_common_1.KeySet(selection);
            }
            return new presentation_common_1.KeySet();
        }
        setDataProviderSelection(selection) {
            this.props.dataProvider.keys = selection;
        }
        updateDataProviderSelection(selectionLevel) {
            const selection = this.getSelectedKeys(selectionLevel);
            if (selection) {
                if (selection.size > this.requestedContentInstancesLimit) {
                    this.setState({ overLimit: true });
                    this.setDataProviderSelection(new presentation_common_1.KeySet());
                }
                else {
                    this.setState({ overLimit: false });
                    this.setDataProviderSelection(selection);
                }
            }
        }
        render() {
            const _a = this.props, { selectionHandler, // do not bleed our props
            requestedContentInstancesLimit } = _a, props = __rest(_a, ["selectionHandler", "requestedContentInstancesLimit"]);
            let content;
            if (this.state.overLimit) {
                content = (React.createElement("span", null, this.state.localizedStrings ? this.state.localizedStrings.tooManyElements : undefined));
            }
            else {
                content = (React.createElement(PropertyGridComponent, Object.assign({}, props)));
            }
            return (React.createElement("div", { className: "pcomponents-property-grid-with-unified-selection" }, content));
        }
    };
}
exports.propertyGridWithUnifiedSelection = propertyGridWithUnifiedSelection;
let counter = 1;


/***/ }),

/***/ "./lib/propertygrid/WithUnifiedSelection.scss":
/*!****************************************************!*\
  !*** ./lib/propertygrid/WithUnifiedSelection.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./WithUnifiedSelection.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/propertygrid/WithUnifiedSelection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/table/DataProvider.js":
/*!***********************************!*\
  !*** ./lib/table/DataProvider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Table */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const ContentDataProvider_1 = __webpack_require__(/*! ../common/ContentDataProvider */ "./lib/common/ContentDataProvider.js");
const ContentBuilder_1 = __webpack_require__(/*! ../common/ContentBuilder */ "./lib/common/ContentBuilder.js");
const PageContainer_1 = __webpack_require__(/*! ../common/PageContainer */ "./lib/common/PageContainer.js");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
/**
 * The default number of rows in a single page requested by [[PresentationTableDataProvider]]
 * @public
 */
exports.TABLE_DATA_PROVIDER_DEFAULT_PAGE_SIZE = 20;
/**
 * The default number of pages cached by [[PresentationTableDataProvider]]
 * @public
 */
exports.TABLE_DATA_PROVIDER_DEFAULT_CACHED_PAGES_COUNT = 5;
/**
 * Presentation Rules-driven table data provider.
 * @public
 */
class PresentationTableDataProvider extends ContentDataProvider_1.ContentDataProvider {
    /** Constructor. */
    constructor(props) {
        super(props.imodel, props.ruleset, props.displayType || presentation_common_1.DefaultContentDisplayTypes.Grid);
        this._sortDirection = ui_core_1.SortDirection.NoSort;
        this.onColumnsChanged = new ui_components_1.TableDataChangeEvent();
        this.onRowsChanged = new ui_components_1.TableDataChangeEvent();
        /**
         * Returns column definitions.
         */
        this.getColumns = _.memoize(async () => {
            const descriptor = await this.getContentDescriptor();
            return createColumns(descriptor);
        });
        this._pages = new PageContainer_1.PageContainer(props.pageSize || exports.TABLE_DATA_PROVIDER_DEFAULT_PAGE_SIZE, props.cachedPagesCount || exports.TABLE_DATA_PROVIDER_DEFAULT_CACHED_PAGES_COUNT);
        this.pagingSize = props.pageSize || exports.TABLE_DATA_PROVIDER_DEFAULT_PAGE_SIZE;
    }
    /** Get key of ECInstance that's represented by the supplied row */
    getRowKey(row) {
        return presentation_common_1.InstanceKey.fromJSON(JSON.parse(row.key));
    }
    /**
     * `ECExpression` for filtering data in the table.
     */
    get filterExpression() { return this._filterExpression; }
    set filterExpression(value) {
        if (this._filterExpression === value)
            return;
        this._filterExpression = value;
        this.invalidateCache({ descriptorConfiguration: true, size: true, content: true });
    }
    /**
     * Get the column which is used for sorting data in the table.
     */
    get sortColumn() {
        return (async () => {
            if (!this._sortColumnKey)
                return undefined;
            const columns = await this.getColumns();
            return columns.find((col) => (col.key === this._sortColumnKey));
        })();
    }
    /**
     * Get key of the column which is used for sorting data in the table.
     */
    get sortColumnKey() { return this._sortColumnKey; }
    /**
     * Get sort direction. Defaults to `SortDirection.NoSort` which means
     * undefined sorting.
     */
    get sortDirection() { return this._sortDirection; }
    /**
     * Sorts the data in this data provider.
     * @param columnIndex Index of the column to sort on.
     * @param sortDirection Sorting direction.
     */
    async sort(columnIndex, sortDirection) {
        const columns = await this.getColumns();
        const sortingColumn = columns[columnIndex];
        if (!sortingColumn)
            throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "Invalid column index");
        this._sortColumnKey = sortingColumn.key;
        this._sortDirection = sortDirection;
        this.invalidateCache({ descriptorConfiguration: true, content: true });
    }
    invalidateCache(props) {
        super.invalidateCache(props);
        if (props.descriptor) {
            this._filterExpression = undefined;
            this._sortColumnKey = undefined;
            this._sortDirection = ui_core_1.SortDirection.NoSort;
        }
        if (props.descriptor || props.descriptorConfiguration) {
            if (this.getColumns)
                this.getColumns.cache.clear();
            if (this.onColumnsChanged)
                this.onColumnsChanged.raiseEvent();
        }
        if (props.size || props.content) {
            if (this._pages)
                this._pages.invalidatePages();
            if (this.onRowsChanged)
                this.onRowsChanged.raiseEvent();
        }
    }
    /** Handles filtering and sorting. */
    configureContentDescriptor(descriptor) {
        const configured = super.configureContentDescriptor(descriptor);
        if (this._sortColumnKey) {
            configured.sortingField = descriptor.getFieldByName(this._sortColumnKey);
            switch (this._sortDirection) {
                case ui_core_1.SortDirection.Descending:
                    configured.sortDirection = presentation_common_1.SortDirection.Descending;
                    break;
                case ui_core_1.SortDirection.Ascending:
                    configured.sortDirection = presentation_common_1.SortDirection.Ascending;
                    break;
                default:
                    configured.sortDirection = undefined;
            }
        }
        configured.filterExpression = this._filterExpression;
        return configured;
    }
    /**
     * Get the total number of rows.
     */
    async getRowsCount() {
        return this.getContentSetSize();
    }
    /**
     * Get a single row.
     * @param rowIndex Index of the row to return.
     */
    async getRow(rowIndex) {
        let page = this._pages.getPage(rowIndex);
        if (!page) {
            page = this._pages.reservePage(rowIndex);
            page.promise = this.getContent({
                start: page.position.start,
                size: page.position.end - page.position.start + 1,
            }).then((c) => {
                page.items = createRows(c);
            }).catch((e) => {
                throw e;
            });
        }
        await page.promise;
        return page.items[rowIndex - page.position.start];
    }
    /**
     * Try to get a loaded row. Returns undefined if the row is not currently loaded.
     * @param rowIndex Index of the row to return.
     */
    getLoadedRow(rowIndex) {
        return this._pages.getItem(rowIndex);
    }
}
exports.PresentationTableDataProvider = PresentationTableDataProvider;
const createColumns = (descriptor) => {
    if (!descriptor)
        return [];
    const sortedFields = [...descriptor.fields].sort(Utils_1.prioritySortFunction);
    return sortedFields.map((field) => createColumn(field));
};
const createColumn = (field) => {
    return {
        key: field.name,
        label: field.label,
        sortable: true,
        editable: !field.isReadonly,
        filterable: (field.type.valueFormat === presentation_common_1.PropertyValueFormat.Primitive),
    };
};
const createRows = (c) => {
    if (!c)
        return [];
    return c.contentSet.map((item) => createRow(c.descriptor, item));
};
const createRow = (descriptor, item) => {
    if (item.primaryKeys.length !== 1) {
        // note: for table view we expect the record to always have only 1 primary key
        throw new presentation_common_1.PresentationError(presentation_common_1.PresentationStatus.InvalidArgument, "item.primaryKeys");
    }
    return {
        key: JSON.stringify(item.primaryKeys[0]),
        cells: descriptor.fields.map((field) => ({
            key: field.name,
            record: ContentBuilder_1.ContentBuilder.createPropertyRecord(field, item),
        })),
    };
};


/***/ }),

/***/ "./lib/table/WithUnifiedSelection.js":
/*!*******************************************!*\
  !*** ./lib/table/WithUnifiedSelection.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
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
const React = __webpack_require__(/*! react */ "react");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
/**
 * A HOC component that adds unified selection functionality to the supplied
 * table component.
 *
 * **Note:** it is required for the table to use [[PresentationTableDataProvider]]
 *
 * @public
 */
// tslint:disable-next-line: variable-name naming-convention
function tableWithUnifiedSelection(TableComponent) {
    return class WithUnifiedSelection extends React.Component {
        constructor(props) {
            super(props);
            // tslint:disable-next-line:naming-convention
            this.onSelectionChanged = (evt) => {
                this.displaySelection(evt.level);
            };
            // tslint:disable-next-line:naming-convention
            this.isRowSelected = (row) => {
                // give consumers a chance to tell if row is selected
                if (this.baseProps.isRowSelected)
                    return this.baseProps.isRowSelected(row);
                if (!this._selectionHandler)
                    return false;
                const selection = this._selectionHandler.getSelection(this._boundarySelectionLevel);
                return selection.has(this.props.dataProvider.getRowKey(row));
            };
            // tslint:disable-next-line:naming-convention
            this.onRowsSelected = async (rows, replace) => {
                // give consumers a chance to handle selection changes and either
                // continue default handling (by returning `true`) or abort (by
                // returning `false`)
                if (this.baseProps.onRowsSelected && !(await this.baseProps.onRowsSelected(rows, replace)))
                    return true;
                if (this._selectionHandler) {
                    const keys = await this.getRowKeys(rows);
                    if (replace)
                        this._selectionHandler.replaceSelection(keys, this._boundarySelectionLevel);
                    else
                        this._selectionHandler.addToSelection(keys, this._boundarySelectionLevel);
                }
                return true;
            };
            // tslint:disable-next-line:naming-convention
            this.onRowsDeselected = async (rows) => {
                // give consumers a chance to handle selection changes and either
                // continue default handling (by returning `true`) or abort (by
                // returning `false`)
                if (this.baseProps.onRowsDeselected && !(await this.baseProps.onRowsDeselected(rows)))
                    return true;
                if (this._selectionHandler) {
                    const keys = await this.getRowKeys(rows);
                    this._selectionHandler.removeFromSelection(keys, this._boundarySelectionLevel);
                }
                return true;
            };
            this._base = React.createRef();
            this._boundarySelectionLevel = getBoundarySelectionLevelFromProps(props);
        }
        /** Returns the display name of this component */
        static get displayName() { return `WithUnifiedSelection(${Utils_1.getDisplayName(TableComponent)})`; }
        /** Get selection handler used by this table */
        get selectionHandler() { return this._selectionHandler; }
        get imodel() { return this.props.dataProvider.imodel; }
        get rulesetId() { return this.props.dataProvider.rulesetId; }
        // tslint:disable-next-line:naming-convention
        get baseProps() { return this.props; }
        componentDidMount() {
            const name = `Table_${counter++}`;
            const imodel = this.props.dataProvider.imodel;
            const rulesetId = this.props.dataProvider.rulesetId;
            this._selectionHandler = this.props.selectionHandler
                ? this.props.selectionHandler : new presentation_frontend_1.SelectionHandler(presentation_frontend_1.Presentation.selection, name, imodel, rulesetId);
            this._selectionHandler.onSelect = this.onSelectionChanged;
            this.displaySelection();
        }
        componentWillUnmount() {
            if (this._selectionHandler)
                this._selectionHandler.dispose();
        }
        componentDidUpdate() {
            this._boundarySelectionLevel = getBoundarySelectionLevelFromProps(this.props);
            if (this._selectionHandler) {
                this._selectionHandler.imodel = this.props.dataProvider.imodel;
                this._selectionHandler.rulesetId = this.props.dataProvider.rulesetId;
            }
        }
        loadDataForSelection(selectionLevel) {
            for (let level = selectionLevel; level >= 0; level--) {
                const selection = this._selectionHandler.getSelection(level);
                if (!selection.isEmpty) {
                    this.props.dataProvider.keys = new presentation_common_1.KeySet(selection);
                    return;
                }
            }
            this.props.dataProvider.keys = new presentation_common_1.KeySet();
        }
        highlightSelectedRows(_selection) {
            if (this._base.current)
                this._base.current.updateSelectedRows();
        }
        displaySelection(selectionLevel) {
            if (undefined === selectionLevel) {
                let availableLevels = this._selectionHandler.getSelectionLevels();
                if (this.props.dataProvider.keys.isEmpty) {
                    // if the data provider has no set keys, we have to find the right selection
                    // level and set it's selection to data provider. we take the first highest
                    // available selection level that's smaller than boundary or equal to 0
                    availableLevels = availableLevels.reverse();
                    for (const level of availableLevels) {
                        if (level < this._boundarySelectionLevel || level === 0) {
                            selectionLevel = level;
                            break;
                        }
                    }
                }
                else {
                    selectionLevel = (availableLevels.length > 0) ? availableLevels[availableLevels.length - 1] : undefined;
                }
            }
            if (undefined === selectionLevel)
                return;
            if (selectionLevel < this._boundarySelectionLevel) {
                // we get here when table should react to selection change by reloading the data
                // based on the new selection
                this.loadDataForSelection(selectionLevel);
            }
            else if (selectionLevel === this._boundarySelectionLevel) {
                // we get here when table should react to selection change by
                // highlighting selected instances
                const selection = this._selectionHandler.getSelection(selectionLevel);
                this.highlightSelectedRows(selection);
            }
        }
        async getRowKeys(rows) {
            var e_1, _a;
            const keys = new Array();
            try {
                for (var rows_1 = __asyncValues(rows), rows_1_1; rows_1_1 = await rows_1.next(), !rows_1_1.done;) {
                    const row = rows_1_1.value;
                    keys.push(this.props.dataProvider.getRowKey(row));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) await _a.call(rows_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return keys;
        }
        render() {
            const _a = this.props, { selectionHandler, selectionLevel, // do not bleed our props
            isRowSelected, onRowsSelected, onRowsDeselected } = _a, // take out the props we're overriding
            props = __rest(_a, ["selectionHandler", "selectionLevel", "isRowSelected", "onRowsSelected", "onRowsDeselected"]) /* tslint:disable-line: trailing-comma */ // pass-through props
            ;
            return (React.createElement(TableComponent, Object.assign({ ref: this._base, isRowSelected: this.isRowSelected, onRowsSelected: this.onRowsSelected, onRowsDeselected: this.onRowsDeselected }, props)));
        }
    };
}
exports.tableWithUnifiedSelection = tableWithUnifiedSelection;
let counter = 1;
function getBoundarySelectionLevelFromProps(props) {
    return (undefined !== props.selectionLevel) ? props.selectionLevel : 1;
}


/***/ }),

/***/ "./lib/tree/DataProvider.js":
/*!**********************************!*\
  !*** ./lib/tree/DataProvider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(/*! lodash */ "lodash");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./lib/tree/Utils.js");
/**
 * Presentation Rules-driven tree data provider.
 * @public
 */
class PresentationTreeDataProvider {
    /**
     * Constructor.
     * @param imodel Connection to an imodel to pull data from.
     * @param rulesetId Id of the ruleset used by this data provider.
     */
    constructor(imodel, rulesetId) {
        this._getNodesAndCount = _.memoize(async (parentNode, pageOptions) => {
            const requestCount = undefined !== pageOptions && 0 === pageOptions.start && undefined !== pageOptions.size;
            const parentKey = parentNode ? this.getNodeKey(parentNode) : undefined;
            if (!requestCount) {
                const allNodes = await presentation_frontend_1.Presentation.presentation.getNodes(Object.assign({}, this.createRequestOptions(), { paging: Utils_1.pageOptionsUiToPresentation(pageOptions) }), parentKey);
                return { nodes: parentNode ? Utils_1.createTreeNodeItems(allNodes, parentNode.id) : Utils_1.createTreeNodeItems(allNodes), count: allNodes.length };
            }
            const nodesResponse = await presentation_frontend_1.Presentation.presentation.getNodesAndCount(Object.assign({}, this.createRequestOptions(), { paging: Utils_1.pageOptionsUiToPresentation(pageOptions) }), parentKey);
            return { nodes: parentNode ? Utils_1.createTreeNodeItems(nodesResponse.nodes, parentNode.id) : Utils_1.createTreeNodeItems(nodesResponse.nodes), count: nodesResponse.count };
        }, MemoizationHelpers.getNodesKeyResolver);
        /**
         * Returns filtered node paths.
         * @param filter Filter.
         */
        this.getFilteredNodePaths = async (filter) => {
            return presentation_frontend_1.Presentation.presentation.getFilteredNodePaths(this.createRequestOptions(), filter);
        };
        this._rulesetId = rulesetId;
        this._imodel = imodel;
    }
    /** Id of the ruleset used by this data provider */
    get rulesetId() { return this._rulesetId; }
    /** [[IModelConnection]] used by this data provider */
    get imodel() { return this._imodel; }
    /**
     * Paging options for obtaining nodes.
     *
     * Presentation data providers, when used with paging, have ability to save one backend request for size / count. That
     * can only be achieved when `pagingSize` property is set on the data provider and it's value matches size which is used when
     * requesting nodes. To help developers notice this problem, data provider emits a warning similar to this:
     * ```
     * PresentationTreeDataProvider.pagingSize doesn't match pageOptions in PresentationTreeDataProvider.getNodes call. Make sure you set PresentationTreeDataProvider.pagingSize to avoid excessive backend requests.
     * ```
     * To fix the issue, developers should make sure the page size used for requesting data is also set for the data provider:
     * ```TS
     * const pageSize = 10;
     * const provider = new TreeDataProvider(imodel, rulesetId);
     * provider.pagingSize = pageSize;
     * // only one backend request is made for the two following requests:
     * provider.getNodesCount();
     * provider.getNodes({ start: 0, size: pageSize });
     * ```
     */
    get pagingSize() { return this._pagingSize; }
    set pagingSize(value) { this._pagingSize = value; }
    /** Called to get extended options for node requests */
    createRequestOptions() {
        return {
            imodel: this._imodel,
            rulesetId: this._rulesetId,
        };
    }
    /**
     * Returns a [[NodeKey]] from given [[TreeNodeItem]].
     * **Warning:** the `node` must be created by this data provider.
     */
    getNodeKey(node) {
        return node[Utils_1.PRESENTATION_TREE_NODE_KEY];
    }
    /**
     * Returns nodes
     * @param parentNode The parent node to return children for.
     * @param pageOptions Information about the requested page of data.
     */
    async getNodes(parentNode, pageOptions) {
        if (undefined !== pageOptions && pageOptions.size !== this.pagingSize) {
            const msg = `PresentationTreeDataProvider.pagingSize doesn't match pageOptions in PresentationTreeDataProvider.getNodes call.
        Make sure you set PresentationTreeDataProvider.pagingSize to avoid excessive backend requests.`;
            bentleyjs_core_1.Logger.logWarning("Presentation.Components", msg);
        }
        if (parentNode)
            return (await this._getNodesAndCount(parentNode, pageOptions)).nodes;
        return (await this._getNodesAndCount(undefined, pageOptions)).nodes;
    }
    /**
     * Returns the total number of nodes
     * @param parentNode The parent node to return children count for.
     */
    async getNodesCount(parentNode) {
        const pageOptions = undefined !== this.pagingSize ? { start: 0, size: this.pagingSize } : undefined;
        return (await this._getNodesAndCount(parentNode, pageOptions)).count;
    }
}
exports.PresentationTreeDataProvider = PresentationTreeDataProvider;
class MemoizationHelpers {
    static createKeyForPageOptions(pageOptions) {
        if (!pageOptions)
            return "0/0";
        return `${(pageOptions.start) ? pageOptions.start : 0}/${(pageOptions.size) ? pageOptions.size : 0}`;
    }
    static createKeyForTreeNodeItem(item) { return item ? item.id : ""; }
    static getNodesKeyResolver(parent, pageOptions) {
        return `${MemoizationHelpers.createKeyForTreeNodeItem(parent)}/${MemoizationHelpers.createKeyForPageOptions(pageOptions)}`;
    }
}


/***/ }),

/***/ "./lib/tree/FilteredDataProvider.js":
/*!******************************************!*\
  !*** ./lib/tree/FilteredDataProvider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const ui_components_1 = __webpack_require__(/*! @bentley/ui-components */ "@bentley/ui-components");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./lib/tree/Utils.js");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
/**
 * Rules-driven presentation tree data provider that returns filtered results.
 * @internal
 */
class FilteredPresentationTreeDataProvider {
    constructor(parentDataProvider, filter, paths) {
        this._filteredResultMatches = [];
        this.getActiveMatch = lodash_1.memoize((index) => {
            let activeMatch;
            if (index <= 0)
                return undefined;
            let i = 1;
            for (const node of this._filteredResultMatches) {
                if (index < i + node.matchesCount) {
                    activeMatch = {
                        nodeId: node.id,
                        matchIndex: index - i,
                    };
                    break;
                }
                i += node.matchesCount;
            }
            return activeMatch;
        });
        this._parentDataProvider = parentDataProvider;
        this._filter = filter;
        const hierarchy = new Map();
        this.createHierarchy(paths, hierarchy);
        this._filteredDataProvider = new ui_components_1.SimpleTreeDataProvider(hierarchy);
    }
    get rulesetId() { return this._parentDataProvider.rulesetId; }
    get imodel() { return this._parentDataProvider.imodel; }
    get filter() { return this._filter; }
    createHierarchy(paths, hierarchy, parentId) {
        const treeNodes = [];
        for (let i = 0; i < paths.length; i++) {
            const node = Utils_1.createTreeNodeItem(paths[i].node, parentId);
            if (paths[i].filteringData && paths[i].filteringData.matchesCount)
                this._filteredResultMatches.push({ id: node.id, matchesCount: paths[i].filteringData.matchesCount });
            if (paths[i].children.length !== 0) {
                this.createHierarchy(paths[i].children, hierarchy, node.id);
                node.hasChildren = true;
                node.autoExpand = true;
            }
            else
                node.hasChildren = false;
            treeNodes[i] = node;
        }
        hierarchy.set(parentId, treeNodes);
    }
    /** Count filtering results. Including multiple possible matches within node labels */
    countFilteringResults(nodePaths) {
        let resultCount = 0;
        // Loops through root level only
        for (const path of nodePaths) {
            if (path.filteringData)
                resultCount += path.filteringData.matchesCount + path.filteringData.childMatchesCount;
        }
        return resultCount;
    }
    async getNodes(parent, pageOptions) {
        return this._filteredDataProvider.getNodes(parent, pageOptions);
    }
    async getNodesCount(parent) {
        return this._filteredDataProvider.getNodesCount(parent);
    }
    async getFilteredNodePaths(filter) {
        return this._parentDataProvider.getFilteredNodePaths(filter);
    }
    getNodeKey(node) {
        return this._parentDataProvider.getNodeKey(node);
    }
}
exports.FilteredPresentationTreeDataProvider = FilteredPresentationTreeDataProvider;


/***/ }),

/***/ "./lib/tree/Utils.js":
/*!***************************!*\
  !*** ./lib/tree/Utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const StyleHelper_1 = __webpack_require__(/*! ../common/StyleHelper */ "./lib/common/StyleHelper.js");
const ui_core_1 = __webpack_require__(/*! @bentley/ui-core */ "@bentley/ui-core");
/** @internal */
exports.PRESENTATION_TREE_NODE_KEY = "__presentation-components/key";
/** @internal */
exports.createTreeNodeItems = (nodes, parentId) => {
    const list = new Array();
    for (const node of nodes)
        list.push(exports.createTreeNodeItem(node, parentId));
    return list;
};
/** @internal */
exports.createTreeNodeItem = (node, parentId) => {
    const item = {
        id: [...node.key.pathFromRoot].reverse().join("/"),
        label: node.label,
    };
    item[exports.PRESENTATION_TREE_NODE_KEY] = node.key;
    const style = {};
    const colorOverrides = {};
    if (parentId)
        item.parentId = parentId;
    if (node.description)
        item.description = node.description;
    if (node.hasChildren)
        item.hasChildren = true;
    if (node.imageId)
        item.icon = node.imageId;
    if (StyleHelper_1.StyleHelper.isBold(node))
        style.isBold = true;
    if (StyleHelper_1.StyleHelper.isItalic(node))
        style.isItalic = true;
    const foreColor = StyleHelper_1.StyleHelper.getForeColor(node);
    if (foreColor)
        colorOverrides.color = foreColor;
    const backColor = StyleHelper_1.StyleHelper.getBackColor(node);
    if (backColor)
        colorOverrides.backgroundColor = backColor;
    if (node.isCheckboxVisible) {
        item.isCheckboxVisible = true;
        if (node.isChecked)
            item.checkBoxState = ui_core_1.CheckBoxState.On;
        if (!node.isCheckboxEnabled)
            item.isCheckboxDisabled = true;
    }
    if (Object.keys(colorOverrides).length > 0)
        style.colorOverrides = colorOverrides;
    if (Object.keys(style).length > 0)
        item.style = style;
    if (node.extendedData)
        item.extendedData = node.extendedData;
    return item;
};
/** @internal */
exports.pageOptionsUiToPresentation = (pageOptions) => {
    if (pageOptions)
        return Object.assign({}, pageOptions);
    return undefined;
};


/***/ }),

/***/ "./lib/tree/WithFilteringSupport.js":
/*!******************************************!*\
  !*** ./lib/tree/WithFilteringSupport.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
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
const React = __webpack_require__(/*! react */ "react");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
const FilteredDataProvider_1 = __webpack_require__(/*! ./FilteredDataProvider */ "./lib/tree/FilteredDataProvider.js");
__webpack_require__(/*! ./WithFilteringSupport.scss */ "./lib/tree/WithFilteringSupport.scss");
/**
 * A HOC component that adds filtering functionality to the supplied
 * tree component.
 *
 * **Note:** it is required for the tree to use [[IPresentationTreeDataProvider]]
 *
 * @public
 */
// tslint:disable-next-line: variable-name naming-convention
function treeWithFilteringSupport(TreeComponent) {
    const defaultState = {
        filteredDataProvider: undefined,
    };
    return class WithFilteringSupport extends React.Component {
        static get displayName() { return `WithFilteringSupport(${Utils_1.getDisplayName(TreeComponent)})`; }
        constructor(props, context) {
            super(props, context);
            this.state = defaultState;
        }
        static getDerivedStateFromProps(nextProps, state) {
            if (nextProps.filter === undefined || nextProps.filter === "")
                return defaultState;
            return state;
        }
        async componentDidUpdate(prevProps, _prevState) {
            const nothingChanged = this.areEqual(prevProps, this.props);
            const filterIsEmpty = !this.hasFilter;
            if (nothingChanged || filterIsEmpty) {
                let currentlyLoading = false;
                if (filterIsEmpty)
                    currentlyLoading = false;
                else if (!this.state.filteredDataProvider)
                    currentlyLoading = true;
                else
                    currentlyLoading = !this.areEqual({ dataProvider: this.state.filteredDataProvider, filter: this.state.filteredDataProvider.filter }, this.props);
                if (!currentlyLoading && this.props.onFilterApplied)
                    this.props.onFilterApplied(this.props.filter);
                return;
            }
            await this.loadDataProvider(this.props.filter);
        }
        async componentDidMount() {
            if (!this.hasFilter) {
                if (this.props.onFilterApplied)
                    this.props.onFilterApplied(this.props.filter);
                return;
            }
            await this.loadDataProvider(this.props.filter);
        }
        async loadDataProvider(filter) {
            const nodePaths = await this.props.dataProvider.getFilteredNodePaths(filter);
            if (this.props.filter !== filter)
                return;
            const filteredDataProvider = new FilteredDataProvider_1.FilteredPresentationTreeDataProvider(this.props.dataProvider, filter, nodePaths);
            if (this.props.onMatchesCounted)
                this.props.onMatchesCounted(filteredDataProvider.countFilteringResults(nodePaths));
            this.setState({ filteredDataProvider });
        }
        // tslint:disable-next-line:naming-convention
        get hasFilter() {
            return (this.props.filter !== "" && this.props.filter !== undefined);
        }
        areEqual(prop1, prop2) {
            if (prop1.filter !== prop2.filter)
                return false;
            if (prop1.dataProvider.rulesetId !== prop2.dataProvider.rulesetId || prop1.dataProvider.imodel !== prop2.dataProvider.imodel)
                return false;
            return true;
        }
        // tslint:disable-next-line:naming-convention
        get shouldDisplayOverlay() {
            if (this.hasFilter) {
                if (!this.state.filteredDataProvider)
                    return true;
                return !this.areEqual({ dataProvider: this.state.filteredDataProvider, filter: this.state.filteredDataProvider.filter }, this.props);
            }
            return false;
        }
        render() {
            const _a = this.props, { filter, dataProvider, onFilterApplied, onMatchesCounted, activeMatchIndex } = _a, props = __rest(_a, ["filter", "dataProvider", "onFilterApplied", "onMatchesCounted", "activeMatchIndex"]) /* tslint:disable-line: trailing-comma */;
            const overlay = this.shouldDisplayOverlay ? React.createElement("div", { className: "filteredTreeOverlay" }) : undefined;
            let nodeHighlightingProps;
            if (filter) {
                let activeMatch;
                if (this.state.filteredDataProvider && undefined !== activeMatchIndex)
                    activeMatch = this.state.filteredDataProvider.getActiveMatch(activeMatchIndex);
                nodeHighlightingProps = {
                    searchText: filter,
                    activeMatch,
                };
            }
            return (React.createElement("div", { className: "filteredTree" },
                React.createElement(TreeComponent, Object.assign({ dataProvider: this.state.filteredDataProvider ? this.state.filteredDataProvider : this.props.dataProvider, nodeHighlightingProps: nodeHighlightingProps }, props)),
                overlay));
        }
    };
}
exports.treeWithFilteringSupport = treeWithFilteringSupport;


/***/ }),

/***/ "./lib/tree/WithFilteringSupport.scss":
/*!********************************************!*\
  !*** ./lib/tree/WithFilteringSupport.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./WithFilteringSupport.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/tree/WithFilteringSupport.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/tree/WithUnifiedSelection.js":
/*!******************************************!*\
  !*** ./lib/tree/WithUnifiedSelection.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
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
const React = __webpack_require__(/*! react */ "react");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
/**
 * A HOC component that adds unified selection functionality to the supplied
 * tree component.
 *
 * **Note:** it is required for the tree to use [[PresentationTreeDataProvider]]
 *
 * @public
 */
// tslint:disable-next-line: variable-name naming-convention
function treeWithUnifiedSelection(TreeComponent) {
    class WithUnifiedSelection extends React.Component {
        constructor(props, context) {
            super(props, context);
            // tslint:disable-next-line:naming-convention
            this.onNodesSelected = (nodes, replace) => {
                const props = this.props;
                // give consumers a chance to handle selection changes and either
                // continue default handling (by returning `true`) or abort (by
                // returning `false`)
                if (props.onNodesSelected && !props.onNodesSelected(nodes, replace))
                    return;
                if (!this._selectionHandler)
                    return;
                if (replace)
                    this._selectionHandler.replaceSelection(this.getKeys(nodes));
                else
                    this._selectionHandler.addToSelection(this.getKeys(nodes));
            };
            // tslint:disable-next-line:naming-convention
            this.onNodesDeselected = (nodes) => {
                const props = this.props;
                // give consumers a chance to handle selection changes and either
                // continue default handling (by returning `true`) or abort (by
                // returning `false`)
                if (props.onNodesDeselected && !props.onNodesDeselected(nodes))
                    return;
                if (!this._selectionHandler)
                    return;
                this._selectionHandler.removeFromSelection(this.getKeys(nodes));
            };
            // tslint:disable-next-line:naming-convention
            this.onSelectionChanged = (args, _provider) => {
                if (args.level === 0) {
                    // note: we set the `isNodeSelected` callback to a new function which basically
                    // does the same thing, but makes sure that nested component gets re-rendered
                    this.setState({
                        isNodeSelected: this.createIsNodeSelectedCallback(),
                    });
                }
            };
            this.state = {
                isNodeSelected: this.createIsNodeSelectedCallback(),
            };
        }
        /** Returns the display name of this component */
        static get displayName() { return `WithUnifiedSelection(${Utils_1.getDisplayName(TreeComponent)})`; }
        /** Get selection handler used by this property grid */
        get selectionHandler() { return this._selectionHandler; }
        get imodel() { return this.props.dataProvider.imodel; }
        get rulesetId() { return this.props.dataProvider.rulesetId; }
        componentDidMount() {
            const name = `Tree_${counter++}`;
            const imodel = this.props.dataProvider.imodel;
            const rulesetId = this.props.dataProvider.rulesetId;
            this._selectionHandler = this.props.selectionHandler
                ? this.props.selectionHandler : new presentation_frontend_1.SelectionHandler(presentation_frontend_1.Presentation.selection, name, imodel, rulesetId);
            this._selectionHandler.onSelect = this.onSelectionChanged;
        }
        componentWillUnmount() {
            if (this._selectionHandler)
                this._selectionHandler.dispose();
        }
        componentDidUpdate() {
            if (this._selectionHandler) {
                this._selectionHandler.imodel = this.props.dataProvider.imodel;
                this._selectionHandler.rulesetId = this.props.dataProvider.rulesetId;
            }
        }
        createIsNodeSelectedCallback() {
            return (node) => this.isNodeSelected(node);
        }
        isNodeSelected(node) {
            if (!this._selectionHandler)
                return false;
            const selection = this._selectionHandler.getSelection();
            // consider node selected if it's key is in selection
            const nodeKey = this.props.dataProvider.getNodeKey(node);
            if (selection.has(nodeKey))
                return true;
            // ... or if it's an ECInstance node and instance key is in selection
            if (nodeKey.type === presentation_common_1.StandardNodeTypes.ECInstanceNode) {
                const instanceKey = nodeKey.instanceKey;
                return selection.has(instanceKey);
            }
            return false;
        }
        getKeys(nodes) {
            const nodeKeys = nodes.map((node) => this.props.dataProvider.getNodeKey(node));
            return nodeKeys.map((key) => {
                if (key.type === presentation_common_1.StandardNodeTypes.ECInstanceNode)
                    return key.instanceKey;
                return key;
            });
        }
        render() {
            const _a = this.props, { forwardedRef, selectionHandler } = _a, // do not bleed our props
            props = __rest(_a, ["forwardedRef", "selectionHandler"]) /* tslint:disable-line: trailing-comma */ // pass-through props
            ;
            return (React.createElement(TreeComponent, Object.assign({}, props, { ref: forwardedRef, selectedNodes: this.state.isNodeSelected, onNodesSelected: this.onNodesSelected, onNodesDeselected: this.onNodesDeselected })));
        }
    }
    return React.forwardRef((props, ref) => React.createElement(WithUnifiedSelection, Object.assign({}, props, { forwardedRef: ref })));
}
exports.treeWithUnifiedSelection = treeWithUnifiedSelection;
let counter = 1;


/***/ }),

/***/ "./lib/viewport/HiliteRules.json":
/*!***************************************!*\
  !*** ./lib/viewport/HiliteRules.json ***!
  \***************************************/
/*! exports provided: $schema, id, rules, default */
/***/ (function(module) {

module.exports = {"$schema":"../../node_modules/@bentley/presentation-common/Ruleset.schema.json","id":"presentation-components/HiliteRules","rules":[{"ruleType":"Content","condition":"ContentDisplayType = \"Graphics\" ANDALSO SelectedNode.IsOfClass(\"Model\", \"BisCore\")","onlyIfNotHandled":true,"specifications":[]},{"ruleType":"Content","condition":"ContentDisplayType = \"Graphics\" ANDALSO SelectedNode.IsOfClass(\"Category\", \"BisCore\")","onlyIfNotHandled":true,"specifications":[]},{"ruleType":"Content","condition":"ContentDisplayType = \"Graphics\" ANDALSO SelectedNode.IsOfClass(\"Element\", \"BisCore\")","onlyIfNotHandled":true,"specifications":[{"specType":"ContentRelatedInstances","relationships":{"schemaName":"BisCore","classNames":["ElementOwnsChildElements"]},"requiredDirection":"Forward","relatedClasses":{"schemaName":"BisCore","classNames":["Element"]},"isRecursive":true},{"specType":"SelectedNodeInstances"}]}]};

/***/ }),

/***/ "./lib/viewport/WithUnifiedSelection.js":
/*!**********************************************!*\
  !*** ./lib/viewport/WithUnifiedSelection.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UnifiedSelection */
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
const React = __webpack_require__(/*! react */ "react");
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
const presentation_common_1 = __webpack_require__(/*! @bentley/presentation-common */ "@bentley/presentation-common");
const presentation_frontend_1 = __webpack_require__(/*! @bentley/presentation-frontend */ "@bentley/presentation-frontend");
const Utils_1 = __webpack_require__(/*! ../common/Utils */ "./lib/common/Utils.js");
const ContentDataProvider_1 = __webpack_require__(/*! ../common/ContentDataProvider */ "./lib/common/ContentDataProvider.js");
const SelectionManager_1 = __webpack_require__(/*! @bentley/presentation-frontend/lib/selection/SelectionManager */ "../frontend/lib/selection/SelectionManager.js"); /* tslint:disable-line:no-direct-imports */
// tslint:disable-next-line: no-var-requires
const DEFAULT_RULESET = __webpack_require__(/*! ./HiliteRules.json */ "./lib/viewport/HiliteRules.json");
/**
 * A HOC component that adds unified selection functionality to the supplied
 * viewport component.
 *
 * @public
 */
// tslint:disable-next-line: variable-name naming-convention
function viewWithUnifiedSelection(ViewportComponent) {
    return class WithUnifiedSelection extends React.PureComponent {
        /** Returns the display name of this component */
        static get displayName() { return `WithUnifiedSelection(${Utils_1.getDisplayName(ViewportComponent)})`; }
        /** Get selection handler used by this viewport */
        get selectionHandler() {
            return this.viewportSelectionHandler ? this.viewportSelectionHandler.selectionHandler : undefined;
        }
        get imodel() { return this.props.imodel; }
        get rulesetId() { return getRulesetId(this.props.ruleset); }
        componentDidMount() {
            this.viewportSelectionHandler = this.props.selectionHandler
                ? this.props.selectionHandler : new ViewportSelectionHandler(this.props.imodel, getRuleset(this.props.ruleset));
        }
        componentWillUnmount() {
            if (this.viewportSelectionHandler) {
                this.viewportSelectionHandler.dispose();
                this.viewportSelectionHandler = undefined;
            }
        }
        componentDidUpdate() {
            if (this.viewportSelectionHandler) {
                this.viewportSelectionHandler.imodel = this.props.imodel;
                this.viewportSelectionHandler.ruleset = getRuleset(this.props.ruleset);
            }
        }
        render() {
            const _a = this.props, { ruleset, selectionHandler } = _a, // do not bleed our props
            props = __rest(_a, ["ruleset", "selectionHandler"]) /* tslint:disable-line: trailing-comma */ // pass-through props
            ;
            return (React.createElement(ViewportComponent, Object.assign({}, props)));
        }
    };
}
exports.viewWithUnifiedSelection = viewWithUnifiedSelection;
/**
 * A handler that syncs selection between unified selection
 * manager (`Presentation.selection`) and a viewport (`imodel.hilited`).
 * It has nothing to do with the viewport component itself - the
 * viewport updates its highlighted elements when `imodel.hilited`
 * changes.
 *
 * @internal
 */
class ViewportSelectionHandler {
    constructor(imodel, ruleset) {
        this._isInSelectedElementsRequest = false;
        this._asyncsInProgress = new Set();
        // tslint:disable-next-line:naming-convention
        this.onUnifiedSelectionChanged = async (args, provider) => {
            // this component only cares about its own imodel
            if (args.imodel !== this._imodel)
                return;
            // viewports are only interested in top-level selection changes
            // wip: may want to handle different selection levels?
            if (0 !== args.level)
                return;
            const selection = provider.getSelection(args.imodel, 0);
            const info = {
                providerName: args.source,
                level: args.level,
            };
            await this.applyUnifiedSelection(args.imodel, info, selection);
        };
        this._imodel = imodel;
        this._ruleset = ruleset;
        const rulesetId = getRulesetId(ruleset);
        // tslint:disable-next-line: no-floating-promises
        this.registerRuleset(ruleset);
        // handles changing and listening to unified selection
        this._selectionHandler = new presentation_frontend_1.SelectionHandler(presentation_frontend_1.Presentation.selection, `Viewport_${counter++}`, imodel, rulesetId, this.onUnifiedSelectionChanged);
        this._selectionHandler.manager.setSyncWithIModelToolSelection(imodel, true);
        // stop imodel from syncing tool selection with hilited list - we want
        // to override that behavior
        imodel.hilited.wantSyncWithSelectionSet = false;
        // handles querying for elements which should be hilited in the viewport
        this._selectedElementsProvider = new SelectedElementsProvider(imodel, rulesetId);
    }
    dispose() {
        this._selectionHandler.dispose();
        this._selectionHandler.manager.setSyncWithIModelToolSelection(this._imodel, false);
        if (this._rulesetRegistration)
            this._rulesetRegistration.dispose();
        this._ruleset = "";
    }
    async registerRuleset(ruleset) {
        if (typeof ruleset !== "object")
            return;
        const reg = await presentation_frontend_1.Presentation.presentation.rulesets().add(ruleset);
        if (this._ruleset !== ruleset)
            reg.dispose();
        else
            this._rulesetRegistration = reg;
    }
    get selectionHandler() { return this._selectionHandler; }
    get imodel() { return this._imodel; }
    set imodel(value) {
        if (this._imodel === value)
            return;
        this._selectionHandler.manager.setSyncWithIModelToolSelection(this._imodel, false);
        this._selectionHandler.manager.setSyncWithIModelToolSelection(value, true);
        this._imodel = value;
        this._imodel.hilited.wantSyncWithSelectionSet = false;
        this._selectionHandler.imodel = value;
        this._selectedElementsProvider.imodel = value;
    }
    get rulesetId() { return getRulesetId(this._ruleset); }
    set ruleset(value) {
        if (this._rulesetRegistration)
            this._rulesetRegistration.dispose();
        this.registerRuleset(value); // tslint:disable-line: no-floating-promises
        const rulesetId = getRulesetId(value);
        this._ruleset = value;
        this._selectionHandler.rulesetId = rulesetId;
        this._selectedElementsProvider.rulesetId = rulesetId;
    }
    /** note: used only it tests */
    get pendingAsyncs() { return this._asyncsInProgress; }
    async applyUnifiedSelection(imodel, selectionInfo, selection) {
        if (this._isInSelectedElementsRequest) {
            this._lastPendingSelectionChange = { info: selectionInfo, selection };
            return;
        }
        const asyncId = bentleyjs_core_1.Guid.createValue();
        this._asyncsInProgress.add(asyncId);
        this._isInSelectedElementsRequest = true;
        const ids = await this._selectedElementsProvider.getElementIds(new presentation_common_1.KeySet(selection), selectionInfo);
        try {
            imodel.hilited.clear();
            imodel.hilited.setHilite(ids, true);
        }
        finally {
            this._isInSelectedElementsRequest = false;
            this._asyncsInProgress.delete(asyncId);
        }
        if (this._lastPendingSelectionChange) {
            const change = this._lastPendingSelectionChange;
            this._lastPendingSelectionChange = undefined;
            await this.applyUnifiedSelection(imodel, change.info, change.selection);
        }
    }
}
exports.ViewportSelectionHandler = ViewportSelectionHandler;
class SelectedElementsProvider extends ContentDataProvider_1.ContentDataProvider {
    constructor(imodel, rulesetId) {
        super(imodel, rulesetId, presentation_common_1.DefaultContentDisplayTypes.Viewport);
    }
    shouldConfigureContentDescriptor() { return false; }
    getDescriptorOverrides() {
        return Object.assign({}, super.getDescriptorOverrides(), { contentFlags: presentation_common_1.ContentFlags.KeysOnly });
    }
    async getElementIds(selectionKeys, info) {
        // need to create a new set without transients
        const transientIds = new Array();
        const keys = new presentation_common_1.KeySet();
        keys.add(selectionKeys, (key) => {
            if (presentation_common_1.Key.isInstanceKey(key) && key.className === SelectionManager_1.TRANSIENT_ELEMENT_CLASSNAME) {
                transientIds.push(key.id);
                return false;
            }
            return true;
        });
        this.keys = keys;
        this.selectionInfo = info;
        const content = await this.getContent();
        if (!content)
            return transientIds;
        // note: not making a copy here since we're throwing away `transientIds` anyway
        const ids = transientIds;
        content.contentSet.forEach((r) => r.primaryKeys.forEach((pk) => ids.push(pk.id)));
        return ids;
    }
}
const getRuleset = (ruleset) => {
    if (!ruleset)
        return DEFAULT_RULESET;
    return ruleset;
};
const getRulesetId = (ruleset) => {
    ruleset = getRuleset(ruleset);
    if (typeof ruleset === "string")
        return ruleset;
    return ruleset.id;
};
let counter = 1;


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

/***/ }),

/***/ "@bentley/presentation-frontend":
/*!****************************************!*\
  !*** external "presentation_frontend" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_presentation_frontend__;

/***/ }),

/***/ "@bentley/ui-components":
/*!********************************!*\
  !*** external "ui_components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_ui_components__;

/***/ }),

/***/ "@bentley/ui-core":
/*!**************************!*\
  !*** external "ui_core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_ui_core__;

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"root":"_","commonjs2":"lodash","commonjs":"lodash","amd":"lodash"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

},[["./lib/presentation-components.js","runtime"]]]);
});
//# sourceMappingURL=presentation-components.js.map